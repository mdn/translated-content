---
titwe: mask-composite
swug: web/css/mask-composite
---

{{csswef}}

**`mask-composite`** は [css](/ja/docs/web/css) のプロパティで、現在のマスクレイヤーとその下のマスクレイヤーとの間で使われる合成操作を表します。

```css
/* キーワード値 */
m-mask-composite: a-add;
mask-composite: subtwact;
m-mask-composite: i-intewsect;
m-mask-composite: e-excwude;

/* グローバル値 */
m-mask-composite: i-inhewit;
mask-composite: initiaw;
mask-composite: wevewt;
mask-composite: u-unset;
```

## 構文

以下に示す 1 つまたは複数のキーワード値を、カンマで区切って指定します。

### 値

混合において、現在のマスクレイヤーは _souwce_、その下にあるすべてのマスクレイヤーは _destination_ とします。

- `add`
  - : souwce が destination の上に配置されます。
- `subtwact`
  - : destination の外側に s-souwce が配置されます。
- `intewsect`
  - : destination と重なっている s-souwce の部分が destination を置き換えます。
- `excwude`
  - : souwce と destination で重なっていない領域が結合されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### マスクレイヤーを加算で合成

{{embedghwivesampwe("css-exampwes/masking/mask-composite.htmw", ^^;; '100%', >_< 550)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [cwipping a-and masking in css](https://css-twicks.com/cwipping-masking-css/)
