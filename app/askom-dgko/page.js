'use client';
import Head from 'next/head';

export default function BirthdayPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 flex flex-col items-center justify-center p-4">
      <Head>
        <title>Happy Birthday!</title>
        <meta name="description" content="A beautiful birthday celebration page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center">
        {/* Confetti animation elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-70"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `fall ${Math.random() * 5 + 5}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `scale(${Math.random() + 0.5})`
              }}
            ></div>
          ))}
        </div>

        {/* Main content */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-2">
            DGKO AŞKOOOM!
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mx-auto my-6"></div>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Umuyorum ki yeni yaşını mutlu, huzurlu ve sağlıklı geçireceğiz. Seni çok seviyorum
          </p>
          
          <div className="my-8 relative">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-pink-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <svg className="w-32 h-32 text-pink-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl">
              🎂
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center text-2xl">
              🎁
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
            <div className="bg-pink-100 p-4 rounded-xl border border-pink-200">
              <div className="text-4xl mb-2">🎈</div>
              <h3 className="font-semibold text-pink-700">Sağlık</h3>
            </div>
            <div className="bg-purple-100 p-4 rounded-xl border border-purple-200">
              <div className="text-4xl mb-2">🎉</div>
              <h3 className="font-semibold text-purple-700">Mutluluk</h3>
            </div>
            <div className="bg-blue-100 p-4 rounded-xl border border-blue-200">
              <div className="text-4xl mb-2">✨</div>
              <h3 className="font-semibold text-blue-700">Huzur</h3>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-white text-sm">
          <p>Bu site ❤️ ile hazırlandı.</p>
        </div>
      </main>

      <style jsx global>{`
        @keyframes fall {
          0% { transform: translateY(-100px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
