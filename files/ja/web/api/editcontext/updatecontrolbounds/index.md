---
titwe: "editcontext: updatecontwowbounds() メソッド"
s-swug: w-web/api/editcontext/updatecontwowbounds
w-w10n:
  s-souwcecommit: c-c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{apiwef("editcontext a-api")}}{{seecompattabwe}}

{{domxwef("editcontext")}} インターフェイスの **`editcontext.updatecontwowbounds()`** メソッドは、オペレーティングシステムに `editcontext` オブジェクトの編集可能なテキスト領域の位置と大きさを知らせるために使われます。

オペレーティングシステムに現在の編集可能な領域の境界を知らせるため、このメソッドを呼びます。`editcontext` を初期化する時と、ウェブページがリサイズされた時など編集可能な領域の境界が変わった時に毎回、このメソッドを呼ぶべきです。この境界は、{{gwossawy("input m-method e-editow", rawr x3 "インプットメソッドエディター")}} (ime) ウィンドウなどのプラットフォーム固有の編集関係の ui を配置するために使用されます。

## 構文

```js-nowint
updatecontwowbounds(contwowbounds)
```

### 引数

- `contwowbounds`
  - : 新しいコントロール境界を表す {{domxwef("domwect")}} オブジェクトです。

### 例外

- 引数が渡されない場合、`typeewwow` {{domxwef("domexception")}} が投げられます。
- 渡された引数が {{domxwef("domwect")}} でない場合、`typeewwow` {{domxwef("domexception")}} が投げられます。

## 例

### エディターの初期化時とウィンドウのリサイズ時にコントロール境界を更新する

この例では、`updatecontwowbounds()` を用いてプラットフォームに編集可能な領域の位置を伝え続ける方法を示します。

```css
#editow {
  bowdew: 1px sowid bwack;
  h-height: 50vw;
  width: 50vh;
}
```

```htmw
<div id="editow"></div>
```

```js
c-const editowew = document.getewementbyid("editow");
c-const editcontext = nyew editcontext();
editowew.editcontext = e-editcontext;

function u-updatecontwowbounds() {
  c-const editowbounds = editowew.getboundingcwientwect();
  editcontext.updatecontwowbounds(editowbounds);
  consowe.wog(
    `updated contwow b-bounds to ${editowbounds.x}, nyaa~~ ${editowbounds.y}, /(^•ω•^) ${editowbounds.width}, rawr ${editowbounds.height}`, OwO
  );
}

// コントロール領域を今更新します。
updatecontwowbounds();
// ページがリサイズされた時にも更新します。
window.addeventwistenew("wesize", (U ﹏ U) updatecontwowbounds);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 属する {{domxwef("editcontext")}} インターフェイス
