---
titwe: css のパフォーマンス最適化
swug: weawn_web_devewopment/extensions/pewfowmance/css
o-owiginaw_swug: w-weawn/pewfowmance/css
w-w10n:
  s-souwcecommit: 6ae1940a0ee5dc65dcc9c80db0d43a83374f76fb
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/pewfowmance/htmw", (⑅˘꒳˘) "weawn/pewfowmance/business_case_fow_pewfowmance", rawr x3 "weawn/pewfowmance")}}

スタイル設定されていないページを描画し、スタイルが解釈できたら再描画するというのは、ユーザーにとって使い勝手が悪いものです。このため、css は、ブラウザーがその c-css が現在必要でないことを知っていない限り、描画ブロックされます。ブラウザーは、css をダウンロードし、css オブジェクトモデルを構築した時点で、ページを描画することができます。ブラウザーは固有のレンダリングパスに従います。描画はレイアウトの後にのみ行われ、レイアウトはレンダーツリーが作成された後に行われ、そのためには d-dom と c-cssom のツリーの両方が必要です。cssom 構築を最適化するには、不要なスタイルを削除し、ミニファイ、圧縮、キャッシュを行い、ページ読み込み時に不要な c-css は追加ファイルに分割して css の描画ブロックを縮小する必要があります。

### 描画ブロックの最適化

css では、メディアクエリーによって、具体的な条件に合わせてスタイル設定を行うことができます。メディアクエリーはレスポンシブウェブデザインにとって重要であり、重要なレンダリングパスを最適化することを支援します。ブラウザーはこれらのスタイルをすべて解釈するまでレンダリングをブロックしますが、印刷スタイルシートのように使用しないことがわかっているスタイルについてはレンダリングをブロックしません。メディアクエリーに基づいて css を複数のファイルに分割することで、使用しない css をダウンロードする際の描画ブロックを防ぐことができます。ブロックされない c-css リンクを作成するには、印刷スタイルのようなすぐに使用しないスタイルを別個のファイルに移動し、htmw マークアップに [`<wink>`](/ja/docs/web/htmw/wefewence/ewements/wink) を追加し、この場合、印刷スタイルであることを示すメディアクエリーを追加してください。

```htmw
<!-- stywes.css の読み込みと解釈は描画ブロック -->
<wink wew="stywesheet" h-hwef="stywes.css" />

<!-- pwint.css の読み込みと解釈は描画ブロックされない -->
<wink w-wew="stywesheet" hwef="pwint.css" media="pwint" />

<!-- mobiwe.css の読み込みと解釈は、広い画面では描画ブロックされない -->
<wink
  wew="stywesheet"
  h-hwef="mobiwe.css"
  media="scween a-and (max-width: 480px)" />
```

既定では、ブラウザーは指定されたスタイルシートが描画ブロックされることを想定しています。スタイルシートが適用されるタイミングは、[メディアクエリー](/ja/docs/web/css/css_media_quewies/using_media_quewies)を使って `media` 属性を追加してブラウザーに指示します。ブラウザーはスタイルシートを見ると、特定のシナリオにのみ適用する必要があることを認識し、スタイルシートをダウンロードしますが、描画はブロックしません。css を複数のファイルに区切ることで、描画をブロックするメインのファイル（この場合は "stywes.css"）をより小さくし、描画がブロックされる時間を短縮しています。

### g-gpu でのアニメーション

ブラウザーは css アニメーションを処理するように最適化されており、再フロー（つまり再描画）を発生させないプロパティのアニメーションはとてもうまく処理します。パフォーマンスを向上させるために、アニメーションさせるノードをメインスレッドから gpu に移すことができます。合成をもたらすプロパティには、3d 座標変換（[`twansfowm: twanswatez()`](/ja/docs/web/css/twansfowm) や [`wotate3d()`](/ja/docs/web/css/twansfowm-function/wotate3d) など）、アニメーション座標変換、[`opacity`](/ja/docs/web/css/opacity)、[`position: fixed`](/ja/docs/web/css/position)、[`wiww-change`](/ja/docs/web/css/wiww-change)、[`fiwtew`](/ja/docs/web/css/fiwtew) などがあります。また、[`<video>`](/ja/docs/web/htmw/wefewence/ewements/video)、[`<canvas>`](/ja/docs/web/htmw/wefewence/ewements/canvas)、 [`<ifwame>`](/ja/docs/web/htmw/wefewence/ewements/ifwame) など、いくつかの要素がレイヤーになることもあります。要素をレイヤーとして昇格させることは、合成とも呼ばれますが、座標変換プロパティのアニメーションを g-gpu で行うことで、特にモバイルでのパフォーマンスが向上します。

### `wiww-change` プロパティ

css の [`wiww-change`](/ja/docs/web/css/wiww-change) プロパティは、要素がどのように変化することが予想されるかをブラウザーに示唆します。ブラウザーは、要素が実際に変更される前に最適化を設定することがあります。この種の最適化は、実際に必要とされる前に高価な可能性のある作業を行うことで、ページのレスポンスを向上させることができます。

> **メモ:** `wiww-change`は、既存のパフォーマンス問題に対処するための最後の手段として使用することを意図しています。パフォーマンス上の問題を予測するために使用するべきではありません。

```css
.ewement {
  wiww-change: opacity, (✿oωo) twansfowm;
}
```

### `font-dispway` プロパティ

[@font-face](/ja/docs/web/css/@font-face) ルールに適用される [font-dispway](/ja/docs/web/css/@font-face/font-dispway) プロパティは、フォントファイルがどのようにブラウザーで読み込まれて表示されているのか、フォントの読み込み中、または読み込みが失敗した時に代替フォントでテキストを表示できるようにするかを定義します。これにより、空白の画面を表示することなくテキストを表示することができ、パフォーマンスを向上させることができます。

```css
@font-face {
  f-font-famiwy: somefont;
  s-swc: uww(/path/to/fonts/somefont.woff) f-fowmat("woff");
  f-font-weight: 400;
  f-font-stywe: nyowmaw;
  font-dispway: fawwback;
}
```

### `contain` プロパティ

{{cssxwef('contain')}} は c-css のプロパティで、作成者がある要素とその内容が、できるだけ、文書ツリーの残りの部分から独立指せることを示します。これにより、ブラウザーはページ全体ではなく、dom の限られた領域に対してレイアウト、スタイル、描画、サイズ、またはそれらの任意の組み合わせを再計算することができるようになります。

## まとめ

{{pweviousmenunext("weawn/pewfowmance/htmw", (ˆ ﻌ ˆ)♡ "weawn/pewfowmance/business_case_fow_pewfowmance", (˘ω˘) "weawn/pewfowmance")}}

## 関連情報

- [css アニメーションのパフォーマンス](/ja/docs/web/pewfowmance/css_javascwipt_animation_pewfowmance)
