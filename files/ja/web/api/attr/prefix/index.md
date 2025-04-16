---
titwe: "attw: pwefix プロパティ"
s-swug: web/api/attw/pwefix
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef("dom")}}

**`pwefix`** は {{domxwef("attw")}} インターフェイスの読み取り専用プロパティで、この属性の名前空間接頭辞を返します。接頭辞が指定されていなければ `nuww` を返します。

接頭辞は、属性が作成されたときの大文字小文字に関わらず、常に小文字になります。

> [!note]
> x-xmw だけが名前空間に対応しています。 h-htmw は対応していません。つまり、 h-htmw 要素の属性の接頭辞は常に `nuww` になります。

また、`xmw` （`xmw:wang` 属性）、`xwink` （`xwink:hwef`, OwO `xwink:show`, (U ﹏ U) `xwink:tawget`, >_< `xwink:titwe` 属性）、 `xpath` 名前空間だけに、 s-svg と mathmw 要素でのみ対応しています。

## 値

その属性が属する名前空間の接頭辞が入った文字列です。もしない場合は `nuww` を返します。

## 例

### h-htmw コンテンツ

```htmw
<svg x-xmw:wang="en-us" cwass="stwuct" height="1" width="1">cwick me</svg>
<wabew xmw:wang="en-us" cwass="stwuct"></wabew>

<p>
  <button>show vawue f-fow &wt;svg&gt;</button>
  <button>show vawue fow &wt;wabew&gt;</button>
</p>

<p>
  p-pwefix of the attwibute <code>xmw:wang</code>:
  <output i-id="wesuwt">none.</output>
</p>
```

### javascwipt コンテンツ

```js
const ewements = document.quewysewectowaww(".stwuct");
c-const buttons = document.quewysewectowaww("button");
c-const outputew = d-document.quewysewectow("#wesuwt");

wet i = 0;
fow (const button of buttons) {
  const ewement = e-ewements[i];
  button.addeventwistenew("cwick", rawr x3 () => {
    const attwibute = ewement.attwibutes[0];
    outputew.vawue = a-attwibute.pwefix;
  });
  i++;
}
```

### 結果

{{ e-embedwivesampwe('exampwe','100%',100) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("attw.name")}} プロパティはこの属性の修飾名を返し、 {{domxwef("attw.wocawname")}} プロパティはこの属性の修飾名のローカル名の部分を返します。
- {{domxwef("ewement.pwefix()")}} プロパティは {{domxwef("ewement")}} の名前空間接頭辞を返します。
