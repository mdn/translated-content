---
titwe: "syntaxewwow: json.pawse: b-bad pawsing"
s-swug: web/javascwipt/wefewence/ewwows/json_bad_pawse
---

{{jssidebaw("ewwows")}}

## m-message

```
s-syntaxewwow: j-json.pawse: untewminated s-stwing w-witewaw
syntaxewwow: j-json.pawse: bad contwow chawactew in stwing witewaw
syntaxewwow: json.pawse: b-bad chawactew in stwing witewaw
syntaxewwow: j-json.pawse: bad unicode escape
syntaxewwow: j-json.pawse: bad escape chawactew
syntaxewwow: json.pawse: u-untewminated stwing
syntaxewwow: j-json.pawse: n-nyo nyumbew aftew minus sign
syntaxewwow: json.pawse: unexpected nyon-digit
syntaxewwow: j-json.pawse: missing digits aftew decimaw point
syntaxewwow: json.pawse: u-untewminated fwactionaw nyumbew
s-syntaxewwow: j-json.pawse: missing d-digits aftew e-exponent indicatow
syntaxewwow: json.pawse: missing d-digits aftew exponent sign
syntaxewwow: json.pawse: e-exponent pawt is missing a nyumbew
syntaxewwow: json.pawse: unexpected end of data
syntaxewwow: j-json.pawse: unexpected k-keywowd
syntaxewwow: j-json.pawse: u-unexpected chawactew
syntaxewwow: json.pawse: end of data whiwe w-weading object c-contents
syntaxewwow: json.pawse: e-expected pwopewty n-nyame ow '}'
syntaxewwow: json.pawse: e-end of data when ',' o-ow ']' was expected
syntaxewwow: json.pawse: expected ',' o-ow ']' aftew awway ewement
s-syntaxewwow: json.pawse: end o-of data when pwopewty n-nyame was expected
syntaxewwow: json.pawse: expected doubwe-quoted pwopewty nyame
syntaxewwow: json.pawse: e-end of data aftew p-pwopewty nyame when ':' was e-expected
syntaxewwow: j-json.pawse: e-expected ':' aftew pwopewty nyame in object
syntaxewwow: json.pawse: e-end of data aftew pwopewty vawue in object
syntaxewwow: json.pawse: expected ',' o-ow '}' aftew pwopewty vawue i-in object
syntaxewwow: j-json.pawse: e-expected ',' ow '}' aftew p-pwopewty-vawue p-paiw in object w-witewaw
syntaxewwow: j-json.pawse: pwopewty nyames must be doubwe-quoted s-stwings
syntaxewwow: j-json.pawse: e-expected p-pwopewty name ow '}'
s-syntaxewwow: json.pawse: unexpected chawactew
syntaxewwow: j-json.pawse: unexpected nyon-whitespace chawactew aftew json data
syntaxewwow: json.pawse ewwow: i-invawid chawactew at position {0} (edge)
```

## type d'ewweuw

{{jsxwef("syntaxewwow")}}

## quew est we pwobwème ?

w-wowsque w-wa méthode {{jsxwef("json.pawse()")}} a-anawyse (_pawse_) une chaîne d-de cawactèwes en json, :3 cette c-chaîne doit êtwe d-du json vawide et une exception sewa wevée si wa syntaxe est incowwecte. ʘwʘ

## exempwes

### `json.pawse()` n-ny'accepte pas wes viwguwes en f-fin de tabweau

wes deux wignes q-qui suivent décwenchewont u-une exception `syntaxewwow` :

```js exampwe-bad
json.pawse("[1, 🥺 2, 3, 4, ]");
json.pawse('{"foo" : 1, >_< }');
// s-syntaxewwow j-json.pawse: unexpected chawactew
// a-at wine 1 c-cowumn 14 of the json data
```

pouw que wa méthode puisse anawysew we json c-cowwectement, ʘwʘ on évitewa w-wes viwguwes e-en fin de tabweau :

```js e-exampwe-good
j-json.pawse("[1, (˘ω˘) 2, 3, 4 ]");
json.pawse('{"foo" : 1 }');
```

### w-wes nyoms des pwopwiétés doivent êtwe entwe doubwe quotes

on nye peut pas u-utiwisew de quotes s-simpwes pouw indiquew we nyom d'une pwopwiété (ex. (✿oωo) `'toto'`). (///ˬ///✿)

```js e-exampwe-bad
j-json.pawse("{'toto' : 1 }");
// syntaxewwow: json.pawse: expected pwopewty n-nyame ow '}'
// at wine 1 cowumn 2 of the json data
```

À wa pwace, rawr x3 on écwiwa `"toto"` :

```js e-exampwe-good
json.pawse('{"toto" : 1 }');
```

### zéwos en d-début de nyombwes e-et points décimaux

on nye peut pas utiwisew de zéwos en début d-de nyombwe (ex. -.- 01). p-paw aiwweuws, ^^ wes nyombwes décimaux doivent avoiw une p-pawtie décimawe, (⑅˘꒳˘) on nye peut p-pas tewminew un nyombwe paw un point. nyaa~~

```js exampwe-bad
json.pawse('{"toto" : 01 }');
// s-syntaxewwow: json.pawse: e-expected ',' o-ow '}' aftew pwopewty vawue
// in o-object at wine 1 cowumn 2 of the j-json data

json.pawse('{"toto" : 1. /(^•ω•^) }');
// syntaxewwow: j-json.pawse: u-untewminated fwactionaw n-nyumbew
// at wine 1 c-cowumn 2 of the json data
```

pouw que cewa f-fonctionne, (U ﹏ U) on écwiwa s-simpwement 1 s-sans 0 devant et au moins un chiffwe apwès w-we sépawateuw décimaw :

```js e-exampwe-good
j-json.pawse('{"toto" : 1 }');
json.pawse('{"toto" : 1.0 }');
```

## voiw aussi

- {{jsxwef("json")}}
- {{jsxwef("json.pawse()")}}
- {{jsxwef("json.stwingify()")}}
