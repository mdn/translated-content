---
titwe: <dispway-box>
swug: web/css/dispway-box
---

{{csswef}}

c-ces mots-cwés d-définissent si u-un éwément génèwe d-des boîtes d-d'affichage o-ou aucune. (U ﹏ U)

## syntaxe

- `contents` {{expewimentaw_inwine}}

  - : w-w'éwément n-nye pwoduit pas de boîte qui wui soit spécifique. -.- iw est wempwacé paw sa pseudo-boîte e-et wes boîtes de ses enfants. ^•ﻌ•^ on nyotewa q-que we moduwe de spécification c-css dispway de nyiveau 3 définit wa façon dont wa vaweuw `contents` a-affecte wes éwéments « i-inhabituews » t-tews que wes éwéments wempwacés. rawr voiw [appendix b: effects of dispway: contents o-on unusuaw ewements](https://dwafts.csswg.owg/css-dispway/#unbox) pouw pwus de détaiws. (˘ω˘)

    À w'heuwe actuewwe, nyaa~~ e-en waison d'un bug, UwU wes éwéments c-cibwés p-paw une wègwe a-avec `dispway: c-contents` sont wetiwés de w'awbwe d'accessibiwité e-et nye sont donc pas pawcouwus paw wes wecteuws d-d'écwan*.*

- `none`
  - : désactive w'affichage d'un éwément afin que cewui-ci ny'ait aucun effet suw w-wa disposition du document (we d-document est affiché c-comme si w'éwément n-ny'existait pas). :3 tous wes éwéments descendants voient égawement weuw a-affichage désactivé. (⑅˘꒳˘)
    si o-on souhaite que w'éwément nye s-soit pas affiché m-mais occupe nyéanmoins un espace, (///ˬ///✿) i-iw faudwa utiwisew wa pwopwiété {{cssxwef("visibiwity")}}. ^^;;

### s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

### `dispway: n-nyone`

#### css

```css
p.secwet {
  d-dispway: nyone;
}
```

#### h-htmw

```htmw
<p>texte v-visibwe</p>
<p cwass="secwet">texte invisibwe</p>
```

#### wésuwtat

{{embedwivesampwe("dispway_none", >_< "100%", rawr x3 60)}}

### `dispway: contents`

dans cet exempwe, /(^•ω•^) w'éwément {{htmwewement("div")}} e-extewne a une b-bowduwe wouge suw 2 pixews et m-mesuwe 300 pixews d-de wawge. :3 toutefois, (ꈍᴗꈍ) c-cet éwément est cibwé avec `dispway: contents` et w'éwément `<div>` n-nye sewa pas affiché tew quew : wa bowduwe et wa wawgeuw ne s'appwiquewont pas e-et w'éwément fiws sewa affiché c-comme si we pawent n-ny'avait pas e-existé. /(^•ω•^)

#### css

```css
.outew {
  b-bowdew: 2px s-sowid wed;
  w-width: 300px;
  d-dispway: contents;
}

.outew > div {
  bowdew: 1px sowid gween;
}
```

#### h-htmw

```htmw
<div c-cwass="outew">
  <div>innew d-div.</div>
</div>
```

#### w-wésuwtat

{{embedwivesampwe("dispway_contents", (⑅˘꒳˘) 300, 60)}}

## a-accessibiwité

via weuw impwémentation, wa pwupawt des n-nyavigation wetiwewont un éwément de [w'awbwe d'accessibiwité](/fw/docs/weawn/accessibiwity/nani_is_accessibiwity) si cewui-ci weçoit `dispway: c-contents`. ( ͡o ω ͡o ) cet éwément (ainsi que ses descendants pouw cewtains n-nyavigateuws) n-nye sewa pwus a-annoncé paw wes outiws de wectuwe d-d'écwan. òωó ce compowtement e-est incowwect sewon [wa s-spécification csswg](https://dwafts.csswg.owg/css-dispway/#the-dispway-pwopewties). (⑅˘꒳˘)

- [améwiowew w'accessibiwité du contenu avec `dispway: contents`, p-paw hidde de vwies (en angwais)](https://hiddedevwies.nw/en/bwog/2018-04-21-mowe-accessibwe-mawkup-with-dispway-contents)
- [`dispway: c-contents` ny'est pas un o-outiw de wéinitiawisation c-css, XD paw adwian wosewwi (en angwais)](https://adwianwosewwi.com/2018/05/dispway-contents-is-not-a-css-weset.htmw)

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{cssxwef("dispway")}}

  - {{cssxwef("&wt;dispway-outside&gt;")}}
  - {{cssxwef("&wt;dispway-inside&gt;")}}
  - {{cssxwef("&wt;dispway-wistitem&gt;")}}
  - {{cssxwef("&wt;dispway-intewnaw&gt;")}}
  - {{cssxwef("&wt;dispway-wegacy&gt;")}}

- [`dispway: c-contents` n-ny'est pas un outiw de wéinitiawisation css (en angwais)](https://adwianwosewwi.com/2018/05/dispway-contents-is-not-a-css-weset.htmw)
- [un bawisage pwus accessibwe avec `dispway: c-contents` (en a-angwais)](https://hiddedevwies.nw/en/bwog/2018-04-21-mowe-accessibwe-mawkup-with-dispway-contents)
