---
title: perspective
slug: Web/CSS/perspective
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{CSSRef}}

**`perspective`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 z=0 の平面とユーザーとの間の距離を定めて 3D に配置された要素に遠近感を与えます。

{{EmbedInteractiveExample("pages/css/perspective.html")}}

## 構文

```css
/* キーワード値 */
perspective: none;

/* <length> 値 */
perspective: 20px;
perspective: 3.5em;

/* グローバル値 */
perspective: inherit;
perspective: initial;
perspective: revert;
perspective: revert-layer;
perspective: unset;
```

### 値

- `none`
  - : 立体的な座標変換を一切適用しないことを示すキーワードです。
- `<length>`
  - : ユーザーと z=0 平面間の距離を表す {{cssxref("&lt;length&gt;")}} です。立体的な座標変換を要素とその内容に適用するときに使います。 `0` や負の値ならば、立体的な座標変換は適用されません。

## 解説

z>0 である 3D 要素はより大きく、 z<0 である 3D 要素はより小さくなります。効果の強度はこのプロパティの値から決められます。

ユーザーの背後にある 3D 要素の部品、つまり z 軸座標が CSS の `perspective` プロパティの値より大きい要素は描画されません。

*消点*は既定で要素の中心に置かれますが、この位置は {{cssxref("perspective-origin")}} プロパティで変更できます。

このプロパティを `0` と `none` 以外の値で使用すると、新たな[重ね合わせコンテキスト](/ja/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)を生成します。また、その場合、オブジェクトはそれを含む `position: fixed` の要素の包含ブロックとして動作します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 視点の設定

視点を様々な位置に設定した場合に立体がどのように変化するかを示す例は、 [CSS 座標変換の使用 > 視点の設定](/ja/docs/Web/CSS/CSS_transforms/Using_CSS_transforms#setting_perspective)にあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 座標変換の使用](/ja/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
