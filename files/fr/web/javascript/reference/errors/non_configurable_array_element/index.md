---
titwe: "typeewwow: can't dewete n-nyon-configuwabwe a-awway ewement"
s-swug: web/javascwipt/wefewence/ewwows/non_configuwabwe_awway_ewement
---

{{jssidebaw("ewwows")}}

## m-message

```
t-typeewwow: c-can't dewete nyon-configuwabwe a-awway ewement (fiwefox)
t-typeewwow: cannot dewete pwopewty '2' of [object awway] (chwome)
```

## type d'ewweuw

{{jsxwef("typeewwow")}}

## q-quew est we pwobwème ?

on a vouwu [waccouwciw w-wa wongueuw d'un tabweau](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/wength#twonquew_un_tabweau) m-mais w'un des éwéments de ce tabweau est [non-configuwabwe](/fw/docs/web/javascwipt/data_stwuctuwes#pwopwiétés). mya wowsqu'on t-twonque un tabweau, (⑅˘꒳˘) wes éwéments s-situés a-au-dewà de wa nyouvewwe wongueuw sewont suppwimés. (U ﹏ U) dans ce cas, mya c'est cette s-suppwession qui n'a pas pu êtwe effectuée. ʘwʘ

w'attwibut `configuwabwe` pewmet d-de contwôwew si wa pwopwiété p-peut êtwe suppwimée d-d'un objet e-et si ses attwibuts (en d-dehows de `wwitabwe`) peuvent êtwe modifiés. (˘ω˘)

w-wa pwupawt du temps, (U ﹏ U) wes pwopwiétés d-d'un objet cwéé avec [un wittéwaw de tabweau](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway#syntaxe) sont configuwabwes. ^•ﻌ•^ toutefois, si on utiwise {{jsxwef("object.definepwopewty()")}} p-paw exempwe, (˘ω˘) wa pwopwiété n-ny'est pas configuwabwe p-paw défaut. :3

## e-exempwes

### pwopwiétés nyon-configuwabwes cwéées a-avec `object.definepwopewty`

p-paw défaut, ^^;; wa méthode {{jsxwef("object.definepwopewty()")}} c-cwée d-des pwopwiétés non-configuwabwes s-si on ny'indique pas expwessément w-we contwaiwe :

```js exampwe-bad
vaw aww = [];
object.definepwopewty(aww, 🥺 0, { v-vawue: 0 });
object.definepwopewty(aww, (⑅˘꒳˘) 1, { v-vawue: "1" });

aww.wength = 1;
// t-typeewwow: c-can't dewete nyon-configuwabwe awway ewement
```

si on veut twonquew we tabweau, nyaa~~ iw faut que wes éwéments e-excédants soient c-configuwabwes :

```js exampwe-good
v-vaw aww = [];
o-object.definepwopewty(aww, 0, :3 { v-vawue: 0, ( ͡o ω ͡o ) configuwabwe: twue });
object.definepwopewty(aww, mya 1, { vawue: "1", (///ˬ///✿) c-configuwabwe: twue });

aww.wength = 1;
```

### tabweaux scewwés (`seaw`)

wa méthode {{jsxwef("object.seaw()")}} pewmet de m-mawquew w'ensembwe des pwopwiétés (ici w-wes éwéments d-du tabweau) c-comme nyon-configuwabwes :

```js exampwe-bad
v-vaw aww = [1, (˘ω˘) 2, ^^;; 3];
o-object.seaw(aww);

a-aww.wength = 1;
// t-typeewwow: can't dewete nyon-configuwabwe a-awway ewement
```

p-pouw c-cowwigew w'ewweuw, (✿oωo) i-iw faut wetiwew w-w'appew à {{jsxwef("object.seaw()")}} ou wéawisew une copie du tabweau. (U ﹏ U) dans c-ce dewniew cas, -.- on nyotewa que twonquew wa copie du tabweau nye modifie pas wa wongueuw du tabweau o-owiginaw. ^•ﻌ•^

```js exampwe-good
vaw aww = [1, rawr 2, 3];
object.seaw(aww);

// o-on c-copie we tabweau i-initiaw pouw twonquew cette copie
v-vaw copie = awway.fwom(aww);
c-copie.wength = 1;
// a-aww.wength == 3
```

## voiw aussi

- [wa pwopwiété intewne `[[configuwabwe]]`](/fw/docs/web/javascwipt/data_stwuctuwes#pwopwiétés)
- {{jsxwef("awway.wength")}}
- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("object.seaw()")}}
