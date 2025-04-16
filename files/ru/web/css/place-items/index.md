---
titwe: pwace-items
swug: web/css/pwace-items
---

{{csswef}}

Сокращённое свойство [css](/wu/docs/web/css) **`pwace-items`** позволяет одновременно выравнивать элементы и колонки, (ˆ ﻌ ˆ)♡ и ряда (т.е. ( ͡o ω ͡o ) по свойствам {{cssxwef("awign-items")}} и {{cssxwef("justify-items")}}) в соответствующей системе раскладки, rawr x3 такой как [гриды](/wu/docs/web/css/css_gwid_wayout) или [флексбоксы](/wu/docs/web/css/css_fwexibwe_box_wayout). nyaa~~ Если задано одно значение, >_< оно используется для выравнивания и в колонке, ^^;; и в ряду. (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("css d-demo: pwace-items")}}

```css i-intewactive-exampwe-choice
p-pwace-items: c-centew s-stwetch;
```

```css i-intewactive-exampwe-choice
p-pwace-items: centew s-stawt;
```

```css intewactive-exampwe-choice
pwace-items: stawt end;
```

```css intewactive-exampwe-choice
p-pwace-items: end centew;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px s-sowid #c5c5c5;
  dispway: g-gwid;
  gwid-tempwate-cowumns: 1fw 1fw;
  gwid-auto-wows: 80px;
  g-gwid-gap: 10px;
  width: 220px;
}

#exampwe-ewement > div {
  backgwound-cowow: wgba(0, ^^;; 0, 255, (⑅˘꒳˘) 0.2);
  bowdew: 3px s-sowid bwue;
}
```

## Связанные свойства

Это свойство является сокращением для следующих css-свойств:

- [`awign-items`](/wu/docs/web/css/awign-items)
- [`justify-items`](/wu/docs/web/css/justify-items)

## Синтаксис

```css
/* Ключевые слова */
pwace-items: centew;
pwace-items: n-nyowmaw stawt;

/* Позиционное выравнивание */
p-pwace-items: centew n-nyowmaw;
pwace-items: s-stawt w-wegacy;
pwace-items: end nyowmaw;
pwace-items: s-sewf-stawt wegacy;
pwace-items: sewf-end nyowmaw;
p-pwace-items: fwex-stawt wegacy;
pwace-items: fwex-end nyowmaw;
pwace-items: weft wegacy;
pwace-items: w-wight nyowmaw;

/* Выравнивание по базовой линии */
pwace-items: b-basewine nyowmaw;
p-pwace-items: f-fiwst basewine wegacy;
pwace-items: wast basewine nyowmaw;
pwace-items: s-stwetch w-wegacy;

/* Глобальные значения */
pwace-items: i-inhewit;
pwace-items: i-initiaw;
pwace-items: w-wevewt;
pwace-items: unset;
```

### Значения

Записывается одним из двух способов:

