---
title: 入力機器能力 API
slug: Web/API/InputDeviceCapabilities_API
l10n:
  sourceCommit: 21d3e89589aaf9e5cfa667de679134513ab833f3
---

{{DefaultAPISidebar("InputDeviceCapabilities API")}}{{SeeCompatTable}}

入力機器能力 API は、入力イベントの基盤となるソースに関する詳細を提供します。この API は、機器が何かというよりも、機器がどのように動作するかを記述しようとするものです。例えば、この API の最初のバージョンは、機器がタッチ画面であるかどうかではなく、タッチイベントが発生するかどうかを示します。

## 入力機器の能力の概念と用途

DOM イベントは機器の入力を抽象化するため、どの機器や機器の種類がイベントを発生させたのかを知る手段を提供しません。そのため、同じアクションが複数のイベントハンドラーを発生させてしまうことがあります。これに対処するため、ウェブ開発者はウェブページの動作を正規化するために、仮定を立てたり、ヒューリスティックを使用したりしています。

入力機器能力 API は、入力機器の機能を抽象化することでこの問題に対処します。例えば、 `touchstart` イベントと `mousedown` イベントの両方を実装したウェブページがあるとします。 touchstart イベントが発生した場合、ユーザーの機器はタッチインターフェイスを持っているとみなされます。 mousedown イベントが発生した場合はどうでしょうか。同じアクションを 2 度発生させないように、 `touchstart` イベントも発生したかどうかを知ることは有益なことです。これは {{domxref("UIEvent")}} の sourceCapabilities プロパティを調べることで可能です。

```js
myButton.addEventListener("mousedown", (e) => {
  // 上記で処理したタッチイベントの場合、タップ時に再度スタイル設定を変更しない
  if (!e.sourceCapabilities.firesTouchEvents) myButton.classList.add("pressed");
});
```

## インターフェイス

- {{DOMxRef("InputDeviceCapabilities")}} {{Experimental_Inline}}
  - : 入力機器に関する論理情報を提供します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
