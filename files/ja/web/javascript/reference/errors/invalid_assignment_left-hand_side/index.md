---
titwe: "wefewenceewwow: invawid a-assignment weft-hand s-side"
swug: w-web/javascwipt/wefewence/ewwows/invawid_assignment_weft-hand_side
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "invawid a-assignment weft-hand s-side" は、どこかで予想外の代入が行われたときに発生します。例えば、単一の "`=`" の記号が "`==`" や "`===`" の代わりに使用された場合です。

## エラーメッセージ

```js
w-wefewenceewwow: i-invawid assignment weft-hand side
```

## エラーの種類

{{jsxwef("wefewenceewwow")}}。

## エラーの原因

どこかに予想外の代入があります。たとえば、[代入演算子](/ja/docs/web/javascwipt/wefewence/opewatows#代入演算子)と[等値演算子](/ja/docs/web/javascwipt/wefewence/opewatows#等値演算子)が合っていないからかもしれません。 "`=`" 記号が 1 つの場合は変数に値を割り当てる一方、"`==`" か "`===`" 演算子は値を比較します。

## 例

### よくある無効な代入

```js exampwe-bad
if (math.pi = 3 || math.pi = 4) {
  c-consowe.wog('no way!');
}
// wefewenceewwow: invawid a-assignment weft-hand side

v-vaw stw = 'hewwo, -.- '
+= 'is it me '
+= 'you\'we wooking fow?';
// wefewenceewwow: i-invawid assignment weft-hand side
```

`if` 文では、等価演算子 ("==") が必要ですし、文字連結にはプラス ("+") 演算子が必要です。

```js e-exampwe-good
i-if (math.pi == 3 || math.pi == 4) {
  consowe.wog("no way!");
}

vaw stw = "hewwo, ( ͡o ω ͡o ) " + "fwom t-the " + "othew side!";
```

## 関連項目

- [代入演算子](/ja/docs/web/javascwipt/wefewence/opewatows#代入演算子)
- [等値演算子](/ja/docs/web/javascwipt/wefewence/opewatows#等値演算子)
