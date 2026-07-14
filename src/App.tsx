import React, { useState } from 'react';
import { translations, Language } from './data';
import type { Work } from './data';

function App() {
  const [lang, setLang] = useState<Language>('uz');

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-blue-200">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 flex justify-center py-4 gap-6 tracking-widest text-sm text-gray-500 uppercase">
        {(['uz', 'en', 'ru'] as Language[]).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`transition-colors duration-200 ${lang === l ? 'text-gray-900 font-medium border-b-2 border-gray-900 pb-1' : 'hover:text-gray-700 pb-1 border-b-2 border-transparent'}`}
          >
            {l}
          </button>
        ))}
      </nav>

      <div className="max-w-4xl mx-auto pt-20 px-4 space-y-12">

        {/* Page 1: Cover */}
        <section className="bg-white shadow-md overflow-hidden w-full">
          <img
            src={`/cover-${lang}.png`}
            alt="Cover"
            className="w-full h-auto block"
            onError={(e) => {
              if (!e.currentTarget.src.endsWith('cover-uz.png')) {
                e.currentTarget.src = '/cover-uz.png';
              }
            }}
          />
        </section>

        {/* Page 2: Works Part 1 */}
        <section className="bg-white shadow-md p-12 w-full text-gray-900">
          <p className="text-lg mb-12">{t.worksIntro}</p>

          <WorkRow work={t.works.invisible} />
          <WorkRow work={t.works.signals} tall />
          <WorkRow work={t.works.balance} />
          <WorkRow work={t.works.snowballs} tall />
        </section>

        {/* Page 3: Works Part 2 */}
        <section className="bg-white shadow-md p-12 w-full text-gray-900">
          <WorkRow work={t.works.marionnets1} />
          <WorkRow work={t.works.marionnets2} tall />
          <WorkRow work={t.works.boat} />
          <WorkRow work={t.works.excavation} tall />
          <WorkRow work={t.works.ballet} />
        </section>

        {/* Page 4: Works Part 3 */}
        <section className="bg-white shadow-md p-12 w-full text-gray-900">
           <WorkRow work={t.works.meadow} />
           <WorkRow work={t.works.garden} tall />
           <WorkRow work={t.works.dice} />
           <WorkRow work={t.works.pendulum5} tall />
           <WorkRow work={t.works.delivery} />
        </section>

        {/* Page 5: Artist Bio */}
        <section className="bg-white shadow-md p-12 w-full text-gray-900">
          <div className="flex flex-row gap-12 mb-16">
            {/* Artist Photo */}
            <div className="w-1/3 shrink-0">
               <div className="w-full bg-transparent border border-gray-300 relative overflow-hidden group aspect-[4/3]">
                  <img
                    src="/artist.jpg"
                    alt="Artist"
                    className="absolute inset-0 w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/800x600/ffffff/64748b?text=Artist+Photo`;
                    }}
                  />
               </div>
               <p className="text-sm mt-4 italic text-gray-600">{t.photoCredit}</p>
            </div>

            {/* Biography */}
            <div className="w-2/3">
              <h2 className="text-3xl font-light mb-6 uppercase tracking-wider">{t.bioTitle}</h2>
              <div className="space-y-4 text-gray-800 leading-relaxed whitespace-pre-line">
                {t.bio}
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Footer Space */}
      <div className="h-20"></div>
    </div>
  );
}

function WorkRow({ work, tall = false }: { work: Work, tall?: boolean }) {
  if (tall) {
    return (
      <div className="flex flex-row gap-8 mb-20">
        <div className="w-1/2 flex flex-col pt-8">
           <WorkInfo work={work} />
        </div>
        <div className="w-1/2">
          <WorkImage work={work} tall={true} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row gap-8 mb-20">
      <div className="w-2/3">
         <WorkImage work={work} />
      </div>
      <div className="w-1/3 flex flex-col pt-8">
         <WorkInfo work={work} />
      </div>
    </div>
  );
}

function WorkInfo({ work }: { work: Work }) {
  return (
    <div>
      <h3 className="text-2xl font-medium mb-1">{work.title}</h3>
      <p className="text-gray-500 mb-6">{work.year}</p>

      <p className="text-gray-800 mb-4 whitespace-pre-line">{work.description}</p>
      <p className="text-gray-600 italic">{work.specs}</p>
    </div>
  );
}

function WorkImage({ work, tall = false }: { work: Work, tall?: boolean }) {
  return (
    <div className={`w-full bg-transparent border border-slate-300 relative overflow-hidden group ${tall ? 'aspect-[1/2]' : 'aspect-video'}`}>
      <img
        src={`/${work.imgKey}.jpg`}
        alt={work.title}
        className="absolute inset-0 w-full h-full object-contain object-center"
        onError={(e) => {
          const width = tall ? 400 : 800;
          const height = tall ? 800 : 450;
          (e.target as HTMLImageElement).src = `https://placehold.co/${width}x${height}/ffffff/64748b?text=${encodeURIComponent(work.title)}`;
        }}
      />
    </div>
  );
}

export default App;