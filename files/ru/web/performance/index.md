---
title: Web Performance
slug: Web/Performance
---

Производительность в web - это объективные измерения и пользовательские ощущения, связанные с загрузкой и работой приложения. Производительность - это о том, как долго сайт грузится, становится интерактивным и отзывчивым, о том, как плавно происходит взаимодействие с контентом. Плавный ли скролл страницы? Все ли кнопки кликабельны? Всплывающие окна загружаются и показываются быстро? А анимируются? Хорошая производительность требует учёта всех аспектов: как объективных, например, фактическое время загрузки страницы или частота смены кадров; так и субъективных - в буквальном смысле "как пользователь воспринимает систему".

Чем дольше загружается ваше приложение, тем больше пользователей решаются избавиться от него. Очень важно уменьшать время загрузки приложения, а так же промежутка времени, за которое оно становится интерактивным. Но в то же время, важно добавлять в приложение новые возможности, которые уменьшают время отклика и делают приложение интерактивным за счёт неочевидных хитростей, например, за счёт асинхронной загрузки данных, которые не понадобятся пользователю "здесь и сейчас".

Существуют инструменты измерения производительности, API и лучшие практики, которые помогут нам измерять и улучшать производительность. Мы постараемся раскрыть их в следующей секции:

## Ключевые статьи о производительности

{{LandingPageListSubpages}}

## Руководства для начинающих

The MDN [Web Performance Learning Area](/ru/docs/Learn/Performance) contains modern, up-to-date tutorials covering Performance essentials. Start here if you are a newcomer to performance:

- [Производительность веба: краткий обзор](/ru/docs/Learn/Performance/web_performance_overview)
  - : Обзор пути обучения повышения веб-производительности.
- [Что такое производительность веба?](/ru/docs/Learn/Performance/What_is_web_performance)
  - : В этой статье рассматривается производительность в целом — сюда входят инструменты, метрики, API, загрузка данных по сети и особые группы пользователей, которые нам нужно учитывать.
- [Как пользователи воспринимают производительность?](/ru/docs/Learn/Performance/Perceived_performance)
  - : То как пользователи воспринимают ваш сайт является более важным, чем значения метрик в миллисекундах. На это восприятие влияет фактическое время загрузки страницы, бездействие, реакция на взаимодействие с пользователем, а также плавность прокрутки и других анимаций. В этой статье мы обсудим различные метрики загрузки, анимацию и показатели отклика, а также лучшие практики для улучшения восприятия пользователем без влияния на сами метрики.
- [Основы производительности веба](/ru/docs/Learn/Performance/Web_Performance_Basics)
  - : В дополнение к HTML, CSS, JavaScript и мультимедийным файлам существуют функции, которые могут замедлить работу приложений, и функции, которые могут сделать приложения субъективно и объективно быстрее. Существует множество API, инструментов разработчика, хороших и плохих практик, связанных с веб-производительностью. Здесь мы представим многие из этих функций на базовом уровне и предоставим ссылки на более подробные сведения для повышения производительности по каждой теме.
- [Производительность HTML](/ru/docs/Learn/Performance/HTML)
  - : Некоторые атрибуты и порядок элементов разметки могут повлиять на производительность вашего веб-сайта. Сведя к минимуму количество DOM-элементов, обеспечив использование наилучшего порядка и атрибутов для включения контента, такого как стили, скрипты, мультимедиа и сторонние скрипты, вы можете значительно улучшить опыт пользователя (англ. UX). В этой статье подробно рассматривается, как можно использовать HTML для обеспечения максимальной производительности.
- [Мультимедиа: изображения и видео](/ru/docs/Learn/Performance/Multimedia)
  - : Наиболее доступным подходом повышения веб-производительности часто является медиа-оптимизация. Возможно обеспечить загрузку различных вариантов медиафайлов в зависимости от возможностей, размера и плотности пикселей дисплея каждого конкретного пользовательского устройства. Дополнительные советы, такие как удаление звуковых дорожек из фоновых видео, могут еще больше улучшить производительность. В этой статье мы обсудим влияние изображений, видео- и аудиоконтента на производительность, а также способы оптимизации.
- [Производительность CSS](/ru/docs/Learn/Performance/CSS)
  - : CSS может быть менее важным направлением оптимизации для повышения производительности, но есть некоторые функции CSS, которые влияют на производительность значительно сильнее прочих. В этой статье мы рассмотрим некоторые свойства CSS, влияющие на производительность, и предложим способы работы со стилями, которые помогут снизить негативное влияние на производительность.
