

const Header = () => {

    const menuLink = <>
    <li><a>Service</a></li>
        
        <li><a>Portfolio</a></li>
        <li><a>Community</a></li>
        <li><a>Blog</a></li>
    </>



    return (
        <div className="bg-[#131514]">
            <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-white lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 text-white bg-[#131514] rounded-box w-52">
        {menuLink}
      </ul>
    </div>
 <img src="https://i.ibb.co/xh1MPk7/Fliqa-India-Logo-1.png" alt=""  className="hidden md:block"/>
  </div>
  <div className="navbar-start -ms-52 hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white ">
    {menuLink}
    </ul>
  </div>
  <div className="navbar-end">
    <div className="flex gap-4">
    <button>
       
       <img src="https://i.ibb.co/wNLjwVC/Rectangle-219.png" alt="" className="relative" />
       <span className="absolute text-white -mt-9 -ms-5">Sign Up</span>
   </button>
   <button>
       
        <img src="https://i.ibb.co/wNLjwVC/Rectangle-219.png" alt="" className="relative" />
        <span className="absolute text-white -mt-9 -ms-6">Sign In</span>
    </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;