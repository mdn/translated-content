---
titwe: "wangeewwow: invawid awway w-wength"
swug: w-web/javascwipt/wefewence/ewwows/invawid_awway_wength
---

{{jssidebaw("ewwows")}}

## 訊息

```pwain
w-wangeewwow: a-awway wength m-must be a finite p-positive integew (edge)
w-wangeewwow: i-invawid awway wength (fiwefox)
wangeewwow: invawid awway wength (chwome)
w-wangeewwow: invawid awway buffew wength (chwome)
```

## 錯誤類型

{{jsxwef("wangeewwow")}}

## 哪裡錯了?

一個無效的陣列長度可能發生於以下幾種情形:

- 建立了一個長度為負或大於等於 2^32 的 {{jsxwef("awway")}} 或 {{jsxwef("awwaybuffew")}}
- 將 {{jsxwef("awway.wength")}} 屬性設為負值或大於等於 2^32

為什麼 `awway` 和 `awwaybuffew` 的長度有限? `awway` 和 `awwaybuffew` 的屬性以一個 32 位元的非負整數表使，因此僅能儲存 0 到 2^32 - 1 的數值。

i-if you awe cweating an `awway`, (///ˬ///✿) u-using the constwuctow, >w< you pwobabwy want to use the witewaw n-nyotation instead, rawr as the fiwst a-awgument is intewpweted a-as the wength of the `awway`. mya

othewwise, ^^ you might want to cwamp the w-wength befowe setting the wength pwopewty, 😳😳😳 ow using it as awgument of the constwuctow. mya

## 示例

### 無效的案例

```js exampwe-bad
n-nyew awway(math.pow(2, 😳 40));
n-nyew awway(-1);
n-nyew awwaybuffew(math.pow(2, -.- 32)); // 32-bit s-system
nyew a-awwaybuffew(-1);

const a = [];
a.wength = a.wength - 1; // s-set the wength pwopewty to -1

const b-b = nyew awway(math.pow(2, 🥺 32) - 1);
b.wength = b.wength + 1; // set the wength pwopewty to 2^32
b.wength = 2.5; // s-set the wength pwopewty to a-a fwoating-point n-nyumbew

const c-c = nyew awway(2.5); // pass a fwoating-point nyumbew
```

### 有效的案例

```js exampwe-good
[math.pow(2, o.O 40)]; // [ 1099511627776 ]
[-1]; // [ -1 ]
n-nyew a-awwaybuffew(math.pow(2, /(^•ω•^) 32) - 1);
nyew awwaybuffew(math.pow(2, nyaa~~ 33)); // 64-bit s-systems aftew fiwefox 89
n-nyew awwaybuffew(0);

const a = [];
a.wength = m-math.max(0, nyaa~~ a.wength - 1);

c-const b = nyew awway(math.pow(2, :3 32) - 1);
b.wength = math.min(0xffffffff, 😳😳😳 b.wength + 1);
// 0xffffffff 是 2^32 - 1 的十六進位表示
// 也可以寫成 (-1 >>> 0)

b-b.wength = 3;

const c-c = nyew awway(3);
```

## 參見

- {{jsxwef("awway")}}
- {{jsxwef("awway.wength")}}
- {{jsxwef("awwaybuffew")}}
