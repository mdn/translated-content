---
title: "ARIA: textbox ロール"
slug: Web/Accessibility/ARIA/Roles/textbox_role
---

`textbox` ロールは、自由形式テキストの入力を可能にする要素を識別するために使用されます。 可能であれば、このロールを使用するのではなく、単一行入力の場合は [`type="text"`](/ja/docs/Web/HTML/Element/input/text) の {{HTMLElement("input")}} 要素を使用し、複数行入力の場合は {{HTMLElement("textarea")}} 要素を使用してください。

## 説明

要素に `textbox` ロールがある場合、ブラウザーはアクセス可能なテキストボックスイベントを支援技術に送信し、ユーザーにそのことを通知できます。

デフォルトは単一行入力で、<kbd>Return</kbd> や <kbd>Enter</kbd> はフォームを送信します。 この場合、 `type="text"` の HTML の {{HTMLElement("input")}} を使用することをお勧めします。 HTML の {{HTMLElement("textarea")}} のように改行をサポートする複数行のテキストボックスを作成するには、`aria-multiline="true"` を設定します。 HTML の `contenteditable` 属性を含めると、テキストノードが確実に編集可能になります。

```html
<!-- 単純なテキスト入力フィールド -->
<div id="txtboxLabel">5桁の郵便番号を入力してください</div>
<div
  role="textbox"
  contenteditable="true"
  aria-placholder="5-digit zipcode"
  aria-labeledby="txtboxLabel"></div>

<!-- 複数行のテキスト領域 -->
<div id="txtboxMultilineLabel">記事のタグを入力してください</div>
<div
  role="textbox"
  contenteditable="true"
  aria-multiline="true"
  aria-labeledby="txtboxMultilineLabel"
  aria-required="true"></div>
```

意味論的な要素はより簡潔であり、テキストボックス機能をサポートするために JavaScript を必要としません。

```html
<label for="txtbox">5桁の郵便番号を入力してください</label>
<input type="text" placholder="5-digit zipcode" id="txtbox"/>

<!-- 複数行のテキスト領域 -->
<label for="txtboxMultiline">記事のタグを入力してください</lable>
<textarea id="txtboxMultiline" required></textarea>
```

テキストフィールドが読み取り専用の場合、要素に対して `aria-readonly="true"` と設定することでこれを示します。

### 関連する ARIA のプロパティ

- `aria-activedescendent` 属性
  - : その値として、ID は DOM のフォーカスを持つ要素の子孫であるか、または `aria-owns` 属性で指定された論理的子孫であり、[`combobox`](/ja/docs/Web/Accessibility/ARIA/Roles/combobox) などの複合ウィジェットの一部であるときに、その要素にフォーカスがあるときを示します。 たとえば、コンボボックスでは、テキストボックスにフォーカスが残ることがありますが、`textbox` 要素の `aria-activedescendant` の値は、テキストボックスによって制御されるポップアップリストボックスの子孫を参照します。 この属性は、フォーカスが変更されるとプログラムで更新する必要があります。
- `aria-autocomplete` 属性

  - : フィールドへのユーザーの入力が、意図した値の予測の表示をトリガーできるかどうか、およびその方法を示します。 これは以下の値をサポートしています。

    - `inline`: 予測されたテキストがキャレットの後に挿入されます。
    - `list`: 予測されたテキストは、値の集まりとして提示されます。
    - `both`: 予測されたテキストは、値の集まりとして提示され、補完に必要なテキストの 1 つの値がキャレットの後に挿入されます。
    - `none`（デフォルト）: 予測されたテキストは提供されません。

    `list` または `both` が設定されている場合は、`aria-controls` 属性と `aria-haspopup` 属性も含める必要があります。 `aria-controls` の値は、提案値のリストを含む要素の ID です。 さらに、テキストボックスまたは `combobox` ロールを含む包含要素のいずれかに、提案値のリストを含む要素のロールに一致する `aria-haspopup` の値を持ちます。

- `aria-multiline` 属性

  - : `aria-multiline="true"` が設定されている場合、支援技術は、テキストボックスが複数行入力をサポートしていることをユーザーに知らせます。&#x20;

    <kbd>Enter</kbd>

    &#x20;や&#x20;

    <kbd>Return</kbd>

    &#x20;はフォームを送信するのではなく改行を作成します。 ARIA は要素の動作を変更しません。 むしろ、この機能は開発者によって制御されなければなりません。 `false` が設定されている場合、または属性が省略されていて `false` がデフォルトの場合、ユーザーはコントロールが単一行のテキストボックスであり、

    <kbd>Enter</kbd>

    &#x20;や&#x20;

    <kbd>Return</kbd>

    &#x20;がフォームを送信することを期待しています。

