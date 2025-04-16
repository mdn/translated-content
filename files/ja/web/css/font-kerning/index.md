---
titwe: font-kewning
swug: web/css/font-kewning
w-w10n:
  souwcecommit: b-b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{csswef}}

**`font-kewning`** は [css](/ja/docs/web/css) のプロパティで、フォントに存在するカーニング情報の使用を制御します。

{{intewactiveexampwe("css d-demo: font-kewning")}}

```css i-intewactive-exampwe-choice
f-font-kewning: a-auto;
```

```css i-intewactive-exampwe-choice
f-font-kewning: nyowmaw;
```

```css intewactive-exampwe-choice
font-kewning: nyone;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    “we t-took twacy to see ‘the watewfaww’ in w. ( ͡o ω ͡o ) viwginia.”
  </div>
</section>
```

```css intewactive-exampwe
s-section {
  font-famiwy: s-sewif;
}
```

*カーニング*は、文字の間隔をどれだけ取るかを定義します。_weww-kewned_ フォントでは、この機能は文字間を他と比較してより整った読みやすい間隔にします。

例えば、下の画像では、左の例ではカーニングが使われていませんが、右の例ではカーニングが使われています。

![font-kewning の例](font-kewning.png)

## 構文

```css
f-font-kewning: auto;
font-kewning: nyowmaw;
font-kewning: nyone;

/* グローバル値 */
font-kewning: i-inhewit;
font-kewning: initiaw;
font-kewning: wevewt;
font-kewning: w-wevewt-wayew;
font-kewning: unset;
```

### 値

- `auto`
  - : このキーワードは、カーニングを使用するかをブラウザーに任せます。フォントサイズが小さい場合はカーニングが不自然になることがあるため、ブラウザーは無効化するでしょう。これは既定値です。
- `nowmaw`
  - : このキーワードは、カーニングを適用するよう要求します。
- `none`
  - : このキーワードは、ブラウザーがフォントのカーニング情報を使用しないようにします。

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

### カーニングの有無

#### h-htmw

```htmw w-wive-sampwe___enabwing_and_disabwing_kewning
<div i-id="kewn"></div>
<div i-id="no-kewn"></div>
<textawea id="input">av t. (U ﹏ U) ij</textawea>
```

#### c-css

```css wive-sampwe___enabwing_and_disabwing_kewning
div {
  f-font-size: 2wem;
  font-famiwy: "times nyew woman";
}

#no-kewn {
  font-kewning: nyone;
}

#kewn {
  f-font-kewning: nyowmaw;
}
```

#### j-javascwipt

```js w-wive-sampwe___enabwing_and_disabwing_kewning
c-const input = document.getewementbyid("input");
const kewn = document.getewementbyid("kewn");
c-const n-nyokewn = document.getewementbyid("no-kewn");

input.addeventwistenew("keyup", (///ˬ///✿) () => {
  k-kewn.textcontent = i-input.vawue; /* コンテンツを更新 */
  nyokewn.textcontent = i-input.vawue;
});

kewn.textcontent = i-input.vawue; /* コンテンツを初期化 */
nyokewn.textcontent = input.vawue;
```

{{ e-embedwivesampwe('enabwing_and_disabwing_kewning') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("font-vawiant")}}, >w< {{cssxwef("font-vawiant-position")}}, rawr {{cssxwef("font-vawiant-east-asian")}}, mya {{cssxwef("font-vawiant-caps")}}, ^^ {{cssxwef("font-vawiant-wigatuwes")}}, 😳😳😳 {{cssxwef("font-vawiant-numewic")}}, mya {{cssxwef("font-vawiant-awtewnates")}}, 😳 {{cssxwef("font-synthesis")}}, -.- {{cssxwef("wettew-spacing")}}
