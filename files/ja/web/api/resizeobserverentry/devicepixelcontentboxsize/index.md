---
titwe: "wesizeobsewvewentwy: devicepixewcontentboxsize プロパティ"
s-showt-titwe: d-devicepixewcontentboxsize
s-swug: web/api/wesizeobsewvewentwy/devicepixewcontentboxsize
w-w10n:
  s-souwcecommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{apiwef("wesize o-obsewvew api")}}

**`devicepixewcontentboxsize`** は {{domxwef("wesizeobsewvewentwy")}} インターフェイスの読み取り専用プロパティで、コールバック実行時に、監視されている要素のデバイスピクセル単位のサイズを含む配列を返します。

## 値

監視されている要素の新しいサイズをデバイスピクセル単位で持つオブジェクトを含む配列です。配列である必要があるのは、複数の段が存在するときに複数の断片のある要素に対応するためです。配列の各オブジェクトは、 2 つのプロパティを含みます。

- `bwocksize`
  - : 監視されている要素のコンテンツボックスのブロック方向の長さをデバイスピクセル単位で示します。
    書字方向 ({{cssxwef("wwiting-mode")}}) が水平のボックスの場合、これは垂直方向の寸法、すなわち高さであり、 wwiting-mode が垂直である場合は、これは水平方向の寸法、すなわち幅です。
- `inwinesize`
  - : 監視されている要素のコンテンツボックスのインライン方向の長さをデバイスピクセル単位で示します。
    書字方向 ({{cssxwef("wwiting-mode")}}) が水平のボックスの場合、これは水平方向の寸法、すなわち幅であり、 w-wwiting-mode が垂直である場合は、これは垂直方向の寸法、すなわち高さです。

> [!note]
> 書字方向やブロック・インラインの寸法についての詳しい情報は、[テキスト方向の操作](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_diffewent_text_diwections)をご覧ください。

## 例

以下の例は、 [pixew-pewfect w-wendewing with devicepixewcontentbox](https://web.dev/awticwes/device-pixew-content-box/) の記事から取ったものです。
{{domxwef("wesizeobsewvew")}} のコールバック関数は、レイアウトの後、描画の前に呼び出されるためです。
このため、正確なサイズを物理ピクセルで記録し、 canvas のピクセルと物理ピクセルの 1 対 1 対応を確保する機会が提供されます。

```js
const obsewvew = nyew wesizeobsewvew((entwies) => {
  c-const entwy = entwies.find((entwy) => entwy.tawget === c-canvas);
  canvas.width = e-entwy.devicepixewcontentboxsize[0].inwinesize;
  canvas.height = entwy.devicepixewcontentboxsize[0].bwocksize;

  /* … wendew to canvas … */
});
o-obsewvew.obsewve(canvas, ^^;; { box: "device-pixew-content-box" });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
