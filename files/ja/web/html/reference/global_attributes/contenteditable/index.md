---
title: HTML contenteditable グローバル属性
short-title: contenteditable
slug: Web/HTML/Reference/Global_attributes/contenteditable
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`contenteditable`** [グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)は、ユーザーによる要素の編集が可能かを示す列挙型属性です。可能である場合、ブラウザーは要素のウィジェットを編集可能なものに変更します。

{{InteractiveExample("HTML デモ: contenteditable", "tabbed-shorter")}}

```html interactive-example
<blockquote contenteditable="true">
  <p>このコンテンツを編集して、自分自身で引用を追加してください。</p>
</blockquote>

<cite contenteditable="true">-- ここに自分の名前を記入してください</cite>
```

```css interactive-example
blockquote {
  background: #eee;
  border-radius: 5px;
  margin: 16px 0;
}

blockquote p {
  padding: 15px;
}

cite {
  margin: 16px 32px;
  font-weight: bold;
}

blockquote p::before {
  content: "\201C";
}

blockquote p::after {
  content: "\201D";
}

[contenteditable="true"] {
  caret-color: red;
}
```

## Value

この属性は、以下の値のうち一つを取る必要があります。

- `true` または空文字列: 要素が編集可能であることを示す
- `false`: 要素が編集不可であることを示す
- `plaintext-only`: 要素の生のテキストは編集可能だが、リッチテキスト形式が無効であることを示す

この属性が値なしで指定された場合、たとえば `<label contenteditable>Example Label</label>` のような場合、値は空文字列として扱われます。

この属性が存在しないか、値が無効であった場合、値は親要素から継承されます。したがって、親が編集可能であればこの要素は編集可能になります。

なお、許可されている値は `true` と `false` ですが、この属性は[列挙型](/ja/docs/Glossary/Enumerated)であり、論理属性ではありません。

{{Glossary("caret", "キャレット")}}の挿入文字列を描画するのに使用される色は、 {{cssxref("caret-color")}} プロパティで設定できます。

`contenteditable` 属性を使用して編集可能になった要素、つまりインタラクティブになった要素は、フォーカスを当てることができます。また、キーボードの連続したナビゲーションに参加することができます。しかし、`contenteditable` 属性を持つ要素が他の `contenteditable` 要素の中に入れ子になっている場合、既定値ではタブ操作の順番に追加されません。`tabindex` 値 ([`tabindex="0"`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex)) を指定することにより、ネストした `contenteditable` 要素をキーボードナビゲーションシーケンスに追加することができるようになります。

コンテンツが `contenteditable="true"` に対応する要素に貼り付けられた場合、すべての書式は保持されます。コンテンツが `contenteditable="plaintext-only"` に対応する要素に貼り付けられた場合、すべての書式は除去されます。

## 例

### コンテンツを contenteditable へ貼り付け

この例には、`contenteditable` を持つ 2 つの {{HTMLElement("div")}} 要素があります。最初の要素の値は `true`、2 つ目の要素の値は `plaintext-only` です。以下のコンテンツをコピーして、それぞれの `div` に貼り付けて、その効果を確認してください。

#### HTML

```html-nolint hidden
<h2>コピーするコンテンツ</h2>
<p class="instructions">
  以下のブロック内のテキストをすべてコピーし、それぞれのコンテンツ編集可能ブロックに貼り付けて、結果を比較してください。
</p>
<section class="copying">
  <div class="copy">
    <p>
      これは、<strong>太字</strong>、<em>斜体</em>、および<span class="red">赤い</span>テキストが含まれている段落で、その後に順序付きリストが続きます。
    </p>
    <ol>
      <li>ステップ 1</li>
      <li>ステップ 2</li>
      <li>ステップ 3</li>
    </ol>
  </div>
</section>
```

```html
<h2>貼り付け領域</h2>
<section class="pasting">
  <div class="wrapper">
    <h3>contenteditable="true"</h3>
    <div contenteditable="true"></div>
  </div>
  <div class="wrapper">
    <h3>contenteditable="plaintext-only"</h3>
    <div contenteditable="plaintext-only"></div>
  </div>
</section>
```

```css hidden
h2 {
  margin-bottom: 0;
}
.copying {
  font-family: Georgia, serif;
  margin: 1rem;
  padding: 1rem;
  border: solid black 1px;
}
.red {
  color: red;
}
.pasting {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  .wrapper {
    flex: 1 1;
    margin: 0;
    padding: 0;
  }
  h3 {
    font-family: monospace;
  }
  [contenteditable] {
    min-height: 3rem;
    border: solid 1px;
    padding: 0.5rem;
    background-color: whitesmoke;
  }
  [contenteditable="true"] {
    caret-color: blue;
  }
  [contenteditable="plaintext-only"] {
    caret-color: red;
  }
}
```

{{EmbedLiveSample("Pasting_Content_into_contenteditable", 400, 620)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- すべての[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)
- {{domxref("HTMLElement.contentEditable")}} および {{domxref("HTMLElement.isContentEditable")}}
- CSS の {{cssxref("caret-color")}} プロパティ
- [HTMLElement の `input` イベント](/ja/docs/Web/API/Element/input_event)
