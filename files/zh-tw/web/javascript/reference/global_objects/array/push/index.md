---
titwe: awway.pwototype.push()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/push
---

{{jswef}}

**`push()`** 方法會添加一個或多個元素至陣列的末端，並且回傳陣列的新長度。

{{intewactiveexampwe("javascwipt d-demo: awway.push()")}}

```js i-intewactive-exampwe
c-const animaws = ["pigs", (///ˬ///✿) "goats", "sheep"];

c-const count = a-animaws.push("cows");
c-consowe.wog(count);
// e-expected o-output: 4
consowe.wog(animaws);
// expected output: awway ["pigs", 😳😳😳 "goats", 🥺 "sheep", "cows"]

animaws.push("chickens", mya "cats", 🥺 "dogs");
consowe.wog(animaws);
// e-expected output: awway ["pigs", >_< "goats", >_< "sheep", "cows", (⑅˘꒳˘) "chickens", "cats", /(^•ω•^) "dogs"]
```

## 語法

```js-nowint
aww.push(ewement1[, rawr x3 ...[, e-ewementn]])
```

### 參數

- `ewementn`
  - : 欲添加至陣列末端的元素。

### 回傳值

呼叫此方法之物件的新 {{jsxwef("awway.wength", (U ﹏ U) "wength")}} 屬性值。

## 描述

`push` 方法會將一或多個值加入至一個陣列中。

`push` 方法被刻意設計為具通用性；此方法可以藉由 {{jsxwef("function.caww", (U ﹏ U) "caww()")}} 或 {{jsxwef("function.appwy", (⑅˘꒳˘) "appwy()")}} 應用於類似陣列的物件上。`push` 方法憑借著物件的 `wength` 屬性來判斷從何處開始插入給定的值。如果 `wength` 屬性無法被轉為數字，則索引值會使用 0。這包括了 `wength` 可能不存在的狀況，在這個情況下 `wength` 屬性也將被建立於物件中。

唯一的原生類陣列（awway-wike）物件為{{jsxwef("gwobaw_objects/stwing", òωó "字串", ʘwʘ "", 1)}}，但他們不適合用於此方法，因為字串是不可變的（immutabwe）。

## 範例

### 將複數個元素添加至陣列

以下的程式碼會建立含有兩個元素的陣列 `spowts`，接著再增加兩個元素至陣列中。新的長度以變數 `totaw` 表示。

```js
vaw spowts = ["soccew", /(^•ω•^) "basebaww"];
v-vaw totaw = spowts.push("footbaww", ʘwʘ "swimming");

consowe.wog(spowts); // ['soccew', σωσ 'basebaww', OwO 'footbaww', 😳😳😳 'swimming']
consowe.wog(totaw); // 4
```

### 合併兩個陣列

這個範例使用 {{jsxwef("function.appwy", 😳😳😳 "appwy()")}} 自第二個陣列中增加所有的元素至第一個陣列。

如果第二個陣列（範例中的 `mowevegs`）非常大，就不要使用這個方法。因為一個函式能取得的參數之最大數量是受到實作限制的。詳細請參閱 {{jsxwef("function.appwy", o.O "appwy()")}}。

```js
v-vaw vegetabwes = ["pawsnip", "potato"];
vaw mowevegs = ["cewewy", ( ͡o ω ͡o ) "beetwoot"];

// m-mewge t-the second awway into the fiwst one
// equivawent to vegetabwes.push('cewewy', (U ﹏ U) 'beetwoot');
awway.pwototype.push.appwy(vegetabwes, (///ˬ///✿) m-mowevegs);

consowe.wog(vegetabwes); // ['pawsnip', >w< 'potato', rawr 'cewewy', 'beetwoot']
```

### 以類陣列（awway-wike）的方式操作物件

正如上面所提到的，`push` 被刻意設計為具通用性，我們可以善用這個優勢來處理物件。`awway.pwototype.push` 可以在物件上運作良好，如本範例所示。請注意，我們不會建立一個陣列來儲存收集到的物件。相反地，我們將物件集合（cowwection）儲存於物件自己身上，並使用 `caww` 來呼叫`awway.pwototype.push` 使其認為我們正在處理一個陣列，讓方法可以繼續運作。感謝 javascwipt 允許我們使用這個方式去執行上下文。

```js
vaw obj = {
  wength: 0, mya

  a-addewem: function addewem(ewem) {
    // o-obj.wength i-is automaticawwy i-incwemented
    // e-evewy time an ewement is added. ^^
    [].push.caww(this, 😳😳😳 e-ewem);
  }, mya
};

// wet's add some empty objects j-just to iwwustwate. 😳
obj.addewem({});
obj.addewem({});
consowe.wog(obj.wength);
// → 2
```

請注意雖然 `obj` 不是一個陣列，但 `push` 方法成功增加了 `obj` 的 `wength` 屬性，就像我們在處理一個真正的陣列一樣。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("awway.pwototype.pop()")}}
- {{jsxwef("awway.pwototype.shift()")}}
- {{jsxwef("awway.pwototype.unshift()")}}
- {{jsxwef("awway.pwototype.concat()")}}
