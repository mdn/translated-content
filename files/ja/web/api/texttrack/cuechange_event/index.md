---
title: 'TextTrack: cuechange イベント'
slug: Web/API/TextTrack/cuechange_event
---

{{APIRef}}

**`cuechange`** イベントは、 {{domxref("TextTrack")}} が現在表示しているキューが変更されたときに発生します。このイベントは、もし表示されているものがあれば、 `TextTrack` _および_ {{domxref("HTMLTrackElement")}} の両方に発生します。

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
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>{{domxref("GlobalEventHandlers.oncuechange")}}</td>
    </tr>
  </tbody>
</table>

## 例

### TextTrack 上で

`cuechange` イベントのリスナーを `TextTrack` に設定するには、 {{domxref("EventTarget.addEventListener", "addEventListener()")}} メソッドを使用します。

```js
track.addEventListener('cuechange', function () {
  let cues = track.activeCues;  // 現在のキューの配列
});
```

あるいは、 [`oncuechange`](/ja/docs/Web/API/TextTrack/oncuechange) イベントハンドラ－プロパティを設定しても構いません。

```js
track.oncuechange = function () {
  let cues = track.activeCues; // 現在のキューの配列
}
```

### track 要素上で

基本となる {{domxref("TextTrack")}} は、 {{domxref("HTMLTrackElement.track", "track")}} プロパティで識別されますが、現在表示されているキューが変更されるたびに {{domxref("TextTrack.cuechange_event", "cuechange")}} イベントを受け取ります。これは、トラックがメディア要素に結び付けられていなくても発生します。

トラックがメディア要素に結び付けられて*いる*場合、 {{HTMLElement("track")}} 要素を {{HTMLElement("audio")}} または {{HTMLElement("video")}} 要素の子として使用すると、 `cuechange` イベントは {{domxref("HTMLTrackElement")}} にも送信されます。

```js
let textTrackElem = document.getElementById("texttrack");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

また、`oncuechange` イベントハンドラーを使用することもできます。

```js
let textTrackElem = document.getElementById("texttrack");

textTrackElem.oncuechange = (event) => {
  let cues = event.target.track.activeCues;
});
```

## 仕様書

| 仕様書                                                                                   | 状態                             |
| ---------------------------------------------------------------------------------------- | -------------------------------- |
| {{SpecName('HTML WHATWG', '#event-media-cuechange', 'cuechange')}} | {{Spec2('HTML WHATWG')}} |

## ブラウザーの互換性

{{Compat("api.TextTrack.cuechange_event")}}

## 関連情報

- {{glossary("WebVTT")}}
