import MainContent from "@/components/MainContent";
import Logo from "../assets/logo-small.png";

const QuestionsPage = () => {
  return (
    <div className="flex flex-col mx-auto size-full md:p-12 p-4 bg-[#A5DFEF]">
      <div className="fixed top-0 left-0 w-full h-full bg-[url('./assets/background.png')] md:bg-[url('./assets/background.jpg')] bg-cover z-0"></div>
      <header className="relative md:mb-8 flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-4 z-1">
        <nav
          className="w-full px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex md:w-full items-center justify-center max-w-56 md:max-w-md mx-auto">
            <img src={Logo} />
          </div>
        </nav>
      </header>
      <MainContent />
    </div>
  );
};

export default QuestionsPage;
