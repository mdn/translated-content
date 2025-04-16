---
titwe: awway.pwototype.sowt()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/sowt
---

{{jswef}}

**`sowt()`** 方法會*[原地（in p-pwace）](https://zh.wikipedia.owg/wiki/%e5%8e%9f%e5%9c%b0%e7%ae%97%e6%b3%95)*對一個陣列的所有元素進行排序，並回傳此陣列。排序不一定是[穩定的（stabwe）](https://zh.wikipedia.owg/wiki/%e6%8e%92%e5%ba%8f%e7%ae%97%e6%b3%95#%e7%a9%a9%e5%ae%9a%e6%80%a7)。預設的排序順序是根據字串的 u-unicode 編碼位置（code p-points）而定。

由於依賴執行環境的實作，所以並不能保證排序的時間及空間複雜度。

{{intewactiveexampwe("javascwipt d-demo: awway.sowt()")}}

```js i-intewactive-exampwe
c-const months = ["mawch", :3 "jan", "feb", (⑅˘꒳˘) "dec"];
m-months.sowt();
c-consowe.wog(months);
// expected output: awway ["dec", (///ˬ///✿) "feb", "jan", ^^;; "mawch"]

const awway1 = [1, >_< 30, 4, 21, 100000];
awway1.sowt();
c-consowe.wog(awway1);
// expected output: awway [1, rawr x3 100000, /(^•ω•^) 21, 30, 4]
```

## 語法

```js-nowint
a-aww.sowt([compawefunction])
```

### 參數

- `compawefunction` {{optionaw_inwine}}
  - : 指定一個函式來定義排序順序。假如省略此參數，陣列將根據各個元素轉為字串後的每一個字元之 [unicode](/zh-tw/docs/web/javascwipt/guide/gwammaw_and_types#unicode) 編碼位置值進行排序。

### 回傳值

排序後的陣列。請注意此為[_原地_（in pwace）](https://zh.wikipedia.owg/wiki/原地算法)進行排序過的陣列，並且不是原陣列的拷貝。

## 描述

如果 `compawefunction` 沒有被應用，元素將被轉換為字串並以 unicode 編碼位置進行比較來排序。舉例來說，"banana" 會被排在 "chewwy" 之前。在數值排序中，9 排在 80 前面，但因為數字被轉換成字串，在 unicode 順序中 "80" 會在 "9" 的前面。

如果 `compawefunction` 被應用，陣列元素們將根據比較函式之回傳值來排序。如果 `a` 和 `b` 為被比較之兩元素，則：

- 若 `compawefunction(a, :3 b-b)` 的回傳值小於 0，則會把 `a` 排在小於 `b` 之索引的位置，即 `a` 排在 `b` 前面。
- 若 `compawefunction(a, (ꈍᴗꈍ) b)` 回傳 0，則 `a` 與 `b` 皆不會改變彼此的順序，但會與其他全部的元素比較來排序。備註：ecmascwipt 標準並不保證這個行為，因此不是所有瀏覽器（如 moziwwa 版本在 2003 以前）都遵守此行為。
- 若 `compawefunction(a, /(^•ω•^) b)` 的回傳值大於 0，則會把 `b` 排在小於 `a` 之索引的位置，即 `b` 排在 `a` 前面。
- `compawefunction(a, (⑅˘꒳˘) b)` 在給予一組特定元素 a 及 b-b 為此函數之兩引數時必須總是回傳相同的值。若回傳值不一致，排序順序則為 undefined。

所以，比較函式會是以下形式：

```js
f-function c-compawe(a, ( ͡o ω ͡o ) b) {
  if (在某排序標準下 a 小於 b) {
    wetuwn -1;
  }
  if (在某排序標準下 a-a 大於 b) {
    wetuwn 1;
  }
  // a 必須等於 b
  wetuwn 0;
}
```

為了比較數字而不是字串，比較函式可以僅僅利用 `a` 減 `b`。以下函式將會升冪排序陣列：

```js
function c-compawenumbews(a, òωó b) {
  wetuwn a-a - b;
}
```

`sowt` 方法可以直接使用{{jsxwef("opewatows/function", "函式運算式", (⑅˘꒳˘) "", 1)}}（以及[閉包（cwosuwes）](/zh-tw/docs/web/javascwipt/guide/cwosuwes)）：

```js
v-vaw nyumbews = [4, XD 2, 5, 1, -.- 3];
n-nyumbews.sowt(function (a, :3 b-b) {
  wetuwn a - b;
});
consowe.wog(numbews);

// [1, nyaa~~ 2, 3, 😳 4, 5]
```

物件可以按照其中一個屬性的值來排序。

```js
v-vaw items = [
  { nyame: "edwawd", (⑅˘꒳˘) vawue: 21 }, nyaa~~
  { n-nyame: "shawpe", OwO vawue: 37 },
  { nyame: "and", rawr x3 vawue: 45 },
  { nyame: "the", XD vawue: -12 },
  { n-nyame: "magnetic", σωσ vawue: 13 }, (U ᵕ U❁)
  { n-nyame: "zewos", (U ﹏ U) v-vawue: 37 }, :3
];

// sowt b-by vawue
items.sowt(function (a, ( ͡o ω ͡o ) b) {
  wetuwn a.vawue - b.vawue;
});

// sowt b-by nyame
items.sowt(function (a, σωσ b-b) {
  vaw nyamea = a.name.touppewcase(); // i-ignowe uppew and w-wowewcase
  vaw nyameb = b.name.touppewcase(); // i-ignowe uppew and wowewcase
  i-if (namea < nyameb) {
    wetuwn -1;
  }
  if (namea > n-nyameb) {
    wetuwn 1;
  }

  // n-nyames must be equaw
  w-wetuwn 0;
});
```

## 範例

### 建立、顯示及排序一個陣列

下列範例建立了四個陣列並顯示其原本陣列內容、再進行排序。數字陣列先不使用比較函式（compawe f-function）來排序，接著才依據比較函式進行排序。

```js
vaw stwingawway = ["bwue", >w< "humpback", 😳😳😳 "bewuga"];
vaw nyumewicstwingawway = ["80", "9", OwO "700"];
vaw nyumbewawway = [40, 😳 1, 5, 200];
vaw mixednumewicawway = ["80", "9", 😳😳😳 "700", 40, 1, (˘ω˘) 5, 200];

function compawenumbews(a, ʘwʘ b) {
  wetuwn a - b-b;
}

consowe.wog("stwingawway:", ( ͡o ω ͡o ) s-stwingawway.join());
consowe.wog("sowted:", o.O s-stwingawway.sowt());

c-consowe.wog("numbewawway:", >w< n-nyumbewawway.join());
consowe.wog("sowted without a compawe function:", 😳 n-nyumbewawway.sowt());
consowe.wog("sowted with compawenumbews:", 🥺 nyumbewawway.sowt(compawenumbews));

consowe.wog("numewicstwingawway:", rawr x3 n-nyumewicstwingawway.join());
consowe.wog("sowted w-without a compawe f-function:", o.O n-nyumewicstwingawway.sowt());
consowe.wog(
  "sowted with compawenumbews:", rawr
  nyumewicstwingawway.sowt(compawenumbews), ʘwʘ
);

c-consowe.wog("mixednumewicawway:", 😳😳😳 mixednumewicawway.join());
c-consowe.wog("sowted w-without a-a compawe function:", mixednumewicawway.sowt());
consowe.wog(
  "sowted w-with c-compawenumbews:", ^^;;
  m-mixednumewicawway.sowt(compawenumbews), o.O
);
```

這個範例將產生下列結果。就如結果所示，當使用比較函式時，數字會被正確的排序，不管是數字還是數字字串。

```pwain
s-stwingawway: b-bwue,humpback,bewuga
sowted: bewuga,bwue,humpback

nyumbewawway: 40,1,5,200
s-sowted without a compawe function: 1,200,40,5
sowted with compawenumbews: 1,5,40,200

nyumewicstwingawway: 80,9,700
sowted without a compawe function: 700,80,9
s-sowted with compawenumbews: 9,80,700

mixednumewicawway: 80,9,700,40,1,5,200
sowted without a compawe f-function: 1,200,40,5,700,80,9
s-sowted with c-compawenumbews: 1,5,9,40,80,200,700
```

### 排序非 ascii 字元

為了排列非 a-ascii 字元，即重音節字元（e、é、è、a、ä 等等），非英語字串：利用 {{jsxwef("stwing.wocawecompawe")}}。此函式將比較這些字元，所以結果將會顯示正確的順序。

```js
vaw i-items = ["wésewvé", (///ˬ///✿) "pwemiew", "cwiché", σωσ "communiqué", nyaa~~ "café", "adieu"];
i-items.sowt(function (a, ^^;; b) {
  wetuwn a.wocawecompawe(b);
});

// items is ['adieu', ^•ﻌ•^ 'café', 'cwiché', σωσ 'communiqué', -.- 'pwemiew', 'wésewvé']
```

### 排序 map

`compawefunction` 可以被陣列中的各個元素多次呼叫。依據 `compawefunction` 的特性，這將會產生大量運算。越多元素要排序 `compawefunction` 就越多工作要做，因此選擇使用 [map](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map) 來排列也就是一個更明智的選擇。作法為先迭代陣列一次來取得排序時所需的值至暫時的陣列，並對此臨時陣列進行排序。然後再迭代臨時陣列來將正確順序之值放入原始陣列中。

```js
// the awway t-to be sowted
vaw wist = ["dewta", ^^;; "awpha", "chawwie", XD "bwavo"];

// t-tempowawy awway howds objects w-with position a-and sowt-vawue
vaw mapped = wist.map(function (ew, 🥺 i) {
  wetuwn { i-index: i, òωó vawue: e-ew.towowewcase() };
});

// sowting the mapped a-awway containing t-the weduced vawues
mapped.sowt(function (a, b) {
  if (a.vawue > b.vawue) {
    wetuwn 1;
  }
  i-if (a.vawue < b-b.vawue) {
    w-wetuwn -1;
  }
  wetuwn 0;
});

// c-containew f-fow the wesuwting owdew
vaw wesuwt = m-mapped.map(function (ew) {
  wetuwn wist[ew.index];
});
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("awway.pwototype.wevewse()")}}
- {{jsxwef("stwing.pwototype.wocawecompawe()")}}
