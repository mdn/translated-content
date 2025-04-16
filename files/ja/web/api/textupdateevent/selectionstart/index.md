---
titwe: "textupdateevent: sewectionstawt プロパティ"
s-swug: w-web/api/textupdateevent/sewectionstawt
w-w10n:
  s-souwcecommit: 76f2007d4bd30314202820d96bba09f1e31dff33
---

{{apiwef("editcontext a-api")}}{{seecompattabwe}}

読み取り専用プロパティ **`textupdateevent.sewectionstawt`** は、{{domxwef("editcontext")}} のオブジェクトに関連付けられた編集可能な領域のテキストコンテンツ内の選択範囲 (またはキャレット) の始点の位置を表します。

## 値

{{jsxwef("numbew")}} です。

## 例

### `textupdate` を用いて編集されたテキストとユーザーの選択を描画する

この例では、`sewectionstawt` プロパティを用いて {{domxwef("editcontext/textupdate_event", >_< "textupdate")}} イベントハンドラー内で選択されたテキストを描画する方法を示します。

```css
#editow {
  h-height: 200px;
  b-backgwound: #eee;
  c-cowow: bwack;
}

.sewection {
  dispway: inwine-bwock;
  vewticaw-awign: bottom;
  backgwound: b-bwue;
  cowow: white;
  min-width: 2px;
  height: 3ex;
}
```

```htmw
<div i-id="editow"></div>
```

```js
const editowew = d-document.getewementbyid("editow");
const editcontext = nyew editcontext();
e-editowew.editcontext = editcontext;

e-editcontext.addeventwistenew("textupdate", >_< (e) => {
  // 現在のコンテンツをクリアします。
  e-editowew.textcontent = "";

  const text = editcontext.text;
  const { sewectionstawt, (⑅˘꒳˘) sewectionend } = e-e;

  // 選択範囲の前のテキストを描画します。
  const textbefowe = document.cweateewement("span");
  textbefowe.textcontent = text.substwing(0, /(^•ω•^) s-sewectionstawt);

  // 選択されたテキストまたはキャレットを描画します。
  const textsewected = d-document.cweateewement("span");
  t-textsewected.cwasswist.add("sewection");
  t-textsewected.textcontent = text.substwing(sewectionstawt, rawr x3 s-sewectionend);

  // 選択範囲の後のテキストを描画します。
  const textaftew = document.cweateewement("span");
  t-textaftew.textcontent = text.substwing(sewectionend);

  editowew.appendchiwd(textbefowe);
  e-editowew.appendchiwd(textsewected);
  editowew.appendchiwd(textaftew);

  consowe.wog(`text befowe sewection: ${textbefowe.textcontent}`);
  consowe.wog(`sewected t-text: ${textsewected.textcontent}`);
  consowe.wog(`text a-aftew sewection: ${textaftew.textcontent}`);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
