import React from 'react'
import { useNavigate } from 'react-router-dom';
import { HiOutlineReceiptRefund, HiOutlineShoppingBag, HiOutlineUser } from 'react-icons/hi';
import { AiOutlineCreditCard, AiOutlineLogin } from 'react-icons/ai';
import { TbAddressBook } from 'react-icons/tb';
import "./Sidebar.css";

const ProfileSidebar = ({setActive, active}) => {
    const navigate = useNavigate();
  return (
    <div className='profile'>
        <div className="flex items-center cursor-pointer w-full mb-8" onClick={() => setActive(1)}>
            <HiOutlineUser size={20} color={active === 1 ? "red" : "" }/>
            <span className={`pl-3 ${active === 1 ? "text-[red]" : ""}`}>
                Profile
            </span>
        </div>
        <div className="flex items-center cursor-pointer w-full mb-8" onClick={() => setActive(2)}>
            <HiOutlineShoppingBag size={20} color={active === 2 ? "red" : "" }/>
            <span className={`pl-3 ${active === 2 ? "text-[red]" : ""}`}>
                Orders
            </span>
        </div>
        <div className="flex items-center cursor-pointer w-full mb-8" onClick={() => setActive(3)}>
            <HiOutlineReceiptRefund size={20} color={active === 3 ? "red" : "" }/>
            <span className={`pl-3 ${active === 3 ? "text-[red]" : ""}`}>
                Refunds
            </span>
        </div>
        
        <div className="flex items-center cursor-pointer w-full mb-8" onClick={() => setActive(4)}>
            <AiOutlineCreditCard size={20} color={active === 4 ? "red" : "" }/>
            <span className={`pl-3 ${active === 4 ? "text-[red]" : ""}`}>
                Payment Methods
            </span>
        </div>
        <div className="flex items-center cursor-pointer w-full mb-8" onClick={() => setActive(5)}>
            <TbAddressBook size={20} color={active === 5 ? "red" : "" }/>
            <span className={`pl-3 ${active === 5 ? "text-[red]" : ""}`}>
                Address
            </span>
        </div>
        <div className="flex items-center cursor-pointer w-full mb-8" onClick={() => setActive(6)}>
            <AiOutlineLogin size={20} color={active === 6 ? "red" : "" }/>
            <span className={`pl-3 ${active === 6 ? "text-[red]" : ""}`}>
                Log Out
            </span>
        </div>
    </div>
  )
}

export default ProfileSidebar