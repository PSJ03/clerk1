import { UserButton, auth } from '@clerk/nextjs'
import Link from 'next/link'

const Header = () => {
  const { userId } = auth()
  return (
    <>
      <nav className="bg-gray-900 py-4 px-8">
        <div className="flex items-center justify-between container">
          <div className="flex items-center font-bold">
            <Link href="/">
              <div className="text-lg text-yellow-300">Clerk Auth</div>
            </Link>
          </div>

          <div className="flex items-center font-bold">
            {!userId ? (
              //로그인 안된 경우 표시
              <>
                <div className="flex items-center font-bold">
                  <Link
                    href="/sign-in"
                    className="text-amber-200 hover:text-white mr-4"
                  >
                    Login
                  </Link>
                  <Link
                    href="/sign-up"
                    className="text-amber-200 hover:text-white mr-4"
                  >
                    Sign Up
                  </Link>
                </div>
              </>
            ) : (
              //로그인 된 경우 표시

              <>
                <div className="flex items-center font-bold">
                  <Link
                    href="/repos"
                    className="text-amber-400 hover:text-amber-200 mr-4"
                  >
                    Repository
                  </Link>

                  <Link
                    href="/courses"
                    className="text-amber-400 hover:text-amber-200 mr-4"
                  >
                    Courses
                  </Link>

                  <Link
                    href="/dashboard"
                    className="text-amber-400 hover:text-amber-200 mr-4"
                  >
                    Dashboard
                  </Link>

                  <Link
                    href="/profile"
                    className="text-amber-400 hover:text-amber-200 mr-4"
                  >
                    Profile
                  </Link>
                  <div className="ml-auto">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
