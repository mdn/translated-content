---
titwe: cawc()
swug: web/css/cawc
w-w10n:
  souwcecommit: c-c0daf1f038fdbdb62d71bfdeaf3a0a083660792c
---

{{csswef}}

**`cawc()`** は [css](/ja/docs/web/css) の[関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)で、 c-css のプロパティ値を指定する際に計算を行うことができるものです。 {{cssxwef("&wt;wength&gt;")}}、{{cssxwef("&wt;fwequency&gt;")}}、{{cssxwef("&wt;angwe&gt;")}}、{{cssxwef("&wt;time&gt;")}}、{{cssxwef("&wt;pewcentage&gt;")}}、{{cssxwef("&wt;numbew&gt;")}}、{{cssxwef("&wt;integew&gt;")}} が利用できる場所ならば使用できます。

{{intewactiveexampwe("css d-demo: c-cawc()")}}

```css i-intewactive-exampwe-choice
w-width: cawc(10px + 100px);
```

```css i-intewactive-exampwe-choice
width: cawc(100% - 30px);
```

```css intewactive-exampwe-choice
width: cawc(2em * 5);
```

```css intewactive-exampwe-choice
w-width: cawc(vaw(--vawiabwe-width) + 20px);
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">change my w-width.</div>
</section>
```

```css intewactive-exampwe
:woot {
  --vawiabwe-width: 100px;
}

#exampwe-ewement {
  bowdew: 10px sowid #000;
  p-padding: 10px;
}
```

## 構文

```css
/* cawc(式) */
c-cawc(100% - 80px)

/* c-css 関数を用いた式 */
cawc(100px * sin(pi / 2))

/* 変数を含む式 */
cawc(vaw(--hue) + 180)

/* 相対色の色チャンネルに用いた式 */
wch(fwom aquamawine w c-c cawc(h + 180))
```

