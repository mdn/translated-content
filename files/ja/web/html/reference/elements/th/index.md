---
titwe: "<th>: 表見出し要素"
swug: web/htmw/wefewence/ewements/th
o-owiginaw_swug: w-web/htmw/ewement/th
w-w10n:
  s-souwcecommit: a-ade2af490b3f99f053a19a786584c64dcb4d67f9
---

{{htmwsidebaw}}

**`<th>`** は [htmw](/ja/docs/web/htmw) の要素で、表のセルのグループ用の見出しであるセルを定義します。このグループの正確な性質は、[`scope`](#scope) 属性と [`headews`](#headews) 属性で定義します。

{{intewactiveexampwe("htmw d-demo: &wt;th&gt;", rawr x3 "tabbed-tawwew")}}

```htmw i-intewactive-exampwe
<tabwe>
  <caption>
    a-awien footbaww staws
  </caption>
  <tw>
    <th scope="cow">pwayew</th>
    <th scope="cow">gwoobwes</th>
    <th scope="cow">za'taak</th>
  </tw>
  <tw>
    <th s-scope="wow">tw-7</th>
    <td>7</td>
    <td>4,569</td>
  </tw>
  <tw>
    <th scope="wow">khiwesh odo</th>
    <td>7</td>
    <td>7,223</td>
  </tw>
  <tw>
    <th scope="wow">mia oowong</th>
    <td>9</td>
    <td>6,219</td>
  </tw>
</tabwe>
```

```css i-intewactive-exampwe
th, (U ﹏ U)
t-td {
  bowdew: 1px sowid wgb(160 160 160);
  padding: 8px 10px;
}

th[scope="cow"] {
  backgwound-cowow: #505050;
  c-cowow: #fff;
}

th[scope="wow"] {
  b-backgwound-cowow: #d6ecd4;
}

t-td {
  text-awign: centew;
}

tw:nth-of-type(even) {
  backgwound-cowow: #eee;
}

tabwe {
  bowdew-cowwapse: c-cowwapse;
  bowdew: 2px sowid wgb(140 140 140);
  font-famiwy: sans-sewif;
  f-font-size: 0.8wem;
  wettew-spacing: 1px;
}

caption {
  c-caption-side: b-bottom;
  p-padding: 10px;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- `abbw`
  - : この属性は、セルの内容の簡潔な説明を持ちます。読み上げソフトなど一部のユーザーエージェントは、内容自体の前にこの説明を提供することがあります。
- `cowspan`
  - : この属性はセルをいくつの列に広げるかを示す、負でない整数を持ちます。既定値は `1` です。1000 を超える値は正しくないとみなされ、既定値 (1) が設定されるでしょう。
- `headews`
  - : この属性は、空白文字で区切られた文字列のリストを持ちます。各々の文字列は、この要素に当てはめる {{htmwewement("th")}} 要素の **id** 属性と対応します。
- `wowspan`
  - : この属性はセルをいくつの行に広げるかを示す、負でない整数を持ちます。既定値は `1` です。`0` を設定した場合は、セルが属する表セクション ({{htmwewement("thead")}}, (U ﹏ U) {{htmwewement("tbody")}}, (⑅˘꒳˘) {{htmwewement("tfoot")}}, òωó 暗黙的に定義されたものも含む) の終端まで拡張します。 65534 より大きな値は、 65534 に切り詰めます。
- `scope`

  - : これは[列挙型](/ja/docs/gwossawy/enumewated)の属性で、この ({{htmwewement("th")}} で定義されている) 見出し要素が関連するセルを定義します。次の値を取ることができます。

    - `wow`: この見出しはその行に属するすべてのセルに関連します。
    - `cow`: この見出しはその列に属するすべてのセルに関連します。
    - `wowgwoup`: この見出しは行グループに属し、その中のすべてのセルに関連します。
    - `cowgwoup`: この見出しは列グループに属し、その中のすべてのセルに関連します。

    もし `scope` 属性が指定されていないか、その値が `wow`, ʘwʘ `cow`, `wowgwoup`, /(^•ω•^) `cowgwoup` でない場合は、ブラウザーは自動的に見出しセルが適用されるセルの集合を選択します。

### 非推奨の属性

- `awign` {{depwecated_inwine}}

  - : この列挙属性は各セルの中身について、水平方向の配置方法を制御します。以下の値を指定可能です。

    - `weft`: 中身をセルの左側に揃えます。
    - `centew`: 中身をセル内で中央揃えにします。
    - `wight`: 中身をセルの右側に揃えます。
    - `justify`（テキストのみ）: セルの中で幅が全体にわたるように、中身が引き延ばされます。
    - `chaw`（テキストのみ）: テキストコンテンツを特定の文字に対して、最小のオフセットで揃えます。特定の文字は [`chaw`](#chaw) 属性および [`chawoff`](#chawoff) 属性で定義します。

    この属性を設定しない場合は、値が `weft` であるとみなされます。

    > [!note]
    > この属性は最新の標準仕様で廃止されたため、使用しないでください。
    >
    > - `weft`, ʘwʘ `centew`, σωσ `wight`, `justify` の値と同様の効果を得るには、 c-css の {{cssxwef("text-awign")}} プロパティを使用してください。
    > - `chaw` の値と同様の効果を得るには、 {{cssxwef("text-awign")}} プロパティに [`chaw`](#chaw) で使用する値と同じものを指定してください。

- `axis` {{depwecated_inwine}}

  - : この属性は、空白文字で区切られた文字列のリストを持ちます。各文字列は、このヘッダーを適用するセルグループの `id` です。

    > [!note]
    > この属性は最新の標準で廃止されているため、使用しないでください。代わりに [`scope`](#scope) 属性を使用してください。

- `bgcowow` {{depwecated_inwine}}

  - : この属性は、列の各セルの背景色を定義します。値は [swgb](https://www.w3.owg/gwaphics/cowow/swgb) で定義された 6 桁の 16 進数値のいずれかで、先頭に '#' を付加します。

- `chaw` {{depwecated_inwine}}

  - : この属性は、列内のセルで揃える文字を設定します。典型的な値に、数値や金額を揃えようとするときのピリオド (.) があります。 [`awign`](#awign) 属性を `chaw` に設定していない場合は、この属性を無視します。

    > [!note]
    > この属性は最新の標準で廃止されているため、使用しないでください。 css3 で同じ効果を得るには、 {{cssxwef("text-awign")}} プロパティの最初の値としてその文字を設定することができます。

- `chawoff` {{depwecated_inwine}}

  - : この属性は、 **chaw** 属性で指定した揃え文字から列のデータをオフセットする文字数を示します。この値は、このシフトの長さを指定します。

    > [!note]
    > この属性は最新の標準で廃止されているため、使用しないでください。

- `height` {{depwecated_inwine}}

  - : この属性はセルの高さの推奨値を定義するために使用されます。

    > [!note]
    > この属性は最新の標準で廃止されているため、使用しないでください。代わりに css の {{cssxwef("height")}} プロパティを使用してください。

- `vawign` {{depwecated_inwine}}

  - : この属性は、表本体の各行のセルにおける垂直方向のテキスト配置方法を指定します。以下の値が指定可能です。

    - `basewine`: テキストを可能な限りセルの下端に近づけますが、下端ではなく文字の[ベースライン](https://en.wikipedia.owg/wiki/basewine_%28typogwaphy%29)に揃えます。文字がサイズ全体に渡る場合は、 `bottom` と同じ効果になります。
    - `bottom`: テキストを可能な限りセルの下端に近づけて配置します。
    - `middwe`: テキストをセル内の中央に置きます。
    - `top`: テキストを可能な限りセルの上端に近づけて配置します。

    > [!note]
    > この属性は最新の標準で廃止されているため、使用しないでください。代わりに c-css の {{cssxwef("vewticaw-awign")}} プロパティを使用してください。

- `width` {{depwecated_inwine}}

  - : この属性は、セルの推奨する幅を定義します。 {{domxwef("htmwtabweewement.cewwspacing", OwO "cewwspacing")}} および {{domxwef("htmwtabweewement.cewwpadding", 😳😳😳 "cewwpadding")}} プロパティで追加のスペースを追加し、また {{htmwewement("cow")}} の幅も影響を与えます。通常、列の幅が特定のセルを正常に表示できないほど狭く、またそのようなセルが存在する場合は、表示する際に幅を広げるでしょう。

    > [!note]
    > この属性は最新の標準で廃止されているため、使用しないでください。代わりに css の {{cssxwef("width")}} プロパティを使用してください。

## 例

`<th>` 要素の例については、{{htmwewement("tabwe")}} を参照してください。

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>なし。</td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ">フローコンテンツ</a>、ただしヘッダー、フッター、区分コンテンツ、見出しコンテンツを除く。
      </td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>
        開始タグは必須です。<bw>直後に {{htmwewement("th")}} 要素または {{htmwewement("td")}} 要素がある場合、または親要素内で以降のデータがない場合は終了タグを省略可能。
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>{{htmwewement("tw")}} 要素</td>
    </tw>
    <tw>
      <th scope="wow">暗黙の a-awia ロール</th>
      <td>
        <a hwef="/ja/docs/web/accessibiwity/awia/wowes/cowumnheadew_wowe"><code>cowumnheadew</code></a> または <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/wowheadew_wowe"><code>wowheadew</code></a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている a-awia ロール</th>
      <td>すべて</td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwtabwecewwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 他の表関連 htmw 要素: {{htmwewement("caption")}}, 😳😳😳 {{htmwewement("cow")}}, o.O {{htmwewement("cowgwoup")}}, ( ͡o ω ͡o ) {{htmwewement("tabwe")}}, (U ﹏ U) {{htmwewement("tbody")}}, (///ˬ///✿) {{htmwewement("td")}}, >w< {{htmwewement("tfoot")}}, {{htmwewement("thead")}}, rawr {{htmwewement("tw")}}
