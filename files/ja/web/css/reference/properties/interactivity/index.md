---
title: CSS `interactivity` プロパティ
short-title: interactivity
slug: Web/CSS/Reference/Properties/interactivity
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{seecompattable}}

**`interactivity`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素とその子孫ノードが [inert](/ja/docs/Web/HTML/Reference/Global_attributes/inert) に設定されるかどうかを指定します。

## 構文

```css
/* キーワード値 */
interactivity: auto;
interactivity: inert;

/* グローバル値 */
interactivity: inherit;
interactivity: initial;
interactivity: revert;
interactivity: revert-layer;
interactivity: unset;
```

### 値

- `auto`
  - : 選択された要素は、不活性状態がデフォルトの状態にあります。これは通常、それらの要素が操作可能であることを意味しますが、[必ずしもそうとは限りません](#デフォルトの不活性状態)。これがデフォルト値です。

- `inert`
  - : 選択された要素とその子要素は不活性です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 解説

`interactivity` プロパティを使用すると、要素とその子要素が不活性状態になるかどうかを設定できます。不活性状態の詳細については、HTML の [`inert`](/ja/docs/Web/HTML/Reference/Global_attributes/inert) 属性のリファレンスページを参照してください。

`interactivity: inert` の代表的な使用例は、カルーセルなどのページネーションされたコンテンツにおいて、現在表示されているページのコンテンツやコントロールのみに操作を限定したい場合です。このような場合、画面外にあるリンクやボタンに予期せずフォーカスが当たると、ユーザーの使い勝手が悪くなるおそれがあります。

ある要素の不活性状態が、HTML （`inert` 属性、またはブラウザーの自動設定）と CSS（`interactive` プロパティ）の両方で同時に指定されている場合、CSS は効果がありません。CSS では HTML による不活性状態を上書きすることはできないからです。

たとえば、次の HTML 要素は機能しません。

```html
<button inert>押すことができません</button>
```

これに `interactive: auto` を設定しても、何の効果もありません。

### デフォルトの不活性状態

ほとんどの要素はデフォルトで操作可能ですが、必ずしもそうとは限りません。

- 要素の祖先要素が、`interactive` プロパティまたは `inert` 属性によって、不活性状態に設定されることがあります。
- {{htmlelement("dialog")}} のモーダルダイアログが表示されている間、ページのその他の部分は自動的に不活性状態になります。

## 例

### 基本的な `interactivity` の使い方

この例には、2 つの {{htmlelement("input")}} 要素があります。2 つ目の要素には、クラスを通じて `interactivity: inert` が設定されているため、対応しているブラウザーではフォーカスを当てたり編集したりすることができません。

```html live-sample___basic-interactivity
<p>
  <label>
    この入力ボックスは操作可能です:
    <input type="text" name="one" value="編集可" />
  </label>
</p>
<p>
  <label>
    この入力ボックスは操作可能ではありません:
    <input type="text" name="two" value="編集不可" class="inert" />
  </label>
</p>
```

```css live-sample___basic-interactivity
.inert {
  interactivity: inert;
  background-color: lightpink;
}
```

#### 結果

出力結果は次のようになります。

{{ EmbedLiveSample("basic-interactivity", "100%", "100") }}

### 不活性性の影響を探る

この例では、`interactivity` プロパティの効果について探ります。

#### HTML

このマークアップには 2 つの {{htmlelement("p")}} 要素が含まれており、それぞれにリンクが設定されています。2 番目の段落には `inert` クラスが設定されており、その子要素である {{htmlelement("span")}} 要素には [`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) が設定され、編集可能になっています。

```html-nolint live-sample___inertness-effects
<p>
  この段落は<a
    href="https://developer.mozilla.org/ja/docs/Web/HTML/Reference/Global_attributes/inert"
    >不活性</a
  >ではありません。テキストコンテンツを選択したり、ブラウザーの検索機能を使って検索したり、リンクにフォーカスを合わせてクリックしたりできるはずです。この段落には <code>click</code> イベントハンドラーが設定されており、どこをクリックしても 1 秒間、境界線の色が変わります。
  <span contenteditable>この文には <code>contenteditable</code> が設定されているため
、編集可能です</span>。</p>

<p class="inert">
  この段落は<a
    href="https://developer.mozilla.org/ja/docs/Web/HTML/Reference/Global_attributes/inert"
    >不活性</a
  >です。テキストコンテンツの選択、ブラウザー内の検索機能を使った検索、リンクへのフォーカスやクリック、および <code>click</code> イベントの発行はできません（クリックしても枠線の色は変わりません）。
  <span contenteditable
    >この文には <code>contenteditable</code> が設定されていますが、不活性であるため編集することはできません</span
  >。</p>
```

#### CSS

2 番目の段落の `interactivity` プロパティを `inert` に設定し、不活性にします。これにより、1 番目の段落の `contenteditable` テキストは編集可能ですが、2 番目の段落のテキストは編集できません。また、2 番目の段落内では、テキストの検索や選択、リンクへの操作もできなくなります。

```css live-sample___inertness-effects
.inert {
  interactivity: inert;
}

[contenteditable] {
  outline: 1px dashed lightblue;
}

.borderChanged {
  border-color: orange;
}
```

```css hidden live-sample___inertness-effects
body {
  font: 1.2em / 1.5 system-ui;
}

p {
  border: 5px solid black;
  padding: 10px;
  width: 90%;
  margin: 20px auto;
}
```

#### JavaScript

各段落にイベントハンドラーを設定し、クリックされた際にクラス名を切り替えるようにしました。クリック時にクラス名を追加し、2 秒後にそのクラス名を削除します。

```js live-sample___inertness-effects
const paras = document.querySelectorAll("p");

function tempBorderChange(e) {
  const targetPara = e.currentTarget;
  targetPara.classList.add("borderChanged");
  setTimeout(() => {
    targetPara.classList.remove("borderChanged");
  }, 2000);
}

for (para of paras) {
  para.addEventListener("click", tempBorderChange);
}
```

#### 結果

{{ EmbedLiveSample("inertness-effects", "100%", "380") }}

2 番目の段落は不活性であることに注目してください。そのため、1 番目の段落とは異なる挙動を示します。例えば、リンクをクリックしたりフォーカスを合わせたりすることはできず、テキストを選択したり検索したりすることもできません。また、`contenteditable` 属性を持つ `<span>` は編集不可能であり、`click` イベントも発生しません。

### ビュータイムラインを使用して、画面外の要素を不活性にする

この例では、水平スクロールするページネーション付きコンテンツを示しています。各ページは [CSS スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap) によってスナップされ、その不活性状態は、[スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)で[ビュー進行タイムライン](/ja/docs/Web/CSS/Reference/Properties/view-timeline-name)を使用して制御されています。{{glossary("scroll container", "スクロールコンテナー")}}内に表示されるコンテンツは操作可能ですが、オーバーフローしたコンテンツ領域に移動すると不活性になります。

#### HTML

この HTML は、最上位の[見出し](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements)と、4 つの[リストアイテム](/ja/docs/Web/HTML/Reference/Elements/li)からなる[番号なしリスト](/ja/docs/Web/HTML/Reference/Elements/ul)で構成されており、各リストアイテムにはそれぞれ別のページのコンテンツが含まれています。

```html live-sample___offscreen-inert
<h1>ページネーション interactivity のデモ</h1>
<ul>
  <li>
    <h2>ページ 1</h2>
    <p>これがコンテンツの最初のページです。</p>
    <p><a href="#">デモ用リンク</a>.</p>
    <p><button>押してね</button></p>
  </li>
  <li>
    <h2>ページ 2</h2>
    <p>こちらはコンテンツの 2 ページ目です。</p>
    <p><a href="#">デモ用リンク</a>.</p>
    <p><button>押してね</button></p>
  </li>
  <li>
    <h2>ページ 3</h2>
    <p>これはコンテンツの 3 ページ目です。</p>
    <p><a href="#">デモ用リンク</a>.</p>
    <p><button>押してね</button></p>
  </li>
  <li>
    <h2>ページ 4</h2>
    <p>これはコンテンツの 4 ページ目です。</p>
    <p><a href="#">デモ用リンク</a>.</p>
    <p><button>押してね</button></p>
  </li>
</ul>
```

#### CSS

順序なしリストには、ビューポートと同じ幅になるよう、{{cssxref("width")}} に `100vw` が設定されています。固定の {{cssxref("height")}}、いくつかの {{cssxref("padding")}}、および {{cssxref("overflow-x")}} の値を `scroll` に設定することで、はみ出したコンテンツがスクロールされるようにします。その子リストアイテムは、{{cssxref("display", "display: flex")}} によって水平方向に配置されます。このフレックスコンテナーには、{{cssxref("scroll-snap-type")}} の値を `x mandatory` に設定し、[スクロールスナップコンテナー](/ja/docs/Glossary/Scroll_snap#scroll_snap_container)としています。`x` キーワードは、コンテナーの[スナップターゲット](/ja/docs/Glossary/Scroll_snap#スナップターゲット)が水平方向にスナップされるようにします。`mandatory` キーワードは、スクロール操作の終了時にコンテナーが常にスナップターゲットにスナップされることを意味します。

```css hidden live-sample___offscreen-inert
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Helvetica", "Arial", sans-serif;
}

h1 {
  text-align: center;
  margin: 0;
}

button {
  background-color: white;
}
```

```css live-sample___offscreen-inert
ul {
  width: 100vw;
  height: 250px;
  padding: 1vw;
  overflow-x: scroll;
  display: flex;
  gap: 1vw;
  scroll-snap-type: x mandatory;
}
```

各リストアイテムには、次のスタイルが適用されています。

- {{cssxref("flex")}} の値を `0 0 98vw` に設定することで、各アイテムのサイズが、スクロールコンテナーのサイズからリストに設定された {{cssxref("gap")}} を差し引いた値になるように強制されます（前述の `ul` ルール内の `gap` 宣言を参照）。これにより、各ページがスクロールコンテナー内で中央に配置される効果もあります。
- {{cssxref("scroll-snap-align")}} の値を `center` に設定すると、スクロールコンテナーが各スナップターゲットの中央にスナップするようになります。
- {{cssxref("view-timeline")}} の値を `--inner-change inline` に設定することで、その要素を `--inner-change` ビュー進行タイムラインの対象として宣言し、そのタイムラインが、その要素が親のスクロールコンテナー内を移動する際にインライン方向に進行するように設定します。
- {{cssxref("animation-timeline")}} で、これは `view-timeline` 一括指定で定義されている {{cssxref("view-timeline-name")}} と同じ名前です。これは、その名前が付けられたビュー進行タイムラインが、その要素に適用されたアニメーションの進行を制御するために使用されることを意味します。
- この要素に適用されるアニメーションとその塗りつぶしモードを定義する {{cssxref("animation-name")}} および {{cssxref("animation-fill-mode")}}。アニメーション開始前に開始時のアニメーション状態が要素に適用され、アニメーション終了後に終了時のアニメーション状態が要素に適用されるようにするには、`both` 値を指定する必要があります。アニメーションが保持されない場合、アニメーションを介して適用された `interactivity: inert` 宣言は、リストアイテムがスクロールコンテナーの外にあるときには適用されません。

```css live-sample___offscreen-inert
li {
  list-style-type: none;
  background-color: #eeeeee;
  border: 1px solid #dddddd;
  padding: 20px;

  flex: 0 0 98vw;

  scroll-snap-align: center;

  view-timeline: --inner-change inline;
  animation-timeline: --inner-change;
  animation-name: inert-change;
  animation-fill-mode: both;
}
```

最後に、アニメーションの {{cssxref("@keyframes")}} が定義されています。`interactivity: inert` をビュータイムラインの `entry 0%` および `exit 100%` の位置で設定されています。これは `animation-fill-mode: both` の値と組み合わせることで、ビュータイムラインの開始前および終了後、つまりリストアイテムがスクロールコンテナーの外側にある間は、リストアイテムが不活性状態になることを意味します。`entry 1%` と `exit 99%` の間では、リストアイテムに `interactivity: auto` が設定されており、スクロールコンテナー内にある間は通常通り操作が可能であることを意味します。

```css live-sample___offscreen-inert
@keyframes inert-change {
  entry 0%,
  exit 100% {
    interactivity: inert;
  }

  entry 1%,
  exit 99% {
    interactivity: auto;
  }
}
```

位置値の説明については、{{cssxref("animation-range")}} のリファレンスページを参照してください。

#### 結果

順序なしリストを水平方向にスクロールすると、ページネーション効果が確認できます。各ページがスナップするように表示されます。リンクとボタンの間を Tab キーで移動してみてください。画面上に表示されているものだけが操作可能で、Tab キーで移動できることがわかります。

{{ EmbedLiveSample("offscreen-inert", "100%", "320") }}

## アクセシビリティの考慮

要素を不活性化する際は、アクセシビリティについて慎重に検討してください。デフォルトでは、要素やそのサブツリーが不活性化されているかどうかを視覚的に判別する方法はありません。ウェブ開発者として、アクティブなコンテンツ部分と不活性なコンテンツ部分を明確に区別して示すのは、あなたの責任です。

コンテンツの不活性状態について視覚的および非視覚的な手がかりを提供する一方で、視覚的なビューポートにはコンテンツの一部しか表示されていない場合があることも念頭に置いてください。ユーザーはコンテンツのごく一部を拡大表示している場合や、コンテンツをまったく表示できない場合もあります。不活性なセクションが明らかに不活性であると認識できないと、ユーザーの不満や操作性の低下につながる可能性があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の [`inert`](/ja/docs/Web/HTML/Reference/Global_attributes/inert) 属性
- {{domxref("HTMLElement.inert")}}
