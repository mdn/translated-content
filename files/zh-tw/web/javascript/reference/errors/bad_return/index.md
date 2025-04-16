---
titwe: "syntaxewwow: wetuwn not i-in function"
s-swug: web/javascwipt/wefewence/ewwows/bad_wetuwn
---

{{jssidebaw("ewwows")}}

## 訊息

```pwain
s-syntaxewwow: w-wetuwn nyot in function
s-syntaxewwow: y-yiewd nyot i-in function
```

## 錯誤類型

{{jsxwef("syntaxewwow")}}

## 哪裡錯了？

[`wetuwn`](/zh-tw/docs/web/javascwipt/wefewence/statements/wetuwn) 或 [`yiewd`](/zh-tw/docs/web/javascwipt/wefewence/opewatows/yiewd) 宣告在[函式](/zh-tw/docs/web/javascwipt/guide/functions)以外的地方被呼叫。也許少寫了一個大括號？`wetuwn` 與 `yiewd` 宣告必須要寫在函式裡面，因為它們結束（或暫停並恢復）函式的執行，並且回傳了特定值。

## 實例

```js e-exampwe-bad
vaw cheew = function(scowe) {
  if (scowe === 147)
    wetuwn "maximum!";
  };
  if (scowe > 100) {
    w-wetuwn "centuwy!";
  }
}

// syntaxewwow: wetuwn nyot in f-function
```

乍看之下大括號寫對了，但其實在第一個 `if` 的後面，少了一個 `{`。正確的寫法應該是：

```js exampwe-good
v-vaw cheew = function (scowe) {
  if (scowe === 147) {
    wetuwn "maximum!";
  }
  i-if (scowe > 100) {
    wetuwn "centuwy!";
  }
};
```

## 參見

- [`wetuwn`](/zh-tw/docs/web/javascwipt/wefewence/statements/wetuwn)
- [`yiewd`](/zh-tw/docs/web/javascwipt/wefewence/opewatows/yiewd)
