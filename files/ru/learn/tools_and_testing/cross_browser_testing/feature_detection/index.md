---
title: Реализация функции обнаружения
slug: Learn/Tools_and_testing/Cross_browser_testing/Feature_detection
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Accessibility","Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", "Learn/Tools_and_testing/Cross_browser_testing")}}

Обнаружение функций включает определение того, поддерживает ли браузер определённый блок кода, и выполнение другого кода в зависимости от того, поддерживает ли он или нет, так что браузер всегда может обеспечить работу, а не сбой / ошибку в некоторых браузерах. В этой статье подробно описывается, как написать собственное простое обнаружение функций, как использовать библиотеку для ускорения реализации, а также встроенные функции для обнаружения функций, такие как `@supports`.

| Предусловия: | Знакомство с основными языками [HTML](/ru/docs/Learn/HTML), [CSS](/ru/docs/Learn/CSS), и [JavaScript](/ru/docs/Learn/JavaScript); идея высокого уровня [принципов кросс-браузерного тестирования.](/ru/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction). |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Задача:      | Понять, что такое концепция выявления функций, и уметь внедрять подходящие решения в CSS и JavaScript.                                                                                                                                                                   |

## Концепция обнаружения функций

Идея обнаружения функции заключается в том, что вы можете запустить тест, чтобы определить, поддерживается ли функция в текущем браузере, а затем условно запустить код, чтобы обеспечить приемлемый опыт как в браузерах, которые поддерживают функцию, так и в браузере, который не поддерживает. Если вы этого не сделаете, браузеры, которые не поддерживают функции, которые вы используете в своём коде, не будут отображать ваши сайты должным образом и просто не сработают, создавая плохой опыт пользователя.

