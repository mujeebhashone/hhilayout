import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/Component/Header'
import Banner from '@/Component/Banner'
import PropertySection from '@/Component/PropertySection'
import CarServicesSection from '@/Component/CarServicesSection'
import RealEstateSection from '@/Component/RealEstateSection'
import GardenSection from '@/Component/GardenSection'
import ExploreServicesSection from '@/Component/ExploreServicesSection'
import TourSection from '@/Component/TourSection'
import ExpierienceSection from '@/Component/ExpierienceSection'
import FormSection from '@/Component/FormSection'
import Footer from '@/Component/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Header />
        <Banner />
        <PropertySection />
        <CarServicesSection />
        <RealEstateSection />
        <GardenSection />
        <ExploreServicesSection />
        <TourSection />
        <ExpierienceSection />
        <FormSection />
        <Footer />
      </>
    </>
  )
}
