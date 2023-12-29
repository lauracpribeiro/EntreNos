export enum SelectedPage {
  Home = "home",
  Drafts = "riscos",
  ReadyToBuy = "prontaentrega",
  Order = "encomenda",
  ContactUs = "contato",
}

export interface DraftType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
