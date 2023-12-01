---
title: Веб-производительность
slug: Learn/Performance
---

{{LearnSidebar}}

Для разработки веб-сайтов необходимы HTML, CSS и JavaScript. Чтобы создавать веб-сайты и приложения, которые люди хотят использовать, которые привлекают и удерживают пользователей, вам нужно создать ?? хороший пользовательский опыт. Частью такого пользовательского опыта является обеспечение быстрой загрузки контента и отзывчивости на взаимодействие с пользователем. Это известно как веб-performance, и в этом разделе вы сосредоточитесь на основах создания эффективных веб-сайтов.

В оставшихся частях учебного материала для новичков мы старались максимально придерживаться лучших практик Интернета, таких как производительность и [доступность](/ru/docs/Learn/Accessibility), однако было бы хорошо сосредоточиться и на таких темах. Убедиться, что вы знакомы с ними.

## Путь Обучения

Хотя знание HTML, CSS и JavaScript необходимо для реализации многих рекомендаций по повышению производительности сети, знание того, как создавать приложения, не является необходимым предварительным условием для понимания и измерения perfomance сети. Однако мы рекомендуем, чтобы перед тем, как вы приступили к работе с этим модулем, вы получили хотя бы общее представление о веб-разработке, проработав наше [Начало работы с сетью](/ru/docs/Learn/Getting_started_with_the_web) модулем.

Также было бы полезно углубиться в эти темы с помощью таких модулей, как:

- [Введение в HTML](/ru/docs/Learn/HTML/Introduction_to_HTML)
- [CSS первые шаги](/ru/docs/Learn/CSS/First_steps)
- [JavaScript первые шаги](/ru/docs/Learn/JavaScript/First_steps)

После того, как вы проработаете этот модуль, вы, вероятно, захотите глубже изучить веб-производительность - вы можете найти много дополнительных учений в нашем [разделе веб-производительности](/ru/docs/Web/Performance), включая обзоры API performance, инструментов тестирования и анализа, а также ошибки, связанные с узкими местами performance.

## Справочники

This topic contains the following guides. The following is a suggested order for working through them; you should definitely start with the first one.

- [Важность веб-производительности](/ru/docs/Learn/Performance/why_web_performance)
  - : В этой статье обсуждается важность производительности для доступности, пользователей и ваших бизнес-целей
- [What is web performance?](/ru/docs/Learn/Performance/What_is_web_performance)
  - : You know web performance is important, but what is constitutes web performance? This article introduces the components of performance, from web page loading and rendering, including how your content makes it into your users browser to be viewed, to what groups of people we need to consider when thinking about performance,
- [How do users perceive performance?](/ru/docs/Learn/Performance/Perceived_performance)
  - : More important than how fast your website is in milliseconds, is how fast your users perceive your site to be. These perceptions are impacted by actual page load time, idling, responsiveness to user interaction, and the smoothness of scrolling and other animations. In this article, we discuss the various loading metrics, animation, and responsiveness metrics, along with best practices to improve user perception, if not the actual timings.

<!---->

- [Measuring performance](/ru/docs/Learn/Performance/Measuring_performance)
  - : Now that you understand a few performance metrics, we take a deeper dive into performance tools, metrics, and APIs and how we can make performance part of the web development workflow.
- [Multimedia: images](/ru/docs/Learn/Performance/Multimedia)
  - : The lowest hanging fruit of web performance is often media optimization. Serving different media files based on each user agent's capability, size, and pixel density is possible. In this article we discuss the impact images have on performance, and the methods to reduce the number of bytes sent per image.
- [Multimedia: video](/ru/docs/Learn/Performance/video)

  - : The lowest hanging fruit of web performance is often media optimization. In this article we discuss the impact video content has on performance, and cover tips like removing audio tracks from background videos can improve performance.

- [JavaScript performance best practices](/ru/docs/Learn/Performance/JavaScript)
  - : JavaScript, when used properly, can allow for interactive and immersive web experiences — or it can significantly harm download time, render time, in-app performance, battery life, and user experience. This article outlines some JavaScript best practices that should be considered to ensure even complex content is as performant as possible.
- [HTML performance features](/ru/docs/Learn/Performance/HTML)
  - : Some attributes and the source order of your mark-up can impact the performance or your website. By minimizing the number of DOM nodes, making sure the best order and attributes are used for including content such as styles, scripts, media, and third-party scripts, you can drastically improve the user experience. This article looks in detail at how HTML can be used to ensure maximum performance.
- [CSS performance features](/ru/docs/Learn/Performance/CSS)
  - : CSS may be a less important optimization focus for improved performance, but there are some CSS features that impact performance more than others. In this article we look at some CSS properties that impact performance and suggested ways of handling styles to ensure performance is not negatively impacted.
- [Fonts and performance](/ru/docs/Learn/Performance/Fonts)
  - : A look at whether you need to include external fonts and, if you do, how to include the fonts your design requires with the least impact on your sites performance.

<!---->

- [Mobile performance](/ru/docs/Learn/Performance/Mobile)
  - : With web access on mobile devices being so popular, and all mobile platforms having fully-fledged web browsers, but possibly limited bandwidth, CPU and battery life, it is important to consider the performance of your web content on these platforms. This article looks at mobile-specific performance considerations.
- [Focusing on performance](/ru/docs/Learn/Performance/business_case_for_performance)
  - : There are many different things a developer can do to improve performance, but how fast is fast enough? How can you convince powers that be of the importance of these efforts? Once optimized, how can you ensure bloat doesn't come back? In this article we look at convincing managements, developing a performance culture and performance budget, and introduce ways to ensure regressions don't sneak into your code base.

## Смотрите также

- [Web performance resources](/ru/docs/Learn/Performance/Web_Performance_Basics)
  - : In addition to the front end components of HTML, CSS, JavaScript, and media files, there are features that can make applications slower and features that can make applications subjectively and objectively faster. There are many APIs, developer tools, best practices, and bad practices relating to web performance. Here we'll introduce many of these features ad the basic level and provide links to deeper dives to improve performance for each topic.
- [Responsive images](/ru/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
  - : In this article, we'll learn about the concept of responsive images — images that work well on devices with widely differing screen sizes, resolutions, and other such features — and look at what tools HTML provides to help implement them. This helps to improve performance across difference devices. Responsive images are just one part of [responsive design](/ru/docs/Learn/CSS/CSS_layout/Responsive_Design), a future CSS topic for you to learn.
- [Main web performance section on MDN](/ru/docs/Web/Performance)
  - : Our main web performance section — here you'll find much more detail on web performance including overviews of performance APIs, testing and analysis tools, and performance bottleneck gotchas.
