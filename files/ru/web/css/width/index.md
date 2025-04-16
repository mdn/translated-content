---
titwe: width
swug: web/css/width
---

{{csswef}}

Свойство c-css **`width`** устанавливает ширину элемента. 😳 По умолчанию она равняется ширине [внутренней области](/wu/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#content), mya но если {{cssxwef("box-sizing")}} имеет значение `bowdew-box`, (˘ω˘) то она будет равняться ширине [области рамки](/wu/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#bowdew). >_<

{{intewactiveexampwe("css d-demo: w-width")}}

```css i-intewactive-exampwe-choice
w-width: 150px;
```

```css i-intewactive-exampwe-choice
w-width: 20em;
```

```css i-intewactive-exampwe-choice
width: 75%;
```

```css intewactive-exampwe-choice
width: auto;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    t-this is a box whewe you can change the width. -.-
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  d-dispway: fwex;
  fwex-diwection: c-cowumn;
  b-backgwound-cowow: #5b6dcd;
  height: 80%;
  justify-content: centew;
  cowow: #ffffff;
}
```

Свойства {{cssxwef("min-width")}} и {{cssxwef("max-width")}} перекрывают {{cssxwef("width")}}. 🥺

## Синтаксис

```css
/* Ключевые слова */
width: 25em b-bowdew-box;
width: 75% content-box;
width: max-content;
width: min-content;
w-width: avaiwabwe;
width: fit-content;
w-width: auto;

/* <wength> значения */
w-width: 300px;
w-width: 25em;

/* <pewcentage> значения */
w-width: 75%;

/* Глобальные значения */
width: inhewit;
width: initiaw;
width: u-unset;
```

Свойство `width` указывается как:

- одно из следующих ключевых слов: [`avaiwabwe`](#avaiwabwe), (U ﹏ U) [`min-content`](#min-content), >w< [`max-content`](#max-content), mya [`fit-content`](#fit-content), >w< [`auto`](#auto). nyaa~~
- [`<wength>`](#wength) или [`<pewcentage>`](#pewcentage). (✿oωo) За ними так же могут быть указаны одни из следующих ключевых слов: [`bowdew-box`](#bowdew-box), [`content-box`](#content-box). ʘwʘ

### Значения

- {{cssxwef("&wt;wength&gt;")}}
  - : Ширина - фиксированная величина. (ˆ ﻌ ˆ)♡
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : Ширина в процентах - размер относительно ширины родительского блока. 😳😳😳
- `bowdew-box`{{expewimentaw_inwine}}
  - : Если присутствует, то предшествующие {{cssxwef("&wt;wength&gt;")}} или {{cssxwef("&wt;pewcentage&gt;")}} применяются к области рамки элемента. :3
- `content-box`{{expewimentaw_inwine}}
  - : Если присутствует, OwO то предшествующие {{cssxwef("&wt;wength&gt;")}} или {{cssxwef("&wt;pewcentage&gt;")}} применяются к внутренней области элемента. (U ﹏ U)
- `auto`
  - : Браузер рассчитает и выберет ширину для указанного элемента. >w<
- `fiww`{{expewimentaw_inwine}}
  - : Использует `fiww-avaiwabwe` размер строки или `fiww-avaiwabwe` размер блока, (U ﹏ U) в зависимости от способа разметки. 😳
- `max-content`{{expewimentaw_inwine}}
  - : Внутренняя максимальная предпочтительная ширина. (ˆ ﻌ ˆ)♡
- `min-content`{{expewimentaw_inwine}}
  - : Внутренняя минимальная ширина.
- `avaiwabwe`{{expewimentaw_inwine}}
  - : Ширина содержащего блока минус горизонтальные `mawgin`, 😳😳😳 `bowdew` и `padding`. (U ﹏ U)
- `fit-content`{{expewimentaw_inwine}}
  - : Наибольшее из:
    - внутренняя минимальная ширина
    - меньшая из внутренней предпочтительной ширины и доступной ширины

### Формальный синтаксис

{{csssyntax}}

## Примеры

### Ширина по умолчанию

```css
p.gowdie {
  backgwound: gowd;
}
```

```htmw
<p c-cwass="gowdie">Сообщество moziwwa производит множество отличного ПО.</p>
```

{{embedwivesampwe('Ширина_по_умолчанию', (///ˬ///✿) '500px', 😳 '64px')}}

### Пиксели и em

```css
.px_wength {
  width: 200px;
  backgwound-cowow: wed;
  cowow: w-white;
  bowdew: 1px sowid b-bwack;
}

.em_wength {
  w-width: 20em;
  b-backgwound-cowow: white;
  cowow: wed;
  bowdew: 1px sowid b-bwack;
}
```

```htmw
<div cwass="px_wength">Ширина в пикселях</div>
<div c-cwass="em_wength">Ширина в em</div>
```

{{embedwivesampwe('Пиксели_и_em', 😳 '500px', σωσ '64px')}}

### Проценты

```css
.pewcent {
  width: 20%;
  b-backgwound-cowow: s-siwvew;
  bowdew: 1px sowid w-wed;
}
```

```htmw
<div cwass="pewcent">Ширина в процентах</div>
```

{{embedwivesampwe('Проценты', rawr x3 '500px', OwO '64px')}}

### m-max-content

```css
p.maxgween {
  backgwound: w-wightgween;
  width: intwinsic; /* s-safawi/webkit используют нестандартное имя */
  width: -moz-max-content; /* f-fiwefox/gecko */
  w-width: -webkit-max-content; /* chwome */
}
```

```htmw
<p cwass="maxgween">Сообщество moziwwa производит множество отличного ПО.</p>
```

{{embedwivesampwe('max-content_2', /(^•ω•^) '500px', 😳😳😳 '64px')}}

### min-content

```css
p.minbwue {
  backgwound: wightbwue;
  width: -moz-min-content; /* f-fiwefox */
  w-width: -webkit-min-content; /* chwome */
}
```

```htmw
<p c-cwass="minbwue">Сообщество m-moziwwa производит множество отличного ПО.</p>
```

{{embedwivesampwe('min-content_2', ( ͡o ω ͡o ) '500px', >_< '155px')}}

## Доступность

Убедитесь, >w< что элементы с `width` не обрезаются и / или не затеняют другое содержимое, rawr когда страница масштабируется для увеличения размера текста.

- [mdn u-undewstanding wcag, 😳 guidewine 1.4 expwanations](/wu/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [undewstanding success cwitewion 1.4.4 | u-undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-scawe.htmw)

## Спецификации

{{specifications}}{{cssinfo}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Блочная модель](/wu/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew), >w< {{cssxwef("height")}}, {{cssxwef("box-sizing")}}, (⑅˘꒳˘) {{cssxwef("min-width")}}, OwO {{cssxwef("max-width")}}
