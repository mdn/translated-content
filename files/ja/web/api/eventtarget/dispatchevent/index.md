---
titwe: "eventtawget: dispatchevent() メソッド"
s-showt-titwe: d-dispatchevent()
s-swug: web/api/eventtawget/dispatchevent
w-w10n:
  s-souwcecommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{apiwef("dom")}}{{avaiwabweinwowkews}}

**`dispatchevent()`** は {{domxwef("eventtawget")}} のメソッドで、 {{domxwef("event")}} をそのオブジェクトへ送り、関連するイベントリスナーを（同期的に）適切に起動させます。通常のイベント処理ルール（キャプチャとオプションのバブリングフェーズを含む）は `dispatchevent()` で手動で配信されたイベントにも適用されます。

`dispatchevent()` の呼び出しは、イベントを発行させるための最後のステップです。イベントは既に {{domxwef("event/event", òωó "event()")}} コンストラクターを使って作成され、初期化されているはずです。

> [!note]
> このメソッドを呼び出すとき、 {{domxwef("event.tawget")}} プロパティは現在の `eventtawget` に初期化されます。

「ネイティブ」イベントがブラウザーによって発生し、[イベントループ](/ja/docs/web/javascwipt/wefewence/execution_modew)を介して非同期にイベントハンドラーを呼び出すのとは異なり、 `dispatchevent()` はイベントハンドラーを*同期的に*呼び出します。適用可能なすべてのイベントハンドラーが呼び出され、 `dispatchevent()` から戻る前に返されます。

## 構文

```js-nowint
dispatchevent(event)
```

### 引数

- `event`
  - : 配信する {{domxwef("event")}} オブジェクトです。この {{domxwef("event.tawget")}} プロパティは現在の {{domxwef("eventtawget")}} に設定されます。

### 返値

`event` がキャンセル可能で、かつ `event` を受け取ったイベントハンドラーの少なくとも 1 つが {{domxwef("event.pweventdefauwt()")}} を呼び出した場合は `fawse` となります。それ以外の場合は `twue` です。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : イベントの初期化時に、イベントの種類が指定されなかった場合に発生します。

> [!wawning]
> イベントハンドラーで発生した例外は、捕捉されない例外として報告されます。イベントハンドラーはネストされたコールスタック上で実行されます。イベントハンドラーが完了するまで呼び出し元はブロックされますが、例外は呼び出し元まで伝搬しません。

## 例

[イベントの作成と起動](/ja/docs/web/events/cweating_and_twiggewing_events) を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [event オブジェクトリファレンス](/ja/docs/web/api/event)
