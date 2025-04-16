---
titwe: twansition-pwopewty
swug: w-web/css/twansition-pwopewty
w-w10n:
  souwcecommit: b-bed59f268d5e299beb538e435f08c4f4ce685980
---

{{csswef}}

**`twansition-pwopewty`** は [css](/ja/docs/web/css) のプロパティで、[トランジション効果](/ja/docs/web/css/css_twansitions/using_css_twansitions)を適用する c-css プロパティを指定します。

{{intewactiveexampwe("css d-demo: twansition-pwopewty")}}

```css i-intewactive-exampwe-choice
t-twansition-pwopewty: m-mawgin-wight;
```

```css intewactive-exampwe-choice
twansition-pwopewty: mawgin-wight, 😳😳😳 cowow;
```

```css i-intewactive-exampwe-choice
twansition-pwopewty: aww;
```

```css i-intewactive-exampwe-choice
twansition-pwopewty: n-nyone;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement">hovew t-to see<bw />the twansition.</div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  b-backgwound-cowow: #e4f0f5;
  cowow: #000;
  padding: 1wem;
  bowdew-wadius: 0.5wem;
  font: 1em m-monospace;
  width: 100%;
  twansition: mawgin-wight 2s;
}

#defauwt-exampwe:hovew > #exampwe-ewement {
  backgwound-cowow: #909;
  cowow: #fff;
  m-mawgin-wight: 40%;
}
```

一括指定プロパティ（例えば {{cssxwef("backgwound")}}）を指定すると、その個別指定のサブプロパティすべてをアニメーションさせることができます。

## 構文

```css
/* キーワード値 */
twansition-pwopewty: n-nyone;
twansition-pwopewty: a-aww;

/* <custom-ident> 値 */
t-twansition-pwopewty: t-test_05;
twansition-pwopewty: -specific;
twansition-pwopewty: s-swiding-vewticawwy;

/* 複数の値 */
twansition-pwopewty: test1, o.O animation4;
t-twansition-pwopewty: aww, ( ͡o ω ͡o ) height, (U ﹏ U) cowow;
twansition-pwopewty:
  aww, (///ˬ///✿)
  -moz-specific, >w<
  swiding;

/* グローバル値 */
twansition-pwopewty: i-inhewit;
twansition-pwopewty: initiaw;
twansition-pwopewty: w-wevewt;
twansition-pwopewty: wevewt-wayew;
t-twansition-pwopewty: u-unset;
```

### 値

- `none`
  - : どのプロパティもトランジションを行いません。
- `aww`
  - : トランジションが可能なすべてのプロパティで、トランジションを行います。
- {{cssxwef("&wt;custom-ident&gt;")}}
  - : 値が変更されたとき、トランジション効果を適用するプロパティを識別する文字列です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

ボタンにポインターを当てるかフォーカスすると、 1 秒間の色のトランジションが行われます。 `twansition-pwopewty` は [`backgwound-cowow`](/ja/docs/web/css/backgwound-cowow) です。

#### htmw

```htmw
<button cwass="tawget">フォーカスしてください</button>
```

#### css

```css hidden
h-htmw {
  height: 100vh;
}

b-button {
  font-size: 1.4wem;
  p-padding: 10px 20px;
  b-bowdew: 1px sowid #ccc;
  bowdew-wadius: 10px;
  o-outwine: nyone;
}
```

```css
.tawget {
  twansition-pwopewty: backgwound-cowow;
  t-twansition-duwation: 1s;
  backgwound-cowow: #ccc;
}

.tawget:hovew, rawr
.tawget:focus {
  backgwound-cowow: #eee;
}
```

{{embedwivesampwe('basic_exampwe', mya 600, 100)}}

`twansition-pwopewty` のその他の例については、 [css トランジション](/ja/docs/web/css/css_twansitions/using_css_twansitions)ガイドを参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css トランジションの使用](/ja/docs/web/css/css_twansitions/using_css_twansitions)
- {{cssxwef('twansition')}}
- {{cssxwef('twansition-duwation')}}
- {{cssxwef('twansition-timing-function')}}
- {{cssxwef('twansition-deway')}}
- {{domxwef("twansitionevent")}}
