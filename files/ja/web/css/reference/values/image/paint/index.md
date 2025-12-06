---
title: paint()
slug: Web/CSS/Reference/Values/image/paint
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

**`paint()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、 PaintWorklet で生成された {{cssxref("&lt;image&gt;")}} の値を定義します。

## 構文

```css
paint(workletName, ...parameters)
```

凡例

- _workletName_
  - : 登録された Worklet の名前です。
- _parameters_
  - : PaintWorklet へ渡される省略可能な追加の引数です。

## 形式文法

{{CSSSyntax}}

## 例

### 基本的な CSS paint() の使用例

次の HTML があったとします。

```html live-sample___example-boxbg
<ul>
  <li>アイテム 1</li>
  <li>アイテム 2</li>
  <li>アイテム 3</li>
  <li>アイテム 4</li>
  <li>アイテム 5</li>
  <li>アイテム 6</li>
  <li>アイテム 7</li>
  <li>アイテム 8</li>
  <li>アイテム 9</li>
  <li>アイテム 10</li>
  <li>アイテム N</li>
</ul>
```

JavaScript では、[描画ワークレット](/ja/docs/Web/API/PaintWorkletGlobalScope)を登録します。

```js live-sample___example-boxbg
CSS.paintWorklet.addModule(
  "https://mdn.github.io/houdini-examples/cssPaint/intro/worklets/boxbg.js",
);
```

CSS では、`background-image` を `paint()` 型として定義し、ワークレット名 `boxbg` をつけて、ワークレットが使用する変数（例：`--box-color` および `--width-subtractor`）を指定します。

```css live-sample___example-boxbg
body {
  font: 1.2em / 1.2 sans-serif;
}
li {
  background-image: paint(boxbg);
  --box-color: hsl(55 90% 60%);
}

li:nth-of-type(3n) {
  --box-color: hsl(155 90% 60%);
  --width-subtractor: 20;
}

li:nth-of-type(3n + 1) {
  --box-color: hsl(255 90% 60%);
  --width-subtractor: 40;
}
```

{{EmbedLiveSample("example-boxbg", "", "300px")}}

### 引数付きの CSS paint()

CSS の `paint()` 関数ではオプション引数を渡すことができます。この例では、リストアイテムのグループにおける `background-image` を `filled`（塗りつぶし）にするか `stroke`（ストローク）の輪郭線を持つかを制御する 2 つの引数と、その輪郭線の `width`（幅）を渡しています。

```html hidden live-sample___example-highlight
<ul>
  <li>アイテム 1</li>
  <li>アイテム 2</li>
  <li>アイテム 3</li>
  <li>アイテム 4</li>
  <li>アイテム 5</li>
  <li>アイテム 6</li>
  <li>アイテム 7</li>
  <li>アイテム 8</li>
  <li>アイテム 9</li>
  <li>アイテム 10</li>
  <li>アイテム N</li>
</ul>
```

```js hidden live-sample___example-highlight
CSS.paintWorklet.addModule(
  "https://mdn.github.io/houdini-examples/cssPaint/intro/worklets/hilite.js",
);
```

```css live-sample___example-highlight
body {
  font: 1.2em / 1.2 sans-serif;
}

li {
  --box-color: hsl(55 90% 60% / 100%);
  background-image: paint(hollow-highlights, stroke, 2px);
}

li:nth-of-type(3n) {
  --box-color: hsl(155 90% 60% / 100%);
  background-image: paint(hollow-highlights, filled, 3px);
}

li:nth-of-type(3n + 1) {
  --box-color: hsl(255 90% 60% / 100%);
  background-image: paint(hollow-highlights, stroke, 1px);
}
```

boxColor を定義しているセレクターブロックにカスタムプロパティを設定しました。カスタムプロパティは PaintWorklet にアクセスすることができます。

{{EmbedLiveSample("example-highlight", "", "300px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref('PaintWorkletGlobalScope')}}
- [CSS 描画 API](/ja/docs/Web/API/CSS_Painting_API)
- [CSS 描画 API の使用](/ja/docs/Web/API/CSS_Painting_API/Guide)
- {{cssxref("&lt;image&gt;")}}
- [キャンバス API](/ja/docs/Web/API/Canvas_API)
