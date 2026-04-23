---
title: Note de changements MDN Web Docs
slug: MDN/Writing_guidelines/Changelog
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Ce document fournit un historique des processus, constructions et bonnes pratiques de contenu MDN qui ont changé, ainsi que la date de ces changements. Il permet aux contributeur·ice·s régulier·ère·s de vérifier ce qui a évolué dans le processus de création de contenu pour MDN.

## Octobre 2022

La [documentation du projet MDN](/fr/docs/MDN) a été actualisée et organisée en deux grandes catégories&nbsp;:

- **Rédaction&nbsp;:** La documentation sur la façon d'écrire pour MDN, ce que nous documentons, les définitions d'expérimental, les guides de style, etc. se trouvent dans les pages [Règles de rédaction](/fr/docs/MDN/Writing_guidelines).
- **Communauté&nbsp;:** Les informations sur l'étiquette open source, les discussions, les processus pour les pull requests et les issues, les utilisateur·ice·s et les équipes, ainsi que des conseils généraux pour les contributeur·ice·s se trouvent dans les pages [Communauté](/fr/docs/MDN/Community).

Pour plus de détails sur les changements, voir l'article de blog [Refonte de la documentation de contribution MDN Web Docs <sup>(angl.)</sup>](https://hacks.mozilla.org/2022/10/revamp-of-mdn-web-docs-contribution-docs/) publié sur Mozilla Hacks.

## Novembre 2021

La conversion vers Markdown est terminée, donc l'ancien guide de style CSS est supprimé et redirigé vers la page Markdown sur MDN.

## Juillet 2021

### Mises à jour du guide de style CSS pour Markdown

Mises à jour multiples du guide de style CSS pour refléter la transition vers Markdown et encourager les auteur·ice·s à écrire du HTML compatible Markdown.

- Les encadrés de note et d'avertissement n'ont plus de titre `<h4>` séparé (par exemple, `<h4>Warning</h4>`).

  Voir notre guide [Markdown sur MDN](/fr/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#notes_avertissements_et_encarts) pour la syntaxe correcte.

- La classe `seoSummary` ne doit plus être utilisée.
- La classe `standard-table` ne doit plus être utilisée. Le style fourni par cette classe est désormais appliqué par défaut aux tableaux.
- L'élément {{HTMLElement("details")}} ne doit plus être utilisé.
- Les classes `hidden`, `example-good` et `example-bad` étaient principalement utilisées pour les blocs de code mais pouvaient l'être sur d'autres éléments. Elles ne peuvent désormais être utilisées que sur les blocs de code.

## Février 2021

### Blocs de syntaxe JavaScript et API multilignes

Auparavant, les blocs de syntaxe des méthodes JavaScript natives et des WebAPI pouvant être utilisés de plusieurs façons différentes (c'est-à-dire avec divers paramètres optionnels) étaient souvent rédigés en utilisant la [notation formelle BNF](fr.wikipedia.org/wiki/Forme_de_Backus-Naur). Notamment, les crochets étaient utilisés pour indiquer les paramètres optionnels.

Cela posait problème — de nombreux développeur·euse·s étaient confus·es par cette notation, et elle entrait en conflit avec des formes de syntaxe valides dans d'autres langages (par exemple, `[]` est aussi un tableau en JavaScript).

Désormais, nous écrivons chaque forme syntaxique d'une méthode sur une ligne distincte à l'intérieur du bloc de syntaxe. Voir [Sections de syntaxe > Lignes multiples/Paramètres optionnels](/fr/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections#lignes_multiplesparamètres_optionnels) pour plus d'informations et des exemples.

### Documentation des mixins

Les [mixins d'interface <sup>(angl.)</sup>](https://heycam.github.io/webidl/#idl-interface-mixins) dans Web IDL sont utilisés dans les spécifications pour définir des API Web.
Pour les développeur·euse·s web, ils ne sont pas observables directement&nbsp;; ils servent d'aides pour éviter de répéter les définitions d'API.

Auparavant, nous définissions souvent une page d'accueil pour une classe mixin elle-même, et placions les membres définis sur des sous-pages en dessous,
avant de faire des liens vers celles-ci depuis les pages d'accueil des interfaces qui implémentent ces mixins.
Cela était source de confusion pour les lecteur·ice·s car les mixins sont des constructions de spécification — on n'accède jamais aux membres définis via les classes mixins.
Pour éviter cette confusion, nous plaçons désormais les pages des membres définis sur les mixins directement sous les pages des classes implémentant ces mixins.
Pour plus de détails, voir la page de guide sur
[comment rédiger une référence d'API](/fr/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#mixins)
et la discussion ayant mené à ce changement sur [mdn/content#1940 <sup>(angl.)</sup>](https://github.com/mdn/content/issues/1940).

## Janvier 2021

### Balises pour les encadrés de note et d'avertissement

Auparavant sur MDN, les encadrés de note et d'avertissement étaient entourés d'éléments `<div>` avec les classes `note` et `warning` respectivement. Le plus souvent, leur premier paragraphe commençait par un texte `note` ou `warning` entouré d'une balise `<strong>`.

En janvier, cela a changé — l'attribut `class` doit désormais inclure une classe supplémentaire `notecard`, et le texte en gras est maintenant inclus dans un titre en haut du bloc.

Voir notre guide [Markdown sur MDN](/fr/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#notes_avertissements_et_encarts) pour plus d'informations et des exemples de syntaxe.
