interface IMenu {
  path: string;
  label: string;
}

export const headerMenu: IMenu[] = [
  {
    path: "/",
    label: "Homepage",
  },
  {
    path: "/incubator",
    label: "TechYouth Incubator",
  },
  {
    path: "team",
    label: "Our Team",
  },
];
