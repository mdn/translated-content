---
title: IDL (インターフェイス記述言語)
slug: Glossary/IDL
l10n:
  sourceCommit: a4d73f3e2a41b98e26f8f39af143338ad4900bd5
---

{{GlossarySidebar}}

**IDL** (_Interface Description Language_、インターフェイス記述言語) は、特定のプログラミング言語とは別にオブジェクトのインターフェイスを指定するために使用される汎用言語です。

## コンテンツ属性と IDL 属性

HTML では、ほとんどの属性に二つの側面があります。**コンテンツ属性**と **IDL 属性**です。

コンテンツ属性は、コンテンツ (HTML コード) から設定したままの属性で、 {{domxref("element.setAttribute()")}} で設定したり、 {{domxref("element.getAttribute()")}} で取得したりすることができます。コンテンツ属性は、期待される値が整数でなければならない場合でも、常に文字列です。例えば、コンテンツ属性を使用して {{HTMLElement("input")}} 要素の `maxlength` を 42 に設定するには、その要素で `setAttribute("maxlength", "42")` を呼び出す必要があります。

IDL 属性は JavaScript のプロパティとしても知られています。これらは、 <code class="moz-txt-verticalline">element.foo</code> のような JavaScript プロパティを使って読み込んだり、設定したりすることができる属性です。 IDL 属性は、値を取得したときに値を返すために、その下にあるコンテンツ属性を常に使用しようとしています (しかし、変換するかもしれません) し、設定したときにコンテンツ属性に何かを保存しようとしています。言い換えれば、 IDL 属性は、本質的にはコンテンツ属性を反映します。

ほとんどの場合、 IDL 属性は実際に使われている通りの値を返します。例えば、 {{HTMLElement("input")}} 要素の既定の `type` は "text" なので、 `input.type="foobar"` と設定すると、 `<input>` 要素の型は (外観と動作において) text になりますが、コンテンツ属性の "type" の値は "foobar" になります。しかし、IDL 属性 `type` は文字列 "text" を返します。

IDL 属性は必ずしも文字列とは限らず、例えば `input.maxlength` は数値 (signed long) です。 IDL 属性を使用する際には、希望する型の値を読み込んだり設定したりしますので、 `input.maxlength` は常に数値を返すでしょうし、 `input.maxlength` を設定すると、数値を要求します。他の型を渡した場合、型変換のための標準的な JavaScript のルールで指定されているように、自動的に数値に変換されます。

IDL 属性は、 unsigned long、 URL、 論理型など、[他の型を反映](https://www.whatwg.org/specs/web-apps/current-work/multipage/urls.html#reflecting-content-attributes-in-idl-attributes)することができます。残念ながら、明確なルールはなく、 IDL 属性が対応するコンテンツ属性と連動してどのように振る舞うかは、属性に依存します。ほとんどの場合、仕様書で定められた規則に従いますが、そうでない場合もあります。 HTML の仕様は、これを可能な限り開発者に優しいものにしようとしていますが、様々な理由 (主に歴史的な理由) で、属性によっては (例えば `select.size` など) 奇妙な振る舞いをすることもありますので、それらが正確にどのように振る舞うかを理解するには仕様書を読んでください。

## 関連情報

- ウィキペディアの[インタフェース記述言語](https://ja.wikipedia.org/wiki/インタフェース記述言語)
- [HTML 属性リファレンス](/ja/docs/Web/HTML/Reference/Attributes)
- [インターフェイス定義言語](https://people.eecs.berkeley.edu/~messer/netappc/Supplements/10-idl.pdf)（英語）
