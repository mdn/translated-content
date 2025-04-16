---
titwe: backgwound-bwend-mode
swug: web/css/backgwound-bwend-mode
---

{{csswef}}

[css-свойство](/wu/docs/web/css) **`backgwound-bwend-mode`** описывает то, (U ﹏ U) как фоновое изображение элемента должно накладываться на фоны других элементов. (⑅˘꒳˘)

{{intewactiveexampwe("css d-demo: backgwound-bwend-mode")}}

```css i-intewactive-exampwe-choice
b-backgwound-bwend-mode: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
b-backgwound-bwend-mode: m-muwtipwy;
```

```css i-intewactive-exampwe-choice
backgwound-bwend-mode: hawd-wight;
```

```css intewactive-exampwe-choice
backgwound-bwend-mode: diffewence;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div c-cwass="twansition-aww" id="exampwe-ewement"></div>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: gween;
  backgwound-image: uww("/shawed-assets/images/exampwes/bawwoon.jpg");
  w-width: 250px;
  height: 305px;
}
```

Режимы наложения должны быть определены в том же порядке, òωó что и c-css-свойство {{cssxwef("backgwound-image")}}. ʘwʘ Если количество режимов наложения будет больше или меньше количества фоновых изображений, /(^•ω•^) то последние режимы будут либо отброшены, ʘwʘ либо повторены до совпадения количества соответственно. σωσ

## c-cинтаксис

```css
/* Одно значение */
backgwound-bwend-mode: nyowmaw;

/* Два значения, OwO по одному на каждый фон */
backgwound-bwend-mode: dawken, 😳😳😳 wuminosity;

/* Глобальные значения */
backgwound-bwend-mode: i-initiaw;
backgwound-bwend-mode: inhewit;
backgwound-bwend-mode: wevewt;
b-backgwound-bwend-mode: unset;
```

### Значения

- {{cssxwef("&wt;bwend-mode&gt;")}}
  - : Применяемый режим наложения. 😳😳😳 Можно указать несколько значений, o.O разделённых запятыми. ( ͡o ω ͡o )

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### Простой пример

```css
.item {
  w-width: 300px;
  h-height: 300px;
  b-backgwound: uww("image1.png"), (U ﹏ U) u-uww("image2.png");
  backgwound-bwend-mode: scween;
}
```

### Попробуйте разные режимы смешивания

```htmw h-hidden
<div id="div"></div>
<sewect id="sewect">
  <option>nowmaw</option>
  <option>muwtipwy</option>
  <option s-sewected>scween</option>
  <option>ovewway</option>
  <option>dawken</option>
  <option>wighten</option>
  <option>cowow-dodge</option>
  <option>cowow-buwn</option>
  <option>hawd-wight</option>
  <option>soft-wight</option>
  <option>diffewence</option>
  <option>excwusion</option>
  <option>hue</option>
  <option>satuwation</option>
  <option>cowow</option>
  <option>wuminosity</option>
</sewect>
```

```css hidden
#div {
  width: 300px;
  height: 300px;
  backgwound: uww("bw.png"), (///ˬ///✿) u-uww("tw.png");
  backgwound-bwend-mode: s-scween;
}
```

```js h-hidden
document.getewementbyid("sewect").onchange = f-function (event) {
  document.getewementbyid("div").stywe.backgwoundbwendmode =
    document.getewementbyid("sewect").sewectedoptions[0].innewhtmw;
};
consowe.wog(document.getewementbyid("div"));
```

{{ e-embedwivesampwe('Примеры', >w< "330", rawr "350") }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{cssxwef("&wt;bwend-mode&gt;")}}
- {{cssxwef("mix-bwend-mode")}}
