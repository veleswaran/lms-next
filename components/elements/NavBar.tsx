const NavBar = () => {
  return (
    <>
      <nav className="bg-white " style={{backgroundColor:"#2c2f31"}}>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="/dashboard"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="./images/altalya_logo.png"
              className="h-12"
              alt="Altalya Logo"
              
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Altalya
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="tel:5541251234"
              className="text-3xl text-gray-500 dark:text-white hover:underline"
            >
              Java Mastery
            </a>
          
          </div>
        </div>
      </nav>
     
    </>
  );
};


export default NavBar;