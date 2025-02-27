---
title: 重ね合わせコンテキストの例 1
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_1
l10n:
  sourceCommit: e1b6d7d2d02a07f7e86268c81678713fad4d9a5d
---

{{CSSRef}}

## 解説

基礎的な例から始めましょう。ルートの重ね合わせコンテキストに、2 つの DIV (DIV #1 と DIV #3) があって、どちらも relative の位置指定がされていますが、 z-index プロパティの指定はありません。 DIV #1 の中に absolute の位置指定がされた DIV #2 があり、一方 DIV #3 の中には absolute の位置指定がされた DIV #4 があります。どちらも z-index プロパティの指定はありません。

唯一の重ね合わせコンテキストはルート要素にあります。 z-indexe がなければ要素は出現した順に重なります。

![重ね合わせコンテキストの例 1](understanding_zindex_05a.png)

DIV #2 に正の (ゼロでなく auto でもない) z-index 値が代入されれば、他のどの DIV よりも上に描画されます。

![重ね合わせコンテキストの例 1](understanding_zindex_05b.png)

さらにまた、DIV #4 に DIV #2 のものより大きな正の z-index が代入されれば、DIV #4 は、DIV #2を含む他のどの要素よりも上に描画されます。

![重ね合わせコンテキストの例 1](understanding_zindex_05c.png)

最後に見た例では、 DIV #2 と DIV #4 が兄弟要素ではないことがわかります。これは、HTML 要素の階層構造においては、それぞれ別の親要素を持っているからです。そうだとしても、DIV #4 と DIV #2 間の重なり順は、z-index を使って制御できます。たまたま、DIV #1 と DIV #3 には z-index 値が代入されていなかったため、重ね合わせコンテキストを作らなかったのです。これは、DIV #2 と DIV #4 を含むそれら要素の中身がどれも、同一のルートの重ね合わせコンテキストに含まれるということです。

重ね合わせコンテキストの見地からは、DIV #1 と DIV #3 は単にルート要素に吸収され、結果の階層構造は次のようになっています:

- ルートの重ね合わせコンテキスト

  - DIV #2 (`z-index`: 1)
  - DIV #4 (`z-index`: 2)

> [!NOTE]
> DIV #1 と DIV #3 は半透明ではありません。位置指定された要素に1未満の不透明度を与えると、ちょうど z-index 値を追加したのと同じように、暗黙的に重ね合わせコンテキストが作られることを忘れないのは大切です。また、この例は、親要素が重ね合わせコンテキストを作らないときに、何が起こるのかを示しています。

## 例

### HTML

```html
<div id="div1">
  <br /><span class="bold">DIV #1</span> <br />position: relative;
  <div id="div2">
    <br /><span class="bold">DIV #2</span> <br />position: absolute;
    <br />z-index: 1;
  </div>
</div>

<br />

<div id="div3">
  <br /><span class="bold">DIV #3</span> <br />position: relative;
  <div id="div4">
    <br /><span class="bold">DIV #4</span> <br />position: absolute;
    <br />z-index: 2;
  </div>
</div>
```

### CSS

```css
.bold {
  font-family: Arial;
  font-size: 12px;
  font-weight: bold;
}

#div1,
#div3 {
  height: 80px;
  position: relative;
  border: 1px dashed #669966;
  background-color: #ccffcc;
  padding-left: 5px;
}

#div2 {
  opacity: 0.8;
  z-index: 1;
  position: absolute;
  width: 150px;
  height: 200px;
  top: 20px;
  left: 170px;
  border: 1px dashed #990000;
  background-color: #ffdddd;
  text-align: center;
}

#div4 {
  opacity: 0.8;
  z-index: 2;
  position: absolute;
  width: 200px;
  height: 80px;
  top: 65px;
  left: 50px;
  border: 1px dashed #000099;
  background-color: #ddddff;
  text-align: left;
  padding-left: 10px;
}
```

### 結果

{{ EmbedLiveSample('Example', '', '300') }}

## 関連情報

- [z-index なしの重ね合わせ](/ja/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index): `z-index` が使用されなかった場合に適用される既定の重ね合わせ規則
- [浮動ブロックの重ね合わせ](/ja/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_floating_elements): 浮動要素が重ね合わせでどのように扱われるか
- [z-index の使用](/ja/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index): `z-index` を使って既定の重ね合わせ変更する方法
- [重ね合わせコンテキスト](/ja/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context): 重ね合わせコンテキストについてのメモ
- [重ね合わせコンテキストの例 2](/ja/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_2): 2 階層の HTML 構造、全レベルの `z-index`
- [重ね合わせコンテキストの例 3](/ja/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_3): 3 階層の HTML 構造、第 2 階層の `z-index`
