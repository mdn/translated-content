---
title: "CSP: connect-src"
slug: Web/HTTP/Headers/Content-Security-Policy/connect-src
l10n:
  sourceCommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{HTTPSidebar}}

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) における **`connect-src`** ディレクティブは、スクリプトインターフェイスを使用して読み込むことができる URL を制限します。以下の API が制限の対象となります。

- {{HTMLElement("a")}} の {{htmlattrxref("ping", "a")}} 属性
- {{domxref("fetch()")}}
- {{domxref("XMLHttpRequest")}}
- {{domxref("WebSocket")}}
- {{domxref("EventSource")}}
- {{domxref("Navigator.sendBeacon()")}}

> **メモ:** `connect-src 'self'` はすべてのブラウザーで websocket スキーマを解決するわけではありません。この[問題](https://github.com/w3c/webappsec-csp/issues/7)に詳細情報があります。

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

connect-src ポリシーには、1 つ以上のソースが許可されています。

```http
Content-Security-Policy: connect-src <source>;
Content-Security-Policy: connect-src <source> <source>;
```

### ソース

`<source>` は、 [CSP ソース値](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#ソース)にあるいずれかの値を取ることができます。

なお、この同じ値のセットはすべての{{Glossary("fetch directive", "フェッチディレクティブ")}}（と [他の多くのディレクティブ](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#関連ディレクティブ)）で使用できます

## 例

### 違反の場合

以下の CSP ヘッダーを指定した場合、

```http
Content-Security-Policy: connect-src https://example.com/
```

以下のコネクションはブロックされ、読み込まれません。

```html
<a ping="https://not-example.com">
  <script>
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://not-example.com/");
    xhr.send();

    const ws = new WebSocket("https://not-example.com/");

    const es = new EventSource("https://not-example.com/");

    navigator.sendBeacon("https://not-example.com/", {
      /* … */
    });
  </script></a
>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

### 互換性のメモ

- Firefox 23 以前では、`xhr-src` が `connect-src` ディレクティブの代わりに、{{domxref("XMLHttpRequest")}} を制限するだけのために使用されていました。

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("a")}} の {{htmlattrxref("ping", "a")}} 属性
- {{domxref("fetch()")}}
- {{domxref("XMLHttpRequest")}}
- {{domxref("WebSocket")}}
- {{domxref("EventSource")}}
