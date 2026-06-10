---
title: CSS `anchor-scope` プロパティ
short-title: anchor-scope
slug: Web/CSS/Reference/Properties/anchor-scope
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

**`anchor-scope`** は [CSS](/ja/docs/Web/CSS) のプロパティで、位置指定要素がアンカー要素に関連付けられる範囲を、特定のサブツリーに制限するために使用します。

## 構文

```css
/* 単一の値 */
anchor-scope: none;
anchor-scope: all;
anchor-scope: --anchor-name;

/* 複数の <dashed-ident> 値 */
anchor-scope: --anchor-name, --another-name;

/* グローバル値 */
anchor-scope: inherit;
anchor-scope: initial;
anchor-scope: revert;
anchor-scope: revert-layer;
anchor-scope: unset;
```

### 値

- `none`
  - : 要素に対してアンカースコープの制限は行われません。これがデフォルト値です。
- `all`
  - : このスコープを設定すると、サブツリー内で設定された任意の `anchor-name` 値は、同じサブツリー内の位置指定要素によってのみバインドされるようになります。
- {{cssxref("dashed-ident", "&lt;dashed-ident&gt;#")}}
  - : アンカー名を表す、カンマ区切りの 1 つ以上の {{cssxref("dashed-ident")}} です。このスコープを設定することで、サブツリー内に指定された `anchor-name` の値は、同じサブツリー内の位置指定要素からのみバインドされるようになります。

## 解説

