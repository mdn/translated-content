---
title: grid-template-rows
slug: Web/CSS/grid-template-rows
---

{{CSSRef}}

CSS-свойство **`grid-template-rows`** определяет имена линий и размеры полос {{glossary("grid rows", "грид-рядов")}}.

{{EmbedInteractiveExample("pages/css/grid-template-rows.html")}}

## Синтаксис

```css
/* Ключевое слово в качестве значения */
grid-template-rows: none;

/* Значения <track-list> */
grid-template-rows: 100px 1fr;
grid-template-rows: [linename] 100px;
grid-template-rows: [linename1] 100px [linename2 linename3];
grid-template-rows: minmax(100px, 1fr);
grid-template-rows: fit-content(40%);
grid-template-rows: repeat(3, 200px);
grid-template-rows: subgrid;
grid-template-rows: masonry;

/* Значения <auto-track-list> */
grid-template-rows: 200px repeat(auto-fill, 100px) 300px;
grid-template-rows:
  minmax(100px, max-content)
  repeat(auto-fill, 200px) 20%;
grid-template-rows:
  [linename1] 100px [linename2]
  repeat(auto-fit, [linename3 linename4] 300px)
  100px;
grid-template-rows:
  [linename1 linename2] 100px
  repeat(auto-fit, [linename1] 300px) [linename3];

/* Глобальные значения */
grid-template-rows: inherit;
grid-template-rows: initial;
grid-template-rows: revert;
grid-template-rows: unset;
```

Это свойство может быть задано следующими способами:

- Либо ключевым словом `none`;
- Либо значением `<track-list>`;
- Либо значением `<auto-track-list>`.

### Значения

- `none`
  - : Ключевое слово, означающее отсутствие явного грида. Это значит, что все ряды будут генерироваться автоматически (неявно), а их размер определяться свойством {{cssxref("grid-auto-rows")}}.
- `[linename]`
  - : [Идентификатор (`<custom-ident>`)](/ru/docs/Web/CSS/custom-ident) задаёт имя линии. Идентификатор может быть любой допустимой строкой, кроме зарезервированных слов `span` и `auto`. У линий может быть несколько имён, указанных через пробел внутри квадратных скобок, например `[line-name-a line-name-b]`.
- {{cssxref("&lt;length&gt;")}}
  - : Положительное значение типа length.
- {{cssxref("&lt;percentage&gt;")}}
  - : Положительное значение с {{cssxref("percentage", "&lt;процентом&gt;")}} относительно размера блока грид-контейнера. Если размер грид-контейнера зависит от размера его полос, то процент должен рассматриваться как `auto`.
    Собственные размеры полосы могут быть изменены для соответствия размеру грид-контейнера, поэтому окончательный размер полосы может быть увеличен на минимальную величину для соблюдения процентного соотношения.
- {{cssxref("&lt;flex_value&gt;","&lt;flex&gt;")}}
  - : Положительная величина с единицей измерения `fr`, определяющая коэффициент размера полосы. Каждая полоса, для которой размер указан в `<flex>`, занимает долю из свободного пространства пропорционально заданному коэффициенту. При использовании в `minmax()` подразумевается автоматический минимум (т.е. `minmax(auto, <flex>)`).
- {{cssxref("max-content")}}
  - : Ключевое слово, представляющее наибольший максимальный размер содержимого грид-элементов в грид-полосе.
- {{cssxref("min-content")}}
  - : Ключевое слово, представляющее наибольший минимальный размер содержимого грид-элементов в грид-полосе.
- {{cssxref("minmax()", "minmax(min, max)")}}
  - : Установка значения через функцию, определяющую диапазон размеров, больше или равный _min_, и меньше или равный _max_. Если _max_ меньше _min_, то _max_ игнорируется и используется _min_. В качестве _max_ можно определить значение в единицах измерения типа `<flex>`, тогда устанавливается коэффициент размера полосы.
- `auto`

  - : Для каждого из рядов автоматически вычисляется размер на основе содержимого. Самый большой размер ряда соответствует {{cssxref("max-content")}}.

    В качестве минимального значения берётся самый наименьший из размеров в элементах полосы (из свойства {{cssxref("min-width")}}/{{cssxref("min-height")}} элементов). Чаще всего (но не всегда) это будет размер, соответствующий {{cssxref("min-content")}}.

    При использовании `auto` в {{cssxref("minmax()", "minmax()")}}, диапазон минимальных и максимальных значений вычисляется по описанному выше принципу. В большинстве случаев это то же самое, что написать `minmax(min-content,max-content)`.

    > **Примечание:** размеры полос, заданных `auto` (и только `auto`) могут быть увеличены свойствами {{cssxref("align-content")}} и {{cssxref("justify-content")}}. Поэтому по умолчанию полоса с размером `auto` будет занимать всё оставшееся пространство в грид-контейнере.

- {{cssxref("fit-content()", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}
  - : Представляет формулу `min(max-content, max(auto, argument))`, которая рассчитывается так же, как и `auto` (т.е. `minmax(auto, max-content)`), за исключением того, что размер полосы ограничивается _argument_, если он больше минимального значения, вычисленного `auto`.
- {{cssxref("repeat()", "repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ] , &lt;track-list&gt; )")}}
  - : Позволяет в краткой форме создать список рядов с определённым количеством и размером.
- [`masonry`](/ru/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout){{Experimental_Inline}}
  - : Значение masonry указывает на то, что эта ось должна быть проложена в соответствии с алгоритмом masonry.
- [`subgrid`](/ru/docs/Web/CSS/CSS_Grid_Layout/Subgrid)
  - : Значение `subgrid` указывает на то, что грид примет составную часть родительского грида по данной оси. Поскольку размеры рядов/колонок не указываются явно, они берутся из определения родительского грида.

> **Предупреждение:** Значение `masonry` появилось в спецификации Grid третьего уровня и на данный момент реализовано в качестве эксперимента и доступно по флагу в Firefox.
>
> Значение `subgrid` определено в спецификации Grid второго уровня и на данный момент реализовано только в Firefox с версии 71.

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### Определение размеров рядов грида

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
  height: 100px;
  grid-template-rows: 30px 1fr;
}

#areaA {
  background-color: lime;
}

#areaB {
  background-color: yellow;
}
```

#### Результат

{{EmbedLiveSample("Определение размеров рядов грида", "40px", "100px")}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- Связанные CSS-свойства: {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-areas")}}, {{cssxref("grid-template")}}
- Руководство по грид-раскладке: _[Основы грид-раскладки - грид-полосы](/ru/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#grid_tracks)_
- Обучающее видео: _[Defining a Grid](http://gridbyexample.com/video/series-define-a-grid/)_
- [Сабгрид](/ru/docs/Web/CSS/CSS_Grid_Layout/Subgrid)
