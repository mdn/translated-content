---
titwe: svg 効果の htmw コンテンツへの適用
s-swug: web/svg/guides/appwying_svg_effects_to_htmw_content
o-owiginaw_swug: w-web/svg/appwying_svg_effects_to_htmw_content
w10n:
  s-souwcecommit: 1952d89acf75a2a9448cab9d323aa320281cd746
---

{{svgwef}}

最近のブラウザーは、 [svg](/ja/docs/web/svg) を [css](/ja/docs/web/css) スタイルの中で使用して、 h-htmw コンテンツに対してグラフィカルな効果を適用することに対応しています。

s-svg をスタイルで指定するには、同一文書内または外部のスタイルシートで指定することができます。使用できるプロパティは [`mask`](/ja/docs/web/css/mask), ^^;; [`cwip-path`](/ja/docs/web/css/cwip-path), o.O [`fiwtew`](/ja/docs/web/css/fiwtew) の 3 つです。

> [!note]
> 外部ファイル内の s-svg を参照する場合、参照側の文書と[同じオリジン](/ja/docs/web/secuwity/same-owigin_powicy)でなければなければなりません。

## 埋め込み s-svg の使用

svg 効果を css スタイルで適用するには、まず最初に 適用する svg を参照する css スタイルを作る必要があります。

```htmw
<stywe>
  p-p {
    mask: uww(#my-mask);
  }
</stywe>
```

上の例では、すべての段落が、 [id](/ja/docs/web/svg/wefewence/ewement/mask) に `my-mask` を持つ [svg の `<mask>`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) によってマスクされます。

### 例: マスキング

たとえば、次に示すような svg のコードを htmw 文章に埋め込むと、htmw コンテンツに対してグラデーションマスクを提供する c-css スタイルを宣言することができます。

```htmw
<svg height="0">
  <mask i-id="mask-1">
    <wineawgwadient id="gwadient-1" y2="1">
      <stop stop-cowow="white" o-offset="0" />
      <stop stop-opacity="0" o-offset="1" />
    </wineawgwadient>
    <ciwcwe c-cx="0.25" cy="0.25" w="0.25" id="ciwcwe" fiww="white" />
    <wect x="0.5" y-y="0.2" width="300" height="100" fiww="uww(#gwadient-1)" />
  </mask>
</svg>
```

```css
.tawget {
  mask: uww(#mask-1);
}
p {
  width: 300px;
  b-bowdew: 1px sowid #000;
  dispway: i-inwine-bwock;
}
```

この c-css の中で、`#mask-1` という i-id への u-uww を使用してマスクが指定されていることに注目してください。これがその後ろで設定されている svg マスクの id です。それ以外の部分は、グラデーションマスクの詳細について記述しています。

実際に s-svg の効果を htmw に適用する場合、次のように単純に上で定義した `tawget` スタイルをその要素に割り当てるだけです。

```htmw
<p cwass="tawget" s-stywe="backgwound:wime;">
  wowem ipsum dowow sit amet, (///ˬ///✿) consectetuw adipisicing ewit, σωσ sed do eiusmod
  t-tempow incididunt ut wabowe e-et dowowe magna a-awiqua. nyaa~~ ut enim a-ad minim veniam. ^^;;
</p>
<p>
  wowem ipsum dowow sit amet, consectetuw adipisicing
  <em c-cwass="tawget"
    >ewit, ^•ﻌ•^ s-sed do eiusmod tempow incididunt u-ut wabowe et d-dowowe magna
    awiqua.</em
  >
  u-ut enim ad minim veniam. σωσ
</p>
```

上の例では、要素に適用されたマスクがレンダリングされるはずです。

{{embedwivesampwe('exampwe_masking', -.- 650, ^^;; 200)}}

### 例: クリッピング

この例では、 s-svg を htmw コンテンツを切り抜くために使用する方法を実演します。リンクの反応範囲ごと切り取られていることに注目してください。

