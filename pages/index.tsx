import { useSession, signIn, signOut } from "next-auth/react"
import useSWR from "swr"
import { useState } from "react"

export default function Home() {
  const { data: session } = useSession()
  const fetcher = (url: string) => fetch(url).then(res => res.json())
  const { data: books, mutate } = useSWR(session ? "/api/books" : null, fetcher)
  const [form, setForm] = useState({ title: "", author: "", rating: 5 })

  if (!session) return <button onClick={() => signIn()}>Sign In</button>

  const addBook = async () => {
    await fetch("/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })
    mutate()
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">My Books</h1>
      <ul>
        {books?.map((book: any) => (
          <li key={book.id}>{book.title} - {book.author} ({book.rating})</li>
        ))}
      </ul>
      <input placeholder="Title" onChange={e => setForm({ ...form, title: e.target.value })} />
      <input placeholder="Author" onChange={e => setForm({ ...form, author: e.target.value })} />
      <input type="number" max={10} min={1} value={form.rating} onChange={e => setForm({ ...form, rating: Number(e.target.value) })} />
      <button onClick={addBook}>Add Book</button>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  )
}