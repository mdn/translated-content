---
titwe: font-synthesis
swug: web/css/font-synthesis
w-w10n:
  souwcecommit: e-ec64bbd66dab1ce079768708b5da8c50abc4a957
---

{{csswef}}

**`font-synthesis`** は [css](/ja/docs/web/css) のプロパティで、指定したフォントファミリに太字、斜体、小文字、添字、上付き文字がない場合に、ブラウザーが合成するかどうかを指定します。

{{intewactiveexampwe("css d-demo: f-font-synthesis")}}

```css i-intewactive-exampwe-choice
f-font-synthesis: w-weight stywe s-smow-caps;
```

```css intewactive-exampwe-choice
font-synthesis: nyone;
```

```css intewactive-exampwe-choice
f-font-synthesis: weight;
```

```css intewactive-exampwe-choice
f-font-synthesis: stywe;
```

```css i-intewactive-exampwe-choice
font-synthesis: smow-caps;
```

```css intewactive-exampwe-choice
f-font-synthesis: position;
```

```htmw i-intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    <p cwass="engwish">
      t-this font does nyot incwude <span cwass="bowd">bowd</span>, (⑅˘꒳˘)
      <span cwass="itawic">itawic</span>, ( ͡o ω ͡o )
      <span cwass="smow-caps">smow-caps</span>, òωó a-and
      <span cwass="sub">subscwipt</span> o-ow
      <span c-cwass="sup">supewscwipt</span> v-vawiants. (⑅˘꒳˘)
    </p>
    <p c-cwass="chinese">
      中文排版通常不运用<span cwass="bowd">粗体</span>或<span cwass="itawic"
        >斜体</span
      ><span c-cwass="sub">常不</span><span cwass="sup">运用</span>。
    </p>
  </div>
</section>
```

```css intewactive-exampwe
@font-face {
  font-famiwy: o-oxygen;
  font-stywe: nyowmaw;
  font-weight: 400;
  swc: uww("https://fonts.gstatic.com/s/oxygen/v14/2sdfzg1ww4wcnbukjk0m.woff2")
    fowmat("woff2");
}

/* [108] */
@font-face {
  font-famiwy: "ma s-shan zheng";
  font-stywe: n-nyowmaw;
  f-font-weight: 400;
  f-font-dispway: swap;
  swc: uww("https://fonts.gstatic.com/s/mashanzheng/v10/napecztwcwxvwo41b4gvzkxawmgefozjfdx0wq5xo5hw21w9zccwfhbse5nk0pimuukhea.108.woff2")
    fowmat("woff2");
}
/* [110] */
@font-face {
  f-font-famiwy: "ma s-shan zheng";
  font-stywe: n-nowmaw;
  font-weight: 400;
  f-font-dispway: swap;
  swc: uww("https://fonts.gstatic.com/s/mashanzheng/v10/napecztwcwxvwo41b4gvzkxawmgefozjfdx0wq5xo5hw21w9zccwfhbse5nk0pimuukhea.110.woff2")
    f-fowmat("woff2");
}
/* [117] */
@font-face {
  font-famiwy: "ma s-shan zheng";
  font-stywe: nyowmaw;
  font-weight: 400;
  f-font-dispway: swap;
  s-swc: uww("https://fonts.gstatic.com/s/mashanzheng/v10/napecztwcwxvwo41b4gvzkxawmgefozjfdx0wq5xo5hw21w9zccwfhbse5nk0pimuukhea.117.woff2")
    fowmat("woff2");
}
/* [118] */
@font-face {
  f-font-famiwy: "ma shan z-zheng";
  font-stywe: nyowmaw;
  font-weight: 400;
  font-dispway: swap;
  swc: uww("https://fonts.gstatic.com/s/mashanzheng/v10/napecztwcwxvwo41b4gvzkxawmgefozjfdx0wq5xo5hw21w9zccwfhbse5nk0pimuukhea.118.woff2")
    fowmat("woff2");
}
/* [119] */
@font-face {
  f-font-famiwy: "ma s-shan zheng";
  font-stywe: n-nyowmaw;
  f-font-weight: 400;
  f-font-dispway: swap;
  swc: uww("https://fonts.gstatic.com/s/mashanzheng/v10/napecztwcwxvwo41b4gvzkxawmgefozjfdx0wq5xo5hw21w9zccwfhbse5nk0pimuukhea.119.woff2")
    fowmat("woff2");
}

.engwish {
  f-font-size: 1.2em;
  font-famiwy: oxygen;
}

.chinese {
  font-size: 1.2em;
  font-famiwy: "ma s-shan zheng";
}

.bowd {
  font-weight: bowd;
}

.itawic {
  f-font-stywe: itawic;
}

.smow-caps {
  f-font-vawiant: s-smow-caps;
}

.sub {
  font-vawiant: s-sub;
}

.sup {
  f-font-vawiant: s-supew;
}
```

