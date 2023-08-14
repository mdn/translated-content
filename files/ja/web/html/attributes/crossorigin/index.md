---
title: "HTML 属性: crossorigin"
slug: Web/HTML/Attributes/crossorigin
---

{{HTMLSidebar}}

**`crossorigin`** 属性は、 {{ HTMLElement("audio") }}, {{ HTMLElement("img") }}, {{ HTMLElement("link") }}, {{ HTMLElement("script") }}, {{ HTMLElement("video") }} の各要素で有効であり、 [CORS](/ja/docs/Web/HTTP/CORS) への対応を提供し、したがって要素が読み取るデータのために CORS リクエストの構成を有効にします。要素によっては、属性は CORS 設定属性になります。

メディア要素の `crossorigin` コンテンツ属性は CORS 設定属性です。

これらの属性は列挙型で、以下の値を取ることができます。

- `anonymous`
  - : リクエストは CORS ヘッダーを使用し、資格情報フラグには `'same-origin'` に設定されます。宛先が同一オリジンでない限り、クッキー、クライアントサイド SSL 証明書、HTTP 認証による**ユーザー資格情報**の交換は行われません。
- `use-credentials`
  - : リクエストは CORS ヘッダーを使用し、資格情報フラグには `'include'` に設定され、**ユーザー資格情報**は常に含まれます。
- `""`
  - : `crossorigin` または `crossorigin=""` のように属性に空の値を設定すると、 `anonymous` と同じになります。

不正なキーワードや空文字列を指定すると、 `anonymous` が指定されたものと同じように扱われます。

既定では（つまり、属性が指定されていない場合）、 CORS はまったく使用されません。ユーザーエージェントはそのリソースへの完全アクセス権限を求めず、オリジン間リクエストの場合、その要素の種類に応じて一定の制限が適用されます。

<table class="no-markdown">
  <tbody>
    <tr>
      <td class="header">要素</td>
      <td class="header">制限</td>
    </tr>
    <tr>
      <td><code>img</code>, <code>audio</code>, <code>video</code></td>
      <td>
        そのリソースが {{HTMLElement("canvas")}} 内に配置された場合、要素は<a href="/ja/docs/Web/HTML/CORS_enabled_image#security_and_tainted_canvases"><em>汚染</em></a>されているとマークされます。
      </td>
    </tr>
    <tr>
      <td><code>script</code></td>
      <td>
        {{domxref('GlobalEventHandlers.onerror', 'window.onerror')}} によるエラーログへのアクセスが制限されます。
      </td>
    </tr>
    <tr>
      <td><code>link</code></td>
      <td>
        適切な <code>crossorigin</code> ヘッダーがないリクエストは破棄されることがあります。
      </td>
    </tr>
  </tbody>
</table>

> **メモ:** Firefox 83 より前では、 `crossorigin` 属性は `rel="icon"` に対応していませんでした。 [Chrome についての未解決の問題](https://bugs.chromium.org/p/chromium/issues/detail?id=1121645)もあります。

### 例: `<script>` 要素の `crossorigin`

以下の {{HTMLElement("script")}} 要素を使用すると、ユーザー資格情報を送信せずに `https://example.com/example-framework.js` スクリプトを実行します。

```html
<script src="https://example.com/example-framework.js" crossorigin="anonymous"></script>
```

### 例: 資格情報付きのウェブマニフェスト

資格情報を必要とするマニフェストを読み取るときは、同じオリジンからのファイル読み取りであっても `use-credentials` の値を使用する必要があります。

```html
<link rel="manifest" href="/app.webmanifest" crossorigin="use-credentials">
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [オリジン間リソース共有 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTML 属性: `rel`](/ja/docs/Web/HTML/Attributes/rel)

{{QuickLinksWithSubpages("/ja/docs/Web/HTML/")}}