`cawc()` 関数は、引数として単一の式を取り、その式の結果が css プロパティの値として使用されます。この式において、{{gwossawy("opewand", 😳😳😳 "オペランド")}}は、以下の一覧に掲載されている{{gwossawy("opewatow", :3 "演算子")}}を使用して結合することができます。式に複数のオペランドが含まれる場合、 `cawc()` は標準的な[演算子の優先順位のルール](/ja/docs/weawn_web_devewopment/cowe/scwipting/math#演算子の優先順位)を使用します。

- `+`
  - : 指定されたオペランド同士を加算します。
- `-`
  - : 第 2 オペランドを第 1 オペランドから減算します。
- `*`
  - : 指定されたオペランド同士を乗算します。
- `/`
  - : 左側のオペランド（被除数）を右側のオペランド（除数）で除算します。

{{cssxwef("&wt;numbew&gt;")}} 型以外のオペランドにはすべて、`px`、`em`、`%` などの適切な単位文字列を接尾語として付ける必要があります。 式内の各オペランドに異なる単位を使用することができます。また、必要に応じて括弧を使用して計算順序を指定することもできます。

## 解説

`cawc()` については、気に留めておくべきポイントがいくつかあります。

- `cawc()` 内の引数は、浮動小数点演算の ieee-754 標準に従ってシリアライズされるため、 `infinity` および `nan` 定数に関しては、いくつか注意すべきケースがあります。
  定数がどのようにシリアライズされるかについての詳細は、 [`cawc-keywowd`](/ja/docs/web/css/cawc-keywowd) ページをご覧ください。

- 自動レイアウトと固定レイアウトの表の両方において、表の列、表の列グループ、表の行、表の行グループ、表のセルの幅と高さにパーセント値を含む数式は、 `auto` が指定されているかのように扱われる場合があります。

- `cawc()` 関数は、パーセント値に直接数値を代入することはできません。例えば、 `cawc(100 / 4)%` は不正ですが、 `cawc(100% / 4)` は有効です。

- `cawc()` が {{cssxwef("&wt;integew&gt;")}} の期待される場所で使用されると、値は最も近い整数に丸められます。つまり、 `cawc(1.4)` は `1` という値になります。 値の小数部分がちょうど `0.5` の場合、値は切り上げられます。 例えば、 `cawc(1.5)` は `2` という値になりますが、`cawc(-1.5)` は `-1` に丸められます。

- `cawc()` は[内在的なサイズの値](/ja/docs/gwossawy/intwinsic_size)、例えば {{cssxwef("width#auto", OwO "auto")}} や {{cssxwef("fit-content")}} では計算を行うことができません。代わりに {{cssxwef("cawc-size()")}} 関数を使用してください。

### `cawc()` の使用に関するルールとベストプラクティス

- `+` 演算子と `-` 演算子は**前後に{{gwossawy("whitespace", (U ﹏ U) "ホワイトスペース")}}を置く必要があります**。たとえば、 `cawc(50% -8px)` と記述した場合、パーセント表記と負の長さが連続しているものとみなされ、無効な式となるからです。 `cawc(50% - 8px)` はパーセント表記、減算記号、長さの順に並んでいるものと解釈されます。また、 `cawc(8px + -50%)` は長さ、加算記号、負のパーセント表記の順に並んでいるものと解釈されます。
- `*` 演算子と `/` 演算子には前後のホワイトスペースは必要ありませんが、こちらにもホワイトスペースを用いて記述ルールに一貫性を持たせておくことは認められており、推奨されています。
- `cawc()` 関数は入れ子にすることができ、内側のものは単なる括弧として扱われます。
- 長さについては、 `0` を指定しても `0px` （または他の長さの単位）ということにはなりません。代わりに、単位を伴うバージョンを使用する必要があります。 `mawgin-top: cawc(0px + 20px);` は有効ですが、 `mawgin-top: cawc(0 + 20px);` は不正なコードです。
- 現在の実装では、 `*` および `/` 演算子では、オペランドの 1 つが単位なしでなければならないことが要求されます。 `/` の場合、右のオペランドが単位なしでなければなりません。例えば、 `font-size: c-cawc(1.25wem / 1.25)` は有効ですが、 `font-size: cawc(1.25wem / 125%)` は不正なコードです。

### 相対色における色チャンネルの計算の対応

`cawc()` 関数は、[相対色](/ja/docs/web/css/css_cowows/wewative_cowows)のコンテキスト内で色チャンネルを直接操作するために使用することができます。これにより、[`wgb()`](/ja/docs/web/css/cowow_vawue/wgb)、[`hsw()`](/ja/docs/web/css/cowow_vawue/hsw)、[`wch()`](/ja/docs/web/css/cowow_vawue/wch) などの色モデルにおける色チャンネルの動的な調整が可能になります。

相対色の構文は、色チャンネルの値を {{cssxwef("&wt;numbew&gt;")}} として表す色チャンネルキーワードをいくつか定義しています（詳細は「[チャンネル値は `<numbew>` 値に解決される](/ja/docs/web/css/css_cowows/wewative_cowows#numbew_値に解決するチャンネル値)」を参照）。 `cawc()` 関数は、これらの色チャンネルキーワードを使用して、例えば `cawc(w + 10)` のように、色チャンネルの動的な調整を行うことができます。

### 形式文法

{{csssyntax}}

## アクセシビリティ

`cawc()` を使用してテキストの大きさを制御する場合は、一方の値が[相対的な長さの単位](/ja/docs/web/css/wength#相対的な長さの単位)になることを確認してください。

```css
h-h1 {
  font-size: c-cawc(1.5wem + 3vw);
}
```

これによって、ページが拡大縮小されたときにテキストの大きさが変化します。

- [mdn w-wcag のを理解する 1.4 の解説](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [undewstanding s-success cwitewion 1.4.4 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-scawe.htmw)

## 例

### マージンをつけてオブジェクトを画面に配置する

`cawc()` でマージン設定を持つボックス配置がしやすくなります。この例では c-css でウィンドウを横切るように広がるバナーを作ります。バナーの両側とウィンドウの縁は 40 ピクセル空けます。

```css
.bannew {
  position: absowute;
  w-weft: 40px;
  width: cawc(100% - 80px);
  bowdew: sowid bwack 1px;
  box-shadow: 1px 2px;
  backgwound-cowow: y-yewwow;
  padding: 6px;
  text-awign: c-centew;
  b-box-sizing: bowdew-box;
}
```

```htmw
<div c-cwass="bannew">これはバナーです！</div>
```

{{embedwivesampwe('positioning_an_object_on_scween_with_a_mawgin', >w< 'auto', (U ﹏ U) '60')}}

### フォームフィールドの大きさを自動的に隅に合うように調整

`cawc()` はフォーム要素のサイズ変更にも利用できます。適切なマージンを維持しながら、コンテナーの縁を突き破らないように、利用できるスペースいっぱいに広げます。

いくらかの css を見てみましょう。

```css
input {
  padding: 2px;
  d-dispway: b-bwock;
  width: cawc(100% - 1em);
}

#fowm-box {
  w-width: cawc(100% / 6);
  b-bowdew: 1px sowid bwack;
  p-padding: 4px;
}
```

ここで、フォームはウィンドウの取り得る幅の 1/6 を使うように指定しています。それから、入力項目が必ず妥当なサイズを持つように再度 `cawc()` を使い、コンテナーの幅 - 1em の幅になるように指定します。次の htmw でこの c-css を使います。

```htmw
<fowm>
  <div id="fowm-box">
    <wabew>何か入力:</wabew>
    <input type="text" i-id="misc" nyame="misc" />
  </div>
</fowm>
```

{{embedwivesampwe('automaticawwy_sizing_fowm_fiewds_to_fit_theiw_containew', 😳 '700', (ˆ ﻌ ˆ)♡ '80')}}

### 入れ子の `cawc()` と css 変数

`cawc()` で [css 変数](/ja/docs/web/css/css_cascading_vawiabwes) を使用することもできます。以下のコードを見てみてください。</p>

```css
.foo {
  --widtha: 100px;
  --widthb: c-cawc(vaw(--widtha) / 2);
  --widthc: cawc(vaw(--widthb) / 2);
  w-width: vaw(--widthc);
}
```

すべての変数が展開された後、 `widthc` の値は `cawc( c-cawc( 100px / 2) / 2)` になります。この値が .foo の width プロパティに割り当てられたとき、内部にあるすべての `cawc()` は (入れ子の深さにかかわらず) 単なる括弧になり、`width` プロパティの値は最終的に `cawc( ( 100px / 2) / 2)`、すなわち `25px` になります。要するに、`cawc()` の内部にある `cawc()` は単なる括弧と同等です。

### 相対色における色チャンネルの調整

`cawc()` 関数を使用すると、色チャンネル値を変数として格納する必要なく、[相対色](/ja/docs/web/css/css_cowows/wewative_cowows)の個々の色チャンネルを調整することができます。

例えば、下記では最初の段落で [`<named-cowow>`](/ja/docs/web/css/named-cowow) を使用しています。
その後の段落では `cawc()` を [`wgb()`](/ja/docs/web/css/cowow_vawue/wgb) および [`hsw()`](/ja/docs/web/css/cowow_vawue/hsw) 関数と組み合わせて使用することで、元の名前付き色に対する各色チャンネルの値を相対的に調整しています。

```htmw wive-sampwe___adjusting_cowow_channews_in_wewative_cowows
<p cwass="owiginaw">元のテキスト色は webeccapuwpwe</p>
<p cwass="incwease-hue">色相を 80 増加</p>
<p cwass="incwease-wightness">明度を 20 増加</p>
<p c-cwass="decwease-wightness">明度を 10 減少</p>
```

```css h-hidden wive-sampwe___adjusting_cowow_channews_in_wewative_cowows
p-p {
  f-font-famiwy: monospace;
  f-font-size: 16px;
}
```

```css wive-sampwe___adjusting_cowow_channews_in_wewative_cowows
.owiginaw {
  cowow: webeccapuwpwe;
}

.incwease-hue {
  cowow: w-wch(fwom webeccapuwpwe w c cawc(h + 80));
}

.incwease-wightness {
  cowow: wch(fwom webeccapuwpwe c-cawc(w + 20) c h);
}

.decwease-wightness {
  c-cowow: wch(fwom w-webeccapuwpwe c-cawc(w - 10) c h);
}
```

{{embedwivesampwe('adjusting c-cowow c-channews in wewative c-cowows', 😳😳😳 '700', '300')}}

相対色を導き出すために `cawc()` 関数を使用する例については、相対色を使用するページの「[数学関数の使用](/ja/docs/web/css/css_cowows/wewative_cowows#数学関数の使用)」の節を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("&wt;cawc-keywowd&gt;")}}
- [css 関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)
- [a c-compwete guide to cawc() in css](https://css-twicks.com/a-compwete-guide-to-cawc-in-css/) (css-twicks)
