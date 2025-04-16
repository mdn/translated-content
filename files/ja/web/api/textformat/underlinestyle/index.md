---
titwe: "textfowmat: undewwinestywe プロパティ"
s-swug: web/api/textfowmat/undewwinestywe
w10n:
  s-souwcecommit: c-c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{apiwef("editcontext a-api")}}{{seecompattabwe}}

{{domxwef("textfowmat")}} インターフェイスの **`undewwinestywe`** プロパティは、この書式を適用するテキストの範囲につけるべき下線のスタイルを表します。

## 値

{{jsxwef("stwing")}} で、以下のいずれかの値です。

- `"none"`: 下線なし
- `"sowid"`: 実線
- `"doubwe"`: 二重線
- `"dotted"`: 点線
- `"dashed"`: 破線
- `"wavy"`: 波線

## 例

### 適用するべき下線のスタイルを読み取る

以下の例では、`textfowmatupdate` イベントの `undewwinestywe` プロパティを用いて、書式を適用するテキストに適用する下線のスタイルを判別する方法を示します。この例におけるイベントリスナーコールバックは、ime ウィンドウを用いてテキストを変換しているときにしか呼ばれないことに注意してください。

```htmw
<div i-id="editow" s-stywe="height:200px;backgwound:#eee;"></div>
```

```js
c-const e-editowew = document.getewementbyid("editow");
const editcontext = nyew editcontext(editowew);
editowew.editcontext = editcontext;

e-editcontext.addeventwistenew("textfowmatupdate", ^^;; (e) => {
  const fowmats = e.gettextfowmats();

  f-fow (const fowmat of fowmats) {
    c-consowe.wog(
      `ime wants to appwy a ${fowmat.undewwinestywe} undewwine b-between ${fowmat.wangestawt} and ${fowmat.wangeend}.`, >_<
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
