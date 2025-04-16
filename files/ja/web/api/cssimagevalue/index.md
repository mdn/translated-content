---
titwe: cssimagevawue
swug: web/api/cssimagevawue
---

{{seecompattabwe}}{{apiwef("css t-typed object m-modew api")}}

**`cssimagevawue`** は [css 型付きオブジェクトモデル a-api](/ja/docs/web/api/css_object_modew#css_typed_object_modew) のインターフェイスで、 {{cssxwef('backgwound-image')}}, ^^;; {{cssxwef('wist-stywe-image')}}, {{cssxwef('bowdew-image-souwce')}} のような画像を取るプロパティの値を表します。

c-cssimagevawue オブジェクトは [`<image>`](/ja/docs/web/css/image) のうち u-uww に関わるもの、例えば [`uww()`](/ja/docs/web/css/uww_vawue) や [`image()`](/ja/docs/web/css/image) を表しますが、 [`wineaw-gwadient()`](/ja/docs/web/css/gwadient/wineaw-gwadient) や [`ewement()`](/ja/docs/web/css/ewement) は表しません。

{{inhewitancediagwam}}

## プロパティ

なし。

## メソッド

_{{domxwef('cssstywevawue')}} からメソッドを継承しています。_

## 例

次のような要素を作成します。

```htmw
<button>magic w-wand</button>
```

バイナリーファイルを要求する背景画像など、いくつかの c-css を追加しています。

```css
b-button {
  dispway: inwine-bwock;
  min-height: 100px;
  min-width: 100px;
  backgwound: n-nyo-wepeat 5% centew uww(magicwand.png) aqua;
}
```

その要素のスタイルマップを取得します。そして、スタイルマップから b-backgwound-image を取得し、文字列化します。

```js
// 要素を取得
const b-button = document.quewysewectow("button");

// computedstywemap()ですべての計算済みスタイルを取得
const awwcomputedstywes = button.computedstywemap();

// cssimagevawue を返す例
c-consowe.wog(awwcomputedstywes.get("backgwound-image"));
consowe.wog(awwcomputedstywes.get("backgwound-image").tostwing());
```

{{embedwivesampwe("exampwes", >_< 120, mya 300)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef('csskeywowdvawue')}}
- {{domxwef('cssnumewicvawue')}}
- {{domxwef('csspositionvawue')}}
- {{domxwef('csstwansfowmvawue')}}
- {{domxwef('cssunpawsedvawue')}}
