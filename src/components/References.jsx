import { Header } from "./Header";

export const References = () => {
    return (
        <div className=" w-full ">
            <p className=" text-White text-[12px] text-center">"El código funciona, no sé por qué"</p>
            <div className="text-center">
                <a href="https://www.instagram.com/juanmacar15/" target="_blank">
                    <p className="py-[8px] my-[10px] rounded-md bg-GrayButton cursor-pointer text-White font-bold text-[12px] hover:bg-Green hover:text-GrayButton">Instagram</p>
                </a>
                <a href="https://github.com/juanmacar15" target="_blank">
                    <p className="py-[8px] my-[10px] rounded-md bg-GrayButton cursor-pointer text-White font-bold text-[12px] hover:bg-Green hover:text-GrayButton">GitHub</p>
                </a>
                <a href="https://twitter.com/juanmacar_" target="_blank">
                    <p className="py-[8px] my-[10px] rounded-md bg-GrayButton cursor-pointer text-White font-bold text-[12px] hover:bg-Green hover:text-GrayButton">Twitter</p>
                </a>
                <a href="https://www.linkedin.com/in/juanmacar/" target="_blank">
                    <p className="py-[8px] my-[10px] rounded-md bg-GrayButton cursor-pointer text-White font-bold text-[12px] hover:bg-Green hover:text-GrayButton">Linkedin</p>
                </a>
            </div>

        </div>
    );
};