Давайте подведём итоги и посмотрим на пример, который мы затронули в нашем документе [Решение самых распространённых проблем JavaScript](/ru/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#Feature_detection)— [Использование геолокации](/ru/docs/Web/API/Geolocation/Using_geolocation) (который предоставляет доступные данные о местоположении для устройства, на котором работает веб-браузер) есть основная точка входа для его использования, свойство `geolocation,` доступное на глобальном объекте [Navigator](/ru/docs/Web/API/Navigator). Следовательно, вы можете определить, поддерживает ли браузер геолокацию или нет, используя что-то вроде следующего:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    // show the location on a map, perhaps using the Google Maps API
  });
} else {
  // Give the user a choice of static maps instead perhaps
}
```

Однако, вероятно, лучше использовать установленную библиотеку обнаружения объектов, а не писать свою собственную все время. Modernizr - это отраслевой стандарт для тестирования функций, и мы рассмотрим это позже.

Прежде чем мы продолжим, мы хотели бы сразу сказать одну вещь - не путайте обнаружение функций с **перехватом браузера** (обнаружение того, какой конкретный браузер обращается к сайту) - это ужасная практика, от которой следует отказаться любой ценой. См. [Использование плохого кода перехвата браузера](/ru/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#Using_bad_browser_sniffing_code) для дополнительной информации.

## Написание ваших собственных тестов обнаружения функций

В этом разделе мы рассмотрим реализацию ваших собственных тестов обнаружения функций как в CSS, так и в JavaScript.

### CSS

Вы можете написать тесты для функций CSS, протестировав существование _[element.style.property](/ru/docs/Web/API/HTMLElement/style)_ (например, `paragraph.style.transform`) в JavaScript.

Классическим примером может быть проверка поддержки [Flexbox](/ru/docs/Learn/CSS/CSS_layout/Flexbox) в браузере; для браузеров, которые поддерживают новейшие спецификации Flexbox, мы могли бы использовать гибкую и надёжную гибкую компоновку. Для браузеров, которые этого не делают, мы могли бы использовать плавающий макет, который работает нормально, хотя он немного более хрупкий и хакерский, и не такой привлекательный.

Давайте реализуем что-то, что демонстрирует это, хотя мы пока оставим это простым.

1. Начните с создания локальных копий наших файлов [`css-feature-detect.html`](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/css-feature-detect.html), [`flex-layout.css`](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/flex-layout.css), [`float-layout-css`](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/float-layout.css), и [`basic-styling.css`](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/basic-styling.css). Сохраните их в новой дирекции.
2. Мы добавим HTML5 Shiv и в наш пример, чтобы семантические элементы HTML5 правильно стилизовались в старых версиях IE. Загрузите последнюю версию (См. [Ручная установка](https://github.com/aFarkas/html5shiv#manual-installation)), разархивируйте ZIP, скопируйте файлы `html5shiv-printshiv.min.js` и `html5shiv.min.js` в ваш пример дирекции и создайте ссылку на один из файлов, поместив следующее в свой {{htmlelement("title")}} элемент:

   ```
   <script src="html5shiv.min.js"></script>
   ```

3. Посмотрите ваши примеры CSS-файлов - вы увидите, что `basic-styling.css` обрабатывает все стили, которые мы хотим дать каждому браузеру, тогда как два других CSS-файла содержат CSS, который мы хотим выборочно применять к браузеру в зависимости от их уровни поддержки. Вы можете посмотреть на различные эффекты этих двух файлов, вручную изменив CSS-файл, на который ссылается второй элемент {{htmlelement("link")}}, но давайте вместо этого реализуем некоторый JavaScript, чтобы автоматически заменять их при необходимости.
4. Сначала удалите содержимое атрибута `href` второго элемента `<link>` . Мы будем заполнять это динамически позже.
5. Затем добавьте элемент `<script></script>` внизу вашего контекста (непосредственно перед закрывающим тегом `</body>`).
6. Дайте ему следующее содержание:

   ```js
   const conditional = document.querySelector(".conditional");
   const testElem = document.createElement("div");
   if (
     testElem.style.flex !== undefined &&
     testElem.style.flexFlow !== undefined
   ) {
     conditional.setAttribute("href", "flex-layout.css");
   } else {
     conditional.setAttribute("href", "float-layout.css");
   }
   ```

Здесь мы берём ссылку на второй элемент `<link>` и создаём элемент `<div>` как часть нашего теста. В нашем условном выражении мы проверяем, что свойства {{cssxref ("flex")}} и {{cssxref ("flex-flow")}} существуют в браузере. Обратите внимание, что представления JavaScript этих свойств, которые хранятся внутри объекта {{domxref ("HTMLElement.style")}}, используют нижний горбатый регистр, а не дефисы, для разделения слов.

> **Примечание:** Если у вас возникли проблемы с выполнением этого, вы можете сравнить его с нашим кодом [css-feature-detect-finished.html](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/css-feature-detect-finished.html) (см. Также [живую версию](http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/feature-detection/css-feature-detect-finished.html)).

Когда вы сохраните все и опробуете свой пример, вы должны увидеть макет flexbox, применённый к странице, если браузер поддерживает современный flexbox, и макет float, если нет.

> **Примечание:** Часто такой подход является излишним из-за незначительной проблемы с обнаружением функций - вы часто можете обойтись без использования префиксов нескольких поставщиков и свойств резервирования, как описано в разделе [Поведение CSS-откат](/ru/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#CSS_fallback_behaviour) и [Обработка префиксов CSS](/ru/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#Handling_CSS_prefixes).

#### @supports

Недавно, в CSS появился собственный механизм обнаружения собственных функций — {{cssxref("@supports")}} at-rule. Это работает аналогично [медиавыражениям](/ru/docs/Web/CSS/Media_Queries) (см. Также [Адаптивные проблемы дизайна](/ru/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#Responsive_design_problems)) — за исключением того, что вместо выборочного применения CSS в зависимости от медиа-функции, такой как разрешение, ширина экрана или соотношение сторон, выборочно применяется CSS в зависимости от того, поддерживается ли функция CSS.

Например, мы могли бы переписать наш предыдущий пример для использования `@supports` — см. [`supports-feature-detect.html`](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/supports-feature-detect.html) и [`supports-styling.css`](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/supports-styling.css). Если вы посмотрите на последнее, вы увидите пару блоков `@supports` например:

```css
@supports (flex-flow: row) and (flex: 1) {
  main {
    display: flex;
  }

  main div {
    padding-right: 4%;
    flex: 1;
  }

  main div:last-child {
    padding-right: 0;
  }
}
```

Этот блок at-rule применяет правило CSS только в том случае, если текущий браузер поддерживает объявления как `flex-flow: row` так и `flex: 1`. Чтобы каждое условие работало, вам необходимо включить полное объявление (а не просто имя свойства) и НЕ включать точку с запятой в конце.

`@supports` также имеет логику `OR` и `NOT` — другой блок применяет разметку с плавающей запятой, если свойства flexbox недоступны:

```css
@supports not (flex-flow: row) and (flex: 1) {
  /* rules in here */
}
```

Это может выглядеть намного удобнее, чем в предыдущем примере - мы можем выполнять все наши функции обнаружения в CSS, JavaScript не требуется, и мы можем обрабатывать всю логику в одном файле CSS, сокращая HTTP-запросы. Проблема здесь в поддержке браузера — `@supports` вообще не поддерживается в IE, а поддерживается только в самых последних версиях Safari / iOS WebKit (9 + / 9.2 +), тогда как версия JavaScript должна работать в гораздо более старых браузерах (вероятно, назад до IE8 или 9, хотя в более старых версиях IE будут возникать дополнительные проблемы, такие как отсутствие поддержки {{domxref ("Document.querySelector")}} и наличие испорченной блочной модели).

### JavaScript

Мы уже видели пример теста на обнаружение функций JavaScript ранее. Как правило, такие тесты выполняются по одному из следующих общих шаблонов:

| Тип обнаружения функции                     | Объяснение                                                                                                                                                                                                                                | Пример                                                                                                               |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| _Если член в объекте_                       | Проверьте, существует ли определённый метод или свойство (обычно точка входа в использование API или другой функции, которую вы обнаруживаете) в его родительском объекте.                                                                | `if("geolocation" in navigator) { ... }`                                                                             |
| _Свойство на элементе_                      | Создайте элемент в памяти, используя {{domxref ("Document.createElement()")}}, а затем проверьте, существует ли свойство для него. Показанный пример является способом определения поддержки [HTML5 Canvas](/ru/docs/Web/API/Canvas_API). | `function supports_canvas() { return !!document.createElement('canvas').getContext; } if(supports_canvas()) { ... }` |
| _Метод на возвращаемое значение элемента_   | Создайте элемент в памяти, используя {{domxref ("Document.createElement()")}}, а затем проверьте, существует ли метод для него. Если это так, проверьте, какое значение он возвращает.                                                    | См. [Dive Into HTML5 Video Formats detection](http://diveinto.html5doctor.com/detect.html#video-formats).            |
| _Свойство на сохраняемое значение элемента_ | Создайте элемент в памяти, используя {{domxref ("Document.createElement()")}}, установите для свойства определённое значение, затем проверьте, сохраняется ли значение.                                                                   | См. [Dive into HTML5 `<input>` types detection](http://diveinto.html5doctor.com/detect.html#input-types).            |

> **Примечание:** Двойное `NOT` в приведённом выше примере (`!!`) это способ заставить возвращаемое значение стать «правильным» логическим значением, а не {{glossary("Truthy")}}/{{glossary("Falsy")}} значение, которое может исказить результаты.

Страница [Погружение в HTML5 Обнаружение функций HTML5](http://diveinto.html5doctor.com/detect.html) содержит гораздо больше полезных тестов для обнаружения функций, помимо перечисленных выше, и вы можете найти тест обнаружения функций для большинства вещей, выполнив поиск «обнаружение поддержки для ВАШИ-ФУНКЦИИ-ЗДЕСЬ» в своей любимой поисковой системе. Имейте в виду, однако, что некоторые функции, как известно, не обнаруживаются - см. список Modernizr [Необнаруживаемые](https://github.com/Modernizr/Modernizr/wiki/Undetectables).

#### matchMedia

Мы также хотели упомянуть функцию JavaScript {{domxref("Window.matchMedia")}} на этом этапе. Это свойство, которое позволяет вам запускать тесты медиавыражений внутри JavaScript. Это выглядит так:

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  // run JavaScript in here.
}
```

