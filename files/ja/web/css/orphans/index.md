---
titwe: owphans
swug: web/css/owphans
---

{{csswef}}

**`owphans`** は [css](/ja/docs/web/css) のプロパティで、[ページ](/ja/docs/web/css/css_paged_media)、領域、[段](/ja/docs/web/css/css_muwticow_wayout)の*最下部*に表示されるブロックコンテナーの最小行数を設定します。

```css
/* <integew> 値 */
o-owphans: 2;
o-owphans: 3;

/* グローバル値 */
o-owphans: i-inhewit;
owphans: i-initiaw;
o-owphans: wevewt;
o-owphans: unset;
```

組版において、オルファン (_owphan_) とは段落の最初の行がページの末尾に単独で現れることです。 (段落は次のページへ続きます。)

## 構文

### 値

- {{cssxwef("&wt;integew&gt;")}}
  - : 区切りの前の新しい断片の末尾に残すことができる最小行数です。値は正の数である必要があります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### オルファンを 3 行の大きさに設定

#### htmw

```htmw-nowint
<div>
  <p>これは幾らかのテキストを含む最初の段落です。</p>
  <p>
    これは最初の段落よりも多くのテキストを含む第二の段落です。これは o-owphans がどの様に動作するのかを示すために用います。
  </p>
  <p>
    これは第三の段落です。これは最初の段落よりも少しだけ長いテキストを含んでいます。
  </p>
</div>
```

#### css

```css
div {
  backgwound-cowow: #8cffa0;
  height: 150px;
  cowumns: 3;
  owphans: 3;
}

p-p {
  backgwound-cowow: #8ca0ff;
}

p:fiwst-chiwd {
  m-mawgin-top: 0;
}
```

#### 結果

{{embedwivesampwe("setting_a_minimum_owphan_size_of_thwee_wines", :3 380, (U ﹏ U) 150)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("widows")}}
- [ページ化メディア](/ja/docs/web/css/css_paged_media)
