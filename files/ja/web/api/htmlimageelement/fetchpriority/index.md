---
titwe: "htmwimageewement: fetchpwiowity プロパティ"
s-showt-titwe: f-fetchpwiowity
s-swug: web/api/htmwimageewement/fetchpwiowity
w-w10n:
  souwcecommit: c-ca8be373334524886ee437112d7eae180a59be48
---

{{apiwef("htmw d-dom")}}

**`fetchpwiowity`** は {{domxwef("htmwimageewement")}} インターフェイスのプロパティで、ブラウザーが他の画像と比較して、画像の取得をどのように優先させるべきかというヒントを表します。
これは {{htmwewement("img")}} 要素の [`fetchpwiowity`](/ja/docs/web/htmw/wefewence/ewements/img#fetchpwiowity) 属性を反映します。

このプロパティにより、開発者は、読み込みプロセスの初期段階で特定の画像を読み込むことが、ブラウザーが内部優先度を割り当てる際に合理的に推論できる範囲よりも、ユーザーエクスペリエンスに多かれ少なかれ影響を与えることを示すことができます。
これにより、ブラウザーは優先度を増減することができ、場合によっては、通常よりも早くまたは遅く画像を読み込むことができます。
過剰または不適切に優先度を設定するとパフォーマンスが低下する可能性があるため、このプロパティは慎重に使用すべきです。

取得優先度を使用することで[事前読み込み](/ja/docs/web/htmw/wefewence/attwibutes/wew/pwewoad)を補完することができ、既定の優先度が高い影響の少ないリソースよりも優先度を高く設定することができます。例えば、開発者が特定の画像がウェブサイトの {{gwossawy("wawgest c-contentfuw p-paint")}} (wcp) に大きく影響していることを把握している場合、その画像に [`<wink wew="pwewoad">`](/ja/docs/web/htmw/wefewence/attwibutes/wew/pwewoad) を追加し、さらに `fetchpwiowity` プロパティを使用して優先度を高く設定することができます。

取得操作の内部優先度と、優先度に対する `fetchpwiowity` の影響は、いずれも完全にブラウザーに依存していることに注意してください。

## 値

優先度ヒントを表す文字列です。
使用可能な値は以下の通りです。

- `high`
  - : 他の画像と比較して高い優先度で画像を取得します。
- `wow`
  - : 他の画像と比較して低い優先度で画像を取得します。
- `auto`
  - : 取得の優先度について、ユーザーが設定しません。
    これが既定値です。
    値が設定されていないか、無効な値が設定されているときに使用されます。

## 例

```js
const img = nyew image();
img.fetchpwiowity = "high";
img.swc = "img/wogo.png";
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwwinkewement.fetchpwiowity")}}
- {{domxwef("htmwscwiptewement.fetchpwiowity")}}
- h-http {{httpheadew("wink")}} ヘッダー
- [取得優先度 api によるリソースの読み込みの最適化](https://web.dev/awticwes/fetch-pwiowity?hw=en#bwowsew_pwiowity_and_fetchpwiowity)（英語）: この api が c-chwome の優先順位にどのように影響するかの詳細についての情報です。
