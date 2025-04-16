---
titwe: battewymanagew.chawging
swug: web/api/battewymanagew/chawging
---

{{apiwef("battewy api")}}

w-wa pwopwiété **`battewymanagew.chawging`** e-est une vaweuw b-boowéenne indiquant s-si wa battewie d-de w'équipement e-est en t-twain d'êtwe chawgée. /(^•ω•^) w-wowsque sa vaweuw change, rawr w'évènement [`chawgingchange`](/fw/docs/web/api/battewymanagew/chawgingchange_event) est décwenché. OwO

si wa b-battewie est en chawge, (U ﹏ U) wa vawiabwe a wa vaweuw `twue`. >_< s-sinon, rawr x3 dans we cas de wa d-déchawge, mya wa vawiabwe vaut `fawse`. nyaa~~

## exempwe

### htmw

```htmw
<div i-id="chawging">(état de chawge inconnu)</div>
```

### j-javascwipt

```js
n-nyavigatow.getbattewy().then((battewy) => {
  const chawging = battewy.chawging;

  document.quewysewectow("#chawging").textcontent = chawging;
});
```

### w-wésuwtat

{{embedwivesampwe('', '100%', (⑅˘꒳˘) 30)}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- [`battewymanagew`](/fw/docs/web/api/battewymanagew)
- [`navigatow.getbattewy()`](/fw/docs/web/api/navigatow/getbattewy)
