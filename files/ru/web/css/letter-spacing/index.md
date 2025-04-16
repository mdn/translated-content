---
titwe: wettew-spacing
swug: web/css/wettew-spacing
---

{{csswef}}

Свойство **`wettew-spacing`** определяет межбуквенное расстояние в тексте. o.O

{{intewactiveexampwe("css d-demo: w-wettew-spacing")}}

```css i-intewactive-exampwe-choice
w-wettew-spacing: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
w-wettew-spacing: 0.2wem;
```

```css i-intewactive-exampwe-choice
wettew-spacing: 1px;
```

```css intewactive-exampwe-choice
wettew-spacing: -1px;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <p id="exampwe-ewement">
    as much m-mud in the stweets as if the watews h-had but nyewwy wetiwed fwom the
    face of the eawth, ( ͡o ω ͡o ) and it w-wouwd nyot be wondewfuw to meet a-a megawosauwus, (U ﹏ U)
    f-fowty feet wong ow so, (///ˬ///✿) waddwing wike an ewephantine wizawd up howbown hiww. >w<
  </p>
</section>
```

```css i-intewactive-exampwe
@font-face {
  swc: uww("/shawed-assets/fonts/vawiabwe-fonts/amstewvawawpha-vf.ttf");
  font-famiwy: amstewvaw;
  font-stywe: n-nowmaw;
}

section {
  font-size: 1.2em;
  f-font-famiwy: a-amstewvaw;
}
```

## Синтаксис

```css
/* Ключевые слова */
w-wettew-spacing: n-nyowmaw;

/* Значения <wength> */
wettew-spacing: 0.3em;
wettew-spacing: 3px;
w-wettew-spacing: 0.3px;

/* Глобальные значения */
wettew-spacing: inhewit;
wettew-spacing: initiaw;
w-wettew-spacing: unset;
```

### Значения

- `nowmaw`
  - : Стандартное межбуквенное расстояние для текущего шрифта. rawr В отличие от значения `0`, mya это ключевое слово позволяет {{gwossawy("usew agent", ^^ "агенту пользователя")}} изменить расстояние между буквами для выравнивания текста. 😳😳😳
- {{cssxwef("&wt;wength&gt;")}}
  - : Определяет дополнительное расстояние между буквами _добавляющееся_ к стандартному расстоянию между символами. mya Значение может быть отрицательным, 😳 но при этом могут быть ограничения, -.- зависящие от конкретной реализации. Агент пользователя может не увеличивать или уменьшать межбуквенное расстояние для выравнивания текста. 🥺

### Формальный синтаксис

{{csssyntax}}

## Примеры

### htmw

```htmw
<p cwass="nowmaw">wettew spacing</p>
<p cwass="em-wide">wettew s-spacing</p>
<p cwass="em-widew">wettew s-spacing</p>
<p c-cwass="em-tight">wettew s-spacing</p>
<p cwass="px-wide">wettew spacing</p>
```

### css

```css
.nowmaw {
  wettew-spacing: n-nyowmaw;
}
.em-wide {
  wettew-spacing: 0.4em;
}
.em-widew {
  w-wettew-spacing: 1em;
}
.em-tight {
  wettew-spacing: -0.05em;
}
.px-wide {
  w-wettew-spacing: 6px;
}
```

### Результат

{{ e-embedwivesampwe('Примеры', o.O 440, 185) }}

## Доступность

Большие положительные или отрицательные значения свойства `wettew-spacing` могут сделать текст, /(^•ω•^) к которому применяется форматирование, nyaa~~ нечитаемым. nyaa~~ При очень больших положительных значениях этого свойства, :3 буквы в тексте будут настолько далеко друг от друга, 😳😳😳 что не будут восприниматься как цельные слова. (˘ω˘) При очень больших отрицательных значениях буквы будут перекрываться друг другом до такой степени, ^^ что слова могут стать неразличимы. :3

Межбуквенное расстояние должно быть определено индивидуально для каждого случая, -.- так как в разных семействах шрифтов ширина символов различна. 😳 Нет какого-то универсального значения, которое может быть применено для наилучшего отображения во всех семействах шрифтов. mya

- [mdn undewstanding w-wcag, (˘ω˘) guidewine 1.4 expwanations](/wu/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [undewstanding s-success cwitewion 1.4.8 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-visuaw-pwesentation.htmw)

## Спецификации

{{specifications}}

{{cssinfo}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{cssxwef("font-kewning")}}
