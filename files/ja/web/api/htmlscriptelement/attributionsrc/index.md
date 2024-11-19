---
title: "HTMLScriptElement: attributionSrc プロパティ"
short-title: attributionSrc
slug: Web/API/HTMLScriptElement/attributionSrc
l10n:
  sourceCommit: dd6f6e705b7df9d505c93023593a6bae96bef9db
---

{{APIRef("Attribution Reporting API")}}{{securecontext_header}}{{SeeCompatTable}}

**`attributionSrc`** は {{domxref("HTMLScriptElement")}} インターフェイスのプロパティで、{{htmlelement("script")}} 要素の [`attributionsrc`](/ja/docs/Web/HTML/Element/script#attributionsrc) 属性をプログラムで取得・設定し、その属性値を反映します。`attributionsrc` はブラウザーにスクリプトリソースリクエストと一緒に {{httpheader("Attribution-Reporting-Eligible")}} ヘッダーを送信することを指定します。

サーバー側では、これはレスポンスで {{httpheader("Attribution-Reporting-Register-Source")}} または {{httpheader("Attribution-Reporting-Register-Trigger")}} ヘッダーを送信するトリガーとして用いられ、それぞれ JavaScript ベースの[帰属ソース](/ja/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources)または[帰属トリガー](/ja/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers)を登録します。どのレスポンスヘッダーを送り返すべきかは、登録を行った `Attribution-Reporting-Eligible` ヘッダーの値に依存します。

> [!NOTE]
> 他にも、JavaScript の帰属ソースまたはトリガーは、{{domxref("Window/fetch", "fetch()")}} リクエストに `attributionReporting` オプションをつけて送信するか（`fetch()` 呼び出しで直接設定するか、`fetch()` 呼び出しに渡された {{domxref("Request")}} オブジェクトで）、{{domxref("XMLHttpRequest")}} で {{domxref("XMLHttpRequest.setAttributionReporting", "setAttributionReporting()")}} をリクエストオブジェクトについて呼び出したりすることもできます。

詳細は[属性レポート API](/ja/docs/Web/API/Attribution_Reporting_API) です。

## 値

文字列です。このプロパティには 2 つのバージョンがあり、取得したり設定したりすることができます。

- 空文字列、すなわち `scriptElem.attributionSrc=""`。これは、{{httpheader("Attribution-Reporting-Eligible")}} ヘッダーを、`src` 属性がこの点を指すのと同じサーバーに送信することを指定します。これは、帰属ソースやトリガーの登録を同じサーバーで処理している場合には問題ありません。帰属トリガーを登録する場合、このプロパティはオプションであり、除外すると空文字列の値を使用します。
- 1 つ以上の URL を含む値です。例えば次のようなものです。

  ```js
  scriptElem.attributionSrc =
    "https://a.example/register-source https://b.example/register-source";
  ```

  これは、リクエストされたリソースがあなたが制御しているサーバーにない場合や、帰属ソースを別のサーバーに登録する処理だけを行いたい場合に有益です。この場合、`attributionSrc` の値として 1 つ以上の URL を指定します。リソースリクエストが発生すると、{{httpheader("Attribution-Reporting-Eligible")}} ヘッダーがリソースオリジンに加えて、`attributionSrc` を指定した URL にも送信されます。これらの URL は {{httpheader("Attribution-Reporting-Register-Source")}} または {{httpheader("Attribution-Reporting-Register-Trigger")}} ヘッダーで応答することができます。

  > [!NOTE]
  > 複数の URL を指定するということは、複数の帰属ソースを同じ機能に登録できるということです。例えば、成功を測定しようとしている様々なキャンペーンがあり、異なるデータで異なるレポートを生成する必要があるかもしれません。

## 例

### 空の attributionSrc を設定

```html
<script src="advertising-script.js"></script>
```

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

### attributionSrc に URL を設定

```html
<script src="advertising-script.js"></script>
```

```js
// URL に '=' のような特殊文字が格納されていると不適切に解釈されてしまうため、
// エンコードしてください。
const encodedUrlA = encodeURIComponent("https://a.example/register-source");
const encodedUrlB = encodeURIComponent("https://b.example/register-source");

const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = `${encodedUrlA} ${encodedUrlB}`;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [属性レポート API](/ja/docs/Web/API/Attribution_Reporting_API).
