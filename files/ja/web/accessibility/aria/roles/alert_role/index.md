---
title: "ARIA: alert ロール"
slug: Web/Accessibility/ARIA/Roles/alert_role
---

アラート ([`alert`](https://www.w3.org/TR/wai-aria-1.1/#alert)) ロールは、要素が動的に更新されたことをユーザーに通知するために使用できます。 ロールが追加されると、スクリーンリーダーは更新されたコンテンツの読み上げを即座に開始します。 ユーザーがアラートを閉じることを期待する場合は、代わりにアラートダイアログ ([`alertdialog`](/ja/docs/Web/Accessibility/ARIA/Roles/Alertdialog_Role)) ロールを使用するべきです。

## 説明

5 つのライブリージョンロールの 1 つである アラート ([`alert`](https://www.w3.org/TR/wai-aria-1.1/#alert)) ロールは、重要な、通常は時間依存の情報をユーザーに提供するために使用され、要素が動的に更新されたことをユーザーに伝えることがよくあります。

アラート (`alert`) ロールは、アラートメッセージを含むノードに追加し、アラートをトリガーする要素には追加しません。 アラートは主張的なライブリージョンです。 `role="alert"` の設定は、`aria-live="assertive"` と `aria-atomic="true"` の設定と同じです。 それらはフォーカスを受け取らないので、フォーカスを管理する必要はなく、ユーザーインタラクションを必要とするべきではありません。

アラート (`alert`) ロールについて最も重要なことは、動的コンテンツ用であることです。 ユーザーがフォームに記入し、JavaScript を使用してエラーメッセージを追加すると、アラートがすぐにメッセージを読み上げるなどの状況に最適です。 ユーザーが HTML と対話していない HTML 上では使用するべきではありません。 例えば、ページ上に複数の可視のアラートが散在して読み込まれたページは、動的にトリガーされないため読み上げられません。

## 例

アラートをトリガーする最も基本的な方法は、デフォルトで `display: none;` を持つ要素に `role="alert"` を追加することです。 CSS や JavaScript で [`display`](/ja/docs/Web/CSS/CSS_Display) の値を変更すると、自動的にスクリーンリーダーがコンテンツを読み上げるようになります。

```html
<p role="alert" style="display: none;">
  要素が表示されるとアラートがトリガーされます。
</p>
```

CSS だけでアラートをトリガーすることは可能ですが、ブラウザやスクリーンリーダーのサポートが増え、イベントハンドラやフォームの検証などのより大きなユーザーインタラクションの一部として、より適切な場合が多いため、JavaScript を使用する方がよいでしょう。 JavaScript を使用すると、開発者はアラートの追加と削除を適切に制御できます。

```html
<button type="button">アラートをトリガー</button>
<p class="alert">ボタンを押すとアラートがトリガーされます。</p>
```

```js
const btn = document.querySelector("button");
btn.addEventListener("click", triggerAlert);

function triggerAlert() {
  var alertEl = document.querySelector(".alert");
  alertEl.setAttribute("role", "alert");
}
```

## アクセシビリティに関する懸念

アラート (`alert`) ロールは、変更されたコンテンツを読み上げるべきで、直ちにユーザーの注意を引く必要があるため、静的コンテンツに使用したり、定期的に使用したりするべきではありません。 アラートは、定義上、破壊的です。 一度にたくさんのアラートがある場合や、不必要なアラートがある場合、悪いユーザーエクスペリエンスをもたらします。

## 仕様

{{Specifications}}

## 関連情報

- [ARIA: alertdialog ロール](/ja/docs/Web/Accessibility/ARIA/Roles/Alertdialog_Role)
- [ARIA alert support - The Paciello Group](https://developer.paciellogroup.com/blog/2017/04/aria-alert-support/)
- [ARIA ライブリージョン](/ja/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
- [alert ロールの使用](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alert_role)

1. [**WAI-ARIA ロール**](/ja/docs/Web/Accessibility/ARIA/Roles){{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}
