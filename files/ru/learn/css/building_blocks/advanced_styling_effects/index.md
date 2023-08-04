---
title: Узконаправленные функции CSS
slug: Learn/CSS/Building_blocks/Advanced_styling_effects
---

{{LearnSidebar}}

В этой статье описаны некоторые хитрости, которые познакомят вас с такими узкоспециализированными свойствами, как box-shadow, режимы смешивания и фильтры.

| Необходимые знания: | Основы HTML (изучите [Введение в HTML](/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML)) и CSS (статья [Введение в CSS](/ru/docs/Learn/CSS/First_steps)). |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Задача:             | Понять принцип работы узко используемых эффектов в современных браузерах.                                                                                                                  |

## Блок-тень

{{cssxref("box-shadow")}} позволяет добавить одну и более тень к контейнеру. Как и `text-shadow`, `box-shadows` отлично поддерживаются браузерами, включая IE9+ и Edge. У пользователей ранних версий IE будет просто копия без тени, поэтому убедитесь, что контент с дизайном разборчив и без теней.

Вы можете найти примеры из стати на [box-shadow.html](http://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/box-shadow.html) (или в [исходном коде](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/advanced_box_effects/box-shadow.html)).

### Обычная тень

Для начала взглянем на простой пример:

```html
<article class="simple">
  <p>
    <strong>Предупреждение</strong>: Температура ракетного двигателя достигла
    критической отметки.
  </p>
</article>
```

А теперь CSS:

```css
p {
  margin: 0;
}

article {
  max-width: 500px;
  padding: 10px;
  background-color: red;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.25)
  );
}

.simple {
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7);
}
```

В результате получится вот это:

{{ EmbedLiveSample('Обычная_тень', '100%', 100) }}

Как видите, у нас четыре значения в свойстве `box-shadow`:

1. Первое значение — **смещение по горизонтали** — расстояние, на которое смещена тень вправо (если значение отрицательное, то влево).
2. **Смещение по вертикали** — расстояние, на которое смещена тень вниз (или вверх, если значение отрицательное).
3. Третье значение — это **радиус размытия** — уровень размытия тени.
4. Значение цвета — это **основной цвет** тени.

Вы можете использовать абсолютно любые значения и цвета, если это необходимо.

### Несколько теней

Вы можете определить несколько блок-теней, разделяя их запятыми при объявлении `box-shadow`:

```html hidden
<article class="multiple">
  <p>
    <strong>Предупреждение</strong>: Температура ракетного двигателя достигла
    критической отметки.
  </p>
</article>
```

```css
p {
  margin: 0;
}

article {
  max-width: 500px;
  padding: 10px;
  background-color: red;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.25)
  );
}

.multiple {
  box-shadow:
    1px 1px 1px black,
    2px 2px 1px black,
    3px 3px 1px red,
    4px 4px 1px red,
    5px 5px 1px black,
    6px 6px 1px black;
}
```

В итоге мы получим:

{{ EmbedLiveSample('Несколько_теней', '100%', 100) }}

Мы сделали контейнер с несколькими ступенчатыми цветными тенями, но вы можете делать, как считаете то нужным, например, чтобы добавить реалистичности, опираясь на какие-нибудь источники света.

### Другие опции блок-теней

В отличие от {{cssxref("text-shadow")}}, у свойства {{cssxref("box-shadow")}} есть значение `inset` — оно добавляет внутреннюю тень. Поясним это на примере.

Для этого примера используем другой HTML-код:

```html
<button>Нажми на меня!</button>
```

```css
button {
  width: 150px;
  font-size: 1.1rem;
  line-height: 2;
  border-radius: 10px;
  border: none;
  background-image: linear-gradient(to bottom right, #777, #ddd);
  box-shadow:
    1px 1px 1px black,
    inset 2px 3px 5px rgba(0, 0, 0, 0.3),
    inset -2px -3px 5px rgba(255, 255, 255, 0.5);
}

button:focus,
button:hover {
  background-image: linear-gradient(to bottom right, #888, #eee);
}

button:active {
  box-shadow:
    inset 2px 2px 1px black,
    inset 2px 3px 5px rgba(0, 0, 0, 0.3),
    inset -2px -3px 5px rgba(255, 255, 255, 0.5);
}
```

Получим:

{{ EmbedLiveSample('Другие_опции_блок-теней', '100%', 70) }}

Мы стилизовали кнопку с помощью состояний _focus_, _hover_ и _active_. Для кнопки по умолчанию установлены несколько простых чёрных теней плюс пара внутренних теней в противоположном углу кнопки для эстетичности.

При нажатии на кнопку первая тень становится внутренней, чтобы создать ощущение нажатия кнопки.

> **Примечание:** Есть ещё одно значение `box-shadow`, которое устанавливается перед значением свойства, — **радиус разброса**. При его использовании тень становится больше оригинального контейнера. Свойство не так часто используют, но оно стоит упоминания.

## Фильтры

Замечательное свойство, благодаря которому ваш дизайн станет интереснее, — это свойство {{cssxref("filter")}}. Это что-то вроде фильтров Photoshop, но в CSS.

В примере ниже мы использовали два значения этого свойства: первое — `blur()` — определяет, насколько изображение размыто.

Второе значение — `grayscale()`; оно определяет, насколько изображение насыщено.

{{EmbedGHLiveSample("css-examples/learn/images/filter.html", '100%', 700)}}

**Попробуйте изменить значения в примере, чтобы посмотреть на изменения. Вы можете менять значения на другие. Попробуйте добавить `contrast(200%)`, `invert(100%)` или `hue-rotate(20deg)` в примере ниже. Прочтите статью [`filter`](/ru/docs/Web/CSS/filter), чтобы узнать о многих других значениях этого свойства.**

Вы можете добавлять фильтры к любым объектам. Некоторые значения свойства работают почти так же, как CSS-свойства, например, `drop-shadow()` даёт эффект, схожий с [`box-shadow`](/ru/docs/Web/CSS/box-shadow) или [`text-shadow`](/ru/docs/Web/CSS/text-shadow).

В фильтрах замечательно то, что они применяются к каждому элементу контейнера. Ниже мы сравнили фильтр и блок-тень. Как видите, фильтр применился к каждой чёрточке. А блок-тень просто выделила тень, равную размерам контейнера.

{{EmbedGHLiveSample("css-examples/learn/images/filter-text.html", '100%', 600)}}

## Режимы смешивания

Режимы смешивания CSS позволяют определить смешивание при наложении двух элементов. Смешивание очень знакомо пользователям редакторов вроде Photoshop.

В режимах смешивания CSS два значения:

- {{cssxref("background-blend-mode")}}, которое смешивает цвет фона и цвета отдельного элемента.
- {{cssxref("mix-blend-mode")}}, которое смешивает элементы, наложенные друг на друга.

Вы можете найти больше примеров смешивания на странице [blend-modes.html](http://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/blend-modes.html) (смотрите [источник](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/advanced_box_effects/blend-modes.html)) и на странице {{cssxref("&lt;blend-mode&gt;")}}.

> **Примечание:** Смешивание относительно новое свойство, поэтому поддерживается хуже, чем фильтры. Оно совсем не поддерживается на Edge, а Safari поддерживает лишь некоторые значения свойства.

### background-blend-mode

Снова обратимся к примеру. Во-первых, {{cssxref("background-blend-mode")}} — мы покажем несколько контейнеров {{htmlelement("div")}}, чтобы вы сравнили оригинал с редактированной версией:

```html
<div></div>
<div class="multiply"></div>
```

Воспользуемся CSS — добавим к `<div>` одно фоновое изображение и зелёный фон:

```css
div {
  width: 250px;
  height: 130px;
  padding: 10px;
  margin: 10px;
  display: inline-block;
  background: url(colorful-heart.png) no-repeat center 20px;
  background-color: green;
}

.multiply {
  background-blend-mode: multiply;
}
```

Слева вы видите оригинал, справа — изменённое изображение:

{{ EmbedLiveSample('background-blend-mode', '100%', 200) }}

### mix-blend-mode

Рассмотрим {{cssxref("mix-blend-mode")}}. Здесь мы также используем несколько `<div>`, но каждый из них расположен над простым `<div>` с фиолетовым фоном, чтобы показать, как элементы будут смешаны:

```html
<article>
  Нет режима смешивания
  <div></div>
  <div></div>
</article>

<article>
  Множественное смешивание
  <div class="multiply-mix"></div>
  <div></div>
</article>
```

А здесь CSS:

```css
article {
  width: 280px;
  height: 180px;
  margin: 10px;
  position: relative;
  display: inline-block;
}

div {
  width: 250px;
  height: 130px;
  padding: 10px;
  margin: 10px;
}

article div:first-child {
  position: absolute;
  top: 10px;
  left: 0;
  background: url(colorful-heart.png) no-repeat center 20px;
  background-color: green;
}

article div:last-child {
  background-color: purple;
  position: absolute;
  bottom: -10px;
  right: 0;
  z-index: -1;
}

.multiply-mix {
  mix-blend-mode: multiply;
}
```

И это даст нам следующее:

{{ EmbedLiveSample('mix-blend-mode', '100%', 200) }}

Как видите, смешались не только фоновые изображения, но и `<div>` под ними.

> **Примечание:** Не переживайте, если вы не знаете такие свойства разметки, как {{cssxref("position")}}, {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("z-index")}} и т. д. Мы детально рассмотрим это в модуле [CSS Layout](/ru/docs/Learn/CSS/CSS_layout).

## CSS-фигуры

Мы можем сделать обтекание содержимым непрямоугольных фигур, используя [CSS-фигуры](/ru/docs/Web/CSS/CSS_Shapes).

В примере ниже мы эффектно округлили воздушный шар. В действительности изображение прямоугольное, но с определением свойства _float_ (по-другому формы не добавляются) и использованием свойства {{cssxref("shape-outside")}} со значением `circle(50%)`, мы можем создать эффект обтекания текста.

{{EmbedGHLiveSample("css-examples/learn/images/shapes.html", '100%', 1000)}}

Форма в этом примере не реагирует на содержание изображения. Вместо этого в центре изображения определяется центр окружности, как если бы мы начертили циркулем окружность, вписанную в изображение. Это та окружность, которую обтекает текст.

> **Примечание:** В Firefox вы можете использовать [Инспектор фигур](/ru/docs/Tools/Page_Inspector/How_to/Edit_CSS_shapes), чтобы редактировать фигуры.

Значение `circle()` — лишь одно из нескольких базовых фигур для этого свойства, но можно и создавать формы. (Читайте [Обзор CSS-фигур](/ru/docs/Web/CSS/CSS_Shapes/Overview_of_CSS_Shapes) на MDN.)

## -webkit-background-clip: text

Функция, о которой мы, кажется, упомянули в свойстве `text` для значения {{cssxref("background-clip")}}. Опция `-webkit-text-fill-color: transparent;` позволяет обрезать фоновые изображения под форму текста. Это неофициальный стандарт, но он был подключён во множестве браузеров. В данном контексте обязательно используется префикс `-webkit-` для любых браузеров:

```css
.text-clip {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

Так почему остальные браузеры используют префикс `-webkit-`? В основном для совместимости — поэтому многие веб-разработчики стали вставлять префиксы `-webkit-`, отчего другие браузеры казались сломанными, когда, по факту, всё было выполнено по всем стандартам. Поэтому были введены некоторые такие функции.

Если вы собираетесь использовать подобные опции, проверьте совместимость их с браузерами.

> **Примечание:** Пример с `-webkit-background-clip: text` смотрите на [background-clip-text.html](http://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/background-clip-text.html) (или [источнике](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/advanced_box_effects/background-clip-text.html)).

## Итог

Надеемся, статья была весёлой — игра с кодами уж точно. Всегда интересно следить за появлением новых узконаправленных свойств в современных браузерах.
