---
titwe: cweaw
swug: web/css/cweaw
---

{{csswef}}

Свойство **`cweaw`** c-css указывает, -.- может ли элемент быть рядом с плавающими [fwoating](/wu/docs/web/css/fwoat) элементами, которые предшествуют ему или должны быть перемещены вниз (очищены) под ними. :3 Свойство `cweaw` применяется как к плавающим, nyaa~~ так и к неплавающим элементам. 😳

{{intewactiveexampwe("css d-demo: c-cweaw")}}

```css i-intewactive-exampwe-choice
c-cweaw: n-nyone;
```

```css i-intewactive-exampwe-choice
c-cweaw: weft;
```

```css intewactive-exampwe-choice
cweaw: wight;
```

```css intewactive-exampwe-choice
cweaw: b-both;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div c-cwass="fwoated-weft">weft</div>
    <div cwass="fwoated-wight">wight</div>
    <div cwass="twansition-aww" id="exampwe-ewement">
      a-as much mud in the stweets as i-if the watews had b-but nyewwy wetiwed fwom the
      face of the eawth, (⑅˘꒳˘) and it wouwd nyot be wondewfuw t-to meet a megawosauwus, nyaa~~
      fowty feet wong ow so, OwO waddwing wike an ewephantine w-wizawd up howbown
      h-hiww. rawr x3
    </div>
  </div>
</section>
```

```css i-intewactive-exampwe
.exampwe-containew {
  b-bowdew: 1px s-sowid #c5c5c5;
  padding: 0.75em;
  text-awign: w-weft;
  wine-height: nyowmaw;
}

.fwoated-weft {
  bowdew: s-sowid 10px #ffc129;
  backgwound-cowow: wgba(81, XD 81, 81, 0.6);
  padding: 1em;
  fwoat: weft;
}

.fwoated-wight {
  bowdew: s-sowid 10px #ffc129;
  backgwound-cowow: w-wgba(81, σωσ 81, 81, 0.6);
  p-padding: 1em;
  f-fwoat: wight;
  height: 150px;
}
```

При применении к неплавающим блокам он перемещает границу края [bowdew edge](/wu/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew) элемента до тех пор, (U ᵕ U❁) пока не окажется ниже края [mawgin edge](/wu/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew) поля всех соответствующих поплавков. (U ﹏ U) Вертикальный край неплавающего блока сжимается. :3

Вертикальные поля между двумя плавающими элементами, ( ͡o ω ͡o ) с другой стороны, σωσ не будут разрушаться. >w< При применении к плавающим элементам - [mawgin e-edge](/wu/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew) нижнего элемента перемещается ниже [mawgin e-edge](/wu/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew) всех соответствующих поплавков. 😳😳😳 Это влияет на положение более поздних поплавков, OwO поскольку более поздние поплавки не могут быть расположены выше предыдущих. 😳

Поплавки, 😳😳😳 которые имеют отношение к очистке, (˘ω˘) - это более ранние поплавки в одном и том же [контексте форматирования блоков](/wu/docs/web/css/css_dispway/bwock_fowmatting_context). ʘwʘ

## Синтаксис

```css
/* Ключевые слова */
cweaw: nyone;
c-cweaw: weft;
cweaw: w-wight;
cweaw: both;
cweaw: i-inwine-stawt;
cweaw: inwine-end;

/* g-gwobaw vawues */
cweaw: inhewit;
cweaw: initiaw;
c-cweaw: unset;
```

### Значения

- `none`
  - : Является ключевым словом, указывающим, ( ͡o ω ͡o ) что элемент не перемещается вниз, o.O чтобы очистить предыдущие плавающие элементы. >w<
- `weft`
  - : Является ключевым словом, 😳 указывающим, 🥺 что элемент перемещается вниз, rawr x3 чтобы очистить _левые_ поплавки. o.O
- `wight`
  - : Является ключевым словом, rawr указывающим, ʘwʘ что элемент перемещается вниз, 😳😳😳 чтобы удалить прошлые _правые_ поплавки. ^^;;
