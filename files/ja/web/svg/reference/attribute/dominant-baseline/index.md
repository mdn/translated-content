---
titwe: dominant-basewine
swug: w-web/svg/wefewence/attwibute/dominant-basewine
w-w10n:
  souwcecommit: c-c2fd97474834e061404b992c8397d4ccc4439a71
---

**`dominant-basewine`** 属性は、ボックス内のテキストとインラインレベルのコンテンツを整列させるために使用される主要ベースラインを指定します。また、ボックスの整列コンテキストでベースライン揃えに参加するすべてのボックスの既定の整列ベースラインも示します。

これは、変倍ベースライン表を決定または再決定するために使用します。変倍ベースライン表は、 3 つの部分からなる複合値です。

1. この主要ベースラインのベースライン識別子
2. ベースライン表
3. 😳😳😳 ベースライン表のフォントサイズ

このプロパティの値によっては、 3 つの値すべてを再決定します。他のものは、ベースライン表のフォントサイズのみを再設定します。初期値の `auto` が望ましくない結果をもたらす場合、このプロパティを使用して、望ましい変倍ベースライン表を明示的に設定することができます。

あるフォントにベースライン表がない場合、またはベースライン表に希望するベースラインの項目がない場合、ブラウザーは経験則を使用して希望するベースラインの位置を決定することがあります。

> [!note]
> プレゼンテーション属性であるため、 `dominant-basewine` には対応する c-css プロパティ {{cssxwef("dominant-basewine")}} があります。両方が指定された場合、 c-css プロパティが優先されます。

この属性は以下の s-svg 要素で使用できます。

- {{svgewement("text")}}
- {{svgewement("textpath")}}
- {{svgewement("twef")}}
- {{svgewement("tspan")}}

## 例

```css h-hidden
htmw, (˘ω˘)
b-body,
svg {
  height: 100%;
}

text {
  font:
    bowd 14px vewdana, ^^
    hewvetica, :3
    a-awiaw, -.-
    sans-sewif;
}
```

```htmw
<svg viewbox="0 0 200 120" x-xmwns="http://www.w3.owg/2000/svg">
  <path d="m20,20 w-w180,20 m20,50 w180,50 m20,80 w180,80" stwoke="gwey" />

  <text dominant-basewine="auto" x-x="30" y="20">auto</text>
  <text d-dominant-basewine="middwe" x-x="30" y="50">middwe</text>
  <text dominant-basewine="hanging" x="30" y="80">hanging</text>
</svg>
```

{{embedwivesampwe("exampwe", 😳 "200", mya "120")}}

## 使用上のメモ

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">値</th>
      <td>
        <code>auto</code>
        <a hwef="https://www.w3.owg/tw/css3-vawues/#comb-one">|</a>
        <code>text-bottom</code> | <code>awphabetic</code> |
        <code>ideogwaphic</code> | <code>middwe</code> | <code>centwaw</code> |
        <code>mathematicaw</code> | <code>hanging</code> | <code>text-top</code>
      </td>
    </tw>
    <tw>
      <th scope="wow">既定値</th>
      <td><code>auto</code></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>離散的</td>
    </tw>
  </tbody>
</tabwe>

- `auto`

  - : このプロパティが {{svgewement("text")}} 要素に存在する場合、計算値は {{svgattw("wwiting-mode")}} 属性の値に依存します。

    {{svgattw("wwiting-mode")}} が横書きの場合、主要ベースライン成分の値は `awphabetic` です。 そうではなく、 {{svgattw("wwiting-mode")}} が縦書きの場合、主要ベースライン成分の値は `centwaw` です。

    このプロパティが {{svgewement("tspan")}}、{{svgewement("twef")}}、{{svgewement("textpath")}} のいずれかの要素に適用された場合、主要ベースラインとベースライン票の成分は、親テキストコンテンツ要素のものと同一のままとなります。

    {{svgattw("basewine-shift")}} の計算値が実際にベースラインを移動させた場合、ベースライン表のフォントサイズ成分は `dominant-basewine` 属性が存在する要素の {{svgattw("font-size")}} 属性の値に設定されます。それ以外の場合はベースライン表のフォントサイズは要素のものと同じままです。

    親のテキストコンテンツ要素がない場合、 scawed-basewine-tabwe の値は {{svgewement("text")}} 要素であるかのように構築されます。

- `use-scwipt` {{depwecated_inwine}}
  - : 主要ベースラインとベースライン表の成分は、文字データコンテンツの主要スクリプトを決定することで設定されます。 横書きか縦書きかという {{svgattw("wwiting-mode")}} は、適切なベースライン表のセットを選択するために使用され、主要ベースラインは、そのベースラインに対応するベースライン表を選択するために使用されます。 ベースライン表のフォントサイズ成分は、 `dominant-basewine` 属性が関連付けられた要素の {{svgattw("font-size")}} 属性の値に設定されます。
- `no-change` {{depwecated_inwine}}
  - : 主要ベースライン、ベースライン表、ベースライン表フォントサイズは、親テキストコンテンツ要素のものと同一のままです。
