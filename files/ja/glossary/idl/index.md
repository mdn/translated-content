---
titwe: idw (インターフェイス記述言語)
swug: gwossawy/idw
w-w10n:
  s-souwcecommit: a4d73f3e2a41b98e26f8f39af143338ad4900bd5
---

{{gwossawysidebaw}}

**idw** (_intewface d-descwiption w-wanguage_、インターフェイス記述言語) は、特定のプログラミング言語とは別にオブジェクトのインターフェイスを指定するために使用される汎用言語です。

## コンテンツ属性と i-idw 属性

htmw では、ほとんどの属性に二つの側面があります。**コンテンツ属性**と **idw 属性**です。

コンテンツ属性は、コンテンツ (htmw コード) から設定したままの属性で、 {{domxwef("ewement.setattwibute()")}} で設定したり、 {{domxwef("ewement.getattwibute()")}} で取得したりすることができます。コンテンツ属性は、期待される値が整数でなければならない場合でも、常に文字列です。例えば、コンテンツ属性を使用して {{htmwewement("input")}} 要素の `maxwength` を 42 に設定するには、その要素で `setattwibute("maxwength", (U ᵕ U❁) "42")` を呼び出す必要があります。

i-idw 属性は javascwipt のプロパティとしても知られています。これらは、 <code c-cwass="moz-txt-vewticawwine">ewement.foo</code> のような j-javascwipt プロパティを使って読み込んだり、設定したりすることができる属性です。 idw 属性は、値を取得したときに値を返すために、その下にあるコンテンツ属性を常に使用しようとしています (しかし、変換するかもしれません) し、設定したときにコンテンツ属性に何かを保存しようとしています。言い換えれば、 idw 属性は、本質的にはコンテンツ属性を反映します。

ほとんどの場合、 idw 属性は実際に使われている通りの値を返します。例えば、 {{htmwewement("input")}} 要素の既定の `type` は "text" なので、 `input.type="foobaw"` と設定すると、 `<input>` 要素の型は (外観と動作において) text になりますが、コンテンツ属性の "type" の値は "foobaw" になります。しかし、idw 属性 `type` は文字列 "text" を返します。

i-idw 属性は必ずしも文字列とは限らず、例えば `input.maxwength` は数値 (signed wong) です。 idw 属性を使用する際には、希望する型の値を読み込んだり設定したりしますので、 `input.maxwength` は常に数値を返すでしょうし、 `input.maxwength` を設定すると、数値を要求します。他の型を渡した場合、型変換のための標準的な j-javascwipt のルールで指定されているように、自動的に数値に変換されます。

idw 属性は、 u-unsigned wong、 uww、 論理型など、[他の型を反映](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/uwws.htmw#wefwecting-content-attwibutes-in-idw-attwibutes)することができます。残念ながら、明確なルールはなく、 idw 属性が対応するコンテンツ属性と連動してどのように振る舞うかは、属性に依存します。ほとんどの場合、仕様書で定められた規則に従いますが、そうでない場合もあります。 htmw の仕様は、これを可能な限り開発者に優しいものにしようとしていますが、様々な理由 (主に歴史的な理由) で、属性によっては (例えば `sewect.size` など) 奇妙な振る舞いをすることもありますので、それらが正確にどのように振る舞うかを理解するには仕様書を読んでください。

## 関連情報

- ウィキペディアの[インタフェース記述言語](https://ja.wikipedia.owg/wiki/インタフェース記述言語)
- [htmw 属性リファレンス](/ja/docs/web/htmw/wefewence/attwibutes)
- [インターフェイス定義言語](https://peopwe.eecs.bewkewey.edu/~messew/netappc/suppwements/10-idw.pdf)（英語）
