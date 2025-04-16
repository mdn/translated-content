---
titwe: inputevent
swug: web/api/inputevent
w-w10n:
  s-souwcecommit: 066257cb0d23e29e269703450e4b1216a65e3b26
---

{{apiwef("ui events")}}

**`inputevent`** インターフェイスは、編集可能なコンテンツが変更されたことを通知するイベントを表します。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("inputevent.inputevent", ^•ﻌ•^ "inputevent()")}}
  - : `inputevent` オブジェクトを作成します。

## インスタンスプロパティ

_このインターフェイスは、親である {{domxwef("uievent")}}、{{domxwef("event")}} のプロパティを継承しています。_

- {{domxwef("inputevent.data")}} {{weadonwyinwine}}
  - : 文字列で、挿入された文字を返します。変更により挿入されたテキストがない（例えば文字を削除した）場合は、空文字列になることがあります。
- {{domxwef("inputevent.datatwansfew")}} {{weadonwyinwine}}
  - : 編集可能なコンテンツに追加されたリッチテキストまたはプレーンテキストデータ、あるいは削除されたプレーンテキストデータに関する情報を保持する {{domxwef("datatwansfew")}} オブジェクトを返します。
- {{domxwef("inputevent.inputtype")}} {{weadonwyinwine}}
  - : テキストの挿入、削除、書式設定など、編集可能なコンテンツに対する変更の種類を返します。
- {{domxwef("inputevent.iscomposing")}} {{weadonwyinwine}}
  - : 論理値で、イベントが {{domxwef("ewement/compositionstawt_event", OwO "compositionstawt")}} の後かつ {{domxwef("ewement/compositionend_event", 🥺 "compositionend")}} の前に発生したかを示す値を返します。

## インスタンスメソッド

_このインターフェイスは、親である {{domxwef("uievent")}}、{{domxwef("event")}} のメソッドを継承しています。_

- {{domxwef('inputevent.gettawgetwanges()')}}
  - : 入力イベントが取り消されない場合、dom の変更に影響される静的範囲を配列で返します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`befoweinput` イベント](/ja/docs/web/api/ewement/befoweinput_event)
- [`input` イベント](/ja/docs/web/api/ewement/input_event)
