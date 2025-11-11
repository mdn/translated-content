---
title: "Element: replaceChildren() メソッド"
short-title: replaceChildren()
slug: Web/API/Element/replaceChildren
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

**`Element.replaceChildren()`** メソッドは、 {{domxref("Node")}} の既存の子ノードを、指定された新しい一連の子で置き換えます。文字列または {{domxref("Node")}} オブジェクトを指定することができます。

## 構文

```js-nolint
replaceChildren(param1)
replaceChildren(param1, param2)
replaceChildren(param1, param2, /* … ,*/ paramN)
```

### 引数

- `param1`, …, `paramN`
  - : 一連の {{domxref("Node")}} オブジェクトまたは文字列で、この `Element` の既存の子を置き換えるものです。置き換えるオブジェクトが指定されなかった場合は、 `Element` の子ノードは空になります。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : [ノードツリーの制約](https://dom.spec.whatwg.org/#concept-node-tree)に違反したときに発生します。

## 例

### ノードを空にする

`replaceChildren()` は、ノードからすべての子ノードを取り除くための非常に便利なメカニズムを提供します。引数を指定せずに、親ノードで呼び出すと実現できます。

```js
myNode.replaceChildren();
```

### 要素間でノードを移行

`replaceChildren()` を使えば、冗長なループコードに頼ることなく、要素間で簡単にノードを転送することができます。例えば、パーティーの料理を選択するための簡単なアプリケーションがあるとします。この HTML は次のようなものになるでしょう。

```html
<h2>パーティーの食べ物リスト</h2>

<main>
  <div>
    <label for="no">No thanks!</label>

    <select id="no" multiple size="10">
      <option>りんご</option>
      <option>オレンジ</option>
      <option>ぶどう</option>
      <option>バナナ</option>
      <option>キウイフルーツ</option>
      <option>チョコレートクッキー</option>
      <option>ピーナッツクッキー</option>
      <option>チョコレートバー</option>
      <option>ハムサンド</option>
      <option>チーズサンド</option>
      <option>ファラフェルサンド</option>
      <option>アイスクリーム</option>
      <option>ゼリー</option>
      <option>人参スティックとフムス</option>
      <option>マルゲリータピザ</option>
      <option>ぺぱろーにぴざ</option>
      <option>ビーガン野菜ピザ</option>
    </select>
  </div>

  <div class="buttons">
    <button id="to-yes">"Yes" へ移動 --&gt;</button>
    <button id="to-no">&lt;-- "No" へ移動</button>
  </div>

  <div>
    <label for="yes">Yes please!</label>

    <select id="yes" multiple size="10"></select>
  </div>
</main>
```

簡単な CSS を使って、 2 つの選択リストを並べ、その間にコントロールボタンを配置するのが理にかなっているでしょう。

```css
main {
  display: flex;
}

div {
  margin-right: 20px;
}

label,
button {
  display: block;
}

.buttons {
  display: flex;
  flex-flow: column;
  justify-content: center;
}

select {
  width: 200px;
}
```

ここでやりたいことは、 "yes" ボタンが押されたときに "no" リストで選択されているオプションを "yes" リストに転送し、 "no" ボタンが押されたときに "yes" リストで選択されているオプションを "no" リストに転送することです。

このイベントハンドラーは、転送したい選択済みのオプションを 1 つの定数に、転送先のリスト内の既存のオプションを別の定数にまとめます。そして、オプションを転送するリストに対して `replaceChildren()` を呼び出し、スプレッド演算子を用いて両方の定数に含まれるすべてのオプションを渡します。

```js
const noSelect = document.getElementById("no");
const yesSelect = document.getElementById("yes");
const noBtn = document.getElementById("to-no");
const yesBtn = document.getElementById("to-yes");

yesBtn.addEventListener("click", () => {
  const selectedTransferOptions =
    document.querySelectorAll("#no option:checked");
  const existingYesOptions = document.querySelectorAll("#yes option");
  yesSelect.replaceChildren(...selectedTransferOptions, ...existingYesOptions);
});

noBtn.addEventListener("click", () => {
  const selectedTransferOptions = document.querySelectorAll(
    "#yes option:checked",
  );
  const existingNoOptions = document.querySelectorAll("#no option");
  noSelect.replaceChildren(...selectedTransferOptions, ...existingNoOptions);
});
```

最終的な結果は次のようになります。

{{EmbedLiveSample('Transferring_nodes_between_elements', '100%', '350')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.prepend()")}}
- {{domxref("Element.append()")}}
- {{domxref("NodeList")}}
