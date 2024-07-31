---
title: hidden
slug: Web/HTML/Global_attributes/hidden
l10n:
  sourceCommit: db32c2f103885a65715e2cce48bda44be03f44f7
---

{{HTMLSidebar("Global_attributes")}}

**`hidden`** [グローバル属性](/ja/docs/Web/HTML/Global_attributes)は {{Glossary("enumerated", "列挙型")}}属性であり、ブラウザーがその要素の中身を表示すべきではないことを示します。例えば、
要素がまだ、あるいはもはや*関連性*がないことを示す論理型属性です。例えば、ログイン処理が完了するまで使用できないページの要素を非表示にするために使用することができます。

{{EmbedInteractiveExample("pages/tabbed/attribute-hidden.html","tabbed-shorter")}}

## 解説

`hidden` 属性は、要素の中身をユーザーに表示しないことを示すために使用されます。この属性は以下の値のいずれかを取ることができます。

- 空文字列
- キーワード `hidden`
- キーワード `until-found`

hidden` 属性には、 _hidden_ 状態と _hidden until found_ 状態の2つの状態があります。

- 空文字列、またはキーワード `hidden` は、要素を _hidden_ 状態に設定します。さらに、無効な値を指定すると、その要素は _hidden_ 状態に設定されます。

- キーワード `until-found` は、要素を _hidden until found_ 状態にします。

従って、以下のものはすべて、要素を [_hidden_](#hidden_状態) の状態に設定します。

```html
<span hidden>I'm hidden</span>
<span hidden="">I'm also hidden</span>
<span hidden="hidden">I'm hidden too!</span>
```

以下のものは、要素を [_hidden until found_](#hidden_until_found_状態) の状態に設定します。

```html
<span hidden="until-found">I'm hidden until found</span>
```

`hidden` 属性は、 1 つの表現方法からのみコンテンツを隠す目的で使用してはいけません。何かが hidden とマークされている場合、それは、例えばスクリーンリーダーを含むすべての表現方法から隠されます。

隠された要素は隠されていない要素からリンクすべきではありません。隠された要素の子孫である要素はまだアクティブであり、スクリプト要素はまだ実行でき、フォーム要素はまだ送信できることを意味します。しかし、要素とスクリプトは、他の文脈で隠された要素を参照することがあります。

しかし、ARIA の [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) 属性を使用して、それ自身が隠されている記述を参照することは問題ないでしょう。記述を隠すことは、それ自身は有用でないことを意味しますが、それらが記述された要素から参照されるという固有の文脈で有用であるように書くことができます。

同様に、`hidden` 属性のついたキャンバス要素はスクリプト化されたグラフィックエンジンによってオフスクリーンバッファーとして使用することができ、フォームコントロールはその form 属性を使用して隠されたフォーム要素を参照することができます。

hidden 要素の子孫である要素はまだ有効であり、スクリプト要素はまだ実行でき、フォーム要素はまだ送信することができることを意味しています。

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

また、その要素を明らかにするためには、[レイアウトコンテインメント](/ja/docs/Web/CSS/CSS_containment)の影響を受けている必要があります。これは、_hidden until found_ 状態の要素の `display` 値が `none`、`contents`、`inline` の何れかである場合、その要素はページまたはフラグメントナビゲーションでの検索によって明らかにされないことを意味しています。

## 例

### until-found の使用

この例には次のものがあります。

- 3 つの {{HTMLElement("div")}} 要素があります。最初のものと 3 つ目は非表示になっていませんが、2 つ目には `hidden="until-found"` と `id="until-found-box"` 属性があります。
- ターゲットが `"until-found-box"` フラグメントであるリンクです。

hidden until found 要素には、赤の点線枠と灰色の背景があります。

また、hidden until found 要素で発行される `beforematch` イベントを待ち受けるいくらかの JavaScript もあります。このイベントハンドラーはボックスのテキストコンテンツを変更します。

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

要素のコンテンツは非表示ですが、要素にはボックスが生成され、レイアウト内の空間を占め、背景と境界が描画されていることに注意してください。

［非表示コンテンツへ移動］ボタンをクリックすると、hidden until found の要素へ移動します。`beforematch` イベントが発行され、テキストコンテンツが更新され、要素のコンテンツが表示されます。

この例を再度実行するには、［リセット］をクリックしてください。

{{EmbedLiveSample("Using until-found", "", 400)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("HTMLElement.hidden")}}
- すべての [グローバル属性](/ja/docs/Web/HTML/Global_attributes)。
- [`aria-hidden`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) 属性
- [`beforematch`](/ja/docs/Web/API/Element/beforematch_event) イベント
