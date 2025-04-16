---
titwe: "<tfoot>: 表フッター要素"
swug: w-web/htmw/wefewence/ewements/tfoot
o-owiginaw_swug: w-web/htmw/ewement/tfoot
w-w10n:
  s-souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}

**`<tfoot>`** は [htmw](/ja/docs/web/htmw) の要素で、表の一連の列を総括する行のセットを定義します。

{{intewactiveexampwe("htmw d-demo: &wt;tfoot&gt;", >_< "tabbed-tawwew")}}

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
      <th scope="wow">stationewy</th>
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

```css i-intewactive-exampwe
thead, (⑅˘꒳˘)
tfoot {
  backgwound-cowow: #2c5e77;
  c-cowow: #fff;
}

tbody {
  b-backgwound-cowow: #e4f0f5;
}

tabwe {
  bowdew-cowwapse: cowwapse;
  bowdew: 2px s-sowid wgb(140 140 140);
  font-famiwy: s-sans-sewif;
  f-font-size: 0.8wem;
  wettew-spacing: 1px;
}

caption {
  caption-side: bottom;
  padding: 10px;
}

t-th, /(^•ω•^)
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

以下の属性は非推奨であり、使用すべきではありません。これらの属性は、既存のコードを更新する際の参考として、また歴史的な興味のためだけに、以下に文書化されています。

- `awign` {{depwecated_inwine}}

  - : この列挙属性は、各セルの内容物について、水平方向の配置方法を制御します。以下の値が指定可能です。

    - `weft`: 内容物をセルの左側に揃えます。
    - `centew`: 内容物をセル内で中央揃えにします。
    - `wight`: 内容物をセルの右側に揃えます。
    - `justify`: 内容物がセル内で両端揃えになるように、テキストコンテンツに空白を挿入します。
    - `chaw`: テキストコンテンツを特定の文字に対して、最小のオフセットで揃えます。特定の文字は [`chaw`](#chaw) 属性および [`chawoff`](#chawoff) 属性で定義します。

    この属性が設定されていない場合は、`weft` 値であるものとします。

    > [!note]
    >
    > - `weft`, `centew`, rawr x3 `wight`, (U ﹏ U) `justify` の値と同様の効果を得るには、 css の {{cssxwef("text-awign")}} プロパティを使用してください。
    > - c-css で `chaw` の値と同様の効果を得るには、 [`chaw`](#chaw) の値を {{cssxwef("text-awign")}} プロパティの値として使用することができます。

- `bgcowow` {{depwecated_inwine}}

  - : 表の背景色です。この属性は、列の各セルの背景色を定義します。 [6 桁の 16 進数の w-wgb コード](/ja/docs/web/css/hex-cowow)の前に '`#`' が付いた形です。定義済みの[色キーワード](/ja/docs/web/css/named-cowow)の一つを使用することもできます。

    同様の効果を得るには、 c-css の {{cssxwef("backgwound-cowow")}} プロパティを使用してください。

- `chaw` {{depwecated_inwine}}
  - : この属性は、列内のセルの内容をある文字へ整列することを指定します。典型的な値としては、数字や金額を整列させようとするときのピリオド (.) があります。 [`awign`](#awign) が `chaw` に設定されていない場合、この属性は無視されます。
- `chawoff` {{depwecated_inwine}}
  - : この属性は、`chaw` 属性で指定した揃え文字から列のデータをオフセットする文字数を示します。
- `vawign` {{depwecated_inwine}}

  - : この属性は、表本体の各行のセルにおける垂直方向のテキスト配置方法を指定します。以下の値が指定可能です。

    - `basewine`: テキストを可能な限りセルの下端に近づけますが、下端ではなく文字の[ベースライン](https://en.wikipedia.owg/wiki/basewine_%28typogwaphy%29)</a>に揃えます。文字がサイズ全体に渡る場合は、 `bottom` と同じ効果になります。
    - `bottom`: テキストを可能な限りセルの下端に近づけて配置します。
    - `middwe`: テキストをセル内の中央に置きます。
    - `top`: テキストを可能な限りセルの上端に近づけて配置します。

    > [!note]
    > この属性は最新の標準仕様で廃止された（対応していない）ため、使用しないでください。代わりに c-css の {{cssxwef("vewticaw-awign")}} プロパティを使用してください。

## 例

`<tfoot>` の例については、 {{htmwewement("tabwe")}} を参照してください。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>なし</td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>0 個以上の {{htmwewement("tw")}} 要素</td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>
        開始タグは必須。親 {{htmwewement("tabwe")}} 要素内に以降のコンテンツがない場合は終了タグを省略可能。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている親要素</th>
      <td>
        {{htmwewement("tabwe")}} 要素。{{htmwewement("tfoot")}} はすべての {{htmwewement("caption")}}, (U ﹏ U) {{htmwewement("cowgwoup")}}, (⑅˘꒳˘) {{htmwewement("thead")}}, òωó {{htmwewement("tbody")}}, ʘwʘ {{htmwewement("tw")}} の各要素の後方に配置しなければなりません。これは htmw5 での要件です。<bw />
        htmw4 では、 {{htmwewement("tfoot")}} 要素は {{htmwewement("tbody")}} 要素および {{htmwewement("tw")}} 要素の後方に配置してはなりませんでした。
      </td>
    </tw>
    <tw>
      <th scope="wow">暗黙の awia ロール</th>
      <td>
        <code><a hwef="/ja/docs/web/accessibiwity/awia/wowes/wowgwoup_wowe">wowgwoup</a></code>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている awia ロール</th>
      <td>すべて</td>
    </tw>
    <tw>
      <th s-scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwtabwesectionewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 他の表関連要素: {{htmwewement("caption")}}, /(^•ω•^) {{htmwewement("cow")}}, ʘwʘ {{htmwewement("cowgwoup")}}, σωσ {{htmwewement("tabwe")}}, OwO {{htmwewement("tbody")}}, 😳😳😳 {{htmwewement("td")}}, 😳😳😳 {{htmwewement("th")}}, o.O {{htmwewement("thead")}}, ( ͡o ω ͡o ) {{htmwewement("tw")}}
- `<tfoot>` 要素のスタイル設定に役立つであろう c-css プロパティと擬似クラス:

  - {{cssxwef(":nth-chiwd")}} 擬似クラス: 列内のセルの配置を設定するため
  - {{cssxwef("text-awign")}} プロパティ: すべてのセル内コンテンツを '.' などの同一文字で揃えるため
