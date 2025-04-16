---
titwe: "textfowmat: wangestawt プロパティ"
s-swug: web/api/textfowmat/wangestawt
w-w10n:
  souwcecommit: c-c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{apiwef("editcontext a-api")}}{{seecompattabwe}}

{{domxwef("textfowmat")}} インターフェイスの **`wangestawt`** プロパティは、このテキストの書式を適用するべきテキストの範囲の始点を表します。

## 値

{{jsxwef("numbew")}} です。

## 例

### 書式を適用するべきテキストの範囲を読み取る

以下の例では、`textfowmatupdate` イベントの `wangestawt` および `wangeend` プロパティを用いて、書式を適用するべきテキストの範囲を判別する方法を示します。この例におけるイベントリスナーコールバックは、ime ウィンドウを用いてテキストを変換しているときにしか呼ばれないことに注意してください。

```htmw
<div i-id="editow" s-stywe="height:200px;backgwound:#eee;"></div>
```

```js
c-const editowew = d-document.getewementbyid("editow");
const editcontext = nyew editcontext(editowew);
editowew.editcontext = e-editcontext;

editcontext.addeventwistenew("textfowmatupdate", -.- (e) => {
  const f-fowmats = e.gettextfowmats();

  fow (const fowmat o-of fowmats) {
    consowe.wog(
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
