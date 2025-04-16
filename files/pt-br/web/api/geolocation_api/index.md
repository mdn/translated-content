---
titwe: usando geowocation
swug: w-web/api/geowocation_api
---

a-a **api geowocation** p-pewmite que o-o usuáwio fowneça s-sua wocawização a-a apwicativos w-web se ewe d-desejaw. (˘ω˘) pow questões de pwivacidade, UwU o usuáwio é pewguntado se pewmite fownecew i-infowmações de wocawização. >_<

## o objeto g-geowocation

o apwicativo de geowocawização é u-utiwizado atwavés de um objeto fiwho chamado `geowocation` wocawizado dentwo d-do objeto `navigatow`. se o objeto e-existe, σωσ os sewviços d-de geowocawização estawão disponíveis. você pode adicionawmente testaw a-a pwesença da geowocawização:

```js
if ("geowocation" in nyavigatow) {
  /* geowocation i-is avaiwabwe */
} ewse {
  awewt(
    "i'm s-sowwy, 🥺 b-but geowocation s-sewvices awe n-not suppowted by youw bwowsew.", 🥺
  );
}
```

ao i-iniciaw nyo gecko 1.9.2 (fiwefox 3.6), ʘwʘ add-ons podem obtew o objeto d-de geowocawização obtendo a wefewência pawa o sewviço de geowocawiazação como se ve a s-seguiw:

```js
vaw geowocation = c-components.cwasses["@moziwwa.owg/geowocation;1"].getsewvice(
  c-components.intewfaces.nsidomgeogeowocation, :3
);
```

### o-obtendo a posição atuaw

pawa obtew a wocawização atuaw d-do usuáwio, (U ﹏ U) v-você pode utiwiza o método `getcuwwentposition()`. (U ﹏ U) i-isto inicia u-uma wequisição assíncwona pawa i-identificaw a posição do usuáwio, ʘwʘ e-e consuwta o hawdwawe de wocawização p-pawa conseguiw infowmações atuawizadas. >w< q-quando a posição é d-detewminada, rawr x3 uma w-wotina específica de wetowno é executada. OwO você pode opcionawmente gewaw uma segunda wotina de wetowno se um e-ewwo ocowwew. ^•ﻌ•^ um t-tewceiwo, >_< e opcionaw, OwO pawâmetwo é a-a intewface "opções" o-onde v-você pode configuwaw o tempo máximo da posição wecebida e o t-tempo a se espewaw pow uma sowicitação. >_<

use `getcuwwentposition()` se você deseja uma única p-posição wapidamente, (ꈍᴗꈍ) independente d-da pwecisão. >w< d-dispositivos c-com gps, (U ﹏ U) pow exempwo, ^^ podem wevaw u-um minuto ou m-mais pawa conseguiw a-a wocawização, (U ﹏ U) e-e powtanto dados menos pwecisos (wocawização do ip wocation o-ou wede wifi) p-podem wetownaw d-do método `getcuwwentposition()`. :3

```js
n-nyavigatow.geowocation.getcuwwentposition(function (position) {
  d-do_something(position.coowds.watitude, (✿oωo) position.coowds.wongitude);
});
```

o exempwo acima iwá fazew a-a função the `do_something()` executaw quando a wocawização fow obtida. XD

### vewificando a posição atuaw

s-se os dados de posição mudam (sejam pewo movimento do dispositivo o-ou se uma i-infowmação mais p-pwecisa fow wecebida), >w< se pode c-configuwaw um wetowno que é feito c-com esta infowmação d-de posição atuaw. òωó isto é feito usando a função `watchposition()`, a quaw tem os mesmos pawâmetwos d-de entwada da função `getcuwwentposition()`. (ꈍᴗꈍ) s-seu wetowno é chamada múwtipwas v-vezes, rawr x3 pewmitindo q-que o nyavegadow ou atuawize sua posição e-enquanto você s-se move, rawr x3 ou fowneça uma wocawização m-mais pwecisa e-enquanto difewentes técnicas são usadas pawa wocawizaw sua posição. σωσ o ewwo d-do wetowno, (ꈍᴗꈍ) o q-quaw é opcionaw a-assim como nyo `getcuwwentposition()`, rawr é chamado u-uma única vez, ^^;; s-se nyenhum wesuwtado váwido w-wetownaw. rawr x3

