---
title: lang
slug: Web/HTML/Global_attributes/lang
l10n:
  sourceCommit: ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{HTMLSidebar("Global_attributes")}}

**`lang`** [グローバル属性](/ja/docs/Web/HTML/Global_attributes)は、要素に言語を定義するのに役立ちます。 編集不可能な要素の場合は書かれている言語、または編集可能な要素の場合はユーザーが書くべき言語です。この属性は、{{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}で定義されている形式で、単一の「言語タグ」を格納しています。

> **メモ:** `lang` の既定値は `unknown` であるため、この属性には常に適切な値を指定することが推奨されます。

{{EmbedInteractiveExample("pages/tabbed/attribute-lang.html","tabbed-shorter")}}

属性値が空文字列 (`lang=""`) の場合、言語は _unknown_ に設定されます。言語タグが BCP47 に準拠していない場合は、_invalid_ に設定されます。

**lang** 属性が設定されていても、[**xml:lang**](/ja/docs/Web/HTML/Global_attributes#attr-xml:lang) 属性が優先され、考慮されない場合があります。

CSS の {{cssxref(":lang")}} 擬似クラスでは、無効な 2 つの言語名は、その名前が異なれば異なるものになります。つまり、`:lang(es)` は `lang="es-ES"` と `lang="es-419"` の両方に一致しますが、 `:lang(xyzzy)` は `lang="xyzzy-Zorp!"` には一致しません。

## 言語タグと構文

BCP47 の完全な構文は、細かい特定の言語の方言まで示せるようにとても複雑になっていますが、ほとんどの使い方ではずっと単純です。

言語タグはハイフンで区切られた*言語サブタグ*より成り、それぞれのサブタグは言語の特定の特性を示します。３つのサブタグがもっともよく使われます。

- 言語サブタグ
  - : 必須です。基本言語を定義する２～３文字のコードで、ふつうすべて小文字で書かれます。例えば、英語の言語コードは `en` であり、バデシ語のコードは `bdz` です。
- 文字体系サブタグ
  - : 任意です。このサブタグは、言語で使われる文字体系を定義し、常に４文字の長さで、最初の文字は大文字です。例えば、ブライユ（点字）のフランス語は `fr-Brail` であり、 `ja-Kana` はカタカナで書かれた日本語です。言語がとても一般的な方法で記述される場合、例えば英語でアルファベットを使う場合などは、このサブタグを使用する必要はありません。
- 地域サブタグ
  - : 任意です。このサブタグは基本言語の特定の場所における方言を定義し、国コードを示す大文字 2 文字または地域を示す 3 桁の数字です。例えば、`es-ES` はスペインで使われているスペイン語であり、`es-013` は中央アメリカで使われているスペイン語です。「国際スペイン語」は単なる `es` になります。

両方がある場合、文字体系サブタグは地域サブタグよりも先に置きます。 — `ru-Cyrl-BY` はベラルーシで使われているキリル文字によるロシア語です。

言語の正しいサブタグコードを探すには、 [the Language Subtag Lookup](https://r12a.github.io/app-subtags/) を見てみてください。

## アクセシビリティ

WCAG 成功基準 3.1.1 では、ページの言語が「プログラムによって決定される」方法で（つまり、**`lang`** 属性を介して）指定することを**要求しています**。

WCAG 成功基準 3.1.2 は、異なる言語の**部分**があるページには、それらの部分の言語も指定することを要求しています。ここでも、**`lang`** 属性がそのための正しいメカニズムです。

これらの要求の目的は、主にスクリーンリーダーなどの支援技術が正しい発音を呼び出すことができるようにすることです。

例えば、このサイト（MDN）の言語メニューには、各項目に **`lang`** 属性が記載されています。

```html
<div class="dropdown-container language-menu">
  <button
    id="header-language-menu"
    type="button"
    class="dropdown-menu-label"
    aria-haspopup="true"
    aria-owns="language-menu"
    aria-label="Current language is English. Choose your preferred language.">
    English
    <span class="dropdown-arrow-down" aria-hidden="true">▼</span>
  </button>
  <ul
    id="language-menu"
    class="dropdown-menu-items right show"
    aria-expanded="true"
    role="menu">
    <li lang="ca" role="menuitem">
      <a href="/ca/docs/Web/HTML/Global_attributes/lang" title="Catalan">
        <bdi>Català</bdi>
      </a>
    </li>
    <li lang="de" role="menuitem">
      <a href="/de/docs/Web/HTML/Globale_Attribute/lang" title="German">
        <bdi>Deutsch</bdi>
      </a>
    </li>
    <li lang="es" role="menuitem">
      <a href="/es/docs/Web/HTML/Atributos_Globales/lang" title="Spanish">
        <bdi>Español</bdi>
      </a>
    </li>
    <li lang="fr" role="menuitem">
      <a href="/fr/docs/Web/HTML/Attributs_universels/lang" title="French">
        <bdi>Français</bdi>
      </a>
    </li>
    <li lang="ja" role="menuitem">
      <a href="/ja/docs/Web/HTML/Global_attributes/lang" title="Japanese">
        <bdi>日本語</bdi>
      </a>
    </li>
    <li lang="ko" role="menuitem">
      <a href="/ko/docs/Web/HTML/Global_attributes/lang" title="Korean">
        <bdi>한국어</bdi>
      </a>
    </li>
    <li lang="pt-BR" role="menuitem">
      <a
        href="/pt-BR/docs/Web/HTML/Global_attributes/lang"
        title="Portuguese (Brazilian)">
        <bdi>Português (do&nbsp;Brasil)</bdi>
      </a>
    </li>
    <li lang="ru" role="menuitem">
      <a href="/ru/docs/Web/HTML/Global_attributes/lang" title="Russian">
        <bdi>Русский</bdi>
      </a>
    </li>
    <li lang="uk" role="menuitem">
      <a
        href="/uk/docs/Web/HTML/%D0%97%D0%B0%D0%B3%D0%B0%D0%BB%D1%8C%D0%BD%D1%96_%D0%B0%D1%82%D1%80%D0%B8%D0%B1%D1%83%D1%82%D0%B8/lang"
        title="Ukrainian">
        <bdi>Українська</bdi>
      </a>
    </li>
    <li lang="zh-CN" role="menuitem">
      <a
        href="/zh-CN/docs/Web/HTML/Global_attributes/lang"
        title="Chinese (Simplified)">
        <bdi>中文 (简体)</bdi>
      </a>
    </li>
    <li>
      <a
        href="/en-US/docs/Web/HTML/Global_attributes/lang$locales"
        rel="nofollow"
        id="translations-add">
        Add a translation
      </a>
    </li>
  </ul>
</div>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- すべての [グローバル属性](/ja/docs/Web/HTML/Global_attributes)
- [HTTP の `Content-Language` ヘッダー](/ja/docs/Web/HTTP/Headers/Content-Language)
- HTML の [`translate`](/ja/docs/Web/HTML/Global_attributes#translate) 属性
