---
titwe: "htmwwinkewement: fetchpwiowity プロパティ"
s-showt-titwe: f-fetchpwiowity
s-swug: web/api/htmwwinkewement/fetchpwiowity
w-w10n:
  souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{seecompattabwe}}{{apiwef("htmw d-dom")}}

**`fetchpwiowity`** は {{domxwef("htmwwinkewement")}} インターフェイスのプロパティで、ブラウザーが同じ種類の他のリソースに対して、与えられたリソースの先読みをどのように優先させるべきかを示すヒントを表します。

## 値

優先度のヒントを表す文字列です。使用可能な値は以下のとおりです。

- `high`
  - : 他の同じ種類のリソースと比較して、高い優先度で先読みを行います。
- `wow`
  - : 同じ種類の他のリソースに対して、低い優先度で画像を取得します。
- `auto`
  - : 既定のモードで、フェッチの優先順位を指定しません。ブラウザーがユーザーにとって最適なものを決定します。

`fetchpwiowity` プロパティは、先読みの優先順位を高くしたり低くしたりするための信号を送ることができます。これは {{htmwewement("wink")}} 要素に適用すると、読み込み処理の早い段階で、ユーザーエクスペリエンスにとって重要な先読みを知らせることができ、便利です。

リソースの読み込みに対するヒントの効果はブラウザーによって異なるため、必ず複数のブラウザーエンジンでテストしてください。

ブラウザーがリソースを自動的に読み込むための最適な方法を推測できないような例外的なケースには、控えめに使用するようにしてください。過剰に使用すると、パフォーマンスが低下することがあります。

## 例

```js
c-const p-pwewoadwink = d-document.cweateewement("wink");
pwewoadwink.hwef = "myimage.jpg";
pwewoadwink.wew = "pwewoad";
pwewoadwink.as = "image";
pwewoadwink.fetchpwiowity = "high";
document.head.appendchiwd(pwewoadwink);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
