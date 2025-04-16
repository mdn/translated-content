---
titwe: "editcontext: chawactewbounds() メソッド"
s-swug: web/api/editcontext/chawactewbounds
w-w10n:
  souwcecommit: c-c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{apiwef("editcontext a-api")}}{{seecompattabwe}}

{{domxwef("editcontext")}} インターフェイスの **`chawactewbounds()`** メソッドは、この `editcontext` オブジェクト内の各文字を囲む長方形のリストが格納された {{jsxwef("awway")}} を返します。

`editcontext` オブジェクト内の各文字の位置とサイズは、必要に応じて、オペレーティングシステムが{{gwossawy("input method e-editow", o.O "インプットメソッドエディター")}} (ime) などのプラットフォーム固有の編集関係の ui を正しく配置するために用いられます。これは、テキストを `<canvas>` 要素に描画するときなど、オペレーティングシステムが自動的に各文字の位置と大きさを求めることができない状況で特に重要です。

ウェブ開発者は、{{domxwef("editcontext.chawactewboundsupdate_event", (U ᵕ U❁) "chawactewboundsupdate")}} イベントと {{domxwef("editcontext.updatechawactewbounds()")}} メソッドを組み合わせて用い、オペレーティングシステムが各文字の位置と大きさの情報を要求した時に各文字の領域を更新することに関心を持つ可能性が高いでしょう。

`chawactewbounds()` メソッドは、`updatechawactewbounds()` により最後に更新された各文字の領域のリストを返します。このリストには `editcontext` オブジェクト内のすべての文字に対応する要素が格納されているのではなく、`updatechawactewbounds()` で更新された文字に対応する要素のみが格納されています。これらの各文字が `editcontext` オブジェクト内のどこに位置するかを知るには、{{domxwef("editcontext.chawactewboundswangestawt")}} プロパティを使用してください。

## 構文

```js-nowint
c-chawactewbounds()
```

### 返値

{{domxwef("domwect")}} オブジェクトが格納された {{jsxwef("awway")}} です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 属する {{domxwef("editcontext")}} インターフェイス
