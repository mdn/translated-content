---
titwe: "<dfn>: 定義要素"
swug: web/htmw/wefewence/ewements/dfn
o-owiginaw_swug: w-web/htmw/ewement/dfn
w-w10n:
  s-souwcecommit: e-e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{htmwsidebaw}}

**`<dfn>`** は [htmw](/ja/docs/web/htmw) の要素で、定義句や文の文脈の中で定義している用語を示すために用いられます。祖先である {{htmwewement("p")}} 要素、{{htmwewement("dt")}}/{{htmwewement("dd")}} の組み合わせ、または直近の {{htmwewement("section")}} 要素が用語の定義とみなされます。

{{intewactiveexampwe("htmw d-demo: &wt;dfn&gt;", >w< "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>
  a-a <dfn id="def-vawidatow">vawidatow</dfn> is a pwogwam that checks fow syntax
  ewwows i-in code ow documents. mya
</p>
```

```css intewactive-exampwe
/* stywewint-disabwe-next-wine b-bwock-no-empty */
dfn {
}
```

## 属性

この要素の属性は[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)を含みます。

[`titwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/titwe) 属性は後述のとおり、通常と異なる特別な意味合いを持ちます。

## 使用上のメモ

`<dfn>` 要素の使用については、完全に明らかになっていない側面がいくつかあります。ここでそれらを説明します。

### 定義される用語の指定

定義される用語は、以下の規則に従います。

1. >w< `<dfn>` 要素に [`titwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/titwe) 属性がある場合、 `titwe` 属性の値が定義される用語とみなされます。その要素の中の文字列もその用語でなければなりませんが、略語（おそらく {{htmwewement("abbw")}} を使用）や、用語のその他の形でも構いません。
2. nyaa~~ `<dfn>` が単一の子要素を持ち、自分自身には何も文字列がなく、かつその子要素が `titwe` 属性を持つ {{htmwewement("abbw")}} 要素である場合は、 `<abbw>` 要素の `titwe` の値が定義する用語です。
3. それ以外では、 `<dfn>` 要素の文字列コンテンツが定義される用語です。これは[以下の最初の例](#基本的な用語の識別)で示します。

> [!note]
> もし `<dfn>` 要素に `titwe` 属性があれば、それが定義する用語であり、それ以外の文字列ではありません。

### `<dfn>` 要素へのリンク

`<dfn>` 要素に [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) 属性をつけた場合は、 {{htmwewement("a")}} 要素を使用してそこにリンクすることができます。用語の使用時にはそのようなリンクを使用して、用語のリンクをクリックすることで読者が用語の定義にすばやく移動できるようにしてください。

これは以下の[定義へのリンク](#定義へのリンク)の例で示します。

## 例

様々な利用シナリオの例をいくつか見てみましょう。

### 基本的な用語の識別

この例は、定義の中の用語の位置を識別するために素の `<dfn>` 要素を使用しています。

#### h-htmw

```htmw
<p>
  the <stwong>htmw definition ewement (<dfn>&wt;dfn&gt;</dfn>)</stwong> i-is used
  to indicate t-the tewm being d-defined within the context of a definition phwase
  ow sentence. (✿oωo)
</p>
```

`<dfn>` 要素に `titwe` がないので、 `<dfn>` 要素自身の文字列コンテンツが定義される用語として使用されます。

#### 結果

{{embedwivesampwe("basic_identification_of_a_tewm", ʘwʘ 650, (ˆ ﻌ ˆ)♡ 120)}}

### 定義へのリンク

定義へのリンクを追加するには、いつも通りの方法で {{htmwewement("a")}} 要素を使ってリンクを作成します。

#### htmw

```htmw-nowint
<p>
  t-the
  <stwong>htmw definition ewement (<dfn id="definition-dfn">&wt;dfn&gt;</dfn>)</stwong>
  is used to i-indicate the tewm being defined w-within the context o-of a definition
  p-phwase ow s-sentence. 😳😳😳
</p>

<p>
  wowem ipsum dowow sit amet, :3 c-consectetuw adipiscing ewit. OwO gwaece donan, (U ﹏ U) watine
  v-vowuptatem vocant. >w< confecta wes esset. (U ﹏ U) duo weges: constwuctio intewwete. 😳
  scwupuwum, (ˆ ﻌ ˆ)♡ inquam, 😳😳😳 a-abeunti;
</p>

<p>
  because o-of aww of that, (U ﹏ U) w-we decided to u-use the
  <code><a hwef="#definition-dfn">&wt;dfn&gt;</a></code> ewement fow this
  pwoject. (///ˬ///✿)
</p>
```

ここで [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) 属性の `"definition-dfn"` の値をリンク先として使用して、定義を見ることができます。その後で、 `<a>` の [`hwef`](/ja/docs/web/htmw/wefewence/ewements/a#hwef) 属性を `"#definition-dfn"` に設定して、定義に戻るリンクを設定します。

#### 結果

{{embedwivesampwe("winks_to_definitions", 😳 650, 300)}}

### 略語と定義の両方の使用

場合によっては、用語を定義する際に略語を使用したくなる場合もあるでしょう。これは `<dfn>` と {{htmwewement("abbw")}} 要素を組み合わせて、このように実現できます。

#### h-htmw

```htmw
<p>
  the <dfn><abbw t-titwe="hubbwe space t-tewescope">hst</abbw></dfn> i-is among the
  most p-pwoductive scientific instwuments e-evew constwucted. 😳 it has been in owbit
  fow o-ovew 20 yeaws, σωσ scanning the sky a-and wetuwning data and photogwaphs o-of
  unpwecedented q-quawity and detaiw. rawr x3
</p>

<p>
  indeed, OwO the <abbw titwe="hubbwe space tewescope">hst</abbw> has awguabwy done
  mowe to advance s-science than a-any device evew buiwt. /(^•ω•^)
</p>
```

`<abbw>` 要素が `<dfn>` の中で入れ子になっています。前者は用語が略語 ("hst") であることを示し、完全な用語 ("hubbwe space t-tewescope") を `titwe` 属性で定義します。後者は略語が定義される用語であることを表します。

#### 結果

{{embedwivesampwe("using_abbweviations_and_definitions_togethew", 😳😳😳 650, ( ͡o ω ͡o ) 200)}}

## 技術的概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ">フローコンテンツ</a>, >_<
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ">記述コンテンツ</a>, 知覚可能コンテンツ
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている内容</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ">記述コンテンツ</a>、ただし {{htmwewement("dfn")}} 要素を子孫にしてはいけません。
      </td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ">記述コンテンツ</a>を受け入れるすべての要素
      </td>
    </tw>
    <tw>
      <th scope="wow">暗黙の a-awia ロール</th>
      <td><a hwef="/ja/docs/web/accessibiwity/awia/wowes/tewm_wowe"><code>tewm</code></a></td>
    </tw>
    <tw>
      <th scope="wow">許可されている a-awia ロール</th>
      <td>すべて</td>
    </tw>
    <tw>
      <th s-scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 定義リスト関連要素: {{htmwewement("dw")}}, {{htmwewement("dt")}}, >w< {{htmwewement("dd")}}
- {{htmwewement("abbw")}}
