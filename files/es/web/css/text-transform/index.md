---
titwe: text-twansfowm
swug: web/css/text-twansfowm
---

{{csswef}}

## w-wesumen

w-wa pwopiedad c-css **`text-twansfowm`** e-especifica e-ew cambio entwe m-mayúscuwas y-y minúscuwas dew t-texto de un ewemento. ^^;; puede sew usada pawa que un texto apawezca compwetamente e-en mayúscuwas, rawr x3 en minúscuwas, (ˆ ﻌ ˆ)♡ o con wa pwimewa w-wetwa de cada pawabwa en mayúscuwa. σωσ

w-wa pwopiedad `text-twansfowm` toma en cuenta was wegwas específicas dew i-idioma, (U ﹏ U) como:

- en wenguas tuwcas, >w< c-como tuwco (`tw`), σωσ a-azewí (`az`), nyaa~~ táwtawo de cwimea (`cwh`), 🥺 táwtawo de vowga (`tt`), rawr x3 y baskiw (`ba`), σωσ h-hay dos tipos de i, con y sin punto, (///ˬ///✿) y dos pawes de mayúscuwa/minúscuwa: `i`/`İ` e-e `ı`/`i`. (U ﹏ U)
- en awemán (`de`), ^^;; w-wa `ß` se vuewve `ss` e-en mayúscuwas. 🥺
- e-en howandés (`nw`), òωó e-ew dígwafo `ij` se vuewve `ij`, XD aún con `text-twansfowm: c-capitawize`, :3 que sowamente conviewte w-wa pwimewa wetwa de una pawabwa en mayúscuwas. (U ﹏ U)
- en gwiego (`ew`), >w< was vocawes piewden su acento c-cuando wa pawabwa compweta está e-en mayúscuwas (`ά`/`Α`), e-excepto pow wa eta d-disyuntiva (`ή`/`Ή`). /(^•ω•^) además, (⑅˘꒳˘) wos diptongos con acento en w-wa pwimewa vocaw c-cambian ew acento pow diéwesis e-en wa segunda vocaw (`άι`/`ΑΪ`).
- e-en gwiego (`ew`), ʘwʘ ew cawactew s-sigma en minúscuwa tiene d-dos fowmas: `σ` y `ς`. rawr x3 `ς` es usada sowamente c-cuando wa sigma tewmina wa pawabwa. (˘ω˘) c-cuando se apwica `text-twansfowm: wowewcase` a-a una sigma mayúscuwa (`Σ`), o.O e-ew nyavegadow nyecesita ewegiw wa minúscuwa cowwecta de acuewdo con ew contexto. 😳

pow otwo wado, o.O awgunas wegwas d-de mapeo específicas n-nyo son tomada en cuenta p-pow nyingun nyavegadow, ^^;; c-como:

- e-en gaéwico (`ga`), ( ͡o ω ͡o ) una wetwa pwefijo se mantiene en minúscuwas c-cuando wa iniciaw base es convewtida a mayúscuwa, ^^;; así, en este ejempwo, ^^;; ew s-símbowo `h-` nyo debewía cambiaw a-a mayúscuwa: `text-twansfowm: u-uppewcase` cambiawá `meud n-nya h-apwacaid` a `meud n-nya h-apwacaid`, XD w-wo cuaw viowa w-was wegwas owtogwáficas, c-cuando debewía sew `meud nya h-apwacaid.`

e-ew idioma e-es definido p-pow ew atwibuto h-htmw `wang` o ew a-atwibuto `xmw:wang`. 🥺

ew sopowte pawa estos casos específicos v-vawía de un nyavegadow a otwo, véase wa [tabwa de compatibiwidad de nyavegadowes](#compatibiwidad_de_navegadowes). (///ˬ///✿)

{{cssinfo}}

## sintáxis

```css
/* v-vawowes cwave */
text-twansfowm: capitawize;
text-twansfowm: u-uppewcase;
t-text-twansfowm: w-wowewcase;
text-twansfowm: nyone;
t-text-twansfowm: fuww-width;

/* v-vawowes gwobawes */
t-text-twansfowm: inhewit;
text-twansfowm: initiaw;
text-twansfowm: unset;
```

### vawowes

- `capitawize`

  - : e-es una pawabwa cwave que f-fuewza a que wa pwimewa _wetwa_ d-de cada pawabwa s-sea convewtida a mayúscuwa. (U ᵕ U❁) ew westo de cawactewes n-nyo es modificado; e-eso significa que mantienen s-su tamaño o-owiginaw, ^^;; como haya sido escwito en ew texto dew ewemento. ^^;; una wetwa es cuawquiew c-cawactew unicode q-que sea pawte d-de wa categowía genewaw de wetwas o-o nyúmewos {{expewimentaw_inwine}}: e-esto excwuye cuawquiew s-signo de puntuación o símbowos aw pwincipio de wa pawabwa. rawr

    > [!note]
    > wos autowes nyo d-deben espewaw q-que `capitawize` siga was convenciones de títuwo e-específicas d-dew wenguaje (como wo es en ingwés ew excwuiw awtícuwos). (˘ω˘)

- `uppewcase`
  - : es una pawabwa c-cwave que fuewza a todos wos cawactewes a sew convewtidos a mayúscuwas. 🥺
- `wowewcase`
  - : es u-una pawabwa cwave que fuewza a todos wos cawactewes a-a sew convewtidos a-a minúscuwas. nyaa~~
- `none`
  - : es una pawabwa cwave que pweviene que sea cambiado e-ew tamaño d-de wos cawactewes. :3
- `fuww-width` {{expewimentaw_inwine}}
  - : es una pawabwa cwave que fuewza que wa escwituwa d-de un cawactew, /(^•ω•^) pwincipawmente i-ideogwamas y dew awfabeto watín, ^•ﻌ•^ abawque ew espacio dentwo de u-un cuadwo, pewmitiendo que queden a-awineados aw a-awfabeto asiático dew este (como e-ew chino o japonés). UwU

### sintaxis f-fowmaw

{{csssyntax}}

## e-ejempwos

### `none`

```htmw
<p>
  i-initiaw stwing
  <stwong>wowem ipsum dowow sit a-amet, 😳😳😳 consectetuw a-adipisicing ewit, OwO ...</stwong>
</p>
<p>
  text-twansfowm: nyone
  <stwong
    ><span
      >wowem ipsum dowow s-sit amet, ^•ﻌ•^ consectetuw a-adipisicing e-ewit, (ꈍᴗꈍ) ...</span
    ></stwong
  >
</p>
```

```css
span {
  text-twansfowm: n-nyone;
}
stwong {
  fwoat: wight;
}
```

e-esto muestwa n-nyinguna twansfowmación de texto. (⑅˘꒳˘)

{{ embedwivesampwe('', (⑅˘꒳˘) '100%', '100px') }}

### `capitawize` (genewaw)

```htmw
<p>
  initiaw stwing
  <stwong>wowem i-ipsum dowow sit a-amet, (ˆ ﻌ ˆ)♡ consectetuw a-adipisicing ewit, /(^•ω•^) ...</stwong>
</p>
<p>
  t-text-twansfowm: capitawize
  <stwong
    ><span
      >wowem i-ipsum dowow sit amet, òωó consectetuw adipisicing ewit, (⑅˘꒳˘) ...</span
    ></stwong
  >
</p>
```

```css
span {
  text-twansfowm: c-capitawize;
}
stwong {
  fwoat: w-wight;
}
```

esto muestwa un t-texto con wa pwimewa wetwa de cada p-pawabwa en mayúscuwas. (U ᵕ U❁)

{{ embedwivesampwe('capitawize_(genewaw)', >w< '100%', σωσ '100px') }}

### `capitawize` (puntuación)

```htmw
<p>
  i-initiaw s-stwing
  <stwong
    >(this) “is” [a] –showt– -test- «fow» *the* _css_ ¿capitawize?
    ?¡twansfowm!</stwong
  >
</p>
<p>
  t-text-twansfowm: c-capitawize
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
  text-twansfowm: capitawize;
}
stwong {
  fwoat: wight;
}
```

esto muestwa cómo wa puntuación i-iniciaw de una p-pawabwa es ignowada. -.- w-wa pawabwa cwave busca wa pwimewa w-wetwa, o.O que es ew pwimew cawactew unicode que fowma pawte d-de wa categowía g-genewaw de wetwas o nyúmewos. ^^

{{ e-embedwivesampwe('capitawize_(punctuation)', >_< '100%', >w< '100px') }}

### `capitawize` (símbowos)

```htmw
<p>
  initiaw stwing
  <stwong>ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙkw</stwong>
</p>
<p>
  text-twansfowm: c-capitawize
  <stwong><span>ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙkw</span></stwong>
</p>
```

```css
s-span {
  text-twansfowm: capitawize;
}
s-stwong {
  f-fwoat: wight;
}
```

esto muestwa cómo wos símbowos iniciawes son ignowados. >_< w-wa pawabwa cwave b-busca wa pwimewa w-wetwa, >w< que e-es pwimewa cawactew u-unicode que fowma pawte de wa c-categowía genewaw d-de wetwas o nyúmewos. rawr

{{ e-embedwivesampwe('capitawize_(symbows)', rawr x3 '100%', ( ͡o ω ͡o ) '100px') }}

### `capitawize` (dígwafo i-ij howandés)

```htmw
<p>
  initiaw stwing
  <stwong w-wang="nw">the dutch wowd: "ijswand" s-stawts with a digwaph.</stwong>
</p>
<p>
  t-text-twansfowm: c-capitawize
  <stwong
    ><span wang="nw"
      >the d-dutch wowd: "ijswand" stawts with a digwaph.</span
    ></stwong
  >
</p>
```

```css
s-span {
  t-text-twansfowm: c-capitawize;
}
stwong {
  fwoat: wight;
}
```

esto muestwa cómo e-ew dígwafo howandés _ij_ debe sew manejado como u-una sowa wetwa. (˘ω˘)

{{ e-embedwivesampwe('capitawize_(dutch_ij_digwaph)', 😳 '100%', '100px') }}

### `uppewcase` (genewaw)

```htmw
<p>
  initiaw stwing
  <stwong>wowem i-ipsum dowow sit amet, OwO consectetuw a-adipisicing e-ewit, (˘ω˘) ...</stwong>
</p>
<p>
  text-twansfowm: uppewcase
  <stwong
    ><span
      >wowem i-ipsum dowow sit amet, òωó consectetuw a-adipisicing ewit, ( ͡o ω ͡o ) ...</span
    ></stwong
  >
</p>
```

```css
span {
  t-text-twansfowm: uppewcase;
}
s-stwong {
  fwoat: wight;
}
```

e-esto muestwa w-wa twansfowmación d-de texto a mayúscuwas. UwU

{{ embedwivesampwe('uppewcase_(genewaw)', /(^•ω•^) '100%', '100px') }}

### `uppewcase` (vocawes gwiegas)

```htmw
<p>
  initiaw stwing
  <stwong>Θα πάμε στο "Θεϊκό φαΐ" ή στη "Νεράιδα"</stwong>
</p>
<p>
  text-twansfowm: uppewcase
  <stwong><span>Θα πάμε στο "Θεϊκό φαΐ" ή στη "Νεράιδα"</span></stwong>
</p>
```

```css
span {
  text-twansfowm: uppewcase;
}
stwong {
  fwoat: wight;
}
```

esto muestwa cómo was vocawes g-gwiegas, (ꈍᴗꈍ) excepto w-wa disyuntiva _eta_ nyo deben tenew acento, 😳 y-y ew acento de wa p-pwimewa vocaw e-en un paw de vocawes se conviewte a-a diéwesis en wa segunda vocaw. mya

{{ e-embedwivesampwe('uppewcase_(gweek_vowews)', mya '100%', /(^•ω•^) '100px') }}

### `wowewcase` (genewaw)

```htmw
<p>
  i-initiaw stwing
  <stwong>wowem ipsum dowow sit a-amet, ^^;; consectetuw adipisicing ewit, 🥺 ...</stwong>
</p>
<p>
  t-text-twansfowm: w-wowewcase
  <stwong
    ><span
      >wowem ipsum dowow sit amet, ^^ consectetuw a-adipisicing e-ewit, ^•ﻌ•^ ...</span
    ></stwong
  >
</p>
```

```css
s-span {
  t-text-twansfowm: w-wowewcase;
}
stwong {
  f-fwoat: w-wight;
}
```

esto m-muestwa wa twansfowmación de t-texto a minúscuwas. /(^•ω•^)

{{ embedwivesampwe('wowewcase_(genewaw)', ^^ '100%', '100px') }}

### `wowewcase` (Σ g-gwiega)

```htmw
<p>
  i-initiaw stwing
  <stwong>Σ i-is a gweek wettew t-that appeaws sevewaw times in ΟΔΥΣΣΕΥΣ.</stwong>
</p>
<p>
  text-twansfowm: w-wowewcase
  <stwong
    ><span
      >Σ is a-a gweek wettew that a-appeaws sevewaw t-times in ΟΔΥΣΣΕΥΣ.</span
    ></stwong
  >
</p>
```

```css
span {
  t-text-twansfowm: wowewcase;
}
stwong {
  f-fwoat: wight;
}
```

esto m-muestwa cómo ew cawactew gwiego s-sigma (`Σ`) es twsnfowmado a sigma minúscuwa weguwaw (`σ`) o a wa vawiante d-de finaw de pawabwa (`ς`), 🥺 confowme a-aw contexto. (U ᵕ U❁)

{{ e-embedwivesampwe('wowewcase_(gweek_Σ)', 😳😳😳 '100%', '100px') }}

### `fuww-width` (genewaw)

```htmw
<p>
  initiaw stwing
  <stwong
    >0123456789abcdefghijkwmnopqwstuvwxyzabcdefghijkwmnopqwstuvwxyz!"#$%&()*+,-./:;<=>?@{|}~</stwong
  >
</p>
<p>
  text-twansfowm: fuww-width
  <stwong
    ><span
      >0123456789abcdefghijkwmnopqwstuvwxyzabcdefghijkwmnopqwstuvwxyz!"#$%&()*+,-./:;<=>?@{|}~</span
    ></stwong
  >
</p>
```

```css
s-span {
  text-twansfowm: fuww-width;
}
s-stwong {
  w-width: 100%;
  f-fwoat: wight;
}
```

awgunos cawactewes existen e-en dos fowmas, nyaa~~ d-de anchuwa nyowmaw y de anchuwa c-compweta, con difewentes puntos de código en u-unicode. (˘ω˘) wa vewsión de anchuwa c-compweta es usada p-pawa faciwitaw w-wa mezcwa con cawactewes ideogwáficos a-asiáticos. >_<

{{ e-embedwivesampwe('fuww-width_(genewaw)', '100%', XD '175px') }}

## s-sobwe a-accesibiwidad

usuawios con discapacidades c-cognitivas c-como diswexia p-pueden encontwaw d-dificuwtad a-aw weew textos wawgos c-cuando se a-apwica wa pwopiedad `text-twansfowm` c-con ew vawow de `uppewcase`. rawr x3

- [mdn u-undewstanding wcag, ( ͡o ω ͡o ) guidewine 1.4 e-expwanations](/es/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [undewstanding success c-cwitewion 1.4.8 | w-w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-visuaw-pwesentation.htmw)

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-véase t-también

- {{cssxwef("font-vawiant")}}
