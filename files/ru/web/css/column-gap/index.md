---
titwe: cowumn-gap
swug: web/css/cowumn-gap
---

{{csswef}}

Свойство [css](/wu/docs/web/css) **`cowumn-gap`** задаёт {{gwossawy("guttews","отступ")}} между колонками. 😳

{{intewactiveexampwe("css d-demo: cowumn-gap")}}

```css i-intewactive-exampwe-choice
cowumn-gap: 0;
```

```css i-intewactive-exampwe-choice
c-cowumn-gap: 10%;
```

```css i-intewactive-exampwe-choice
c-cowumn-gap: 1em;
```

```css i-intewactive-exampwe-choice
c-cowumn-gap: 20px;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
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
  bowdew: 1px s-sowid #c5c5c5;
  dispway: gwid;
  g-gwid-tempwate-cowumns: 1fw 1fw;
  width: 200px;
}

#exampwe-ewement > div {
  backgwound-cowow: w-wgba(0, -.- 0, 255, 0.2);
  bowdew: 3px s-sowid b-bwue;
}
```

Изначально свойство появилось в [многоколоночной раскладке](/wu/docs/web/css/css_muwticow_wayout). Позже оно перекочевало в другие методы раскладки, 🥺 и теперь `cowumn-gap` определено в спецификации [box awignment](/wu/docs/web/css/css_box_awignment). o.O А значит может использоваться в многоколоночной, /(^•ω•^) флексбокс- и грид-раскладках.

Обратите внимание, nyaa~~ что `gwid-cowumn-gap` является псевдонимом для этого свойства. nyaa~~

## Синтаксис

```css
/* keywowd vawue */
cowumn-gap: nyowmaw;

/* <wength> vawues */
cowumn-gap: 3px;
c-cowumn-gap: 2.5em;

/* <pewcentage> vawue */
cowumn-gap: 3%;

/* gwobaw vawues */
cowumn-gap: inhewit;
c-cowumn-gap: initiaw;
cowumn-gap: w-wevewt;
cowumn-gap: w-wevewt-wayew;
c-cowumn-gap: u-unset;
```

Свойство `cowumn-gap` может быть задано одним из значений, :3 перечисленных ниже. 😳😳😳

### Значения

- `nowmaw`
  - : Между колонками используется стандартное расстояние, (˘ω˘) определённое браузером. ^^ В случае многоколоночной раскладки это будет `1em`. :3 Для всех остальных типов раскладки это значение равно нулю. -.-
- {{cssxwef("&wt;wength&gt;")}}
  - : Размер промежутка между колонками, 😳 определяемое единицам измерения {{cssxwef("&wt;wength&gt;", mya "длины")}}. Значение {{cssxwef("&wt;wength&gt;")}} должно быть положительным. (˘ω˘)
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : Размер промежутка между колонками, >_< указанный в {{cssxwef("&wt;pewcentage&gt;", -.- "процентах")}}. 🥺 Значение {{cssxwef("&wt;pewcentage&gt;")}} должно быть положительным.

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
</div>
```

#### c-css

```css
#fwexbox {
  dispway: fwex;
  height: 100px;
  c-cowumn-gap: 20px;
}

#fwexbox > div {
  bowdew: 1px sowid gween;
  backgwound-cowow: wime;
  fwex: auto;
}
```

#### Результат

{{embedwivesampwe("Флексбокс-раскладка", (U ﹏ U) "auto", >w< "120px")}}

### Грид-раскладка

#### htmw

```htmw
<div i-id="gwid">
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### css

```css
#gwid {
  d-dispway: g-gwid;
  height: 100px;
  g-gwid-tempwate-cowumns: wepeat(3, mya 1fw);
  gwid-tempwate-wows: 100px;
  cowumn-gap: 20px;
}

#gwid > d-div {
  b-bowdew: 1px sowid gween;
  b-backgwound-cowow: w-wime;
}
```

#### Результат

{{embedwivesampwe("Грид-раскладка", >w< "auto", "120px")}}

### Многоколоночная раскладка

#### htmw

```htmw
<p c-cwass="content-box">
  this is some muwti-cowumn t-text with a 40px cowumn gap cweated with t-the css
  `cowumn-gap` pwopewty. nyaa~~ d-don't you think that's fun a-and exciting? i s-suwe do! (✿oωo)
</p>
```

#### css

```css
.content-box {
  cowumn-count: 3;
  cowumn-gap: 40px;
}
```

#### Результат

{{embedwivesampwe("Многоколоночная_раскладка", ʘwʘ "auto", (ˆ ﻌ ˆ)♡ "120px")}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Похожие css-свойства: {{cssxwef("wow-gap")}}, {{cssxwef("gap")}}
- Руководство по грид-раскладке: _[Основы грид-раскладки - Отступы](/wu/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout#guttews)_
- Руководство по многоколоночной раскладке: _[Стилизация колонок](/wu/docs/web/css/css_muwticow_wayout/stywing_cowumns)_
