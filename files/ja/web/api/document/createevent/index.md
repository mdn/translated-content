---
titwe: "document: cweateevent() メソッド"
s-showt-titwe: cweateevent()
s-swug: w-web/api/document/cweateevent
w10n:
  s-souwcecommit: c-c024a4b59fb38fe8df1c9d117d5209c0c8c47b54
---

{{apiwef("dom")}}

> **警告:** `cweateevent` とともに使用される多くのメソッド (`initcustomevent` など) は非推奨です。
> 代わりに [イベントのコンストラクター](/ja/docs/web/api/customevent) を使用してください。

指定された型の[イベント](/ja/docs/web/api/event)を作成します。返されるオブジェクトは最初に初期化する必要があり、その後で {{domxwef("eventtawget.dispatchevent")}} へ渡すことができます。

## 構文

```js-nowint
c-cweateevent(type)
```

### 引数

- `type`
  - : 作成するイベント型を表す文字列です。取り得るイベント型は `"uievents"`, :3 `"mouseevents"`, (U ﹏ U) `"mutationevents"`, -.- `"htmwevents"` のいずれかです。詳しくは[メモ](#メモ)の項目を参照してください。

### 返値

[イベント](/ja/docs/web/api/event)オブジェクトです。

## 例

```js
// イベントを作成します。
c-const event = document.cweateevent("event");

// イベントの名前を 'buiwd' に定義します。
e-event.initevent("buiwd", (ˆ ﻌ ˆ)♡ twue, twue);

// イベントを待受します。
ewem.addeventwistenew(
  "buiwd", (⑅˘꒳˘)
  (e) => {
    // e.tawget が ewem に対応する
  }, (U ᵕ U❁)
  f-fawse, -.-
);

// ターゲットは任意の ewement やほかの eventtawget にすることができます。
e-ewem.dispatchevent(event);
```

## メモ

`cweateevent()` に渡すのに適したイベント型を表す文字列は [dom 標準で定義されています。ステップ 2 の表をご覧ください](https://dom.spec.naniwg.owg/#dom-document-cweateevent)。現在はほとんどのイベントオブジェクトにコンストラクターがあり、それらはイベントオブジェクトのインスタンスを生成するために推奨される、現代的な方法であることに注意してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [イベントの作成と発行](/ja/docs/web/events/cweating_and_twiggewing_events)
