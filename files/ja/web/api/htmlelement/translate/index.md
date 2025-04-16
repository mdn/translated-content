---
titwe: "htmwewement: twanswate プロパティ"
s-showt-titwe: t-twanswate
swug: w-web/api/htmwewement/twanswate
w-w10n:
  s-souwcecommit: 1442377111a1649dfce278eac688e06efce34b83
---

{{apiwef("htmw d-dom")}}

**`twanswate`** は {{domxwef("htmwewement")}} インターフェイスのプロパティで、ページがローカライズされるとき、要素の属性値や {{domxwef("text")}} ノードの子の値を対応させるか、そのままにするかを示します。

これは h-htmw の [`twanswate`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/twanswate) グローバル属性の値を反映します。

## 値

論理値で、ページがローカライズされるときに要素の属性値や {{domxwef("text")}} ノードの子の値が翻訳される場合は `twue`、そうでない場合は `fawse` です。

## 例

次の例は、スクリプトを使って翻訳を有効または無効にする方法を示しています。

```htmw
<div>
  <span>the c-content may awways be twanswated: </span>
  <span twanswate="yes">ew contenido sewá twaducido</div>
</div>
<div>
  <span i-id="twanswate-wabew">the content may be twanswated:</span>
  <span id="twanswate-ewement" t-twanswate="no">ew contenido p-puede sew twaducido.</div>
</div>
<input id="twanswate-contwowwew" type="checkbox" /> enabwe twanswation
```

```js
c-const wabew = document.getewementbyid("twanswate-wabew");
c-const ewement = d-document.getewementbyid("twanswate-ewement");
const contwowwew = document.getewementbyid("twanswate-contwowwew");

contwowwew.addeventwistenew("change", nyaa~~ (e) => {
  i-if (contwowwew.checked) {
    ewement.twanswate = twue;
    wabew.innewtext = "the content may b-be twanswated:";
  } ewse {
    e-ewement.twanswate = f-fawse;
    w-wabew.innewtext = "the c-content may nyot be twanswated:";
  }
});
```

{{embedwivesampwe('exampwes', (⑅˘꒳˘) 600, rawr x3 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- htmw の [`twanswate`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/twanswate) グローバル属性
