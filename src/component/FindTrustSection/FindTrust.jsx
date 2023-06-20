import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';

const FindTrust = () => {
    return (
        <div className="mb-10 relative w-full h-[400px]">
            <img src="https://i.ibb.co/c1R3Lfh/find.png" alt="" className="w-full h-full " />
            <div className="-mt-[380px] ms-10 absolute flex justify-between  w-[1140px] ">
                <div>
                <h1 className="text-4xl font-bold text[#4C696D]">Find Trusted Associate </h1>
                    <p>Find the best Fliqa Associate for your spacial day</p>
                </div>
                <p className="flex justify-center items-center"> See More <MdOutlineArrowForwardIos /> <MdOutlineArrowForwardIos /></p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 my-10 -mt-72 gap-2 px-5">

{/* card 1 */}
            <div className="card card-compact w-full  bg-[#2C2C2C] shadow-xl">
  <figure><img src="https://i.ibb.co/KbKrBDN/w1.png"  className='w-full'/></figure>
  <div className="card-body ">
  <div className="card-actions justify-between">
    <div>
   < h2 className="card-title text-white">Name Title</h2>
    <p className='text-white '>Location :</p>
    </div>
  
      <img src="https://i.ibb.co/yPv7fWw/v.png" alt="" className='w-20' />
    </div>
  </div>
</div>
{/* card 2 */}
            <div className="card card-compact w-full bg-[#2C2C2C] shadow-xl">
  <figure><img src="https://i.ibb.co/g4t13n8/w2.png"  className='w-full'/></figure>
  <div className="card-body">
  <div className="card-actions justify-between">
    <div>
   < h2 className="card-title text-white">Name Title</h2>
    <p className='text-white '>Location :</p>
    </div>
  
      <img src="https://i.ibb.co/yPv7fWw/v.png" className='w-20' />
    </div>
  </div>
</div>
{/* card 3 */}
            <div className="card card-compact w-full bg-[#2C2C2C] shadow-xl">
  <figure><img src="https://i.ibb.co/GTrZhVb/w3.png"  className='w-full'/></figure>
  <div className="card-body">
  <div className="card-actions justify-between">
    <div>
   < h2 className="card-title text-white">Name Title</h2>
    <p className='text-white '>Location :</p>
    </div >
  
     <p className='text-white flex ms-8 gap-2 '>5.0 <FaStar></FaStar></p>
    </div>
  </div>
</div>
{/* card 4 */}
            <div className="card card-compact w-full bg-[#2C2C2C] shadow-xl">
  <figure><img src="https://i.ibb.co/r7K78Q6/w5.png"  className='w-full'/></figure>
  <div className="card-body">
  <div className="card-actions justify-between">
    <div>
   < h2 className="card-title text-white">Name Title</h2>
    <p className='text-white '>Location :</p>
    </div>
  
      <img src="https://i.ibb.co/yPv7fWw/v.png" className='w-20'/>
    </div>
  </div>
</div>
{/* card 5 */}
            <div className="card card-compact w-full bg-[#2C2C2C] shadow-xl">
  <figure><img src="https://i.ibb.co/4mr2Ypx/w6.png"  className='w-full'/></figure>
  <div className="card-body">
  <div className="card-actions justify-between">
    <div>
   < h2 className="card-title text-white">Name Title</h2>
    <p className='text-white '>Location :</p>
    </div>
  
    <p className='text-white flex ms-8 gap-2 '>5.0 <FaStar></FaStar></p>
    </div>
  </div>
</div>





            </div>
            
        </div>
    );
};

export default FindTrust;