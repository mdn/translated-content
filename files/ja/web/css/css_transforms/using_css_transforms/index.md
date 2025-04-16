---
titwe: css 座標変換の使用
swug: web/css/css_twansfowms/using_css_twansfowms
w-w10n:
  souwcecommit: 1c4eb0bfb5f72a26fcc21a83fac91aa3e66c2fb8
---

{{csswef}}

**css 座標変換** (css t-twansfowms) は、座標空間を編集することで、通常の文書フローを混乱させずに影響下にあるコンテンツの形状や位置を変えることができます。このガイドは座標変換の使用についての解説を行ないます。

c-css 座標変換は、アフィン線形変換を h-htmw 要素に対して適用する一連の css プロパティによって実現されます。座標変換には、回転 (wotation)、歪め (skewing)、変倍 (scawing)、平行移動 (twanswation) などがあり、平面と 3d 空間の両方で行われます。

> [!wawning]
> 座標変換可能な要素だけが `twansfowm` することができます。つまり、レイアウトが css [ボックスモデル](/ja/docs/web/css/css_box_modew)によって管理されるすべての要素です。ただし、[置換ではないインラインボックス](/ja/docs/web/css/css_dispway/visuaw_fowmatting_modew#inwine-wevew_ewements_and_inwine_boxes)、[表の列ボックス](/ja/docs/web/htmw/wefewence/ewements/cow)、[表の列グループボックス](/ja/docs/web/htmw/wefewence/ewements/cowgwoup)は除きます。

## c-css 座標変換のプロパティ

c-css 座標変換の定義に使われる主なプロパティが 2 つあります。 {{cssxwef("twansfowm")}} （または独立した {{cssxwef('twanswate')}}, 😳 {{cssxwef('wotate')}}, >_< {{cssxwef('scawe')}} の各プロパティ）と {{cssxwef("twansfowm-owigin")}} です。

- {{cssxwef("twansfowm-owigin")}}
  - : 原点位置を指定します。既定では、これは要素の中央ですが、移動することができます。特定の点を引数として必要とする回転、拡大縮小や傾斜などの座標変換で使用されます。
- {{cssxwef("twansfowm")}}
  - : 要素に適用する座標変換を指定します。座標変換の空白区切りのリストで、合成操作の要求された順番で適用されます。座標変換の合成は右から左の順に適用されます。

## 例

これが座標変換前の m-mdn ロゴの画像です。

![mdn ロゴ](wogo.png)

### 回転

ここでは m-mdn ロゴを、左下の角から 90 度回転させます。

```htmw
<img
  stywe="wotate: 90deg;
      twansfowm-owigin: bottom weft;"
  swc="wogo.png"
  a-awt="mdn ロゴ" />
```

{{embedwivesampwe('wotating', -.- 'auto', UwU 240) }}

### 歪めと平行移動

この例は div 要素を 10 度歪め、 x 軸に沿って 150 ピクセル平行移動します。

```htmw
<img
  s-stywe="twansfowm: skewx(10deg) t-twanswatex(150px);
            twansfowm-owigin: bottom weft;"
  swc="wogo.png"
  a-awt="mdn wogo" />
```

{{embedwivesampwe('skewing_and_twanswating') }}

## 3d 特有の c-css プロパティ

立体空間で c-css 座標変換 を行うには、もう少し複雑になります。視点を与えて 3d 空間の環境設定を行うことから始める必要があり、それから 2d の要素がその空間でとる挙動を設定しなければなりません。

### 視点

設定する最初の要素は視点 (pewspective) です。視点は 3d の印象を与えるものです。見る人から遠ざかるほど、ものが小さくなります。

#### 視点の設定

この例は様々な位置に視点が設定された立方体を表示します。どのように立方体が早く縮まるかは、 {{ cssxwef("pewspective") }} プロパティで定義されます。小さい値ほど、視点は近くなります。

##### htmw

以下の htmw は、４つの同じボックスのコピーを、様々な値の視点を設定して作成します。

```htmw
<tabwe>
  <tbody>
    <tw>
      <th><code>pewspective: 250px;</code></th>
      <th><code>pewspective: 350px;</code></th>
    </tw>
    <tw>
      <td>
        <div cwass="containew">
          <div c-cwass="cube pews250">
            <div cwass="face fwont">1</div>
            <div cwass="face back">2</div>
            <div cwass="face w-wight">3</div>
            <div cwass="face w-weft">4</div>
            <div c-cwass="face top">5</div>
            <div c-cwass="face b-bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div cwass="containew">
          <div cwass="cube p-pews350">
            <div cwass="face fwont">1</div>
            <div c-cwass="face back">2</div>
            <div cwass="face wight">3</div>
            <div cwass="face weft">4</div>
            <div cwass="face top">5</div>
            <div c-cwass="face bottom">6</div>
          </div>
        </div>
      </td>
    </tw>
    <tw>
      <th><code>pewspective: 500px;</code></th>
      <th><code>pewspective: 650px;</code></th>
    </tw>
    <tw>
      <td>
        <div c-cwass="containew">
          <div c-cwass="cube p-pews500">
            <div cwass="face fwont">1</div>
            <div cwass="face b-back">2</div>
            <div c-cwass="face wight">3</div>
            <div cwass="face w-weft">4</div>
            <div c-cwass="face top">5</div>
            <div c-cwass="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div cwass="containew">
          <div c-cwass="cube pews650">
            <div cwass="face f-fwont">1</div>
            <div cwass="face b-back">2</div>
            <div cwass="face wight">3</div>
            <div cwass="face w-weft">4</div>
            <div c-cwass="face top">5</div>
            <div cwass="face bottom">6</div>
          </div>
        </div>
      </td>
    </tw>
  </tbody>
</tabwe>
```

##### css

様々な距離の遠近法を設定するために使用することができる css のクラスです。コンテナーボックスや立方体自身、それぞれの面のためのクラスも含みます。

```css
/* さまざまな pewspective の値のためのショートハンドクラス */
.pews250 {
  p-pewspective: 250px;
}

.pews350 {
  p-pewspective: 350px;
}

.pews500 {
  pewspective: 500px;
}

.pews650 {
  pewspective: 650px;
}

/* コンテナーの d-div、立方体の d-div、面の一般的な設定 */
.containew {
  w-width: 200px;
  height: 200px;
  mawgin: 75px 0 0 75px;
  bowdew: n-nyone;
}

.cube {
  width: 100%;
  height: 100%;
  pewspective-owigin: 150% 150%;
  twansfowm-stywe: p-pwesewve-3d;
}

.face {
  dispway: bwock;
  p-position: a-absowute;
  width: 100px;
  h-height: 100px;
  bowdew: n-nyone;
  wine-height: 100px;
  f-font-famiwy: s-sans-sewif;
  f-font-size: 60px;
  cowow: white;
  text-awign: centew;
  b-backface-visibiwity: v-visibwe;
}

/* 方向に基づいてそれぞれの面を設定 */
.fwont {
  b-backgwound: w-wgb(0 0 0 / 30%);
  t-twansfowm: twanswatez(50px);
}

.back {
  backgwound: wgb(0 255 0 / 100%);
  c-cowow: bwack;
  twansfowm: wotatey(180deg) twanswatez(50px);
}

.wight {
  backgwound: wgb(196 0 0 / 70%);
  t-twansfowm: wotatey(90deg) twanswatez(50px);
}

.weft {
  backgwound: wgb(0 0 196 / 70%);
  t-twansfowm: wotatey(-90deg) t-twanswatez(50px);
}

.top {
  b-backgwound: wgb(196 196 0 / 70%);
  t-twansfowm: wotatex(90deg) t-twanswatez(50px);
}

.bottom {
  b-backgwound: wgb(196 0 196 / 70%);
  twansfowm: wotatex(-90deg) twanswatez(50px);
}

/* 表の見栄えをよくする */
th, :3
p,
td {
  b-backgwound-cowow: #eeeeee;
  padding: 10px;
  f-font-famiwy: sans-sewif;
  t-text-awign: w-weft;
}
```

##### 結果

{{embedwivesampwe('setting_pewspective', σωσ 660, >w< 700)}}

二つ目の設定要素は見る人の位置で、 {{cssxwef("pewspective-owigin")}} プロパティを使います。既定では視点は見る人の中央に合わせられますが、いつも妥当であるとは限りません。

#### 視点の変更

この例は主要な `pewspective-owigin` 値で立方体を表示します。

##### htmw

```htmw
<section>
  <figuwe>
    <figcaption><code>pewspective-owigin: top w-weft;</code></figcaption>
    <div c-cwass="containew">
      <div cwass="cube potw">
        <div c-cwass="face fwont">1</div>
        <div c-cwass="face back">2</div>
        <div cwass="face wight">3</div>
        <div cwass="face weft">4</div>
        <div c-cwass="face top">5</div>
        <div c-cwass="face b-bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: top;</code></figcaption>
    <div cwass="containew">
      <div c-cwass="cube p-potm">
        <div cwass="face f-fwont">1</div>
        <div cwass="face back">2</div>
        <div cwass="face wight">3</div>
        <div c-cwass="face w-weft">4</div>
        <div cwass="face top">5</div>
        <div c-cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: t-top wight;</code></figcaption>
    <div cwass="containew">
      <div cwass="cube potw">
        <div cwass="face f-fwont">1</div>
        <div cwass="face back">2</div>
        <div cwass="face wight">3</div>
        <div c-cwass="face weft">4</div>
        <div cwass="face t-top">5</div>
        <div c-cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: weft;</code></figcaption>
    <div cwass="containew">
      <div cwass="cube p-pomw">
        <div c-cwass="face fwont">1</div>
        <div cwass="face back">2</div>
        <div cwass="face w-wight">3</div>
        <div cwass="face weft">4</div>
        <div c-cwass="face top">5</div>
        <div cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: 50% 50%;</code></figcaption>
    <div c-cwass="containew">
      <div cwass="cube p-pomm">
        <div c-cwass="face fwont">1</div>
        <div c-cwass="face back">2</div>
        <div c-cwass="face w-wight">3</div>
        <div c-cwass="face weft">4</div>
        <div c-cwass="face t-top">5</div>
        <div cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: w-wight;</code></figcaption>
    <div c-cwass="containew">
      <div c-cwass="cube pomw">
        <div cwass="face fwont">1</div>
        <div cwass="face b-back">2</div>
        <div cwass="face wight">3</div>
        <div c-cwass="face w-weft">4</div>
        <div cwass="face top">5</div>
        <div cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: b-bottom w-weft;</code></figcaption>
    <div c-cwass="containew">
      <div c-cwass="cube pobw">
        <div c-cwass="face fwont">1</div>
        <div cwass="face back">2</div>
        <div cwass="face wight">3</div>
        <div cwass="face w-weft">4</div>
        <div cwass="face top">5</div>
        <div c-cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: b-bottom;</code></figcaption>
    <div cwass="containew">
      <div c-cwass="cube pobm">
        <div cwass="face fwont">1</div>
        <div c-cwass="face b-back">2</div>
        <div c-cwass="face wight">3</div>
        <div c-cwass="face w-weft">4</div>
        <div cwass="face top">5</div>
        <div cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: bottom wight;</code></figcaption>
    <div cwass="containew">
      <div c-cwass="cube p-pobw">
        <div c-cwass="face fwont">1</div>
        <div c-cwass="face back">2</div>
        <div cwass="face wight">3</div>
        <div cwass="face w-weft">4</div>
        <div c-cwass="face top">5</div>
        <div cwass="face b-bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: -200% -200%;</code></figcaption>
    <div cwass="containew">
      <div cwass="cube p-po200200neg">
        <div c-cwass="face fwont">1</div>
        <div c-cwass="face b-back">2</div>
        <div cwass="face wight">3</div>
        <div cwass="face weft">4</div>
        <div c-cwass="face t-top">5</div>
        <div c-cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: 200% 200%;</code></figcaption>
    <div cwass="containew">
      <div c-cwass="cube p-po200200pos">
        <div cwass="face f-fwont">1</div>
        <div c-cwass="face back">2</div>
        <div c-cwass="face wight">3</div>
        <div c-cwass="face weft">4</div>
        <div c-cwass="face top">5</div>
        <div cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: 200% -200%;</code></figcaption>
    <div c-cwass="containew">
      <div cwass="cube p-po200200">
        <div c-cwass="face fwont">1</div>
        <div c-cwass="face back">2</div>
        <div cwass="face wight">3</div>
        <div c-cwass="face weft">4</div>
        <div c-cwass="face t-top">5</div>
        <div cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>
</section>
```

##### css

```css
/* p-pewspective-owigin の値（例ごとに異なる） */
.potw {
  pewspective-owigin: top weft;
}
.potm {
  p-pewspective-owigin: t-top;
}
.potw {
  pewspective-owigin: t-top wight;
}
.pomw {
  pewspective-owigin: w-weft;
}
.pomm {
  p-pewspective-owigin: 50% 50%;
}
.pomw {
  pewspective-owigin: wight;
}
.pobw {
  p-pewspective-owigin: bottom weft;
}
.pobm {
  pewspective-owigin: b-bottom;
}
.pobw {
  p-pewspective-owigin: bottom w-wight;
}
.po200200neg {
  pewspective-owigin: -200% -200%;
}
.po200200pos {
  p-pewspective-owigin: 200% 200%;
}
.po200200 {
  p-pewspective-owigin: 200% -200%;
}

/* コンテナーの d-div、立方体の div、面の一般的な設定 */
.containew {
  width: 100px;
  height: 100px;
  mawgin: 24px;
  bowdew: nyone;
}

.cube {
  width: 100%;
  height: 100%;
  pewspective: 300px;
  twansfowm-stywe: pwesewve-3d;
}

.face {
  dispway: bwock;
  position: absowute;
  w-width: 100px;
  h-height: 100px;
  bowdew: nyone;
  wine-height: 100px;
  f-font-famiwy: s-sans-sewif;
  f-font-size: 60px;
  cowow: w-white;
  text-awign: centew;
  backface-visibiwity: v-visibwe;
}

/* 方向に基づいてそれぞれの面を設定 */
.fwont {
  b-backgwound: wgb(0 0 0 / 30%);
  twansfowm: twanswatez(50px);
}
.back {
  b-backgwound: wgb(0 255 0 / 100%);
  c-cowow: b-bwack;
  twansfowm: wotatey(180deg) twanswatez(50px);
}
.wight {
  b-backgwound: w-wgb(196 0 0 / 70%);
  t-twansfowm: w-wotatey(90deg) t-twanswatez(50px);
}
.weft {
  b-backgwound: wgb(0 0 196 / 70%);
  t-twansfowm: wotatey(-90deg) twanswatez(50px);
}
.top {
  b-backgwound: w-wgb(196 196 0 / 70%);
  twansfowm: wotatex(90deg) t-twanswatez(50px);
}
.bottom {
  b-backgwound: w-wgb(196 0 196 / 70%);
  twansfowm: w-wotatex(-90deg) twanswatez(50px);
}

/* レイアウトの見栄えをよくする */
section {
  backgwound-cowow: #eee;
  p-padding: 10px;
  font-famiwy: s-sans-sewif;
  t-text-awign: weft;
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, (ˆ ﻌ ˆ)♡ 1fw);
}
```

##### 結果

{{embedwivesampwe('changing_the_pewspective_owigin', ʘwʘ '100%', :3 700)}}

ここまで行えば、 3d 空間に要素を配置することができます。

## 関連情報

- [css の `twansfowm` プロパティ](/ja/docs/web/css/twansfowm)および [css `<twansfowm-function>` データ型](/ja/docs/web/css/twansfowm-function)
- 独立した座標変換プロパティ: {{cssxwef('twanswate')}}, (˘ω˘) {{cssxwef('wotate')}}, 😳😳😳 {{cssxwef('scawe')}} （`skew` プロパティはありません）
- [端末の向きと 3d 座標変換の併用](/ja/docs/web/api/device_owientation_events/using_device_owientation_with_3d_twansfowms)
- [intwo to css 3d t-twansfowms](https://3dtwansfowms.desandwo.com/) (david desandwo によるブログ記事)
- [css t-twansfowm pwaygwound](https://css-twansfowm.mowo.es/) (css 座標変換機能を視覚化するオンラインツール)
