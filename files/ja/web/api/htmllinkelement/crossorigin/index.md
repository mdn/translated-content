---
title: "HTMLLinkElement: crossOrigin プロパティ"
short-title: crossOrigin
slug: Web/API/HTMLLinkElement/crossOrigin
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("HTML DOM")}}

**`crossOrigin`** は {{domxref("HTMLLinkElement")}} インターフェイスのプロパティで、リソースを取得するときに使用するオリジンをまたぐリソース共有 ({{Glossary("CORS")}}) の設定を指定します。

## 値

リソース取得時に使用する CORS モードを指定するキーワードの文字列です。使用できる値は次のとおりです。

- `anonymous` または空文字列 (`""`)
  - : {{domxref("HTMLLinkElement")}} が送信するリクエストは、`cors` {{domxref("Request.mode", "mode", "", "nocode")}} と `same-origin` {{domxref("Request.credentials", "credentials", "", "nocode")}} モードを使用します。つまり、CORS が有効になり、リソースが文書の読み込み元と同じオリジンから取得される場合に限り、資格情報が送信されます。
- `use-credentials`
  - : {{domxref("HTMLLinkElement")}} が送信するリクエストは、`cors` {{domxref("Request.mode", "mode", "", "nocode")}} と `include` {{domxref("Request.credentials", "credentials", "", "nocode")}} モードを使用します。要素によるすべてのリソースリクエストで、取得元のドメインにかかわらず CORS が使用されます。

`crossOrigin` プロパティにそれ以外の値を指定した場合は、`anonymous` を指定した場合と同じです。

`crossOrigin` プロパティを指定しない場合、リソースは CORS を使用せずに取得されます（`no-cors` の {{domxref("Request.mode", "mode", "", "nocode")}} で `same-origin` の {{domxref("Request.credentials", "credentials", "", "nocode")}} モード）。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLImageElement.crossOrigin")}}
- {{domxref("HTMLMediaElement.crossOrigin")}}
- {{domxref("HTMLScriptElement.crossOrigin")}}
