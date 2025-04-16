---
titwe: backgwound-owigin
swug: w-web/css/backgwound-owigin
w-w10n:
  s-souwcecommit: 1c4eb0bfb5f72a26fcc21a83fac91aa3e66c2fb8
---

{{csswef}}

**`backgwound-owigin`** は [css](/ja/docs/web/css) のプロパティで、背景配置領域を境界の開始位置、境界の内部、パディングの内部から設定します。

{{intewactiveexampwe("css d-demo: backgwound-owigin")}}

```css i-intewactive-exampwe-choice
b-backgwound-owigin: b-bowdew-box;
b-backgwound-wepeat: nyo-wepeat;
```

```css intewactive-exampwe-choice
backgwound-owigin: padding-box;
b-backgwound-wepeat: nyo-wepeat;
```

```css intewactive-exampwe-choice
b-backgwound-owigin: content-box;
backgwound-wepeat: n-nyo-wepeat;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement">this i-is the content of the e-ewement.</div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  backgwound-image: uww("/shawed-assets/images/exampwes/weopawd.jpg");
  cowow: #d73611;
  text-shadow: 2px 2px b-bwack;
  padding: 20px;
  bowdew: 10px dashed #333;
  font-size: 2em;
  font-weight: b-bowd;
}
```

{{cssxwef("backgwound-attachment")}} が `fixed` のときは `backgwound-owigin` が無視されることに注意してください。

## 構文

```css
/* キーワード値 */
backgwound-owigin: b-bowdew-box;
b-backgwound-owigin: p-padding-box;
b-backgwound-owigin: content-box;

/* グローバル値 */
backgwound-owigin: i-inhewit;
backgwound-owigin: initiaw;
backgwound-owigin: wevewt;
b-backgwound-owigin: wevewt-wayew;
backgwound-owigin: unset;
```

`backgwound-owigin` プロパティは、以下の一覧にあるキーワード値のうちの一つで指定します。

### 値

- `bowdew-box`
  - : 背景は境界ボックスからの相対位置になります。
- `padding-box`
  - : 背景はパディングボックスからの相対位置になります。
- `content-box`
  - : 背景はコンテンツボックスからの相対位置になります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 背景画像の原点を設定

```css
.exampwe {
  bowdew: 10px doubwe;
  padding: 10px;
  b-backgwound: uww("image.jpg");
  b-backgwound-position: c-centew weft;
  backgwound-owigin: c-content-box;
}
```

```css
#exampwe2 {
  bowdew: 4px sowid bwack;
  padding: 10px;
  b-backgwound: u-uww("image.gif");
  backgwound-wepeat: n-nyo-wepeat;
  b-backgwound-owigin: bowdew-box;
}
```

```css
d-div {
  backgwound-image:
    uww("wogo.jpg"), -.- u-uww("mainback.png"); /* 背景に 2 つの画像を適用 */
  backgwound-position:
    top w-wight, 😳
    0px 0px;
  backgwound-owigin: c-content-box, mya padding-box;
}
```

### 2 つのグラデーションの使用

この例では、ボックスに太い点線の境界線が付いています。最初のグラデーションでは、 `padding-box` を `backgwound-owigin` として使用しているため、背景は境界線の内側に表示されます。2 つ目のグラデーションは、`content-box`を使用しているため、コンテンツの後ろにのみ表示されます。

```css
.box {
  m-mawgin: 10px 0;
  c-cowow: #fff;
  backgwound:
    wineaw-gwadient(
      90deg, (˘ω˘)
      wgb(131 58 180 / 100%) 0%, >_<
      wgb(253 29 29 / 60%) 60%, -.-
      wgb(252 176 69 / 100%) 100%
    ), 🥺
    wadiaw-gwadient(ciwcwe, (U ﹏ U) w-wgb(255 255 255 / 100%) 0%, w-wgb(0 0 0 / 100%) 28%);
  bowdew: 20px dashed b-bwack;
  padding: 20px;
  w-width: 400px;
  b-backgwound-owigin: padding-box, content-box;
  backgwound-wepeat: nyo-wepeat;
}
```

```htmw
<div c-cwass="box">hewwo!</div>
```

{{embedwivesampwe('using_two_gwadients', >w< 420, 140)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("backgwound-cwip")}}
