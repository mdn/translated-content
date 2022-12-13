---
title: InputEvent.dataTransfer
slug: Web/API/InputEvent/dataTransfer
l10n:
  sourceCommit: a36633398f827c87eb593f9647ed00bf33fd5b34
---

{{APIRef("UI Events")}}

**`dataTransfer`** は {{domxref("InputEvent")}} インターフェイスの読み取り専用プロパティで、 このプロパティは、編集可能なコンテンツに追加または削除されたリッチテキストまたはプレーンテキストデータに関する情報を含む {{domxref("DataTransfer")}} オブジェクトを返します。

## 値

{{domxref("DataTransfer")}} オブジェクトです。

## 例

次の単純な例では、[input](/ja/docs/Web/API/HTMLElement/input_event) イベントにイベントリスナーを設定して、コンテンツが contenteditable {{htmlelement("p")}} 要素に貼り付けられると、その HTML ソースを [`InputEvent.dataTransfer.getData()`](/ja/docs/Web/API/DataTransfer/getData) メソッドを介して取得して入力欄の下に続く段落で報告するようにしています。

指定されたコンテンツの一部をコピー＆ペーストして、その効果を確かめてみてください。

```html
<p><span style="font-weight: bold; color: blue">Whoa, bold blue text!</span></p>
<p>
  <span style="font-style: italic; color: red">Exciting: italic red text!</span>
</p>
<p>Boring normal text ;-(</p>

<hr />

<p contenteditable="true">
  Go on, try pasting some content into this editable paragraph and see what
  happens!
</p>

<p class="result"></p>
```

```js
const editable = document.querySelector('p[contenteditable]');
const result = document.querySelector('.result')

editable.addEventListener('input', (e) => {
  result.textContent = e.dataTransfer.getData('text/html');
});
```

{{EmbedLiveSample('Examples', '100%', 250)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
