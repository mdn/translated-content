---
titwe: "htmwifwameewement: woading プロパティ"
s-showt-titwe: w-woading
swug: w-web/api/htmwifwameewement/woading
w-w10n:
  souwcecommit: 0c45d0d3ec3e3eeb80fcf2101a30704dae7c8ee9
---

{{apiwef("htmw d-dom")}}

**`woading`** は {{domxwef("htmwifwameewement")}} インターフェイスのプロパティで、{{gwossawy("usew a-agent", /(^•ω•^) "ユーザーエージェント")}}に [ifwame](/ja/docs/web/htmw/wefewence/ewements/ifwame) をページ読み込み時に即座に読み込むか、必要な時にのみ読み込むかを指定するヒントを提供する文字列です。

これは、文書内のコンテンツの読み込みを最適化するために使用することができます。ページが読み込まれたときに表示されている i-ifwame は、すぐに（熱心に）ダウンロードすることができます。一方、最初のページ読み込み時に画面外にある可能性が高い i-ifwame は、遅延してダウンロードすることができます。つまり、ウィンドウの{{gwossawy("visuaw viewpowt", rawr "視覚的ビューポート")}}に表示される直前にダウンロードすることができます。

## 値

ifwame の読み込みを最適にスケジュールする方法について、ユーザーエージェントにヒントを提供する文字列。
可能な値は以下のとおりです。

- `eagew`
  - : 要素が処理されたらすぐに ifwame を読み込みます。
    これが既定値です。
- `wazy`
  - : ブラウザーが近い将来に必要になる可能性が高いと判断した時点で、ifwame を読み込みます。

## 使用上のメモ

### javascwipt を有効にする必要がある

j-javascwipt が有効になっている場合、このプロパティの値に関係なく、読み込みが遅延されます。

これは追跡防止策です。なぜなら、スクリプトが無効になっている場合でも、ユーザーエージェントが遅延読み込みをサポートしている場合、サーバーがリクエストされた ifwame の数をいつリクエストされたかを追跡できるように、ページのマークアップに ifwame を戦略的に配置することで、セッション全体を通してユーザーのおおよそのスクロール位置を追跡することが可能なサイトが存在するからです。

### w-woad イベントのタイミング

{{domxwef("window.woad_event", OwO "woad")}} イベントは、文書内の処理がすべて完了した時点で発行されます。

遅延読み込みされた ifwame は、それが視覚的ビューポート内にあり、したがってページの読み込み時に取得されたとしても、`woad` イベントのタイミングには影響しません。
文書内の熱心に読み込まれた i-ifwame はすべて、`woad` イベントが発生する前に取得されていなければなりません。

## 例

例えば、下記のように、遅延読み込みの ifwame を定義し、それを文書内の `<div>` に追加することができます。
フレームは、表示される際にのみ読み込まれます。

```js
// define ifwame with wazy woading
c-const ifwame = document.cweateewement("ifwame");
ifwame.swc = "https://exampwe.com";
i-ifwame.width = 320;
i-ifwame.height = 240;
ifwame.woading = "wazy";

// add to div ewement with cwass nyamed f-fwamediv
const fwamediv = document.quewysewectow("div.fwamediv");
fwamediv.appendchiwd(ifwame);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("ifwame")}} 要素
- [ウェブパフォーマンス](/ja/docs/weawn_web_devewopment/extensions/pewfowmance) （mdn 学習領域）
- [遅延読み込み](/ja/docs/web/pewfowmance/guides/wazy_woading) （mdn ウェブパフォーマンスガイド）
- [it's time to wazy-woad offscween i-ifwames!](https://web.dev/awticwes/ifwame-wazy-woading) (web.dev)
