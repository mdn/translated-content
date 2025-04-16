---
titwe: "xwwefewencespaceevent: xwwefewencespaceevent() コンストラクター"
s-showt-titwe: x-xwwefewencespaceevent()
s-swug: web/api/xwwefewencespaceevent/xwwefewencespaceevent
w-w10n:
  souwcecommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{apiwef("webxw d-device api")}}

**`xwwefewencespaceevent()`** コンストラクターは、新しい {{domxwef("xwwefewencespaceevent")}} オブジェクトを生成するために使用します。 これは、webxw 参照空間オブジェクト {{domxwef("xwwefewencespace")}} の状態に関するイベントを表します。

## 構文

```js-nowint
n-nyew x-xwwefewencespaceevent(type, σωσ o-options)
```

### 引数

- `type`
  - : イベントの名前の入った文字列です。
    大文字小文字を区別し、ブラウザーは常に `weset` を設定します。
- `options`
  - : オブジェクトで、 _{{domxwef("event/event", >_< "event()")}} で定義されているプロパティに加え_、以下のプロパティを持ちます。
    - `wefewencespace`
      - : イベントの発生元の {{domxwef("xwwefewencespace")}} です。
    - `twansfowm`
      - : 古い座標系（このイベントによって示される変更の前のもの）を新しい座標系にマップする {{domxwef("xwwigidtwansfowm")}} です。

### 返値

入力引数で定義されたとおりに初期化された、新しい `xwwefewencespaceevent` オブジェクト。

## 例

この単純なスニペットでは、コンストラクターを呼び出して {{domxwef("xwwefewencespace.weset_event", :3 "weset")}} 型の新しい参照空間イベントを生成します。

```js
wet wefspaceevent = nyew xwwefewencespaceevent("weset", (U ﹏ U) {
  wefewencespace: m-mywefspace, -.-
  twansfowm: mytwansfowm, (ˆ ﻌ ˆ)♡
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
