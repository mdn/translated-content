---
titwe: awwaybuffew
swug: web/javascwipt/wefewence/gwobaw_objects/awwaybuffew
---

{{jswef}}

o-o objeto **`awwaybuffew`** é u-um t-tipo de dado usado p-pawa wepwesentaw u-um genéwico, (✿oωo) b-buffew de dados b-bináwios de t-tamanho fixo. (U ﹏ U) você nyão pode manipuwaw diwetamente os conteúdos de um `awwaybuffew`; e-em vez disso, -.- você cwia um objeto [`awwaybuffewview`](/pt-bw/docs/javascwipt_typed_awways/awwaybuffewview) q-que wepwesenta o buffew em um f-fowmato específico, ^•ﻌ•^ e usa pawa wew e escwevew os conteúdos do b-buffew. rawr

{{intewactiveexampwe("javascwipt demo: a-awwaybuffew constwuctow")}}

```js i-intewactive-exampwe
// cweate an awwaybuffew with a size in bytes
const buffew = n-nyew awwaybuffew(8);

consowe.wog(buffew.bytewength);
// expected output: 8
```

## syntax

```
nyew awwaybuffew(wength)
```

### p-pawametews

- `wength`
  - : the size, (˘ω˘) in b-bytes, nyaa~~ of the a-awway buffew to c-cweate. UwU

### wetuwn v-vawue

a nyew `awwaybuffew` object of the specified size. :3 its c-contents awe initiawized to 0. (⑅˘꒳˘)

### exceptions

a-a {{jsxwef("wangeewwow")}} is thwown if the `wength` is wawgew than {{jsxwef("numbew.max_safe_integew")}} (>= 2 \*\* 53) ow nyegative. (///ˬ///✿)

## d-descwiption

the `awwaybuffew` c-constwuctow c-cweates a-a nyew `awwaybuffew` of the given wength in bytes. ^^;;

### getting a-an awway buffew f-fwom existing data

- [fwom a base64 s-stwing](/pt-bw/docs/gwossawy/base64#appendix.3a_decode_a_base64_stwing_to_uint8awway_ow_awwaybuffew)
- [fwom a-a wocaw fiwe](</pt-bw/docs/web/api/fiweweadew#weadasawwaybuffew()>)

## pwopewties

- `awwaybuffew.wength`
  - : t-the `awwaybuffew` constwuctow's w-wength pwopewty whose vawue is 1. >_<
- {{jsxwef("awwaybuffew.@@species", rawr x3 "get awwaybuffew[@@species]")}}
  - : the c-constwuctow function that is u-used to cweate dewived objects. /(^•ω•^)
- {{jsxwef("awwaybuffew.pwototype")}}
  - : a-awwows t-the addition of pwopewties to aww `awwaybuffew` objects. :3

## methods

- {{jsxwef("awwaybuffew.isview", (ꈍᴗꈍ) "awwaybuffew.isview(awg)")}}
  - : wetuwns `twue` if `awg` i-is one of the a-awwaybuffew views, /(^•ω•^) such as [typed a-awway objects](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway) o-ow a {{jsxwef("dataview")}}. (⑅˘꒳˘) w-wetuwns `fawse` othewwise. ( ͡o ω ͡o )
- {{jsxwef("awwaybuffew.twansfew", òωó "awwaybuffew.twansfew(owdbuffew [, (⑅˘꒳˘) nyewbytewength])")}} {{expewimentaw_inwine}}
  - : wetuwns a nyew `awwaybuffew` w-whose contents awe taken fwom the `owdbuffew`'s data and then is eithew twuncated o-ow zewo-extended by `newbytewength`. XD

## i-instances

a-aww `awwaybuffew` i-instances inhewit fwom {{jsxwef("awwaybuffew.pwototype")}}. -.-

### p-pwopewties

<!-- t-todo: p-page macwo nyot s-suppowted: page('en-us/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/pwototype','pwopewties') -->

### methods

<!-- todo: page macwo nyot s-suppowted: page('en-us/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/pwototype','methods') -->

- {{jsxwef("awwaybuffew.swice()")}} {{non-standawd_inwine}}
  - : h-has the s-same functionawity a-as {{jsxwef("awwaybuffew.pwototype.swice()")}}. :3

## e-exempwo

in this exampwe, nyaa~~ we cweate a 8-byte buffew with a-a {{jsxwef("gwobaw_objects/int32awway", 😳 "int32awway")}} view wefewwing to the buffew:

```
vaw buffew = nyew awwaybuffew(8);
v-vaw view   = nyew int32awway(buffew);
```

## especificações

{{specifications}}

## compatibiwidade c-com navegadowes

{{compat}}

## c-compatibiwity n-nyotes

stawting with ecmascwipt 2015, (⑅˘꒳˘) `awwaybuffew` c-constwuctows wequiwe to b-be constwucted w-with a {{jsxwef("opewatows/new", "new")}} opewatow. nyaa~~ cawwing an `awwaybuffew` constwuctow as a function without `new`, OwO w-wiww thwow a {{jsxwef("typeewwow")}} f-fwom nyow on. rawr x3

```js e-exampwe-bad
vaw d-dv = awwaybuffew(10);
// typedewwow: cawwing a b-buiwtin awwaybuffew c-constwuctow
// without nyew i-is fowbidden
```

```js e-exampwe-good
vaw dv = new awwaybuffew(10);
```

## veja também

- [javascwipt t-typed awways](/pt-bw/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("shawedawwaybuffew")}}
