---
title: Добавление векторной графики в веб-документ
slug: Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}

Векторная графика очень полезна во многих случаях. Она имеет малые размеры файла и высокую масштабируемость – при увеличении масштаба пиксели не увеличиваются вместе с графикой. В данной статье мы покажем, как встраивать векторную графику на Вашу страницу.

| Навыки: | Знание [основ HTML](/ru/docs/Learn/HTML/Introduction_to_HTML) и умение [добавлять изображение в веб-документ](/ru/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML). |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Цель:   | Изучить как встроить SVG (векторное) изображение на веб-страницу.                                                                                                           |

> **Примечание:** Данная статья не научит вас векторной графике, а даст понимание что это и как её использовать в веб-документах.

## Что такое векторная графика?

В веб-разработке вы будете сталкиваться с двумя типами изображений - растровым и векторным:

- Растровое изображение задаётся сеткой пикселей — файл растрового изображения содержит информацию о расположении и цвете каждого пикселя. Среди популярных форматов изображений данного типа числятся Bitmap (.bmp), PNG (.png), JPEG (.jpg) и GIF (.gif)
- Векторное изображение определяется алгоритмом — файл векторного изображения содержит фигуры и правила, по которым компьютер может вычислить как должно выглядеть изображение, когда выводится на экран.{{glossary("SVG")}} формат позволяет нам создавать векторную графику для использования в веб-документах.

