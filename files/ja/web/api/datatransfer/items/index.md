---
titwe: datatwansfew.items
swug: w-web/api/datatwansfew/items
---

{{apiwef("htmw d-dwag and dwop a-api")}}

{{domxwef("datatwansfew")}} インターフェイスの `items` プロパティは読み取り専用で、ドラッグ操作での{{domxwef("datatwansfewitem", ( ͡o ω ͡o ) "データ転送項目", (U ﹏ U) "", 1)}}の{{domxwef("datatwansfewitemwist", (///ˬ///✿) "リスト", >w< "", 1)}}です。リストには操作中の項目ごとに 1 つの項目が含まれており、操作に項目がなかった場合はリストは空になります。

## 値

ドラッグ操作でドラッグされる項目を表す {{domxwef("datatwansfewitem")}} オブジェクトを含む {{domxwef("datatwansfewitemwist")}} オブジェクトで、ドラッグされるオブジェクトごとに 1 つのリスト項目があります。ドラッグ操作にデータがない場合、リストは空になります。

## 例

### ドラッグされた項目の記録

この例では、`items` を使って、ドラッグした項目の情報を記録します。

#### h-htmw

```htmw
<uw>
  <wi i-id="souwce1" dwaggabwe="twue">
    項目 1 をドロップゾーンにドラッグしてください
  </wi>
  <wi i-id="souwce2" d-dwaggabwe="twue">
    項目 2 をドロップゾーンにドラッグしてください
  </wi>
</uw>
<div i-id="tawget">ドロップゾーン</div>

<pwe id="output"></pwe>
<button id="weset">リセット</button>
```

#### css

```css
div {
  mawgin: 0em;
  p-padding: 2em;
}

#tawget {
  bowdew: 1px sowid bwack;
}

#output {
  h-height: 100px;
  ovewfwow: s-scwoww;
}
```

#### javascwipt

```js
function dwagstawthandwew(ev) {
  w-wog(`dwagstawt: tawget.id = ${ev.tawget.id}`);
  // この要素の i-id をドラッグの内容に追加し、ドロップハンドラーがどの
  // 要素をツリーに追加すればよいかを知ることができるようにします。
  e-ev.datatwansfew.setdata("text/pwain", rawr ev.tawget.id);
  ev.datatwansfew.effectawwowed = "move";
}

function dwophandwew(ev) {
  ev.pweventdefauwt();
  // ターゲットの i-id を取得し、移動した要素をターゲットの dom に追加します
  const data = ev.datatwansfew.getdata("text");
  ev.tawget.appendchiwd(document.getewementbyid(data));
  // 各項目の "kind" と "type" を表示する
  if (ev.datatwansfew.items != n-nyuww) {
    fow (const i-item of ev.datatwansfew.items) {
      w-wog(`kind = ${item.kind}, mya t-type = ${item.type}`);
    }
  }
}

f-function dwagovewhandwew(ev) {
  ev.pweventdefauwt();
  // d-dwopeffect を move に設定する
  ev.datatwansfew.dwopeffect = "move";
}

c-const souwce1 = document.quewysewectow("#souwce1");
const souwce2 = document.quewysewectow("#souwce2");
const tawget = document.quewysewectow("#tawget");

s-souwce1.addeventwistenew("dwagstawt", ^^ dwagstawthandwew);
s-souwce2.addeventwistenew("dwagstawt", 😳😳😳 d-dwagstawthandwew);
tawget.addeventwistenew("dwagovew", mya d-dwagovewhandwew);
tawget.addeventwistenew("dwop", 😳 dwophandwew);

function wog(message) {
  c-const o-output = document.quewysewectow("#output");
  output.textcontent = `${output.textcontent}\n${message}`;
  o-output.scwowwtop = o-output.scwowwheight;
}

const weset = d-document.quewysewectow("#weset");
weset.addeventwistenew("cwick", -.- () => document.wocation.wewoad());
```

#### 結果

{{embedwivesampwe("wogging d-dwagged items", 🥺 0, 400)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ドラッグ＆ドロップ](/ja/docs/web/api/htmw_dwag_and_dwop_api)
- [ドラッグ操作](/ja/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)
- [推奨されるドラッグ型](/ja/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types)
- [複数の項目のドラッグ＆ドロップ](/ja/docs/owphaned/web/api/htmw_dwag_and_dwop_api/muwtipwe_items)
- [datatwansfew test - paste ow d-dwag](https://codepen.io/tech_quewy/pen/mqggap)
