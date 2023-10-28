const Footer = () => {
    return(
    <>

        <div className=" w-full p-12 h-[50vh] bg-secondary ">
            <div className="flex justify-between w-full">
                <div className="text-xl gap-4 flex flex-col tracking-widest font-sans">
                    Want to participate?
                    <button className="p-4 rounded-full border text-lg border-black text-black">
                        Apply for maintainership
                    </button>
                </div>
                <div className="flex gap-4 text-xl font-bold">
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