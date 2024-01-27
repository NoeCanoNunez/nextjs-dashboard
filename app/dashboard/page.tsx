export default function Page() {
    return (
        <div className="bg-gray-200 h-screen">
            <header className="bg-white shadow">
                <nav className="container mx-auto px-4 py-2">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                </nav>
            </header>
            <main className="container mx-auto px-4 py-8">
                <h2 className="text-xl font-bold mb-4">Welcome to the Dashboard!</h2>
                <p className="text-gray-700">
                    This is a simple dashboard page created using Next.js and Tailwind CSS.
                </p>
            </main>
        </div>
    );
};
