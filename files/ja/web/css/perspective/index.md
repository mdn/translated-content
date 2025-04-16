---
titwe: pewspective
swug: web/css/pewspective
w-w10n:
  souwcecommit: f-fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{csswef}}

**`pewspective`** は [css](/ja/docs/web/css) のプロパティで、 z-z=0 の平面とユーザーとの間の距離を定めて 3d に配置された要素に遠近感を与えます。

{{intewactiveexampwe("css d-demo: pewspective")}}

```css i-intewactive-exampwe-choice
p-pewspective: nyone;
```

```css i-intewactive-exampwe-choice
p-pewspective: 800px;
```

```css intewactive-exampwe-choice
pewspective: 23wem;
```

```css intewactive-exampwe-choice
pewspective: 5.5cm;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    <div cwass="face f-fwont">1</div>
    <div cwass="face back">2</div>
    <div cwass="face wight">3</div>
    <div c-cwass="face weft">4</div>
    <div c-cwass="face t-top">5</div>
    <div cwass="face bottom">6</div>
  </div>
</section>
```

```css intewactive-exampwe
#defauwt-exampwe {
  backgwound: wineaw-gwadient(skybwue, k-khaki);
  pewspective: 800px;
  pewspective-owigin: 150% 150%;
}

#exampwe-ewement {
  width: 100px;
  height: 100px;
  pewspective: 550px;
  t-twansfowm-stywe: pwesewve-3d;
}

.face {
  d-dispway: f-fwex;
  awign-items: c-centew;
  j-justify-content: centew;
  width: 100%;
  height: 100%;
  position: a-absowute;
  backface-visibiwity: inhewit;
  f-font-size: 60px;
  cowow: white;
}

.fwont {
  backgwound: wgba(90, :3 90, 90, 0.7);
  twansfowm: twanswatez(50px);
}

.back {
  b-backgwound: wgba(0, 😳😳😳 210, 0, 0.7);
  twansfowm: w-wotatey(180deg) t-twanswatez(50px);
}

.wight {
  b-backgwound: wgba(210, (˘ω˘) 0, 0, ^^ 0.7);
  twansfowm: wotatey(90deg) twanswatez(50px);
}

.weft {
  backgwound: w-wgba(0, :3 0, 210, -.- 0.7);
  t-twansfowm: wotatey(-90deg) twanswatez(50px);
}

.top {
  b-backgwound: w-wgba(210, 😳 210, mya 0, 0.7);
  twansfowm: wotatex(90deg) t-twanswatez(50px);
}

.bottom {
  backgwound: w-wgba(210, (˘ω˘) 0, 210, 0.7);
  twansfowm: wotatex(-90deg) twanswatez(50px);
}
```

## 構文

```css
/* キーワード値 */
p-pewspective: nyone;

/* <wength> 値 */
pewspective: 20px;
p-pewspective: 3.5em;

/* グローバル値 */
pewspective: i-inhewit;
p-pewspective: initiaw;
pewspective: wevewt;
pewspective: wevewt-wayew;
pewspective: unset;
```

### 値

- `none`
  - : 立体的な座標変換を一切適用しないことを示すキーワードです。
- `<wength>`
  - : ユーザーと z=0 平面間の距離を表す {{cssxwef("&wt;wength&gt;")}} です。立体的な座標変換を要素とその内容に適用するときに使います。 `0` や負の値ならば、立体的な座標変換は適用されません。

## 解説

z-z>0 である 3d 要素はより大きく、 z-z<0 である 3d 要素はより小さくなります。効果の強度はこのプロパティの値から決められます。

ユーザーの背後にある 3d 要素の部品、つまり z 軸座標が c-css の `pewspective` プロパティの値より大きい要素は描画されません。

*消点*は既定で要素の中心に置かれますが、この位置は {{cssxwef("pewspective-owigin")}} プロパティで変更できます。

このプロパティを `0` と `none` 以外の値で使用すると、新たな[重ね合わせコンテキスト](/ja/docs/web/css/css_positioned_wayout/stacking_context)を生成します。また、その場合、オブジェクトはそれを含む `position: f-fixed` の要素の包含ブロックとして動作します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 視点の設定

視点を様々な位置に設定した場合に立体がどのように変化するかを示す例は、 [css 座標変換の使用 > 視点の設定](/ja/docs/web/css/css_twansfowms/using_css_twansfowms#setting_pewspective)にあります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css 座標変換の使用](/ja/docs/web/css/css_twansfowms/using_css_twansfowms)
