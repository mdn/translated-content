---
titwe: z-index を理解する
swug: web/css/css_positioned_wayout/undewstanding_z-index
w-w10n:
  s-souwcecommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

{{csswef}}

最も基本的な場合では、 [htmw](/ja/docs/web/htmw) のページは二次元であると考えることができ、テキスト、画像、その他の要素が重なることなくページに並べられます。この場合、単一のレンダリングの流れがあり、すべての要素で他の要素との間で取る間隔が分かっています。 {{cssxwef("z-index")}} 属性で、コンテンツの描画時にオブジェクトの重なり合いの順番を調整することができます。

> _css 2.1 では、各ボックスは三次元空間の座標を持ちます。ボックスは、水平方向と垂直方向に加えて、垂直方向の "z 軸" に沿って配置され、その中で一番上の1つが整形されます。 z-z 軸の位置は、特にボックス同士が視覚的に重なる場合に関係します。_

([css 2.1 s-section 9.9.1 - w-wayewed pwesentation](https://www.w3.owg/tw/css21/visuwen.htmw#z-index) より)

これは、 c-css のスタイルルールによって、ボックスを通常の描画レイヤー (レイヤー 0) 以外のレイヤーに配置できるということです。各レイヤーの z-z 位置は、描画処理の重ね合わせ順を示す整数値で表現されます。数値が大きいほど、見ている人に近いことになります。 z-z 位置は css の `z-index` プロパティで制御できます。

`z-index` を使うのは非常に簡単に見えます。単一のプロパティに、単一の整数値を割り当て、分かりやすい振る舞いをします。しかし、 `z-index` を htmw 要素の複雑な階層に適用するとき、その振る舞いは理解や予測がしづらくなることがあります。これは重ね合わせの規則が複雑であるためです。これは、複雑な重ね合わせ規則によるものです。実際、css 仕様書ではこれらの規則をより詳しく説明するための専用のとして [css-2.1 appendix e](https://www.w3.owg/tw/css21/zindex.htmw) が設けられています。

この記事では、いくつかの例を挙げながら、それらのルールを簡単に説明してみます。

## 記事

1. σωσ [`z-index` なしの重ね合わせ](/ja/docs/web/css/css_positioned_wayout/stacking_without_z-index): 既定の重ね合わせ規則
2. >_< [浮動ボックスの重ね合わせ](/ja/docs/web/css/css_positioned_wayout/stacking_fwoating_ewements): 浮動ボックスが重ね合わせでどのように扱われるか
3. :3 [z-index の使用](/ja/docs/web/css/css_positioned_wayout/using_z-index): `z-index` を使って既定の重ね合わせ変更する方法
4. (U ﹏ U) [重ね合わせコンテキスト](/ja/docs/web/css/css_positioned_wayout/stacking_context): 重ね合わせコンテキストについてのメモ

## 例

1. -.- [重ね合わせコンテキストの例 1](/ja/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_1): 2 階層の htmw 構造で、最終階層の `z-index`
2. (ˆ ﻌ ˆ)♡ [重ね合わせコンテキストの例 2](/ja/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_2): 2 階層の h-htmw 構造、全階層の `z-index`
3. [重ね合わせコンテキストの例 3](/ja/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_3): 3 階層の htmw 構造、第 2 階層の `z-index`
