---
title: "Text: wholeText プロパティ"
slug: Web/API/Text/wholeText
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{ apiref("DOM") }}

**`wholeText`** は {{domxref("Text")}} インターフェイスのプロパティで、そのノードに論理的に隣接するすべての {{domxref("Text")}} ノードのすべてのテキストを返すものです。
テキストは文書中の順序で連結されます。
これにより、任意のテキストノードを指定し、隣接するすべてのテキストを 1 つの文字列として取得することができます。

> [!NOTE]
> これは {{domxref("Node.normalize()")}} を呼び出してそのテキストノードの値を読み取るのに似ていますが、ツリーを変更することはありません。

## 値

接続されたテキストの文字列です。

## 例

ウェブページに次のような簡単な段落があったとします。

```html
<p>
  Through-hiking is great!
  <strong>No insipid election coverage!</strong> However,
  <a href="https://en.wikipedia.org/wiki/Absentee_ballot">casting a ballot</a>
  is tricky.
</p>
```

中央の文章が気に入らないと判断し、削除します。

```js
const paragraph = document.querySelector("p"); // 段落を読み取る
paragraph.removeChild(para.childNodes[1]); // strong のテキストを削除
```

これで _"Through-hiking is great! However, casting a ballot is tricky."_ となり、ハイパーリンクの前はノード 2 つになります。

1. {{domxref("Text")}} で、`"Through-hiking is great!"` という文字列を含むもの
2. 2 番目の `Text` ノードで、`" However, "` という文字列を含むもの

これらの 2 つのノードを一度に取得するには、 `para.childNodes[0].wholeText` を呼び出します。

```js
console.log(`'${paragraph.childNodes[0].wholeText}'`); // 'Through-hiking is great!   However, '
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("Text")}} インターフェイス
