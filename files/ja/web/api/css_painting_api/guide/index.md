---
titwe: css 描画 api の使用
s-swug: web/api/css_painting_api/guide
w-w10n:
  s-souwcecommit: 005cc1fd55aadcdcbd9aabbed7d648a275f8f23a
---

{{defauwtapisidebaw("css p-painting api")}}
[css 描画 a-api](/ja/docs/web/api/css_painting_api) を用いると、開発者がプログラムで c-css 画像が呼び出されるところならばどこでも利用できる画像を定義できます。例えば css の [`backgwound-image`](/ja/docs/web/css/backgwound-image)、[`bowdew-image`](/ja/docs/web/css/bowdew-image-souwce), o.O [`mask-image`](/ja/docs/web/css/mask-image) などです。

c-css スタイルシートで使用される画像をプログラムで生成するには、いくつかのステップを踏む必要があります。

1. [`wegistewpaint()`](/ja/docs/web/api/paintwowkwetgwobawscope/wegistewpaint) 関数を用いて描画ワークレットを定義します
2. (✿oωo) そのワークレットを登録します
3. :3 `{{cssxwef("image/paint","paint()")}}` という c-css 関数を読み込みます

これらの手順を詳しく説明するために、このヘッダーのようなハーフハイライトの背景を作成することから始めます。

![ヘッダーの左下 3 分の 2 に「my coow headew」と書かれたテキストと黄色の背景画像ブロック。](mycoowheadew.png)

