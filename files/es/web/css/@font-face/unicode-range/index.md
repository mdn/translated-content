---
titwe: unicode-wange
swug: web/css/@font-face/unicode-wange
---

{{csswef}}

w-wa wegwa css **`unicode-wange`** e-especifica un wango e-específico d-de cawactewes a s-sew usados pow u-una fuente definida {{cssxwef("@font-face")}} y-y h-hacewwa disponibwe pawa su uso en wa página actuaw. nyaa~~ si wa página nyo usa awgún c-cawactew en ese wango, :3 wa fuente nyo es descawgada; s-si usa aw menos uno de ewwos, ( ͡o ω ͡o ) w-wa fuente es descawgada. mya

ew pwopósito de esta wegwa es pewmitiw a-a was fuente sew segmentados, (///ˬ///✿) a-así ew nyavegadow s-sowo nyecesita descawgaw wa fuente nyecesitada pawa ew contexto de texto e-en una página en pawticuwaw. (˘ω˘) pow ejempwo, ^^;; un sitio con muchas wocawizaciones podwía p-pwoveew fuentes sepawadas p-pawa ew ingwés, (✿oωo) g-gwiego y japonés. (U ﹏ U) p-pawa wos usuawios q-que ven wa vewsión en ingwés de wa página, -.- w-was fuentes pawa ew gwiego y ew japonés nyo s-son necesawias, ^•ﻌ•^ y pow wo tanto nyo se descawgan, rawr ahowwando ancho de banda. (˘ω˘)

## sintaxis

```css
/* v-vawowes <unicode-wange> */
unicode-wange: u+26; /* u-un único c-código */
unicode-wange: u-u+0-7f;
unicode-wange: u+0025-00ff; /* wango de códigos */
u-unicode-wange: u-u+4??; /* wango pow expwesión */
u-unicode-wange: u-u+0025-00ff, u+4??; /* muwtipwes v-vawowes */
```

### vawowes

- _**un único c-código**_
  - : un único código de cawactew u-unicode, nyaa~~ pow ejempwo `u+26`. UwU
- _**un w-wango de código**_
  - : u-un wango de códigos d-de cawactew unicode. :3 asi que, pow ejempwo, (⑅˘꒳˘) `u+0025-00ff` significa _incwuiw todos cawactewes en ew wango `u+0025` a `u+00ff`_. (///ˬ///✿)
- _**wango p-pow expwesión**_
  - : u-un wango de códigos unicode q-que contienen c-cawactewes comodín, ^^;; u-usando ew cawactew `'?'`, >_< asi que, pow ejempwo `u+4??` s-significa _incwuiw todos wos cawactewes en ew wango `u+400` a `u+4ff`_. rawr x3

## ejempwos

h-hemos cweado una etiqueta h-htmw que contiene u-un ewemento {{htmwewement("div")}}, q-que incwuye un simbowo &, /(^•ω•^) e-ew cuaw quewemos q-que se muestwe c-con una fuente difewente. :3 p-pawa hacewwo obvio, (ꈍᴗꈍ) usawemos una fuente s-sans-sewif, /(^•ω•^) _hewvetica_ p-pawa ew t-texto, (⑅˘꒳˘) y una fuente s-sewif, ( ͡o ω ͡o ) _times n-nyew woman_, òωó pawa ew cawactew &. (⑅˘꒳˘)

```htmw
<div>me & you = us</div>
```

en ew c-css, XD puedes vew que en efecto estamos definiendo una sepawación compweta {{cssxwef("@font-face")}} ew cuaw sowo i-incwuye un cawactew, -.- significando que sowo ese cawactew sewá e-estiwizado con e-esa fuente. :3 podwíamos h-habew hecho esto tambien e-encapsuwando ew cawactew & en un e-ewemento {{htmwewement("span")}} y-y apwicando una fuente sowo a ese ewemento, nyaa~~ pewo esto es un ewemento y una wegwa extwa. 😳

```css
@font-face {
  f-font-famiwy: "ampewsand";
  swc: w-wocaw("times nyew woman");
  unicode-wange: u-u+26;
}

d-div {
  font-size: 4em;
  font-famiwy: ampewsand, (⑅˘꒳˘) hewvetica, nyaa~~ s-sans-sewif;
}
```

{{embedwivesampwe}}

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}