Для демонстрации различий между типами изображений, давайте взглянем на пример. Вы можете найти данный пример на Github как [vector-versus-raster.html](http://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) — в нем демонстрируются два, на первый взгляд, одинаковых изображения, расположенных рядом друг с другом. Каждое из изображений представляет собой красную звезду с тенью. Различие их в том, что левое изображение имеет формат PNG, а правое - SVG.

Различия становятся заметны, когда вы изменяете масштаб страницы — PNG изображение становится неровным (становятся видны пиксели), потому что оно содержит информацию о положении и цвете каждого пикселя. При увеличении каждый пиксель также увеличивается, охватывая несколько пикселей дисплея, поэтому становятся заметны "кирпичики". Векторное изображение продолжает выглядеть ровным и красивым, потому что фигуры, масштабируются совместно с ним.

![Two star images](raster-vector-default-size.png)

![Two star images zoomed in, one crisp and the other blurry](raster-vector-zoomed.png)

> **Примечание:** Оба изображения сверху имеют формат PNG — слева показано растровое изображение, справа условно показано векторное изображение. Напоминаем, что пример с реальными растровым и векторными изображениями находится по ссылке: [vector-versus-raster.html](http://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) !

Более того, файлы векторных изображений намного меньше растровых, т.к. в них содержится алгоритмы построения вместо информации о каждом пикселе.

## Что такое SVG?

[SVG](/ru/docs/Web/SVG) это язык на базе {{glossary("XML")}} для описания векторных изображений. По сути это язык разметки, как и HTML, только содержащий множество различных элементов для определения фигур вашего изображения, а также параметров их отображения. SVG предназначен для разметки графики, а не содержимого. В простейшем случае, вы можете использовать элементы для создания простых фигур, таких как {{svgelement("circle")}}(круг) и {{svgelement("rect")}}(прямоугольник). Более сложные SVG элементы включают {{svgelement("feColorMatrix")}} (разложение цвета с использованием матрицы), {{svgelement("animate")}} (анимация частей вашего векторного изображения) и {{svgelement("mask")}} (применение маски к изображению.)

В качестве простого примера, следующий код создаёт круг и прямоугольник:

```html
<svg
  version="1.1"
  baseProfile="full"
  width="300"
  height="200"
  xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="black" />
  <circle cx="150" cy="100" r="90" fill="blue" />
</svg>
```

В результате получается следующее:

{{ EmbedLiveSample('What_is_SVG', 300, 200, "", "", "hide-codepen-jsfiddle") }}

Исходя из примера выше, может показаться, что SVG легко создавать вручную. Да, простые SVG можно создавать, используя текстовый редактор, но в случае сложного изображения это становится сложным. Для создания SVG изображений используются редакторы векторной графики, такие как [Inkscape](https://inkscape.org/en/) или [Illustrator](https://en.wikipedia.org/wiki/Adobe_Illustrator). Данные приложения позволяют создавать различные изображения, используя множество графических инструментов, и создавать приближения фотографий (например опция Trace Bitmap feature приложения Inkscape.)

Дополнительные преимущества SVG:

- Текст в векторном изображении остаётся машинописным (то есть доступным для поисковика, что улучшает {{glossary("SEO")}}).
- SVG легко поддаются стилизации/программированию (scripting), потому что каждый компонент изображения может быть стилизован с помощью CSS или запрограммирован с помощью JavaScript.

Так почему же тогда вообще используют растровые изображения, а не только SVG? Дело в том, что SVG имеет ряд недостатков:

- SVG может очень быстро стать сложным в том смысле, что размер файла увеличивается; сложные SVG-изображения также создают большую вычислительную нагрузку на браузер.
- SVG может быть сложнее создать, нежели растровое изображение, в зависимости от того, какое изображение необходимо создать.
- не поддерживается старыми версиями браузеров, то есть не подойдёт для сайтов, поддерживающих Internet Explorer 8 или старее.

В целом, растровая графика лучше подходит для сложных изображений, например, фотографий.

> **Примечание:** В приложении Inkscape сохраняйте файлы как Plain SVG, для экономии места. Также, пожалуйста перейдите на [статью, описывающую как подготовить SVG изображение для веб-документа.](http://tavmjong.free.fr/INKSCAPE/MANUAL/html/Web-Inkscape.html)

## Добавление SVG на страницы

В данном разделе мы рассмотрим различные варианты, с помощью которых можно добавить SVG векторную графику на веб-страницу.

### Быстрый путь: {{htmlelement("img")}}

Чтобы встроить SVG используя элемент {{htmlelement ("img")}}, вам просто нужно сослаться на него в атрибуте src, как и следовало ожидать. Вам понадобится атрибут `height` или `width` (или оба, если ваш SVG не имеет собственного соотношения сторон). Если вы ещё этого не делали, пожалуйста, прочтите [Изображения в HTML](/ru/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML).

```html
<img
  src="equilateral.svg"
  alt="triangle with all three sides equal"
  height="87px"
  width="100px" />
```

#### Плюсы

- Быстрый, знакомый синтаксис изображения со встроенным текстовым эквивалентом, доступным в атрибуте `alt`
- Вы можете легко превратить изображение в гиперссылку, поместив `<image>` в элемент {{htmlelement("a")}}.

#### Минусы

- Вы не можете изменять изображение с помощью JavaScript.
- Если вы хотите управлять содержимым SVG с помощью CSS, вы должны использовать встроенные CSS стили в своём SVG коде. (Внешние таблицы стилей, вызываемые из файла SVG, не действуют.)
- Вы не можете изменить стиль изображения с помощью псевдоклассов CSS (например `:focus`).

### Устранение неполадок и кросс-браузерная поддержка

Для браузеров которые не поддерживают SVG (IE 8 и ниже, Android 2.3 и ниже), вы можете ссылаться на PNG или JPG в `src` атрибуте и использовать [`srcset`](/ru/docs/Web/HTML/Element/img#srcset) атрибут (который распознают только последние браузеры) чтобы сослаться на SVG. В этом случае SVG будут загружаться только поддерживающими браузерами - старые же браузеры будут загружать PNG:

```html
<img
  src="equilateral.png"
  alt="triangle with equal sides"
  srcset="equilateral.svg" />
```

Также вы можете использовать SVG в качестве фоновых изображение CSS, как показано ниже. В приведённом коде ниже старые браузеры будут придерживаться PNG, который они понимают, тогда как новые браузеры будут загружать SVG:

```css
background: url("fallback.png") no-repeat center;
background-image: url("image.svg");
background-size: contain;
```

Подобно методу `<img>`, описанному выше, вставка SVG с использованием фоновых изображений CSS означает, что SVG нельзя манипулировать при помощи JavaScript, и что SVG будет иметь те же ограничения, что и CSS.

Если ваши SVG не отображаются вовсе, возможно, ваш сервер не настроен должным образом. Если проблема в этом, то [данная статья укажет вам верное направление](/ru/docs/Web/SVG/Tutorial/Getting_Started#A_Word_on_Webservers).

### Как включить SVG в ваш HTML код

Вы можете открыть файл SVG в текстовом редакторе, скопировать этот код и вставить его в ваш HTML документ — такой приём иногда называют встраиванием SVG (**SVG inline** или **inlining SVG**). Убедитесь, что фрагмент вашего SVG кода начинается и заканчивается с тегов [`<svg></svg>`](/ru/docs/Web/SVG/Element/svg) (не включайте ничего, кроме них). Вот очень простой пример того, что вы можете вставить в ваш документ:

```html
<svg width="300" height="200">
  <rect width="100%" height="100%" fill="green" />
</svg>
```

#### Плюсы

- Вставка вашего SVG путём **SVG inline** позволяет сохранить HTTP запросы и, следовательно, может уменьшить время загрузки.
- Вы можете присваивать `class`-ы и `id` элементам SVG и стилизовать их при помощи CSS, либо в пределах SVG, либо внутри SVG, либо там, где вы размещаете правила стиля CSS для вашего HTML документа. По факту вы можете использовать любой [атрибут представления SVG](/ru/docs/Web/SVG/Attribute#Presentation_attributes) как свойство CSS.
- **SVG inline** единственный метод, который позволяет вам использовать CSS-взаимодействия (как `:focus`) и CSS-анимацию на вашем SVG изображении (даже в вашей обычной таблице стилей).
- Вы можете разметить SVG как гиперссылку, обернув в элемент {{htmlelement("a")}}.

#### Минусы

- Этот метод подходит, только если вы используете SVG лишь в одном месте. Дублирование делает обслуживание ресурсоёмким.
- Дополнительный SVG код увеличивает размер вашего HTML файла.
- Браузер не может кешировать встроенный SVG, так как он кеширует обычные изображения.
- Вы можете добавить альтернативный вариант в элементе {{svgelement("foreignObject")}}, но браузеры поддерживающие SVG будут продолжать загружать все альтернативные изображения. Вы должны взвесить действительно стоит ли поддержка устаревших браузеров дополнительных накладных расходов (ресурсов).

### Как встраивать SVG при помощи \<iframe>

Вы можете открывать ваши SVG изображения в браузере просто как веб-страницы. Таким образом встраивание SVG документа с помощью `<iframe>` выполняется как мы изучали ранее в главе [От \<object> к \<iframe> — другие технологии внедрения](/ru/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies).

Вот краткий обзор:

```html
<iframe src="triangle.svg" width="500" height="500" sandbox>
  <img src="triangle.png" alt="Triangle with three unequal sides" />
</iframe>
```

Это - определённо не самый лучший метод для выбора:

#### Минусы

- Как вы можете видеть, у `iframe`-ов есть резервный механизм, но браузеры отображают резервный вариант только если они вообще не поддерживают `iframe`-ы.
- Более того, до тех пор пока SVG и ваша текущая веб-страница имеют одинаковый {{glossary('origin')}}, вы не можете использовать JavaScript на вашей основной веб-странице, чтобы манипулировать SVG.

## Активное изучение: поиграйте с SVG

В этом разделе активного изучения мы бы хотели, чтобы вы просто попробовали поиграть с SVG. Ниже, в области _Input,_ вы увидите, что мы уже предоставили некий пример для того, чтобы вы начали. А ещё вы можете посетить [SVG Element Reference](/ru/docs/Web/SVG/Element), чтобы узнать больше деталей о других игрушках, которые могут быть использованы в SVG, и тоже попробовать их. Этот раздел полностью посвящён практике ваших исследовательских навыков и вашему развлечению.

Если Вы где-то застряли и ваш код не работает, вы всегда можете начать сначала, нажав кнопку _Reset_.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="input" style="width: 95%;min-height: 200px;">
  <svg width="100%" height="100%">
    <rect width="100%" height="100%" fill="red" />
    <circle cx="100%" cy="100%" r="150" fill="blue" stroke="black" />
    <polygon points="120,0 240,225 0,225" fill="green"/>
    <text x="50" y="100" font-family="Verdana" font-size="55"
          fill="white" stroke="black" stroke-width="2">
            Hello!
    </text>
  </svg>
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" disabled />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var output = document.querySelector(".output");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

var htmlSolution = "";
var solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Playable_code', 700, 500, "", "", "hide-codepen-jsfiddle") }}

## Заключение

Эта статья предоставила вам краткий обзор по тому, что такое векторная графика и SVG, почему полезно знать о них и как внедрять SVG в вашу веб-страницу. Эта статья не является полным руководством по изучению SVG, а всего лишь указатель, чтоб вы знали что такое SVG, на случай, если вы встретите его во время странствий по Сети. Так что не переживайте, если вы ещё не чувствуете себя экспертом в SVG. Ниже мы включили несколько ссылок, которые могут вам помочь, если вы хотите узнать больше о том, как это работает.

В последней статье этого модуля мы будем исследовать адаптивные изображения в деталях, рассматривая инструменты HTML, которые позволяют делать ваши изображения так, чтоб они могли лучше работать на разных устройствах.

## Смотрите также

- [SVG tutorial](/ru/docs/Web/SVG/Tutorial/Getting_Started) on MDN
- [Quick tips for responsive SVGs](http://thenewcode.com/744/Making-SVG-Responsive)
- [Sara Soueidan's tutorial on responsive SVG images](http://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/)
- [Accessibility benefits of SVG](http://www.w3.org/TR/SVG-access/)
- [How to scale SVGs](https://css-tricks.com/scale-svg/) (it's not as simple as raster graphics!)

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}

## В этом модуле

- [Изображения в HTML](/ru/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [Видео и аудио контент](/ru/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [От \<object> до \<iframe> — другие способы встраивать контент](/ru/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)
- [Добавление векторной графики](/ru/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
- [Адаптивные изображения](/ru/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Задание: страница о Mozilla](/ru/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page)
