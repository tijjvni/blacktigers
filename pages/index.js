import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div classNameName={styles.container}>
      <Head>
        <title>Black Tigers Security</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main className={styles.main}>
            <div className="bg-gray-100">
            <div className="px-8 md:px-16 lg:px-32">
                <div className="grid grid-cols-12 pt-8">
                    <header className="col-span-4">
                        <div>
                            <a href="index.html">
                                <h1 className="text-4xl">Logo</h1>
                            </a>
                        </div>
                    </header>
                    <div className="col-span-7 md:hidden"></div>
                    <div id="burger" className="col-span-1 cursor-pointer md:hidden">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16">
                            </path>
                        </svg>
                    </div>
                    <nav id="menu" className="col-span-12 lg:col-span-8 my-3 hidden md:block">
                        <ul className="md:grid md:grid-cols-2">
                            <div className="md:flex md:justify-between">
                                <li className="my-2 md:inline md:my-0"><a href="#">Services</a></li>
                                <li className="my-2 md:inline md:my-0"><a href="#">About Us</a></li>
                                <li className="my-2 md:inline md:my-0"><a href="#">Contact</a></li>
                            </div>
                            <div className="md:flex md:justify-end">
                                <li className="my-2 md:inline md:my-0">
                                    <a href="#" className="md:px-4 md:py-2 md:rounded-md md:bg-gray-500 md:text-white">Get in touch</a>
                                </li>
                            </div>
                        </ul>
                    </nav>
                </div>
                <div className="my-4">
                    <div className="grid grid-cols-4">
                        <div className="pr-6 py-8 md:py-16 col-span-4 md:col-span-2 ">
                            <h2 className="text-4xl md:text-6xl font-semibold tracking-wide leading-normal text-primary">
                                GET SECURED & PROTECTED                            
                            </h2>
                            <p className="py-6 text-xl leading-normal">
                                At Black Tiger we got you covered. We have a high expertise in Physical security, Protective Security, Trained Patrol Dogs, Access Control & Equipment, Protocol Services...
                            </p>
                            <div className="py-4 lg:py-0">
                                <a href="#" className="bg-gray-500 text-white rounded-md px-9 py-4 font-semibold">
                                    <svg className="w-6 h-6 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z">
                                        </path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    Watch Video
                                </a>
                            </div>
                        </div>
                        <div className="px-3 col-span-4 order-first md:col-span-2 md:order-1 lg:col-span-1">
                            <Image src="/hero4.jpeg" alt="Black Tiger's Security" width={500} height={1000} className="h-112 mt-5 w-full object-cover rounded-tl-big rounded-br-big"/>
                        </div>
                        <div className="pl-3 hidden order-2 lg:block">
                            <Image src="/hero3.jpg" alt="Black Tiger's Security" width={500} height={475} className="h-60 w-full mb-3 object-cover rounded-tl-big rounded-br-big"/>
                            <Image src="/hero2.jpg" alt="Black Tiger's Security" width={500} height={475} className="h-60 w-full mb-3 object-cover rounded-tl-big rounded-br-big"/>
                        </div>
                    </div>
                </div>
            </div>
            </div>        
            
            <div className="px-8 md:px-16 lg:px-32 py-10 md:py-20">
                <div>
                    <h3 className="text-4xl font-medium my-4">WHO WE ARE</h3>
                    <p>
                        We are an indigenous Nigerian Security compan with Corporate Affairs Commission (CAC) registration(RC1408582) 
                        and licensed with Federal Ministry of Interrior through the Nigerian Civil Defense Corps and other security agencies. 
                    </p>
                </div>
                <div className="my-8 grid grid-cols-3 gap-4">
                    <div className="border-2 shadow-md rounded-md p-6 col-span-3 md:col-span-1">                    
                        <Image src="/mission.svg" alt="Black Tiger's Security" width={50} height={50} className="p-2 bg-primary text-white rounded-md flex items-stretch"/>

                        <h4 className="my-6 text-2xl">Mission</h4>
                        <p>A give n quality services at competative rate and delivery of our services and solution to our clients at the best price and to become world standard in the security industry.</p>
                    </div>
                    
                    <div className="border-2 shadow-md rounded-md p-6 col-span-3 md:col-span-1">                    
                        <Image src="/vision.svg" alt="Black Tiger's Security" width={50} height={50} className="p-2 bg-primary text-white rounded-md flex items-stretch"/>

                        <h4 className="my-6 text-2xl">Vision</h4>
                        <p>Our Vision is to become repectable and leading suppliers of security services in Nigeria, delivering beyond expectation always.</p>
                    </div>
                    
                    <div className="border-2 shadow-md rounded-md p-6 col-span-3 md:col-span-1">                    
                        <Image src="/values.svg" alt="Black Tiger's Security" width={50} height={50} className="p-2 bg-primary text-white rounded-md flex items-stretch"/>

                        <h4 className="my-6 text-2xl">Values</h4>
                        <p>A give n quality services at competative rate and delivery of our services and solution to our clients at the best price and to become world standard in the security industry.</p>
                    </div>
                    
                </div>
            </div>
            <div className="px-8 md:px-16 lg:px-32 py-10 md:py-20 bg-gray-100">
                <p className="text-xl">Some of our clients</p>
                <div className="my-6 flex flex-wrap justify-evenly">
                    <Image src="/clients/edijen.webp" alt="Black Tiger's Security" width={300} height={150} className=" ob"/>
                    <Image src="/clients/kdsq.webp" alt="Black Tiger's Security" width={150} height={150} className=" obje"/>
                    <Image src="/clients/aa-rano.png" alt="Black Tiger's Security" width={150} height={150} className=" obje"/>
                    <Image src="/clients/shafa.png" alt="Black Tiger's Security" width={300} height={150} className=" obje"/>
                </div>
            </div>
            <div className="px-8 md:px-16 lg:px-32 py-10 md:py-20">
                <div className="grid grid-cols-2">
                    <div className="mr-10 md:mr-0 col-span-2 sm:col-span-1">
                        <h3 className="text-3xl font-semibold my-6">Our Services</h3>
                        <p>We provide an array of security services that includes!</p>
                
                        <div className="flex my-4">
                            <div className="w-12 h-2 bg-gray-500 mt-2 mr-8"></div>
                            <span>Physical Security</span>
                        </div>
                        <div className="flex my-4">
                            <div className="w-12 h-2 bg-gray-500 mt-2 mr-8"></div>
                            <span>Protective Security</span>
                        </div>
                        <div className="flex my-4">
                            <div className="w-12 h-2 bg-gray-500 mt-2 mr-8"></div>
                            <span>Security Management</span>
                        </div>
                        <div className="flex my-4">
                            <div className="w-12 h-2 bg-gray-500 mt-2 mr-8"></div>
                            <span>Private Investigators</span>
                        </div>
                        <div className="flex my-4">
                            <div className="w-12 h-2 bg-gray-500 mt-2 mr-8"></div>
                            <span>Security Education</span>
                        </div>
                        <div className="flex my-4">
                            <div className="w-12 h-2 bg-gray-500 mt-2 mr-8"></div>
                            <span>Electronic Security Gadgets</span>
                        </div>
                        <div className="flex my-4">
                            <div className="w-12 h-2 bg-gray-500 mt-2 mr-8"></div>
                            <span>Transportation</span>
                        </div>
                        <div className="flex my-4">
                            <div className="w-12 h-2 bg-gray-500 mt-2 mr-8"></div>
                            <span>Risk Management</span>
                        </div>
                        <div className="flex my-4">
                            <div className="w-12 h-2 bg-gray-500 mt-2 mr-8"></div>
                            <span>Human Resourcing</span>
                        </div>

                    </div>
                    <Image src="/dog.png" alt="Black Tiger's Security Dog" width={800} height={750} className="col-span-2 sm:col-span-1"/>
                </div>
            </div>
            <div className="px-8 md:px-16 lg:px-32 py-10 md:py-20 text-center">
                <div className="bg-gray-500 text-white rounded-md p-10">
                    <h3 className="text-3xl">Contact Us</h3>
                    <p className="my-4">Send us a message, enquiry or any suggesstion. We'll get back to you as early as possible.
                    </p>
                    <div className="bg-white text-gray-900 md:mx-16 xl::mx-32 p-2 rounded-md grid grid-cols-6">
                        <input type="email" placeholder="Enter your email" className="col-span-6 md:col-span-4 lg:col-span-5"/>
                        <a href="#"
                            className="rounded-md px-6 py-2 bg-primary text-white w-full col-span-6 md:col-span-2 lg:col-span-1">
                            Send 
                        </a>
                    </div>
                </div>
            </div>
            <div className="px-8 md:px-16 lg:px-32 py-10 md:py-20 bg-gray-100">
                <div className="grid grid-cols-4 gap-8">
                    <div className="col-span-4 sm:col-span-2 lg:col-span-1">
                        <h4 className="text-3xl font-semibold">Black Tigers</h4>
                        <p className="my-6 mr-4">
                            We are an indigenous Nigerian Security compan with Corporate Affairs Commission (CAC) registration(RC1408582) 
                            and licensed with Federal Ministry of Interrior through the Nigerian Civil Defense Corps and other security agencies.                 
                        </p>
                        
                    </div>
                    <div className="col-span-2 sm:col-span-2 lg:col-span-1">
                        <h4 className="text-3xl font-semibold">Company</h4>
                        <p className="my-6"><a href="#">Home</a></p>
                        <p className="my-6"><a href="#">Services</a></p>
                        <p className="my-6"><a href="#">About Us</a></p>
                        <p className="my-6"><a href="#">Contact</a></p>
                    </div>
                    <div className="col-span-2 sm:col-span-2 lg:col-span-1">
                        <h4 className="text-3xl font-semibold">Services</h4>
                        <p className="my-4"><a href="#">Physical Security</a></p>
                        <p className="my-4"><a href="#">Protective Security</a></p>
                        <p className="my-4"><a href="#">Security Management</a></p>
                        <p className="my-4"><a href="#">Private Investigators</a></p>
                        <p className="my-4"><a href="#">Security Education</a></p>
                        <p className="my-4"><a href="#">Electronic Security Gadgets</a></p>
                    </div>
                    <div className="col-span-2 sm:col-span-2 lg:col-span-1">
                        <h4 className="text-3xl font-semibold">Contact</h4>
                        <p className="my-6"><a href="tel:+234">+234 (0) 0701 234 5678</a></p>
                        <p className="my-6"><a href="mailto:info@example.com">info@blacktigers.com</a></p>
                        <p className="my-6">Kaduna, Nigeria</p>
                    </div>
                </div>
            </div>
        </main>

    </div>
  )
}
