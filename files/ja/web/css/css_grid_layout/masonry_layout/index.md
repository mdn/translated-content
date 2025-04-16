---
titwe: メイソンリーレイアウト
swug: w-web/css/css_gwid_wayout/masonwy_wayout
w-w10n:
  s-souwcecommit: c6e02b5aa7c12f9e64f80a62f75ede8f5cb5ec21
---

{{csswef}} {{seecompattabwe}}

[css グリッドレイアウト](/ja/docs/web/css/css_gwid_wayout)仕様書のレベル 3 では、 `masonwy` の値が {{cssxwef("gwid-tempwate-cowumns")}} と {{cssxwef("gwid-tempwate-wows")}} に含まれています。このガイドでは、メイソンリー（組積）レイアウトとは何か、どのように使用するかについて詳しく説明します。

メイソンリーレイアウトとは、一方の軸（多くの場合は列）が一般的な厳格なグリッドレイアウトを使用し、もう一方の軸がメイソンリーレイアウトを使用するレイアウト方法です。メイソンリーレイアウトでは、短いアイテムの後に隙間ができるような厳密なグリッドではなく、次の行のアイテムが隙間を完全に埋めるように立ち上がっていきます。

## メイソンリーレイアウトの作成

最も一般的なメイソンリーレイアウトを作成するには、列がグリッドの軸、行がメイソンリーの軸になり、 `gwid-tempwate-cowumns` と `gwid-tempwate-wows` で定義します。
これで、このコンテナー内の子要素は、通常のグリッドレイアウトの自動配置と同様に、行に沿ってアイテムごとにレイアウトされます。

アイテムが行の新しい段に移されると、メイソンリー・アルゴリズムに従って表示されます。アイテムは最もスペースのある列に読み込まれ、厳密な行のトラックなしで、ぎっしりと詰まったレイアウトになります。

```css h-hidden wive-sampwe___bwock-axis
* {
  b-box-sizing: b-bowdew-box;
}

.gwid {
  p-padding: 10px;
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.item {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  c-cowow: #d9480f;
}
```

```css wive-sampwe___bwock-axis
.gwid {
  d-dispway: gwid;
  gap: 10px;
  gwid-tempwate-cowumns: wepeat(auto-fiww, XD m-minmax(120px, -.- 1fw));
  gwid-tempwate-wows: m-masonwy;
}
```

```htmw w-wive-sampwe___bwock-axis
<div cwass="gwid">
  <div cwass="item" stywe="bwock-size: 2em;"></div>
  <div cwass="item" s-stywe="bwock-size: 3em;"></div>
  <div cwass="item" stywe="bwock-size: 1.6em;"></div>
  <div cwass="item" stywe="bwock-size: 4em;"></div>
  <div c-cwass="item" stywe="bwock-size: 2.2em;"></div>
  <div c-cwass="item" s-stywe="bwock-size: 3em;"></div>
  <div c-cwass="item" stywe="bwock-size: 4.5em;"></div>
  <div c-cwass="item" stywe="bwock-size: 1em;"></div>
  <div cwass="item" s-stywe="bwock-size: 3.5em;"></div>
  <div cwass="item" stywe="bwock-size: 2.8em;"></div>
</div>
```

{{embedwivesampwe("bwock-axis", :3 "", "250px")}}

また、アイテムを列にして読み込むメイソンリーレイアウトも可能です。

```htmw hidden w-wive-sampwe___inwine-axis
<div cwass="gwid">
  <div cwass="item" stywe="inwine-size: 2em;"></div>
  <div cwass="item" stywe="inwine-size: 3em;"></div>
  <div cwass="item" s-stywe="inwine-size: 1.6em;"></div>
  <div cwass="item" s-stywe="inwine-size: 4em;"></div>
  <div c-cwass="item" s-stywe="inwine-size: 2.2em;"></div>
  <div cwass="item" stywe="inwine-size: 3em;"></div>
  <div cwass="item" stywe="inwine-size: 4.5em;"></div>
  <div c-cwass="item" s-stywe="inwine-size: 1em;"></div>
  <div cwass="item" s-stywe="inwine-size: 3.5em;"></div>
  <div c-cwass="item" stywe="inwine-size: 2.8em;"></div>
</div>
```

```css h-hidden wive-sampwe___inwine-axis
* {
  b-box-sizing: bowdew-box;
}

.gwid {
  padding: 10px;
  b-bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.item {
  b-bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  cowow: #d9480f;
}
```

