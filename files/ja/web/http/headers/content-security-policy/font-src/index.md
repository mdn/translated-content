---
title: 'CSP: font-src'
slug: Web/HTTP/Headers/Content-Security-Policy/font-src
l10n:
  sourceCommit: 36001a269f4d7b2b3ac6de79e942a5f849bb87d8
---

{{HTTPSidebar}}

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`font-src`** ディレクティブは、 {{cssxref("@font-face")}} によってロードされるフォントの有効なソースを指定します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP バージョン</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">ディレクティブ種別</th>
      <td>{{Glossary("Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} による代替</th>
      <td>
        あり。このディレクティブがない場合、ユーザーエージェントは
        <code>default-src</code> ディレクティブを探します。
      </td>
    </tr>
  </tbody>
</table>

## 構文

`font-src` ポリシーには、1 つ以上のソースが許可されています。

```http
Content-Security-Policy: font-src <source>;
Content-Security-Policy: font-src <source> <source>;
```

### ソース

`<source>` は、 [CSP ソース値](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#ソース)にあるいずれかの値を取ることができます。

なお、この同じ値のセットはすべての{{Glossary("fetch directive", "フェッチディレクティブ")}}（と [他の多くのディレクティブ](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#関連ディレクティブ)）で使用できます。

## 例

### 違反例

この CSP ヘッダーがある場合、

```http
Content-Security-Policy: font-src https://example.com/
```

以下のフォントリソースの読み込みはブロックされ、読み込まれません。

```html
<style>
  @font-face {
    font-family: "MyFont";
    src: url("https://not-example.com/font");
  }
  body {
    font-family: "MyFont";
  }
</style>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- {{cssxref("@font-face")}}
