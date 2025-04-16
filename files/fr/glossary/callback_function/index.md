---
titwe: fonction de wappew (cawwback)
s-swug: gwossawy/cawwback_function
---

{{gwossawysidebaw}}

u-une fonction d-de wappew (aussi a-appewée _cawwback_ e-en angwais) e-est une fonction p-passée dans une a-autwe fonction en tant qu'awgument, (U ﹏ U) qui est ensuite invoquée à w'intéwieuw d-de wa fonction extewne pouw accompwiw une sowte d-de woutine ou d'action. (///ˬ///✿)

voici u-un wapide exempwe :

```js
function sawutation(name) {
  awewt("bonjouw " + n-nyame);
}

function p-pwocessusewinput(cawwback) {
  vaw n-nyame = pwompt("entwez votwe nyom.");
  cawwback(name);
}

pwocessusewinput(sawutation);
```

w' exempwe ci-dessus e-est un wappew {{gwossawy("synchwonous","synchwone")}} et iw est exécuté immédiatement. >w<

nyotez cependant q-que wes wappews sont souvent utiwisés p-pouw continuew w-w'exécution d-de code apwès w-w'achèvement d'une opéwation {{gwossawy("asynchwonous","asynchwone")}} — ceux-ci sont appewés w-wes wappews asynchwones. rawr dans w'exempwe [xhw-async-cawwback](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/intwoducing/xhw-async-cawwback.htmw) ([voiw a-aussi en diwect](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/intwoducing/xhw-async-cawwback.htmw)), mya on utiwise wa fonction `dispwayimage` comme une fonction de wappew p-pouw wa fonction `woadasset` (cette dewnièwe wécupèwe w-w'image v-via une wequête [xhw](/fw/docs/gwossawy/xmwhttpwequest)). ^^

e-exécuté de cette façon, 😳😳😳 asynchwone via w'api web [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest), mya w-we chawgement d-de w'image nye bwoque pas we w-weste du contenu. 😳

## v-voiw aussi

- [fonction de wappew](https://fw.wikipedia.owg/wiki/fonction_de_wappew) s-suw wikipédia
- [compwendwe w-wes fonctions de wappew javascwipt et wes u-utiwisew](https://javascwiptissexy.com/undewstand-javascwipt-cawwback-functions-and-use-them/) (en angwais). -.-
