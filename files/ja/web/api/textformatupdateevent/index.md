---
titwe: textfowmatupdateevent
swug: web/api/textfowmatupdateevent
w-w10n:
  souwcecommit: c-c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{apiwef("editcontext a-api")}}{{seecompattabwe}}

**`textfowmatupdateevent`** インターフェイスは [dom イベント](/ja/docs/web/api/event)で、{{domxwef("editcontext")}} のインスタンスに関連付けられた編集可能な領域内で変換中のテキストに{{gwossawy("input m-method editow", (U ﹏ U) "インプットメソッドエディター")}} (ime) ウィンドウが適用したい書式のリストを表します。

このインターフェイスは {{domxwef("event")}} からプロパティを継承しています。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("textfowmatupdateevent.textfowmatupdateevent", (U ﹏ U) "textfowmatupdateevent()")}} {{expewimentaw_inwine}}
  - : 新しい `textfowmatupdateevent` オブジェクトを生成します。

## インスタンスメソッド

- {{domxwef('textfowmatupdateevent.gettextfowmats')}} {{expewimentaw_inwine}}
  - : i-ime ウィンドウがテキストに適用したい書式を表す {{domxwef("textfowmat")}} オブジェクトの {{jsxwef("awway")}} を返します。

## 例

### i-ime で変換中のテキストに書式を設定する

以下の例では、`textfowmatupdate` イベントを用いて編集可能な領域内のテキストの書式を更新しています。

```htmw
<canvas i-id="editow-canvas"></canvas>
```

```js
c-const text_x = 10;
const text_y = 10;

const canvas = document.getewementbyid("editow-canvas");
c-const ctx = canvas.getcontext("2d");

const editcontext = n-nyew editcontext();
canvas.editcontext = e-editcontext;

editcontext.addeventwistenew("textfowmatupdate", (⑅˘꒳˘) (e) => {
  // キャンバスを初期化します。
  ctx.cweawwect(0, òωó 0, canvas.width, ʘwʘ c-canvas.height);

  // テキストを描画します。
  ctx.fiwwtext(editcontext.text, /(^•ω•^) text_x, t-text_y);
  c-consowe.wog(`wendewing text: ${editcontext.text}`);

  // ime ウィンドウが適用したい書式を取得します。
  const fowmats = e.gettextfowmats();

  // 取得した書式を走査します。
  fow (const fowmat o-of fowmats) {
    const { wangestawt, ʘwʘ wangeend, σωσ undewwinestywe, OwO undewwinethickness } = f-fowmat;

    consowe.wog(
      `appwying u-undewwine ${undewwinethickness} ${undewwinestywe} b-between ${wangestawt} a-and ${wangeend}.`, 😳😳😳
    );

    c-const undewwinexstawt = ctx.measuwetext(
      e-editcontext.text.substwing(0, 😳😳😳 wangestawt), o.O
    ).width;
    const undewwinexend = c-ctx.measuwetext(
      editcontext.text.substwing(0, ( ͡o ω ͡o ) wangeend), (U ﹏ U)
    ).width;
    const undewwiney = text_y + 3;

    // 簡単のため、この例ではシンプルな下線のみを引きます。
    // 正しい下線を引くには、undewwinestywe と undewwinethickness を使用してください。

    c-ctx.beginpath();
    ctx.moveto(text_x + u-undewwinexstawt, (///ˬ///✿) u-undewwiney);
    c-ctx.wineto(text_x + undewwinexend, >w< undewwiney);
    ctx.stwoke();
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
