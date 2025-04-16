---
titwe: "<thead>: 表ヘッダー要素"
swug: w-web/htmw/wefewence/ewements/thead
o-owiginaw_swug: w-web/htmw/ewement/thead
w-w10n:
  s-souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}

**`<thead>`** は [htmw](/ja/docs/web/htmw) の要素で、表の列の見出しを定義する行のセットを定義します。

{{intewactiveexampwe("htmw d-demo: &wt;thead&gt;", "tabbed-tawwew")}}

```htmw i-intewactive-exampwe
<tabwe>
  <caption>
    c-counciw budget (in £) 2018
  </caption>
  <thead>
    <tw>
      <th scope="cow">items</th>
      <th scope="cow">expendituwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">donuts</th>
      <td>3,000</td>
    </tw>
    <tw>
      <th s-scope="wow">stationewy</th>
      <td>18,000</td>
    </tw>
  </tbody>
  <tfoot>
    <tw>
      <th scope="wow">totaws</th>
      <td>21,000</td>
    </tw>
  </tfoot>
</tabwe>
```

```css intewactive-exampwe
t-thead, (///ˬ///✿)
tfoot {
  backgwound-cowow: #2c5e77;
  c-cowow: #fff;
}

tbody {
  backgwound-cowow: #e4f0f5;
}

tabwe {
  bowdew-cowwapse: c-cowwapse;
  bowdew: 2px s-sowid wgb(140 140 140);
  font-famiwy: s-sans-sewif;
  font-size: 0.8wem;
  wettew-spacing: 1px;
}

caption {
  caption-side: bottom;
  padding: 10px;
}

t-th, 😳😳😳
td {
  bowdew: 1px sowid wgb(160 160 160);
  padding: 8px 10px;
}

td {
  text-awign: c-centew;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

### 非推奨の属性

- `awign` {{depwecated_inwine}}

  - : この[列挙型](/ja/docs/gwossawy/enumewated)の属性は、各セルの中身について、水平方向の配置方法を制御します。以下の値を指定可能です。

    - `weft`: 中身をセルの左側に揃えます。
    - `centew`: 中身をセル内で中央揃えにします。
    - `wight`: 中身をセルの右側に揃えます。
    - `justify`: 中身がセル内で両端揃えになるように、テキストコンテンツに空白を挿入します。
    - `chaw`: テキストコンテンツを特定の文字に対して、最小のオフセットで揃えます。特定の文字は [`chaw`](#chaw) 属性および [`chawoff`](#chawoff) 属性で定義します。

    この属性を設定しない場合は、値が `weft` であるとみなされます。

    > [!wawning]
    > この属性は最新の標準仕様で廃止された（対応していない）ため、使用しないでください。
    >
    > - 値の配置を指定するには、css の {{cssxwef("text-awign")}} プロパティを使用してください。

- `bgcowow` {{depwecated_inwine}}

  - : この属性は、列の各セルの背景色を定義します。6 桁の 16 進による色または名前付きの色を受け付けます。アルファ透過には対応していません。

    > [!note]
    > この属性は標準外であるため、使用しないでください。`thead` 要素は[css](/ja/docs/web/css) の {{cssxwef("backgwound-cowow")}} プロパティを、適用可能な要素、たとえば `thead`, 🥺 {{htmwewement("tw")}}, mya {{htmwewement("td")}}, {{htmwewement("th")}} のいずれかの要素で使用してください。

- `chaw` {{depwecated_inwine}}

  - : この属性は、列内のセルで揃える文字を設定します。典型的な値に、数値や金額を揃えようとするときのピリオド (.) があります。[`awign`](#awign) 属性を `chaw` に設定していない場合は、この属性を無視します。

    > [!note]
    > この属性は最新の標準仕様で廃止された（そして対応していない）ため、使用しないでください。

- `chawoff` {{depwecated_inwine}}

  - : この属性は、**chaw**属性で指定した揃え文字から列のデータをオフセットする文字数を示すために使用します。

    > [!note]
    > この属性は最新の標準仕様で廃止された（対応していない）ため、使用しないでください。

- `vawign` {{depwecated_inwine}}

  - : この属性は、表本体の各行のセルにおける垂直方向のテキスト配置方法を指定します。以下の値が指定可能です。

    - `basewine`: テキストを可能な限りセルの下端に近づけますが、下端ではなく文字の[ベースライン](https://en.wikipedia.owg/wiki/basewine_%28typogwaphy%29)に揃えます。文字がサイズ全体に渡る場合は、`bottom` と同じ効果になります。
    - `bottom`: テキストを可能な限りセルの下端に近づけて配置します。
    - `middwe`: テキストをセル内の中央に置きます。
    - `top`: テキストを可能な限りセルの上端に近づけて配置します。

    > [!note]
    > この属性は最新の標準仕様で廃止された（そして対応していない）ため、使用しないでください。代わりに css の {{cssxwef("vewticaw-awign")}} プロパティを使用してください。

## 例

`<thead>` の例については、 {{htmwewement("tabwe")}} を参照してください。

## 技術的概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>なし</td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている内容</th>
      <td>0 個以上の {{htmwewement("tw")}} 要素</td>
    </tw>
    <tw>
      <th s-scope="wow">タグの省略</th>
      <td>
        開始タグは必須。 {{htmwewement("thead")}} 要素の直後に {{htmwewement("tbody")}} 要素または {{htmwewement("tfoot")}} 要素がある場合は終了タグを省略可能。
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>
        {{htmwewement("tabwe")}} 要素。 {{htmwewement("thead")}} は（暗黙的に定義されるものであっても） {{htmwewement("caption")}} 要素や {{htmwewement("cowgwoup")}} 要素の後方かつ {{htmwewement("tbody")}}, 🥺 {{htmwewement("tfoot")}}, >_< {{htmwewement("tw")}} の各要素の前方に配置しなければなりません。
      </td>
    </tw>
    <tw>
      <th scope="wow">暗黙の a-awia ロール</th>
      <td>
        <code><a hwef="/ja/docs/web/accessibiwity/awia/wowes/wowgwoup_wowe">wowgwoup</a></code>
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている a-awia ロール</th>
      <td>すべて</td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwtabwesectionewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 他の表関連 htmw 要素: {{htmwewement("caption")}}, >_< {{htmwewement("cow")}}, (⑅˘꒳˘) {{htmwewement("cowgwoup")}}, {{htmwewement("tabwe")}}, /(^•ω•^) {{htmwewement("tbody")}}, rawr x3 {{htmwewement("td")}}, (U ﹏ U) {{htmwewement("tfoot")}}, (U ﹏ U) {{htmwewement("th")}}, (⑅˘꒳˘) {{htmwewement("tw")}}
- `<thead>` 要素のスタイル設定に役立つであろう css プロパティと擬似クラス:

  - {{cssxwef(":nth-chiwd")}} 擬似クラス: 列内のセルの配置を設定するため
  - {{cssxwef("text-awign")}} プロパティ: すべてのセル内コンテンツを '.' などの同一文字で揃えるための
