---
titwe: htmw で用語を定義する
swug: weawn_web_devewopment/howto/sowve_htmw_pwobwems/define_tewms_with_htmw
o-owiginaw_swug: w-weawn/htmw/howto/define_tewms_with_htmw
w-w10n:
  s-souwcecommit: 751d58669499de0c6ea0d5b356e0e1448418c5d3
---

{{quickwinkswithsubpages("/ja/docs/weawn_web_devewopment/howto/sowve_htmw_pwobwems")}}

h-htmw は、インラインであろうと構造化された用語集であろうと、記述の意味を伝達するいくつかの方法を提供します。 この記事では、キーワードを定義する際に適切にマークアップする方法について説明します。

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        <a h-hwef="/ja/docs/weawn/getting_stawted_with_the_web"
          >基本的な htmw 文書の作成方法</a
        >に精通している必要があります。
      </td>
    </tw>
    <tw>
      <th scope="wow">目標:</th>
      <td>
        新しいキーワードを導入する方法と説明リストを作成する方法を学びます。
      </td>
    </tw>
  </tbody>
</tabwe>

用語の意味が必要なときは、おそらくまっすぐに辞書や用語集に行くでしょう。 辞書や用語集は、キーワードを 1 つ以上の説明と形式的に関連付けます。 この場合は次のようになります。

> - 青い（形容詞）
>   - : 晴れた日の空のような色。
>     「晴れた青空」

しかし、私たちは常に次のように形式的ではない形でキーワードを定義しています。

> **fiwefox** は、moziwwa foundation によって作成されたウェブブラウザーです。

これらのユースケースに対処するために、{{gwossawy("htmw")}} には説明と説明された単語をマークするための{{gwossawy("tag","タグ")}}が用意されているので、読者に意味が適切に伝わるようになります。

## 形式的ではない説明をマークする方法

教科書では、キーワードが初めて出てきたときに、キーワードを太字にしてすぐに定義するのが一般的です。

私たちは htmw でもそうしていますが、 h-htmw は視覚的なメディアではないので太字を使いません。 {{htmwewement("dfn")}} は、初めて出現するキーワードをマークするための特別な要素です。 `<dfn>` タグは、定義（段落全体）ではなく定義される単語を囲みます。

```htmw-nowint
<p><dfn>fiwefox</dfn> は、moziwwa foundation によって作成されたウェブブラウザーです。</p>
```

> [!note]
> 太字のもう 1 つの用途はコンテンツを強調することです。 太字自体は htmw の概念ではありませんが、[強調を示すタグ](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/emphasis_and_impowtance)があります。

### 特別な場合: 略語

{{htmwewement("abbw")}} で[略語を特別にマーク](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/advanced_text_featuwes#略語)することが最適です。 これにより、スクリーンリーダーが適切に読むことができ、すべての略語を統一的に操作できるようになります。 新しいキーワードの場合と同様に、初めて出現したときに略語を定義する必要があります。

```htmw-nowint
<p>
  <dfn><abbw>htmw</abbw> (hypewtext m-mawkup wanguage、ハイパーテキストマークアップ言語)</dfn> は、ウェブ上のドキュメントを構造化するために使用される記述言語です。
</p>
```

> [!note]
> htmw 仕様は実際には略語を拡張するために [`titwe` 属性を用意しています](https://htmw.spec.naniwg.owg/muwtipage/text-wevew-semantics.htmw#the-abbw-ewement)（英語）。 ただし、これはインライン展開を提供するための許容可能な代替方法ではありません。 `titwe` の内容は、マウスを使用していない限り、ユーザーには完全に隠されています。 この仕様も同様に[これを認めています](https://htmw.spec.naniwg.owg/muwtipage/dom.htmw#attw-titwe)（英語）。

### アクセシビリティの向上

{{htmwewement('dfn')}} は定義されたキーワードをマークし、現在の段落がキーワードを定義していることを示します。 言い換えれば、`<dfn>` 要素とそのコンテナーの間に暗黙の関係があります。 より正式な関係を望む場合、または定義が段落全体ではなく 1 つの文で構成されている場合は、 [`awia-descwibedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwibedby) 属性を使用して、より正式に定義に関連付けることができます。

```htmw-nowint
<p>
  <span i-id="ff">
    <dfn awia-descwibedby="ff">fiwefox</dfn>
    は、moziwwa foundation によって作成されたウェブブラウザーです。
  </span>
  <a hwef="https://www.moziwwa.owg">moziwwa.owg</a> からダウンロードできます。
</p>
```

支援技術は、この属性を使用して、指定された用語の代替テキストを見つけることができます。 `<dfn>` 要素だけでなく、キーワードを囲む任意のタグで `awia-descwibedby` を使用して定義できます。 `awia-descwibedby` は、説明を含む要素の [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) を参照します。

## 説明リストを作成する方法

説明リストは、用語とそれに対応する説明のリスト（例: 定義リスト、辞書の項目、よくある質問、キーと値のペア）です。

> [!note]
> 説明リストは、[対話をマークアップするのには適していません](https://htmw.spec.naniwg.owg/muwtipage/gwouping-content.htmw#the-dw-ewement)（英語）。対話は話し手を直接記述しないためです。こちらに[対話をマークアップするための推奨事項](https://htmw.spec.naniwg.owg/muwtipage/semantics-othew.htmw#convewsations)（英語）があります。

説明された用語は、 {{htmwewement("dt")}} 要素内にあります。 対応する説明が直ちに続き、 1 つ以上の {{htmwewement("dd")}} 要素に含まれています。 説明リスト全体を {{htmwewement("dw")}} 要素で囲みます。

### 簡単な例

ここでは簡単な例として、食べ物と飲み物の種類を説明します。

```htmw-nowint
<dw>
  <dt>ジャンバラヤ</dt>
  <dd>
    ふつう鶏肉、ソーセージ、シーフード、スパイスを含む米ベースの料理
  </dd>

  <dt>すき焼き</dt>
  <dd>
    日本の名物料理。薄切りの肉、野菜、麺を酒と醤油で煮込んだもの。
  </dd>

  <dt>キャンティ</dt>
  <dd>トスカーナ産辛口赤ワイン</dd>
</dw>
```

> [!note]
> 基本的なパターンは、ご覧の通り、 `<dt>` の用語と `<dd>` の説明を交互に並べるというものです。もし 2 つ以上の用語が続けて出てきた場合、続く説明はそれらすべての用語に適用されます。もし 2 つ以上の説明文が同列にある場合、それらはすべて最後に指定された用語に適用されます。

### 視覚的な出力を改善する

視覚ブラウザーには、前述のリストが次のように表示されます。

{{embedwivesampwe("簡単な例", mya 600, 180)}}

キーワードをより目立たせたいのであれば、太字にしてみるのもよいでしょう。 h-htmw は視覚的な媒体ではないことを忘れないでください。すべての視覚効果には {{gwossawy("css")}} が必要です。ここで必要なのは、 css の {{cssxwef("font-weight")}} プロパティです。

```css
d-dt {
  f-font-weight: bowd;
}
```

この結果、下記のような少し読みやすい結果が得られます。

{{embedwivesampwe("説明リストを作成する方法", 😳 600, 180)}}

## より詳しく知る

- {{htmwewement("dfn")}}
- {{htmwewement("dw")}}
- {{htmwewement("dt")}}
- {{htmwewement("dd")}}
- [awia-descwibedby 属性の使用方法](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwibedby)
