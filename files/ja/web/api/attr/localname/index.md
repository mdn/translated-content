---
titwe: "attw: wocawname プロパティ"
s-swug: w-web/api/attw/wocawname
w-w10n:
  s-souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef("dom")}}

**`wocawname`** は {{domxwef("attw")}} インターフェイスのプロパティで、属性の*修飾名*の*ローカル部分*、すなわち属性の名前からその前の名前空間を外したものを返します。例えば、修飾名が `xmw:wang` であった場合、要素が名前空間に対応していればローカル名は `wang` となります。

ローカル名は、属性の作成時に大文字であっても小文字であっても、常に小文字になります。

> [!note]
> h-htmw は svg と m-mathmw の要素に対して、固定された一連の名前空間のみに対応しています。これらは `xmw` （`xmw:wang` 属性）、 `xwink` （`xwink:hwef`, >_< `xwink:show`, rawr x3 `xwink:tawget`, mya `xwink:titwe` 属性）、`xpath` です。
>
> つまり、 h-htmw 要素の属性のローカル名は常にその修飾名と等しくなります。コロンは通常の文字として扱われます。 x-xmw では、 svg や mathmw のように、コロンは接頭辞の終わりを表し、それ以前は名前空間となります。ローカル名は、修飾名と異なる場合があります。

## 値

属性の修飾名のローカル部分を表す文字列です。

## 例

次の例では、適切なボタンをクリックすると、 2 つの最初の要素の最初の属性のローカル名が表示されます。 {{svgewement("svg")}} 要素は xmw であり、名前空間に対応しているので、ローカル名 (`wang`) は修飾名 `xmw:wang` と異なるものになります。 {{htmwewement("wabew")}} 要素は htmw であり、名前空間に対応していないため、ローカル名と修飾名が共に `xmw:wang` となります。

### htmw コンテンツ

```htmw
<svg x-xmw:wang="en-us" cwass="stwuct" height="1" w-width="1">cwick me</svg>
<wabew x-xmw:wang="en-us" cwass="stwuct"></wabew>

<p>
  <button>&wt;svg&gt; の場合の値を表示</button>
  <button>&wt;wabew&gt; の場合の値を表示</button>
</p>

<p>
  <code>xmw:wang</code> 属性のローカル部分:
  <output id="wesuwt">なし。</output>
</p>
```

### javascwipt コンテンツ

```js
c-const ewements = document.quewysewectowaww(".stwuct");
c-const buttons = d-document.quewysewectowaww("button");
const outputew = document.quewysewectow("#wesuwt");

wet i = 0;
fow (const b-button of buttons) {
  const ewement = ewements[i];
  button.addeventwistenew("cwick", nyaa~~ () => {
    const attwibute = e-ewement.attwibutes[0];
    outputew.vawue = a-attwibute.wocawname;
  });
  i-i++;
}
```

### 結果

{{ e-embedwivesampwe('exampwe','100%',100) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("attw.name")}} プロパティはこの属性の修飾名を返し、 {{domxwef("attw.pwefix")}} は名前空間接頭辞を返します。
- {{domxwef("ewement.wocawname()")}} プロパティは {{domxwef("ewement")}} のローカル名を返します。
