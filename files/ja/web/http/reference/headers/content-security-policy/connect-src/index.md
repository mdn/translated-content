---
title: "Content-Security-Policy: connect-src ディレクティブ"
short-title: connect-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/connect-src
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) における **`connect-src`** ディレクティブは、スクリプトインターフェイスを使用して読み込むことができる URL を制限します。以下の API が制限の対象となります。

- {{HTMLElement("a")}} の [`ping`](/ja/docs/Web/HTML/Reference/Elements/a#ping) 属性
- {{domxref("Window/fetch", "fetch()")}}
- {{domxref("Window/fetchLater", "fetchLater()")}} {{experimental_inline}}
- {{domxref("XMLHttpRequest")}}
- {{domxref("WebSocket")}}
- {{domxref("EventSource")}}
- {{domxref("Navigator.sendBeacon()")}}

> [!NOTE]
> `connect-src 'self'` はすべてのブラウザーで websocket スキーマを解決するわけではありません。この[問題](https://github.com/w3c/webappsec-csp/issues/7)に詳細情報があります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP バージョン</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">ディレクティブ種別</th>
      <td>{{Glossary("Fetch directive", "フェッチディレクティブ")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} による代替</th>
      <td>
        あり。このディレクティブがない場合、ユーザーエージェントは <code>default-src</code> ディレクティブを探します。
      </td>
    </tr>
  </tbody>
</table>

## 構文

```http
Content-Security-Policy: connect-src 'none';
Content-Security-Policy: connect-src <source-expression-list>;
```

このディレクティブは、次のいずれかの値を指定することができます。

- `'none'`
  - : この種類のリソースは読み込まれません。単一引用符は必須です。
- `<source-expression-list>`
  - : ソース表現の値を空白で区切ったリストです。この種類のリソースは、指定されたソース表現のいずれかと一致した場合に読み込まれます。このディレクティブでは、以下のソース表現の値が適用できます。
    - [`<host-source>`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

## 例

### 違反の場合

次の CSP ヘッダーを指定した場合、

```http
Content-Security-Policy: connect-src https://example.com/
```

次の接続はブロックされ、読み込まれません。

```html
<a ping="https://not-example.com" href="/">リンク</a>
<script>
  const response = fetch("https://not-example.com/");

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://not-example.com/");
  xhr.send();

  const ws = new WebSocket("wss://not-example.com/");

  const es = new EventSource("https://not-example.com/");

  navigator.sendBeacon("https://not-example.com/", {
    /* … */
  });
</script>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("a")}} の [`ping`](/ja/docs/Web/HTML/Reference/Elements/a#ping) 属性
- {{domxref("Window/fetch", "fetch()")}}
- {{domxref("XMLHttpRequest")}}
- {{domxref("WebSocket")}}
- {{domxref("EventSource")}}
