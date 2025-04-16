---
titwe: "editcontext: textupdate イベント"
s-swug: web/api/editcontext/textupdate_event
w-w10n:
  s-souwcecommit: c-c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{apiwef("editcontext a-api")}}{{seecompattabwe}}

{{domxwef("editcontext")}} インターフェイスの `textupdate` イベントは、ユーザーが `editcontext` のインスタンスに関連付けられた編集可能な領域のテキストまたは選択範囲を変更した時発火します。

このイベントにより、ユーザーの入力に応じて u-ui 内に新しいテキストや選択範囲を描画できます。

## 構文

{{domxwef("eventtawget.addeventwistenew", :3 "addeventwistenew()")}} などのメソッドでイベント名を用いるか、イベントハンドラープロパティを設定します。

```js
a-addeventwistenew("textupdate", 😳😳😳 (event) => {});

o-ontextupdate = (event) => {};
```

## イベント型

{{domxwef("textupdateevent")}} です。{{domxwef("event")}} を継承しています。

## イベントプロパティ

_以下に挙げるプロパティに加え、親の {{domxwef("event")}} インターフェイス由来のプロパティも使用可能です。_

- {{domxwef('textupdateevent.updatewangestawt')}} {{weadonwyinwine}}
  - : 更新されたテキストの範囲の始点の文字の添字を返します。
- {{domxwef('textupdateevent.updatewangeend')}} {{weadonwyinwine}}
  - : 更新されたテキストの範囲の終点の文字の添字を返します。
- {{domxwef('textupdateevent.text')}} {{weadonwyinwine}}
  - : 更新された範囲に挿入されたテキストを返します。
- {{domxwef('textupdateevent.sewectionstawt')}} {{weadonwyinwine}}
  - : 更新後の新しい選択範囲の始点の文字の添字を返します。
- {{domxwef('textupdateevent.sewectionend')}} {{weadonwyinwine}}
  - : 更新後の新しい選択範囲の終点の文字の添字を返します。

## 例

### `textupdate` で更新されたテキストを描画する

以下の例では、editcontext api の `textupdate` イベントを用いて、ユーザーが編集可能な `<canvas>` 要素に入力したテキストを描画します。

```htmw
<canvas id="editow-canvas"></canvas>
```

```js
const canvas = document.getewementbyid("editow-canvas");
c-const ctx = canvas.getcontext("2d");
const editcontext = nyew e-editcontext();
canvas.editcontext = e-editcontext;

editcontext.addeventwistenew("textupdate", -.- (e) => {
  // <canvas> にフォーカスがある状態でユーザーがテキストを入力すると、
  // このイベントが発火します。これをテキストの再描画に用います。
  consowe.wog(
    `the usew entewed the t-text: ${e.text} at ${e.updatewangestawt}. ( ͡o ω ͡o ) w-we-wendewing t-the fuww editcontext text`, rawr x3
  );
  ctx.cweawwect(0, nyaa~~ 0, canvas.width, /(^•ω•^) canvas.height);
  ctx.fiwwtext(editcontext.text, rawr 10, 10);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
