---
title: カスタマイズ可能な select 要素
short-title: カスタマイズ可能な select
slug: Learn_web_development/Extensions/Forms/Customizable_select
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/Customizable_select_listboxes", "Learn_web_development/Extensions/Forms")}}

この記事では、ブラウザーの実験的な機能を使用して、完全にカスタマイズした {{htmlelement("select")}} 要素を作成する方法を説明します。これには、選択ボタン、ドロップダウンピッカー、矢印アイコン、現在選択されているオプションのチェックマーク、各 {{htmlelement("option")}} 要素のスタイル設定を完全に制御します。

> [!WARNING]
> この記事で紹介する CSS と HTML の機能は、現在ブラウザーの対応が制限されています。詳細は各機能のリファレンスページにあるブラウザーの互換性表をご確認ください。 JavaScript フレームワークによってはこれらの機能をブロックするものがあります。また、サーバーサイドレンダリング (SSR) を有効にしている場合、サーバーとクライアントの不整合を起こすフレームワークもあります。

## 背景

従来、`<select>` 要素の外観や操作感をカスタマイズするのは困難でした。なぜなら、これらは OS レベルでスタイル設定されている内部要素を含み、CSS でターゲットにできないためです。これにはドロップダウンピッカーや矢印アイコンなどが含まれます。

以前は、カスタム JavaScript ライブラリーを使う以外の最良の方法は、`<select>` 要素に {{cssxref("appearance")}} の値 `none` を設定して一部の OS レベルのスタイル設定を除去し、CSS でスタイル設定可能な部分をカスタマイズすることでした。この手法については[フォームへの高度なスタイル設定](/ja/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)で説明しています。

