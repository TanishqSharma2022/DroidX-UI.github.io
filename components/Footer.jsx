const Footer = () => {
    return(
    <>

        <div className=" w-full p-4 md:p-12 h-[50vh] bg-secondary ">
            <div className="flex md:flex-row flex-col justify-between  w-full">
                <div className="text-xl gap-4 flex flex-col  font-sans">
                    Want to participate?
                    <button className="px-4 py-2 rounded-full border text-sm border-black text-black">
                        Apply for maintainership
                    </button>
                </div>
                <div className="flex gap-4 md:flex-row flex-col md:text-xl ">
                        <a>About</a>
                        <a>Team</a>
                        <a>Privacy policy</a>

                </div>
            </div>
        </div>
    </>
    )
}

export default Footer;