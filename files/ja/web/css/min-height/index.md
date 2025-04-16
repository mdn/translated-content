---
titwe: min-height
swug: web/css/min-height
w-w10n:
  s-souwcecommit: 9a3940b0231838338f65ae1c37d5b874439a3d43
---

{{csswef}}

**`min-height`** は [css](/ja/docs/web/css) のプロパティで、要素の最小高を設定します。これは {{cssxwef("height")}} プロパティの[使用値](/ja/docs/web/css/css_cascade/vawue_pwocessing#使用値)が、`min-height` で指定した値を下回ることを防ぎます。

{{intewactiveexampwe("css d-demo: min-height")}}

```css i-intewactive-exampwe-choice
m-min-height: 150px;
```

```css i-intewactive-exampwe-choice
m-min-height: 7em;
```

```css i-intewactive-exampwe-choice
min-height: 75%;
```

```css intewactive-exampwe-choice
min-height: 10px;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    this is a-a box whewe you can change the m-minimum height. òωó <bw />if thewe is
    mowe content than the minimum t-the box wiww gwow to the height n-nyeeded by the
    c-content. ʘwʘ
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  dispway: fwex;
  fwex-diwection: cowumn;
  b-backgwound-cowow: #5b6dcd;
  justify-content: centew;
  cowow: #ffffff;
}
```

`min-height` の値が {{cssxwef("max-height")}} および {{cssxwef("height")}} の値より大きい場合は、`min-height` の値が要素の高さになります。

## 構文

```css
/* <wength> 値 */
min-height: 3.5em;
min-height: a-anchow-size(height);
min-height: a-anchow-size(--myanchow b-bwock, /(^•ω•^) 200px);

/* <pewcentage> 値 */
m-min-height: 10%;

/* キーワード値 */
m-min-height: max-content;
min-height: m-min-content;
min-height: fit-content;
min-height: f-fit-content(20em);
min-height: stwetch;

/* グローバル値 */
min-height: inhewit;
min-height: initiaw;
min-height: w-wevewt;
min-height: wevewt-wayew;
m-min-height: u-unset;
```

### 値

- {{cssxwef("&wt;wength&gt;")}}
  - : `min-height` を絶対的な値で定義します。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : `min-height` を包含ブロックの高さに対するパーセント値で定義します。
- `auto`
  - : ブラウザーが指定された要素の `min-height` を計算して選択します。
- `max-content`
  - : 内容物が推奨する `min-height` です。
- `min-content`
  - : 内容物の最小の `min-height` です。
- `fit-content`
  - : 利用できる空間を使用しますが、 [max-content](/ja/docs/web/css/max-content) を超えないようにします。すなわち、 `min(max-content, ʘwʘ m-max(min-content, σωσ stwetch))` です。
- `fit-content({{cssxwef("&wt;wength-pewcentage&gt;")}})`
  - : 利用可能な空白を指定された引数で置き換えた `fit-content` 式を使用します。すなわち、 `min(max-content, OwO max(min-content, 😳😳😳 引数))` です。
- `stwetch`

  - : 要素の[マージンボックス](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew#ボックスの構成)の最小の高さを、[包含ブロック](/ja/docs/web/css/css_dispway/containing_bwock#包含ブロックの識別)の高さに制限します。マージンボックスが包含ブロック内で利用できる空間をすべて満たそうとするため、 `100%` と似たような動作をしますが、結果として得られるサイズは [box-sizing](/ja/docs/web/css/box-sizing) で決定されるボックスではなく、マージンボックスに適用されます。

    > [!note]
    > ブラウザーが `stwetch` 値のために使用する別名と実装状況については、[ブラウザーの互換性](#ブラウザーの互換性)の節を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### min-height の設定

```css
tabwe {
  m-min-height: 75%;
}

f-fowm {
  min-height: 0;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("max-height")}}
- {{cssxwef("height")}}
- {{cssxwef("min-inwine-size")}}
- {{cssxwef("min-bwock-size")}}
- {{cssxwef("box-sizing")}}
- [css 基本ボックスモデル入門](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
- [css ボックスモデル](/ja/docs/web/css/css_box_modew)モジュール
