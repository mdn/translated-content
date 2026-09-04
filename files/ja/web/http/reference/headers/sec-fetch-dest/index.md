---
title: Sec-Fetch-Dest ヘッダー
short-title: Sec-Fetch-Dest
slug: Web/HTTP/Reference/Headers/Sec-Fetch-Dest
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`Sec-Fetch-Dest`** は{{Glossary("fetch metadata request header", "フェッチメタデータリクエストヘッダー")}}で、リクエストの宛先を示します。
これは元のフェッチリクエストの発行元であり、フェッチされたデータが使用される場所（および方法）です。

これにより、サーバーはそのリクエストを処理すべきかどうかを、そのリクエストが*想定された*使用方法に適しているかどうかに基づいて判断できます。例えば、`audio` の宛先を持つリクエストは、音声データを要求すべきであり、他の種類のリソース（例えば、機密性の高いユーザー情報を含む文書など）を要求すべきではありません。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Fetch metadata request header", "フェッチメタデータリクエストヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>はい（<code>Sec-</code> 接頭辞）</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header", "CORS セーフリストリクエストヘッダー")}}
      </th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Sec-Fetch-Dest: audio
Sec-Fetch-Dest: audioworklet
Sec-Fetch-Dest: document
Sec-Fetch-Dest: embed
Sec-Fetch-Dest: empty
Sec-Fetch-Dest: fencedframe
Sec-Fetch-Dest: font
Sec-Fetch-Dest: frame
Sec-Fetch-Dest: iframe
Sec-Fetch-Dest: image
Sec-Fetch-Dest: manifest
Sec-Fetch-Dest: object
Sec-Fetch-Dest: paintworklet
Sec-Fetch-Dest: report
Sec-Fetch-Dest: script
Sec-Fetch-Dest: serviceworker
Sec-Fetch-Dest: sharedworker
Sec-Fetch-Dest: style
Sec-Fetch-Dest: track
Sec-Fetch-Dest: video
Sec-Fetch-Dest: webidentity
Sec-Fetch-Dest: worker
Sec-Fetch-Dest: xslt
```

このヘッダーが他の値を含んでいる場合、サーバーはこれを無視すべきです。

## ディレクティブ

> [!NOTE]
> これらのディレクティブは {{domxref("Request.destination")}} で返される値に対応しています。

- `audio`
  - : この宛先は、音声データです。 これは HTML の {{HTMLElement("audio")}} タグに由来する可能性があります。
- `audioworklet`
  - : この宛先は、音声ワークレットを使用するために取得されるデータです。これは {{domxref("Worklet.addModule()", "audioWorklet.addModule()")}} の呼び出しに由来する可能性があります。
- `document`
  - : この宛先は文書（HTML または XML）であり、リクエストはユーザーが開始した最上位ナビゲーション（例：ユーザーがリンクをクリックした結果）の結果です。
- `embed`
  - : この宛先は、埋め込みコンテンツです。これは HTML の {{HTMLElement("embed")}} タグに由来する可能性があります。
- `empty`
  - : この宛先は空の文字列です。これは独自の値を持たない宛先、例えば {{domxref("Window/fetch", "fetch()")}}, {{domxref("navigator.sendBeacon()")}}, {{domxref("EventSource")}}, {{domxref("XMLHttpRequest")}}, {{domxref("WebSocket")}} などに使用されます。
- `fencedframe` {{experimental_inline}}
  - : この宛先は[フェンスフレーム](/ja/docs/Web/API/Fenced_frame_API)です。
- `font`
  - : この宛先はフォントです。これは CSS の {{cssxref("@font-face")}} に由来する可能性があります。
- `frame`
  - : この宛先はフレームです。これは HTML の {{HTMLElement("frame")}} タグに由来する可能性があります。
- `iframe`
  - : この宛先は iframe です。これは HTML の {{HTMLElement("iframe")}} タグに由来する可能性があります。
- `image`
  - : この宛先は画像です。これは、 HTML の {{HTMLElement("img")}}、SVG の {{SVGElement("image")}}、CSS の {{cssxref("background-image")}}、CSS の {{cssxref("cursor")}}、CSS の {{cssxref("list-style-image")}} などに由来する可能性があります。
- `manifest`
  - : この宛先はマニフェストです。これは HTML の [\<link rel=manifest>](/ja/docs/Web/HTML/Reference/Attributes/rel/manifest) に由来する可能性があります。
- `object`
  - : この宛先はオブジェクトです。これは HTML の {{HTMLElement("object")}} タグに由来する可能性があります。
- `paintworklet`
  - : この宛先は描画ワークレットです。これは {{domxref('Worklet.addModule', 'CSS.PaintWorklet.addModule()')}} の呼び出しに由来する可能性があります。
- `report`
  - : この宛先はレポート（例えば、コンテンツセキュリティポリシーのレポート）です。
- `script`
  - : この宛先はスクリプトです。これは HTML の {{HTMLElement("script")}} タグまたは {{domxref("WorkerGlobalScope.importScripts()")}} の呼び出しに由来する可能性があります。
- `serviceworker`
  - : この宛先はサービスワーカーです。これは {{domxref("ServiceWorkerContainer.register","navigator.serviceWorker.register()")}} の呼び出しに由来する可能性があります。
- `sharedworker`
  - : この宛先は共有ワーカーです。これは {{domxref("SharedWorker")}} に由来する可能性があります。
- `style`
  - : この宛先はスタイルです。これは HTML の {{HTMLElement("link","&lt;link rel=stylesheet&gt;")}} または CSS の {{cssxref("@import")}} に由来する可能性があります。
- `track`
  - : この宛先は HTML テキストトラックです。これは HTML の {{HTMLElement("track")}} タグに由来する可能性があります。
- `video`
  - : この宛先は動画データです。これは HTML の {{HTMLElement("video")}} タグに由来する可能性があります。
- `webidentity`
  - : この宛先は、ユーザー認証に関連するエンドポイントです。例えば、[FedCM API](/ja/docs/Web/API/FedCM_API) において、ID プロバイダー (IdP) エンドポイントの真正性を検証し、 {{glossary("CSRF")}} 攻撃を防ぐために使用されます。
- `worker`
  - : この宛先は {{domxref("Worker")}} です。
- `xslt`
  - : この宛先は XSLT 変換です。

## 例

### Sec-Fetch-Dest の使用

{{HTMLElement("img")}} 要素によって生成されるクロスサイトリクエストは、以下の HTTP リクエストヘッダーを持つリクエストとなります（宛先が `image` であることに注意）。

```http
Sec-Fetch-Dest: image
Sec-Fetch-Mode: no-cors
Sec-Fetch-Site: cross-site
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- フェッチメタデータリクエストヘッダー: {{HTTPHeader("Sec-Fetch-Mode")}}, {{HTTPHeader("Sec-Fetch-Site")}}, {{HTTPHeader("Sec-Fetch-User")}}
- [Protect your resources from web attacks with Fetch Metadata](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
