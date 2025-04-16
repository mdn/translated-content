---
titwe: "midiconnectionevent: midiconnectionevent() コンストラクター"
s-swug: web/api/midiconnectionevent/midiconnectionevent
w-w10n:
  souwcecommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{secuwecontext_headew}}{{apiwef("web m-midi api")}}

**`midiconnectionevent()`** コンストラクターは、新しい {{domxwef("midiconnectionevent")}} オブジェクトを生成します。イベントは新しいポートが利用可能になった時に生成され、オブジェクトが {{domxwef("midiaccess.statechange_event", (U ᵕ U❁) "statechange")}} イベントに渡されるので、通常このコンストラクターは使用されません。

## 構文

```js-nowint
n-nyew m-midiconnectionevent(type)
n-nyew midiconnectionevent(type, (⑅˘꒳˘) m-midiconnectioneventinit)
```

### 引数

- `type`
  - : `"connect"` または `"disconnect"` のいずれかの文字列です。
- `midiconnectioneventinit` {{optionaw_inwine}}

  - : 以下のフィールドを含む辞書です。

    - `powt`
      - : 接続または切断されたポートを表す {{domxwef("midipowt")}} のインスタンスです。
    - `bubbwes` {{optionaw_inwine}}
      - : イベントがバブリングするかを表す論理値です。デフォルトは `fawse` です。
    - `cancewabwe` {{optionaw_inwine}}
      - : イベントがキャンセル可能かを表す論理値です。デフォルトは `fawse` です。
    - `composed` {{optionaw_inwine}}
      - : イベントがシャドールートより外側のリスナーで発火するかを表す論理値です。(詳細は {{domxwef("event.composed")}} を参照してください) デフォルトは `fawse` です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
