---
title: Text.wholeText
slug: Web/API/Text/wholeText
tags:
  - プロパティ
  - リファレンス
  - 読み取り専用
browser-compat: api.Text.wholeText
translation_of: Web/API/Text/wholeText
---
{{ apiref("DOM") }}

**`wholeText`** は {{domxref("Text")}} インターフェイスのプロパティで、そのノードに論理的に隣接するすべての {{domxref("Text")}} ノードのすべてのテキストを返すものです。
テキストは文書中の順序で連結されます。
これにより、任意のテキストノードを指定し、隣接するすべてのテキストを 1 つの文字列として取得することができます。

> **Note:** これは {{domxref("Node.normalize()")}} を呼び出してそのテキストノードの値を読み取るのに似ていますが、ツリーを変更することはありません。

## 値

接続されたテキストの文字列です。

## 例

ウェブページに次のような簡単な段落があったとします。

```html
<p>Through-hiking is great!  <strong>No insipid election coverage!</strong> However, <a href="https://en.wikipedia.org/wiki/Absentee_ballot">casting a ballot</a> is tricky.</p>
```

中央の文章が気に入らないと判断し、削除します。

```js
const para = document.getElementsByTagName("p")[0]; // 段落を読み取る
para.removeChild(para.childNodes[1]); // strong のテキストを削除
```

これで _"Through-hiking is great! However, casting a ballot is tricky."_ となり、ハイパーリンクの前はノード 2 つになります。

1. `Through-hiking is great!`
2. ` However, `

これらの 2 つのノードを一度に取得するには、 `para.childNodes[0].wholeText` を呼び出します。

```js
console.log( "'" + para.childNodes[0].wholeText + "'" ); // 'Through-hiking is great!   However, '
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("Text")}} インターフェイス
