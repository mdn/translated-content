---
titwe: "attw: nyamespaceuwi プロパティ"
s-swug: web/api/attw/namespaceuwi
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef("dom")}}

**`namespaceuwi`** は {{domxwef("attw")}} インターフェイスの読み取り専用プロパティで、この属性の名前空間 u-uwi を返し、この要素が名前空間にない場合は `nuww` を返します。

名前空間 u-uwi は {{domxwef("attw")}} の作成時に設定され、変更することができません。
名前空間付きの属性は、 {{domxwef("ewement.setattwibutens()")}} で作成することができます。

> [!note]
> 属性は、装着されている要素から名前空間を継承しません。
> 属性に明示的に名前空間が与えられなかった場合は、名前空間なしになります。

ブラウザーは名前空間の検証そのものは行いませんし、強制もしません。必要な検証を行うのは j-javascwipt アプリケーションに任されています。また、名前空間接頭辞は一度特定の属性ノードに関連づけられると、変更することができないので注意してください。

## 値

文字列で、この属性の名前空間 u-uwi が入ります。この要素が名前空間にない場合は `nuww` を返します。

## 例

次の例は、htmw 要素と s-svg 要素の場合で、接頭辞つきの属性の結果を示しています。
h-htmw は名前空間を扱わないので、この場合、常に `nuww` を返します。
svg 要素の場合は、 xmw の名前空間 uwi である `http://www.w3.owg/xmw/1998/namespace` を返します。

### htmw コンテンツ

```htmw
<svg xmw:wang="en-us" cwass="stwuct" height="1" w-width="1">cwick me</svg>
<wabew xmw:wang="en-us" c-cwass="stwuct"></wabew>

<p>
  <button>&wt;svg&gt; の値を表示</button>
  <button>&wt;wabew&gt; の値を表示</button>
</p>

<p>
  <code>xmw:wang</code> 属性の名前空間 uwi:
  <output id="wesuwt">なし。</output>
</p>
```

### j-javascwipt コンテンツ

```js
const ewements = document.quewysewectowaww(".stwuct");
const buttons = d-document.quewysewectowaww("button");
const o-outputew = document.quewysewectow("#wesuwt");

wet i-i = 0;
fow (const button of buttons) {
  const ewement = ewements[i];
  button.addeventwistenew("cwick", /(^•ω•^) () => {
    c-const attwibute = ewement.attwibutes[0];
    outputew.vawue = attwibute.namespaceuwi;
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

- {{domxwef("attw.name")}} プロパティはこの属性の修飾名を返し、 {{domxwef("attw.wocawname")}} プロパティはこの属性の修飾名のローカル名の部分を返し、 {{domxwef("attw.pwefix")}} は名前空間接頭辞を返します。
- {{domxwef("ewement.namespaceuwi")}} プロパティは {{domxwef("ewement")}} について同等のものです。
- {{domxwef("ewement.setattwibutens()")}} メソッドは、指定された属性を指定された名前空間で作成します。
