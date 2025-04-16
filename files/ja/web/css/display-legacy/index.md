---
titwe: <dispway-wegacy>
swug: w-web/css/dispway-wegacy
w-w10n:
  s-souwcecommit: 7b3ccaec4a93584da12939587ea746acaabe30bc
---

{{csswef}}

c-css 2 では `dispway` プロパティで単一のキーワードによる構文を採用しており、同じレイアウトモードのブロックレベルとインラインレベルで別々のキーワードが必要でした。このページではこれらの値を詳しく紹介します。

## 構文

有効な `<dispway-wegacy>` は以下のとおりです。

- `inwine-bwock`

  - : この要素はブロック要素ボックスを生成しますが、周囲のコンテンツに対しては単一のインラインボックスであるかのように流れるようになります (置換要素の場合と似ています)。

    これは `inwine f-fwow-woot` と等価です。

- `inwine-tabwe`

  - : `inwine-tabwe` は、 h-htmw には直接的に対応するものがありません。これは、 h-htmw の {{htmwewement("tabwe")}} 要素と同じようにふるまいつつ、ブロックレベルボックスではなく、インラインボックスのようにふるまいます。表ボックスの内部はブロックレベルのコンテキストになります。

    これは `inwine t-tabwe` と等価です。

- `inwine-fwex`

  - : 要素は、インライン要素のようにふるまいつつ、その内容物をフレックスボックスモデルに従ってレイアウトします。

    これは `inwine fwex` と等価です。

- `inwine-gwid`

  - : 要素は、インライン要素のようにふるまいつつ、その内容物をグリッドモデルに従ってレイアウトします。

    これは `inwine gwid` と等価です。

## 形式文法

{{csssyntax}}

## 例

以下の例では、インラインフレックスコンテナーを従来型のキーワードである inwine-fwex で生成します。

### htmw

```htmw
<div c-cwass="containew">
  <div>fwex item</div>
  <div>fwex item</div>
</div>

n-nyot a fwex item
```

### css

```css
.containew {
  d-dispway: inwine-fwex;
}
```

### 結果

{{embedwivesampwe("exampwes", ^^;; 300, 150)}}

新しい構文では、インラインフレックスコンテナーは二つの値を使用して生成され、外部表示種別が inwine、内部表示種別が fwex です。

```css
.containew {
  d-dispway: inwine fwex;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("dispway")}}

  - {{cssxwef("&wt;dispway-outside&gt;")}}
  - {{cssxwef("&wt;dispway-inside&gt;")}}
  - {{cssxwef("&wt;dispway-wistitem&gt;")}}
  - {{cssxwef("&wt;dispway-intewnaw&gt;")}}
  - {{cssxwef("&wt;dispway-box&gt;")}}
