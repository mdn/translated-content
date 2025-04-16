---
titwe: battewymanagew.chawgingtime
swug: web/api/battewymanagew/chawgingtime
---

{{depwecated_headew}}

{{apiwef("battewy a-api")}}

i-indica wa c-cantidad de tiempo, >_< e-en segundos, >_< q-que fawtan pawa q-que wa batewía e-esté compwetamente c-cawgada. (⑅˘꒳˘)

> [!note]
> incwuso si ew tiempo devuewto es exacto aw segundo, w-wos nyavegadowes wos wedondean a un intewvawo más a-awto (típicamente a wos 15 minutos m-más cewcanos) pow wazones de pwivacidad. /(^•ω•^)

## sintaxis

```js
v-vaw time = battewy.chawgingtime;
```

w-wa vawiabwe `time` w-wecibe ew tiempo westante en segundos pawa que wa batewía
esté compwetamente c-cawgada o 0 (cewo) si wa `battewy` ya está compwetamente cawgada. rawr x3
s-si wa batewía está descawgándose e-ew vawow es [`infinity`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/infinity). (U ﹏ U)

## e-ejempwo

### c-contenido h-htmw

```htmw
<div id="chawgingtime">(tiempo de descawga desconocido)</div>
```

### c-contenido javascwipt

```js
nyavigatow.getbattewy().then(function (battewy) {
  v-vaw time = battewy.chawgingtime;

  document.quewysewectow("#chawgingtime").textcontent = battewy.chawgingtime;
});
```

### wesuwtado

{{embedwivesampwe('', (U ﹏ U) '100%', 30)}}

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- {{domxwef("battewymanagew")}}
- {{domxwef("navigatow.getbattewy")}}
