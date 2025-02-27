---
title: "ARIA: tooltip ロール"
slug: Web/Accessibility/ARIA/Roles/tooltip_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

`tooltip` は要素の説明を表示するテキストバブルで、ポインターにカーソルを当てたり、キーボードフォーカスを当てたりすると現れます。

## 解説

ツールチップは、その要素がフォーカスを受け取ったりカーソルを当てられたりしたときに、その要素に関するコンテキスト情報を提供します。ツールチップは短い遅延の後に自動的に表示されます。ユーザーは特にリクエストしません。ツールチップはどのようなコンテンツにも設置することができますが、一般的にはツールやコントロールのためのチップであり、短いラベル（またはまったくラベルを持たない、アクセシブルではない）を持つアイコンのための追加コンテンツを提供するようなものです。

ツールチップは一般的に、マウスを当てた後、または自分自身でフォーカスを受け取った後に、1秒から5秒の短い遅延の後に表示されます。ユーザーのリクエストなしに自動的に開き、フォーカスが失われるか、マウスを離すと自動的に閉じられます。マウスがツールチップの上に移されたときにも開いたままでなければならず、ユーザーが <kbd>Escape</kbd> キーを押したときにも閉じるべきです。

ツールチップそのものがフォーカスを受け取ることはなく、タブ順にも入らないので、ツールチップはリンク、入力、ボタンのような対話要素を含むことはできません。

ツールチップは、より詳細な情報 "i" アイコン ⓘ の適切なロールではありません。ツールチップは自分自身で要素に直接関連します。 ⓘ は `described by` の詳細情報ではありません。ツールやコントロールのものです。

ARIA `tooltip` ロールの使用は、通常のブラウザのツールチップの動作を補足するものです。ネイティブブラウザーにおけるツールチップの例としては、一部のウェブブラウザーが要素にマウスを長く当てると [`title` 属性](/ja/docs/Web/HTML/Global_attributes/title) を表示するものがあります。キーボードのフォーカスやタッチ操作によってこの機能を有効にすることはできません。ツールチップやタイトルとして記載するほど重要な情報であれば、可視テキストに含めることを検討してください。

`tooltip` ロールを持つ要素は、ツールチップが表示される前または表示されるときに [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) を使用して参照する必要があります。 `aria-describedby` 属性はツールチップではなく、自分自身で要素に指定します。

ツールチップは、自分自身の要素の [`aria-haspopup`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) プロパティではポップアップとはみなされません。

ツールチップは現れたり消えたりしますが、その出現は自動的に行われ、ユーザーが意図的に制御するものではないので、 [`aria-expanded`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) ロールは対応していません。

ツールチップのアクセシブル名は、コンテンツから決まります。理論的には、 [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-label) や [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) から使用することができますが、ほとんどの場合、アクセシブル名を持つツールチップを提供するために ARIA プロパティを使用することは推奨されません。

ツールチップは追加情報を提供します。一般的に、ツールチップ自身は直接操作できません。ツールチップは通常、主要素の `id` を持つ [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) を介して定義するコンテンツと関連付けられます。そのため、ツールチップにアクセシブル名が明示的に設定されている場合、その名前はツールチップのコンテンツではなく、主要素の説明として公開されます。

### 関連する WAI-ARIA ロール、状態、プロパティ

- ツールチップのコンテナーとなる要素には `role="tooltip"` が設定されています。
- ツールチップを発生させる要素は、 [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) でツールチップ要素を参照します。

### キーボード操作

- <kbd>Escape</kbd>
  - : ツールチップを閉じます。

ツールチップは、フォーカスが当たったとき、または要素にマウスを当てたときに、追加の操作なしに現れるべきです。自分自身で要素のフォーカスが失われるか、マウスが要素やツールチップの外に移されると、自動的に消えるべきです。ツールチップがフォーカスを受け取っていない間、 <kbd>Escape</kbd> は開くためのツールチップを閉じるべきです。

### 必要な JavaScript 機能

- ツールチップは、キーボードフォーカスとフォーカスの除去、マウスオーバーとマウスアウトというマウスイベントによって表示されたり消えたりします。

- ツールチップがフォーカスを受け取ることはありません。フォーカスは自分自身で持つ要素に留まります。

- ツールチップは <kbd>Escape</kbd> キーで隠すことができます。

- ツールチップはカーソルを当てても開いたままになります。

- ツールチップは JavaScript と CSS セレクターによってのみ非表示になります。 JavaScript が利用できない場合、ツールチップは表示されます。

## 例

```html
<label for="password">Password:</label>
<input aria-describedby="passwordrules" id="password" type="password" />
<div role="tooltip" id="passwordrules">
  <p>Password Rules:</p>
  <ul>
    <li>Minimum of 8 characters</li>
    <li>
      Include at least one lowercase letter, one uppercase letter, one number
      and one special character
    </li>
    <li>Unique to this website</li>
  </ul>
</div>
```

ツールチップは CSS でインスタンス化できます。 JavaScript でクラス名を変更し、ユーザーが <kbd>Escape</kbd> キーを押した場合にツールチップを隠すクラスにします。

```css
[role="tooltip"],
.hidetooltip.hidetooltip.hidetooltip + [role="tooltip"] {
  visibility: hidden;
  position: absolute;
  top: 2rem;
  left: 2rem;
  background: black;
  color: white;
}
[aria-describedby]:hover,
[aria-describedby]:focus {
  position: relative;
}
[aria-describedby]:hover + [role="tooltip"],
[aria-describedby]:focus + [role="tooltip"] {
  visibility: visible;
}
```

上記は、既定で CSS でツールチップを非表示にするか、 JavaScript で hidetooltip クラスが追加されている場合（ユーザーが <kbd>Esc</kbd> を押した場合）、ツールチップを確実に表示させないように詳細度を加算します。自分自身で要素がフォーカスを受け取るとき、それは相対的に位置指定され、ツールチップは見えるようになります。

## アクセシビリティの考慮

ツールチップを表示するほど重要な情報なら、常に表示しなければならないほど重要ではないでしょうか。

ツールチップは、技術的には所有している要素の外にマウスが移動したとしても、マウスを当てた時には開いたままでなければなりません。マウスを当てたときに現れるコンテンツは、ユーザーがマウスポインターをトリガーの上に置いておく必要がある場合、知覚することが困難または不可能になる可能性があるため、 [WCAG 1.4.13](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする) では、可視化されたコンテンツは永続的であるべきであり、ユーザー操作なしに消えてはならないと示しています。

## ベストプラクティス

ツールチップを使用して重要な情報を隠す代わりに、明確で簡潔な、常に見える説明を書くことを検討してください。空間がある場合は、ツールチップやトグレットチップを使用しないでください。ただ明確なラベル付けと十分な本文を提供してください。

## 仕様書

{{Specifications}}

## 関連情報

- [`dialog` ロール](/ja/docs/Web/Accessibility/ARIA/Roles/dialog_role)
- [CSS: `:focus` 擬似クラス](/ja/docs/Web/CSS/:focus)
- [Tooltips & Toggletips](https://inclusive-components.design/tooltips-toggletips/) by Heydon Pickering
- [Understanding SC 1.4.13:Content on Hover or Focus (WCAG Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html)
