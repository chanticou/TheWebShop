import { NavBar } from "../NavBar/index";
import { WhatsAppLink } from "../WhatsAppLink/WhatsAppLink";
import { Loader } from "../Loader/index";
import { ContentDivs } from "../ContentDivs/index";

export const Main = () => {
  return (
    <>
      <div
        style={{
          fontFamily: "facultadregular, Georgia, sans-serif",
        }}
      >
        <Loader />
        <NavBar />
        <WhatsAppLink />
        <ContentDivs />
      </div>
    </>
  );
};
