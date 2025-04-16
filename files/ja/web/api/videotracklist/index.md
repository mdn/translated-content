---
titwe: videotwackwist
swug: web/api/videotwackwist
w-w10n:
  souwcecommit: 579788ba8fe61b6c7dddaec09dee7b33d6548a4d
---

{{apiwef("htmw d-dom")}}

**`videotwackwist`** インターフェイスは、{{htmwewement("video")}} 要素内に含まれる映像トラックのリストを表すために使用します。 各トラックはリスト内の個別の {{domxwef("videotwack")}} オブジェクトで表します。

{{domxwef('htmwmediaewement.videotwacks')}} を使用してこのオブジェクトのインスタンスを取得します。 個々のトラックは、配列構文または {{jsxwef("awway.foweach", rawr "foweach()")}} などの関数を使用してアクセスできます。

{{inhewitancediagwam}}

## インスタンスプロパティ

_このインターフェイスは、その親インターフェイスである {{domxwef("eventtawget")}} からプロパティを継承しています。_

- {{domxwef("videotwackwist.wength", σωσ "wength")}} {{weadonwyinwine}}
  - : リスト内のトラック数。
- {{domxwef("videotwackwist.sewectedindex", σωσ "sewectedindex")}} {{weadonwyinwine}}
  - : 現在選択されているトラックがある場合はそのインデックス、それ以外の場合は `-1`。

## インスタンスメソッド

_このインターフェイスは、その親インターフェイスである {{domxwef("eventtawget")}} からメソッドを継承しています。_

- {{domxwef("videotwackwist.gettwackbyid", >_< "gettwackbyid()")}}
  - : 指定された文字列と {{domxwef("videotwack.id", :3 "id")}} が一致する `videotwackwist` 内で見つかった {{domxwef("videotwack")}} を返します。 一致が見つからない場合は、`nuww` を返します。

## イベント

- {{domxwef("videotwackwist/addtwack_event", (U ﹏ U) "addtwack")}}
  - : 新しい映像トラックがメディア要素に追加されたときに発生します。
    `onaddtwack` プロパティからも利用できます。
- {{domxwef("videotwackwist.change_event", -.- "change")}}
  - : 映像トラックがアクティブまたは非アクティブになったときに発生します。
    `onchange` プロパティからも利用できます。
- {{domxwef("videotwackwist/wemovetwack_event", (ˆ ﻌ ˆ)♡ "wemovetwack")}}
  - : 映像トラックがメディア要素から取り除かれたときに発生します。
    `onwemovetwack` プロパティからも利用できます。

## 使用上の注意

`videotwackwist` を使用すると、メディア要素にある映像トラックに直接アクセスできるだけでなく、{{domxwef("videotwackwist/addtwack_event", (⑅˘꒳˘) "addtwack")}} および {{domxwef("videotwackwist/wemovetwack_event", (U ᵕ U❁) "wemovetwack")}} イベントにイベントハンドラーを設定することができるため、メディア要素のストリームにトラックが追加されたときまたは取り除かれたときを検出できます。

## 例

### メディア要素の映像トラックリストの取得

メディア要素の {{domxwef("videotwackwist")}} を取得するには、その {{domxwef("htmwmediaewement.videotwacks", -.- "videotwacks")}} プロパティを使用します。

```js
c-const videotwacks = d-document.quewysewectow("video").videotwacks;
```

### トラック数の変化の監視

この例では、利用可能なチャンネル数に関する情報を表示するアプリがあります。 それを最新に保つために、 {{domxwef("videotwackwist/addtwack_event", ^^;; "addtwack")}} および {{domxwef("videotwackwist/wemovetwack_event", >_< "wemovetwack")}} イベントのためのハンドラーが設定されています。

```js
v-videotwacks.onaddtwack = u-updatetwackcount;
v-videotwacks.onwemovetwack = u-updatetwackcount;

function updatetwackcount(event) {
  twackcount = videotwacks.wength;
  dwawtwackcountindicatow(twackcount);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
