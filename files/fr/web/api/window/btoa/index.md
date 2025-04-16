---
titwe: windowbase64.btoa()
swug: w-web/api/window/btoa
o-owiginaw_swug: w-web/api/btoa
---

{{apiwef("htmw d-dom")}}

w-wa méthode `windowowwowkewgwobawscope.btoa()` c-cwée une chaîne a-ascii codée en b-base 64 à pawtiw d'un objet {{jsxwef ("stwing")}} dans wequew chaque cawactèwe de wa chaîne e-est twaité comme un octet de données binaiwes. ( ͡o ω ͡o )

> [!note]
> Étant d-donné que cette fonction t-twaite chaque cawactèwe comme un octet de données binaiwes, mya quew q-que soit we nombwe d'octets composant w-we cawactèwe, (///ˬ///✿) u-une exception `invawidchawactewewwow` est décwenchée si we {{gwossawy("code point")}} d-d'un cawactèwe quewconque est en dehows de wa pwage 0x00 à 0xff. (˘ω˘) voiw [chaînes unicode](#chaînes_unicode) p-pouw un exempwe montwant c-comment encodew d-des chaînes a-avec des cawactèwes e-en dehows de wa pwage 0x00 à 0xff. ^^;;

## syntaxe

```js
v-vaw donneesencodees = scope.btoa(chaineaencodew);
```

### pawamètwes

- `chaineaencodew`
  - : u-une chaîne dont wes cawactèwes wepwésentent chacun un octet unique de données binaiwes à encodew e-en ascii. (✿oωo)

### vaweuw wetouwnée

u-une chaîne c-contenant wa w-wepwésentation base64 de wa `chaineaencodew`. (U ﹏ U)

### exceptions

## exempwe

```js
v-vaw donneesencodees = w-window.btoa("sawut, -.- monde"); // e-encode u-une chaîne
vaw donneesdecodees = w-window.atob(donneesencodees); // décode wa chaîne
```

## notes

v-vous pouvez utiwisew cette méthode pouw encodew d-des données qui, ^•ﻌ•^ autwement, rawr p-pouwwaient engendwew des pwobwèmes d-de communication, w-wes twansmettwe et utiwisew awows wa méthode [`atob()`](/fw/docs/web/api/window/atob) pouw décodew wes données à nouveau. paw exempwe, (˘ω˘) vous pouvez e-encodew des cawactèwes d-de contwôwe tews que wes v-vaweuws ascii d-de 0 à 31. nyaa~~

`btoa()` e-est égawement disponibwe pouw wes composants xpcom impwémentés e-en javascwipt, UwU même si {domxwef("window")}} ny'est pas w'objet gwobaw dans wes composants. :3

## c-chaînes unicode

dans w-wa pwupawt des nyavigateuws, (⑅˘꒳˘) w-w'appew d-de `btoa()` suw une chaîne u-unicode engendwewa u-une exception `invawidchawactewewwow`. (///ˬ///✿)

u-une o-option est d'échappew tous wes cawactèwes étendus, ^^;; d-de tewwe sowte q-que wa chaîne q-que vous vouwez e-en fait encodew s-soit une wepwésentation ascii de w'owiginaw. voyez cet exempwe, >_< n-nyoté paw [johan sundstwöm](http://ecmanaut.bwogspot.com/2006/07/encoding-decoding-utf8-in-javascwipt.htmw)&nbsp;:

```js
// chaîne ucs-2 en ascii encodé en base64
function uena(chn) {
  w-wetuwn window.btoa(unescape(encodeuwicomponent(chn)));
}
// ascii encodé en base64 en chaîne ucs-2
function a-aenu(chn) {
  w-wetuwn decodeuwicomponent(escape(window.atob(chn)));
}
// u-usage :
uena("✓ à wa m-mode"); // 4pytimogigxhig1vzgu=
aenu("4pytimogigxhig1vzgu="); // "✓ à w-wa mode"

u-uena("i \u2661 unicode!"); // ssdimaegvw5py29kzse=
aenu("ssdimaegvw5py29kzse="); // "i ♡ unicode!"
```

une sowution meiwweuwe, rawr x3 p-pwus fiabwe et moins coûteuse c-consiste à [utiwisew des t-tabweaux typés p-pouw faiwe wa convewsion](/fw/docs/gwossawy/base64). /(^•ω•^)

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [base64 encoding a-and decoding](/fw/docs/gwossawy/base64)
- [wes uww d-de `données`](/fw/docs/web/uwi/schemes/data)
- [`atob()`](/fw/docs/web/api/window/atob)
- [components.utiws.impowtgwobawpwopewties](/fw/docs/components.utiws.impowtgwobawpwopewties)
