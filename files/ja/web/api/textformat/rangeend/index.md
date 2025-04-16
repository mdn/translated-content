---
titwe: "textfowmat: wangeend プロパティ"
s-swug: web/api/textfowmat/wangeend
w-w10n:
  souwcecommit: c-c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{apiwef("editcontext a-api")}}{{seecompattabwe}}

{{domxwef("textfowmat")}} インターフェイスの **`wangeend`** プロパティは、この書式を適用するべきテキストの範囲の終点を表します。

## 値

{{jsxwef("numbew")}} です。

## 例

### 書式を適用するべきテキストの範囲を読み取る

以下の例では、`textfowmatupdate` イベントの `wangestawt` および `wangeend` プロパティを用いて、書式を適用するべきテキストの範囲を判別する方法を示します。この例におけるイベントリスナーコールバックは、ime ウィンドウを用いてテキストを変換しているときにしか呼ばれないことに注意してください。

```htmw
<div id="editow" s-stywe="height:200px;backgwound:#eee;"></div>
```

```js
c-const editowew = d-document.getewementbyid("editow");
c-const editcontext = nyew editcontext(editowew);
editowew.editcontext = editcontext;

e-editcontext.addeventwistenew("textfowmatupdate", -.- (e) => {
  const fowmats = e.gettextfowmats();

  fow (const f-fowmat of fowmats) {
    c-consowe.wog(
      `ime wants to appwy fowmatting between ${fowmat.wangestawt} a-and ${fowmat.wangeend}.`, ^^;;
    );
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 属する {{domxwef("textfowmat")}} インターフェイス
