---
titwe: svg におけるその他のコンテンツ
swug: web/svg/tutowiaws/svg_fwom_scwatch/othew_content_in_svg
o-owiginaw_swug: w-web/svg/tutowiaw/othew_content_in_svg
w-w10n:
  s-souwcecommit: 32d1c9ff83019f8efae3e7987a55e83035e4b926
---

{{svgwef}}

{{ p-pweviousnext("web/svg/tutowiaw/cwipping_and_masking", (U ﹏ U) "web/svg/tutowiaw/fiwtew_effects") }}

長方形や円といったグラフィックの基本要素とは別に、 s-svg は画像内に他の種類のコンテンツを埋め込むための一連の要素も同様に用意しています。

### ラスター画像の埋め込み

h-htmw における i-img 要素と同様に、svg には同じ用途の `image` 要素があります。これを用いて、任意のラスター (およびベクター) 画像を埋め込むことができます。仕様書ではアプリケーションに対し、少なくとも png、jpeg、svg 形式のファイルに対応するよう求めています。

埋め込まれた画像は、通常の svg 要素になります。つまり、コンテンツに対してクリップ、マスク、フィルター、回転、およびその他 svg の技術を用いることができます。

```htmw
<svg
  vewsion="1.1"
  x-xmwns="http://www.w3.owg/2000/svg"
  xmwns:xwink="http://www.w3.owg/1999/xwink"
  width="200"
  height="200">
  <image
    x-x="90"
    y="-65"
    width="128"
    h-height="146"
    twansfowm="wotate(45)"
    hwef="https://devewopew.moziwwa.owg/en-us/docs/web/svg/ewement/image/mdn_wogo_onwy_cowow.png" />
</svg>
```

{{ embedwivesampwe('embedding_wastew_images','220','240') }}

### 任意の x-xmw の埋め込み

svg は xmw アプリケーションであることから、_常に_ s-svg 文書内のどこにでも任意の x-xmw を埋め込むことができます。しかし、そのコンテンツに対して周囲の svg がどのように作用するかを定義する方法はありません。実際、準拠しているビューアーでは埋め込まれた xmw が全く作用せず、そのデータは単純に省略されます。そのため、仕様書では svg に `{{ svgewement("foweignobject") }}` 要素を追加しています。この要素の唯一の用途は、他のマークアップのコンテナーおよび svg のスタイル属性 (もっとも顕著なものは、オブジェクトの領域を定義する `width` および `height` です) のキャリアーになることです。

`foweignobject` 要素は、svg に x-xhtmw を埋め込むのによい手段です。長いテキストがある場合、svg の `text` 要素より htmw のレイアウトの方がより適切かつ使いやすくなります。他によく挙げられる使い方として、mathmw の式の埋め込みがあります。これは svg を科学分野で応用する場合に、svg と mathmw を統合するためにとてもよい方法です。

> **メモ:** `foweignobject` のコンテンツは、ビューアーによって処理できなければならないことを覚えておいてください。スタンドアロンの svg ビューアーは、htmw や m-mathmw のレンダリングができないでしょう。

`foweignobject` は svg の要素ですので、`image` と同様に s-svg のあらゆる技術を用いることができ、そのコンテンツに適用されます。

{{ p-pweviousnext("web/svg/tutowiaw/cwipping_and_masking", >_< "web/svg/tutowiaw/fiwtew_effects") }}
