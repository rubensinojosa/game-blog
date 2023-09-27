import { Post } from "./post";

const posts = [
  {
    title: "Xbox: consoles ganham atualização com novos recursos",
    image: "/images/xbox.jpeg",
    createdAt: new Date(2023, 9, 19),
  },
  {
    title: "Cyberpunk vai ganhar novo jogo",
    image: "/images/cyberpunk.jpeg",
    createdAt: new Date(2023, 9, 4),
  },
  {
    title: "Coringa pode aparecer em MultiVersus em breve",
    image: "/images/multiversus.jpeg",
    createdAt: new Date(2023, 8, 27),
  },
  {
    title: "EA Games confirma novo jogo e janela de lançamento",
    image: "/images/car.png",
    createdAt: new Date(2023, 7, 30),
  },
];

export const Posts = () => {
  return (
    <section className="container mx-auto grid md:grid-cols-3 gap-4 lg:gap-10">
      {posts.map((post, index) => (
        <Post
          shouldSpan={index === posts.length - 1}
          post={post}
          key={post.title}
        />
      ))}
    </section>
  );
};
