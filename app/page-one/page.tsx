import Link from "next/link"

export default function PageOne(){
    return (
        <main className="main">
            <section className="main-section">
                <h1>View page One</h1>
                <Link href="/page-two">
                    Go to page two
                </Link>
            </section>
        </main>
    )
}
