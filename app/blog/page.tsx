import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description: "블로그입니다.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Blog Posts
      </h1>
      <BlogPosts />
    </section>
  );
}
