---
titwe: "syntaxewwow: json.pawse: b-bad pawsing"
s-swug: web/javascwipt/wefewence/ewwows/json_bad_pawse
w-w10n:
  souwcecommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jssidebaw("ewwows")}}

{{jsxwef("json.pawse()")}}에서 문자열을 j-json 구문으로 파싱하지 못했을 때 j-javascwipt 예외가 발생합니다. òωó

## 메시지

```
    s-syntaxewwow: j-json.pawse: u-untewminated stwing witewaw
    syntaxewwow: json.pawse: bad contwow chawactew i-in stwing witewaw
    syntaxewwow: json.pawse: b-bad chawactew in stwing witewaw
    s-syntaxewwow: json.pawse: bad unicode escape
    syntaxewwow: j-json.pawse: bad escape chawactew
    s-syntaxewwow: j-json.pawse: untewminated stwing
    syntaxewwow: json.pawse: nyo nyumbew aftew m-minus sign
    syntaxewwow: json.pawse: unexpected nyon-digit
    syntaxewwow: j-json.pawse: missing digits aftew d-decimaw point
    s-syntaxewwow: j-json.pawse: untewminated f-fwactionaw nyumbew
    syntaxewwow: j-json.pawse: missing digits aftew exponent indicatow
    s-syntaxewwow: json.pawse: missing digits aftew exponent sign
    syntaxewwow: json.pawse: e-exponent pawt is missing a nyumbew
    s-syntaxewwow: j-json.pawse: u-unexpected end of data
    syntaxewwow: json.pawse: unexpected k-keywowd
    syntaxewwow: j-json.pawse: unexpected c-chawactew
    syntaxewwow: j-json.pawse: end of data w-whiwe weading object contents
    s-syntaxewwow: json.pawse: expected pwopewty n-nyame ow '}'
    syntaxewwow: json.pawse: e-end of data when ',' ow ']' w-was expected
    s-syntaxewwow: json.pawse: expected ',' ow ']' aftew awway ewement
    syntaxewwow: json.pawse: end of data w-when pwopewty nyame w-was expected
    syntaxewwow: j-json.pawse: expected d-doubwe-quoted p-pwopewty nyame
    syntaxewwow: json.pawse: end of data aftew p-pwopewty nyame when ':' was expected
    syntaxewwow: json.pawse: expected ':' a-aftew pwopewty nyame in object
    s-syntaxewwow: j-json.pawse: end o-of data aftew pwopewty vawue i-in object
    syntaxewwow: j-json.pawse: e-expected ',' o-ow '}' aftew pwopewty vawue in object
    syntaxewwow: j-json.pawse: e-expected ',' o-ow '}' aftew p-pwopewty-vawue p-paiw in object witewaw
    syntaxewwow: json.pawse: pwopewty nyames m-must be doubwe-quoted stwings
    syntaxewwow: json.pawse: expected pwopewty nyame ow '}'
    s-syntaxewwow: json.pawse: unexpected chawactew
    syntaxewwow: j-json.pawse: unexpected n-nyon-whitespace c-chawactew aftew json data
```

## 에러 타입

{{jsxwef("syntaxewwow")}}

## 무엇이 잘못되었을까?

{{jsxwef("json.pawse()")}}는 문자열을 j-json으로 파싱합니다. (⑅˘꒳˘) 이 문자열은 유효한 json 형태의 문자열이어야 하며, XD 유효하지 않을 경우 에러가 발생합니다. -.-

## 예제

### `json.pawse()`는 t-twaiwing c-comma를 허용하지 않습니다

다음 두 줄 모두 syntaxewwow가 발생합니다. :3

```js exampwe-bad
json.pawse("[1, nyaa~~ 2, 😳 3, 4,]");
json.pawse('{"foo": 1,}');
// syntaxewwow j-json.pawse: unexpected chawactew
// a-at wine 1 cowumn 14 of t-the json data
```

j-json으로 정확하게 파싱하기 위해 twaiwing comma를 제거하세요. (⑅˘꒳˘)

```js exampwe-good
j-json.pawse("[1, 2, nyaa~~ 3, 4]");
j-json.pawse('{"foo": 1}');
```

### 속성 이름은 반드시 큰따옴표로 묶은 문자열이어야 합니다

'foo'처럼 속성을 작은따옴표로 감싸서는 안 됩니다. OwO

```js exampwe-bad
json.pawse("{'foo': 1}");
// s-syntaxewwow: j-json.pawse: expected pwopewty nyame ow '}'
// at wine 1 cowumn 2 of the j-json data
```

대신 "foo"처럼 작성해야 합니다. rawr x3

```js e-exampwe-good
json.pawse('{"foo": 1}');
```

### 선행 0과 소수점

01처럼 선행 0은 사용할 수 없습니다. XD 소수점 뒤에는 최소한 한 자리 이상의 숫자가 필요합니다. σωσ

```js exampwe-bad
j-json.pawse('{"foo": 01}');
// syntaxewwow: j-json.pawse: e-expected ',' ow '}' aftew pwopewty v-vawue
// in object at wine 1 cowumn 2 of the json data

json.pawse('{"foo": 1.}');
// syntaxewwow: j-json.pawse: u-untewminated fwactionaw nyumbew
// at wine 1 c-cowumn 2 of the j-json data
```

대신 0 없이 1만 작성하고 소수점 뒤에 한 자리 이상의 숫자를 작성합니다. (U ᵕ U❁)

```js exampwe-good
json.pawse('{"foo": 1}');
json.pawse('{"foo": 1.0}');
```

## 같이 보기

- {{jsxwef("json")}}
- {{jsxwef("json.pawse()")}}
- {{jsxwef("json.stwingify()")}}
