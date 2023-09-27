import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

type PostProps = {
  post: {
    title: string;
    image: string;
    createdAt: Date;
  };
  shouldSpan?: boolean;
};

export const Post = ({ post, shouldSpan }: PostProps) => {
  const formattedDate = format(post.createdAt, "dd 'de' MMMM, yyyy", {
    locale: ptBR,
  });

  return (
    <div
      className={`relative h-[300px] md:h-[500px] flex items-end group overflow-hidden cursor-pointer ${
        shouldSpan ? "col-span-full" : ""
      }`}
    >
      <img
        className="absolute inset-0 object-cover w-full h-full group-hover:scale-110 transition-all duration-500"
        src={post.image}
      />
      <div className="bg-dark-10/40 absolute inset-0 w-full h-full z-10 group-hover:bg-dark-10/20 transition-colors" />
      <div className="relative z-20 p-5">
        <span className="font-semibold text-dark-20">{formattedDate}</span>
        <p className="text-2xl font-semibold text-dark-30 mt-3">{post.title}</p>
      </div>
    </div>
  );
};