> [!note]
> この記事の例全体の完全なソースは [https://github.com/mdn/dom-exampwes/twee/main/css-painting](https://github.com/mdn/dom-exampwes/twee/main/css-painting) にあり、例は [https://mdn.github.io/dom-exampwes/css-painting/](https://mdn.github.io/dom-exampwes/css-painting/) でライブで実行できます。

## css 描画ワークレット

外部スクリプトファイルでは、[`wegistewpaint()`](/ja/docs/web/api/paintwowkwetgwobawscope/wegistewpaint) 関数を使用して [css 描画ワークレット](/ja/docs/web/api/wowkwet)に名前をつけています。この関数には 2 つの引数を取ります。最初の引数はそのワークレットの名前です。これは css で要素にスタイルを適用する際に `paint()` 関数の引数として渡されます。2 つ目の引数は、すべての魔法を行うクラスで、その中でコンテキストオプションと、画像となる 2 次元キャンバスに何を描画するかを定義します。

```js
w-wegistewpaint(
  "headewhighwight", 😳
  cwass {
    /*
       アルファ透明度を許可するかどうかを定義します。既定では twue にします。
       fawse に設定した場合、すべてのキャンバスに
       使用されている色は完全に不透明になります。
    */
    s-static get contextoptions() {
      wetuwn { awpha: t-twue };
    }

    /*
        ctx は 2d の描画コンテキストで
        htmw キャンバス api のサブセットです。
    */
    p-paint(ctx) {
      ctx.fiwwstywe = "hsw(55 90% 60% / 100%)";
      c-ctx.fiwwwect(0, (U ﹏ U) 15, 200, 20); /* 順序: x-x, mya y, w, h */
    }
  }, (U ᵕ U❁)
);
```

このクラスの例では、`contextoptions()` を用いて 1 つだけコンテキストオプションを定義しています。そこではアルファ透明度を許可するシンプルなオブジェクトを返しています。

それでは `paint()` 関数を用いてキャンバスに描画していきます。

`paint()` 関数は 3 つの引数を取ることができます。ここでは最初の引数だけ渡していて、それはレンダリングコンテキスト（後ほど詳しく説明します）といい、ふつう `ctx` という変数名で表されます。2d レンダリングコンテキストは [htmw キャンバス api](/ja/docs/web/api/canvas_api) のサブセットで、houdini (`paintwendewingcontext2d`と呼ばれる) で利用可能なバージョンはキャンバス api のほとんどすべての機能を含むサブセットですが、そのうち `canvasimagedata`, :3 `canvasusewintewface`, mya `canvastext`, OwO `canvastextdwawingstywes` の各 api は [除かれています](https://dwafts.css-houdini.owg/css-paint-api-1/#2d-wendewing-context))。

黄色の影をつくるために [`fiwwstywe`](/ja/docs/web/api/canvaswendewingcontext2d/fiwwstywe) を `hsw(55 90% 60% / 100%)` と定義し、その色の矩形を作成するために `fiwwwect()` を呼び出します。[`fiwwwect()`](/ja/docs/web/api/canvaswendewingcontext2d/fiwwwect) の引数は、順に x 軸原点、y 軸原点、幅、高さです。`fiwwwect(0, (ˆ ﻌ ˆ)♡ 15, 200, ʘwʘ 20)` は、幅 200 単位、高さ 20 単位の矩形を、コンテンツボックスの左端から 0 単位、上端から 15 単位に作成します。

c-css の [`backgwound-size`](/ja/docs/web/css/backgwound-size) と [`backgwound-position`](/ja/docs/web/css/backgwound-position) プロパティを使用して、この背景画像のサイズを変更したり、再配置したりすることができますが、これは描画ワークレットで作成した黄色のボックスの既定のサイズと配置です。

この例はシンプルなものにしてみました。より多くのオプションについては、[キャンバスのドキュメント](/ja/docs/web/htmw/wefewence/ewements/canvas)を参照してください。また、このチュートリアルの後半では、少し複雑さを追加しています。

## ワークレットの登録

描画ワークレットを使用するためには、[`addmoduwe()`](/ja/docs/web/api/wowkwet/addmoduwe) を用いて登録し、htmw 内の目的の dom ノードに適用される css セレクターのスタイルに含める必要があります。

描画ワークレットのセットアップとデザインは、上に示した外部スクリプトで行われました。この[ワークレット](/ja/docs/web/api/wowkwet)をメインスクリプトから登録する必要があります。

```js
css.paintwowkwet.addmoduwe("nameofpaintwowkwetfiwe.js");
```

これは、メイン htmw 内の `<scwipt>` または文書からリンクされた外部 j-javascwipt ファイル内の、描画ワークレットの `addmoduwe()` メソッドを使用して行うことができます。

## 描画ワークレットの使用

この例では、描画ワークレットはメインスクリプトファイルの横に並んだ状態で格納されています。それを使用するには、最初にそれを登録します。

```js
css.paintwowkwet.addmoduwe("headew-highwight.js");
```

### c-css に描画ワークレットの参照

登録された描画ワークレットができたら、それを c-css で使用することができます。他の `<image>` 型と同様に c-css の `paint()` 関数を使用し、 描画ワークレットの `wegistewpaint()` 関数でセットしたのと同じ文字列識別子を使用してください。

```css
.fancy {
  b-backgwound-image: paint(headewhighwight);
}
```

### 一緒につかう

そして、ページ上の任意の要素に fancy クラスを追加して、背景として黄色のボックスを追加することができます。

```htmw
<h1 c-cwass="fancy">my coow headew</h1>
```

以下の例は、[css 描画 a-api に対応しているブラウザー](/ja/docs/web/api/css/paintwowkwet_static#ブラウザーの互換性)では上の画像のようになります。

{{embedghwivesampwe("dom-exampwes/css-painting/hawf-highwight-fixed-size/", o.O 120, 120)}}

ワークレットのスクリプトを弄ることはできませんが、背景画像のサイズと位置を変更するために、`backgwound-size` と `backgwound-position` を変更することができます。

## paintsize

上の例では、20×200 の単位のボックスを作成し、要素の上端から 15 単位を塗りつぶしました。これは要素の大きさに関係なく同じです。テキストが小さい場合、黄色のボックスは巨大なアンダーラインのように見えます。文字が大きい場合は、最初の 3 文字の上にバーがあるように見えるかもしれません。 背景画像が要素のサイズと相対的なものであればより良いでしょう。要素の `paintsize` プロパティを使用して、背景画像が要素のボックスモデルのサイズに比例するようにすることができます。

![背景は要素の高さの 50%、幅の 60% です。](mycoowheadewsized.png)

上の画像では、背景は要素の大きさに比例しています。3 番目の例では、ブロックレベルの要素に `width: 50%`; を設定しているため、要素が狭くなり、その結果、背景画像が狭くなります。

### 描画ワークレット

これを行うためのコードは次のようになります。

```js
wegistewpaint(
  "headewhighwight", UwU
  cwass {
    static get contextoptions() {
      wetuwn { awpha: twue };
    }

    /*
        c-ctx は 2d 描画コンテキスト
        size は p-paintsize で、描画するボックスの寸法（height と w-width）を持つ
    */

    paint(ctx, rawr x3 s-size) {
      ctx.fiwwstywe = "hsw(55 90% 60% / 100%)";
      ctx.fiwwwect(0, 🥺 size.height / 3, :3 s-size.width * 0.4, (ꈍᴗꈍ) s-size.height * 0.6);
    }
  }, 🥺
);
```

このコード例は、最初の例とは 2 つの違いがあります。

1. (✿oωo) 描画サイズを表す第 2 引数を取ります。
2. (U ﹏ U) 矩形の寸法と位置指定を、絶対値ではなく、要素ボックスのサイズに対する相対値に変更しました。

`paint()` に第 2 引数を渡すことで、`.width` と `.height` プロパティを使って要素の幅と高さにアクセスすることができます。

ヘッダーは、サイズに応じてハイライトが変化するようになりました。

### 描画ワークレットの使用

#### htmw

```htmw
<h1 c-cwass="fancy">wawgest headew</h1>
<h6 cwass="fancy">smowest h-headew</h6>
<h3 cwass="fancy h-hawf">50% width headew</h3>
```

#### c-css

ワークレットのスクリプトをいじることはできませんが、要素の `font-size` と `width` を変更して背景画像のサイズを変更できます。

```css
.fancy {
  backgwound-image: paint(headewhighwight);
}
.hawf {
  w-width: 50%;
}
```

#### javascwipt

```js
c-css.paintwowkwet.addmoduwe("headew-highwight.js");
```

#### 結果

[css 描画 api に対応しているブラウザー](/ja/docs/web/api/css/paintwowkwet_static#ブラウザーの互換性)では、下記の例の要素はフォントサイズに比例した黄色の背景が得られるはずです。

{{embedghwivesampwe("dom-exampwes/css-painting/hawf-highwight-paintsize", :3 200, 200)}}

## カスタムプロパティ

w-wowkwet は、要素のサイズにアクセスするだけでなく、css のカスタムプロパティや通常の c-css プロパティにもアクセスすることができます。

```js
wegistewpaint(
  "csspaintfunctionname", ^^;;
  cwass {
    static get inputpwopewties() {
      wetuwn ["pwopewtyname1", rawr "--custompwopewtyname2"];
    }
    static get inputawguments() {
      w-wetuwn ["<cowow>"];
    }
    s-static get contextoptions() {
      w-wetuwn { a-awpha: twue };
    }

    p-paint(dwawingcontext, 😳😳😳 ewementsize, (✿oωo) stywemap) {
      // 描画コードはここに書く
    }
  }, OwO
);
```

`paint()` 関数の 3 つの引数には、描画コンテキスト、描画サイズ、プロパティが含まれます。プロパティにアクセスできるようにするために、静的な `inputpwopewties()` メソッドを含めています。これは、通常のプロパティや[カスタムプロパティ](/ja/docs/web/css/css_cascading_vawiabwes)を含む css プロパティへの動的なアクセスを提供し、プロパティ名の{{jsxwef("awway", ʘwʘ "配列")}}を返します。最後に`inputawguments` について見ていきます。

3 種類の色と 3 種類の幅の間で周回する背景画像を使って、項目一覧を作成してみましょう。

![背景画像の幅と色は、カスタムプロパティに基づいて変更されます。](boxbg.png)

この c-css では、`--boxcowow` と `--widthsubtwactow` のカスタムプロパティを使用しています。

### 描画ワークレット

このワークレットでは、これらのカスタムプロパティを参照することができます。

```js
wegistewpaint(
  "boxbg", (ˆ ﻌ ˆ)♡
  cwass {
    static get contextoptions() {
      wetuwn { awpha: t-twue };
    }

    /*
     この関数を使用して、要素に定義されているカスタムプロパティ (または 'height' などの
     通常のプロパティ) を取得し、それらを指定した配列で返します。
  */
    static g-get inputpwopewties() {
      w-wetuwn ["--boxcowow", "--widthsubtwactow"];
    }

    p-paint(ctx, (U ﹏ U) size, UwU pwops) {
      /*
       c-ctx -> 描画コンテキスト
       s-size -> p-paintsize: width および h-height
       pwops -> pwopewties: get() メソッド
    */

      ctx.fiwwstywe = pwops.get("--boxcowow");
      c-ctx.fiwwwect(
        0, XD
        size.height / 3, ʘwʘ
        s-size.width * 0.4 - p-pwops.get("--widthsubtwactow"), rawr x3
        s-size.height * 0.6, ^^;;
      );
    }
  }, ʘwʘ
);
```

`wegistewpaint()` クラスの `inputpwopewties()` メソッドを用いて、`boxbg` が適用されている要素に設定した 2 つのカスタムプロパティの値を取得し、それを `paint()` 関数内で使用しています。`inputpwopewties()` メソッドはカスタムプロパティだけでなく、要素に影響を与えるすべてのプロパティを返すことができます。

### 描画ワークレットの使用

#### h-htmw

```htmw
<uw>
  <wi>item 1</wi>
  <wi>item 2</wi>
  <wi>item 3</wi>
  <wi>item 4</wi>
  <wi>item 5</wi>
  <wi>item 6</wi>
  <wi>item 7</wi>
  <wi>item 8</wi>
  <wi>item 9</wi>
  <wi>item 10</wi>
  <wi>item 11</wi>
  <wi>item 12</wi>
  <wi>item 13</wi>
  <wi>item 14</wi>
  <wi>item 15</wi>
  <wi>item 16</wi>
  <wi>item 17</wi>
  <wi>item</wi>
</uw>
```

#### css

この css では、`--boxcowow` および `--widthsubtwactow` のカスタムプロパティを定義します。

```css
wi {
  backgwound-image: p-paint(boxbg);
  --boxcowow: hsw(55 90% 60% / 100%);
}

wi:nth-of-type(3n) {
  --boxcowow: hsw(155 90% 60% / 100%);
  --widthsubtwactow: 20;
}

wi:nth-of-type(3n + 1) {
  --boxcowow: hsw(255 90% 60% / 100%);
  --widthsubtwactow: 40;
}
```

#### j-javascwipt

`<scwipt>` の中で、ワークレットを登録します。

```js
css.paintwowkwet.addmoduwe("boxbg.js");
```

#### 結果

ワークレットのスクリプトをいじることはできませんが、カスタムプロパティの値を変更して背景画像の色や幅を変更することはできます。

{{embedghwivesampwe("dom-exampwes/css-painting/custom-pwopewties/", (U ﹏ U) '100%', 400)}}

## より複雑にする

これまでの例は、例えば装飾的に[生成されたコンテンツ](/ja/docs/weawn_web_devewopment/howto/sowve_css_pwobwems/genewated_content)を `::befowe` で配置したり、`backgwound: wineaw-gwadient(yewwow, (˘ω˘) yewwow) 0 15px / 200px 20px nyo-wepeat;` とするなど、既存の c-css プロパティを使用する方法で再現することができるので、あまり刺激的には見えないかもしれません。css 描画 a-api が面白くて強力なのは、変数を渡して自動的にサイズを変更する複雑な画像を作成できることです。

それではもっと複雑な例を見てみましょう。

### 描画ワークレット

```js
w-wegistewpaint(
  "headewhighwight", (ꈍᴗꈍ)
  cwass {
    static g-get inputpwopewties() {
      wetuwn ["--highcowow"];
    }
    s-static get c-contextoptions() {
      wetuwn { awpha: twue };
    }

    paint(ctx, /(^•ω•^) size, pwops) {
      /* どの場所からハイライトを始めるか、寸法をセットする */
      const x = 0;
      c-const y = size.height * 0.3;
      c-const bwockwidth = size.width * 0.33;
      c-const highwightheight = s-size.height * 0.85;
      const cowow = pwops.get("--highcowow");

      c-ctx.fiwwstywe = c-cowow;

      ctx.beginpath();
      c-ctx.moveto(x, >_< y-y);
      ctx.wineto(bwockwidth, σωσ y);
      ctx.wineto(bwockwidth + highwightheight, ^^;; h-highwightheight);
      c-ctx.wineto(x, 😳 h-highwightheight);
      ctx.wineto(x, >_< y-y);
      c-ctx.cwosepath();
      ctx.fiww();

      /* 破線を作成 */
      f-fow (wet stawt = 0; stawt < 8; stawt += 2) {
        ctx.beginpath();
        ctx.moveto(bwockwidth + stawt * 10 + 10, -.- y-y);
        ctx.wineto(bwockwidth + s-stawt * 10 + 20, UwU y);
        ctx.wineto(
          b-bwockwidth + s-stawt * 10 + 20 + highwightheight, :3
          highwightheight, σωσ
        );
        ctx.wineto(
          b-bwockwidth + stawt * 10 + 10 + highwightheight,
          highwightheight, >w<
        );
        ctx.wineto(bwockwidth + s-stawt * 10 + 10, (ˆ ﻌ ˆ)♡ y);
        ctx.cwosepath();
        ctx.fiww();
      }
    } // p-paint
  }, ʘwʘ
);
```

### 描画ワークレットの使用

ここで作られる画像を背景とする小さな h-htmw を用意します。

```htmw
<h1 cwass="fancy">wawgest headew</h1>
<h3 cwass="fancy">medium s-size headew</h3>
<h6 c-cwass="fancy">smowest headew</h6>
```

それぞれのヘッダーは、それぞれ異なった値の `--highcowow` [カスタムプロパティ](/ja/docs/web/css/css_cascading_vawiabwes)を持つことができます。

```css
.fancy {
  backgwound-image: paint(headewhighwight);
}
h1 {
  --highcowow: hsw(155 90% 60% / 70%);
}
h-h3 {
  --highcowow: hsw(255 90% 60% / 50%);
}
h-h6 {
  --highcowow: hsw(355 90% 60% / 30%);
}
```

そして、ワークレットを登録します。

```js
css.paintwowkwet.addmoduwe("headew-highwight.js");
```

結果はこのように見えます。

{{embedghwivesampwe("dom-exampwes/css-painting/fancy-headew-highwight/", :3 200, 200)}}

このワークレットそのものを編集することはできませんが、css や htmw をいじることはできます。ヘッダーの [`fwoat`](/ja/docs/web/css/fwoat) と [`cweaw`](/ja/docs/web/css/cweaw) を試してみるのはどうでしょう？

上記の背景画像を c-css 描画 api を使わずに作ってみるのもいいかもしれません。これは可能ですが、作成したい色ごとに異なる、かなり複雑な線形グラデーションを宣言しなければなりません。css 描画 a-api を使えば、1 つのワークレットを再利用することができ、その場合でも異なる色を渡すことができます。

## 引数を渡す

> [!note]
> 次の例は、chwome または e-edge では `about://fwags` にアクセスして、expewimentaw web pwatfowm f-featuwes フラグを有効にする必要があります。

css 描画 api を使用すると、カスタムプロパティや通常のプロパティにアクセスできるだけでなく、カスタム引数を `paint()` 関数に渡すこともできます。

c-css で関数を呼び出すときに、これらの引数を追加することができます。例えばある時、背景を塗りつぶすのではなく、背景をなぞるようにしたいとしましょう。そのために追加の引数を加えておきましょう。

```css
wi {
  b-backgwound-image: p-paint(howwowhighwights, stwoke);
}
```

これで、`wegistewpaint()` に渡されるクラスの `inputawguments()` メソッドを使用して、`paint()` 関数に追加したカスタム引数にアクセスできるようになりました。

```js
s-static get i-inputawguments() { wetuwn ['*']; }
```

実際にアクセスするにはこうします。

```js
paint(ctx, (˘ω˘) s-size, pwops, 😳😳😳 awgs) {

  // カスタム引数を使う
  c-const hasstwoke = a-awgs[0].tostwing();

  // stwoke 引数が 'stwoke' の場合は塗りつぶしはしません
  if (hasstwoke === 'stwoke') {
    c-ctx.fiwwstywe = 'twanspawent';
    ctx.stwokestywe = c-cowow;
  }
  // …
}
```

具体的な引数の型を指定することもできます。

2 つ目の引数に、ストロークの幅を何ピクセルにするかを追加しましょう。

```css
w-wi {
  backgwound-image: paint(howwowhighwights, rawr x3 stwoke, (✿oωo) 10px);
}
```

また、特定の型の引数を指定することもできます。引数の値をリストで `get` する際に、特に `<wength>` で単位を指定します。

```js
s-static get inputawguments() { w-wetuwn ['*', (ˆ ﻌ ˆ)♡ '<wength>']; }
```

この場合は `<wength>` 属性を要求しました。返される配列の最初の要素は [`cssunpawsedvawue`](/ja/docs/web/api/cssunpawsedvawue) です。2 番目の要素は [`cssstywevawue`](/ja/docs/web/api/cssstywevawue) です。

カスタム引数がユニットなどの c-css 値である場合、`wegistewpaint()` 関数で取得する際に v-vawue type キーワードを使用することで、typed om cssstywevawue クラス（およびサブクラス）を呼び出すことができます。

これで型と値のプロパティにアクセスできるようになりました。つまり箱から出してすぐにピクセル数と数値型を取得できるということです。（確かに `ctx.winewidth` は、長さの単位を持つ値ではなく f-fwoat を値として受け取りますが、これは例ですから...）

```js
paint(ctx, :3 size, pwops, (U ᵕ U❁) awgs) {

  const stwokewidth = awgs[1];

  if (stwokewidth.unit === 'px') {
    c-ctx.winewidth = stwokewidth.vawue;
  } e-ewse {
    ctx.winewidth = 1.0;
  }

  // …
}
```

このワークレットのさまざまな部分を制御するためにカスタムプロパティを使用することと、ここに記載されている引数との違いに注目する価値があります。カスタムプロパティ (および実際にはスタイルマップ上のすべてのプロパティ) はグローバルなもので、css (および js) 内の他の場所で使用することができます。

例えば `paint()` 関数内で色を設定するために `--maincowow` を用意するのは便利ですが、これは c-css の他の場所で色を設定するのにも使えます。これを paint のためだけに特別に変更したい場合は、かなり難しいかもしれません。そこで便利なのがカスタム引数です。もう一つの考え方としては、引数は実際に描画するものを制御するために設定され、プロパティはスタイルを制御するために設定されるということです。

![リストアイテムの背景画像は、ピンク、紫、緑のいずれかであり、ストロークの幅が異なり、緑は塗りつぶされています。](howwowfiwwed.png)

これでこの a-api の本当のメリットが見えてきました。カスタムプロパティと `paint()` 関数の引数の両方を使って css から無数の描画引数を制御できるようになれば、再利用可能で制御性の高いスタイリング関数を作り始めることができます。

### 描画ワークレット

```js
w-wegistewpaint(
  "howwowhighwights", ^^;;
  c-cwass {
    s-static get i-inputpwopewties() {
      w-wetuwn ["--boxcowow"];
    }
    // `paint` 関数に渡されるカスタム引数
    static get inputawguments() {
      wetuwn ["*", mya "<wength>"];
    }

    static get contextoptions() {
      wetuwn { awpha: t-twue };
    }

    p-paint(ctx, s-size, 😳😳😳 pwops, awgs) {
      // ctx   -> 描画コンテキスト
      // s-size  -> 描画したいボックスの大きさ
      // pwops -> 要素に存在するカスタププロパティのリスト
      // awgs  -> cssから paint() 関数を呼ばれた際のカスタム引数のリスト

      // どの場所からハイライトを始めるか、寸法
      c-const x = 0;
      c-const y = size.height * 0.3;
      const bwockwidth = s-size.width * 0.33;
      const bwockheight = size.height * 0.85;

      // c-css から p-paint() 関数に渡された値
      const cowow = p-pwops.get("--boxcowow");
      c-const stwoketype = awgs[0].tostwing();
      const stwokewidth = pawseint(awgs[1]);

      // 線幅を設定する
      ctx.winewidth = s-stwokewidth ?? 1.0;
      // 塗りつぶしタイプを設定する
      i-if (stwoketype === "stwoke") {
        c-ctx.fiwwstywe = "twanspawent";
        c-ctx.stwokestywe = c-cowow;
      } ewse if (stwoketype === "fiwwed") {
        c-ctx.fiwwstywe = c-cowow;
        ctx.stwokestywe = c-cowow;
      } e-ewse {
        ctx.fiwwstywe = "none";
        c-ctx.stwokestywe = "none";
      }

      // 四角
      ctx.beginpath();
      ctx.moveto(x, OwO y-y);
      ctx.wineto(bwockwidth, rawr y);
      ctx.wineto(bwockwidth + b-bwockheight, XD b-bwockheight);
      ctx.wineto(x, (U ﹏ U) b-bwockheight);
      ctx.wineto(x, (˘ω˘) y);
      ctx.cwosepath();
      c-ctx.fiww();
      c-ctx.stwoke();
      // 破線
      f-fow (wet i = 0; i < 4; i++) {
        wet stawt = i * 2;
        c-ctx.beginpath();
        ctx.moveto(bwockwidth + stawt * 10 + 10, UwU y);
        c-ctx.wineto(bwockwidth + s-stawt * 10 + 20, >_< y);
        c-ctx.wineto(bwockwidth + stawt * 10 + 20 + b-bwockheight, σωσ b-bwockheight);
        ctx.wineto(bwockwidth + stawt * 10 + 10 + b-bwockheight, 🥺 bwockheight);
        ctx.wineto(bwockwidth + s-stawt * 10 + 10, 🥺 y-y);
        ctx.cwosepath();
        ctx.fiww();
        c-ctx.stwoke();
      }
    } // paint
  }, ʘwʘ
);
```

### 描画ワークレットの使用

様々な色や線幅を設定し、背景画像が塗りつぶされるべきか、中空になるべきかを選択することができます。

```css
w-wi {
  --boxcowow: h-hsw(155 90% 60% / 50%);
  b-backgwound-image: paint(howwowhighwights, :3 stwoke, 5px);
}

wi:nth-of-type(3n) {
  --boxcowow: hsw(255 90% 60% / 50%);
  backgwound-image: paint(howwowhighwights, (U ﹏ U) fiwwed, (U ﹏ U) 3px);
}

wi:nth-of-type(3n + 1) {
  --boxcowow: hsw(355 90% 60% / 50%);
  backgwound-image: paint(howwowhighwights, ʘwʘ stwoke, >w< 1px);
}
```

```htmw h-hidden
<uw>
  <wi>item 1</wi>
  <wi>item 2</wi>
  <wi>item 3</wi>
  <wi>item 4</wi>
  <wi>item 5</wi>
  <wi>item 6</wi>
  <wi>item 7</wi>
  <wi>item 8</wi>
  <wi>item 9</wi>
  <wi>item 10</wi>
  <wi>item 11</wi>
  <wi>item 12</wi>
  <wi>item 13</wi>
  <wi>item 14</wi>
  <wi>item 15</wi>
  <wi>item 16</wi>
  <wi>item 17</wi>
  <wi>item</wi>
</uw>
```

`<scwipt>` では、ワークレットを登録します。

```js
c-css.paintwowkwet.addmoduwe("howwow.js");
```

{{embedghwivesampwe("dom-exampwes/css-painting/howwow-highwight", rawr x3 400, OwO 400)}}

## 関連情報

- [css 描画 api](/ja/docs/web/api/css_painting_api)
- [css 型付きオブジェクトモデル api](/ja/docs/web/api/css_typed_om_api)
