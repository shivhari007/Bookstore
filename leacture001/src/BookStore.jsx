import Book from "./Book";

const BookStore = () => {
  const books = [
    {
      title: "Icebreaker",
      imgLink:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/regionalbooks/5/q/m/icebreaker-paperback-english-2023-by-hannah-grace-original-imagpcc7j8fafagf.jpeg?q=70",
      author: "Hannah Grace",
    },
    {
      title: "Brahmastra",
      imgLink:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/regionalbooks/e/y/f/brahmastra-complete-maths-multicolored-formula-book-second-original-imaguffwjktawwe7.jpeg?q=70",
      author: "Aditya Ranjan",
    },
    {
      title: "Bhagwat Geeta",
      imgLink:
        "https://rukminim2.flixcart.com/image/612/612/kltryq80/book/a/p/y/bhagavad-gita-original-imagyv7aemzkt2rf.jpeg?q=70",
      author: "Shrila prabhudh",
    },
    {
      title: "Think and Grow Rich",
      imgLink:
        "https://rukminim2.flixcart.com/image/612/612/kmz7qfk0/regionalbooks/v/l/d/think-and-grow-rich-in-hindi-translate-original-imagfqx5jpr4fr6q.jpeg?q=70",
      author: "Nepolian Hill",
    },
    {
      title: "Ramayan",
      imgLink:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/regionalbooks/o/s/m/shree-ram-charitra-manas-ramayan-in-hindi-by-goswami-tulsidas-original-imagpc2dje7fzs8h.jpeg?q=70",
      author: "Tulsi Das",
    },
    {
      title: "Heart of Darkness",
      imgLink:
        "https://rukminim2.flixcart.com/image/612/612/kv8fbm80/book/m/m/q/heart-of-darkness-original-imag86dfm5secddv.jpeg?q=70",
      author: "Joseph",
    },
  ];

  return (
    <div className="booklist">
      {books.map((b ,index) => (
        <Book {...b}  key={index}/>
      ))}

      {books.map((b, index) => {
        return <Book {...b} key={index} />;
      })}
    </div>
  );
};
export default BookStore;
