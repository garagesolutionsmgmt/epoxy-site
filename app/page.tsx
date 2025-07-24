export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/epoxy background test.jpeg"
          alt="Background"
          className="w-full h-full object-cover brightness-70"
        />
      </div>

      {/* Logo + Gold Text (Side by Side) */}
      <div className="absolute top-8 left-8 z-10 flex items-center space-x-4">
        <img src="/BH_Garage_Transparent.png" alt="Epoxy Logo" className="h-20 w-auto" />
        <p className="text-lg md:text-xl font-medium tracking-wide text-[#cfb580] uppercase">
          B&H Luxury Garage Solutions
        </p>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 right-0 z-10 p-8 flex gap-8 text-sm font-semibold tracking-wider">
        <a href="#" className="hover:underline">HOME</a>
        <a href="#" className="hover:underline">SERVICES</a>
        <a href="#" className="hover:underline">PROJECTS</a>
        <a href="#" className="hover:underline">ABOUT US</a>
        <a href="#" className="hover:underline">CONTACT</a>
      </nav>

      {/* Quote Bar – Centered at Top */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10 flex items-center gap-4 bg-black/60 px-4 py-2 rounded-full">
        <p className="text-white font-medium text-m uppercase tracking-wider">
          Request a Quote Today!
        </p>
        <button className="bg-white text-black font-semibold px-5 py-2 rounded-full hover:bg-gray-200 transition">
          Get a Quote
        </button>
      </div>

      {/* Hero Text + CTA Button */}
      <div className="relative z-10 flex flex-col justify-center h-screen px-8 max-w-4xl">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight max-w-[50rem]">
          Epoxy Flooring<br />Specialists<br />In DFW
        </h1>

        <div className="mt-8">
          <button className="flex items-center gap-3 bg-red-600 text-white rounded-full px-6 py-3 hover:bg-red-700 transition">
            <span className="text-lg font-semibold">Find Out More</span>
            <span className="w-4 h-4 border-4 border-white border-l-transparent border-t-transparent rotate-45 inline-block" />
          </button>
        </div>
      </div>
    </main>
  );
}
