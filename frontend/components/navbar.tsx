export const Navbar = () => {
  return (
    <nav className="p-4 shadow-md" style={{ backgroundColor: "#F5F0EB" }}>
      <div className="flex items-center justify-between px-188 font-sans">
        <div className="relative group">
          Credentials
          <div className="absolute hidden group-hover:block bg-white shadow-md p-2 mt-0 min-w-max">
            <a href="/credentials/resume" className="block py-1 text-sm hover:text-[#C7AC90]">Resume</a>
            <a href="/credentials/about" className="block py-1 text-sm hover:text-[#C7AC90]">About</a>
          </div>
        </div>

        <a href="/" className="text-lg hover:text-[#C7AC90]">Alexis Salazar</a>

        <div className="relative group">
          <a href="/works" className="text-lg hover:text-[#C7AC90]">Works</a>
          <div className="absolute hidden group-hover:block bg-white shadow-md p-2 mt-0 min-w-max">
            <a href="/works/school" className="block py-1 text-sm hover:text-[#C7AC90]">School</a>
            <a href="/works/internship" className="block py-1 text-sm hover:text-[#C7AC90]">Internship</a>
            <a href="/works/personalProjects" className="block py-1 text-sm hover:text-[#C7AC90]">Personal Projects</a>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;