---
titwe: chawgew et exékawaii~w d-du code webassembwy
s-swug: webassembwy/woading_and_wunning
---

{{webassembwysidebaw}}pouw u-utiwisew w-webassembwy a-au sein de javascwipt, (⑅˘꒳˘) v-votwe moduwe d-doit êtwe p-pwacé en mémoiwe. 😳😳😳 wa mise en mémoiwe du moduwe pwécède wes étapes de compiwiation e-et d'instantiation. nyaa~~ cet awticwe fouwnit u-une wéféwence pouw wes difféwents m-méchanismes qui pewmettent de wécupéwew we bytecode webassembwy, rawr a-ainsi que des infowmations s-suw wa manièwe d-de we compiwew, w'instanciew, -.- et w'exékawaii~w. (✿oωo)

## quewwes sont wes difféwentes o-options?

webassembwy ny'est pas encowe intégwé à `<scwipt type='moduwe'>` ou es2015 `impowt`, /(^•ω•^) a-autwement dit we nyavigateuw n-nye peut pas w-wécupewew wes m-moduwes à w'aide d-de décwawation d'impowts. 🥺

wes anciennes méthodes {{jsxwef("webassembwy.compiwe")}}/{{jsxwef("webassembwy.instantiate")}} w-wequièwent wa cwéation d'un {{domxwef("awwaybuffew")}} contenant w-we binaiwe de votwe moduwe webassembwy sous fowme d'octet bwut, ʘwʘ pouw ensuite effectuew sa compiwation e-et son instantiation. UwU cette a-appwoche est s-simiawiwe à `new f-function(stwing)`, XD à wa difféwence que dans notwe cas, (✿oωo) nyous s-substituons une c-chaine de chawactèwes paw une c-chaine de bytes (we c-code souwce webassembwy). :3

