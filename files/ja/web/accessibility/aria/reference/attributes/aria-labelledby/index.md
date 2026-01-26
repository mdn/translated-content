---
title: aria-labelledby
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby
original_slug: Web/Accessibility/ARIA/Attributes/aria-labelledby
l10n:
  sourceCommit: 570a1b34461e2a95f0bc943b3fc15aba241813a7
---

`aria-labelledby` 属性は、適用される要素のラベル付けを行う要素（複数可）を識別します。

## 解説

`aria-labelledby` プロパティによって、アクセシブル名を定義するためにページ上の他の要素を参照することができます。これは、アクセシブル名を提供する要素の関連付けにネイティブ対応していない要素を使用する場合に有益です。

要素によっては、その[アクセシブル名](https://w3c.github.io/accname/#dfn-accessible-name)を内部コンテンツから取得するものがあります。例えば、{{HTMLElement('button')}}、{{HTMLElement('a')}}、{{HTMLElement('td')}} のアクセシブル名は開始タグと終了タグの間のテキストから決まります。他にも、フォームの {{HTMLElement('textarea')}}、{{HTMLElement('fieldset')}}、{{HTMLElement('table')}} などの要素は、関連する要素のコンテンツからアクセシブル名を取得します。これらの要素では、アクセシブル名はそれぞれ `for` 属性を持つ {{HTMLElement('label')}}、{{HTMLElement('legend')}}、{{HTMLElement('caption')}} から取得します。

操作可能な要素はすべて、アクセシブル名がなければなりません。 `aria-labelledby` は、要素のアクセシブル名を定義するために別の要素を参照するために使用することができます。

アクセシブル名を作成するために参照できるコンテンツがない場合は、代わりに [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) 属性を使用してください。

`aria-labelledby` の目的は `aria-label` と同じです。これはユーザーに対して、インタラクティブ要素に対して認識可能でアクセシブル名を提供します。要素に両方の属性が設定されている場合、 `aria-labelledby` が使用されます。 `aria-labelledby` は `aria-label` や {{HTMLElement('label')}}、要素の内部テキストなど、アクセシブル名を提供する他のすべてのメソッドよりも優先されます。

`aria-labelledby` および [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) 属性は、どちらも代替テキストを計算するために他の要素を参照します。 `aria-labelledby` は要素にアクセシブル名を提供する短いテキストを参照します。 `aria-describedby` は説明を提供する詳しいコンテンツを参照するために使用します。インタラクティブ要素のアクセシブル名に適切な短いラベル付けを提供する要素が DOM にない場合、 `aria-label` を使用してインタラクティブ要素のアクセシブル名を定義します。

> [!NOTE]
> アメリカ英語では、この属性は "labeledby" と綴られるとみなされますが、 "labelledby" という綴りが確立されており、アクセシビリティ API で使用されています。

次の例では `aria-labelledby` を用いて、兄弟要素のテキストコンテンツを使用してチェックボックス入力にアクセシブル名を提供しています。

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="tac"></span>
<span id="tac">利用規約に同意します。</span>
```

この状況では `aria-labelledby` を使用することは、 HTML の {{HTMLElement('label')}} 要素を `for` 属性で使用することに似ていますが、大きく異なる点があることに注意してください。 `aria-labelledby` 属性はアクセシブル名を定義するだけです。この属性は `<label>` の他の機能、例えばラベル付け要素をクリックすると関連付けられた入力が有効になるといった機能を提供しません。これは JavaScript で追加する必要があります。

幸いなことに、`type="checkbox"`のHTML {{HTMLElement('input')}} はネイティブの `<label>` で動作します。使用する場合は以下を使用してください。

```html
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  利用規約に同意します。
</label>
<p><a href="tac.html">利用規約をお読みください</a>。</p>
```

### 利点（と欠点）

1. `aria-labelledby` プロパティは、ブラウザーがアクセシブル名を計算する際に最も優先されるプロパティです。このプロパティは、 `aria-label` や他の名前付け属性、要素のコンテンツなど、要素に名前を付ける他のメソッドよりも優先されることに注意してください。

   ```html
   <button aria-label="Blue" aria-labelledby="color">Red</button>
   <span id="color">Yellow</span>
   ```

   この例では、アクセシブル名は "Yellow "です。

2. `aria-labelledby` プロパティは、値としてスペース区切りの id 参照リストを取ります。これは、複数の要素を単一のアクセシブル名にまとめることができることを示しています。自分自身で要素を参照するために、要素自身の [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) を含めることができます。

   ```html
   <h2 id="attr" class="article-title">13 ARIA attributes you need to know</h2>
   <p>
     There are over 50 ARIA states and properties, but 13 of them stand out…
     <a href="13.html" id="rm13" aria-labelledby="rm13 attr">read more</a>
   </p>
   ```

   この例では、アクセシブル名は "read more 13 ARIA attributes you need to know" です。

3. `aria-labelledby` プロパティの値の順番は重要です。複数の要素が `aria-labelledby` によって参照されている場合、参照されている各要素のコンテンツは `aria-labelledby` の値で参照されている順番に結合されます。もし、 `aria-labelledby="attr rm13">`と記述していたら、アクセシブル名は "13 ARIA attributes you need to know read more" になっていたでしょう。

4. `aria-labelledby` プロパティはその値の中で `id` が繰り返されると無視します。要素が複数の時点で参照された場合、最初の参照のみが処理されます。 `aria-labelledby="attr attr rm13 rm13">` は `aria-labelledby="attr rm13">` として扱われます。

5. `aria-labelledby` プロパティの値は、表示されていない要素のコンテンツを含めることができます。支援技術のユーザーには、他のすべてのユーザーと同じコンテンツを提供すべきですが、HTML の [`hidden`](/ja/docs/Web/HTML/Reference/Global_attributes/hidden) 属性、CSS の [`display: none`](/ja/docs/Web/CSS/Reference/Properties/display) 、CSS の [`visibility: hidden`](/ja/docs/Web/CSS/Reference/Properties/visibility) を持つ要素のコンテンツを計算された名前の文字列に含めることができます。

6. `aria-labelledby` プロパティは入力要素の値を取り込みます。値が `<input>` を参照している場合、あるフォームコントロールの現在の値が計算された名前文字列に含まれ、値が更新されると変更されます。

7. `aria-labelledby` プロパティを連鎖させることはできません。 `aria-labelledby` を持つ要素が、これも `aria-labelledby` を持つ他の要素を参照している場合、参照されている要素の `aria-labelledby` 属性は無視されます。

> [!WARNING]
> `aria-labelledby` で要素の名前を計算するのは複雑で、隠されたコンテンツを参照することがあるため、確実に期待する名前をユーザーに表示していることを支援技術でテストすることはとても重要です。

## 値

- ID reference list
  - : 現在の要素をラベル付けする要素を参照する、 1 つ以上の ID 値を空白で区切ったリスト。

## 関連付けられたロール

作者がアクセシブル名を提供できないロールを**除く**ほとんどすべてのロールで使用できます。

`aria-labelledby`属性は以下の場所では対応していません。

- [`caption`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`code`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`deletion`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`emphasis`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`generic`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role)
- [`insertion`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`mark`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/mark_role)
- [`paragraph`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`presentation`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) / [`none`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/none_role)
- [`strong`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`subscript`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`suggestion`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/suggestion_role)
- [`superscript`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`term`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/term_role)
- [`time`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)

## 仕様書

{{Specifications}}

## 関連情報

- HTML の {{HTMLElement('label')}} 要素
- HTML の {{HTMLElement('legend')}} 要素
- HTML の {{HTMLElement('caption')}} 要素
- [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)

<section id="Quick_links">
<strong><a href="/ja/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/aria/Attributes")}}
</section>