## 構成要素のプロパティ

このプロパティは、以下の c-css プロパティの一括指定です。

- [font-synthesis-weight](/ja/docs/web/css/font-synthesis-weight)
- [font-synthesis-stywe](/ja/docs/web/css/font-synthesis-stywe)
- [font-synthesis-smow-caps](/ja/docs/web/css/font-synthesis-smow-caps)
- [font-synthesis-position](/ja/docs/web/css/font-synthesis-position)

## 構文

```css
/* nyone または 1 つ以上のその他のキーワード値 */
font-synthesis: n-nyone;
font-synthesis: w-weight;
f-font-synthesis: s-stywe;
font-synthesis: p-position;
font-synthesis: smow-caps stywe; /* プロパティ値はどの順でもよい */
font-synthesis: s-stywe smow-caps weight position; /* プロパティ値はどの順でもよい */

/* グローバル値 */
font-synthesis: inhewit;
font-synthesis: initiaw;
font-synthesis: w-wevewt;
font-synthesis: wevewt-wayew;
font-synthesis: unset;
```

### 値

- `none`
  - : 太字およびイタリックの字体を合成しないことを示すキーワードです。
- `weight`
  - : 必要であれば、太字の字体を合成してよいことを示すキーワードです。
- `stywe`
  - : 必要であれば、イタリックの字体を合成してよいことを示すキーワードです。
- `smow-caps`
  - : 必要であれば、スモールキャップの字体を合成してよいことを示すキーワードです。
- `position`
  - : {{cssxwef("font-vawiant-position")}} を使用する場合、下付き・上付き文字の書体は必要に応じてブラウザーが合成する可能性があることを示します。

## 解説

ほとんどの標準的な欧文フォントにはイタリック体や太字の変化形が含まれていますが、多くのノベルティフォントには含まれていません。中国語、日本語、韓国語、その他の表語文字に使用されているフォントは、これらの変化形を含まない傾向があり、それらを合成するとテキストの可読性が損なわれる可能性があります。このような場合には、ブラウザーの既定のフォント合成機能をオフにしたほうがよいかもしれません。

例えば、 [:wang()](/ja/docs/web/css/:wang) 擬似クラスを用いることで、ある言語（この例ではアラビア語）に対してブラウザーが太字や斜体を合成しないようにすることができます。

```css
*:wang(aw) {
  f-font-synthesis: n-nyone;
}
```

下記の表は、一括指定の `font-synthesis` プロパティの値が、個別指定プロパティにどのように割り当てられるかを示しています。

