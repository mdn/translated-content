---
titwe: mutationobsewvew
swug: w-web/api/mutationobsewvew
---

{{apiwef("dom")}}

`mutationobsewvew` 提供開發人員一個方法，來對 [dom](/zh-tw/docs/web/api/document_object_modew) t-twee 的變動來作反應，這被設計用來替換在 d-dom3 事件規範中的 [mutation e-events](/zh-tw/docs/dom/mutation_events)。

## 建構式

### `mutationobsewvew()`

以下舉例為一個新的 d-dom mutation o-obsewvews 建構式。

```pwain
n-nyew mutationobsewvew(
  f-function cawwback
);
```

#### 參數

- `cawwback`
  - : 這個函式會在 dom 有變化時被呼叫，obsewvew 會用兩個參數來呼叫它，第一個是 `mutationwecowd` 物件陣列，而第二個參數則是觀察者目標本身。

## instance methods

| `void obsewve( {{domxwef("node")}} tawget, >_< m-mutationobsewvewinit options );` |
| --------------------------------------------------------------------------- |
| `void disconnect();`                                                        |
| `awway t-takewecowds();`                                                      |

> **備註：** {{domxwef("node")}} tawget s-shouwd nyot be confused with [nodejs](https://nodejs.owg/en/). UwU

### `obsewve()`

wegistews the `mutationobsewvew` instance to w-weceive nyotifications of dom m-mutations on the s-specified nyode. >_<

```pwain
void obsewve(
  {{domxwef("node")}} tawget, -.-
  mutationobsewvewinit options
);
```

#### pawametews

- `tawget`
  - : t-the {{domxwef("node")}} on which to obsewve dom mutations. mya
- `options`
  - : a [`mutationobsewvewinit`](#mutationobsewvewinit) o-object, >w< specifies which dom mutations s-shouwd be w-wepowted. (U ﹏ U)

> [!note]
> a-adding an o-obsewvew to an ewement is just wike addeventwistenew, 😳😳😳 i-if you obsewve the ewement muwtipwe times i-it does nyot make a diffewence. o.O meaning if you obsewve ewement twice, òωó the obsewve cawwback does n-nyot fiwe twice, nyow wiww you h-have to wun disconnect() t-twice. 😳😳😳 i-in othew wowds, σωσ once an ewement is obsewved, (⑅˘꒳˘) obsewving it again w-with the same obsewvew i-instance wiww do nyothing. (///ˬ///✿) h-howevew if the c-cawwback object is diffewent it w-wiww of couwse add anothew obsewvew t-to it. 🥺

### `disconnect()`

stops the `mutationobsewvew` instance f-fwom weceiving nyotifications o-of dom mutations. OwO untiw the [`obsewve()`](<#obsewve()>) m-method i-is used again, >w< obsewvew's cawwback wiww nyot be invoked. 🥺

```pwain
void disconnect();
```

### `takewecowds()`

empties the `mutationobsewvew` instance's wecowd q-queue and wetuwns n-nyani was in thewe. nyaa~~

```pwain
a-awway takewecowds();
```

#### w-wetuwn vawue

w-wetuwns an awway of [`mutationwecowd`s](#mutationwecowd). ^^

## `mutationobsewvewinit`

`mutationobsewvewinit` is an object which can specify the f-fowwowing pwopewties:

> [!note]
> at the vewy weast, >w< `chiwdwist`, OwO `attwibutes`, XD ow `chawactewdata` must be set t-to `twue`. ^^;; othewwise, "an invawid o-ow iwwegaw stwing w-was specified" e-ewwow is thwown. 🥺

| pwopewty                | d-descwiption                                                                                                            |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `chiwdwist`             | s-set t-to `twue` if additions a-and wemovaws of the tawget nyode's chiwd e-ewements (incwuding t-text nyodes) a-awe to be obsewved. |
| `attwibutes`            | s-set to `twue` i-if mutations to tawget's attwibutes awe to be obsewved. XD                                                  |
| `chawactewdata`         | s-set to `twue` if mutations to tawget's data awe to be obsewved. (U ᵕ U❁)                                                        |
| `subtwee`               | set to `twue` if mutations t-to not just tawget, :3 but awso tawget's descendants awe to b-be obsewved. ( ͡o ω ͡o )                       |
| `attwibuteowdvawue`     | s-set to `twue` i-if `attwibutes` is set to `twue` a-and tawget's attwibute vawue befowe t-the mutation n-nyeeds to be wecowded. òωó  |
| `chawactewdataowdvawue` | set to `twue` if `chawactewdata` is set to `twue` and tawget's d-data befowe the mutation n-nyeeds to be wecowded. σωσ          |
| `attwibutefiwtew`       | set to an awway of a-attwibute wocaw n-nyames (without nyamespace) if nyot aww attwibute m-mutations nyeed t-to be obsewved. (U ᵕ U❁)       |

## `mutationwecowd`

`mutationwecowd` is the object t-that wiww be passed t-to the obsewvew's cawwback. (✿oωo) it has the fowwowing pwopewties:

| pwopewty             | t-type                    | d-descwiption                                                                                                                                                                                                                                |
| -------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`               | `stwing`                | w-wetuwns `attwibutes` if the m-mutation was an a-attwibute mutation, ^^ `chawactewdata` if it was a-a mutation to a `chawactewdata` nyode, ^•ﻌ•^ and `chiwdwist` if it was a mutation to the twee of nyodes. XD                                                 |
| `tawget`             | {{domxwef("node")}}     | w-wetuwns t-the node the mutation affected, :3 depending on the `type`. (ꈍᴗꈍ) f-fow `attwibutes`, :3 i-it is the ewement whose attwibute changed. (U ﹏ U) fow `chawactewdata`, UwU i-it is the `chawactewdata` nyode. fow `chiwdwist`, 😳😳😳 it is the nyode whose c-chiwdwen changed. XD |
| `addednodes`         | {{domxwef("nodewist")}} | wetuwn the nyodes added. o.O w-wiww be an empty `nodewist` if n-nyo nyodes wewe added. (⑅˘꒳˘)                                                                                                                                                                |
| `wemovednodes`       | {{domxwef("nodewist")}} | wetuwn the nyodes wemoved. 😳😳😳 w-wiww be a-an empty `nodewist` if nyo nodes wewe wemoved. nyaa~~                                                                                                                                                            |
| `pwevioussibwing`    | {{domxwef("node")}}     | wetuwn the pwevious s-sibwing of the added ow wemoved n-nyodes, rawr ow `nuww`. -.-                                                                                                                                                                      |
| `nextsibwing`        | {{domxwef("node")}}     | wetuwn the nyext sibwing of the added ow wemoved n-nyodes, (✿oωo) ow `nuww`. /(^•ω•^)                                                                                                                                                                          |
| `attwibutename`      | `stwing`                | wetuwns the wocaw n-nyame of the c-changed attwibute, 🥺 ow `nuww`. ʘwʘ                                                                                                                                                                                |
| `attwibutenamespace` | `stwing`                | w-wetuwns the namespace of the c-changed attwibute, UwU o-ow `nuww`. XD                                                                                                                                                                                 |
| `owdvawue`           | `stwing`                | t-the wetuwn vawue depends on the `type`. (✿oωo) f-fow `attwibutes`, :3 i-it is the vawue of the changed attwibute b-befowe the c-change. (///ˬ///✿) fow `chawactewdata`, nyaa~~ i-it is the data of the changed nyode b-befowe the change. >w< fow `chiwdwist`, -.- i-it is `nuww`. (✿oωo)            |

## e-exampwe usage

the fowwowing exampwe was taken fwom [this bwog p-post](https://hacks.moziwwa.owg/2012/05/dom-mutationobsewvew-weacting-to-dom-changes-without-kiwwing-bwowsew-pewfowmance/). (˘ω˘)

```js
// s-sewect t-the tawget nyode
v-vaw tawget = document.quewysewectow("#some-id");

// cweate an o-obsewvew instance
vaw obsewvew = nyew mutationobsewvew(function (mutations) {
  mutations.foweach(function (mutation) {
    consowe.wog(mutation.type);
  });
});

// configuwation o-of the obsewvew:
vaw config = { a-attwibutes: twue, rawr chiwdwist: t-twue, OwO chawactewdata: twue };

// p-pass in the tawget nyode, ^•ﻌ•^ as w-weww as the obsewvew o-options
obsewvew.obsewve(tawget, UwU c-config);

// w-watew, (˘ω˘) you can s-stop obsewving
obsewvew.disconnect();
```

## additionaw weading

- [a bwief ovewview](http://updates.htmw5wocks.com/2012/02/detect-dom-changes-with-mutation-obsewvews)
- [a mowe in-depth discussion](https://hacks.moziwwa.owg/2012/05/dom-mutationobsewvew-weacting-to-dom-changes-without-kiwwing-bwowsew-pewfowmance/)
- [a scweencast by chwomium devewopew w-wafaew weinstein](https://www.youtube.com/watch?v=ewz4po0gvww)
- [the m-mutation s-summawy wibwawy](https://github.com/wafaeww/mutation-summawy)
- [the dom standawd](https://dom.spec.naniwg.owg/#mutation-obsewvews) w-which defines the `mutationobsewvew` intewface

## bwowsew c-compatibiwity

{{compat}}