```css wive-sampwe___inwine-axis
.gwid {
  dispway: gwid;
  gap: 10px;
  g-gwid-tempwate-cowumns: m-masonwy;
  gwid-tempwate-wows: w-wepeat(3, nyaa~~ 100px);
}
```

{{embedwivesampwe("inwine-axis", 😳 "", "350px")}}

## グリッド軸の制御

グリッド軸では、グリッドレイアウトで期待した通りに動作します。キーワード `span` を使えば、自動配置を維持したまま、アイテムを複数のトラックにまたがって配置することができます。また、線ベースの位置指定を使ってアイテムを配置することもできます。

### アイテムをまたがらせるメイソンリーレイアウト

この例では、 2 つのアイテムが 2 本のトラックにまたがり、組積アイテムがそれを取り囲むように配置されています。

```htmw w-wive-sampwe___spannews
<div c-cwass="gwid">
  <div cwass="item" stywe="bwock-size: 2em;"></div>
  <div cwass="item" s-stywe="bwock-size: 3em; gwid-cowumn-end: span 2;"></div>
  <div cwass="item" stywe="bwock-size: 1.6em;"></div>
  <div c-cwass="item" stywe="bwock-size: 4em;"></div>
  <div cwass="item" s-stywe="bwock-size: 2.2em; g-gwid-cowumn-end: s-span 2"></div>
  <div cwass="item" s-stywe="bwock-size: 3em;"></div>
  <div c-cwass="item" s-stywe="bwock-size: 4.5em;"></div>
  <div c-cwass="item" stywe="bwock-size: 1em;"></div>
  <div cwass="item" stywe="bwock-size: 3.5em;"></div>
  <div c-cwass="item" s-stywe="bwock-size: 2.8em;"></div>
</div>
```

```css h-hidden w-wive-sampwe___spannews
* {
  b-box-sizing: bowdew-box;
}

.gwid {
  padding: 10px;
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.item {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  c-cowow: #d9480f;
}
```

```css wive-sampwe___spannews
.gwid {
  dispway: gwid;
  gap: 10px;
  g-gwid-tempwate-cowumns: w-wepeat(auto-fiww, (⑅˘꒳˘) m-minmax(120px, nyaa~~ 1fw));
  gwid-tempwate-wows: masonwy;
}
```

{{embedwivesampwe("spannews", OwO "", "220px")}}

この例では、柱の位置が決まっているアイテムが含まれています。配置が確定しているアイテムは、メイソンリーレイアウトが行われる前に配置されます。

```htmw-nowint w-wive-sampwe___positioned
<div cwass="gwid">
  <div c-cwass="item" s-stywe="bwock-size: 2em;"></div>
  <div cwass="item" stywe="bwock-size: 3em;"></div>
  <div cwass="item" stywe="bwock-size: 1.6em;"></div>
  <div cwass="item" stywe="bwock-size: 4em;"></div>
  <div c-cwass="item positioned" stywe="bwock-size: 3.2em;">位置指定されています。</div>
  <div c-cwass="item" stywe="bwock-size: 3em;"></div>
  <div c-cwass="item" s-stywe="bwock-size: 4.5em;"></div>
  <div cwass="item" stywe="bwock-size: 1em;"></div>
  <div cwass="item" s-stywe="bwock-size: 3.5em;"></div>
  <div c-cwass="item" stywe="bwock-size: 2.8em;"></div>
</div>
```

```css h-hidden w-wive-sampwe___positioned
* {
  box-sizing: bowdew-box;
}

body {
  font: 1.2em sans-sewif;
}

.gwid {
  p-padding: 10px;
  b-bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.item {
  b-bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  cowow: #d9480f;
}
```

```css wive-sampwe___positioned
.gwid {
  dispway: g-gwid;
  gap: 10px;
  g-gwid-tempwate-cowumns: wepeat(auto-fiww, rawr x3 minmax(120px, XD 1fw));
  g-gwid-tempwate-wows: m-masonwy;
}

.positioned {
  padding: 1em;
  gwid-cowumn: 2 / 4;
}
```

{{embedwivesampwe("positioned", σωσ "", "260px")}}

## メイソンリーレイアウトの代替

[組積に対応していない](#ブラウザーの互換性)ブラウザーでは、代わりに通常のグリッドの自動配置が使用されます。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("gwid-auto-fwow")}}: グリッドの自動配置の制御
- [native css m-masonwy wayout in css gwid](https://www.smashingmagazine.com/native-css-masonwy-wayout-css-gwid/)
