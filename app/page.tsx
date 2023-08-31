export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 ">
        <div className="hidden md:block">
        </div>
        <div className="overflow-hidden h-[40rem]">
          <div className="h-[48rem] -translate-y-[4rem]">
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.432/build/spline-viewer.js"></script>
            {/* @ts-ignore */}
            <spline-viewer url="https://prod.spline.design/NUhjZHFGrQJjdRp6/scene.splinecode"></spline-viewer>
          </div>
        </div>
      </div>

    </main>
  )
}
