---
title: Lazy loading
slug: Web/Performance/Lazy_loading
---

{{QuickLinksWithSubPages("Web/Performance")}}

**Lazy loading (ленивая загрузка)** - это стратегия, направленная на определение ресурсов как неблокирующих (не критических) для того, чтобы отложить загрузку этих ресурсов на тот момент, когда они действительно необходимы. Так можно сократить длину [критических этапов рендеринга](/ru/docs/Web/Performance/Critical_rendering_path), что приводит к уменьшению времени загрузки приложения.

Ленивая загрузка может происходить в разные моменты работы приложения, но, как правило, она запускается во время взаимодействия пользователя и системы, например, при скроллинге или навигации.

## Обзор

Вместе с ростом web-приложений драматически вырос объем и размеры ресурсов, отправляемых клиентскому приложению. С 2011 по 2019 медианный рост размеров ресурсов вырос с **\~100KB** до **\~400KB** для настольных компьютеров и с **\~50KB** до **\~350KB** для мобильных. А размер изображений вырос с **\~250KB** до **\~900KB** для настольных компьютеров и со **\~100KB** до **\~850KB** для мобильных.

Очевидно, что такое повышение объёмов способствует увеличению длительности загрузки приложения. Один из способов её сократить - это отложить загрузку ресурсов, которые не являются критически важными для приложения. Например, вы посещаете приложение интернет-магазина, которое состоит из списка товаров и корзины. Очевидно, что вам не нужны изображения товаров, которые сейчас находится за пределами экрана; очевидно так же, что вам не нужно грузить все данные о содержимом корзины до тех пор, пока пользователь не перешёл к ней.

## Стратегии

Ленивая загрузка (Lazy loading) может применяться к разным ресурсам и разными подходами.

### Общий подход

**Разделение кода (code splitting)**
JavaScript, CSS и HTML могут быть разделены на небольшие части, называемые чанками (chunks). При первоначальной загрузке приложения вы можете отправлять не цельное приложение, а только необходимые части, например, только каркас разметки. Данные для заполнения этого каркаса могут быть подгружены позже, например, с помощью AJAX. Есть два вида разделения кода:

- Разделение по точкам входа (entrypoint)
- Динамическое ([dynamic import()](/ru/docs/Web/JavaScript/Reference/Statements/import))

### JavaScript

**Указание типа "module**"
Любой тег скрипта с `type="module"` рассматривается как [JavaScript module](/ru/docs/Web/JavaScript/Guide/Modules), а его загрузка откладывается по умолчанию.

### CSS

По умолчанию CSS считается ресурсом, блокирующим рендеринг ([render blocking](/ru/docs/Web/Performance/Critical_rendering_path)). Это означает, что браузер не будет отображать контент до тех пор, пока не будет построена объектная модель CSS ([CSSOM](/ru/docs/Web/API/CSS_Object_Model)). Поэтому CSS-файл должен быть небольшим, чтобы он был доставлен так быстро, насколько это возможно. Рекомендуется использовать медиавыражения, для того чтобы вместо одного монолитного CSS-файла грузить специализированные.

```
<link href="style.css"    rel="stylesheet" media="all">
<link href="portrait.css" rel="stylesheet" media="orientation:portrait">
<link href="print.css"    rel="stylesheet" media="print">
```

Также в целях ускорения CSS можно применять оптимизации ([CSS optimizations](/ru/docs/Learn/Performance/CSS)).

### Шрифты

По умолчанию, загрузка шрифтов откладывается на тот момент, пока дерево рендера (render tree) не сформировано полностью. Это приводит к тому, что текст страницы может появиться не сразу.

Вы можете переопределить такое поведение и загрузить шрифты заранее, используя `<link rel="preload">`, [CSS font-display свойство](/ru/docs/Web/CSS/@font-face/font-display) или [Font Loading API](/ru/docs/Web/API/CSS_Font_Loading_API).

Смотрите также: [Element Link](/ru/docs/Web/HTML/Element/link)

### Изображения

Очень часто веб-страницы содержат множество изображений, загрузка которых заметно нагружает канал передачи данных и увеличивает длительность загрузки. Подавляющая часть этих изображений находятся за видимой областью экрана и не являются необходимым ([non-critical](/ru/docs/Web/Performance/Critical_rendering_path)), а для взаимодействия с пользователем требуют действия (например, прокрутки до них).

**Атрибут Loading**
Атрибут [`loading`](/ru/docs/Web/HTML/Element/img#loading) элемента {{HTMLElement("img")}} (или [`loading`](/ru/docs/Web/HTML/Element/iframe#loading) атрибут для {{HTMLElement("iframe")}}) могут быть использованы, чтобы указать браузеру на необходимость отложить загрузку изображений / iframe до тех пор, пока пользователь не доскроллит до них.

```
<img src="image.jpg" loading="lazy" alt="..." />
<iframe src="video-player.html" loading="lazy"></iframe>
```

Событие `load` запускается, когда все другие необходимые ресурсы были загружены. В это время, возможно (или даже наиболее вероятно), что изображения не будут загружены, даже если пользователь доскроллит до изображений и они будут в {{Glossary("visual viewport")}}.

Вы можете определить, было ли загружено то или иное изображение, проверив Boolean значение {{domxref("HTMLImageElement.complete", "complete")}}.

**Полифил**
Для использованиях в браузерах, которые не поддерживают данную технологию, рекомендуется использовать полифил: [loading-attribute-polyfill](https://github.com/mfranzke/loading-attribute-polyfill)

**Intersection Observer API**
[Intersection Observers](/ru/docs/Web/API/IntersectionObserver) позволяют вам узнать, как наблюдаемый вами элемент входит или выходит из зоны видимости браузера (viewport).

**Обработчики событий (Event handlers)**
Intersection Observer API - относительно молодая технология, которая может не поддерживаться некоторыми устаревшими браузерами. Если поддержка браузеров важна для вас, есть несколько способов получить её:

- [polyfill intersection observer](https://github.com/w3c/IntersectionObserver)
- вы можете вычислять, находится ли элемент во viewport каждый раз при срабатывании событий scroll, resize или orientation change.

## Смотрите также

- [Render blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css)
- [Optimizing loading and rendering](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization#optimizing_loading_and_rendering)
- [Lazy loading images and video](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video)

<!---->
