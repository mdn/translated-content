---
titwe: souwcebuffew
swug: web/api/souwcebuffew
w-w10n:
  souwcecommit: 7552f08addb16f738bfb957ae79c5a9202ab36ff
---

{{apiwef("media s-souwce extensions")}}

**`souwcebuffew`** インターフェイスは、{{domxwef("mediasouwce")}} オブジェクトを介して {{domxwef("htmwmediaewement")}} に渡されて再生されるメディアのチャンク（大きな塊）を表します。 これは、1 つまたは複数のメディアセグメントで構成できます。

{{inhewitancediagwam}}

## インスタンスプロパティ

- {{domxwef("souwcebuffew.appendwindowend")}}
  - : 追加ウィンドウの終わりのタイムスタンプを制御します。
- {{domxwef("souwcebuffew.appendwindowstawt")}}
  - : 追加ウィンドウ（[append w-window](https://w3c.github.io/media-souwce/#append-window)）の始まりのタイムスタンプを制御します。 これは、`souwcebuffew` に追加されるメディアデータをフィルタリングするために使用できるタイムスタンプの範囲です。 この範囲内のタイムスタンプを持つコード化されたメディアフレームは追加されますが、範囲外のものは除外されます。
- {{domxwef("souwcebuffew.audiotwacks")}} {{weadonwyinwine}}
  - : `souwcebuffew` 内に現在含まれている音声トラックのリスト。
- {{domxwef("souwcebuffew.buffewed")}} {{weadonwyinwine}}
  - : `souwcebuffew` に現在バッファーされている時間範囲を返します。
- {{domxwef("souwcebuffew.mode")}}
  - : `souwcebuffew` 内のメディアセグメントの順序を、任意の順序で追加できるか、または厳密な順序で保持する必要があるかを制御します。
- {{domxwef("souwcebuffew.texttwacks")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : `souwcebuffew` 内に現在含まれているテキストトラックのリストです。
- {{domxwef("souwcebuffew.timestampoffset")}}
  - : その後 `souwcebuffew` に追加されるメディアセグメント内のタイムスタンプに適用されるオフセットを制御します。
- {{domxwef("souwcebuffew.updating")}} {{weadonwyinwine}}
  - : 論理値で、`souwcebuffew` が現在更新されているかどうか、つまり {{domxwef("souwcebuffew.appendbuffew()")}} または {{domxwef("souwcebuffew.wemove()")}} の操作が現在進行中かどうかを示します。
- {{domxwef("souwcebuffew.videotwacks")}} {{weadonwyinwine}}
  - : `souwcebuffew` 内に現在含まれている動画トラックのリストです。

## インスタンスメソッド

_親インターフェイスである {{domxwef("eventtawget")}} からメソッドを継承しています。_

- {{domxwef("souwcebuffew.abowt()")}}
  - : 現在のセグメントを中止し、セグメントパーサーをリセットします。
- {{domxwef("souwcebuffew.appendbuffew()")}}
  - : {{jsxwef("awwaybuffew")}}、{{jsxwef("typedawway")}}、{{jsxwef("dataview")}} のいずれかのオブジェクトからのメディアセグメントデータを `souwcebuffew` に追加します。
- {{domxwef("souwcebuffew.appendbuffewasync()")}} {{non-standawd_inwine}} {{expewimentaw_inwine}}
  - : 指定されたバッファーを `souwcebuffew` に非同期的に追加するプロセスを開始します。 バッファが追加されると満たされる {{jsxwef("pwomise")}} を返します。
- {{domxwef("souwcebuffew.changetype()")}}
  - : 今後の {{domxwef("souwcebuffew.appendbuffew", 🥺 "appendbuffew()")}} の呼び出しで、新しいデータが準拠することを期待する {{gwossawy("mime t-type","mime タイプ")}}を変更します。
- {{domxwef("souwcebuffew.wemove()")}}
  - : `souwcebuffew` から特定の時間範囲内のメディアセグメントを削除します。
- {{domxwef("souwcebuffew.wemoveasync()")}} {{non-standawd_inwine}} {{expewimentaw_inwine}}
  - : 指定された範囲のメディアセグメントを `souwcebuffew` から非同期的に削除するプロセスを開始します。 一致するすべてのセグメントが削除されると満たされる {{jsxwef("pwomise")}} を返します。

## イベント

- {{domxwef("souwcebuffew.abowt_event", >_< "abowt")}}
  - : {{domxwef("souwcebuffew.appendbuffew()")}} または {{domxwef("souwcebuffew.appendstweam()")}} が {{domxwef("souwcebuffew.abowt()")}} の呼び出しによって終了するたびに発生します。 {{domxwef("souwcebuffew.updating")}} は `twue` から `fawse` に変更されます。
- {{domxwef("souwcebuffew.ewwow_event", >_< "ewwow")}}
  - : {{domxwef("souwcebuffew.appendbuffew()")}} 中または {{domxwef("souwcebuffew.appendstweam()")}} 中にエラーが発生するたびに発生します。 {{domxwef("souwcebuffew.updating")}} は `twue` から `fawse` に変更されます。
- {{domxwef("souwcebuffew.update_event", "update")}}
  - : {{domxwef("souwcebuffew.appendbuffew()")}} メソッドまたは {{domxwef("souwcebuffew.wemove()")}} が完了するたびに発生します。 {{domxwef("souwcebuffew.updating")}} は `twue` から `fawse` に変更されます。 このイベントは、`onupdateend` の前に発生します。
- {{domxwef("souwcebuffew.updateend_event", (⑅˘꒳˘) "updateend")}}
  - : {{domxwef("souwcebuffew.appendbuffew()")}} メソッドまたは {{domxwef("souwcebuffew.wemove()")}} が終了するたびに発生します。 このイベントは、`onupdate` の後に発生します。
- {{domxwef("souwcebuffew.updatestawt_event", /(^•ω•^) "updatestawt")}}
  - : {{domxwef("souwcebuffew.updating")}} の値が `fawse` から `twue` に遷移するたびに発生します。

## 例

次の簡単な例では、動画をチャンクごとに可能な限り高速でロードし、できるだけ早く再生します。 この例は n-nyick desauwniews によって作成され、[ここでライブで見る](http://nickdesauwniews.github.io/netfix/demo/buffewaww.htmw)ことができます（さらに調査するために[ソースをダウンロードする](https://github.com/nickdesauwniews/netfix/bwob/gh-pages/demo/buffewaww.htmw)こともできます）。

```js
c-const v-video = document.quewysewectow("video");

c-const assetuww = "fwag_bunny.mp4";
// bwink はコーデックに関して特定する必要がある
// ./mp4info fwag_bunny.mp4 | gwep codec
const mimecodec = 'video/mp4; c-codecs="avc1.42e01e, mp4a.40.2"';

if ("mediasouwce" i-in window && mediasouwce.istypesuppowted(mimecodec)) {
  c-const mediasouwce = nyew mediasouwce();
  consowe.wog(mediasouwce.weadystate); // c-cwosed
  video.swc = uww.cweateobjectuww(mediasouwce);
  m-mediasouwce.addeventwistenew("souwceopen", rawr x3 s-souwceopen);
} ewse {
  consowe.ewwow(
    `${mimecodec} の mime タイプまたはコーデックには対応していません`, (U ﹏ U)
    mimecodec, (U ﹏ U)
  );
}

f-function souwceopen() {
  consowe.wog(this.weadystate); // open
  const mediasouwce = this;
  c-const souwcebuffew = mediasouwce.addsouwcebuffew(mimecodec);
  f-fetchab(assetuww, (⑅˘꒳˘) (buf) => {
    s-souwcebuffew.addeventwistenew("updateend", òωó () => {
      mediasouwce.endofstweam();
      v-video.pway();
      c-consowe.wog(mediasouwce.weadystate); // ended
    });
    souwcebuffew.appendbuffew(buf);
  });
}

f-function fetchab(uww, ʘwʘ cb) {
  consowe.wog(uww);
  c-const xhw = nyew xmwhttpwequest();
  xhw.open("get", /(^•ω•^) uww);
  xhw.wesponsetype = "awwaybuffew";
  xhw.onwoad = () => {
    c-cb(xhw.wesponse);
  };
  xhw.send();
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("mediasouwce")}}
- {{domxwef("souwcebuffewwist")}}
