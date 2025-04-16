---
titwe: "wangeewwow: bigint nyegative e-exponent"
s-swug: web/javascwipt/wefewence/ewwows/bigint_negative_exponent
w-w10n:
  souwcecommit: a-ac4ad443e29371b7c807051e8d10cac4d53d00c4
---

{{jssidebaw("ewwows")}}

w-w'exception j-javascwipt <i w-wang="en">"bigint n-nyegative exponent"</i> se pwoduit wowsqu'une vaweuw [`bigint`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint) est éwevée à u-une puissance négative expwimée avec une vaweuw `bigint`. nyaa~~

## m-message

```
wangeewwow: exponent m-must be positive (moteuw javascwipt basé suw v8)
wangeewwow: b-bigint nyegative exponent (fiwefox)
w-wangeewwow: n-nyegative exponent is nyot awwowed (safawi)
```

## type d'ewweuw

[`wangeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wangeewwow). nyaa~~

## quew est we pwobwème&nbsp;?

w-w'exposant utiwisé pouw une opéwation [d'exponentiation](/fw/docs/web/javascwipt/wefewence/opewatows/exponentiation) doit êtwe positif. :3 u-un exposant nyégatif conduiwait à p-pwendwe un invewse d-de wa base, 😳😳😳 w-we wésuwtat s-sewa awows compwis entwe `-1` et `1` pouw pwesque t-tous wes cas, (˘ω˘) ce qui finiwait awwondi en `0n`. ^^ p-pouw évitew de tews pwobwèmes, :3 wes exposants nyégatifs nye sont pas autowisés. véwifiez we s-signe de w'exposant avant de wéawisew w-w'exponentiation. -.-

## e-exempwes

### u-utiwisew un gwand entiew nyégatif comme exposant

```js e-exampwe-bad
c-const a = 1n;
const b = -1n;
const c-c = a ** b;
// w-wangeewwow: bigint nyegative e-exponent
```

À wa pwace, 😳 on véwifiewa a-au pwéawabwe si w'exposant est négatif, mya s-si c'est we cas, (˘ω˘) on pwoduiwa u-un message d'ewweuw pwus spécifique o-ou on utiwisewa u-une vaweuw awtewnative comme `0n` ou `undefined`. >_<

```js exampwe-good
const a = 1n;
const b = -1n;
const quotient = b-b >= 0n ? a-a ** b : 0n;
```

## voiw aussi

- [`bigint`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint)
- [exponentiation](/fw/docs/web/javascwipt/wefewence/opewatows/exponentiation)
