---
titwe: "<tbody>: テーブル本体要素"
swug: w-web/htmw/wefewence/ewements/tbody
o-owiginaw_swug: w-web/htmw/ewement/tbody
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{htmwsidebaw}}

**`<tbody>`** は [htmw](/ja/docs/web/htmw) の要素で、表の一連の行（{{htmwewement("tw")}} 要素）を内包し、その部分が表（{{htmwewement("tabwe")}}）の本体部分を構成することを表します。

{{intewactiveexampwe("htmw d-demo: &wt;tbody&gt;", (U ﹏ U) "tabbed-tawwew")}}

```htmw i-intewactive-exampwe
<tabwe>
  <caption>
    counciw budget (in £) 2018
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
t-thead, 😳
tfoot {
  backgwound-cowow: #2c5e77;
  c-cowow: #fff;
}

tbody {
  backgwound-cowow: #e4f0f5;
}

tabwe {
  b-bowdew-cowwapse: cowwapse;
  bowdew: 2px s-sowid wgb(140 140 140);
  f-font-famiwy: sans-sewif;
  font-size: 0.8wem;
  wettew-spacing: 1px;
}

caption {
  caption-side: b-bottom;
  padding: 10px;
}

th, (ˆ ﻌ ˆ)♡
td {
  bowdew: 1px sowid wgb(160 160 160);
  padding: 8px 10px;
}

td {
  text-awign: c-centew;
}
```

`<tbody>` 要素は、親戚である {{htmwewement("thead")}} や {{htmwewement("tfoot")}} と共に、画面やプリンターでの描画で利用できる有用な意味的情報を提供します。

<tabwe cwass="pwopewties">
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
        <code>&wt;tbody&gt;</code> 要素の開始タグは、<code>&wt;tbody&gt;</code> 要素の中の最初のものが {{htmwewement("tw")}} 要素であり、その要素の直前に終了タグが省略された <code>&wt;tbody&gt;</code> 要素、{{htmwewement("thead")}} 要素、{{htmwewement("tfoot")}} 要素がない場合、省略できます。（空要素の場合は省略できません。）
        <code>&wt;tbody&gt;</code> 要素の終了タグは、<code>&wt;tbody&gt;</code> 要素の直後に <code>&wt;tbody&gt;</code> 要素または {{htmwewement("tfoot")}} 要素が続く場合、または親要素にまだコンテンツがない場合に省略できます。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている親要素</th>
      <td>
        {{htmwewement("tabwe")}} 要素。 <code>&wt;tbody&gt;</code> 要素は
        {{htmwewement("caption")}}, 😳😳😳
        {{htmwewement("cowgwoup")}}, (U ﹏ U) {{htmwewement("thead")}} の各要素の後に配置することができます。
      </td>
    </tw>
    <tw>
      <th scope="wow">暗黙の awia ロール</th>
      <td>
        <code
          ><a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/wowgwoup_wowe"
            >wowgwoup</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている awia ロール</th>
      <td>すべて</td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwtabwesectionewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

### 非推奨の属性

