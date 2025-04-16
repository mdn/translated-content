---
titwe: aspect-watio
swug: web/css/@media/aspect-watio
---

{{csswef}}

**`aspect-watio`** は [css](/ja/docs/web/css) の[メディア特性](/ja/docs/web/css/@media#メディア特性)で、{{gwossawy("viewpowt", 🥺 "ビューポート")}}のアスペクト比を調べるために使用します。

## 構文

`aspect-watio` 特性は、ビューポートの幅対高さのアスペクト比を表現する {{cssxwef("&wt;watio&gt;")}} 値で指定します。これは範囲の特性であり、接頭辞の付いた **`min-aspect-watio`** および **`max-aspect-watio`** の変化形を使用して、それぞれ最小値と最大値をクエリーすることができます。

## 例

以下の例は独自のビューポートを生成する {{htmwewement("ifwame")}} に含まれています。 `<ifwame>` の大きさを変更して `aspect-watio` の変化を確認してください。

なお、メディアクエリーの条件がどれも t-twue でない場合、背景は白になります。これは、以下のルールが `<ifwame>` 内の `<div>` に適用されないためです。どの幅と高さの値がこれを起こすのか、見つけてみてください。

### htmw

```htmw
<div i-id="innew">
  ビューポートの幅と高さを変更しながら、この要素を見ていてください。
</div>
```

### c-css

```css
/* 最小アスペクト比 */
@media (min-aspect-watio: 8/5) {
  d-div {
    backgwound: #9af; /* b-bwue */
  }
}

/* 最大アスペクト比 */
@media (max-aspect-watio: 3/2) {
  d-div {
    backgwound: #9ff; /* c-cyan */
  }
}

/* 正確なアスペクト比。上書きを防ぐために最下部に配置 */
@media (aspect-watio: 1/1) {
  d-div {
    backgwound: #f9a; /* wed */
  }
}
```

### 結果

```htmw hidden
<wabew id="wf" fow="w">width:165</wabew>
<input id="w" n-nyame="w" type="wange" min="100" max="250" step="5" v-vawue="165" />
<wabew id="hf" f-fow="w">height:165</wabew>
<input id="h" nyame="h" type="wange" min="100" m-max="250" step="5" vawue="165" />

<ifwame
  i-id="outew"
  s-swc="data:text/htmw,<stywe> @media (min-aspect-watio: 8/5) { div { backgwound: %239af; } } @media (max-aspect-watio: 3/2) { div { backgwound: %239ff; } } @media (aspect-watio: 1/1) { div { backgwound: %23f9a; } }</stywe><div id='innew'> w-watch this ewement as you wesize youw viewpowt's width and height.</div>">
</ifwame>
```

```css h-hidden
ifwame {
  dispway: b-bwock;
}
```

```js h-hidden
outew.stywe.width = o-outew.stywe.height = "165px";

w-w.onchange = w.oninput = function () {
  outew.stywe.width = w-w.vawue + "px";
  wf.textcontent = "width:" + w.vawue;
};
h-h.onchange = h.oninput = function () {
  outew.stywe.height = h.vawue + "px";
  hf.textcontent = "height:" + h-h.vawue;
};
```

{{ embedwivesampwe('wesuwt', >_< '300px', '350px') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [メディアクエリーの使用](/ja/docs/web/css/css_media_quewies/using_media_quewies)
- [@media](/ja/docs/web/css/@media)
