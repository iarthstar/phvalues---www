import { Button, PageContainer, Text } from "@/ui";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">

      {/* HERO SECTION */}
      <PageContainer className="w-full grid grid-cols-1 md:grid-cols-2 -translate-y-4">
        <div className="pt-24 md:pt-0 flex flex-col justify-center items-start">
          <div className="translate-y-[1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <Text as="h1" font="inter" className="w-fit text-4xl md:text-5xl uppercase animate-fade-up bg-gradient-to-r from-black to-stone-500 bg-clip-text tracking-[-0.05rem] text-transparent opacity-100 drop-shadow-sm">
              To be on an infinite journey of learning and risk-taking with
            </Text>
            <Text as="h1" className="flex items-center text-4xl md:text-5xl uppercase">
              <span className="relative h-[2.5rem] md:h-[3rem] w-full overflow-hidden">
                <span
                  className="absolute h-full w-full -translate-y-full animate-slide leading-none bg-gradient-to-r from-purple-700 to-purple-300 bg-clip-text tracking-[-0.05rem] text-transparent opacity-100 drop-shadow-sm [animation-delay:0.450s]"
                >
                  Deep Thinkers
                </span>
                <span
                  className="absolute h-full w-full -translate-y-full animate-slide leading-none bg-gradient-to-r from-purple-700 to-purple-300 bg-clip-text tracking-[-0.05rem] text-transparent opacity-100 drop-shadow-sm [animation-delay:2.08s]"
                >
                  Problem Solvers
                </span>
                <span
                  className="absolute h-full w-full -translate-y-full animate-slide leading-none bg-gradient-to-r from-purple-700 to-purple-300 bg-clip-text tracking-[-0.05rem] text-transparent opacity-100 drop-shadow-sm [animation-delay:3.78s]"
                >
                  Entrepreneurs
                </span>
              </span>
            </Text>
          </div>
          <div className="flex flex-row gap-8 mt-12 translate-y-[1rem] animate-fade-in opacity-0 [--animation-delay:300ms]">
            <Button className="border border-purple-500 flex flex-row items-center gap-2 transition-all shadow-sm hover:shadow-xl hover:border-gray-800">
              <Text as="span" className="text-xs font-medium">Our Mission</Text>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </Button>
            <Button className="border border-purple-500 flex flex-row items-center gap-2 transition-all shadow-sm hover:shadow-xl hover:border-gray-800">
              <Text as="span" className="text-xs font-medium">Our Vision</Text>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </Button>
          </div>
        </div>
        <div className="overflow-hidden h-[28rem] md:h-[44rem]">
          <div className="h-[44rem] md:h-[60rem] -translate-y-[10rem]">
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.432/build/spline-viewer.js"></script>
            {/* @ts-ignore */}
            <spline-viewer url="https://prod.spline.design/NUhjZHFGrQJjdRp6/scene.splinecode"></spline-viewer>
          </div>
        </div>
      </PageContainer>


      {/* QUOTE SECTION */}
      <PageContainer className="pb-56">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 md:h-48 text-purple-100" viewBox="0 0 61 44">
            <path d="M 1 42.604 L 2.45 34.543 C 5.647 34.717 8.138 34.254 9.922 33.156 C 11.707 32.058 12.897 30.527 13.492 28.563 C 14.086 26.598 14.198 24.373 13.826 21.889 L 1 21.889 L 1 1 L 25.648 1 L 25.648 23.622 C 25.648 30.441 23.529 35.583 19.291 39.05 C 15.127 42.517 9.03 43.702 1 42.604 Z M 35.352 42.604 L 36.802 34.543 C 39.999 34.717 42.49 34.254 44.274 33.156 C 46.059 32.058 47.248 30.527 47.843 28.563 C 48.438 26.598 48.55 24.373 48.178 21.889 L 35.352 21.889 L 35.352 1 L 60 1 L 60 23.622 C 60 30.441 57.881 35.583 53.643 39.05 C 49.479 42.517 43.382 43.702 35.352 42.604 Z" fill="currentColor" />
          </svg>
          <Text font="mrsSaintDelafield" className="text-5xl p-8 bg-gradient-to-br from-black to-stone-500 bg-clip-text tracking-[-0.02em] text-transparent opacity-100 drop-shadow-sm">
            Devote your entire will power to mastering one thing at a time; do not scatter your energies, nor leave something half done to begin a new venture.

            <br /><br />- Paramahansa Yogananda</Text>
        </div>
      </PageContainer>




      {/* INVESTMENT SECTION */}
      <PageContainer className="flex flex-col items-center pb-56">
        <Text as="h2" className="w-fit text-3xl uppercase bg-gradient-to-r from-purple-700 to-purple-300 bg-clip-text tracking-[-0.05rem] text-transparent opacity-100 drop-shadow-sm pb-16">Our Investment</Text>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              url: "https://devrev.ai", name: "DevRev", description: "Bringing Dev and Rev together.", logo: (
                <svg className="h-16 self-end" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 724.56 213" fill="currentColor">
                  <path d="m54,51.5v51.5C25.2,103,1.5,79.75,1.5,51.5S25.2,0,54,0s52.5,23.25,52.5,51.5h-52.5Z"></path><path d="m150,161.5v51.5c-28.8,0-52.5-23.25-52.5-51.5s23.7-51.5,52.5-51.5,52.5,23.25,52.5,51.5h-52.5Z"></path><polygon points="150 101.5 204 1.5 96 1.5 150 101.5"></polygon><polygon points="54 211.5 108 111.5 0 111.5 54 211.5"></polygon><path d="m294.35,101.51h-37.86V1.51h37.86c30.14,0,48.57,18.71,48.57,50s-18.43,50-48.57,50Zm-1.43-15.71c21.57,0,31.43-12,31.43-34.29s-9.86-34.29-31.43-34.29h-17.86v68.57h17.86Z"></path><path d="m385.78,103.65c-23.57,0-38.57-17-38.57-39.29s15.29-39.29,38.14-39.29c19,0,30.29,10,35,24.86,1.71,5.57,2.43,11.71,2.43,18v2.86h-57.14c.43,9.29,7.43,19.29,20.14,19.29,9.71,0,14.71-5.43,16.43-10h19.14c-4.14,13-16.14,23.57-35.57,23.57Zm-20.14-46.43h38.71c-.43-9.86-7.14-18.57-19-18.57s-18.57,8.71-19.71,18.57Z"></path><path d="m438.93,27.22l10.29,28.57c3.29,8.57,5.86,18.43,8,26.43h.57c2.14-8,4.71-17.86,8-26.43l10.29-28.57h18.86l-28.57,74.28h-17.71l-28.57-74.28h18.86Z"></path><path d="m615.42,103.65c-23.57,0-38.57-17-38.57-39.29s15.29-39.29,38.14-39.29c19,0,30.29,10,35,24.86,1.71,5.57,2.43,11.71,2.43,18v2.86h-57.14c.43,9.29,7.43,19.29,20.14,19.29,9.71,0,14.71-5.43,16.43-10h19.14c-4.14,13-16.14,23.57-35.57,23.57Zm-20.14-46.43h38.71c-.43-9.86-7.14-18.57-19-18.57s-18.57,8.71-19.71,18.57Z"></path><path d="m668.56,27.22l10.29,28.57c3.29,8.57,5.86,18.43,8,26.43h.57c2.14-8,4.71-17.86,8-26.43l10.29-28.57h18.86l-28.57,74.28h-17.71l-28.57-74.28h18.86Z"></path><path d="m547.59,61.36h-.03c17.73-1.44,29.11-13.14,29.11-29.85,0-17.86-13-30-32.86-30h-42.75v100h18.57v-40h6.84l30.6,40h21.94l-31.44-40.15Zm-27.94-15.56v-28.57h24.17c8.57,0,14.29,5.71,14.29,14.29s-5.71,14.29-14.29,14.29h-24.17Z"></path>
                </svg>
              )
            },
            { url: "https://www.graphwear.co", name: "Graphwear", description: "No Blood, No Pain.", logo: "" },
            {
              url: "https://carta.com", name: "Carta", description: "Equity, Simplified.", logo: (
                <svg className="h-16 self-end" viewBox="0 0 99 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#a)"><path d="M97.926 1.077H1.074v40.846h96.852V1.077Z" stroke="#000" stroke-width="3" stroke-miterlimit="10"></path><path d="M21.816 30.34a7.627 7.627 0 0 1-5.455-2.267 7.669 7.669 0 0 1-2.218-5.486c0-4.92 4.124-7.81 7.819-7.81 2.643 0 5.115.994 6.437 3.314l-2.472 1.444a4.648 4.648 0 0 0-3.916-2.09c-2.174 0-4.762 1.71-4.762 5.099 0 3.313 2.472 5.125 4.957 5.125a4.59 4.59 0 0 0 4.028-2.478l2.528 1.18c-1.424 2.587-3.978 3.969-6.946 3.969ZM37.9 27.537c2.819 0 4.758-2.12 4.758-4.97 0-2.85-1.94-4.97-4.758-4.97-2.819 0-4.825 2.094-4.825 4.923 0 2.867 1.943 5.017 4.825 5.017Zm-.298 2.803c-4.464 0-7.643-3.39-7.643-7.783 0-4.48 3.15-7.78 7.643-7.78 2.062 0 4.048.872 5 2.21v-1.825h3.053v14.764h-3.053v-1.83c-1.001 1.33-2.941 2.244-5 2.244ZM61.08 29.92V18.014h-2.35v-2.95h2.38v-4.363h3.146v4.364h3.261v2.949h-3.261v11.904H61.08ZM76.52 27.537c2.818 0 4.761-2.12 4.761-4.97 0-2.85-1.943-4.97-4.762-4.97-2.818 0-4.82 2.094-4.82 4.923 0 2.867 1.939 5.017 4.82 5.017Zm-.298 2.803c-4.468 0-7.64-3.39-7.64-7.783 0-4.48 3.146-7.78 7.64-7.78 2.062 0 4.048.872 5 2.21v-1.825h3.056v14.764h-3.056v-1.83c-1.001 1.33-2.941 2.244-5 2.244ZM48.8 29.902V15.138h2.909v2.565c.601-1.657 1.873-2.8 3.559-2.8.366-.007.731.034 1.087.12v2.855c-2.373-.275-4.379 1.389-4.379 5.189v6.835h-3.175Z" fill="#000"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h99v43H0z"></path></clipPath></defs>
                </svg>)
            },
            {
              url: "https://innovaccer.com", name: "Innovaccer", description: "Helping healthcare as one.", logo: (
                <svg className="h-12 self-end" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 237 40">
                  <g fill="none" fill-rule="evenodd">
                    <path fill="#000000" fill-rule="nonzero" d="M40.47 6.34c0-2.09 1.807-3.665 3.956-3.665a3.76 3.76 0 0 1 2.718 1.023 3.689 3.689 0 0 1 1.157 2.641c-.05 2.071-1.784 3.71-3.875 3.665-2.15 0-3.957-1.66-3.957-3.665zm.775 6.69h6.367v19.863h-6.367V13.03zm29.215 9.164v10.699h-6.368V22.92c0-3.07-1.893-4.222-3.488-4.222-1.721 0-3.87.897-3.87 4.222v9.972h-6.368V13.03h6.367v3.54c.69-2.829 3.871-4.04 5.768-4.04 5.332-.009 7.959 3.571 7.959 9.664zm22.59 0v10.699h-6.368V22.92c0-3.07-1.892-4.222-3.487-4.222-1.722 0-3.871.897-3.871 4.222v9.972h-6.368V13.03h6.368v3.54c.689-2.829 3.87-4.04 5.763-4.04 5.336-.009 7.963 3.571 7.963 9.664zm1.334.727c0-6.307 5.164-10.4 10.887-10.4 5.723 0 10.949 4.077 10.949 10.4s-5.205 10.356-10.928 10.356c-5.723 0-10.908-4.093-10.908-10.356zm15.317 0c0-2.727-1.978-4.561-4.43-4.561-2.451 0-4.434 1.834-4.434 4.561s1.979 4.517 4.434 4.517c2.456 0 4.422-1.79 4.422-4.517h.008zm27.498-9.89l-8.521 19.862h-5.552l-8.518-19.863h6.935l4.39 11.806 4.344-11.806h6.922zm20.824 0v19.862h-6.314v-2.259c-1.465 1.875-4.178 2.643-6.242 2.643-4.988 0-9.724-3.923-9.724-10.356 0-6.432 4.727-10.363 9.716-10.363 2.064 0 4.777.767 6.241 2.642v-2.174l6.323.004zm-6.584 9.89a4.58 4.58 0 0 0-2.783-4.312 4.659 4.659 0 0 0-5.081.933 4.55 4.55 0 0 0-1.038 5.014 4.627 4.627 0 0 0 4.301 2.838c2.51.007 4.561-1.986 4.601-4.473zm8.18-.044c0-6.307 5.204-10.356 11.058-10.356 3.87 0 6.84 1.875 8.778 4.687l-4.895 3.07a4.878 4.878 0 0 0-3.83-1.918c-2.925 0-4.646 2.044-4.646 4.517 0 2.472 1.721 4.561 4.646 4.561a4.91 4.91 0 0 0 3.83-1.919l4.895 3.067c-1.938 2.828-4.895 4.69-8.778 4.69-5.854 0-11.059-4.092-11.059-10.4zm19.575 0c0-6.307 5.21-10.356 11.059-10.356 3.875 0 6.845 1.875 8.778 4.687l-4.895 3.07a4.882 4.882 0 0 0-3.83-1.918c-2.925 0-4.646 2.044-4.646 4.517 0 2.472 1.72 4.561 4.646 4.561a4.91 4.91 0 0 0 3.83-1.919l4.895 3.067c-1.933 2.828-4.895 4.69-8.778 4.69-5.85 0-11.059-4.092-11.059-10.4zm40.882 1.919H205.39c.6 1.875 2.28 2.982 4.687 2.982a7.625 7.625 0 0 0 5.079-1.92l3.263 4.094c-1.982 2.133-5.42 3.325-8.823 3.325-6.323 0-10.842-4.218-10.842-10.27 0-6.466 5.078-10.486 10.842-10.486s10.586 3.964 10.586 10.016c.02.554-.02 1.277-.106 2.259zm-6.242-3.71c-.04-1.959-1.807-3.231-4.079-3.231-1.937 0-3.744.852-4.389 3.232h8.468zm23.15-7.97l-1.506 6.011a5.753 5.753 0 0 0-2.884-.767c-2.496 0-4.56 2.044-4.56 7.927v6.606h-6.368V13.03h6.282v4.178c1.163-3.28 3.57-4.687 6.025-4.687a6.58 6.58 0 0 1 3.01.594z" />
                    <path fill="#E81F76" d="M9.02 24.13L.293 37.203a1.715 1.715 0 0 0-.082 1.772c.305.561.895.91 1.538.91h17.455c.642 0 1.233-.349 1.537-.91a1.715 1.715 0 0 0-.081-1.772l-8.725-13.079a1.755 1.755 0 0 0-1.46-.773c-.586 0-1.133.293-1.457.777z" />
                    <path fill="#E81F76" d="M9.02 15.762L.293 2.682A1.715 1.715 0 0 1 .212.91C.517.35 1.107 0 1.75 0h17.455c.642 0 1.233.35 1.537.91.305.561.273 1.242-.081 1.773l-8.725 13.079a1.75 1.75 0 0 1-1.459.778 1.75 1.75 0 0 1-1.458-.778z" opacity=".2" />
                    <path fill="#E81F76" d="M21.803 3.588l-8.725 13.079a1.72 1.72 0 0 0-.08 1.775c.305.561.897.911 1.54.912h17.45a1.752 1.752 0 0 0 1.538-.914 1.72 1.72 0 0 0-.08-1.773L24.72 3.587a1.754 1.754 0 0 0-1.459-.774c-.586 0-1.134.29-1.458.775z" opacity=".4" />
                    <path fill="#E81F76" d="M24.72 36.453l8.725-13.08a1.72 1.72 0 0 0 .08-1.773 1.752 1.752 0 0 0-1.536-.913h-17.45c-.644 0-1.236.35-1.54.912a1.72 1.72 0 0 0 .079 1.775l8.725 13.079c.324.484.872.775 1.458.775.587 0 1.135-.291 1.459-.775z" opacity=".7" />
                  </g>
                </svg>
              )
            },
          ].map((o, index) => (
            <div key={index} className="group grid grid-cols-1 grid-rows-1 overflow-hidden rounded-[2rem]">
              <div className="col-start-1 row-start-1 col-span-1 row-span-1 p-3 -inset-8 rounded-lg bg-gradient-to-br from-purple-900 via-purple-500 to-purple-400 opacity-75 blur-2xl">
                <div className="h-full w-full rounded-[0.5rem] bg-white flex flex-col p-8">
                </div>
              </div>
              <div className="col-start-1 row-start-1 col-span-1 row-span-1 h-64 z-10 rounded-[1.5rem] bg-white flex flex-col justify-between p-8 m-3 transition-all shadow-md overflow-hidden group-hover:shadow-2xl">
                {/* <Image height={80} width={80} alt="" className="self-end" src="/phvalues.png" /> */}
                {o.logo}
              </div>
              <Link href={o.url} target="_blank" className="col-start-1 row-start-1 col-span-1 row-span-1 h-64 z-20 m-3 p-8 overflow-hidden">
                <div className="h-full flex flex-col justify-end transition-all translate-y-16 group-hover:-translate-y-0">
                  <Text className="w-fit text-2xl bg-gradient-to-br from-black to-stone-500 bg-clip-text tracking-[-0.02em] text-transparent opacity-100 drop-shadow-md">{o.name}</Text>
                  <Text className="text-sm text-stone-500">{o.description}</Text>
                  <Text className="opacity-0 group-hover:opacity-100 transition-opacity text-md mt-6 text-purple-500 underline underline-offset-4">Learn more</Text>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </PageContainer>



      {/* TEAM SECTION */}
      <PageContainer className="flex flex-col items-center pb-0">
        <Text as="h2" className="w-fit text-3xl uppercase bg-gradient-to-r from-purple-700 to-purple-300 bg-clip-text tracking-[-0.05rem] text-transparent opacity-100 drop-shadow-sm pb-16">Our TEAM</Text>
        <div className="flex flex-col md:flex-row gap-24 pb-72">
          <div className="flex flex-col w-full">
            <Image src="https://static.wixstatic.com/media/8d54a7_a19e136d4fa5416c963815a2939723c6~mv2.jpg/v1/crop/x_259,y_0,w_665,h_665/fill/w_384,h_384,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_6206_JPG.jpg" width="1024" height="1024" alt="" className="h-96 transition-all shadow-2xl hover:shadow-md object-cover rounded-[2rem] grayscale" />
            <Text className="w-fit mt-8 p-8 text-3xl bg-gradient-to-br from-black to-stone-500 bg-clip-text tracking-[-0.02em] text-transparent opacity-100 drop-shadow-md">
              Dheeraj Pandey
            </Text>
            <Text className="px-8 text-md text-stone-500">Dheeraj Pandey is the Chairman and CEO of DevRev Inc. Prior to DevRev, Dheeraj Pandey co-founded Nutanix, a global leader in enterprise cloud software and HCI  solutions, in 2009 and served as its Chief Executive Officer and as the Chairman of its board of directors for twelve years.</Text>
          </div>
          <div className="flex flex-col w-full">
            <Image src="https://static.wixstatic.com/media/bc5473_ec57a2bd3c5f419f92b50a898e1cadf6~mv2.png/v1/crop/x_74,y_0,w_412,h_412/fill/w_384,h_372,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bc5473_ec57a2bd3c5f419f92b50a898e1cadf6~mv2.png" width="1024" height="1024" alt="" className="h-96 transition-all shadow-2xl hover:shadow-md object-cover rounded-[2rem] grayscale" />
            <Text className="w-fit mt-8 p-8 text-3xl bg-gradient-to-br from-black to-stone-500 bg-clip-text tracking-[-0.02em] text-transparent opacity-100 drop-shadow-md">
              Amit Kumar
            </Text>
            <Text className="px-8 text-md text-stone-500">Mr. Kumar co-managed over $2b of US equity funds at Columbia Threadneedle for six years. He has spent over fifteen years researching companies in technology, biotech/ life sciences, and financial sectors. He has previously worked in the tech industry for ten years.</Text>
          </div>
        </div>
      </PageContainer>



      {/* LAST SECTION */}
      <PageContainer className="h-64 md:h-96 w-full">
        <div className="rounded-[2rem] h-full px-8 md:rounded-[6rem] from-50% bg-gradient-to-b from-transparent to-purple-300 w-full">
          <Text className="text-3xl md:text-5xl text-center py-2 bg-gradient-to-br from-black to-stone-500 bg-clip-text tracking-[-0.02em] text-transparent opacity-100 drop-shadow-sm">Building a culture of</Text>
          <Text className="flex items-center justify-center text-3xl md:text-5xl text-center py-2 bg-gradient-to-br from-black to-stone-500 bg-clip-text tracking-[-0.02em] text-transparent opacity-100 drop-shadow-sm">
            <span className="relative h-[3rem] w-48 overflow-hidden">
              <span
                className="absolute left-0 h-full w-full -translate-y-full animate-slide leading-none bg-gradient-to-br from-purple-500 to-purple-300 bg-clip-text tracking-[-0.02em] text-transparent opacity-100 drop-shadow-sm"
              >
                Ethos
              </span>
              <span
                className="absolute left-0 h-full w-full -translate-y-full animate-slide leading-none bg-gradient-to-br from-purple-500 to-purple-300 bg-clip-text tracking-[-0.02em] text-transparent opacity-100 drop-shadow-sm [animation-delay:1.63s]"
              >
                Values
              </span>
              <span
                className="absolute left-0 h-full w-full -translate-y-full animate-slide leading-none bg-gradient-to-br from-purple-500 to-purple-300 bg-clip-text tracking-[-0.02em] text-transparent opacity-100 drop-shadow-sm [animation-delay:3.33s]"
              >
                Morals
              </span>
            </span>
          </Text>
        </div>
      </PageContainer>


    </main>
  )
}
