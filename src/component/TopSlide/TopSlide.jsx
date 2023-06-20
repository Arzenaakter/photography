

const TopSlide = () => {
    return (
        <>
        <div className=" mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-4 mb-10">
            {/*  */}
            <div className="flex justify-center items-center gap-4">
                <img src="https://i.ibb.co/vv7HrDS/1.png" alt="" className="w-2/4"/>
                <div className="">
                    <h2 className="font-semibold ">Verified Reviews</h2>
                    <p className="text-[12px]" >For Verified Reviewers</p>
                </div>
            </div>
            {/*  */}
            <div className="flex justify-center items-center gap-4">
                <img src="https://i.ibb.co/NsZXGf1/2.png" alt=""  className="w-2/4"/>
                <div>
                    <h2 className="font-semibold ">Top Articles</h2>
                    <p className="text-[12px]">Helps you decide</p>
                </div>
            </div>
            {/*  */}
            <div className="flex justify-center items-center gap-4">
                <img src="https://i.ibb.co/XSWB8Mz/3.png" alt="" className="w-2/4" />
                <div>
                    <h2 className="font-semibold ">Write Share Win Contest</h2>
                    <p className="text-[12px]">Earn cash for reviews</p>
                </div>
            </div>
            {/*  */}
            <div className="flex justify-center items-center gap-4">
                <img src="https://i.ibb.co/Fw6dL1P/4.png" alt="" className="w-2/4" />
                <div >
                    <h2 className="font-bold ">MouthShut for Brands</h2>
                    <p  className="text-[12px]">Request a demo</p>
                </div>
            </div>
            
        </div>
       <div className="flex justify-center  mb-10">
            <img src="https://i.ibb.co/dBvrzc2/Line-42.png" alt="" className="w-3/4"/>
        </div>
        
        </>
    );
};

export default TopSlide;