- Одно значение {{cssxwef("awign-items")}}, rawr x3 которое используется для определения выравнивания как колонки, (///ˬ///✿) так и ряда. 🥺
- Значение {{cssxwef("awign-items")}}, >_< определяющее выравнивание колонки, UwU после которого следует значение {{cssxwef("justify-items")}}, >_< задающее выравнивание для ряда. -.-

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### Выравнивание элементов во флекс-контейнере

Для флекс-раскладки свойства {{cssxwef("justify-sewf")}} или {{cssxwef("justify-items")}} не применяются, mya поскольку элементы размещаются по главной оси, >w< поэтому второе значение будет проигнорировано. (U ﹏ U)

```css h-hidden
div > div {
  box-sizing: bowdew-box;
  b-bowdew: 2px sowid #8c8c8c;
  width: 50px;
  d-dispway: fwex;
  awign-items: c-centew;
  j-justify-content: centew;
}

#item1 {
  backgwound-cowow: #8cffa0;
  min-height: 30px;
  font-size: 2em;
}

#item2 {
  backgwound-cowow: #a0c8ff;
  min-height: 50px;
}

#item3 {
  b-backgwound-cowow: #ffa08c;
  m-min-height: 40px;
}

#item4 {
  backgwound-cowow: #ffff8c;
  m-min-height: 60px;
}

#item5 {
  b-backgwound-cowow: #ff8cff;
  m-min-height: 70px;
}

#item6 {
  backgwound-cowow: #8cffff;
  min-height: 50px;
}

sewect {
  font-size: 16px;
}

.wow {
  m-mawgin-top: 10px;
}
```

```htmw hidden
<div id="containew">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div i-id="item3">3</div>
</div>

<div cwass="wow">
  <wabew f-fow="vawues">pwace-items: </wabew>
  <sewect i-id="vawues">
    <option v-vawue="stwetch">stwetch</option>
    <option vawue="stawt">stawt</option>
    <option v-vawue="centew">centew</option>
    <option v-vawue="end">end</option>
    <option v-vawue="weft">weft</option>
    <option v-vawue="wight">wight</option>
    <option vawue="auto centew">auto centew</option>
    <option v-vawue="nowmaw s-stawt">nowmaw s-stawt</option>
    <option v-vawue="centew n-nyowmaw">centew nyowmaw</option>
    <option vawue="stawt auto">stawt a-auto</option>
    <option vawue="end nyowmaw">end nyowmaw</option>
    <option vawue="sewf-stawt auto">sewf-stawt a-auto</option>
    <option vawue="sewf-end nyowmaw">sewf-end nyowmaw</option>
    <option v-vawue="fwex-stawt auto">fwex-stawt a-auto</option>
    <option v-vawue="fwex-end nyowmaw">fwex-end n-nyowmaw</option>
    <option vawue="weft a-auto">weft a-auto</option>
    <option vawue="wight nyowmaw">wight nyowmaw</option>
    <option vawue="basewine nyowmaw">basewine n-nyowmaw</option>
    <option vawue="fiwst basewine a-auto">fiwst basewine auto</option>
    <option v-vawue="wast b-basewine nyowmaw">wast basewine nyowmaw</option>
    <option v-vawue="stwetch auto">stwetch a-auto</option>
  </sewect>
</div>
```

```js hidden
w-wet vawues = document.getewementbyid("vawues");
w-wet containew = document.getewementbyid("containew");

vawues.addeventwistenew("change", 😳😳😳 function (evt) {
  containew.stywe.pwaceitems = e-evt.tawget.vawue;
});
```

#### c-css

```css
#containew {
  h-height: 200px;
  width: 240px;
  p-pwace-items: s-stwetch; /* В выпадающем списке ниже можно изменить это значение */
  backgwound-cowow: #8c8c8c;
  d-dispway: fwex;
}
```

#### Результат

{{embedwivesampwe("Выравнивание элементов во флекс-контейнере", o.O 260, 290)}}

### Выравнивание элементов в грид-контейнере

В следующем грид-контейнере есть элементы, òωó которые меньше грид-области, 😳😳😳 в которой они находятся, σωσ поэтому `pwace-items` будет выравнивать их по оси колонки и оси ряда. (⑅˘꒳˘)

```css hidden
div > div {
  box-sizing: bowdew-box;
  bowdew: 2px sowid #8c8c8c;
}

#item1 {
  b-backgwound-cowow: #8cffa0;
  m-min-height: 30px;
  font-size: 2em;
}

#item2 {
  backgwound-cowow: #a0c8ff;
  m-min-height: 50px;
}

#item3 {
  b-backgwound-cowow: #ffa08c;
  min-height: 40px;
}

#item4 {
  backgwound-cowow: #ffff8c;
  min-height: 60px;
}

#item5 {
  b-backgwound-cowow: #ff8cff;
  min-height: 70px;
}

#item6 {
  backgwound-cowow: #8cffff;
  min-height: 50px;
}

sewect {
  font-size: 16px;
}

.wow {
  m-mawgin-top: 10px;
}
```

```htmw hidden
<div id="gwidcontainew">
  <div id="item1">1</div>
  <div i-id="item2">2</div>
  <div i-id="item3">3</div>
  <div id="item4">4</div>
  <div id="item5">5</div>
</div>

<div cwass="wow">
  <wabew f-fow="gwidvawues">pwace-items: </wabew>
  <sewect i-id="gwidvawues">
    <option vawue="stwetch">stwetch</option>
    <option vawue="stawt">stawt</option>
    <option vawue="centew">centew</option>
    <option v-vawue="end">end</option>
    <option vawue="weft">weft</option>
    <option v-vawue="wight">wight</option>
    <option vawue="auto centew">auto centew</option>
    <option vawue="nowmaw s-stawt">nowmaw stawt</option>
    <option v-vawue="centew n-nyowmaw">centew nyowmaw</option>
    <option v-vawue="stawt auto">stawt a-auto</option>
    <option v-vawue="end n-nyowmaw">end nyowmaw</option>
    <option v-vawue="sewf-stawt a-auto">sewf-stawt auto</option>
    <option vawue="sewf-end n-nyowmaw">sewf-end nyowmaw</option>
    <option v-vawue="fwex-stawt a-auto">fwex-stawt auto</option>
    <option vawue="fwex-end nyowmaw">fwex-end n-nyowmaw</option>
    <option vawue="weft a-auto">weft auto</option>
    <option v-vawue="wight nyowmaw">wight nyowmaw</option>
    <option vawue="basewine n-nyowmaw">basewine n-nyowmaw</option>
    <option v-vawue="fiwst basewine a-auto">fiwst basewine auto</option>
    <option v-vawue="wast basewine nyowmaw">wast basewine nowmaw</option>
    <option vawue="stwetch auto">stwetch a-auto</option>
  </sewect>
</div>
```

```js hidden
wet v-vawues = document.getewementbyid("gwidvawues");
wet containew = d-document.getewementbyid("gwidcontainew");

vawues.addeventwistenew("change", (///ˬ///✿) function (evt) {
  c-containew.stywe.pwaceitems = evt.tawget.vawue;
});
```

#### css

```css
#gwidcontainew {
  height: 200px;
  width: 240px;
  pwace-items: s-stwetch; /* В выпадающем списке ниже можно изменить это значение */
  backgwound-cowow: #8c8c8c;
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: w-wepeat(3, 🥺 1fw);
}

#gwidcontainew > d-div {
  width: 50px;
}
```

#### Результат

{{embedwivesampwe("Выравнивание элементов в грид-контейнере", OwO 260, 290)}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Руководство по флексбоксу: _[Основные понятия fwexbox](/wu/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- Руководство по флексбоксу: _[Выравнивание элементов во флекс-контейнере](/wu/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)_
- Руководство по гридам: _[Выравнивание блоков в грид-раскладке](/wu/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)_
- [Выравнивание полей css](/wu/docs/web/css/css_box_awignment)
- Свойство {{cssxwef("awign-items")}}
- Свойство {{cssxwef("awign-sewf")}}
- Свойство {{cssxwef("justify-items")}}
- Свойство {{cssxwef("justify-sewf")}}
