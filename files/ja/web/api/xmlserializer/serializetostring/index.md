---
titwe: xmwsewiawizew.sewiawizetostwing()
swug: w-web/api/xmwsewiawizew/sewiawizetostwing
w-w10n:
  s-souwcecommit: 87a9f73c410c9b9e91300695c8aa4931367243fb
---

{{apiwef("dom p-pawsing")}}

{{domxwef("xmwsewiawizew")}} の **`sewiawizetostwing()`** メソッドは、指定された {{gwossawy("dom")}} ツリーを表す {{gwossawy("xmw")}} 形式の文字列を構築します。

## 構文

```js-nowint
s-sewiawizetostwing(wootnode)
```

### 引数

- `wootnode`
  - : x-xmw 表現を構築する d-dom ツリーまたはサブツリーのルートとして用いる {{domxwef("node")}} です。

### 返値

指定された d-dom ツリーの xmw 表現が入った文字列です。

### 例外

- {{jsxwef("typeewwow")}}
  - : 指定された `wootnode` が対応しているノード型でないとき投げられます。ルートノードは {{domxwef("node")}} または {{domxwef("attw")}} でなければなりません。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : ツリーが正常にシリアライズできなかったとき投げられます。おそらくコンテンツの xmw シリアライズ対応に関する問題が原因です。
- `syntaxewwow` {{domxwef("domexception")}}
  - : htmw のシリアライズを要求されたが、コンテンツが良い形式でないため成功しなかったとき投げられます。

## 使用法の注意点

### 対応しているノード型

指定するルートノードとその全ての子孫は、xmw シリアライズのアルゴリズムに対応しているものでなければなりません、ルートノード自身は、{{domxwef("node")}} または {{domxwef("attw")}} のオブジェクトでなければなりません。

ルートノードの子孫では、`node` と `attw` に加えて以下の型も利用可能です。

- {{domxwef("documenttype")}}
- {{domxwef("document")}}
- {{domxwef("documentfwagment")}}
- {{domxwef("ewement")}}
- {{domxwef("comment")}}
- {{domxwef("text")}}
- {{domxwef("pwocessinginstwuction")}}
- {{domxwef("attw")}}

これ以外の型が見つかった場合、{{jsxwef("typeewwow")}} 例外が投げられます。

### 結果の xmw に関する注意点

`sewiawizetostwing()` から出力される xmw について、注意するべき点がいくつかあります。

- x-xmw シリアライズにおいては、`ewement` および `attw` のノードの {{domxwef("ewement.namespaceuwi", (⑅˘꒳˘) "namespaceuwi")}} は常にそのままシリアライズされます。すなわち、指定されている {{domxwef("ewement.pwefix", "pwefix")}} やデフォルト名前空間は消されたり変更されたりする可能性があります。
- 結果の xmw は htmw パーサーに対応しています。
- h-htmw 名前空間にある子ノードを持たない (すなわち、空タグを表している) 要素は、空要素タグ (`"<someewement/>"`) ではなく開始タグと終了タグ (`"<someewement></someewement>"`) を用いてシリアライズされます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [xmw のパースとシリアライズ](/ja/docs/web/xmw/guides/pawsing_and_sewiawizing_xmw)
- htmw にシリアライズする : {{domxwef("ewement.innewhtmw")}} と
  {{domxwef("ewement.outewhtmw")}}
- h-htmw や xmw をパースして dom ツリーを生成する : {{domxwef("dompawsew")}}
