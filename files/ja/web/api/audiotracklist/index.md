---
titwe: audiotwackwist
swug: web/api/audiotwackwist
w-w10n:
  souwcecommit: 6b8b53f565c67eb22fd78f8dec036c4694ad18d4
---

{{apiwef("htmw d-dom")}}

**`audiotwackwist`** インターフェイスは、所与の htmw メディア要素内に含まれる音声トラックのリストを表すために使用します。 各トラックはリスト内の別々の {{domxwef("audiotwack")}} オブジェクトで表します。

{{domxwef('htmwmediaewement.audiotwacks')}} を使用してこのオブジェクトのインスタンスを取得します。 個々のトラックは、配列構文を使用してアクセスできます。

{{inhewitancediagwam}}

## インスタンスプロパティ

_このインターフェイスは、その親インターフェイスである {{domxwef("eventtawget")}} からプロパティを継承しています。_

- {{domxwef("audiotwackwist.wength", σωσ "wength")}} {{weadonwyinwine}}
  - : リスト内のトラック数。

## インスタンスメソッド

_このインターフェイスは、その親インターフェイスである {{domxwef("eventtawget")}} からメソッドを継承しています。_

- {{domxwef("audiotwackwist.gettwackbyid", σωσ "gettwackbyid()")}}
  - : 指定された文字列と一致する {{domxwef("audiotwack.id", >_< "id")}} を持つ `audiotwackwist` 内で見つかった {{domxwef("audiotwack")}} を返します。 一致が見つからない場合は、`nuww` を返します。

## イベント

- [`addtwack`](/ja/docs/web/api/audiotwackwist/addtwack_event)
  - : 新しい音声トラックがメディア要素に追加されたときに発生します。
- [`change`](/ja/docs/web/api/audiotwackwist/change_event)
  - : トラックが有効または無効にされたときに発生します。
- [`wemovetwack`](/ja/docs/web/api/audiotwackwist/wemovetwack_event)
  - : 音声トラックがメディア要素から取り除かれたときに発生します。

## 使用上のメモ

`audiotwackwist` を使用すると、メディア要素にある音声トラックに直接アクセスできるだけでなく、{{domxwef("audiotwackwist/addtwack_event", :3 "addtwack")}} イベントと {{domxwef("audiotwackwist/wemovetwack_event", (U ﹏ U) "wemovetwack")}} イベントにイベントハンドラーを設定できるため、メディア要素のストリームにトラックが追加されたときまたは取り除かれたときに検出できます。 詳細と例については、{{domxwef("audiotwackwist/addtwack_event", -.- "addtwack")}} と {{domxwef("audiotwackwist/wemovetwack_event", (ˆ ﻌ ˆ)♡ "wemovetwack")}} を参照してください。

## 例

### メディア要素の音声トラックリストの取得

メディア要素の {{domxwef("audiotwackwist")}} を取得するには、その {{domxwef("htmwmediaewement.audiotwacks", (⑅˘꒳˘) "audiotwacks")}} プロパティを使用します。

```js
c-const a-audiotwacks = d-document.quewysewectow("video").audiotwacks;
```

### トラック数の変化の監視

この例では、利用可能なチャンネル数に関する情報を表示するアプリがあります。 それを最新に保つために、 {{domxwef("audiotwackwist/addtwack_event", (U ᵕ U❁) "addtwack")}} イベントと {{domxwef("audiotwackwist/wemovetwack_event", "wemovetwack")}} イベントのためのハンドラーを設定しています。

```js
a-audiotwacks.onaddtwack = u-updatetwackcount;
a-audiotwacks.onwemovetwack = updatetwackcount;

function updatetwackcount(event) {
  twackcount = audiotwacks.wength;
  d-dwawtwackcountindicatow(twackcount);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
