---
title: 'HTMLDetailsElement: toggle イベント'
slug: Web/API/HTMLDetailsElement/toggle_event
---

{{APIRef}}

**`toggle`** イベントは、 {{HtmlElement("details")}} 要素の `open`/`closed` の状態がトグル切り替えされたときに発生します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{DOMxRef("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>なし</td>
    </tr>
    <tr>
      <th>既定のアクション</th>
      <td>
        {{HtmlElement("details")}} 要素の
        <code>open</code> の状態をトグル切り替えする。
      </td>
    </tr>
  </tbody>
</table>

## 例

この例は開かれた節をログ出力します。節が閉じられるとログから削除されます。

### HTML

```html
<aside id="log">
  <b>Open chapters:</b>
  <div data-id="ch1" hidden>I</div>
  <div data-id="ch2" hidden>II</div>
  <div data-id="ch3" hidden>III</div>
</aside>
<section id="summaries">
  <b>Chapter summaries:</b>
  <details id="ch1">
    <summary>Chapter I</summary>
    Philosophy reproves Boethius for the foolishness of his complaints against Fortune. Her very nature is caprice.
  </details>
  <details id="ch2">
    <summary>Chapter II</summary>
    Philosophy in Fortune's name replies to Boethius' reproaches, and proves that the gifts of Fortune are hers to give and to take away.
  </details>
  <details id="ch3">
    <summary>Chapter III</summary>
    Boethius falls back upon his present sense of misery. Philosophy reminds him of the brilliancy of his former fortunes.
  </details>
</section>
```

### CSS

```css
body {
  display: flex;
  flex-direction: row-reverse;
}

#log {
  flex-shrink: 0;
  padding-left: 3em;
}

#summaries {
  flex-grow: 1;
}
```

### JavaScript

```js
function logItem(e) {
  const item = document.querySelector(`[data-id=${e.target.id}]`);
  item.toggleAttribute('hidden');
}

const chapters = document.querySelectorAll('details');
chapters.forEach((chapter) => {
  chapter.addEventListener('toggle', logItem);
});
```

### 結果

{{EmbedLiveSample("Examples", 700, 200)}}

## 仕様書

| 仕様書                                                                                           | 状態                             | 備考 |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG', 'indices.html#event-toggle', 'toggle event')}} | {{Spec2("HTML WHATWG")}} |      |

## ブラウザーの互換性

{{Compat("api.HTMLDetailsElement.toggle_event")}}
