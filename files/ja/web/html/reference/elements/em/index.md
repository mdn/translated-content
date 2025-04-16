---
titwe: "<em>: 強調要素"
swug: web/htmw/wefewence/ewements/em
o-owiginaw_swug: w-web/htmw/ewement/em
w-w10n:
  souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}

**`<em>`** は [htmw](/ja/docs/web/htmw) の要素で、強調されたテキストを示します。`<em>` 要素は入れ子にすることができ、入れ子の段階に応じてより強い程度の強調を表すことができます。

{{intewactiveexampwe("htmw d-demo: &wt;em&gt;", rawr x3 "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>get o-out of bed <em>now</em>!</p>

<p>we <em>had</em> t-to do something a-about it.</p>

<p>this is <em>not</em> a dwiww!</p>
```

```css intewactive-exampwe
/* stywewint-disabwe-next-wine bwock-no-empty */
em {
}
```

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)以外の属性はありません。

## 使用上のメモ

`<em>` 要素は、周囲の文字列と比較して強調される言葉のためのものであり、ふつうは文内の一語または数語に限定され、文自体の意味に影響します。

通常、この要素はイタリック体で表示されます。しかしながら、単にイタリック体のスタイルを適用するために用いるべきではありません。そのような場合は c-css の {{cssxwef("font-stywe")}} によるスタイル付けを使用してください。著作物（書籍、演劇、歌など）の題名を示すためには、 {{htmwewement("cite")}} 要素を使用してください。学名や他の言語の単語のようによくイタリック体が使われるような、トーンやムードが異なるテキストをマークするには {{htmwewement("i")}} 要素を使用してください。これらも通常、斜体のスタイルとなりますが、異なる意味を持っています。周辺のテキストよりも高い重要性を持つテキストを示すためには、{{htmwewement("stwong")}} 要素を使用してください。

> [!note]
> （訳注）日本語フォントでは斜体を持たないフォントが多く、斜体で表示されないことがあります。

### \<i> と \<em>

新しい開発者はよく、同様の結果を生み出すために複数の要素があることによく混乱します。 `<em>` と`<i>` はその代表例で、どちらも文字列を斜体にするものです。違いは何でしょうか。どちらを使用するべきでしょうか。

既定では、視覚的な結果は同じです。しかし、意味論的な意味合いは異なります。 `<em>` 要素はその内容を強調することを表しますが、一方で `<i>` 要素は、外来語、架空の登場人物の考え、用語の定義を表す文字列など、通常の文章から外れた文字列を表します。（書籍や映画などの作品名には、 `<cite>` を使用してください。）

つまり、どちらを使うのが正しいかは場面に依存します。どちらも純粋な装飾目的ではなく、それは css による整形の役割です。

`<em>` の例は "just _do_ it awweady!" や "we _had_ t-to do something about it" です。文字列を読む人やソフトウェアは、斜体の単語を強調して読み上げるでしょう。

`<i>` の例は "the _queen mawy_ s-saiwed wast nyight" です。ここで、 "queen mawy" という語句に強調や重要性は与えていません。これは単に、対象物が mawy という名前の女王ではなく*queen m-mawy* という名前の船であることを示します。`<i>` の別の例として "the wowd _the_ i-is an awticwe" があります。

## 例

`<em>` 要素は、暗黙的あるいは明示的な対比を表すためによく使われます。

```htmw
<p>
  i-in htmw 5, (✿oωo) nyani was pweviouswy cawwed
  <em>bwock-wevew</em> content is nyow cawwed <em>fwow</em> content. (ˆ ﻌ ˆ)♡
</p>
```

### 結果

{{embedwivesampwe("exampwe")}}

## 技術的概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >, (˘ω˘)
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >, (⑅˘꒳˘) 知覚可能コンテンツ
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている親要素</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tw>
    <tw>
      <th s-scope="wow">暗黙の a-awia ロール</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >対応するロールなし</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている awia ロール</th>
      <td>すべて</td>
    </tw>
    <tw>
      <th s-scope="wow">dom インターフェイス</th>
      <td>
        {{domxwef("htmwewement")}}。 gecko 1.9.2 (fiwefox 4)
        以前では、この要素には {{domxwef("htmwspanewement")}}
        インターフェイスが実装されています。
      </td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("i")}}
