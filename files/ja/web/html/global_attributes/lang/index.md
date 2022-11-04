---
title: lang
slug: Web/HTML/Global_attributes/lang
---

{{HTMLSidebar("Global_attributes")}}

**`lang`** [グローバル属性](/ja/docs/Web/HTML/Global_attributes)は、要素の言語の定義に使われます。編集不可の要素では記述されている言語、また、編集可能な要素ではユーザーが書き込むべき言語です。属性には単一の「言語タグ」を [_Tags for Identifying Languages (BCP47)_](https://www.ietf.org/rfc/bcp/bcp47.txt) で定義された書式で持ちます。

{{EmbedInteractiveExample("pages/tabbed/attribute-lang.html","tabbed-shorter")}}

属性値が*空文字列* (`lang=""`) の場合、言語は _unknown_ に設定されます。言語タグが BCP47 に準拠していない場合は、 _invalid_ に設定されます。

> **メモ:** BCP47 の完全な構文は、細かい特定の言語の方言まで示せるようにとても複雑になっていますが、ほとんどの使い方ではずっと単純です。言語タグはハイフンで区切られた*言語サブタグ*より成り、それぞれのサブタグは言語の特定の特性を示します。３つのサブタグがもっともよく使われます。- 言語サブタグ - : 必須です。基本言語を定義する２～３文字のコードで、ふつうすべて小文字で書かれます。例えば、英語の言語コードは `en` であり、バデシ語のコードは `bdz` です。
>
> - 書記体系サブタグ
>   - : 任意です。このサブタグは、言語で使われる書記体系を定義し、常に４文字の長さで、最初の文字は大文字です。例えば、ブライユ (点字) のフランス語は `fr-Brail` であり、 `ja-Kana` はカタカナで書かれた日本語です。言語がとても一般的な方法で記述される場合、例えば英語でアルファベットを使う場合などは、このサブタグを使用する必要はありません。
> - 地域サブタグ
>   - : 任意です。このサブタグは基本言語の特定の場所における方言を定義し、国コードを示す大文字２文字または地域を示す３桁の数字です。例えば、 `es-ES` はスペインで使われているスペイン語であり、 `es-013` は中央アメリカで使われているスペイン語です。「国際スペイン語」は単なる `es` になります。両方がある場合、書式体系サブタグは地域サブタグよりも先に置きます。 — `ru-Cyrl-BY` はベラルーシで使われているキリル文字によるロシア語です。言語の正しいサブタグコードを探すには、 [the Language Subtag Lookup](https://r12a.github.io/app-subtags/) を見てみてください。

**lang** 属性が設定されていても、 [**xml:lang**](/ja/docs/Web/HTML/Global_attributes/xml:lang) 属性の方が優先するので、効果がないことがあります。

CSS 疑似クラスの {{cssxref(":lang")}} においては、名前が異なると二つの無効な言語名を区別します。ですから、 `:lang(es)` は `lang="es-ES"` 及び `lang="es-419"` にも一致しますが、 `:lang(xyzzy)` は `lang="xyzzy-Zorp!"` とは一致しません。

## 仕様書

| 仕様書                                                                                                       | 状態                             | 備考                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "dom.html#the-lang-and-xml:lang-attributes", "lang")}} | {{Spec2('HTML WHATWG')}} | 最新のスナップショットである {{SpecName('HTML5.1')}} から変更なし。                                                                                                                                                                                                                                                                        |
| {{SpecName('HTML5.1', "dom.html#the-lang-and-xml:lang-attributes", "lang")}}         | {{Spec2('HTML5.1')}}     | {{SpecName('HTML WHATWG')}} のスナップショット。{{SpecName('HTML5 W3C')}} から変更なし。                                                                                                                                                                                                                                            |
| {{SpecName('HTML5 W3C', "dom.html#the-lang-and-xml:lang-attributes", "lang")}}     | {{Spec2('HTML5 W3C')}}     | {{SpecName('HTML WHATWG')}} のスナップショット。`xml:lang` の振る舞いと言語判断のアルゴリズムを定義。真にグローバルな属性となった。                                                                                                                                                                                                        |
| {{SpecName('HTML4.01', 'struct/dirlang.html#h-8.1', 'lang')}}                             | {{Spec2('HTML4.01')}}     | {{HTMLElement("applet")}}, {{HTMLElement("base")}}, {{HTMLElement("basefont")}}, {{HTMLElement("br")}}, {{HTMLElement("frame")}}, {{HTMLElement("frameset")}}, {{HTMLElement("iframe")}}, {{HTMLElement("param")}}, and {{HTMLElement("script")}} を除くすべての要素で対応。 |

## ブラウザーの互換性

{{Compat("html.global_attributes.lang")}}

## 関連情報

- すべての [グローバル属性](/ja/docs/Web/HTML/Global_attributes)
- [HTTP の `Content-Language` ヘッダー](/ja/docs/Web/HTTP/Headers/Content-Language)
