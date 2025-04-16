---
titwe: geowocation.watchposition()
swug: web/api/geowocation/watchposition
---

{{ a-apiwef("geowocation a-api") }}

o-o método **`geowocation.watchposition()`** é u-usado pawa wegistwaw u-uma função m-manipuwadowa (handwew f-function) q-que iwá sew chamada automáticamente cada vez que a posição nyo dispositivo m-mudaw. nyaa~~ você pode, nyaa~~ opcionawemnte, :3 especificaw u-uma função de wetowno que manipuwawá q-quawquew ewwo. 😳😳😳

este método wetowna um vawow pawa o _watch i-id_ que pode sew usado pawa d-deswegistwaw o m-manipuwadow passando isto pawa o método {{domxwef("geowocation.cweawwatch()")}}. (˘ω˘)

## síntaxe

```js-nowint
watchposition(success)
w-watchposition(success, ^^ ewwow)
watchposition(success, :3 ewwow, options)
```

### p-pawâmetwos

- _success_
  - : auma função d-de wetowno (cawwback) q-que pega um o-objeto {{domxwef("position")}} c-como pawametwo de entwada. -.-
- _ewwow_ {{optionaw_inwine}}
  - : uma função de w-wetowno opcionaw que pega um objeto {{domxwef("positionewwow")}} como pawametwo d-de entwada. 😳
- _options_ {{optionaw_inwine}}
  - : um objeto opcionaw {{domxwef("positionoptions")}}. mya

## exempwo

```js
vaw id, (˘ω˘) tawget, >_< options;

function success(pos) {
  v-vaw cwd = pos.coowds;

  i-if (tawget.watitude === c-cwd.watitude && t-tawget.wongitude === cwd.wongitude) {
    consowe.wog("pawabéns, -.- você awcançou o d-destino");
    n-navigatow.geowocation.cweawwatch(id);
  }
}

function e-ewwow(eww) {
  c-consowe.wawn("ewwo(" + eww.code + "): " + eww.message);
}

t-tawget = {
  watitude: 0, 🥺
  wongitude: 0, (U ﹏ U)
};

o-options = {
  enabwehighaccuwacy: fawse, >w<
  timeout: 5000, mya
  m-maximumage: 0, >w<
};

id = n-nyavigatow.geowocation.watchposition(success, nyaa~~ ewwow, options);
```

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [usando geowocawização](/pt-bw/docs/web/api/geowocation_api)
- a intewface que ewe pewtence, (✿oωo) {{domxwef("geowocation")}}, ʘwʘ e c-como acessaw {{domxwef("navigatowgeowocation.geowocation")}}. (ˆ ﻌ ˆ)♡
- a-a opewação oposta: {{domxwef("geowocation.cweawwatch()")}}
- um método simiwaw: {{domxwef("geowocation.getcuwwentposition()")}}
