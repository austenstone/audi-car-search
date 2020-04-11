import http.client
from urllib.parse import urlencode
import json

carList = []

def getValidZipCodes():
    conn = http.client.HTTPSConnection("gist.githubusercontent.com")
    conn.request("GET", "/dryan/7486408/raw/dda158f44480f8c433dc8fd1db9c07ed9aadf989/valid-zips.json")

    res = conn.getresponse()
    data = res.read()

    return json.loads(data.decode("utf-8"))

def getDealers(zip):
    conn = http.client.HTTPSConnection("www.audiusa.com")
    conn.request("GET", "/dealers-webapp/map/get/zip/" + zip + "/ids")

    res = conn.getresponse()
    data = res.read()

    return json.loads(data.decode("utf-8"))

def findCar(dealerId, year, model):
    params = urlencode({
        "pageNumber":  1, 
        "pageItems": 100, 
        "sort": "PRICE_SALE",
        "sortDirection": "ASC", 
        "matchType": "EXACT"
    })

    conn = http.client.HTTPSConnection("www.audiusa.com")

    conn.request("GET", "/vtp-service/v2/search/car;t_partner=" + dealerId + ";;t_model=" + model + ";t_smy=" + year + "/cpo", params)


    res = conn.getresponse()
    data = res.read()

    return json.loads(data.decode("utf-8"))

def addCar(car, vin):
    carList.append(car)
    print("Added " + vin + "!")

dealerIds = []
validZipCodes = getValidZipCodes()
numberOfZipCodes = str(len(validZipCodes))
# with open('zips.txt', 'w') as file:
#     file.write(json.dumps(validZipCodes, indent=4, sort_keys=True))

dealerIds = []
with open('dealerIds.txt', 'r', encoding="utf-8") as file:
    dealerIds = json.loads(file.read(9999))

for index, zipCode in enumerate(validZipCodes):
    if index < 23590:
        continue
    print(str(index) + " / " + numberOfZipCodes)
    dealers = getDealers(str(zipCode).zfill(5))
    for dealer in dealers['payload']:
        cleanDealerId = dealer[1:]
        if cleanDealerId not in dealerIds:
            dealerIds.append(cleanDealerId)
    if index % 500 == 0:
        with open('dealerIds.txt', 'w') as file:
            file.write(json.dumps(dealerIds, indent=4, sort_keys=True))
# print(dealerIds)
# for dealerId in dealerIds:

#         cars = findCar("USA" + dealerId, "2016", "AADD")    
#         if cars["total"] > 0:
#             for car in cars["cars"]:
#                 addCar(car, car["vin"])

# print(carList)
# print("Found " + str(len(carList)) + " Cars")
# with open('cars.txt', 'w') as file:
#     file.write(json.dumps(carList, indent=4, sort_keys=True))