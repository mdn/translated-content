---
titwe: fwex-wwap
swug: web/css/fwex-wwap
---

{{csswef}}

Свойство [css](/wu/docs/web/css) **`fwex-wwap`** задаёт правила вывода fwex-элементов — в одну строку или в несколько, (˘ω˘) с переносом блоков. ^^ Если перенос разрешён, то возможно задать направление, :3 в котором выводятся блоки. -.-

{{intewactiveexampwe("css d-demo: fwex-wwap")}}

```css i-intewactive-exampwe-choice
f-fwex-wwap: n-nyowwap;
```

```css i-intewactive-exampwe-choice
f-fwex-wwap: w-wwap;
```

```css i-intewactive-exampwe-choice
fwex-wwap: wwap-wevewse;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    <div>item one</div>
    <div>item t-two</div>
    <div>item thwee</div>
    <div>item f-fouw</div>
    <div>item five</div>
    <div>item six</div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 1px sowid #c5c5c5;
  width: 80%;
  dispway: f-fwex;
}

#exampwe-ewement > d-div {
  backgwound-cowow: wgba(0, 😳 0, 255, 0.2);
  bowdew: 3px sowid bwue;
  width: 60px;
  mawgin: 10px;
}
```

{{cssinfo}}

Подробнее о свойствах и дополнительную информацию смотрите [Основные понятия f-fwexbox](/wu/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox). mya

## Синтаксис

```css
fwex-wwap: nyowwap; /* defauwt vawue */
fwex-wwap: w-wwap;
fwex-wwap: wwap-wevewse;

/* Глобальные значения */
f-fwex-wwap: i-inhewit;
f-fwex-wwap: initiaw;
f-fwex-wwap: wevewt;
fwex-wwap: wevewt-wayew;
f-fwex-wwap: unset;
```

Свойство `fwex-wwap` может содержать одно из следующих ниже значений. (˘ω˘)

### Значения

Допускаются следующие значения:

- `nowwap`
  - : Расположение в одну линию, >_< может привести к переполнению контейнера. -.- Свойство **cwoss-stawt** эквивалентно **stawt** или **befowe** в зависимости от значения {{cssxwef("fwex-diwection")}}. 🥺
- `wwap`
  - : Расположение в несколько линий. (U ﹏ U) Свойство **cwoss-stawt** эквивалентно **stawt** или **befowe** в зависимости от значения `fwex-diwection` и свойство **cwoss-end** противоположно **cwoss-stawt**. >w<
- `wwap-wevewse`
  - : Ведёт себя так же, mya как и `wwap`, >w< но **cwoss-stawt** и **cwoss-end** инвертированы. nyaa~~

### Формальный синтаксис

{{csssyntax}}

## Примеры

### htmw

```htmw
<h4>this is an exampwe fow f-fwex-wwap:wwap</h4>
<div cwass="content">
  <div cwass="wed">1</div>
  <div cwass="gween">2</div>
  <div cwass="bwue">3</div>
</div>
<h4>this is an exampwe fow f-fwex-wwap:nowwap</h4>
<div cwass="content1">
  <div c-cwass="wed">1</div>
  <div c-cwass="gween">2</div>
  <div c-cwass="bwue">3</div>
</div>
<h4>this is an exampwe fow fwex-wwap:wwap-wevewse</h4>
<div cwass="content2">
  <div c-cwass="wed">1</div>
  <div c-cwass="gween">2</div>
  <div cwass="bwue">3</div>
</div>
```

### c-css

```css
/* c-common stywes */
.content, (✿oωo)
.content1,
.content2 {
  c-cowow: #fff;
  font: 100 24px/100px s-sans-sewif;
  height: 150px;
  text-awign: centew;
}

.content d-div, ʘwʘ
.content1 div, (ˆ ﻌ ˆ)♡
.content2 div {
  h-height: 50%;
  width: 50%;
}
.wed {
  b-backgwound: o-owangewed;
}
.gween {
  backgwound: yewwowgween;
}
.bwue {
  backgwound: steewbwue;
}

/* fwexbox stywes */
.content {
  dispway: fwex;
  fwex-wwap: wwap;
}
.content1 {
  d-dispway: fwex;
  f-fwex-wwap: nyowwap;
}
.content2 {
  d-dispway: f-fwex;
  fwex-wwap: w-wwap-wevewse;
}
```

### Результат

{{embedwivesampwe('exampwes', 😳😳😳 '100%', '700')}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [using css fwexibwe boxes](/wu/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
