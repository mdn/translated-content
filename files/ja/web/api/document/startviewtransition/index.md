---
title: "Document: startViewTransition() メソッド"
short-title: startViewTransition()
slug: Web/API/Document/startViewTransition
l10n:
  sourceCommit: baf0cb6bfe8bf2418122300d3f93e3aa94f72dca
---

{{APIRef("View Transition API")}}

**`startViewTransition()`** は {{domxref("Document")}} インターフェイスのメソッドで、新しい同一文書内 (SPA) の[ビュー遷移](/ja/docs/Web/API/View_Transition_API)を始め、それを表す {{domxref("ViewTransition")}} オブジェクトを返します。

`startViewTransition()` を呼び出すと、[ビュー遷移のプロセス](/ja/docs/Web/API/View_Transition_API/Using#ビュー遷移のプロセス)で説明されている一連の手順が続きます。

## 構文

```js-nolint
startViewTransition()
startViewTransition(updateCallback)
startViewTransition(options)
```

### 引数

- `updateCallback` {{optional_inline}}
  - : 通常、SPA のビュー遷移処理中に DOM を更新するために呼び出されるオプションのコールバック関数で、プロミス ({{jsxref("Promise")}}) を返します。このコールバックは、 API が現在のページのスナップショットを取得したときに呼び出されます。コールバックが返すプロミスが履行されると、次のフレームでビュー遷移が始まります。コールバックが返すプロミスが拒否された場合、トランジションは放棄されます。
- `options` {{optional_inline}}
  - : このビュー遷移を構成するためのオプションを含むオブジェクトです。以下のプロパティを置くことができます。
    - `update` {{optional_inline}}
      - : 前述の `updateCallback` 関数と同じものです。デフォルトは `null` です。
    - `types` {{optional_inline}}
      - : ビュー遷移に適用される型を表す文字列の配列です。[ビュー遷移型](/ja/docs/Web/API/View_Transition_API/Using_types)を使用すると、発生する遷移の種類に基づいて、CSS スタイルや JavaScript ロジックを選択的に適用することができます。デフォルトは空の配列です。

### 返値

{{domxref("ViewTransition")}} のオブジェクトインスタンスです。

## 例

完全な例のリストについては、[ビュー遷移 API > 例](/ja/docs/Web/API/View_Transition_API#例)を参照してください。

### 基本的な使い方

この同一文書内でのビュー遷移では、ブラウザーがビュー遷移に対応しているかどうかを確認します。
未対応の場合、代替手段を用いて背景色を設定し、即座に適用します。
対応している場合は、CSSで定義したアニメーションルールと共に、安全に `document.startViewTransition()` を呼び出すことができます。

```html
<main>
  <section></section>
  <button id="change-color">色を変更</button>
</main>
```

{{CSSXRef("::view-transition-group")}} を使用して、`animation-duration` を 2 秒に設定します。

```css
html {
  --bg: indigo;
}
main {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
section {
  background-color: var(--bg);
  height: 60px;
  border-radius: 5px;
}
::view-transition-group(root) {
  animation-duration: 2s;
}
```

```js
const colors = ["darkred", "darkslateblue", "darkgreen"];
const colBlock = document.querySelector("section");
let count = 0;
const updateColor = () => {
  colBlock.style = `--bg: ${colors[count]}`;
  count = count !== colors.length - 1 ? ++count : 0;
};
const changeColor = () => {
  // ビュー遷移に対応していないブラウザー向けの代替処理
  if (!document.startViewTransition) {
    updateColor();
    return;
  }

  // ビュー遷移を使用する場合
  const transition = document.startViewTransition(() => {
    updateColor();
  });
};
const changeColorButton = document.querySelector("#change-color");
changeColorButton.addEventListener("click", changeColor);
changeColorButton.addEventListener("keypress", changeColor);
```

ビュー遷移に対応している場合、ボタンをクリックすると、2 秒かけて色が徐々に変化します。
対応していない場合は、アニメーションなしで、代替方法を用いて背景色が設定されます。

{{EmbedLiveSample('color_change', '100%', '120')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.activeViewTransition")}}
- {{CSSXRef(":active-view-transition")}} 擬似クラス
- {{cssxref(":active-view-transition-type", ":active-view-transition-type()")}} 擬似クラス
- [ビュー遷移 API](/ja/docs/Web/API/View_Transition_API)
- [ビュー遷移 API の使用](/ja/docs/Web/API/View_Transition_API/Using)
- [ビュー遷移型の使用](/ja/docs/Web/API/View_Transition_API/Using_types)
- [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
