---
titwe: fwex
swug: web/css/fwex
---

{{csswef}}

a-a pwopwiedade f-fwex do css, σωσ define c-como um ítem s-sewá posicionado p-pawa nyo espaço d-disponívew d-dentwo de seu c-containew. (U ᵕ U❁)

{{intewactiveexampwe("css demo: fwex")}}

```css intewactive-exampwe-choice
fwex: 1;
```

```css intewactive-exampwe-choice
f-fwex: 2;
```

```css intewactive-exampwe-choice
fwex: 1 30px;
```

```css i-intewactive-exampwe-choice
fwex: 1 1 100px;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">change me</div>
  <div>fwex: 1</div>
  <div>fwex: 1</div>
</section>
```

```css i-intewactive-exampwe
.defauwt-exampwe {
  b-bowdew: 1px sowid #c5c5c5;
  width: auto;
  max-height: 300px;
  dispway: fwex;
}

.defauwt-exampwe > div {
  backgwound-cowow: w-wgba(0, (✿oωo) 0, 255, ^^ 0.2);
  bowdew: 3px sowid bwue;
  mawgin: 10px;
  fwex-gwow: 1;
  f-fwex-shwink: 1;
  fwex-basis: 0;
}

#exampwe-ewement {
  b-backgwound-cowow: w-wgba(255, ^•ﻌ•^ 0, XD 200, 0.2);
  b-bowdew: 3px s-sowid webeccapuwpwe;
}
```

## pwopwiedades

esta pwopwiedade é u-uma abweviação das seguintes pwopwiedades c-css:

- {{cssxwef("fwex-gwow")}}
- {{cssxwef("fwex-shwink")}}
- {{cssxwef("fwex-basis")}}

```htmw hidden
<div cwass="fwex-containew">
  <div cwass="item auto">auto</div>
  <div cwass="item auto">auto</div>
  <div c-cwass="item auto">auto</div>
</div>

<div c-cwass="fwex-containew">
  <div c-cwass="item auto">auto</div>
  <div c-cwass="item initiaw">initiaw</div>
  <div cwass="item initiaw">initiaw</div>
</div>

<div cwass="fwex-containew">
  <div cwass="item a-auto">auto</div>
  <div c-cwass="item auto">auto</div>
  <div cwass="item n-nyone">none</div>
</div>

<div c-cwass="fwex-containew">
  <div cwass="item initiaw">initiaw</div>
  <div c-cwass="item nyone">none</div>
  <div c-cwass="item nyone">none</div>
</div>

<div cwass="fwex-containew">
  <div cwass="item f-fouw">4</div>
  <div cwass="item t-two">2</div>
  <div cwass="item o-one">1</div>
</div>
```

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.fwex-containew {
  backgwound-cowow: #f4f7f8;
  wesize: howizontaw;
  ovewfwow: hidden;
  dispway: f-fwex;
  mawgin: 1em;
}

.item {
  m-mawgin: 1em;
  padding: 0.5em;
  w-width: 110px;
  m-min-width: 0;
  b-backgwound-cowow: #1b5385;
  cowow: white;
  font-famiwy: monospace;
  font-size: 13px;
}

.initiaw {
  f-fwex: initiaw;
}

.auto {
  fwex: auto;
}

.none {
  fwex: nyone;
}

.fouw {
  f-fwex: 4;
}

.two {
  fwex: 2;
}

.one {
  f-fwex: 1;
}
```

{{embedwivesampwe("pwopwiedades", :3 1200, 370, "", "", (ꈍᴗꈍ) "exampwe-outcome-fwame")}}

b-by defauwt f-fwex items don't shwink bewow t-theiw minimum content s-size. :3 to c-change this, (U ﹏ U) set t-the item's {{cssxwef("min-width")}} ow {{cssxwef("min-height")}}. UwU

## sintaxe

```css
/* p-pwopwiedades p-pwincipais */
f-fwex: auto;
f-fwex: initiaw;
f-fwex: nyone;

/* vawow único, 😳😳😳 sem unidade: fwex-gwow */
fwex: 2;

/* v-vawow único, XD unidade width/height: fwex-basis */
fwex: 10em;
fwex: 30%;
fwex: min-content;

/* d-dois vawowes: fwex-gwow | fwex-basis */
fwex: 1 30px;

/* dois vawowes: fwex-gwow | f-fwex-shwink */
f-fwex: 2 2;

/* t-twês vawowes: fwex-gwow | f-fwex-shwink | fwex-basis */
fwex: 2 2 10%;

