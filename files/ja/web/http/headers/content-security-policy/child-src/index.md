---
title: "CSP: child-src"
slug: Web/HTTP/Headers/Content-Security-Policy/child-src
l10n:
  sourceCommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{HTTPSidebar}}

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) における **`child-src`** ディレクティブは、[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)と {{HTMLElement("frame")}} や {{HTMLElement("iframe")}} などの要素を使用して読み込んだネストした閲覧コンテキストに対して有効なソースを定義しています。ワーカーでは、準拠しないリクエストは、ユーザーエージェントによって致命的なネットワークエラーとして扱われます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP バージョン</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">ディレクティブ種別</th>
      <td>{{Glossary("Fetch directive", "フェッチディレクティブ")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} の代替</th>
      <td>
        あり。このディレクティブがない場合、ユーザーエージェントは <code>default-src</code> ディレクティブを探していきます。
      </td>
    </tr>
  </tbody>
</table>

## 構文

`child-src` ポリシーでは、1 つまたは複数のソースを許可することができます。

```http
Content-Security-Policy: child-src <source>;
Content-Security-Policy: child-src <source> <source>;
```

### ソース

`<source>` は、 [CSP ソース値](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#ソース)にあるいずれかの値を取ることができます。

なお、この同じ値のセットはすべての{{Glossary("fetch directive", "フェッチディレクティブ")}}（と[他の多くのディレクティブ](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#関連ディレクティブ)）で使用できます。

## 例

### 違反している場合

この CSP ヘッダーがあったとします。

```http
Content-Security-Policy: child-src https://example.com/
```

この {{HTMLElement("iframe")}} とワーカーはブロックされ、読み込まれません。

```html
<iframe src="https://not-example.com"></iframe>

<script>
  const blockedWorker = new Worker("data:application/javascript,…");
</script>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("frame")}} および {{HTMLElement("iframe")}}
- {{domxref("Worker")}}, {{domxref("SharedWorker")}}, {{domxref("ServiceWorker")}}
