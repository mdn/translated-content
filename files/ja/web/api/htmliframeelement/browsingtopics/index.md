---
title: "HTMLIFrameElement: browsingTopics プロパティ"
short-title: browsingTopics
slug: Web/API/HTMLIFrameElement/browsingTopics
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> この機能は現在、2 つのブラウザーベンダーから反対されています。反対の詳細については、[標準の位置づけ](/ja/docs/Web/API/Topics_API#standards_positions)の節をご覧ください。

**`browsingTopics`** は {{domxref("HTMLIFrameElement")}} インターフェイスのプロパティで、関連付けられた {{htmlelement("iframe")}} のソースに対するリクエストとともに、現在のユーザーが選択したトピックを {{httpheader("Sec-Browsing-Topics")}} ヘッダーで送信すべきであることを指定する論理値です。これは、HTML の `browsingtopics` 属性を反映しています。

詳しくは[トピック API の使用](/ja/docs/Web/API/Topics_API/Using)を参照してください。

## 値

論理値。既定値は `false` です。関連付けられた `<iframe>` のソースリクエストを、現在のユーザーが選択したトピックを含む {{httpheader("Sec-Browsing-Topics")}} ヘッダーとともに送信するには、これを `true` に設定します。

## 例

### 取得

`browsingtopics` を `true` に設定し、宣言的に `<iframe>` コンテンツを読み込みます。

```html
<iframe browsingtopics title="Advertising container" src="adtech1.example">
  ...
</iframe>
```

スクリプトを使用して `browsingTopics` の値をログ出力します。

```js
const iframeElem = document.querySelector("iframe");
console.log(iframeElem.browsingTopics); // 対応しているブラウザーでは true が返る
```

### 設定

最小限の `<iframe>` を指定します。

```html
<iframe> ... </iframe>
```

`browsingtopics` を `true` に設定し、スクリプト経由で `<iframe>` コンテンツを読み込みます。

```js
const iframeElem = document.querySelector("iframe");

iframeElem.browsingTopics = true;
iframeElem.title = "Advertising container";
iframeElem.src = "adtech1.example";
```

## 仕様書

この機能は公式標準の一部ではありませんが、[トピック API 非公式提案草案](https://patcg-individual-drafts.github.io/topics/)で定義されています。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [トピック API](/ja/docs/Web/API/Topics_API)
