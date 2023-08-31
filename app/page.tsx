import { Button, PageContainer, Text } from "@/ui";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <PageContainer className="w-full grid grid-cols-1 md:grid-cols-2 -translate-y-4">
        <div className="hidden md:flex flex-col justify-center items-start">
          <Text as="h1" font="fraunces" className="w-fit py-4 text-5xl animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text tracking-[-0.02em] text-transparent opacity-100 drop-shadow-sm">
            To be on an infinite journey of learning and risk-taking with deep thinkers, passionate problem solvers, entrepreneurs.
          </Text>
          <div className="flex flex-row gap-8 mt-4">
            <Button className="border border-purple-500 flex flex-row items-center gap-2 shadow-md hover:border-gray-800">
              <Text as="span" className="text-xs font-medium">Our Mission</Text>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </Button>
            <Button className="border border-purple-500 flex flex-row items-center gap-2 shadow-md hover:border-gray-800">
              <Text as="span" className="text-xs font-medium">Our Vision</Text>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </Button>
          </div>
        </div>
        <div className="overflow-hidden h-[44rem]">
          <div className="h-[52rem] -translate-y-[4rem]">
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.432/build/spline-viewer.js"></script>
            {/* @ts-ignore */}
            <spline-viewer url="https://prod.spline.design/NUhjZHFGrQJjdRp6/scene.splinecode"></spline-viewer>
          </div>
        </div>
      </PageContainer>

      <PageContainer className="pb-48">
        <div className="flex flex-row items-center gap-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-36 text-purple-200" viewBox="0 0 61 44">
            <path d="M 1 42.604 L 2.45 34.543 C 5.647 34.717 8.138 34.254 9.922 33.156 C 11.707 32.058 12.897 30.527 13.492 28.563 C 14.086 26.598 14.198 24.373 13.826 21.889 L 1 21.889 L 1 1 L 25.648 1 L 25.648 23.622 C 25.648 30.441 23.529 35.583 19.291 39.05 C 15.127 42.517 9.03 43.702 1 42.604 Z M 35.352 42.604 L 36.802 34.543 C 39.999 34.717 42.49 34.254 44.274 33.156 C 46.059 32.058 47.248 30.527 47.843 28.563 C 48.438 26.598 48.55 24.373 48.178 21.889 L 35.352 21.889 L 35.352 1 L 60 1 L 60 23.622 C 60 30.441 57.881 35.583 53.643 39.05 C 49.479 42.517 43.382 43.702 35.352 42.604 Z" fill="currentColor" />
          </svg>
          <Text className="text-xl bg-gradient-to-br from-black to-stone-500 bg-clip-text tracking-[-0.02em] text-transparent opacity-100 drop-shadow-sm" font="fraunces">
            Devote your entire will power to mastering one thing at a time; do not scatter your energies, nor leave something half done to begin a new venture.

            <br /><br />- Paramahansa Yogananda</Text>
        </div>
      </PageContainer>

      <PageContainer className="flex flex-row gap-24 pb-72">
        <div className="flex flex-col w-full">
        <Image src="https://static.wixstatic.com/media/8d54a7_a19e136d4fa5416c963815a2939723c6~mv2.jpg/v1/crop/x_259,y_0,w_665,h_665/fill/w_384,h_384,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_6206_JPG.jpg" width="1024" height="1024" alt="" className="h-96 shadow-2xl object-cover rounded-[2rem] grayscale" />
          <Text font="fraunces" className="w-fit mt-8 p-8 text-3xl bg-gradient-to-br from-black to-stone-500 bg-clip-text tracking-[-0.02em] text-transparent opacity-100 drop-shadow-md">
            Dheeraj Pandey
            </Text>
          <Text className="px-8 text-md text-stone-600">Dheeraj Pandey is the Chairman and CEO of DevRev Inc. Prior to DevRev, Dheeraj Pandey co-founded Nutanix, a global leader in enterprise cloud software and HCI  solutions, in 2009 and served as its Chief Executive Officer and as the Chairman of its board of directors for twelve years.</Text>
        </div>
        <div className="flex flex-col w-full">
          <Image src="https://static.wixstatic.com/media/bc5473_ec57a2bd3c5f419f92b50a898e1cadf6~mv2.png/v1/crop/x_74,y_0,w_412,h_412/fill/w_384,h_372,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bc5473_ec57a2bd3c5f419f92b50a898e1cadf6~mv2.png" width="1024" height="1024" alt="" className="h-96 shadow-2xl object-cover rounded-[2rem] grayscale" />
          <Text font="fraunces" className="w-fit mt-8 p-8 text-3xl bg-gradient-to-br from-black to-stone-500 bg-clip-text tracking-[-0.02em] text-transparent opacity-100 drop-shadow-md">
            Amit Kumar
            </Text>
          <Text className="px-8 text-md text-stone-500">Mr. Kumar co-managed over $2b of US equity funds at Columbia Threadneedle for six years. He has spent over fifteen years researching companies in technology, biotech/ life sciences, and financial sectors. He has previously worked in the tech industry for ten years.</Text>
        </div>

      </PageContainer>

      <div className="rounded-[6rem] bg-gradient-to-b from-30% from-transparent via-purple-200 to-purple-400 w-full">
        <PageContainer className="h-96 w-full">
          <Text as="h3" font="fraunces" className="flex items-center text-7xl">
            <span className="py-4 bg-gradient-to-br from-black to-stone-500 bg-clip-text tracking-[-0.02em] text-transparent opacity-100 drop-shadow-xl" >Building a culture of</span>
            <span className="relative ml-4 h-[4rem] w-72 overflow-hidden">
              <span
                className="absolute h-full w-full -translate-y-full animate-slide leading-none text-purple-500"
              >
                Ethos
              </span>
              <span
                className="absolute h-full w-full -translate-y-full animate-slide leading-none text-purple-500 [animation-delay:1s]"
              >
                Values
              </span>
              <span
                className="absolute h-full w-full -translate-y-full animate-slide leading-none text-purple-500 [animation-delay:2s]"
              >
                Morals
              </span>
            </span>
          </Text>
        </PageContainer>
      </div>


    </main>
  )
}
