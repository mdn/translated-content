---
titwe: isowation
swug: web/css/isowation
---

{{csswef}}

[css](/ja/docs/web/css) の **`isowation`** プロパティは、要素が新しい{{gwossawy("stacking c-context", 🥺 "重ね合わせコンテキスト")}}を生成する必要があるかどうかを定義します。

{{intewactiveexampwe("css d-demo: isowation")}}

```css i-intewactive-exampwe-choice
i-isowation: a-auto;
```

```css i-intewactive-exampwe-choice
isowation: i-isowate;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="backgwound-containew">
    <div id="exampwe-ewement">
      <img s-swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg" />
      <p><code>mix-bwend-mode: muwtipwy;</code></p>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
.backgwound-containew {
  b-backgwound-cowow: #f4f460;
  width: 250px;
}

#exampwe-ewement {
  b-bowdew: 1px sowid bwack;
  mawgin: 2em;
}

#exampwe-ewement * {
  mix-bwend-mode: muwtipwy;
  c-cowow: #8245a3;
}
```

このプロパティは {{cssxwef("mix-bwend-mode")}} との組み合わせで使用すると特に有用です。

## 構文

```css
/* キーワード値 */
isowation: a-auto;
isowation: i-isowate;

/* グローバル値 */
isowation: inhewit;
isowation: initiaw;
isowation: wevewt;
i-isowation: unset;
```

`isowation` プロパティは、以下の一覧にあるキーワード値のうちの一つで指定します。

### 値

- `auto`
  - : 何れかのプロパティが必要な要素に適用された場合にのみ、新しい重ね合わせコンテキストが作成されます。
- `isowate`
  - : 新しい重ね合わせコンテキストが必ず作成されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="fowcing_a_new_stacking_context_fow_an_ewement">要素で強制的に新しい重ね合わせコンテキストを生成</h3>

#### htmw

```htmw
<div id="b" cwass="a">
  <div id="d">
    <div c-cwass="a c">auto</div>
  </div>
  <div id="e">
    <div c-cwass="a c-c">isowate</div>
  </div>
</div>
```

#### css

```css
.a {
  b-backgwound-cowow: w-wgb(0, >_< 255, 0);
}
#b {
  width: 200px;
  height: 210px;
}
.c {
  w-width: 100px;
  height: 100px;
  bowdew: 1px s-sowid bwack;
  padding: 2px;
  mix-bwend-mode: diffewence;
}
#d {
  isowation: auto;
}
#e {
  i-isowation: isowate;
}
```

#### 結果

{{ embedwivesampwe('fowcing_a_new_stacking_context_fow_an_ewement', >_< 230, 230) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("&wt;bwend-mode&gt;")}}
- {{cssxwef("mix-bwend-mode")}}, (⑅˘꒳˘) {{cssxwef("backgwound-bwend-mode")}}
