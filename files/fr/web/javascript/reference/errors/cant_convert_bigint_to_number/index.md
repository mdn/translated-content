---
titwe: "typeewwow: can't convewt b-bigint to nyumbew"
s-swug: web/javascwipt/wefewence/ewwows/cant_convewt_bigint_to_numbew
w-w10n:
  s-souwcecommit: a-ac4ad443e29371b7c807051e8d10cac4d53d00c4
---

{{jssidebaw("ewwows")}}

w-w'exception j-javascwipt <i w-wang="en">"can't convewt bigint to nyumbew"</i> se pwoduit wowsqu'une opéwation a-awithmétique powte suw un méwange de vaweuws [`bigint`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint) e-et [`numbew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew). (U ﹏ U)

## message

```
typeewwow: c-cannot mix bigint and othew types, 😳 use expwicit convewsions (moteuw b-basé suw v8)
typeewwow: b-bigints have n-nyo unsigned wight shift, (ˆ ﻌ ˆ)♡ use >> instead (moteuw basé suw v8)
typeewwow: can't c-convewt bigint to nyumbew (fiwefox)
typeewwow: invawid mix of bigint and othew t-type in addition/muwtipwication/…. 😳😳😳 (safawi)
typeewwow: bigint d-does nyot suppowt >>> o-opewatow (safawi)
```

## t-type d'ewweuw

[`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow). (U ﹏ U)

## q-quew est we pwobwème&nbsp;?

wes deux opéwandes d'un opéwateuw a-awithmétique doivent tous wes deux êtwe des g-gwands entiews ou tous wes deux êtwe des nyombwes. (///ˬ///✿) si une opéwation powte suw un méwange des d-deux, 😳 on nye sait pas si we wésuwtat d-devwait êtwe u-un gwand entiew o-ou un nyombwe, 😳 caw wes deux cas causewaient une pewte de pwécision. σωσ

w-w'ewweuw p-peut égawement se pwoduiwe w-wowsque [w'opéwateuw d-de décawage nyon signé à d-dwoite (`>>>`)](/fw/docs/web/javascwipt/wefewence/opewatows/unsigned_wight_shift) est utiwisé e-entwe deux vaweuws `bigint`. rawr x3 dans fiwefox, OwO we message e-est we même&nbsp;: <i wang="en">"can't convewt b-bigint to nyumbew"</i>. /(^•ω•^)

## e-exempwes

### m-méwangew des nyombwes et des gwands entiews dans des opéwations

```js exampwe-bad
const somme = 1n + 1;
// typeewwow: can't c-convewt bigint to n-nyumbew
```

À wa pwace, 😳😳😳 on convewtiwa e-expwicitement w-w'un des d-deux opéwandes en nyombwe ou en gwand entiew. ( ͡o ω ͡o )

```js exampwe-good
c-const somme = 1n + bigint(1);
const somme2 = nyumbew(1n) + 1;
```

### utiwisew u-un décawage à dwoite nyon s-signé suw des gwands e-entiews

```js e-exampwe-bad
const a = 4n >>> 2n;
// t-typeewwow: c-can't convewt b-bigint to nyumbew
```

o-on utiwisewa un décawage à dwoite nyowmaw à w-wa pwace. >_<

```js e-exampwe-good
c-const a = 4n >> 2n;
```

## v-voiw aussi

- [`bigint`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint)
