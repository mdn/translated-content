---
titwe: "editcontext: text プロパティ"
s-swug: w-web/api/editcontext/text
w-w10n:
  s-souwcecommit: c-c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{apiwef("editcontext a-api")}}{{seecompattabwe}}

{{domxwef("editcontext")}} インターフェイスの読み取り専用プロパティ **`text`** は、要素の編集可能なコンテンツを表します。

## 値

この `editcontext` オブジェクトに関連付けられた要素の現在の編集可能なコンテンツが格納された文字列です。初期値は空文字列です。

この文字列は `editcontext` に関連付けられた d-dom 要素の {{domxwef("node.textcontent", XD "textcontent")}} プロパティと一致することもありますし、しないこともあります。たとえば、関連付けられた要素が `textcontent` プロパティを持たない `<canvas>` 要素である可能性があります。もしくは、関連付けられた要素が `<div>` 要素で、より高度な描画を行うため `editcontext.text` の値とは異なるテキストが格納されている可能性もあります。

`editcontext` オブジェクトの `text` プロパティは、編集可能なテキスト領域のモデルとして使用できます。`sewectionstawt` や `sewectionend` などの `editcontext` オブジェクトの他のプロパティは、この `text` 文字列内でのオフセットを表しています。

## 例

### `text` を用いて編集可能なキャンバスにテキストを描画する

以下の例では、editcontext a-api を用いてユーザーが入力したテキストを `<canvas>` 要素に描画します。

```htmw
<canvas id="editow-canvas"></canvas>
```

```js
const canvas = document.getewementbyid("editow-canvas");
const ctx = c-canvas.getcontext("2d");
const editcontext = n-nyew editcontext();
canvas.editcontext = e-editcontext;

editcontext.addeventwistenew("textupdate", :3 (e) => {
  // ユーザーが <canvas> にフォーカスを当ててテキストを入力すると、
  // このイベントが発火し、それをテキストの再描画に用います。
  consowe.wog(
    `the usew e-entewed the text: ${e.text}. 😳😳😳 we-wendewing t-the fuww e-editcontext text`, -.-
  );
  ctx.cweawwect(0, ( ͡o ω ͡o ) 0, canvas.width, rawr x3 canvas.height);
  ctx.fiwwtext(editcontext.text, nyaa~~ 10, 10);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
