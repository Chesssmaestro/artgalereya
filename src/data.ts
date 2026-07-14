export type Language = 'uz' | 'en' | 'ru';

export interface Work {
  title: string;
  meta: string;
  desc?: string;
  imgKey: string;
}

export interface TranslationData {
  dates: string;
  title: string;
  artist: string;
  worksIntro: string;
  works: Record<string, Work>;
  artistBio: string[];
  artistLocation: string;
  footerText: string;
}

export const translations: Record<Language, TranslationData> = {
  uz: {
    dates: "20.05 — 31.07.2026",
    title: "QO'G'IRCHOQLAR",
    artist: "PETER\nAERSCHMANN",
    worksIntro: "Barcha ishlar — HD-video, siklik proyeksiya, ovozsiz",
    works: {
      invisible: { imgKey: "invisible", title: "KO'RINMASLAR", meta: "2022 · 10 daqiqa", desc: "Raqamli texnologiyalar bizni bog'lab turadi va bir vaqtning o'zida bir-birimizdan uzoqlashtiradi. E'tibor ekranlarga ko'chadi, jismoniy mavjudlik esa ikkinchi darajaga tushadi. Asar tobora kuchayib borayotgan uzilish haqida — nafaqat insonlar orasida, balki inson va muhit o'rtasida ham. Doimiy raqamli sho'ng'ish holatida mavjudlikning o'zi deyarli ko'rinmas bo'lib qoladi." },
      signals: { imgKey: "signals", title: "SIGNALLAR", meta: "2025 · 7 daqiqa", desc: "Himoya kostyumidagi figura platformada aylanadi. Atrofida nol yoki bir bilan belgilangan sferalar mavjud. Asar dunyoning raqamli kodlanishi va inson bilan tizim o'rtasidagi taranglik haqida: figura bir vaqtning o'zida ham himoyalangan, ham binar sikl ichida izolyatsiya qilingan." },
      excavation: { imgKey: "excavation", title: "QAZISHMA", meta: "2016 · 10 daqiqa" },
      meadow: { imgKey: "meadow", title: "O'TLOQ", meta: "2013 · 10 daqiqa" },
      ballet: { imgKey: "ballet", title: "BALET", meta: "2025 · 6 daqiqa" },
      snowballs: { imgKey: "snowballs", title: "QOR SHARLARI", meta: "2023 · 10 min" },
      boat: { imgKey: "boat", title: "QAYIQ", meta: "2025 · 12 daqiqa", desc: "Ko'rinmas kuchlar qayiqni tebratadi. Himoya kostyumidagi yo'lovchilar bir-biridan ajratilgan — aloqasiz, har biri o'z ichiga yopilgan. Asar ekologik beqarorlik va ko'rinmas jarayonlar hamda kuchayib borayotgan izolyatsiya mavjudlikning nozik holatini qanday shakllantirishi haqida." },
      garden: { imgKey: "garden", title: "BOG'", meta: "2023 · 10 daqiqa", desc: "Mevalar va o'simliklar tirik tabiat kabi emas, texnik jarayonlar singari mexanik harakat qiladi. Tabiatni simulyatsiya qilish nimani anglatadi? Raqamli dunyo haqiqiy dunyoning o'rnini bosa oladimi yoki bu begonalashuv shaklimi? Asar texnologiya va tabiat birlashadigan yoki to'qnashadigan kelajak haqida fikr yuritadi." },
      marionettes1: { imgKey: "marionettes-1", title: "QO'G'IRCHOQLAR-1", meta: "2025 · 10 daqiqa" },
      marionettes2: { imgKey: "marionettes-2", title: "QO'G'IRCHOQLAR-2", meta: "2025 · 12 daqiqa" },
      balance: { imgKey: "balance", title: "MUVOZANAT", meta: "2025 · 10 daqiqa" },
      pendulum: { imgKey: "pendulum-5", title: "MAYATNIK-5", meta: "2023 · 10 daqiqa" },
      delivery: { imgKey: "delivery", title: "YETKAZIB BERISH", meta: "2024 · 10 daqiqa", desc: "Harakatlari shahar makonidan uzilgan va cheksiz siklga tushib qolgan kuryerlar guruhi. Deyarli shaffof bo'lib, ular globallashuv va tezlik talabiga asoslangan dunyoning ramziga aylanadi. Ularning takrorlanuvchi harakati iste'mol va yetkazib berish tizimlarini aks ettiradi hamda ularni qo'llab-quvvatlovchi yashirin ijtimoiy va ekologik oqibatlarga ishora qiladi." },
      dice: { imgKey: "dice", title: "O'YIN ZARLARI", meta: "2025 · 9 daqiqa", desc: "Oq qo'lqopdagi qo'llar uchta o'yin kubining harakatini boshqaradi. Kublar bo'ysunayotgandek ko'rinadi, ammo ayni paytda o'z logikasiga ham amal qiladi — tasodif, taqdir va nazorat orasida mavjud bo'ladi. Asar to'liq nazorat qilib bo'lmaydigan tizimlar shakllantiradigan noaniqlik hissini uzatadi. Sun'iy materiallar va sahnalashtirilgan imo-ishoralar inson aralashuvi, sun'iy muhit va ular keltirib chiqaradigan oldindan aytib bo'lmaydigan oqibatlar o'rtasidagi nozik munosabatlarni ko'rsatadi." },
    },
    artistBio: [
      "Odamlar siymolari bir xil harakatlarni qayta-qayta takrorlaydigan videoinstallatsiyalar — bu harakatlar ham tabiiy, ham ayni paytda mexanik, go'yoki kimdir ularni chetdan boshqarayotgandek. Peter Aerschmann yigirma yildan oshiq vaqtdan beri video bilan ishlaydi. Uning halqasimon sahnalari — zamonaviy dunyoni ham oyoqda tutib turgan, ham ayni vaqtda uni yemirayotgan jarayonlarning metaforasidir: iste'mol, ishlab chiqarish, resurslarning tugashi. Bular — insoniyat sezmagan holda kundan kunga takrorlaydigan o'sha ishoralardir. Ammo halqalar ichida nimadir sodir bo'ladi. Tanaffus. Adashish. Chekkaga bir qadam. Aynan shu yerda, ana shu mayda darzlarda o'zgarish uchun imkoniyat paydo bo'ladi.",
      "\"Qo'g'irchoqlar\" — biz har kuni bir qismi bo'lib qolayotgan tizimlarni ko'rishga va aylanadan chiqa olamizmi, degan savol ustida o'ylab ko'rishga da'vatdir."
    ],
    artistLocation: "2026 · Toshkent",
    footerText: "\"Art Station: so'z erkinligi, badiiy ijod, inklyuziv muloqot va jamiyat rivoji chorrahalari\" loyihasi doirasida, Shveytsariya taraqqiyot va hamkorlik agentligi (SDC) tomonidan qo'llab-quvvatlanayotgan Markaziy Osiyo San'at va Madaniyat Dasturi (CAACP), bilan uzoq muddatli hamkorlikda, hamda Pro Helvetia Shveysariya san'at kengashi va O'zbekiston Respublikasi Ekologiya va iqlim o'zgarishi milliy qo'mitasi ko'magida amalga oshirilgan."
  },
  en: {
    dates: "20.05 — 31.07.2026",
    title: "MARIONETTES",
    artist: "PETER\nAERSCHMANN",
    worksIntro: "All works are HD video, looped projection, silent",
    works: {
      invisible: { imgKey: "invisible", title: "INVISIBLE", meta: "2022 · 10 min", desc: "Digital technologies keep us connected while simultaneously distancing us. Attention shifts toward screens, and physical presence becomes secondary. The work reflects a growing rupture — not only between people, but also between humans and their environment. In a state of constant digital immersion, presence itself becomes almost invisible." },
      signals: { imgKey: "signals", title: "SIGNALS", meta: "2025 · 7 min", desc: "A figure in a protective suit rotates on a platform. Around it are spheres marked with one or zero. The work explores the digital encoding of the world and the tension between human beings and systems: the figure is simultaneously protected and isolated within a binary cycle." },
      excavation: { imgKey: "excavation", title: "EXCAVATION", meta: "2016 · 10 min" },
      meadow: { imgKey: "meadow", title: "MEADOW", meta: "2013 · 10 min" },
      ballet: { imgKey: "ballet", title: "BALET", meta: "2025 · 6 min" },
      snowballs: { imgKey: "snowballs", title: "SNOWBALLS", meta: "2023 · 10 min" },
      boat: { imgKey: "boat", title: "BOAT", meta: "2025 · 12 min", desc: "Invisible forces rock the boat. Passengers in protective suits are isolated from one another — without contact, each closed within themselves. The work addresses ecological instability and how invisible processes and growing isolation shape a fragile condition of existence." },
      garden: { imgKey: "garden", title: "GARDEN", meta: "2023 · 10 min", desc: "Fruits and plants move mechanically, like technical processes rather than living nature. What does it mean to simulate nature? Can the digital world replace the real one — or is this a form of alienation? The reflection concerns a future in which technology and nature merge or enter into conflict." },
      marionettes1: { imgKey: "marionettes-1", title: "MARIONETTES-1", meta: "2025 · 10 min" },
      marionettes2: { imgKey: "marionettes-2", title: "MARIONETTES-2", meta: "2025 · 12 min" },
      balance: { imgKey: "balance", title: "BALANCE", meta: "2025 · 10 min" },
      pendulum: { imgKey: "pendulum-5", title: "PENDULUM-5", meta: "2023 · 10 min" },
      delivery: { imgKey: "delivery", title: "DELIVERY", meta: "2024 · 10 min", desc: "A group of couriers, whose movements are isolated from urban space and trapped in an endless cycle. Almost transparent, they become symbols of a world shaped by globalization and the demand for speed. Their repetitive motion reflects systems of consumption and delivery while simultaneously pointing to the hidden social and ecological consequences that sustain them." },
      dice: { imgKey: "dice", title: "DICE", meta: "2025 · 9 min", desc: "Hands in white gloves direct the movement of three dice. The dice appear obedient while at the same time following their own logic, existing between randomness, fate, and control. The work conveys a sense of uncertainty shaped by systems that can never be fully controlled. Synthetic materials and staged gestures point to fragile relations between human intervention, artificial environments, and the unpredictable consequences they produce." },
    },
    artistBio: [
      "Video installations in which human figures repeat the same movements over and over again — movements that are both natural and mechanical at once, as if controlled by an external force. Peter Aerschmann has worked with video for more than twenty years. His looped scenes are metaphors for the processes that sustain modern life while simultaneously destroying it: consumption, production, resource depletion. The very gestures humanity repeats day after day without noticing. But inside the loop something shifts. A pause. A malfunction. A step aside. It is precisely in these micro-fractures that the possibility of change emerges.",
      "Marionettes is an invitation to perceive the systems we remain part of every day and to ask ourselves whether it is possible to step out of the cycle."
    ],
    artistLocation: "2026 · Tashkent",
    footerText: "The exhibition is presented within the framework of the project \"Art Station: crossroads of the freedom of expression, artistic creativity, inclusive dialogue and community development\" under the long-standing cooperation with the Central Asia Art and Culture Programme (CAACP) by Swiss Agency for Development (SDC), with support from the Swiss Arts Council Pro Helvetia and the National Committee on Ecology and Climate Change of the Republic of Uzbekistan."
  },
  ru: {
    dates: "20.05 — 31.07.2026",
    title: "МАРИОНЕТКИ",
    artist: "ПЕТЕР\nЭРШМАНН",
    worksIntro: "Все работы — HD-видео, зацикленная проекция, без звука",
    works: {
      invisible: { imgKey: "invisible", title: "НЕВИДИМЫЕ", meta: "2022 · 10 мин", desc: "Цифровые технологии держат нас на связи и одновременно отдаляют. Внимание уходит к экранам, физическое присутствие становится второстепенным. Работа о нарастающем разрыве — не только между людьми, но и между человеком и средой. В состоянии постоянного цифрового погружения само присутствие становится почти невидимым." },
      signals: { imgKey: "signals", title: "СИГНАЛЫ", meta: "2025 · 7 мин", desc: "Фигура в защитном костюме вращается на платформе. Вокруг — сферы, помеченные единицей или нулём. Работа о цифровом кодировании мира и напряжении между человеком и системой: фигура одновременно защищена и изолирована внутри бинарного цикла." },
      excavation: { imgKey: "excavation", title: "РАСКОП", meta: "2016 · 10 мин" },
      meadow: { imgKey: "meadow", title: "ЛУГ", meta: "2013 · 10 мин" },
      ballet: { imgKey: "ballet", title: "БАЛЕТ", meta: "2025 · 6 мин" },
      snowballs: { imgKey: "snowballs", title: "СНЕЖНЫЕ ШАРЫ", meta: "2023 · 10 мин" },
      boat: { imgKey: "boat", title: "ЛОДКА", meta: "2025 · 12 мин", desc: "Невидимые силы качают лодку. Пассажиры в защитных костюмах изолированы друг от друга — без контакта, каждый замкнут в себе. Работа об экологической нестабильности и о том, как невидимые процессы и растущая изоляция формируют хрупкое состояние существования." },
      garden: { imgKey: "garden", title: "САД", meta: "2023 · 10 мин", desc: "Фрукты и растения движутся механически, как технические процессы, а не как живая природа. Что значит симулировать природу? Может ли цифровой мир заменить реальный — или это форма отчуждения? Размышление о будущем, в котором технологии и природа сливаются или вступают в конфликт." },
      marionettes1: { imgKey: "marionettes-1", title: "МАРИОНЕТКИ-1", meta: "2025 · 10 мин" },
      marionettes2: { imgKey: "marionettes-2", title: "МАРИОНЕТКИ-2", meta: "2025 · 12 мин" },
      balance: { imgKey: "balance", title: "БАЛАНС", meta: "2025 · 10 мин" },
      pendulum: { imgKey: "pendulum-5", title: "МАЯТНИК-5", meta: "2023 · 10 мин" },
      delivery: { imgKey: "delivery", title: "ДОСТАВКА", meta: "2024 · 10 мин", desc: "Группа курьеров, чьи движения изолированы от городского пространства и замедлены в бесконечном цикле. Почти призрачные, они становятся символами мира, сформированного глобализацией и требованием скорости. Их повторяющееся движение отражает системы потребления и доставки, одновременно указывая на скрытые социальные и экологические последствия, поддерживающие их существование." },
      dice: { imgKey: "dice", title: "ИГРАЛЬНЫЕ КОСТИ", meta: "2025 · 9 мин", desc: "Руки в белых перчатках направляют движение трёх игральных костей. Кажется, будто кости подчиняются — и одновременно следуют собственной логике, существуя между случайностью, судьбой и контролем. Работа передаёт ощущение неопределённости, сформированной системами, которые невозможно полностью контролировать. Синтетические материалы и постановочные жесты указывают на хрупкие отношения между человеческим вмешательством, искусственной средой и непредсказуемыми последствиями, которые они порождают." },
    },
    artistBio: [
      "Видеоинсталляции, в которых фигуры людей снова и снова повторяют одни и те же движения — естественные и одновременно механические, будто кем-то управляемые извне. Петер Эршманн работает с видео больше двадцати лет. Его зацикленные сцены — метафора процессов, которые держат современный мир на плаву и одновременно расшатывают его: потребление, производство, истощение ресурсов. Те самые жесты, которые человечество повторяет день за днём, не замечая. Но внутри петель что-то происходит. Пауза. Сбой. Шаг в сторону. Именно здесь, в этих микро-трещинах, и появляется шанс на перемены.",
      "«Марионетки» — приглашение увидеть системы, частью которых мы остаёмся каждый день, и задуматься: способны ли мы выйти из круга."
    ],
    artistLocation: "2026 · Ташкент",
    footerText: "Выставка представлена в рамках проекта «Art Station: перекресток свободы самовыражения, художественного творчества, инклюзивного диалога и развития общества», осуществляемого при многолетнем сотрудничестве с Центральноазиатской программой искусства и культуры (CAACP) Швейцарского агентства по развитию и сотрудничеству (SDC), при поддержке Швейцарского совета по искусству Pro Helvetia и Национального комитета по экологии и изменению климата Республики Узбекистан."
  }
};