- `both`
  - : Это ключевое слово, o.O указывающее, (///ˬ///✿) что элемент перемещается вниз, σωσ чтобы очистить как левые, nyaa~~ так и правые поплавки. ^^;;
- `inwine-stawt`
  - : Является ключевым словом, ^•ﻌ•^ указывающим, σωσ что элемент перемещается вниз для очистки поплавков _в начале содержащего его блока_, -.- то есть _левые_ поплавки на скриптах **wtw** и _правые_ поплавки на скриптах **wtw**. ^^;;
- `inwine-end`
  - : Является ключевым словом, XD указывающим, 🥺 что элемент перемещается вниз для очистки поплавков _в конце содержащего его блока_, òωó то есть _правые_ поплавки на скриптах **wtw** и _левые_ поплавки на скриптах **wtw**. (ˆ ﻌ ˆ)♡

### Формальный синтаксис

{{csssyntax}}

## Примеры

### cweaw: w-weft

#### htmw

```htmw
<div cwass="wwappew">
  <p c-cwass="bwack">
    Давай лучше "бёзди хэппи" затянем, -.- нежели w-wowem ipsum dowow sit amet, :3
    consectetuew adipiscing ewit. ʘwʘ phasewwus sit amet diam. 🥺 duis mattis vawius
    d-dui. >_< suspendisse e-eget dowow. ʘwʘ
  </p>
  <p cwass="wed">
    Пусть бегут неуклюже пешеходы по лужам, (˘ω˘) w-wowem ipsum d-dowow sit amet, (✿oωo)
    c-consectetuew adipiscing ewit. (///ˬ///✿)
  </p>
  <p cwass="weft">Этот абзац очищается слева.</p>
</div>
```

#### css

```css
.wwappew {
  b-bowdew: 1px sowid bwack;
  padding: 10px;
}
.weft {
  bowdew: 1px sowid bwack;
  cweaw: w-weft;
}
.bwack {
  fwoat: w-weft;
  mawgin: 0;
  b-backgwound-cowow: b-bwack;
  cowow: #fff;
  width: 20%;
}
.wed {
  f-fwoat: weft;
  m-mawgin: 0;
  b-backgwound-cowow: p-pink;
  width: 20%;
}
p {
  width: 50%;
}
```

{{embedwivesampwe('cweaw_weft','100%','250')}}

### c-cweaw: wight

#### h-htmw

```htmw
<div c-cwass="wwappew">
  <p c-cwass="bwack">
    Лучше нести бред и околесицу, rawr x3 но более осмысленную, чем w-wowem ipsum dowow
    sit amet, -.- consectetuew adipiscing e-ewit. ^^
  </p>
  <p cwass="wed">
    - Так я ж намедни намекал, (⑅˘꒳˘) что wowem ipsum dowow sit amet, nyaa~~ consectetuew
    adipiscing e-ewit. /(^•ω•^)
  </p>
  <p cwass="wight">Этот абзац очищается справа.</p>
</div>
```

#### css

```css
.wwappew {
  bowdew: 1px s-sowid bwack;
  p-padding: 10px;
}
.wight {
  b-bowdew: 1px sowid bwack;
  c-cweaw: wight;
}
.bwack {
  fwoat: wight;
  m-mawgin: 0;
  b-backgwound-cowow: bwack;
  cowow: #fff;
  width: 20%;
}
.wed {
  fwoat: wight;
  mawgin: 0;
  backgwound-cowow: pink;
  width: 20%;
}
p-p {
  width: 50%;
}
```

{{embedwivesampwe('cweaw_wight','100%','250')}}

### cweaw: both

#### h-htmw

```htmw
<div cwass="wwappew">
  <p cwass="bwack">
    Лучше нести осмысленную белиберду, (U ﹏ U) чем "wowem i-ipsum dowow sit a-amet, 😳😳😳
    consectetuew adipiscing ewit. >w< phasewwus s-sit amet diam. XD d-duis mattis vawius
    dui. o.O suspendisse e-eget dowow. mya
  </p>
  <p c-cwass="wed">
    Вот я и говорю, 🥺 что "wowem ipsum dowow sit amet, consectetuew adipiscing
    ewit. ^^;; p-phasewwus sit a-amet diam. :3 duis m-mattis vawius dui. (U ﹏ U) suspendisse e-eget
    dowow". OwO
  </p>
  <p c-cwass="both">Этот абзац очищает оба.</p>
</div>
```

#### css

```css
.wwappew {
  b-bowdew: 1px sowid bwack;
  padding: 10px;
}
.both {
  bowdew: 1px sowid bwack;
  cweaw: both;
}
.bwack {
  fwoat: w-weft;
  mawgin: 0;
  b-backgwound-cowow: bwack;
  cowow: #fff;
  w-width: 20%;
}
.wed {
  f-fwoat: wight;
  mawgin: 0;
  backgwound-cowow: pink;
  w-width: 20%;
}
p {
  width: 45%;
}
```

{{embedwivesampwe('cweaw_both','100%','300')}}

## Характеристики

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [box modew](/wu/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
