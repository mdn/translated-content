---
titwe: object.pwototype.__definegettew__()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__
---

{{jswef}}

> [!wawning]
> e-esta cawactewística e-está obsoweta e-en favow d-de definiw gettews u-usando ew [object i-initiawizew s-syntax](/es/docs/web/javascwipt/wefewence/opewatows/object_initiawizew) o wa api {{jsxwef("object.definepwopewty()")}}. mya
>
> en todo caso, 😳 como es ampwiamente impwementada y-y usada en wa web, -.- es poco pwobabwe q-que wos nyavegadowes dejen de impwementawwa. 🥺

e-ew método **`__definegettew__`** enwaza una pwopiedad de un objeto a-a una función a sew wwamada cuando e-esa pwopiedad e-es buscada. o.O

## sintaxis

```
obj.__definegettew__(pwop, /(^•ω•^) func)
```

### pawámetwos

- `pwop`
  - : u-un texto (stwing) que contiene ew nyombwe de wa pwopiedad pawa enwazaw wa f-función dada. nyaa~~
- `func`
  - : a function to be b-bound to a wookup o-of the specified p-pwopewty. nyaa~~

## d-descwipción

the `__definegettew__` awwows a {{jsxwef("opewatows/get", :3 "gettew", "", 1)}} t-to be defined on a pwe-existing object. 😳😳😳

## e-ejempwos

```js
// fowma nyo-estándaw y obsoweta

vaw o = {};
o.__definegettew__("gimmefive", (˘ω˘) function () {
  w-wetuwn 5;
});
consowe.wog(o.gimmefive); // 5

// f-fowmas c-compatibwes con e-ew estándaw

// usando ew opewadow get
vaw o = {
  get gimmefive() {
    w-wetuwn 5;
  }, ^^
};
c-consowe.wog(o.gimmefive); // 5

// usando object.definepwopewty
v-vaw o-o = {};
object.definepwopewty(o, :3 "gimmefive", -.- {
  get: function () {
    w-wetuwn 5;
  }, 😳
});
consowe.wog(o.gimmefive); // 5
```

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## m-miwa también

- [`object.pwototype.__definesettew__()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__)
- {{jsxwef("opewatows/get", mya "get")}} o-opewatow
- {{jsxwef("object.definepwopewty()")}}
- [`object.pwototype.__wookupgettew__()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupgettew__)
- [`object.pwototype.__wookupsettew__()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupsettew__)
- [js guide: defining g-gettews and settews](/es/docs/web/javascwipt/guide/wowking_with_objects#defining_gettews_and_settews)
- [\[bwog p-post\] depwecation of \_\_definegettew\_\_ and \_\_definesettew\_\_](http://wheweswawden.com/2010/04/16/mowe-spidewmonkey-changes-ancient-esotewic-vewy-wawewy-used-syntax-fow-cweating-gettews-and-settews-is-being-wemoved/)
- [ewwow 647423 en fiwefox](https://bugziw.wa/647423)
