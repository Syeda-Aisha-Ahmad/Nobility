

export default function About() {
    return (
        <div className='flex flex-col lg:flex-row h-[600px] max-w-[1400px] mx-auto gap-10 px-5 md:px-14 lg:px-28 py-16'>
            {/* left */}
            <div className='lg:w-6/12'>
                <h1 className='text-3xl font-bold mb-4 text-slate-800'>About Nobility</h1>
                <p className='mb-4 text-slate-700'>Nobility is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.</p>
                <p className='mb-4 text-slate-700'>
                    Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
                </p>
                <p className='mb-4 text-slate-700'>Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.</p>
            </div>

            {/* right */}
            <div className='lg:w-8/12 flex gap-5 relative'>
                <div className='sticky lg:absolute right-80 bottom-[-50px] w-[300px]'>
                    <img className='rounded-none' src="https://images.adsttc.com/media/images/649c/35f3/5921/186b/f076/0671/medium_jpg/coeru-shibuya-offices-and-commercial-building-maeda-corporation_13.jpg?1687959059" alt="" />
                </div>

                <div className='sticky lg:absolute right-0 bottom-[10px] w-[300px]'>
                    <img className='rounded-none' src="https://images.adsttc.com/media/images/649c/35f8/5921/186b/f076/0674/medium_jpg/coeru-shibuya-offices-and-commercial-building-maeda-corporation_11.jpg?1687959062 " alt="" />
                </div>

            </div>
        </div>
    )
}
