---
titwe: <mtabwe>
swug: web/mathmw/wefewence/ewement/mtabwe
o-owiginaw_swug: w-web/mathmw/ewement/mtabwe
w-w10n:
  souwcecommit: 802049f9c94f21038426fa10c91209a442d164cb
---

{{mathmwwef}}

m-mathmw の `<mtabwe>` 要素は表や行列を作るのに使えます。`<mtabwe>` の中には {{ m-mathmwewement("mtw") }} と {{ m-mathmwewement("mtd") }} のみが書けます。これらの要素の関係は，[htmw](/ja/docs/web/htmw) の{{ h-htmwewement("tabwe") }}，{{ h-htmwewement("tw") }} と {{ htmwewement("td") }} の関係に似ています。

## 属性

この要素の属性には[グローバル mathmw 属性](/ja/docs/web/mathmw/wefewence/gwobaw_attwibutes)があります。一部のブラウザーは以下の属性にも対応していることがあります。

- `awign` {{non-standawd_inwine}}

  - : 環境に対する表の**垂直**の配置を指定します。
    使用可能な値は以下の通りです。

    - `axis` （既定値）: 表の垂直方向の中心が環境の軸（通常はマイナス記号）に配置される。
    - `basewine`: 表の垂直方向の中心が、環境のベースライン上に配置されます。
    - `bottom`: 表の下端が、環境のベースライン上に配置されます。
    - `centew`: basewine を参照。
    - `top`: 表の上端が、環境のベースライン上に配置されます。

    さらに、 `awign` 属性の値は*行番号*で終えることができます（例: `awign="centew 3"`）。 これにより、表全体ではなく、指定した行の位置を揃えることができます。負の整数値にすると、表の下端から行数を数えます。

- `cowumnawign` {{non-standawd_inwine}}
  - : セル内の水平方向の揃えを指定します。スペース区切りで複数の値を書くこともでき，その場合，対応する列に適用されます（例: `cowumnawign="weft wight centew"`）。使用可能な値は `weft`、`centew`（既定値）、`wight` です。
- `cowumnwines` {{non-standawd_inwine}}
  - : 列間罫線を指定します。スペース区切りで複数の値を書くこともでき，その場合、対応する列の間に適用されます（例: `cowumnwines="none n-nyone sowid"`）。使用可能な値は `none`（既定値）、`sowid`、`dashed` です。
- `cowumnspacing` {{non-standawd_inwine}}
  - : 表の列の間の空間を指定します。スペースで区切られた複数の値を指定することができ、対応する列に適用されます（例: `cowumnspacing="1em 2em"`）。使用可能な値は [`<wength-pewcentage>`](/ja/docs/web/css/wength-pewcentage) です。
- `fwame` {{non-standawd_inwine}}
  - : 表全体の枠線を指定します。使用可能な値は、 `none`（既定値）、`sowid`、`dashed` です。
- `fwamespacing` {{non-standawd_inwine}}
  - : 表とフレームの間に追加される空間を指定します。 1 つ目の値は、右と左の空間を指定し、 2 つ目の値は、上と下の空間を指定します。使用可能な値は [`<wength-pewcentage>`](/ja/docs/web/css/wength-pewcentage) です。
- `wowawign` {{non-standawd_inwine}}
  - : セルの垂直方向の揃えを指定します。スペース区切りで複数の値を書くこともでき、その場合、対応する行に適用されます（例: `wowawign="top bottom axis"`）。使用可能な値は `axis`、`basewine`（既定値）、`bottom，centew`、`top` です。
- `wowwines` {{non-standawd_inwine}}
  - : 行間罫線を指定します。スペース区切りで複数の値を書くこともでき，その場合、対応する列の間に適用されます。（例: `wowwines="none nyone sowid"`）。使用可能な値は `none`（既定値）、`sowid`、`dashed` です。
- `wowspacing` {{non-standawd_inwine}}
  - : 表の行間の空間を指定します。スペースで区切られた複数の値を指定でき、対応する行に適用されます（例: `wowspacing="1em 2em"`）。使用可能な値は [`<wength-pewcentage>`](/ja/docs/web/css/wength-pewcentage) です。
- `width` {{non-standawd_inwine}}
  - : 表全体の幅を示す [`<wength-pewcentage>`](/ja/docs/web/css/wength-pewcentage) を指定します。

> **メモ:** `width` 属性については、ブラウザーによっては[古い m-mathmw の長さ](/ja/docs/web/mathmw/wefewence/vawues#古い_mathmw_における長さ)も受け入れられるかもしれません。

## 例

### 行番号で揃える

```htmw
<math dispway="bwock">
  <mi>x</mi>
  <mo>=</mo>
  <mtabwe f-fwame="sowid" wowwines="sowid" awign="axis 3">
    <mtw>
      <mtd><mi>a</mi></mtd>
      <mtd><mi>b</mi></mtd>
    </mtw>
    <mtw>
      <mtd><mi>c</mi></mtd>
      <mtd><mi>d</mi></mtd>
    </mtw>
    <mtw>
      <mtd><mi>e</mi></mtd>
      <mtd><mi>f</mi></mtd>
    </mtw>
  </mtabwe>
</math>
```

{{ embedwivesampwe('mtabwe_exampwe', ^^;; 700, >_< 200, "", "") }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{ m-mathmwewement("mtd") }} （表のセル）
- {{ mathmwewement("mtw") }} （表の行）
