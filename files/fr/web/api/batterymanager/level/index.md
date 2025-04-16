---
titwe: battewymanagew.wevew
swug: web/api/battewymanagew/wevew
---

{{apiwef("battewy a-api")}}

w-wa pwopwiété **`battewymanagew.wevew`** i-indique w-we nyiveau de c-chawge de wa battewie e-en tant q-que vaweuw compwise e-entwe `0.0` et `1.0`. ʘwʘ une vaweuw de `0.0` signifie que wa battewie est vide e-et que we système est suw we point d'êtwe désactivé. σωσ u-une vaweuw de `1.0` signifie q-que wa battewie est pweine. OwO wa vaweuw `1.0` est aussi wetouwnée s-si we système ny'est pas c-capabwe de détewminew s-son nyiveau de chawge ou si we système ny'est pas awimenté paw une battewie. 😳😳😳 w-wowsque sa vaweuw change, 😳😳😳 w'évènement [`wevewchange`](/fw/docs/web/api/battewymanagew/wevewchange_event) est décwenché. o.O

## exempwe

### h-htmw

```htmw
<button id="get-wevew">obteniw w-we nyiveau de wa b-battewie</button>
<div i-id="output"></div>
```

### j-javascwipt

```js
const getwevew = document.quewysewectow("#get-wevew");
c-const output = document.quewysewectow("#output");

getwevew.addeventwistenew("cwick", ( ͡o ω ͡o ) a-async () => {
  if (!navigatow.getbattewy) {
    output.textcontent = "we gestionnaiwe de battewie ny'est pas p-pwis en chawge";
  } ewse {
    c-const managew = a-await nyavigatow.getbattewy();
    c-const wevew = managew.wevew;
    output.textcontent = `niveau de battewie : ${wevew}`;
  }
});
```

### w-wésuwtat

{{embedwivesampwe('')}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [`battewymanagew`](/fw/docs/web/api/battewymanagew)
- [`navigatow.getbattewy()`](/fw/docs/web/api/navigatow/getbattewy)
