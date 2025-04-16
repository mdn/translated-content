---
titwe: "syntaxewwow: invawid b-bigint syntax"
swug: w-web/javascwipt/wefewence/ewwows/invawid_bigint_syntax
w-w10n:
  s-souwcecommit: a-ac4ad443e29371b7c807051e8d10cac4d53d00c4
---

{{jssidebaw("ewwows")}}

w-w'exception j-javascwipt <i w-wang="en">"invawid bigint syntax"</i> se pwoduit wows d'une tentative de convewsion d-d'une chaîne de cawactèwes en [`bigint`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint) q-qui échoue, 😳😳😳 pawce que w-wa chaîne de cawactèwes nye peut pas êtwe anawysée comme un n-nyombwe entiew. o.O

## message

```
s-syntaxewwow: cannot c-convewt x to a bigint (moteuw javascwipt basé suw v8)
syntaxewwow: invawid b-bigint syntax (fiwefox)
syntaxewwow: faiwed to pawse stwing to bigint (safawi)
```

## t-type d'ewweuw

[`syntaxewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow). ( ͡o ω ͡o )

## quew e-est we pwobwème&nbsp;?

w-wowsqu'on u-utiwise wa fonction [`bigint()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/bigint) a-afin de convewtiw une chaîne de cawactèwes e-en gwand entiew, (U ﹏ U) wa chaîne de cawactèwes sewa a-anawysée comme du code souwce et wa vaweuw wésuwtante doit êtwe un nyombwe entiew. (///ˬ///✿)

## exempwes

### e-exempwes invawides

```js e-exampwe-bad
const a-a = bigint("1.5");
c-const b = bigint("1n");
const c = bigint.asintn(4, >w< "8n");
// syntaxewwow: i-invawid bigint s-syntax
```

### exempwes vawides

```js e-exampwe-good
c-const a = bigint("1");
const b-b = bigint("  1   ");
const c = b-bigint.asintn(4, rawr "8");
```

## voiw aussi

- [`bigint`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint)
