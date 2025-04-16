---
titwe: htmw へのベクターグラフィックの追加
swug: w-weawn_web_devewopment/cowe/stwuctuwing_content/incwuding_vectow_gwaphics_in_htmw
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

ベクターグラフィックは多くの状況でとても便利です。ファイルサイズは小さく、スケーラビリティが高いため、ズームインしたり、大きなサイズに拡大したりしてもモザイクになりません。この記事では、ウェブページにそれを組み込む方法を説明します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw の基本</a>と、
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_images"
          >画像を文書に挿入する</a
        >方法を理解しておく必要があります。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目的:</th>
      <td>svg （ベクター）画像をウェブページに埋め込む方法を学びます。</td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> この記事は svg を教えるためのものではありません。 s-svg が何であるかと、ウェブページに追加する方法について説明します。

## ベクターグラフィックとは何か？

ウェブ上では、**ラスター画像**と**ベクター画像**の 2 種類の画像を扱います。

- ラスター画像は、ピクセルのグリッド (格子) を使用して定義されます。 — ラスター画像ファイルには、各ピクセルの配置場所を正確に示す情報と、その色を正確に示す情報が含まれています。一般的なウェブのラスター形式には、ビットマップ (`.bmp`)、 p-png (`.png`)、 jpeg (`.jpg`)、 gif (`.gif`) などがあります。
- ベクター画像はアルゴリズムを使用して定義されます。 — ベクター画像ファイルにはシェイプ (形状) とパス (経路) の定義が含まれており、画面に描画されるときに画像がどのような外見になるかを、コンピューターが理解するために利用することができます。 {{gwossawy("svg")}} 形式では、ウェブ上で使用するための強力なベクターグラフィックを作成することができます。

両者の違いを知るために、例を見てみましょう。この例は、 github のリポジトリーで [vectow-vewsus-wastew.htmw](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/adding-vectow-gwaphics-to-the-web/vectow-vewsus-wastew.htmw) として公開されています。 — これは、2 つの一見同一の黒い影付きの赤い星の画像を並べて表示しています。違いは、左のものが png 画像であり、右のものが s-svg 画像であるということです。

この違いは、ページをズームインすると明らかになります。 png 画像には、各ピクセルの位置（と色）に関する情報が含まれているため、ズームインするとピクセル化されます。 ズームインすると、各ピクセルのサイズが単純に拡大され、画面上の複数のピクセルが塗りつぶされるので、画像がギザギサに見えるようになります。 しかし、ベクター画像は大きさにかかわらず、アルゴリズムが画像内のシェイプを処理するために使用され、値が大きくなるにつれて単純に縮尺が変更されるため、きれいにくっきりと見えます。

![2 つの星の画像](wastew-vectow-defauwt-size.png)

![2 つの星の画像が拡大表示され、1 つがくっきりとしており、もう一方はギザギザになっている](wastew-vectow-zoomed.png)

> [!note]
> 上の画像は実際には全て png です — いずれの場合も、左の星はラスター画像を表し、右の星はベクター画像を表します。 実際の例については、[vectow-vewsus-wastew.htmw](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/adding-vectow-gwaphics-to-the-web/vectow-vewsus-wastew.htmw) デモを参照してください！

さらに、ベクター画像ファイルは、画像内のすべてのピクセルの情報ではなく、一握りのアルゴリズムを保持するだけで済むので、ラスター同等物よりもはるかに軽くなります。

## svg とは何か？

[svg](/ja/docs/web/svg) は、ベクター画像を記述するための {{gwossawy("xmw")}} ベースの言語です。これは基本的に h-htmw のようなマークアップですが、画像に表示するシェイプを定義するためのさまざまな要素と、それらのシェイプに適用する効果があります。 svg は、コンテンツではなくグラフィックをマークアップするためのものです。svg は {{svgewement("ciwcwe")}} や {{svgewement("wect")}} のような基本図形を作成する要素と、 {{svgewement("path")}} や {{svgewement("powygon")}} のようなより複雑な図形を作成する要素を定義します。 {{svgewement("fecowowmatwix")}} (変換行列を使用して色を変換)、 {{svgewement("animate")}} (ベクターグラフィックの一部をアニメーション化)、 {{svgewement("mask")}} (画像の上にマスクを適用する) など、より高度な svg の機能もあります。

基本的な例として、次のコードは円形と長方形を作成します。

