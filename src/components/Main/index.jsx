import { NavBar } from "../NavBar/index";
import { WhatsAppLink } from "../WhatsAppLink/WhatsAppLink";
import { Loader } from "../Loader/index";

export const Main = () => {
  return (
    <>
      <Loader />
      <NavBar />
      <WhatsAppLink />
    </>
  );
};
