---
title: "Selection: modify() メソッド"
short-title: modify()
slug: Web/API/Selection/modify
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("DOM")}}

**`Selection.modify()`** メソッドは、単純なテキストコマンドを使用して、現在の選択範囲またはカーソル位置に変更を適用します。

## 構文

```js-nolint
modify(alter, direction, granularity)
```

### 引数

- `alter`
  - : 適用する変更の種類。現在のカーソル位置を移動させる場合は `"move"` を、現在の選択範囲を拡張する場合は `"extend"` を指定します。
- `direction`
  - : 現在の選択範囲を調整する方向。`"forward"` または `"backward"` を指定すると、選択位置の言語に基づいて適切な方向に調整されます。特定の方向に調整したい場合は、`"left"` または `"right"` を指定できます。
- `granularity`
  - : 現在の選択範囲またはカーソル位置を調整する移動量です。移動単位として、
    `"character"`, `"word"`, `"sentence"`,
    `"line"`, `"paragraph"`, `"lineboundary"`,
    `"sentenceboundary"`, `"paragraphboundary"`,
    `"documentboundary"` のいずれかを指定できます。

> [!NOTE]
> Firefox は
> `"sentence"`, `"paragraph"`, `"sentenceboundary"`,
> `"paragraphboundary"`, `"documentboundary"`
> を **実装していません**。WebKit と Blink はこれらを実装しています。

> [!NOTE]
> Firefox 5 以降、`"word"` の粒度には、プラットフォームのデフォルトの動作にかかわらず、その直後の空白が含まれなくなりました。これにより、動作の一貫性が向上し、かつての WebKit と同じ動作になるようになりましたが、残念ながら WebKit 側では最近、その動作が変更されてしまいました。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例では、選択範囲を変更するためのさまざまな `granularity` オプションを紹介しています。例内のどこかをクリックし（必要に応じてテキストを選択しても構いません）、ボタンをクリックして選択範囲を拡大してください。

### HTML

```html
<p>
  この例のどこかをクリックしてください。次に、下のボタンをクリックして選択範囲を展開してください。どうなるか見てみましょう。
</p>
<p>
  Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,
  cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
  maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
  repellendus.
</p>

<label for="granularity">粒度:</label>
<select id="granularity">
  <option value="character">文字 (character)</option>
  <option value="word">単語 (word)</option>
  <option value="sentence">文 (sentence)</option>
  <option value="line">行 (line)</option>
  <option value="paragraph">段落 (paragraph)</option>
  <option value="lineboundary">行境界 (lineboundary)</option>
  <option value="sentenceboundary">文境界 (sentenceboundary)</option>
  <option value="paragraphboundary">段落境界 (paragraphboundary)</option>
  <option value="documentboundary">文書境界 (documentboundary)</option>
</select>

<br /><br />

<button>選択範囲を拡張</button>
```

### JavaScript

```js
let select = document.querySelector("select");
let button = document.querySelector("button");

button.addEventListener("click", modify);

function modify() {
  let selection = window.getSelection();
  selection.modify("extend", "forward", select.value);
}
```

### 結果

{{EmbedLiveSample("Examples", 700, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先のインターフェイスである {{domxref("Selection")}}