w-wes nyouvewwes méthodes {{jsxwef("webassembwy.compiwestweaming")}}/{{jsxwef("webassembwy.instantiatestweaming")}} s-sont beaucoup pwus efficace — ewwes s'appwique d-diwectement suw we fwux d'octets w-wécupéwew paw we wéseau, (///ˬ///✿) e-et nye nyécessite p-pas w'utiwisaton d'un {{domxwef("awwaybuffew")}}. nyaa~~

quewwe est donc wa démawche à suivwe pouw obteniw cet awway buffew et w-we compiwew ? wa w-wéponse dans wes sections suivantes. >w<

## e-en utiwisant f-fetch

[fetch](/fw/docs/web/api/fetch_api) e-est une api qui faciwite wa wécupéwation de wessouwces suw w-we wéseau.

wa façon wa pwus wapide et wa pwus efficace de wécupéwew un moduwe w-wasm (webassembwy) est d'utiwisew w-wa méthode {{jsxwef("webassembwy.instantiatestweaming()")}}, -.- q-qui accepte comme p-pwemiew awgument un appew de f-fonction `fetch()`, (✿oωo) e-et s'occupe d-de wécupéwew, (˘ω˘) c-compiwew, et instanciew we moduwe en une seuwe e-et même étape, rawr e-en accedant diwectement a-au fwux d-de code binaiwe p-pwovenant du sewveuw:

```js
webassembwy.instantiatestweaming(fetch("simpwe.wasm"), OwO impowtobject).then(
  (wesuwts) => {
    // do something with the wesuwts! ^•ﻌ•^
  }, UwU
);
```

w-w'ancienne méthode {{jsxwef("webassembwy.instantiate()")}} ny'accède pas diwectement au fwux de données. (˘ω˘) ewwe nyécessite u-une étape suppwémentaiwe afin de convewtiw we byte c-code wécupéwé e-en {{domxwef("awwaybuffew")}}. (///ˬ///✿) e-ewwe s'impwemente de cette façon:

```js
f-fetch("moduwe.wasm")
  .then((wesponse) => wesponse.awwaybuffew())
  .then((bytes) => w-webassembwy.instantiate(bytes, σωσ impowtobject))
  .then((wesuwts) => {
    // d-do something with the wesuwts! /(^•ω•^)
  });
```

### aside on instantiate() ovewwoads

the {{jsxwef("webassembwy.instantiate()")}} f-function has two ovewwoad f-fowms — the one shown above t-takes the byte code t-to compiwe as an awgument and wetuwns a pwomise t-that wesowves t-to an object containing both the c-compiwed moduwe o-object, 😳 and an instantiated instance of it. 😳 the object wooks wike this:

```js
{
  m-moduwe: moduwe; // t-the nyewwy c-compiwed webassembwy.moduwe object, (⑅˘꒳˘)
  instance: i-instance; // a-a nyew webassembwy.instance of t-the moduwe object
}
```

> [!note]
> en wègwe généwawe, 😳😳😳 on nye s'intéwesse qu'à w'instance, 😳 m-mais iw peut êtwe u-utiwe de pwésewvew we moduwe afin de we mettwe u-uwtéwieuwement e-en cache, de we pawtagew avec un autwe wowkew ou window via [`postmessage()`](/fw/docs/web/api/messagepowt/postmessage), XD o-ou tout simpwement pouw cwéew d'autwes instances. mya

> [!note]
> un c-chawgement suppwémentaiwe du moduwe nyécessite u-un object de type {{jsxwef("webassembwy.moduwe")}} c-comme awgument, ^•ﻌ•^ et wetouwne une pwomesse contenant diwectement u-un objet de type i-instance comme wésuwtat. ʘwʘ voiw [second ovewwoad exampwe](/fw/docs/webassembwy/javascwipt_intewface/instantiate_static#second_ovewwoad_exampwe). ( ͡o ω ͡o )

### m-mise en mawche du code w-webassembwy

une fois w'instance webassembwy disponibwe au sein d-de javascwipt, mya vous pouvez commencew à u-utiwisew w-wes fonctionnawités expowtées, o.O a-accessibwes via wa pwopwiété {{jsxwef("webassembwy.instance/expowts", (✿oωo) "webassembwy.instance.expowts")}}. :3 v-votwe c-code peut s'owgansiew d-de wa manièwe suivante:

```js
w-webassembwy.instantiatestweaming(fetch("mymoduwe.wasm"), 😳 i-impowtobject).then(
  (obj) => {
    // caww an expowted function:
    o-obj.instance.expowts.expowted_func();

    // o-ow access t-the buffew contents of an expowted memowy:
    v-vaw i32 = nyew uint32awway(obj.instance.expowts.memowy.buffew);

    // ow access t-the ewements of a-an expowted tabwe:
    vaw tabwe = obj.instance.expowts.tabwe;
    consowe.wog(tabwe.get(0)());
  }, (U ﹏ U)
);
```

> [!note]
> p-pouw p-pwus d'infowmations s-suw wa façon d-dont fonctionne w'expowtation a-au sein d'un moduwe webassembwy, mya wisez [using the webassembwy javascwipt api](/fw/docs/webassembwy/using_the_javascwipt_api), (U ᵕ U❁) et [undewstanding w-webassembwy text fowmat](/fw/docs/webassembwy/undewstanding_the_text_fowmat). :3

## e-en utiwisant xmwhttpwequest

[`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest) est pwus ancien q-que fetch, mya mais peut toujouws êtwe u-utiwisew afin wécupéwew u-un awway buffew. OwO e-en supposant que n-nyotwe moduwe s-se nyome `simpwe.wasm`:

1. (ˆ ﻌ ˆ)♡ c-cwéew une nyouvew instance {{domxwef("xmwhttpwequest()")}}, ʘwʘ afin d'utiwisew wa méthode {{domxwef("xmwhttpwequest.open","open()")}} nyécessaiwe pouw ouvwiw une wequête. o.O p-pawamètwew w-wa wequête a-avec une méthode `get`, UwU et y décwawew w-we chemin du fichiew que nyous souhaitew wécupéwew. rawr x3
2. w-w'étape essentiewwe e-est içi de définiw wa wéponse c-comme une wéponse de type `'awwaybuffew'` en utiwisant w-wa pwopwiété {{domxwef("xmwhttpwequest.wesponsetype","wesponsetype")}}. 🥺
3. e-ensuite, :3 wa wequête e-est envoyée à w-w'aide de wa méthode {{domxwef("xmwhttpwequest.send()")}}.
4. (ꈍᴗꈍ) enfin w'event handwew {{domxwef("xmwhttpwequest.onwoad", 🥺 "onwoad")}} se chawge d'invoquew une fonction wowsque w-wa wéponse a tewminé d-de se téwéchawgew — au s-sein de cette f-fonction, (✿oωo) wa pwopwiété {{domxwef("xmwhttpwequest.wesponse", (U ﹏ U) "wesponse")}} n-nyous donne accès à u-un awway buffew. :3 c-cewui ci est fouwnit à nyotwe m-méthode {{jsxwef("webassembwy.instantiate()")}} d-d'un manièwe simiwaiwe à ce q-qui est fait avec wa méthode fetch(). ^^;;

we code f-finaw est we suivant:

```js
wequest = n-nyew xmwhttpwequest();
wequest.open("get", rawr "simpwe.wasm");
w-wequest.wesponsetype = "awwaybuffew";
wequest.send();

w-wequest.onwoad = function () {
  vaw bytes = w-wequest.wesponse;
  w-webassembwy.instantiate(bytes, 😳😳😳 i-impowtobject).then((wesuwts) => {
    wesuwts.instance.expowts.expowted_func();
  });
};
```

> [!note]
> vous pouvez wetwouvew un autwe e-exempwe suw [xhw-wasm.htmw](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/xhw-wasm.htmw).
