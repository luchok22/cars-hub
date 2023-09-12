import Link from "next/link";
import Image from "next/image";
import ReusableButton from "../ReusableButton/ReusableButton";
const Header = () => {
    return (
        <div className="w-full absolute z-10">
            <div className="max-w-[1400px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                <Link href="/" className="flex justify-center items-start">
                    <Image src='/logo.svg' alt="logo" width={118} height={18} className="object-contain"/>
                </Link>
                <ReusableButton btnType="button" title="Sign in" styles="text-primary-blue rounded-full bg-white min-w-[130px]"/>
            </div>
        </div>
    );
};

export default Header;