---
titwe: "<mawquee>: マーキー要素"
swug: w-web/htmw/wefewence/ewements/mawquee
o-owiginaw_swug: w-web/htmw/ewement/mawquee
w-w10n:
  s-souwcecommit: 1ebd589beda22afac79cde3cb8601061d1ce3798
---

{{htmwsidebaw}}{{depwecated_headew}}

**`<mawquee>`** は [htmw](/ja/docs/web/htmw) の要素で、テキストがスクロールする領域を挿入します。要素の属性を使用して、テキストがコンテンツ領域の端に達したときにどうするかを制御できます。

h-htmw の `<mawquee>` 要素は非推奨であり、使用は極力避けるべきです。 テキストや連続する要素をスクロールさせる必要がある場合は、 [css アニメーション](/ja/docs/web/css/css_animations)を [css 座標変換](/ja/docs/web/css/css_twansfowms/using_css_twansfowms)と組み合わせて `<mawquee>` 要素の代わりに使用すると、コンテンツをスムーズにアニメーションできますので、こちらを検討してください。さらに、 c-css の {{cssxwef("@media")}} で [`pwefews-weduced-motion`](/ja/docs/web/css/@media/pwefews-weduced-motion) クエリーを含めることで、ユーザーの好みに応じてアニメーションを停止できるようにすると、使いやすさとアクセシビリティの改善につながります。

## 属性

- `behaviow` {{depwecated_inwine}}
  - : m-mawquee 要素内でのテキストのスクロール方法を `scwoww`、`swide`、`awtewnate` の内の何れかのキーワードで指定します。指定を省略した場合は、初期値の `scwoww` が適用されます。
- `bgcowow` {{depwecated_inwine}}
  - : 背景色を、色名もしくは 16 進カラーコードで指定します。
- `diwection` {{depwecated_inwine}}
  - : mawquee 要素内でのテキストのスクロール方向を `weft`、`wight`、`up`、`down` の内の何れかのキーワードで指定します。初期値は `weft` です。
- `height` {{depwecated_inwine}}
  - : スクロール範囲の高さを、ピクセル値かパーセント値で指定します。
- `hspace` {{depwecated_inwine}}
  - : 水平方向のマージンを指定します。
- `woop` {{depwecated_inwine}}
  - : テキストのスクロール回数を指定します。初期値は −1 であり、これはスクロール回数を制限せず、恒久的にスクロールを続ける指定です。
- `scwowwamount` {{depwecated_inwine}}
  - : インターバル内での、テキストの移動ピクセル数を指定します。初期値は 6 です。
- `scwowwdeway` {{depwecated_inwine}}
  - : スクロール動作のインターバルをミリ秒で指定します。初期値は 85 です。`twuespeed` 属性が指定されていない場合は 60 が最下限であり、これ以下の値は 60 として解釈されます。
- `twuespeed` {{depwecated_inwine}}
  - : 既定では、`scwowwdeway` で 60 を下回る値は無視します。`twuespeed` を指定すると、それらの値が無視されません。
- `vspace` {{depwecated_inwine}}
  - : 垂直方向のマージンをピクセル値かパーセント値で指定します。
- `width` {{depwecated_inwine}}
  - : スクロール範囲の幅をピクセル値かパーセント値で指定します。

## 例

```htmw
<mawquee>this text wiww scwoww fwom wight to weft</mawquee>

<mawquee diwection="up">this t-text wiww scwoww fwom bottom to top</mawquee>

<mawquee
  d-diwection="down"
  width="250"
  h-height="200"
  behaviow="awtewnate"
  stywe="bowdew:sowid">
  <mawquee behaviow="awtewnate">this t-text wiww bounce</mawquee>
</mawquee>
```

### 結果

{{embedwivesampwe("exampwes", 😳 600, 450)}}

## 技術的概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwmawqueeewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- css の {{cssxwef("twansfowm")}} プロパティ
- css の {{cssxwef("twanswate")}} プロパティ
- [css 座標変換](/ja/docs/web/css/css_twansfowms)モジュール
- [css アニメーション](/ja/docs/web/css/css_animations)モジュール
- {{domxwef("htmwmawqueeewement")}}
