---
title: rel
slug: Web/SVG/Reference/Attribute/rel
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

**`rel`** 属性は、リンク先のリソースと現在の文書との関係を定義する、空白区切りの一意な値のリストを定義します。これらのキーワードは意味的な定義を行います。この属性は、次の SVG 要素で使用できます。

- {{SVGElement("a")}}

## 例

```html
<svg viewBox="0 0 150 20" xmlns="http://www.w3.org/2000/svg">
  <a href="https://example.com" rel="external noopener">
    <text x="5" y="15">ウェブサイト</text>
  </a>
</svg>
```

{{EmbedLiveSample("Example", "300", "100")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>キーワードの空白区切りリスト</td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

`rel` 属性は、値としてキーワードの空白区切りリストを取ります。一般的なキーワードには次のものがあります。

- `alternate`
  - : リンク先の文書の代替表現を提供します。
- `author`
  - : 文書の著者へのリンクを提供します。
- `bookmark`
  - : リンク要素が最も密接に関連付けられる節をブックマークするために使用するパーマリンクを提供します。
- `external`
  - : 参照先の文書が現在のサイトの一部ではないことを示します。
- `help`
  - : 状況に応じたヘルプ文書へリンクします。
- `license`
  - : 現在の文書が対象となる著作権ライセンスへリンクします。
- `nofollow`
  - : 推奨されていない文書へリンクするか、検索エンジンにこのリンクをたどらないよう指示します。
- `noopener`
  - : リンク先の閲覧コンテキストに文書 (`window.opener`) へのアクセス権を与えずにリンクを開きます。
- `noreferrer`
  - : リンク先に {{HTTPHeader("Referer")}} ヘッダーを送らずにリンクを開きます。
- `opener`
  - : `noopener` と逆の動作で、リンク先の閲覧コンテキストに文書 (`window.opener`) へのアクセス権を与えてリンクを開きます。
- `privacy-policy`
  - : 参照先の文書が現在のサイトのプライバシーポリシーであることを示します。
- `search`
  - : 参照先の文書が、文書を検索するための専用インターフェイスを含むことを示します。
- `tag`
  - : 現在の文書に適用されるタグ（識別子）を指定します。
- `terms-of-service`
  - : 参照先の文書が、現在の文書の提供者と利用者候補との間の利用条件を含むことを示します。
- `prev`
  - : 文書が連続する一連の一部であり、リンク先がその前の文書であることを示します。
- `next`
  - : `prev` と逆で、文書が連続する一連の一部であり、リンク先がその次の文書であることを示します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGAttr("href")}}
- {{HTMLElement("a")}}
- {{domxref("SVGAElement.rel")}}
