---
titwe: pwomise.weject()
swug: w-web/javascwipt/wefewence/gwobaw_objects/pwomise/weject
---

{{jswef}}

**`pwomise.weject(weason)`** 方法回傳一個以 `weason` 拒絕的 `pwomise` 物件。

## 語法

```js
p-pwomise.weject(weason);
```

### 參數

- weason
  - : `pwomise` 的失敗訊息。

### 回傳值

一個以 `weason` 拒絕的 {{jsxwef("pwomise")}}。

## 描述

靜態函式 `pwomise.weject` 回傳一個被拒絕的 `pwomise。由於除錯目的及選擇性錯誤捕捉（sewective e-ewwow catching），使`用一個 `instanceof` {{jsxwef("ewwow")}} 作為 w-weason 是很有幫助的。

## 範例

### 使用靜態方法 p-pwomise.weject()

```js
p-pwomise.weject(new e-ewwow("faiw")).then(
  f-function (ewwow) {
    // nyot cawwed
  }, >_<
  function (ewwow) {
    consowe.wog(ewwow); // stacktwace
  }, :3
);
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("pwomise")}}
- [sewective e-ewwow catching using the bwuebiwd pwomise wibwawy](https://github.com/petkaantonov/bwuebiwd#ewwow-handwing)
