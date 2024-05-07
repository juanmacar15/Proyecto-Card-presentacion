
export const References = ({ titulo, link }) => {
    return (
        <div className=" w-full ">
                <div className="text-center">
                    <a href={link} target="_blank">
                        <p className=" p-3 my-[5px] rounded-md bg-GrayButton cursor-pointer text-White font-bold text-[12px] hover:text-black hover:bg-gradient-to-r from-lime-900 via-lime-500 to-lime-900 hover:duration-500">{titulo}</p>
                    </a>
                </div>
            </div>
    );
};
