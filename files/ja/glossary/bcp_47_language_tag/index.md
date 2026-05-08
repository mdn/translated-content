---
title: BCP 47 言語タグ
slug: Glossary/BCP_47_language_tag
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

**BCP 47 言語タグ**とは、基本言語だけでなく、同時に文字体系や方言についても、特定の言語を正確に指定する文字列のことです。例えば、`en` は英語を指定しますが、`en-GB` と `en-US` は、それぞれイギリス英語とアメリカ英語を、より正確に指定します。

BCP 47 言語タグは、指定された言語に応じて異なる結果を出力するように設計された機能が実装されているウェブプラットフォーム上のあらゆる場所で使用され、{{glossary("internationalization", "国際化")}}に対応することができます。

例えば次のものがあります。

- HTML [`lang`](/ja/docs/Web/HTML/Reference/Global_attributes/lang) 属性
- HTML {{htmlelement("track")}} 要素
- {{jsxref("Temporal")}} オブジェクト
- {{domxref("CanvasRenderingContext2D.lang")}} プロパティ
- [翻訳と言語検出 API](/ja/docs/Web/API/Translator_and_Language_Detector_APIs)

## BCP 47 の構文

BCP 47 の完全な構文は {{rfc("5646")}} で規定されています。非常に詳細な言語の方言を特定することも可能ですが、実際の使用法はたいていもっと単純です。

言語タグは、ハイフンで区切られたサブタグで構成されており、それぞれのサブタグはその言語の特定の特性を示しています。最も一般的な 3 つのサブタグは以下の通りです。

- 言語サブタグ (Language subtag)
  - : 基本となる言語を定義する 2 文字または 3 文字のコードで、通常はすべて小文字で表記されます。例えば、英語の言語コードは `en`、バデシ語のコードは `bdz` です。
- 文字体系サブタグ (Script subtag) {{optional_inline}}
  - : このサブタグは、その言語で使用されている文字体系を定義するもので、常に 4 文字で構成され、最初の文字は大文字になります。例えば、点字によるフランス語は `fr-Brai`、カタカナで書かれた日本語は `ja-Kana` となります。

    > [!NOTE]
    > その言語が、英語のラテン文字表記のように極めて典型的な方法で書かれている場合、このサブタグを使用する必要はありません。

- 地域サブタグ (Region subtag) {{optional_inline}}
  - : このサブタグは、特定の地域における基底言語の方言を定義するもので、国コードに一致する２文字の大文字、または国以外の地域に一致する３桁の数値で構成されます。例えば、`es-ES` はスペインで話されているスペイン語を指し、`es-013` は中米で話されているスペイン語を指します。「国際スペイン語」の場合は、単に `es` となります。

文字体系サブタグと地域サブタグの両方が存在する場合、文字体系サブタグが地域サブタグの前に来ます。例えば、`ru-Cyrl-BY` は、ベラルーシで話されている、キリル文字で表記されたロシア語を表します。

## 関連情報

- [List of common primary language subtags](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags)
- [RFC 5646: Tags for Identifying Languages](https://datatracker.ietf.org/doc/html/rfc5646): BCP 47 言語タグが定義されているところ。
- [Choosing a Language Tag](https://www.w3.org/International/questions/qa-choosing-language-tags): 正しい言語タグを選択するための W3C 外d。
- [BCP 47 language subtag lookup](https://r12a.github.io/app-subtags/): 言語のサブタグコードを検索
