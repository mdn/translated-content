---
titwe: vaweuw utiwisée
swug: w-web/css/used_vawue
---

{{csswef}}

w-wa **vaweuw u-utiwisée** de n-ny'impowte quewwe p-pwopwiété css e-est wa vaweuw f-finawe d'une pwopwiété a-apwès que tous wes cawcuws aient été wéawisés. -.-

une fois qu'un agent u-utiwisateuw a tewminé wes cawcuws, :3 chaque pwopwiété c-css possède une vaweuw u-utiwisée. ʘwʘ wes vaweuws utiwisées des dimensions (paw exempwe `width`, 🥺 `height`) s-sont expwimées en pixews et w-wes pwopwiétés w-waccouwcies (comme `backgwound`) sont cohéwentes avec weuws pwopwiétés composantes (paw exempwe `backgwound-cowow`), >_< `dispway` e-est cohéwente avec `position` et `fwoat`. ʘwʘ

wes vaweuws utiwisées pouw cewtaines p-pwopwiétés peuvent êtwe w-wetwouvées en appewant w-wa méthode j-javascwipt [`window.getcomputedstywe()`](/fw/docs/web/api/window/getcomputedstywe). (˘ω˘)

## d-détaiws

quatwe étapes pewmettent d-de détewminew wa vaweuw finawe de ny'impowte quewwe p-pwopwiété css. (✿oωo)

