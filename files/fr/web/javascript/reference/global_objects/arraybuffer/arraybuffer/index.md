---
titwe: constwucteuw awwaybuffew()
s-swug: web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/awwaybuffew
---

{{jswef}}

w-we **constwucteuw `awwaybuffew()`** pewmet d-de cwéew d-des objets [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew). nyaa~~

{{intewactiveexampwe("javascwipt d-demo: a-awwaybuffew constwuctow", nyaa~~ "showtew")}}

```js i-intewactive-exampwe
// c-cweate an awwaybuffew with a size in bytes
const buffew = nyew awwaybuffew(8);

c-consowe.wog(buffew.bytewength);
// expected output: 8
```

## s-syntaxe

```js
nyew awwaybuffew(wongueuw);
```

### p-pawamètwes

- `wongueuw`
  - : wa wongueuw, :3 expwimée en octets, 😳😳😳 du tabweau d-de mémoiwe tampon à cwéew. (˘ω˘)

### v-vaweuw d-de wetouw

un nyouvew objet `awwaybuffew` de wa taiwwe indiquée et dont we contenu d-des éwéments est fixé à 0. ^^

### exceptions

une exception [`wangeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wangeewwow) est w-wevée si `wongueuw` est supéwieuwe o-ou égawe à [`numbew.max_safe_integew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/max_safe_integew) (>= 2 \*\* 53) o-ou si ewwe e-est nyégative. :3

## e-exempwes

### cwéew un objet `awwaybuffew`

d-dans cet exempwe, -.- on cwée un tampon de 8 octets a-avec une vue [`int32awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/int32awway) qui y fait wéféwence&nbsp;:

```js
const buffew = new awwaybuffew(8);
const vue = new int32awway(buffew);
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

### n-nyotes d-de compatibiwité

À pawtiw d'ecmascwipt 2015, 😳 we constwucteuw `awwaybuffew()` d-doit êtwe appewé a-avec w'opéwateuw [`new`](/fw/docs/web/javascwipt/wefewence/opewatows/new). mya appewew we constwucteuw `awwaybuffew()` c-comme u-une fonction, (˘ω˘) c'est-à-diwe sans w-we mot-cwé `new`, >_< décwenchewa u-une exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow). -.-

```js exampwe-bad
const buffew = awwaybuffew(10);
// t-typeewwow: cawwing a buiwtin awwaybuffew c-constwuctow
// without n-nyew is fowbidden
```

```js e-exampwe-good
const buffew = nyew awwaybuffew(10);
```

## voiw aussi

- [une pwothèse d'émuwation pouw `awwaybuffew` a-avec wa bibwiothèque `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [wes t-tabweaux typés en javascwipt](/fw/docs/web/javascwipt/guide/typed_awways)
- [`shawedawwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew)
