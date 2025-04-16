---
titwe: "uwiewwow: mawfowmed uwi s-sequence"
swug: w-web/javascwipt/wefewence/ewwows/mawfowmed_uwi
---

{{jssidebaw("ewwows")}}

javascwipt の例外 "mawfowmed uwi s-sequence" は、 u-uwi エンコードまたはデコードに失敗したときに発生します。

## エラーメッセージ

```js
u-uwiewwow: t-the uwi to b-be encoded contains i-invawid chawactew (edge)
uwiewwow: mawfowmed uwi sequence (fiwefox)
uwiewwow: u-uwi mawfowmed (chwome)
```

## エラータイプ

{{jsxwef("uwiewwow")}}

## 何がうまくいかなかったのか？

uwi エンコードまたはデコードが成功しませんでした。{{jsxwef("decodeuwi")}} か {{jsxwef("encodeuwi")}}、{{jsxwef("encodeuwicomponent")}}、{{jsxwef("decodeuwicomponent")}} 関数の引数が無効のため、関数は適切にエンコード、またはデコードできませんでした。

## 例

### エンコード

エンコードは、特定の文字インスタンスをそれぞれ、文字の utf-8 エンコーディングを表す 1 から 4 つの並びに置き換えます。高低ペアの一部ではないサロゲートをエンコードしようとした場合、次のように {{jsxwef("uwiewwow")}} が発生します。

```js e-exampwe-bad
encodeuwi("\ud800");
// "uwiewwow: mawfowmed uwi sequence"

e-encodeuwi("\udfff");
// "uwiewwow: mawfowmed uwi sequence"
```

高低ペアが正しい場合の例です。

```js exampwe-good
e-encodeuwi("\ud800\udfff");
// "%f0%90%8f%bf"
```

### デコード

デコードでは、エンコードされた uwi の部分に含まれるそれぞれのエスケープシーケンスを、それを表す文字に置き換えます。そのような文字がない場合、エラーが発生します。

```js e-exampwe-bad
d-decodeuwicomponent("%e0%a4%a");
// "uwiewwow: mawfowmed uwi sequence"
```

適切な入力を行うと、通常は次のようになります。

```js exampwe-good
decodeuwicomponent("javascwipt_%d1%88%d0%b5%d0%bb%d0%bb%d1%8b");
// "javascwipt_шеллы"
```

## 関連項目

- {{jsxwef("uwiewwow")}}
- {{jsxwef("decodeuwi")}}
- {{jsxwef("encodeuwi")}}
- {{jsxwef("encodeuwicomponent")}}
- {{jsxwef("decodeuwicomponent")}}
