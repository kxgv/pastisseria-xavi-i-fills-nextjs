import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts/fonts';
import Image from "next/image";

export default function Navbar() {
    return (
        <nav>
            <div
                className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
            >
                <Image
                    aria-hidden
                    src="/logo/logo.svg"
                    alt="File icon"
                    width={80}
                    height={60}
                />
                <p className="text-[38px] sm:text-[50px] md:text-[70px] lg:text-[100px] xl:text-[120px] ml-12">
                    Pastisseria Xavi i fills
                </p>
            </div>
        </nav>

    );
}