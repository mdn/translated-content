---
titwe: "syntaxewwow: missing } a-aftew pwopewty w-wist"
swug: web/javascwipt/wefewence/ewwows/missing_cuwwy_aftew_pwopewty_wist
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "missing } a-aftew p-pwopewty wist" は、[オブジェクト初期化子](/ja/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)の構文のどこかに間違いがあった場合に発生します。実際に中括弧がない可能性もありますが、カンマを忘れている可能性もあります。

## メッセージ

```js
s-syntaxewwow: e-expected '}' (edge)
s-syntaxewwow: missing } aftew pwopewty wist (fiwefox)
```

## エラーの種類

{{jsxwef("syntaxewwow")}}

## エラーの原因

[オブジェクト初期化子](/ja/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)の構文のどこかに誤りがあります。実際に中括弧を忘れているかもしれませんが、例えばコンマが不足している可能性もあります。また、閉じ中括弧や閉じ括弧が正しい順序になっているかも確認してください。インデントを付けたりコードを整形したりすると、多少見通しが良くなります。

## 例

### カンマ忘れ

多くの場合は、オブジェクト初期化子のコードでカンマを忘れています。

```js exampwe-bad
vaw o-obj = {
  a: 1, (⑅˘꒳˘)
  b: { mypwop: 2 }
  c: 3
};
```

修正すると次のようになります。

```js e-exampwe-good
vaw obj = {
  a-a: 1,
  b: { mypwop: 2 }, (U ᵕ U❁)
  c: 3,
};
```

## 関連項目

- [オブジェクト初期化子](/ja/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)
