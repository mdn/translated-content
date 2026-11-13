---
title: "Attribut HTML universel : `lang`"
short-title: lang
slug: Web/HTML/Reference/Global_attributes/lang
l10n:
  sourceCommit: 8ed465762d06fa17f7cc6adb3e2be9b57df03e9b
---

[L'attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`lang`** aide à définir la langue d'un élément&nbsp;: la langue dans laquelle les éléments non modifiables sont écrits, ou la langue dans laquelle les éléments modifiables doivent être écrits par l'utilisateur·ice. L'attribut contient une seule {{Glossary("BCP 47 language tag", "balise de langue BCP 47")}}.

> [!NOTE]
> La langue est dans un état inconnu s'il n'y a aucune indication de langue nulle part. Il est recommandé de toujours définir une valeur appropriée pour cet attribut, en particulier en raison des [problèmes d'accessibilité](#problèmes_daccessibilité).

{{InteractiveExample("Démonstration HTML&nbsp;: lang", "tabbed-shorter")}}

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
  content: "(En anglais britannique) ";
}

[lang="fr"]::before {
  content: "(En français) ";
}
```

## Valeurs

L'attribut contient une seule {{Glossary("BCP 47 language tag", "balise de langue BCP 47")}}. Si la valeur de l'attribut est la _chaîne de caractères vide_ (`lang=""`), la langue est définie comme _inconnue_&nbsp;; si la balise de langue n'est pas valide selon BCP47, elle est définie comme _invalide_.

Si l'attribut `xml:lang` est également défini, la spécification HTML exige que les valeurs des attributs `lang` et `xml:lang` soient égales, sans tenir compte de la casse. L'attribut `xml:lang` a priorité.

Pour la pseudo-classe CSS {{CSSxRef(":lang")}}, deux noms de langues invalides sont différents si leurs noms sont différents. Ainsi, `:lang(es)` correspond à `lang="es-ES"` et `lang="es-419"`, `:lang(xyzzy)` ne correspond _pas_ à `lang="xyzzy-Zorp!"`.

### Héritage

Si un élément n'a pas d'attribut `lang` ou `xml:lang`, il hérite généralement de la langue de son [élément parent](/fr/docs/Web/API/Node/parentElement), ou de l'hôte ({{DOMxRef("ShadowRoot/host", "host")}}) si le nœud parent est une racine d'ombre ({{DOMxRef("ShadowRoot")}}). Si aucun ancêtre ne définit de langue, la langue peut également être définit par [`<meta http-equiv="content-language">`](/fr/docs/Web/HTML/Reference/Elements/meta/http-equiv#content-language) ou l'en-tête HTTP {{HTTPHeader("Content-Language")}}. Si aucune langue de contenu unique ne peut être déterminée à partir de ces indices, la valeur par défaut est la chaîne de caractères vide (avec _inconnue_ comme langue de contenu).

## Problèmes d'accessibilité

Le critère de succès WCAG 3.1.1 **exige** qu'une langue de page soit définie de manière à pouvoir être «&nbsp;déterminée par programme&nbsp;» (c'est-à-dire avec l'attribut **`lang`**).

Le critère de succès WCAG 3.1.2 exige que les pages comportant des **parties** dans différentes langues aient également les langues de ces parties définies. Encore une fois, l'attribut **`lang`** est le mécanisme correct pour cela.

L'objectif de ces exigences est principalement de permettre aux technologies d'assistance telles que les lecteurs d'écran d'utiliser la prononciation correcte.

Par exemple, le menu de langue sur ce site (MDN) inclut un attribut **`lang`** pour chaque entrée&nbsp;:

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
        href="/fr/docs/Web/HTML/Reference/Global_attributes/lang"
        rel="nofollow"
        id="translations-add">
        Ajouter une traduction
      </a>
    </li>
  </ul>
</div>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Tous les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)
- L'en-tête HTTP {{HTTPHeader("Content-Language")}}
- L'attribut HTML [`translate`](/fr/docs/Web/HTML/Reference/Global_attributes/translate)
