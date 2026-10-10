---
title: Элементы MathML с индексами
short-title: Элементы с индексами
slug: Web/MathML/Tutorials/For_beginners/Scripts
l10n:
  sourceCommit: 41df35b68f52dcfa4d07d979a629c893b0ecc3fd
---

{{PreviousMenuNext("Web/MathML/Tutorials/For_beginners/Fractions_and_roots", "Web/MathML/Tutorials/For_beginners/Tables", "Web/MathML/Tutorials/For_beginners")}}

Продолжая знакомство с основными математическими обозначениями, эта статья посвящена созданию элементов MathML с индексами.

## Нижние и верхние индексы

Как и элементы из [предыдущей статьи](/ru/docs/Web/MathML/Tutorials/For_beginners/Fractions_and_roots), `<msub>`, `<msup>` и `<msubsup>` имеют особую структуру. Элементы `<msub>` и `<msup>` должны содержать ровно два дочерних элемента, а `<msubsup>` — три:

```html
<p>
  msub:
  <math>
    <msub>
      <mtext>дочерний элемент 1</mtext>
      <mtext>дочерний элемент 2</mtext>
    </msub>
  </math>
</p>

<p>
  msup:
  <math>
    <msup>
      <mtext>дочерний элемент 1</mtext>
      <mtext>дочерний элемент 2</mtext>
    </msup>
  </math>
</p>
<p>
  msubsup:
  <math>
    <msubsup>
      <mtext>дочерний элемент 1</mtext>
      <mtext>дочерний элемент 2</mtext>
      <mtext>дочерний элемент 3</mtext>
    </msubsup>
  </math>
</p>
```

Ниже показано, как этот пример отображается в браузере.

{{ EmbedLiveSample('Subtrees_of_msub_msup_msubsup', 700, 200, "", "") }}

Обратите внимание на следующие особенности:

- Второй дочерний элемент `<msub>` присоединяется к первому в качестве нижнего индекса.
- Второй дочерний элемент `<msup>` присоединяется к первому в качестве верхнего индекса.
- Второй и третий дочерние элементы `<msubsup>` присоединяются к первому соответственно в качестве нижнего и верхнего индексов.
- Размер текста внутри индексов уменьшается.

> [!NOTE]
> Элементы MathML `<msub>` и `<msup>` отличаются от элементов HTML [`<sub>`](/ru/docs/Web/HTML/Reference/Elements/sub) и [`<sup>`](/ru/docs/Web/HTML/Reference/Elements/sup). В качестве индексов они позволяют использовать произвольные поддеревья MathML, а не только текст.

## Подписи снизу и сверху

Элементы `<munder>`, `<mover>` и `<munderover>` устроены очень похоже, но используются для добавления подписей снизу и сверху. Следующее упражнение поможет самостоятельно определить назначение каждого из них.

### Распознавание подписей снизу и сверху

В следующем примере попробуйте угадать названия скрытых элементов, обозначенных вопросительными знаками, а затем нажмите кнопку, чтобы увидеть решение:

```html hidden
<p>
  Элемент <code>&lt;<span>????????</span>&gt;</code> ровно с двумя дочерними элементами
  (дочерний элемент 1, дочерний элемент 2):
  <math>
    <mover>
      <mtext>дочерний элемент 1</mtext>
      <mtext>дочерний элемент 2</mtext>
    </mover>
  </math>
</p>
<p>
  Элемент <code>&lt;<span>????????</span>&gt;</code> ровно с тремя дочерними элементами
  (дочерний элемент 1, дочерний элемент 2 и дочерний элемент 3):
  <math>
    <munderover>
      <mtext>дочерний элемент 1</mtext>
      <mtext>дочерний элемент 2</mtext>
      <mtext>дочерний элемент 3</mtext>
    </munderover>
  </math>
</p>
<p>
  Элемент <code>&lt;<span>????????</span>&gt;</code> ровно с двумя дочерними элементами
  (дочерний элемент 1, дочерний элемент 2):
  <math>
    <munder>
      <mtext>дочерний элемент 1</mtext>
      <mtext>дочерний элемент 2</mtext>
    </munder>
  </math>
</p>

<p><input type="button" id="showSolution" value="Показать решение" /></p>
```

```css hidden
p {
  padding: 0.5em;
}
```

```js hidden
document.getElementById("showSolution").addEventListener("click", () => {
  const maths = Array.from(document.getElementsByTagName("math"));
  Array.from(document.getElementsByTagName("span")).forEach((span, index) => {
    span.textContent = maths[index].firstElementChild.tagName;
  });
});
```

{{ EmbedLiveSample('Recognizing under/over scripts', 700, 400, "", "") }}

### Распознавание элементов с индексами

Следующая формула MathML содержит более сложное выражение с вложенными дробями, корнями и индексами. Попробуйте найти элементы `<msub>`, `<msup>`, `<msubsup>`, `<munder>`, `<mover>` и `<munderover>`. При нажатии такой элемент выделяется и появляется подтверждающее сообщение. В завершение изучите исходный код MathML и проверьте свои предположения.

