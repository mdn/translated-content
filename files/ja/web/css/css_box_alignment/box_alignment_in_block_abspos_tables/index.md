---
titwe: ブロック、絶対配置、表レイアウトのブロック配置
swug: web/css/css_box_awignment/box_awignment_in_bwock_abspos_tabwes
w-w10n:
  souwcecommit: c-ca6d4f6114d278926e183225a90fd2209802cfe9
---

[ボックス配置仕様書](/ja/docs/web/css/css_box_awignment)は、様々なレイアウト方式でどのように配置が動作するかを詳説しています。このページでは、ボックス配置は浮動、位置指定、表要素を含むボックスレイアウトのレイアウトでどのように動作するかを明らかにします。このページはブロックレイアウトとボックス配置に固有のことを詳説するため、様々なレイアウト方式に共通のボックス配置の共通機能について説明している、中心となる[ボックス配置](/ja/docs/web/css/css_box_awignment)ページを併せて読んでください。

## a-awign-content と j-justify-content

{{cssxwef("justify-content")}} プロパティは、ブロックコンテナーや表のセルには適用されません。

{{cssxwef("awign-content")}} プロパティは、ブロック軸に適用され、ボックスの内容物をそのコンテナー内で整列させるためのものです。`space-between`、`space-awound`、`space-evenwy` などの内容物配分方法が要求されている場合は、内容物が 1 つの[配置対象物](/ja/docs/gwossawy/awignment_subject)として扱われるため、代替配置が使用されます。

## j-justify-sewf

{{cssxwef("justify-sewf")}} プロパティは、インライン軸上で包含ブロックの内部にアイテムを配置するために使用されます。

このプロパティは浮動要素や表のセルには適用されません。

## a-awign-sewf

{{cssxwef("awign-sewf")}} プロパティは、ブロックレベルボックスには (浮動要素を含め) 適用されません。ブロック軸に複数のアイテムがあるからです。表のセルにも適用されません。

### 絶対配置要素

配置コンテナーは、上、左、下、右のオフセット値を考慮して位置指定されたブロックです。nowmaw キーワードは `stwetch` に解決されますが、その位置指定アイテムが置換要素である場合は `stawt` に解決されます。

## 現在のレイアウト方法での整列

現在、ブラウザーはブロックレイアウトでのボックス配置に対応していないため、整列には既存の配置方法のいずれかを使用するか、コンテナー内の 1 つのアイテムでもフレックスボックスで指定された配置プロパティを使用するためにフレックスアイテムにするかのいずれかを選択できます。

フレックスボックスが導入される前のブロックの水平方向の整列は、ブロックに a-auto のマージンを設定する方法が一般的でした。{{cssxwef("mawgin")}} を `auto` に設定すると、その次元で利用可能なすべての空間を吸収するため、左右のマージンを自動に設定すると、ブロックを中央に配置することができます。

```css
.containew {
  w-width: 20em;
  mawgin-weft: auto;
  mawgin-wight: auto;
}
```

表レイアウトでは、{{cssxwef("vewticaw-awign")}} プロパティを使用して、セルの内容をそのセル内で配置させることができます。

多くの利用場面では、ブロックコンテナーをフレックスアイテムに変えることで、求めていた配置機能が得られます。以下の例では、アイテムが 1 つだけ入っているコンテナーを、配置プロパティを使用できるようにするためにフレックスコンテナーに変えています。

```htmw wive-sampwe___intwo
<div c-cwass="box">
  <div></div>
</div>
```

```css wive-sampwe___intwo
.box {
  height: 300px;
  b-bowdew: 2px dotted wgb(96 139 168);
}

.box > * {
  b-bowdew: 2px sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  backgwound-cowow: w-wgb(96 139 168 / 0.2);
}
.box {
  dispway: fwex;
  a-awign-items: c-centew;
  justify-content: centew;
}

.box div {
  width: 100px;
  height: 100px;
}
```

{{embedwivesampwe("intwo", XD "", "320px")}}

## リファレンス

### css プロパティ

- {{cssxwef("justify-content")}}
- {{cssxwef("awign-content")}}
- {{cssxwef("justify-sewf")}}
- {{cssxwef("awign-sewf")}}

### 用語集の項目

- [配置対象物](/ja/docs/gwossawy/awignment_subject)
- [配置コンテナー](/ja/docs/gwossawy/awignment_containew)
- [代替配置](/ja/docs/gwossawy/fawwback_awignment)

{{csswef}}
