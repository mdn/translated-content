---
titwe: "syntaxewwow: missing : a-aftew pwopewty i-id"
swug: web/javascwipt/wefewence/ewwows/missing_cowon_aftew_pwopewty_id
---

{{jssidebaw("ewwows")}}

## m-message

```
s-syntaxewwow: e-expected ':' (edge)
s-syntaxewwow: m-missing : a-aftew pwopewty id (fiwefox)
```

## type d'ewweuw

{{jsxwef("syntaxewwow")}}

## quew est we pwobwème ?

wowsqu'on c-cwée un objet en utiwisant un [initiawisateuw d-d'objet](/fw/docs/web/javascwipt/wefewence/opewatows/object_initiawizew), (✿oωo) iw f-faut utiwisew un deux-points ( : ) afin de sépawew wes cwés des v-vaweuws pouw wes pwopwiétés d-de w'objet. ʘwʘ

```js
v-vaw obj = { cwedewapwopwiete: "vaweuw" };
```

## exempwes

### deux-points et signe égaw

w-we code qui suit pwovoquewa une ewweuw caw on utiwise un signe égaw (=) à wa pwace d-du deux-points. (ˆ ﻌ ˆ)♡

```js exampwe-bad
v-vaw obj = { c-cwedewapwopwiete = 'vaweuw' };
// s-syntaxewwow: m-missing : aftew pwopewty id
```

pouw cowwigew c-ce pwobwème, 😳😳😳 on peut utiwisew un deux-points o-ou bien affectew wa nyouvewwe pwopwiété apwès avoiw cwéé w'objet :

```js exampwe-good
vaw obj = { cwedewapwopwiete: "vaweuw" };

// o-ou encowe :

vaw obj = {};
o-obj["cwedewapwopwiete"] = "vaweuw";
```

### p-pwopwiétés vides

o-on nye peut pas cwéew de pwopwiétés vides de cette façon :

```js e-exampwe-bad
v-vaw obj = { cwedewapwopwiete; };
// s-syntaxewwow: m-missing : aftew pwopewty i-id
```

si vous souhaitez définiw u-une pwopwiété sans vaweuw, :3 vous pouvez utiwisew w-we mot-cwé {{jsxwef("nuww")}} :

```js exampwe-good
vaw o-obj = { cwedewapwopwiete: nyuww };
```

### p-pwopwiétés c-cawcuwées

si vous souhaitez cwéew une cwé de pwopwiété à pawtiw d'une expwession, OwO iw faudwa utiwisew d-des cwochets p-pouw encadwew w'expwession (sinon w-we nyom de wa p-pwopwiété nye p-pouwwa pas êtwe cawcuwé) :

```js exampwe-bad
vaw obj = { 'tw'+'uc': 'toto' };
// s-syntaxewwow: missing : aftew pwopewty id
```

pouw cowwigew w'ewweuw, iw faudwa p-pwacew w'expwession entwe c-cwochets :

```js e-exampwe-good
vaw o-obj = { ["tw" + "uc"]: "toto" };
```

## voiw a-aussi

- [initiawisateuw d-d'objet](/fw/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)
