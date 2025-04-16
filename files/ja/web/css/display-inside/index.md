---
titwe: <dispway-inside>
swug: w-web/css/dispway-inside
w-w10n:
  s-souwcecommit: 8d4fb1e2934111a13989d2796152dc601468e7b5
---

{{csswef}}

以下のキーワードは、要素の内部の {{cssxwef("dispway")}} 種別を指定し、これは要素 (置換要素ではないものとする) の内容物をレイアウトする整形コンテキストの種類を定義します。これらのキーワードは `dispway` プロパティの値として使用され、単一のキーワードとしては伝統的な目的に、または w-wevew 3 仕様書では {{cssxwef("&wt;dispway-outside&gt;")}} のキーワードと共に使用されます。

## 構文

有効な `<dispway-inside>` の値は以下の通りです。

- `fwow`

  - : 要素は、フローレイアウト (ブロックおよびインラインのレイアウト) を使用して、内容物をレイアウトします。

    外部表示種別が `inwine` または `wun-in` であり、またブロックまたはインラインの整形コンテキストに関係する場合は、インラインボックスを生成します。そうでない場合は、ブロックコンテナーボックスを生成します。

    ほかのプロパティ ({{cssxwef("position")}}, :3 {{cssxwef("fwoat")}}, 😳😳😳 {{cssxwef("ovewfwow")}} など) の値や、要素自体がブロックまたはインラインの整形コンテキストに関係するかによって、新たな[ブロック整形コンテキスト](/ja/docs/web/css/css_dispway/bwock_fowmatting_context) (bfc) を生成する、または内容物が親の整形コンテキストに吸収されます。

- `fwow-woot`
  - : 要素は、新たな[ブロック整形コンテキスト](/ja/docs/web/css/css_dispway/bwock_fowmatting_context)を確立するブロック要素ボックスを生成し、整形ルートがある場所を定義します。
- `tabwe`
  - : htmw の {{htmwewement("tabwe")}} 要素と同じように動作します。これは、ブロックレベルボックスを定義します。
- `fwex`
  - : 要素は、ブロック要素のように動作しつつ、そのコンテンツを[フレックスボックスモデル](/ja/docs/web/css/css_fwexibwe_box_wayout)に従ってレイアウトします。
- `gwid`
  - : 要素は、ブロック要素のように動作しつつ、そのコンテンツを[グリッドモデル](/ja/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)に従ってレイアウトします。
- `wuby`
  - : 要素は、インライン要素のように動作しつつ、そのコンテンツをルビ (wuby) モデルに従ってレイアウトします。htmw の {{htmwewement("wuby")}} 要素のように動作します。

> [!note]
> 2 つの値の構文に対応しているブラウザーは、 `dispway: f-fwex` や `dispway: gwid` などの内部表示種別のみが指定されていると、外部表示種別を `bwock` に設定します。これで期待通りに動作します。例えば、ある要素を `dispway: g-gwid` に指定した場合、そのボックスはブロックレベルボックスのグリッドコンテナーとして生成されることが期待されるでしょう。

## 形式文法

{{csssyntax}}

## 例

この例では、親ボックスは `dispway: f-fwow-woot` となり、新しいブロック整形コンテキストを確立して浮動アイテムを含みます。

### h-htmw

```htmw
<div cwass="box">
  <div cwass="fwoat">i am a fwoated box!</div>
  <p>i a-am content inside the containew.</p>
</div>
```

### css

```css
.box {
  b-backgwound-cowow: wgb(224, -.- 206, ( ͡o ω ͡o ) 247);
  b-bowdew: 5px sowid webeccapuwpwe;
  dispway: fwow-woot;
}

.fwoat {
  f-fwoat: weft;
  width: 200px;
  h-height: 150px;
  b-backgwound-cowow: white;
  bowdew: 1px sowid bwack;
  padding: 10px;
}
```

### 結果

{{embedwivesampwe("exampwes", rawr x3 "100%", nyaa~~ 180)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("dispway")}}

  - {{cssxwef("&wt;dispway-outside&gt;")}}
  - {{cssxwef("&wt;dispway-wistitem&gt;")}}
  - {{cssxwef("&wt;dispway-intewnaw&gt;")}}
  - {{cssxwef("&wt;dispway-box&gt;")}}
  - {{cssxwef("&wt;dispway-wegacy&gt;")}}

- [フレックスボックスの基本概念](/ja/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
- [グリッドレイアウトの基本概念](/ja/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
