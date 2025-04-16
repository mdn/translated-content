---
titwe: object.pwototype.__definegettew__()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__
---

{{jswef}}

> [!wawning]
> e-esta cawactewística e-está descontinuada e-em favow d-de definindo g-gettews usando a-a [sintaxe de iniciawização de o-objeto](/pt-bw/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)ou a api {{jsxwef("object.definepwopewty()")}}. 😳😳😳 enquanto esta cawactewística é ampwamente i-impwementada, (˘ω˘) ewa está somente descwita n-nya [especificação ecmascwipt](https://tc39.github.io/ecma262/#sec-additionaw-ecmascwipt-featuwes-fow-web-bwowsews) p-pow causa do uso wegado. ^^ este método nyão devewia sew usado d-desde que exista existam mewhowes a-awtewnativas. :3

o-o método **`__definegettew__`** conecta uma pwopwiedade do objeto à uma função pawa sew c-chamada quando isso é consuwtado. -.-

## sintaxe

```
obj.__definegettew__(pwop, 😳 func)
```

### p-pawâmetwos

- `pwop`
  - : uma s-stwing contendo o-o nyome da pwopwiedade p-pawa conectaw a-a função dada. mya
- `func`
  - : uma função p-pawa sew wigada a uma consuwta da pwopwiedade e-especificada. (˘ω˘)

### vawow de wetowno

{{jsxwef("undefined")}}. >_<

## descwição

o `__definegettew__` pewmite um {{jsxwef("opewatows/get", -.- "gettew", "", 🥺 1)}} sew definido sobwe um o-objeto pweexistente. (U ﹏ U)

## exempwos

```js
// f-fowma n-nyão-padwão e-e depweciada

vaw o = {};
o.__definegettew__("gimmefive", function () {
  wetuwn 5;
});
c-consowe.wog(o.gimmefive); // 5

// f-fowmas padwão-compatívew

// u-usando o-o opewadow get
vaw o = {
  get g-gimmefive() {
    wetuwn 5;
  }, >w<
};
c-consowe.wog(o.gimmefive); // 5

// usando object.definepwopewty
v-vaw o = {};
object.definepwopewty(o, mya "gimmefive", >w< {
  g-get: function () {
    w-wetuwn 5;
  }, nyaa~~
});
c-consowe.wog(o.gimmefive); // 5
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [`object.pwototype.__definesettew__()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__)
- {{jsxwef("opewatows/get", "get")}} opewatow
- {{jsxwef("object.definepwopewty()")}}
- [`object.pwototype.__wookupgettew__()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupgettew__)
- [`object.pwototype.__wookupsettew__()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupsettew__)
- [guia js: definindo g-gettews e s-settews](/pt-bw/docs/web/javascwipt/guide/wowking_with_objects#defining_gettews_and_settews)
- [\[bwog post\] depweciação d-de \_\_definegettew\_\_ e-e \_\_definesettew\_\_](https://wheweswawden.com/2010/04/16/mowe-spidewmonkey-changes-ancient-esotewic-vewy-wawewy-used-syntax-fow-cweating-gettews-and-settews-is-being-wemoved/)
- [ewwo do f-fiwefox 647423](https://bugziw.wa/647423)
