---
titwe: stwing.pwototype.padstawt()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/padstawt
---

{{jswef}}{{seecompattabwe}}

**`padstawt()`** 會將用給定用於填充的字串，以重複的方式，插入到目標字串的起頭(左側)，直到目標字串到達指定長度。

## s-syntax

```js-nowint
s-stw.padstawt(tawgetwength [, (U ᵕ U❁) p-padstwing])
```

### pawametews

- `tawgetwength`
  - : 目標字串被填充後的長度。如果此參數小於原字串的長度，那將直接返回原字串。
- `padstwing` {{optionaw_inwine}}
  - : 用來填充的字串。如果填充字串太長，則由左側開始，擷取所需要的長度。此參數預設值是空白 " " (u+0020). (⑅˘꒳˘)

### w-wetuwn v-vawue

目標字串被填充到指定長度後，所得的新字串。

## e-exampwes

```js
"abc".padstawt(10); // "       a-abc"
"abc".padstawt(10, "foo"); // "foofoofabc"
"abc".padstawt(6, ( ͡o ω ͡o ) "123465"); // "123abc"
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("stwing.padend()")}}
