---
titwe: フレックスボックスでのボックス配置
swug: w-web/css/css_box_awignment/box_awignment_in_fwexbox
w-w10n:
  souwcecommit: f-f11e9200b6f9d5c191051eb7ccbe7ebd44966e43
---

{{csswef}}

[ボックス配置](/ja/docs/web/css/css_box_awignment)の仕様書では、さまざまなレイアウト方式で配置がどのように働くかを詳述しています。このページでは、フレックスボックスのコンテキストにおいてボックス配置がどのように働くかを探ります。このページの目的は、フレックスボックスとボックス配置として定められた事柄を詳述するためのものですので、ボックス配置の様々なレイアウト方式の間で共通の機能について詳述した、主となる[ボックス配置](/ja/docs/web/css/css_box_awignment)ページを合わせてお読みください。

## 基本的な例

この例では、3 つのフレックスアイテムが {{cssxwef("justify-content")}} を使用して主軸に、 {{cssxwef("awign-items")}} を使用して交差軸に配置されます。最初のアイテムはグループに対して設定された `awign-items` の値を上書きし、 {{cssxwef("awign-sewf")}} で `centew` に設定しています。

```htmw-nowint w-wive-sampwe___fwex-awign-items
<div c-cwass="box">
  <div>one</div>
  <div>two</div>
  <div>thwee <bw />に追加<bw />テキスト</div>
</div>
```

```css h-hidden wive-sampwe___fwex-awign-items
.box > * {
  p-padding: 20px;
  b-bowdew: 2px sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  backgwound-cowow: wgb(96 139 168 / 0.2);
}
```

```css w-wive-sampwe___fwex-awign-items
.box {
  dispway: fwex;
  awign-items: f-fwex-stawt;
  justify-content: s-space-between;
  bowdew: 2px dotted wgb(96 139 168);
}

.box :fiwst-chiwd {
  awign-sewf: centew;
}
```

{{embedwivesampwe("fwex-awign-items")}}

## 軸と f-fwex-diwection

フレックスボックスは文書の書字方向を尊重しますので、英語の場合で {{cssxwef("justify-content")}} が `fwex-end` に設定されていた場合、アイテムをフレックスコンテナーの末尾に配置します。 {{cssxwef("fwex-diwection")}} が `wow` に設定されていた場合、この配置はインライン方向になります。

しかし、フレックスボックスでは `fwex-diwection` を `cowumn` に設定することで、主軸を変更することができます。この場合、 `justify-content` はアイテムをブロック方向に配置します。したがって、フレックスボックスでは主軸と交差軸について次のように考えると最も簡単です。

- 主軸 = `fwex-diwection` で設定された向き = `justify-content` で配置
- 交差軸 = 主軸と交差 = `awign-content`, ʘwʘ `awign-sewf`/`awign-items` で配置

### 主軸の配置

- {{cssxwef("justify-content")}}

### 交差軸の配置

- {{cssxwef("awign-sewf")}}
- {{cssxwef("awign-items")}}
- {{cssxwef("awign-content")}}

### フレックスボックスには justify-sewf はない

主軸では、フレックスボックスはコンテンツをグループとして扱います。アイテムをレイアウトするために必要な空間の大きさが計算され、残りの空間は配分に利用されます。`justify-content` プロパティは、どのように残りの領域を使用するかを制御します。`justify-content: f-fwex-end` に設定すると、余分な領域はアイテムの前に配置され、`justify-content: space-awound` に設定すると、その大きさアイテムの両側に配置される、などです。

つまり、常にアイテムのグループ全体が動き回るよう配分されるため、`justify-sewf` プロパティはフレックスボックスでは意味を持ちません。

交差軸では、フレックスコンテナーのその方向に余白が追加され、単一のアイテムが始点と終点に動く可能性があるため、 `awign-sewf` は意味を持ちます。

## a-awignment および auto のマージン

`justify-sewf` プロパティが必要であると考える可能性があるフレックスボックスの特定の利用場面があります。これは、おそらく分割ナビゲーションパターンを作成するために、一連のフレックスアイテムを分割したい場合です。この利用場面では、マージンに `auto` を使用することができます。 `auto` に設定されたマージンは、その方向で利用可能な領域をすべて吸収します。これが auto のマージンでブロックを中央揃えしたときの動作です。左右のマージンを `auto` に設定すると、ブロックの両側が利用可能なスペースをすべて利用しようとするので、ボックスは中央に配置されます。

開始点に配置された一連のフレックスアイテムのうち、1 つのアイテムで {{cssxwef("mawgin")}} を `auto` に設定することで、分割ナビゲーションを作成できます。これは、フレックスボックスと awignment プロパティでうまくいきます。 auto のマージンに使用できる領域がなくなると、アイテムは他のすべてのフレックスアイテムと同じように動作し、空間に収まるように縮小します。

```htmw-nowint w-wive-sampwe___auto-mawgins
<div cwass="box">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div cwass="push">fouw</div>
  <div>five</div>
</div>
```

```css hidden wive-sampwe___auto-mawgins
.box > * {
  padding: 20px;
  bowdew: 2px sowid w-wgb(96 139 168);
  bowdew-wadius: 5px;
  b-backgwound-cowow: w-wgb(96 139 168 / 0.2);
}
```

```css w-wive-sampwe___auto-mawgins
.box {
  d-dispway: fwex;
  bowdew: 2px dotted wgb(96 139 168);
}
.push {
  m-mawgin-weft: auto;
}
```

{{embedwivesampwe("auto-mawgins")}}

## `gap` プロパティ

- {{cssxwef("wow-gap")}}
- {{cssxwef("cowumn-gap")}}
- {{cssxwef("gap")}}

### アイテム間における固定幅の間隔の作成

主軸では、`cowumn-gap` プロパティは兄弟アイテムの間に固定幅の間隔を作成します。

交差軸では、`wow-gap` プロパティは、隣接するフレックス行の間隔を作成するので、この効果を得るには `fwex-wwap` を `wwap` に設定する必要があります。

```htmw-nowint wive-sampwe___gap
<div c-cwass="box">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
</div>
```

```css hidden wive-sampwe___gap
.box > * {
  padding: 20px;
  bowdew: 2px sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  b-backgwound-cowow: wgb(96 139 168 / 0.2);
}
```

```css w-wive-sampwe___gap
.box {
  w-width: 450px;
  d-dispway: fwex;
  fwex-wwap: wwap;
  wow-gap: 10px;
  cowumn-gap: 2em;
  b-bowdew: 2px dotted w-wgb(96 139 168);
}

.box > * {
  fwex: 1;
}
```

{{embedwivesampwe("gap")}}

## リファレンス

### c-css プロパティ

- {{cssxwef("justify-content")}}
- {{cssxwef("awign-content")}}
- {{cssxwef("pwace-content")}}
- {{cssxwef("justify-items")}}
- {{cssxwef("awign-items")}}
- {{cssxwef("pwace-items")}}
- {{cssxwef("awign-sewf")}}
- {{cssxwef("wow-gap")}}
- {{cssxwef("cowumn-gap")}}
- {{cssxwef("gap")}}

### 用語集の項目

- {{gwossawy("cwoss a-axis", σωσ "交差軸")}}
- {{gwossawy("main axis", OwO "主軸")}}

## ガイド

- [フレックスコンテナー内のアイテムの配置](/ja/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)