```html hidden
<!doctype html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <title>Моя страница с элементами с индексами</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <math display="block">
      <mroot>
        <mrow>
          <munder>
            <mi>β</mi>
            <mo>⎵</mo>
          </munder>
        </mrow>
        <mn>3</mn>
      </mroot>
      <mo>+</mo>
      <mfrac>
        <mrow>
          <mo>|</mo>
          <mover>
            <mi>α</mi>
            <mo>→</mo>
          </mover>
          <mo>|</mo>
        </mrow>
        <msup>
          <mi>s</mi>
          <mn>3</mn>
        </msup>
      </mfrac>
      <mo>−</mo>
      <mrow>
        <munderover>
          <mo>∑</mo>
          <mrow>
            <mi>i</mi>
            <mo>=</mo>
            <mn>1</mn>
          </mrow>
          <mi>n</mi>
        </munderover>
        <msqrt>
          <mrow>
            <msub>
              <mi>a</mi>
              <mi>i</mi>
            </msub>
            <mo>−</mo>
            <msubsup>
              <mi>K</mi>
              <mn>0</mn>
              <mi>i</mi>
            </msubsup>
          </mrow>
        </msqrt>
      </mrow>
    </math>
    <input type="button" id="clearOutput" value="Сбросить" />
    <div id="output"></div>
  </body>
</html>
```

```css hidden
.highlight {
  color: red;
}
math {
  font-size: 200%;
}
```

```js hidden
const scriptedElements = Array.from(
  document.querySelectorAll("msub, msup, msubsup, munder, mover, munderover"),
);
const outputDiv = document.getElementById("output");
function clearHighlight() {
  scriptedElements.forEach((scripted) => {
    scripted.classList.remove("highlight");
  });
}
scriptedElements.forEach((scripted) => {
  scripted.addEventListener("click", () => {
    clearHighlight();
    scripted.classList.add("highlight");
    outputDiv.insertAdjacentHTML(
      "beforeend",
      `<p><strong>Выбран элемент <code>&lt;${scripted.tagName}&gt;</code>.</strong></p>`,
    );
  });
});
document.getElementById("clearOutput").addEventListener("click", () => {
  clearHighlight();
  outputDiv.textContent = "";
});
```

{{ EmbedLiveSample('Recognizing scripted elements', 700, 400, "", "") }}

## Дополнительные свойства операторов

