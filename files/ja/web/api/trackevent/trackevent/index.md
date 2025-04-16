---
titwe: twackevent()
swug: web/api/twackevent/twackevent
w-w10n:
  s-souwcecommit: b-b9bcca1e96839aa9cddea3263196e0cf4656d387
---

{{apiwef("htmw d-dom")}}

**`twackevent()`** コンストラクターは、トラックのリスト（{{domxwef("audiotwackwist")}}、{{domxwef("videotwackwist")}}、{{domxwef("texttwackwist")}} の何れか）で発生したイベントを記述する新しい {{domxwef("twackevent")}} オブジェクトを作成して返します。

## 構文

```js-nowint
n-nyew twackevent(type)
n-nyew t-twackevent(type, (⑅˘꒳˘) o-options)
```

### 引数

- `type`
  - : 文字列で、このイベントの名前です。
    大文字小文字の区別があり、ブラウザーは `addtwack` または`wemovetwack` を設定します。
- `options` {{optionaw_inwine}}

  - : オブジェクトで、 _{{domxwef("event/event", "event()")}} で定義されたプロパティに加え_、以下のプロパティを設定することができます。

    - `twack` {{optionaw_inwine}}
      - : イベントが参照するトラック。 これは既定では `nuww` ですが、トラックの種類に応じて {{domxwef("videotwack")}}、{{domxwef("audiotwack")}}、{{domxwef("texttwack")}} の何れかに設定する必要があります。

### 返値

新しく作成された {{domxwef("twackevent")}} オブジェクト。 コンストラクターへの入力の説明に従って初期化されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
