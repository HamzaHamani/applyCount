function NavBar() {
  return (
    <nav className="absolute z-10 top-0 grid grid-cols-custom w-[100%] border-b border-textBlack bg-transparent h-24">
      <div className="bg-textBlack font-semibold tracking-tight  text-[24px] cursor-pointer hover:bg-[#333]  transition-all   text-bgMain flex justify-center items-center">
        ApplyCounter
      </div>
      <div className="b border-r-2 border-textBlack flex items-center justify-center">
        <ul className="flex text-textBlack text-2xl  gap-10 ">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Pricing</li>
        </ul>
      </div>
      <div className="bg-textBlack font-semibold  text-[24px] cursor-pointer hover:bg-[#333]  transition-all   text-bgMain flex justify-center items-center">
        SIGN IN
      </div>
    </nav>
  );
}

export default NavBar;