В качестве примера, наша демо версия [Snapshot](https://github.com/chrisdavidmills/snapshot) использует её для выборочного применения библиотеки Brick JavaScript и её использования для обработки макета пользовательского интерфейса, но только для небольшого экрана (шириной 480 пикселей или меньше). Сначала мы используем атрибут `media`,чтобы применить CSS-код Brick к странице, только если ширина страницы составляет 480px или меньше:

```css
<link href="dist/brick.css" type="text/css" rel="stylesheet" media="all and (max-width: 480px)">
```

Затем мы используем `matchMedia()` в JavaScript несколько раз, чтобы запускать функции навигации Brick только в том случае, если мы на маленьком экране (в более широких экранах все можно увидеть сразу, поэтому нам не нужно переходить между различными изображениями).

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  deck.shuffleTo(1);
}
```

## Использование Modernizr для реализации обнаружения функций

Можно реализовать свои собственные тесты обнаружения функций, используя методы, подобные тем, которые подробно описаны выше. Вы можете также использовать специальную библиотеку обнаружения функций, так как она всё упрощает. Основой всех библиотек обнаружения функций является [Modernizr](https://modernizr.com/), и он может обнаружить практически все, что вам когда-либо понадобится. Давайте посмотрим, как его использовать.

Когда вы экспериментируете с Modernizr, вы также можете использовать сборку разработки, которая включает в себя все возможные тесты обнаружения функций. Скачать:

1. Нажав на ссылку [Сборка разработки](https://modernizr.com/download?do_not_use_in_production).
2. Нажав на большую розовую кнопку _Build_ на появившейся странице.
3. Нажав на верхнюю ссылку _Download_ в появившемся диалоговом окне.

Сохраните его где-нибудь разумно, например, в директории, для которой вы создавали другие примеры в этой статье.

Когда вы используете Modernizr в рабочей среде, вы можете перейти на [Страницу скачивания](https://modernizr.com/download) которую вы уже посетили, и нажимать кнопки плюс только для тех функций, которые вам нужны. Затем, когда вы нажмёте кнопку _Build_ вы загрузите пользовательскую сборку, содержащую только те функции, которые обнаружены, что позволит значительно уменьшить размер файла.

### CSS

Давайте посмотрим, как Modernizr работает с точки зрения избирательного применения CSS.

1. Во-первых, создайте копию [`supports-feature-detect.html`](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/supports-feature-detect.html) и [`supports-styling.css`](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/supports-styling.css). Сохраните их как `modernizr-css.html` и `modernizr-css.css`.
2. Обновите ваш элемент {{htmlelement ("link")}} в своём HTML-коде, чтобы он указывал на правильный файл CSS (также следует обновить элемент {{htmlelement ("title")}} на что-то более подходящее!):

   ```html
   <link href="modernizr-css.css" rel="stylesheet" />
   ```

3. Над этим элементом `<link>` добавьте элемент {{htmlelement ("script")}}, чтобы применить библиотеку Modernizr к странице, как показано ниже. Это должно быть применено к странице перед любым CSS (или JavaScript), который может её использовать.

   ```html
   <script src="modernizr-custom.js"></script>
   ```

4. Теперь отредактируйте открывающий тег `<html>`, чтобы он выглядел так:

   ```html
   <html class="no-js"></html>
   ```

На этом этапе попробуйте загрузить свою страницу, и вы получите представление о том, как Modernizr работает с функциями CSS. Если вы посмотрите на инспектор DOM инструментов разработчика вашего браузера, вы увидите, что Modernizr обновил значение вашего `<html>` `class` следующим образом:

```
<html class="js no-htmlimports sizes flash transferables applicationcache blobconstructor
blob-constructor cookies cors ...AND LOADS MORE VALUES!>
```

Теперь он содержит большое количество классов, которые указывают на состояние поддержки различных функций. Например, если браузер вообще не поддерживает flexbox, `<html>` будет присвоено имя класса `no-flexbox`. Если бы он поддерживал современный flexbox, он получил бы имя класса `flexbox`. Если вы выполните поиск в списке классов, вы также увидите другие, относящиеся к flexbox, например:

- `flexboxlegacy` для старой спецификации flexbox (2009).
- `flexboxtweener` для промежуточного синтаксиса 2011 года, поддерживаемого IE10.
- `flexwrap` для свойства {{cssxref ("flex-wrap")}}, которого нет в некоторых реализациях.

> **Примечание:** вы можете найти список того, что означают все имена классов — см. [Функции, обнаруженные Modernizr](https://modernizr.com/docs#features).

Далее, давайте обновим наш CSS, чтобы использовать Modernizr вместо `@supports`. Перейдите в `modernizr-css.css`, и замените два блока `@supports` следующим:

```css
/* Properties for browsers with modern flexbox */

