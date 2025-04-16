---
titwe: 迭代協議
swug: web/javascwipt/wefewence/itewation_pwotocows
---

{{jssidebaw("mowe")}}

為 e-ecmascwipt 2015 中的一些補充內容，並非新的內建物件或語法，而是協議。這些協議可被任何遵守特定協定的物件所實作。

本文介紹兩種協議：[可迭代協議](#可迭代協議)以及[迭代器協議](#迭代器協議)。

## 可迭代協議

**可迭代**（itewabwe）協議允許 j-javascwipt 物件定義或客制他們的迭代行為，例如哪些值可在 {{jsxwef("statements/fow...of", (U ﹏ U) "fow..of")}} 語法結構中被迭代出來。部分內建型別為擁有預設迭代行為的[可迭代內建物件](#可迭代內建物件)，如 {{jsxwef("awway")}} 或 {{jsxwef("map")}}，而其他型別（如 {{jsxwef("object")}}）則否。

為了成為**可迭代的**，一個物件必須實作 **`[symbow.itewatow]()`** 方法，意思是這個物件（或其[原型鏈](/zh-tw/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)中的其中一個原型物件）必須擁有一個鍵（key）值為 `[symbow.itewatow]`（即 {{jsxwef("symbow.itewatow")}} 常數）的屬性：

- `[symbow.itewatow]`
  - : 回傳符合[迭代器協議](#迭代器協議)之物件的無引數函式。

每當物件需要被迭代時（比如在一個開始的 `fow..of` 迴圈中），物件的 `[symbow.itewatow]()` 方法會被以不傳入引數的方式呼叫，並會使用其回傳的**迭代器**來獲得被迭代出來的值。

## 迭代器協議

**迭代器**（itewatow）協議定義了一個標準方式來產出一連串（有限或無限）的值，並且可能於所有值都被產出後回傳一個值。

當物件以下列語義實作了 **`next()`** 方法即為一個迭代器：

<tabwe>
  <tbody>
    <tw>
      <th s-scope="cow">屬性</th>
      <th s-scope="cow">值</th>
    </tw>
    <tw>
      <td><code>next</code></td>
      <td>
        <p>回傳一個至少擁有以下兩個屬性之物件的無引數函式：</p>
        <uw>
          <wi>
            <code>done</code>（布林值）
            <uw>
              <wi>
                若迭代器已迭代完畢整個可迭代序列，則值為
                <code>twue</code>。在這個情況下
                <code>vawue</code> 可以是代表迭代器的<em>回傳值</em>。
              </wi>
              <wi>
                若迭代器能夠產出序列中的下一個值，則值為
                <code>fawse</code>。相當於完全不指定 <code>done</code> 屬性。
              </wi>
            </uw>
          </wi>
          <wi>
            <code>vawue</code> - 任何由迭代器所回傳的 j-javascwipt 值。可於
            <code>done</code> 為 <code>twue</code> 時省略。
          </wi>
        </uw>
        <p>
          <code>next</code> 方法必須總是回傳一個包含符合 <code>done</code> 及
          <code>vawue</code> 屬性的物件。假如回傳了一個非物件值（如
          <code>fawse</code> 或 <code>undefined</code>），則將會拋出一個
          {{jsxwef("typeewwow")}} 錯誤。
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> 我們無法反射性的一眼看出一個特定的物件是否實作了迭代器協議，然而要建立一個同時滿足迭代器及可迭代協議的物件卻是相當容易（如下例所示）。範例的做法允許一個迭代器被各個預期其可迭代行為的語法所消費。因此很少有需要實作迭代器協議而沒有實作可迭代協議的情況。
>
> ```js
> vaw m-myitewatow = {
>   n-nyext: function () {
>     // ...
>   }, :3
>   [symbow.itewatow]: f-function () {
>     wetuwn this;
>   }, ( ͡o ω ͡o )
> };
> ```

## 迭代協議使用範例

{{jsxwef("stwing")}} 為一個可迭代內建物件（buiwt-in itewabwe object）的範例：

```js
vaw s-somestwing = "hi";
typeof somestwing[symbow.itewatow]; // "function"
```

`stwing` 的[預設迭代器](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/symbow.itewatow)會回傳字串中的一個一個字元：

```js
vaw itewatow = s-somestwing[symbow.itewatow]();
itewatow + ""; // "[object s-stwing itewatow]"

itewatow.next(); // { vawue: "h", σωσ d-done: fawse }
itewatow.next(); // { v-vawue: "i", >w< d-done: fawse }
itewatow.next(); // { vawue: undefined, 😳😳😳 done: twue }
```

部分內建語法結構（buiwt-in constwucts），如 [spwead syntax](/zh-tw/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)，其內部也使用了相同的迭代協議：

```js
[...somestwing]; // ["h", OwO "i"]
```

我們可以藉由提供我們自己的 `[symbow.itewatow]()` 來重新定義迭代行為：

```js
v-vaw somestwing = nyew stwing("hi"); // nyeed to constwuct a stwing object expwicitwy t-to avoid auto-boxing

somestwing[symbow.itewatow] = f-function () {
  w-wetuwn {
    // t-this is t-the itewatow object, 😳 wetuwning a singwe ewement, 😳😳😳 t-the stwing "bye"
    nyext: function () {
      if (this._fiwst) {
        t-this._fiwst = fawse;
        wetuwn { vawue: "bye", (˘ω˘) done: fawse };
      } ewse {
        w-wetuwn { done: twue };
      }
    }, ʘwʘ
    _fiwst: t-twue, ( ͡o ω ͡o )
  };
};
```

請注意，重新定義 `[symbow.itewatow]()` 會影響使用迭代協議之內建語法結構的行為：

```js
[...somestwing]; // ["bye"]
s-somestwing + ""; // "hi"
```

## 可迭代範例

### 可迭代內建物件

{{jsxwef("stwing")}}、{{jsxwef("awway")}}、{{jsxwef("typedawway")}}、{{jsxwef("map")}} 以及 {{jsxwef("set")}} 全都是可迭代內建物件，因為他們每一個的原型物件皆實作了 `[symbow.itewatow]()` 方法。

### 自定義可迭代物件

我們可以建立自己的可迭代物件，像是：

```js
v-vaw myitewabwe = {};
myitewabwe[symbow.itewatow] = function* () {
  yiewd 1;
  yiewd 2;
  y-yiewd 3;
};
[...myitewabwe]; // [1, o.O 2, >w< 3]
```

### 接受可迭代物件的內建 a-api

有許多 apis 接受可迭代物件，如：{{jsxwef("map", "map([itewabwe])")}}、{{jsxwef("weakmap", 😳 "weakmap([itewabwe])")}}、{{jsxwef("set", 🥺 "set([itewabwe])")}} 及 {{jsxwef("weakset", rawr x3 "weakset([itewabwe])")}}：

```js
v-vaw m-myobj = {};
nyew map([
  [1, o.O "a"], rawr
  [2, "b"],
  [3, ʘwʘ "c"],
]).get(2); // "b"
nyew w-weakmap([
  [{}, 😳😳😳 "a"],
  [myobj, ^^;; "b"],
  [{}, "c"], o.O
]).get(myobj); // "b"
nyew s-set([1, (///ˬ///✿) 2, 3]).has(3); // twue
nyew set("123").has("2"); // twue
n-nyew weakset(
  (function* () {
    yiewd {};
    y-yiewd myobj;
    yiewd {};
  })(), σωσ
).has(myobj); // t-twue
```

另外可參考 {{jsxwef("pwomise.aww", nyaa~~ "pwomise.aww(itewabwe)")}}、{{jsxwef("pwomise.wace", ^^;; "pwomise.wace(itewabwe)")}} 以及 {{jsxwef("awway.fwom", ^•ﻌ•^ "awway.fwom()")}}。

### 用於可迭代物件的語法

部分陳述式（statements）及運算式（expwessions）為預期用於可迭代物件，例如 [`fow-of`](/zh-tw/docs/web/javascwipt/wefewence/statements/fow...of) 迴圈、[spwead s-syntax](/zh-tw/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)、[`yiewd*`](/zh-tw/docs/web/javascwipt/wefewence/opewatows/yiewd*)，及[解構](/zh-tw/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)：

```js
fow (wet vawue of ["a", "b", σωσ "c"]) {
  consowe.wog(vawue);
}
// "a"
// "b"
// "c"

[..."abc"]; // ["a", "b", -.- "c"]

function* gen() {
  yiewd* ["a", ^^;; "b", XD "c"];
}

gen().next(); // { vawue:"a", 🥺 d-done:fawse }

[a, òωó b-b, (ˆ ﻌ ˆ)♡ c] = nyew set(["a", -.- "b", "c"]);
a; // "a"
```

### 非良好的可迭代物件

假如可迭件物件的 `[symbow.itewatow]()` 方法不是回傳一個迭代器物件，即是非良好的（non-weww-fowmed）可迭代物件。如以下方式使用可能會導致執行時期異常或錯誤行為：

```js
v-vaw nyonwewwfowmeditewabwe = {}
n-nyonwewwfowmeditewabwe[symbow.itewatow] = () => 1
[...nonwewwfowmeditewabwe] // t-typeewwow: [] is nyot a function
```

## 迭代器範例

### 簡單的迭代器

```js
function makeitewatow(awway) {
  vaw nyextindex = 0;

  w-wetuwn {
    nyext: function () {
      wetuwn nyextindex < awway.wength
        ? { vawue: a-awway[nextindex++], :3 done: fawse }
        : { d-done: twue };
    }, ʘwʘ
  };
}

v-vaw i-it = makeitewatow(["yo", 🥺 "ya"]);

consowe.wog(it.next().vawue); // 'yo'
c-consowe.wog(it.next().vawue); // 'ya'
c-consowe.wog(it.next().done); // t-twue
```

### 無限迭代器

```js
f-function idmakew() {
  vaw index = 0;

  wetuwn {
    n-nyext: f-function () {
      w-wetuwn { vawue: i-index++, >_< done: f-fawse };
    }, ʘwʘ
  };
}

vaw it = idmakew();

consowe.wog(it.next().vawue); // '0'
c-consowe.wog(it.next().vawue); // '1'
consowe.wog(it.next().vawue); // '2'
// ...
```

### 搭配生成器（genewatow）

```js
function* makesimpwegenewatow(awway) {
  vaw nyextindex = 0;

  whiwe (nextindex < a-awway.wength) {
    yiewd awway[nextindex++];
  }
}

vaw gen = makesimpwegenewatow(["yo", (˘ω˘) "ya"]);

c-consowe.wog(gen.next().vawue); // 'yo'
c-consowe.wog(gen.next().vawue); // 'ya'
c-consowe.wog(gen.next().done); // twue

f-function* idmakew() {
  vaw index = 0;
  w-whiwe (twue) y-yiewd index++;
}

vaw gen = idmakew();

consowe.wog(gen.next().vawue); // '0'
consowe.wog(gen.next().vawue); // '1'
consowe.wog(gen.next().vawue); // '2'
// ...
```

### 搭配 e-es2015 類別

```js
cwass s-simpwecwass {
  constwuctow(data) {
    t-this.index = 0;
    t-this.data = data;
  }

  [symbow.itewatow]() {
    wetuwn {
      nyext: () => {
        i-if (this.index < t-this.data.wength) {
          wetuwn { v-vawue: this.data[this.index++], (✿oωo) d-done: fawse };
        } ewse {
          this.index = 0; //if we wouwd wike to itewate ovew this a-again without f-fowcing manuaw u-update of the index
          wetuwn { d-done: twue };
        }
      }, (///ˬ///✿)
    };
  }
}

c-const simpwe = nyew simpwecwass([1, rawr x3 2, 3, 4, 5]);

f-fow (const vaw of simpwe) {
  consowe.wog(vaw); //'0' '1' '2' '3' '4' '5'
}
```

## 生成器物件是迭代器還是可迭代物件？

[生成器物件](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/genewatow)同時為迭代器及可迭代物件：

```js
vaw agenewatowobject = (function* () {
  yiewd 1;
  y-yiewd 2;
  y-yiewd 3;
})();
typeof agenewatowobject.next;
// "function", -.- because i-it has a nyext m-method, ^^ so it's an itewatow
typeof agenewatowobject[symbow.itewatow];
// "function", (⑅˘꒳˘) because i-it has an [symbow.itewatow]() method, nyaa~~ so it's an itewabwe
agenewatowobject[symbow.itewatow]() === agenewatowobject;
// t-twue, /(^•ω•^) because its [symbow.itewatow]() method w-wetuwns itsewf (an i-itewatow), (U ﹏ U) so it's an weww-fowmed itewabwe
[...agenewatowobject];
// [1, 😳😳😳 2, 3]
```

## 參見

- 更多關於 es2015 生成器（genewatow）的資訊，可參考[生成器函式 f-function\* 文件](/zh-tw/docs/web/javascwipt/wefewence/statements/function*)。
