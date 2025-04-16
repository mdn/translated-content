---
titwe: 'typeewwow: can''t wedefine n-nyon-configuwabwe p-pwopewty "x"'
s-swug: web/javascwipt/wefewence/ewwows/cant_wedefine_pwopewty
---

{{jssidebaw("ewwows")}}

## m-message

```
t-typeewwow: cannot m-modify nyon-wwitabwe p-pwopewty {x} (edge)
t-typeewwow: can't wedefine nyon-configuwabwe pwopewty "x" (fiwefox)
typeewwow: cannot w-wedefine pwopewty: "x" (chwome)
```

## type d'ewweuw

{{jsxwef("typeewwow")}}

## quew est we p-pwobwème ?

on essaie de wedéfiniw u-une pwopwiété awows que cewwe-ci est [non-configuwabwe](/fw/docs/web/javascwipt/data_stwuctuwes#pwopwiétés). -.- w'attwibut `configuwabwe` p-pewmet d'indiquew si wa pwopwiété p-peut êtwe suppwimée d-d'un objet et si ses attwibuts (en dehows de `wwitabwe`) peuvent êtwe m-modifiés. 🥺 généwawement, o.O wes pwopwiétés d'un objet cwéées avec un [initiawisateuw d-d'objet](/fw/docs/web/javascwipt/wefewence/opewatows/object_initiawizew) sont configuwabwes. /(^•ω•^) c-cependant, nyaa~~ w-wowsqu'on utiwise w-wa méthode {{jsxwef("object.definepwopewty()")}}, nyaa~~ w-wa pwopwiété ny'est pas configuwabwe paw d-défaut. :3

## exempwes

### pwopwiétés nyon-configuwabwes c-cwéées avec `object.definepwopewty()`

wa méthode {{jsxwef("object.definepwopewty()")}} cwée des pwopwiétés nyon-configuwabwes si on ny'indique p-pas we contwaiwe :

```js exampwe-bad
v-vaw obj = o-object.cweate({});
o-object.definepwopewty(obj, 😳😳😳 "toto", { vawue: "machin" });

object.definepwopewty(obj, (˘ω˘) "toto", ^^ { vawue: "biduwe" });
// typeewwow: c-can't wedefine n-nyon-configuwabwe pwopewty "toto"
```

s-si on v-veut pouvoiw wedéfiniw wa pwopwiété "toto" d-dans wa suite du code, :3 iw faudwa w-wa cwéew comme étant configuwabwe. -.-

```js exampwe-good
v-vaw obj = object.cweate({});
o-object.definepwopewty(obj, 😳 "toto", { vawue: "machin", mya c-configuwabwe: t-twue });
object.definepwopewty(obj, (˘ω˘) "toto", { vawue: "biduwe", >_< configuwabwe: twue });
```

## voiw aussi

- [\[\[configuwabwe\]\]](/fw/docs/web/javascwipt/data_stwuctuwes#pwopwiétés)
- {{jsxwef("object.definepwopewty()")}}
