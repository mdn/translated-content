---
title: "ARIA: option ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/option_role
original_slug: Web/Accessibility/ARIA/Roles/option_role
l10n:
  sourceCommit: f6310f5cf34dfe4b5c0a45494a83b0a5ef9a6571
---

`option` ロールは `listbox` で選択可能な項目に使用します。

## 解説

`option` ロールは [`listbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) 内でユーザーが選択できるものを識別するために使用します。これらの選択肢は {{HTMLElement('select')}} 要素内の {{HTMLElement('option')}} 要素と似ていますが、画像を格納することができます。

選択可能な選択肢はすべて、 [`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) をその状態に一致させる必要があります（選択されているときは `true`、選択されていないときは `false`）。選択肢が選択可能でない場合、 `aria-selected` は省略できます。無効になった選択肢は、 [`aria-disabled="true"`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) と `aria-selected="false"` を設定し、ユーザーに、無効ではあるが選択肢が存在することを説明します。

`option` ロールは `listbox` の選択可能な選択肢を特定するためのものです。選択肢にはアクセシブル名を指定しなければなりません。一般的に、選択肢のアクセシブル名は要素の子孫コンテンツから決まります。

作成者は、選択肢の役割を持つ要素に [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) または [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) を指定することによって、アクセシビリティ名を明示的に提供することもできます。 `aria-label` または `aria-labelledby` を使用し、選択肢が可視のテキストラベルも表示する場合、作成者は <a href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html">WCAG Success Criterion 2.5.3 Label in Name</a> を保証しなければなりません。

使用可能な場合は、代わりに {{HTMLElement('select')}} 要素か `checkbox` または `radio` 型の {{HTMLElement('input')}} 要素を使用することを強く推奨します。これらのネイティブ　HTML　要素はキーボード操作機能を提供し、すべての子孫要素のフォーカスを自動的に管理します。

### 子孫はすべて presentation になる

一部の種類のユーザーインターフェイス部品は、プラットフォームのアクセシビリティ API で表したとき、テキストしか含むことができません。アクセシビリティ API には `option` に含まれる意味づけ要素を表す方法がありません。この制限に対応するために、ブラウザーは自動的に `option` 要素の子孫要素すべてに [`presentation`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) ロールを適用します。

例えば、見出しを格納した次の `option` 要素を考えてみましょう。

```html
<div role="option"><h3>私の意見のタイトル</h3></div>
```

`option` の子孫が存在するので、以下のコードと等価になります。

```html
<div role="option"><h3 role="presentation">私の意見のタイトル</h3></div>
```

支援技術ユーザーの視点から見ると、上記のコードスニペットは[アクセシビリティツリー](/ja/docs/Glossary/Accessibility_tree)上では次のものと等価になるので、見出しは存在しないことになります。

```html
<div role="option">私の意見のタイトル</div>
```

### 関連する WAI-ARIA のロール、状態、プロパティ

#### 関連するロール

- [`listbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
  - : 選択肢は `listbox` に格納されているか、または `listbox` が自分自身で所有している必要があります。

#### 状態とプロパティ

- [`aria-selected`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : 選択肢の選択状態を記述するために使用します。必須です。

- [`aria-checked`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
  - : 選択肢を複数選択で使用する場合のチェック状態を記述するために使用します。`true`、`false`、`mixed` に対応しています。オプションです。

- [`aria-posinset`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)
  - : 一度にいくつかの選択肢しか存在しない仮想スクロールのように、選択肢の集合が DOM と一致しない場合に、その位置を記述するために使用します。オプションです。

- [`aria-setsize`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)
  - : 選択肢の総数を宣言するために `aria-posinset` と共に使用します。オプションです。

- [`aria-disabled`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
  - : 選択肢が存在していますが、編集できません。オプションです。

- [`aria-hidden`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
  - : アクセシビリティツールから選択肢を非表示にするために使用します。冗長なコンテンツなど、支援技術の使い勝手を向上させる場合にのみ、非表示のコンテンツや表示可能なコンテンツを非表示にするために使用しましょう。オプションです。

- [`aria-invalid`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
  - : 選択肢の値がアプリケーションによって不正な値とみなされることを示すために使用します。オプションです。

- [`aria-busy`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
  - : 読み込んでいる間など、要素が変更されていることを示すために使用します。オプションです。

- [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : どの要素が選択肢をラベル付けするかを示すために用います。適切な場合には、選択肢のコンテンツを代わりに使用してください。オプションです。

- [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : オプションのラベル付けに用います。ラベルが DOM に存在する場合、代わりに `aria-labelledby` を使用してください。オプションです。

（さらなる詳細と ARIA の状態とプロパティの完全なリストについては、 <a href="https://www.w3.org/TR/wai-aria-1.1/#option">ARIA `option` (role)</a> のドキュメントを参照してください。）

## 仕様書

{{Specifications}}

## 関連情報

- HTML {{HTMLElement('select')}} 要素
- HTML {{HTMLElement('label')}} 要素
- HTML {{HTMLElement('option')}} 要素
- [ARIA: `combobox` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [ARIA: `list` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [ARIA: `listbox` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)

<section id="Quick_links">
  <ol>
    <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles"><strong>WAI-ARIA ロール</strong></a>{{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}
  </ol>
</section>
