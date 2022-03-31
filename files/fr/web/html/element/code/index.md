---
title: '<code> : l''élément de code en ligne'
slug: Web/HTML/Element/code
tags:
  - Code
  - Element
  - HTML
  - HTML text-level semantics
  - Inline Code
  - Reference
  - Web
translation_of: Web/HTML/Element/code
browser-compat: html.elements.code
---
{{HTMLRef}}

L'élément HTML **`<code>`** représente un court fragment de code machine. Par défaut, l'agent utilisateur utilise une police à chasse fixe (_monospace_) afin d'afficher le texte contenu dans cet élément.

{{EmbedInteractiveExample("pages/tabbed/code.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#palpable_content"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >Contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Aucune, la balise d'ouverture et la balise de fermeture sont
        obligatoires.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément acceptant du
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Pas de rôle correspondant</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLElement"><code>HTMLElement</code></a
        >. Jusqu'à Gecko 1.9.2 (Firefox 4) inclus, Firefox implémentait
        l'interface
        <a href="/fr/docs/Web/API/HTMLSpanElement"
          ><code>HTMLSpanElement</code></a
        >
        pour cet élément.
      </td>
    </tr>
  </tbody>
</table>

## Attributs

Cet élément prend uniquement en charge [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

## Exemples

Un paragraphe de texte qui contient `<code>` :

```html
<p>
  La fonction <code>selectAll()</code> met en évidence tout le texte
  du champ de saisie afin que l'utilisateur puisse, par exemple, le
  copier ou le supprimer.
</p>
```

La sortie générée par ce HTML ressemble à ceci :

{{EmbedLiveSample('Exemples', '', 100)}}

## Notes

Pour représenter plusieurs lignes de code, enveloppez l'élément `<code>` dans un élément [`<pre>`](/fr/docs/Web/HTML/Element/pre). L'élément `<code>` en lui-même ne représente qu'une seule phrase de code ou ligne de code.

Une règle CSS peut être définie pour le sélecteur `code` afin de remplacer la fonte par défaut du navigateur. Les préférences définies par l'utilisateur peuvent avoir la priorité sur la règle CSS spécifiée.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément [`<samp>`](/fr/docs/Web/HTML/Element/samp)
- L'élément [`<kbd>`](/fr/docs/Web/HTML/Element/kbd)
- L'élément [`<var>`](/fr/docs/Web/HTML/Element/var)
- L'élément [`<pre>`](/fr/docs/Web/HTML/Element/pre)
