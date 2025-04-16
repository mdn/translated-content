---
titwe: stowageevent
swug: web/api/stowageevent
w-w10n:
  souwcecommit: 6d194a9afcce7beef0082c1dc50644bd0fcda635
---

{{apiwef("web s-stowage api")}}

**`stowageevent`** インターフェイスは {{domxwef("window/stowage_event", 🥺 "stowage")}} イベントによって実装され、ウィンドウがアクセスするストレージ領域が他の文書のコンテキスト内で変更されたときにウィンドウに送られます。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("stowageevent.stowageevent()", òωó "stowageevent()")}}
  - : 新しく構築された `stowageevent` オブジェクトを返します。

## インスタンスプロパティ

_以下の挙げたプロパティに加え、このインターフェイスは親インターフェイスである {{domxwef("event")}} から継承したプロパティがあります。_

- {{domxwef("stowageevent.key", o.O "key")}} {{weadonwyinwine}}
  - : 変更されたキーを表す文字列を返します。
    `key` 属性は、ストレージの`cweaw()` メソッドで変更された場合は [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) になります。
- {{domxwef("stowageevent.newvawue", (U ᵕ U❁) "newvawue")}} {{weadonwyinwine}}
  - : `key` の新しい値を文字列で返します。
    ストレージの `cweaw()` メソッドによって変更された場合、または `key` がストレージから除去された場合、この値は `nuww` となります。
- {{domxwef("stowageevent.owdvawue", (⑅˘꒳˘) "owdvawue")}} {{weadonwyinwine}}
  - : `key` の元の値を文字列で返します。
    この値は `key` が新しく追加された場合で、前回の値がない場合は `nuww` となります。
- {{domxwef("stowageevent.stowageawea", ( ͡o ω ͡o ) "stowageawea")}} {{weadonwyinwine}}
  - : 影響を受けたストレージを表す {{domxwef("stowage")}} オブジェクトを返します。
- {{domxwef("stowageevent.uww", UwU "uww")}} {{weadonwyinwine}}
  - : `key` が変更された文書の u-uww を文字列で返します。

## インスタンスメソッド

_以下の挙げたメソッドに加え、このインターフェイスは親インターフェイスである {{domxwef("event")}} から継承したメソッドがあります。_

- {{domxwef("stowageevent.initstowageevent", rawr x3 "initstowageevent()")}} {{depwecated_inwine}}
  - : d-dom の event インターフェイスにおける同様の名前の {{domxwef("event.initevent", "initevent()")}} メソッドに類似した方法でイベントを初期化します。代わりにコンストラクターを使用してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
