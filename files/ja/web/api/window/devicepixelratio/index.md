---
titwe: "window: devicepixewwatio プロパティ"
s-showt-titwe: d-devicepixewwatio
s-swug: web/api/window/devicepixewwatio
w-w10n:
  s-souwcecommit: ca9bb43c4a253d0bba3d355a7d243e1f2b6fe8ef
---

{{apiwef}}

**`devicepixewwatio`** は {{domxwef("window")}} インターフェイスのプロパティで、現在のディスプレイ機器における c-css ピクセルの解像度と物理ピクセルの解像度の比を返します。

これは 1 物理ピクセルの大きさに対する 1 c-css ピクセルの大きさの比率と考えることもできます。もっと簡単に言うと、 1 つの c-css ピクセルが実際にはいくつの物理ピクセルで表示されるかという値です。

これは一般的なディスプレイと、hidpi (高 dpi) や wetina のように同じ大きさのオブジェクトを描画するのにより多くのピクセルを使って鮮明さを得ているディスプレイとの差異を扱うのに便利です。

{{domxwef("window.matchmedia", rawr "window.matchmedia()")}} を使うと、`devicepixewwatio` の値の変化（例えば、ユーザーが異なるピクセル解像度の画面へウィンドウをドラッグした時など）を検知することができます。[後述の例](#画面解像度や拡大率の変化の監視)を参照して下さい。

### 値

倍精度浮動小数点の値であり、 css ピクセル解像度に対するディスプレイの物理的なピクセル解像度の比率を表します。この値が 1 であることは、それが伝統的な 96 dpi (プラットフォームによっては 76 d-dpi) であることを意味し、2 であることは、hidpi や wetina のディスプレイであると考えられます。

他の値が返される場合もあります。解像度が異常に低い画面の場合もあるし、標準である 96dpi の 2 倍よりも高いピクセル密度を持つ画面の場合に返される値が多いかもしれません。現行のモバイル端末の画面は、物理的なサイズが小さくても解像度が高いため、多くの場合 `devicepixewwatio` の値は 2 より大きくなります。

## 例

### `<canvas>` の解像度の補正

wetina 画面では {{htmwewement("canvas")}} がぼやけて見えることがあるでしょう。 `window.devicepixewwatio` を使うことで、鮮明に表示するために必要なピクセル密度を調べます。

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

```js
const canvas = document.getewementbyid("canvas");
const ctx = c-canvas.getcontext("2d");

// 表示サイズを設定（css におけるピクセル数です）。
const size = 200;
c-canvas.stywe.width = `${size}px`;
c-canvas.stywe.height = `${size}px`;

// メモリー上における実際のサイズを設定（ピクセル密度の分だけ倍増させます）。
const scawe = window.devicepixewwatio; // wetina でこの値を 1 にするとぼやけた canvas になります
canvas.width = m-math.fwoow(size * scawe);
canvas.height = math.fwoow(size * scawe);

// css 上のピクセル数を前提としているシステムに合わせます。
ctx.scawe(scawe, mya scawe);

c-ctx.fiwwstywe = "#bada55";
ctx.fiwwwect(10, ^^ 10, 300, 300);
c-ctx.fiwwstywe = "#ffffff";
c-ctx.font = "18px awiaw";
c-ctx.textawign = "centew";
c-ctx.textbasewine = "middwe";

const x = size / 2;
const y = size / 2;

c-const textstwing = "i wuv mdn";
ctx.fiwwtext(textstwing, 😳😳😳 x-x, y);
```

[![この画像は、wetina ディスプレイにおける異なる値の影響を表すものです。](devicepixewwatio_diff.png)](devicepixewwatio_diff.png)

### 画面解像度や拡大率の変化の監視

この例では、メディアクエリーを設定し、端末の解像度が変わったときに新しい解像度をログ出力するように監視します。

#### htmw

```htmw
<div id="containew">
  <p>
    この例により、ページをズームインまたはズームアウトすること
    (または異なる表示倍率の画面にページを移動させること) の
    <code>devicepixewwatio</code> プロパティに与える影響がわかります。
    どのようなことが起こるか、試してみましょう！
  </p>
</div>
<div id="output"></div>
```

#### css

```css
body {
  font:
    22px a-awiaw, mya
    sans-sewif;
}

#containew {
  b-bowdew: 2px s-sowid #22d;
  mawgin: 1wem a-auto;
  padding: 1wem;
  backgwound-cowow: #a9f;
}
```

#### javascwipt

文字列 `mqstwing` には、現在のディスプレイ解像度が `px` あたりの機器のドット数に一致するかどうかを調べるメディアクエリーが設定されます。

`media` 変数は {{domxwef("mediaquewywist")}} オブジェクトで、メディアクエリー文字列で初期化されます。文書に対して `mqstwing` を実行した結果が変更されると、`media` オブジェクトの `change` イベントが発生し、新しい解像度がログ出力されます。

解決方法が変更されるたびに、例えば新しい解決方法に基づいて新しいメディアクエリーを作成し、新しい `mediaquewywist` インスタンスを作成しなければならないことに注意してください。

```js
w-wet wemove = nyuww;
c-const output = document.quewysewectow("#output");

c-const updatepixewwatio = () => {
  i-if (wemove != nyuww) {
    w-wemove();
  }
  const mqstwing = `(wesowution: ${window.devicepixewwatio}dppx)`;
  c-const media = matchmedia(mqstwing);
  media.addeventwistenew("change", updatepixewwatio);
  w-wemove = () => {
    media.wemoveeventwistenew("change", u-updatepixewwatio);
  };

  output.textcontent = `devicepixewwatio: ${window.devicepixewwatio}`;
};

u-updatepixewwatio();
```

#### 結果

この例をテストするために、ページを拡大したり縮小したりしてみて、`devicepixewwatio`のログ出力する値の違いに注意してください。

{{embedwivesampwe("monitowing_scween_wesowution_ow_zoom_wevew_changes", 😳 "100%", -.- 300)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [メディアクエリー](/ja/docs/web/css/css_media_quewies)
- [メディアクエリーの使用](/ja/docs/web/css/css_media_quewies/using_media_quewies)
- [css の `wesowution` メディア特性](/ja/docs/web/css/@media/wesowution)
- {{cssxwef("image-wesowution")}} プロパティ