- `aria-placeholder` 属性
  - : テキストフィールドに何を入力するかについてのヒント（単語またはフレーズ）をユーザーに示します。 ヒントは、サンプル値または期待されるフォーマットの簡単な説明であるべきです。 この情報は、ラベルの代用として使用するべきではありません。 ラベルはフォーカス可能で永続的で、どのような情報が期待されているかを示し、プレースホルダーのテキストは期待値を一時的に示唆しているだけで、誤って実装するとアクセシビリティが低下する可能性があります。 プレースホルダーは、コントロールが最初にフォーカスを受け取ったときやユーザーが以前に入力した値を削除したときなど、コントロールの値が空の文字列のときに表示するべきです。 `aria-placeholder` を使用する代わりに、意味論的な `<input type="text">` や `<textarea>` に `placeholder` 属性を使用します。
- `aria-readonly` 属性
  - : ユーザーがテキストフィールドの値を変更できないことを示します。 `aria-readonly` を使用する代わりに、意味論的な `<input type="text">` や `<textarea>` に `readonly` 属性を使用します。
- `aria-required` 属性
  - : フィールドが送信される前にフィールドに値を指定する必要があることを示します。 `aria-required` を使用する代わりに、意味論的な `<input type="text">` や `<textarea>` に `required` 属性を使用します。

### キーボードインタラクション

単一行での使用（`aria-multiline` が `false` または使用されていない場合）では、<kbd>Return</kbd> キーや <kbd>Enter</kbd> キーがフォームを送信します。 複数行での使用（`aria-multiline` が `true` の場合）では、<kbd>Return</kbd> キーや <kbd>Enter</kbd> キーを押すと改行が挿入されます。

### 必要な JavaScript 機能

すべてのプロパティとステートに関連するすべての機能を維持する必要があります。 また、単一行のテキストボックスにおいて <kbd>Enter</kbd> や <kbd>Return</kbd> でフォームを送信する必要があります。

- フォーカスイベントハンドラと aria-activedescendent 属性
  - : テキストボックスとリストボックスで構成されるコンボボックスなどの複合ウィジェットを実装する場合は、ハンドラを使用して `aria-activedescendent` 属性を管理する必要があります。 この手法を使用する前に、ターゲットとするブラウザーが現在サポートしていることを確認してください。 詳細については、[aria-descendent の仕様](https://www.w3.org/TR/wai-aria/#aria-activedescendant)（英語）を参照してください。

> **メモ:** ARIA の `textbox` ロールの代わりに `type="text"` の {{HTMLElement("input")}} 要素、または {{HTMLElement("textarea")}} 要素を使用する方が良い方法です。 どちらの意味論的な要素を使用する場合でも、ARIA の `textbox` ロールは必要ありません。 [HTML で ARIA を使用する場合の注意](https://www.w3.org/TR/aria-in-html/)（英語）を参照してください。

## ユーザーエージェントと支援技術への影響

`textbox` ロールが要素に追加されるか、そのような要素が可視になると、ユーザーエージェントは以下を行うべきです。

- オペレーティングシステムのアクセシビリティ API で `textbox` ロールを持つものとして要素を公開します。
- オペレーティングシステムのアクセシビリティ API をサポートしている場合は、アクセシビリティ API を使用してアクセス可能なテキストボックスイベントを発生させます。

支援技術製品は、そのようなイベントをリスンし、それに応じてユーザーに以下を通知するするべきです。

- スクリーンリーダーは、フォーカスが最初にテキストボックスに着くと、そのラベルとロールをアナウンスするべきです。 コンテンツも含まれている場合は、これを通常のテキストボックスの場合と同様にアナウンスするべきです。
- スクリーン拡大鏡でテキストボックスが拡大されることがあります。

> **メモ:** 支援技術がこの手法をどのように扱うべきかについての意見は異なる場合があります。 上記の情報は、これらの意見の 1 つで、したがって規範的ではありません。

## 例

### 例 1: 単一行入力の HTML コードにロールを追加する

以下のスニペットは、`textbox` ロールが HTML ソースコードにどのように直接追加されるかを示しています。

```html
<div role="textbox" contenteditable="true"></div>
```

### 例 2: 複数行入力の HTML コードにロールを追加する

以下のスニペットは、`textbox` ロールが HTML ソースコードにどのように直接追加されるかを示しています。

```html
<div role="textbox" contenteditable="true" aria-multiline="true"></div>
```

## ベストプラクティス

- このロールが適用される HTML 要素に `contenteditable="true"` 属性を必ず追加してください。 `aria-readonly` を `true` に設定した場合でもそうします。 このようにして、読み取り専用でない場合は、コンテンツを編集可能にすることを通知します。

## 関連情報

- [ARIA: search ロール](/ja/docs/Web/Accessibility/ARIA/Roles/searchbox)
