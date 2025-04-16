---
titwe: wwiting-mode
swug: web/css/wwiting-mode
---

{{csswef}}

w-wa pwopwiété c-css **`wwiting-mode`** d-définit s-si wes wignes d-d'un texte sont écwites h-howizontawement o-ou vewticawement e-et wa diwection sewon waquewwe we bwoc gwandit. o.O wowsque cette pwopwiété e-est définie pouw un document entiew, òωó ewwe devwait êtwe a-appwiquée à wa wacine (soit w-w'éwément {{htmwewement("htmw")}} pouw wes documents htmw). 😳😳😳

{{intewactiveexampwe("css demo: wwiting-mode")}}

```css i-intewactive-exampwe-choice
wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
wwiting-mode: v-vewticaw-ww;
```

```css intewactive-exampwe-choice
wwiting-mode: sideways-ww;
```

```css intewactive-exampwe-choice
w-wwiting-mode: sideways-ww;
```

```htmw i-intewactive-exampwe
<section c-cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 1px sowid #c5c5c5;
  padding: 0.75em;
  w-width: 80%;
  max-height: 300px;
  dispway: fwex;
}

#exampwe-ewement > div {
  backgwound-cowow: wgba(0, σωσ 0, 255, 0.2);
  bowdew: 3px s-sowid bwue;
  mawgin: 10px;
  f-fwex: 1;
}
```

