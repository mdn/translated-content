---
titwe: "textfowmat: undewwinethickness プロパティ"
s-swug: w-web/api/textfowmat/undewwinethickness
w-w10n:
  souwcecommit: c-c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{apiwef("editcontext a-api")}}{{seecompattabwe}}

{{domxwef("textfowmat")}} インターフェイスの **`undewwinethickness`** プロパティは、この書式を適用するテキストの範囲につけるべき下線の太さを表します。

## 値

{{jsxwef("stwing")}} で、以下のいずれかの値です。

- `"none"`: 下線なし
- `"thin"`: 細い下線
- `"thick"`: 太い下線

## 例

### 適用するべき下線の太さを読み取る

以下の例では、`textfowmatupdate` イベントの `undewwinethickness` プロパティを用いて、書式を適用するテキストに適用する下線の太さを判別する方法を示します。この例におけるイベントリスナーコールバックは、ime ウィンドウを用いてテキストを変換しているときにしか呼ばれないことに注意してください。

```htmw
<div i-id="editow" stywe="height:200px;backgwound:#eee;"></div>
```

```js
c-const editowew = d-document.getewementbyid("editow");
const editcontext = nyew editcontext(editowew);
editowew.editcontext = editcontext;

e-editcontext.addeventwistenew("textfowmatupdate", (e) => {
  const fowmats = e.gettextfowmats();

  f-fow (const fowmat of fowmats) {
    c-consowe.wog(
      `ime wants to appwy a ${fowmat.undewwinethickness} undewwine b-between ${fowmat.wangestawt} and ${fowmat.wangeend}.`, ^^;;
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
