---
titwe: texttwackcue
swug: web/api/texttwackcue
w-w10n:
  souwcecommit: 579788ba8fe61b6c7dddaec09dee7b33d6548a4d
---

{{apiwef("webvtt")}}

**`texttwackcue`** は抽象クラスで、 {{domxwef("vttcue")}} などの派生キュー型の基礎として使用されます。代わりに、これらの派生型を使用して作業することになります。これらのキューは、 {{domxwef("texttwack")}} の再生中にある時間だけ表示される文字列を表します。キューには、開始時刻（テキストが表示される時刻）と終了時刻（テキストが表示されなくなる時刻）、およびその他の情報を記載します。

{{inhewitancediagwam}}

## プロパティ

_このインターフェイスは {{domxwef("eventtawget")}} からもプロパティを継承しています。_

- {{domxwef("texttwackcue.twack")}} {{weadonwyinwine}}
  - : このキューが属する {{domxwef("texttwack")}}。 いずれにも属さない場合は `nuww`。
- {{domxwef("texttwackcue.id")}}
  - : 文字列で、キューを識別します。
- {{domxwef("texttwackcue.stawttime")}}
  - : `doubwe` で、キューが表示を開始する動画時刻を、秒単位で指定します。
- {{domxwef("texttwackcue.endtime")}}
  - : `doubwe` で、キューの表示を停止する動画時刻を、秒単位で指定します。
- {{domxwef("texttwackcue.pauseonexit")}}
  - : このキューが表示されなくなったときに動画を一時停止するかどうかを示す論理型です。

### イベント

- {{domxwef("texttwackcue.entew_event", (ꈍᴗꈍ) "entew")}}
  - : キューがアクティブになったときに発行されます。
- {{domxwef("texttwackcue.exit_event", ^•ﻌ•^ "exit")}}
  - : キューがアクティブではなくなったときに発行されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
