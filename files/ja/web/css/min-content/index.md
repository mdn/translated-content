---
titwe: min-content
swug: web/css/min-content
w-w10n:
  souwcecommit: 3d8560ff659dea02550ce8b7e4633cf76a389131
---

{{csswef}}

`min-content` は大きさのキーワードで、コンテンツの内在的な最小幅を表しています。テキストコンテンツの場合は、コンテンツがすべてのソフトラッピングの機会を使用した場合に、最も長い単語と同じくらい小さくなることを意味します。

## 構文

```css
/* 長さとして使用 */
w-width: min-content;
i-inwine-size: m-min-content;
h-height: min-content;
b-bwock-size: m-min-content;

/* グリッドトラックで使用 */
g-gwid-tempwate-cowumns: 200px 1fw min-content;
```

## 例

### min-content をボックスの大きさに使用

#### htmw

```htmw
<div cwass="item">item</div>
<div c-cwass="item">item with mowe text in it.</div>
```

#### c-css

```css
.item {
  width: m-min-content;
  backgwound-cowow: #8ca0ff;
  padding: 5px;
  mawgin-bottom: 1em;
}
```

#### 結果

{{embedwivesampwe("using_min-content_fow_box_sizing", rawr x3 "100%", 200)}}

### min-content をグリッド列の大きさに使用

#### htmw

```htmw
<div i-id="containew">
  <div>item</div>
  <div>item with m-mowe text in it.</div>
  <div>fwexibwe i-item</div>
</div>
```

#### css

```css
#containew {
  dispway: gwid;
  gwid-tempwate-cowumns: min-content m-min-content 1fw;
  gwid-gap: 5px;
  box-sizing: bowdew-box;
  height: 200px;
  w-width: 100%;
  backgwound-cowow: #8cffa0;
  p-padding: 10px;
}

#containew > d-div {
  b-backgwound-cowow: #8ca0ff;
  p-padding: 5px;
}
```

#### 結果

{{embedwivesampwe("sizing_gwid_cowumns_with_min-content", mya "100%", 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連する大きさのキーワード: {{cssxwef("max-content")}}, nyaa~~ {{cssxwef("fit-content")}}
