---
title: download
slug: Web/SVG/Reference/Attribute/download
l10n:
  sourceCommit: 94a841dba1498c685a18e72d041fd9057f302d6c
---

**`download`** 属性は、ブラウザーに対して {{Glossary("URL")}} へ移動する代わりにダウンロードするよう指示するもので、これによりユーザーにはローカルファイルとして保存するかどうかを尋ねるプロンプトが表示されます。

この属性は、以下の SVG 要素で使用できます。

- {{SVGElement("a")}}

## 値

`download` 属性には、オプションで文字列値を指定することが可能です。

- 値が指定されていない場合（論理属性形式）、ブラウザーはダウンロード用のファイル名と拡張子を提案として提示しますが、これらは以下のソースに基づいて決定されることがあります。
  - HTTP の {{HTTPHeader("Content-Disposition")}} ヘッダー
  - URL [パス](/ja/docs/Web/API/URL/pathname)の最後の部分
  - {{Glossary("MIME_type", "メディア種別")}}（{{HTTPHeader("Content-Type")}} ヘッダー、[`data:` URL](/ja/docs/Web/URI/Reference/Schemes/data) の最初、 [`blob:` URL](/ja/docs/Web/URI/Reference/Schemes/blob) の {{domxref("Blob.type")}} のいずれか
- 文字列が指定された場合、ブラウザーはその文字列をダウンロード時のファイル名の提案として使用します。`/` および `\` 文字はアンダースコア (`_`) に変換されます。ファイルシステムによっては、ファイル名に他の文字の使用が禁止されている場合があるため、ブラウザーは必要に応じて候補となるファイル名を調整します。

## 解説

`download` 属性は、[同一オリジン URL](/ja/docs/Web/Security/Defenses/Same-origin_policy) または `blob:` および `data:` スキームに対してのみ動作します。

ダウンロードの動作は、ブラウザーやユーザーの設定、その他の要因によって異なります。ダウンロードが始まる前に確認メッセージが表示される場合があり、ファイルは外部アプリケーションまたはブラウザー自体で自動的に保存されたり、開かれたりすることがあります。

{{httpheader("Content-Disposition")}} ヘッダーが `download` 属性と競合する場合、その結果として生じる動作は、そのヘッダーの内容によって異なります。

- ヘッダーにファイル名が指定されている場合、そのファイル名は `download` 属性で指定されたファイル名よりも優先されます。
- ヘッダーで `inline` が指定されている場合、Chrome と Firefox は `download` 属性を優先し、そのリソースをダウンロード対象として扱います。

## 例

### `download` の効果のデモ

この例では、SVG リンクに `download` 属性を追加した場合の効果を示しています。

```css hidden live-sample___download-effect
html,
body {
  height: 100%;
}

svg {
  height: 100px;
}
```

#### HTML

この例では、同じ [`data:` URL](/ja/docs/Web/URI/Reference/Schemes/data) を指す、よく似た 2 つの SVG リンクを紹介します。この URL には、赤いハートの形をした画像がエンコードされています。1 つ目のリンクには `download` 属性が_記載されていません_。リンクテキストは「私の画像を表示」となっています。2つ目のリンクには `download` 属性が記載されており、リンクテキストは「私の画像をダウンロード」となっています。

```html live-sample___download-effect
<svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">
  <a
    href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 85 C20 55 5 35 5 22 C5 8 15 0 28 0 C36 0 44 5 50 14 C56 5 64 0 72 0 C85 0 95 8 95 22 C95 35 80 55 50 85Z' fill='%23e03'/%3E%3C/svg%3E">
    <text x="10" y="25">画像を表示</text>
  </a>
</svg>

<hr />

<svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">
  <a
    href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 85 C20 55 5 35 5 22 C5 8 15 0 28 0 C36 0 44 5 50 14 C56 5 64 0 72 0 C85 0 95 8 95 22 C95 35 80 55 50 85Z' fill='%23e03'/%3E%3C/svg%3E"
    download="heart.svg">
    <text x="10" y="25">画像をダウンロード</text>
  </a>
</svg>
```

#### 結果

{{EmbedLiveSample("download-effect", "320", "220")}}

2 つのリンクをクリックして、その効果の違いを確認してください。1 つ目はリンク先の画像に遷移し、埋め込み文書内で表示させます。2 つ目は、画像のダウンロードを開始します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGElement("a")}}
- {{SVGAttr("href")}}
- {{domxref("SVGAElement.download")}}
