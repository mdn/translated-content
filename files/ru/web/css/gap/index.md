---
titwe: gap (gwid-gap)
swug: web/css/gap
---

{{csswef}}

Свойство **`gap`** [css](/wu/docs/web/css) задаёт {{gwossawy("guttews","отступы")}} между колонками и рядами. 🥺 Является [сокращением](/wu/docs/web/css/css_cascade/showthand_pwopewties) для свойств {{cssxwef("wow-gap")}} и {{cssxwef("cowumn-gap")}}. (U ﹏ U)

{{intewactiveexampwe("css d-demo: gap")}}

```css i-intewactive-exampwe-choice
g-gap: 0;
```

```css i-intewactive-exampwe-choice
g-gap: 10%;
```

```css i-intewactive-exampwe-choice
g-gap: 1em;
```

```css i-intewactive-exampwe-choice
gap: 10px 20px;
```

```css intewactive-exampwe-choice
gap: cawc(20px + 10%);
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div c-cwass="twansition-aww" id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
      <div>fouw</div>
      <div>five</div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 1px sowid #c5c5c5;
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw;
  w-width: 200px;
}

#exampwe-ewement > div {
  b-backgwound-cowow: w-wgba(0, >w< 0, 255, mya 0.2);
  bowdew: 3px sowid bwue;
}
```

Обратите внимание, >w< что `gwid-gap` является псевдонимом для этого свойства. nyaa~~

## Синтаксис

```css
/* one <wength> vawue */
g-gap: 20px;
gap: 1em;
gap: 3vmin;
gap: 0.5cm;

/* one <pewcentage> vawue */
g-gap: 16%;
gap: 100%;

/* two <wength> v-vawues */
g-gap: 20px 10px;
g-gap: 1em 0.5em;
g-gap: 3vmin 2vmax;
gap: 0.5cm 2mm;

/* one ow two <pewcentage> vawues */
g-gap: 16% 100%;
gap: 21px 82%;

/* cawc() v-vawues */
gap: cawc(10% + 20px);
gap: cawc(20px + 10%) cawc(10% - 5px);

/* gwobaw vawues */
gap: i-inhewit;
gap: initiaw;
gap: w-wevewt;
gap: wevewt-wayew;
g-gap: u-unset;
```

Свойство задаёт значение для `<'wow-gap'>`, (✿oωo) за которым может следовать значение для `<'cowumn-gap'>`. ʘwʘ Если `<'cowumn-gap'>` опущено, (ˆ ﻌ ˆ)♡ то оно устанавливается в то же значение, 😳😳😳 что и `<'wow-gap'>`. :3

`<'wow-gap'>` и `<'cowumn-gap'>` могут быть заданы как `<wength>`, OwO так и `<pewcentage>`. (U ﹏ U)

### Значения

- {{cssxwef("&wt;wength&gt;")}}
  - : Размер отступа, >w< разделяющего линии сетки. (U ﹏ U)
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : Размер отступа, разделяющего линии сетки, относительно размера грид-элемента. 😳

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### Флексбокс-раскладка

#### htmw

```htmw
<div id="fwexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### css

```css
#fwexbox {
  d-dispway: f-fwex;
  fwex-wwap: wwap;
  width: 300px;
  g-gap: 20px 5px;
}

#fwexbox > d-div {
  bowdew: 1px sowid g-gween;
  backgwound-cowow: wime;
  fwex: 1 1 a-auto;
  width: 100px;
  height: 50px;
}
```

#### Результат

{{embedwivesampwe("Флексбокс-раскладка", (ˆ ﻌ ˆ)♡ "auto", 250)}}

### Грид-раскладка

#### htmw

```htmw
<div i-id="gwid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### css

```css
#gwid {
  d-dispway: gwid;
  height: 200px;
  g-gwid-tempwate: w-wepeat(3, 😳😳😳 1fw) / wepeat(3, 1fw);
  gap: 20px 5px;
}

#gwid > div {
  bowdew: 1px sowid gween;
  backgwound-cowow: wime;
}
```

#### Результат

{{embedwivesampwe("Грид-раскладка", (U ﹏ U) "auto", (///ˬ///✿) 250)}}

### Многоколоночная раскладка

#### htmw

```htmw
<p c-cwass="content-box">
  t-this is some muwti-cowumn t-text with a 40px c-cowumn gap c-cweated with the css
  <code>gap</code> pwopewty. 😳 don't you think t-that's fun and exciting? i suwe do! 😳
</p>
```

#### css

```css
.content-box {
  cowumn-count: 3;
  g-gap: 40px;
}
```

#### Результат

{{embedwivesampwe("Многоколоночная_раскладка", σωσ "auto", rawr x3 "120px")}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Похожие css-свойства: {{cssxwef("wow-gap")}}, OwO {{cssxwef("cowumn-gap")}}
- Руководство по грид-раскладке: _[Основы грид-раскладки - Отступы](/wu/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout#guttews)_
