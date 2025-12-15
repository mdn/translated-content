---
title: z-index を理解する
slug: Web/CSS/Guides/Positioned_layout/Understanding_z-index
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

最も基本的な場合では、[HTML](/ja/docs/Web/HTML) のページは二次元であると考えることができ、テキスト、画像、その他の要素が重なることなくページに並べられます。この場合、単一のレンダリングの流れがあり、すべての要素で他の要素との間で取る間隔が分かっています。CSS はそれほど単純ではありません。CSS の位置指定、座標変換、コンテナー機能、その他の機能により、要素が重なることがあります。このガイドでは、同じ[重ね合わせコンテキスト](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)内で要素を他の要素の前または後ろに配置できる {{cssxref("z-index")}} プロパティを紹介します。

## Z 軸のレイヤー

ページ上に描画される要素は一連のボックスで構成されます。各ボックスには 3 つの次元の位置があります。インライン位置やブロック位置に加え、ボックスは Z 軸と呼ばれる第 3 の次元にも存在します。要素ボックスが視覚的に重なる場合、要素ボックスの Z 軸位置を制御することが特に重要になります。複数のプロパティ値が要素の重なりを発生させます。 {{cssxref("z-index")}} プロパティは、それらの重なり方を制御する方法を提供します。

デフォルトでは、要素ボックスはレイヤー 0 上にレンダリングされます。`z-index` プロパティを使用すると、デフォルトのレンダリングレイヤーに加えて、Z 軸に沿って異なるレイヤー上に要素を配置できます。各要素の仮想的な Z 軸上の位置（z-index 値）は整数（正の値、負の値、または 0）で表され、レンダリング時の積み重ね順序を制御します。数値が大きいほど、要素は観察者に近い位置に配置されます。

「z 軸」という用語に馴染みがなければ、ページを層の積み重ねと想像してください。それぞれの層には番号が割り当てられており、数値順にレンダリングされます。大きい数値の層は小さい数値の層の上に現れます（下表の X は任意の正の整数を表します）。

| レイヤー       | 説明                              |
| -------------- | --------------------------------- |
| 最下位レイヤー | 観察者から最も遠い                |
| レイヤー -X    | 負の `z-index` の値を持つレイヤー |
| レイヤー 0     | デフォルトのレンダリングレイヤー  |
| レイヤー X     | 正の `z-index` の値を持つレイヤー |
| 最上位レイヤー | 観察者に最も近い                  |

## 通常フローでの要素

デフォルトで、`z-index`プロパティが指定されていない場合、要素はデフォルトのレンダリングレイヤー（レイヤー 0）に描画されます。

以下の 3 つの要素があったとします。

```html live-sample___example1 live-sample___example2 live-sample___example3
<div id="div1">#1</div>
<div id="div2">#2</div>
<div id="div3">#3</div>
```

位置指定プロパティが適用されていない場合、この要素は文書内の通常通り流れ、重なり合うことなく次々に配置されます。

```css live-sample___example1 live-sample___example2 live-sample___example3 live-sample___example4
div {
  height: 100px;
  width: 100px;
  outline: 1px dotted;
  line-height: 100px;
  font-size: 40px;
  text-align: center;
  font-family: "Helvetica", "Arial", sans-serif;
}

#div1 {
  background-color: lightpink;
}

#div2 {
  background-color: lightyellow;
}

#div3 {
  background-color: lightgreen;
}
```

{{EmbedLiveSample("Example1", 600, 340)}}

## 既定のレイヤーの動作

要素を重なり合わせるに、[位置指定](/ja/docs/Web/CSS/Reference/Properties/position#位置指定の種類)を行います。絶対位置指定で（ほぼ）同じ位置に配置した場合、デフォルトの重なり順序はソース順序に従います。つまり、HTML の最初の要素が最下層に、最後の要素が最上層に表示されます。

```css live-sample___example2 live-sample___example3 live-sample___example4
div {
  position: absolute;
}

#div1 {
  top: 0;
  left: 0;
}

#div2 {
  top: 10px;
  left: 10px;
}

#div3 {
  top: 20px;
  left: 20px;
}
```

{{EmbedLiveSample("Example2", 600, 130)}}

## レイヤーの並べなおし

CSS の {{cssxref("z-index")}} プロパティを使用して、それぞれの要素を Z 軸方向に位置指定することができ、その結果、重ね合わせ順序を並べなおすことができます。

`z-index` 値を追加することで、既定のレイヤー順を変更します。

```css live-sample___example3 live-sample___example4
#div1 {
  z-index: 5;
}

#div2 {
  z-index: -9;
}

#div3 {
  z-index: 0;
}
```

{{EmbedLiveSample("Example3", 600, 130)}}

`z-index` 値が最も小さい要素は最下層に現れます。`z-index` 値が最も大きい要素は最上層に現れます。この例では `-9` が最小値であるため、`#div2` は他のすべての要素の後ろに配置されます。ソース順序でまず現れる要素である `#div1` は最大値を持つため、他のすべての要素の上に現れます。

## 重ね合わせコンテキストの影響

`z-index` を使用することは、一見するととても直感的に見えます。単一のプロパティに設定された単一の整数で、一見すると分かりやすい動作です。複雑な HTML 要素の階層構造に `z-index` を適用すると、その結果として生じる動作を理解したり予測したりするのが難しいと感じる人が多くいます。

要素が兄弟要素でない場合、それぞれの要素が異なる[重ね合わせコンテキスト](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)に属する可能性があるため、重ね合わせの挙動はより複雑になる可能性があります。これは下記例で示されています。

```html live-sample___example4
<section>
  <div id="div1">#1</div>
  <div id="div2">#2</div>
</section>
<div id="div3">#3</div>
```

```css live-sample___example4
section {
  position: absolute;
  z-index: 2;
}
```

{{EmbedLiveSample("Example4", 600, 130)}}

`#div3` の `z-index` 値 (`0`) が `#div2` のもの (`-9`) よりも大きいにかかわらず、`#div2` は `#div3` の上に表示されます。これは、`#div1` と `#div2` が `<section>` によって作成された別の重ね合わせコンテキストに含まれているからです。この `<section>` 要素と `#div3` は兄弟であり、`<section>` 要素の z-index は `#div3` のものよりも大きい (`2` 対 `0`) ので、`#div3` は `<section>` やすべての `<section>` のコンテンツの背後に配置されます。この件について詳しくは、[重ね合わせコンテキスト](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)ガイドを参照してください。

## まとめ

このガイドで見てきたように、`z-index` は要素が Z 軸に沿ってどのように重ね合わせられるかを制御する方法を提供します。`z-index` プロパティの整数値を使用することができます。これにより、重ね合わせ順を変更できることを学びました。しかし、最後の例で示したように、重ね合わせ順は複雑になる可能性があります。重ね合わせ順は一連の複雑な重ね合わせ規則に従い、すべてのブラウザーが同一コンテンツを同一方式で重ね合わせることを確実に実現し、一貫性と予測可能性を提供します。[重ね合わせコンテキストを作成する機能](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context#features_creating_stacking_contexts)と、[入れ子になった重ね合わせコンテキスト](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context#nested_stacking_contexts)がレイヤー順序に与える影響を理解することが重要です。

## 関連情報

- [`z-index` プロパティなしの重ね合わせ](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_without_z-index)
- [浮動ボックスの重ね合わせ](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_floating_elements)
- [`z-index` の使用](/ja/docs/Web/CSS/Guides/Positioned_layout/Using_z-index)
- [重ね合わせコンテキスト](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
- [CSS 位置指定レイアウト](/ja/docs/Web/CSS/Guides/Positioned_layout)モジュール
