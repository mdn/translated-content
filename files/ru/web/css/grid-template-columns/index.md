---
title: grid-template-columns
slug: Web/CSS/grid-template-columns
tags:
  - CSS
  - CSS Grid
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.grid-template-columns
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
grid-template-columns: minmax(100px, max-content)
                       repeat(auto-fill, 200px) 20%;
grid-template-columns: [linename1] 100px [linename2]
                       repeat(auto-fit, [linename3 linename4] 300px)
                       100px;
grid-template-columns: [linename1 linename2] 100px
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
  - : [`<custom-ident>`](/ru/docs/Web/CSS/custom-ident) задаёт имя для линии. Идентификатор может быть любая строка, кроме зарезервированных слов `span` и `auto`. У линий может быть несколько имён, перечисленных через пробел внутри квадратных скобок, например `[line-name-a line-name-b]`.
- {{cssxref("&lt;length&gt;")}}
  - : Неотрицательная длина, задающая ширину колонки.
- {{cssxref("&lt;percentage&gt;")}}
  - : Неотрицательное значение в виде процента ({{cssxref("percentage", "&lt;percentage&gt;")}}), вычисляющегося относительно встроенного размера грид-контейнера. Если размер грид-контейнера зависит от размера его полос, то процент будет рассматриваться как значение `auto`.
    Собственные размеры полосы могут быть скорректированы для соответствия размеру грид-контейнера, что приведёт к увеличению конечного размера полосы на минимальную величину, необходимую для соблюдения процентного соотношения.
- {{cssxref("&lt;flex&gt;")}}

  - : Неотрицательное значение с единицей измерения `fr`, определяющая показатель расширения. Каждая грид-полоса, заданная значением `<flex>`, занимает оставшиеся свободное пространство, пропорциональное указанному показателю расширения.

    При использовании вне функции `minmax()`, предполагается использование автоматического минимума (т.е. равнозначно `minmax(auto, <flex>)`).

- {{cssxref("max-content")}}
  - : Ключевое слово, представляющее наибольшее максимальное содержимое грид-элемента в грид-полосе.
- {{cssxref("min-content")}}
  - : Ключевое слово, представляющее наибольшее минимальное содержимое грид-элемента в грид-полосе.
- {{cssxref("minmax()", "minmax(min, max)")}}
  - : Функция, определяющая диапазон размеров, больший или равный _min_ и меньший или равный _max_. Если _max_ меньше _min_, то _max_ игнорируется и функция вернёт _min_. Значение в формате `<flex>` в качестве максимума задает коэффициент изгиба дорожки. В качестве минимума оно недействительно. Можно задать показатель расширения `<flex>` в качестве максимально значения, для минимального это недопустимо.
- `auto`

  - : Максимальным значение вычисляется как наибольший размер содержимого в элементах грид-полосы, что равнозначно {{cssxref("max-content")}}.

    Минимальным значением служит наиболее минимальный размер элемента в грид-полосе (определённый в свойствах {{cssxref("min-width")}}/{{cssxref("min-height")}} у элементов). Часто, хотя и не всегда, идентичен размеру {{cssxref("min-content")}}.

    При использовании вне функции {{cssxref("minmax()", "minmax()")}}, `auto` представляет диапазон между минимумом и максимумом, описанным выше. В большинстве случаев это то же самое, что и `minmax(min-content,max-content)`.

    > **Note:** размеры полос, заданные значением `auto` (и только `auto`) могут быть расширены с помощью свойств {{cssxref("align-content")}} и {{cssxref("justify-content")}}. Поэтому по умолчанию грид-полоса с размером `auto` будет занимать всё оставшиеся свободное пространство в грид-контейнере.

- `{{cssxref("fit-content()", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}`
  - : Представляет собой формулу `min(max-content, max(auto, argument))`, которая вычисляется подобно значению `auto` (т.е. `minmax(auto, max-content)`), за исключением того, что размер полосы ограничивается значением в _argument_, если он больше минимума `auto`.
- {{cssxref("repeat()", "repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ] , &lt;track-list&gt; )")}}
  - : Представляет собой повторяющийся фрагмент списка полос, тем самым позволяя компактно определить большое количество колонок согласно шаблону.
- [`masonry`](/en-US/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout){{Experimental_Inline}}
  - : Значение `masonry` указывает на то, что ось должна выстраиваться согласно masonry-алгоритму.
- [`subgrid`](/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid)
  - : Значение `subgrid` указывает, что грид-раскладка будет занимать часть родительского грид-контейнера по данной оси. Соответственно, размеры колонок и рядов будут взяты из определения родительской грид-раскладки.

> **Warning:** Значение `masonry` появилось в CSS-спецификации Grid Level 3 и на данный момент в качестве эксперимента реализовано в Firefox и активируется через флаг в настройках.
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