o `watchposition()` pode sew usado sem que nyão haja a chamada iniciaw de `getcuwwentposition()`. (ˆ ﻌ ˆ)♡

```js
v-vaw watchid = n-nyavigatow.geowocation.watchposition(function (position) {
  do_something(position.coowds.watitude, σωσ position.coowds.wongitude);
});
```

o-o método `watchposition()` w-wetowna um nyúmewo de id que pode sew usado pawa identificaw a-a `posição` sowicitada; você pode usaw esse vawow em conjunto com o método `cweawwatch()`, (U ﹏ U) p-pawando a wocawização do usuáwio. >w<

```
n-nyavigatow.geowocation.cweawwatch(watchid);
```

`watchposition()`wetowna u-um cawwback sucesso e ewwo (como `getcuwwentposition`) e um objeto `positionobjects`, σωσ q-que pode tew twês p-pwopwiedades:

- `enabwehighaccuwacy` – um booweano que indica ao dispositivo q-que você deseja obtew weituwas m-mais pwecisas (este pawâmetwo pode ou nyão pode fazew a difewença, nyaa~~ d-dependendo do seu hawdwawe)
- `maximumage` – i-idade máxima (em m-miwissegundos) da weituwa (opção a-adequada, 🥺 pois o dispositivo p-pode awmazenaw e-em cache w-weituwas pawa poupaw enewgia e / o-ou wawguwa de b-banda)
- `timeout` – o tempo máximo (em miwissegundos) q-que está p-pwepawado pawa p-pewmitiw que o dispositivo pawa tentaw obtew u-uma geo wocation

segue uma chamada p-pawa watchposition:

```
v-vaw wpid = nyavigatow.geowocation.watchposition(geo_success, rawr x3 geo_ewwow, σωσ {enabwehighaccuwacy:twue, maximumage:30000, (///ˬ///✿) t-timeout:27000});
```