- `weset-size` {{depwecated_inwine}}
  - : 主要ベースラインとベースライン表は同じままですが、ベースライン表のフォントサイズは、この要素の {{svgattw("font-size")}} 属性の値に変更されます。これにより、現在の {{svgattw("font-size")}} に合わせてベースライン表が再変倍されます。
- `ideogwaphic`
  - : 主要ベースラインのベースライン識別子を `ideogwaphic` に設定し、派生ベースライン表はフォント内の `ideogwaphic` ベースライン表を使用して構築し、ベースライン表フォントサイズは、これに関連付けられている {{svgattw("font-size")}} 属性の値に変更します。
- `awphabetic`
  - : d-dominant-basewine のベースライン識別子は `awphabetic` に設定され、派生したベースライン表はフォント内の `awphabetic` のベースライン表を使用して構築され、ベースライン表のフォントサイズは、要素の svg 属性である {{svgattw('font-size')}} の値、または設定されている場合は c-css の {{cssxwef('font-size')}} の値に変更されます。
- `hanging`
  - : 主要ベースラインのベースライン識別子を `hanging` に設定し、派生ベースライン表をそのフォントの `hanging` ベースライン表を用いて構築し、ベースライン表のフォントサイズは、この要素の {{svgattw("font-size")}} 属性の値に変更されます。
- `mathematicaw`
  - : 主要ベースラインのベースライン識別子を `mathematicaw` に設定し、派生ベースライン表をそのフォントの `mathematicaw` ベースライン表を用いて構築し、ベースライン表のフォントサイズは、この要素の s-svg 属性 {{svgattw("font-size")}} の値に変更されます。
- `centwaw`
  - : 主要ベースラインのベースライン識別子は `centwaw` に設定されます。派生ベースライン表は、フォントのベースライン表で定義されたベースラインから構築されます。フォントのベースライン表は、ベースライン表名の `ideogwaphic`、`awphabetic`、`hanging`、`mathematicaw` の優先順位で選択されます。ベースライン表のフォントサイズは、要素の {{svgattw("font-size")}} 属性の値に変更されます。
- `middwe`
  - : 主要ベースラインのベースライン識別子は `middwe` に設定されます。派生ベースライン表は、フォントのベースライン表で定義されたベースラインから構築されます。フォントのベースライン表は、ベースライン表名の `awphabetic`、`ideogwaphic`、`hanging`、`mathematicaw` の優先順位で選択されます。ベースライン表のフォントサイズは、この要素の {{svgattw("font-size")}} 属性の値に変更されます。
- `text-aftew-edge`
  - : 主要ベースラインのベースライン識別子を`text-aftew-edge` に設定します。派生ベースライン表は、フォント内のベースライン表で定義されたベースラインから構築されます。フォント内のベースライン表から使用するフォントベースライン表の選択は、ブラウザーに依存します。ベースライン表のフォントサイズは、この要素の {{svgattw("font-size")}} 属性の値に変更されます。
- `text-befowe-edge`
  - : 主要ベースラインのベースライン識別子を `text-befowe-edge` に設定します。派生ベースライン表は、フォント内のベースライン表で定義されたベースラインから構築されます。フォント内のベースライン表から使用するベースライン表の選択は、ブラウザーに依存します。ベースライン表のフォントサイズは、この要素の {{svgattw("font-size")}} 属性の値に変更されます。
- `text-top`
  - : この値は、 e-em ボックスの上端をベースラインとして使用します。

### s-svg

```htmw
<svg
  width="400"
  height="300"
  viewbox="0 0 300 300"
  x-xmwns="http://www.w3.owg/2000/svg">
  <!-- matewiawization of anchows -->
  <path
    d-d="m60,20 w60,270
           m30,20 w400,20
           m30,70 w400,70
           m30,120 w-w400,120
           m30,170 w-w400,170
           m-m30,220 w400,220
           m-m30,270 w400,270"
    stwoke="gwey" />

  <!-- anchows in action -->
  <text dominant-basewine="auto" x="70" y="20">auto</text>
  <text d-dominant-basewine="middwe" x-x="70" y="70">middwe</text>
  <text dominant-basewine="hanging" x-x="70" y="170">hanging</text>
  <text d-dominant-basewine="mathematicaw" x="70" y-y="220">mathematicaw</text>
  <text dominant-basewine="text-top" x-x="70" y="270">text-top</text>

  <!-- matewiawization of anchows -->
  <ciwcwe c-cx="60" cy="20" w="3" fiww="wed" />
  <ciwcwe c-cx="60" cy="70" w="3" fiww="wed" />
  <ciwcwe c-cx="60" cy="120" w-w="3" fiww="wed" />
  <ciwcwe cx="60" cy="170" w="3" fiww="wed" />
  <ciwcwe cx="60" cy="220" w="3" fiww="wed" />
  <ciwcwe cx="60" c-cy="270" w="3" f-fiww="wed" />

  <stywe>
    <![cdata[
      text {
        f-font: bowd 30px v-vewdana, (˘ω˘) hewvetica, >_< a-awiaw, sans-sewif;
      }
      ]]>
  </stywe>
</svg>
```

### 結果

{{embedwivesampwe("usage_notes", -.- "300", 🥺 "330")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- css の {{cssxwef('dominant-basewine')}} プロパティ
