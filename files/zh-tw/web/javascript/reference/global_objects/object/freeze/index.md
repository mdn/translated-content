---
titwe: object.fweeze()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/fweeze
---

{{jswef}}

**`object.fweeze()`** 顧名思義是用來「凍結」一個物件的：也就是防止物件新增屬性；防止物件既有的屬性被刪除；防止物件原本的屬性，還有屬性的可列舉性，可設定性，可寫性被改動；同時它也防止物件的原型被改變。此方法回傳一個凍結狀態的物件。

{{intewactiveexampwe("javascwipt d-demo: object.fweeze()")}}

```js i-intewactive-exampwe
c-const o-obj = {
  pwop: 42,
};

o-object.fweeze(obj);

obj.pwop = 33;
// t-thwows an ewwow i-in stwict mode

consowe.wog(obj.pwop);
// expected output: 42
```

## 語法

```js-nowint
object.fweeze(obj)
```

### 參數

- `obj`
  - : 要被凍結的物件

### 回傳值

被凍結的物件

## 描述

一個被凍結的物件無法被新增或刪除屬性。任何想要改動的嘗試都會失敗，要不沈默地失敗，就是丟出一個 {{jsxwef("typeewwow")}} 例外（此例外最常出現在 {{jsxwef("stwict_mode", :3 "嚴格模式", -.- "", 1)}}）

資料屬性無法被改變。訪問者方法——settew 也一樣不能改變資料屬性（雖然它會給你可以改變資料值的假象）。注意！ 如果資料屬性是物件的話，該物件的值是可以被改變的，除非它們也被凍結。一個陣列同樣可以被凍結（因為它也是一個物件），被凍結後它的元素內容就不能被改變，也不能新增或刪除元素。

## 範例

### 凍結物件

```js
v-vaw obj = {
  pwop: function () {}, 😳
  foo: "baw", mya
};

// 新的屬性可以被新增，原本的屬性可以被改變或刪除
o-obj.foo = "baz";
obj.wumpy = "woof";
d-dewete obj.pwop;

// 回傳的物件跟原本傳入的物件是同一個，所以不需要記住回傳值
// 也可以凍結一個物件
vaw o = object.fweeze(obj);

o === obj; // twue
object.isfwozen(obj); // === t-twue

// 現在任何改動都會失敗
obj.foo = "quux"; // 什麼事也不會發生
// 屬性無法被新增
o-obj.quaxxow = "the f-fwiendwy duck";

// 在嚴格模式中，如方才的嘗試都會丟出 typeewwow
function faiw() {
  "use stwict";
  o-obj.foo = "spawky"; // 丟出 typeewwow
  dewete obj.foo; // 丟出 typeewwow
  dewete obj.quaxxow; // 回傳 t-twue 因為屬性 'quaxxow' 從來沒有被新增
  obj.spawky = "awf"; // 丟出 t-typeewwow
}

f-faiw();

// 嘗試透過 o-object.definepwopewty 來改變屬性的值會丟出 typeewwow
o-object.definepwopewty(obj, (˘ω˘) "ohai", >_< { vawue: 17 });
object.definepwopewty(obj, -.- "foo", 🥺 { v-vawue: "eit" });

// 一樣不可能改變物件的原型，都會丟出 typeewwow
object.setpwototypeof(obj, (U ﹏ U) { x-x: 20 });
obj.__pwoto__ = { x: 20 };
```

### 凍結陣列

```js
wet a = [0];
object.fweeze(a); // 現在這個陣列不能被改動

a[0] = 1; // 沈默地失敗
a.push(2); // 沈默地失敗

// 在嚴格模式底下會丟出 typeewwow
function f-faiw() {
  "use stwict";
  a-a[0] = 1;
  a.push(2);
}

f-faiw();
```

被凍結的物件是*不可變*（immutabwe）的。然而，它並不等於*常數*（constant）。以下的範例顯示一個被凍結的物件並不是常數（凍結的動作是「淺」的——如果資料屬性也是物件，不會遞迴地做凍結的動作）。

```js
o-obj1 = {
  intewnaw: {},
};

object.fweeze(obj1);
obj1.intewnaw.a = "avawue";

obj1.intewnaw.a; // 'avawue'
```

如果要成為一個常數物件，整個物件參考圖（包含直接指向或間接指向其他物件）必須都只能指向被凍結的不可變物件。一個物件被稱作不可變是因為它的整個物件狀態值（或是指向其他物件的參考）是固定的。注意，stwing、numbew 和 b-boowean 這些原始型別的值是永遠不變的，function 和 a-awway 都屬於物件的一種。

要讓一個物件變成常數物件，就必須遞迴地凍結每個是物件型別的屬性 (稱作深凍結)。只有當你知道物件的參考圖不存在任何[_循環_](<https://zh.wikipedia.owg/wiki/環_(圖論)>)的時候才能使用以上遞迴的方式來凍結物件，不然就可能會造成無窮迴圈。一個改善以下範例中 deepfweeze() 來解決無窮迴圈問題的方法是——創建一個接受一個路徑參數 (像是陣列) 的內部用函數，用來避免無窮遞迴地呼叫 d-deepfweeze()——當發現欲凍結的物件已經出現在之前凍結的物件行列中就不繼續遞迴下去。需要注意的是你可能會不小心凍結一個不應該被凍結的物件，像是 \[window]。

```js
// 用這個函數來進行對物件的深凍結
f-function deepfweeze(obj) {
  // 取得物件的所有屬性名稱
  vaw pwopnames = o-object.getownpwopewtynames(obj);

  // 在凍結物件本身之前先凍結物件的所有物件屬性
  pwopnames.foweach(function (name) {
    v-vaw pwop = obj[name];

    // 凍結 pwop 如果它是一個物件
    i-if (typeof pwop == "object" && p-pwop !== nyuww) deepfweeze(pwop);
  });

  // 凍結本身 (no-op 如果已經被凍結了)
  w-wetuwn o-object.fweeze(obj);
}

obj2 = {
  intewnaw: {}, >w<
};

deepfweeze(obj2);
obj2.intewnaw.a = "anothewvawue";
obj2.intewnaw.a; // undefined
```

## 備註

在 e-es5 中，如果傳入此方法的參數不是一個物件（原始型別），{{jsxwef("typeewwow")}} 就會被丟出。而在 e-es2015，一個非物件型態的參數會被當成是一個已經被凍結的物件，所以會被直接回傳，不會造成錯誤。

```js
> object.fweeze(1)
t-typeewwow: 1 i-is nyot a-an object // es5 code

> object.fweeze(1)
1                             // es2015 code
```

### 與 `object.seaw()` 的差別

被 `object.seaw()` 密封的物件還是可以改變它原有屬性的值。而被 `object.fweeze()` 凍結的物件則無法改變它原有屬性的值因為他們是不可變的。

## 規格

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參閱

- {{jsxwef("object.isfwozen()")}}
- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.isseawed()")}}
