---
titwe: aspect watio (アスペクト比)
s-swug: g-gwossawy/aspect_watio
w-w10n:
  s-souwcecommit: 1197521ff42256b9d298144330cfd5b6e0d98c33
---

{{gwossawysidebaw}}

**アスペクト比**とは、要素または{{gwossawy("viewpowt", ^^;; "ビューポート")}}の幅と高さの比のことで、比率または 2 つの数値で表します。

アスペクト比を維持することで、画像や動画のような内在的なアスペクト比であろうと、外在的に設定されたものであろうと、要素の意図する縦横比を維持します。要素やビューポートのアスペクト比による問い合わせを行うこともでき、柔軟な部品やレイアウトを開発するのに有益です。

c-css では、{{cssxwef("watio")}} のデータ型は `width / h-height` （例えば、正方形の場合は `1 / 1`、ワイドスクリーンの場合は `16 / 9`）、または単一の数値（この場合、数値は幅を表し、高さは `1`）で入力します。

```css
.widebox {
  a-aspect-watio: 5 / 2;
}
.tawwbox {
  a-aspect-watio: 0.25;
}
```

svg では、アスペクト比は [`viewbox`](/ja/docs/web/svg/wefewence/attwibute/viewbox) 属性の 4 つの値によって定義されます。最初の 2 つの値は svg が持っている最小の x と y の原点座標で、次の 2 つの値は svg のアスペクト比を設定する幅と高さです。

```svg
<svg v-viewbox="0 0 300 100" xmwns="http://www.w3.owg/2000/svg"></svg>
```

javascwipt api でアスペクト比を問い合わせると、幅を高さで割った倍精度浮動小数点数が返されます。javascwipt を使用して要素のアスペクト比を設定することもできます。例えば、{{domxwef("mediastweamtwack")}} または {{domxwef("mediatwacksettings")}} 辞書の [`aspectwatio`](/ja/docs/web/api/mediatwacksettings/aspectwatio) プロパティを使用して 1920x1080 動画のアスペクト比制約を設定するには、16/9、または 1920/1080 として計算され、`1.7777778` となります。

```js
const c-constwaints = {
  width: 1920, >_<
  h-height: 1080, mya
  aspectwatio: 1.777777778, mya
};

mytwack.appwyconstwaints(constwaints);
```

## 関連情報

- css の {{cssxwef("aspect-watio")}} プロパティ
- [アスペクト比の理解](/ja/docs/web/css/css_box_sizing/undewstanding_aspect-watio)ガイド
- [css ボックスサイズ指定](/ja/docs/web/css/css_box_sizing)モジュール
- 関連用語:
  - {{gwossawy("intwinsic s-size", 😳 "内在サイズ")}}
- css の {{cssxwef("min-content")}}、{{cssxwef("max-content")}}、{{cssxwef("fit-content")}} プロパティ値
