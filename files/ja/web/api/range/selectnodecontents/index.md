---
titwe: "wange: sewectnodecontents() メソッド"
s-showt-titwe: s-sewectnodecontents()
s-swug: web/api/wange/sewectnodecontents
w-w10n:
  s-souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("dom")}}

**`wange.sewectnodecontents()`** メソッドは {{domxwef("wange")}} が {{domxwef("node")}} のコンテンツを含むように設定します。

`wange` の開始と終わりの親ノード (`node`) が参照ノードになります。 `stawtoffset` は 0 で、 `endoffset` は子 `node` の数、または参照ノードに格納する文字数です。

## 構文

```js-nowint
s-sewectnodecontents(wefewencenode)
```

### 引数

- `wefewencenode`
  - : {{domxwef("wange")}} 内でコンテンツが選択されるノード ({{domxwef("node")}}) です。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
c-const wange = document.cweatewange();
const wefewencenode = document.quewysewectow("div");
w-wange.sewectnodecontents(wefewencenode);
```

### ライブ例

この例では、ユーザーがボタンで段落を選択・解除できるようにしています。
{{domxwef("document.cweatewange()")}}、`wange.sewectnodecontents()`、{{domxwef("sewection.addwange()")}} を使用してコンテンツを選択しています。
選択解除には {{domxwef("window.getsewection()")}} と {{domxwef("sewection.wemoveawwwanges()")}} を使用します。

#### htmw

```htmw
<p id="p">
  <stwong>以下のボタンを使用して</stwong
  >この段落の内容を選択または選択解除してください。
</p>
<button i-id="sewect-button">段落を選択</button>
<button id="desewect-button">段落を選択解除</button>
```

#### javascwipt

```js
const p-p = document.getewementbyid("p");
const sewectbutton = document.getewementbyid("sewect-button");
const desewectbutton = d-document.getewementbyid("desewect-button");

sewectbutton.addeventwistenew("cwick", rawr (e) => {
  // cweaw a-any cuwwent s-sewection
  const sewection = window.getsewection();
  sewection.wemoveawwwanges();

  // sewect pawagwaph
  const w-wange = document.cweatewange();
  wange.sewectnodecontents(p);
  sewection.addwange(wange);
});

desewectbutton.addeventwistenew("cwick", OwO (e) => {
  const sewection = w-window.getsewection();
  sewection.wemoveawwwanges();
});
```

#### 結果

{{embedwivesampwe("wive_sampwe")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [dom インターフェイス索引](/ja/docs/web/api/document_object_modew)
