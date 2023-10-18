---
title: Применение эффектов SVG к содержимому HTML
slug: Web/SVG/Applying_SVG_effects_to_HTML_content
---

Современные браузеры поддерживают [SVG](/ru/docs/SVG) в стилях [CSS](/ru/docs/Web/CSS) для применения графических эффектов к HTML-контенту.

Вы можете указать SVG в стилях как внутри одного документа, так и из внешней таблицы стилей. Есть 3 свойства, которые вы можете использовать: [`mask`](/ru/docs/Web/CSS/mask), [`clip-path`](/ru/docs/Web/CSS/clip-path), и [`filter`](/ru/docs/Web/CSS/filter).

> **Примечание:** Ссылки на SVG во внешних файлах должны быть в том же самом источнике [same origin](/ru/docs/Web/Security/Same-origin_policy) , что и ссылочный документ.

## Использование встроенного SVG

Чтобы применить эффект SVG с использованием стилей CSS, вам нужно сначала создать стиль CSS, который ссылается на SVG.

```html
<style>
  p {
    mask: url(#my-mask);
  }
</style>
```

В приведённом выше примере все параграфы маскируются с помощью [SVG](/ru/docs/Web/SVG/Element/mask) [`<mask>`](/ru/docs/Web/SVG/Element/mask) с [ID](/ru/docs/Web/HTML/Global_attributes/id) `my-mask`.

### Пример: маскировка

Например, вы можете сделать градиентную маску для содержимого HTML, используя код SVG и CSS, похожий на следующий, внутри вашего документа HTML:

```html
<svg height="0">
  <mask id="mask-1">
    <linearGradient id="gradient-1" y2="1">
      <stop stop-color="white" offset="0" />
      <stop stop-opacity="0" offset="1" />
    </linearGradient>
    <circle cx="0.25" cy="0.25" r="0.25" id="circle" fill="white" />
    <rect x="0.5" y="0.2" width="300" height="100" fill="url(#gradient-1)" />
  </mask>
</svg>
```

```css
.target {
  mask: url(#mask-1);
}
p {
  width: 300px;
  border: 1px solid #000;
  display: inline-block;
}
```

Обратите внимание, что в CSS маска указана с использованием URL-адреса ID- `#mask-1`, которая является идентификатором маски SVG, указанной ниже. Все остальное указывает подробности о самой маске градиента.

Применение SVG-эффекта к (X) HTML выполняется путём назначения `target` классу, определённому выше элементу, например:

```html
<p class="target" style="background:lime;">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing
  <b class="target"
    >elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b
  >
  Ut enim ad minim veniam.
</p>
```

Вышеприведённый пример будет отображаться с помощью маски, применяемой к нему.

{{EmbedLiveSample('Пример_маскировка', 650, 200)}}

### Пример: обрезание

Этот пример демонстрирует использование SVG для клипа содержимого HTML. Обратите внимание, что даже кликаемые области для ссылок обрезаются.

```html
<p class="target" style="background:lime;">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing
  <b class="target"
    >elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b
  >
  Ut enim ad minim veniam.
</p>

<button onclick="toggleRadius()">Toggle radius</button>

<svg height="0">
  <clipPath id="clipping-path-1" clipPathUnits="objectBoundingBox">
    <circle cx="0.25" cy="0.25" r="0.25" id="circle" />
    <rect x="0.5" y="0.2" width="0.5" height="0.8" />
  </clipPath>
</svg>
```

```css
.target {
  clip-path: url(#clipping-path-1);
}
p {
  width: 300px;
  border: 1px solid #000;
  display: inline-block;
}
```

Это устанавливает область отсечения, образованную из круга и прямоугольника, присваивает ему ID `#clipping-path-1`, а затем ссылается на него в CSS. Путь клипа может быть назначен любому элементу с `target` классом.

Вы можете вносить изменения в SVG в реальном времени, и они сразу же повлияют на рендеринг HTML. Например, вы можете изменить размер круга в указанном выше пути клипа:

```js
function toggleRadius() {
  var circle = document.getElementById("circle");
  circle.r.baseVal.value = 0.4 - circle.r.baseVal.value;
}
```

{{EmbedLiveSample('Пример_обрезание', 650, 200)}}

### Пример: Фильтрация

Это демонстрирует применение фильтра к содержимому HTML с помощью SVG. Он устанавливает несколько фильтров, которые применяются с CSS к трём элементам как в нормальном состоянии, так и при [hover](/ru/docs/Web/CSS/:hover) мыши.

