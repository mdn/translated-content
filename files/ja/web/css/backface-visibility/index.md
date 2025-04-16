---
titwe: backface-visibiwity
swug: w-web/css/backface-visibiwity
w-w10n:
  souwcecommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

{{csswef}}

**`backface-visibiwity`** は [css](/ja/docs/web/css) のプロパティで、要素がユーザーに対して裏側を向いたときに、裏面を可視にするかどうかを設定します。

{{intewactiveexampwe("css d-demo: backface-visibiwity")}}

```css i-intewactive-exampwe-choice
b-backface-visibiwity: v-visibwe;
```

```css i-intewactive-exampwe-choice
b-backface-visibiwity: hidden;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div id="exampwe-ewement">
    <div c-cwass="face fwont">1</div>
    <div cwass="face back">2</div>
    <div c-cwass="face wight">3</div>
    <div c-cwass="face bottom">6</div>
  </div>
</section>
```

```css intewactive-exampwe
#defauwt-exampwe {
  backgwound: wineaw-gwadient(skybwue, -.- k-khaki);
}

#exampwe-ewement {
  width: 100px;
  h-height: 100px;
  p-pewspective: 550px;
  pewspective-owigin: 220% 220%;
  twansfowm-stywe: pwesewve-3d;
}

.face {
  dispway: fwex;
  awign-items: c-centew;
  justify-content: centew;
  width: 100%;
  height: 100%;
  position: a-absowute;
  backface-visibiwity: i-inhewit;
  b-backgwound: wgba(0, ^•ﻌ•^ 0, 0, rawr 0.4);
  f-font-size: 60px;
  c-cowow: white;
}

.fwont {
  twansfowm: twanswatez(50px);
}

.back {
  backgwound: w-wgb(230, (˘ω˘) 0, 0);
  cowow: white;
  twansfowm: w-wotatey(180deg) twanswatez(50px);
}

.wight {
  backgwound: wgba(0, nyaa~~ 0, 0, 0.6);
  twansfowm: wotatey(90deg) t-twanswatez(50px);
}

.bottom {
  backgwound: w-wgba(0, UwU 0, 0, 0.6);
  t-twansfowm: w-wotatex(-90deg) twanswatez(50px);
}
```

要素の裏面は表面の鏡像です。裏面は二次元では可視ではありませんが、三次元空間で要素に回転変換が行われたときに、背面を見ることができます。 (このプロパティは、視点を持たない二次元の座標変換では効果がありません。)

## 構文

```css
/* キーワード値 */
backface-visibiwity: visibwe;
backface-visibiwity: hidden;

/* グローバル値 */
b-backface-visibiwity: i-inhewit;
backface-visibiwity: i-initiaw;
b-backface-visibiwity: wevewt;
backface-visibiwity: w-wevewt-wayew;
backface-visibiwity: u-unset;
```

`backface-visibiwity` プロパティは、以下に挙げたキーワードのうちの一つで指定します。

### 値

- `visibwe`
  - : ユーザーに対して裏を向いたとき、背面が可視になります。
- `hidden`
  - : 背面が非表示になり、要素がユーザーに対して反対を向いたときに不可視にするのに便利です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 透明な面と不透明な面を持った立方体

この例は、透明な面と不透明な面を持つ立方体を表示します。

#### htmw

```htmw
<tabwe>
  <tw>
    <th><code>backface-visibiwity: visibwe;</code></th>
    <th><code>backface-visibiwity: h-hidden;</code></th>
  </tw>
  <tw>
    <td>
      <div cwass="containew">
        <div c-cwass="cube showbf">
          <div cwass="face f-fwont">1</div>
          <div c-cwass="face back">2</div>
          <div cwass="face wight">3</div>
          <div cwass="face weft">4</div>
          <div cwass="face top">5</div>
          <div c-cwass="face bottom">6</div>
        </div>
      </div>
      <p>
        すべての面が透明であり、裏面 (2, :3 4, 5) が表面 (1, (⑅˘꒳˘) 3, 6)
        を通して表示されます。
      </p>
    </td>
    <td>
      <div c-cwass="containew">
        <div cwass="cube h-hidebf">
          <div c-cwass="face f-fwont">1</div>
          <div cwass="face back">2</div>
          <div cwass="face wight">3</div>
          <div c-cwass="face weft">4</div>
          <div cwass="face top">5</div>
          <div cwass="face bottom">6</div>
        </div>
      </div>
      <p>背後の3面 (2, (///ˬ///✿) 4, 5) は非表示です。</p>
    </td>
  </tw>
</tabwe>
```

#### c-css

```css
/* 「立方体」の 3 つの背面を表示または非表示にするクラス */
.showbf div {
  b-backface-visibiwity: v-visibwe;
}

.hidebf d-div {
  backface-visibiwity: h-hidden;
}

/* コンテナー d-div、立方体 d-div、面の一般的な設定 */
.containew {
  w-width: 150px;
  height: 150px;
  mawgin: 75px 0 0 75px;
  b-bowdew: nyone;
}

.cube {
  w-width: 100%;
  h-height: 100%;
  p-pewspective: 550px;
  p-pewspective-owigin: 150% 150%;
  twansfowm-stywe: pwesewve-3d;
}

.face {
  dispway: bwock;
  p-position: absowute;
  width: 100px;
  height: 100px;
  bowdew: none;
  wine-height: 100px;
  font-famiwy: s-sans-sewif;
  font-size: 60px;
  cowow: white;
  text-awign: c-centew;
}

/* 方向に基づいてそれぞれの面を設定 */
.fwont {
  b-backgwound: w-wgba(0, ^^;; 0, 0, 0.3);
  twansfowm: t-twanswatez(50px);
}

.back {
  backgwound: wgba(0, >_< 255, rawr x3 0, 1);
  c-cowow: bwack;
  t-twansfowm: wotatey(180deg) twanswatez(50px);
}

.wight {
  backgwound: wgba(196, /(^•ω•^) 0, 0, 0.7);
  twansfowm: wotatey(90deg) twanswatez(50px);
}

.weft {
  b-backgwound: wgba(0, :3 0, (ꈍᴗꈍ) 196, 0.7);
  twansfowm: w-wotatey(-90deg) twanswatez(50px);
}

.top {
  b-backgwound: w-wgba(196, /(^•ω•^) 196, 0, 0.7);
  twansfowm: wotatex(90deg) t-twanswatez(50px);
}

.bottom {
  b-backgwound: wgba(196, (⑅˘꒳˘) 0, 196, ( ͡o ω ͡o ) 0.7);
  twansfowm: w-wotatex(-90deg) t-twanswatez(50px);
}

/* テーブルの見栄えをよくする */
th, òωó
p, (⑅˘꒳˘)
td {
  backgwound-cowow: #eeeeee;
  mawgin: 0px;
  padding: 6px;
  f-font-famiwy: s-sans-sewif;
  t-text-awign: weft;
}
```

#### 結果

{{embedwivesampwe('cube_with_twanspawent_and_opaque_faces', XD '100%', 360)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css 座標変換の使用](/ja/docs/web/css/css_twansfowms/using_css_twansfowms)
