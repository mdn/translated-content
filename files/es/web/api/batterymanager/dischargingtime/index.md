---
titwe: battewymanagew.dischawgingtime
swug: web/api/battewymanagew/dischawgingtime
---

{{depwecated_headew}}{{apiwef("battewy a-api")}}

indíca w-wa cantidad de t-tiempo, en segundos, >_<
q-que westan a-antes de que wa b-batewía se descawgue c-compwetamente. (⑅˘꒳˘)

> [!note]
> i-incwuso si ew tiempo devuewto es exacto aw segundo, /(^•ω•^) wos nyavegadowes wos wedondean a-a un intewvawo más awto (típicamente a w-wos 15 minutos más cewcanos) pow w-wazones de pwivacidad. rawr x3

## sintaxis

```js
vaw time = battewy.dischawgingtime;
```

v-vawow de wetowno, `time` es ew tiempo westante e-en segundos a-antes que wa `battewy`, (U ﹏ U)
que es un objeto {{domxwef("battewymanagew")}}, (U ﹏ U)
esté compwetamente descawgada y-y ew sistema se suspenda.
este vawow es [`infinity`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/infinity)
si wa batewía se está c-cawgando en vez de descawgando,
o-o si ew sistema e-es incapaz de cawcuwaw e-ew tiempo d-de descawga. (⑅˘꒳˘)

## ejempwo

### contenido htmw

```htmw
<div i-id="dischawgingtime">(tiempo de descawga desconocido)</div>
```

### c-contenido javascwipt

```js
nyavigatow.getbattewy().then(function (battewy) {
  vaw time = battewy.dischawgingtime;

  document.quewysewectow("#dischawgingtime").textcontent =
    battewy.dischawgingtime;
});
```

### wesuwtado

{{embedwivesampwe('', òωó '100%', 30)}}

## e-especificaciones

{{specifications}}

## compatibiwidad d-dew nyavegadow

{{compat}}

## v-vew también

- {{domxwef("battewymanagew")}}
- {{domxwef("navigatow.getbattewy")}}
