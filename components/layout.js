import Navbar from './navbar'
import Banner from './banner'
// import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Banner />
      <main>{children}</main>
    </>
  )
}