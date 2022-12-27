---
title: 'Element: scroll イベント'
slug: Web/API/Element/scroll_event
---

{{APIRef}}

**`scroll`** イベントは、要素がスクロールしたときに発行されます。

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
      <td>
        {{DOMxRef("GlobalEventHandlers.onscroll", "onscroll")}}
      </td>
    </tr>
  </tbody>
</table>

> **メモ:** iOS の UIWebViews では、 `scroll` イベントはスクロールしている最中には発行されません。スクロールが完了した後に発行されます。 [Bootstrap issue #16202](https://github.com/twbs/bootstrap/issues/16202) を参照してください。 Safari と WKWebViews はこのバグの影響を受けません。

## 例

### スクロールイベントの間引き

`scroll` イベントは高い頻度で発行されるため、イベントハンドラーで DOM の変更のような計算が重い操作を実行するべきではありません。代わりに、次のように {{DOMxRef("Window.requestAnimationFrame()", "requestAnimationFrame()")}}, {{DOMxRef("WindowOrWorkerGlobalScope.setTimeout()", "setTimeout()")}}, {{DOMxRef("CustomEvent")}} などを使用してイベントを間引くことをお勧めします。

なお、ただし、 input イベントやアニメーションフレームがおよそ同じ頻度で発行されるため、以下の最適化は必要ないことがあります。この例は `requestAnimationFrame` の `scroll` イベントを最適化します。

```js
// 参照: http://www.html5rocks.com/en/tutorials/speed/animations/

let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  // スクロール位置で何かをする
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});
```

> **メモ:** それ以外例が {{domxref("Document/resize_event", "resize")}} イベントページにあります。

## 仕様書

| 仕様書                                                           | 状態                             |
| ---------------------------------------------------------------- | -------------------------------- |
| {{SpecName('CSSOM View', '#scrolling-events')}} | {{Spec2('CSSOM View')}} |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- Document: {{domxref("Document/scroll_event", "scroll")}} イベント
