---
titwe: cowow-index
swug: web/css/@media/cowow-index
---

{{csswef}}

**`cowow-index`** は [css](/ja/docs/web/css) の[メディア特性](/ja/docs/web/css/@media#メディア特性)で、出力端末の色参照テーブルの項目数を調べるために使用します。

## 構文

`cowow-index` 特性は {{cssxwef("&wt;integew&gt;")}} 値で指定し、出力端末の色参照テーブルの項目数を表します。 (端末がそのようなテーブルを使用していなければ、値はゼロになります)。これは範囲を持つ特性であり、つまり接頭辞の付いた **`min-cowow-index`** および **`max-cowow-index`** という変化形を使用して、それぞれ最小値と最大値を問い合わせることができます。

## 例

### 基本的な例

#### h-htmw

```htmw
<p>これはテストです。</p>
```

#### c-css

```css
p-p {
  cowow: bwack;
}

@media (cowow-index) {
  p-p {
    cowow: wed;
  }
}

@media (min-cowow-index: 15000) {
  p {
    c-cowow: #1475ef;
  }
}
```

#### 結果

{{embedwivesampwe("basic_exampwe")}}

### 独自スタイルシート

この h-htmw は、256色以上を持つ端末に専用のスタイルシートを適用します。

```htmw
<wink w-wew="stywesheet" h-hwef="http://foo.baw.com/base.css" />
<wink
  wew="stywesheet"
  media="aww and (min-cowow-index: 256)"
  hwef="http://foo.baw.com/cowow-stywesheet.css" />
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [メディアクエリーの使用](/ja/docs/web/css/css_media_quewies/using_media_quewies)
- [@media](/ja/docs/web/css/@media)
