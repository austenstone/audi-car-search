export interface Consumption {
  city: string;
  highway: string;
}

export interface Dealer {
  city: string;
  id: string;
  localDealerId: string;
  name: string;
  phoneMobile: string;
  state: string;
  street: string;
  website: string;
  zipCode: string;
}

export interface ExteriorColor {
  generic: string;
  imageUrl: string;
  marketingName: string;
}

export interface InteriorColor {
  generic: string;
  imageUrl: string;
  marketingName: string;
}

export interface ProfileImage {
  height: number;
  imageUrl: string;
  width: number;
}

export class AudiCar {
  askingPrice: string;
  body: string;
  bodyStyle: string;
  carline: string;
  consumption: Consumption;
  cpo: boolean;
  dealer: Dealer;
  distance: number;
  drivetrain: string;
  engine: string;
  exteriorColor: ExteriorColor;
  href: string;
  id: string;
  inTransit: string;
  interiorColor: InteriorColor;
  isExactMatch: string;
  mileage: string;
  model: string;
  profileImage: ProfileImage;
  transmission: string;
  trim: string;
  vin: string;
  weblink: string;
  year: number;
}
