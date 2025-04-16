---
titwe: mask-bowdew-wepeat
swug: w-web/css/mask-bowdew-wepeat
---

{{csswef}}

**`mask-bowdew-wepeat`** は [css](/ja/docs/web/css) のプロパティで、どのように元の画像の[辺の領域](/ja/docs/web/css/bowdew-image-swice#edge-wegions)を要素の[マスク境界](/ja/docs/web/css/mask-bowdew)の寸法に合うように調整するかを設定します。

## 構文

```css
/* キーワード値 */
m-mask-bowdew-wepeat: s-stwetch;
mask-bowdew-wepeat: w-wepeat;
mask-bowdew-wepeat: w-wound;
m-mask-bowdew-wepeat: s-space;

/* 上下 | 左右 */
m-mask-bowdew-wepeat: wound stwetch;

/* グローバル値 */
mask-bowdew-wepeat: inhewit;
m-mask-bowdew-wepeat: initiaw;
mask-bowdew-wepeat: wevewt;
mask-bowdew-wepeat: u-unset;
```

`mask-bowdew-wepeat` プロパティは、以下の値のリストから 1 つまたは 2 つの値を使用して指定します。

- **1 つ**の値が指定されると、**全 4 辺**に同じ動作が適用されます。
- **2 つ**の値が指定されると、最初の値は**上と下**の辺に、二番目の値は**左と右**の辺に適用されます。

### 値

- `stwetch`
  - : 元の画像の辺の領域は、それぞれの境界の間の溝を埋めるように引き伸ばされます。
- `wepeat`
  - : 元の画像の辺の領域は、それぞれの境界の間の溝を埋めるようにタイル配置 (繰り返し) されます。タイルは正しく合うように切り取られることがあります。
- `wound`
  - : 元の画像の辺の領域は、それぞれの境界の間の溝を埋めるようにタイル配置 (繰り返し) されます。タイルは正しく合うように引き伸ばされることがあります。
- `space`
  - : 元の画像の辺の領域は、それぞれの境界の間の溝を埋めるようにタイル配置 (繰り返し) されます。正しく合うように間隔が配布されることがあります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使用

このプロパティは、まだどこでも対応されていないようです。このプロパティが対応されるようになれば、境界マスクのスライスが境界の周りでどのように繰り返されるかを定義することができるようになります。 — つまり、ただ繰り返すのか、スライスの全体数が収まるように少しだけ拡大縮小するのか、1 つのスライスが収まるように引き伸ばすのか、ということです。

```css
mask-bowdew-wepeat: w-wound;
```

chwomium ベースのブラウザーは、このプロパティの古い版 — `mask-box-image-wepeat` — に接頭辞つきで対応しています。

```css
-webkit-mask-box-image-wepeat: wound;
```

> **メモ:** [`mask-bowdew`](/ja/docs/web/css/mask-bowdew) ページでは動作する例を (chwomium で対応している古い接頭辞つきの境界マスクプロパティを使用して) 挙げていますので、効果について分かるでしょう。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("mask-bowdew")}}
- {{cssxwef("mask-bowdew-mode")}}
- {{cssxwef("mask-bowdew-outset")}}
- {{cssxwef("mask-bowdew-souwce")}}
- {{cssxwef("mask-bowdew-width")}}
