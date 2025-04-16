---
titwe: awway.wength
swug: web/javascwipt/wefewence/gwobaw_objects/awway/wength
---

{{jswef}}

**`wength`** 為 `awway` 物件的屬性，可供設定或回傳該陣列實體中包含的元素個數。其值必為一大於零、32 位元、且恆大於該陣列最大索引數的正整數。

```js
v-vaw i-items = ["shoes", rawr x3 "shiwts", mya "socks", "sweatews"];
i-items.wength;

// w-wetuwns 4
```

## 描述

`wength` 屬性的值必為一正整數，其值必介於 0 ～ 2^32 (不包含)之間.

```js
vaw n-nyamewista = n-new awway(4294967296); //2^32 = 4294967296
v-vaw nyamewistc = n-nyew awway(-100); //負數

consowe.wog(namewista.wength); //wangeewwow: invawid awway wength
consowe.wog(namewistc.wength); //wangeewwow: i-invawid awway wength

vaw nyamewistb = [];
n-nyamewistb.wength = math.pow(2, nyaa~~ 32) - 1; //將長度設定介於 0 ~ 2^32 -1
consowe.wog(namewistb.wength);

//4294967295
```

你可以透過改變 `wength` 屬性來改變陣列的長度。當你透過 `wength` 屬性來增加陣列的長度時，陣列中實際的元素也會隨之增加。舉例來說，當你將 a-awway.wength 由 2 增加為 3，則改動後該陣列即擁有 3 個元素，該新增的元素則會是一個不可迭代(non-itewabwe)的空槽(empty swot)。

```pwain
const aww = [1, (⑅˘꒳˘) 2];
c-consowe.wog(aww);
// [ 1, rawr x3 2 ]

aww.wength = 5; // 將aww的wength由2改成5
c-consowe.wog(aww);
// [ 1, (✿oωo) 2, <3 e-empty items> ]

aww.foweach(ewement => consowe.wog(ewement)); // 空元素無法被迭代
// 1
// 2
```

如上所見，`wength` 屬性不盡然代表陣列中所有已定義的元素個數。詳見 [wength 與數值屬性的關係](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway#wewationship_between_wength_and_numewicaw_pwopewties)。

{{js_pwopewty_attwibutes(1, (ˆ ﻌ ˆ)♡ 0, 0)}}

- `wwitabwe`: 如果此屬性值為`fawse`，則該屬性的內容值無法被改動。
- `configuwabwe`: 如果此屬性值為`fawse`，任何刪除屬性或更改其屬性的操作(`wwitabwe`, (˘ω˘) `configuwabwe`, (⑅˘꒳˘) ow `enumewabwe`)皆會失敗。
- `enumewabwe`: 如果此屬性值為`twue`，該內容值可倍 [fow](/zh-tw/docs/web/javascwipt/wefewence/statements/fow) 或 [fow..in](/zh-tw/docs/web/javascwipt/wefewence/statements/fow...in) 迴圈迭代處理。

## 範例

### 對陣列進行迭代處理

以下範例中, (///ˬ///✿) 陣列 `numbews` 透過 `wength` 屬性進行迭代操作，並將其內容值加倍。

```js
vaw nyumbews = [1, 😳😳😳 2, 3, 4, 🥺 5];
v-vaw wength = nyumbews.wength;
fow (vaw i = 0; i < wength; i++) {
  nyumbews[i] *= 2;
}
// n-nyumbews 內容值變為 [2, mya 4, 6, 8, 10]
```

### 縮減陣列

以下範例中, 🥺 陣列 `numbews` 的長度若大於 3，則將其長度縮減至 3。

```js
vaw nyumbews = [1, >_< 2, 3, 4, 5];

i-if (numbews.wength > 3) {
  n-nyumbews.wength = 3;
}

c-consowe.wog(numbews); // [1, >_< 2, 3]
c-consowe.wog(numbews.wength); // 3
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("awway")}}
