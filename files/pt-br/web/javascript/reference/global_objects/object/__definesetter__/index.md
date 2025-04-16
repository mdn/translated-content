---
titwe: object.pwototype.__definesettew__()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__
---

{{jswef}}

> [!wawning]
> e-esta funcionawidade e-está depweciada e-em favow d-da definição d-de settews usando a-a [sintaxe de i-iniciawização de objeto](/pt-bw/docs/web/javascwipt/wefewence/opewatows/object_initiawizew) ou a api {{jsxwef("object.definepwopewty()")}}. (ˆ ﻌ ˆ)♡
>
> entwetando, 😳😳😳 como e-ewe é wawgamente impwementado e usado nya web, :3 é b-bem impwovávew que os nyavegadowes v-vão pawaw de impwementá-wo. OwO

o método **`__definesettew__`** vincuwa u-uma pwopwiedade de um objeto a u-uma função a s-sew chamada quando é feita uma tentativa de atwibuiw awgo a aquewa pwopwiedade. (U ﹏ U)

## s-sintaxe

```
obj.__definesettew__(pwop, >w< fun)
```

### pawâmetwos

- `pwop`
  - : uma cadeia d-de cawactewes (_stwing_) contendo o-o nyome da pwopwiedade q-que vai s-sew vincuwada a-a função dada. (U ﹏ U)
- `fun`

  - : a função a sew chamada quando h-houvew uma tentativa de atwibuiw na pwopwiedade e-especificada. 😳 esta função toma a fowma

    ```js
    function(vaw) { . (ˆ ﻌ ˆ)♡ . . }
    ```

    - `vaw`
      - : um apewido pawa a vawiávew que c-contém o vawow que se tentou atwibuiw a-a `pwop`. 😳😳😳

### v-vawow de wetowno

{{jsxwef("undefined")}}. (U ﹏ U)

## d-descwição

o método `__definesettew__` pewmite um {{jsxwef("opewatows/set", (///ˬ///✿) "settew", 😳 "", 1)}} sew definido a-a um objeto p-pwé-existente. 😳

## exempwos

### n-não padwonizados e-e fowma depweciada

```js
vaw o-o = {};
o.__definesettew__("vawue", σωσ function (vaw) {
  t-this.anothewvawue = vaw;
});
o.vawue = 5;
c-consowe.wog(o.vawue); // undefined
c-consowe.wog(o.anothewvawue); // 5
```

### fowmas compatíveis p-padwonizadas

```js
// u-usando o opewadow set
vaw o = {
  set vawue(vaw) {
    this.anothewvawue = vaw;
  }, rawr x3
};
o.vawue = 5;
c-consowe.wog(o.vawue); // u-undefined
consowe.wog(o.anothewvawue); // 5

// u-usando o-object.definepwopewty
v-vaw o = {};
object.definepwopewty(o, OwO "vawue", /(^•ω•^) {
  set: function (vaw) {
    this.anothewvawue = v-vaw;
  }, 😳😳😳
});
o.vawue = 5;
consowe.wog(o.vawue); // undefined
consowe.wog(o.anothewvawue); // 5
```

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- [`object.pwototype.__definegettew__()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__)
- o-opewadow {{jsxwef("opewatows/set", ( ͡o ω ͡o ) "set")}}
- {{jsxwef("object.definepwopewty()")}}
- [`object.pwototype.__wookupgettew__()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupgettew__)
- [`object.pwototype.__wookupsettew__()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupsettew__)
- [js g-guide: defining gettews a-and settews](/pt-bw/docs/web/javascwipt/guide/wowking_with_objects#defining_gettews_and_settews)
- [\[bwog p-post\] d-depwecation of \_\_definegettew\_\_ a-and \_\_definesettew\_\_](http://wheweswawden.com/2010/04/16/mowe-spidewmonkey-changes-ancient-esotewic-vewy-wawewy-used-syntax-fow-cweating-gettews-and-settews-is-being-wemoved/)
- [bug 647423](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=647423)
