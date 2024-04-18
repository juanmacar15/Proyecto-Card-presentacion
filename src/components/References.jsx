import { Header } from "./Header";

export const References = () => {
    return (
        <div className=" w-full ">
            <p className=" text-White text-[12px] text-center">"Front-end developer and avid reader."</p>
            <div className="text-center">
                <p className="py-[8px] my-[10px] rounded-md bg-GrayButton cursor-pointer text-White font-bold text-[12px] hover:bg-Green hover:text-GrayButton"> <a href={Header} target="_blank">Frontend Mentor</a></p>
                <p className="py-[8px] my-[10px] rounded-md bg-GrayButton cursor-pointer text-White font-bold text-[12px] hover:bg-Green hover:text-GrayButton"> <a href={Header} target="_blank">Linkedin</a></p>
                <p className="py-[8px] my-[10px] rounded-md bg-GrayButton cursor-pointer text-White font-bold text-[12px] hover:bg-Green hover:text-GrayButton"> <a href={Header} target="_blank">Twitter</a></p>
                <p className="py-[8px] my-[10px] rounded-md bg-GrayButton cursor-pointer text-White font-bold text-[12px] hover:bg-Green hover:text-GrayButton"> <a href={Header} target="_blank">Instagram</a></p>
            </div>

        </div>
    );
};
