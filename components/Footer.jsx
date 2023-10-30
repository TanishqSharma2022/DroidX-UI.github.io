const Footer = () => {
    return(
    <>

        <div className=" w-full p-4 md:p-12 h-[50vh] bg-secondary ">
            <div className="flex md:flex-row flex-col justify-between  w-full">
                <div className="text-xl gap-4 flex flex-col md:tracking-widest font-sans">
                    Want to participate?
                    <button className="p-4 rounded-full border text-lg border-black text-black">
                        Apply for maintainership
                    </button>
                </div>
                <div className="mt-5 flex gap-4 md:flex-row flex-col md:text-xl font-bold">
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