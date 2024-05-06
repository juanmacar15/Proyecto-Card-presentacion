import img from "../assets/images/juanmacar.jpg"
import { References } from './References'


export const Header = () => {

    const refs = [
        {
            titulo: 'Instagram',
            link: 'https://www.instagram.com/juanmacar15/'
        },
        {
            titulo: 'X',
            link: 'https://twitter.com/juanmacar_'
        },
        {
            titulo: 'GitHub',
            link: 'https://github.com/juanmacar15'
        },
        {
            titulo: 'Linkedin',
            link: 'https://www.linkedin.com/in/juanmacar/'
        }
    ]

    return (
        <div className="bg-DarkGrey w-[326px] sm:w-[386px] m-auto mt-[116px] sm:mt-[116px] rounded-xl">
                <div className=" flex flex-col items-center p-[40px] ">
                    <img className=" w-[92px] rounded-full hover:scale-[1.5] duration-500 mb-5" src={img} alt="Image_profile" />
                    <p className="text-White text-[22px] font-bold">Juan David Madrid</p>
                    <p className="text-Green text-[12px] font-bold leading-7 ">Curumani - Cesar - Colombia</p>
                    <p className=" text-White text-[12px] text-center">"El código funciona, no sé por qué"</p>
                    < References titulo={refs[0].titulo} link={refs[0].link} />
                    < References titulo={refs[1].titulo} link={refs[1].link} />
                    < References titulo={refs[2].titulo} link={refs[2].link} />
                    < References titulo={refs[3].titulo} link={refs[3].link} />
                </div>
            </div>
    )
}


