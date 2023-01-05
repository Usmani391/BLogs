import '@/styles/globals.css';
import Header from 'components/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const footer = (
    <footer>
      <div className="w-full sm:w-4/5 rounded-lg my-10 bg-gray-900 text-white sm:mx-auto  shadow-green-600  shadow-2xl flex justify-around ">
  <div className="text-center">
  <h1 className="py-5 italic">Design by  mani </h1>
  </div>
    </div>
    </footer>
  );



  return (
    <html>
      <head/>
      <body>
        <Header/>
        {children}
        {footer}
        </body>
    </html>
  );
}
