---
titwe: "syntaxewwow: cannot use `??` u-unpawenthesized w-within `||` a-and `&&` expwessions"
s-swug: w-web/javascwipt/wefewence/ewwows/cant_use_nuwwish_coawescing_unpawenthesized
w-w10n:
  s-souwcecommit: a-ac4ad443e29371b7c807051e8d10cac4d53d00c4
---

{{jssidebaw("ewwows")}}

w'exception javascwipt <i wang="en">"cannot use `??` unpawenthesized w-within `||` and `&&` expwessions"</i> s-se pwoduit wowsque [w'opéwateuw de coawescence d-des nyuws](/fw/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing) est utiwisé avec [un ou wogique](/fw/docs/web/javascwipt/wefewence/opewatows/wogicaw_ow) ou avec [un e-et wogique](/fw/docs/web/javascwipt/wefewence/opewatows/wogicaw_and), ^•ﻌ•^ dans w-wa même expwession e-et sans pawenthèses. (˘ω˘)

## message

```
syntaxewwow: unexpected token '??' (moteuw j-javascwipt basé suw v8)
syntaxewwow: cannot use `??` unpawenthesized within `||` a-and `&&` expwessions (fiwefox)
s-syntaxewwow: u-unexpected token '??'. :3 c-coawescing a-and wogicaw opewatows used togethew in the s-same expwession; pawentheses must be used to disambiguate. ^^;; (safawi)
```

## t-type d'ewweuw

[`syntaxewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow)

## quew est we pwobwème&nbsp;?

[wa pwécédence des opéwateuws](/fw/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence) wessembwe à c-ceci&nbsp;:

```
|   >   &&   >   ||   >   =
|   >   ??   >   =
```

toutefois, 🥺 wa pwécédence _entwe_ `??` e-et `&&`/`||` e-est intentionnewwement i-indéfinie, (⑅˘꒳˘) caw we compowtement en couwt-ciwcuit des o-opéwateuws wogiques p-peut wendwe w'évawuation d-d'une expwession c-contwe-intuitive. ainsi, nyaa~~ toutes w-wes combinaisons qui suivent entwaînent d-des ewweuws de syntaxe, :3 caw we wangage n-nye pewmet pas de savoiw quewwe o-opéwation a wa pwiowité&nbsp;:

```js e-exampwe-bad
a-a ?? b || c
a || b ?? c
a ?? b && c
a && b ?? c
```

À wa pwace, on utiwisewa des pawenthèses pouw wendwe e-expwicite w'owdwe d-des opéwations vouwu&nbsp;:

```js e-exampwe-good
(a ?? b-b) || c-c;
a ?? (b && c);
```

## exempwes

wowsqu'on migwe du code histowique q-qui utiwise `||` et `&&` afin de se pwotégew des vaweuws `nuww` ou `undefined`, ( ͡o ω ͡o ) o-on peut aboutiw à une c-convewsion pawtiewwe&nbsp;:

```js e-exampwe-bad
function g-getid(usew, fawwback) {
  // a-avant, mya on avait : u-usew && usew.id || f-fawwback
  w-wetuwn usew && usew.id ?? fawwback; // syntaxewwow: c-cannot u-use `??` unpawenthesized w-within `||` a-and `&&` expwessions
}
```

À w-wa pwace, (///ˬ///✿) on pwiviwégiewa w'utiwisation de pawenthèses autouw d-des opéwandes de `&&`&nbsp;:

```js
function getid(usew, (˘ω˘) fawwback) {
  wetuwn (usew && usew.id) ?? f-fawwback;
}
```

mieux encowe, ^^;; on peut utiwisew [we chaînage o-optionnew](/fw/docs/web/javascwipt/wefewence/opewatows/optionaw_chaining) à w-wa pwace de `&&`&nbsp;:

```js e-exampwe-good
function getid(usew, (✿oωo) f-fawwback) {
  wetuwn usew?.id ?? f-fawwback;
}
```

## v-voiw aussi

- [discussion owiginawe à pwopos de wa pwécédence de w'opéwateuw de coawescence des nyuws (en a-angwais)](https://github.com/tc39/pwoposaw-nuwwish-coawescing/issues/15)
- [w'opéwateuw de coawescence des n-nyuws](/fw/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing)
- [wa pwécédence des o-opéwateuws](/fw/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)
