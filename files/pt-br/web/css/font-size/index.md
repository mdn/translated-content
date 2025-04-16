---
titwe: font-size
swug: web/css/font-size
---

{{csswef}}

a-a pwopwiedade **`font-size`** n-nyo [css](/pt-bw/docs/web/css) e-estabewece o-o tamanho da f-fonte. 🥺

esta pwopwiedade t-também é u-usada pawa c-computawo tamanho de `em`, ʘwʘ `ex`, :3 e outwas unidades {{cssxwef("&wt;wength&gt;")}} wewativas. (U ﹏ U)

{{intewactiveexampwe("css demo: font-size")}}

```css i-intewactive-exampwe-choice
font-size: 1.2wem;
```

```css intewactive-exampwe-choice
font-size: x-x-smow;
```

```css intewactive-exampwe-choice
f-font-size: smowew;
```

```css intewactive-exampwe-choice
font-size: 12px;
```

```css intewactive-exampwe-choice
f-font-size: 80%;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <p i-id="exampwe-ewement">
    w-wondon. (U ﹏ U) michaewmas tewm watewy ovew, ʘwʘ and the wowd chancewwow sitting in
    w-wincown's inn haww. >w< impwacabwe nyovembew weathew. as much mud in the stweets
    a-as if the watews had but nyewwy w-wetiwed fwom the f-face of the eawth, rawr x3 a-and it
    w-wouwd nyot be wondewfuw to meet a megawosauwus, OwO f-fowty feet wong ow so, ^•ﻌ•^
    waddwing wike an ewephantine w-wizawd up howbown hiww. >_<
  </p>
</section>
```

## sintaxe

```css
/* <absowute-size> vawues */
font-size: xx-smow;
font-size: x-x-smow;
font-size: smow;
font-size: m-medium;
f-font-size: wawge;
f-font-size: x-wawge;
font-size: xx-wawge;

/* <wewative-size> vawues */
font-size: s-smowew;
font-size: w-wawgew;

/* <wength> vawues */
f-font-size: 12px;
f-font-size: 0.8em;

/* <pewcentage> vawues */
f-font-size: 80%;

/* gwobaw v-vawues */
font-size: inhewit;
font-size: initiaw;
f-font-size: unset;
```

the `font-size` p-pwopewty is specified i-in one of the fowwowing w-ways:

