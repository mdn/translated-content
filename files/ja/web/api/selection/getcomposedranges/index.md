---
title: "Selection: getComposedRanges() メソッド"
short-title: getComposedRanges()
slug: Web/API/Selection/getComposedRanges
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ ApiRef("DOM") }}

**`Selection.getComposedRanges()`** メソッドは、現在の選択範囲を表す {{domxref("StaticRange")}} オブジェクトの配列を返します。このメソッドは、シャドウ境界をまたぐ可能性のある範囲を返す場合があります。

選択範囲の端点がシャドウツリー内、あるいは異なるシャドウツリー内にある可能性があり、またこれらが閉じられている場合があるため、このメソッドはデフォルトではシャドウツリー内のノードを返すことはできません。
このメソッドで、シャドウツリー内のノードを含む選択範囲を返す必要がある場合は、それらのツリーに対応する {{domxref("ShadowRoot")}} オブジェクトを、メソッドの引数として渡す必要があります。
対応するルートが指定されておらず、選択範囲の開始点または終了点がシャドウツリー内にある場合、返される範囲は、ルート内の特定のノードではなく、シャドウルートのホストを含むように再定義されます。

返される範囲は、`getComposedRanges()` が呼び出された時点での範囲を表します。
DOM またはシャドウ DOM が変更された場合、選択範囲が不正確になる可能性があります。
アプリケーションコードでは、{{domxref("MutationObserver")}} を使用して DOM の変更を監視し、その後 {{domxref("Selection.setBaseAndExtent()")}} を呼び出して選択範囲を更新することができます。

> [!NOTE]
> シャドウルートの境界をまたぐ可能性がある範囲を選択する場合は、{{domxref("Selection.getRangeAt()")}} の代わりにこのメソッドを使用してください。
> {{domxref("Selection.getRangeAt()")}} はシャドウルートを認識しません。
> 返される範囲は定義されておらず、ブラウザーによって異なります。

## 構文

```js-nolint
getComposedRanges()
getComposedRanges(options)
```

### 引数

- `options` {{optional_inline}}
  - : 以下のプロパティを持つオブジェクト（いずれもオプションです）。
    - `shadowRoots` {{optional_inline}}
      - : {{domxref("ShadowRoot")}} オブジェクトの配列。
        選択範囲の端点が指定されたシャドウルートのいずれか内に含まれる場合、その範囲は対応するシャドウ DOM ツリー内のノードを返すことができます。
        それ以外の場合、つまり選択範囲がシャドウ境界をまたぎ、対応する `ShadowRoot` が指定されていない場合、返される範囲は、そのシャドウルートのホスト要素全体を含むように調整されます。

> [!NOTE]
> 元の仕様では、シャドウルートは[残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)の集合として定義されていました。一部のブラウザーでは、この古い構文にまだ対応している場合があります。

### 返値

文書の構成済み（フラット化された）ツリー内で選択された範囲を表す、{{domxref("StaticRange")}} オブジェクトの配列。
本仕様書の執筆時点では、この配列には 1 つのオブジェクトのみが含まれるものと想定されています。

## 例

### インラインのシャドウルートにまたがる選択

この例では、シャドウルートが渡された場合と渡されなかった場合の両方における `getComposedRanges()` の動作を示し、{{domxref("Selection.getRangeAt()")}} との違いを比較しています。

これにより、DOM 内の異なるノードや、開いているシャドウルートおよび閉じているシャドウルートに定義されたテキストを選択し、さまざまな手法を用いて選択範囲をコピーした後、その範囲を再度適用して、元の選択がどの程度正確だったかを確認することができます。

#### HTML

HTML では、いくつかのテキストノードと `<span>` 要素が定義されており、これらに JavaScript を使用してシャドウルートを紐付けます。
また、さまざまな方法で選択範囲をコピーしたり適用したりするためのボタンも追加します。

```html
<p>
  DOM テキスト 1<span id="openHost"></span>DOM テキスト 2<span
    id="closedHost"></span
  >DOM テキスト 3
</p>
```

```html
<button id="copySelection">シャドウルートを越えない範囲をコピー</button>
<button id="copySelectionWithShadowRoots">
  シャドウルートを越える範囲をコピー
</button>
<button id="applySelection">選択範囲を適用</button>
<hr />
<button id="copySelectionRangeAt">getRangeAt() で範囲をコピー</button>
<button id="applySelectionGetRangeAt">選択範囲を適用</button>
```

#### CSS

この CSS には特に目立った機能はありません。
単に、ボタンが見やすくなるように縦に並べるだけです。

```css
button {
  display: block;
}
```

```css hidden
#log {
  height: 20px;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}
```

処理の大部分は JavaScript で行われます。
まず、`getComposedRanges()` に対応していない場合はログを出力しますが、実際には、この例の残りの部分でその関数を使用しようとするのを阻止するわけではありません。

```js
if (!("getComposedRanges" in Selection.prototype)) {
  log("このブラウザーは getComposedRanges() メソッドに対応していません");
}
```

