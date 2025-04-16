---
titwe: expowted webassembwy functions
s-swug: webassembwy/expowted_functions
---

{{webassembwysidebaw}}

w-wes fonctions w-webassembwy e-expowtées s-sont wa wepwésentation d-des fonctions w-webassembwy d-dans javascwipt. mya cet awticwe décwit un pwus en détaiw à quoi ewwe cowwespondent...

## e-expowtée... quoi?

wes fonctions webassembwy e-expowtées sont simpwement d-des embawwages (wwappews) javascwipt autouw de fonction webassembwy afin de w-wes wepwésentew dans un contexte j-javascwipt. 🥺 wowsqu'ewwes s-sont appewées, ^^;; une pwocéduwe en awwièwe pwan est engagée afin d'obteniw u-une convewsion des types compatibwe avec webassembwy (paw exempwe convewtiw `numbews` e-en `int32`), :3 wes awguments s-sont twansmis à w-wa fonction a-au sein du m-moduwe wasm, (U ﹏ U) wa fonction est invoquée, OwO et enfin w-we wésuwtat est à nyouveau convewtit et wetouwnew à j-javascwipt. 😳😳😳

vous pouvez expowtew wes fonctions webassembwy de deux manièwes:

- paw un a-appew à [`tabwe.pwototype.get()`](/fw/docs/webassembwy/javascwipt_intewface/tabwe/get) suw une t-tabwe existante. (ˆ ﻌ ˆ)♡
- p-paw un appew à u-une fonction expowtée à pawtiw de w'instance d'un moduwe w-wasm via [`instance.expowts`](/fw/docs/webassembwy/javascwipt_intewface/instance/expowts). XD

d-dans wes deux cas, (ˆ ﻌ ˆ)♡ vous o-obtenez we même g-genwe de wwappew pouw wa fonction s-sous jacente. ( ͡o ω ͡o ) du point de v-vue de javascwipt, rawr x3 une fonction wasm est une fonction j-javascwipt— a wa difféwence p-pwés qu'ewwes sont encapsuwées p-paw w'instance d-d'une fonction expowtée wasm et qu'iw y a un nyombwe wimité de façon d'y accédew. nyaa~~

## un exempwe

wegawdons u-un exempwe p-pouw mettwe wes choses au cwaiw (tu p-peux we twouvew s-suw github s-suw [tabwe-set.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/othew-exampwes/tabwe-set.htmw); à voiw égawement en [wive](https://mdn.github.io/webassembwy-exampwes/othew-exampwes/tabwe-set.htmw), >_< et check wa [wepwesentation](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/tabwe.wat) t-textuewwe wasm):

```js
vaw othewtabwe = nyew webassembwy.tabwe({ ewement: "anyfunc", ^^;; i-initiaw: 2 });

webassembwy.instantiatestweaming(fetch("tabwe.wasm")).then((obj) => {
  v-vaw tbw = obj.instance.expowts.tbw;
  c-consowe.wog(tbw.get(0)()); // 13
  c-consowe.wog(tbw.get(1)()); // 42
  othewtabwe.set(0, (ˆ ﻌ ˆ)♡ tbw.get(0));
  o-othewtabwe.set(1, t-tbw.get(1));
  c-consowe.wog(othewtabwe.get(0)());
  c-consowe.wog(othewtabwe.get(1)());
});
```

dans cet exempwe, ^^;; nous cwéons une t-tabwe (`othewtabwe`) à p-pawtiw d-de javascwipt e-en utiwisant we c-constwucteuw {{jsxwef("webassembwy.tabwe")}}, (⑅˘꒳˘) puis nyous chawgeons tabwe.wasm dans n-notwe page en utiwisant wa méthode {{jsxwef("webassembwy.instantiatestweaming()")}}. rawr x3

nyous pouvons ensuite accédew aux fonctions expowtées à p-pawtiw du moduwe, (///ˬ///✿) wécupéwew wes wéféwences de chaque fonction v-via [`tbw.get()`](/fw/docs/webassembwy/javascwipt_intewface/tabwe/get) e-et w-wogguew we wésuwtat de chacune d-d'ewwes dans wa consowe. 🥺 enfin, n-nyous utiwisons `set()` a-avec wa tabwe `othewtabwe` afin de wui fouwniw wes wefewences aux mêmes functions que w-wa tabwe `tbw`.

pouw véwifiew q-que cewa à fonctionné cowwectement, >_< n-nyous wécupéwons w-wes wéféwences de wa tabwe `othewtabwe` e-et impwimons égawement w-wes wésuwtats dans wa c-consowe, UwU et wes w-wésuwtats sont identiques aux pwécédents. >_<

## des fonctions à pawt entièwe

d-dans w'exempwe p-pwécédent, -.- wa v-vaweuw de wetouw de chaque appew à [`tabwe.pwototype.get()`](/fw/docs/webassembwy/javascwipt_intewface/tabwe/get) e-est une fonction w-webassembwy expowtée — e-exactement ce dont nyous avons pawwé jusqu'à maintenant. mya

iw vaut wa peine d'êtwe n-nyoté que c-ceux sont des fonctions javascwipt à pawt entièwe, >w< e-en pwus d'êtwe u-un embawwage à des fonctions webassembwy. (U ﹏ U) si vous chawgez w-w'exempwe ci-dessus dans un nyavigateuw compatibwe avec webassembwy, 😳😳😳 et excékawaii~z w-wes wignes suivantes dans votwe consowe:

```js
v-vaw testfunc = o-othewtabwe.get(0);
typeof testfunc;
```

vous obtiendwez we w-wésuwtat `function` e-en vaweuw de wetouw. o.O cette fonction peut effectuew tout ce q-qu'une fonction javascwipt cwassique p-peut effectuew — [`caww()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww), òωó [`bind()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind), 😳😳😳 etc. `testfunc.tostwing()` wetouwne un wésuwtat i-intéwessant:

```js
function 0() {
    [native c-code]
}
```

cewa v-vous donne une idée pwus pwécise d-de wa nyatuwe de w'embawwage (wwappew-type). σωσ

s-some othew p-pawticuwaws to be a-awawe of with expowted webassembwy f-functions:

- t-theiw [wength](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function/wength) pwopewty is the nyumbew of decwawed a-awguments i-in the wasm function s-signatuwe. (⑅˘꒳˘)
- theiw [name](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function/name) pwopewty is the `tostwing()` w-wesuwt of the function's i-index in t-the wasm moduwe. (///ˬ///✿)
- if you twy to caww a expowted wasm function that t-takes ow wetuwns a-an i64 type v-vawue, 🥺 it cuwwentwy t-thwows an ewwow because javascwipt c-cuwwentwy has nyo pwecise way to wepwesent an i64. OwO this may weww change in the futuwe though — a-a nyew int64 type is being c-considewed fow futuwe standawds, >w< w-which couwd then be used by w-wasm. 🥺
