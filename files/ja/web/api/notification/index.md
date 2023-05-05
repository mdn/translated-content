---
title: Notification
slug: Web/API/Notification
l10n:
  sourceCommit: 571287e7fe2a51f8790c1dc717e5fb55ca60339d
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

`Notification` は[通知 API](/ja/docs/Web/API/Notifications_API) のインターフェイスで、ユーザーへのデスクトップ通知の設定と表示に使われます。

これらの通知の表示方法や機能はプラットフォームによって異なりますが、一般にユーザーに対して非同期に情報を提供する方法を提供します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("Notification.Notification", "Notification()")}}
  - : `Notification` オブジェクトの新しいインスタンスを生成します。

## 静的プロパティ

これらのプロパティは `Notification` オブジェクト自身のみで利用することができます。

- {{domxref("Notification.permission")}} {{ReadOnlyInline}}

  - : 文字列で、通知の表示についての現在の権限を表します。取りうる値は次の通りです。

    - `denied` — ユーザーが通知の表示を拒否した。
    - `granted` —通知が表示されることをユーザーが受け入れた。
    - `default` — ユーザーの選択が不明であるため、ブラウザーは値が denied であるかのように動作します。

- {{domxref("Notification.maxActions")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 端末とユーザーエージェントが対応しているアクションの最大数。

## インスタンスプロパティ

これらのプロパティは `Notification` オブジェクトのインスタンスでのみ使用可能です。

- {{domxref("Notification.actions")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : コンストラクターの `options` 引数で指定された、通知のアクションの配列です。
- {{domxref("Notification.badge")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 通知自体を表示する空間が充分にない場合に通知を表す画像の URL です。
- {{domxref("Notification.body")}} {{ReadOnlyInline}}
  - : コンストラクターの `options` 引数で指定された、通知の本文の文字列です。
- {{domxref("Notification.data")}} {{ReadOnlyInline}}
  - : 通知のデータの構造化されたクローンを返します。
- {{domxref("Notification.dir")}} {{ReadOnlyInline}}
  - : コンストラクターの `options` 引数で指定された、通知の書字方向です。
- {{domxref("Notification.lang")}} {{ReadOnlyInline}}
  - : コンストラクターの `options` 引数で指定された、通知の言語コードです。
- {{domxref("Notification.tag")}} {{ReadOnlyInline}}
  - : コンストラクターの `options` 引数で指定された、通知の ID です。
- {{domxref("Notification.icon")}} {{ReadOnlyInline}}
  - : コンストラクターの `options` 引数で指定された、通知のアイコンの画像 URL です。
- {{domxref("Notification.image")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : コンストラクターの `options` 引数で指定された、通知の一部として表示される画像の URL です。
- {{domxref("Notification.renotify")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 古い通知が新しい通知に置き換えられた後、ユーザーに通知するかどうかを指定します。
- {{domxref("Notification.requireInteraction")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 論理値で、ユーザーがクリックするか閉じるかするまで、通知が自動的に閉じずに残るべきであることを示します。
- {{domxref("Notification.silent")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 静かに通知をするかどうかを明示します。つまり、端末の設定に関係なく、通知の際に無音やバイブレーションさせない状態を設定できます。
- {{domxref("Notification.timestamp")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 通知が生成されたとき、または適用されるとき (過去、現在、未来) の時刻を示します。
- {{domxref("Notification.title")}} {{ReadOnlyInline}}
  - : コンストラクターの第 1 引数で指定された通知のタイトルです。
- {{domxref("Notification.vibrate")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : バイブレーションハードウェアを持つ端末のためのバイブレーションパターンを指定します。

## 静的メソッド

これらのメソッドは `Notification` オブジェクト自体に対してのみ使用できます。

- {{domxref("Notification.requestPermission()")}}
  - : ユーザーに通知を表示する許可をリクエストします。

## インスタンスメソッド

これらのメソッドは `Notification` オブジェクトのインスタンス、または [`prototype`](/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) からのみ使用できます。 `Notification` オブジェクトは {{domxref("EventTarget")}} インターフェイスも継承しています。

- {{domxref("Notification.close()")}}
  - : プログラムで通知を閉じます。

## イベント

- {{domxref("Notification.click_event", "click")}}
  - : ユーザーが通知をクリックするたびに発生します。
- {{domxref("Notification.close_event", "close")}}
  - : ユーザーが通知を閉じたときに発生します。
- {{domxref("Notification.error_event", "error")}}
  - : 通知がエラーに遭遇するたびに発生します。
- {{domxref("Notification.show_event", "show")}}
  - : 通知が表示されたときに発生します。

## 例

以下の基本的な HTML を想定してください。

```html
<button onclick="notifyMe()">Notify me!</button>
```

以下のように通知を送信することが可能で — ここでは、通知に対応しているかどうかを最初にチェックしたい場合に使用できる、かなり冗長で完全なコードのセットを提示します。次に、通知を送信する前に、現在のオリジンに通知を送信するための許可が付与されているかどうかをチェックし、必要に応じて許可を要求します。

```js
function notifyMe() {
  if (!("Notification" in window)) {
    // ブラウザーが通知に対応しているか調べる
    alert("このブラウザーはデスクトップ通知に対応していません。");
  } else if (Notification.permission === "granted") {
    // 通知権限が既に付与されているかどうかを調べる。
    // そうであれば、通知を作成
    const notification = new Notification("こんにちは！");
    // …
  } else if (Notification.permission !== "denied") {
    // ユーザーにその権限を要求する必要がある
    Notification.requestPermission().then((permission) => {
      // ユーザーが許可したら、通知を作成
      if (permission === "granted") {
        const notification = new Notification("こんにちは！");
        // …
      }
    });
  }

  // 最後に、ユーザーが通知を拒否していて、あなたが敬意を
  // 払いたい場合は、これ以上相手を煩わせることはありません。
}
```

このページでライブ例を公開するのはやめました。 Chrome や Firefox が別オリジンの {{htmlelement("iframe")}} から要求された通知の許可をしないようになり、その他のブラウザーも従っているからです。動作する例を見る場合は、 [To-do リストの例](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)（また、[ライブで動作するアプリ](https://mdn.github.io/dom-examples/to-do-notifications/)）を参照してください。

> **メモ:** 上記の例では、通知をユーザーの操作（ボタンのクリック）から起動しました。ユーザーが同意していない通知でユーザーに迷惑をかけるべきではないので、これはベストプラクティスであるだけでなく、今後ブラウザーはユーザーの操作によって起動されたものではない通知の許可の要求を明示的に拒否するようになるでしょう。例えば、 Firefox はバージョン72からすでにこれを行っています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [通知 API の使用](/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API)
