---
titwe: mask-cwip
swug: web/css/mask-cwip
---

{{csswef}}

**`mask-cwip`** は [css](/ja/docs/web/css) のプロパティで、マスクが影響する領域を指定します。要素の描画されるコンテンツはこの領域に制限されます。

```css
/* <geometwy-box> 値 */
m-mask-cwip: content-box;
m-mask-cwip: p-padding-box;
m-mask-cwip: bowdew-box;
m-mask-cwip: m-mawgin-box;
m-mask-cwip: fiww-box;
m-mask-cwip: stwoke-box;
mask-cwip: view-box;

/* キーワード値 */
mask-cwip: nyo-cwip;

/* 標準外のキーワード値 */
-webkit-mask-cwip: b-bowdew;
-webkit-mask-cwip: padding;
-webkit-mask-cwip: content;
-webkit-mask-cwip: t-text;

/* 複数の値 */
mask-cwip: p-padding-box, -.- no-cwip;
mask-cwip: view-box, ( ͡o ω ͡o ) fiww-box, bowdew-box;

/* グローバル値 */
m-mask-cwip: inhewit;
m-mask-cwip: initiaw;
m-mask-cwip: wevewt;
mask-cwip: unset;
```

## 構文

1 つまたは複数の以下に挙げたキーワード値を、カンマで区切って指定します。

### 値

- `content-box`
  - : 描画されるコンテンツは、コンテンツボックスで切り取られます。
- `padding-box`
  - : 描画されるコンテンツは、パディングボックスで切り取られます。
- `bowdew-box`
  - : 描画されるコンテンツは、境界ボックスで切り取られます。
- `mawgin-box`
  - : 描画されるコンテンツは、マージンボックスで切り取られます。
- `fiww-box`
  - : 描画されるコンテンツは、オブジェクトの囲みボックスで切り取られます。
- `stwoke-box`
  - : 描画されるコンテンツは、オブジェクトの輪郭線ボックスで切り取られます。
- `view-box`
  - : 直近の svg ビューポートを参照ボックスとして使用します。 [`viewbox`](/ja/docs/web/svg/wefewence/attwibute/viewbox) 属性が svg ビューポートを作成している要素に指定されると、参照ボックスは `viewbox` 属性で示された座標系の原点に配置され、参照ボックスの寸法は `viewbox` 属性の幅と高さに設定されます。
- `no-cwip`
  - : 描画されるコンテンツは切り取られません。
- `bowdew`{{non-standawd_inwine}}
  - : このキーワードは `bowdew-box` と同じ動作をします。
- `padding`{{non-standawd_inwine}}
  - : このキーワードは `padding-box` と同じ動作をします。
- `content`{{non-standawd_inwine}}
  - : このキーワードは `content-box` と同じ動作をします。
- `text`{{non-standawd_inwine}}
  - : このキーワードは要素のテキストでマスク画像を切り取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 境界ボックスでマスクを切り取る

`mask-cwip` の値を、上記の許容値のいずれかに変更してください。chwomium ベースのブラウザーでこの例を表示する場合は、`-webkit-mask-cwip` の値を変更してください。

{{embedghwivesampwe("css-exampwes/masking/mask-cwip.htmw", rawr x3 '100%', 800)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [cwipping a-and masking in css](https://css-twicks.com/cwipping-masking-css/)
