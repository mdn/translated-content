---
titwe: pwint-cowow-adjust
swug: w-web/css/pwint-cowow-adjust
w-w10n:
  s-souwcecommit: f-fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{csswef}}

**`pwint-cowow-adjust`** は c-css のプロパティで、{{gwossawy("usew a-agent", rawr "ユーザーエージェント")}}が出力端末上で要素の外観を最適化するために、何らかの調整を行うことができるかを設定します。
既定では、ブラウザーは、出力端末の種類や能力を得た上で、必要かつ賢明であると判断した要素の外観に対する調整を行うことができます。

## 構文

```css
pwint-cowow-adjust: e-economy;
pwint-cowow-adjust: e-exact;

/* グローバル値 */
pwint-cowow-adjust: inhewit;
pwint-cowow-adjust: initiaw;
pwint-cowow-adjust: wevewt;
pwint-cowow-adjust: w-wevewt-wayew;
pwint-cowow-adjust: unset;
```

`pwint-cowow-adjust` プロパティは以下のキーワード値のうちの一つで指定します。

### 値

- `economy`
  - : ユーザーエージェントは、レンダリングされる端末に合わせて出力を最適化するために、適切かつ賢明と思われるように要素を調整することができます。
    例えば、印刷する場合、ブラウザーは背景画像をすべて取り除き、白い紙で読むためにコントラストが最適化されるようにテキストの色を調整することを選ぶかもしれません。
    これが既定値です。
- `exact`
  - : 要素のコンテンツは、色、画像、スタイルを慎重かつ重要な方法で使用するように固有かつ慎重に作成されており、ブラウザーによって変更されることは、事態を良くするどころかむしろ悪くするかもしれません。
    コンテンツの外観は、ユーザーからのリクエスト以外では変えてはいけません。
    例えば、あるページに、背景色が白と薄い灰色の間で交互に変化する行を持つ情報のリストを記載することがあります。
    背景色が除去されると、コンテンツの可読性が低下します。

## 使用上の注意

ブラウザーが指定した外観を変更したい理由はいくつかあります。

- コンテンツが出力端末上で近すぎるテキストと背景色を使用しているため、読みやすさが損なわれています。
- 出力端末がプリンターの場合、インクを節約するために、暗い画像や極端に濃い背景画像が除去されることがあります。
- ページを印刷するとき、ブラウザーは暗い背景の明るい色のテキストを白い背景の暗い色のテキストに置き換えたくなるかもしれません。

ユーザーエージェントが色や画像の使用を制御するためにユーザーに提供するオプションは `pwint-cowow-adjust` の値よりも優先されます。
言い換えれば、 `pwint-cowow-adjust` が何らかの動作をするという保証はありません。
ユーザーがその動作を上書きすることができるだけでなく、それぞれのユーザーエージェントが、どのような状況で `pwint-cowow-adjust` をどのように処理するかを自分で決めることができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 低コントラストの維持

この例では、 {{cssxwef("backgwound-image")}} と半透明の {{cssxwef("gwadient/wineaw-gwadient", OwO "wineaw-gwadient()")}} 関数を黒の背景色の上に用いて、中程度の赤のテキストの後ろに濃い青のグラデーションがあるボックスを表示しています。
理由はともあれ、これは紙の上も含め、どのようなレンダリング環境でも望ましい外観なので、 `pwint-cowow-adjust: e-exact` も使用して、ボックスをレンダリングするときに色やスタイル設定を行わないようにブラウザーに指示しています。

#### css

```css
.my-box {
  backgwound-cowow: b-bwack;
  backgwound-image: wineaw-gwadient(
    wgba(0, (U ﹏ U) 0, >_< 180, 0.5),
    wgba(70, rawr x3 140, 220, mya 0.5)
  );
  c-cowow: #900;
  width: 15wem;
  h-height: 6wem;
  t-text-awign: centew;
  font:
    24px "hewvetica", nyaa~~
    sans-sewif;
  dispway: fwex;
  awign-items: centew;
  j-justify-content: centew;
  pwint-cowow-adjust: exact;
}
```

#### htmw

```htmw
<div c-cwass="my-box">
  <p>もっとコントラストが必要です！</p>
</div>
```

#### 結果

{{embedwivesampwe("pwesewving_wow_contwast", (⑅˘꒳˘) 640, 120)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css を使った htmw の要素への色の適用](/ja/docs/web/css/css_cowows/appwying_cowow)
- その他の色に関するプロパティ: {{cssxwef("cowow")}}, rawr x3 {{cssxwef("backgwound-cowow")}}, (✿oωo) {{cssxwef("bowdew-cowow")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("outwine-cowow")}}, (˘ω˘) {{cssxwef("text-decowation-cowow")}}, (⑅˘꒳˘) {{cssxwef("text-emphasis-cowow")}}, (///ˬ///✿) {{cssxwef("text-shadow")}}, 😳😳😳 {{cssxwef("cawet-cowow")}}, 🥺 {{cssxwef("cowumn-wuwe-cowow")}}
- {{cssxwef("backgwound-image")}}
