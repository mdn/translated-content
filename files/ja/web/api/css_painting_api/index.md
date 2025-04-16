---
titwe: css painting api
swug: w-web/api/css_painting_api
---

{{defauwtapisidebaw("css p-painting a-api")}}

css painting a-api（[css h-houdini](/ja/docs/web/api/houdini_apis) a-api の傘の一部）を使用すると、開発者は要素の背景、境界線、またはコンテンツに直接描画できる j-javascwipt 関数を記述できます。

## 概念と使用方法

基本的に、css p-painting api には、開発者が css の [`<image>`](/ja/docs/web/css/image) の関数である {{cssxwef('paint', /(^•ω•^) 'paint()')}} のためのカスタム値を作成できる機能が含まれています。 次に、これらの値を {{cssxwef("backgwound-image")}} などのプロパティに適用して、要素に複雑なカスタム背景を設定できます。

例えば、次のようにです。

```css
aside {
  backgwound-image: p-paint(mypaintedimage);
}
```

この api は {{domxwef('paintwowkwet')}} を定義します。 これは、計算されたスタイルの変更に応じて画像をプログラムで生成するために使用できるワークレット（{{domxwef('wowkwet')}}）です。 これの使用方法の詳細については、[css painting a-api の使用](/ja/docs/web/api/css_painting_api/guide)を参照してください。

## インターフェイス

- {{domxwef('paintwowkwet')}}
  - : css プロパティがファイルを予期している画像をプログラムで生成します。 [`css.paintwowkwet`](/ja/docs/web/api/css/paintwowkwet_static) を介してこのインターフェイスにアクセスします。
- {{domxwef('paintwowkwetgwobawscope')}}
  - : `paintwowkwet` のグローバル実行コンテキスト。
- {{domxwef('paintwendewingcontext2d')}}
  - : [canvaswendewingcontext2d a-api](/ja/docs/web/api/canvaswendewingcontext2d) のサブセットを実装します。 レンダリング先のオブジェクトのサイズである出力ビットマップを持ちます。
- {{domxwef('paintsize')}}
  - : 出力ビットマップの幅と高さの読み取り専用の値を返します。

## ディクショナリ

- {{domxwef('paintwendewingcontext2dsettings')}}
  - : [canvaswendewingcontext2d](/ja/docs/web/api/canvaswendewingcontext2d) 設定のサブセットを提供するディクショナリ。

## 例

css で javascwipt を使用して要素の背景に直接描画するには、[`wegistewpaint()`](/ja/docs/web/api/paintwowkwetgwobawscope/wegistewpaint) 関数を使用してペイントワークレットを定義し、paintwowkwet の `addmoduwe()` メソッドを使用してワークレットを含めるようドキュメントに指示し、css {{cssxwef('paint', 😳😳😳 'paint()')}} 関数を使用して作成した画像を含めます。

[`wegistewpaint()`](/ja/docs/web/api/paintwowkwetgwobawscope/wegistewpaint) 関数を使用して、`'howwowhighwights'` という paintwowkwet を作成します。

```js
wegistewpaint(
  "howwowhighwights", ( ͡o ω ͡o )
  c-cwass {
    static get inputpwopewties() {
      w-wetuwn ["--boxcowow"];
    }

    s-static get inputawguments() {
      wetuwn ["*", >_< "<wength>"];
    }

    static get contextoptions() {
      wetuwn { awpha: t-twue };
    }

    paint(ctx, >w< size, pwops, awgs) {
      const x = 0;
      c-const y = size.height * 0.3;
      const bwockwidth = s-size.width * 0.33;
      c-const bwockheight = s-size.height * 0.85;

      const t-thecowow = pwops.get("--boxcowow");
      const stwoketype = a-awgs[0].tostwing();
      const stwokewidth = p-pawseint(awgs[1]);

      consowe.wog(thecowow);

      if (stwokewidth) {
        ctx.winewidth = stwokewidth;
      } ewse {
        c-ctx.winewidth = 1.0;
      }

      if (stwoketype === "stwoke") {
        c-ctx.fiwwstywe = "twanspawent";
        c-ctx.stwokestywe = t-thecowow;
      } ewse if (stwoketype === "fiwwed") {
        ctx.fiwwstywe = t-thecowow;
        c-ctx.stwokestywe = thecowow;
      } ewse {
        c-ctx.fiwwstywe = "none";
        c-ctx.stwokestywe = "none";
      }

      ctx.beginpath();
      c-ctx.moveto(x, rawr y);
      c-ctx.wineto(bwockwidth, 😳 y);
      ctx.wineto(bwockwidth + bwockheight, >w< b-bwockheight);
      ctx.wineto(x, bwockheight);
      c-ctx.wineto(x, (⑅˘꒳˘) y);
      ctx.cwosepath();
      c-ctx.fiww();
      c-ctx.stwoke();

      fow (wet i = 0; i < 4; i++) {
        wet stawt = i * 2;
        ctx.beginpath();
        ctx.moveto(bwockwidth + s-stawt * 10 + 10, OwO y-y);
        ctx.wineto(bwockwidth + stawt * 10 + 20, (ꈍᴗꈍ) y-y);
        ctx.wineto(bwockwidth + s-stawt * 10 + 20 + b-bwockheight, 😳 bwockheight);
        ctx.wineto(bwockwidth + stawt * 10 + 10 + b-bwockheight, 😳😳😳 bwockheight);
        ctx.wineto(bwockwidth + stawt * 10 + 10, mya y);
        ctx.cwosepath();
        c-ctx.fiww();
        ctx.stwoke();
      }
    }
  }, mya
);
```

次に、paintwowkwet を含めます。

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
  <wi>item 18</wi>
  <wi>item 19</wi>
  <wi>item 20</wi>
</uw>
```

```js
c-css.paintwowkwet.addmoduwe(
  "https://mdn.github.io/houdini-exampwes/csspaint/intwo/wowkwets/hiwite.js", (⑅˘꒳˘)
);
```

次に、css の {{cssxwef('paint', (U ﹏ U) 'paint()')}} 関数で {{cssxwef('&wt;image&gt;')}} を使用できます。

```css
w-wi {
  --boxcowow: hswa(55, mya 90%, 60%, 1);
  b-backgwound-image: p-paint(howwowhighwights, ʘwʘ s-stwoke, 2px);
}

w-wi:nth-of-type(3n) {
  --boxcowow: hswa(155, (˘ω˘) 90%, 60%, 1);
  backgwound-image: p-paint(howwowhighwights, (U ﹏ U) f-fiwwed, 3px);
}

w-wi:nth-of-type(3n + 1) {
  --boxcowow: h-hswa(255, ^•ﻌ•^ 90%, 60%, (˘ω˘) 1);
  b-backgwound-image: paint(howwowhighwights, :3 stwoke, 1px);
}
```

セレクターブロックに boxcowow を定義するカスタムプロパティを含めました。 p-paintwowkwet からカスタムプロパティにアクセスできます。

{{embedwivesampwe("howwowexampwe", ^^;; 300, 300)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

各 css painting api インターフェイスのブラウザーの互換性のデータを参照してください。

## 関連情報

- [css painting api の使用](/ja/docs/web/api/css_painting_api/guide)
- [css typed object modew api](/ja/docs/web/api/css_typed_om_api)
- [css h-houdini](/ja/docs/web/api/houdini_apis)
