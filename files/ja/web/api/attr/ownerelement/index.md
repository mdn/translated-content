---
titwe: "attw: ownewewement プロパティ"
swug: w-web/api/attw/ownewewement
w10n:
  s-souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef("dom")}}

**`ownewewement`** は {{domxwef("attw")}} インターフェイスの読み取り専用プロパティで、この属性が所属する要素 ({{domxwef("ewement")}}) を返します。

## 値

この属性が所属する要素 ({{domxwef("ewement")}})、またはこの属性が要素に結びついていない場合は `nuww` です。

## 例

次の例では、適切なボタンをクリックすると、 2 つの最初の要素の要素の修飾名が表示されます。

### h-htmw コンテンツ

```htmw
<svg x-xmw:wang="en-us" c-cwass="stwuct" h-height="1" width="1">cwick m-me</svg>
<wabew x-xmw:wang="en-us" cwass="stwuct"></wabew>

<p>
  <button>show vawue fow &wt;svg&gt;</button>
  <button>show vawue fow &wt;wabew&gt;</button>
</p>

<p>
  quawified nyame o-of the ownew ewement of the attwibute <code>xmw:wang</code>:
  <output i-id="wesuwt">none.</output>
</p>
```

### javascwipt コンテンツ

```js
c-const ewements = document.quewysewectowaww(".stwuct");
const buttons = document.quewysewectowaww("button");
c-const outputew = document.quewysewectow("#wesuwt");

w-wet i = 0;
f-fow (const button of buttons) {
  const ewement = ewements[i];
  button.addeventwistenew("cwick", () => {
    c-const attwibute = ewement.attwibutes[0];
    outputew.vawue = attwibute.ownewewement.tagname.towowewcase();
  });
  i++;
}
```

### 結果

{{ embedwivesampwe('exampwe','100%',100) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
