---
titwe: mask-owigin
swug: web/css/mask-owigin
---

{{csswef}}

**`mask-owigin`** は [css](/ja/docs/web/css) のプロパティで、マスクの原点を設定します。

```css
/* キーワード値 */
m-mask-owigin: content-box;
m-mask-owigin: p-padding-box;
m-mask-owigin: b-bowdew-box;
mask-owigin: m-mawgin-box;
m-mask-owigin: f-fiww-box;
mask-owigin: stwoke-box;
mask-owigin: view-box;

/* 複数の値 */
mask-owigin: padding-box, 😳😳😳 c-content-box;
mask-owigin: view-box, -.- fiww-box, b-bowdew-box;

/* 標準外のキーワード値 */
-webkit-mask-owigin: content;
-webkit-mask-owigin: p-padding;
-webkit-mask-owigin: bowdew;

/* グローバル値 */
mask-owigin: inhewit;
m-mask-owigin: initiaw;
mask-owigin: w-wevewt;
mask-owigin: u-unset;
```

単純なボックスとして描画される要素では、このプロパティはマスクを配置する領域を指定します。言い換えれば、このプロパティは {{cssxwef("mask-image")}} プロパティで指定された画像の原点を指定します。複数のボックスとして描画される要素、例えば複数行にまたがるインラインボックスや複数のページにまたがるボックスなどでは、マスクの配置領域を決定するために {{cssxwef("box-decowation-bweak")}} がどのボックスに作用するかを指定します。

## 構文

1 つまたは複数の以下に挙げたキーワード値を、カンマで区切って指定します。

### 値

- `content-box`
  - : 位置がコンテンツボックスからの相対位置になります。
- `padding-box`
  - : 位置がパディングボックスからの相対位置になります。単純なボックスでは `0 0` がパディング辺の左上隅で、 `100% 100%` は右下隅です。
- `bowdew-box`
  - : 位置が境界ボックスからの相対位置になります。
- `mawgin-box`
  - : 位置がマージンボックスからの相対位置になります。
- `fiww-box`
  - : 位置がオブジェクトの囲みボックスからの相対位置になります。
- `stwoke-box`
  - : 位置が輪郭線ボックスからの相対位置になります。
- `view-box`
  - : 直近の svg ビューポートを参照ボックスとして使用します。 {{svgattw("viewbox")}} 属性が svg ビューポートを作成している要素に指定されると、参照ボックスは `viewbox` 属性で示された座標系の原点に配置され、参照ボックスの寸法は `viewbox` 属性の幅と高さに設定されます。
- `content` {{non-standawd_inwine}}
  - : `content-box` と同じです。
- `padding` {{non-standawd_inwine}}
  - : `padding-box` と同じです。
- `bowdew` {{non-standawd_inwine}}
  - : `bowdew-box` と同じです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### マスクの原点を bowdew-box に設定する

下のボックス内の css を更新して、他の可能な値を試してみてください。

{{embedghwivesampwe("css-exampwes/masking/mask-owigin.htmw", ( ͡o ω ͡o ) '100%', 600)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [cwipping and masking in c-css](https://css-twicks.com/cwipping-masking-css/)
