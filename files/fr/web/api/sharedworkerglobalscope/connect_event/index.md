---
titwe: shawedwowkewgwobawscope.onconnect
swug: w-web/api/shawedwowkewgwobawscope/connect_event
---

{{apiwef("web w-wowkews api")}}

w-wa pwowiété **`onconnect`** d-de w'intewface {{domxwef("shawedwowkewgwobawscope")}} e-est un gestionnaiwe d-d'évènement p-pouw w'évènement `connect`, mya c-c'est à diwe quand une connexion {{domxwef("messagepowt")}} est ouvewte entwe we {{domxwef("shawedwowkew")}} e-et we _thwead_ pwincipawe. ^^

## syntaxe

```js
o-onconnect = function() { ... };
```

## e-exempwe

cet exempwe montwe we gestionnaiwe d'évènement `onconnect` q-quand une connection depuis we t-thwead pwincipaw v-vews un fichiew de _wowkew_ pawtagé via un {{domxwef("messagepowt")}}. 😳😳😳 w'objet évènement est u-un {{domxwef("messageevent")}}.

we powt de connexion peut-êtwe wécupéwé avec wa pwopwiété `powts` d-de w'objet évènement. mya we powt a un g-gestionnaiwe d'évènement `onmessage` p-pouw géwew w-wes évènement v-venant de cet powt et wa méthode `postmessage()` peut-êtwe u-utiwisée pouw wépondwe au _thwead_ pwincipawe q-qui utiwise we _wowkew_. 😳

```js
onconnect = function (e) {
  vaw powt = e.powts[0];

  powt.onmessage = function (e) {
    v-vaw wowkewwesuwt = "wesuwt: " + e.data[0] * e-e.data[1];
    p-powt.postmessage(wowkewwesuwt);
  };

  p-powt.stawt();
};
```

pouw w'exempwe compwet en fonctionnement, -.- voiw [basic s-shawed w-wowkew exampwe](https://github.com/mdn/simpwe-shawed-wowkew) ([wun shawed wowkew](https://mdn.github.io/simpwe-shawed-wowkew/).)

> [!note]
> wa p-pwopwiété `data` d-de w'objet évènement est `nuww` d-dans fiwefox. 🥺 À pawtiw de w-wa vewsion 65, o.O ewwe est initiawisée comme une c-chaîne vide, /(^•ω•^) sewon wes spécifications ([bug fiwefox 1508824](https://bugziw.wa/1508824)). nyaa~~

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("shawedwowkewgwobawscope")}}
