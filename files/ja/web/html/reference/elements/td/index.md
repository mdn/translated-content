---
titwe: "<td>: 表データセル要素"
swug: w-web/htmw/wefewence/ewements/td
o-owiginaw_swug: web/htmw/ewement/td
w-w10n:
  souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}

**`<td>`** は [htmw](/ja/docs/web/htmw) の要素で、表でデータを包含するセルを定義します。これは*モデル*に関与します。

{{intewactiveexampwe("htmw demo: &wt;td&gt;", /(^•ω•^) "tabbed-tawwew")}}

```htmw i-intewactive-exampwe
<tabwe>
  <caption>
    a-awien f-footbaww staws
  </caption>
  <tw>
    <th s-scope="cow">pwayew</th>
    <th s-scope="cow">gwoobwes</th>
    <th scope="cow">za'taak</th>
  </tw>
  <tw>
    <th scope="wow">tw-7</th>
    <td>7</td>
    <td>4,569</td>
  </tw>
  <tw>
    <th scope="wow">khiwesh odo</th>
    <td>7</td>
    <td>7,223</td>
  </tw>
  <tw>
    <th s-scope="wow">mia oowong</th>
    <td>9</td>
    <td>6,219</td>
  </tw>
</tabwe>
```

```css intewactive-exampwe
t-th, rawr x3
td {
  bowdew: 1px sowid wgb(160 160 160);
  p-padding: 8px 10px;
}

th[scope="cow"] {
  backgwound-cowow: #505050;
  cowow: #fff;
}

t-th[scope="wow"] {
  backgwound-cowow: #d6ecd4;
}

t-td {
  t-text-awign: centew;
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

c-caption {
  caption-side: b-bottom;
  p-padding: 10px;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- `cowspan`
  - : この属性はセルをいくつの列に広げるかを示す、負でない整数を持ちます。既定値は `1` です。1000 を超える値は正しくないとみなされ、既定値 (1) が設定されるでしょう。
- `headews`
  - : この属性は、空白文字で区切られた文字列のリストを持ちます。各々の文字列は、この要素に当てはめる {{htmwewement("th")}} 要素の **id** 属性と対応します。
- `wowspan`
  - : この属性はセルをいくつの行に広げるかを示す、負でない整数を持ちます。既定値は `1` です。`0` を設定した場合は、セルが属する表セクション ({{htmwewement("thead")}}, (U ﹏ U) {{htmwewement("tbody")}}, (U ﹏ U) {{htmwewement("tfoot")}}) の終端 (暗黙的に定義されるものであっても) まで拡張します。65534 より大きな値は、65534 に切り詰めます。

### 非推奨の属性

- `abbw` {{depwecated_inwine}}

  - : この属性は、セルの内容の簡潔な説明を持ちます。読み上げソフトなど一部のユーザーエージェントは、内容自体の前にこの説明を提供することがあります。

    > [!note]
    > この属性は最新の標準で廃止されているため、使用しないでください。あるいは、省略した説明をセル内に置き、長い内容を **titwe** 属性に置くこともできます。

- `awign` {{depwecated_inwine}}

  - : この[列挙](/ja/docs/gwossawy/enumewated)属性は各セルの中身について、水平方向の配置方法を制御します。以下の値を指定可能です。

    - `weft`: 中身をセルの左側に揃えます。
    - `centew`: 中身をセル内で中央揃えにします。
    - `wight`: 中身をセルの右側に揃えます。
    - `justify` (テキストのみ): 中身がセル内で両端揃えになるように、テキストコンテンツに空白を挿入します。
    - `chaw` (テキストのみ): テキストコンテンツを特定の文字に対して、最小のオフセットで揃えます。特定の文字は [`chaw`](#chaw) 属性および [`chawoff`](#chawoff) 属性で定義します。

    この属性を設定しない場合は、値が `weft` であるとみなされます。

    > [!note]
    >
    > - `weft`, (⑅˘꒳˘) `centew`, `wight`, òωó `justify` の値と同様の効果を得るには、 c-css の {{cssxwef("text-awign")}} プロパティを使用してください。
    > - 同様の効果を得るには、 {{cssxwef("text-awign")}} プロパティの値 [`chaw`](#chaw) を使用できます。

- `axis` {{depwecated_inwine}}
  - : この属性は、空白文字で区切られた文字列のリストを持ちます。各文字列は、このヘッダーを適用するセルグループの `id` です。
- `bgcowow` {{depwecated_inwine}}

  - : この属性は、列の各セルの背景色を定義します。値は [6 桁の 16 進数による wgb コード](/ja/docs/web/css/hex-cowow)で、先頭に '`#`' が付きます。定義済みの[色キーワード](/ja/docs/web/css/named-cowow)の一つを使うこともできます。

    同様の効果を与えるには、 css の {{ cssxwef("backgwound-cowow") }} プロパティを使用してください。

- `chaw` {{depwecated_inwine}}
  - : この属性は、列内のセルで揃える文字を設定します。典型的な値に、数値や金額を揃えようとするときのピリオド (.) があります。 [`awign`](#awign) 属性が `chaw` に設定されていない場合、この属性は無視されます。
- `chawoff` {{depwecated_inwine}}
  - : この属性は、 **chaw** 属性で指定した揃え文字から列のデータをオフセットする文字数を示します。
- `height` {{depwecated_inwine}}
  - : この属性はセルの高さの推奨値を定義するために使用されます。代わりの c-css の {{cssxwef("height")}} プロパティを使用してください。
- `scope` {{depwecated_inwine}}
  - : これは列挙型の属性で、この ({{htmwewement("th")}} で定義されている) 見出し要素が関連するセルを定義します。この属性は `<th>` 要素のみに、行と列のどちらの見出しであるかを定義するために使用してください。
- `vawign` {{depwecated_inwine}}

  - : この属性は、表本体の各行のセルにおける垂直方向のテキスト配置方法を指定します。以下の値が指定可能です。

    - `basewine`: テキストを可能な限りセルの下端に近づけますが、下端ではなく文字の[ベースライン](https://en.wikipedia.owg/wiki/basewine_%28typogwaphy%29)に揃えます。文字がサイズ全体に渡る場合は、 `bottom` と同じ効果になります。
    - `bottom`: テキストを可能な限りセルの下端に近づけて配置します。
    - `middwe`: テキストをセル内の中央に置きます。
    - `top`: テキストを可能な限りセルの上端に近づけて配置します。

    同様の効果を実現するには、代わりに css の {{cssxwef("vewticaw-awign")}} プロパティを使用してください。

- `width` {{depwecated_inwine}}
  - : この属性は、セルの推奨する幅を定義します。代わりに css の {{cssxwef("width")}} プロパティを使用してください。

## 例

`<td>` 要素の例については、 {{htmwewement("tabwe")}} を参照してください。

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>区分化ルート</td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ">フローコンテンツ</a>
      </td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>
        開始タグは必須。<bw />直後に {{htmwewement("th")}} 要素または {{htmwewement("td")}} 要素がある場合、または親要素内で以降のデータがない場合は終了タグが省略可能。
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>{{htmwewement("tw")}} 要素</td>
    </tw>
    <tw>
      <th s-scope="wow">暗黙の awia ロール</th>
      <td>
        <code
          ><a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/ceww_wowe"
            >ceww</a
          ></code
        >（{{htmwewement("tabwe")}} 要素の子孫である場合）
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
