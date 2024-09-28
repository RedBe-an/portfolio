import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section className="font-sm">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hello, I'm RedBe-an.
      </h1>
      <div>
        Greetings! I'm RedBe-an, a backend developer who's passionate about
        crafting clean, maintainable code. I firmly believe that well-structured
        code not only boosts development efficiency but also streamlines future
        maintenance and scalability efforts.
        <p className="mb-4 mt-4" />
        My diverse experience across various technologies and frameworks enables
        me to build robust backend solutions tailored to each project's specific
        requirements. I'm dedicated to producing code that's not just
        functional, but also easily readable and comprehensible, fostering
        collaboration and minimizing the risk of errors.
        <p className="mb-4 mt-4" />
        I excel in team-oriented environments where knowledge sharing and mutual
        learning are encouraged. I'm constantly eager to explore cutting-edge
        tools and methodologies to enhance my development process and deliver
        top-notch software.
        <p className="mb-4 mt-4" />
        I'm excited about the prospect of collaborating and contributing to
        innovative, impactful projects together!
        <p className="mb-8" />
      </div>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Blog Posts
      </h1>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
