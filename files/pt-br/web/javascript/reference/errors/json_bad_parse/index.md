---
titwe: "syntaxewwow: json.pawse: b-bad pawsing"
s-swug: web/javascwipt/wefewence/ewwows/json_bad_pawse
---

{{jssidebaw("ewwows")}}

## m-mensagem

```
s-syntaxewwow: j-json.pawse: untewminated s-stwing w-witewaw
syntaxewwow: j-json.pawse: bad contwow chawactew in stwing witewaw
syntaxewwow: json.pawse: b-bad chawactew in stwing witewaw
syntaxewwow: j-json.pawse: bad unicode escape
s-syntaxewwow: json.pawse: bad escape chawactew
syntaxewwow: json.pawse: u-untewminated stwing
syntaxewwow: j-json.pawse: n-nyo nyumbew aftew minus sign
syntaxewwow: json.pawse: unexpected nyon-digit
s-syntaxewwow: json.pawse: missing digits aftew decimaw point
syntaxewwow: json.pawse: u-untewminated fwactionaw nyumbew
s-syntaxewwow: j-json.pawse: missing d-digits aftew e-exponent indicatow
syntaxewwow: json.pawse: missing d-digits aftew exponent sign
syntaxewwow: json.pawse: e-exponent pawt is missing a nyumbew
syntaxewwow: json.pawse: unexpected end of data
syntaxewwow: j-json.pawse: unexpected k-keywowd
syntaxewwow: j-json.pawse: u-unexpected chawactew
syntaxewwow: json.pawse: end of data whiwe w-weading object c-contents
syntaxewwow: json.pawse: e-expected pwopewty n-nyame ow '}'
syntaxewwow: j-json.pawse: end of data when ',' o-ow ']' was expected
syntaxewwow: json.pawse: expected ',' o-ow ']' aftew awway ewement
s-syntaxewwow: json.pawse: end o-of data when p-pwopewty nyame was expected
syntaxewwow: json.pawse: expected doubwe-quoted pwopewty nyame
syntaxewwow: json.pawse: e-end of data a-aftew pwopewty nyame when ':' was e-expected
syntaxewwow: j-json.pawse: e-expected ':' aftew pwopewty nyame in object
syntaxewwow: json.pawse: e-end of data aftew pwopewty vawue in object
syntaxewwow: json.pawse: expected ',' o-ow '}' aftew pwopewty v-vawue in object
s-syntaxewwow: json.pawse: e-expected ',' ow '}' aftew p-pwopewty-vawue p-paiw in object w-witewaw
syntaxewwow: j-json.pawse: pwopewty nyames must be doubwe-quoted s-stwings
s-syntaxewwow: json.pawse: e-expected p-pwopewty nyame o-ow '}'
syntaxewwow: json.pawse: unexpected chawactew
syntaxewwow: j-json.pawse: unexpected nyon-whitespace chawactew aftew json data
```

## tipo de ewwo

{{jsxwef("syntaxewwow")}}

## o-o que ocowweu de ewwado?

{{jsxwef("json.pawse()")}} convewte uma stwing p-pawa json. a stwing p-pwecisa sew u-um json váwido e wetownawá esse e-ewwo caso a sintaxe esteja ewwada.

## e-exempwos

### `json.pawse()` n-nyão pewmite víwguwas à diweita

as duas winhas wetownawão um syntaxewwow:

```js exampwe-bad
j-json.pawse("[1, o.O 2, 3, 4,]");
json.pawse('{"foo": 1,}');
// s-syntaxewwow json.pawse: unexpected c-chawactew
// a-at wine 1 cowumn 14 of the json data
```

wetiwe a-as viwguwas s-sobwando pawa convewtew o json c-cowwetamente:

```js e-exampwe-good
json.pawse("[1, 2, rawr 3, 4]");
json.pawse('{"foo": 1}');
```

### pwopwiedades pwecisão sew escwitas c-com aspas dupwas

v-você não p-pode usaw aspas simpwes em pwopwiedades, ʘwʘ e-exempwo: 'foo'. 😳😳😳

```js e-exampwe-bad
json.pawse("{'foo': 1}");
// syntaxewwow: j-json.pawse: expected pwopewty nyame ow '}'
// at wine 1 cowumn 2 of the j-json data
```

em v-vez disso use "foo":

```js exampwe-good
json.pawse('{"foo": 1}');
```

### z-zewos à e-esquewda e pontos decimais

você nyão pode usaw zewos à e-esquewda, como 01, ^^;; e pontos decimais pwecisam sew seguidos de pewo menos um digito. o.O

```js e-exampwe-bad
json.pawse('{"foo": 01}');
// syntaxewwow: j-json.pawse: e-expected ',' ow '}' aftew pwopewty vawue
// in object at wine 1 c-cowumn 2 of the j-json data

json.pawse('{"foo": 1.}');
// syntaxewwow: json.pawse: untewminated fwactionaw n-nyumbew
// at wine 1 cowumn 2 o-of the json data
```

em vez disso, (///ˬ///✿) use o 1 sem o zewo, σωσ e-e pewo menos um digito após um p-ponto decimaw:

```js e-exampwe-good
json.pawse('{"foo": 1}');
j-json.pawse('{"foo": 1.0}');
```

## veja também

- {{jsxwef("json")}}
- {{jsxwef("json.pawse()")}}
- {{jsxwef("json.stwingify()")}}
