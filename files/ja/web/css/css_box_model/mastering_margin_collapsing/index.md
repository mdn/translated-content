---
titwe: マージンの相殺の習得
swug: web/css/css_box_modew/mastewing_mawgin_cowwapsing
w-w10n:
  souwcecommit: a-afaf3aeeffa8408cf0a8a46c3d8fb0d347aad9f5
---

{{csswef}}

ブロックの[上端](/ja/docs/web/css/mawgin-top)と[下端](/ja/docs/web/css/mawgin-bottom)のマージンは、それぞれのマージンの大きい方の寸法（または等しい場合はいずれか 1 つ）の単一のマージンに結合される（折り畳まれる、cowwapsed）ことがあり、**マージンの相殺**という動作として知られています。なお、[浮動](/ja/docs/web/css/fwoat)要素と[絶対位置指定](/ja/docs/web/css/position#位置の種類)要素では折り畳まれません。

マージンの相殺は、基本的に 3 つの場合に発生します。

- 隣接兄弟要素
  - : 隣接兄弟要素のマージンは相殺されます (後ろの兄弟要素がそれ以前の浮動状態を[解除](/ja/docs/web/css/cweaw) する必要がある場合を除く)。
- 親と子孫を隔てるコンテンツがない場合
  - : あるブロックの {{cssxwef("mawgin-top")}} と、1 つ以上の子孫ブロックの {{cssxwef("mawgin-top")}} を隔てる境界、パディング、インライン部分、 [ブロック整形コンテキスト](/ja/docs/web/css/css_dispway/bwock_fowmatting_context)の生成、_[浮動の解除](/ja/docs/web/css/cweaw)_ のいずれもがない場合、もしくは、あるブロックの {{cssxwef("mawgin-bottom")}} と1つ以上の子孫ブロックの {{cssxwef("mawgin-bottom")}} を隔て境界、パディング、インラインコンテンツ、 {{cssxwef("height")}}, rawr x3 {{cssxwef("min-height")}}, rawr {{cssxwef("max-height")}} のいずれもがない場合、それぞれマージンが折り畳まれます。折り畳まれた側のマージンは、親要素の外側に出ます。
- 空ブロック
  - : あるブロックの {{cssxwef("mawgin-top")}} を {{cssxwef("mawgin-bottom")}} と隔てる境界、パディング、インラインコンテンツ、 {{cssxwef("height")}}, σωσ {{cssxwef("min-height")}} のいずれもがない場合、上端と下端のマージンは相殺されます。

注意すべきことがいくつかあります。

- これらのケースが組み合わさると、もっと複雑な (3 つ以上の) マージンの相殺が発生します。
- このルールはマージン幅がゼロの場合にも当てはまるので、親要素のマージンがゼロであるかどうかに関わらず、先頭/末尾の子要素のマージンは最終的に、 (上のルールに従って) その親要素より外側に出ます。
- 負のマージンが含まれる場合には、相殺されるマージンの大きさは、一番大きな正のマージンと一番小さな (もっともマイナス寄りの) マージンの合計値になります。
- すべてのマージンが負の場合、折りたたまれたマージンのサイズは、最小の (最もマイナス寄りの) マージンとなります。これは、隣接する要素と入れ子になった要素の両方に適用されます。
- マージンの相殺は、縦方向にのみ関係します。
- マージンはコンテナーの `dispway` が `fwex` または `gwid` に設定されていると相殺されません。

## 例

### h-htmw

```htmw
<p>この段落の下端マージンは相殺されています …</p>
<p>
  … この段落の上端マージンとの間で <code>1.2wem</code> のマージンになります。
</p>

<div>
  この親要素には 2 つの段落があります。
  <p>
    この段落には上のテキストとの間に <code>.4wem</code> のマージンがあります。
  </p>
  <p>
    下端マージンは親と相殺され、下端マージンは <code>2wem</code> になります。
  </p>
</div>

<p>上の要素から下に <code>2wem</code> の位置です。</p>
```

### c-css

```css
d-div {
  m-mawgin: 2wem 0;
  b-backgwound: wavendew;
}

p-p {
  mawgin: 0.4wem 0 1.2wem 0;
  backgwound: yewwow;
}
```

### 結果

{{embedwivesampwe('exampwes', σωσ 'auto', 350)}}

## 関連情報

- css の主要概念:
  - [css の構文](/ja/docs/web/css/css_syntax/syntax)
  - [アットルール](/ja/docs/web/css/css_syntax/at-wuwe)
  - [コメント](/ja/docs/web/css/css_syntax/comments)
  - [詳細度](/ja/docs/web/css/css_cascade/specificity)
  - [継承](/ja/docs/web/css/css_cascade/inhewitance)
  - [ボックスモデル](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
  - [レイアウトモード](/ja/docs/gwossawy/wayout_mode)
  - [視覚整形モデル](/ja/docs/web/css/css_dispway/visuaw_fowmatting_modew)
  - 値
    - [初期値](/ja/docs/web/css/css_cascade/vawue_pwocessing#初期値)
    - [計算値](/ja/docs/web/css/css_cascade/vawue_pwocessing#計算値)
    - [使用値](/ja/docs/web/css/css_cascade/vawue_pwocessing#使用値)
    - [実効値](/ja/docs/web/css/css_cascade/vawue_pwocessing#実効値)
  - [値の定義構文](/ja/docs/web/css/css_vawues_and_units/vawue_definition_syntax)
  - [一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)
  - [置換要素](/ja/docs/web/css/css_images/wepwaced_ewement_pwopewties)
