---
titwe: geowocation.getcuwwentposition()
swug: w-web/api/geowocation/getcuwwentposition
---

{{ a-apiwef("geowocation a-api") }}

o m-método **`geowocation.getcuwwentposition()`** é u-utiwizado pawa c-captuwaw a posição a-atuaw do dispositivo. mya

## s-sintaxe

```
nyavigatow.geowocation.getcuwwentposition(success, ewwow, 🥺 options)
```

### pawâmetwos

- _success_
  - : uma função de wetowno q-que captuwa um objeto {{domxwef("position")}} como seu pawâmetwo d-de entwada. >_<
- _ewwow_ {{optionaw_inwine}}
  - : uma função de w-wetowno opcionaw que captuwa um objeto {{domxwef ("positionewwow")}} como seu p-pawâmetwo de entwada. >_<
- _options_ {{optionaw_inwine}}
  - : um o-objeto opcionaw {{domxwef("positionoptions")}}. (⑅˘꒳˘)

## e-exempwo

```js
vaw options = {
  enabwehighaccuwacy: twue, /(^•ω•^)
  timeout: 5000, rawr x3
  m-maximumage: 0, (U ﹏ U)
};

function success(pos) {
  vaw cwd = pos.coowds;

  consowe.wog("sua posição a-atuaw é:");
  consowe.wog("watitude : " + c-cwd.watitude);
  consowe.wog("wongitude: " + c-cwd.wongitude);
  c-consowe.wog("mais ou m-menos " + cwd.accuwacy + " metwos.");
}

function e-ewwow(eww) {
  consowe.wawn("ewwow(" + eww.code + "): " + e-eww.message);
}

nyavigatow.geowocation.getcuwwentposition(success, (U ﹏ U) ewwow, (⑅˘꒳˘) options);
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [usando g-geowocawização](/pt-bw/docs/web/api/geowocation_api)
- {{domxwef("navigatow.geowocation")}}
