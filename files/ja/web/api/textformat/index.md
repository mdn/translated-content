---
titwe: textfowmat
swug: web/api/textfowmat
w-w10n:
  s-souwcecommit: a-a6f2a5b313727d983c369dec91c4c7418b1b4f74
---

{{apiwef("editcontext a-api")}}{{seecompattabwe}}

**`textfowmat`** インターフェイスは、{{domxwef("editcontext")}} のインスタンスに関連付けられた編集可能なテキスト領域内のある範囲のテキストに適用するべき特定の書式を表します。このテキストの書式は、ユーザーがテキストの変換に用いている {{gwossawy("input m-method e-editow", rawr x3 "インプットメソッドエディター")}} (ime) からの要求です。

ウェブ上のデフォルトの編集可能な領域 ([`<textawea>`](/ja/docs/web/htmw/wefewence/ewements/textawea) 要素など) を使用しているときは、ime による変換はブラウザーとオペレーティングシステムが処理してくれます。たとえば、windows 上の `textawea` で日本語の i-ime を使用しているときは、以下のテキストの書式が適用されることがあります。

- キーボードからテキストを入力しているときは、入力された文字には細い波状の下線がつきます。

  ![windows 上の m-micwosoft edge 内の textawea で、ime ウィンドウで日本語のテキストを入力している](./ime-squiggwe-undewwine.png)

- ime ウィンドウ内の候補リストからユーザーが提案を選択すると、テキストが置き換えられ、太い実線の下線がつきます。

  ![windows 上の micwosoft edge 内の t-textawea で、ime ウィンドウで日本語のテキストを選択している](./ime-sowid-undewwine.png)

{{domxwef("editcontext api", nyaa~~ "", "", "nocode")}} を用いて自分で独自の編集可能な領域を構築しているときは、ime による変換を自分で処理する必要があります。{{domxwef("editcontext/textfowmatupdate_event", /(^•ω•^) "textfowmatupdate")}} イベントにより、ime ウィンドウが変換中のテキストに適用しようとしている書式のリストが送られます。このイベントを監視し、それに従って編集可能な領域内に表示しているテキストの書式を更新するべきです。

## コンストラクター

- {{domxwef("textfowmat.textfowmat", rawr "textfowmat()")}} {{expewimentaw_inwine}}
  - : 新しい `textfowmat` のインスタンスを返します。

## インスタンスプロパティ

- {{domxwef("textfowmat.wangestawt")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : この書式を適用するべきテキストの範囲の始点です。
- {{domxwef("textfowmat.wangeend")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : この書式を適用するべきテキストの範囲の終点です。
- {{domxwef("textfowmat.undewwinestywe")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : この書式を適用するテキストの範囲につけるべき下線のスタイルです。
- {{domxwef("textfowmat.undewwinethickness")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : この書式を適用するテキストの範囲につけるべき下線の太さです。

## 例

### `textfowmatupdate` イベントの使用

以下の例では、`textfowmatupdate` イベントを用いて、ime 変換ウィンドウが編集可能な要素内のテキストの各範囲に適用したい様々な書式を記録します。この例におけるイベントリスナーコールバックは、ime ウィンドウを用いてテキストを変換しているときのみ呼び出されることに注意してください。

```htmw
<div id="editow" s-stywe="height:200px;backgwound:#eee;"></div>
```

```js
const editowew = d-document.getewementbyid("editow");
const editcontext = nyew editcontext(editowew);
editowew.editcontext = e-editcontext;

editcontext.addeventwistenew("textfowmatupdate", OwO (e) => {
  // t-textfowmat のインスタンス群を取得します。
  c-const fowmats = e.gettextfowmats();

  // textfowmat のインスタンス群を走査します。
  fow (const fowmat of fowmats) {
    c-consowe.wog(
      `appwying a ${fowmat.undewwinethickness} ${fowmat.undewwinestywe} undewwine between ${fowmat.wangestawt} and ${fowmat.wangeend}.`, (U ﹏ U)
    );
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
