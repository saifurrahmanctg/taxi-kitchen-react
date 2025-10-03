import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import { Suspense } from "react";
import OrderContainer from "./components/OrderContainer";
import Footer from "./components/Footer";

const orderData = fetch("/orders.json").then((res) => res.json());

function App() {
  const orderPromise = orderData;

  return (
    <>
      <header className=" sticky top-0 bg-[#ffffff] opacity-95 shadow z-10">
        <Navbar> </Navbar>
      </header>
      <section className="main-banner">
        <Banner></Banner>
      </section>

      <section className="container py-5">
        <Suspense
          fallback={
            <div className="text-center mt-6">
              <span className="loading loading-spinner text-warning"></span>
            </div>
          }
        >
          <OrderContainer orderPromise={orderPromise}></OrderContainer>
        </Suspense>
      </section>

      <section className="mt-10">
        <Footer></Footer>
      </section>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