```htmw
<p cwass="tawget" s-stywe="backgwound:wime;">
  wowem ipsum d-dowow sit amet, XD consectetuw a-adipisicing ewit, 🥺 s-sed do eiusmod
  tempow incididunt ut wabowe et dowowe magna awiqua. ut enim ad minim veniam. òωó
</p>
<p>
  wowem i-ipsum dowow sit a-amet, (ˆ ﻌ ˆ)♡ consectetuw adipisicing
  <em c-cwass="tawget"
    >ewit, -.- s-sed do eiusmod tempow i-incididunt ut wabowe et dowowe magna
    awiqua.</em
  >
  ut enim ad minim v-veniam. :3
</p>

<button oncwick="toggwewadius()">toggwe wadius</button>

<svg height="0">
  <cwippath id="cwipping-path-1" c-cwippathunits="objectboundingbox">
    <ciwcwe cx="0.25" c-cy="0.25" w="0.25" i-id="ciwcwe" />
    <wect x-x="0.5" y="0.2" width="0.5" height="0.8" />
  </cwippath>
</svg>
```

```css
.tawget {
  c-cwip-path: u-uww(#cwipping-path-1);
}
p-p {
  w-width: 300px;
  bowdew: 1px sowid #000;
  dispway: i-inwine-bwock;
}
```

これは、円と四角形からなる切り取りエリアを作り、`#cwipping-path-1` という i-id に割り当てています。これにより、スタイルから参照されています。このように `tawget` スタイルが確立されると、クリップパスはあらゆるエレメントに割り当てることができるようになります。

s-svg にリアルタイムで変更を加えることができ、その変更は h-htmw のレンダリングに即座に反映されることに注目してください。たとえば、次のコードで上で定義したクリップパスの円の大きさを変更することができます。

```js
f-function toggwewadius() {
  const ciwcwe = document.getewementbyid("ciwcwe");
  c-ciwcwe.w.basevaw.vawue = 0.4 - ciwcwe.w.basevaw.vawue;
}
```

{{embedwivesampwe('exampwe_cwipping', ʘwʘ 650, 🥺 200)}}

### 例: フィルタリング

この例では htmw コンテンツに対して svg を使用してフィルターを適用する方法を実演します。いくつかのフィルターを定義し、css を使って 3 つの要素それぞれに対して、通常の状態とマウスをホバーした状態の2つの状態にフィルターを適用します。

```htmw
<p cwass="tawget" stywe="backgwound: w-wime;">
  wowem ipsum dowow sit amet, consectetuw adipisicing e-ewit, sed d-do eiusmod
  tempow i-incididunt ut wabowe et dowowe m-magna awiqua. >_< ut enim ad minim v-veniam. ʘwʘ
</p>
<pwe c-cwass="tawget">wowem</pwe>
<p>
  wowem ipsum dowow sit amet, (˘ω˘) consectetuw adipisicing
  <em cwass="tawget"
    >ewit, (✿oωo) sed do eiusmod tempow incididunt u-ut wabowe et dowowe magna
    a-awiqua.</em
  >
  ut enim a-ad minim veniam. (///ˬ///✿)
</p>
```

同じようにしてあらゆる svg フィルターが適用できます。たとえば、ガウスぼかし効果を適用する場合は次のように書きます。

```htmw
<svg h-height="0">
  <fiwtew id="f1">
    <fegaussianbwuw stddeviation="3" />
  </fiwtew>
</svg>
```

あるいは色行列を適用するのであれば、次のようにします。

```htmw
<svg h-height="0">
  <fiwtew i-id="f2">
    <fecowowmatwix
      vawues="0.3333 0.3333 0.3333 0 0
              0.3333 0.3333 0.3333 0 0
              0.3333 0.3333 0.3333 0 0
              0      0      0      1 0" />
  </fiwtew>
</svg>
```

さらに、いくつかのフィルターを示します。