カスタマイズ可能な `<select>` 要素は、これらの問題に対する解決策を提供します。これにより、HTML と CSS だけで以下のような例を作成でき、[対応ブラウザー](#ブラウザーの互換性)では完全にカスタマイズ可能です。これには `<select>` やドロップダウンピッカーのレイアウト、カラースキーム、アイコン、フォント、トランジション、位置指定、選択アイコンのマーカーなどが含まれます。

{{EmbedLiveSample("full-render", "100%", "410px")}}

さらに、既存の機能の上にプログレッシブエンハンスメントを提供し、非対応ブラウザーでは「クラシック」な選択要素にフォールバックします。

この例の作り方は、以下の節で説明します。

> [!NOTE]
> この記事では、カスタマイズ可能な選択ボックスの背景を網羅し、その機能を活用した「単一ドロップダウン」選択ボックスの作成方法について示します。つまり、一度に 1 つの選択肢のみを表示させ、1 つの選択肢のみを選択することができるドロップダウンメニューのことです。
>
> 「リストボックス」の選択ボックス（複数の選択肢を一度に表示させ、単一の選択肢または複数の選択肢を選択することができるメニュー）の作成方法については、[カスタマイズ可能な選択リストボックス](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select_listboxes)を参照してください。

## カスタマイズ可能な select 要素を構成する機能

カスタマイズ可能な `<select>` 要素は、以下の HTML および CSS 機能を使って構築できます。

- 従来の {{htmlelement("select")}}、{{htmlelement("option")}}、{{htmlelement("optgroup")}} 要素。これらは「クラシック」な選択要素と同様に動作しますが、追加のコンテンツタイプが許可されています。
- `<select>` 要素内の最初の子として含まれる {{htmlelement("button")}} 要素。これは従来の「クラシック」な選択要素では許可されていませんでした。これを含めると、閉じている `<select>` 要素のデフォルトの「ボタン」のレンダリングが置き換えられます。これは一般的に **選択ボタン** と呼ばれます（ドロップダウンピッカーを開くために押すボタンです）。
  > [!NOTE]
  > 選択ボタンはデフォルトで [inert](/ja/docs/Web/HTML/Reference/Global_attributes/inert) です。例えば、リンクやボタンなどのインタラクティブな子要素が含まれていても、 1 つのボタンとして扱われ、子要素はフォーカスやクリックができません。
- {{htmlelement("selectedcontent")}} 要素は、`<select>` 要素の最初の子 `<button>` 要素内にオプションで含めることができ、閉じている `<select>` 要素内に現在選択されている値を表示します。
  これは、現在選択されている `<option>` 要素の内容を（内部的に {{domxref("Node.cloneNode", "cloneNode()")}} を使って）複製したものを含みます。
- {{cssxref("::picker()", "::picker(select)")}} 擬似要素は、ピッカー全体の内容をターゲットにします。これには、最初の子 `<button>` 以外の `<select>` 要素内のすべての要素が含まれます。
- {{cssxref("appearance")}} プロパティ値 `base-select` は、`<select>` 要素と `::picker(select)` 擬似要素を、カスタマイズ可能な select 要素のブラウザー定義のデフォルトスタイルと動作に切り替えます。
- {{cssxref(":open")}} 擬似クラスは、ピッカー（`::picker(select)`）が開いているときの選択ボタンをターゲットにします。
- {{cssxref("::picker-icon")}} 擬似要素は、選択ボタン内のアイコン（閉じているときの下向き矢印）をターゲットにします。
- {{cssxref(":checked")}} 擬似クラスは、現在選択されている `<option>` 要素をターゲットにします。
- {{cssxref("::checkmark")}} 擬似要素は、現在選択されている `<option>` 要素内に配置されるチェックマークをターゲットにし、どれが選択されているかを視覚的に示します。

さらに、`<select>` 要素とそのドロップダウンピッカーには暗黙のアンカー参照があります。これは、[CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)を通じて、ピッカーが自動的に `<select>` 要素に関連付けられることを意味します。ブラウザーのデフォルトスタイルは、ピッカーをボタン（アンカー）に対して位置指定し、[CSS アンカー位置指定の使用](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#要素をアンカーに対して相対的に配置)で説明されているように、この位置をカスタマイズできます。また、ビューポートからはみ出しそうな場合にピッカーを再配置する位置指定の代替オプションも定義されています。詳細は [オーバーフローの処理: 代替オプションと条件付き非表示](/ja/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) を参照してください。

> [!NOTE]
> カスタマイズ可能な `<select>` のブラウザー対応状況は、{{htmlelement("selectedcontent")}}、{{cssxref("::picker()", "::picker(select)")}}、{{cssxref("::checkmark")}} など関連機能のリファレンスページの互換性表で確認できます。

上記の機能を実際にどのように使うか、ページ冒頭の例を通して見ていきましょう。

## カスタマイズ可能な select 要素のマークアップ

例として、ペットを選択できる一般的な {{htmlelement("select")}} メニューを用意します。マークアップは次の通りです。

```html live-sample___plain-render live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
<form>
  <p>
    <label for="pet-select">ペットを選択:</label>
    <select id="pet-select">
      <button>
        <selectedcontent></selectedcontent>
      </button>

      <option value="">ペットを選択してください</option>
      <option value="cat">
        <span class="icon" aria-hidden="true">🐱</span
        ><span class="option-label">猫</span>
      </option>
      <option value="dog">
        <span class="icon" aria-hidden="true">🐶</span
        ><span class="option-label">犬</span>
      </option>
      <option value="hamster">
        <span class="icon" aria-hidden="true">🐹</span
        ><span class="option-label">ハムスター</span>
      </option>
      <option value="chicken">
        <span class="icon" aria-hidden="true">🐔</span
        ><span class="option-label">鶏</span>
      </option>
      <option value="fish">
        <span class="icon" aria-hidden="true">🐟</span
        ><span class="option-label">魚</span>
      </option>
      <option value="snake">
        <span class="icon" aria-hidden="true">🐍</span
        ><span class="option-label">蛇</span>
      </option>
    </select>
  </p>
</form>
```

> [!NOTE]
> アイコンには [`aria-hidden="true"`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) 属性が付与されています。これにより、支援技術からアイコンが隠され、"猫 猫"のようにオプション値が二重に読み上げられるのを防ぎます。

この例のマークアップは「クラシック」な `<select>` のマークアップとほぼ同じですが、以下の違いがあります。

- `<button><selectedcontent></selectedcontent></button>` 構造が選択要素の {{htmlelement("button")}} を表します。
  {{htmlelement("selectedcontent")}} 要素を追加することで、ブラウザーは現在選択されている {{htmlelement("option")}} の内容をボタン内に複製し、[カスタムスタイルを適用](#選択ボタン内の選択されているオプション内容のスタイル設定調整) できます。この構造をマークアップに含めない場合、ブラウザーはデフォルトボタン内に選択されているオプションのテキストを表示し、スタイル設定が難しくなります。
  > [!NOTE]
  > `<button>` 内に任意のコンテンツを含めて、閉じている `<select>` 内に好きなものを表示できますが、これを行う際には注意が必要です。含める内容によって、 `<select>` 要素に対して支援技術に公開されるアクセシブルな値が変更される可能性があります。
- `<select>` の残りの内容はドロップダウンピッカーを表し、通常はピッカー内の異なる選択肢を表す `<option>` 要素のみです。他のコンテンツも含められますが、推奨されません。
- 従来、`<option>` 要素にはテキストしか含められませんでしたが、カスタマイズ可能な select 要素では画像や他の対話可能でないテキストレベルのセマンティック要素など、他のマークアップ構造も含められます。{{cssxref("::before")}} や {{cssxref("::after")}} 擬似要素も使えますが、これらは送信値には含まれません。例では、各 `<option>` にアイコンとテキストラベルを含む 2 つの {{htmlelement("span")}} 要素があり、それぞれ独立してスタイル設定や配置ができます。

  > [!NOTE]
  > `<option>` の内容はテキストノードだけでなく多階層の DOM サブツリーも含められるため、[現在の `<select>` の値](/ja/docs/Web/API/HTMLSelectElement/value) を JavaScript で取得する際のルールがあります。選択された `<option>` の {{domxref("Node.textContent", "textContent")}} プロパティ値を取得し、{{jsxref("String.prototype.trim", "trim()")}} を実行した結果が `<select>` の値になります。

この設計により、非対応ブラウザーではクラシックな `<select>` にフォールバックします。`<button><selectedcontent></selectedcontent></button>` 構造は完全に無視され、非テキストの `<option>` 内容はテキストノードだけに変換されますが、機能は維持されます。

## カスタム選択レンダリングへのオプトイン

カスタム選択の機能と最小限のブラウザーベーススタイル（および OS 提供のスタイル設定の除去）を有効にするには、`<select>` 要素とそのドロップダウンピッカー（`::picker(select)` 擬似要素）両方に {{cssxref("appearance")}} の値 `base-select` を設定します。

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
  font-family: "Helvetica", "Arial", sans-serif;
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

ここから自由にスタイル設定できます。まず、`<select>` 要素にカスタムの {{cssxref("border")}}、{{cssxref("background")}}（これらは {{cssxref(":hover")}} や {{cssxref(":focus")}} で変化します）、{{cssxref("padding")}} 及び、背景の変化が滑らかにアニメーションするように {{cssxref("transition")}} を設定します。

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select {
  border: 2px solid #dddddd;
  background: #eeeeee;
  padding: 10px;
  transition: 0.4s;
}

select:hover,
select:focus {
  background: #dddddd;
}
```

## ピッカーアイコンのスタイル設定

選択ボタン内のアイコン（閉じているときの下向き矢印）をスタイル設定するには、{{cssxref("::picker-icon")}} 擬似要素をターゲットにします。以下のコードは、アイコンにカスタムの {{cssxref("color")}} と `transition` を与え、{{cssxref("rotate")}} プロパティの変化を滑らかにアニメーションします。

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select::picker-icon {
  color: #999999;
  transition: 0.4s rotate;
}
```

次に、`::picker-icon` と {{cssxref(":open")}} 擬似クラスを組み合わせて、ドロップダウンピッカーが開いているときにアイコンの `rotate` を `180deg` にします。

```css live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render
select:open::picker-icon {
  rotate: 180deg;
}
```

ここまでの動作を見てみましょう。ピッカーの矢印が `<select>` の開閉時に滑らかに 180 度回転します。

{{EmbedLiveSample("second-render", "100%", "250px")}}

## ドロップダウンピッカーのスタイル設定

ドロップダウンピッカーは {{cssxref("::picker()", "::picker(select)")}} 擬似要素でターゲットにできます。前述のように、ピッカーには `<button>` と `<selectedcontent>` 以外の `<select>` 要素内のすべてが含まれます。例では、すべての `<option>` 要素とその中身です。

まず、ピッカーのデフォルトの黒い {{cssxref("border")}} を削除します。

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
::picker(select) {
  border: none;
}
```

> [!NOTE]
> `::picker()` 擬似要素に渡される引数は、ピッカーを対象とする要素の型を表します。この例では、`<select>` 要素です。すべての `<select>` 要素ではなく、特定の 1 つの `<select>` 要素のピッカーを選択したい場合は、`::picker()` 擬似要素を別のセレクターと組み合わせることができます。例えば、この例の `<select>` の ID は `pet-select` であるため、`#pet-select::picker(select) { ... }` を使用することで、そのピッカーのみを指定して対象にすることができます。

次に、`<option>` 要素をスタイル設定します。[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)でレイアウトし、すべてをフレックスコンテナーの先頭に揃え、各要素の間に `20px` の {{cssxref("gap")}} を設けます。各 `<option>` には `<select>` と同じ {{cssxref("border")}}、{{cssxref("background")}}、{{cssxref("padding")}}、{{cssxref("transition")}} を設定し、統一感を持たせます。

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option {
  display: flex;
  justify-content: flex-start;
  gap: 20px;

  border: 2px solid #dddddd;
  background: #eeeeee;
  padding: 10px;
  transition: 0.4s;
}
```

> [!NOTE]
> カスタマイズ可能な `<select>` の `<option>` にはデフォルトで `display: flex` が設定されていますが、ここでは何が起きているか明確にするためスタイルシートにも記載しています。

次に、{{cssxref(":first-of-type")}}、{{cssxref(":last-of-type")}}、{{cssxref(":not()")}} 擬似クラスを組み合わせて、ピッカーの上端・下端の `<option>` 要素に適切な {{cssxref("border-radius")}} を設定し、最後以外のすべての `<option>` から {{cssxref("border-bottom")}} を削除して、境界線が二重にならないようにします。同時に、ページ上で別の背景色を設定することになった場合でも、オプションの周囲に見苦しい四角い白いボックスが表示されないように、外側の `::picker(select)` コンテナーにも同じ `border-radius` を設定しています。

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option:first-of-type {
  border-radius: 8px 8px 0 0;
}

option:last-of-type {
  border-radius: 0 0 8px 8px;
}

::picker(select) {
  border-radius: 8px;
}

option:not(option:last-of-type) {
  border-bottom: none;
}
```

次に、奇数番目の `<option>` 要素に {{cssxref(":nth-of-type()", ":nth-of-type(odd)")}} を使って縞模様の `background` を設定し、フォーカス時やホバー時には異なる `background` で選択時の視覚的なハイライトを提供します。

```css live-sample___third-render live-sample___fourth-render live-sample___full-render
option:nth-of-type(odd) {
  background: white;
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

## 選択ボタン内で選択されている選択肢のコンテンツのスタイル調整

前の節のいくつかの例でペットを選択すると、ペットアイコンによって選択ボタンの高さが増し、ピッカーアイコンの位置も変わり、アイコンとラベルの間に空間がない問題が発生します。

これは、`<selectedcontent>` 内に含まれるアイコンを非表示にすることで修正できます。この要素は、選択された `<option>` が選択ボタン内に表示されるときに、そのコンテンツを表すものです。 この例では、{{cssxref("display", "display: none")}} で非表示にしています。

```css live-sample___fourth-render live-sample___full-render
selectedcontent .icon {
  display: none;
}
```

これはドロップダウンピッカー内の `<option>` の中身のスタイル設定には影響しません。

## 現在選択されているオプションのスタイル設定

ドロップダウンピッカー内で現在選択されている `<option>` をスタイル設定するには、{{cssxref(":checked")}} 擬似クラスを使います。例では、選択された `<option>` の {{cssxref("font-weight")}} を `bold` にしています。

```css live-sample___fourth-render live-sample___full-render
option:checked {
  font-weight: bold;
}
```

## 現在選択されているチェックマークのスタイル設定

ピッカーを開いて選択すると、現在選択されている `<option>` の行頭にチェックマークが表示されます。このチェックマークは {{cssxref("::checkmark")}} 擬似要素でターゲットにできます。例えば、このチェックマークを（`display: none` などを用いて）非表示にしたいことがあるでしょう　。

また、より面白いこともできます。以前、`<option>`要素はフレックスボックスを使って水平方向に配置され、フレックスアイテムは行の先頭に揃えられていました。以下のルールでは、チェックマークの {{cssxref("order")}} を `0` より大きい値に設定し、`auto` の {{cssxref("margin-left")}} で行末に移動します（[alignment と auto のマージン](/ja/docs/Web/CSS/Guides/Box_alignment/In_flexbox#alignment_および_auto_のマージン) 参照）。

最後に、{{cssxref("content")}} プロパティの値を別の絵文字に設定し、表示するアイコンを変更します。

```css live-sample___fourth-render live-sample___full-render
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

> [!NOTE]
> `::checkmark` と `::picker-icon` 擬似要素はアクセシビリティツリーに含まれないため、生成された {{cssxref("content")}} は支援技術で読み上げられません。新しいアイコンを設定する場合は、視覚的な意味が通じるようにしてください。

ここまでの状態を確認しましょう。以下は最後の 3 節を反映した状態です。

{{EmbedLiveSample("fourth-render", "100%", "410px")}}

## ポップオーバー状態を使ったピッカーのアニメーション

カスタマイズ可能な `<select>` の選択 `button` とドロップダウンピッカーは、自動的に [ポップオーバー API の使用](/ja/docs/Web/API/Popover_API/Using) で説明されているような呼び出し元/ポップオーバーの関係を持ちます。これにより多くの利点があります。例では、ポップオーバーの非表示・表示状態間のアニメーションにトランジションを利用しています。{{cssxref(":open")}} 擬似クラスは、開いている状態の select 要素を表します。

このテクニックはここでは簡単に説明します。詳細は[ポップオーバーのアニメーション](/ja/docs/Web/API/Popover_API/Using#ポップオーバーのアニメーション)を参照してください。

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

> [!NOTE]
> [`allow-discrete`](/ja/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete) 値は離散プロパティのアニメーションを有効にするために必要です。

次に、`:open::picker(select)` で表示状態のピッカーを選択し、`opacity` を `1` にします。これがトランジションの終了状態です。

```css live-sample___full-render
:open::picker(select) {
  opacity: 1;
}
```

最後に、ピッカーが `display: none` から 可視の `display` の値に変化している間にトランジションしているため、トランジションの開始状態を {{cssxref("@starting-style")}} ブロック内で指定します。

```css live-sample___full-render
@starting-style {
  :open::picker(select) {
    opacity: 0;
  }
}
```

これらのルールにより、`<select>` の開閉時にピッカーが滑らかにフェードイン・フェードアウトします。

## アンカー位置指定によるピッカーの位置指定

カスタマイズ可能な `<select>` の選択ボタンとドロップダウンピッカーは暗黙的なアンカー参照を持ち、ピッカーは [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning) を介して選択ボタンに自動的に関連付けられます。これにより、{{cssxref("anchor-name")}} や {{cssxref("position-anchor")}} プロパティによる明示的な関連付けを指定する必要はありません。

また、[ブラウザーの既定のスタイルで既定の位置](/ja/docs/Web/CSS/Reference/Selectors/::picker#ピッカーのアンカー位置指定) が提供されており、[要素をアンカーから相対的に配置](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#要素をアンカーから相対的に配置) で説明されているようにカスタマイズできます。

デモでは、ピッカーの位置をアンカーに対して {{cssxref("anchor()")}} 関数を使い、{{cssxref("top")}} と {{cssxref("left")}} プロパティで指定しています。

```css live-sample___full-render
::picker(select) {
  top: calc(anchor(bottom) + 1px);
  left: anchor(10%);
}
```

これにより、ピッカーの上端が選択ボタンの下端から 1 ピクセル下に、左端が選択ボタンの左端から幅の `10%` の位置に配置されます。

> [!NOTE]
> ピッカーが `<select>` 要素にアンカー付けされるのを防ぐために、暗黙のアンカー参照を除去したい場合は、ピッカーの `position-anchor` プロパティを、`--not-an-anchor-name` など、現在の文書内には存在しないアンカー名に設定することで実現できます。[アンカーの関連付けの除去](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#アンカーの関連付けを解除)も参照してください。

## 最終結果

最後の 2 節を反映した `<select>` の最終状態は次のようにレンダリングされます。

{{EmbedLiveSample("full-render", "100%", "410px")}}

## optgroup 要素のスタイル設定

カスタマイズ可能な選択ボックス内の {{htmlelement("optgroup")}} 要素のデフォルトのスタイル設定は、従来の `<select>` 要素と同じです。つまり、太字で、内部のオプションよりもインデントが浅くなっています。ただし、カスタマイズ可能な選択では、オプショングループは他のブロックレベルコンテナーと同様に動作し、それに応じてスタイルを設定することができます。さらに、`<optgroup>` の子要素として {{htmlelement("legend")}} 要素を使用することができ、これにより、ターゲット設定やスタイル設定が容易なラベルを提供できます。これは、`<optgroup>` 要素の `label` 属性に設定されたテキストを置き換え、同じ意味づけを持ちます。

基本的な例を見ていきましょう。HTML は次のようになっています。

```html live-sample___optgroup-example
<label for="animal-select">動物を選択:</label><br />
<select id="animal-select">
  <optgroup>
    <legend>室内</legend>
    <option value="cat">猫</option>
    <option value="dog">犬</option>
    <option value="guinea">モルモット</option>
  </optgroup>
  <optgroup>
    <legend>農場</legend>
    <option value="chicken">ニワトリ</option>
    <option value="cow">牛</option>
    <option value="pig">豚</option>
  </optgroup>
</select>
```

CSS ではまず、`<optgroup>` 要素自体にスタイルを設定することから始めます。これらは主に、optgroup 要素が、その子要素である `<option>` 要素のコンテナーのように見えるようにするための基本的なスタイルです。それぞれの optgroup の間、および一番上の optgroup と選択ボタンの間に空間を設けるために、{{cssxref("margin-top")}} を指定しています。

```css hidden live-sample___optgroup-example
* {
  box-sizing: border-box;
}

html {
  font-family: "Arial", sans-serif;
}

select,
::picker(select) {
  appearance: base-select;
  width: 200px;
}

select {
  border: 2px solid #dddddd;
  background: #eeeeee;
  padding: 10px;
}

::picker(select) {
  border: none;
}
```

```css live-sample___optgroup-example
optgroup {
  border: 2px solid #dddddd;
  border-radius: 8px;
  background: #eeeeee;
  padding: 10px 0 0 0;
  margin-top: 5px;
}
```

次に、`<legend>` 要素のスタイルを設定し、テキストを中央配置し、オプションと別個にするためにマージンを記載します。

```css live-sample___optgroup-example
optgroup legend {
  text-align: center;
  margin-bottom: 10px;
}
```

最後に、`<option>` 要素のスタイル設定を行います。指定された {{cssxref("background")}} 色や {{cssxref("padding")}} を指定し、それぞれの場合の最後の `<option>` 要素の下部の {{cssxref("border-radius")}} を調整して、親要素である `<optgroup>` の角丸デザインに馴染むようにします。同時に、奇数番目の `<option>` 要素に異なる背景色を指定して縞模様効果を実装し、オプションのホバー状態とフォーカス状態を明確に区別できるようにします。

```css live-sample___optgroup-example
option {
  background: #eeeeee;
  padding: 10px;
}

option:last-of-type {
  border-radius: 0 0 8px 8px;
}

option:nth-of-type(odd) {
  background: white;
}

option:hover,
option:focus {
  background: plum;
}
```

簡潔にするため、それ以外のスタイル設定は省略しています。

この例はこのように表示されます。

{{EmbedLiveSample("optgroup-example", "100%", "410px")}}

```css hidden live-sample___plain-render live-sample___second-render live-sample___third-render live-sample___fourth-render live-sample___full-render live-sample___optgroup-example
@supports not (appearance: base-select) {
  body::before {
    content: "このブラウザーは `appearance: base-select` に対応していません。";
    color: black;
    background-color: wheat;
    position: fixed;
    left: 0;
    right: 0;
    top: 40%;
    text-align: center;
    padding: 1rem 0;
    z-index: 1;
  }
}
```

## ブラウザーの互換性

{{Compat}}

## 次の記事

このモジュールの次の記事では、[カスタマイズ可能な選択リストボックス](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select_listboxes)のスタイル設定方法について紹介します。

## 関連情報

- {{htmlelement("select")}}、{{htmlelement("option")}}、{{htmlelement("optgroup")}}、{{htmlelement("label")}}、{{htmlelement("button")}}、{{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker()", "::picker(select)")}}、{{cssxref("::picker-icon")}}、{{cssxref("::checkmark")}}
- {{cssxref(":open")}}、{{cssxref(":checked")}}

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/Customizable_select_listboxes", "Learn_web_development/Extensions/Forms")}}
