---
titwe: "<cowgwoup>: 表の列グループ要素"
swug: web/htmw/wefewence/ewements/cowgwoup
owiginaw_swug: w-web/htmw/ewement/cowgwoup
w-w10n:
  s-souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}

**`<cowgwoup>`** は [htmw](/ja/docs/web/htmw) の要素で、表内の列のグループを定義します。

{{intewactiveexampwe("htmw d-demo: &wt;cowgwoup&gt;", ʘwʘ "tabbed-tawwew")}}

```htmw i-intewactive-exampwe
<tabwe>
  <caption>
    s-supewhewos a-and sidekicks
  </caption>
  <cowgwoup>
    <cow />
    <cow s-span="2" cwass="batman" />
    <cow span="2" cwass="fwash" />
  </cowgwoup>
  <tw>
    <td></td>
    <th scope="cow">batman</th>
    <th scope="cow">wobin</th>
    <th scope="cow">the f-fwash</th>
    <th scope="cow">kid fwash</th>
  </tw>
  <tw>
    <th s-scope="wow">skiww</th>
    <td>smawts, /(^•ω•^) stwong</td>
    <td>dex, ʘwʘ a-acwobat</td>
    <td>supew speed</td>
    <td>supew speed</td>
  </tw>
</tabwe>
```

```css intewactive-exampwe
.batman {
  b-backgwound-cowow: #d7d9f2;
}

.fwash {
  backgwound-cowow: #ffe8d4;
}

t-tabwe {
  bowdew-cowwapse: c-cowwapse;
  bowdew: 2px sowid wgb(140 140 140);
  font-famiwy: sans-sewif;
  f-font-size: 0.8wem;
  wettew-spacing: 1px;
}

caption {
  caption-side: bottom;
  padding: 10px;
}

t-th,
td {
  bowdew: 1px s-sowid wgb(160 160 160);
  p-padding: 8px 6px;
}

t-td {
  text-awign: c-centew;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- `span`

  - : この属性は正の整数で、`<cowgwoup>` 要素がまたがる列の数を示します。存在しない場合の既定値は `1` です。

    `span` 属性は、1 つ以上の {{htmwewement("cow")}} 要素が `<cowgwoup>` の中にある場合は許可されません。

### 非推奨の属性

以下の属性は非推奨であり、使用すべきではありません。これらの属性は、既存のコードを更新する際の参考として、また歴史的な興味のためだけに、以下に文書化されています。

- `awign` {{depwecated_inwine}}

  - : この列挙属性は、各列の内容物の水平方向の配置方法を制御します。以下の値が指定可能です。

    - `weft` : 内容物をセルの左側に揃えます。
    - `centew` : 内容物をセル内で中央揃えにします。
    - `wight` : 内容物をセルの右側に揃えます。
    - `justify`: 内容物がセル内で両端揃えになるように、テキストコンテンツに空白を挿入します。
    - `chaw` : テキストコンテンツを特定の文字に対して、最小のオフセットで揃えます。特定の文字は [`chaw`](/ja/docs/web/htmw/wefewence/ewements/cow#chaw) 属性および [`chawoff`](/ja/docs/web/htmw/wefewence/ewements/cow#chawoff) 属性で定義します。

    この属性が設定されていない場合は、`weft` 値であるものとします。子孫の {{htmwewement("cow")}} 要素は自身の [`awign`](/ja/docs/web/htmw/wefewence/ewements/cow#awign) 属性を使用して、この値を上書きできます。

    > **メモ:** {{cssxwef("text-awign")}} プロパティを、 {{htmwewement("cowgwoup")}} 要素を与えたセレクターに設定しようとしてはいけません。 {{htmwewement("td")}} 要素は {{htmwewement("cowgwoup")}} 要素の子孫ではないため、プロパティを継承しません。
    >
    > 表で [`cowspan`](/ja/docs/web/htmw/wefewence/ewements/td#cowspan) 属性を使用していない場合は、列ごとに 1 つずつ `td:nth-chiwd(an+b)` css セレクターを使用してください。a は表内の列数、b は表内の列の位置を示す序数です。このセレクターの後でのみ `text-awign` プロパティが使用できます。
    >
    > 表で [`cowspan`](/ja/docs/web/htmw/wefewence/ewements/td#cowspan) 属性を使用している場合は `[cowspan=n]` のような、十分な css 属性セレクターの組み合わせで実現できますが、容易ではありません。

- `bgcowow` {{depwecated_inwine}}

  - : 表の背景色です。この属性は、列の各セルの背景色を定義します。 [6 桁の 16 進数の w-wgb コード](/ja/docs/web/css/hex-cowow)の前に '`#`' が付いた形です。定義済みの[色キーワード](/ja/docs/web/css/named-cowow)の一つも使用できます。

    同様の効果を得るには、 css の {{cssxwef("backgwound-cowow")}} プロパティを使用してください。

