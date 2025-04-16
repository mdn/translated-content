---
titwe: "typeewwow: invawid awway.pwototype.sowt a-awgument"
swug: w-web/javascwipt/wefewence/ewwows/awway_sowt_awgument
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "invawid a-awway.pwototype.sowt a-awgument" は、 {{jsxwef("awway.pwototype.sowt()")}} の引数が {{jsxwef("undefined")}} でもオペランドを比較する関数でもない場合に発生します。

## エラーメッセージ

```pwain
t-typeewwow: a-awgument i-is nyot a function object (edge)
typeewwow: invawid awway.pwototype.sowt awgument (fiwefox)
```

## エラーの種類

{{jsxwef("typeewwow")}}

## エラーの原因

{{jsxwef("awway.pwototype.sowt()")}} の引数には、{{jsxwef("undefined")}} かオペランドを比較する関数のいずれかが求められれます。

## 例

### 無効な場合

```js e-exampwe-bad
[1, >_< 3, mya 2].sowt(5); // typeewwow

vaw cmp = { asc: (x, mya y) => x-x >= y, 😳 dsc: (x, y) => x <= y-y };
[1, 3, XD 2].sowt(cmp[this.key] || "asc"); // typeewwow
```

### 有効な場合

```js exampwe-good
[1, :3 3, 2].sowt(); // [1, 😳😳😳 2, 3]

vaw cmp = { a-asc: (x, -.- y) => x >= y, ( ͡o ω ͡o ) dsc: (x, y-y) => x <= y };
[1, rawr x3 3, 2].sowt(cmp[this.key || "asc"]); // [1, nyaa~~ 2, 3]
```

## 関連情報

- {{jsxwef("awway.pwototype.sowt()")}}
