---
title: 'HTMLElement: beforeinput イベント'
slug: Web/API/HTMLElement/beforeinput_event
tags:
  - API
  - イベント
  - HTML DOM
  - HTMLElement
  - InputEvent
  - リファレンス
  - beforeinput
translation_of: Web/API/HTMLElement/beforeinput_event
---
{{APIRef}}

DOM の **`beforeinput`** イベントは、{{HTMLElement("input")}}、{{HTMLElement("select")}}、{{HTMLElement("textarea")}} 要素の値が変更されようとしているときに発生します。 このイベントは、{{domxref("HTMLElement.contentEditable", "contenteditable")}} が有効になっている要素、および {{domxref("Document.designMode", "designMode")}} がオンになっている要素にも適用されます。

これにより、ブラウザーが DOM ツリーを変更する前に、ウェブアプリケーションがテキスト編集の動作を上書きすることができ、入力イベントをより詳細に制御してパフォーマンスを向上させることができます。

`contenteditable` や `designMode` の場合、イベントのターゲットは**編集ホスト**です。これらのプロパティが複数の要素に適用された場合、編集ホストは、親が編集可能ではない直近の先祖要素になります。

<table class="properties">
  <tbody>
    <tr>
      <th>バブリング</th>
      <td>あり</td>
    </tr>
    <tr>
      <th>キャンセル</th>
      <td>可</td>
    </tr>
    <tr>
      <th>インターフェイス</th>
      <td>{{DOMxRef("InputEvent")}}</td>
    </tr>
    <tr>
      <th>イベントハンドラープロパティ</th>
      <td>なし</td>
    </tr>
    <tr>
      <th>同期 / 非同期</th>
      <td>同期</td>
    </tr>
    <tr>
      <th>Composed</th>
      <td>はい</td>
    </tr>
    <tr>
      <th>既定のアクション</th>
      <td>DOM 要素の更新</td>
    </tr>
  </tbody>
</table>

## 例

### 機能の検出

以下の関数は、 `beforeinput` に対応していれば true を返します。

```js
function isBeforeInputEventAvailable() {
  return window.InputEvent && typeof InputEvent.prototype.getTargetRanges === "function";
}
```

### 単純なロガー

この例では、 {{HtmlElement("input")}} 要素に適用された新しい値に置き換える直前に、要素の現在の値をログに記録します。

#### HTML

```html
<input placeholder="テキストを入力" name="name"/>
<p id="values"></p>
```

#### JavaScript

```js
const input = document.querySelector('input');
const log = document.getElementById('values');

input.addEventListener('beforeinput', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
```

#### 結果

{{EmbedLiveSample("Simple_logger")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連イベント: [`input`](/ja/docs/Web/API/HTMLElement/input_event)
