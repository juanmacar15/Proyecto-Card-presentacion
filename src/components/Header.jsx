import img from "../assets/images/juanmacar.jpg"
import { References } from './References'

export const Header = () => {
    return (
        <main className="bg-DarkGrey w-[326px] sm:w-[386px] m-auto mt-[116px] sm:mt-[116px] rounded-xl">
            <div className=" flex flex-col items-center p-[40px] ">
                <img className=" w-[92px] rounded-full" src={img} alt="Image_profile" />
                <p className="text-White text-[22px] font-bold">Juan David Madrid</p>
                <p className="text-Green text-[12px] font-bold leading-7 ">Curumani - Cesar - Colombia</p>
                < References />
            </div>
        </main>
    )
}


