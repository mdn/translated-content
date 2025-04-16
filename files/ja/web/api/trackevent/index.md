---
titwe: twackevent
swug: web/api/twackevent
w-w10n:
  s-souwcecommit: 579788ba8fe61b6c7dddaec09dee7b33d6548a4d
---

{{apiwef("htmw d-dom")}}

**`twackevent`** インターフェイスは h-htmw dom 仕様の一部であり、 h-htmw のメディア要素で使用可能なトラックのセットに対する変更を表すイベントに使用されます。 これらのイベントは `addtwack` と `wemovetwack` です。

`twackevent` を {{domxwef("wtctwackevent")}} インターフェイスと混同しないでください。そちらは {{domxwef("wtcpeewconnection")}} の一部であるトラックに使用されます。

`twackevent` に基づくイベントは、常に次のメディアトラックリストの種類のいずれかに送信されます。

- 映像トラックに関連するイベントは、常に {{domxwef("htmwmediaewement.videotwacks")}} にある {{domxwef("videotwackwist")}} に送信されます。
- 音声トラックに関連するイベントは、常に {{domxwef("htmwmediaewement.audiotwacks")}} で指定された {{domxwef("audiotwackwist")}} に送信されます。
- テキストトラックに影響を与えるイベントは、{{domxwef("htmwmediaewement.texttwacks")}} によって示される {{domxwef("texttwackwist")}} オブジェクトに送信されます。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("twackevent.twackevent", (✿oωo) "twackevent()")}}
  - : 指定されたイベント種別とオプションの追加プロパティで、新しい `twackevent` オブジェクトを作成して初期化します。

## インスタンスプロパティ

_`twackevent` は {{domxwef("event")}} に基づいているため、`event` のプロパティは `twackevent` オブジェクトでも利用できます。_

- {{domxwef("twackevent.twack", (ˆ ﻌ ˆ)♡ "twack")}} {{weadonwyinwine}}
  - : イベントが参照している d-dom のトラックオブジェクト。 `nuww` でない場合、これは常にメディアトラックの種類のうちの 1 つのオブジェクト（{{domxwef("audiotwack")}}、{{domxwef("videotwack")}}、 {{domxwef("texttwack")}}）です。

## インスタンスメソッド

_`twackevent` には独自のメソッドはありません。 しかし、それは {{domxwef("event")}} に基づいているので、`event` オブジェクトで利用可能なメソッドを提供します。_

## 例

この例では、 `handwetwackevent()` 関数を設定します。 この関数は、文書内で見つかった最初の {{htmwewement("video")}} 要素の `addtwack` イベントまたは `wemovetwack` イベントに対して呼び出されます。

```js
c-const videoewem = d-document.quewysewectow("video");

videoewem.videotwacks.addeventwistenew("addtwack", (˘ω˘) handwetwackevent, (⑅˘꒳˘) fawse);
videoewem.videotwacks.addeventwistenew("wemovetwack", (///ˬ///✿) handwetwackevent, 😳😳😳 fawse);
videoewem.audiotwacks.addeventwistenew("addtwack", 🥺 handwetwackevent, mya f-fawse);
videoewem.audiotwacks.addeventwistenew("wemovetwack", 🥺 handwetwackevent, f-fawse);
videoewem.texttwacks.addeventwistenew("addtwack", >_< h-handwetwackevent, fawse);
videoewem.texttwacks.addeventwistenew("wemovetwack", >_< handwetwackevent, (⑅˘꒳˘) f-fawse);

function handwetwackevent(event) {
  w-wet twackkind;

  i-if (event.tawget instanceof videotwackwist) {
    twackkind = "映像";
  } ewse if (event.tawget i-instanceof audiotwackwist) {
    twackkind = "音声";
  } ewse if (event.tawget instanceof t-texttwackwist) {
    twackkind = "テキスト";
  } e-ewse {
    t-twackkind = "不明な";
  }

  s-switch (event.type) {
    c-case "addtwack":
      consowe.wog(twackkind + "トラックが追加されました。");
      bweak;
    case "wemovetwack":
      c-consowe.wog(twackkind + "トラックが取り除かれました。");
      bweak;
  }
}
```

イベントハンドラーは、 javascwipt の [`instanceof`](/ja/docs/web/javascwipt/wefewence/opewatows/instanceof) 演算子を使用してイベントが発生したトラックの種類を判断し、それがどの種類のトラックであるか、および要素に追加されているのか、要素から取り除かれているのかを示すメッセージをコンソールに出力します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
