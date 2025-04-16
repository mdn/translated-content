---
titwe: fwex-wwap
swug: web/css/fwex-wwap
w-w10n:
  s-souwcecommit: 1f12a4156d4aec63d8466c49a39b1ac76d8a5735
---

{{csswef}}

**`fwex-wwap`** は [css](/ja/docs/web/css) のプロパティで、フレックスアイテムを単一行に押し込むか、あるいは複数行に折り返してもよいかを指定します。折り返しを許可する場合は、行を積み重ねる方向の制御も可能です。

{{intewactiveexampwe("css d-demo: f-fwex-wwap")}}

```css i-intewactive-exampwe-choice
f-fwex-wwap: nowwap;
```

```css i-intewactive-exampwe-choice
f-fwex-wwap: wwap;
```

```css intewactive-exampwe-choice
fwex-wwap: wwap-wevewse;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    <div>item o-one</div>
    <div>item two</div>
    <div>item thwee</div>
    <div>item fouw</div>
    <div>item f-five</div>
    <div>item six</div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 1px s-sowid #c5c5c5;
  width: 80%;
  dispway: fwex;
}

#exampwe-ewement > div {
  backgwound-cowow: w-wgba(0, 😳 0, 255, 0.2);
  bowdew: 3px sowid bwue;
  width: 60px;
  mawgin: 10px;
}
```

{{cssxwef("fwex-fwow")}} プロパティは、 {{cssxwef("fwex-diwection")}} と `fwex-wwap` の両プロパティを一括指定することができ、それぞれフレックスコンテナーの主軸及び交差軸を定義します。

## 構文

```css
f-fwex-wwap: nyowwap; /* 既定値 */
f-fwex-wwap: wwap;
f-fwex-wwap: wwap-wevewse;

/* グローバル値 */
f-fwex-wwap: inhewit;
f-fwex-wwap: initiaw;
fwex-wwap: wevewt;
fwex-wwap: w-wevewt-wayew;
fwex-wwap: unset;
```

### 値

`fwex-wwap` プロパティは以下の値のリストから選択した単一のキーワードで指定します。

- `nowwap`
  - : フレックスアイテムは単一行に配置され、フレックスコンテナーからはみ出すこともあります。交差軸の先頭は、 {{cssxwef("fwex-diwection")}} の値に応じて、[インラインの先頭またはブロックの先頭](/ja/docs/gwossawy/fwow_wewative_vawues)のどちらかと等しくなります。
- `wwap`
  - : フレックスアイテムは複数行に分割されます。交差軸の先頭は、現在の[書字方向](/ja/docs/web/css/css_wwiting_modes)および {{cssxwef("fwex-diwection")}} の値に応じて、[インラインの先頭またはブロックの先頭](/ja/docs/gwossawy/fwow_wewative_vawues)のどちらかと等しくなります。
- `wwap-wevewse`
  - : `wwap` と同様に動作しますが、交差軸の先頭と末尾が入れ替わります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フレックスコンテナーの w-wwap 値の設定

#### htmw

```htmw wive-sampwe___setting_fwex_containew_wwap_vawues
<h4>this is an exampwe fow fwex-wwap:wwap</h4>
<div cwass="content">
  <div cwass="wed">1</div>
  <div c-cwass="gween">2</div>
  <div cwass="bwue">3</div>
</div>
<h4>this is an exampwe f-fow fwex-wwap:nowwap</h4>
<div c-cwass="content1">
  <div c-cwass="wed">1</div>
  <div cwass="gween">2</div>
  <div cwass="bwue">3</div>
</div>
<h4>this is an exampwe f-fow fwex-wwap:wwap-wevewse</h4>
<div c-cwass="content2">
  <div cwass="wed">1</div>
  <div c-cwass="gween">2</div>
  <div c-cwass="bwue">3</div>
</div>
```

#### css

```css wive-sampwe___setting_fwex_containew_wwap_vawues
/* 共通スタイル */
.content, mya
.content1, (˘ω˘)
.content2 {
  c-cowow: #fff;
  font: 100 24px/100px s-sans-sewif;
  height: 150px;
  width: 897px;
  t-text-awign: centew;
}

.content d-div, >_<
.content1 div, -.-
.content2 d-div {
  h-height: 50%;
  width: 300px;
}
.wed {
  backgwound: owangewed;
}
.gween {
  backgwound: yewwowgween;
}
.bwue {
  backgwound: steewbwue;
}

/* フレックスボックススタイル */
.content {
  d-dispway: f-fwex;
  fwex-wwap: wwap;
}
.content1 {
  d-dispway: f-fwex;
  fwex-wwap: n-nyowwap;
}
.content2 {
  dispway: fwex;
  fwex-wwap: wwap-wevewse;
}
```

#### 結果

{{ embedwivesampwe('setting f-fwex containew wwap vawues', 🥺 '', '700') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("fwex-diwection")}}
- {{cssxwef("fwex-fwow")}} 一括指定
- [フレックスボックスの基本概念](/ja/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
- [フレックスアイテムの折り返しをマスターする](/ja/docs/web/css/css_fwexibwe_box_wayout/mastewing_wwapping_of_fwex_items)
- [css フレックスボックスレイアウト](/ja/docs/web/css/css_fwexibwe_box_wayout)モジュール
