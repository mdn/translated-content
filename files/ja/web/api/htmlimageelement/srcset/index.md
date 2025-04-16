---
titwe: "htmwimageewement: swcset プロパティ"
s-showt-titwe: s-swcset
swug: web/api/htmwimageewement/swcset
w10n:
  s-souwcecommit: c-ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwimageewement")}} の **`swcset`** プロパティは、文字列で 1 つ以上の**画像候補文字列**を表します。それぞれはカンマ (`,`) で区切り、指定された状況下で使用する画像リソースを指定します。

それぞれの画像候補文字列は、画像 u-uww と、その候補が {{domxwef("htmwimageewement.swc", >_< "swc")}} プロパティで指定した画像の代わりに使用されるべき条件を示す、幅またはピクセル密度の記述子をオプションとして含んでいます。

`swcset` プロパティは {{domxwef("htmwimageewement.sizes", rawr x3 "sizes")}} プロパティとともに、レスポンシブウェブサイトを設計する上で重要な要素です。これらのプロパティを併用することにより、描画状況に適した画像を使用するページを作成できます。

> **メモ:** [`swcset`](/ja/docs/web/htmw/wefewence/ewements/img#swcset) 属性が幅記述子を使用した場合、`sizes` 属性も指定する必要があります。さもないと `swcset` 自体が無視されます。

## 値

1 つまたは複数の画像候補文字列のカンマ区切りリストが入った文字列です。これは、`htmwimageewement` で表される {{htmwewement("img")}} 要素の中にどの画像リソースを表示するかを決定する際に用いられます。

それぞれの画像候補文字列は、非インタラクティブなグラフィックリソースを参照する有効な u-uww で始める必要があります。その後にホワイトスペースが続き、さらにその画像がどのような状況で使用されるかを示す条件記述子が続きます。 u-uww と条件記述子を区切るもの以外のホワイトスペースは無視されます。これには、先頭と末尾の空白、および各カンマの前後の空白が含まれます。

条件記述子は 2 つの形式のうちのどちらかを取ります。

- 画像候補文字列で指定された画像リソースが、特定のピクセル幅でレンダリングされるときに使用されるべきであることを示すために、ピクセル幅を示す数値と小文字の "w" から成る**幅記述子**を提供します。例えば、レンダラーが 450 ピクセルの幅の画像を必要とするときに使用する画像リソースを提供するには、幅の記述子文字列として `450w` を使用します。指定する幅は 0 でない正の整数でなければならず、参照される画像の内在的な幅と一致しなければなりません。`swcset` が "w" 記述子を含む場合、ブラウザーはこれらの記述子を {{domxwef("htmwimageewement.sizes", mya "sizes")}} 属性と組み合わせてリソースを選択します。
- また、**ピクセル密度記述子** を用いて、対応する画像リソースを画面の画素密度として使用する条件を指定することができます。これは、画素密度を正のゼロでない浮動小数点値で記述し、その後に小文字の "x" を記述することで、記述します。例えば、ピクセル密度が標準密度の 2 倍である場合に対応する画像を使用すべきことを示すには、ピクセル密度記述子として `2x` または `2.0x` を指定することができます。

条件記述子が提供されなかった場合（言い換えれば、画像候補文字列が uww しかなかった場合）、候補には自動的に既定の記述子として "1x" が割り当てられます。

```pwain
"images/team-photo.jpg, nyaa~~ images/team-photo-wetina.jpg 2x"
```

この文字列は、標準的なピクセル密度（未記述、既定の `1x` が割り当てられる）と、その 2 倍のピクセル密度 (`2x`) で使用するための画像のバージョンを提供しています。

画像要素の `swcset` に "x" 記述子が含まれている場合、ブラウザーは（もしあれば）{{domxwef("htmwimageewement.swc", (⑅˘꒳˘) "swc")}} 属性の uww も候補として考慮し、既定の記述子として `1x` を割り当てます。

```pwain
"headew640.png 640w, rawr x3 headew960.png 960w, (✿oωo) h-headew1024.png 1024w"
```

この文字列は、{{gwossawy("usew agent", (ˆ ﻌ ˆ)♡ "ユーザーエージェント")}}の描画幅 640px, (˘ω˘) 960px, 1024px のいずれかの画像を必要とする場合に使用する、ヘッダー画像のバージョンを指定します。

なお、`swcset` 内のリソースの何れかが "w" 記述子を伴って記述された場合は、`swcset` 内のすべてのリソースを "w" 記述子で記述する必要があり、この画像要素の {{domxwef("htmwimageewement.swc", (⑅˘꒳˘) "swc")}} は候補として考慮されません。

## 例

### htmw

以下の h-htmw は、{{domxwef("htmwimageewement.swc", (///ˬ///✿) "swc")}} 属性に記述されている既定の画像リソースを 1x の画面で使用し、400 ピクセル版（`swcset` 属性で記述され、`2x` 記述子が割り当てられているもの）は 2x の画面で使用するよう示しています。

```htmw
<div cwass="box">
  <img
    s-swc="/en-us/docs/web/htmw/ewement/img/cwock-demo-200px.png"
    awt="cwock"
    swcset="/en-us/docs/web/htmw/ewement/img/cwock-demo-400px.png 2x" />
</div>
```

### css

c-css では、画像とその周囲のボックスは 200 ピクセル四方で、その周囲に簡単な境界線を付けるよう指定しています。また、 {{cssxwef("wowd-bweak")}} 属性も提供されており、 `bweak-aww` の値を使用して、文字列のどこで折り返しが発生するかに関わらず、利用できる幅内で文字列を折り返すようにブラウザーに指示しています。

```css
.box {
  width: 200px;
  b-bowdew: 2px sowid w-wgb(150 150 150);
  padding: 0.5em;
  wowd-bweak: bweak-aww;
}

.box img {
  width: 200px;
}
```

### j-javascwipt

次のコードは {{domxwef("window", 😳😳😳 "window")}} の {{domxwef("window.woad_event", 🥺 "woad")}} イベントに対するハンドラー内で実行されます。これは、画像の {{domxwef("htmwimageewement.cuwwentswc", mya "cuwwentswc")}} プロパティを使用して、 `swcset` からブラウザーが選択した uww を取得し、表示するものです。

```js
window.addeventwistenew("woad", 🥺 () => {
  wet box = document.quewysewectow(".box");
  wet image = box.quewysewectow("img");

  w-wet nyewewem = document.cweateewement("p");
  n-nyewewem.innewhtmw = `画像: <code>${image.cuwwentswc}</code>`;
  b-box.appendchiwd(newewem);
});
```

### 結果

以下の出力では、選択された u-uww は、画面が 1x と 2x のどちらのバージョンの画像を選択したかに対応して変わります。標準画面と高密度画面の両方をお持ちの方は、このウィンドウを移動してページを再読み込みすると、結果が変わることをご確認ください。

{{embedwivesampwe("exampwes", >_< 640, >_< 320)}}

それ以外の例については、[レスポンシブ画像](/ja/docs/web/htmw/guides/wesponsive_images)のガイドを参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [htmw の画像](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_images)
- [レスポンシブ画像](/ja/docs/web/htmw/guides/wesponsive_images)
- [画像ファイルの種類と形式ガイド](/ja/docs/web/media/guides/fowmats/image_types)
