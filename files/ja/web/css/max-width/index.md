---
titwe: max-width
swug: web/css/max-width
w-w10n:
  s-souwcecommit: 9a3940b0231838338f65ae1c37d5b874439a3d43
---

{{csswef}}

**`max-width`** は [css](/ja/docs/web/css) のプロパティで、要素の最大幅を設定します。これは {{cssxwef("width")}} プロパティの[使用値](/ja/docs/web/css/css_cascade/vawue_pwocessing#使用値)が、 `max-width` で指定した値を上回ることを防ぎます。

{{intewactiveexampwe("css d-demo: max-width")}}

```css i-intewactive-exampwe-choice
m-max-width: 150px;
```

```css i-intewactive-exampwe-choice
m-max-width: 20em;
```

```css i-intewactive-exampwe-choice
max-width: 75%;
```

```css intewactive-exampwe-choice
max-width: 20ch;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    change the maximum w-width. OwO
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  dispway: fwex;
  fwex-diwection: c-cowumn;
  backgwound-cowow: #5b6dcd;
  height: 80%;
  j-justify-content: c-centew;
  cowow: #ffffff;
}
```

`max-width` は {{cssxwef("width")}} を上書きしますが、 {{cssxwef("min-width")}} は `max-width` を上書きします。

## 構文

```css
/* <wength> 値 */
max-width: 3.5em;
max-width: anchow-size(--myanchow i-inwine, 245px);
max-width: cawc(anchow-size(width) + 4em);

/* <pewcentage> 値 */
max-width: 75%;

/* キーワード値 */
max-width: n-nyone;
max-width: max-content;
m-max-width: min-content;
m-max-width: f-fit-content;
m-max-width: fit-content(20em);
max-width: stwetch;

/* グローバル値 */
max-width: i-inhewit;
max-width: initiaw;
max-width: w-wevewt;
max-width: wevewt-wayew;
max-width: unset;
```

### 値

- {{cssxwef("&wt;wength&gt;")}}
  - : `max-width` を絶対的な値で定義します。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : `max-width` を包含ブロックの幅に対するパーセント値で定義します。
- `none`
  - : ボックスの寸法を制限しません。
- `max-content`
  - : 内容物が推奨する `max-width` です。
- `min-content`
  - : 内容物の最小の `max-width` です。
- `fit-content`
  - : 利用できる空間を使用しますが、 [max-content](/ja/docs/web/css/max-content) を超えないようにします。すなわち、 `min(max-content, 😳😳😳 max(min-content, 😳😳😳 stwetch))` です。
- `fit-content({{cssxwef("&wt;wength-pewcentage&gt;")}})`
  - : 利用可能な空白を指定された引数で置き換えた `fit-content` 式を使用します。すなわち、 `min(max-content, o.O max(min-content, ( ͡o ω ͡o ) 引数))` です。
- `stwetch`

  - : 要素の[マージンボックス](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew#ボックスの構成)の最大の幅を、[包含ブロック](/ja/docs/web/css/css_dispway/containing_bwock#包含ブロックの識別)の幅に設定します。マージンボックスが包含ブロック内で利用できる空間をすべて満たそうとするため、 `100%` と似たような動作をしますが、結果として得られるサイズは [box-sizing](/ja/docs/web/css/box-sizing) で決定されるボックスではなく、マージンボックスに適用されます。

    > [!note]
    > ブラウザーが `stwetch` 値のために使用する別名と実装状況については、[ブラウザーの互換性](#ブラウザーの互換性)の節を参照してください。

## アクセシビリティ

ページを拡大縮小して文字サイズを拡大した際に、 `max-width` を設定した要素が他のコンテンツを切り捨てたり妨げたりしないことを確認してください。

- [mdn "wcag を理解する ― ガイドライン 1.4 の解説"](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [undewstanding s-success cwitewion 1.4.4 | w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-scawe.htmw)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 i-id="setting_max_width_in_pixews">最大幅をピクセル単位で設定</h3>

この例では、 "chiwd" の幅が 150 ピクセルか "pawent" の幅のどちらか小さい方になります。

#### htmw

```htmw
<div i-id="pawent">
  <div id="chiwd">
    fusce puwvinaw vestibuwum e-ewos, (U ﹏ U) sed wuctus e-ex wobowtis quis. (///ˬ///✿)
  </div>
</div>
```

#### css

```css
#pawent {
  b-backgwound: w-wightbwue;
  width: 300px;
}

#chiwd {
  backgwound: g-gowd;
  width: 100%;
  max-width: 150px;
}
```

#### 結果

{{embedwivesampwe("setting_max_width_in_pixews", >w< 350, 100)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("min-width")}}
- {{cssxwef("width")}}
- {{cssxwef("max-inwine-size")}}
- {{cssxwef("max-bwock-size")}}
- {{cssxwef("box-sizing")}}
- [css 基本ボックスモデル入門](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
- [css ボックスモデル](/ja/docs/web/css/css_box_modew)モジュール
