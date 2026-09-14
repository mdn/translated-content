---
title: "Element: метод animate()"
slug: Web/API/Element/animate
l10n:
  sourceCommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{APIRef('Web Animations')}}

Метод **`animate()`** интерфейса {{domxref("Element")}} это быстрый способ создания {{domxref("Animation")}}, которая применяется к элементу и сразу запускается. Метод возвращает созданный экземпляр {{domxref("Animation")}}.

> [!NOTE]
> Элементы могут иметь несколько анимаций. Чтобы получить список анимаций, которые влияют на элемент, можно использовать метод {{domxref("Element.getAnimations()")}}.

## Синтаксис

```js-nolint
animate(keyframes, options)
```

### Параметры

- `keyframes`
  - : Массив объектов кадров **или** объект кадра, свойства которого являются массивами значений для итерации. Смотрите [форматы кадров](/ru/docs/Web/API/Web_Animations_API/Keyframe_Formats) для получения подробной информации.
- `options`
  - : **Целое число, представляющее продолжительность анимации** (в миллисекундах) **или** объект, содержащий одно или более свойств, описанных в [параметре `options` конструктора `KeyframeEffect()`](/ru/docs/Web/API/KeyframeEffect/KeyframeEffect#свойства)
    - `id` {{optional_inline}}
      - : Уникальное для `animate()` свойство: строка указывающая на анимацию.
    - `rangeEnd` {{optional_inline}}
      - : Указывает окончание диапазона анимации, JavaScript-эквивалент CSS-свойства {{cssxref("animation-range-end")}}. `rangeEnd` может принимать разные типы:
        - Строка `normal` (означает отсутствие изменений в диапазоне анимации), CSS-представление смещение анимации {{cssxref("length-percentage")}}, `<timeline-range-name>` или `<timeline-range-name>` с последующим `<length-percentage>`. Например:

          ```plain
          "normal"
          "entry"
          "cover 100%"
          ```

          Смотрите [`animation-range`](/ru/docs/Web/CSS/animation-range) для подробного описания доступных значений. Также полезно будет ознакомится с материалом [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/), где визуально показывается поведение разных значений.

        - Объект, содержащий свойства `rangeName` (строка) и `offset` (свойства {{domxref("CSSNumericValue")}}), представляющие `<timeline-range-name>` и `<length-percentage>`, описанные в предыдущем пункте. Например:

          ```js
          {
            rangeName: 'entry',
            offset: CSS.percent('100'),
          }
          ```

        - {{domxref("CSSNumericValue")}}, описывающее смещение, например:

          ```js
          CSS.percent("100");
          ```

    - `rangeStart` {{optional_inline}}
      - : Указывает начало диапазона анимации, JavaScript-эквивалент CSS-свойства {{cssxref("animation-range-start")}}. `rangeStart` может принимать такие же значения, как `rangeEnd`.
    - `timeline` {{optional_inline}}
      - : Уникальное для `animate()` свойство: {{domxref("AnimationTimeline")}} для связи с анимацией, JavaScript-эквивалент CSS-свойства {{cssxref("animation-timeline")}}. По умолчанию равно {{domxref("Document.timeline")}}.

### Возвращаемое значение

Возвращает {{domxref("Animation")}}.

## Примеры

### Вращение и масштабирование

В этом примере мы используем метод `animate()` для вращения и масштабирования элемента.

#### HTML

```html
<div class="newspaper">Вращение газеты<br />вызывает головокружение</div>
```

#### CSS

```css
html,
body {
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
}

.newspaper {
  padding: 0.5rem;
  text-transform: uppercase;
  text-align: center;
  background-color: white;
  cursor: pointer;
}
```

#### JavaScript

```js
const newspaperSpinning = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const newspaperTiming = {
  duration: 2000,
  iterations: 1,
};

const newspaper = document.querySelector(".newspaper");

newspaper.addEventListener("click", () => {
  newspaper.animate(newspaperSpinning, newspaperTiming);
});
```

#### Result

{{EmbedLiveSample("Вращение и масштабирование")}}

### «Спускаясь в кроличью нору»

В демо [Down the Rabbit Hole (with the Web Animation API)](https://codepen.io/rachelnabors/pen/rxpmJL/?editors=0010), мы используем удобный метод `animate()` для создания и запуска анимации на элементе `#tunnel`, чтобы заставить его бесконечно крутиться в падении. Обратите внимание на массив объектов, в котором переданы кадры, а также блок с настройкой продолжительности.

```js
document.getElementById("tunnel").animate(
  [
    // кадры
    { transform: "translateY(0px)" },
    { transform: "translateY(-300px)" },
  ],
  {
    // настройки продолжительности
    duration: 1000,
    iterations: Infinity,
  },
);
```

### Явное указание кадров начала и окончания

В современных версиях браузеров можно указывать состояние только начала или окончания анимации (то есть один кадр), а браузер сам определит недостающую информацию. Например, рассмотрим [эту простую анимацию](https://mdn.github.io/dom-examples/web-animations-api/implicit-keyframes.html) — объект кадра выглядит следующим образом:

```js
let rotate360 = [{ transform: "rotate(360deg)" }];
```

Мы указали только состояние окончания анимации, а начальное состояние будет определено автоматически.

### timeline, rangeStart и rangeEnd

Распространённое использование свойств `timeline`, `rangeStart` и `rangeEnd` выглядит следующим образом:

```js
const img = document.querySelector("img");

const timeline = new ViewTimeline({
  subject: img,
  axis: "block",
});

img.animate(
  {
    opacity: [0, 1],
    transform: ["scaleX(0)", "scaleX(1)"],
  },
  {
    fill: "both",
    duration: 1,
    timeline,
    rangeStart: "cover 0%",
    rangeEnd: "cover 100%",
  },
);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Animation")}}
- {{domxref("Element.getAnimations()")}}
- {{cssxref("animation-range-end")}}, {{cssxref("animation-range-start")}}, {{cssxref("animation-timeline")}}
- [CSS scroll-driven animations](/ru/docs/Web/CSS/CSS_scroll-driven_animations)
- [Web Animations API](/ru/docs/Web/API/Web_Animations_API)
