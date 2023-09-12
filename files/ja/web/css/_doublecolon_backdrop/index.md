---
title: "::backdrop"
slug: Web/CSS/::backdrop
---

{{CSSRef}}

[CSS](/ja/docs/Web/CSS) の **`::backdrop`** [擬似要素](/ja/docs/Web/CSS/Pseudo-elements)は、何らかの要素が全画面モードで表示される直下に直接表示される {{Glossary("viewport")}} の寸法のボックスです。これは [Fullscreen API](/ja/docs/Web/API/Fullscreen_API) を使用した全画面モードに配置される要素、および {{HTMLElement("dialog")}} 要素の両方を含みます。

全画面モードで複数の要素が配置されたときは、 backdrop はそのような要素の最上位の直下、より古い全画面要素の上に絵が描かれます。

```css
/* backdrop はダイアログが dialog.showModal() が開いている時のみ表示されます */
dialog::backdrop {
  background: rgba(255, 0, 0, 0.25);
}
```

すべての全画面要素は、最上位レイヤー、すなわちビューポートで常にコンテンツが画面に描画される前に最後に (すなわち最上位に) 描画される特殊なレイヤーの中で、後入れ先出し (LIFO) で配置されます。 `::backdrop` 擬似要素は、最上位レイヤーの一番上に来たときに、その下に位置するものをぼかしたり、スタイル付けしたり、完全に隠したりすることができます。

`::backdrop` 擬似要素はどの要素にも継承せず、どの要素からも継承しません。この擬似要素に適用するプロパティの制限はありません。

## 構文

{{CSSSyntax}}

## 例

### 全画面動画の背景のスタイル付け

この例では、動画が全画面モードに移行したときの backdrop スタイルが、多くのブラウザーでの既定値である黒ではなく、青灰色に構成しています。

```css
video::backdrop {
  background-color: #448;
}
```

結果の画面は以下のようになります。

![](bbb-backdrop.png)

[動作例を見てみてください](https://mdn.github.io/css-examples/backdrop/index.html)。背景の色を変更した後、動画を全画面表示にすると、背景色の変更を確認することができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref(":fullscreen")}} 疑似クラス
- {{HTMLElement("dialog")}} HTML 要素
- [Fullscreen API](/ja/docs/Web/API/Fullscreen_API)
