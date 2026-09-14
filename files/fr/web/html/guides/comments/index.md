---
title: Utiliser les commentaires HTML <!-- … -->
short-title: Commentaires
slug: Web/HTML/Guides/Comments
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Un **commentaire** HTML sert à ajouter des notes explicatives au balisage ou à empêcher le navigateur d'interpréter certaines parties du document.

Les commentaires commencent par la chaîne de caractères `<!--` et se terminent par la chaîne de caractères `-->`, généralement avec du texte entre les deux. Ce texte ne peut pas commencer par la chaîne de caractères `>` ou `->`, ne peut pas contenir les chaînes de caractères `-->` ou `--!>`, ni se terminer par la chaîne de caractères `<!-`, bien que `<!` soit autorisé.

Le navigateur ignore les commentaires lors de l'affichage du code. En d'autres termes, ils ne sont pas visibles sur la page, uniquement dans le code. Les commentaires HTML permettent d'écrire des notes utiles sur votre code ou votre logique.

Ce qui précède est également vrai pour les commentaires [XML](/fr/docs/Web/XML). De plus, en XML, comme dans le balisage [SVG](/fr/docs/Web/SVG) ou [MathML](/fr/docs/Web/MathML), un commentaire ne peut pas contenir la séquence de caractères `--`.

Les commentaires peuvent être utilisés sur une seule ligne ou sur plusieurs lignes. Ils peuvent être utilisés aux endroits suivants&nbsp;:

- Avant et après le {{Glossary("Doctype")}}
- Avant et après l'élément {{HTMLElement("html")}}
- Comme contenu de la plupart des éléments sauf&nbsp;: {{HTMLElement("script")}}, {{HTMLElement("style")}}, {{HTMLElement("title")}}, {{HTMLElement("textarea")}}, car ces éléments interprètent leur contenu comme du texte brut.

> [!NOTE]
> Les éléments `<script>` ne doivent pas contenir de commentaires HTML et doivent utiliser à la place les [commentaires JavaScript](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#commentaires). Il existait une pratique héritée consistant à entourer tout le contenu du script d'un commentaire HTML afin que les anciens navigateurs ne prenant pas en charge JavaScript ne l'affichent pas comme du texte. Ceci est désormais une [fonctionnalité obsolète de JavaScript lui-même](/fr/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#commentaires_html) et vous ne devez pas vous y fier.

## Syntaxe

```html
<!-- Commentaire -->
```

## Exemples

```html
<!-- Un commentaire sur une ligne -->

<!--
Un commentaire
qui s'étend
sur plusieurs
lignes
-->

<!-- Le commentaire ci-dessous désactive
   le HTML qu'il contient -->
<!--
<p>
   Ce contenu ne sera pas affiché.
</p>
-->
```

## Notes

Les commentaires HTML ne sont autorisés qu'en tant que contenu. Vous ne pouvez pas les utiliser à l'intérieur d'une balise, par exemple avant un {{Glossary("Attribute", "attribut")}} HTML.

Comme dans la plupart des langages de programmation qui utilisent la syntaxe de commentaire `<!-- -->`, les commentaires ne peuvent pas être imbriqués. En d'autres termes, la première occurrence de `-->` qui suit une occurrence de `<!--` ferme le commentaire.

Bien que les commentaires commencent par un `<` et se terminent par un `>`, un commentaire n'est pas un élément HTML.

## Spécifications

{{Specifications}}

## Voir aussi

- [Commentaires en JavaScript](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#commentaires)
- [Commentaires en CSS](/fr/docs/Web/CSS/Guides/Syntax/Comments)
- L'API {{DOMxRef("Comment")}} (`Comment` hérite de {{DOMxRef("Node")}})
