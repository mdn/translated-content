---
title: "HTMLMediaElement: crossOrigin プロパティ"
short-title: crossOrigin
slug: Web/API/HTMLMediaElement/crossOrigin
l10n:
  sourceCommit: cc756217fbcb8214730fe736973ec15f3592a246
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.crossOrigin`** プロパティは、画像等の要素のための CORS 設定です。 詳しくは、 [CORS 設定属性](/ja/docs/Web/HTML/Reference/Attributes/crossorigin)を参照してください。

## 値

リソースをフェッチする際に使用する CORS モードを指定するキーワードの文字列。取りうる値は以下のとおりです。

- `anonymous` または空文字列 (`""`)
  - : {{domxref("HTMLMediaElement")}} から送られたリクエストは `cors` {{domxref("Request.mode", "モード", "", "nocode")}}と `same-origin` {{domxref("Request.credentials", "資格情報", "", "nocode")}}モードを使用します。これは CORS が有効であり、文書が読み込まれた元と同じ元からリソースが読み取られた場合に資格情報が送信されるということを意味しています。
- `use-credentials`
  - : {{domxref("HTMLMediaElement")}} から送られたリクエストは `cors` {{domxref("Request.mode", "モード", "", "nocode")}} と `include` {{domxref("Request.credentials", "資格情報", "", "nocode")}}モードを使用します。要素によってリクエストされたすべてのリソースは、フェッチがどのドメインから取得されたかに関わらず、CORSを使用します。

`crossOrigin` プロパティに他の値を指定した場合は、`anonymous` を指定したのと同じことになります。

`crossOrigin` プロパティを指定しない場合、リソースは CORS なしで取得されます（`no-cors` {{domxref("Request.mode", "モード", "", "nocode")}} および `same-origin` {{domxref("Request.credentials", "資格情報", "", "nocode")}}モード）。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLImageElement.crossOrigin")}}
- {{domxref("HTMLLinkElement.crossOrigin")}}
- {{domxref("HTMLScriptElement.crossOrigin")}}