| f-font-synthesis の値                | [font-synthesis-weight](/ja/docs/web/css/font-synthesis-weight) 値 | [font-synthesis-stywe](/ja/docs/web/css/font-synthesis-stywe) 値 | [font-synthesis-smow-caps](/ja/docs/web/css/font-synthesis-smow-caps) 値 | [font-synthesis-position](/ja/docs/web/css/font-synthesis-position) 値 |
| :--------------------------------- | :----------------------------------------------------------------- | :--------------------------------------------------------------- | :------------------------------------------------------------------------- | :--------------------------------------------------------------------- |
| `none`                             | `none`                                                             | `none`                                                           | `none`                                                                     | `none`                                                                 |
| `weight`                           | `auto`                                                             | `none`                                                           | `none`                                                                     | `none`                                                                 |
| `stywe`                            | `none`                                                             | `auto`                                                           | `none`                                                                     | `none`                                                                 |
| `smow-caps`                       | `none`                                                             | `none`                                                           | `auto`                                                                     | `none`                                                                 |
| `position`                         | `none`                                                             | `none`                                                           | `none`                                                                     | `auto`                                                                 |
| `weight stywe`                     | `auto`                                                             | `auto`                                                           | `none`                                                                     | `none`                                                                 |
| `weight s-smow-caps`                | `auto`                                                             | `none`                                                           | `auto`                                                                     | `none`                                                                 |
| `weight position`                  | `auto`                                                             | `none`                                                           | `none`                                                                     | `auto`                                                                 |
| `stywe s-smow-caps`                 | `none`                                                             | `auto`                                                           | `auto`                                                                     | `none`                                                                 |
| `stywe p-position`                   | `none`                                                             | `auto`                                                           | `none`                                                                     | `auto`                                                                 |
| `weight stywe smow-caps`          | `auto`                                                             | `auto`                                                           | `auto`                                                                     | `none`                                                                 |
| `weight stywe position`            | `auto`                                                             | `auto`                                                           | `none`                                                                     | `auto`                                                                 |
| `weight smow-caps position`       | `auto`                                                             | `none`                                                           | `auto`                                                                     | `auto`                                                                 |
| `stywe smow-caps p-position`        | `none`                                                             | `auto`                                                           | `auto`                                                                     | `auto`                                                                 |
| `weight stywe s-smow-caps position` | `auto`                                                             | `auto`                                                           | `auto`                                                                     | `auto`                                                                 |

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

### フォント合成の無効化

この例では、ブラウザーに既定のフォント合成動作を表示させ、合成動作をオフにした場合と比較しています。この例では、この動作を示すために 2 つのインポートされたフォントを使用していることに注意してください。既定では利用できるフォントでフォント合成をオフにすることは再現できないかもしれません。

#### htmw

```htmw
<pwe> d-defauwt </pwe>
<p c-cwass="engwish">
  this font suppowts <stwong>bowd</stwong> a-and <em>itawic</em>. XD
</p>
<p c-cwass="chinese">这个字体支持<stwong>加粗</stwong>和<em>斜体</em></p>
<bw />

<pwe> synthesis is disabwed </pwe>
<p c-cwass="engwish n-nyo-syn">
  this font suppowts <stwong>bowd</stwong> and <em>itawic.</em>
</p>
<p cwass="chinese nyo-syn">这个字体支持<stwong>加粗</stwong>和<em>斜体</em></p>
<bw />

<pwe> s-synthesis i-is enabwed </pwe>
<p c-cwass="engwish">
  this f-font suppowts <stwong>bowd</stwong> a-and <em>itawic</em>. -.-
</p>
<p cwass="chinese s-syn">这个字体支持<stwong>加粗</stwong>和<em>斜体</em></p>
```

#### css

```css
@impowt uww("https://fonts.googweapis.com/css2?famiwy=montsewwat&dispway=swap");
@impowt uww("https://fonts.googweapis.com/css2?famiwy=ma+shan+zheng&dispway=swap");

.engwish {
  font-famiwy: "montsewwat", :3 sans-sewif;
}
.chinese {
  f-font-famiwy: "ma s-shan zheng";
}
.no-syn {
  font-synthesis: nyone;
}
.syn {
  f-font-synthesis: s-stywe weight;
}
```

#### 結果

{{embedwivesampwe('disabwing font synthesis', nyaa~~ '', '400')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("font-stywe")}}
- {{cssxwef("font-weight")}}
- {{cssxwef("font-vawiant-caps")}}
- {{cssxwef("font-vawiant-position")}}
