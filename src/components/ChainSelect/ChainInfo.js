import { PolygonLogo, ETHLogo } from "./Logos";

const chains = [
  {
    key: "0x4",
    id: "4",
    value: "Rinkeby Testnet",
    shortname: "rinkeby",
    explorer: "https://rinkeby.etherscan.io/",
    icon: <ETHLogo />,
  },
  {
    key: "0x13881",
    id: "80001",
    value: "Mumbai Testnet",
    shortname: "mumbai",
    explorer: "https://mumbai.polygonscan.com/",
    icon: <PolygonLogo />,
  },
];

export default chains