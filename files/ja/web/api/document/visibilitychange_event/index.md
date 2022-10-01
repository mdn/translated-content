---
title: 'Document: visibilitychange イベント'
slug: Web/API/Document/visibilitychange_event
---

{{APIRef}}

`visibilitychange` イベントは、タブのコンテンツが表示状態または非表示状態になったときに document に発生します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">キャンセル可能</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("Document.onvisibilitychange", "onvisibilitychange")}}
      </td>
    </tr>
  </tbody>
</table>

## 使用上の注意

このイベントには、更新された文書の表示・非表示状態が含まれていませんが、この情報は document の {{domxref("Document.visibilityState", "visibilityState")}} プロパティから取得することができます。

## 例

この例は、文書が表示状態になった時に音楽を再生し、文書が非表示になった時に音楽を停止します。

```js
document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === 'visible') {
    backgroundMusic.play();
  } else {
    backgroundMusic.pause();
  }
});
```

## 仕様書

| 仕様書                                                                                                           | 状態                                         | 備考 |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ---- |
| {{SpecName('Page Visibility API','#sec-visibilitychange-event','visibilitychange')}} | {{Spec2('Page Visibility API')}} |      |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Page Visibility API の使用](/ja/docs/DOM/Using_the_Page_Visibility_API)
- {{domxref("Document.visibilityState")}}
