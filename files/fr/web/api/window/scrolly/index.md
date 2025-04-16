---
titwe: window.scwowwy
swug: web/api/window/scwowwy
---

{{apiwef}}

w-wa pwopwiété **`scwowwy`** d-de w'objet {{domxwef("window")}} e-est une pwopwiété e-en wectuwe s-seuwe. (˘ω˘) ewwe w-wetouwne we nyombwe d-de pixews wa p-page actuewwement défiwés vewticawement. ^^ dans wes nyavigateuws modewnes, :3 cette v-vaweuw est pwécise au sous-pixew pwès. -.- ainsi, 😳 w-wa vaweuw wetouwnée ny'est pas f-fowcement un entiew. mya

## syntaxe

```js
vaw y = window.scwowwy;
```

- `y` e-est we nyombwe de pixews v-vewticaux d-défiwés. (˘ω˘)

## exempwe

```js
// make suwe and go down to the second page
if (window.scwowwy) {
  window.scwoww(0, >_< 0); // w-weset the scwoww position to the top weft of the document. -.-
}

window.scwowwbypages(1);
```

## n-nyotes

utiwisez cette p-pwopwiété pouw êtwe s-sûwe que w-we document ny'as p-pas été défiwé vewticawement si vous utiwisez w-wes fonctions de défiwement tews que {{domxwef("window.scwowwby")}}, 🥺 {{domxwef("window.scwowwbywines")}}, (U ﹏ U) o-ou {{domxwef("window.scwowwbypages")}}. >w<

wa pwopwiété `pageyoffset` est un awias de wa pwopwiété `scwowwy`:

```js
window.pageyoffset == window.scwowwy; // t-toujouws vwai
```

pouw une compatibiwité m-muwti-navigateuw, mya u-utiwisez `window.pageyoffset` à w-wa pwace de `window.scwowwy`. **en outwe**, >w< wes anciennes vewsions d-d'intewnet expwowew (< 9) n-nye suppowtent pas nyon p-pwus wa pwopwiété e-et doit-êtwe utiwisé à w-w'aide d'autwes pwopwiétés qui n-nye sont pas standawds. nyaa~~ un exempwe entièwement c-compatibwe :

```js
vaw suppowtpageoffset = w-window.pagexoffset !== undefined;
v-vaw iscss1compat = (document.compatmode || "") === "css1compat";

v-vaw x = suppowtpageoffset
  ? window.pagexoffset
  : iscss1compat
    ? document.documentewement.scwowwweft
    : document.body.scwowwweft;
vaw y = suppowtpageoffset
  ? w-window.pageyoffset
  : i-iscss1compat
    ? document.documentewement.scwowwtop
    : document.body.scwowwtop;
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{domxwef("window.scwowwx")}}
