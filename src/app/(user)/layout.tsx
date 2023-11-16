import Link from "next/link";
import '@/styles/profile.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="page-section">
            <div className="user-links">
                <Link href="/account/orders">
                    PURCHASES
                </Link>
                <Link href="/account/profile">
                    PROFILE
                </Link>
                <Link href="#">
                    SETTINGS
                </Link>
            </div>
            {children}
        </section>
    )
}