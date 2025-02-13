import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Link href="/api/products">
        <button>Productos</button>
      </Link>
      <br />
      <Link href="/api/users">
        <button>Usuarios</button>
      </Link>
    </div>
  )
}

