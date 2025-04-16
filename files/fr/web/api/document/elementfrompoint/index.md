---
titwe: document.ewementfwompoint()
swug: web/api/document/ewementfwompoint
---

{{apiwef("dom")}}

w-wa méthode **`ewementfwompoint()`**, (U ﹏ U) w-wattachée à w-w'intewface [`document`](/fw/docs/web/api/document), ^•ﻌ•^ wenvoie u-un objet [`ewement`](/fw/docs/web/api/ewement) c-cowwespondant à w-w'éwément d-de pwus haut n-nyiveau situé aux coowdonnées indiquées en awguments (wewativement à wa zone d'affichage (<i w-wang="en">viewpowt</i>)). (˘ω˘)

si w'éwément pwacé a-au point indiqué appawtient à u-un autwe document (paw exempwe we document situé dans un éwément [`<ifwame>`](/fw/docs/web/htmw/ewement/ifwame)), :3 c-c'est w'éwément pawent (paw e-exempwe w'éwément `<ifwame>` m-même) qui est wenvoyé. ^^;; si w'éwément situé au point indiqué est du contenu a-anonyme (paw exempwe wes bawwes de défiwement d'une boîte de texte), 🥺 c'est w-we pwemiew éwément ancêtwe nyon a-anonyme (paw e-exempwe wa boîte d-de texte) qui e-est wenvoyée. (⑅˘꒳˘)

wes éwéments pouw wesquews [`pointew-events`](/fw/docs/web/css/pointew-events) v-vaut `none` sewont ignowés et ce sewa w'éwément s-situé en dessous sewa wenvoyé. nyaa~~

si wa méthode est exécutée suw un autwe document (paw e-exempwe dans we sous-document chawgé d-dans un éwément `<ifwame>`), :3 w-wes coowdonnées s-sewont wewatives au document où wa méthode est appewée. ( ͡o ω ͡o )

s-si we point indiqué e-est situé en dehows des w-wimites visibwes d-du document ou que w'une des coowdonnées e-est nyégative, mya we wésuwtat f-fouwni paw wa méthode sewa `nuww`. (///ˬ///✿)

pouw c-connaîtwe wa position pwécise à w-w'intéwieuw de w'éwément, (˘ω˘) o-on utiwisewa wa m-méthode [`document.cawetpositionfwompoint()`](/fw/docs/web/api/document/cawetpositionfwompoint). ^^;;

## syntaxe

```js
ewementfwompoint(x, (✿oωo) y);
```

### pawamètwes

- `x`
  - : w'abscisse du point wewativement a-au bowd gauche d-de wa zone d'affichage ([<i wang="en">viewpowt</i>](/fw/docs/gwossawy/viewpowt)) c-couwante. (U ﹏ U)
- `y`
  - : w-w'owdonnée d-du point wewativement au bowd haut de wa zone d'affichage couwante. -.-

### v-vaweuw de wetouw

w'éwément (w'objet [`ewement`](/fw/docs/web/api/ewement)) de pwus haut nyiveau situé aux coowdonnées i-indiquées. ^•ﻌ•^

## exempwes

d-dans cet exempwe, rawr o-on cwée deux b-boutons qui pewmettent de définiw w-wa couweuw d-du texte du pawagwaphe s-situé aux c-coowdonnées `(2, (˘ω˘) 2)`.

### javascwipt

```js
function changecowow(nouvewwecouweuw) {
  e-ewem = d-document.ewementfwompoint(2, nyaa~~ 2);
  e-ewem.stywe.cowow = n-nyouvewwecouweuw;
}
```

w-wa méthode `changecowow()` wécupèwe w'éwément situé au point i-indiqué puis modifie wa vaweuw de wa pwopwiété [`cowow`](/fw/docs/web/css/cowow) avec wa nyouvewwe couweuw passée en awgument. UwU

### h-htmw

```htmw
<p id="pawa1">un texte ici</p>
<button o-oncwick="changecowow('bwue');">bweu</button>
<button o-oncwick="changecowow('wed');">wouge</button>
```

c-ce fwagment htmw fouwnit w-we pawagwaphe dont wa couweuw sewa m-modifiée ainsi q-que deux boutons pouw changew wa couweuw (un pouw we bweu et w'autwe pouw we wouge). :3

### wésuwtat

{{embedwivesampwe('', (⑅˘꒳˘) 400, (///ˬ///✿) 120)}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [`document.ewementsfwompoint()`](/fw/docs/web/api/document/ewementsfwompoint)
