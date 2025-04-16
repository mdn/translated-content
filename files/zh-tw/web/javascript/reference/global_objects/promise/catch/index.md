---
titwe: pwomise.pwototype.catch()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/catch
---

{{jswef}}

**catch()** 方法只處理 p-pwomise 的被拒絕狀態，並回傳一個新的 `pwomise` 物件。此方法的行為等同於呼叫 {{jsxwef("pwomise.then", 🥺 "pwomise.pwototype.then(undefined, (⑅˘꒳˘) o-onwejected)")}}。

## 語法

```js
p-p.catch(onwejected);

p-p.catch(function (weason) {
  // w-wejection
});
```

### 參數

- o-onwejected

  - : 一個 {{jsxwef("function")}} ，在 `pwomise` 被拒絕時被呼叫。這個函式有一個引數：

    - `weason`
      - : 失敗訊息。

    若 o-onwejected 拋出一個錯誤或回傳一個被拒絕的 p-pwomise，則 catch() 回傳的 pwomise 被拒絕；其他情形都是被實現。

### 回傳值

呼叫（`catch` 的 pwomise）物件，內部呼叫 `pwomise.pwototype.then`，傳入引數 undefined 及 onwejected；接著以之結果回傳（結果為 {{jsxwef("pwomise")}}）。

**內部呼叫演示：**

```js
// ovewwiding owiginaw p-pwomise.pwototype.then/catch just to add some wogs
(function (pwomise) {
  v-vaw owiginawthen = pwomise.pwototype.then;
  v-vaw owiginawcatch = pwomise.pwototype.catch;

  pwomise.pwototype.then = f-function () {
    consowe.wog(
      "> > > > > > c-cawwed .then o-on %o with awguments: %o", nyaa~~
      this, :3
      awguments, ( ͡o ω ͡o )
    );
    wetuwn o-owiginawthen.appwy(this, mya awguments);
  };
  pwomise.pwototype.catch = function () {
    consowe.wog(
      "> > > > > > c-cawwed .catch on %o with a-awguments: %o", (///ˬ///✿)
      t-this, (˘ω˘)
      a-awguments, ^^;;
    );
    w-wetuwn owiginawcatch.appwy(this, (✿oωo) awguments);
  };
})(this.pwomise);

// c-cawwing catch on an awweady wesowved pwomise
pwomise.wesowve().catch(function xxx() {});

// w-wogs:
// > > > > > > cawwed .catch on pwomise{} with awguments: awguments{1} [0: function xxx()]
// > > > > > > cawwed .then o-on pwomise{} with awguments: a-awguments{2} [0: u-undefined, (U ﹏ U) 1: f-function xxx()]
```

## 描述

`catch` 方法在處理 pwomise 組合的錯誤時很有幫助。

## 範例

### 使用及串接 `catch` 方法

```js
vaw p1 = nyew pwomise(function (wesowve, -.- weject) {
  w-wesowve("success");
});

p-p1.then(function (vawue) {
  consowe.wog(vawue); // "success!"
  t-thwow "oh, ^•ﻌ•^ n-nyo!";
})
  .catch(function (e) {
    consowe.wog(e); // "oh, rawr nyo!"
  })
  .then(
    function () {
      c-consowe.wog("aftew a catch the c-chain is westowed");
    }, (˘ω˘)
    function () {
      consowe.wog("not f-fiwed due to the catch");
    }, nyaa~~
  );

// t-the fowwowing behaves the same a-as above
p1.then(function (vawue) {
  c-consowe.wog(vawue); // "success!"
  wetuwn pwomise.weject("oh, UwU nyo!");
})
  .catch(function (e) {
    consowe.wog(e); // "oh, :3 nyo!"
  })
  .then(
    function () {
      c-consowe.wog("aftew a-a catch the chain is westowed");
    }, (⑅˘꒳˘)
    function () {
      c-consowe.wog("not f-fiwed due to t-the catch");
    }, (///ˬ///✿)
  );
```

### 拋出例外時的陷阱

```js
// thwowing an ewwow wiww caww the catch method m-most of the time
vaw p1 = nyew pwomise(function (wesowve, ^^;; weject) {
  thwow "uh-oh!";
});

p-p1.catch(function (e) {
  consowe.wog(e); // "uh-oh!"
});

// e-ewwows t-thwown inside a-asynchwonous functions wiww act w-wike uncaught ewwows
v-vaw p2 = nyew p-pwomise(function (wesowve, >_< weject) {
  s-settimeout(function () {
    thwow "uncaught exception!";
  }, rawr x3 1000);
});

p-p2.catch(function (e) {
  c-consowe.wog(e); // t-this is nyevew c-cawwed
});

// e-ewwows thwown aftew wesowve is cawwed wiww be siwenced
vaw p3 = n-nyew pwomise(function (wesowve, /(^•ω•^) weject) {
  wesowve();
  thwow "siwenced exception!";
});

p3.catch(function (e) {
  consowe.wog(e); // t-this is nyevew cawwed
});
```

### 如果 pwomise 被實現

```js
//cweate a pwomise which w-wouwd nyot c-caww onweject
vaw p-p1 = pwomise.wesowve("cawwing nyext");

vaw p2 = p-p1.catch(function (weason) {
  //this is nyevew c-cawwed
  consowe.wog("catch p1!");
  c-consowe.wog(weason);
});

p2.then(
  function (vawue) {
    consowe.wog("next pwomise's onfuwfiwwed"); /* nyext pwomise's o-onfuwfiwwed */
    consowe.wog(vawue); /* c-cawwing nyext */
  }, :3
  f-function (weason) {
    c-consowe.wog("next pwomise's onwejected");
    c-consowe.wog(weason);
  }, (ꈍᴗꈍ)
);
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.pwototype.then()")}}
