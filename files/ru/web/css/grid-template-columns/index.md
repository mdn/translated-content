---
title: grid-template-columns
slug: Web/CSS/grid-template-columns
---

{{CSSRef}}

CSS-свойство **`grid-template-columns`** определяет имена линий и размеры {{glossary("grid column", "грид-колонок")}}.

{{EmbedInteractiveExample("pages/css/grid-template-columns.html")}}

## Синтаксис

```css
/* Ключевое слово в качестве значения */
grid-template-columns: none;

/* Значения типа <track-list> */
grid-template-columns: 100px 1fr;
grid-template-columns: [linename] 100px;
grid-template-columns: [linename1] 100px [linename2 linename3];
grid-template-columns: minmax(100px, 1fr);
grid-template-columns: fit-content(40%);
grid-template-columns: repeat(3, 200px);
grid-template-columns: subgrid;
grid-template-columns: masonry;

/* Значения типа <auto-track-list> */
grid-template-columns: 200px repeat(auto-fill, 100px) 300px;
grid-template-columns:
  minmax(100px, max-content)
  repeat(auto-fill, 200px) 20%;
grid-template-columns:
  [linename1] 100px [linename2]
  repeat(auto-fit, [linename3 linename4] 300px)
  100px;
grid-template-columns:
  [linename1 linename2] 100px
  repeat(auto-fit, [linename1] 300px) [linename3];

/* Глобальные значения */
grid-template-columns: inherit;
grid-template-columns: initial;
grid-template-columns: revert;
grid-template-columns: unset;
```

### Значения

- `none`
  - : Указывает на отсутствие явной грид-раскладки. Все колонки будут создаваться неявным образом, а их размер будет определяться свойством {{cssxref("grid-auto-columns")}}.
- `[linename]`
  - : [`<custom-ident>`](/ru/docs/Web/CSS/custom-ident) задаёт имя для линии. Идентификатором может быть любая строка, кроме зарезервированных слов `span` и `auto`. У линий может быть несколько имён, перечисленных через пробел внутри квадратных скобок, например, `[line-name-a line-name-b]`.
- {{cssxref("&lt;length&gt;")}}
  - : Неотрицательная длина, задающая ширину колонки.
- {{cssxref("&lt;percentage&gt;")}}
  - : Неотрицательное значение в виде процента ({{cssxref("percentage", "&lt;percentage&gt;")}}), вычисляющегося относительно встроенного размера грид-контейнера. Если размер грид-контейнера зависит от размера его полос, то процент будет рассматриваться как значение `auto`.
    Собственные размеры полосы могут быть скорректированы до размера грид-контейнера, что приведёт к увеличению конечного размера полосы на минимальную величину, необходимую для соблюдения процентного соотношения.
- {{cssxref("&lt;flex&gt;")}}

  - : Неотрицательное значение с единицей измерения `fr`, определяющая показатель расширения. Каждая грид-полоса, заданная значением `<flex>`, занимает оставшееся свободное пространство пропорционально указанному показателю расширения.

    При использовании вне функции `minmax()`, предполагается использование автоматического минимума (т.е. равнозначно `minmax(auto, <flex>)`).

