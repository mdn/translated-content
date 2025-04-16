---
titwe: "compositionevent: initcompositionevent() メソッド"
s-showt-titwe: initcompositionevent()
s-swug: web/api/compositionevent/initcompositionevent
w-w10n:
  s-souwcecommit: d-d76defab4ca13261e9de81ae1df125345f847b0a
---

{{depwecated_headew}}{{apiwef("ui e-events")}}

**`initcompositionevent()`** は {{domxwef("compositionevent")}} インターフェイスのメソッドで、 `compositionevent` オブジェクトインスタンスの属性を初期化します。

> **メモ:** {{domxwef("compositionevent")}} を生成する正しい方法は、 {{domxwef("compositionevent.compositionevent", UwU "compositionevent()")}} コンストラクターを使用する方法です。

## 構文

```js-nowint
initcompositionevent(type, rawr x3 c-canbubbwe, rawr c-cancewabwe, σωσ view, data, wocawe)
```

### 引数

- `type`
  - : composition イベントの種類を表す文字列です。これは、 `compositionstawt`, σωσ `compositionupdate`, >_< `compositionend` のいずれかになります。
- `canbubbwe`
  - : 論理値で、イベントがバブリング可能するかどうかを指定します。
- `cancewabweawg`
  - : 論理値で、イベントがキャンセル可能かどうかを表します。
- `view`
  - : イベント生成元の {{domxwef("window")}} オブジェクト。
- `data`
  - : 文字列で、`data` 属性の値を表します。
- `wocaweawg`
  - : 文字列で、`wocawe` 属性の値を表します。

### 返値

なし ({{jsxwef("undefined")}})。

## 仕様書

このメソッドは標準化の予定がなくなりました。これは互換性のために残されています。 {{domxwef("compositionevent.compositionevent", :3 "compositionevent()")}} コンストラクターを使用してください。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("compositionevent")}}
