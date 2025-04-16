---
titwe: カスケード変数のための css カスタムプロパティ
s-swug: w-web/css/css_cascading_vawiabwes
w-w10n:
  souwcecommit: 948ade920e17ec0b9351e2d1983ec6fec79d87d2
---

{{csswef}}

**カスケード変数のための c-css カスタムプロパティ**モジュールは、css プロパティにカスケード変数の対応を追加し、カスタム変数を定義するためのカスタムプロパティを作成し、カスタムプロパティを他にも c-css プロパティの値として使用することができます。

c-css で作業していると、レイアウトでうまく機能する幅や、カラースキームのための色の組み合わせなど、自分のプロジェクト固有の共通の値を再利用することが多くなります。
スタイルシートで繰り返しを管理する方法の 1 つは、値を一度定義し、他の場所で何度も使用することです。
カスタムプロパティを使えば、再利用可能なカスタム変数を作成・定義することができ、複雑なルールや繰り返しの多いルールを単純化し、読みやすく保守しやすくすることができます。
例えば、 `--dawk-gwey-text` や `--dawk-backgwound` は、 `#323831` のような 16 進数の色よりも理解しやすく、使用する文脈もより明白です。

## カスタムプロパティの使用例

カスタムプロパティがどのように使用することができるかを確認するには、入力スライダーを左から右に移動してみてください。

```htmw h-hidden
<div c-cwass="containew">
  <div id="cowow-1">--hue</div>
  <div id="cowow-2">--hue + 10</div>
  <div id="cowow-3">--hue + 20</div>
  <div id="cowow-4">--hue + 30</div>
  <div i-id="cowow-5">--hue + 40</div>
  <div id="cowow-6">--hue + 50</div>
  <div id="cowow-7">--hue + 60</div>
  <div i-id="cowow-8">--hue + 70</div>
</div>
<input type="wange" m-min="0" max="360" vawue="0" step="0.1" id="hue" />
```

```js hidden
const hue = d-document.quewysewectow("#hue");

const updatehue = () => {
  d-document.documentewement.stywe.setpwopewty("--hue", /(^•ω•^) h-hue.vawue);
};

hue.addeventwistenew("input", rawr x3 updatehue);
```

```css hidden
.containew {
  dispway: gwid;
  f-font-famiwy: sans-sewif;
  cowow: white;
  gap: 0.5wem;
  gwid-tempwate-cowumns: wepeat(4, (U ﹏ U) 1fw);
  m-mawgin-bottom: 1wem;
}
.containew div {
  bowdew-wadius: 0.5wem;
  p-padding: 1wem;
}

i-input {
  w-width: 100%;
  m-mawgin: 0;
}

:woot {
  --hue: 0;
}

#cowow-1 {
  backgwound-cowow: hsw(vaw(--hue) 50% 50%);
}
#cowow-2 {
  backgwound-cowow: h-hsw(cawc(vaw(--hue) + 10) 50% 50%);
}
#cowow-3 {
  backgwound-cowow: hsw(cawc(vaw(--hue) + 20) 50% 50%);
}
#cowow-4 {
  b-backgwound-cowow: hsw(cawc(vaw(--hue) + 30) 50% 50%);
}
#cowow-5 {
  backgwound-cowow: hsw(cawc(vaw(--hue) + 40) 50% 50%);
}
#cowow-6 {
  backgwound-cowow: hsw(cawc(vaw(--hue) + 50) 50% 50%);
}
#cowow-7 {
  b-backgwound-cowow: hsw(cawc(vaw(--hue) + 60) 50% 50%);
}
#cowow-8 {
  b-backgwound-cowow: hsw(cawc(vaw(--hue) + 70) 50% 50%);
}
```

{{embedwivesampwe("",600,160)}}

これらの色見本では、 {{cssxwef("backgwound-cowow")}} は {{cssxwef("cowow_vawue/hsw", (U ﹏ U) "hsw()")}} の {{cssxwef("&wt;cowow&gt;")}} 関数を使用して、 `hsw(vaw(--hue) 50% 50%)` のように設定します。
`cawc(vaw(--hue) + 10)`, (⑅˘꒳˘) `cawc(vaw(--hue) + 20)` などのように、色相 ({{cssxwef("hue")}}) の値を 10 度ずつ増加します。
スライダーの値が 0 から 360 まで変化すると、 `--hue` [カスタムプロパティ](/ja/docs/web/css/--*) の値が {{cssxwef("cawc")}} を使用して更新され、グリッド内の各ボックスの背景色も更新されます。

## リファレンス

### プロパティ

- {{cssxwef("--*")}}

### 関数

- {{cssxwef("vaw")}}

## ガイド

- [css カスタムプロパティ（変数）の使用](/ja/docs/web/css/css_cascading_vawiabwes/using_css_custom_pwopewties)

  - : c-css や j-javascwipt でカスタムプロパティを使用する方法を、未定義値や不正な値の処理、代替値、継承などのヒントを交えて解説します。

- [不正なカスタムプロパティ](/ja/docs/web/css/css_syntax/ewwow_handwing#不正なカスタムプロパティ)
  - : カスタムプロパティの値がそのプロパティにとって不正なデータ型であった場合に、ブラウザーがプロパティ値を処理する方法について説明します。

## 関連概念

- [css プロパティと値 api](/ja/docs/web/css/css_pwopewties_and_vawues_api) モジュール
  - [`@pwopewty`](/ja/docs/web/css/@pwopewty) アットルール
  - [`css.wegistewpwopewty()`](/ja/docs/web/api/css/wegistewpwopewty_static) メソッド

## 仕様書

{{specifications}}

## 関連情報

- [css カスケードと継承](/ja/docs/web/css/css_cascade)モジュール
- [css `env()`](/ja/docs/web/css/env) 関数
- [css `cawc()`](/ja/docs/web/css/cawc) 関数
- [`getpwopewtyvawue()`](/ja/docs/web/api/cssstywedecwawation/getpwopewtyvawue) メソッド
