---
title: "Performance: mark() メソッド"
short-title: mark()
slug: Web/API/Performance/mark
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}

**`mark()`** メソッドは、名前付き {{domxref("PerformanceMark")}} オブジェクトを生成し、ブラウザーのパフォーマンスタイムラインに高解像度のタイムスタンプマーカーを表示します。

## 構文

```js-nolint
mark(name)
mark(name, markOptions)
```

### 引数

- `name`
  - : 文字列で、マークの名前を表します。非推奨の {{domxref("PerformanceTiming")}} インターフェイスのプロパティのいずれかと同じ名前であってはいけません。
- `markOptions` {{optional_inline}}
  - : このマークのためにタイムスタンプと追加のメタデータを指定するためのオブジェクトです。
    - `detail` {{optional_inline}}
      - : マークに含める任意のメタデータです。既定値は `null` です。[構造化クローン可能](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)でなければなりません。
    - `startTime` {{optional_inline}}
      - : マークの時刻として使用する {{domxref("DOMHighResTimeStamp")}} です。既定値は {{domxref("performance.now()")}} です。

### 返値

生成された {{domxref("PerformanceMark")}} 項目です。

### 例外

- {{jsxref("SyntaxError")}}: `name` が非推奨の {{domxref("PerformanceTiming")}} インターフェイスのプロパティのいずれかである場合に発生します。[下記の例](#予約済みの名前)を参照してください。
- {{jsxref("TypeError")}}: `startTime` が負の場合に発生します。

## 例

### 名前付きのマーカーを生成

次の例では、`mark()` を使用して名前付き {{domxref("PerformanceMark")}} 項目を作成しています。同じ名前のマークを複数作成することができます。また、それらを割り当てて、作成した {{domxref("PerformanceMark")}} オブジェクトへの参照を保有することもできます。

```js
performance.mark("login-started");
performance.mark("login-started");
performance.mark("login-finished");
performance.mark("form-sent");

const videoMarker = performance.mark("video-loaded");
```

### 詳細付きのマーカーを生成

パフォーマンスマークは `markOptions` オブジェクトを使用して設定することができ、`detail` プロパティに任意の型の追加情報を入力することができます。

```js
performance.mark("login-started", {
  detail: "ログインはトップメニューのログインボタンを使用して開始されました。",
});

performance.mark("login-started", {
  detail: { htmlElement: myElement.id },
});
```

### 開始時刻付きのマーカーを作成

`mark()` メソッドの既定では、タイムスタンプは {{domxref("performance.now()")}} です。`markOptions` の `startTime` オプションを使用すると、別の時刻に設定することができます。

```js
performance.mark("start-checkout", {
  startTime: 20.0,
});

performance.mark("login-button-pressed", {
  startTime: myEvent.timeStamp,
});
```

### 予約済みの名前

後方互換性を保つため、非推奨の {{domxref("PerformanceTiming")}} インターフェイスの一部である名前は使用できないことに注意してください。次の例は例外が発生します。

```js example-bad
performance.mark("navigationStart");
// SyntaxError: "navigationStart" is part of
// the PerformanceTiming interface,
// and cannot be used as a mark name
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