- {{cssxref("max-content")}}
  - : Ключевое слово, представляющее наибольший размер [максимального содержимого](https://www.w3.org/TR/css-sizing-3/#max-content) среди всех грид-элементов в грид-полосе. Например, если в первом элементе грид-полосы будет находиться одно предложение: _"Repetitio est mater studiorum"_, а во втором — _"Dum spiro, spero"_, то максимальное содержимое будет определяться размером самого длинного предложения среди всех грид-элементов — _"Repetitio est mater studiorum"_.
- {{cssxref("min-content")}}
  - : Ключевое слово, представляющее наибольший размер [минимального содержимого](https://www.w3.org/TR/css-sizing-3/#min-content) среди всех грид-элементов в грид-полосе. Например, если в первом элементе грид-полосы будет находиться одно предложение: "Repetitio est mater studiorum", а во втором — "Dum spiro, spero", то минимальное содержимое будет определяться размером самого длинного слова среди всех предложений в грид—элементах — "studiorum".
- {{cssxref("minmax()", "minmax(min, max)")}}
  - : Функция, определяющая диапазон размеров грид-элемента, больший или равный _min_ и меньший или равный _max_. Если _max_ меньше _min_, то _max_ игнорируется и функция будет использовать _min_. Можно задать показатель расширения `<flex>` в качестве максимально значения, но для минимального его использование недопустимо.
- `auto`

  - : При использовании в качестве максимального значения представляет собой размер наибольшего элемента среди всех элементов грид-полосы, что равнозначно {{cssxref("max-content")}}.

    При использовании в качестве минимального значения представляет собой минимальный размер элемента среди всех элементов в грид-полосе (определённый свойствами {{cssxref("min-width")}}/{{cssxref("min-height")}} у элементов). Часто, хотя и не всегда, идентичен размеру {{cssxref("min-content")}}.

    При использовании вне функции {{cssxref("minmax()", "minmax()")}}, `auto` представляет диапазон между минимумом и максимумом, описанным выше. В большинстве случаев это то же самое, что и `minmax(min-content,max-content)`.

    > **Примечание:** размеры полос, заданные значением `auto` (и только `auto`) могут быть растянуты с помощью свойств {{cssxref("align-content")}} и {{cssxref("justify-content")}}. Поэтому по умолчанию грид-полоса с размером `auto` будет занимать всё оставшееся свободное пространство в грид-контейнере.

- `{{cssxref("fit-content()", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}`
  - : Может быть выражен формулой `max(minimum, min(limit, max-content))`, где `minimum` представляет собой `auto`-минимум (который часто, но не всегда представляет наименьший размер минимального содержимого) и `limit` — любое значение или функция для определения размера полосы, переданная в качестве аргумента в `fit-content()`. По-другому можно сказать, что `fit-content()` получается выбором наименьшего значения среди `minmax(auto, max-content)`, `minmax(auto, limit)`.
- {{cssxref("repeat()", "repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ] , &lt;track-list&gt; )")}}
  - : Представляет собой повторяющийся фрагмент списка полос, тем самым позволяя компактно определить большое количество колонок согласно повторяющемуся шаблону.
- [`masonry`](/ru/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout){{Experimental_Inline}}
  - : Значение `masonry` указывает на то, что оси должны выстраиваться согласно алгоритму masonry (плиточной раскладки).
- [`subgrid`](/ru/docs/Web/CSS/CSS_Grid_Layout/Subgrid)
  - : Значение `subgrid` указывает, что грид-раскладка примет размеры родительского грид-контейнера на соответствующих осях. Таким образом размеры колонок и рядов не задаются явно, а берутся из определения родительской грид-раскладки.

> **Предупреждение:** Значение `masonry` появилось в CSS-спецификации Grid Level 3 и на данный момент в качестве эксперимента реализовано в Firefox и активируется через флаг в настройках.
>
> Значение `subgrid` представлено в CSS-спецификации Grid Level 2 и пока что реализовано только в Firefox с 71 версии.

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### Определение грид-колонок с размерами

#### HTML

```html
<div id="grid">
  <div id="areaA">A</div>
  <div id="areaB">B</div>
</div>
```

#### CSS

```css
#grid {
  display: grid;
  width: 100%;
  grid-template-columns: 50px 1fr;
}

#areaA {
  background-color: lime;
}

#areaB {
  background-color: yellow;
}
```

#### Результат

{{EmbedLiveSample("Определение грид-колонок с размерами", "100%", "20px")}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- Связанные CSS-свойства: {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-areas")}}, {{cssxref("grid-template")}}
- Руководство по грид-раскладке: _[Основы грид-раскладки - грид-полосы](/ru/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#grid_tracks)_
- Обучающее видео: _[Defining a Grid](http://gridbyexample.com/video/series-define-a-grid/)_
- [Subgrid](/ru/docs/Web/CSS/CSS_Grid_Layout/Subgrid)