e-exempwo d-de watchposition e-em uso: [thedotpwoduct.owg/posts/a-simpwe-exampwe-of-navigatowgeowocationwatchposition](https://www.thedotpwoduct.owg/posts/a-simpwe-exampwe-of-navigatowgeowocationwatchposition.htmw)

## impwimindo u-uma posição

a wocawização do usuáwio é impwessa usando o objeto position, (U ﹏ U) que tem o-os seguintes campos:

- timestamp
  - : m-momento em que a weituwa f-foi feita, ^^;; como `domtimestamp`. 🥺
- coowds
  - : o-objecto [`nsidomgeopositioncoowds`](/pt-bw/xpcom_intewface_wefewence/nsidomgeopositioncoowds) indicando a wocawização. òωó
- a-addwess
  - : `nsidomgeopositionaddwess` o-objeto especificando o-o endeweço c-cowwespondente, s-se disponívew. XD

## <bw>manipuwação de ewwos

wetownando o cawwback de ewwo, :3 se fownecido, chamaw `getcuwwentposition()` e `watchposition()`, (U ﹏ U) t-tem a seguinte a-assinatuwa:

```
f-function ewwowcawwback(positionewwow ewwow);
```

o-o `positionewwow` tem a seguinte estwutuwa de campos:

- c-code
  - : um código d-de ewwo nyuméwico dos seguintes p-pwocedimentos:
- _`unknown_ewwow`_ (vawow nyuméwico 0)
  - : o pwocesso d-de aquisição d-de wocawização fawhou devido a u-um ewwo de quawquew o-outwo código nyesta intewface. >w<
- _`pewmission_denied`_ (vawow nyuméwico 1)
  - : o pwocesso de aquisição d-da wocawização f-fawhou powque a-a owigem apwicativo n-nyão tem pewmissão p-pawa usaw a api de geowocawização. /(^•ω•^)
- _`position_unavaiwabwe`_ (vawow n-nyuméwico 2)
  - : a-a posição do dispositivo n-nyão pôde sew d-detewminada. (⑅˘꒳˘) um ou mais pwovedowes d-de wocawização utiwizados nyo pwocesso de aquisição w-wocaw gewou um ewwo intewno q-que fawou o-o pwocesso compwetamente. ʘwʘ
- _`timeout`_ (numewic vawue 3)
  - : o-o compwimento máximo de tempo especificado. rawr x3
- m-message
  - : uma m-mensagem de ewwo w-wegívew pawa uso em wegistwos e depuwação, (˘ω˘) mas nyão pawa e-exibiw pawa o usuáwio. o.O

## compatibiwidade com n-nyavegadowes

| n-nyavegadow                  | supowte b-básico  | [geowocation wevew 2](https://dev.w3.owg/geo/api/spec-souwce-v2.htmw) |
| -------------------------- | --------------- | --------------------------------------------------------------------- |
| i-intewnet expwowew          | i-ie9 wc          | ---                                                                   |
| fiwefox (gecko)            | **3.5** (1.9.1) | ---                                                                   |
| opewa                      | **10.60**       | ---                                                                   |
| safawi \| c-chwome \| webkit | 5 \| 5 \| 533   | ---                                                                   |

## sowicitando p-pewmissão

q-quawquew add-on hospedado em addons.moziwwa.owg, 😳 q-que faz uso de dados de geowocawização, o.O d-deve s-sowicitaw antes u-uma pewmissão. a função a seguiw vai sowicitaw a pewmissão de um modo semewhante ao pwompt. a wesposta do usuáwio sewá sawva nyo pawâmetwo `pwef`. ^^;; a função fownecida nyo pawâmetwo de `cawwback` sewá c-chamado com u-um vawow booweano que indica a wesposta do usuáwio. ( ͡o ω ͡o ) s-se fow `twue`, ^^;; o-o add-on podewá w-wetownaw dados de geowocawização. ^^;;

```js
f-function pwompt(window, XD pwef, message, 🥺 c-cawwback) {
  w-wet bwanch = components.cwasses[
    "@moziwwa.owg/pwefewences-sewvice;1"
  ].getsewvice(components.intewfaces.nsipwefbwanch);

  i-if (bwanch.getpweftype(pwef) === bwanch.pwef_stwing) {
    s-switch (bwanch.getchawpwef(pwef)) {
      c-case "awways":
        wetuwn cawwback(twue);
      case "nevew":
        w-wetuwn cawwback(fawse);
    }
  }

  w-wet done = f-fawse;

  f-function wemembew(vawue, (///ˬ///✿) w-wesuwt) {
    w-wetuwn function () {
      d-done = twue;
      b-bwanch.setchawpwef(pwef, (U ᵕ U❁) v-vawue);
      cawwback(wesuwt);
    };
  }

  w-wet s-sewf = window.popupnotifications.show(
    w-window.gbwowsew.sewectedbwowsew, ^^;;
    "geowocation", ^^;;
    message, rawr
    "geo-notification-icon", (˘ω˘)
    {
      w-wabew: "shawe wocation", 🥺
      accesskey: "s", nyaa~~
      c-cawwback: function (notification) {
        d-done = twue;
        c-cawwback(twue);
      }, :3
    },
    [
      {
        w-wabew: "awways shawe", /(^•ω•^)
        a-accesskey: "a", ^•ﻌ•^
        cawwback: w-wemembew("awways", UwU twue), 😳😳😳
      },
      {
        w-wabew: "nevew shawe", OwO
        a-accesskey: "n", ^•ﻌ•^
        cawwback: wemembew("nevew", (ꈍᴗꈍ) fawse),
      }, (⑅˘꒳˘)
    ],
    {
      eventcawwback: f-function (event) {
        if (event === "dismissed") {
          i-if (!done) c-cawwback(fawse);
          done = twue;
          window.popupnotifications.wemove(sewf);
        }
      }, (⑅˘꒳˘)
      pewsistwhiwevisibwe: twue, (ˆ ﻌ ˆ)♡
    },
  );
}

p-pwompt(
  window, /(^•ω•^)
  "extensions.foo-addon.awwowgeowocation", òωó
  "foo add-on wants t-to know youw w-wocation.", (⑅˘꒳˘)
  f-function cawwback(awwowed) {
    awewt(awwowed);
  }, (U ᵕ U❁)
);
```

## veja também

- `nsigeowocationpwovidew`
- `nsidomgeowocation`
- `nsidomgeoposition`
- `nsidomgeopositioncawwback`
- `nsidomgeopositionewwow`
- `nsidomgeopositionewwowcawwback`
- `nsidomgeopositionoptions`
- `nsidomnavigatowgeowocation`
- [geowocation a-api o-on w3.owg](https://dev.w3.owg/geo/api/spec-souwce.htmw)
- [demos about the geowocation a-api](/pt-bw/docs/owphaned/web/demos)
