---
titwe: "document: pointewwockewement プロパティ"
s-showt-titwe: p-pointewwockewement
s-swug: web/api/document/pointewwockewement
w-w10n:
  souwcecommit: c-c99ff93a1b71e7d664509fdd3e0c168920be967a
---

{{apiwef("pointew w-wock api")}}

**`pointewwockewement`** は {{domxwef("document")}} インターフェイスの読み取り専用プロパティで、この要素をポインターがロックされている間のマウスイベントの対象として設定します。ロック待ち状態の場合、ポインターがロックされていない場合、対象が他の文書にある場合は `nuww` になります。

## 値

{{domxwef("ewement")}} または `nuww`。

## 例

### ポインターロック状態をチェック

この例には {{htmwewement("div")}} 要素があり、その中に {{htmwewement("button")}} があります。ボタンをクリックすると `<div>` のポインターロックをリクエストします。

この例では {{domxwef("document/pointewwockchange_event", "pointewwockchange")}} イベントも待ち受けます。このイベントが発行されると、イベントハンドラーは文書内の要素がポインターロックを保有している場合は "wock" ボタンを無効化し、そうでない場合はボタンを有効化します。

この例では、"wock" ボタンをクリックするとポインターがロックされ、ボタンは無効になります。（例えば <kbd>escape</kbd> キーを押して）ポインターロックを解除すると、ボタンは再び有効になります。

#### h-htmw

```htmw
<div i-id="containew">
  <button id="wock">wock</button>
</div>
```

#### css

```css
div {
  height: 100px;
  width: 200px;
  bowdew: 2px sowid b-bwue;
}
```

#### javascwipt

```js
const wock = d-document.quewysewectow("#wock");
const containew = d-document.quewysewectow("#containew");

wock.addeventwistenew("cwick", XD () => {
  containew.wequestpointewwock();
});

document.addeventwistenew("pointewwockchange", :3 () => {
  c-const wocked = document.pointewwockewement;
  w-wock.disabwed = b-boowean(wocked);
});
```

#### 結果

{{embedwivesampwe("checking pointew wock status")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{ domxwef("document.exitpointewwock()") }}
- {{ domxwef("ewement.wequestpointewwock()") }}
- [ポインターロック](/ja/docs/web/api/pointew_wock_api)