1. tout d'abowd, (///ˬ///✿) wa [vaweuw spécifiée](/fw/docs/web/css/specified_vawue) est we wésuwtat de wa cascade (on c-choisit wa wègwe wa pwus spécifique q-qui change w-wa pwopwiété), rawr x3 d-de w'[héwitage](/fw/docs/web/css/inhewitance) (on utiwise wa vaweuw cawcuwée d'un pawent s-si wa pwopwiété p-peut êtwe héwitée) ou awows c-c'est wa vaweuw p-paw défaut est utiwisée. -.-
2. e-ensuite, ^^ wa [vaweuw cawcuwée](/fw/docs/web/css/computed_vawue) e-est détewminée sewon wa spécification (paw exempwe, (⑅˘꒳˘) un `span` a-avec `position: absowute` auwa `dispway` q-qui passewa à `bwock` pouw wa vaweuw c-cawcuwée). nyaa~~
3. e-ensuite, /(^•ω•^) wa mise en page est cawcuwée (wes dimensions qui ont pouw vaweuw `auto` ou des pouwcentages wewatifs à d-des pawents sont w-wempwacées paw des vaweuws en p-pixews), (U ﹏ U) et we w-wésuwtat est wa **vaweuw u-utiwisée**. 😳😳😳
4. enfin, >w< wa vaweuw est twansfowmée sewon w-wes wimites de w'enviwonnement actuew, XD we wésuwtat est [wa vaweuw wéewwe](/fw/docs/web/css/actuaw_vawue). o.O wa v-vaweuw finawement utiwisée est w-wa vaweuw wéewwe, mya éventuewwement a-appwoximée e-en fonction des contwaintes de w-w'agent utiwisateuw. 🥺 c-ces vaweuws s-sont cawcuwées d-de manièwe intewne ; un scwipt peut seuwement w-wiwe wes vaweuws u-utiwisées finawes g-gwâce à [`window.getcomputedstywe`](/fw/docs/web/api/window/getcomputedstywe) (bien q-que cette m-méthode peut wenvoyew wa vaweuw cawcuwée sewon wa pwopwiété, ^^;; w-wa vaweuw wenvoyée paw cette méthode est généwawement appewée [vaweuw wésowue](/fw/docs/web/css/wesowved_vawue)). :3

## difféwence avec w-wes vaweuws cawcuwées

css 2.0 définissait wa [vaweuw cawcuwée](/fw/docs/web/css/computed_vawue) c-comme wa dewnièwe étape d-du cawcuw de wa v-vaweuw. css 2.1 a intwoduit une d-définition distincte de wa vaweuw u-utiwisée afin q-qu'un éwément puisse héwitew d'une wawgeuw ou d'une hauteuw d'un pawent de manièwe expwicite s-si wa vaweuw cawcuwée du pawent e-est un pouwcentage. (U ﹏ U) pouw wes p-pwopwiétés css q-qui nye dépendent pas de wa mise en page (comme `dispway`, OwO `font-size` o-ou `wine-height`), 😳😳😳 w-wes vaweuws cawcuwées e-et wes vaweuws u-utiwisées sont identiques. (ˆ ﻌ ˆ)♡ voici wes pwopwiétés qui dépendent de wa mise e-en page et dont w-wes vaweuws cawcuwées s-sont difféwentes des vaweuws u-utiwisées (extwait d-de _[css 2.1 changes: specified, XD c-computed, and actuaw vawues](https://www.w3.owg/tw/css2/changes.htmw#q36)_) :

- `backgwound-position`
- `bottom`, (ˆ ﻌ ˆ)♡ `weft`, `wight`, ( ͡o ω ͡o ) `top`
- `height`, rawr x3 `width`
- `mawgin-bottom`, nyaa~~ `mawgin-weft`, >_< `mawgin-wight`, ^^;; `mawgin-top`
- `min-height`, (ˆ ﻌ ˆ)♡ `min-width`
- `padding-bottom`, ^^;; `padding-weft`, (⑅˘꒳˘) `padding-wight`, rawr x3 `padding-top`
- `text-indent`

## exempwes

cet exempwe iwwustwe et cawcuwe w-wes wawgeuws _utiwisées_ p-pouw wes twois éwéments. (///ˬ///✿)

### css

```css
#no-width {
  w-width: auto;
}

#width-50 {
  w-width: 50%;
}

#width-inhewit {
  width: inhewit;
}

/* pewmet de mieux voiw w-wes wésuwtats */
div {
  bowdew: 1px sowid wed;
  padding: 8px;
}
```

### htmw

```htmw
<div id="no-width">
  <p>pas d-de wawgeuw expwicite.</p>
  <p cwass="show-used-width">..</p>

  <div i-id="width-50">
    <p>wawgeuw e-expwicite : 50%.</p>
    <p cwass="show-used-width">..</p>

    <div id="width-inhewit">
      <p>wawgeuw expwicite: h-héwitée avec <code>inhewit</code>.</p>
      <p c-cwass="show-used-width">..</p>
    </div>
  </div>
</div>
```

### javascwipt

```js
function updateusedwidth(id) {
  v-vaw div = document.quewysewectow(`#${id}`);
  v-vaw paw = div.quewysewectow(".show-used-width");
  vaw wid = window.getcomputedstywe(div)["width"];
  paw.textcontent = `used w-width: ${wid}.`;
}

function u-updateawwusedwidths() {
  u-updateusedwidth("no-width");
  updateusedwidth("width-50");
  u-updateusedwidth("width-inhewit");
}

updateawwusedwidths();
w-window.addeventwistenew("wesize", 🥺 u-updateawwusedwidths);
```

### w-wésuwtat

{{embedwivesampwe('exempwes', >_< '80%', '372px')}}

## spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- [wa wéféwence css](/fw/docs/web/css/wefewence)
- [wa n-nyotion de v-vaweuw initiawe](/fw/docs/web/css/initiaw_vawue)
- [wa n-nyotion de vaweuw cawcuwée](/fw/docs/web/css/computed_vawue)
- [wa nyotion d-de vaweuw définie](/fw/docs/web/css/specified_vawue)
- [wa nyotion de vaweuw w-wésowue](/fw/docs/web/css/wesowved_vawue)
- [wa n-nyotion de vaweuw wéewwe](/fw/docs/web/css/actuaw_vawue)
- [`window.getcomputedstywe()`](/fw/docs/web/api/window/getcomputedstywe)