.flexbox main {
  display: flex;
}

.flexbox main div {
  padding-right: 4%;
  flex: 1;
}

.flexbox main div:last-child {
  padding-right: 0;
}

/* Fallbacks for browsers that don't support modern flexbox */

.no-flexbox main div {
  width: 22%;
  float: left;
  padding-right: 4%;
}

.no-flexbox main div:last-child {
  padding-right: 0;
}

.no-flexbox footer {
  clear: left;
}
```

Так как же это работает? Поскольку все эти имена классов были помещены в элемент `<html>` вы можете настроить таргетинг на браузеры, которые поддерживают или не поддерживают функцию, используя определённые селекторы-потомки. Поэтому здесь мы применяем верхний набор правил только для браузеров, которые поддерживают flexbox, а нижний набор правил - только для браузеров, которые не поддерживают (`no-flexbox`).

> **Примечание:** Имейте в виду, что все тесты функций HTML и JavaScript Modernizr также представлены в этих именах классов, так что вы можете свободно применять CSS выборочно в зависимости от того, поддерживает ли браузер функции HTML или JavaScript, если это необходимо.

> **Примечание:** Если у вас возникли проблемы с выполнением этого, проверьте ваш код по файлам [`modernizr-css.html`](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/modernizr-css.html) и [`modernizr-css.css`](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/modernizr-css.css) (см. Также этот запуск в реальном времени).

### JavaScript

Modernizr также одинаково хорошо подготовлен для реализации функций обнаружения JavaScript. Это достигается за счёт того, что глобальный объект `Modernizr` становится доступным для страницы, к которой он применяется, и содержит результаты функции, определяемой как свойства `true`/`false`.

Например, загрузите наш пример [`modernizr-css.html`](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/modernizr-css.html) в своём браузере, затем попробуйте перейти на консоль JavaScript и набрать `Modernizr.`, а после некоторые из этих имён классов (они тоже здесь одинаковы). Например:

```
Modernizr.flexbox
Modernizr.websqldatabase
Modernizr.xhr2
Modernizr.fetch
```

Консоль вернёт значения `true`/`false`, чтобы указать, поддерживает ли ваш браузер эти функции или нет.

Давайте посмотрим на пример, чтобы показать, как вы бы пользовали эти свойства.

1. Прежде всего, сделайте локальную копию файла примера [`modernizr-js.html`](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/feature-detection/modernizr-js.html).
2. Присоедините библиотеку Modernizr к HTML, используя элемент `<script>` , как мы делали в предыдущих демонстрациях. Поместите его над существующим элементом `<script>` который прикрепляет API Google Maps к странице.
3. Затем заполните текст-заполнитель `YOUR-API-KEY` во втором элементе `<script>` (как он есть сейчас) действительным ключом API Google Maps. Чтобы получить ключ, войдите в учётную запись Google, перейдите на страницу [Получить ключ / Аутентификация](https://developers.google.com/maps/documentation/javascript/get-api-key) затем нажмите синюю кнопку _Get a Key_ и следуйте инструкциям.
4. Наконец, добавьте ещё один элемент `<script>` внизу тела HTML (непосредственно перед тегом `</body>` ) и поместите следующий скрипт в теги:

   ```js
   if (Modernizr.geolocation) {
     navigator.geolocation.getCurrentPosition(function (position) {
       let latlng = new google.maps.LatLng(
         position.coords.latitude,
         position.coords.longitude,
       );
       let myOptions = {
         zoom: 8,
         center: latlng,
         mapTypeId: google.maps.MapTypeId.TERRAIN,
         disableDefaultUI: true,
       };
       let map = new google.maps.Map(
         document.getElementById("map_canvas"),
         myOptions,
       );
     });
   } else {
     const para = document.createElement("p");
     para.textContent = "Argh, no geolocation!";
     document.body.appendChild(para);
   }
   ```

Опробуйте свой пример! Здесь мы используем тест `Modernizr.geolocation`, чтобы проверить, поддерживается ли геолокация текущим браузером. Если это так, мы запускаем некоторый код, который получает текущее местоположение вашего устройства и отображает его на карте Google.

## Подведение итогов

В этой статье было рассмотрено обнаружение функций с достаточным количеством подробностей, рассмотрены основные концепции и показано, как реализовать свои собственные тесты обнаружения функций и использовать библиотеку Modernizr для более лёгкой реализации тестов.

Далее мы начнём изучать автоматизированное тестирование.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Accessibility","Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", "Learn/Tools_and_testing/Cross_browser_testing")}}

## В этом модуле

- [Введение в кросс-браузерное тестирование](/ru/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction)
- [Стратегии проведения тестирования](/ru/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies)
- [Решение распространённых проблем HTML и CSS](/ru/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS)
- [Решение распространённых проблем JavaScript](/ru/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript)
- [Решение распространённых проблем доступности](/ru/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility)
- [Реализация функции обнаружения](/ru/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)
- [Введение в автоматизированное тестирование](/ru/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing)
- [Настройка собственной среды автоматизации тестирования](/ru/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment)
