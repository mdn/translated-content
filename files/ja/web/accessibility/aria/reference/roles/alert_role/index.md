---
title: "ARIA: alert ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/alert_role
original_slug: Web/Accessibility/ARIA/Roles/alert_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

`alert` ロールは、重要で、通常は時間に敏感な情報のためのものです。 `alert` はアトミックライブリージョンとして処理される [`status`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/status_role) の一種です。

## 解説

`alert` ロールは、重要で通常は時刻に敏感なメッセージをユーザーに伝えるために使用します。このロールが要素に追加されると、ブラウザーは支援技術製品にアクセシビリティアラートイベントを送信し、ユーザーに通知することができます。

アラートロールは、以下のように、ユーザーに直ちに注意が要求される情報にのみ使用するようにしてください。

- フォームフィールドに不正な値が入力された
- ユーザーのログインセッションが期限切れになりそう
- サーバーへの接続が失われたため、ローカルの変更が保存されない

`alert` ロールはテキストコンテンツにのみ使用し、リンクやボタンのような対話要素は使用しないでください。 `alert` ロールが追加されると、スクリーンリーダー（音声や点字）はキーボードのフォーカスに関係なく、自動的に更新されたコンテンツをアナウンスするので、 `alert` ロールを持つ要素はフォーカスを受け取る必要はありません。

`alert` ロールはアラートメッセージを格納するノードに追加されるものであり、アラートを発生させる要素には追加され**ません**。アラートは [assertive ライブリージョン](/ja/docs/Web/Accessibility/ARIA/Guides/Live_regions) です。 `role="alert"` を設定することは、[`aria-live="assertive"`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) と [`aria-atomic="true"`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic) を設定することと同じです。これらはフォーカスを受け取らないので、フォーカスを管理する必要はなく、ユーザーとの対話も必要ありません。

> [!WARNING]
> その押しつけがましい性質から、`alert` ロールは控えめに、ユーザーの緊急な注意が要求される状況でだけ使用してください。

[`alert`](https://www.w3.org/TR/wai-aria-1.1/#alert) ロールは 5 つの[ライブリージョン](/ja/docs/Web/Accessibility/ARIA/Guides/Live_regions)のロールのうちの 1 つです。緊急性の低い動的な変更には、`aria-live="polite"` を含めたり、[`status`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/status_role) のような他のライブリージョンのロールを使用するなど、より控えめな方法を使用してください。ユーザーがアラートを閉じることが期待される場合は、代わりに [`alertdialog`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) ロールを使用してください。

`alert` の役割について知っておくべき最も重要なことは、動的に表示されるコンテンツのためのものであり、ページ読み込み時に現れるコンテンツのためのものではないということです。ユーザーがフォームに入力し、エラーメッセージを追加するために JavaScript が使用された場合などに最適です。ユーザーが対話しない HTML には使用しないでください。例えば、複数の目に見えるアラートが散在しているページが読み込まれた場合、メッセージは動的に発生させられたものではないので、alert ロールは使用すべきではありません。

他のすべての[ライブリージョン](/ja/docs/Web/Accessibility/ARIA/Guides/Live_regions)と同様に、アラートは `role="alert"` を持つ要素の内容物が更新されたときのみアナウンスされます。最初にページのマークアップにそのロールを持つ要素が存在していることを確認してください。これはブラウザーとスクリーンリーダーが要素の変更を監視し続けるための「基礎」となります。この後、コンテンツへの変更がアナウンスされます。`role="alert"` を持つ要素を動的に追加/生成しようとしないでください。既にアナウンスしたいアラートメッセージが入力されています。これはコンテンツの変更ではないので、アナウンスにはつながりません。

`alert` ロールは変更されたコンテンツを読み上げるので、注意して使用しましょう。アラートは定義上、破壊的です。一度にいくつものアラートが表示されたり、不必要なアラートが表示されたりすると、使い勝手が悪くなります。

## 例

以下は、アラートの一般的な例とその実装方法です。

### 例 1: alert ロールを持つ要素内の既成のコンテンツを可視にする

`role="alert"` を持つ要素の内部のコンテンツが、初期状態では CSS によって非表示になっている場合、それを表示させるとアラートが発行されます。これは、既存のアラートコンテナー要素を何度も「再利用」できるということです。

```css
.hidden {
  display: none;
}
```

```html
<div id="expirationWarning" role="alert">
  <span class="hidden">ログインセッションはあと 2 分で期限切れになります</span>
</div>
```

```js
// 'hidden' クラスが除去されると、要素内のコンテンツが表示されるようになり、スクリーンリーダーがアラートを通知するようになります。
document
  .getElementById("expirationWarning")
  .firstChild.classList.remove("hidden");
```

### 例 2: alert ロールを持つ要素内のコンテンツを動的に変更

JavaScript を用いると、`role="alert"` で要素の内部で動的にコンテンツを変更することができます。同じアラートを複数回発行する必要がある場合 （つまり、動的に挿入されるコンテンツが以前と同じである場合）、一般的にこれは変更とみなされず、アナウンスにつながらないことに注意してください。このため、通常、アラートメッセージを挿入する前に、アラートコンテナーのコンテンツをいったん「クリア」するのが最善です。

```html
<div id="alertContainer" role="alert"></div>
```

```js
// コンテナーのコンテンツをクリア
document.getElementById("alertContainer").innerHTML = "";
// 新しいアラートメッセージを挿入
document.getElementById("alertContainer").innerHTML =
  "セッションはあと " + expiration + " 分で期限切れになります";
```

### 例 3: スクリーンリーダー通知のための視覚的に非表示のアラートコンテナー

アラートコンテナーそのものは視覚的に非表示にし、スクリーンリーダーのために明示的に更新/通知を提供するために使用することが可能です。これは、画面にある重要なコンテンツが更新されたが、その変更がスクリーンリーダーユーザーにはすぐにわからないような場合に有益です。

ただし、`display:none` を使用してコンテナーが非表示にならないようにしてください。そうすると、支援技術からもコンテナーが非表示になり、変更が通知されない意味になります。代わりに、[`.visually-hidden` スタイル](https://www.a11yproject.com/posts/how-to-hide-content/)などを使用してください。

```html
<div id="hiddenAlertContainer" role="alert" class="visually-hidden"></div>
```

```css
.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
```

```js
// コンテナーのコンテンツをクリア
document.getElementById("hiddenAlertContainer").innerHTML = "";
// 新しいアラートメッセージを挿入
document.getElementById("hiddenAlertContainer").innerHTML =
  "すべてのアイテムが在庫から除去されました。";
```

## 仕様書

{{Specifications}}

## 関連情報

- [`aria-live`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
- [`aria-atomic`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
- [ARIA: `log` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [ARIA: `marquee` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)
- [ARIA: `status` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [ARIA: `timer` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)
- [ARIA: `alertdialog` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- [ARIA: ライブリージョン](/ja/docs/Web/Accessibility/ARIA/Guides/Live_regions)
- [ARIA alert support - The Paciello Group](https://www.tpgi.com/aria-alert-support/)
- [ARIA Practices alert example](https://www.w3.org/WAI/ARIA/apg/patterns/alert/examples/alert/)
