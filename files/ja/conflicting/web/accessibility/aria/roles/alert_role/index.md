---
title: alert ロールの使用
slug: conflicting/Web/Accessibility/ARIA/Roles/alert_role
original_slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alert_role
---

### 説明

[alert](https://www.w3.org/TR/wai-aria-1.1/#alert) ロールの使用方法についての技術デモとブラウザおよび支援技術に及ぼす影響の説明。

alert ロールは重要かつ一般に時間的制約のあるメッセージをユーザーへ伝えるために使用されます。このロールが要素へ追加されたとき、ブラウザはアクセシブルなアラートイベントをユーザーに向けて通知可能な支援技術製品へ送信します。 アラートロールはユーザの注意を即座に必要とする場合において最も便利です、例えば:

- 不正な値がフォームフィールドに入れられたとき
- ユーザーのログインセッションが切れようとしているとき
- サーバーとの接続が切れ、ローカルの変更が保存されないとき

その押し付けがましい性質から、アラートロールはユーザーの注意を直ちに引く必要があるときにだけかつ控えめに使用されるべきです。 緊急度の低い動的な変更は、aria-live="polite" や他のライブリージョンロールなどのあまり積極的ではない方法を使うべきです。

### ユーザーエージェントと支援技術への影響

アラートロールが要素へ追加されたとき、もしくはそのような要素が可視になったときにユーザーエージェントは以下のことを実行する必要があります:

- オペレーティングシステムのアクセシビリティ API にアラートロールを持った要素を公開します。
- もしサポートしていればオペレーティングシステムのアクセシビリティ API を使ったアクセシブルなアラートイベントを発火する。

支援技術製品はそのようなイベントを監視し、それに応じてユーザへ通知すべきです:

- スクリーンリーダーは現在のアウトプット（音声または点字関係なく）を妨害し、直ちにアラートメッセージをアナウンスもしくは表示すことがあります。
- 画面拡大鏡はアラートが起こったこと、およびアラートテキストが何であるかを視覚的に示すことがあります。

> **メモ:** 支援技術がこの技術をどのように処理すべきかについては意見が異なる場合があります。上記の情報は意見の一つで、したがって標準ではありません。

### 例

#### 例 1: HTML コードへのロールの追加

下のスニペットは html ソースコードへどうのようにアラートロールが直接追加されるかを示しています。要素が読み込み完了した瞬間にスクリーンリーダーはアラートの通知をするはずです。ページが読み込み終わったとき、もし要素がすでにオリジナルのソースコードにあったら、スクリーンリーダーはページタイトルをアナウンスした後にすぐにエラーを知らせるでしょう。

```html
<h2 role="alert">Your form could not be submitted because of 3 validation errors.</h2>
```

#### 例 2: 動的にアラートロールをもつ要素を追加

このスニペットはアラートロールを持つ要素を動的に生成し、ドキュメント構造へ追加します。

```js
var myAlert = document.createElement("p");
myAlert.setAttribute("role", "alert");
var myAlertText = document.createTextNode("You must agree with our terms of service to create an account.");
myAlert.appendChild(myAlertText);
document.body.appendChild(myAlert);
```

**注:** jQuery のようなスクリプトライブラリを使ったときはより少ないコードで同じ結果を実現することができます:

```js
$("<p role='alert'>You must agree with our terms of service to create an account.</p>").appendTo(document.body);
```

#### 例 3: 存在する要素へのアラートロールの追加

時々新しい要素を作るよりもすでにページに見えている要素にアラートロールを追加するほうが便利なことがあります。これにより開発者はユーザーへより関連度や緊急性の高い情報を繰り返し表示することができます。例えば、フォームコントロールは期待値についての指示を持っているかもしれません。違う値が入力されたら、スクリーンリーダーがそれを警告としてアナウンスするために `role="alert` を指示文へ追加される場合があります。以下の疑似スニペットコードはこのアプローチを示しています:

```html
<p id="formInstruction">You must select at least 3 options</p>
```

```js
// When the user tries to submit the form with less than 3 checkboxes selected:
document.getElementById("formInstruction").setAttribute("role", "alert");
```

#### 例 4: アラートロールをもつ要素を表示する

要素が既に `role="alert"` を持ち、CSS を使用して最初に非表示になっている場合、それを表示することはページにちょうど追加されたかのようにアラートをが発せられます。存在するアラートを何回も "再利用" できるということを意味しています。

**注:** ほとんどのケースではこのアプローチは推奨されません、なぜなら現在適応できないエラーやアラート文を隠すことは理想的ではないからです。古い支援技術のユーザーは現在アラートが適応されてないときにもかかわらずアラート文を認識して、ユーザへ問題があると間違って信じこませてしまうかもしれません。

```css
.hidden {
  display:none;
}
```

```html
<p id="expirationWarning" role="alert" class="hidden">Your log in session will expire in 2 minutes</p>
```

```js
// removing the 'hidden' class makes the element visible, which will make the screen reader announce the alert:
document.getElementById("expirationWarning").className = "";
```

### 注記

- 要素でのアラートロールの使用は要素が `aria-live="assertive"` を持っていることを意味します。
- アラートロールは静的な文章のためにのみ使用されるべきです。アラートロールが使用された要素はフォーカスを受け取ることができず、スクリーンリーダーはキーボードフォーカスが現在位置している場所にかかわらずに自動的にアラートをアナウンスするかもしれません。
- もしアラートが双方向のコントロール (ユーザが問題を修正できるフォームコントロールや、アラートを破棄する "OK" ボタンなど) を提供する場合、[アラートダイアログ](/ja/Accessibility/ARIA/ARIA_Techniques/Using_the_alertdialog_role)ロールを代わりに使用するべきです。

### 使用される ARIA 属性

- [alert](https://www.w3.org/TR/wai-aria-1.1/#alert)

### 関連 ARIA 技術

- [Using the alertdialog role](/ja/Accessibility/ARIA/ARIA_Techniques/Using_the_alertdialog_role)
- [Using the aria-invalid property](/ja/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-invalid_property)

### 互換性

TBD: Add support information for common UA and AT product combinations

### その他のリソース

- ARIA Best Practices - Alert Role: <http://www.w3.org/TR/wai-aria-practices/#alert>
