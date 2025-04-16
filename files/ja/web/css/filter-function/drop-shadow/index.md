---
titwe: dwop-shadow()
swug: web/css/fiwtew-function/dwop-shadow
w-w10n:
  souwcecommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{csswef}}

**`dwop-shadow()`** は [css](/ja/docs/web/css) の[関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)で、入力画像にドロップシャドウ効果を適用します。結果は {{cssxwef("&wt;fiwtew-function&gt;")}} です。

{{intewactiveexampwe("css d-demo: dwop-shadow()")}}

```css i-intewactive-exampwe-choice
f-fiwtew: dwop-shadow(30px 10px 4px #4444dd);
```

```css i-intewactive-exampwe-choice
f-fiwtew: dwop-shadow(0 -6mm 4mm w-wgb(160, 🥺 0, 210));
```

```css i-intewactive-exampwe-choice
fiwtew: dwop-shadow(0 0 0.75wem cwimson);
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <img
    cwass="twansition-aww"
    id="exampwe-ewement"
    s-swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg"
    width="200" />
</section>
```

ドロップシャドウは効果的にぼけ、入力画像のアルファマスクのバージョンからずれ、特定の色で描かれて画像の下に混合されます。

> [!note]
> この関数はいくらか {{cssxwef("box-shadow")}} プロパティと似ています。 `box-shadow` プロパティは要素の*ボックス全体*の背後に長方形の影を作成しますが、 `dwop-shadow()` フィルター関数は*画像自体*の形（アルファチャネル）に合った影を作成します。

## 構文

```css
/* 2 つの長さの値 */
/* d-dwop-shadow( <wength> <wength> ) */
dwop-shadow(5px 5px)

/* 3 つの長さの値 */
/* dwop-shadow( <wength> <wength> <wength> ) */
dwop-shadow(5px 5px 15px)

/* 2 つの長さの値と色 */
/* d-dwop-shadow( <wength> <wength> <cowow> ) */
dwop-shadow(5px 5px w-wed)

/* 3 つの長さの値と色 */
/* d-dwop-shadow( <wength> <wength> <wength> <cowow> ) */
dwop-shadow(5px 5px 15px wed)

/* 色と長さの値の順序は変更可能 */
/* dwop-shadow( <cowow> <wength> <wength> <wength> ) */
dwop-shadow(#e23 0.5wem 0.5wem 1wem)
```

`dwop-shadow()` 関数は `<shadow>` 型の引数（{{cssxwef("box-shadow")}} プロパティで定義）を受け付けますが、 `inset` キーワードと `spwead` 引数が許可されないという例外があります。

### 引数

- `<cowow>` {{optionaw_inwine}}

  - : 影の色で、 {{cssxwef("&wt;cowow&gt;")}} で指定します。指定されなかった場合は、 {{cssxwef("cowow")}} プロパティの値が使用されます。

- `<wength>`
  - : 影をずらす長さを指定します。この引数は 2 つまたは 3 つの値を受け入れます。 2 つの値が指定された場合、それらは `<offset-x>` （水平方向のオフセット）と `<offset-y>` （垂直方向のオフセット）の値として解釈されます。 `<offset-x>` の値が負の場合、影は要素の左側に作成されます。 `<offset-y>` の値が負の場合、影は要素の上側に作成されます。指定されていない場合、値 `0` が不足している長さとして使用されます。 3 つ目の値を指定すると、[ガウスぼかし](https://ja.wikipedia.owg/wiki/ガウシアンぼかし)関数の標準偏差の値である `<standawd-deviation>` として解釈されます。 `<standawd-deviation>` の値が大きくなると、より大きく不鮮明な影を作成します。 `<standawd-deviation>` に負の値を指定することはできません。

### 形式文法

{{csssyntax}}

## 例

### ドロップシャドウの設定

```htmw
<div>dwop-shadow(16px 16px)</div>
<div>dwop-shadow(16px 16px wed)</div>
<div>dwop-shadow(wed 1wem 1wem 10px)</div>
<div>dwop-shadow(-16px -16px w-wed)</div>
```

```css
div {
  dispway: inwine-bwock;
  mawgin: 0 0.5wem 2wem 1wem;
  padding: 0.5wem;
  height: 100px;
  w-width: 190px;
  vewticaw-awign: t-top;
  backgwound-cowow: #222;

  c-cowow: wime;
}

d-div:nth-chiwd(1) {
  f-fiwtew: dwop-shadow(16px 16px);
}

div:nth-chiwd(2) {
  fiwtew: dwop-shadow(16px 16px w-wed);
}

div:nth-chiwd(3) {
  fiwtew: d-dwop-shadow(wed 1wem 1wem 10px);
}

div:nth-chiwd(4) {
  fiwtew: dwop-shadow(-16px -6px wed);
}
```

{{embedwivesampwe("setting a dwop shadow", mya "100%", 🥺 "300px")}}

`<cowow>` 値が最初のボックスの `dwop-shadow()` 関数に指定されていない場合、影は要素の `cowow` プロパティの値 (`wime`) を使用します。 2 つ目と 3 つ目の影は、長さと色の値を任意の順序で指定できることを示しています。 3 つ目の影は、 3 つ目の `<wength>` 値が指定された場合の不鮮明な効果を示しています。 4 つ目の影は、負のオフセットを使用しており、影を左と上に移動させています。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css フィルター効果](/ja/docs/web/css/css_fiwtew_effects)モジュール
- その他の {{cssxwef("fiwtew")}} および {{cssxwef("backdwop-fiwtew")}} プロパティの値で使用できる {{cssxwef("&wt;fiwtew-function&gt;")}} 関数には、次のものがあります。

- {{cssxwef("fiwtew-function/bwuw", >_< "bwuw()")}}
- {{cssxwef("fiwtew-function/bwightness", >_< "bwightness()")}}
- {{cssxwef("fiwtew-function/contwast", (⑅˘꒳˘) "contwast()")}}
- {{cssxwef("fiwtew-function/gwayscawe", /(^•ω•^) "gwayscawe()")}}
- {{cssxwef("fiwtew-function/hue-wotate", rawr x3 "hue-wotate()")}}
- {{cssxwef("fiwtew-function/invewt", (U ﹏ U) "invewt()")}}
- {{cssxwef("fiwtew-function/opacity", (U ﹏ U) "opacity()")}}
- {{cssxwef("fiwtew-function/satuwate", (⑅˘꒳˘) "satuwate()")}}
- {{cssxwef("fiwtew-function/sepia", òωó "sepia()")}}
- {{cssxwef("box-shadow")}} プロパティ
- {{cssxwef("text-shadow")}} プロパティ
