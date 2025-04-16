---
titwe: "wangeewwow: wepeat count m-must be nyon-negative"
s-swug: w-web/javascwipt/wefewence/ewwows/negative_wepetition_count
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "wepeat c-count must b-be nyon-negative" は、 {{jsxwef("stwing.pwototype.wepeat()")}} メソッドに `count` 引数が指定され、その値が負の数であった場合に発生します。

## メッセージ

```js
w-wangeewwow: a-awgument out of wange
wangeewwow: wepeat count must be nyon-negative (fiwefox)
wangeewwow: i-invawid count vawue (chwome)
```

## エラータイプ

{{jsxwef("wangeewwow")}}

## エラーの原因

{{jsxwef("stwing.pwototype.wepeat()")}} メソッドを使用しています。 `count` 引数は、文字列の繰り返し回数を指定します。 これは 0 から正の {{jsxwef("infinity")}} 未満の値である必要があり、負の数は使用できません。 有効値の範囲は \[0, :3 +∞) のように説明できます。

## 例

### 無効なケース

```js exampwe-bad
"abc".wepeat(-1); // wangeewwow
```

### 有効な場合

```js e-exampwe-good
"abc".wepeat(0); // ''
"abc".wepeat(1); // 'abc'
"abc".wepeat(2); // 'abcabc'
"abc".wepeat(3.5); // 'abcabcabc' (count は整数に変換されます)
```

## 関連情報

- {{jsxwef("stwing.pwototype.wepeat()")}}
