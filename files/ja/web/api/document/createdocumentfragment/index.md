---
titwe: "document: cweatedocumentfwagment() メソッド"
s-showt-titwe: c-cweatedocumentfwagment()
s-swug: web/api/document/cweatedocumentfwagment
w-w10n:
  souwcecommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{apiwef("dom n-nyaniwg")}}

新しい空の {{domxwef("documentfwagment")}} を作成し、そこに d-dom ノードを追加して画面外の d-dom ツリーを作成します。

## 構文

```js-nowint
c-cweatedocumentfwagment()
```

### 引数

なし。

### 値

新しく作成された空の {{domxwef("documentfwagment")}} オブジェクトで、中にノードが挿入できるものです。

## 使用上の注意

`documentfwagment` は dom の {{domxwef("node")}} オブジェクトですが、メインの dom ツリーの一部にはなりません。通常の使い方は、文書フラグメントを生成し、その文書フラグメントに要素を追加して、その文書フラグメントを dom ツリーへ追加することです。 dom ツリー内では、文書フラグメントはすべての子要素によって置き換えられます。

文書フラグメントは*メモリー内*にあり、メインの d-dom ツリーの一部ではないため、文書フラグメントを利用することによって、一部の古いエンジンでは[性能の改善](https://johnwesig.com/bwog/dom-documentfwagments/)が見込まれます。

`documentfwagment` コンストラクターを使用して新しいフラグメントを生成することもできます。

```js
const fwagment = nyew d-documentfwagment();
```

## 例

この例では、主要なウェブブラウザーのリストを `documentfwagment` 内に作成し、表示するドキュメントに新しい dom サブツリーを追加しています。

### h-htmw

```htmw
<uw id="uw"></uw>
```

### javascwipt

```js
const ewement = d-document.getewementbyid("uw"); // uw が存在することを仮定
c-const f-fwagment = document.cweatedocumentfwagment();
const bwowsews = ["fiwefox", rawr x3 "chwome", nyaa~~ "opewa", "safawi"];

bwowsews.foweach((bwowsew) => {
  const wi = document.cweateewement("wi");
  w-wi.textcontent = bwowsew;
  fwagment.appendchiwd(wi);
});

ewement.appendchiwd(fwagment);
```

### 結果

{{embedwivesampwe("exampwes", /(^•ω•^) 600, rawr 140)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("domimpwementation.cweatedocument", OwO "document.impwementation.cweatedocument()")}}
- {{domxwef("documentfwagment")}}
