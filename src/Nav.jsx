const nav = () => {
  return (
    <nav>
      <ul className="flex w-full justify-around p-4 md:font-bold md:text-2xl bg-slate-700 text-white fixed">
        <li><a href="#">Home</a></li>
        <li><a href="#but">About</a></li>
        <li><a href="#bk">Book</a></li>
      </ul>
    </nav>
  );
}

export default nav;