次に、開いたシャドウルートと閉じたシャドウルートを作成し、HTML で作成した 2 つの `<span>` 要素にそれらを関連付けます。
これらには太字の簡単なテキストが含まれており、HTML がレンダリングされた際にシャドウノードを容易に識別できるようにしています。

```js
let openRoot = openHost.attachShadow({ mode: "open" });
openRoot.innerHTML = `<b>開いたシャドウ DOM のテキスト</b>`;

let closedRoot = closedHost.attachShadow({ mode: "closed" });
closedRoot.innerHTML = `<b>閉じたシャドウ DOM のテキスト</b>`;
```

次に、最初の 2 つのボタンがクリックされた際に、`getComposedRanges()` を使用して選択された範囲を取得するコードを作成します。
1 つ目のボタンはシャドウルートを指定せずに `getComposedRanges()` を呼び出し、2 つ目のボタンは両方のシャドウルートを指定して呼び出します。
どちらの場合も、合成された範囲は変数に格納されます。

```js
const copySelectionButton = document.querySelector("#copySelection");
let composedRangeSelection = null;
copySelectionButton.addEventListener("click", () => {
  composedRangeSelection = window.getSelection().getComposedRanges()[0];
  log(`選択範囲をコピーしました（シャドウルートは越えない）`);
});

const copySelectionWithShadowRootsButton = document.querySelector(
  "#copySelectionWithShadowRoots",
);
copySelectionWithShadowRootsButton.addEventListener("click", () => {
  composedRangeSelection = window
    .getSelection()
    .getComposedRanges({ shadowRoots: [openRoot, closedRoot] })[0];
  log(`選択範囲をコピーしました（シャドウルートを越える）`);
});
```

「選択範囲を適用」ボタンのハンドラーは以下の通りです。
これは {{domxref("Selection.setBaseAndExtent()", "setBaseAndExtent()")}} を呼び出し、保存された範囲のノードとオフセットを引数として渡して、現在の選択範囲を設定します。

```js
const applySelectionButton = document.querySelector("#applySelection");
applySelectionButton.addEventListener("click", () => {
  if (composedRangeSelection) {
    window
      .getSelection()
      .setBaseAndExtent(
        composedRangeSelection.startContainer,
        composedRangeSelection.startOffset,
        composedRangeSelection.endContainer,
        composedRangeSelection.endOffset,
      );
    log(`選択範囲が適用されました`);
  } else {
    log(`選択範囲が適用されません`);
  }
});
```

コードの最後の部分では、{{domxref("Selection.getRangeAt()")}} を使用して現在の選択範囲をコピーし、その後、その選択範囲を再適用するためのボタンが定義されています。

```js
const copySelectionRangeAtButton = document.querySelector(
  "#copySelectionRangeAt",
);
let rangeSelection = null;
copySelectionRangeAtButton.addEventListener("click", () => {
  const selection = window.getSelection();
  if (selection.rangeCount > 0) {
    log(`getRangeAt() を使って選択範囲をコピーしました`);
    rangeSelection = selection.getRangeAt(0);
  } else {
    log(`範囲が選択されていません`);
  }
});

const applySelectionGetRangeAtButton = document.querySelector(
  "#applySelectionGetRangeAt",
);
applySelectionGetRangeAtButton.addEventListener("click", () => {
  if (rangeSelection) {
    window
      .getSelection()
      .setBaseAndExtent(
        rangeSelection.startContainer,
        rangeSelection.startOffset,
        rangeSelection.endContainer,
        rangeSelection.endOffset,
      );
    log(`選択範囲が適用されました`);
  } else {
    log(`選択範囲が適用されません`);
  }
});
```

```html hidden
<pre id="log"></pre>
```

#### 結果

実行例を以下に示します。
DOM からシャドウルート内のノードが選択されるように、通常のテキストから始まり、太字の部分で終わる上段のテキストを選択してください。
「シャドウルートを越える範囲をコピー」を選択してから「選択を適用」ボタンをクリックすると、選択範囲が変わらないことに気づくでしょう。これは、たとえシャドウルートが閉じられていても、コードによってシャドウルート内のすべてのノードへのアクセスが許可されているためです。
次に、「シャドウルートを越えない範囲をコピー」ボタンを選択して適用すると、選択範囲はシャドウルート内のテキストの末尾まで拡張されます。
これは、`getComposedRanges()` メソッドがシャドウツリー内部での可視性を与えられていなかったため、選択範囲がホストノードの末尾まで再定義されるからです。

また、「getRangeAt() で範囲をコピー」ボタンと「選択内容を適用」ボタンを使用した場合の挙動も確認してみてください。
シャドウルートを越えると、選択される範囲はかなり恣意的になり、使用しているブラウザーによっても異なることがわかるはずです。

{{EmbedLiveSample('Selecting across inline shadow roots', '100%', '240px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先のインターフェイスである {{domxref("Selection")}}
