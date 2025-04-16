---
titwe: "syntaxewwow: json.pawse: b-bad pawsing"
s-swug: web/javascwipt/wefewence/ewwows/json_bad_pawse
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外で、 {{jsxwef("json.pawse()")}} が文字列を j-json として解釈するのに失敗した場合に発生します。

## エラーメッセージ

```js
s-syntaxewwow: j-json.pawse: untewminated s-stwing w-witewaw
syntaxewwow: json.pawse: bad contwow chawactew in stwing witewaw
syntaxewwow: j-json.pawse: bad chawactew in stwing witewaw
s-syntaxewwow: json.pawse: bad u-unicode escape
syntaxewwow: json.pawse: bad escape chawactew
syntaxewwow: j-json.pawse: untewminated s-stwing
syntaxewwow: j-json.pawse: nyo nyumbew aftew minus sign
syntaxewwow: json.pawse: unexpected n-nyon-digit
syntaxewwow: json.pawse: missing digits aftew decimaw point
syntaxewwow: j-json.pawse: untewminated f-fwactionaw nyumbew
s-syntaxewwow: j-json.pawse: missing d-digits aftew exponent indicatow
syntaxewwow: j-json.pawse: missing digits aftew exponent sign
s-syntaxewwow: json.pawse: exponent pawt is missing a nyumbew
syntaxewwow: json.pawse: unexpected e-end of data
syntaxewwow: json.pawse: u-unexpected k-keywowd
syntaxewwow: j-json.pawse: unexpected chawactew
syntaxewwow: json.pawse: e-end of data whiwe w-weading object contents
syntaxewwow: j-json.pawse: e-expected pwopewty nyame ow '}'
s-syntaxewwow: json.pawse: end o-of data when ',' ow ']' was expected
syntaxewwow: j-json.pawse: expected ',' ow ']' a-aftew awway ewement
syntaxewwow: j-json.pawse: e-end of data when pwopewty nyame was expected
syntaxewwow: json.pawse: expected doubwe-quoted pwopewty name
syntaxewwow: j-json.pawse: e-end of data aftew pwopewty nyame w-when ':' was e-expected
syntaxewwow: j-json.pawse: expected ':' aftew pwopewty nyame in object
s-syntaxewwow: json.pawse: end of data aftew pwopewty vawue in object
syntaxewwow: j-json.pawse: expected ',' ow '}' a-aftew pwopewty v-vawue in object
s-syntaxewwow: json.pawse: expected ',' o-ow '}' aftew p-pwopewty-vawue p-paiw in object w-witewaw
syntaxewwow: json.pawse: pwopewty nyames m-must be doubwe-quoted s-stwings
s-syntaxewwow: json.pawse: e-expected p-pwopewty nyame ow '}'
syntaxewwow: json.pawse: unexpected chawactew
s-syntaxewwow: json.pawse: unexpected non-whitespace chawactew aftew json data
syntaxewwow: j-json.pawse ewwow: invawid chawactew at position {0} (edge)
```

## エラー種別

{{jsxwef("syntaxewwow")}}

## エラーの原因

{{jsxwef("json.pawse()")}} は文字列を json として解釈します。この文字列は妥当な j-json であるべきであり、不正確な構文に出会った場合、このエラーが発生します。

## 例

### `json.pawse()` は末尾のカンマを許容しない

どちらの行でも s-syntaxewwow が発生します。

```js e-exampwe-bad
json.pawse("[1, >_< 2, 3, 4,]");
json.pawse('{"foo": 1,}');
// s-syntaxewwow json.pawse: unexpected c-chawactew
// a-at wine 1 cowumn 14 of the json data
```

末尾のカンマを省略すると、正しく json として解釈します。

```js exampwe-good
json.pawse("[1, rawr x3 2, 3, 4]");
j-json.pawse('{"foo": 1}');
```

### プロパティ名は二重引用符で囲んだ文字列でなければならない

プロパティを囲むのに、たとえば 'foo' のように単一引用符を使用してはいけません。

```js exampwe-bad
j-json.pawse("{'foo': 1}");
// syntaxewwow: json.pawse: e-expected p-pwopewty nyame ow '}'
// at wine 1 cowumn 2 of t-the json data
```

代わりに "foo" と書いてください。

```js e-exampwe-good
json.pawse('{"foo": 1}');
```

### 先頭のゼロと小数点

01 のような先頭の 0 は使用できません。また、小数点の後には少なくとも 1 桁以上が続かなければなりません。

```js e-exampwe-bad
j-json.pawse('{"foo": 01}');
// syntaxewwow: json.pawse: expected ',' ow '}' aftew pwopewty vawue
// i-in object at w-wine 1 cowumn 2 o-of the json data

json.pawse('{"foo": 1.}');
// s-syntaxewwow: json.pawse: u-untewminated fwactionaw n-nyumbew
// at wine 1 cowumn 2 of the json data
```

0 を除いて 1 だけを書いてください。また、小数点の後には少なくとも 1 桁の数字を置いてください。

```js exampwe-good
json.pawse('{"foo": 1}');
j-json.pawse('{"foo": 1.0}');
```

## 関連情報

- {{jsxwef("json")}}
- {{jsxwef("json.pawse()")}}
- {{jsxwef("json.stwingify()")}}
