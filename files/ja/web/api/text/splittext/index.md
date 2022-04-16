---
title: Text.splitText()
slug: Web/API/Text/splitText
tags:
  - メソッド
  - リファレンス
browser-compat: api.Text.splitText
translation_of: Web/API/Text/splitText
---
{{APIRef("DOM")}}

**`splitText()`** は {{domxref("Text")}} インターフェイスのメソッドで、この {{domxref("Text")}} ノードを指定したオフセットで 2 つに分割し、両方のノードを兄弟としてツリーの中に保持します。

分割後、現在のノードには指定したオフセット位置までのすべてのコンテンツが設定され、新規作成された同じ種類のノードには残りのテキストが設定されます。新しく作成されたノードは呼び出し元に返されます。
元のノードに親があった場合、新しいノードは元のノードの次の兄弟として挿入されます。
オフセットが元のノードの長さと等しい場合、新しく作成されたノードにはデータがありません。

分割されたテキストノードは、 {{domxref("Node.normalize()")}} メソッドを用いて結合することができます。

## 構文

```js
newNode = textNode.splitText(offset)
```

### 引数

- `offset`
  - : テキストノードを分割する直前の位置。

### 返値

新しく生成された {{domxref("Text")}} ノードを返し、指定されたオフセット位置以降のテキストが格納されます。

### 例外

- `IndexSizeError` {{domxref("DOMException")}}
  - : 指定されたオフセットが負の値であるか、ノードのテキストの 16 ビット単位の文字数よりも大きい場合に発生します。
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : ノードが読取専用の場合に発生します。

## 例

この例では、 {{HTMLElement("p")}} のテキストが 2 つのテキストノードに分割され、 {{HTMLElement("u")}} がその間に挿入されます。

```html
<p>foobar</p>
```

```js
const p = document.querySelector('p');

// <p> の中身をテキストノードとして取得
const foobar = p.firstChild;

// 'foobar' を二つのテキストノード 'foo' と 'bar' に分割し、
// 'bar' を const として保存
const bar = foobar.splitText(3);

// <u> 要素を作成して ' new content ' を含める
const u = document.createElement('u');
u.appendChild(document.createTextNode(' new content '));

// <u> を 'bar' の前に追加
p.insertBefore(u, bar);

// 結果: <p>foo<u> new content </u>bar</p>
```

{{EmbedLiveSample("Example", 700, 70)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("Text")}} インターフェイス
- 逆のメソッド: {{domxref("Node.normalize")}}
