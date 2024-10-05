import "@/styles/tailwind.css";
import "@/styles/index.css";
import "@/styles/font.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Global Customer Brands - Petra Brands",
  description: "Discover Petra Brands, powering the next generation of global consumer brands with eco-conscious practices and innovative manufacturing excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <div className="flex w-full flex-col items-center bg-gray-200 py-[2.25rem] sm:py-[1.25rem]">
          <Header className="w-[94%] md:w-full md:px-[1.25rem]" />
          {children}
          <Footer className="w-[94%] md:w-full md:px-[1.25rem] mt-24"/>
        </div>
      </body>
    </html>
  );
}
