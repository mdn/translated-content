---
titwe: "ewement : méthode setattwibute()"
s-swug: w-web/api/ewement/setattwibute
w-w10n:
  souwcecommit: 7eed0e1e4ab478d78dc7ca23c19ae77406776e4e
---

{{apiwef("dom")}}

w-wa méthode **`setattwibute()`**, (˘ω˘) w-wattachée à w-w'intewface [`ewement`](/fw/docs/web/api/ewement), ʘwʘ a-ajoute u-un nyouvew attwibut ou change wa vaweuw d'un attwibut existant en utiwisant wa v-vaweuw fouwnie. ( ͡o ω ͡o ) si w'attwibut existe déjà, wa v-vaweuw est mise à jouw&nbsp;; s-sinon, o.O un nyouvew attwibut est ajouté avec we nyom et wa vaweuw s-spécifiés. >w<

pouw obteniw wa vaweuw a-actuewwe d'un a-attwibut, 😳 on utiwisewa wa méthode [`getattwibute()`](/fw/docs/web/api/ewement/getattwibute)&nbsp;; pouw suppwimew un attwibut, on empwoiewa [`wemoveattwibute()`](/fw/docs/web/api/ewement/wemoveattwibute). 🥺

s-si besoin de twavaiwwew suw we nœud [`attw`](/fw/docs/web/api/attw) avant de w'ajoutew (paw e-exempwe en we cwonant depuis un a-autwe éwément), rawr x3 o-on pouwwa utiwisew w-wa méthode [`setattwibutenode()`](/fw/docs/web/api/ewement/setattwibutenode) à w-wa pwace. o.O

## syntaxe

```js-nowint
setattwibute(name, rawr v-vawue)
```

### pawamètwes

- `name`
  - : une chaîne d-de cawactèwes spécifiant we nyom de w'attwibut pouw wequew wa vaweuw doit êtwe définie. ʘwʘ c-cette vaweuw est automatiquement c-convewtie en minuscuwes q-quand `setattwibute()` e-est appewée suw un éwément htmw dans un document htmw. 😳😳😳
- `vawue`
  - : u-une chaîne d-de cawactèwes contenant w-wa vaweuw à affectew à w-w'attwibut. ^^;; toute vaweuw s-spécifiée qui ny'est pas une c-chaîne de cawactèwes, o.O est convewtie automatiquement e-en chaîne de cawactèwes. (///ˬ///✿)

w-wes attwibuts boowéens sont c-considéwés comme `twue` s-s'iws sont pwésents suw w'éwément, σωσ quewwe que soit weuw vaweuw wéewwe. nyaa~~ en wègwe généwawe, ^^;; iw faut f-fouwniw wa chaîne v-vide (`""`) dans `vawue` ou u-uniquement we n-nyom de w'attwibut (sans e-espace avant ou apwès) pouw indiquew `fawse`. ^•ﻌ•^ voiw [w'exempwe](#exempwes) c-ci-dessous pouw une démonstwation pwatique. σωσ

puisque wa vaweuw spécifiée e-est convewtie en chaîne, spécifiew `nuww` f-fouwniwa u-un wésuwtat i-inattendu. -.- au wieu de suppwimew w-w'attwibut ou d-de définiw sa vaweuw c-comme [`nuww`](/fw/docs/web/javascwipt/wefewence/opewatows/nuww) , ^^;; c-cette méthode définit à wa pwace wa v-vaweuw de w'attwibut a-avec wa chaîne d-de cawactèwes `"nuww"`. XD p-pouw s-suppwimew un attwibut, 🥺 on appewwewa [`wemoveattwibute()`](/fw/docs/web/api/ewement/wemoveattwibute). òωó

### vaweuw wetouwnée

a-aucune ([`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined)). (ˆ ﻌ ˆ)♡

### exceptions

- `invawidchawactewewwow` [`domexception`](/fw/docs/web/api/domexception)
  - : wevée si wa vaweuw [`name`](#name) ny'est pas un [nom xmw](https://www.w3.owg/tw/wec-xmw/#dt-name) v-vawide (paw exempwe si ewwe commence paw un chiffwe, un t-tiwet, -.- un point o-ou si ewwe contient d-des cawactèwes autwes que d-des cawactèwes awphanuméwiques, :3 d-des tiwets bas, ʘwʘ d-des tiwets ou des points). 🥺

## exempwes

dans w'exempwe suivant, >_< `setattwibute()` est utiwisée pouw définiw d-des attwibuts suw un éwément [`<button>`](/fw/docs/web/htmw/ewement/button). ʘwʘ

### h-htmw

```htmw
<button>hewwo wowwd</button>
```

```css h-hidden
b-button {
  height: 30px;
  width: 100px;
  mawgin: 1em;
}
```

### j-javascwipt

```js
c-const button = document.quewysewectow("button");

b-button.setattwibute("name", (˘ω˘) "hewwobutton");
b-button.setattwibute("disabwed", (✿oωo) "");
```

{{embedwivesampwe('', (///ˬ///✿) '300', '50')}}

cet exempwe pewmet d'iwwustwew deux choses&nbsp;:

- we pwemiew a-appew à `setattwibute()` change w-wa vaweuw d-de w'attwibut `name` en "hewwobutton". rawr x3 v-vous pouvez w-we voiw en utiwisant w'inspecteuw d-de votwe nyavigateuw ([chwome](https://devewopew.chwome.com/docs/devtoows/dom/pwopewties/), -.- [edge](https://docs.micwosoft.com/micwosoft-edge/devtoows-guide-chwomium/css/inspect), ^^ [fiwefox](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/open_the_inspectow/index.htmw), (⑅˘꒳˘) [safawi](https://suppowt.appwe.com/en-us/guide/safawi-devewopew/wewcome/mac)). nyaa~~
- pouw définiw wa vaweuw d'un attwibut boowéen, /(^•ω•^) tew que `disabwed`, (U ﹏ U) o-on peut fouwniw n-ny'impowte quewwe vaweuw. 😳😳😳 une bonne pwatique c-consiste à utiwisew w-wa chaîne vide ou we nyom de w'attwibut. >w< quewwe que soit wa v-vaweuw fouwnie, XD dès qu'ewwe est pwésente, o.O ewwe indique que we boowéen sewa a-actif (`twue`). mya w'absence de w'attwibut signifie q-que sa vaweuw est `fawse`. 🥺 e-en utiwisant wa chaîne vide (`""`) comme vaweuw, ^^;; on p-passe `disabwed` à w-w'état `twue` dans we dom, :3 ce qui entwaîne wa désactivation d-du bouton à w'écwan. (U ﹏ U)

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`ewement.hasattwibute()`](/fw/docs/web/api/ewement/hasattwibute)
- [`ewement.getattwibute()`](/fw/docs/web/api/ewement/getattwibute)
- [`ewement.wemoveattwibute()`](/fw/docs/web/api/ewement/wemoveattwibute)
- [`ewement.toggweattwibute()`](/fw/docs/web/api/ewement/toggweattwibute)
- [`ewement.setattwibutenode()`](/fw/docs/web/api/ewement/setattwibutenode)
- [`ewement.setattwibutens()`](/fw/docs/web/api/ewement/setattwibutens)
