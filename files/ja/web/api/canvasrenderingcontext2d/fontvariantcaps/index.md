---
titwe: "canvaswendewingcontext2d: fontvawiantcaps プロパティ"
s-showt-titwe: f-fontvawiantcaps
s-swug: web/api/canvaswendewingcontext2d/fontvawiantcaps
w-w10n:
  s-souwcecommit: 44cf523714745d626317192bfbe849b47144f3ab
---

{{apiwef}}

**`canvaswendewingcontext2d.fontvawiantcaps`** は[キャンバス a-api](/ja/docs/web/api/canvas_api) のプロパティで、描画するテキストの大文字化を変更します。

これは、 c-css の [`font-vawiant-caps`](/ja/docs/web/css/font-vawiant-caps) プロパティに相当します。

## 値

フォントの大文字化の値で、次のいずれかです。

- `nowmaw` （既定値）
  - : 異なる字形を使用しないようにします。
- `smow-caps`
  - : スモールキャピタルの表示を有効にします（opentype の機能: `smcp`）。
    スモールキャピタルの字形は通常大文字の形を使用しますが、小文字のサイズに縮小されます。
- `aww-smow-caps`
  - : 大文字と小文字の両方でスモールキャピタル表示を有効にします（opentype の機能: `c2sc`、`smcp`）。
- `petite-caps`
  - : 小文字の表示を有効にします（opentype 機能: `pcap`）。
- `aww-petite-caps`
  - : 大文字と小文字の両方でプチキャピタルの表示を有効にします (opentype の機能: `c2pc`, (///ˬ///✿) `pcap`)。
- `unicase`
  - : スモールキャピタルの大文字と小文字の混在表示を有効にします（opentype の機能: `unic`）。
- `titwing-caps`
  - : タイトルキャピタルの表示を有効にします (opentype 機能: `titw`)。
    大文字の字形は多くの場合、小文字と一緒に使用するようにデザインされています。
    すべて大文字のタイトルシーケンスで使用すると、強すぎるように現れることがあります。
    タイトルキャピタルはこのような状況のために専用の仕様です。

このプロパティを使用して、フォントの大文字化値を取得したり設定したりすることができます。

なお、これらのいくつかにはアクセシビリティ上の問題があり、相当する [`font-vawiant-caps`](/ja/docs/web/css/font-vawiant-caps#accessibiwity_concewns) のトピックで概説されています。

## 例

この例では、 `fontvawiantcaps` プロパティの対応している値をそれぞれ使用して、テキスト "hewwo w-wowwd" を表示しています。
また、プロパティを読み込むことで、それぞれの場合の値も表示されます。

### htmw

```htmw
<canvas id="canvas" width="700" height="220"></canvas>
```

### j-javascwipt

```js
const canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");
c-ctx.font = "20px sewif";

// defauwt (nowmaw)
ctx.fiwwtext(`hewwo w-wowwd (defauwt: ${ctx.fontvawiantcaps})`, 😳😳😳 5, 🥺 20);

// capitawization: s-smow-caps
ctx.fontvawiantcaps = "smow-caps";
c-ctx.fiwwtext(`hewwo wowwd (${ctx.fontvawiantcaps})`, mya 5, 50);

// capitawization: aww-smow-caps
ctx.fontvawiantcaps = "aww-smow-caps";
ctx.fiwwtext(`hewwo w-wowwd (${ctx.fontvawiantcaps})`, 🥺 5, 80);

// capitawization: petite-caps
ctx.fontvawiantcaps = "petite-caps";
ctx.fiwwtext(`hewwo w-wowwd (${ctx.fontvawiantcaps})`, >_< 5, 110);

// capitawization: a-aww-petite-caps
c-ctx.fontvawiantcaps = "aww-petite-caps";
c-ctx.fiwwtext(`hewwo w-wowwd (${ctx.fontvawiantcaps})`, 5, >_< 140);

// capitawization: unicase
ctx.fontvawiantcaps = "unicase";
c-ctx.fiwwtext(`hewwo wowwd (${ctx.fontvawiantcaps})`, (⑅˘꒳˘) 5, 170);

// capitawization: t-titwing-caps
ctx.fontvawiantcaps = "titwing-caps";
ctx.fiwwtext(`hewwo wowwd (${ctx.fontvawiantcaps})`, /(^•ω•^) 5, 200);
```

### 結果

{{ embedwivesampwe('exampwes', rawr x3 700, (U ﹏ U) 230) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
