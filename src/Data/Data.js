// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilHeart,
  UilShoppingCartAlt,
  UilShoppingBasket,
  UilUserCircle,
  UilApps,
  UilAngleDoubleDown ,
  UilBold 
} from "@iconscout/react-unicons"

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons"

// Recent Card Imports
import img1 from "../imgs/img1.png"
import img2 from "../imgs/img2.png"
import img3 from "../imgs/img3.png"

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Inico",
    subNav: false,
    link: false,
  },
  {
    icon: UilApps,
    iconOpened: UilBold,
    heading: "Categorias",
    link: false,
    subNav: true,
  },
  {
    icon: UilHeart,
    heading: "Favoritos",
    subNav: false,
    link: false,
  },
  {
    icon: UilShoppingCartAlt,
    heading: "Carrito",
    subNav: false,
    link: "/app/cart/",
  },
  {
    icon: UilShoppingBasket,
    heading: "Mis compras",
    subNav: false,
    link: false,
  },
  {
    icon: UilUserCircle,
    subNav: false,
    heading: "Perfil",
    link: false,
  },
]

// Analytics Cards Data
export const cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
]

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
]
