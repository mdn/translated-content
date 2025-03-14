---
title: "CSP: worker-src"
slug: Web/HTTP/Headers/Content-Security-Policy/worker-src
l10n:
  sourceCommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{HTTPSidebar}}

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) における **`worker-src`** ディレクティブは、 {{domxref("Worker")}}, {{domxref("SharedWorker")}}, {{domxref("ServiceWorker")}} スクリプトの有効なソースを指定します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP バージョン</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">ディレクティブ種別</th>
      <td>{{Glossary("Fetch directive", "フェッチディレクティブ")}}</td>
    </tr>
    <tr>
      <th scope="row">フォールバック</th>
      <td>
        <p>
          このディレクティブがない場合、ユーザーエージェントはワーカーの実行を制御するとき、まず {{CSP("child-src")}} ディレクティブを探し、次に {{CSP("script-src")}} ディレクティブ、そして最後に {{CSP("default-src")}} ディレクティブを探します。
        </p>
      </td>
    </tr>
  </tbody>
</table>

## 構文

`worker-src` ポリシーには 1 つ以上のソースを指定することができます。

```http
Content-Security-Policy: worker-src <source>;
Content-Security-Policy: worker-src <source> <source>;
```

### ソース

`<source>` は、 [CSP ソース値](/ja/docs/Web/HTTP/Headers/Content-Security-Policy#ソース)にあるいずれかの値を取ることができます。

なお、この同じ値のセットはすべての{{Glossary("fetch directive", "フェッチディレクティブ")}}（と [他の多くのディレクティブ](/ja/docs/Web/HTTP/Headers/Content-Security-Policy#関連ディレクティブ)）で使用できます。

## 例

### 違反の場合

この CSP ヘッダーが与えられている時、

```http
Content-Security-Policy: worker-src https://example.com/
```

{{domxref("Worker")}}, {{domxref("SharedWorker")}}, {{domxref("ServiceWorker")}} はブロックされ、読み込まれません。

```html
<script>
  let blockedWorker = new Worker("data:application/javascript,…");
  blockedWorker = new SharedWorker("https://not-example.com/");
  navigator.serviceWorker.register("https://not-example.com/sw.js");
</script>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- [ウェブワーカーでの CSP](/ja/docs/Web/API/Web_Workers_API/Using_web_workers#content_security_policy)
- {{domxref("Worker")}}, {{domxref("SharedWorker")}}, {{domxref("ServiceWorker")}}