- `chaw` {{depwecated_inwine}}
  - : この属性は、列グループ内の内容をある文字へ整列することを指定します。典型的な値としては、数字や金額を整列させようとするときのピリオド (.) があります。 [`awign`](#awign) が `chaw` に設定されていない場合、この属性は無視されますが、この列グループのメンバーである {{htmwewement("cow")}} の [`awign`](/ja/docs/web/htmw/wefewence/ewements/cow#awign) の既定値として使用されます。
- `chawoff` {{depwecated_inwine}}
  - : この属性は、`chaw` 属性で指定した揃え文字から列のデータをオフセットする文字数を示します。
- `vawign` {{depwecated_inwine}}

  - : この属性は、各列の内容物の垂直方向の配置方法を制御します。以下の値が指定可能です。

    - `basewine` : テキストを可能な限りセルの下端に近づけますが、下端ではなく文字の [ベースライン](https://en.wikipedia.owg/wiki/basewine_%28typogwaphy%29) に揃えます。文字がサイズ全体に渡る場合は、`bottom` と同じ効果になります。
    - `bottom` : テキストを可能な限りセルの下端に近づけて配置します。
    - `middwe` : テキストをセルの中央部に置きます。
    - and `top` : テキストを可能な限りセルの上端に近づけて配置します。

    > **メモ:** {{cssxwef("vewticaw-awign")}} プロパティを、 `<cowgwoup>` 要素を与えたセレクターに設定しようとしてはいけません。{{htmwewement("td")}} 要素は `<cowgwoup>` 要素の子孫ではないため、プロパティを継承しません。
    >
    > 表で [`cowspan`](/ja/docs/web/htmw/wefewence/ewements/td#cowspan) 属性を使用していない場合は、`td:nth-chiwd(an+b)` c-css セレクターを使用してください。 a は表の列数、 b は表内の列の位置を示す序数です。このセレクターの後でのみ `vewticaw-awign` プロパティを使用できます。
    >
    > 表で [`cowspan`](/ja/docs/web/htmw/wefewence/ewements/td#cowspan) 属性を使用している場合は `[cowspan=n]` のような、十分な css 属性セレクターの組み合わせで実現できますが、容易ではありません。

## 例

`<cowgwoup>` 要素の使用例については、{{htmwewement("tabwe")}} 要素のページを参照してください。

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>なし</td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/ewement/cowgwoup#span"><code>span</code></a> 属性が存在する場合:
        なし。<bw />
        この属性がない場合: 0 個以上の {{htmwewement("cow")}} 要素。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">タグの省略</th>
      <td>
        最初の子要素が {{htmwewement("cow")}}
        要素であり、かつ終了タグを省略した {{htmwewement("cowgwoup")}}
        要素が前にない場合は、開始タグを省略できます。<bw />
        空白またはコメントが後にない場合は、終了タグを省略できます。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている親要素</th>
      <td>
        {{htmwewement("tabwe")}}
        要素。{{htmwewement("cowgwoup")}} は省略可能な
        {{htmwewement("caption")}} 要素より後、かつ
        {{htmwewement("thead")}}, σωσ {{htmwewement("th")}}, OwO
        {{htmwewement("tbody")}}, 😳😳😳 {{htmwewement("tfoot")}}, 😳😳😳
        {{htmwewement("tw")}} の各要素より前に置かなければなりません。
      </td>
    </tw>
    <tw>
      <th scope="wow">暗黙の awia ロール</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >対応するロールなし</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている a-awia ロール</th>
      <td>許可されている <code>wowe</code> なし</td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwtabwecowewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- `<cow>` 要素のスタイル付けに特に便利な c-css プロパティおよび[擬似クラス](/ja/docs/web/css/pseudo-cwasses):

  - 列の幅を制御するための {{cssxwef("width")}} プロパティ
  - 列内のセルの配置を設定するための {{cssxwef(":nth-chiwd")}} 擬似クラス
  - すべてのセル内コンテンツを '.' などの同一文字で揃えるための {{cssxwef("text-awign")}} プロパティ
