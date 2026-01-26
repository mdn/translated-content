---
title: HTML hidden グローバル属性
short-title: hidden
slug: Web/HTML/Reference/Global_attributes/hidden
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`hidden`** [グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)は {{Glossary("enumerated", "列挙型")}}属性であり、ブラウザーがその要素の中身を表示すべきではないことを示します。例えば、ログイン処理が完了するまで使用できないページの要素を非表示にするために使用することができます。

{{InteractiveExample("HTML デモ: hidden", "tabbed-shorter")}}

```html-nolint interactive-example
<p>
  このコンテンツは重要ですので、今すぐお読みください。これを見つけることができて、本当に良かったですね！
</p>

<p hidden>
  このコンテンツは、現在このページには関連がないため、表示すべきではありません。
  ここには何もありません。何もありません。
</p>
```

```css interactive-example
p {
  background: #ffe8d4;
  border: 1px solid #f69d3c;
  padding: 5px;
  border-radius: 5px;
}
```

## 解説

`hidden` 属性は、要素の中身をユーザーに表示しないことを示すために使用されます。
この属性は以下の値のいずれかを取ることができます。

- キーワード `hidden`
- キーワード `until-found`
- 空文字列または値なし

無効な `hidden` の値を指定した場合も、その要素は _hidden_ 状態に設定されます。
従って、以下のものはすべて、要素を [_hidden_](#hidden_状態) の状態に設定します。

```html
<span hidden>I'm hidden</span>
<span hidden="">I'm also hidden</span>
<span hidden="hidden">I'm hidden too!</span>
<span hidden="bananas">I'm equally as hidden!</span>
```

以下のものは、要素を [_hidden until found_](#hidden_until_found_状態) の状態に設定します。

```html
<span hidden="until-found">I'm hidden until found</span>
```

### hidden 状態

_hidden_ 状態は、その要素が現在ページに関連していないこと、または、ページの他の部分で再利用するためのコンテンツを宣言するために使用されており、ユーザーに直接表示すべきではないことを示しています。ブラウザーは _hidden_ 状態にある要素を描画しません。

ウェブブラウザーは `display: none` を使用して _hidden_ 状態を実装することができ、その場合、その要素はページレイアウトに参加しません。これはまた、_hidden_ 状態の要素で CSS の {{cssxref("display")}} プロパティの値を変更すると、その状態が上書きされるということでもあります。例えば、`display: block` とスタイル設定された要素は、`hidden`属性があるにもかかわらず、表示されることになります。

### hidden until found 状態

_hidden until found_ の状態では、要素は非表示になりますが、ブラウザーの「ページ内検索」機能やフラグメントナビゲーションでは、そのコンテンツにアクセスできます。これらの機能によって _hidden until found_ サブツリーの要素にスクロールが発生した場合、ブラウザーは次のようになります。

- 非表示の要素に [`beforematch`](/ja/docs/Web/API/Element/beforematch_event) イベントが発生します
- その要素から `hidden` 属性を取り除きます
- 要素までスクロールします

これにより、開発者はコンテンツのセクションを折りたたみながら、フラグメントナビゲーションで検索およびアクセスできるようにすることができます。

ブラウザーは通常 {{cssxref("content-visibility", "content-visibility: hidden")}} を使用して _hidden until found_ を実装していることに注意してください。これは、_hidden_ 状態の要素とは異なり、_hidden until found_ 状態の要素には生成されたボックスがある、ということを意味しています。

- この要素はページレイアウトに参加します
- 要素の margin, borders, padding, background がレンダリングされます

また、その要素を明らかにするためには、[レイアウトコンテインメント](/ja/docs/Web/CSS/Guides/Containment)の影響を受けている必要があります。これは、_hidden until found_ 状態の要素の `display` 値が `none`、`contents`、`inline` の何れかである場合、その要素はページまたはフラグメントナビゲーションでの検索によって明らかにされないことを意味しています。

## 使用上のメモ

`hidden` 属性は、 1 つの表現方法からのみコンテンツを隠す目的で使用してはいけません。
何かが hidden とマークされている場合、それは、例えばスクリーンリーダーを含むすべての表現方法から隠されます。

非表示の要素は、`hidden="until-found"` を使用する場合を除き、表示されている要素からリンクしてはいけません。
例えば、`hidden` 属性を持つ領域にリンクするために `href` 属性を使用することは不適切です。
コンテンツが適用可能または関連性がない場合は、リンクしてはいけません。

しかし、ARIA の [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) 属性を使用して、それ自身が隠されている記述を参照することは問題ないでしょう。記述を隠すことは、それ自身は有用でないことを意味しますが、それらが記述された要素から参照されるという固有の文脈で有用であるように書くことができます。

同様に、`hidden` 属性のついたキャンバス要素はスクリプト化されたグラフィックエンジンによってオフスクリーンバッファーとして使用することができ、フォームコントロールはその form 属性を使用して隠されたフォーム要素を参照することができます。

最後に、非表示の要素の子孫である要素は引き続き有効であり、スクリプト要素は引き続き実行可能であり、フォーム要素は引き続き送信可能であることに気を付けてください。

```html
<div hidden>
  <script>
    console.warn("Boo! I'm hidden *and* running!");
  </script>
</div>
```

## 例

### hidden 属性の使用

この例には、3 つの {{HTMLElement("div")}} 要素があります。最初の要素と 3 つ目の要素は非表示ではありませんが、2 つ目の要素は `hidden` 属性が設定されています。
非表示の要素には生成されたボックスがないことに注意してください。

```html
<div>I'm not hidden</div>
<div hidden>I'm hiding!</div>
<div>I'm not hidden, either</div>
```

```css hidden
div {
  height: 40px;
  width: 300px;
  border: 5px dashed black;
  margin: 1rem 0;
  padding: 1rem;
  font-size: 2rem;
}
```

{{EmbedLiveSample("using_the_hidden_attribute", "", 300)}}

### until-found の使用

この例には、 3 つの {{HTMLElement("div")}} 要素があります。
最初のものと 3 つ目は非表示になっていませんが、2 つ目には `hidden="until-found"` と `id="until-found-box"` 属性があります。
`until-found-box` の id に対応する要素には、赤い点線の境界線と灰色の背景が表示されます。

また、`"until-found-box"` フラグメントをターゲットとするリンクと、その非表示要素で発生する `beforematch` イベントをリッスンする JavaScript もあります。
イベントハンドラーは、 _hidden until found_ 状態が除去されようとしているときに発生する措置を示すために、ボックスのテキストコンテンツを変更します。

#### HTML

```html
<a href="#until-found-box">非表示コンテンツへ移動</a>

<div>隠されていません</div>
<div id="until-found-box" hidden="until-found">Hidden until found</div>
<div>隠されていません</div>
```

```html hidden
<button id="reset">リセット</button>
```

#### CSS

```css
div {
  height: 40px;
  width: 300px;
  border: 5px dashed black;
  margin: 1rem 0;
  padding: 1rem;
  font-size: 2rem;
}

div#until-found-box {
  color: red;
  border: 5px dotted red;
  background-color: lightgray;
}
```

```css hidden
#until-found-box {
  scroll-margin-top: 200px;
}
```

#### JavaScript

```js
const untilFound = document.querySelector("#until-found-box");
untilFound.addEventListener(
  "beforematch",
  () => (untilFound.textContent = "正体がバレた!"),
);
```

```js hidden
document.querySelector("#reset").addEventListener("click", () => {
  document.location.hash = "";
  document.location.reload();
});
```

#### 結果

［非表示コンテンツへ移動］ボタンをクリックすると、hidden until found の要素へ移動します。`beforematch` イベントが発行され、テキストコンテンツが更新され、要素のコンテンツが表示されます。
要素のコンテンツは非表示ですが、要素にはボックスが生成され、レイアウト内の空間を占め、背景と境界が描画されていることに注意してください。

この例を再度実行するには、［リセット］をクリックしてください。

{{EmbedLiveSample("Using until-found", "", 400)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("HTMLElement.hidden")}}
- すべての [グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)。
- [`aria-hidden`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) 属性
- [`beforematch`](/ja/docs/Web/API/Element/beforematch_event) イベント
