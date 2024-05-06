
export const References = ({ titulo, link }) => {
    return (
        <div className=" w-full ">
                <div className="text-center">
                    <a href={link} target="_blank">
                        <p className=" p-3 my-[5px] rounded-md bg-GrayButton cursor-pointer text-White font-bold text-[12px] hover:text-black hover:bg-gradient-to-r from-Green to-lime-900 duration-300">{titulo}</p>
                    </a>
                </div>
            </div>
    );
};
