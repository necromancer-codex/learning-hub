import Link from 'next/link';
import { GraduationCap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <GraduationCap className="h-6 w-6" />
              <span className="text-xl font-bold">LearnHub</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Transform your career with expert-led online courses. Learn at your
              own pace and get certified.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Categories</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/categories/web-development">Web Development</Link>
              </li>
              <li>
                <Link href="/categories/mobile-development">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link href="/categories/data-science">Data Science</Link>
              </li>
              <li>
                <Link href="/categories/cloud-computing">Cloud Computing</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/cookies">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LearnHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}