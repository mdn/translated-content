---
title: "ARIA: radiogroup ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/radiogroup_role
l10n:
  sourceCommit: 50f209459d9e1db35bf0d973d7878ea4600acb8c
---

`radiogroup` ロールは、`radio` ボタンのグループです。

## 説明

ラジオグループは、関連する [`radio`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role) オプションのセットを説明するコレクションです。`radiogroup` は、一度に一つのエントリー、または `radio` のみがチェックされうる [`select`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/select_role) リストの一種です。

HTML のネイティブ入力ラジオボタンである [`<input type="radio">`](/ja/docs/Web/HTML/Reference/Elements/input/radio) を使用する場合、グループ内の各入力ラジオボタンに同じ [`name`](/ja/docs/Web/HTML/Reference/Elements/input#name) が与えられると、ラジオボタンはグループ化されます。同じ名前の入力ラジオボタンのグループが作成されると、そのグループ内の任意の入力ラジオボタンを選択すると、同じグループ内で現在選択されている入力ラジオボタンが自動的に選択解除されます。これによってラジオボタンが一緒に関連付けられますが、ラジオボタンのグループを `radiogroup` として公開するには、ARIA ロールを明示的に設定します。

同じ名前の HTML 入力ラジオボタンを使用してラジオグループを作成することを推奨しますが、セマンティック HTML フォームコントロールの代わりに ARIA ロールと属性を使用する必要がある場合、カスタム `radio` ボタンはネイティブ HTML ラジオ入力ボタンのように動作できますし、そうすべきです。

非セマンティック要素をラジオボタンとして使用する場合、ユーザーがグループから一度に一つのラジオボタンのみを選択できることを確保する必要があります。グループ内の一つの項目がチェックされ、[`aria-checked`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) 属性が `true` に設定されると、以前にチェックされていた項目はチェック解除され、その `aria-checked` 属性は `false` になります。`aria-checked` 属性は、`radiogroup` 自体ではなく、関連する `radio` ロールに設定されます。

一部の `radiogroup` 実装では、すべてのボタンがチェック解除状態でセットを初期化します。`radiogroup` 内の `radio` が一度チェックされると、通常はすべてがチェック解除された状態に戻ることはできません。

`radiogroup` は、[`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) によって参照される可視ラベルによって、または [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) で指定されたラベルによって、アクセシブル名を持つ必要があります。要素がラジオグループに関する追加情報を提供する場合、それらの要素は [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) プロパティで `radiogroup` 要素によって参照されます。

### 関連する WAI-ARIA のロール、ステート、プロパティ

- [`radio`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role) ロール
  - : `radiogroup` 内のチェック可能なボタンのグループの一つで、ボタンの一つだけが一度にチェックできます。
- [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) / [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : `radiogroup` は、`aria-labelledby` によって参照される可視ラベルによって、または `aria-label` で指定されたラベルによって、アクセシブル名を持つ必要があります。
- [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : `radiogroup` に関する追加情報を提供する要素への参照
- [`aria-required`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
  - : フォームが送信される前に、グループ内の一つの `radio` が `aria-checked="true"` を設定している必要があることを示します。必須状態は、HTML ラジオボタンを使用する場合の [`required`](/ja/docs/Web/HTML/Reference/Attributes/required) 属性が一つ以上のラジオ {{HTMLElement('input')}} 要素に直接設定されるのとは異なり、`radio` 要素の一つではなく `radiogroup` 要素に指定されます。
- [`aria-errormessage`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
  - : エラーがある場合、`radiogroup` のエラーメッセージを提供する要素を識別します。そのメッセージは、関連性がない間は隠されているべきです。

### キーボードインタラクション

[`toolbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role) にない `radiogroup` 内の `radio` ボタンについては、以下のキーボードインタラクションをサポートする必要があります：

- <kbd>Tab</kbd> と <kbd>Shift + Tab</kbd>
  - : フォーカスを `radiogroup` に出入りさせます。フォーカスが `radiogroup` に移動する際、ラジオボタンがチェックされている場合は、チェックされたボタンにフォーカスが設定されます。ラジオボタンがチェックされていない場合は、グループの最初のラジオボタンにフォーカスが設定されます。
- <kbd>Space</kbd>
  - : フォーカスされたラジオボタンがまだチェックされていない場合、チェックします。
- <kbd>→</kbd> と <kbd>↓</kbd>
  - : グループ内の次のラジオボタンにフォーカスを移動し、以前にフォーカスされたボタンのチェックを解除し、新しくフォーカスされたボタンをチェックします。フォーカスが最後のボタンにある場合は、最初のボタンにフォーカスが移動します。
- <kbd>←</kbd> と <kbd>↑</kbd>
  - : グループ内の前のラジオボタンにフォーカスを移動し、以前にフォーカスされたボタンのチェックを解除し、新しくフォーカスされたボタンをチェックします。フォーカスが最初のボタンにある場合は、最後のボタンにフォーカスが移動します。

矢印キーはツールバーの要素間をナビゲートするために使用されます。`radiogroup` がツールバー内にネストされている場合、ユーザーはどのラジオボタンがチェックされているかを変更することなく、ラジオボタンを含むすべてのツールバー要素間をナビゲートできる必要があります。そのため、[`toolbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role) 内の `radiogroup` を矢印キーでナビゲートする際、チェックされたボタンは変更されません。むしろ、`toolbar` 内では、<kbd>Space</kbd> と <kbd>Enter</kbd> キーがフォーカスされた `radio` ボタンをまだチェックされていない場合にチェックし、<kbd>Tab</kbd> が `toolbar` に出入りするためのフォーカスを移動します。

### 必要な JavaScript 機能

`radiogroup` のユーザーインタラクションは、ユーザーが同じ名前の HTML ラジオボタンのグループに入るユーザーインタラクションを複製する必要があります。tab、space、矢印キーのキーボードイベントをキャプチャする必要があります。ラジオ要素とそれに関連するラベルの両方のクリックイベントもキャプチャする必要があります。さらに、[フォーカスを管理する](https://usability.yale.edu/web-accessibility/articles/focus-keyboard-operability) 必要があります。

通常、フォーカスされた要素から移動すると DOM 順序で次のフォーカス可能要素に移動しますが、矢印キーを使用してラジオボタンのグループをナビゲートする際はグループ内にとどまり、フォーカスがグループの最後のラジオにあるときに <kbd>→</kbd> または <kbd>↓</kbd> が離されると最初のラジオボタンにフォーカスが移動し、フォーカスが最初のラジオにあるときに <kbd>←</kbd> または <kbd>↑</kbd> が離されると最後のラジオに移動します。ロービング [`tabindex`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) を管理することは、矢印キーイベントを管理する一つの方法です。

### 必要な CSS 機能

チェックされたラジオボタンのチェック状態をスタイル設定するには、`[aria-checked="true"]` [属性セレクター](/ja/docs/Web/CSS/Reference/Selectors/Attribute_selectors)を使用します。

視覚的なキーボードフォーカスとホバーのスタイル設定には、CSS の {{CSSXRef(':hover')}} と {{CSSXRef(':focus')}} 疑似クラスを使用します。フォーカスとホバー効果は、どのオプションが選択されているかを認識しやすくし、ラベルまたはボタンのいずれかをクリックするとラジオボタンが有効化されることを示すために、ラジオボタンとラベルの両方を包含すべきです。

## 例

セマンティック HTML の代わりに非セマンティック ARIA ロールを使用した `radiogroup` の基本設定は以下の通りです：

```html
<div role="radiogroup" aria-labelledby="question">
  <div id="question">Which is the best color?</div>
  <div id="radioGroup">
    <p>
      <span
        id="colorOption_0"
        tabindex="0"
        role="radio"
        aria-checked="false"
        aria-labelledby="purple"></span>
      <span id="purple">Purple</span>
    </p>
    <p>
      <span
        id="colorOption_1"
        tabindex="-1"
        role="radio"
        aria-checked="false"
        aria-labelledby="aubergine"></span>
      <span id="aubergine">Aubergine</span>
    </p>
    <p>
      <span
        id="colorOption_2"
        tabindex="-1"
        role="radio"
        aria-checked="false"
        aria-labelledby="magenta"></span>
      <span id="magenta">Magenta</span>
    </p>
    <p>
      <span
        id="colorOption_3"
        tabindex="-1"
        role="radio"
        aria-checked="false"
        aria-labelledby="all"></span>
      <span id="all">All of the above</span>
    </p>
  </div>
</div>
```

これは、CSS や JavaScript を必要としないセマンティック HTML を使用して書くことができます：

```html
<fieldset>
  <legend>Which is the best color?</legend>
  <p>
    <input name="colorOption" type="radio" id="purple" />
    <label for="purple">Purple</label>
  </p>
  <p>
    <input name="colorOption" type="radio" id="aubergine" />
    <label for="aubergine">Aubergine</label>
  </p>
  <p>
    <input name="colorOption" type="radio" id="magenta" />
    <label for="magenta">Magenta</label>
  </p>
  <p>
    <input name="colorOption" type="radio" id="all" />
    <label for="all">All of the above</label>
  </p>
</fieldset>
```

この {{HTMLElement('fieldset')}} の例では、`role="radiogroup"` は必要ありませんが、このグループ化を明示的に `radiogroup` としてアナウンスするには、ARIA ロールを含めます。

## 仕様書

{{Specifications}}

## 関連情報

- HTML {{HTMLElement('fieldset')}} 要素
- HTML {{HTMLElement('input/radio', '&lt;input type="radio">')}} ラジオボタン要素
- [ARIA `radio` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`aria-errormessage`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-invalid`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [`aria-readonly`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
- [`aria-required`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