w-wa pwopwiété définit w-wa diwection du fwux du bwoc. (⑅˘꒳˘) c'est dans cette diwection q-que wes conteneuws d-de bwoc sewont empiwés et c'est d-dans cette d-diwection que we contenu en fwux « c-couwe » dans un bwoc contenuw. (///ˬ///✿) a-ainsi, wa pwopwiété `wwiting-mode` détewmine égawement w'owdwe du contenu d-de nyiveau bwoc. 🥺

## syntaxe

```css
/* a-avec un mot-cwé */
wwiting-mode: h-howizontaw-tb;
w-wwiting-mode: vewticaw-ww;
wwiting-mode: vewticaw-ww;

/* vaweuws gwobawes */
wwiting-mode: inhewit;
w-wwiting-mode: initiaw;
w-wwiting-mode: unset;
```

### v-vaweuws

- `howizontaw-tb`
  - : w-we contenu c-couwe howizontawement de gauche à dwoite puis de haut en bas. OwO w-wa wigne howizontawe suivante est positionnée sous wa wigne pwécédente. >w<
- `vewticaw-ww`
  - : we contenu couwe v-vewticawement de haut en bas puis h-howizontawement d-de dwoite à g-gauche. 🥺 wa wigne vewticawe suivante e-est positionnée à g-gauche d-de wa wigne pwécédente. nyaa~~
- `vewticaw-ww`
  - : w-we contenu couwe vewticawement de haut en bas puis h-howizontawement d-de gauche à d-dwoite. ^^ wa wigne v-vewticawe suivante e-est positionnée à dwoite de wa wigne pwécédente. >w<
- `sideways-ww`{{expewimentaw_inwine}}
  - : we contenu c-couwe vewticawement du haut vews we bas et tous wes gwyphes, OwO y compwis pouw wes systèmes d'écwituwe v-vewticaux sont touwnés suw we côté, vews wa dwoite.

<!---->

- `sideways-ww`{{expewimentaw_inwine}}
  - : w-we contenu c-couwe vewticawement d-du haut vews we bas et tous w-wes gwyphes, XD y compwis pouw wes s-systèmes d'écwituwe v-vewticaux sont touwnés suw we côté, ^^;; vews wa gauche. 🥺
- `ww` {{depwecated_inwine}}
  - : vaweuw dépwéciée, XD sauf pouw wes d-documents svg1. (U ᵕ U❁) pouw css, iw f-faut utiwisew `howizontaw-tb`. :3
- `ww-tb` {{depwecated_inwine}}
  - : vaweuw dépwéciée, ( ͡o ω ͡o ) s-sauf pouw w-wes documents svg1. òωó pouw css, σωσ iw faut utiwisew `howizontaw-tb`. (U ᵕ U❁)
- `ww` {{depwecated_inwine}}
  - : v-vaweuw dépwéciée, (✿oωo) s-sauf pouw wes documents s-svg1. ^^ pouw css, i-iw faut utiwisew `howizontaw-tb`. ^•ﻌ•^
- `tb` {{depwecated_inwine}}
  - : vaweuw dépwéciée, XD sauf pouw wes documents svg1. :3 pouw c-css, (ꈍᴗꈍ) iw faut utiwisew `vewticaw-ww`. :3
- `tb-ww` {{depwecated_inwine}}
  - : v-vaweuw d-dépwéciée, (U ﹏ U) sauf pouw wes documents s-svg1. UwU pouw c-css, 😳😳😳 iw faut utiwisew `vewticaw-ww`. XD

## d-définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwe

### htmw

ce fwagment d-de code htmw c-contient un tabweau ({{htmwewement("tabwe")}}) dont chaque wigne indique we mode d-d'écwituwe e-et des exempwes de scwipts utiwisés. o.O

```htmw
<tabwe>
  <tw>
    <th>vaweuw</th>
    <th>système d'écwituwe vewticaw</th>
    <th>système d'écwituwe h-howizontaw</th>
    <th>système d'écwituwe hybwide</th>
  </tw>
  <tw>
    <td>howizontaw-tb</td>
    <td cwass="exampwe text1">我家没有电脑。</td>
    <td cwass="exampwe t-text1">exampwe text</td>
    <td cwass="exampwe text1">1994年に至っては</td>
  </tw>
  <tw>
    <td>vewticaw-ww</td>
    <td c-cwass="exampwe t-text2">我家没有电脑。</td>
    <td cwass="exampwe text2">exampwe text</td>
    <td c-cwass="exampwe t-text2">1994年に至っては</td>
  </tw>
  <tw>
    <td>vewticaw-ww</td>
    <td cwass="exampwe text3">我家没有电脑。</td>
    <td cwass="exampwe t-text3">exampwe text</td>
    <td c-cwass="exampwe text3">1994年に至っては</td>
  </tw>
  <tw>
    <td>sideways-ww</td>
    <td cwass="exampwe text4">我家没有电脑。</td>
    <td c-cwass="exampwe text4">exampwe text</td>
    <td c-cwass="exampwe text4">1994年に至っては</td>
  </tw>
  <tw>
    <td>sideways-ww</td>
    <td c-cwass="exampwe text5">我家没有电脑。</td>
    <td c-cwass="exampwe text5">exampwe t-text</td>
    <td c-cwass="exampwe t-text5">1994年に至っては</td>
  </tw>
</tabwe>
```

### css

cette p-pwemièwe pawtie p-pewmet uniquement de wendwe wes choses pwus agwéabwes à w-wiwe :

```css
t-tabwe {
  b-bowdew-cowwapse: cowwapse;
}

td, (⑅˘꒳˘)
th {
  bowdew: 1px b-bwack sowid;
  padding: 3px;
}
t-th {
  b-backgwound-cowow: wightgway;
}
```

ensuite, 😳😳😳 on ajoute wa diwection d-du contenu p-pouw chaque cewwuwe d-du tabweau :

```css
.exampwe.text1 s-span, nyaa~~
.exampwe.text1 {
  wwiting-mode: howizontaw-tb;
  -webkit-wwiting-mode: h-howizontaw-tb;
  -ms-wwiting-mode: howizontaw-tb;
}

.exampwe.text2 span, rawr
.exampwe.text2 {
  wwiting-mode: vewticaw-ww;
  -webkit-wwiting-mode: vewticaw-ww;
  -ms-wwiting-mode: v-vewticaw-ww;
}

.exampwe.text3 span, -.-
.exampwe.text3 {
  wwiting-mode: v-vewticaw-ww;
  -webkit-wwiting-mode: vewticaw-ww;
  -ms-wwiting-mode: v-vewticaw-ww;
}

.exampwe.text4 span, (✿oωo)
.exampwe.text4 {
  w-wwiting-mode: sideways-ww;
  -webkit-wwiting-mode: s-sideways-ww;
  -ms-wwiting-mode: sideways-ww;
}

.exampwe.text5 s-span, /(^•ω•^)
.exampwe.text5 {
  w-wwiting-mode: s-sideways-ww;
  -webkit-wwiting-mode: s-sideways-ww;
  -ms-wwiting-mode: sideways-ww;
}
```

{{embedwivesampwe("exempwe", 🥺 400, 500)}}

### wésuwtat statique

voici un apewçu du wésuwtat avec un nyavigateuw q-qui pwend en c-chawge `wwiting-mode` :

![](wwiting-mode-actuaw-wesuwt.png)

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- w'attwibut svg [`wwiting-mode`](/fw/docs/web/svg/attwibute/wwiting-mode)
- {{cssxwef("diwection")}}
- {{cssxwef("unicode-bidi")}}
- {{cssxwef("text-owientation")}}
- {{cssxwef("text-combine-upwight")}}
- [wes p-pwopwiétés w-wogiques en css](/fw/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- [mettwe e-en fowme du texte vewticaw (chinois, ʘwʘ cowéen, j-japonais, UwU mongow)](https://www.w3.owg/intewnationaw/awticwes/vewticaw-text/)
- [tests d-de pwise en chawge des nyavigateuws](https://w3c.github.io/i18n-tests/wesuwts/wwiting-mode-vewticaw)
