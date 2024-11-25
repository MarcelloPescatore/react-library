import MainMenu from "../components/MainMenu";

export default function Home() {
    return (
        <>
            <header>
                <div className="logo">
                    LOGO
                </div>
                <MainMenu/>
            </header>

            <main>
                <h1>Home Page</h1>
            </main>

            <footer>
                <p>copyright 2024</p>
            </footer>
        </>
    )
}