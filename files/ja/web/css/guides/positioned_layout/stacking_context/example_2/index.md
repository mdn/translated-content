---
title: 重ね合わせコンテキストの例 2
slug: Web/CSS/Guides/Positioned_layout/Stacking_context/Example_2
original_slug: Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_2
l10n:
  sourceCommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

## 解説

これはとても簡単な例ですが、「重ね合わせコンテキスト」の概念を理解するカギになります。前の例には同じ 4 つの DIV 要素がありましたが、今度は両方の階層構造で `z-index` プロパティが設定されています。

DIV #2 (`z-index`: 2) が DIV #3 (`z-index`: 1) よりも上にあることがわかります。これは、どちらも同じ重ね合わせコンテキスト（ルートのもの）に属していて、z-index 値が要素の重なり方を決めているからです。

変に思えるかもしれないのは、`z-index` の値に関わらず、DIV #2 (`z-index`: 2) が DIV #4 (`z-index`: 10) よりも上にあることです。この理由は、これらの要素が同一の重ね合わせコンテキストに属していないためです。DIV #4 は DIV #3 によって作られた重ね合わせコンテキストに所属していて、以前の説明にあるように DIV #3 (とその内部にあるものすべて) は DIV #2 よりも下にあります。

状況をもっとよく理解するために、重ね合わせコンテキストの階層構造を示します。

- ルートの重ね合わせコンテキスト
  - DIV #2 (`z-index`: 2)
  - DIV #3 (`z-index`: 1)
    - DIV #4 (`z-index`: 10)

> [!NOTE]
> 一般に、 HTML の階層構造と重ね合わせコンテキストの階層構造は異なるということを覚えておくと良いでしょう。重ね合わせコンテキストの階層構造では、重ね合わせコンテキストを作らない要素はその親要素に吸収されます。

## 例

### HTML

```html live-sample___example
<div id="div1">
  <br />
  <span class="bold">DIV #1</span><br />
  position: relative;
  <div id="div2">
    <br />
    <span class="bold">DIV #2</span><br />
    position: absolute;<br />
    z-index: 2;
  </div>
</div>

<br />

<div id="div3">
  <br />
  <span class="bold">DIV #3</span><br />
  position: relative;<br />
  z-index: 1;
  <div id="div4">
    <br />
    <span class="bold">DIV #4</span><br />
    position: absolute;<br />
    z-index: 10;
  </div>
</div>
```

### CSS

```css live-sample___example
div {
  font: 12px Arial;
}

span.bold {
  font-weight: bold;
}

#div2 {
  z-index: 2;
}
#div3 {
  z-index: 1;
}
#div4 {
  z-index: 10;
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
  position: absolute;
  width: 200px;
  height: 70px;
  top: 65px;
  left: 50px;
  border: 1px dashed #000099;
  background-color: #ddddff;
  text-align: left;
  padding-left: 10px;
}
```

## 結果

{{ EmbedLiveSample('Example', '352', '270') }}

## 関連情報

- [`z-index` なしの重ね合わせ](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_without_z-index): `z-index` が使用されなかった場合に適用される既定の重ね合わせ規則
- [浮動ボックスの重ね合わせ](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_floating_elements): 浮動ボックスが重ね合わせでどのように扱われるか
- [z-index の使用](/ja/docs/Web/CSS/Guides/Positioned_layout/Using_z-index): `z-index` を使って既定の重ね合わせ変更する方法
- [重ね合わせコンテキスト](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context): 重ね合わせコンテキストについてのメモ
- [重ね合わせコンテキストの例 1](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_1): 2 階層の HTML 構造で、最終階層の `z-index`
- [重ね合わせコンテキストの例 3](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context/Example_3): 3 階層の HTML 構造、第 2 階層の `z-index`
