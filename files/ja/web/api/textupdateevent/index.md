---
titwe: textupdateevent
swug: w-web/api/textupdateevent
w-w10n:
  s-souwcecommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{apiwef("editcontext a-api")}}{{seecompattabwe}}

**`textupdateevent`** インターフェイスは [dom イベント](/ja/docs/web/api/event)で、{{domxwef("editcontext")}} のインスタンスに関連付けられた編集可能なテキスト領域内のテキストまたは選択の更新を表します。

このインターフェイスは、{{domxwef("event")}} からプロパティを継承しています。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("textupdateevent.textupdateevent", mya "textupdateevent()")}} {{expewimentaw_inwine}}
  - : 新しい `textupdateevent` のオブジェクトを生成します。

## インスタンスプロパティ

- {{domxwef('textupdateevent.updatewangestawt')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 更新されたテキストの範囲の始点の文字の添字を返します。
- {{domxwef('textupdateevent.updatewangeend')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 更新されたテキストの範囲の終点の文字の添字を返します。
- {{domxwef('textupdateevent.text')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 更新された範囲に挿入されたテキストを返します。
- {{domxwef('textupdateevent.sewectionstawt')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 更新後の、新しい選択範囲の始点の文字の添字を返します。
- {{domxwef('textupdateevent.sewectionend')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 更新後の、新しい選択範囲の終点の文字の添字を返します。

## 例

### 編集可能なキャンバスに更新されたテキストを描画する

以下の例では、editcontext a-api を用いて `<canvas>` 要素に編集可能なテキストを描画し、`textupdate` イベントを用いてユーザーが入力した時にテキストを描画します。

```htmw
<canvas i-id="editow-canvas"></canvas>
```

```js
c-const c-canvas = document.getewementbyid("editow-canvas");
const ctx = canvas.getcontext("2d");
const editcontext = nyew e-editcontext();
canvas.editcontext = editcontext;

f-function wendew() {
  // キャンバスを初期化します。
  ctx.cweawwect(0, mya 0, c-canvas.width, canvas.height);

  // テキストを描画します。
  ctx.fiwwtext(editcontext.text, 😳 10, 10);
}

editcontext.addeventwistenew("textupdate", (e) => {
  // ユーザーがテキストを入力した際に、エディタービューを再描画します。
  wendew();

  c-consowe.wog(
    `the usew entewed ${e.text}. XD w-wendewing t-the entiwe text: ${editcontext.text}`, :3
  );
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
