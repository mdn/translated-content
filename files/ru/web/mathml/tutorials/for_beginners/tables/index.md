---
title: Таблицы MathML
short-title: Таблицы
slug: Web/MathML/Tutorials/For_beginners/Tables
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{PreviousMenuNext("Web/MathML/Tutorials/For_beginners/Scripts", "Web/MathML/Tutorials/For_beginners/Three_famous_mathematical_formulas", "Web/MathML/Tutorials/For_beginners")}}

Мы рассмотрели основные математические обозначения. Теперь разберём табличную компоновку, которая подходит для матриц и других сложных математических записей.

## Табличные элементы MathML

Табличные элементы MathML похожи на элементы [таблиц HTML](/ru/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics): элемент `<mtable>` представляет математическую таблицу, его дочерние элементы `<mtr>` — строки, а дочерние элементы `<mtd>` в каждой строке — ячейки. Элемент `<mtable>` можно вставить в любое место формулы MathML. Элемент `<mtd>` может содержать любое количество дочерних элементов MathML и располагает их как контейнер `<mrow>`.

Таблицы обычно используют для записи матриц и векторов. Вот простой пример из статьи о [функции CSS `matrix()`](/ru/docs/Web/CSS/Reference/Values/transform-function/matrix):

```html hidden
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
```

```html
<math display="block">
  <mrow>
    <mo>(</mo>
    <mtable>
      <mtr>
        <mtd>
          <mi>a</mi>
        </mtd>
        <mtd>
          <mi>c</mi>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <msub>
            <mi>t</mi>
            <mi>x</mi>
          </msub>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mi>b</mi>
        </mtd>
        <mtd>
          <mi>d</mi>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <msub>
            <mi>t</mi>
            <mi>y</mi>
          </msub>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>1</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>1</mn>
        </mtd>
      </mtr>
    </mtable>
    <mo>)</mo>
  </mrow>
</math>
```

{{EmbedLiveSample("MathML_tabular_elements", 700, 200, "", "")}}

## Объединение ячеек по строкам и столбцам

Принцип такой же, как в [таблицах HTML](/ru/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics#allowing_cells_to_span_multiple_rows_and_columns). У элемента `<mtd>` есть атрибуты `columnspan` и `rowspan`, которые позволяют растянуть ячейку на несколько столбцов и строк. В примере ниже внутренняя матрица занимает два столбца внешней:

```html hidden
<!doctype html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <title>Матрица с атрибутом columnspan</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <math display="block">
      <mrow>
        <mo>(</mo>
        <mtable>
          <mtr>
            <mtd columnspan="2">
              <mrow>
                <mo>(</mo>
                <mtable>
                  <mtr>
                    <mtd>
                      <mi>a</mi>
                    </mtd>
                    <mtd>
                      <mi>c</mi>
                    </mtd>
                  </mtr>
                  <mtr>
                    <mtd>
                      <mi>b</mi>
                    </mtd>
                    <mtd>
                      <mi>d</mi>
                    </mtd>
                  </mtr>
                </mtable>
                <mo>)</mo>
              </mrow>
            </mtd>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mi>T</mi>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mn>1</mn>
            </mtd>
            <mtd>
              <mn>0</mn>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mn>1</mn>
            </mtd>
          </mtr>
        </mtable>
        <mo>)</mo>
      </mrow>
    </math>
  </body>
</html>
```

{{EmbedLiveSample("allowing_cells_to_span_multiple_rows_and_columns", 700, 200, "", "")}}

> [!NOTE]
> По историческим причинам атрибут MathML для объединения столбцов называется `columnspan`, а не `colspan`.

## Сложная компоновка

Помимо записи матриц, таблицы MathML иногда используют для сложной компоновки внутри формул, например в [определении символа Лежандра в Википедии](https://en.wikipedia.org/wiki/Legendre_symbol). В этом примере случаи расположены в трёх строках, а значения и условия — в двух столбцах.

```html hidden
<!doctype html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <title>Моя первая матрица</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <math display="block">
      <mrow>
        <mrow>
          <mo>(</mo>
          <mfrac>
            <mi>a</mi>
            <mi>b</mi>
          </mfrac>
          <mo>)</mo>
        </mrow>
        <mo>=</mo>
        <mrow>
          <mo>{</mo>
          <mtable>
            <mtr>
              <mtd>
                <mn>1</mn>
              </mtd>
              <mtd>
                <mtext>если </mtext>
                <mi>a</mi>
                <mtext> — квадратичный вычет по модулю </mtext>
                <mi>p</mi>
                <mtext> и </mtext>
                <mi>a</mi>
                <mtext> не кратно </mtext>
                <mi>p</mi>
                <mo>;</mo>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mo>−</mo>
                <mn>1</mn>
              </mtd>
              <mtd>
                <mtext>если </mtext>
                <mi>a</mi>
                <mtext> не является квадратичным вычетом по модулю </mtext>
                <mi>p</mi>
                <mo>;</mo>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mn>0</mn>
              </mtd>
              <mtd>
                <mtext>если </mtext>
                <mi>a</mi>
                <mtext> кратно </mtext>
                <mi>p</mi>
                <mo>.</mo>
              </mtd>
            </mtr>
          </mtable>
        </mrow>
      </mrow>
    </math>
  </body>
</html>
```

{{EmbedLiveSample("Usage_for_advanced_layout", 700, 200, "", "")}}

> [!WARNING]
> В статье об элементе [`<mtable>`](/ru/docs/Web/MathML/Reference/Element/mtable) описаны дополнительные параметры компоновки, задаваемые специальными атрибутами, например выравниванием или интервалами. Эти атрибуты появились до эквивалентных средств CSS и предназначались для обработчиков, не поддерживающих CSS. Однако некоторые браузеры могут их не поддерживать. В будущем таблицы `<mtable>`, используемые только для компоновки (то есть не для записи матриц), вероятно, можно будет заменить средствами CSS.

## Итоги

В этой статье мы рассмотрели элементы `<mtable>`, `<mtr>` и `<mtd>`, соответствующие элементам HTML-таблиц. Мы узнали, как использовать их для записи матриц и как с их помощью задавать сложную компоновку.

Вы почти прошли этот модуль — остался ещё один шаг. В [задании о трёх знаменитых математических формулах](/ru/docs/Web/MathML/Tutorials/For_beginners/Three_famous_mathematical_formulas) примените новые знания и перепишите небольшую математическую статью на HTML и MathML.

## Смотрите также

- [Изучение HTML-таблиц](/ru/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- Элемент [`<mtable>`](/ru/docs/Web/MathML/Reference/Element/mtable)
- Элемент [`<mtr>`](/ru/docs/Web/MathML/Reference/Element/mtr)
- Элемент [`<mtd>`](/ru/docs/Web/MathML/Reference/Element/mtd)

{{PreviousMenuNext("Web/MathML/Tutorials/For_beginners/Scripts", "Web/MathML/Tutorials/For_beginners/Three_famous_mathematical_formulas", "Web/MathML/Tutorials/For_beginners")}}
