---
title: "HTMLImageElement: attributionSrc プロパティ"
short-title: attributionSrc
slug: Web/API/HTMLImageElement/attributionSrc
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("Attribution Reporting API")}}{{securecontext_header}}{{SeeCompatTable}}

**`attributionSrc`** は {{domxref("HTMLImageElement")}} インターフェイスのプロパティで、 {{htmlelement("img")}} 要素の [`attributionsrc`](/ja/docs/Web/HTML/Element/img#attributionsrc) 属性をプログラムで取得および設定し、その属性の値を反映します。`attributionsrc` は、ブラウザーに画像リクエストとともに {{httpheader("Attribution-Reporting-Eligible")}} ヘッダーを送信するように指示します。

サーバー側では、{{httpheader("Attribution-Reporting-Register-Source")}} または {{httpheader("Attribution-Reporting-Register-Trigger")}} ヘッダーをレスポンスで送信し，それぞれ画像ベースの[帰属ソース](/ja/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources)または[帰属トリガー](/ja/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers)を登録します。どのレスポンスヘッダーを送り返すべきかは、登録をトリガーした `Attribution-Reporting-Eligible` ヘッダーの値によって異なります。

ブラウザーが画像ファイルを含む応答を受信すると、ソース/トリガーが登録されます。

> [!NOTE]
> ユーザーが必ずしもその画像を認識できるとは限らないことに留意してください。それは、帰属報告のみに使用される 1x1 の透明トラッキングピクセルである可能性があります。

詳しくは[帰属報告 API](/ja/docs/Web/API/Attribution_Reporting_API) を参照してください。

## 値

文字列。このプロパティには、取得および設定できる 2 つのバージョンがあります。

- 空文字列、すなわち `imgElem.attributionSrc=""`。これは、{{httpheader("Attribution-Reporting-Eligible")}} ヘッダーを、`src` 属性が指し示すのと同じサーバーに送信することを指定します。 帰属元やトリガー登録を同じサーバーで処理する場合は、これで問題ありません。 帰属トリガーを登録する際には、このプロパティはオプションであり、省略した場合は空文字列の値が使用されます。
- 1 つ以上の URL を含む値、例えば次のようなものです。

  ```js
  imgElem.attributionSrc =
    "https://a.example/register-source https://b.example/register-source";
  ```

  これは、リクエストされたリソースが管理下のサーバーにない場合や、別のサーバーでの帰属元の登録を処理したい場合に便利です。この場合、`attributionSrc` の値として 1 つまたは複数の URL を指定することができます。リソースの要求が発生すると、{{httpheader("Attribution-Reporting-Eligible")}} ヘッダーがリソースのオリジンに加えて、`attributionSrc` で指定された URL に送信されます。これらの URL は、{{httpheader("Attribution-Reporting-Register-Source")}} または {{httpheader("Attribution-Reporting-Register-Trigger")}} の適切な方で応答して登録を完了します。

  > [!NOTE]
  > 複数の URL を指定すると、同じ機能に複数の帰属元を登録することができます。例えば、成功を測定しようとしている異なるキャンペーンがあり、異なるデータについて異なるレポートをそれぞれ作成する必要がある場合などです。

## 例

### 空の attributionSrc を設定

```html
<img src="advertising-image.png" />
```

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

### URL を含む attributionSrc の設定

```html
<img src="advertising-image.png" />
```

```js
// `=` などの特殊文字が含まれている場合、正しく解析されない
// 可能性があるため、URLをエンコードします。
const encodedUrlA = encodeURIComponent("https://a.example/register-source");
const encodedUrlB = encodeURIComponent("https://b.example/register-source");

const imgElem = document.querySelector("img");
imgElem.attributionSrc = `${encodedUrlA} ${encodedUrlB}`;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [帰属報告 API](/ja/docs/Web/API/Attribution_Reporting_API)
