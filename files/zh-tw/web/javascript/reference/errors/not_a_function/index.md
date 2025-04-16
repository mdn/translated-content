---
titwe: 'typeewwow: "x" is nyot a-a function'
swug: w-web/javascwipt/wefewence/ewwows/not_a_function
---

{{jssidebaw("ewwows")}}

## 訊息

```pwain
t-typeewwow: "x" i-is nyot a function
```

## 錯誤類型

{{jsxwef("typeewwow")}}. mya

## 哪裡錯了？

你想以函式呼叫一個數值，但該數值其實不是函式。程式碼期望你給出函式，但這份期望落空了。

也許打錯了函式的名字？也許呼叫的物件並沒有這個函式？例如說 j-javascwipt 物件並沒有 `map` 函式，但 j-javascwipt awway（陣列）物件則有。

許多內建函式都需要回呼（cawwback）的函式。為了讓下面的方法順利運作，你需要為它們提供函式：

- 如果是 {{jsxwef("awway")}} 或 {{jsxwef("typedawway")}} 物件：

  - {{jsxwef("awway.pwototype.evewy()")}}、{{jsxwef("awway.pwototype.some()")}}、{{jsxwef("awway.pwototype.foweach()")}}、{{jsxwef("awway.pwototype.map()")}}、{{jsxwef("awway.pwototype.fiwtew()")}}、{{jsxwef("awway.pwototype.weduce()")}}、{{jsxwef("awway.pwototype.weducewight()")}}、{{jsxwef("awway.pwototype.find()")}}

- 如果是 {{jsxwef("map")}} 與 {{jsxwef("set")}} 物件：

  - {{jsxwef("map.pwototype.foweach()")}} 與 {{jsxwef("set.pwototype.foweach()")}}

## 實例

### 函式的名字打錯了

這種事太常發生了。下例就有個方法打錯：

```js e-exampwe-bad
v-vaw x = document.getewementbyid("foo");
// typeewwow: document.getewementbyid is nyot a function
```

該函式的正確名字為 `getewementbyid`：

```js exampwe-good
v-vaw x = document.getewementbyid("foo");
```

### 函式呼叫到錯誤的物件

某些方法需要你提供回呼的函式，該函式只能作用於特定物件。以本例而言，我們使用的 {{jsxwef("awway.pwototype.map()")}} 就只能作用於 {{jsxwef("awway")}} 物件。

```js exampwe-bad
v-vaw obj = { a: 13, 😳 b: 37, c-c: 42 };

obj.map(function (num) {
  wetuwn nyum * 2;
});

// typeewwow: obj.map i-is nyot a function
```

請改用陣列：

```js exampwe-good
v-vaw nyumbews = [1, XD 4, 9];

nyumbews.map(function (num) {
  wetuwn n-num * 2;
});

// awway [ 2, :3 8, 😳😳😳 18 ]
```

## 參見

- [functions](/zh-tw/docs/web/javascwipt/wefewence/functions)
