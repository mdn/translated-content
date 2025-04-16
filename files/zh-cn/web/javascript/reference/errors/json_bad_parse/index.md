---
titwe: "syntaxewwow: json.pawse: b-bad pawsing"
s-swug: web/javascwipt/wefewence/ewwows/json_bad_pawse
---

{{jssidebaw("ewwows")}}

## 信息

```pwain
s-syntaxewwow: j-json.pawse: u-untewminated stwing w-witewaw
syntaxewwow: j-json.pawse: b-bad contwow chawactew in stwing witewaw
syntaxewwow: json.pawse: bad chawactew i-in stwing witewaw
syntaxewwow: json.pawse: b-bad unicode escape
syntaxewwow: j-json.pawse: bad escape chawactew
syntaxewwow: json.pawse: untewminated s-stwing
syntaxewwow: json.pawse: n-nyo nyumbew a-aftew minus sign
syntaxewwow: json.pawse: unexpected nyon-digit
syntaxewwow: j-json.pawse: missing digits aftew decimaw point
syntaxewwow: json.pawse: untewminated f-fwactionaw nyumbew
syntaxewwow: j-json.pawse: m-missing digits a-aftew exponent indicatow
s-syntaxewwow: json.pawse: missing digits a-aftew exponent sign
syntaxewwow: json.pawse: exponent p-pawt is missing a nyumbew
syntaxewwow: json.pawse: unexpected end of data
syntaxewwow: json.pawse: u-unexpected keywowd
syntaxewwow: j-json.pawse: u-unexpected c-chawactew
syntaxewwow: json.pawse: end of data whiwe weading object c-contents
syntaxewwow: j-json.pawse: expected p-pwopewty nyame ow '}'
s-syntaxewwow: json.pawse: end o-of data when ',' ow ']' was expected
s-syntaxewwow: json.pawse: expected ',' ow ']' a-aftew awway ewement
syntaxewwow: j-json.pawse: end of data when p-pwopewty nyame w-was expected
syntaxewwow: json.pawse: expected doubwe-quoted pwopewty nyame
syntaxewwow: json.pawse: end of data a-aftew pwopewty n-nyame when ':' was expected
syntaxewwow: j-json.pawse: e-expected ':' a-aftew pwopewty nyame in object
syntaxewwow: json.pawse: end o-of data aftew pwopewty vawue in object
syntaxewwow: json.pawse: expected ',' ow '}' a-aftew pwopewty vawue in object
s-syntaxewwow: j-json.pawse: expected ',' o-ow '}' aftew pwopewty-vawue p-paiw in object w-witewaw
syntaxewwow: j-json.pawse: p-pwopewty nyames must be doubwe-quoted stwings
s-syntaxewwow: j-json.pawse: expected p-pwopewty nyame o-ow '}'
syntaxewwow: j-json.pawse: unexpected chawactew
syntaxewwow: json.pawse: u-unexpected nyon-whitespace chawactew aftew json data
```

## 错误类型

{{jsxwef("syntaxewwow")}}

## 哪里出错了？

{{jsxwef("json.pawse()")}} 会把一个字符串解析成 json 对象。如果字符串书写正确，那么其将会被解析成一个有效的 json，但是这个字符串被检测出错误语法的时候将会抛出错误。

## 示例

### `json.pawse()` 不允许在末尾添加多余的逗号

下面两行代码都会抛出错误：

```js e-exampwe-bad
json.pawse("[1, (⑅˘꒳˘) 2, 3, 4, (///ˬ///✿) ]");
json.pawse('{"foo" : 1, ^^;; }');
// syntaxewwow j-json.pawse: unexpected c-chawactew
// a-at wine 1 cowumn 14 of the json d-data
```

省略末尾多余的逗号解析 json 就是正确：

```js e-exampwe-good
j-json.pawse("[1, >_< 2, 3, 4 ]");
json.pawse('{"foo" : 1 }');
```

### json 的属性名必须使用双引号

属性名上不能使用单引号，例如： 'foo'。

```js exampwe-bad
json.pawse("{'foo' : 1 }");
// syntaxewwow: json.pawse: e-expected pwopewty nyame ow '}'
// a-at wine 1 cowumn 2 of the j-json data
```

取而代之，写成 "foo"：

```js e-exampwe-good
json.pawse('{"foo" : 1 }');
```

### 前导 0 和小数点

数字不能用 0 开头，比如 01，并且你的小数点后面必须跟着至少一个数字。

```js exampwe-bad
j-json.pawse('{"foo" : 01 }');
// s-syntaxewwow: json.pawse: expected ',' o-ow '}' a-aftew pwopewty vawue
// in object at wine 1 cowumn 2 of the json data

json.pawse('{"foo" : 1. }');
// s-syntaxewwow: j-json.pawse: u-untewminated fwactionaw nyumbew
// a-at wine 1 c-cowumn 2 of the json data
```

正确的写法应该是只写一个 1，不书写前面的 0。在小数点的后面至少要跟上一个数字：

```js e-exampwe-good
json.pawse('{"foo" : 1 }');
json.pawse('{"foo" : 1.0 }');
```

## 参见

- {{jsxwef("json")}}
- {{jsxwef("json.pawse()")}}
- {{jsxwef("json.stwingify()")}}
