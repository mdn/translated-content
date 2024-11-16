---
title: "HTMLAnchorElement: attributionSrc プロパティ"
short-title: attributionSrc
slug: Web/API/HTMLAnchorElement/attributionSrc
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("Attribution Reporting API")}}{{securecontext_header}}{{SeeCompatTable}}

**`attributionSrc`** は {{domxref("HTMLAnchorElement")}} インターフェイスのプロパティで、{{htmlelement("a")}} 要素の [`attributionsrc`](/ja/docs/Web/HTML/Element/a#attributionsrc) 属性をプログラムから取得および設定ます。`attributionsrc` は、ブラウザーに {{httpheader("Attribution-Reporting-Eligible")}} ヘッダーを送信するように指定します。サーバー側では、レスポンスで {{httpheader("Attribution-Reporting-Register-Source")}} ヘッダーを送信し、[ナビゲーションベースの帰属元](/ja/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources)を登録するために使用されます。

ブラウザーは、ナビゲーションレスポンスを受信すると、ナビゲーションベースの帰属ソース（{{httpheader("Attribution-Reporting-Register-Source")}} レスポンスヘッダーで指定されたもの）に関連付けられたソースデータを格納します。

詳細は、[帰属報告 API](/ja/docs/Web/API/Attribution_Reporting_API) を参照してください。

> **メモ:** `<a>` 要素は帰属のトリガーとして使用することはできず、ソースのみです。

## 値

文字列です。このプロパティには、取得や設定ができる 2 つのバージョンがあります。

- 空文字列、すなわち `aElem.attributionSrc=""` です。これは、`href` 属性が指し示すのと同じサーバーに {{httpheader("Attribution-Reporting-Eligible")}} ヘッダーが送信されることを指定します。この点は、帰属元の登録を同じサーバーで処理する場合は問題ありません。
- 1 つ以上の URL を含む値、例えば次のようなものです。

  ```js
  aElem.attributionSrc =
    "https://a.example/register-source https://b.example/register-source";
  ```

  これは、リクエストされたリソースが管理下のサーバーにない場合や、別のサーバーでの帰属元の登録を処理したい場合に便利です。この場合、`attributionSrc` の値として 1 つ以上の URL を指定することができます。リソースへのリクエストが発生すると、リソースのオリジンに加えて、attributionSrcで指定された URL に {{httpheader("Attribution-Reporting-Eligible")}} ヘッダーが送信されます。これらの URL は、ソースを登録するために {{httpheader("Attribution-Reporting-Register-Source")}} で応答することができます。

  > [!NOTE]
  > 複数の URL を指定するということは、同じ機能に複数の帰属ソースを登録できるということになります。例えば、成功を測定しようとしているさまざまなキャンペーンが、異なるデータに関する異なるレポートの生成に関与している場合、異なるキャンペーンを行うことができます。

## 例

### 空の attributionSrc の設定

```html
<a href="https://shop.example"> Click to visit our shop </a>
```

```js
const aElem = document.querySelector("a");
aElem.attributionSrc = "";
```

### URL を格納するアトリビューション Src を設定するには

```html
<a href="https://ourshop.example"> Click to visit our shop </a>
```

```js
// encode the URLs in case they contain special characters
// such as '=' that would be improperly parsed.
const encodedUrlA = encodeURIComponent("https://a.example/register-source");
const encodedUrlB = encodeURIComponent("https://b.example/register-source");

const aElem = document.querySelector("a");
aElem.attributionSrc = `${encodedUrlA} ${encodedUrlB}`;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [帰属報告 API](/ja/docs/Web/API/Attribution_Reporting_API)
