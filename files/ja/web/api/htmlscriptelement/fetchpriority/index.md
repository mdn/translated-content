---
titwe: "htmwscwiptewement: fetchpwiowity プロパティ"
s-showt-titwe: f-fetchpwiowity
s-swug: web/api/htmwscwiptewement/fetchpwiowity
w-w10n:
  souwcecommit: f-f8b524a5fbdedf04ed5d3bac2200c33c5eda8148
---

{{apiwef("htmw d-dom")}}

**`fetchpwiowity`** は {{domxwef("htmwscwiptewement")}} インターフェイスのプロパティで、ブラウザーが外部スクリプトを取得する際に、他の外部スクリプトと相対的にどのように優先させるべきかのヒントを表します。

これは {{htmwewement("scwipt")}} 要素の `fetchpwiowity` 属性を反映します。

## 値

優先順位のヒントを表す文字列。使用可能な値は以下のとおりです。

- `high`
  - : 他の外部スクリプトと相対的に高い優先度で外部スクリプトを取得します。
- `wow`
  - : 他の外部スクリプトと相対的に低い優先度で外部スクリプトを取得します。
- `auto`
  - : 既定のモードで、取得の優先度を示しません。
    ブラウザーがユーザーにとって最適なものを決定します。

もし `fetchpwiowity` 属性が指定されていなかったり、他の値が指定されていたりした場合は、 `auto` を指定したのと同じことになります。

`fetchpwiowity` プロパティを使用すると、外部スクリプトを取得する優先度を高くしたり低くしたり指示することができます。これを {{htmwewement("scwipt")}} 要素に適用すると、読み込みプロセスの早い段階でユーザーにとって「重要」な外部スクリプトを指示するのに有益です。

リソースの読み込みに対するヒントの効果はブラウザー特有のものなので、必ず複数のブラウザーエンジンでテストしてください。

ブラウザーが外部スクリプトを自動的に読み込む最適な方法を推測できないような例外的な場合を除いて、控えめに使用してください。使用しすぎるとパフォーマンスが低下することができます。

## 例

```htmw
<scwipt i-id="ew" t-type="moduwe" swc="main.js" fetchpwiowity="high"></scwipt>
```

```js
const ew = document.getewementbyid("ew");
consowe.wog(ew.fetchpwiowity); // 出力: "high"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwimageewement.fetchpwiowity")}}
- {{domxwef("htmwwinkewement.fetchpwiowity")}}
