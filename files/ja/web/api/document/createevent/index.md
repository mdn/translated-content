---
title: "Document: createEvent() メソッド"
short-title: createEvent()
slug: Web/API/Document/createEvent
l10n:
  sourceCommit: c024a4b59fb38fe8df1c9d117d5209c0c8c47b54
---

{{APIRef("DOM")}}

> [!WARNING]
> `createEvent` とともに使用される多くのメソッド (`initCustomEvent` など) は非推奨です。
> 代わりに [イベントのコンストラクター](/ja/docs/Web/API/CustomEvent) を使用してください。

指定された型の[イベント](/ja/docs/Web/API/Event)を作成します。返されるオブジェクトは最初に初期化する必要があり、その後で {{domxref("EventTarget.dispatchEvent")}} へ渡すことができます。

## 構文

```js-nolint
createEvent(type)
```

### 引数

- `type`
  - : 作成するイベント型を表す文字列です。取り得るイベント型は `"UIEvents"`, `"MouseEvents"`, `"MutationEvents"`, `"HTMLEvents"` のいずれかです。詳しくは[メモ](#メモ)の項目を参照してください。

### 返値

[イベント](/ja/docs/Web/API/Event)オブジェクトです。

## 例

```js
// イベントを作成します。
const event = document.createEvent("Event");

// イベントの名前を 'build' に定義します。
event.initEvent("build", true, true);

// イベントを待受します。
elem.addEventListener(
  "build",
  (e) => {
    // e.target が elem に対応する
  },
  false,
);

// ターゲットは任意の Element やほかの EventTarget にすることができます。
elem.dispatchEvent(event);
```

## メモ

`createEvent()` に渡すのに適したイベント型を表す文字列は [DOM 標準で定義されています。ステップ 2 の表をご覧ください](https://dom.spec.whatwg.org/#dom-document-createevent)。現在はほとんどのイベントオブジェクトにコンストラクターがあり、それらはイベントオブジェクトのインスタンスを生成するために推奨される、現代的な方法であることに注意してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [イベントの作成と発行](/ja/docs/Web/API/Document_Object_Model/Events)
