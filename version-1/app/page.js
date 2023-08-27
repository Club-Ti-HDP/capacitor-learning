import { Post } from "@/components/Posts"
export default function Home() {
  const posts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  return (
    <main>
      {posts.map((post, i) => <Post key={i} />)}
    </main>
  )
}
