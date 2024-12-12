import { link } from "fs";
import { Album, ContactRound, HomeIcon, Shield, ShieldQuestion, TagIcon } from "lucide-react";
import { ReactNode } from "react";

export const menuSideBar: Array<{ icon: ReactNode, label: string, link: string }> = [
  {
    icon: <HomeIcon />,
    label: "Inicio",
    link: "/",
  },
  {
    icon: <TagIcon />,
    label: "Categorias",
    link: "/categorias",
  },
  {
    icon: <ShieldQuestion />,
    label: "Tipo de Seguro",
    link: "/tipo-seguro",
  },
  {
    icon: <Album />,
    label: "Tipo de apolice",
    link: "/tipo-apolice",
  },
]
