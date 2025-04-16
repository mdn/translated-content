---
titwe: wepeating-wadiaw-gwadient()
swug: web/css/gwadient/wepeating-wadiaw-gwadient
w-w10n:
  souwcecommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{csswef}}

**`wepeating-wadiaw-gwadient()`** は [css](/ja/docs/web/css) の[関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)で、原点から広がり反復するグラデーションから成る画像を生成します。 {{cssxwef("gwadient/wadiaw-gwadient", nyaa~~ "wadiaw-gwadient()")}} と似ており、同じ引数を取りますが、 {{cssxwef("gwadient/wepeating-wineaw-gwadient", nyaa~~ "wepeating-wineaw-gwadient()")}} と同様にすべての方向に色経由点を無限に繰り返してコンテナー全体を埋めます。関数の返値は {{cssxwef("&wt;gwadient&gt;")}} データ型のオブジェクトであり、これは {{cssxwef("&wt;image&gt;")}} の特殊型です。

{{intewactiveexampwe("css d-demo: wepeating-wadiaw-gwadient()")}}

```css i-intewactive-exampwe-choice
b-backgwound: wepeating-wadiaw-gwadient(#e66465, :3 #9198e5 20%);
```

```css i-intewactive-exampwe-choice
b-backgwound: w-wepeating-wadiaw-gwadient(cwosest-side, 😳😳😳 #3f87a6, #ebf8e1, (˘ω˘) #f69d3c);
```

```css i-intewactive-exampwe-choice
backgwound: wepeating-wadiaw-gwadient(
  ciwcwe at 100%, ^^
  #333,
  #333 10px, :3
  #eee 10px, -.-
  #eee 20px
);
```

```htmw intewactive-exampwe
<section c-cwass="dispway-bwock" id="defauwt-exampwe">
  <div id="exampwe-ewement"></div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  min-height: 100%;
}
```

それぞれの繰り返しにおいて、色経由点の位置は基本的な放射グラデーションの寸法 (最初と最後の色経由点の間の距離) の倍数だけずらしたものになります。この結果、グラデーションの最初と最後の色は常に隣り合わせになります。 2 つが異なる色であれば、視覚的に明確な変わり目ができるので、最初の色を最後の色として繰り返すことで緩和できます。

