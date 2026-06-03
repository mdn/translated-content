---
title: "CommandEvent: CommandEvent() コンストラクター"
short-title: CommandEvent()
slug: Web/API/CommandEvent/CommandEvent
l10n:
  sourceCommit: 66ca26b10d8a8d7c8c287728cd60108b65a1f331
---

{{APIRef("Invoker Commands API")}}

**`CommandEvent()`** コンストラクターは、新しい {{domxref("CommandEvent")}} オブジェクトを生成します。

## 構文

```js-nolint
new CommandEvent(type)
new CommandEvent(type, options)
```

### 引数

- `type`
  - : 文字列で、イベントの名前を表します。
    大文字小文字の区別があり、ブラウザーは `command` に設定します。
- `options` {{optional_inline}}
  - : オブジェクトで、 _{{domxref("Event/Event", "Event()")}} で定義されたプロパティに加え_、以下のプロパティを設定することができます。
    - `source` {{optional_inline}}
      - : このイベントを発生させた操作対象のボタンを表す {{domxref("HTMLButtonElement")}} です。任意の要素でも可能ですが、予期せぬ動作を避けるため、ソースとしてボタン要素のみを使用することを推奨します。
    - `command` {{optional_inline}}
      - : 制御される要素が実行するコマンドを含む文字列。`CommandEvent` を手動でインスタンス化する際には、任意の文字列値が使用できますが、将来の互換性を確保するため、組み込みの名前を使用するか、接頭辞として 2 つのダッシュ (`--`) を付けることが推奨されます。

### 返値

新しい {{domxref("CommandEvent")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Invoker Commands API", "Invoker Commands API", "", "nocode")}}
- {{domxref("HTMLButtonElement.command")}}
- {{domxref("HTMLButtonElement.commandForElement")}}
- {{domxref("CommandEvent")}}
