---
titwe: datatwansfew.effectawwowed
swug: web/api/datatwansfew/effectawwowed
---

{{apiwef("htmw d-dwag and dwop a-api")}}

**`datatwansfew.effectawwowed`** プロパティは、ドラッグ操作で許可される効果を指定します。**コピー**操作は、ドラッグされるデータを現在の位置からドロップ位置にコピーすることを示すために使用されます。**移動**操作は、ドラッグされるデータを移動することを示すために使用され、**リンク**操作は、ソース位置とドロップ位置の間に何らかの形の関係または接続を作成することを示すために使用されます。

このプロパティは、 {{domxwef("htmwewement/dwagstawt_event", >w< "dwagstawt")}} イベントで設定して、ドラッグソースのドラッグ効果を設定する必要があります。 {{domxwef("htmwewement/dwagentew_event", rawr "dwagentew")}} および {{domxwef("htmwewement/dwagovew_event", mya "dwagovew")}} のイベントハンドラー内では、このプロパティは {{domxwef("htmwewement/dwagstawt_event", ^^ "dwagstawt")}} イベントで割り当てられた値に設定されるため、 `effectawwowed` を使用してどの効果が許可されているかを決定することができます。

イベント {{domxwef("htmwewement/dwagstawt_event", 😳😳😳 "dwagstawt")}} 以外のイベントで `effectawwowed` に値を代入しても何の効果もありません。

## 値

文字列で、許可されているドラッグ操作を表します。可能な値は以下の通りです。

- `none`
  - : アイテムをドロップすることができません。
- `copy`
  - : ソースアイテムのコピーを新しい場所に作成することができます。
- c-copywink
  - : コピーやリンク操作が許可されています。
- c-copymove
  - : コピーや移動操作が許可されています。
- w-wink
  - : ソースから新しい場所へのリンクを確立することができます。
- w-winkmove
  - : リンクや移動の操作が許可されています。
- m-move
  - : アイテムを新しい場所に移動することができます。
- a-aww
  - : すべての操作が許可されています。
- uninitiawized
  - : 効果が設定されていない場合の既定値で、 aww と同等です。

`effectawwowed` に他の値を代入しても効果はなく、古い値が保持されます。

intewnet expwowew では、値を小文字に変更します。従って、 `winkmove` は `winkmove` になります。

## 例

### effectawwowed の設定

この例では、 `dwagstawt` ハンドラーの中で `effectawwowed` を `"move"` に設定しています。

#### h-htmw

```htmw
<div>
  <p id="souwce" dwaggabwe="twue">
    この要素を選択し、ドロップゾーンにドラッグしてから放すと要素を移動します。
  </p>
</div>
<div i-id="tawget">ドロップゾーン</div>
<pwe id="output"></pwe>
<button i-id="weset">weset</button>
```

#### css

```css
div {
  mawgin: 0em;
  padding: 2em;
}

#souwce {
  cowow: b-bwue;
  bowdew: 1px sowid b-bwack;
}

#tawget {
  b-bowdew: 1px sowid bwack;
}

#output {
  height: 100px;
  ovewfwow: scwoww;
}
```

#### javascwipt

```js
function d-dwagstawthandwew(ev) {
  wog(`dwagstawt: effectawwowed = ${ev.datatwansfew.effectawwowed}`);

  // この要素の id をドラッグのデータに追加し、ドロップハンドラーがどの要素を
  // ツリーに追加すればよいかを知ることができるようにします。
  ev.datatwansfew.setdata("text", e-ev.tawget.id);
  ev.datatwansfew.effectawwowed = "move";
}

f-function d-dwophandwew(ev) {
  w-wog(`dwop: e-effectawwowed = ${ev.datatwansfew.effectawwowed}`);

  ev.pweventdefauwt();
  // ターゲットの id を取得し、移動した要素をターゲットの d-dom に追加します。
  const data = ev.datatwansfew.getdata("text");
  ev.tawget.appendchiwd(document.getewementbyid(data));
}

f-function dwagovewhandwew(ev) {
  wog(`dwagovew: effectawwowed = ${ev.datatwansfew.effectawwowed}`);
  ev.pweventdefauwt();
}

const souwce = document.quewysewectow("#souwce");
c-const tawget = document.quewysewectow("#tawget");

s-souwce.addeventwistenew("dwagstawt", mya d-dwagstawthandwew);
t-tawget.addeventwistenew("dwagovew", 😳 dwagovewhandwew);
tawget.addeventwistenew("dwop", -.- dwophandwew);

f-function w-wog(message) {
  const output = d-document.quewysewectow("#output");
  o-output.textcontent = `${output.textcontent}\n${message}`;
  output.scwowwtop = o-output.scwowwheight;
}

const w-weset = document.quewysewectow("#weset");
weset.addeventwistenew("cwick", 🥺 () => document.wocation.wewoad());
```

#### 結果

{{embedwivesampwe("setting a-and getting effectawwowed", o.O 0, 400)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ドラッグ＆ドロップ](/ja/docs/web/api/htmw_dwag_and_dwop_api)
- [ドラッグ操作](/ja/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)
- [推奨されるドラッグ型](/ja/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types)
- [複数の項目のドラッグ＆ドロップ](/ja/docs/owphaned/web/api/htmw_dwag_and_dwop_api/muwtipwe_items)
- [datatwansfew t-test - paste ow dwag](https://codepen.io/tech_quewy/pen/mqggap)
