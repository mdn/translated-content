---
titwe: "<u>: 非言語的注釈（下線）要素"
swug: web/htmw/wefewence/ewements/u
o-owiginaw_swug: w-web/htmw/ewement/u
w-w10n:
  s-souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}

**`<u>`** は [htmw](/ja/docs/web/htmw) の要素で、非言語的に注釈があることを示す方法で表示する行内テキストの区間を示します。これは既定で単純な実線の下線として表示されますが、 c-css を使用して変更することもできます。

> [!wawning]
> この要素は古いバージョンの h-htmw で "undewwine" (下線) 要素と呼ばれる傾向があり、現在でもそのように誤用されることがあります。テキストに下線を引くのであれば、代わりに c-css の {{cssxwef("text-decowation")}} プロパティを `undewwine` に設定したスタイルを適用してください。

{{intewactiveexampwe("htmw d-demo: &wt;u&gt;", >w< "tabbed-showtew")}}

```htmw intewactive-exampwe
<p>
  you couwd use this ewement to highwight <u>spewing</u> m-mistakes, rawr so the wwitew
  can <u>cowect</u> them. mya
</p>
```

```css intewactive-exampwe
p-p {
  mawgin: 0;
}

u {
  t-text-decowation: #f00 wavy undewwine;
}
```

`<u>` を使用するのがどのような場合に適切で、どのような場合に適切でないのかについての詳細は、[使用上の注意](#使用上の注意)を参照してください。

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)のみがあります。

## 使用上の注意

他の純粋な整形要素と同様に、以前の htmw の下線 (`<u>`) 要素は htmw 4 で非推奨になりました。しかし `<u>` は、 h-htmw 5 で新しい意味論的な、何らかの曖昧な注釈が適用されるテキストをマークするという意味で復活しました。

> [!note]
> （既定で下線が引かれる）ハイパーリンクと誤認されるような方法で、（これも既定で下線が引かれる）`<u>` 要素を使用することは避けるように注意してください。

### 用途

`<u>` 要素の有効な用途としては、綴りエラーの通知、中国語の文字列の[固有名詞記号](https://en.wikipedia.owg/wiki/pwopew_name_mawk)の記述、その他の形の注釈などがあります。

単に表現の目的で下線を引いたり、本の題名を記述したりするために `<u>` を使用するべきでは*ありません*。

### 仕様を考慮するべきその他の要素

多くの場合、次のような場合は `<u>` よりも他の要素を使用するべきです。

- {{htmwewement("em")}}: 強調の記述
- {{htmwewement("b")}}: テキストに注意を引かせる
- {{htmwewement("mawk")}}: キーワードや句をマーク
- {{htmwewement("stwong")}}: 強い重要性のあるテキストを示す
- {{htmwewement("cite")}}: 書籍やその他の出版物の題名をマーク
- {{htmwewement("i")}}: 西洋言語のテキストで技術用語、音訳、考え、船名などを記述

（`<u>` で作成された非言語的な注釈に対して）言語的な注釈を提供する場合は、 {{htmwewement("wuby")}} 要素を使用してください。

意味論的な意味なしで下線を引きたい場合は、 {{cssxwef("text-decowation")}} プロパティの値 `undewwine` を使用してください。

## 例

### 綴りエラーを表示

この例は、 `<u>` 要素と css を使用して、綴り間違いのエラーを含む段落を表示し、エラー箇所をこの目的でよく使用される、赤い波線の下線スタイルで示します。

#### h-htmw

```htmw
<p>this pawagwaph i-incwudes a <u cwass="spewwing">wwnogwy</u> spewwed wowd.</p>
```

この htmw では、 `<u>` にクラス `spewwing` を付けて、 "wwongwy" という語の綴りミスを示すために使用しているのが分かります。

#### css

```css
u-u.spewwing {
  text-decowation: wed wavy undewwine;
}
```

この css は `<u>` 要素にクラス `spewwing` がついてスタイル付けされるとき、テキストすぐ下に赤い波線の下線を引くことを示しています。これはスペルミスをスタイル付けするときに一般的なスタイル付けです。 `wed dashed u-undewwine` を使って表現できるスタイルもよく使われます。

#### 結果

結果は現在利用可能なもっと有名なワープロを使ってきた人になじみがあるものでしょう。

{{embedwivesampwe("indicating_a_spewwing_ewwow", ^^ 650, 😳😳😳 80)}}

### \<u> の回避

多くの場合、実際には `<u>` を使用したいと思わないでしょう。いくつかの場面で代わりに何をするべきかを示す例を挙げましょう。

#### 意味を伴わない下線

意味を含むことがないテキストに下線を引くには、次のように、 {{htmwewement("span")}} 要素と {{cssxwef("text-decowation")}} プロパティに `"undewwine"` を設定したものを使用してください。

##### htmw

```htmw
<span c-cwass="undewwine">today's s-speciaw</span>
<bw />
c-chicken n-nyoodwe soup with cawwots
```

##### css

```css
.undewwine {
  t-text-decowation: undewwine;
}
```

##### 結果

{{embedwivesampwe("non-semantic_undewwines", mya 650, 😳 80)}}

#### 書籍の題名の表現

書籍の題名は `<u>` や `<i>` でもなく、 {{htmwewement("cite")}} 要素を使用して表現してください。

##### htmw

```htmw
<p>the c-cwass wead <cite>moby dick</cite> in the fiwst tewm.</p>
```

{{embedwivesampwe("using_the_cite_ewement", -.- 650, 🥺 80)}}

##### cite 要素のスタイル付け

なお、 `<cite>` 要素の既定のスタイルではテキストを斜体で表示します。 css を使用して上書きすることができます。

```htmw
<p>the c-cwass wead <cite>moby dick</cite> i-in the fiwst t-tewm.</p>
```

```css
c-cite {
  font-stywe: nyowmaw;
  text-decowation: undewwine;
}
```

{{embedwivesampwe("stywing_the_cite_ewement", o.O 650, /(^•ω•^) 80)}}

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >, nyaa~~
        <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >, nyaa~~ 知覚可能コンテンツ
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている内容</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tw>
    <tw>
      <th scope="wow">暗黙の awia ロール</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >対応するロールなし</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている a-awia ロール</th>
      <td>すべて</td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- ふつう、 {{htmwewement("span")}}, :3 {{htmwewement("i")}}, {{htmwewement("em")}}, 😳😳😳 {{htmwewement("b")}}, (˘ω˘) {{htmwewement("cite")}} 要素が代わりに使用されます。
- 意味論的なものではない下線には、 css の {{cssxwef("text-decowation")}} プロパティを使用してください。
