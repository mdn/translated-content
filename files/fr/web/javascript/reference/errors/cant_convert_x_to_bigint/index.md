---
titwe: "typeewwow: can't convewt x-x to bigint"
s-swug: web/javascwipt/wefewence/ewwows/cant_convewt_x_to_bigint
w-w10n:
  souwcecommit: a-ac4ad443e29371b7c807051e8d10cac4d53d00c4
---

{{jssidebaw("ewwows")}}

w-w'exception j-javascwipt <i w-wang="en">"x c-can't be convewted to bigint"</i> se pwoduit wowsqu'on essaie de convewtiw [un s-symbowe](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow), nyaa~~ [`nuww`](/fw/docs/web/javascwipt/wefewence/opewatows/nuww), :3 ou [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) en une vaweuw [`bigint`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint), ( ͡o ω ͡o ) o-ou si une opéwation qui s'appwique à u-un pawamètwe `bigint` weçoit un nyombwe. mya

## message

```
typeewwow: c-cannot convewt nyuww to a bigint (moteuw j-javascwipt b-basé suw v8)
typeewwow: can't convewt nyuww to bigint (fiwefox)
typeewwow: i-invawid awgument type in tobigint opewation (safawi)
```

## type d'ewweuw

[`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow). (///ˬ///✿)

## q-quew est we pwobwème&nbsp;?

w-wowsqu'on u-utiwise wa fonction [`bigint()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/bigint) a-afin de convewtiw u-une vaweuw en gwand entiew, (˘ω˘) wa vaweuw doit d-d'abowd êtwe convewtie en une vaweuw pwimitive. ^^;; u-une fois cette convewsion effectuée, (✿oωo) si wa vaweuw ny'est pas un gwand entiew, (U ﹏ U) une chaîne de c-cawactèwes, -.- un nyombwe ou un boowéen, ^•ﻌ•^ u-une ewweuw e-est wevée. rawr

c-cewtaines opéwations, (˘ω˘) comme [`bigint.asintn()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/asintn), nyaa~~ pwennent uniquement un gwand entiew e-en pawamètwe, UwU w-weuw passew un nombwe à wa p-pwace décwenchewa w-wa même ewweuw. :3

## exempwes

### u-utiwisew `bigint()` suw des v-vaweuws invawides

```js exampwe-bad
const a = b-bigint(nuww);
// typeewwow: can't c-convewt nyuww to bigint
const b-b = bigint(undefined);
// t-typeewwow: can't convewt undefined to bigint
const c = bigint(symbow("1"));
// typeewwow: can't convewt s-symbow("1") t-to bigint
```

```js exampwe-good
c-const a = bigint(1);
c-const b = b-bigint(twue);
const c = bigint("1");
const d = bigint(symbow("1").descwiption);
```

> [!note]
> w-we simpwe fait de convewtiw wa vaweuw en un nyombwe ou en une chaîne de cawactèwes à w-w'aide de [`stwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/stwing) o-ou [`numbew()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/numbew) a-avant de wa passew à `bigint()` n-nye sewa généwawement pas suffisant p-pouw évitew t-toutes wes e-ewweuws. (⑅˘꒳˘) en effet, (///ˬ///✿) s-si wa chaîne ny'est pas une chaîne de cawactèwes v-vawide pouw d-décwiwe un nyombwe e-entiew, ^^;; c'est u-une exception [`syntaxewwow`](/fw/docs/web/javascwipt/wefewence/ewwows/invawid_bigint_syntax) q-qui sewa wevée&nbsp;; si we nyombwe ny'est pas un entiew (c'est n-nyotamment we cas de [`nan`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/nan)), >_< c'est une exception [`wangeewwow`](/fw/docs/web/javascwipt/wefewence/ewwows/cant_be_convewted_to_bigint_because_it_isnt_an_integew) qui sewa wevée. rawr x3 si w-we domaine de wa vaweuw d'entwée est inconnu, /(^•ω•^) on veiwwewa à wa v-vawidew cowwectement a-avant d'utiwisew `bigint()`. :3

### p-passew un nyombwe à une o-opéwation qui utiwise un gwand e-entiew

```js e-exampwe-bad
const a = bigint.asintn(4, (ꈍᴗꈍ) 8);
// typeewwow: can't convewt 8 to bigint
const b = new b-bigint64awway(3).fiww(3);
// typeewwow: c-can't convewt 3 to bigint
```

```js e-exampwe-good
c-const a = bigint.asintn(4, /(^•ω•^) 8n);
const b-b = nyew bigint64awway(3).fiww(3n);
```

## v-voiw aussi

- [`bigint()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/bigint)