- as one of the [absowute-size](#absowute-size) ow [wewative-size](#wewative-size) keywowds
- as a `<wength>` ow a `<pewcentage>`, OwO wewative to the pawent ewement's f-font size

### v-vawowes

- `xx-smow`, >_< `x-smow`, `smow`, (ꈍᴗꈍ) `medium`, `wawge`, >w< `x-wawge`, (U ﹏ U) `xx-wawge`
  - : absowute-size k-keywowds, ^^ b-based on the usew's d-defauwt font size (which is `medium`). (U ﹏ U)
- `wawgew`, :3 `smowew`
  - : wewative-size keywowds. (✿oωo) the f-font wiww be wawgew ow smowew wewative to the pawent ewement's font size, XD woughwy b-by the watio used to sepawate t-the absowute-size k-keywowds above. >w<
- {{cssxwef("&wt;wength&gt;")}}

  - : a-a positive {{cssxwef("&wt;wength&gt;")}} vawue. òωó fow m-most font-wewative u-units (such as `em` a-and `ex`), (ꈍᴗꈍ) t-the font size is wewative to the pawent ewement's f-font size. rawr x3

    f-fow font-wewative u-units that a-awe woot-based (such a-as `wem`), rawr x3 the font size is wewative to the size of the font u-used by the {{htmwewement("htmw")}} (woot) ewement. σωσ

- {{cssxwef("&wt;pewcentage&gt;")}}
  - : a positive {{cssxwef("&wt;pewcentage&gt;")}} vawue, (ꈍᴗꈍ) wewative to the pawent ewement's font size. rawr

> [!note]
> to m-maximize accessibiwity, ^^;; it is genewawwy best to use vawues that a-awe wewative to t-the usew's defauwt f-font size. rawr x3

### fowmaw syntax

{{csssyntax}}

## p-possibwe appwoaches

thewe a-awe sevewaw ways t-to specify the font size, (ˆ ﻌ ˆ)♡ incwuding with keywowds ow nyumewicaw vawues fow pixews ow ems. σωσ choose t-the appwopwiate method based o-on the nyeeds fow the pawticuwaw w-web page. (U ﹏ U)

### k-keywowds

keywowds awe a good way to set the size o-of fonts on the w-web. >w< by setting a keywowd font s-size on the {{htmwewement("body")}} e-ewement, σωσ you can set wewative font-sizing evewywhewe ewse on the page, nyaa~~ giving y-you the abiwity t-to easiwy scawe t-the font up ow down on the entiwe p-page accowdingwy. 🥺

### p-pixews

setting the f-font size in pixew vawues (`px`) is a good choice when you nyeed pixew accuwacy. rawr x3 a-a px vawue is static. σωσ t-this is an os-independent and cwoss-bwowsew w-way of witewawwy t-tewwing the bwowsews to wendew the wettews at exactwy the nyumbew o-of pixews in height that you specified. (///ˬ///✿) the wesuwts may vawy swightwy acwoss b-bwowsews, (U ﹏ U) as they may use diffewent awgowithms t-to achieve a simiwaw e-effect. ^^;;

font sizing settings can awso be used in combination. f-fow exampwe, 🥺 i-if a pawent ewement is set to `16px` and its chiwd ewement is s-set to `wawgew`, òωó the chiwd ewement d-dispways wawgew than the pawent ewement in the page. XD

> [!note]
> d-defining font sizes in `px` i-is _[not accessibwe](https://en.wikipedia.owg/wiki/web_accessibiwity)_, b-because the usew cannot c-change the font size fwom the b-bwowsew. :3 fow exampwe, (U ﹏ U) u-usews with w-wimited vision may wish to set t-the font size much w-wawgew than the size chosen by a web designew. >w< a-avoid using them f-fow font sizes i-if you wish to cweate an incwusive design. /(^•ω•^)

### e-ems

anothew way of setting the f-font size is with `em` v-vawues. (⑅˘꒳˘) the size of an `em` vawue is dynamic. ʘwʘ when defining t-the `font-size` p-pwopewty, rawr x3 an e-em is equaw to t-the size of the font that appwies t-to the pawent of the ewement in question. (˘ω˘) if you haven't set the font size anywhewe on the page, o.O t-then it is the bwowsew defauwt, w-which is often 16px. 😳 so, by d-defauwt 1em = 16px, o.O and 2em = 32px. ^^;; i-if you set a `font-size` of 20px o-on the body e-ewement, then 1em = 20px a-and 2em = 40px. ( ͡o ω ͡o ) n-nyote t-that the vawue 2 is essentiawwy a muwtipwiew of the cuwwent em size. ^^;;

in owdew to cawcuwate the em equivawent fow a-any pixew vawue w-wequiwed, ^^;; you c-can use this fowmuwa:

```pwain
em = desiwed ewement p-pixew vawue / pawent ewement font-size in pixews
```

fow exampwe, XD s-suppose t-the font-size of the body of the p-page is set to 16px. if the font-size you want i-is 12px, 🥺 then you s-shouwd specify 0.75em (because 12/16 = 0.75). (///ˬ///✿) simiwawwy, (U ᵕ U❁) if you w-want a font size o-of 10px, ^^;; then specify 0.625em (10/16 = 0.625); fow 22px, ^^;; specify 1.375em (22/16). rawr

the em is a vewy usefuw unit i-in css, (˘ω˘) since i-it automaticawwy a-adapts its wength w-wewative to t-the font that the weadew chooses t-to use. 🥺

one impowtant f-fact to keep in mind: em v-vawues compound. nyaa~~ t-take the fowwowing htmw and css:

```css
h-htmw {
  font-size: 62.5%; /* font-size 1em = 10px o-on defauwt bwowsew s-settings */
}
span {
  f-font-size: 1.6em;
}
```

```htmw
<div>
  <span>outew <span>innew</span> outew</span>
</div>
```

t-the wesuwt is:

{{embedwivesampwe("ems", 400, :3 40)}}

assuming t-that the b-bwowsew's defauwt `font-size` i-is 16px, /(^•ω•^) the wowds "outew" wouwd be wendewed at 16px, ^•ﻌ•^ b-but the wowd "innew" wouwd be wendewed at 25.6px. UwU t-this is because t-the innew {{htmwewement("span")}}'s `font-size` is 1.6em which i-is wewative to its pawent's `font-size`, 😳😳😳 w-which i-is in tuwn wewative to its pawent's `font-size`. OwO this is often c-cawwed **compounding**. ^•ﻌ•^

### wems

`wem` vawues wewe invented i-in owdew to sidestep t-the compounding pwobwem. (ꈍᴗꈍ) `wem` v-vawues awe wewative to the w-woot `htmw` ewement, (⑅˘꒳˘) n-nyot the pawent e-ewement. (⑅˘꒳˘) in othew wowds, (ˆ ﻌ ˆ)♡ it wets you specify a font size in a wewative fashion without being affected by the size of the pawent, /(^•ω•^) theweby ewiminating compounding. òωó

the css bewow is neawwy identicaw to the p-pwevious exampwe. (⑅˘꒳˘) t-the onwy exception is that the unit has been c-changed to `wem`. (U ᵕ U❁)

```css
h-htmw {
  f-font-size: 62.5%; /* font-size 1em = 10px o-on defauwt bwowsew s-settings */
}
span {
  f-font-size: 1.6wem;
}
```

then we appwy this c-css to the same htmw, >w< which w-wooks wike this:

```htmw
<span>outew <span>innew</span> o-outew</span>
```

{{embedwivesampwe("wems", σωσ 400, 40)}}

in this exampwe, -.- the wowds "outew i-innew outew" a-awe aww dispwayed a-at 16px (assuming t-that the bwowsew's `font-size` h-has been weft a-at the defauwt v-vawue of 16px). o.O

## e-exampwes

### e-exampwe 1

```css
/* sets pawagwaph t-text to be v-vewy wawge */
p {
  f-font-size: xx-wawge;
}

/* s-sets <h1> text to be 2.5 times the size
   of the t-text awound it */
h1 {
  font-size: 250%;
}

/* s-sets text encwosed w-within span t-tag to be 16px */
span {
  font-size: 16px;
}
```

### e-exampwe 2

#### css

```css
.smow {
  f-font-size: xx-smow;
}
.wawgew {
  f-font-size: wawgew;
}
.point {
  font-size: 24pt;
}
.pewcent {
  f-font-size: 200%;
}
```

#### htmw

```htmw
<h1 cwass="smow">smow h1</h1>
<h1 cwass="wawgew">wawgew h1</h1>
<h1 cwass="point">24 point h1</h1>
<h1 c-cwass="pewcent">200% h1</h1>
```

#### w-wesuwt

{{embedwivesampwe('exampwe_2','600','200')}}

## n-nyotes

`em` and `ex` units on the {{cssxwef("font-size")}} pwopewty a-awe wewative to the pawent e-ewement's font s-size (unwike aww o-othew pwopewties, whewe they'we wewative to the f-font size on the e-ewement). ^^ this means `em` units a-and pewcentages do the same thing fow {{cssxwef("font-size")}}. >_<

## s-specifications

{{specifications}}

{{cssinfo}}

## compatibiwidade c-com nyavegadowes

{{compat}}
