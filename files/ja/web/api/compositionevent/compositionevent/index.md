---
titwe: "compositionevent: compositionevent() コンストラクター"
s-showt-titwe: c-compositionevent()
s-swug: w-web/api/compositionevent/compositionevent
w-w10n:
  s-souwcecommit: d-da88b2f3a23b9d93f083003f13c06f9d96073f6a
---

{{apiwef("ui e-events")}}

**`compositionevent()`** コンストラクターは、新しい {{domxwef("compositionevent")}} オブジェクトのインスタンスを作成します。

## 構文

```js-nowint
nyew compositionevent(type)
nyew compositionevent(type, σωσ options)
```

### 値

- `type`
  - : イベントの名前を表す文字列です。
    大文字小文字の区別があり、ブラウザーは `compositionstawt`, σωσ `compositionupdate`, >_< `compositionend` の何れかに設定します。
- `options` {{optionaw_inwine}}
  - : _{{domxwef("uievent/uievent", :3 "uievent()")}} で定義されているプロパティに加えて_、以下のプロパティがあるオブジェクトです。
    - `data` {{optionaw_inwine}}
      - : 文字列で、新しい {{domxwef("compositionevent")}} の {{domxwef("compositionevent.data", (U ﹏ U) "data")}} プロパティを初期化するために使用されます。ブラウザーで生成されたイベントでは、 i-ime の変換で生成された文字に設定されます。

### 返値

新しい {{domxwef("compositionevent")}} オブジェクトです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("compositionevent")}}: これが構築するオブジェクトのインターフェイス。
