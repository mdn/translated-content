---
title: Страница о Mozilla
slug: Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page
---

{{LearnSidebar}}{{PreviousMenu("Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}

В этом задании мы проверим ваши знания приёмов, рассмотренных в статьях этого модуля, через добавление изображений и видео на забавную страницу о Mozilla!

| Предпосылки: | Прежде чем приступить к этому заданию, вы должны проработать остальную часть [модуля мультимедиа и встраивания.](/ru/docs/Learn/HTML/Multimedia_and_embedding) |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Задача:      | Для проверки знаний о встраивании изображений и видео в веб-страницы, фреймы и методы визуального восприятия HTML.                                             |

## Отправная точка

Для начала этого задания скачайте все HTML файлы и изображения, доступные на github([mdn-splash-page-start](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/mdn-splash-page-start/)). Сохраните содержимое [index.html](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/mdn-splash-page-start/index.html) в файле с именем `index.html` на вашем диске в новой папке. Затем сохраните [pattern.png](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/mdn-splash-page-start/pattern.png) в той же папке (правый клик на изображении для выбора опции сохранения).

Сохраните изображения из папки [originals](https://github.com/mdn/learning-area/tree/master/html/multimedia-and-embedding/mdn-splash-page-start/originals) тем же способом; возможно вы захотите сохранить их в другой папке пока не обработаете (некоторые из них) с помощью графического редактора.

> **Примечание:** Приведённый для примера HTML файл содержит довольно много CSS для стилизации страницы. Вам не нужно изменять CSS, только HTML внутри {{htmlelement("body")}} элемента — пока вы используете корректную разметку, CSS будет придавать правильный внешний вид.

## Описание проекта

В этом задании мы представляем вам почти законченный сайт-визитку Mozilla, цель которого - рассказать что-нибудь интересное о принципах Mozilla и предоставить несколько ссылок для углублённого ознакомления. К сожалению, изображения или видео не добавлены - это ваша работа! Вам нужно добавить несколько медиа-файлов для того, чтобы страница смотрелась лучше и имела больше смысла. В следующих подразделах подробно объяснено, что вам требуется сделать:

### Подготовка изображений

Используя ваш любимый редактор изображений, создайте версии шириной 400px и 120px, следующих изображений:

- `firefox_logo-only_RGB.png`
- `firefox-addons.jpg`
- `mozilla-dinosaur-head.png`

Назовите их как-нибудь разумно, например `firefoxlogo400.png` и `firefoxlogo120.png`.

Вместе с `mdn.svg`, эти изображения будут иконками для ссылок на другие ресурсы внутри секции `further-info`. Вы также дадите ссылку на логотип Firefox в шапке сайта. Сохраните все копии внутри той же папки, что и `index.html`.

Затем создайте фоновую версию `red-panda.jpg` шириной 1200px и портретную версию шириной 600px, которая показывает панду более крупным планом. Снова назовите их разумно, чтобы легко распознавать их. Сохраните обе копии внутри той же папки, что и `index.html`.

> **Примечание:** Следует обрабатывать JPG и PNG изображения, чтобы делать их как можно меньше по весу, при сохранении хорошего вида. [tinypng.com](https://tinypng.com/) - отличный сервис для этого.

### Добавление логотипа в шапку

Добавьте внутрь элемента {{htmlelement("header")}} элемент {{htmlelement("img")}}, который вставит уменьшенную версию логотипа Firefox в шапку.

### Добавление видео к основному содержанию статьи

Внутри элемента {{htmlelement("article")}} (сразу после открывающего тэга), вставьте ролик с YouTube по ссылке <https://www.youtube.com/watch?v=ojcNcvb1olg>, используя подходящие инструменты YouTube для генерации кода. Видео должно быть 400px в ширину.

### Добавление отзывчивых изображений к ссылкам с доп. информацией

Внутри {{htmlelement("div")}} с классом `further-info` вы найдёте четыре элемента {{htmlelement("a")}} — каждый из которых ссылается на интересную страницу, связанную с Mozilla. Для завершения этой секции вам необходимо поместить элемент {{htmlelement("img")}} внутрь каждого элемента {{htmlelement("a")}} дополнив подходящими атрибутами [`src`](/ru/docs/Web/HTML/Element/img#src), [`alt`](/ru/docs/Web/HTML/Element/img#alt), [`srcset`](/ru/docs/Web/HTML/Element/img#srcset) и [`sizes`](/ru/docs/Web/HTML/Element/img#sizes).

В каждом случае (кроме одного - какой из них по сути отзывчивый?) мы хотим, чтобы браузер использовал изображение шириной 120px , когда экран меньше или равен 480px, либо шириной 400px в других случаях.

Убедитесь, что вы использовали изображения, соответствующие ссылкам.

> **Примечание:** Для проверки правильности работы `srcset`/`sizes` , вам нужно загрузить ваш сайт на сервер (используйте [Github pages](/ru/docs/Learn/Common_questions/Using_Github_pages) - простое и бесплатное решение). Затем вы сможете проверить правильность их работы используя инструменты разработчика в браузере, как описано в [Responsive images: useful developer tools](/en-US/Learn/HTML/Multimedia_and_embedding/Responsive_images#Useful_developer_tools).

### Искусственно изменённая красная панда

Внутри элемента {{htmlelement("div")}} с классом `red-panda`, мы хотим поместить элемент {{htmlelement("picture")}} , который использует маленькое портретное изображение панды, если экран меньше или равен 600px, либо большое фоновое изображение.

## Пример

Следующие скриншоты демонстрируют, как сайт-визитка выглядит, при правильной разметке, на широких и узких экранах.

![A wide shot of our example splash page](wide-shot.png)

![A narrow shot of our example splash page](narrow-shot.png)

## Заключение

Если вы выполняете это задание как часть организованного курса вам следует передать вашу работу учителю/наставнику для оценки. Если вы обучаетесь самостоятельно, то вы легко можете получить отметку [в ветке форума этого упражнения](https://discourse.mozilla.org/t/mozilla-splash-page-assessment/24679), либо в IRC канале [#mdn](irc://irc.mozilla.org/mdn) на [Mozilla IRC](https://wiki.mozilla.org/IRC). Сначала попробуйте выполнить упражнение - жульничеством ничего не добиться!

{{PreviousMenu("Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}

## В этом модуле

- [Изображения в HTML](/ru/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [Видео и аудио контент](/ru/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [От \<object> до \<iframe> — другие технологии встраивания](/ru/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)
- [Добавление векторной графики в Web](/ru/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
- [Отзывчивые изображения](/ru/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Сайт-визитка Mozilla](/ru/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page)
