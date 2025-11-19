---
title: 擬似要素
slug: Web/CSS/Reference/Selectors/Pseudo-elements
original_slug: Web/CSS/Pseudo-elements
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

CSS の **擬似要素** (Pseudo-elements) は、セレクターに付加するキーワードで、選択された要素の特定の部分にスタイル付けできるようにするものです。

## 構文

```css
selector::pseudo-element {
  property: value;
}
```

例えば {{CSSxRef("::first-line")}} 擬似要素は、段落の最初の行のフォントを変更するために使用することができます。

```css
/* すべての <p> 要素の最初の行です。 */
p::first-line {
  color: blue;
  text-transform: uppercase;
}
```

擬似要素にはダブルコロン (`::`) を使用します。これは、単一のコロン (`:`) を使用する[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)と区別するためです。なお、ブラウザーは、当初の 4 つの擬似要素（`::before`、`::after`、`::first-line`、`::first-letter`）に対して単一のコロンの構文に対応しています。

擬似要素は独立して存在しません。擬似要素が属する要素は、その擬似要素の「対象要素」と呼ばれます。擬似要素が現れる場所は、それが現れる[複雑](/ja/docs/Web/CSS/Guides/Selectors/Selector_structure#複雑セレクター)セレクターまたは[複合](/ja/docs/Web/CSS/Guides/Selectors/Selector_structure#複合セレクター)セレクター内の他のすべての要素の後でなければなりません。セレクターの最後の要素は、擬似要素の対象要素です。例えば、`p::first-line` を使用して段落の最初の行を選択することはできますが、最初の行の子要素は選択できません。したがって、`p::first-line > *` は不正です。

擬似要素は、対象要素の現在の状態に基づいて選択することができます。例えば、`p:hover::first-line` は、段落自体にカーソルが置かれているとき（擬似クラス）、その段落の最初の行（擬似要素）を選択します。

> [!NOTE]
> [セレクターリスト](/ja/docs/Web/CSS/Guides/Selectors/Selector_structure#セレクターリスト)に無効なセレクターが含まれている場合、そのスタイルブロック全体が無効になります。

## 組版擬似要素

- {{CSSxRef("::first-line")}}
  - : 対象要素の最初の行ボックスです。
- {{CSSxRef("::first-letter")}}
  - : 対象要素の最初の行の最初の文字、数値、または記号文字です。
- {{CSSxRef("::cue")}}
  - : 選択した要素内の [WebVTT](/ja/docs/Web/API/WebVTT_API) キュー。
    これは、VTT 予定があるメディアで[キャプションや他のキューのスタイル設定](/ja/docs/Web/API/WebVTT_API#html_またはスタイルシートの中の_webvtt_のスタイル設定)を行うために使用することができます。
    [CSS 擬似要素](/ja/docs/Web/CSS/Guides/Pseudo-elements)モジュールでは、`::postfix` および `::prefix` サブ擬似要素も定義されています。これらは、どのブラウザーでもまだ対応していません。

## 強調擬似要素

コンテンツおよび文書の状態に基づいて文書の一部を選択し、その領域に異なるスタイルを設定して、その状態をユーザーに示すことができます。

- {{CSSxRef("::selection")}}
  - : 文書内の選択された部分。
- {{CSSxRef("::target-text")}}
  - : 文書の対象要素。対象要素は、URL のフラグメント識別子を使用して識別されます。
- {{CSSxRef("::spelling-error")}}
  - : ブラウザーがスペルミスであると判断した部分のテキストです。
- {{CSSxRef("::grammar-error")}}
  - : ブラウザーが文法的に間違っていると判断した部分のテキストです。
- {{CSSxRef("::highlight()")}}
  - : [強調表示レジストリー](/ja/docs/Web/API/CSS/highlights_static)内の要素。独自の強調表示を作成するために使用されます。

## ツリー構造準拠擬似要素

これらの擬似要素は、通常の要素と同様に動作し、ボックスモデルにシームレスに組み込まれます。これらは、対象要素の階層内で直接スタイル設定できる子要素として機能します。

- {{CSSxRef("::before")}}
  - : 選択した要素の最初の子である擬似要素を作成します。
- {{CSSxRef("::after")}}
  - : 選択した要素の最後の子である擬似要素を作成します。
- {{CSSxRef("::column")}}
  - : [段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout) のそれぞれの段のフラグメントです。
- {{CSSxRef("::marker")}}
  - : リストアイテムの自動的に生成されるマーカーボックスです。
- {{CSSxRef("::backdrop")}}
  - : [最上位レイヤー](/ja/docs/Glossary/Top_layer)でレンダリングされた対象要素の背景。
- {{CSSxRef("::scroll-button()")}}
  - : 適用先の{{glossary("scroll container", "スクロールコンテナー")}}のスクロールを制御できるボタンを作成します。
- {{CSSxRef("::scroll-marker")}}
  - : スクロールマーカーである擬似要素を作成します。これは、スクロールマーカーグループに組み込まれた、その対象要素のスクロールターゲットボタンです。
- {{CSSxRef("::scroll-marker-group")}}
  - : 要素またはその子孫で生成される {{cssxref("::scroll-marker")}} 擬似要素を抑制するためのコンテナーを、スクロールコンテナーの前または後に生成します。

## 要素に属する擬似要素

これらの擬似要素は、それ以外では選択できない実際の要素です。

- {{CSSxRef("::details-content")}}
  - : {{HTMLElement("details")}} 要素の展開/折りたたみ可能なコンテンツです。
- {{CSSxRef("::part", "::part()")}}
  - : [シャドウツリー](/ja/docs/Web/API/Web_components/Using_shadow_DOM)内に、一致する [`part`](/ja/docs/Web/HTML/Reference/Global_attributes/part) 属性を持つ要素です。
- {{CSSxRef("::slotted", "::slotted()")}}
  - : HTML テンプレート内のスロットに配置された要素です。

## フォーム関連擬似要素

この擬似要素は、フォームコントロールに関連しています。

- {{CSSxRef("::checkmark")}}
  - : [カスタマイズ可能な select 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select) の現在選択されている `<option>` 要素内に配置されたチェックマークを対象とし、どれが選択されているかを視覚的に示します。
- {{CSSxRef("::file-selector-button")}}
  - : {{HTMLElement("input") }} の [`type="file"`](/ja/docs/Web/HTML/Reference/Elements/input/file) のボタンです。
- {{CSSxRef("::picker()")}}
  - : 要素のピッカー部分、例えば[カスタマイズ可能な select 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select)のドロップダウンピッカーです。
- {{CSSxRef("::picker-icon")}}
  - : アイコンが関連付けられているフォームコントロール内のピッカーアイコン。[カスタマイズ可能な select 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select) の場合、選択が閉じられているときに下向きの矢印を選択します。
- {{CSSxRef("::placeholder")}}
  - : 入力フィールドのプレースホルダーテキストです。

## アルファベット順の索引

CSS の一連の仕様で定義される擬似要素には、以下のようなものがあります。

A

- {{CSSxRef("::after")}}

B

- {{CSSxRef("::backdrop")}}
- {{CSSxRef("::before")}}

C

- {{CSSxRef("::column")}}
- {{CSSxRef("::checkmark")}}
- {{CSSxRef("::cue")}} （および {{CSSxRef("::cue", "::cue()")}}）

D

- {{CSSxRef("::details-content")}}

F

- {{CSSxRef("::file-selector-button")}}
- {{CSSxRef("::first-letter")}}
- {{CSSxRef("::first-line")}}

G

- {{CSSxRef("::grammar-error")}}

H

- {{CSSxRef("::highlight()")}}

M

- {{CSSxRef("::marker")}}

P

- {{CSSxRef("::part", "::part()")}}
- {{CSSxRef("::picker()")}}
- {{CSSxRef("::picker-icon")}}
- {{CSSxRef("::placeholder")}}

S

- {{CSSxRef("::scroll-button()")}}
- {{CSSxRef("::scroll-marker")}}
- {{CSSxRef("::scroll-marker-group")}}
- {{CSSxRef("::selection")}}
- {{CSSxRef("::slotted", "::slotted()")}}
- {{CSSxRef("::spelling-error")}}

T

- {{CSSxRef("::target-text")}}

V

- {{cssxref("::view-transition")}}
- {{cssxref("::view-transition-image-pair()")}}
- {{cssxref("::view-transition-group()")}}
- {{cssxref("::view-transition-new()")}}
- {{cssxref("::view-transition-old()")}}

## 入れ子の擬似要素

いくつかの擬似要素セレクターを連結して、他の擬似要素の中に入れ子になった擬似要素のスタイルを設定することができます。次の入れ子になった擬似要素の組み合わせに対応しています。

- {{CSSxRef("::after")}}
  - `::after::marker`: `::after` 擬似要素が {{CSSxRef("display", "display: list-item")}} でリストアイテムとしてスタイル設定されている場合、`::after` 擬似要素の {{CSSxRef("::marker")}} 擬似要素を選択します。
- {{CSSxRef("::before")}}
  - `::before::marker`: `::before` 擬似要素が {{CSSxRef("display", "display: list-item")}} でリストアイテムとしてスタイル設定されている場合、`::before` 擬似要素の {{CSSxRef("::marker")}} 擬似要素を選択します。

例やブラウザーの互換性情報については、個々の擬似要素のリファレンスページをご覧ください。

## 仕様書

{{Specifications}}

## 関連情報

- [CSS 擬似要素](/ja/docs/Web/CSS/Guides/Pseudo-elements)モジュール
- [擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)モジュール
- [CSS 構成要素: 擬似クラスと擬似要素](/ja/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