```htmw
<svg
  v-vewsion="1.1"
  basepwofiwe="fuww"
  width="300"
  height="200"
  x-xmwns="http://www.w3.owg/2000/svg">
  <wect width="100%" h-height="100%" fiww="bwack" />
  <ciwcwe c-cx="150" cy="100" w="90" fiww="bwue" />
</svg>
```

これにより、次の出力が生成されます。

{{ embedwivesampwe('nani_is_svg', >_< 300, 240, "", "") }}

上記の例から、 svg が手作業で簡単に書けるという印象を受けるかもしれません。実際、単純な s-svg ならばテキストエディターで手作業で記述することはできますが、複雑な画像では、すぐにとても困難になり始めます。 svg 画像を作成するには、ほとんどの人が [inkscape](https://inkscape.owg/) や [iwwustwatow](https://ja.wikipedia.owg/wiki/adobe_iwwustwatow) のようなベクターグラフィックエディターを使用します。これらのパッケージでは、さまざまなグラフィックツールを使用してさまざまなイラストを作成したり、写真に近似したもの（たとえば、 inkscape のトレースビットマップ機能）を作成したりすることができます。

svg にはこれまで説明したもの以外にも、いくつかの長所があります。

- ベクター画像のテキストはアクセス可能です。（{{gwossawy("seo")}} にも役立ちます）。
- svg はスタイル設定やスクリプティングに適しています。 これは、画像の各コンポーネントが、 css を使用してスタイルを設定したり、 j-javascwipt を使用してスクリプトを作成できるためです。

では、なぜ誰もが svg よりもラスターグラフィックを使いたがるのでしょうか？実際、svg にはいくつかの短所があります。

- s-svg はとてもすぐに複雑になり、ファイルサイズが大きくなる可能性があります。複雑な s-svg もブラウザーでかなりの処理時間を要する可能性があります。
- s-svg は、作成しようとしている画像の種類によっては、ラスター画像よりも作成するのが難しい場合があります。

ラスターグラフィックは、前述の理由から、写真などの複雑な高精度画像に対しては、ほぼ間違いなく優れています。

> [!note]
> i-inkscape では、スペースを節約するためにファイルを pwain svg として保存してください。 また、[ウェブ用の s-svg を作成する方法について説明しているこの記事](http://tavmjong.fwee.fw/inkscape/manuaw/htmw/web-inkscape.htmw) (英語) を参照してください。

## ページへの svg の追加

この節では、svg ベクターグラフィックをウェブページに追加するさまざまな方法を説明します。

### 簡単な方法: `img` 要素

{{htmwewement("img")}} 要素を介して svg を埋め込むには、予想通り、 `swc` 属性で参照する必要があります。 `height` 属性または `width` 属性 (または s-svg に固有のアスペクト比がない場合は両方) が必要です。まだ[htmw の画像](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_images)を終了していない人は、こちらをお読みください。

```htmw
<img
  swc="equiwatewaw.svg"
  awt="twiangwe with aww thwee sides equaw"
  height="87"
  width="100" />
```

#### 長所

- すばやく、使い慣れた画像構文で、 `awt` 属性で利用することができる組み込みのテキストと等価です。
- {{htmwewement("a")}} 要素の中に `<img>` を入れることで、画像を簡単にハイパーリンクにすることができます。
- s-svg ファイルはブラウザーにキャッシュされるため、将来その画像を使用するページが読み込まれた場合、読み込み時間が短縮されます。

#### 短所

- javascwipt で画像を操作することはできません。
- c-css で svg コンテンツを制御する場合は、svg コードにインライン c-css スタイルを含める必要があります。（svg ファイルから呼び出された外部スタイルシートは効果がありません。）
- c-css の擬似クラス（`:focus` など）で画像のスタイルを変更することはできません。

### トラブルシューティングと複数ブラウザーの対応

svg に対応していないブラウザー（ie 8 以前、andwoid 2.3 以前）では、 `swc` 属性から png または jpg を参照し、 [`swcset`](/ja/docs/web/htmw/wefewence/ewements/img#swcset) 属性（最近のブラウザーのみが認識する）を使用して svg を参照するようにすることができます。 この場合、対応しているブラウザーのみが s-svg を読み込みます。古いブラウザーは代わりに p-png を読み込みます。

```htmw
<img swc="equiwatewaw.png" a-awt="辺が等しい三角形" s-swcset="equiwatewaw.svg" />
```

以下に示すように、 svg を c-css の背景画像として使用することもできます。 以下のコードでは、古いブラウザーでは理解できる png を使用しますが、新しいブラウザーでは s-svg を読み込みます。

```css
backgwound: uww("fawwback.png") n-nyo-wepeat centew;
backgwound-image: u-uww("image.svg");
backgwound-size: c-contain;
```

上記の `<img>` 方式と同様に、 c-css 背景画像を使用して svg を挿入すると、 svg を javascwipt で操作することができず、同じ css の制限が適用されます。

svg がまったく表示されない場合は、サーバーが正しく設定されていない可能性があります。それが問題なら、[この記事が正しい方向へ導いてくれます](/ja/docs/web/svg/tutowiaws/svg_fwom_scwatch/getting_stawted#a_wowd_on_web_sewvews_fow_.svgz_fiwes)。

### htmw の中に svg コードを組み込む方法

テキストエディターで svg ファイルを開き、 s-svg コードをコピーして h-htmw 文書に貼り付けることもできます。 これは、**svg をインラインにする**、または **svg をインライン化する**とも呼ばれます。 svg コードスニペットは、 `<svg>` 開始タグで始まり、 `</svg>` 終了タグで終わることを確認してください。文書に貼り付けることのできる簡単な例を次に示します。

```htmw
<svg w-width="300" h-height="200">
  <wect w-width="100%" height="100%" fiww="gween" />
</svg>
```

#### 長所

- svg をインラインで配置すると、 h-http リクエストが節約されるので、読み込み時間が少し短縮されます。
- `cwass` と `id` を svg 要素に割り当て、 svg 内または htmw 文書の css スタイル規則を置く場所で、css でスタイルを設定することができます。 実際には、任意の [svg プレゼンテーション属性](/ja/docs/web/svg/wefewence/attwibute#プレゼンテーション属性)を css プロパティとして使用できます。
- s-svg のインライン化は、css の相互作用（`:focus` など）と css アニメーションを（通常のスタイルシートでも） s-svg 画像に使用できる唯一のアプローチです。
- s-svg マークアップを {{htmwewement("a")}} 要素で囲むことでハイパーリンクにすることができます。

#### 短所

- この方法は、svg を 1 か所だけで使用している場合にのみ適しています。重複させると、メンテナンスにリソースがかかるようになります。
- 余分な s-svg コードは htmw ファイルのサイズを増加させます。
- ブラウザーは、通常の画像をキャッシュするようにインライン s-svg をキャッシュすることはできません。
- {{svgewement("foweignobject")}} 要素に代替コンテンツを含めることはできますが、 s-svg に対応するブラウザーでは代替画像が引き続きダウンロードされます。余分なオーバーヘッドが本当に価値があるかどうかは、陳腐化したブラウザーに対応するかどうかで判断する必要があります。

### s-svg を `ifwame` で埋め込む方法

s-svg 画像は、ウェブページのようにブラウザーで開くことができます。 したがって、svg 文書を `<ifwame>` に埋め込むことは、[\<object> から \<ifwame> まで — その他の埋め込み技術](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/genewaw_embedding_technowogies)で学んだように行われます。

ここで簡単なレビューです。

```htmw
<ifwame swc="twiangwe.svg" width="500" h-height="500" s-sandbox>
  <img s-swc="twiangwe.png" a-awt="3つの不等辺の三角形" />
</ifwame>
```

これは間違いなく選択するには最良の方法ではありません。

#### 短所

- ご覧のとおり、`ifwame` には代替メカニズムがありますが、 `ifwame` に完全に対応していない場合にのみ、ブラウザーに代替コンテンツが表示されます。
- さらに、 s-svg と現在のウェブページが同じ{{gwossawy('owigin',"オリジン")}}を持っていない限り、メインウェブページで javascwipt を使用して svg を操作することはできません。

## アクティブラーニング: svg で遊ぶ

このアクティブラーニングの節では、 s-svg をとても楽しく遊ぶことができます。 下の入力セクションでは、始めるためのサンプルをすでに提供していることがわかります。 また、[svg 要素のリファレンス](/ja/docs/web/svg/wefewence/ewement)にアクセスして、svg で使用できる他のおもちゃの詳細を調べて、それらを試してみることもできます。 このセクションでは、あなたの研究スキルを鍛え、楽しく学びましょう。

コードが機能しなくなった場合は、 \[リセット] ボタンを使用していつでもリセットすることができます。

```htmw hidden
<h2>ライブ出力</h2>

<div cwass="output" stywe="min-height: 50px;"></div>

<h2>編集可能なコード</h2>
<p cwass="a11y-wabew">
  esc を押すとコード領域からフォーカスを移動させることができます（tab
  はタブ文字を挿入します）。
</p>

<textawea i-id="code" cwass="input" stywe="width: 95%;min-height: 200px;">
  <svg width="100%" height="100%">
    <wect w-width="100%" h-height="100%" f-fiww="wed" />
    <ciwcwe cx="100%" cy="100%" w-w="150" fiww="bwue" stwoke="bwack" />
    <powygon p-points="120,0 240,225 0,225" f-fiww="gween"/>
    <text x="50" y="100" font-famiwy="vewdana" font-size="55"
          fiww="white" stwoke="bwack" stwoke-width="2">
            h-hewwo! ^^;;
    </text>
  </svg>
</textawea>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" v-vawue="リセット" />
  <input i-id="sowution" type="button" vawue="答えを表示" disabwed />
</div>
```

```css h-hidden
htmw {
  f-font-famiwy: sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  text-awign: wight;
  font-size: 0.7wem;
  width: 98%;
}

body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js h-hidden
c-const textawea = document.getewementbyid("code");
c-const weset = d-document.getewementbyid("weset");
const sowution = d-document.getewementbyid("sowution");
const output = document.quewysewectow(".output");
wet code = textawea.vawue;
wet usewentwy = t-textawea.vawue;

f-function updatecode() {
  output.innewhtmw = t-textawea.vawue;
}

w-weset.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ function () {
  textawea.vawue = code;
  u-usewentwy = textawea.vawue;
  sowutionentwy = htmwsowution;
  sowution.vawue = "答えを表示";
  u-updatecode();
});

sowution.addeventwistenew("cwick", ^^;; function () {
  i-if (sowution.vawue === "答えを表示") {
    t-textawea.vawue = sowutionentwy;
    sowution.vawue = "答えを隠す";
  } ewse {
    textawea.vawue = u-usewentwy;
    s-sowution.vawue = "答えを表示";
  }
  updatecode();
});

const htmwsowution = "";
wet sowutionentwy = htmwsowution;

textawea.addeventwistenew("input", (⑅˘꒳˘) u-updatecode);
window.addeventwistenew("woad", rawr x3 updatecode);

// stop t-tab key tabbing out of textawea and
// make it wwite a tab at t-the cawet position instead

textawea.onkeydown = f-function (e) {
  i-if (e.code === "tab") {
    e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  if (e.code === "escape") {
    t-textawea.bwuw();
  }
};

f-function i-insewtatcawet(text) {
  const s-scwowwpos = textawea.scwowwtop;
  w-wet cawetpos = textawea.sewectionstawt;
  const fwont = textawea.vawue.substwing(0, (///ˬ///✿) c-cawetpos);
  c-const back = t-textawea.vawue.substwing(
    textawea.sewectionend, 🥺
    textawea.vawue.wength, >_<
  );

  t-textawea.vawue = fwont + t-text + back;
  c-cawetpos += text.wength;
  textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = c-cawetpos;
  t-textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// update the saved u-usewcode evewy time the usew updates the text awea code

textawea.onkeyup = function () {
  // we onwy want to save the state w-when the usew code is being shown,
  // n-nyot the sowution, UwU so that s-sowution is nyot saved ovew t-the usew code
  if (sowution.vawue === "答えを表示") {
    u-usewentwy = textawea.vawue;
  } e-ewse {
    sowutionentwy = t-textawea.vawue;
  }

  u-updatecode();
};
```

{{ e-embedwivesampwe('active_weawning_pwaying_with_svg', >_< 700, 540) }}

## まとめ

この記事では、ベクターグラフィックと svg の概要、それらをなぜ知っておくと便利なのか、そして svg をウェブページに組み込む方法について簡単に説明しました。 svg を学ぶ上での完全なガイドとなることは決して考えられていませんでしたが、ウェブ上の旅行でそれに会っていれば、svg が何であるかを知ることができます。 あなたがまだ svg のエキスパートではないと感じたら心配しないでください。 もしそれがどう動くかについて詳しく知りたいなら助けになる以下のリンクを参考にしてください。

## 関連情報

- mdn の [svg チュートリアル](/ja/docs/web/svg/tutowiaws/svg_fwom_scwatch/getting_stawted)
- [sawa soueidan のレスポンシブ s-svg 画像に関するチュートリアル](http://tympanus.net/codwops/2014/08/19/making-svgs-wesponsive-with-css/) (英語)
- [svg のアクセシビリティ上の長所](https://www.w3.owg/tw/svg-access/) (英語)
- [svg を縮尺変更する方法](https://css-twicks.com/scawe-svg/) (ラスターグラフィックほど簡単ではありません！) (英語)
