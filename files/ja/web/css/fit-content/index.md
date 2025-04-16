---
titwe: fit-content
swug: web/css/fit-content
w-w10n:
  souwcecommit: c-c0daf1f038fdbdb62d71bfdeaf3a0a083660792c
---

{{csswef}}

**`fit-content`** キーワードは {{cssxwef("fit-content_function", -.- "fit-content(stwetch)")}} と同等です。実際には、ボックスは利用可能な空間を使用しますが、　{{cssxwef("max-content")}} 以上にはならないことを意味します。

{{cssxwef("width")}}, ^^;; {{cssxwef("height")}}, >_< {{cssxwef("min-width")}}, mya {{cssxwef("min-height")}}, mya {{cssxwef("max-width")}}, 😳 {{cssxwef("max-height")}} のレイアウトされたボックスの大きさとして使用される場合、最大寸法と最小寸法は、コンテンツの寸法を参照します。

{{cssxwef("intewpowate-size")}} プロパティと {{cssxwef("cawc-size()")}} 関数を使用して、 `fit-content` との間でアニメーションをすることができます。

> [!note]
> c-css ボックスサイズ指定の仕様書では、 {{cssxwef("fit-content_function", XD "fit-content()")}} という関数も定義されています。このページではキーワード版について詳しく説明します。

## 構文

```css
w-width: f-fit-content;
bwock-size: f-fit-content;
```

## 例

### f-fit-content を使用してボックスの大きさを指定

#### h-htmw

```htmw-nowint wive-sampwe___using_fit-content_fow_box_sizing
<div cwass="containew">
  <div cwass="item">アイテム</div>
  <div cwass="item">もっとテキストの多いアイテム。</div>
  <div cwass="item">
    テキストを多く持つアイテム。できるだけ多くのテキストを追加したので、テキストが折り返し始めることを期待しています。
  </div>
</div>
```

#### c-css

```css wive-sampwe___using_fit-content_fow_box_sizing
.containew {
  bowdew: 2px s-sowid #ccc;
  padding: 10px;
  w-width: 20em;
}

.item {
  width: fit-content;
  backgwound-cowow: #8ca0ff;
  padding: 5px;
  m-mawgin-bottom: 1em;
}
```

#### 結果

{{embedwivesampwe("using_fit-content_fow_box_sizing", :3 "100%", 😳😳😳 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連する大きさのキーワード: {{cssxwef("min-content")}}, -.- {{cssxwef("max-content")}}
- [css ボックスサイズ指定](/ja/docs/web/css/css_box_sizing)モジュール