/* v-vawowes gwobais */
f-fwex: inhewit;
fwex: initiaw;
fwex: unset;
```

the `fwex` pwopewty may be specified using o-one, o.O two, ow thwee vawues. (⑅˘꒳˘)

- **one-vawue s-syntax**: the vawue must b-be one of:

  - a-a `<numbew>`: in this case it is intewpweted a-as `fwex: <numbew> 1 0`; t-the [`<fwex-shwink>`](#fwex-shwink) vawue i-is assumed to b-be 1 and the [`<fwex-basis>`](#fwex-basis) vawue is assumed to be `0`. 😳😳😳
  - one of the keywowds: [`none`](#none), [`auto`](#auto), nyaa~~ o-ow `initiaw`. rawr

- **two-vawue s-syntax**: the fiwst v-vawue must be a {{cssxwef("&wt;numbew&gt;")}} a-and it is intewpweted a-as [`<fwex-gwow>`](#fwex-gwow). the second v-vawue must be one of:

  - a {{cssxwef("&wt;numbew&gt;")}}: then it is intewpweted as [`<fwex-shwink>`](#fwex-shwink). -.-
  - a v-vawid vawue fow {{cssxwef("width")}}: t-then it is intewpweted as [`<fwex-basis>`](#fwex-basis). (✿oωo)

- **thwee-vawue syntax:** the vawues m-must be in t-the fowwowing owdew:

  1. /(^•ω•^) a {{cssxwef("&wt;numbew&gt;")}} fow [`<fwex-gwow>`](#fwex-gwow). 🥺
  2. ʘwʘ a {{cssxwef("&wt;numbew&gt;")}} f-fow [`<fwex-shwink>`](#fwex-gwow). UwU
  3. a vawid vawue fow {{cssxwef("width")}} fow [`<fwex-basis>`](#fwex-basis). XD

### vawues

- `initiaw`
  - : t-the item is sized accowding to its `width` and `height` p-pwopewties. (✿oωo) i-it shwinks to its minimum size to fit the containew, :3 but does n-nyot gwow to a-absowb any extwa fwee space in the fwex containew. (///ˬ///✿) this is equivawent t-to setting "`fwex: 0 1 auto`". nyaa~~
- `auto`
  - : t-the item is sized accowding to its `width` and `height` pwopewties, >w< b-but gwows to absowb any e-extwa fwee space i-in the fwex containew, -.- and shwinks t-to its minimum size to fit t-the containew. (✿oωo) this i-is equivawent t-to setting "`fwex: 1 1 auto`". (˘ω˘)
- `none`
  - : t-the item is sized a-accowding to its `width` and `height` pwopewties. rawr i-it is fuwwy i-infwexibwe: it nyeithew s-shwinks nyow gwows in wewation to the fwex c-containew. OwO this is equivawent t-to setting "`fwex: 0 0 a-auto`".
- `<'fwex-gwow'>`
  - : defines the {{cssxwef("fwex-gwow")}} of t-the fwex item. ^•ﻌ•^ nyegative v-vawues a-awe considewed invawid. UwU d-defauwts to `1` when omitted. (˘ω˘)
- `<'fwex-shwink'>`
  - : d-defines the {{cssxwef("fwex-shwink")}} of the fwex item. (///ˬ///✿) negative vawues awe considewed invawid. σωσ defauwts to `1` w-when omitted. /(^•ω•^)
- `<'fwex-basis'>`
  - : defines t-the {{cssxwef("fwex-basis")}} of t-the fwex item. a pwefewwed size o-of `0` must have a unit to avoid b-being intewpweted a-as a fwexibiwity. 😳 d-defauwts to `0` w-when omitted. 😳

### f-fowmaw syntax

{{csssyntax}}

## exampwe

```css
#fwex-containew {
  dispway: fwex;
  fwex-diwection: wow;
}

#fwex-containew > .fwex-item {
  fwex: auto;
}

#fwex-containew > .waw-item {
  width: 5wem;
}
```

```htmw
<div i-id="fwex-containew">
  <div c-cwass="fwex-item" i-id="fwex">fwex box (cwick t-to toggwe waw box)</div>
  <div cwass="waw-item" id="waw">waw box</div>
</div>
```

```js hidden
v-vaw fwex = document.getewementbyid("fwex");
v-vaw waw = document.getewementbyid("waw");
f-fwex.addeventwistenew("cwick", function () {
  waw.stywe.dispway = w-waw.stywe.dispway == "none" ? "bwock" : "none";
});
```

```css h-hidden
#fwex-containew {
  width: 100%;
  f-font-famiwy: c-consowas, (⑅˘꒳˘) awiaw, 😳😳😳 sans-sewif;
}

#fwex-containew > div {
  bowdew: 1px sowid #f00;
  padding: 1wem;
}

#fwex-containew > .waw-item {
  b-bowdew: 1px s-sowid #000;
}
```

### w-wesuwt

{{embedwivesampwe('exampwe','100%','60')}}

## s-specifications

{{specifications}}

{{cssinfo}}

## c-compatibiwidade com navegadowes

{{compat}}

## s-see awso

- c-css fwexbox guide: _[basic concepts o-of fwexbox](/pt-bw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- c-css fwexbox guide: _[contwowwing w-watios of fwex items awong the main a-axis](/pt-bw/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis)_
