---
title: "HTMLScriptElement: crossOrigin プロパティ"
short-title: crossOrigin
slug: Web/API/HTMLScriptElement/crossOrigin
l10n:
  sourceCommit: cc756217fbcb8214730fe736973ec15f3592a246
---

{{APIRef("HTML DOM")}}

**`crossOrigin`** は {{domxref("HTMLScriptElement")}} インターフェイスのプロパティで、この script 要素の{{Glossary("CORS", "オリジン間リソース共有")}}設定を反映します。他の[オリジン](/ja/docs/Glossary/Origin)からのクラシックスクリプトの場合、完全なエラー情報が公開されるかどうかを制御します。モジュールスクリプトでは、スクリプト自身とインポートするスクリプトを制御します。詳細は [CORS 設定属性](/ja/docs/Web/HTML/Reference/Attributes/crossorigin)を参照してください。

## 値

リソースを取得する際に使用する CORS モードを指定するキーワードの文字列。使用可能な値は以下のとおりです。

- `anonymous` または空文字列 (`""`)
  - : {{domxref("HTMLScriptElement")}} で送信されるリクエストは、`cors` {{domxref("Request.mode", "モード", "", "nocode")}}および `same-origin` の{{domxref("Request.credentials", "資格情報", "", "nocode")}}モードを使用します。これは、CORS が有効で、文書が読み込まれたのと同じオリジンからリソースが取得された場合に、資格情報が送信されるということです。
- `use-credentials`
  - : {{domxref("HTMLScriptElement")}} で送信されるリクエストは、`cors` {{domxref("Request.mode", "モード", "", "nocode")}}および `include` の{{domxref("Request.credentials", "資格情報", "", "nocode")}}モードを使用します。この要素によるすべてのリソースリクエストは、取得するドメインに関係なく、CORS を使用します。

`crossOrigin` プロパティに他の値を指定した場合は、`anonymous` を指定したのと同じことになります。

`crossOrigin` プロパティが指定されていない場合、リソースは CORS なし（`no-cors` {{domxref("Request.mode", "モード", "", "nocode")}}および `same-origin` の {{domxref("Request.credentials", "資格情報", "", "nocode")}}モード）で取得されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLImageElement.crossOrigin")}}
- {{domxref("HTMLLinkElement.crossOrigin")}}
- {{domxref("HTMLMediaElement.crossOrigin")}}
