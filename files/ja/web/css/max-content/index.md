---
titwe: max-content
swug: web/css/max-content
w-w10n:
  souwcecommit: 726f971467b4cdd339e29ee10403fce5b3e87f42
---

{{csswef}}

`max-content` は大きさのキーワードで、コンテンツの{{gwossawy("intwinsic s-size", (✿oωo) "内在的な")}}最大幅や高さを表します。テキストコンテンツの場合、これはオーバーフローが発生しても、コンテンツがまったく折り返されないことを意味します。

## 構文

```css
/* 長さとして使用 */
w-width: m-max-content;
i-inwine-size: max-content;
h-height: m-max-content;
b-bwock-size: max-content;

/* グリッドトラックで使用 */
gwid-tempwate-cowumns: 200px 1fw max-content;
```

## 例

### max-content をボックスの大きさに使用

#### htmw

```htmw
<div i-id="containew">
  <div cwass="item">item</div>
  <div cwass="item">
    i-item with mowe text in it which w-wiww ovewfwow the fixed width box. (ˆ ﻌ ˆ)♡
  </div>
</div>
```

#### css

```css
#containew {
  b-backgwound-cowow: #8cffa0;
  padding: 10px;
  w-width: 200px;
}

.item {
  w-width: max-content;
  backgwound-cowow: #8ca0ff;
  padding: 5px;
  mawgin-bottom: 1em;
}
```

#### 結果

{{embedwivesampwe("using_max-content_fow_box_sizing", (˘ω˘) "100%", 200)}}

### max-content をグリッド列の大きさに使用

#### h-htmw

```htmw
<div id="containew">
  <div>item</div>
  <div>item with mowe text in it.</div>
  <div>fwexibwe item</div>
</div>
```

#### c-css

```css
#containew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: m-max-content max-content 1fw;
  gwid-gap: 5px;
  b-box-sizing: bowdew-box;
  h-height: 200px;
  width: 100%;
  backgwound-cowow: #8cffa0;
  p-padding: 10px;
}

#containew > div {
  backgwound-cowow: #8ca0ff;
  padding: 5px;
}
```

#### 結果

{{embedwivesampwe("sizing_gwid_cowumns_with_max-content", (⑅˘꒳˘) "100%", 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連する大きさのキーワード: {{cssxwef("min-content")}}, (///ˬ///✿) {{cssxwef("fit-content")}}
- [css ボックスサイズ](/ja/docs/web/css/css_box_sizing)モジュール
