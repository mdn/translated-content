---
title: "`lang` グローバル属性 (HTML)"
short-title: lang
slug: Web/HTML/Reference/Global_attributes/lang
l10n:
  sourceCommit: 8ed465762d06fa17f7cc6adb3e2be9b57df03e9b
---

**`lang`** [グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)は、要素の言語を定義するために使用します。 編集不可能な要素の場合は書かれている言語、または編集可能な要素の場合はユーザーが書くべき言語です。この属性には、単一の {{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}を記述します。

> [!NOTE]
> どこにも言語の指定が示されていない場合、その言語の状態は不明となります。特に[アクセシビリティの注意事項](#アクセシビリティの注意事項)があるため、この属性には常に適切な値を指定することが推奨されます。

{{InteractiveExample("HTML デモ: lang", "tabbed-shorter")}}

```html interactive-example
<p>This paragraph is English, but the language is not specifically defined.</p>

<p lang="en-GB">This paragraph is defined as British English.</p>

<p lang="fr">Ce paragraphe est défini en français.</p>
```

```css interactive-example
p::before {
  padding-right: 5px;
}

[lang="en-GB"]::before {
  content: "（イギリス英語で）";
}

[lang="fr"]::before {
  content: "（フランス語で）";
}
```

## 値

この属性には、単一の {{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}が含まれています。属性の値が空文字 (`lang=""`) の場合、言語は「不明」に設定されます。また、言語タグが BCP47 に準拠していない場合は、「無効」に設定されます。

`xml:lang` 属性が同時に指定されている場合、HTML 仕様では、`lang` 属性と `xml:lang` 属性の値が大文字と小文字を区別せずに等しくなければならないと要求されています。この場合、`xml:lang` 属性が優先されます。

CSS の {{cssxref(":lang")}} 擬似クラスでは、無効な 2 つの言語名は、その名前が異なれば異なるものになります。つまり、`:lang(es)` は `lang="es-ES"` と `lang="es-419"` の両方に一致しますが、 `:lang(xyzzy)` は `lang="xyzzy-Zorp!"` とは一致しません。

### 継承

要素に `lang` または `xml:lang` 属性がない場合、その要素は[親要素](/ja/docs/Web/API/Node/parentElement)の言語を継承します。親ノードが {{domxref("ShadowRoot/host", "host")}} である場合は、{{domxref("ShadowRoot/host", "host")}} の言語を継承します。
言語が設定されている祖先要素がない場合、[`<meta http-equiv="content-language">`](/ja/docs/Web/HTML/Reference/Elements/meta/http-equiv#content-language) または HTTP の {{HTTPHeader("Content-Language")}} ヘッダーによって言語を指定することも可能です。これらの手がかりから単一のコンテンツ言語を特定できない場合、デフォルトは空文字列（コンテンツ言語として「不明」が指定されます）となります。

## アクセシビリティの注意事項

WCAG 成功基準 3.1.1 の**要件**として、ページの言語が「プログラムによって決定される」方法で（つまり、**`lang`** 属性を介して）指定することが求められています。

WCAG 成功基準 3.1.2 では、言語が異なる**部分**があるページには、それらの部分の言語も指定することを要件となっています。この場合も、**`lang`** 属性がそのための正しい方法です。

これらの要件は、主にスクリーンリーダーなどの支援技術が、正しい発音を行うことができるようにするためのものです。

例えば、このサイト (MDN) の言語メニューには、各項目に **`lang`** 属性が記載されています。

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
    <li role="menuitem">
      <a
        href="/ca/docs/Web/HTML/Reference/Global_attributes/lang"
        title="Catalan">
        <bdi lang="ca">Català</bdi>
      </a>
    </li>
    <li role="menuitem">
      <a
        href="/de/docs/Web/HTML/Reference/Global_attributes/lang"
        title="German">
        <bdi lang="de">Deutsch</bdi>
      </a>
    </li>
    <li role="menuitem">
      <a
        href="/es/docs/Web/HTML/Reference/Global_attributes/lang"
        title="Spanish">
        <bdi lang="es">Español</bdi>
      </a>
    </li>
    <li role="menuitem">
      <a
        href="/fr/docs/Web/HTML/Reference/Global_attributes/lang"
        title="French">
        <bdi lang="fr">Français</bdi>
      </a>
    </li>
    <li role="menuitem">
      <a
        href="/ja/docs/Web/HTML/Reference/Global_attributes/lang"
        title="Japanese">
        <bdi lang="ja">日本語</bdi>
      </a>
    </li>
    <li role="menuitem">
      <a
        href="/ko/docs/Web/HTML/Reference/Global_attributes/lang"
        title="Korean">
        <bdi lang="ko">한국어</bdi>
      </a>
    </li>
    <li role="menuitem">
      <a
        href="/pt-BR/docs/Web/HTML/Reference/Global_attributes/lang"
        title="Portuguese (Brazilian)">
        <bdi lang="pt-BR">Português (do&nbsp;Brasil)</bdi>
      </a>
    </li>
    <li role="menuitem">
      <a
        href="/ru/docs/Web/HTML/Reference/Global_attributes/lang"
        title="Russian">
        <bdi lang="ru">Русский</bdi>
      </a>
    </li>
    <li role="menuitem">
      <a
        href="/uk/docs/Web/HTML/Reference/Global_attributes/lang"
        title="Ukrainian">
        <bdi lang="uk">Українська</bdi>
      </a>
    </li>
    <li role="menuitem">
      <a
        href="/zh-CN/docs/Web/HTML/Reference/Global_attributes/lang"
        title="Chinese (Simplified)">
        <bdi lang="zh-Hans">中文 (简体)</bdi>
      </a>
    </li>
    <li>
      <a
        href="/ja/docs/Web/HTML/Reference/Global_attributes/lang"
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

- すべての [グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)
- [HTTP の `Content-Language` ヘッダー](/ja/docs/Web/HTTP/Reference/Headers/Content-Language)
- HTML の [`translate`](/ja/docs/Web/HTML/Reference/Global_attributes/translate) 属性
