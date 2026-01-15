const BASE = import.meta.env.BASE_URL
import Telegram from './Telegram'

function App() {
  return (
    <div className="min-h-screen bg-wedding-red overflow-x-hidden">
      {/* Section 1: Hero */}
      <section className="relative px-4 pt-12 md:pt-16 pb-16 md:pb-32 text-center bg-gradient-top-to-bottom">
        <h1 className="font-script text-black text-6xl md:text-8xl lg:text-9xl ">
          Wedding day
        </h1>

        <p className="font-body text-black text-xl md:text-4xl mb-1 italic mb-8 md:mb-12">
          Приглашение на нашу свадьбу
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 max-w-5xl mx-auto px-4">
          {/* Photo with frame */}
          <div className="relative flex-shrink-0">
            <div className="relative h-72 md:h-96" style={{ aspectRatio: '1170/963' }}>
              <img
                src={`${BASE}couple.png`}
                alt="Couple photo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="text-black text-center md:text-left">
            <p className="font-body text-xl md:text-4xl italic mb-1">
              Друзья, намечается<br />
              главный день! <br />
              Ждём всех<br />
              <strong>27 июня 2026 года</strong><br />
              на нашу свадьбу, <br />
              чтобы отпраздновать <br />
              это счастливое <br />
              событие вместе!
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Location */}
      <section className="relative bg-wedding-cream pt-4 pb-8">
        {/* Top torn edge */}
        <img
          src={`${BASE}section_edge.png`}
          alt=""
          className="top-edge"
        />

        <div className="max-w-6xl mx-auto px-4">
          {/* Title row */}
          <div className="flex flex-col md:flex-row md:items-start md:gap-8 mb-4">
            <div className="md:w-1/2 text-center md:text-right">
              <h2 className="font-script text-5xl md:text-7xl lg:text-8xl">
                Location
              </h2>
              <a
                href="https://yandex.com/maps/-/CLhEmX5v"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-block mt-4 text-white font-body text-xs md:text-sm px-6 py-2 rounded-full bg-[#E8A090] hover:bg-[#ca7865] transition-opacity uppercase tracking-wider"
              >
                ПОСМОТРЕТЬ НА КАРТЕ
              </a>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-2 text-right">
              <p className="font-body text-xl md:text-3xl leading-relaxed italic">
                Наше празднование<br />
                пройдет в деревне
              </p>
              <p className="font-body text-2xl md:text-4xl font-bold leading-tight">
                Гаврилково,<br />
                ул. Дорожная, д.40
              </p>
              <a
                href="https://yandex.com/maps/-/CLhEmX5v"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block md:hidden mt-4 text-white font-body text-xs md:text-sm px-6 py-2 rounded-full bg-[#E8A090] hover:bg-[#ca7865] transition-opacity uppercase tracking-wider"
              >
                ПОСМОТРЕТЬ НА КАРТЕ
              </a>
            </div>
          </div>

          {/* Content row: Photo left, text right */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            {/* House photo */}
            <div className="md:w-1/2">
              <img
                src={`${BASE}place.png`}
                alt="Place photo"
                className="w-full"
              />
            </div>

            {/* Description */}
            <div className="md:w-1/2 flex items-center">
              <p className="font-body text-[#4D4D4D] text-sm md:text-2xl leading-relaxed">
                Русская баня и бассейн стоят в
                10 метрах на этом же участке в отдельном
                доме. Бассейн теплый.
                Вместимость дома до 40 человек, спальных мест на 29 человек,
                всего 10 спален. Есть Wi-Fi, музыкальная
                аппаратура. Участок в 50 соток земли,
                большой паркинг
                (внутри территории 10 авто).
              </p>
            </div>
          </div>
        </div>

        {/* Bottom torn edge */}
        <img
          src={`${BASE}section_edge.png`}
          alt=""
          className="bottom-edge"
        />
      </section>

      {/* Section 3: Timing */}
      <section className="relative bg-wedding-red px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16">
          {/* Timeline */}
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="space-y-8 md:space-y-10">
              {/* Event 1 */}
              <div className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0 w-20 md:w-24 text-right">
                  <span className="font-body text-wedding-cream text-2xl md:text-3xl font-bold">15:00</span>
                </div>
                <div className="flex-grow border-l-2 border-wedding-cream/40 pl-4 md:pl-6">
                  <h3 className="font-body text-wedding-cream text-lg md:text-xl font-bold mb-1">
                    Сбор гостей
                  </h3>
                  <p className="font-body text-wedding-cream/80 text-sm md:text-base italic">
                    Welcome-зона, встреча гостей
                  </p>
                </div>
              </div>

              {/* Event 2 */}
              <div className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0 w-20 md:w-24 text-right">
                  <span className="font-body text-wedding-cream text-2xl md:text-3xl font-bold">16:30</span>
                </div>
                <div className="flex-grow border-l-2 border-wedding-cream/40 pl-4 md:pl-6">
                  <h3 className="font-body text-wedding-cream text-lg md:text-xl font-bold mb-1">
                    Начало банкета
                  </h3>
                  <p className="font-body text-wedding-cream/80 text-sm md:text-base italic">
                    Вкусная еда, музыка, развлечения
                  </p>
                </div>
              </div>

              {/* Event 3 */}
              <div className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0 w-20 md:w-24 text-right">
                  <span className="font-body text-wedding-cream text-2xl md:text-3xl font-bold">21:30</span>
                </div>
                <div className="flex-grow border-l-2 border-wedding-cream/40 pl-4 md:pl-6">
                  <h3 className="font-body text-wedding-cream text-lg md:text-xl font-bold mb-1">
                    Afterparty
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="md:w-1/2 text-center md:text-right order-1 md:order-2">
            <h2 className="font-script text-black text-5xl md:text-6xl lg:text-8xl mb-2">
              Timing
            </h2>
            <p className="font-body text-black text-xl md:text-2xl lg:text-3xl italic">
              Свадебного дня
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Details */}
      <section className="relative bg-wedding-cream md:min-h-[560px]">
        {/* Top torn edge */}
        <img
          src={`${BASE}section_edge.png`}
          alt=""
          className="top-edge"
        />

        <div className="max-w-6xl mx-auto px-4">
          <div className="font-body text-sm md:text-xl leading-relaxed">
            <img
              src={`${BASE}angels.png`}
              alt="Angels"
              className="block mx-auto float-right ml-6 mb-4 md:mt-0 w-auto h-[360px] md:h-[560px] max-w-none"
              style={{
                shapeOutside: `url(${BASE}angels.png)`,
                shapeMargin: '12px',
                shapeImageThreshold: 0.6,
              }}
            />

            <h2 className="font-script text-5xl md:text-6xl lg:text-8xl mb-6 pt-12 md:pt-16">
              Details
            </h2>

            <p className="mb-6">
              Дорогие друзья и родные, главный подарок для нас — это видеть вас
              в этот особенный день. Если же вы хотите порадовать нас чем-то еще, мы
              будем бесконечно благодарны за ваши сердечные пожелания в конверте.
              Это поможет нам осуществить нашу большую мечту о совместном будущем.
            </p>

            <p className="mb-6">
              Мы очень ждём этого дня и готовим по-настоящему праздничную атмосферу!
              Поэтому будем счастливы, если поддержите торжественный стиль.
              Мы подобрали палитру, которая поможет создать нам особенно гармоничные
              и красивые кадры:
            </p>

            {/* Color palette - overlapping circles */}
            <div className="flex my-8">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#000000] border-[0.5px] border-black"></div>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#B1B988] border-[0.5px] border-black -ml-8"></div>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#B1876F] border-[0.5px] border-black -ml-8"></div>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#EEE3AB] border-[0.5px] border-black -ml-8"></div>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#E4D6C9] border-[0.5px] border-black -ml-8"></div>
            </div>

            <p className="pb-12 md:pb-16">
              Если у тебя найдётся наряд в этих тонах — это будет
              чудесно! Если нет — не беда. Не стесняйся выбирать любую
              другую праздничную одежду, главное — ваше прекрасное
              настроение.
            </p>
          </div>
        </div>

        {/* Bottom torn edge */}
        <img
          src={`${BASE}section_edge.png`}
          alt=""
          className="bottom-edge"
        />
      </section>

      {/* Section 5: Guest Form */}
      <section className="relative px-4 py-16 md:py-24 text-center bg-gradient-bottom-to-top">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-script text-black text-6xl md:text-7xl lg:text-9xl mb-8">
            Анкета гостя
          </h2>

          <p className="font-body text-black text-xl md:text-2xl lg:text-3xl mb-1 italic">
            Просим подтвердить
          </p>
          <p className="font-body text-black text-xl md:text-2xl lg:text-3xl mb-10 italic">
            присутствие до <span className="underline decoration-1 underline-offset-4">1 июня 2026 года</span>
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfpVYsWjdIpLM3yOOHA9NkfpyVgd1NEOyRog9TkPhsNnfZiJQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-10 text-white font-body text-xl px-12 py-2 rounded-full bg-transparent border border-white hover:opacity-70 transition-opacity duration-300 tracking-wider italic"
          >
            Подтвердить
          </a>

          <p className="font-body text-black text-xl md:text-2xl lg:text-3xl mb-6 italic">
            А также присоединяйся<br />
            к общему чату
          </p>

          {/* Telegram paper plane icon */}
          <a
            href="https://t.me/+4-yIAYlPq1gxMDgy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-stone-600 hover:text-stone-800 transition-colors"
          >
            <Telegram />
          </a>
        </div>

        {/* Bottom padding */}
        <div className="h-8 md:h-16"></div>
      </section>
    </div>
  )
}

export default App
