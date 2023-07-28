---
title: Document.createEvent()
slug: Web/API/Document/createEvent
---

> **警告:** `createEvent` とともに使用される多くのメソッド (`initCustomEvent` など) は非推奨です。代わりに [イベントのコンストラクター](/ja/docs/Web/API/CustomEvent) を使用してください。

{{ApiRef("DOM")}}

指定された型の [イベント](/ja/docs/Web/API/Event) を作成します。返されるオブジェクトは最初に初期化する必要があり、その後で {{domxref("EventTarget.dispatchEvent")}} へ渡すことができます。

## 構文

```js
var event = document.createEvent(type);
```

- `event` は作成された [イベント](/ja/docs/Web/API/Event) オブジェクトです。
- `type` は作成するイベント型を表す文字列です。取り得るイベント型は `"UIEvents"`, `"MouseEvents"`, `"MutationEvents"`, `"HTMLEvents"` のいずれかです。詳しくは[注](#notes)の項目を参照してください。

## 例

```js
// イベントを作成します。
var event = document.createEvent("Event");

// イベントの名前を 'build' に定義します。
event.initEvent("build", true, true);

// イベントを待受します。
elem.addEventListener(
  "build",
  function (e) {
    // e.target が elem に対応する
  },
  false,
);

// ターゲットは任意の Element やほかの EventTarget にすることができます。
elem.dispatchEvent(event);
```

## 注

`createEvent()` に渡すのに適したイベント型を表す文字列は [DOM 標準で定義されています。ステップ 2 の表をご覧ください](https://dom.spec.whatwg.org/#dom-document-createevent)。現在はほとんどのイベントオブジェクトにコンストラクターがあり、それらはイベントオブジェクトのインスタンスを生成するために推奨される、現代的な方法であることに注意してください。

Gecko は非標準のイベントオブジェクトの別名をサポートしています。詳細は以下の表を参照してください。

| イベントモジュール           | 標準イベントオブジェクト | Gecko が対応する別名 |
| ---------------------------- | ------------------------ | -------------------- |
| テキストイベントモジュール   | `TextEvent`              | `TextEvents`         |
| キーボードイベントモジュール | `KeyboardEvent`          | `KeyEvents`          |
| 基本イベントモジュール       | `Event`                  | `Events`             |

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [イベントの作成と発行](/ja/docs/Web/Events/Creating_and_triggering_events)