```html
<p class="target" style="background: lime;">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
</p>
<pre class="target">lorem</pre>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing
  <b class="target"
    >elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b
  >
  Ut enim ad minim veniam.
</p>
```

Любой SVG-фильтр может применяться таким образом. Например, чтобы применить эффект размытия, вы можете использовать:

```html
<svg height="0">
  <filter id="f1">
    <feGaussianBlur stdDeviation="3" />
  </filter>
</svg>
```

Вы также можете применить цветовую матрицу:

```html
<svg height="0">
  <filter id="f2">
    <feColorMatrix
      values="0.3333 0.3333 0.3333 0 0
              0.3333 0.3333 0.3333 0 0
              0.3333 0.3333 0.3333 0 0
              0      0      0      1 0" />
  </filter>
</svg>
```

И ещё несколько фильтров:

```html
<svg height="0">
  <filter id="f3">
    <feConvolveMatrix
      filterRes="100 100"
      style="color-interpolation-filters:sRGB"
      order="3"
      kernelMatrix="0 -1 0   -1 4 -1   0 -1 0"
      preserveAlpha="true" />
  </filter>
  <filter id="f4">
    <feSpecularLighting
      surfaceScale="5"
      specularConstant="1"
      specularExponent="10"
      lighting-color="white">
      <fePointLight x="-5000" y="-10000" z="20000" />
    </feSpecularLighting>
  </filter>
  <filter id="f5">
    <feColorMatrix
      values="1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 1 0 0 0"
      style="color-interpolation-filters:sRGB" />
  </filter>
</svg>
```

Пять фильтров применяются с использованием следующего CSS:

```css
p.target {
  filter: url(#f3);
}
p.target:hover {
  filter: url(#f5);
}
b.target {
  filter: url(#f1);
}
b.target:hover {
  filter: url(#f4);
}
pre.target {
  filter: url(#f2);
}
pre.target:hover {
  filter: url(#f3);
}
```

{{EmbedLiveSample('Пример_Фильтрация', 650, 200)}}

### Пример: размытый текст

Чтобы размыть текст, браузеры, основанные на Webkit, имеют (префиксный) CSS-фильтр, называемый blur (см. Также [CSS filter](/ru/docs/Web/CSS/filter#blur%28%29_2)). Вы можете добиться такого же эффекта, используя фильтры SVG.

```html
<p class="blur">Time to clean my glasses</p>
<svg height="0">
  <defs>
    <filter id="wherearemyglasses" x="0" y="0">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
    </filter>
  </defs>
</svg>
```

Вы можете применить SVG и CSS-фильтр в том же классе:

```css
.blur {
  filter: url(#wherearemyglasses);
}
```

{{ EmbedLiveSample('Пример_размытый_текст', 300, 100) }}

Размытие является сложным вычислением, поэтому используйте его экономно, особенно в элементах, которые прокручиваются или анимируются.

### Пример: текстовые эффекты

Эффекты SVG также могут использоваться для большей динамики и гибкого подхода к добавлению текста по сравнению с простым текстом HTML.

Создавая текст с использованием элементов SVG в сочетании с HTML, достигаются различные текстовые эффекты. Можно повернуть текст:

```html
<svg height="60" width="200">
  <text x="0" y="15" fill="blue" transform="rotate(30 20,50)">
    Пример текста
  </text>
</svg>
```

## Использование внешних ссылок

SVG, используемый для отсечения, маскировки и фильтрации, может быть загружен из внешнего источника, если этот источник исходит из того же источника, что и документ HTML, к которому он применяется.

For example, if your CSS is in a file namedit can look like this:
Например, если ваш CSS находится в файле с именем `default.css`, он может выглядеть следующим образом:

```css
.target {
  clip-path: url(resources.svg#c1);
}
```

Затем SVG импортируется из файла с именем `resources.svg`, используя путь клипа с ID `c1`.

## Смотрите также

- [SVG](/ru/docs/SVG)
- [Эффекты SVG для HTML-контента](http://robert.ocallahan.org/2008/06/applying-svg-effects-to-html-content_04.html) (запись в блоге)
- [Web Tech Blog »Архив блога» Ссылки на внешние документы SVG](http://web.archive.org/web/20120512132948/https://developer.mozilla.org/web-tech/2008/10/10/svg-external-document-references/))
