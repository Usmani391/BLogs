import Image from "next/image"
import Link from "next/link"

const Header=()=>(
  
  <div className="w-full sm:w-4/5 rounded-lg my-10 bg-gray-900 text-white sm:mx-auto  shadow-green-600  shadow-2xl flex justify-around ">
  <div className="text-center">
  <Image src='/logo.png' alt='logo' width={40} height={40} className="pt-4 mx-auto"/>
  <h1 className="py-5 italic">Usman`i &nbsp;  Blog </h1>
  <h2 className="font-bold italic pb-5 block text-2xl  justify-around  ">welcome to my tech blog.</h2>
  </div>
    </div>
  )
export default Header