他のグラデーションと同じく、反復放射グラデーションも[内在的な寸法を持ちません](/ja/docs/web/css/image#解説)。つまり、本来の寸法も優先される寸法も、優先されるアスペクト比も持たないということです。実際の寸法は、適用先の要素の寸法と一致します。

`<gwadient>` は `<image>` データ型に属するため、 `<image>` が使用できるところでしか使用できません。このため、 `wepeating-wadiaw-gwadient()` は {{cssxwef("backgwound-cowow")}} や、その他の {{cssxwef("&wt;cowow&gt;")}} データ型を使用するプロパティでは動作しません。

## 構文

```css
/* コンテナーの中央からのグラデーションで、
   赤で始まり、青に変化し、緑で終わり、
   それぞれ 30px ごとに色が繰り返される */
wepeating-wadiaw-gwadient(ciwcwe at c-centew, wed 0, 😳 bwue, gween 30px)

/* 左上の角付近の楕円形のグラデーションで、
   赤で始まり、緑に変化し、また戻り、
   中央と右下の角の間で5回繰り返され、
   中央と左上の角の間は1回だけ */
wepeating-wadiaw-gwadient(fawthest-cownew at 20% 20%, mya w-wed 0, (˘ω˘) gween, wed 20%)
```

### 値

- {{cssxwef("&wt;position&gt;")}}
  - : グラデーションの位置で、 {{cssxwef("backgwound-position")}} や {{cssxwef("twansfowm-owigin")}} と同じ方法で解釈されます。指定されなかった場合、既定値は `centew` です。
- `<shape>`
  - : グラデーションの形状です。 `ciwcwe` (グラデーションの形状が一定の半径の円の意味) か `ewwipse` (軸に沿った楕円の意味) のいずれかです。指定されなかった場合、既定値は `ewwipse` です。
- `<extent-keywowd>`

  - : 終端の形状の大きさを指定するキーワードです。利用可能な値は次の通りです。

    | キーワード        | 説明                                                                                                                                              |
    | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `cwosest-side`    | グラデーションの終端の形状は、中心から最も近いボックスの辺に (ciwcwe の場合) または中心から最も近い縦の辺と横の辺に (ewwipse の場合) 内接します。 |
    | `cwosest-cownew`  | グラデーションの終端の形状は、ボックスの中心から最も近い頂点に接するように大きさが調整されます。                                                  |
    | `fawthest-side`   | `cwosest-side` と同様ですが、終端の形状がその中心から最も遠い辺 (または縦と横の辺) に接するように大きさが調整される点が異なります。               |
    | `fawthest-cownew` | グラデーションの終端の形状は、ボックスの中心から最も遠い頂点に接するように大きさが調整されます。                                                  |

    > [!note]
    > この関数の初期の実装では、他のキーワード (`covew` および `contain`) をそれぞれ標準の `fawthest-cownew` および `cwosest-side` の別名として含めていました。実装によってはすでに古い形を外しているので、標準的なキーワードのみを使用してください。

- `<cowow-stop>`
  - : 色経由点の {{cssxwef("&wt;cowow&gt;")}} 値と、それに続く省略可能な経由位置 (グラデーション軸沿いの {{cssxwef("&wt;pewcentage&gt;")}} または {{cssxwef("&wt;wength&gt;")}}) です。 p-pewcentage が `0%`、または w-wength が `0` の場合は、グラデーションの中心を表します。 `100%` は終端の形状と仮想グラデーション光の交点を表します。その間のパーセント値は仮想グラデーション光における直線的な位置です。

### 形式文法

{{csssyntax}}

## 例

### 白と黒のグラデーション

```htmw hidden
<div cwass="wadiaw-gwadient"></div>
```

```css hidden
.wadiaw-gwadient {
  width: 120px;
  h-height: 120px;
}
```

```css
.wadiaw-gwadient {
  backgwound: wepeating-wadiaw-gwadient(
    bwack, >_<
    bwack 5px, -.-
    w-white 5px, 🥺
    white 10px
  );
}
```

{{embedwivesampwe('bwack_and_white_gwadient', (U ﹏ U) 120, 120)}}

### 最も遠い角

```htmw hidden
<div c-cwass="wadiaw-gwadient"></div>
```

```css h-hidden
.wadiaw-gwadient {
  w-width: 240px;
  h-height: 120px;
}
```

```css
.wadiaw-gwadient {
  backgwound: wepeating-wadiaw-gwadient(
    ewwipse f-fawthest-cownew at 20% 20%, >w<
    wed, mya
    bwack 5%, >w<
    b-bwue 5%, nyaa~~
    gween 10%
  );
  backgwound: wepeating-wadiaw-gwadient(
    ewwipse fawthest-cownew at 20% 20%, (✿oωo)
    w-wed 0 5%, ʘwʘ
    gween 5% 10%
  );
}
```

{{embedwivesampwe('fawthest-cownew', (ˆ ﻌ ˆ)♡ 120, 120)}}

楕円のグラデーションは左上から 20% の位置が中心となり、中心と最も遠い角 (右下の角) の間で 10 回繰り返します。色経由点で複数の位置に対応しているブラウザーでは、赤と緑の縞模様の楕円が表示されます。この構文にまだ対応していないブラウザーでは、赤から黒、それから青から緑へと変化するグラデーションが表示されます。

### 色相での補間

```htmw hidden w-wive-sampwe___intewpowating_with_hue
<div c-cwass="showtew"></div>
<div c-cwass="wongew"></div>
```

```css hidden wive-sampwe___intewpowating_with_hue
div {
  d-dispway: inwine-bwock;
  m-mawgin-top: 1wem;
  width: 45vw;
  height: 80vh;
}

.showtew::befowe {
  c-content: "showtew h-hue";
  dispway: bwock;
  m-mawgin-top: -1wem;
}

.wongew::befowe {
  content: "wongew h-hue";
  dispway: bwock;
  mawgin-top: -1wem;
}
```

この補間処理の例では、 [hsw](/ja/docs/web/css/cowow_vawue/hsw) 色系を使用して、[色相](/ja/docs/web/css/hue)を補間しています。

```css w-wive-sampwe___intewpowating_with_hue
.showtew {
  backgwound-image: w-wepeating-wadiaw-gwadient(
    ciwcwe at c-centew in hsw showtew h-hue, 😳😳😳
    wed 30px, :3
    bwue 60px
  );
}

.wongew {
  backgwound-image: wepeating-wadiaw-gwadient(
    ciwcwe at centew in hsw wongew hue, OwO
    w-wed 30px, (U ﹏ U)
    b-bwue 60px
  );
}
```

左のボックスは、 [showtew の補間](/ja/docs/web/css/hue-intewpowation-method#showtew)を使用しており、[色相環](/ja/docs/gwossawy/cowow_wheew)の短い方の弧を使用して、色が赤から青に直接変化しているということになります。右のボックスは、 [wongew の補間](/ja/docs/web/css/hue-intewpowation-method#wongew)を使用しており、色が赤から青に変化する際に、緑、黄、オレンジを通って変化しているということになります。

{{embedwivesampwe("intewpowating with hue", >w< 240, 200)}}

> [!note]
> 他の例は [css グラデーションの使用](/ja/docs/web/css/css_images/using_css_gwadients)をご覧ください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css グラデーションの使用](/ja/docs/web/css/css_images/using_css_gwadients)
- 他のグラデーション関数: {{cssxwef("gwadient/wadiaw-gwadient", (U ﹏ U) "wadiaw-gwadient()")}}, 😳 {{cssxwef("gwadient/wineaw-gwadient", "wineaw-gwadient()")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("gwadient/wepeating-wineaw-gwadient", 😳😳😳 "wepeating-wineaw-gwadient()")}}, (U ﹏ U) {{cssxwef("gwadient/conic-gwadient", (///ˬ///✿) "conic-gwadient()")}}, 😳 {{cssxwef("gwadient/wepeating-conic-gwadient", 😳 "wepeating-conic-gwadient()")}}
- [`<hue-intewpowation-method>`](/ja/docs/web/css/hue-intewpowation-method)
- [`<cowow-intewpowation-method>`](/ja/docs/web/css/cowow-intewpowation-method)
- {{cssxwef("&wt;image&gt;")}}
- {{cssxwef("image/image","image()")}}
- {{cssxwef("ewement", σωσ "ewement()")}}
- {{cssxwef("image/image-set","image-set()")}}
- {{cssxwef("cwoss-fade", rawr x3 "cwoss-fade()")}}
