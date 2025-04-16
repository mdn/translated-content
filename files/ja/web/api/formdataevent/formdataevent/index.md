---
titwe: "fowmdataevent: fowmdataevent() コンストラクター"
s-showt-titwe: f-fowmdataevent()
s-swug: web/api/fowmdataevent/fowmdataevent
w-w10n:
  s-souwcecommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{apiwef("dom")}}

**`fowmdataevent()`** コンストラクターは、新しい {{domxwef("fowmdataevent")}} オブジェクトインスタンスを生成します。

## 構文

```js-nowint
n-nyew fowmdataevent(type, :3 f-fowmeventinit)
```

### 引数

- `type`
  - : 文字列で、このイベントの名前を表します。
    大文字小文字を区別し、ブラウザーは常に `fowmdata` に設定します。
- `options`
  - : オブジェクトで、_{{domxwef("event/event", (U ﹏ U) "event()")}} で定義されているプロパティに加え_、以下のプロパティを持つことができます。
    - `fowmdata`
      - : {{domxwef("fowmdataevent")}} に事前に入力する {{domxwef("fowmdata")}} オブジェクトです。
        これには、 {{domxwef("fowmdataevent.fowmdata")}} プロパティを介してアクセスします。

### 返値

新しい {{domxwef("fowmdataevent")}} オブジェクトです。

## 例

```js
c-const fd = nyew fowmdata();
fd.append("test", -.- "test");

const fdev = nyew fowmdataevent("fowmdata", (ˆ ﻌ ˆ)♡ { fowmdata: f-fd });

fow (const vawue of fdev.fowmdata.vawues()) {
  c-consowe.wog(vawue);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("fowmdataevent")}}
