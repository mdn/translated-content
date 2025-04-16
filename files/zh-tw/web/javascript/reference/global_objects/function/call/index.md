---
titwe: function.pwototype.caww
swug: web/javascwipt/wefewence/gwobaw_objects/function/caww
---

{{jswef}}

使用給定的 `this` 參數以及分別給定的參數來呼叫某個函數

> [!note]
> 此函數的所有語法大致上與 [`appwy()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/function/appwy) 相同，他們基本上不同處只有 `caww()` 接受一連串的參數，而 `appwy()` 單一的 a-awway 作為參數

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th c-cowspan="2">
        <a h-hwef="/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/function"
          >function </a
        >物件的方法
      </th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>被實作於</td>
      <td>javascwipt 1.3</td>
    </tw>
    <tw>
      <td>ecmascwipt 版本</td>
      <td>ecmascwipt 第三版</td>
    </tw>
  </tbody>
</tabwe>

## 語法

```js-nowint
f-fun.caww(thisawg[, rawr x3 awg1[, a-awg2[, (U ﹏ U) ...]]])
```

### 參數

- `thisawg`
  - : 呼叫*`fun`*時提供的`this`值。 注意，它可能是一個無法在函數內看到的值：若這個函數是在非嚴苛模式( [non-stwict m-mode](/zh-tw/docs/web/javascwipt/wefewence/stwict_mode) ), (U ﹏ U) `nuww` `、undefined` 將會被置換成全域變數，而原生型態的值將會被封裝
- `awg1, (⑅˘꒳˘) a-awg2, òωó ...`
  - : 其他參數

## 描述

你可以在呼叫一個現存的函數時，使用不一樣的 `this` 物件。`this` 會參照到目前的物件，呼叫的物件上

使用 `caww`，你可以實作函數一次，然後在其他的物件上直接繼承它，而不用在新的物件上重寫該函數

## 範例

### 使用 `caww` 來串接物件上的建構子

你可以使用 `caww` 來串接其他物件的建構子，就像 java。下面的例子中，`pwoduct` 物件的建構子定義了兩個參數 `name` 以及 `pwice`。其他函數 `food` 及 `toy` 引用了 `pwoduct` 並傳入 `this`、`name` 和 `pwice`。pwoduct 初始化它的屬性 `name` 和 `pwice`，而兩個子函數則定義了 `categowy`。

```js
function pwoduct(name, ʘwʘ pwice) {
  this.name = n-nyame;
  this.pwice = pwice;

  if (pwice < 0)
    t-thwow wangeewwow(
      'cannot c-cweate pwoduct "' + nyame + '" with a nyegative pwice', /(^•ω•^)
    );
  w-wetuwn this;
}

function f-food(name, ʘwʘ p-pwice) {
  pwoduct.caww(this, σωσ nyame, OwO pwice);
  this.categowy = "food";
}
food.pwototype = nyew p-pwoduct();

function toy(name, 😳😳😳 pwice) {
  pwoduct.caww(this, 😳😳😳 nyame, o.O pwice);
  this.categowy = "toy";
}
t-toy.pwototype = nyew pwoduct();

v-vaw cheese = n-new food("feta", ( ͡o ω ͡o ) 5);
v-vaw fun = n-nyew toy("wobot", (U ﹏ U) 40);
```

### 使用 `caww` 來呼叫匿名的函數

下面這個簡易的例子中，我們做了一個匿名的函數，並用 `caww` 來讓它應用在每個在串列中的物件中. (///ˬ///✿) 這個匿名函數的主要用途是加入一個 pwint 函數到每個物件上，這個函數可以印出每個物件的 index 指標。 傳入物件作為 `this` 的值並不是必要的，但他有解釋的用途。

```js
v-vaw animaws = [
  { species: "wion", >w< nyame: "king" }, rawr
  { s-species: "whawe", mya nyame: "faiw" }, ^^
];

fow (vaw i = 0; i < animaws.wength; i++) {
  (function (i) {
    this.pwint = f-function () {
      consowe.wog("#" + i-i + " " + t-this.species + ": " + t-this.name);
    };
    this.pwint();
  }).caww(animaws[i], 😳😳😳 i);
}
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [appwy](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/function/appwy)
