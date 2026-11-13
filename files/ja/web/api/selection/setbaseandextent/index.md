---
title: "Selection: setBaseAndExtent() メソッド"
short-title: setBaseAndExtent()
slug: Web/API/Selection/setBaseAndExtent
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{ ApiRef("DOM") }}

**`setBaseAndExtent()`** は {{domxref("Selection")}} インターフェイスのメソッドで、指定された 2 つの DOM ノードの全部または一部、およびそれらの間に位置するコンテンツを含む範囲を選択範囲として設定します。

ブラウザーが対応している場合、アンカーノードとフォーカスノードは{{glossary("shadow tree", "シャドウツリー")}}内に配置することができます。

## 構文

```js-nolint
setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset)
```

### 引数

- `anchorNode`
  - : 選択範囲の先頭にあるノード。
- `anchorOffset`
  - : アンカーノードの先頭から数えて、選択対象から除外すべき子ノードの数。
    たとえば、値が 0 の場合、そのノード全体が含まれます。
    値が 1 の場合、最初の子ノードを除くノード全体が含まれます。
    以下同様です。

    `anchorNode` が {{domxref("Text")}} ノードである場合、オフセットは、選択範囲から除外すべき {{domxref("Node.textContent")}} の先頭からの文字数を指します。

- `focusNode`
  - : 選択範囲の末尾にあるノード。
- `focusOffset`
  - : フォーカスノードの先頭から、選択範囲に含めるべき子ノードの数。
    たとえば、値が 0 の場合、そのノード全体が除外されます。
    値が 1 の場合、最初の子ノードが含まれます。以下同様です。

    `focusNode` が {{domxref("Text")}} ノードである場合、オフセットは、選択範囲に含めるべき {{domxref("Node.textContent")}} の先頭からの文字数を指します。

> [!NOTE]
> 文書内でフォーカス位置がアンカー位置よりも前にある場合、選択の方向が逆になります。つまり、カーソルはテキストの末尾ではなく先頭に配置されます。これは、その後実行される可能性のあるキーボードコマンドにとって重要な点です。
> たとえば、<kbd>Shift</kbd> + <kbd>➡︎</kbd> と入力すると、選択範囲は末尾から拡大するのではなく、先頭から縮小されます。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `IndexSizeError` {{domxref("DOMException")}}
  - : `anchorOffset` が `anchorNode` 内の子ノードの数よりも大きい場合、または `focusOffset` が `focusNode` 内の子ノードの数よりも大きい場合に発生します。

## 例

この例では、span 要素を含む 2 つの段落があり、それぞれの span には 1 つの単語が含まれています。
1 つ目の段落は `anchorNode` として設定され、2 つ目の段落は `focusNode` として設定されています。
また、これら 2つ のノードの間に、もう 1 つの段落があります。

次に、`anchorOffset` と `focusOffset` を設定できる 2 つのフォーム入力フィールドがあります。両方のデフォルト値は 0 です。

また、このボタンを押すと、指定されたオフセットで `setBaseAndExtent()` メソッドを実行する関数が呼び出され、選択範囲が HTML の最下部にある出力段落にコピーされるようになっています。

```html-nolint
<h1>setBaseAndExtent の例</h1>
<div>
  <p class="one"><span>Fish</span><span>Dog</span><span>Cat</span><span>Bird</span></p>
  <p>MIDDLE</p>
  <p class="two"><span>Car</span><span>Bike</span><span>Boat</span><span>Plane</span></p>
</div>

<div>
  <p>
    <label for="aOffset">アンカーオフセット</label>
    <input id="aOffset" name="aOffset" type="number" value="0" />
  </p>
  <p>
    <label for="fOffset">フォーカスオフセット</label>
    <input id="fOffset" name="fOffset" type="number" value="0" />
  </p>
  <p><button>選択範囲を捕捉</button></p>
</div>

<p><strong>結果</strong>: <span class="output"></span></p>
```

> [!NOTE]
> `<p class="one">` および `<p class="two">` の開始タグと、それらに続く `<span>` の開始タグの間には、意図的に[空白](/ja/docs/Web/CSS/Guides/Text/Whitespace#dom_でのホワイトスペースの処理)を設けていません。これは、予想される子ノードの数に影響を与えるテキストノードの存在を避けるためです。（それらのテキストノードは空白のみで構成されているとしても、追加の子ノードとしてカウントされてしまいます。詳細については、[`Node.firstChild` の例](/ja/docs/Web/API/Node/firstChild#例)を参照してください）。

JavaScript は次のようになります。

```js
const one = document.querySelector(".one");
const two = document.querySelector(".two");

const aOffset = document.getElementById("aOffset");
const fOffset = document.getElementById("fOffset");

const button = document.querySelector("button");

const output = document.querySelector(".output");

let selection;

button.onclick = () => {
  try {
    selection = document.getSelection();
    selection.setBaseAndExtent(one, aOffset.value, two, fOffset.value);
    const text = selection.toString();
    output.textContent = text;
  } catch (e) {
    output.textContent = e.message;
  }
};
```

以下のライブ例で、さまざまなオフセット値を設定して、選択範囲にどのような影響があるか試してみてください。

{{ EmbedLiveSample('Examples', '100%', 370) }}

> [!NOTE]
> この [GitHub 上の例](https://github.com/chrisdavidmills/selection-api-examples/blob/master/setBaseAndExtent.html)をご覧いただけます（[ライブ動作も確認](https://chrisdavidmills.github.io/selection-api-examples/setBaseAndExtent.html)）。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Selection")}}
