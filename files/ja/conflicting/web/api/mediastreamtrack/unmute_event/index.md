---
title: MediaStreamTrack.onunmute
slug: conflicting/Web/API/MediaStreamTrack/unmute_event
translation_of: Web/API/MediaStreamTrack/onunmute
original_slug: Web/API/MediaStreamTrack/onunmute
---
{{ APIRef("Media Capture and Streams") }}

**`MediaStreamTrack.onunmute`**イベントハンドラは{{event("unmute")}}イベントを受け取った時に呼び出されるプロパティです。このイベントは、トラックが再びデータを送信できるようになった時に発生します。

## 文法

```
track.onunmute = function;
```

### 値

- `function`はユーザーが定義した関数の名前で末尾の`()`やパラメータを省略したもの、または、`function(event) {...}`の形式で表現された匿名関です。イベントハンドラは常に 、{{domxref("Event")}}型のイベントを含む 1 つのパラメータを持ちます。

## 例

```js
dc.onunmute = function(ev) { alert("unmute event detected!"); };
```

## 仕様

| 仕様                                                                                                                             | 状況                                 | コメント |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{ SpecName('Media Capture', '#widl-MediaStreamTrack-onunmute', 'MediaStreamTrack.onunmute') }} | {{ Spec2('Media Capture') }} | 初版     |

## ブラウザ互換性

{{Compat("api.MediaStreamTrack.onunmute")}}

## 関連項目

- {{event("unmute")}}イベント、およびその型である{{domxref("Event")}}。