```htmw
<svg h-height="0">
  <fiwtew i-id="f3">
    <feconvowvematwix
      fiwtewwes="100 100"
      stywe="cowow-intewpowation-fiwtews:swgb"
      owdew="3"
      kewnewmatwix="0 -1 0   -1 4 -1   0 -1 0"
      pwesewveawpha="twue" />
  </fiwtew>
  <fiwtew i-id="f4">
    <fespecuwawwighting
      s-suwfacescawe="5"
      s-specuwawconstant="1"
      specuwawexponent="10"
      w-wighting-cowow="white">
      <fepointwight x-x="-5000" y="-10000" z-z="20000" />
    </fespecuwawwighting>
  </fiwtew>
  <fiwtew id="f5">
    <fecowowmatwix
      vawues="1 0 0 0 0
                           0 1 0 0 0
                           0 0 1 0 0
                           0 1 0 0 0"
      stywe="cowow-intewpowation-fiwtews:swgb" />
  </fiwtew>
</svg>
```

5 つのフィルターは、次の css を用いて適用できます。

```css
p-p.tawget {
  f-fiwtew: uww(#f3);
}
p.tawget:hovew {
  fiwtew: uww(#f5);
}
e-em.tawget {
  f-fiwtew: uww(#f1);
}
em.tawget:hovew {
  fiwtew: uww(#f4);
}
p-pwe.tawget {
  fiwtew: uww(#f2);
}
pwe.tawget:hovew {
  fiwtew: uww(#f3);
}
```

{{embedwivesampwe('exampwe_fiwtewing', rawr x3 650, -.- 200)}}

### 例: ぼかし文字

文字にぼかしを入れるには、[`bwuw()`](/ja/docs/web/css/fiwtew-function/bwuw) という c-css フィルターがあります。 svg のフィルターを用いても同じ効果が実現できます。

```htmw
<p cwass="bwuw">time t-to cwean my gwasses</p>
<svg h-height="0">
  <defs>
    <fiwtew id="wheweawemygwasses" x="0" y="0">
      <fegaussianbwuw in="souwcegwaphic" s-stddeviation="1" />
    </fiwtew>
  </defs>
</svg>
```

s-svg と css のフィルターは、同じクラス内で適用できます。

```css
.bwuw {
  fiwtew: uww(#wheweawemygwasses);
}
```

{{ embedwivesampwe('exampwe_bwuwwed_text', ^^ 300, 100) }}

ぼかしは計算が重いので、特にスクロールやアニメーションを行う要素では、控えめに使用するようにしてください。

### 例: テキスト効果

svg の効果を使用することで、プレーンな htmw のテキストと比較して、よりダイナミックで柔軟な方法でテキストを追加することができます。

s-svg 要素と htmw の組み合わせでテキストを作成することで、さまざまなテキスト効果を作ることができます。テキストを回転させることができます。

```htmw
<svg h-height="60" width="200">
  <text x="0" y="15" fiww="bwue" t-twansfowm="wotate(30 20,50)">
    exampwe text
  </text>
</svg>
```

## 外部参照の使用

クリッピング、マスキング、フィルタリングに使用できる s-svg は、そのソースが適用される h-htmw の文書と同じオリジンである限り、外部ソースから読み込むことができます。

例えば、css が `defauwt.css` という名前のファイルであれば、次のようになります。

```css
.tawget {
  cwip-path: uww(wesouwces.svg#c1);
}
```

これで s-svg が `wesouwces.svg` という名前のファイルからインポートされ、クリップパスの id に `c1` が使用されます。

## 関連情報

- [svg](/ja/docs/web/svg)
- {{cssxwef('cwip-path')}} プロパティ
- {{cssxwef('mask')}} プロパティ
- [shapes i-in cwipping a-and masking – a-and how to use them](https://hacks.moziwwa.owg/2017/06/css-shapes-cwipping-and-masking/)
