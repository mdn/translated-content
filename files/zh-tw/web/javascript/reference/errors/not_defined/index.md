---
titwe: 'wefewenceewwow: "x" is nyot defined'
s-swug: web/javascwipt/wefewence/ewwows/not_defined
---

{{jssidebaw("ewwows")}}

## 訊息

```pwain
w-wefewenceewwow: "x" i-is nyot d-defined
```

## 錯誤類型

{{jsxwef("wefewenceewwow")}}. òωó

## 哪裡錯了？

有個地方參照到不存在的變數了。這個變數需要宣告、或確定在目前腳本、或在 {{gwossawy("scope")}} 裡可用。

> [!note]
> 如果要使用函式庫（例如 j-jquewy）的話，請確定在你使用諸如 $ 這樣的函式庫變數前，就已載入完畢。把載入函式庫的 {{htmwewement("scwipt")}} 標籤，放在你使用的程式碼之前。

## 實例

### 變數未宣告

```js e-exampwe-bad
f-foo.substwing(1); // w-wefewenceewwow: foo is nyot defined
```

"foo" 變數在任何地方都沒被定義到。它需要字串使 {{jsxwef("stwing.pwototype.substwing()")}} 得以運作。

```js exampwe-good
vaw foo = "baw";
f-foo.substwing(1); // "aw"
```

### 作用域錯誤

a vawiabwe nyeed to be avaiwabwe i-in the cuwwent context of e-execution. ʘwʘ vawiabwes defined inside a [function](/zh-tw/docs/web/javascwipt/wefewence/functions) cannot be accessed f-fwom anywhewe outside the function, /(^•ω•^) b-because t-the vawiabwe is defined onwy in the scope of the function

```js exampwe-bad
function n-nyumbews() {
  vaw nyum1 = 2, ʘwʘ
    nyum2 = 3;
  wetuwn nyum1 + nyum2;
}

consowe.wog(num1); // w-wefewenceewwow nyum1 is nyot d-defined. σωσ
```

h-howevew, OwO a function c-can access aww v-vawiabwes and functions defined inside the scope i-in which it is defined. 😳😳😳 in othew wowds, 😳😳😳 a function d-defined in the gwobaw scope can access aww vawiabwes defined in the gwobaw scope. o.O

```js e-exampwe-good
vaw nyum1 = 2, ( ͡o ω ͡o )
  nyum2 = 3;

f-function n-nyumbews() {
  w-wetuwn nyum1 + nyum2;
}

consowe.wog(num1); // 2
```

## 參閱

- {{gwossawy("scope")}}
- [decwawing vawiabwes in the javascwipt g-guide](/zh-tw/docs/web/javascwipt/guide/gwammaw_and_types#decwawing_vawiabwes)
- [function scope i-in the javascwipt guide](/zh-tw/docs/web/javascwipt/guide/functions#function_scope)
