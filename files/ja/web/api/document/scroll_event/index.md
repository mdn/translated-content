---
title: 'Document: scroll event'
slug: Web/API/Document/scroll_event
---

{{APIRef}}

**`scroll`** イベントは、ドキュメントのビューまたは要素がスクロールされたときに生じます。

<table class="properties">
  <thead></thead>
  <tbody>
    <tr>
      <th>バブリング</th>
      <td>はい</td>
    </tr>
    <tr>
      <th>キャンセル可能</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th>インターフェイス</th>
      <td>{{DOMxRef("Event")}}</td>
    </tr>
    <tr>
      <th>イベントハンドラープロパティ</th>
      <td>
        {{DOMxRef("GlobalEventHandlers.onscroll", "onscroll")}}
      </td>
    </tr>
  </tbody>
</table>

> **メモ:** iOS UIWebViews では、スクロールされている最中は `scroll` イベントは生じません。スクロールが完了したあとにのみ生じます。 詳しくは [Bootstrap issue #16202](https://github.com/twbs/bootstrap/issues/16202) をご覧ください。 Safari と WKWebViews ではこのバグは起きません。

## 例

### スクロールイベントを抑制する

`scroll` イベントは高い確率で生じることができるため、イベントハンドラーは DOM の変更といった計算上の処理コストの高い操作を実行すべきではありません。その代わり、次のように、 {{DOMxRef("Window.requestAnimationFrame()", "requestAnimationFrame()")}} や、 {{DOMxRef("WindowOrWorkerGlobalScope.setTimeout()", "setTimeout()")}} 、または {{DOMxRef("CustomEvent")}} を使ってイベントを抑制することが推奨されます。

ただし、インプットイベントやアニメーションフレームは同じような確率で生じ、そのため下記のような最適化は不要の場合が多いことに注意してください。 この例では `requestAnimationFrame` の `scroll` を最適化しています。

```js
// Reference: http://www.html5rocks.com/en/tutorials/speed/animations/

let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  // Do something with the scroll position
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

その他の類似の例を見るには、 [`resize`](/ja/docs/Web/API/Document/defaultView/resize_event) イベントページをご覧ください。

## 仕様

| 仕様書                                                           | 策定状況                         |
| ---------------------------------------------------------------- | -------------------------------- |
| {{SpecName('CSSOM View', '#scrolling-events')}} | {{Spec2('CSSOM View')}} |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Element: `scroll` event](/ja/docs/Web/API/Element/scroll_event)
