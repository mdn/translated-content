---
title: カスタマイズ可能なセレクト
slug: Learn_web_development/Extensions/Forms/Customizable_select
l10n:
  sourceCommit: 9f1de91066cd439241fb5f928325ba0d04e8aeb4
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}

この記事では、専用の最新 HTML および CSS 機能を組み合わせて、完全にカスタマイズ可能な {{htmlelement("select")}} 要素を作成する方法を説明します。これには、セレクトボタン、ドロップダウンピッカー、矢印アイコン、現在選択されているオプションのチェックマーク、各 {{htmlelement("option")}} 要素のスタイリングを完全に制御することが含まれます。

## 背景

従来、`<select>` 要素の外観や操作感をカスタマイズするのは困難でした。なぜなら、これらは OS レベルでスタイリングされている内部要素を含み、CSS でターゲットにできないためです。これにはドロップダウンピッカーや矢印アイコンなどが含まれます。

以前は、カスタム JavaScript ライブラリーを使う以外の最良の方法は、`<select>` 要素に {{cssxref("appearance")}} の値 `none` を設定して一部の OS レベルのスタイリングを除去し、CSS でスタイリング可能な部分をカスタマイズすることでした。この手法については [フォームへの高度なスタイル設定](/ja/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) で説明しています。

カスタマイズ可能な `<select>` 要素は、これらの問題に対する解決策を提供します。これにより、HTML と CSS だけで以下のような例を作成でき、対応ブラウザーでは完全にカスタマイズ可能です。これには `<select>` やドロップダウンピッカーのレイアウト、カラースキーム、アイコン、フォント、トランジション、位置指定、選択アイコンのマーカーなどが含まれます。

{{EmbedLiveSample("full-render", "100%", "410px")}}

さらに、既存の機能の上にプログレッシブエンハンスメントを提供し、非対応ブラウザーでは「クラシック」なセレクトにフォールバックします。

この例の作り方は、以下のセクションで説明します。

## カスタマイズ可能なセレクトを構成する機能

カスタマイズ可能な `<select>` 要素は、以下の HTML および CSS 機能を使って構築できます。

- 従来の {{htmlelement("select")}}、{{htmlelement("option")}}、{{htmlelement("optgroup")}} 要素。これらは「クラシック」なセレクトと同様に動作しますが、追加の許可されたコンテンツタイプがあります。
- `<select>` 要素内の最初の子として含まれる {{htmlelement("button")}} 要素。これは従来の「クラシック」なセレクトでは許可されていませんでした。これを含めると、閉じている `<select>` 要素のデフォルトの「ボタン」のレンダリングが置き換えられます。これは一般的に **セレクトボタン** と呼ばれます（ドロップダウンピッカーを開くために押すボタンです）。
  > [!NOTE]
  > セレクトボタンはデフォルトで [inert](/ja/docs/Web/HTML/Reference/Global_attributes/inert) です。例えば、リンクやボタンなどのインタラクティブな子要素が含まれていても、1つのボタンとして扱われ、子要素はフォーカスやクリックができません。
- {{htmlelement("selectedcontent")}} 要素は、`<select>` 要素の最初の子 `<button>` 要素内にオプションで含めることができ、_閉じている_ `<select>` 要素内に現在選択されている値を表示します。
  これは、現在選択されている `<option>` 要素の内容を（内部的に {{domxref("Node.cloneNode", "cloneNode()")}} を使って）複製したものを含みます。