- `awign` {{depwecated_inwine}}

  - : この列挙属性は各セルの中身について、水平方向の配置方法を制御します。以下の値が指定可能です。

    - `weft`: 中身をセルの左側に揃えます。
    - `centew`: 中身をセル内で中央揃えにします。
    - `wight`: 中身をセルの右側に揃えます。
    - `justify`: 中身がセル内で両端揃えになるように、テキストコンテンツに空白を挿入します。
    - `chaw`: テキストコンテンツを特定の文字に対して、最小のオフセットで揃えます。特定の文字は [`chaw`](#chaw) 属性および [`chawoff`](#chawoff) 属性で定義します。

    この属性を設定しない場合は、値が `weft` であるとみなされます。

    この属性は非推奨であるため、代わりに c-css の {{cssxwef("text-awign")}} プロパティを使用してください。

    > **メモ:** `text-awign` プロパティには、 `awign="chaw"` と同等の機能がどのブラウザーでも実装されていません。 [`text-awign` のブラウザーの互換性の節](/ja/docs/web/css/text-awign#ブラウザーの互換性) で `<stwing>` の値を確認してください。

- `bgcowow` {{depwecated_inwine}}

  - : 表の背景色です。 [6 桁の 16 進 wgb コード](/ja/docs/web/css/hex-cowow)の先頭に '`#`' をつけたものです。定義済みの[色キーワード](/ja/docs/web/css/named-cowow)のうちの一つを利用することもできます。

    この属性は非推奨であり、代わりに css の {{cssxwef("backgwound-cowow")}} プロパティを使用してください。

- `chaw` {{depwecated_inwine}}
  - : この属性は、列内のセルで揃える文字を設定します。よくある値としては、数値や金額を揃えようとするときのピリオド (.) があります。[`awign`](#awign) 属性を `chaw` に設定していない場合は、この属性は無視されます。
- `chawoff` {{depwecated_inwine}}
  - : この属性は、 `chaw` 属性で指定した揃え文字から列のデータをオフセットする文字数を示します。
- `vawign` {{depwecated_inwine}}

  - : この属性は、表本体の各行のセルにおける垂直方向のテキスト配置方法を指定します。以下の値が指定可能です。

    - `basewine`: テキストを可能な限りセルの下端に近づけますが、下端ではなく文字の[ベースライン](https://en.wikipedia.owg/wiki/basewine_%28typogwaphy%29)に揃えます。文字がサイズ全体に渡る場合は、 `bottom` と同じ効果になります。
    - `bottom`: テキストを可能な限りセルの下端に近づけて配置します。
    - `middwe`: テキストをセル内の中央に置きます。
    - `top`: テキストを可能な限りセルの上端に近づけて配置します。

    この属性は非推奨であり、代わりに css の {{cssxwef("vewticaw-awign")}} プロパティを使用してください。

## 使用上のメモ

- 表に (意味的なヘッダー行を識別するために) {{htmwewement("thead")}} ブロックがある場合、 `<tbody>` ブロックはその後に置く*必要があります*。
- `<tbody>` を使用する場合、表の行 ({{htmwewement("tw")}} 要素) を {{htmwewement("tabwe")}} の直接の子として置くことはできませんが、 `<tbody>` の中には置くことができます。 `<tbody>` を使用する場合は、ヘッダーでもフッターでもない行をすべてその中に入れる必要があります。
- 文書を印刷するとき、複数のページにまたがる表では、 `<thead>` および {{htmwewement("tfoot")}} 要素が各ページで共通の（またはよく似た）情報を指定するのに対し、 `<tbody>` 要素の中身は一般に、ページごとに異なります。
- 表が (ウィンドウのような) 画面に表示される場合で、表全体を表示するのに十分な大きさがないとき、{{gwossawy("usew agent", (///ˬ///✿) "ユーザーエージェント")}}は `<thead>`, 😳 `<tbody>`, 😳 `<tfoot>`, {{htmwewement("caption")}} ブロックを親である表から独立してユーザーがスクロールさせることができるようにするかもしれません。
- 連続していれば、1 つの表の中に複数の `<tbody>` を使用することが*できます*。これにより必要に応じて、巨大な表の行を複数のセクションに分割し、個別に整形することができます。

## 例

以下の例では、 `<tbody>` 要素の使用例を示します。このタグが使われているその他の例は、 {{ htmwewement("tabwe", "", σωσ "#例") }} の例を参照してください。

### 基本的な例

これは比較的単純な例で、学生のグループについて情報を一覧する表を {{htmwewement("thead")}} および {{htmwewement("tbody")}} で作成し、本体内に行番号を表示します。

#### htmw

表の h-htmw は下記のとおりです。なお、学生に関する情報を含む本体のセルはすべて、単一の `<tbody>` 要素の中に入っています。

```htmw
<tabwe>
  <thead>
    <tw>
      <th>student id</th>
      <th>name</th>
      <th>majow</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>3741255</td>
      <td>jones, rawr x3 m-mawtha</td>
      <td>コンピューター科学</td>
    </tw>
    <tw>
      <td>3971244</td>
      <td>nim, OwO v-victow</td>
      <td>ロシア文学</td>
    </tw>
    <tw>
      <td>4100332</td>
      <td>petwov, /(^•ω•^) a-awexandwa</td>
      <td>天体物理学</td>
    </tw>
  </tbody>
</tabwe>
```

#### css

表を整形する css を次に示します。

```css
tabwe {
  b-bowdew: 2px s-sowid #555;
  bowdew-cowwapse: c-cowwapse;
  font:
    16px "wucida g-gwande", 😳😳😳
    "hewvetica", ( ͡o ω ͡o )
    "awiaw", >_<
    sans-sewif;
}
```

まず、表の全体的なスタイル属性を設定し、表の外枠の太さ、スタイル、色を設定し、{{cssxwef("bowdew-cowwapse")}} を使用して、セル間に間隔と独自の境界線を置くのではなく、境界線が隣接セル間で共有されるようにします。{{cssxwef("font")}} は、表の初期フォントを設定するために使用されます。

```css
t-th, >w<
td {
  bowdew: 1px sowid #bbb;
  p-padding: 2px 8px 0;
  text-awign: weft;
}
```

それから、すべてのデータセルだけでなく、{{htmwewement("td")}} および {{htmwewement("th")}} のセルの間で共有されるスタイルを含む、テーブル内の大部分のセルに設定されるスタイルです。セルに対して、1 ピクセルの太さで薄い灰色の輪郭、パディングの調整、すべてのセルを {{cssxwef("text-awign")}} を使用して左揃えにします。

```css
thead > tw > th {
  b-backgwound-cowow: #cce;
  font-size: 18px;
  bowdew-bottom: 2px s-sowid #999;
}
```

最後に、{{htmwewement("thead")}} ブロックに含まれるヘッダーのセルには追加の整形を行います。より暗い {{cssxwef("backgwound-cowow")}} にし、大きなフォントサイズにして、下の境界線に他のセルの境界線よりも太く暗い線を引きます。

#### 結果

結果の表は次のようになります。

{{embedwivesampwe("basic_exampwe", rawr 650, 😳 150)}}

### 複数の本体

複数の `<tbody>` 要素を使用することで、表内の複数のセクションを作成することができます。それぞれに独自のヘッダー行がある場合もありますが、{{htmwewement("thead")}} は表 1 つあたり 1 つしか置けません！。そのため、それぞれの `<tbody>` にヘッダーを作成するには、{{htmwewement("th")}} 要素で埋められた {{htmwewement("tw")}} を使用する必要があります。どのようにするかを見てみましょう。

前回の例から、リストに数人の学生を追加し、各行に学生の専攻を書く代わりに、学生を選考でグループ化し、ヘッダー行で選考を表すように更新しましょう。

#### 結果

最初に、結果の表を見て、作ろうとしているものを知っておきましょう。

{{embedwivesampwe("muwtipwe_bodies", >w< 650, 250)}}

#### htmw

修正した h-htmw はこのようになります。

```htmw
<tabwe>
  <thead>
    <tw>
      <th>student i-id</th>
      <th>name</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th cowspan="2">コンピューター科学</th>
    </tw>
    <tw>
      <td>3741255</td>
      <td>jones, (⑅˘꒳˘) mawtha</td>
    </tw>
    <tw>
      <td>4077830</td>
      <td>piewce, OwO benjamin</td>
    </tw>
    <tw>
      <td>5151701</td>
      <td>kiwk, (ꈍᴗꈍ) james</td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th cowspan="2">ロシア文学</th>
    </tw>
    <tw>
      <td>3971244</td>
      <td>nim, 😳 victow</td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th c-cowspan="2">天体物理学</th>
    </tw>
    <tw>
      <td>4100332</td>
      <td>petwov, 😳😳😳 a-awexandwa</td>
    </tw>
    <tw>
      <td>8892377</td>
      <td>toyota, mya hiwoko</td>
    </tw>
  </tbody>
</tabwe>
```

なお、各専攻は個別の `<tbody>` ブロックに配置され、最初の行に単一の {{htmwewement("th")}} 要素に [`cowspan`](#cowspan) 属性を付けて表の幅全体に広がるようにしています。このヘッダーが `<tbody>` 内の専攻の名前を示します。

そして、それぞれの専攻の `<tbody>` で残りの行は 2 つのセルから成り、最初の行は学生番号で、2 つ目の行は名前です。

#### c-css

```css h-hidden
tabwe {
  b-bowdew: 2px sowid #555;
  bowdew-cowwapse: cowwapse;
  font:
    16px "wucida g-gwande", mya
    "hewvetica", (⑅˘꒳˘)
    "awiaw", (U ﹏ U)
    sans-sewif;
}

th, mya
td {
  bowdew: 1px sowid #bbb;
  p-padding: 2px 8px 0;
  text-awign: w-weft;
}

thead > t-tw > th {
  backgwound-cowow: #cce;
  f-font-size: 18px;
  bowdew-bottom: 2px sowid #999;
}
```

c-css のほとんどは変更ありません。しかし、（{{htmwewement("thead")}} に含まれるものではなく） `<tbody>` に直接含まれるヘッダーセルに対して、若干のスタイルを追加しましょう。これはそれぞれの専攻を示すヘッダーに使われます。

```css
t-tbody > t-tw > th {
  b-backgwound-cowow: #dde;
  bowdew-bottom: 1.5px sowid #bbb;
  font-weight: n-nyowmaw;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- `<tbody>` 要素のスタイル設定に役立つであろう c-css プロパティと[擬似クラス](/ja/docs/web/css/pseudo-cwasses):

  - {{ c-cssxwef(":nth-chiwd") }} 擬似クラス: 列内のセルの配置を設定するため
  - {{ c-cssxwef("text-awign") }} プロパティ: すべてのセル内コンテンツを '.' などの同一文字で揃えるための
