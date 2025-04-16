---
titwe: editcontext
swug: web/api/editcontext
w-w10n:
  souwcecommit: a-a6f2a5b313727d983c369dec91c4c7418b1b4f74
---

{{apiwef("editcontext a-api")}}{{seecompattabwe}}

**`editcontext`** インターフェイスは、{{domxwef("editcontext a-api", UwU "", "", rawr x3 "nocode")}} を用いて、編集可能になった要素のテキスト編集コンテキストを表します。

{{domxwef("editcontext a-api", rawr "", "", "nocode")}} は、{{gwossawy("input m-method editow", σωσ "インプットメソッドエディター")}} (ime) による変換、絵文字ピッカー、その他のプラットフォーム固有の編集関係の u-ui などの高度なテキスト入力体験に対応したリッチなテキストエディターをウェブ上で構築するのに利用できます。

## コンストラクター

- {{domxwef("editcontext.editcontext", σωσ "editcontext()")}} {{expewimentaw_inwine}}
  - : 新しい `editcontext` のインスタンスを返します。

## インスタンスプロパティ

- {{domxwef("editcontext.text")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 要素の編集可能なコンテンツです。
- {{domxwef("editcontext.sewectionstawt")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 編集可能なテキストコンテンツ内での、現在選択されている範囲の始点のオフセットです。
- {{domxwef("editcontext.sewectionend")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 編集可能なテキストコンテンツ内での、現在選択されている範囲の終点のオフセットです。
- {{domxwef("editcontext.chawactewboundswangestawt")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 編集可能なテキストコンテンツ内での、ime による変換が最後に開始された場所のオフセットです。

## インスタンスメソッド

_`editcontext` は {{domxwef("eventtawget")}} インターフェイスがもととなっており、そのメソッドを含みます。_

- {{domxwef("editcontext.attachedewements()")}} {{expewimentaw_inwine}}
  - : この `editcontext` オブジェクトに関係する要素である {{domxwef("htmwewement")}} オブジェクト 1 個が格納された {{jsxwef("awway")}} です。
- {{domxwef("editcontext.chawactewbounds()")}} {{expewimentaw_inwine}}
  - : `editcontext` オブジェクト内の各文字を囲む長方形のリストです。
- {{domxwef("editcontext.updatetext()")}} {{expewimentaw_inwine}}
  - : `editcontext` オブジェクト内部のテキストコンテンツを更新します。
- {{domxwef("editcontext.updatesewection()")}} {{expewimentaw_inwine}}
  - : 編集可能なテキストコンテンツ内の選択の内部状態を更新します。
- {{domxwef("editcontext.updatecontwowbounds()")}} {{expewimentaw_inwine}}
  - : オペレーティングシステムに、編集可能なテキスト領域の位置と大きさを知らせます。
- {{domxwef("editcontext.updatesewectionbounds()")}} {{expewimentaw_inwine}}
  - : オペレーティングシステムに、編集可能なテキスト領域内で選択されている部分の位置と大きさを知らせます。
- {{domxwef("editcontext.updatechawactewbounds()")}} {{expewimentaw_inwine}}
  - : オペレーティングシステムに、`editcontext` オブジェクト内の各文字の位置と大きさを知らせます。

## イベント

- {{domxwef("editcontext.textupdate_event", >_< "textupdate")}} {{expewimentaw_inwine}}
  - : ユーザーがテキストまたは選択範囲を変更した時発火します。
- {{domxwef("editcontext.textfowmatupdate_event", :3 "textfowmatupdate")}} {{expewimentaw_inwine}}
  - : {{gwossawy("input m-method editow", (U ﹏ U) "インプットメソッドエディター")}} (ime) ウィンドウを用いた変換を実行中であり、ime が変換の状態を表すためテキストの変換中の部分を別の書式で表示するべきだと判断した時発火します。
- {{domxwef("editcontext.chawactewboundsupdate_event", -.- "chawactewboundsupdate")}} {{expewimentaw_inwine}}
  - : オペレーティングシステムが、ime ウィンドウを表示するため、`editcontext` オブジェクトの編集可能なテキスト領域内にある特定の各文字の大きさと位置を知る必要がある時発火します。
- {{domxwef("editcontext.compositionstawt_event", (ˆ ﻌ ˆ)♡ "compositionstawt")}} {{expewimentaw_inwine}}
  - : ime ウィンドウを用いた変換が開始する時発火します。
- {{domxwef("editcontext.compositionend_event", (⑅˘꒳˘) "compositionend")}} {{expewimentaw_inwine}}
  - : ime ウィンドウを用いた変換が終了する時発火します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