Ранее уже рассматривались некоторые [свойства элемента `<mo>`](/ru/docs/Web/MathML/Tutorials/For_beginners/Text_containers#свойства_операторов_mo), а именно растяжение по вертикали и интервалы. Знакомство с элементами с индексами позволяет дополнить этот список. Для этого немного изменим [предыдущий пример](#распознавание_элементов_с_индексами).

### Растяжение по горизонтали

Сначала выполним подстановки <math><mi>β</mi><mo>≔</mo><mrow><msub><mi>z</mi><mn>1</mn></msub><mo>+</mo><msub><mi>z</mi><mn>2</mn></msub></mrow><annotation encoding="TeX">\beta := z*{1} + z*{2}</annotation></math> и <math><mi>α</mi><mo>≔</mo><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><msub><mi>v</mi><mn>2</mn></msub></mrow><annotation encoding="TeX">\alpha := v*{1} + v*{2}</annotation></math>:

```html hidden
<!doctype html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <title>Моя страница с операторами, растягивающимися по горизонтали</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <math display="block">
      <mroot>
        <mrow>
          <munder>
            <mrow>
              <msub>
                <mi>z</mi>
                <mn>1</mn>
              </msub>
              <mo>+</mo>
              <msub>
                <mi>z</mi>
                <mn>2</mn>
              </msub>
            </mrow>
            <mo>⎵</mo>
          </munder>
        </mrow>
        <mn>3</mn>
      </mroot>
      <mo>+</mo>
      <mfrac>
        <mrow>
          <mo>|</mo>
          <mover>
            <mrow>
              <msub>
                <mi>v</mi>
                <mn>1</mn>
              </msub>
              <mo>+</mo>
              <msub>
                <mi>v</mi>
                <mn>2</mn>
              </msub>
            </mrow>
            <mo>→</mo>
          </mover>
          <mo>|</mo>
        </mrow>
        <msup>
          <mi>s</mi>
          <mn>3</mn>
        </msup>
      </mfrac>
      <mo>−</mo>
      <mrow>
        <munderover>
          <mo>∑</mo>
          <mrow>
            <mi>i</mi>
            <mo>=</mo>
            <mn>1</mn>
          </mrow>
          <mi>n</mi>
        </munderover>
        <msqrt>
          <mrow>
            <msub>
              <mi>a</mi>
              <mi>i</mi>
            </msub>
            <mo>−</mo>
            <msubsup>
              <mi>K</mi>
              <mn>0</mn>
              <mi>i</mi>
            </msubsup>
          </mrow>
        </msqrt>
      </mrow>
    </math>
  </body>
</html>
```

```css hidden
.highlight {
  color: red;
}
math {
  font-size: 200%;
}
```

{{ EmbedLiveSample('Stretching_in_horizontal_direction', 700, 200, "", "") }}

Теперь видно, что нижняя скобка «⎵» и стрелка вправо «→» растягиваются по горизонтали на ширину подставленных значений. Как уже известно, [некоторые вертикальные операторы могут растягиваться](/ru/docs/Web/MathML/Tutorials/For_beginners/Text_containers#распознавание_растягивающихся_операторов) до высоты нерастягивающихся соседних элементов внутри `<mrow>`. Аналогичным образом некоторые горизонтальные операторы могут растягиваться на ширину нерастягивающихся соседних элементов внутри `<munder>`, `<mover>` или `<munderover>`.

> [!NOTE]
> Растягиваться может любой дочерний элемент `<munder>`, `<mover>` или `<munderover>`, а не только подпись снизу или сверху.

### Крупные операторы и пределы

До сих пор пример отображался с атрибутом [`display="block"`](/ru/docs/Web/MathML/Tutorials/For_beginners/Getting_started#атрибут_display). Посмотрим, как он выглядит без этого атрибута:

```html hidden
<!doctype html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <title>Моя страница с перемещёнными пределами и небольшим крупным оператором</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <math>
      <mroot>
        <mrow>
          <munder>
            <mrow>
              <msub>
                <mi>z</mi>
                <mn>1</mn>
              </msub>
              <mo>+</mo>
              <msub>
                <mi>z</mi>
                <mn>2</mn>
              </msub>
            </mrow>
            <mo>⎵</mo>
          </munder>
        </mrow>
        <mn>3</mn>
      </mroot>
      <mo>+</mo>
      <mfrac>
        <mrow>
          <mo>|</mo>
          <mover>
            <mrow>
              <msub>
                <mi>v</mi>
                <mn>1</mn>
              </msub>
              <mo>+</mo>
              <msub>
                <mi>v</mi>
                <mn>2</mn>
              </msub>
            </mrow>
            <mo>→</mo>
          </mover>
          <mo>|</mo>
        </mrow>
        <msup>
          <mi>s</mi>
          <mn>3</mn>
        </msup>
      </mfrac>
      <mo>−</mo>
      <mrow>
        <munderover>
          <mo>∑</mo>
          <mrow>
            <mi>i</mi>
            <mo>=</mo>
            <mn>1</mn>
          </mrow>
          <mi>n</mi>
        </munderover>
        <msqrt>
          <mrow>
            <msub>
              <mi>a</mi>
              <mi>i</mi>
            </msub>
            <mo>−</mo>
            <msubsup>
              <mi>K</mi>
              <mn>0</mn>
              <mi>i</mi>
            </msubsup>
          </mrow>
        </msqrt>
      </mrow>
    </math>
  </body>
</html>
```

```css hidden
.highlight {
  color: red;
}
math {
  font-size: 200%;
}
```

{{ EmbedLiveSample('Large_operator_and_limits', 700, 200, "", "") }}

Как и ожидалось, формула больше не выровнена по центру, а её отображение изменено так, чтобы уменьшить высоту. Если обратить внимание на знак суммирования, можно заметить, что сигма стала меньше, а подписи элемента `<munderover>` теперь присоединены как нижний и верхний индексы. Это связано с двумя свойствами оператора «∑»:

- _largeop_: оператор отображается более крупным глифом, если у элемента `<math>` есть атрибут `display="block"`.
- _movablelimits_: если у элемента `<math>` нет атрибута `display="block"`, подписи снизу и сверху, присоединённые к оператору, отображаются соответственно как нижний и верхний индексы.

> [!NOTE]
> На самом деле свойство _largeop_ не связано с индексами, хотя обладающие им операторы обычно используются вместе с ними. Свойство _movablelimits_ также учитывается для элементов `<munder>` и `<mover>`.

## Итоги

Эта статья завершает обзор основной разметки знакомством с элементами `<msub>`, `<msup>`, `<msubsup>`, `<munder>`, `<mover>` и `<munderover>` для нижних и верхних индексов, а также подписей снизу и сверху. С их помощью удалось кратко рассмотреть новые свойства элемента `<mo>`. Следующая статья посвящена [табличной разметке](/ru/docs/Web/MathML/Tutorials/For_beginners/Tables).

## Смотрите также

- [Элемент `<msub>`](/ru/docs/Web/MathML/Reference/Element/msub)
- [Элемент `<msup>`](/ru/docs/Web/MathML/Reference/Element/msup)
- [Элемент `<msubsup>`](/ru/docs/Web/MathML/Reference/Element/msubsup)
- [Элемент `<munder>`](/ru/docs/Web/MathML/Reference/Element/munder)
- [Элемент `<mover>`](/ru/docs/Web/MathML/Reference/Element/mover)
- [Элемент `<munderover>`](/ru/docs/Web/MathML/Reference/Element/munderover)

{{PreviousMenuNext("Web/MathML/Tutorials/For_beginners/Fractions_and_roots", "Web/MathML/Tutorials/For_beginners/Tables", "Web/MathML/Tutorials/For_beginners")}}
