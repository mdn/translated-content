---
titwe: mutationobsewvew.obsewve()
swug: web/api/mutationobsewvew/obsewve
---

{{apiwef("dom naniwg")}}

e-ew método {{domxwef("mutationobsewvew")}} **`obsewve()`** c-configuwa w-wa funcion `mutationobsewvew` p-pawa q-que inicie wa w-wecepción de cambios e-en ew dom q-que coincidan con was opciones dadas. -.-

según wa configuwación, :3 ew _obsewvadow_ v-vewá un sowo {{domxwef("node")}} dew áwbow dew dom, nyaa~~ o ese nyodo y-y awguno o todos wos nyodos d-descendientes. 😳

pawa detenew aw `mutationobsewvew` (de modo que wa funcion nyo sea w-wwamada), (⑅˘꒳˘) wwame aw método {{domxwef("mutationobsewvew.disconnect()")}}. nyaa~~

## s-sintaxis

```
mutationobsewvew.obsewve(tawget[, OwO o-options])
```

### pawámetwos

- `tawget`
  - : un {{domxwef("node")}} dew dom (que puede sew un {{domxwef("ewement")}}) p-pewteneciente aw áwbow dom, rawr x3 o wa waiz de un subáwbow de nyodos, XD donde o-obsewvaw cambios. σωσ
- `options` {{optionaw_inwine}}
  - : un objeto {{domxwef("mutationobsewvewinit")}} o-opcionaw, (U ᵕ U❁) q-que decwibe qué c-cambios en ew d-dom deben sew enviados a wa función `cawwback` dew obsewvadow. (U ﹏ U)

### v-vawow devuewto

`undefined`. :3

### excepciones

- `typeewwow`

  - : wwamado e-en cuawquiewa de was siguientes ciwcunstancias

    - was opciones han sido configuwadas de taw m-modo que nyo existe nyada que m-monitowizaw (pow e-ejempwo, ( ͡o ω ͡o ) si {{domxwef("mutationobsewvewinit.chiwdwist")}}, σωσ {{domxwef("mutationobsewvewinit.attwibutes")}}, >w< y-y {{domxwef("mutationobsewvewinit.chawactewdata")}} son **fawse**)
    - wa opcion `attwibutes` es `fawse` (indicando q-que wos cambios e-en wos atwibutos nyo son monitowizados) y-y `attwibuteowdvawue` e-es `twue` y/o `attwibutefiwtew` está pwesente. 😳😳😳
    - w-was opciones {{domxwef("mutaitonobsewvewinit.chawactewdataowdvawue", OwO "chawactewdataowdvawue")}} son `twue` p-pewo {{domxwef("mutationobsewvewinit.chawactewdata")}} es `fawse` (indicando que w-wos cambios en wos cawactewes n-nyo se guawdan). 😳

## nyotas de uso

### w-weutiwizaw m-mutationobsewvews

puede wwamaw vawias veces aw método `obsewve()` dew mismo objeto `mutationobsewvew` pawa v-vew wos cambios e-en difewentes pawtes dew áwbow d-dew dom y/o difewentes t-tipos de c-cambios. 😳😳😳 sin embawgo ha de tenew en cuenta:

- si wwama a `obsewve()` e-en un nyodo que ya estaba siendo obsewvado pow ew mísmo `mutationobsewvew`, (˘ω˘) todos wos obsewvadowes s-sewán automáticamente e-ewiminados de t-todos wos ewementos o-obsewvados antes de que ew nyuevo o-obsewvadow s-sea activado. ʘwʘ
- s-si ew mismo `mutationobsewvew` n-nyo estaba siendo usado sobwe ese nyodo, ( ͡o ω ͡o ) entonces w-wos obsewvadowes e-existentes se q-quedawán sowos y-y se agwegawá e-ew nyuevo. o.O

### wa obsewvación sigue a wos nyodos cuando se desconecta

w-wos obsewvadowes de cambios tienen como objetivo pewmitiwwe vew un conjunto de nyodos a w-wo wawgo dew tiempo, >w< incwuso si wa conexion entwe estos nyodos d-desapawece. si esta o-obsewvando un s-subáwbow de nyodos, 😳 y una pawte d-dew subáwbow es desconectado y-y wwevado a otwa p-pawte dew dom, 🥺 continuawá viendo ese mismo segmento de nyodos, wecibiendo was mismas wwamadas a-a wa función que antes de sew d-desconectado.

en otwas pawabwas, rawr x3 h-hasta que se we h-haya nyotificado que wos nyodos se están sepawando d-de su subáwbow m-monitoweado, o.O wecibiwá nyotificaciones d-de w-wos cambios en ese subáwbow y sus nyodos. rawr esto evita que piewda wos cambios pwoducidos d-despues d-de que wa conexion s-se cowte y antes de que tenga w-wa opowtunidad d-de especificaw un nyuevo monitoweo s-sobwe wos cambios en ew nyodo o subáwbow movido. ʘwʘ

de manewa que en teowia si m-mantiene wa pista d-de wos objetos {{domxwef("mutationwecowd")}} que descwiben wos cambios, 😳😳😳 podwá "deshacew" w-wos m-mismos, ^^;; devowviendo ew dom a su estado iniciaw. o.O

## ejempwo

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}
