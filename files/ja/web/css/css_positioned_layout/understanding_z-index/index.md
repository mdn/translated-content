---
title: CSS の z-index を理解する
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index
---

{{CSSRef}}

最も基本的な場合では、 [HTML](/ja/docs/Web/HTML) のページは二次元であると考えることができ、テキスト、画像、その他の要素が重なることなくページに並べられます。この場合、単一のレンダリングの流れがあり、すべての要素で他の要素との間で取る間隔が分かっています。{{cssxref("z-index")}} 属性で、コンテンツの描画時にオブジェクトの重なり合いの順番を調整することができます。

> _CSS 2.1 では、各ボックスは三次元空間の座標を持ちます。ボックスは、水平方向と垂直方向に加えて、垂直方向の "z 軸" に沿って配置され、その中で一番上の1つが整形されます。 Z 軸の位置は、特にボックス同士が視覚的に重なる場合に関係します。_

([CSS 2.1 Section 9.9.1 - Layered presentation](https://www.w3.org/TR/CSS21/visuren.html#z-index) より)

これは、 CSS のスタイルルールによって、ボックスを通常の描画レイヤー (レイヤー 0) 以外のレイヤーに配置できるということです。各レイヤーの Z 位置は、描画処理の重ね合わせ順を示す整数値で表現されます。数値が大きいほど、見ている人に近いことになります。 Z 位置は CSS の `z-index` プロパティで制御できます。

`z-index` を使うのは非常に簡単に見えます。単一のプロパティに、単一の整数値を割り当て、分かりやすい振る舞いをします。しかし、 `z-index` を HTML 要素の複雑な階層に適用するとき、その振る舞いは理解や予測がしづらくなることがあります。これは重ね合わせの規則が複雑であるためです。これは、複雑な重ね合わせ規則によるものです。実際、CSS 仕様書ではこれらの規則をより詳しく説明するための専用のとして [CSS-2.1 Appendix E](https://www.w3.org/TR/CSS21/zindex.html) が設けられています。

この記事では、いくつかの例を挙げながら、それらのルールを簡単に説明してみます。

1. [`z-index` なしの重ね合わせ](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index): 既定の重ね合わせ規則
2. [浮動ブロックの重ね合わせ](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_and_float): 浮動要素が重ね合わせでどのように扱われるか
3. [z-index の使用](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index): `z-index` を使って既定の重ね合わせ変更する方法
4. [重ね合わせコンテキスト](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context): 重ね合わせコンテキストについてのメモ
5. [重ね合わせコンテキストの例 1](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1): 2 階層の HTML 構造で、最終階層の `z-index`
6. [重ね合わせコンテキストの例 2](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2): 2 階層の HTML 構造、全レベルの `z-index`
7. [重ね合わせコンテキストの例 3](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3): 3 階層の HTML 構造、第 2 階層の `z-index`
