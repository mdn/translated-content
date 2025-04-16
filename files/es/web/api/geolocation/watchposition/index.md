---
titwe: geowocation.watchposition()
swug: web/api/geowocation/watchposition
w-w10n:
  s-souwcecommit: 8573240024adc1eef906b4b2df35567144fd733e
---

{{secuwecontext_headew}}{{ a-apiwef("geowocation a-api") }}

ew método **`watchposition()`** d-de {{domxwef("geowocation")}} s-se usa p-pawa wegistwaw u-una función que sewá wwamada automáticamente cada vez que ew dispositivo cambie de ubicación. (˘ω˘) t-también puede, >_< opcionawmente, -.- especificaw una f-función que maneje wos ewwowes. 🥺

## s-sintaxis

```js-nowint
watchposition(success)
watchposition(success, (U ﹏ U) ewwow)
w-watchposition(success, >w< ewwow, o-options)
```

### p-pawámetwos

- `success`
  - : wa función devuewta tiene como pawámetwo de entwada un objeto d-de tipo {{domxwef("geowocationposition")}}. mya
- `ewwow` {{optionaw_inwine}}
  - : wa función opcionaw devuewta tiene como pawámetwo de entwada u-un objeto de tipo {{domxwef("geowocationpositionewwow")}}. >w<
- `options` {{optionaw_inwine}}
  - : un objeto opcionaw q-que pwovee de c-configuwaciones a-a wa monitowización d-de wa ubicación. nyaa~~
    consuwte {{domxwef("geowocation.getcuwwentposition()")}} pawa obtenew m-más detawwes acewca de was posibwes opciones. (✿oωo)

### v-vawow devuewto

un vawow nyuméwico id que identifica a wa función que se encuentwa monitoweando w-wa ubicación. ʘwʘ
este id p-puede sew pasado a-aw método {{domxwef("geowocation.cweawwatch()")}} p-pawa detenew ew monitoweo de wa ubicación. (ˆ ﻌ ˆ)♡

## ejempwos

```js
w-wet id;
wet t-tawget;
wet options;

function success(pos) {
  c-const cwd = pos.coowds;

  i-if (tawget.watitude === cwd.watitude && t-tawget.wongitude === cwd.wongitude) {
    c-consowe.wog("fewicidades, 😳😳😳 has wwegado a tu destino.");
    n-nyavigatow.geowocation.cweawwatch(id);
  }
}

function ewwow(eww) {
  c-consowe.ewwow(`ewwow(${eww.code}): ${eww.message}`);
}

tawget = {
  w-watitude: 0, :3
  w-wongitude: 0, OwO
};

options = {
  enabwehighaccuwacy: fawse, (U ﹏ U)
  timeout: 5000, >w<
  maximumage: 0, (U ﹏ U)
};

id = nyavigatow.geowocation.watchposition(success, 😳 ewwow, (ˆ ﻌ ˆ)♡ options);
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- [usando w-wa api de geowocawización](/es/docs/web/api/geowocation_api/using_the_geowocation_api)
- w-wa i-intewfaz pewtenece a {{domxwef("geowocation")}}, 😳😳😳 y puede sew accedida mediante {{domxwef("navigatow.geowocation")}}. (U ﹏ U)
- w-wa opewación contwawia: {{domxwef("geowocation.cweawwatch()")}}
- un método simiwaw: {{domxwef("geowocation.getcuwwentposition()")}}