- [Производительность JavaScript](/ru/docs/Learn/Performance/JavaScript)
  - : JavaScript при правильном использовании может обеспечить пользователю интерактивный и захватывающий опыт. Или он может значительно снизить время загрузки, время рендеринга, производительность в приложении, время автономной работы и удобство для пользователя. В этой статье описаны некоторые передовые методы работы с JavaScript, которые следует учитывать, чтобы обеспечить максимально возможную производительность даже сложного контента.
- [Производительность на мобильных устройствах](/ru/docs/Learn/Performance/Mobile)
  - : Поскольку доступ в Интернет на мобильных устройствах весьма популярен, а все мобильные платформы имеют полноценные браузеры, но, возможно, с ограниченной пропускной способностью, ЦП и временем автономной работы, важно учитывать производительность вашего веб-контента на этих платформах. В этой статье рассматриваются вопросы производительности для мобильных устройств.

## Using Performance APIs

- [Performance API](/ru/docs/Web/API/Performance_API/Using_the_Performance_API)
  - : This guide describes how to use the [`Performance`](/ru/docs/Web/API/Performance) interfaces that are defined in the [High-Resolution Time](https://w3c.github.io/hr-time/) standard.
- [Resource Timing API](/ru/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API)
  - : [Resource loading and timing](/ru/docs/Web/API/Resource_Timing_API) the loading of those resources, including managing the resource buffer and coping with CORS
- [The performance timeline](/ru/docs/Web/API/Performance_Timeline/Using_Performance_Timeline)
  - : The [Performance Timeline](/ru/docs/Web/API/Performance_Timeline) standard defines extensions to the [`Performance`](/ru/docs/Web/API/Performance) interface to support client-side latency measurements within applications. Together, these interfaces can be used to help identify an application's performance bottlenecks.
- [User Timing API](/ru/docs/Web/API/User_Timing_API/Using_the_User_Timing_API)
  - : Create application specific timestamps using the [user timing API](/ru/docs/Web/API/User_Timing_API)'s "mark" and "measure" entry types - that are part of the browser's performance timeline.
- [Frame Timing API](/ru/docs/Web/API/Frame_Timing_API/Using_the_Frame_Timing_API)
  - : The [`PerformanceFrameTiming`](/ru/docs/Web/API/PerformanceFrameTiming) interface provides _frame_ timing data about the browser's event loop.
- [Beacon API](/ru/docs/Web/API/Beacon_API/Using_the_Beacon_API)
  - : The [Beacon](/ru/docs/Web/API/Beacon_API) interface schedules an asynchronous and non-blocking request to a web server.
- [Intersection Observer API](/ru/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
  - : Learn to time element visibility with the [Intersection Observer API](/ru/docs/Web/API/Intersection_Observer_API) and be asynchronously notified when elements of interest becomes visible.

## Other documentation

- [Developer Tools Performance Features](/ru/docs/Tools/Performance)
  - : This section provides information on how to use and understand the performance features in your developer tools, including [Waterfall](/ru/docs/Tools/Performance/Waterfall), [Call Tree](/ru/docs/Tools/Performance/Call_Tree), and [Flame Charts](/ru/docs/Tools/Performance/Flame_Chart).
- [Profiling with the built-in profiler](/ru/docs/Mozilla/Performance/Profiling_with_the_Built-in_Profiler)
  - : Learn how to profile app performance with Firefox's built-in profiler.

## Glossary Terms

- {{glossary('Beacon')}}
- {{glossary('Brotli compression')}}
- {{glossary('Client hints')}}
- {{glossary('Code splitting')}}
- {{glossary('CSSOM')}}
- {{glossary('Domain sharding')}}
- {{glossary('Effective connection type')}}
- {{glossary('First contentful paint')}}
- {{glossary('First CPU idle')}}
- {{glossary('First input delay')}}
- {{glossary('First interactive')}}
- {{glossary('First meaningful paint')}}
- {{glossary('First paint')}}
- {{glossary('HTTP')}}
- {{glossary('HTTP_2', 'HTTP/2')}}
- {{glossary('Jank')}}
- {{glossary('Latency')}}
- {{glossary('Lazy load')}}
- {{glossary('Long task')}}
- {{glossary('Lossless compression')}}
- {{glossary('Lossy compression')}}
- {{glossary('Main thread')}}
- {{glossary('Minification')}}
- {{glossary('Network throttling')}}
- {{glossary('Packet')}}
- {{glossary('Page load time')}}
- {{glossary('Page prediction')}}
- {{glossary('Parse')}}
- {{glossary('Perceived performance')}}
- {{glossary('Prefetch')}}
- {{glossary('Prerender')}}
- {{glossary('QUIC')}}
- {{glossary('RAIL')}}
- {{glossary('Real User Monitoring')}}
- {{glossary('Resource Timing')}}
- {{glossary('Round Trip Time (RTT)')}}
- {{glossary('Server Timing')}}
- {{glossary('Speculative parsing')}}
- {{glossary('Speed index')}}
- {{glossary('SSL')}}
- {{glossary('Synthetic monitoring')}}
- {{glossary('TCP handshake')}}
- {{glossary('TCP slow start')}}
- {{glossary('Time to first byte')}}
- {{glossary('Time to interactive')}}
- {{glossary('TLS')}}
- {{glossary('TCP', 'Transmission Control Protocol (TCP)')}}
- {{glossary('Tree shaking')}}
- {{glossary('Web performance')}}

## Documents yet to be written

- [JavaScript performance best practices](/ru/docs/Learn/Performance/JavaScript)
  - : JavaScript, when used properly, can allow for interactive and immersive web experiences ... or it can significantly harm download time, render time, in app performance, battery life, and user experience. This article outlines some JavaScript best practices that can ensure even complex content's performance is the highest possible.
- [Mobile performance](/ru/docs/Learn/Performance/Mobile)
  - : With web access on mobile devices being so popular, and all mobile platforms having fully-fledged web browsers, but possibly limited bandwidth, CPU, and battery life, it is important to consider the performance of your web content on these platforms. This article also looks at mobile-specific performance considerations.
- Web font performance
  - : An often overlooked aspect of performance landscape are web fonts. Web fonts are more prominent in web design than ever, yet many developers simply embed them from a third party service and think nothing of it. In this article, we'll covers methods for getting your font files as small as possible with efficient file formats and sub setting. From there, we'll go on to talk about how browsers text, and how you can use CSS and JavaScript features to ensure your fonts render quickly, and with minimal disruption to the user experience.
- Performance bottlenecks
  - : …
- Understanding bandwidth
  - : Bandwidth is the amount of data measured in Megabits(Mb) or Kilobits(Kb) that one can send per second. This article explains the role of bandwidth in media-rich internet applications, how you can measure it, and how you can optimize applications to make the best use of available bandwidth.
- The role of TLS in performance
  - : TLS—or HTTPS as we tend to call it—is crucial in creating secure and safe user experiences. While hardware has reduced the negative impacts TLS has had on server performance, it still represents a substantial slice of the time we spend waiting for browsers to connect to servers. This article explains the TLS handshake process, and offers some tips for reducing this time, such as OCSP stapling, HSTS preload headers, and the potential role of resource hints in masking TLS latency for third parties.
- Reading performance charts
  - : Developer tools provide information on performance, memory, and network requests. Knowing how to read [waterfall](/ru/docs/Tools/Performance/Waterfall) charts, [call trees](/ru/docs/Tools/Performance/Call_Tree), traces, [flame charts](/ru/docs/Tools/Performance/Flame_Chart) , and [allocations](/ru/docs/Tools/Performance/Allocations) in your browser developer tools will help you understand waterfall and flame charts in other performance tools.
- Alternative media formats
  - : When it comes to images and videos, there are more formats than you're likely aware of. Some of these formats can take your highly optimized media-rich pages even further by offering additional reductions in file size. In this guide we'll discuss some alternative media formats, how to use them responsibly so that non-supporting browsers don't get left out in the cold, and some advanced guidance on transcoding your existing assets to them.
- Analyzing JavaScript bundles
  - : No doubt, JavaScript is a big part of modern web development. While you should always strive to reduce the amount of JavaScript you use in your applications, it can be difficult to know where to start. In this guide, we'll show you how to analyze your application's script bundles, so you know _what_ you're using, as well how to detect if your app contains duplicated scripts between bundles.
- [Lazy loading](/ru/docs/Web/Performance/Lazy_loading)
  - : Lazy loading (ленивая загрузка) - это стратегия, направленная на определение ресурсов как неблокирующих (не критических) для того, чтобы отложить загрузку этих ресурсов на тот момент, когда они действительно необходимы.
- Lazy-loading JavaScript with dynamic imports
  - : When developers hear the term "lazy loading", they immediately think of below-the-fold imagery that loads when it scrolls into the viewport. But did you know you can lazy load JavaScript as well? In this guide we'll talk about the dynamic import() statement, which is a feature in modern browsers that loads a JavaScript module on demand. Of course, since this feature isn't available everywhere, we'll also show you how you can configure your tooling to use this feature in a widely compatible fashion.
- [Controlling resource delivery with resource hints](/ru/docs/Web/Performance/Controlling_resource_delivery_with_resource_hints)
  - : Browsers often know better than we do when it comes to resource prioritization and delivery however they're far from clairyovant. Native browser features enable us to hint to the browser when it should connect to another server, or preload a resource before the browser knows it ever needs it. When used judiciously, this can make fast experience seem even faster. In this article, we cover native browser features like rel=preconnect, rel=dns-prefetch, rel=prefetch, and rel=preload, and how to use them to your advantage.
- [Performance Budgets](/ru/docs/Web/Performance/Performance_budgets)
  - : Marketing, design, and sales needs, and developer experience, often ad bloat, third-party scripts, and other features that can slow down web performance. To help set priorities, it is helpful to set a performance budget: a set of restrictions to not exceed during the development phase. In this article, we'll discuss creating and sticking to a performance budget.
- [Web performance checklist](/ru/docs/Web/Performance/Checklist)
  - : A performance checklist of features to consider when developing applications with links to tutorials on how to implement each feature, include service workers, diagnosing performance problems, font loading best practices, client hints, creating performant animations, etc.
- [Mobile performance checklist](/ru/docs/Web/Performance/Mobile_performance_checklist)
  - : A concise checklist of performance considerations impacting mobile network users on hand-held, battery operated devices.

## See also

HTML

- [The `<picture>` Element](/ru/docs/Web/HTML/Element/picture)
- [The `<video>` Element](/ru/docs/Web/HTML/Element/video)
- [The `<source>` Element](/ru/docs/Web/HTML/Element/source)
- [The `<img> srcset` attribute](/ru/docs/Web/HTML/Element/img#Attributes)

  - [Responsive images](/ru/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

- [Preloading content with `rel="preload"`](/ru/docs/Web/HTML/Preloading_content) - [(https://w3c.github.io/preload/](https://w3c.github.io/preload/))

CSS

- [will-change](/ru/docs/Web/CSS/will-change)
- GPU v CPU
- Measuring layout
- Font-loading best practices

JavaScript

- [DOMContentLoaded](/ru/docs/Web/Events/DOMContentLoaded)
- [Garbage collection](/ru/docs/Glossary/Garbage_collection)
- [requestAnimationFrame](/ru/docs/Web/API/window/requestAnimationFrame)

APIs

- [Performance API](/ru/docs/Web/API/Performance_API)
- [Navigation Timing API](/ru/docs/Web/API/Navigation_timing_API)
- [Media Capabilities API](/ru/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
- [Network Information API](/ru/docs/Web/API/Network_Information_API)
- [PerformanceNavigationTiming](/ru/docs/Web/API/PerformanceNavigationTiming)
- [Battery Status API](/ru/docs/Web/API/Battery_Status_API)
- [Navigator.deviceMemory](/ru/docs/Web/API/Navigator/deviceMemory)
- [Intersection Observer](/ru/docs/Web/API/Intersection_Observer_API)
- [Using the User Timing AP](/ru/docs/Web/API/User_Timing_API/Using_the_User_Timing_API)I
- [Long Tasks API](/ru/docs/Web/API/Long_Tasks_API)
- [High Resolution Timing API](/ru/docs/Web/API/DOMHighResTimeStamp) ([https://w3c.github.io/hr-time/)](https://w3c.github.io/hr-time/)
- [Resource Timing API](/ru/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API)
- [Page Visibility](/ru/docs/Web/API/Page_Visibility_API)
- [Cooperative Scheduling of Background Tasks API](/ru/docs/Web/API/Background_Tasks_API)

  - [requestIdleCallback()](/ru/docs/Web/API/Window/requestIdleCallback)

- [Beacon API](/ru/docs/Web/API/Beacon_API/Using_the_Beacon_API)
- Resource Hints - [dns-prefetch](/ru/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control), preconnect, [prefetch](/ru/docs/Web/HTTP/Link_prefetching_FAQ), and prerender
- [Fetchevent.navigationPreload](/ru/docs/Web/API/FetchEvent/navigationPreload)
- [Performance Server Timing API](/ru/docs/Web/API/PerformanceServerTiming)

Headers

- [Content-encoding](/ru/docs/Web/HTTP/Headers/Content-Encoding)
- HTTP/2
- [gZip](/ru/docs/Glossary/GZip_compression)
- Client Hints

Tools

- [Performance in Firefox Developer Tools](/ru/docs/Tools/Performance)
- Flame charts
- The Network panel
- Waterfall charts

Additional Metrics

- Speed Index and Perceptual Speed Index

Best Practices

- [Using Service Workers](/ru/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Using Web Workers](/ru/docs/Web/API/Web_Workers_API/Using_web_workers)

  - [Web Workers API](/ru/docs/Web/API/Web_Workers_API)

- [PWA](/ru/docs/Web/Apps/Progressive/Offline_Service_workers)
- [Caching](/ru/docs/Web/HTTP/Caching)
- Content Delivery Networks (CDN)
