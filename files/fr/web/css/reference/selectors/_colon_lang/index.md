---
title: :lang()
slug: Web/CSS/Reference/Selectors/:lang
original_slug: Web/CSS/:lang
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La fonction de [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:lang()`** permet de définir la mise en forme d'un élément selon la langue dans laquelle il est écrit.

{{InteractiveExample("Démonstration CSS&nbsp;: :lang()", "tabbed-shorter")}}

```css interactive-example
*:lang(fr-FR) {
  outline: 2px solid deeppink;
}
```

```html interactive-example
<p lang="fr-FR">
  La musique pendant les trajets en voiture et les longs trajets ne pose pas de
  problème, mais utiliser des écouteurs n'est pas la meilleure chose à faire en
  conduisant.
</p>

<p lang="pl-PL">
  Gdy widzimy znak z narysowaną czaszką i napisem
  <strong lang="en-US">DANGER</strong> to lepiej nie wchodzić do środka.
</p>
```

> [!NOTE]
> En HTML, la langue d'un élément est déterminée par l'attribut [`lang`](/fr/docs/Web/HTML/Reference/Global_attributes#lang), l'élément {{HTMLElement("meta")}} et d'autres informations comme les en-têtes HTTP&nbsp;; pour les autres types de documents, d'autres méthodes peuvent être utilisées.

## Syntaxe

```css-nolint
:lang(<language-code> [,<language-code> ]*) {
  /* ... */
}
```

### Paramètre

- `<language-code>`
  - : La chaîne de caractères ({{cssxref("&lt;string&gt;")}}) qui définit la langue des éléments qu'on veut sélectionner.

## Description

Quand on sélectionne des langues, il y a une correspondance implicite par wildcard, donc `:lang(de-DE)` correspondra à `de-DE`, `de-DE-1996`, `de-Latn-DE`, `de-Latf-DE`, et `de-Latn-DE-1996`.
L'utilisation explicite de wildcards doit inclure une correspondance complète d'un sous-tag de langue, donc `:lang("*-F*")` est invalide mais `:lang("*-FR")` est valide.

## Exemples

### Correspondance des enfants d'une langue donnée

Dans cet exemple, la pseudo-classe `:lang` est utilisée pour faire correspondre le parent d'une citation en utilisant {{cssxref(":first-child")}}. Il ne s'agit pas de la seule solution pour ce type de problème, ni même de la meilleure (qui dépendra du type de document). Les valeurs Unicode sont utilisées pour certains caractères spéciaux de citation.

#### HTML

```html
<div lang="fr">
  <q>
    Cette citation française a
    <q>une citation</q>
    imbriquée.
  </q>
</div>

<div lang="de">
  <q>
    Cette citation allemande a
    <q>une citation</q>
    imbriquée.
  </q>
</div>

<div lang="en">
  <q>
    Cette citation anglaise a
    <q>une citation</q>
    imbriquée.
  </q>
</div>
```

#### CSS

```css
:lang(en) > q {
  quotes: "\201C" "\201D" "\2018" "\2019";
}
:lang(fr) > q {
  quotes: "« " " »";
}
:lang(de) > q {
  quotes: "»" "«" "\2039" "\203A";
}
```

#### Résultat

{{EmbedLiveSample('correspondance_des_enfants_dune_langue_donnee', '', '80')}}

### Correspondance de plusieurs langues

L'exemple suivant montre comment faire correspondre plusieurs langues en fournissant une liste de codes de langue séparés par des virgules.
Il est également possible d'utiliser un caractère générique pour faire correspondre les langues dans une plage de langues donnée.

#### HTML

```html
<p lang="nl">Dit is een Nederlandse paragraaf.</p>
<p lang="de">Dies ist ein deutscher Satz.</p>
<p lang="en">This is an English sentence.</p>
<p lang="en-GB">Matching the language range of English.</p>
<p lang="fr">Ceci est un paragraphe français.</p>
<p lang="fr-Latn-FR">Ceci est un paragraphe français en latin.</p>
```

```css hidden
p {
  margin: 0;
}
```

#### CSS

```css
/* Correspond à nl et de */
:lang("nl", "de") {
  color: green;
}

/* Omet les guillemets & correspondance insensible à la casse */
:lang(EN, FR) {
  color: blue;
}

/* Correspondance générique d'une plage de langues */
:lang("*-Latn") {
  color: red;
}
```

#### Result

{{EmbedLiveSample('correspondance_de_plusieurs_langues', '', '120')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La pseudo-classe {{cssxref(":dir")}} correspondant à la direction du texte
- L'attribut HTML [`lang`](/fr/docs/Web/HTML/Reference/Global_attributes/lang)
- L'attribut HTML [`translate`](/fr/docs/Web/HTML/Reference/Global_attributes/translate)
- Le référenciel {{RFC(5646, "Balises pour l'identification des langues (également connues sous le nom de BCP 47)")}}
