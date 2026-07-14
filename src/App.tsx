import React, { useState } from 'react';
import { translations, Language, Work } from './data';

function App() {
  const [lang, setLang] = useState<Language>('uz');
  const t = translations[lang];
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="min-h-screen bg-gray-100 font-sans pb-20 min-w-[1024px]">
      {/* Language Switcher */}
      <div className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50 py-3 px-6 flex justify-center gap-8 shadow-sm min-w-[1024px]">
        {(['uz', 'en', 'ru'] as Language[]).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`uppercase tracking-widest text-sm transition-colors ${
              lang === l ? 'font-bold text-blue-900 border-b-2 border-blue-900' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      <div className="max-w-4xl mx-auto pt-20 px-4 space-y-12">

        {/* Page 1: Cover */}
        <section className="bg-white shadow-md overflow-hidden flex flex-col w-full min-h-[800px]">
          {/* Top Blue Area with Background Image Placeholder */}
          <div className="flex-1 bg-[#1A3A5A] relative flex items-center justify-center p-8 overflow-hidden min-h-[500px]">
            <img
              src={`${baseUrl}cover-${lang}.jpg`}
              alt="Cover"
              className="absolute inset-0 w-full h-full object-cover opacity-90"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            {/* The actual image would go here. We use a stylized placeholder for now. */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#102B45] to-[#1A3A5A] opacity-90 mix-blend-multiply pointer-events-none"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
               {/* Decorative background to simulate the complex 3D cover image */}
               <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-white"><path d="M0,0 L100,100 M100,0 L0,100 M50,0 L50,100 M0,50 L100,50" stroke="currentColor" strokeWidth="0.5"/></svg>
            </div>

            <div className="absolute top-10 right-12 text-white text-5xl italic font-light tracking-wide z-10">
              {t.dates}
            </div>
          </div>

          {/* Bottom White Area */}
          <div className="bg-white px-12 py-16 flex flex-col justify-center border-t border-gray-100">
            <h1 className="text-7xl italic font-light tracking-wide text-gray-900 mb-4">{t.title}</h1>
            <h2 className="text-4xl italic font-light tracking-widest text-gray-800 whitespace-pre-line">{t.artist}</h2>
          </div>
        </section>

        {/* Page 2: Works Part 1 */}
        <section className="bg-white shadow-md p-12 w-full text-gray-900">
          <p className="text-lg mb-12">{t.worksIntro}</p>

          <WorkRow work={t.works.invisible} />
          <WorkRow work={t.works.signals} tall />

          <div className="grid grid-cols-4 gap-6 mb-16">
            <WorkGridItem work={t.works.excavation} />
            <WorkGridItem work={t.works.meadow} />
            <WorkGridItem work={t.works.ballet} />
            <WorkGridItem work={t.works.snowballs} />
          </div>

          <WorkRow work={t.works.boat} />
        </section>

        {/* Page 3: Works Part 2 */}
        <section className="bg-white shadow-md p-12 w-full text-gray-900">
          <WorkRow work={t.works.garden} />

          <div className="grid grid-cols-4 gap-6 mb-16">
            <WorkGridItem work={t.works.marionettes1} />
            <WorkGridItem work={t.works.marionettes2} />
            <WorkGridItem work={t.works.balance} />
            <WorkGridItem work={t.works.pendulum} />
          </div>

          <WorkRow work={t.works.delivery} />
          <WorkRow work={t.works.dice} tall />
        </section>

        {/* Page 4: Artist Bio & Footer */}
        <section className="bg-white shadow-md p-12 w-full text-gray-900 flex flex-col">
          <div className="flex flex-row gap-12 mb-16">
            {/* Artist Photo */}
            <div className="w-1/3 shrink-0">
               <div className="w-full bg-gray-200 border border-gray-300 relative overflow-hidden group aspect-[4/3]">
                  <img
                    src={`${baseUrl}artist.jpg`}
                    alt="Artist"
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/800x600/e2e8f0/64748b?text=Artist+Photo`;
                    }}
                  />
               </div>
               <div className="mt-6">
                 <h3 className="uppercase italic font-bold text-xl">{t.artist.replace('\n', ' ')}</h3>
                 <p className="text-gray-600 mt-1 text-base">{t.artistLocation}</p>
               </div>
            </div>

            {/* Bio Text */}
            <div className="w-2/3 space-y-4 text-base">
               {t.artistBio.map((paragraph, idx) => (
                 <p key={idx} className="leading-relaxed">{paragraph}</p>
               ))}
            </div>
          </div>

          {/* Footer & Logos */}
          <div className="mt-auto pt-12 border-t border-gray-200">
             <p className="text-sm text-gray-500 leading-relaxed max-w-4xl mb-12">{t.footerText}</p>

             {/* Fake Logos Grid */}
             <div className="flex flex-wrap items-center justify-between gap-8 opacity-60 grayscale">
                <div className="flex items-center gap-2"><div className="w-8 h-8 rounded-full bg-blue-800 shrink-0"></div><span className="text-xs font-bold w-32 leading-tight">NATIONAL COMMITTEE ON ECOLOGY AND CLIMATE CHANGE</span></div>
                <div className="text-xl font-bold font-serif tracking-tighter">prohelvetia</div>
                <div className="flex items-center gap-2"><div className="w-8 h-8 bg-red-600 text-white flex items-center justify-center font-bold text-xl shrink-0">+</div><span className="text-xs w-48 leading-tight">Swiss Agency for Development and Cooperation SDC</span></div>
                <div className="w-16 h-16 rounded-full border-2 border-green-700 flex items-center justify-center text-[8px] text-center text-green-800 font-bold shrink-0">GREEN<br/>UNIVERSITY</div>
                <div className="text-xl font-light tracking-widest border-b border-black">ArtStation</div>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Subcomponents for the specific layout structures
function WorkRow({ work, tall = false }: { work: Work, tall?: boolean }) {
  if (!work) return null;
  return (
    <div className="flex flex-row gap-8 mb-16">
      <div className={`shrink-0 ${tall ? 'w-[220px]' : 'w-[320px]'}`}>
        <WorkImage work={work} tall={tall} />
        <h3 className="uppercase italic font-bold mt-3 tracking-wide text-base">{work.title}</h3>
        <p className="text-sm text-gray-700">{work.meta}</p>
      </div>
      {work.desc && (
        <div className="flex-1 mt-0">
          <p className="leading-relaxed text-gray-800 text-base">{work.desc}</p>
        </div>
      )}
    </div>
  );
}

function WorkGridItem({ work }: { work: Work }) {
  if (!work) return null;
  return (
    <div className="flex flex-col">
      <WorkImage work={work} />
      <h3 className="uppercase italic font-bold mt-3 tracking-wide text-sm leading-tight">{work.title}</h3>
      <p className="text-xs text-gray-700 mt-1">{work.meta}</p>
    </div>
  );
}

function WorkImage({ work, tall = false }: { work: Work, tall?: boolean }) {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <div className={`w-full bg-slate-200 border border-slate-300 relative overflow-hidden group ${tall ? 'aspect-[1/2]' : 'aspect-video'}`}>
      <img
        src={`${baseUrl}${work.imgKey}.jpg`}
        alt={work.title}
        className="absolute inset-0 w-full h-full object-cover object-center"
        onError={(e) => {
          const width = tall ? 400 : 800;
          const height = tall ? 800 : 450;
          (e.target as HTMLImageElement).src = `https://placehold.co/${width}x${height}/e2e8f0/64748b?text=${encodeURIComponent(work.title)}`;
        }}
      />
    </div>
  );
}

export default App;