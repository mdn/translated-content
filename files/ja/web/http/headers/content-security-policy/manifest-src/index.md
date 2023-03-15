---
title: "CSP: manifest-src"
slug: Web/HTTP/Headers/Content-Security-Policy/manifest-src
l10n:
  sourceCommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{HTTPSidebar}}

HTTP の {{HTTPHeader("Content-Security-Policy")}}`: manifest-src` ディレクティブは、どの[マニフェスト](/ja/docs/Web/Manifest)がリソースに適用されるかを指定します。

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
      <th scope="row">{{CSP("default-src")}} による代替</th>
      <td>
        あり。このディレクティブがない場合、ユーザーエージェントは <code>default-src</code> ディレクティブを探します。
      </td>
    </tr>
  </tbody>
</table>

## 構文

`manifest-src` ポリシーには、 1 つ以上のソースが許可されています。

```http
Content-Security-Policy: manifest-src <source>;
Content-Security-Policy: manifest-src <source> <source>;
```

### ソース

`<source>` は、 [CSP ソース値](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#ソース)にあるいずれかの値を取ることができます。

なお、この同じ値のセットはすべての{{Glossary("fetch directive", "フェッチディレクティブ")}}（と [他の多くのディレクティブ](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#関連ディレクティブ)）で使用できます。

## 例

### 違反する場合

この CSP ヘッダーがある場合、

```http
Content-Security-Policy: manifest-src https://example.com/
```

以下の {{HTMLElement("link")}} の各要素はブロックされ、読み込まれません。

```html
<link rel="manifest" href="https://not-example.com/manifest" />
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- [ウェブアプリマニフェスト](/ja/docs/Web/Manifest)
- {{HTMLElement("link")}}
