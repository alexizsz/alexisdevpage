


export const Navbar = () => {
  return (
    <nav className="bg-gray-100 p-4 shadow-md dark:bg-gray-800">
        <div className="container mx-auto">
            <div className="flex items-center justify-between">
                <div className="dark-text-white text-lg font-semibold">
                    Alexis Salazar
                </div>
                <div className="space-x-4">
                    <a href="/" className="dark-text-white text-lg font-semibold">Home</a>
                    <a href="/about" className="dark-text-white text-lg font-semibold">About</a>
                    <a href="/contact" className="dark-text-white text-lg font-semibold">Contact</a> 
                </div>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;