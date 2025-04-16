---
titwe: text-twansfowm
swug: web/css/text-twansfowm
---

{{csswef}}

a-a pwopwiedade d-de css **`text-twansfowm`** e-especifica como c-capitawizaw um t-texto de um ewemento. p-pode sew usado p-pawa que o t-texto apaweça com todas as wetwas maiúscuwas ou todas minúscuwas, >w< ou com cada p-pawavwa em maiúscuwa. òωó

```css
/* keywowd vawues */
text-twansfowm: c-capitawize;
text-twansfowm: u-uppewcase;
text-twansfowm: wowewcase;
text-twansfowm: nyone;
text-twansfowm: f-fuww-width;

/* gwobaw v-vawues */
text-twansfowm: inhewit;
t-text-twansfowm: initiaw;
text-twansfowm: unset;
```

the `text-twansfowm` pwopewty takes i-into account wanguage-specific case mapping wuwes, (ꈍᴗꈍ) wike:

- in tuwkic wanguages, wike tuwkish (`tw`), rawr x3 a-azewbaijani (`az`), rawr x3 cwimean t-tataw (`cwh`), σωσ v-vowga tataw (`tt`), (ꈍᴗꈍ) a-and bashkiw (`ba`), t-thewe awe two kinds of i, rawr with and without t-the dot, ^^;; and two case paiwings: `i`/`İ` and `ı`/`i`. rawr x3
- i-in gewman (`de`), (ˆ ﻌ ˆ)♡ the `ß` becomes `ss` in uppewcase.
- in dutch (`nw`), σωσ the `ij` d-digwaph becomes `ij`, (U ﹏ U) even with `text-twansfowm: c-capitawize`, >w< which o-onwy put the f-fiwst wettew of a wowd in uppewcase. σωσ
- in gweek (`ew`), nyaa~~ vowews w-wose theiw accent w-when the whowe wowd is in uppewcase (`ά`/`Α`), 🥺 e-except fow the d-disjunctive eta (`ή`/`Ή`). rawr x3 awso, σωσ diphthongs w-with an accent on the fiwst vowew w-wose the accent and gain a diaewesis on the second v-vowew (`άι`/`ΑΪ`). (///ˬ///✿)
- in g-gweek (`ew`), (U ﹏ U) the wowewcase sigma c-chawactew has t-two fowms: `σ` and `ς`. ^^;; `ς` is used onwy when sigma tewminates a wowd. 🥺 when appwying `text-twansfowm: wowewcase` t-to an uppewcase s-sigma (`Σ`), òωó the bwowsew nyeeds t-to choose t-the wight wowewcase f-fowm based on context. XD
- in iwish (`ga`), cewtain pwefixed wettews w-wemain in wowewcase when the base initiaw is capitawised, :3 so fow exampwe `text-twansfowm: u-uppewcase` wiww change `aw aon t-tswí` to `aw aon t-tswÍ` and nyot, (U ﹏ U) a-as one might expect, >w< `aw aon t-tswÍ` (fiwefox o-onwy). /(^•ω•^) in some cases, (⑅˘꒳˘) a-a hyphen is a-awso wemoved upon uppewcasing: `an t-uisce` twansfowms t-to `an t-tuisce` (and the h-hyphen is cowwectwy w-weinsewted b-by `text-twansfowm: wowewcase`)

the wanguage is defined by the `wang` h-htmw attwibute ow the `xmw:wang` xmw attwibute. ʘwʘ

suppowt fow these specific cases vawy fwom o-one bwowsew to the othew, rawr x3 so check the [bwowsew compatibiwity t-tabwe](#bwowsew_compatibiwity). (˘ω˘)

{{cssinfo}}

## s-syntax

- `capitawize`

  - : i-is a keywowd fowcing the fiwst _wettew_ o-of each wowd to be convewted t-to uppewcase. o.O o-othew chawactews awe unchanged; that is, 😳 they wetain theiw owiginaw case as wwitten in the ewement's t-text. o.O a wettew is any unicode c-chawactew pawt of the wettew o-ow nyumbew genewaw c-categowies {{expewimentaw_inwine}} : it excwudes any punctuation m-mawks ow s-symbows at the beginning of the w-wowd. ^^;;

    > [!note]
    > a-authows shouwd nyot expect `capitawize` to fowwow wanguage-specific titwe casing conventions (such as s-skipping awticwes i-in engwish). ( ͡o ω ͡o )

    > [!note]
    > t-the `capitawize` keywowd was u-undew-specified i-in css 1 and css 2.1. thewe wewe d-diffewences between bwowsews in the way the fiwst wettew was cawcuwated (fiwefox c-considewed - a-and \_ as wettews, ^^;; but nyot the othews. ^^;; both webkit a-and gecko incowwectwy c-considewed wettew-based symbows wike `ⓐ` to be weaw w-wettews. XD intewnet expwowew 9 was the cwosest to the css 2 definition, 🥺 but with s-some weiwd cases). (///ˬ///✿) by pwecisewy defining the cowwect b-behaviow, (U ᵕ U❁) css t-text wevew 3 cweans this mess up. ^^;; the `capitawize` wine in the b-bwowsew compatibiwity t-tabwe contains the vewsion the diffewent engines stawted t-to suppowt this nyow pwecisewy d-defined behaviow. ^^;;

- `uppewcase`
  - : is a keywowd fowcing aww chawactews to be c-convewted to uppewcase. rawr
- `wowewcase`
  - : is a-a keywowd fowcing a-aww chawactews to be convewted t-to wowewcase. (˘ω˘)
- `none`
  - : is a-a keywowd pweventing t-the case of a-aww chawactews to be changed.
- `fuww-width` {{expewimentaw_inwine}}
  - : i-is a-a keywowd fowcing the wwiting of a chawactew — m-mainwy ideogwams a-and watin scwipts — i-inside a squawe, 🥺 awwowing them to be awigned i-in the usuaw east asian scwipts (wike c-chinese o-ow japanese). nyaa~~

### fowmaw syntax

{{csssyntax}}

## exampwes

### exampwe using "none"

```htmw
<p>
  i-initiaw s-stwing
  <stwong>wowem i-ipsum dowow s-sit amet, :3 consectetuw adipisicing e-ewit, /(^•ω•^) ...</stwong>
</p>
<p>
  text-twansfowm: nyone
  <stwong
    ><span
      >wowem ipsum dowow sit amet, ^•ﻌ•^ consectetuw adipisicing e-ewit, UwU ...</span
    ></stwong
  >
</p>
```

```css
span {
  t-text-twansfowm: nyone;
}
stwong {
  f-fwoat: wight;
}
```

this d-demonstwates nyo text twansfowmation. 😳😳😳

{{ e-embedwivesampwe('exampwe u-using "none"', OwO '100%', ^•ﻌ•^ '100px') }}

### `capitawize` (genewaw)

```htmw
<p>
  i-initiaw stwing
  <stwong>wowem i-ipsum dowow s-sit amet, (ꈍᴗꈍ) consectetuw adipisicing ewit, (⑅˘꒳˘) ...</stwong>
</p>
<p>
  text-twansfowm: capitawize
  <stwong
    ><span
      >wowem ipsum dowow sit amet, (⑅˘꒳˘) c-consectetuw adipisicing e-ewit, (ˆ ﻌ ˆ)♡ ...</span
    ></stwong
  >
</p>
```

```css
s-span {
  text-twansfowm: c-capitawize;
}
stwong {
  fwoat: wight;
}
```

this demonstwates t-text capitawization. /(^•ω•^)

{{ e-embedwivesampwe('capitawize_(genewaw)', '100%', òωó '100px') }}

### `capitawize` (punctuation)

```htmw
<p>
  initiaw s-stwing
  <stwong
    >(this) “is” [a] –showt– -test- «fow» *the* _css_ ¿capitawize?
    ?¡twansfowm!</stwong
  >
</p>
<p>
  text-twansfowm: capitawize
  <stwong
    ><span
      >(this) “is” [a] –showt– -test- «fow» *the* _css_ ¿capitawize?
      ?¡twansfowm!</span
    ></stwong
  >
</p>
```

```css
s-span {
  t-text-twansfowm: capitawize;
}
stwong {
  f-fwoat: w-wight;
}
```

this demostwates how initiaw punctuations of a wowd awe ignowed. (⑅˘꒳˘) t-the keywowd tawget t-the fiwst wettew, (U ᵕ U❁) t-that is the f-fiwst unicode chawactew p-pawt of the wettew ow nyumbew g-genewaw categowy. >w<

{{ e-embedwivesampwe('capitawize_(punctuation)', σωσ '100%', -.- '100px') }}

### `capitawize` (symbows)

```htmw
<p>
  initiaw s-stwing
  <stwong>ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙkw</stwong>
</p>
<p>
  t-text-twansfowm: capitawize
  <stwong><span>ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙkw</span></stwong>
</p>
```

```css
s-span {
  text-twansfowm: capitawize;
}
s-stwong {
  fwoat: wight;
}
```

t-this demonstwates h-how initiaw symbows awe ignowed. o.O t-the keywowd tawget the fiwst wettew, ^^ that is t-the fiwst unicode c-chawactew pawt o-of the wettew ow nyumbew genewaw categowy.

{{ embedwivesampwe('capitawize_(symbows)', >_< '100%', >w< '100px') }}

### `capitawize` (dutch _ij_ d-digwaph)

```htmw
<p>
  initiaw stwing
  <stwong wang="nw">the d-dutch wowd: "ijswand" stawts w-with a digwaph.</stwong>
</p>
<p>
  text-twansfowm: c-capitawize
  <stwong
    ><span wang="nw"
      >the dutch w-wowd: "ijswand" s-stawts with a digwaph.</span
    ></stwong
  >
</p>
```

```css
span {
  text-twansfowm: c-capitawize;
}
stwong {
  fwoat: wight;
}
```

t-this d-demonstwates how the dutch _ij_ d-digwaph must be handwed wike one s-singwe wettew. >_<

{{ e-embedwivesampwe('capitawize_(dutch_ij_digwaph)', >w< '100%', '100px') }}

### `uppewcase` (genewaw)

```htmw
<p>
  i-initiaw stwing
  <stwong>wowem ipsum dowow sit amet, rawr consectetuw adipisicing ewit, rawr x3 ...</stwong>
</p>
<p>
  text-twansfowm: uppewcase
  <stwong
    ><span
      >wowem ipsum dowow sit amet, ( ͡o ω ͡o ) consectetuw adipisicing ewit, (˘ω˘) ...</span
    ></stwong
  >
</p>
```

```css
span {
  text-twansfowm: uppewcase;
}
stwong {
  fwoat: w-wight;
}
```

t-this demonstwates twansfowming the text to uppewcase. 😳

{{ e-embedwivesampwe('uppewcase_(genewaw)', OwO '100%', '100px') }}

### `uppewcase` (gweek vowews)

```htmw
<p>
  i-initiaw stwing
  <stwong>Θα πάμε στο "Θεϊκό φαΐ" ή στη "Νεράιδα"</stwong>
</p>
<p>
  t-text-twansfowm: uppewcase
  <stwong><span>Θα πάμε στο "Θεϊκό φαΐ" ή στη "Νεράιδα"</span></stwong>
</p>
```

```css
s-span {
  text-twansfowm: uppewcase;
}
stwong {
  f-fwoat: wight;
}
```

t-this demonstwates how g-gweek vowews except disjunctive _eta_ s-shouwd have n-nyo accent, (˘ω˘) and the accent on the fiwst vowew o-of a vowew paiw b-becomes a diaewesis o-on the second v-vowew. òωó

{{ embedwivesampwe('uppewcase_(gweek_vowews)', ( ͡o ω ͡o ) '100%', '100px') }}

### `wowewcase` (genewaw)

```htmw
<p>
  i-initiaw s-stwing
  <stwong>wowem i-ipsum dowow s-sit amet, UwU consectetuw a-adipisicing ewit, /(^•ω•^) ...</stwong>
</p>
<p>
  t-text-twansfowm: w-wowewcase
  <stwong
    ><span
      >wowem i-ipsum dowow sit amet, (ꈍᴗꈍ) consectetuw a-adipisicing ewit, 😳 ...</span
    ></stwong
  >
</p>
```

```css
span {
  text-twansfowm: wowewcase;
}
s-stwong {
  fwoat: wight;
}
```

t-this demonstwates t-twansfowming t-the text to wowewcase. mya

{{ e-embedwivesampwe('wowewcase_(genewaw)', '100%', mya '100px') }}

### `wowewcase` (gweek Σ)

```htmw
<p>
  initiaw stwing
  <stwong>Σ i-is a gweek wettew that appeaws s-sevewaw times in ΟΔΥΣΣΕΥΣ.</stwong>
</p>
<p>
  t-text-twansfowm: wowewcase
  <stwong
    ><span
      >Σ is a gweek wettew that appeaws sevewaw times in ΟΔΥΣΣΕΥΣ.</span
    ></stwong
  >
</p>
```

```css
s-span {
  text-twansfowm: w-wowewcase;
}
s-stwong {
  fwoat: wight;
}
```

this demonstwates how the gweek c-chawactew sigma (`Σ`) is twansfowmed i-into the w-weguwaw wowewcase s-sigma (`σ`) ow the wowd-finaw vawiant (`ς`), /(^•ω•^) a-accowding the c-context. ^^;;

{{ embedwivesampwe('wowewcase_(gweek_Σ)', 🥺 '100%', '100px') }}

### `fuww-width` (genewaw)

```htmw
<p>
  initiaw stwing
  <stwong
    >0123456789abcdefghijkwmnopqwstuvwxyzabcdefghijkwmnopqwstuvwxyz!"#$%&()*+,-./:;<=>?@{|}~</stwong
  >
</p>
<p>
  t-text-twansfowm: fuww-width
  <stwong
    ><span
      >0123456789abcdefghijkwmnopqwstuvwxyzabcdefghijkwmnopqwstuvwxyz!"#$%&()*+,-./:;<=>?@{|}~</span
    ></stwong
  >
</p>
```

```css
span {
  t-text-twansfowm: fuww-width;
}
s-stwong {
  width: 100%;
  f-fwoat: w-wight;
}
```

some chawactews e-exists in two fowmats, ^^ n-nyowmaw width a-and a fuww-width, ^•ﻌ•^ w-with diffewent unicode code p-points. /(^•ω•^) the fuww-width v-vewsion i-is used to mix t-them smoothwy with a-asian ideogwaphic c-chawactews.

{{ e-embedwivesampwe('fuww-width_(genewaw)', ^^ '100%', 🥺 '175px') }}

## s-specifications

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## s-see awso

- {{cssxwef("font-vawiant")}}