- {{cssxref("::picker()", "::picker(select)")}} 疑似要素は、ピッカー全体の内容をターゲットにします。これには、最初の子 `<button>` 以外の `<select>` 要素内のすべての要素が含まれます。
- {{cssxref("appearance")}} プロパティ値 `base-select` は、`<select>` 要素と `::picker(select)` 疑似要素を、カスタマイズ可能なセレクトのブラウザー定義のデフォルトスタイルと動作に切り替えます。
- {{cssxref(":open")}} 疑似クラスは、ピッカー（`::picker(select)`）が開いているときのセレクトボタンをターゲットにします。
- {{cssxref("::picker-icon")}} 疑似要素は、セレクトボタン内のアイコン（閉じているときの下向き矢印）をターゲットにします。
- {{cssxref(":checked")}} 疑似クラスは、現在選択されている `<option>` 要素をターゲットにします。
- {{cssxref("::checkmark")}} 疑似要素は、現在選択されている `<option>` 要素内に配置されるチェックマークをターゲットにし、どれが選択されているかを視覚的に示します。

さらに、`<select>` 要素とそのドロップダウンピッカーには、以下の動作が自動的に割り当てられます。

- [ポップオーバー API](/ja/docs/Web/API/Popover_API) で指定されているように、invoker/popover の関係を持ちます。これにより、{{cssxref(":popover-open")}} 疑似クラスを使ってピッカーが開いているときに選択できます。ポップオーバーの動作の詳細は [ポップオーバー API の使用](/ja/docs/Web/API/Popover_API/Using) を参照してください。
- 暗黙的なアンカー参照を持ち、[CSS アンカー位置指定](/ja/docs/Web/CSS/CSS_anchor_positioning) を介してピッカーが自動的に `<select>` 要素に関連付けられます。ブラウザーのデフォルトスタイルは、ピッカーをボタン（アンカー）に対して位置指定し、[CSS アンカー位置指定の使用](/ja/docs/Web/CSS/CSS_anchor_positioning/Using#positioning_elements_relative_to_their_anchor) で説明されているように、この位置をカスタマイズできます。また、ビューポートからはみ出しそうな場合にピッカーを再配置するポジション・トライ・フォールバックも定義されています。詳細は [オーバーフローの処理: トライ・フォールバックと条件付き非表示](/ja/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) を参照してください。

> [!NOTE]
> カスタマイズ可能な `<select>` のブラウザー対応状況は、{{htmlelement("selectedcontent")}}、{{cssxref("::picker()", "::picker(select)")}}、{{cssxref("::checkmark")}} など関連機能のリファレンスページの互換性表で確認できます。

上記の機能を実際にどのように使うか、ページ冒頭の例を通して見ていきましょう。

## カスタマイズ可能なセレクトのマークアップ

例として、ペットを選択できる一般的な {{htmlelement("select")}} メニューを用意します。マークアップは次の通りです。

```html live-sample___plain-render live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
<form>
  <p>
    <label for="pet-select">Select pet:</label>
    <select id="pet-select">
      <button>
        <selectedcontent></selectedcontent>
      </button>

      <option value="">Please select a pet</option>
      <option value="cat">
        <span class="icon" aria-hidden="true">🐱</span
        ><span class="option-label">Cat</span>
      </option>
      <option value="dog">
        <span class="icon" aria-hidden="true">🐶</span
        ><span class="option-label">Dog</span>
      </option>
      <option value="hamster">
        <span class="icon" aria-hidden="true">🐹</span
        ><span class="option-label">Hamster</span>
      </option>
      <option value="chicken">
        <span class="icon" aria-hidden="true">🐔</span
        ><span class="option-label">Chicken</span>
      </option>
      <option value="fish">
        <span class="icon" aria-hidden="true">🐟</span
        ><span class="option-label">Fish</span>
      </option>
      <option value="snake">
        <span class="icon" aria-hidden="true">🐍</span
        ><span class="option-label">Snake</span>
      </option>
    </select>
  </p>
</form>
```

> [!NOTE]
> アイコンには [`aria-hidden="true"`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) 属性が付与されています。これにより、支援技術からアイコンが隠され、"cat cat"のようにオプション値が二重に読み上げられるのを防ぎます。

この例のマークアップは「クラシック」な `<select>` のマークアップとほぼ同じですが、以下の違いがあります。

- `<button><selectedcontent></selectedcontent></button>` 構造がセレクトの {{htmlelement("button")}} を表します。
  {{htmlelement("selectedcontent")}} 要素を追加することで、ブラウザーは現在選択されている {{htmlelement("option")}} の内容をボタン内に複製し、[カスタムスタイルを適用](#セレクトボタン内の選択されているオプション内容のスタイリング調整) できます。この構造をマークアップに含めない場合、ブラウザーはデフォルトボタン内に選択されているオプションのテキストを表示し、スタイリングが難しくなります。
  > **メモ:** `<button>` 内に任意のコンテンツを含めて、閉じている `<select>` 内に好きなものを表示できますが、アクセシブル名に影響するため注意が必要です。
- `<select>` の残りの内容はドロップダウンピッカーを表し、通常はピッカー内の異なる選択肢を表す `<option>` 要素のみです。他のコンテンツも含められますが、推奨されません。
- 従来、`<option>` 要素にはテキストしか含められませんでしたが、カスタマイズ可能なセレクトでは画像や他の対話可能でないテキストレベルのセマンティック要素など、他のマークアップ構造も含められます。{{cssxref("::before")}} や {{cssxref("::after")}} 疑似要素も使えますが、これらは送信値には含まれません。例では、各 `<option>` にアイコンとテキストラベルを含む 2 つの {{htmlelement("span")}} 要素があり、それぞれ独立してスタイリングや配置ができます。

  > **メモ:** `<option>` の内容はテキストノードだけでなく多階層の DOM サブツリーも含められるため、[現在の `<select>` の値](/ja/docs/Web/API/HTMLSelectElement/value) を JavaScript で取得する際のルールがあります。選択された `<option>` の {{domxref("Node.textContent", "textContent")}} プロパティ値を取得し、{{jsxref("String.prototype.trim", "trim()")}} を実行した結果が `<select>` の値になります。

この設計により、非対応ブラウザーではクラシックな `<select>` にフォールバックします。`<button><selectedcontent></selectedcontent></button>` 構造は完全に無視され、非テキストの `<option>` 内容はテキストノードだけに変換されますが、機能は維持されます。

## カスタムセレクトレンダリングへのオプトイン

カスタムセレクト機能と最小限のブラウザーベーススタイル（および OS 提供のスタイリングの除去）を有効にするには、`<select>` 要素とそのドロップダウンピッカー（`::picker(select)` 疑似要素）両方に {{cssxref("appearance")}} の値 `base-select` を設定します。

```css live-sample___plain-render live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select,
::picker(select) {
  appearance: base-select;
}
```

```css hidden live-sample___plain-render live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
}

body {
  width: 100%;
  padding: 0 10px;
  max-width: 480px;
  margin: 0 auto;
}

h2 {
  font-size: 1.2rem;
}

p {
  display: flex;
  gap: 10px;
}

label {
  width: fit-content;
  align-self: center;
}

select {
  flex: 1;
}
```

`<select>` 要素だけを新機能にオプトインし、ピッカーはデフォルトの OS スタイルのままにすることもできますが、通常は両方をオプトインするのが望ましいです。ピッカーだけをオプトインすることはできません。

これで、非常にシンプルな `<select>` のレンダリングになります。

{{EmbedLiveSample("plain-render", "100%", "240px")}}

ここから自由にスタイリングできます。まず、`<select>` 要素にカスタムの {{cssxref("border")}}、{{cssxref("background")}}（これらは {{cssxref(":hover")}} や {{cssxref(":focus")}} で変化します）、{{cssxref("padding")}} 及び、背景の変化が滑らかにアニメーションするように {{cssxref("transition")}} を設定します。

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select {
  border: 2px solid #ddd;
  background: #eee;
  padding: 10px;
  transition: 0.4s;
}

select:hover,
select:focus {
  background: #ddd;
}
```

## ピッカーアイコンのスタイリング

セレクトボタン内のアイコン（閉じているときの下向き矢印）をスタイリングするには、{{cssxref("::picker-icon")}} 疑似要素をターゲットにします。以下のコードは、アイコンにカスタムの {{cssxref("color")}} と `transition` を与え、{{cssxref("rotate")}} プロパティの変化を滑らかにアニメーションします。

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select::picker-icon {
  color: #999;
  transition: 0.4s rotate;
}
```

次に、`::picker-icon` と {{cssxref(":open")}} 疑似クラスを組み合わせて、ドロップダウンピッカーが開いているときにアイコンの `rotate` を `180deg` にします。

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select:open::picker-icon {
  rotate: 180deg;
}
```

ここまでの動作を見てみましょう。ピッカーの矢印が `<select>` の開閉時に滑らかに 180 度回転します。

{{EmbedLiveSample("second-render", "100%", "250px")}}

## ドロップダウンピッカーのスタイリング

ドロップダウンピッカーは {{cssxref("::picker()", "::picker(select)")}} 疑似要素でターゲットにできます。前述のように、ピッカーには `<button>` と `<selectedcontent>` 以外の `<select>` 要素内のすべてが含まれます。例では、すべての `<option>` 要素とその中身です。

まず、ピッカーのデフォルトの黒い {{cssxref("border")}} を削除します。

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
::picker(select) {
  border: none;
}
```

次に、`<option>` 要素をスタイリングします。[フレックスボックス](/ja/docs/Web/CSS/CSS_flexible_box_layout) でレイアウトし、すべてをフレックスコンテナーの先頭に揃え、各要素の間に `20px` の {{cssxref("gap")}} を設けます。各 `<option>` には `<select>` と同じ {{cssxref("border")}}、{{cssxref("background")}}、{{cssxref("padding")}}、{{cssxref("transition")}} を設定し、統一感を持たせます。

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option {
  display: flex;
  justify-content: flex-start;
  gap: 20px;

  border: 2px solid #ddd;
  background: #eee;
  padding: 10px;
  transition: 0.4s;
}
```

> [!NOTE]
> カスタマイズ可能な `<select>` の `<option>` にはデフォルトで `display: flex` が設定されていますが、ここでは何が起きているか明確にするためスタイルシートにも記載しています。

次に、{{cssxref(":first-of-type")}}、{{cssxref(":last-of-type")}}、{{cssxref(":not()")}} 疑似クラスを組み合わせて、ピッカーの上端・下端の角に適切な {{cssxref("border-radius")}} を設定し、最後以外のすべての `<option>` から {{cssxref("border-bottom")}} を削除して、境界線が二重にならないようにします。

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option:first-of-type {
  border-radius: 8px 8px 0 0;
}

option:last-of-type {
  border-radius: 0 0 8px 8px;
}

option:not(option:last-of-type) {
  border-bottom: none;
}
```

次に、奇数番目の `<option>` 要素に {{cssxref(":nth-of-type()", ":nth-of-type(odd)")}} を使って縞模様の `background` を設定し、フォーカス時やホバー時には異なる `background` で選択時の視覚的なハイライトを提供します。

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option:nth-of-type(odd) {
  background: #fff;
}

option:hover,
option:focus {
  background: plum;
}
```

最後に、`<option>` 内のアイコン（`icon` クラス付きの `<span>`）の {{cssxref("font-size")}} を大きくし、{{cssxref("text-box")}} プロパティでアイコン絵文字の上下の余白を削除し、テキストラベルとより良く揃うようにします。

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option .icon {
  font-size: 1.6rem;
  text-box: trim-both cap alphabetic;
}
```

例は次のようにレンダリングされます。

{{EmbedLiveSample("third-render", "100%", "370px")}}

## セレクトボタン内の選択されているオプション内容のスタイリング調整

前のセクションのいくつかの例でペットを選択すると、ペットアイコンによってセレクトボタンの高さが増し、ピッカーアイコンの位置も変わり、アイコンとラベルの間にスペースがない問題が発生します。

これは、`<selectedcontent>` 内に含まれるアイコンを非表示にすることで修正できます。例では、{{cssxref("display", "display: none")}} で非表示にしています。

```css live-sample___fourth-render live-sample___full-render
selectedcontent .icon {
  display: none;
}
```

これはドロップダウンピッカー内の `<option>` の中身のスタイリングには影響しません。

## 現在選択されているオプションのスタイリング

ドロップダウンピッカー内で現在選択されている `<option>` をスタイリングするには、{{cssxref(":checked")}} 疑似クラスを使います。例では、選択された `<option>` の {{cssxref("font-weight")}} を `bold` にしています。

```css live-sample___fourth-render live-sample___full-render
option:checked {
  font-weight: bold;
}
```

## 現在選択されているチェックマークのスタイリング

ピッカーを開いて選択すると、現在選択されている `<option>` の行頭にチェックマークが表示されます。このチェックマークは {{cssxref("::checkmark")}} 疑似要素でターゲットにできます。例えば、このチェックマークを（`display: none` などを用いて）非表示にしたいことがあるでしょう　。

また、より面白いこともできます。前述のように `<option>` 要素はフレックスボックスで横並びにされており、フレックスアイテムは行頭に揃っています。以下のルールでは、チェックマークの {{cssxref("order")}} を `0` より大きい値に設定し、`auto` の {{cssxref("margin-left")}} で行末に移動します（[alignment と auto のマージン](/ja/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox#alignment_および_auto_のマージン) 参照）。

最後に、{{cssxref("content")}} プロパティの値を別の絵文字に設定し、表示するアイコンを変更します。

```css live-sample___fourth-render live-sample___full-render
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

> **メモ:** `::checkmark` と `::picker-icon` 疑似要素はアクセシビリティツリーに含まれないため、生成された {{cssxref("content")}} は支援技術で読み上げられません。新しいアイコンを設定する場合は、視覚的な意味が通じるようにしてください。

ここまでの状態を確認しましょう。以下は最後の 3 セクションを反映した状態です。

{{EmbedLiveSample("fourth-render", "100%", "410px")}}

## ポップオーバー状態を使ったピッカーのアニメーション

カスタマイズ可能な `<select>` のセレクト `button` とドロップダウンピッカーは、自動的に [ポップオーバー API の使用](/ja/docs/Web/API/Popover_API/Using) で説明されているような invoker/popover の関係を持ちます。これにより多くの利点があります。例では、ポップオーバーの非表示・表示状態間のアニメーションにトランジションを利用しています。{{cssxref(":popover-open")}} 疑似クラスは表示状態のポップオーバーを表します。

このテクニックはここでは簡単に説明します。詳細は [ポップオーバーのアニメーション](/ja/docs/Web/API/Popover_API/Using#ポップオーバーのアニメーション) を参照してください。

まず、ピッカーを `::picker(select)` で選択し、{{cssxref("opacity")}} を `0`、`transition` を `all 0.4s allow-discrete` に設定します。これにより、ポップオーバーの状態が変化したときにすべてのプロパティがアニメーションします。

```css live-sample___full-render
::picker(select) {
  opacity: 0;
  transition: all 0.4s allow-discrete;
}
```

トランジション対象のプロパティには `opacity` の他、ブラウザーデフォルトスタイルで設定される 2 つの離散プロパティが含まれます。

- {{cssxref("display")}}
  - : ポップオーバーが非表示から表示に変わるとき、`display` の値が `none` から `block` に変わります。これもアニメーションする必要があります。
- {{cssxref("overlay")}}
  - : ポップオーバーが非表示から表示に変わるとき、`overlay` の値が `none` から `auto` に変わり、トップレイヤーに昇格し、非表示になったときに再び戻って削除されます。これはトランジションが完了するまでトップレイヤーからのポップオーバーの削除が延期され、トランジションが確実に見えるように、アニメーションする必要があります。

> **メモ:** [`allow-discrete`](/ja/docs/Web/CSS/transition-behavior#allow-discrete) 値は離散プロパティのアニメーションを有効にするために必要です。

次に、`::picker(select):popover-open` で表示状態のピッカーを選択し、`opacity` を `1` にします。これがトランジションの終了状態です。

```css live-sample___full-render
::picker(select):popover-open {
  opacity: 1;
}
```

最後に、ピッカーが `display: none` から 可視の `display` の値に変化している間にトランジションしているため、トランジションの開始状態を {{cssxref("@starting-style")}} ブロック内で指定します。

```css live-sample___full-render
@starting-style {
  ::picker(select):popover-open {
    opacity: 0;
  }
}
```

これらのルールにより、`<select>` の開閉時にピッカーが滑らかにフェードイン・フェードアウトします。

## アンカー位置指定によるピッカーの位置決め

カスタマイズ可能な `<select>` のセレクトボタンとドロップダウンピッカーは暗黙的なアンカー参照を持ち、ピッカーは [CSS アンカー位置指定](/ja/docs/Web/CSS/CSS_anchor_positioning) を介してセレクトボタンに自動的に関連付けられます。これにより、{{cssxref("anchor-name")}} や {{cssxref("position-anchor")}} プロパティによる明示的な関連付けを指定する必要はありません。

また、[ブラウザーのデフォルトスタイルでデフォルト位置](/ja/docs/Web/CSS/::picker#picker_anchor_positioning) が提供されており、[要素をアンカーから相対的に配置](/ja/docs/Web/CSS/CSS_anchor_positioning/Using#要素をアンカーから相対的に配置) で説明されているようにカスタマイズできます。

デモでは、ピッカーの位置をアンカーに対して {{cssxref("anchor()")}} 関数を使い、{{cssxref("top")}} と {{cssxref("left")}} プロパティで指定しています。

```css live-sample___full-render
::picker(select) {
  top: calc(anchor(bottom) + 1px);
  left: anchor(10%);
}
```

これにより、ピッカーの上端がセレクトボタンの下端から 1 ピクセル下に、左端がセレクトボタンの左端から幅の 10% の位置に配置されます。

## 最終結果

最後の 2 セクションを反映した `<select>` の最終状態は次のようにレンダリングされます。

{{EmbedLiveSample("full-render", "100%", "410px")}}

## その他のクラシックセレクト機能のカスタマイズ

ここまででカスタマイズ可能なセレクトの新機能と、クラシックな単一行セレクトや、ポップオーバー、アンカー位置指定などの最新の関連機能との連携を説明しました。ここまでのセクションで触れていない `<select>` の他の機能についても説明します。

- [`<select multiple>`](/ja/docs/Web/HTML/Reference/Attributes/multiple)
  - : 現時点では、カスタマイズ可能な `<select>` で `multiple` 属性のサポートは仕様化されていませんが、今後対応予定です。
- {{htmlelement("optgroup")}}
  - : `<optgroup>` 要素のデフォルトスタイルはクラシックな `<select>` と同じで、太字かつ内包オプションよりインデントが浅いです。全体のデザインに合うように `<optgroup>` もスタイリングする必要があります。また、それらは従来のHTMLでコンテナーが期待されているのと同じように動作することを覚えておいてください。カスタマイズ可能な `<select>` では、{{htmlelement("legend")}} 要素を `<optgroup>` の子として許可されており、ターゲットやスタイリングが容易なラベルを提供できます。これは `<optgroup>` の `label` 属性で設定したテキストを置き換え、同じセマンティクスを持ちます。

## 次の記事

このモジュールの次の記事では、フォームのさまざまな状態をスタイリングするために現代のブラウザーで利用できる [UI 疑似クラス](/ja/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) を探ります。

## 参考文献

- {{htmlelement("select")}}、{{htmlelement("option")}}、{{htmlelement("optgroup")}}、{{htmlelement("label")}}、{{htmlelement("button")}}、{{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker()", "::picker(select)")}}、{{cssxref("::picker-icon")}}、{{cssxref("::checkmark")}}
- {{cssxref(":open")}}、{{cssxref(":checked")}}

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms")}}
