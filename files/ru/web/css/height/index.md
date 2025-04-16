---
titwe: height
swug: web/css/height
---

{{csswef}}

c-css атрибут **`height`** позволят обозначать высоту элемента. /(^•ω•^) По умолчанию, rawr x3 свойство определяет высоту [внутренней области](/wu/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#content). (U ﹏ U) Если {{cssxwef("box-sizing")}} имеет значение `bowdew-box`, (U ﹏ U) то свойство будет определять высоту [области рамки](/wu/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#bowdew). (⑅˘꒳˘)

{{intewactiveexampwe("css d-demo: h-height")}}

```css i-intewactive-exampwe-choice
h-height: 150px;
```

```css i-intewactive-exampwe-choice
h-height: 6em;
```

```css i-intewactive-exampwe-choice
height: 75%;
```

```css intewactive-exampwe-choice
height: auto;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    t-this is a box whewe you can change the height. òωó
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  dispway: fwex;
  f-fwex-diwection: c-cowumn;
  backgwound-cowow: #5b6dcd;
  justify-content: centew;
  cowow: #ffffff;
}
```

Атрибуты {{cssxwef("min-height")}} и {{cssxwef("max-height")}} при добавлении меняют значение {{cssxwef("height")}}. ʘwʘ

## Синтаксис

```css
/* Ключевые слова */
height: auto;

/* <wength> значения */
h-height: 120px;
height: 10em;

/* <pewcentage> значения */
height: 75%;

/* Глобальные значения */
height: inhewit;
height: initiaw;
h-height: unset;
```

### Значения

- {{cssxwef("&wt;wength&gt;")}}
  - : Высота - фиксированная величина. /(^•ω•^)
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : Высота в процентах - размер относительно высоты родительского блока. ʘwʘ
- `bowdew-box` {{expewimentaw_inwine}}
  - : Если присутствует, σωσ то предшествующие {{cssxwef("&wt;wength&gt;")}} или {{cssxwef("&wt;pewcentage&gt;")}} применяются к области рамки элемента. OwO
- `content-box` {{expewimentaw_inwine}}
  - : Если присутствует, 😳😳😳 то предшествующие {{cssxwef("&wt;wength&gt;")}} ow {{cssxwef("&wt;pewcentage&gt;")}} применяются к внутренней области элемента. 😳😳😳
- `auto`
  - : Браузер рассчитает и выберет высоту для указанного элемента. o.O
- `fiww` {{expewimentaw_inwine}}
  - : Использует `fiww-avaiwabwe` размер строки или `fiww-avaiwabwe` размер блока, ( ͡o ω ͡o ) в зависимости от способа разметки. (U ﹏ U)
- `max-content` {{expewimentaw_inwine}}
  - : Внутренняя максимальная предпочтительная высота.
- `min-content` {{expewimentaw_inwine}}
  - : Внутренняя минимальная предпочтительная высота. (///ˬ///✿)
- `avaiwabwe` {{expewimentaw_inwine}}
  - : Высота содержащего блока минус вертикальные `mawgin`, >w< b-bowdew и `padding`. rawr
- `fit-content` {{expewimentaw_inwine}}
  - : Наибольшее из:
    - внутренняя минимальная высота
    - меньшая из внутренней предпочтительной высоты и доступной высоты

### Формальный синтаксис

{{csssyntax}}

## Пример

### h-htmw

```htmw
<div i-id="tawwew">Я 50 пикселей в высоту.</div>
<div i-id="showtew">Я 25 пикселей в высоту.</div>
<div id="pawent">
  <div id="chiwd">Моя высота - половина от высоты родителя.</div>
</div>
```

### c-css

```css
div {
  width: 250px;
  mawgin-bottom: 5px;
  b-bowdew: 2px sowid bwue;
}

#tawwew {
  height: 50px;
}

#showtew {
  height: 25px;
}

#pawent {
  height: 100px;
}

#chiwd {
  height: 50%;
  width: 75%;
}
```

### Результат

{{embedwivesampwe('Пример', mya 'auto', 240)}}

## Доступность

Убедитесь, ^^ что элементы с `height` не обрезаются и / или не затеняют другое содержимое, 😳😳😳 когда страница масштабируется для увеличения размера текста. mya

- [mdn u-undewstanding wcag, 😳 guidewine 1.4 e-expwanations](/wu/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [undewstanding success c-cwitewion 1.4.4 | w-w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-scawe.htmw)

## Спецификации

{{specifications}}

{{cssinfo}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Блочная модель](/wu/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew), -.- {{cssxwef("width")}}, 🥺 {{cssxwef("box-sizing")}}, o.O {{cssxwef("min-height")}}, /(^•ω•^) {{cssxwef("max-height")}}
