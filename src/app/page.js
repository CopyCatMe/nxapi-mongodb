import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Link href="/api/products">
        Productos
      </Link>
      <br />
      <Link href="/api/users">
        Usuarios
      </Link>
    </div>
  )
}

