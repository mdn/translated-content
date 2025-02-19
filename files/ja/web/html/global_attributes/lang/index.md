---
title: lang
slug: Web/HTML/Global_attributes/lang
l10n:
  sourceCommit: ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{HTMLSidebar("Global_attributes")}}

**`lang`** [グローバル属性](/ja/docs/Web/HTML/Global_attributes)は、要素の言語をはっきりさせるのに役立ちます。 編集不可能な要素の場合は書かれている言語、または編集可能な要素の場合はユーザーが書くべき言語です。この属性は、{{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}で定義されている形式で、単一の「言語タグ」を格納しています。

> **メモ:** `lang` の既定値は空文字列であり、これは _unknown_ に相当します。よって、この属性には適切な値を常に指定することが推奨されます。

{{EmbedInteractiveExample("pages/tabbed/attribute-lang.html","tabbed-shorter")}}

属性値が空文字列 (`lang=""`) の場合、言語は _unknown_ に設定されます。また、BCP47 に従う有効な言語タグでない場合、_invalid_ に設定されます。

[`xml:lang`](/ja/docs/Web/HTML/Global_attributes#attr-xml:lang) 属性のほうが優先されるため、`lang` 属性を設定しても使われない場合があります。

CSS の {{cssxref(":lang")}} 擬似クラスでは、名前の異なる無効な言語名どうしは異なるものとされます。つまり、`:lang(es)` が `lang="es-ES"` や `lang="es-419"` にも一致するのに対し、 `:lang(xyzzy)` は `lang="xyzzy-Zorp!"` には一致しません。

## 言語タグと構文

BCP47 の完全な構文は、ものすごくピンポイントに方言まで示せるようにとても複雑になっていますが、それよりずっと単純に使われることのほうがほとんどです。

言語タグはハイフンで区切られた*言語サブタグ*より成り、それぞれのサブタグは言語の特定の特性を示します。最もよく使われるサブタグは次の 3 つです。

- 言語サブタグ
  - : 必須です。基準とする言語を指定する 2, 3 文字のコードで、ふつうすべて小文字で書かれます。例えば、英語の言語コードは `en` であり、バデシ語のコードは `bdz` です。
- 文字体系サブタグ
  - : 任意です。このサブタグは、その言語を書くのにどの文字体系が使われているか指定するもので、常に 4 文字で先頭は大文字です。例えば、点字（ブライユ）で書かれたフランス語は `fr-Brail`、カタカナで書かれた日本語は `ja-Kana` となります。その言語がとても一般的な方法で記述されているとき、例えば英語にラテン文字を使う場合などは、このサブタグを使用する必要はありません。
- 地域サブタグ
  - : 任意です。このサブタグは基準とした言語のうち特定の場所の方言を指定するもので、国コードを示す大文字 2 文字または地域を示す 3 桁の数字です。例えば、スペインで使われているスペイン語は `es-ES` であり、中央アメリカで使われているスペイン語は `es-013` です。「国際スペイン語」は単なる `es` になります。

文字体系サブタグ・地域サブタグの両方がある場合は、この順番で配置します。ベラルーシで使われているキリル文字によるロシア語なら、`ru-Cyrl-BY` となります。

言語の正しいサブタグコードを探すには、 [the Language Subtag Lookup](https://r12a.github.io/app-subtags/) を見てみてください。

## アクセシビリティ上の考慮次項

WCAG 成功基準 3.1.1 では、「プログラムによって決定される」方法で（つまり、**`lang`** 属性を介して）ページの言語を指定することが**必須となっています**。

WCAG 成功基準 3.1.2 では、ページ内に言語の異なる**部分**があるときはそれらの部分についても言語を指定することが必須となっています。ここでも、**`lang`** 属性がそのための正しいやり方です。

これらが必須とされているのは、主にスクリーンリーダーなどの支援技術が正しい発音を呼び出せるようにするためです。

例えば、このサイト（MDN）の言語メニューでは、各項目に **`lang`** 属性を持たせています。

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

## 継承

`lang` 属性を持っていない要素については、[親ノード](/ja/docs/Glossary/Node/DOM)に指定された `lang` の値が継承されます。場合によってはその親から、さらにその親から…、と継承されることになります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- すべての [グローバル属性](/ja/docs/Web/HTML/Global_attributes)
- [HTTP の `Content-Language` ヘッダー](/ja/docs/Web/HTTP/Headers/Content-Language)
- HTML の [`translate`](/ja/docs/Web/HTML/Global_attributes#translate) 属性