ページ上で複数の[アンカー要素](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#アンカー要素と位置指定要素の関連付け)に同じ {{cssxref("anchor-name")}} 値が指定され、かつそのアンカー名に（その要素の {{cssxref("position-anchor")}} プロパティの値としてその名前を指定することで）関連付けられた位置指定要素が存在する場合、その位置指定要素は、ソース上の順序においてそのアンカー名を持つ最後のアンカー要素に関連付けられます。

状況によっては、これが問題となる場合があります。例えば、文書内にある複数の繰り返し要素のそれぞれに、アンカーに紐付けられた位置指定要素が含まれている場合、各要素が異なるアンカー名を使用していない限り、すべての位置指定要素がページ上の最後のアンカーに紐付けられてしまいます。これは、おそらく望ましい動作ではないでしょう。

`anchor-scope` プロパティを使用すると、`anchor-name` の値の可視範囲（「スコープ」）を特定のサブツリーに限定することで、この問題を解決できます。その結果、位置指定要素は、スコープが設定された要素と同じサブツリー内にある要素にのみアンカーを設定できるようになります。

- `anchor-scope: all` を設定すると、サブツリー内で設定されたすべての `anchor-name` 値は、同じサブツリー内の位置指定要素からのみバインドされるようになります。例えば、文書内に複数のアンカーを記載し、それらすべてに `anchor-name: --my-anchor` を設定し、それぞれを別々のコンテナーに配置するとします。次に、それぞれのコンテナーに対して `anchor-scope: all` を設定します。その後、いずれかのコンテナーの中に位置指定要素を記載し、その `position-anchor` プロパティの値として `--my-anchor` を指定すると、その要素は同じコンテナー内のアンカーを基準として配置されます。

  さらに、コンテナーの外側に別の位置指定要素を生成し、そこに同じアンカー名、あるいは別のアンカー名を指定した場合、その要素は、アンカーの `anchor-name` 値にそれらのアンカー名が含まれているかどうかに関わらず、どのアンカーに対しても相対的な位置指定にはなりません。`anchor-scope: all` を設定すると、そのコンテナーに対して、`anchor-name` に関わらず、すべてのアンカーのアンカースコープが、同じコンテナー内の位置指定要素のみに制限されます。

- `anchor-scope: <dashed-ident>#` を設定すると、サブツリー内で指定された `anchor-name` の値は、同じサブツリー内の位置指定要素からのみバインドされるようになります。前回の項目で説明した例に戻り、コンテナーに設定されている `anchor-scope` の値を `--my-anchor` に変更すると、
  - `position-anchor: --my-anchor` が設定された位置指定要素は、`anchor-scope` 設定によって定義された範囲内に制限されます。これらの要素は、コンテナーの中に配置されている場合にのみ、アンカーを基準として配置されます。
  - ただし、異なる `position-anchor` 名（例えば `--another-anchor`）を持つ位置指定要素は、コンテナーの中にいるか外にいるかにかかわらず、そのアンカーの `anchor-name` プロパティに `--another-anchor` というアンカー名を指定すれば、いずれかのアンカーを基準として位置指定することが_可能です。`anchor-scope`プロパティは`--my-anchor`というアンカー名の範囲のみを制限するため、その他のアンカー名には影響を及ぼしません。

    複数のアンカーに `--another-anchor` というアンカー名が指定された場合、その `position-anchor` 値を持つ位置指定要素は、ソース順でその名前を持つ最後のアンカーを基準として配置されます。

- `anchor-scope: none` はデフォルト値であり、アンカースコープが設定されていないことを指定します。文書内に同じ `anchor-name` を持つアンカーが複数存在し、位置指定要素の `position-anchor` プロパティの値としてこの名前が指定された場合、その要素は DOM 階層内の配置位置にかかわらず、ソース順で最後のアンカー要素を基準として位置決めされます。

例えば、サブツリー内に 3 つの `anchor-name` 値（たとえば `--anchor1`、`--anchor2`、`--anchor3`）が設定されている場合、そのサブツリーの最上位要素に `anchor-scope: --anchor1, --anchor2, --anchor3` を設定することは、`anchor-scope: all` を設定することと同じになります。

アンカースコープは、[明示的なアンカー関連付け](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#明示的な_css_アンカーの関連付け)、すなわち、`anchor-name` が設定されたアンカー要素と、`position-anchor` 値でそのアンカー要素のアンカー名を参照する位置指定要素との間で作成された関連付けにのみ影響します。アンカースコープは、[暗黙的なアンカー関連付け](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#暗黙的なアンカーの関連付け)には影響しません。

アンカー機能とその使い方に関する情報については、[CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュールおよび [CSS アンカー位置指定の使用方法](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)ガイドをご覧ください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使い方

この例では、アンカースコープの基本的な仕組みを説明しています。スコープが設定されたコンテナーの中に存在するアンカー要素が、同じスコープ内の位置指定要素のみをそのアンカーに紐づけるように制限できることを示しています。

#### HTML

アンカースコープを設定する {{htmlelement("section")}} 要素を指定します。これには 2 つの {{htmlelement("div")}} 要素が含まれており、1 つはアンカーに変換され、もう 1 つは位置指定要素となります。

また、`<section>` の外側に 3 つ目の `<div>` を設置し、これも位置指定要素に変換します。

```html live-sample___basic-usage
<section class="scoped">
  <div class="anchor">⚓︎</div>
  <div class="positioned">位置指定 1</div>
</section>

<div class="positioned">位置指定 2</div>
```

#### CSS

まず、`anchor-scope: --my-anchor` を `<section>` に設定します。これにより、スコープが制限され、`<section>` の子孫要素で名前が `--my-anchor` であるアンカー要素は、同時にこの `<section>` の子孫である位置指定要素からのみバインドされるようになります。

このことを確認するため、`<div>` に {{cssxref("anchor-name")}} の値として `--my-anchor` を設定し、これをアンカー要素として宣言します。次に、`.positioned` 位置指定要素を絶対配置指定にし、{{cssxref("position-anchor")}} の値を `--my-anchor` に設定してアンカーに固定し、さらに {{cssxref("position-area")}} の値を `right` に設定してアンカーの右側に配置します。

```css hidden live-sample___basic-usage
.scoped {
  padding: 20px;
  background: #eeeeee;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: blue;
  width: fit-content;
  padding: 3px;
}

.positioned {
  background: orange;
  width: fit-content;
  padding: 3px;
}
```

```css live-sample___basic-usage
.scoped {
  anchor-scope: --my-anchor;
}

.anchor {
  anchor-name: --my-anchor;
}

.positioned {
  position: absolute;
  position-anchor: --my-anchor;
  position-area: right;
}
```

#### 結果

この例は次のように表示されます。

{{ EmbedLiveSample("basic_usage", "100%", "225") }}

位置指定要素がアンカーの右側に配置されている点にご注目ください。この要素は、`anchor-scope: --my-anchor` が設定されている `<section>` 要素の内側にあるため、`--my-anchor` アンカーを基準とした位置指定の範囲内にあります。

しかし、2 つ目となる位置指定要素は、アンカーを基準として位置指定されていません。この要素は `<section>` 要素の子要素ではないため、アンカーのスコープ外にあるためです。

### 様々な `anchor-scope` 値の比較

この例では、同じ `anchor-name` 値を持つアンカーを含む複数のコンテナーに、それぞれ異なる `anchor-scope` 値を適用することができることで、`anchor-scope` の値が異なる場合にどのような効果があるかを示しています。

#### HTML

アンカースコープを設定する 3 つの {{htmlelement("section")}} 要素を定義します。それぞれの `<section>` には 2 つの {{htmlelement("div")}} 要素が含まれており、1 つはアンカーに変換され、もう 1 つは位置指定要素となります。

また、`<section>` 要素の外側に追加の `<div>` を含めており、これも位置指定要素に変換します。この要素には、他の要素とは異なるアンカー配置設定が適用されます。

最後に、3 つの異なる [`<input type="radio">`](/ja/docs/Web/HTML/Reference/Elements/input/radio) 要素を含む {{htmlelement("form")}} を設置し、`<section>` 要素に対して異なる `anchor-scope` 値を設定できるようにします。

```html live-sample___comparing-values
<section class="scoped">
  <div class="anchor">⚓︎</div>
  <div class="positioned">位置指定 1</div>
</section>

<section class="scoped">
  <div class="anchor">⚓︎</div>
  <div class="positioned">位置指定 2</div>
</section>

<section class="scoped">
  <div class="anchor">⚓︎</div>
  <div class="positioned">位置指定 3</div>
</section>

<div class="positioned2">位置指定 4</div>

<form>
  <fieldset>
    <legend><code>anchor-scope</code> 値を選択してください</legend>

    <input type="radio" id="all" name="scope" value="all" checked />
    <label for="all"><code>all</code></label>
    <input type="radio" id="my-anchor" name="scope" value="--my-anchor" />
    <label for="my-anchor"><code>--my-anchor</code></label>
    <input type="radio" id="none" name="scope" value="none" />
    <label for="none"><code>none</code></label>
  </fieldset>
</form>
```

#### CSS

まず、アンカー要素をアンカーとして指定するために、これらにそれぞれ 2 つの {{cssxref("anchor-name")}} 値、`--my-anchor` と `--another-anchor` という割り当てます。

```css hidden live-sample___comparing-values
body {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 5px;
}

.scoped {
  padding: 20px;
  background: #eeeeee;
  border: 2px solid #dddddd;
  border-radius: 10px;
  width: 100px;
  height: 100px;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: blue;
  width: fit-content;
  padding: 3px;
}

.positioned,
.positioned2 {
  border: 1px solid black;
  border-radius: 3px;
  width: fit-content;
  padding: 3px 6px;
  box-shadow: 3px 3px 3px rgb(0 0 0 / 0.2);
}

form {
  position: absolute;
  bottom: 5px;
  right: 5px;
}
```

```css live-sample___comparing-values
.anchor {
  anchor-name: --my-anchor, --another-anchor;
}
```

次に、`.positioned` 要素をアンカー要素を基準として配置します。これらを絶対配置にし、アンカーに関連付けるために {{cssxref("position-anchor")}} の値として `--my-anchor` を指定し、さらに {{cssxref("position-area")}} の値として `right` を指定して、アンカーを基準に配置します。

`.positioned2` 要素も同様の方法で配置されますが、`position-anchor` の値として利用できるもう一方のアンカー名である `--another-anchor` が指定され、アンカーの `bottom` に配置される点が異なります。同時に、アンカー位置指定が動作しない場合でも `<body>` の下部に配置されるよう、{{cssxref("bottom")}} 値を `5px` に指定しています。この要素はどのスコープ付き要素にも含まれていないため、後述するように、スコープ付き要素に特定の `anchor-scope` 値が設定されている場合にのみ、アンカー位置指定が行われます。

```css live-sample___comparing-values
.positioned {
  position: absolute;
  position-anchor: --my-anchor;
  position-area: right;
}

.positioned2 {
  position: absolute;
  bottom: 5px;
  position-anchor: --another-anchor;
  position-area: bottom;
}
```

異なるラジオボタンが押された際に、`<section>` 要素への `anchor-scope` の設定を、JavaScript を用いて処理しています。簡潔にするため、そのコードは省略しています。

```js hidden live-sample___comparing-values
const sections = document.querySelectorAll("section");
const form = document.querySelector("form");

function updateScope(val) {
  sections.forEach((section) => (section.style.anchorScope = val));
}

form.addEventListener("input", (e) => {
  updateScope(e.target.value);
});

updateScope("all");
```

#### 結果

この例は次のように表示されます。

{{ EmbedLiveSample("comparing-values", "100%", "225") }}

`<section>` 要素に `anchor-scope: all` を設定して、位置指定要素に適用される初期の位置指定効果を確認してください。その後、利用できる他の `anchor-scope` 値を選択して、それぞれの効果を確認してみてください。次のような結果が得られるはずです。

- `all`: `<section>` 要素の子孫であるアンカー要素を基準として要素を配置できる範囲は、それらを関連付けるために使用されている `anchor-name` の値にかかわらず、それ自体が `<section>` 要素の子孫である位置指定要素に限定されます。その結果、`<section>` 要素の内側にある位置指定要素 ("位置指定 1–3") は期待どおりアンカー位置指定されますが、`<section>`要素の外側にある位置指定要素 ("位置指定 4") はアンカー位置指定されません。これは範囲外となるためです。
- `--my-anchor`: `<section>` 要素の子孫であるアンカー要素を基準として要素を配置できる範囲は、それ自体が `<section>` 要素の子孫である位置指定要素に限定され、かつ `--my-anchor` `anchor-name` を使用してそれらを関連付けている場合に限られます。その結果、`<section>` 要素の内側にある位置指定要素 ("位置指定 1–3") は期待どおりアンカー配置され、`<section>` 要素の外側にある位置指定要素 ("位置指定 4") も同時に期待どおりアンカー配置されます。前者の場合、位置指定要素はセットスコープ内にあり、後者の場合、位置指定要素はスコープ外のアンカー名 (`--another-anchor`) を使用しているため、セットスコープの影響を受けません。"位置指定 4" の要素は、ソース内で一致するアンカー名を持つ最後のアンカー要素を基準として位置指定されます。
- `none`: `<section>` 要素にはアンカー範囲が設定されていないため、位置指定されたすべての要素は、ソース順における最後のアンカー要素を基準として位置指定されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュール
- [CSS アンカー位置指定の使用](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)ガイド
