---
title: PromiseRejectionEvent()
slug: Web/API/PromiseRejectionEvent/PromiseRejectionEvent
l10n:
  sourceCommit: 2b8f5d9a29f00aea5d2edfa78d1fb90c51752858
---

{{APIRef("HTML DOM")}}

**`PromiseRejectionEvent()`** コンストラクターは、新しい {{domxref("PromiseRejectionEvent")}} オブジェクトを返します。これは、 JavaScript の {{jsxref("Promise")}} が拒否されたときに発生するイベントを表します。

プロミス拒否イベントにより、失敗したプロミスや、失敗を見逃したプロミスを検出して報告することが可能になります。また、エラーに対するグローバルハンドラーを書くことも容易になります。

`PromiseRejectionEvent` には 2 種類あります。 {{domxref("Window.unhandledrejection_event", "unhandledrejection")}} は、プロミスが拒否されたが処理されなかった場合に JavaScript ランタイムによって発行されます。 {{domxref("Window.rejectionhandled_event", "rejectionhandled")}} イベントは、プロミスが拒否されたが、拒否が拒否ハンドラーによって捕捉された場合に発行されるものです。

## 構文

```js-nolint
new PromiseRejectionEvent(type, options)
```

### 引数

- `type`
  - : 文字列で、イベントの名前を表します。
    大文字と小文字の区別があり、ブラウザーは `rejectionhandled` または `unhandledrejection` のどちらかに設定します。
- `options`
  - : オブジェクトで、 _{{domxref("Event/Event", "Event()")}} で定義されたプロパティに加え_、以下のプロパティを持つことができます。
    - `promise`
      - : 拒否された {{jsxref("Promise")}}。
    - `reason`
      - : プロミスが拒否された理由を表す任意の値または {{jsxref("Object") }}。これは、エラーコード、エラー文字列、プロミスが拒否された状況を記述する詳細な情報を含むオブジェクトなど、何でもかまいません。

### 返値

引数で指定された通りに構成された、新しい `PromiseRejectionEvent` オブジェクトです。

## 例

この例では、文字列 "My house is on fire" を理由とするプロミス `myPromise` に対して新しい {{domxref("Window.unhandledrejection_event", "unhandledrejection")}} イベントが作成されます。理由`は数字とすることもできますし、家の住所や火事の程度、緊急連絡先の電話番号など、詳細な情報を記載したオブジェクトでも構いません。

```js
let myRejectionEvent = new PromiseRejectionEvent("unhandledrejection", {
  promise: myPromise,
  reason: "My house is on fire",
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [プロミスの使用](/ja/docs/Web/JavaScript/Guide/Using_promises)
- {{jsxref("Promise")}}
- {{domxref("PromiseRejectionEvent")}}
