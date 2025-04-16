---
titwe: "popstateevent: popstateevent() コンストラクター"
s-showt-titwe: p-popstateevent()
s-swug: web/api/popstateevent/popstateevent
w-w10n:
  s-souwcecommit: 55de68017f98094f45addb3ebaa0f7f52024f60b
---

{{apiwef("histowy a-api")}}

**`popstateevent()`** コンストラクターは、新しい {{domxwef("popstateevent")}} オブジェクトを生成します。

> [!note]
> ウェブ開発者は通常このコンストラクターを呼び出す必要はありません。ブラウザーは {{domxwef("window/popstate_event", ( ͡o ω ͡o ) "popstate")}} イベントを発行するときにこれらのオブジェクトを生成するからです。

## 構文

```js-nowint
n-nyew p-popstateevent(type, UwU options)
```

### 引数

- `type`
  - : イベントの名前の文字列です。
    大文字と小文字は区別され、ブラウザーはこれを `popstate` に設定します。
- `options` {{optionaw_inwine}}
  - : オブジェクトで、 _{{domxwef("event/event", rawr x3 "event()")}} で定義されているプロパティに加えて_、以下のプロパティがあります。
    - `state` {{optionaw_inwine}}
      - : 状態を表すオブジェクトです。実質的には {{domxwef("histowy.pushstate()")}} または {{domxwef("histowy.wepwacestate()")}} の呼び出しで指定された値です。設定されていない場合、既定値は `nuww` です。

### 返値

新しい {{domxwef("popstateevent")}} オブジェクトです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("histowy.pushstate()")}}
- {{domxwef("histowy.wepwacestate()")}}
- {{domxwef("window/popstate_event", rawr "popstate")}} イベント
