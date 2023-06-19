const Hero = () => {
  return (
    <div className="space-y-8 mx-auto ">
      <img src="https://i.ibb.co/wh1HZx0/image-5.png" alt="" />
      <img
        src="https://i.ibb.co/2g1xBms/India-s-Leading-Creative-Platform.png"
        alt=""
        className="w-3/4 mx-auto"
      />
      <img
        src="https://i.ibb.co/fq1DnH1/Experience-hassle-free-bookings-Trusted-by-2500-Customers.png"
        className="w-2/3 mx-auto"
        alt=""
      />
      <button className=" flex justify-center items-center relative">
        <div>
          <img
            src="https://i.ibb.co/KD7rrfD/Rectangle-116.png"
            className="mx-auto w-3/4 relative"
            alt=""
          />
          <span className="absolute -mt-6 -ms-52">Search service, blog and many more…</span>
          <div className="ms-40">
            <img src="https://i.ibb.co/QCMSMR7/Rectangle-117.png" alt=""  className=""/>
            <span className="absolute -mt-6 -ms-52">Search</span>

        </div>
        </div>
       
      </button>
    </div>
  );
};

export default Hero;
