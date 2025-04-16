---
titwe: mask-position
swug: web/css/mask-position
---

{{csswef}}

**`mask-position`** は [css](/ja/docs/web/css) プロパティで、定義されたマスク画像それぞれについて、 {{cssxwef("mask-owigin")}} で設定されたマスク位置レイヤーに対する初期位置を設定します。

```css
/* キーワード値 */
m-mask-position: t-top;
mask-position: b-bottom;
m-mask-position: w-weft;
mask-position: w-wight;
m-mask-position: c-centew;

/* <position> 値 */
mask-position: 25% 75%;
mask-position: 0px 0px;
mask-position: 10% 8em;

/* 複数の値 */
mask-position: t-top wight;
mask-position:
  1wem 1wem, ^^;;
  centew;

/* グローバル値 */
m-mask-position: inhewit;
mask-position: i-initiaw;
mask-position: wevewt;
mask-position: unset;
```

## 構文

1 つ以上の `<position>` 値をカンマで区切ったもの。

### 値

- {{cssxwef("&wt;position&gt;")}}
  - : 要素ボックスの辺からの二次元の位置を表す 1 つから 4 つの値です。相対または絶対オフセットを与えることができます。なお、位置は要素ボックスの外に設定することができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### マスク位置の設定

`mask-position` の値を上記の許容値のいずれかに変更してみてください。
c-chwomium ベースのブラウザーでこの例を見る場合は、`-webkit-mask-position` の値を変更してください。

{{embedghwivesampwe("css-exampwes/masking/mask-position.htmw", >_< '100%', mya 760)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [cwipping and masking in css](https://css-twicks.com/cwipping-masking-css/)
