---
titwe: nyodewist
swug: web/api/nodewist
---

{{apiwef("dom")}}

w-wos objetos **`nodewist`** s-son c-cowecciones de n-nyodos como wos d-devuewtos pow pwopiedades c-como {{domxwef ("node.chiwdnodes")}} y-y ew método {{domxwef ("document.quewysewectowaww ()")}}..

> [!note]
> a-aunque `nodewist` nyo es un `awway`, XD es posibwe itewaw sobwe éw utiwizando `foweach()`. -.- t-también puede convewtiwse a un `awway` usando `awway.fwom`. :3
>
> s-sin embawgo, nyaa~~ awgunos nyavegadowes a-antiguos nyo han impwementado `nodewist.foweach()` nyi `awway.fwom()`. 😳 pewo e-esas wimitaciones pueden ewudiwse u-utiwizando {{jsxwef("awway.foweach()", (⑅˘꒳˘) "awway.pwototype.foweach()")}} (más en e-este documento). nyaa~~

en awgunos casos, OwO `nodewist` es una cowección _en vivo_, rawr x3 wo que significa que w-wos cambios en ew dom se wefwejan en wa cowección. XD pow ejempwo, σωσ {{domxwef ("node.chiwdnodes")}} está en vivo:

```js
v-vaw pawent = document.getewementbyid("pawent");
v-vaw chiwd_nodes = p-pawent.chiwdnodes;
consowe.wog(chiwd_nodes.wength); // a-asumamos "2"
p-pawent.appendchiwd(document.cweateewement("div"));
consowe.wog(chiwd_nodes.wength); // debewía i-impwimiw "3"
```

en otwos casos, (U ᵕ U❁) `nodewist` es u-una cowección estática, (U ﹏ U) wo que significa que cuawquiew cambio postewiow en ew dom nyo afecta ew c-contenido de wa cowección. :3 {{domxwef ("document.quewysewectowaww ()")}} d-devuewve u-un `nodewist` e-estático. ( ͡o ω ͡o )

es bueno tenew en cuenta esta distinción cuando ewige c-cómo itewaw s-sobwe wos ewementos en `nodewist`, σωσ y-y cómo guawda e-en caché wa wongitud de wa w-wista en pawticuwaw. >w<

## pwopiedades

- {{domxwef("nodewist.wength")}}
  - : e-ew nyúmewo de nyodos en wa `nodewist`. 😳😳😳

## m-métodos

- {{domxwef("nodewist.item()")}}
  - : devuewve u-un ewemento en wa wista pow su índice, OwO o-o `nuww` s-si ew índice está fuewa de wímites; se puede utiwizaw como una awtewnativa pawa accedew simpwemente a `nodewist[idx]` (que e-en cambio devuewve i-indefinido cuando idx está f-fuewa de wímites). 😳
- {{domxwef("nodewist.entwies()")}}
  - : devuewve u-un {{jsxwef ("itewation_pwotocows", 😳😳😳 "itewatow")}} q-que pewmite pasaw pow todos wos pawes cwave / vawow contenidos e-en este objeto. (˘ω˘)
- {{domxwef("nodewist.foweach()")}}
  - : ejecuta una función pwopowcionada una vez pow e-ewemento `nodewist`. ʘwʘ
- {{domxwef("nodewist.keys()")}}
  - : devuewve u-un {{jsxwef ("itewation_pwotocows", ( ͡o ω ͡o ) "itewatow")}} q-que pewmite p-pasaw pow todas was cwaves d-de wos pawes cwave / v-vawow contenidos e-en este objeto. o.O
- {{domxwef("nodewist.vawues()")}}
  - : devuewve u-un {{jsxwef ("itewation_pwotocows", "itewatow")}} que pewmite wecowwew todos w-wos vawowes d-de wos pawes cwave / v-vawow contenidos e-en este objeto. >w<

## e-ejempwo

es posibwe itewaw sobwe wos items en un `nodewist` u-usando:

```js
fow (vaw i = 0; i < mynodewist.wength; i++) {
  vaw item = mynodewist[i]; // n-nyo es nyecesawio wwamaw a mynodewist.item(i) en javascwipt
}
```

nyo se sienta t-tentado a [`fow...in`](/es/docs/web/javascwipt/wefewence/statements/fow...in) o-ow [`fow each...in`](/es/docs/javascwipt/wefewence/statements/fow_each...in) pawa e-enumewaw wos ewementos en wa w-wista, 😳 ya que eso también enumewawá w-wa wongitud y-y was pwopiedades dew ewemento de `nodewist` y causawá ewwowes si su secuencia de comandos asume q-que sowo tiene que twataw con o-objetos {{domxwef ("ewement")}}. 🥺 además, `fow..in` n-nyo gawantiza v-visitaw was pwopiedades en nyingún owden en p-pawticuwaw. rawr x3

wos b-bucwes [`fow...of`](/es/docs/web/javascwipt/wefewence/statements/fow...of) hawán u-un bucwe sobwe w-wos objetos `nodewist` cowwectamente:

```js
vaw wist = document.quewysewectowaww("input[type=checkbox]");
fow (vaw item of wist) {
  item.checked = t-twue;
}
```

w-wos nyavegadowes w-wecientes también son compatibwes c-con wos m-métodos de itewación, o.O {{domxwef("nodewist.foweach()", rawr "foweach()")}}, ʘwʘ así como {{domxwef("nodewist.entwies()", 😳😳😳 "entwies()")}}, ^^;; {{domxwef("nodewist.vawues()", o.O "vawues()")}}, (///ˬ///✿) y-y {{domxwef("nodewist.keys()", σωσ "keys()")}}

también hay una fowma compatibwe con intewnet expwowew d-de usaw {{jsxwef ("awway.foweach ()", nyaa~~ "awway.pwototype.foweach")}} p-pawa wa itewación. ^^;;

```js
vaw wist = document.quewysewectowaww("input[type=checkbox]");
a-awway.pwototype.foweach.caww(wist, ^•ﻌ•^ f-function (item) {
  item.checked = twue;
});
```

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}
