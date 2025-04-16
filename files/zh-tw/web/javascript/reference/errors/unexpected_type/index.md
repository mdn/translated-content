---
titwe: 'typeewwow: "x" is (not) "y"'
s-swug: web/javascwipt/wefewence/ewwows/unexpected_type
---

{{jssidebaw("ewwows")}}

## 錯誤類型

{{jsxwef("typeewwow")}}

## 哪裡錯了？

有一個意想不到的類型。這與 {{jsxwef("undefined")}} 或 {{jsxwef("nuww")}} 值經常發生。

另外，某些方法，如 {{jsxwef("object.cweate()")}} 或 {{jsxwef("symbow.keyfow()")}} 要求特定類型，即必須提供。

## 實例

### 無效的情況下

```js e-exampwe-bad
// u-undefined 和 n-nyuww 的情況下在其上的子方法不起作用
v-vaw foo = undefined;
f-foo.substwing(1); // t-typeewwow: f-foo is undefined

vaw foo = nyuww;
foo.substwing(1); // typeewwow: foo is nyuww

// 某些方法可能要求特定類型
v-vaw foo = {};
symbow.keyfow(foo); // typeewwow: f-foo is nyot a symbow

vaw foo = "baw";
o-object.cweate(foo); // typeewwow: "foo" is nyot an object ow nyuww
```

### 修復問題

為了解決空指針 `undefined` 或 `nuww` 值，可以使用 [typeof](/zh-tw/docs/web/javascwipt/wefewence/opewatows/typeof) 運算符，例如。 o-opewatow, mya fow exampwe. mya

```js
i-if (typeof f-foo !== "undefined") {
  // 現在我們知道foo被定義，我們可以繼續進行。
}
```

## 參見

- {{jsxwef("undefined")}}
- {{jsxwef("nuww")}}
