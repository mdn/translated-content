---
title: Sémantique
slug: Glossary/Semantics
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

En programmation, la **sémantique** fait référence _au sens_ d'une partie de code — par exemple «&nbsp;quel effet aura l'exécution de cette ligne de JavaScript&nbsp;?&nbsp;» ou «&nbsp;quel est le rôle ou le but de cet élément HTML&nbsp;» (plutôt que «&nbsp;à quoi ressemble-t-il&nbsp;?&nbsp;».)

## La sémantique en JavaScript

En JavaScript, considérez une fonction qui prend une chaîne de caractères en paramètre et retourne un élément HTML {{HTMLElement("li")}} avec cette chaîne comme `textContent`. Auriez-vous besoin de regarder le code pour comprendre ce que fait la fonction si elle s'appelle `build('Peach')` ou `createLiWithContent('Peach')`&nbsp;?

## La sémantique en CSS

En CSS, imaginez la mise en forme d'une liste dont les éléments `li` représentent différents types de fruits. Sauriez-vous quelle partie du DOM est sélectionnée avec `div > ul > li` ou `.fruits__item`&nbsp;?

## La sémantique en HTML

En HTML, par exemple, l'élément HTML `{{HTMLElement("Heading_Elements", "&lt;h1&gt;")}}` est un élément sémantique qui donne au texte qu'il contient le rôle (ou le sens) de «&nbsp;titre de premier niveau de votre page&nbsp;».

```html
<h1>Ceci est un titre de premier niveau</h1>
```

Par défaut, la plupart des [feuilles de style de l'agent utilisateur](/fr/docs/Web/CSS/Guides/Cascade/Introduction#feuilles_de_style_de_lagent_utilisateur) des navigateurs appliqueront à un `{{HTMLElement("Heading_Elements", "&lt;h1&gt;")}}` une grande taille de police pour le faire _ressembler_ à un titre (bien que vous puissiez le styliser pour qu'il ressemble à tout ce que vous voulez).

À l'inverse, vous pouvez faire _ressembler_ n'importe quel élément à un titre de premier niveau. Considérez l'exemple suivant&nbsp;:

```html
<span style="font-size: 32px; margin: 21px 0;">
  Est-ce un titre de premier niveau&nbsp;?
</span>
```

Cela sera affiché comme un titre de premier niveau, mais sans en avoir la valeur sémantique, il n'y aura donc aucun des bénéfices supplémentaires tels que ceux décrits ci-dessus. Il est donc préférable d'utiliser le bon élément HTML pour la bonne tâche.

Le code HTML doit être écrit pour représenter les _données_ qui seront affichées, et non en fonction de leur présentation par défaut. La présentation (c'est-à-dire l'apparence) relève uniquement de la responsabilité de la [CSS](/fr/docs/Web/CSS).

Voici quelques avantages à écrire un balisage sémantique&nbsp;:

- Les moteurs de recherche considéreront son contenu comme des mots-clés importants pour influencer le classement de la page dans les résultats de recherche (voir {{Glossary("SEO")}})
- Les lecteurs d'écran peuvent l'utiliser comme repère pour aider les utilisateur·ice·s malvoyant·e·s à naviguer sur une page
- Trouver des blocs de code significatifs est bien plus facile que de chercher parmi une multitude de `div`, avec ou sans classes sémantiques ou nommées
- Suggère au·à la développeur·euse le type de données qui sera affiché
- La dénomination sémantique reflète la bonne pratique de nommage des éléments ou composants personnalisés

Lorsque vous choisissez quel balisage utiliser, demandez-vous&nbsp;: «&nbsp;Quel(s) élément(s) décrivent/représentent le mieux les données que je vais afficher&nbsp;?&nbsp;» Par exemple&nbsp;: s'agit-il d'une liste de données&nbsp;?&nbsp;; ordonnée, non ordonnée&nbsp;?&nbsp;; d'un article avec des sections et un encadré d'informations associées&nbsp;?&nbsp;; d'une liste de définitions&nbsp;?&nbsp;; d'une figure ou d'une image nécessitant une légende&nbsp;?&nbsp;; doit-elle comporter un en-tête et un pied de page en plus de l'en-tête et du pied de page du site&nbsp;?&nbsp;; etc.

## Les éléments sémantiques

Ce sont _quelques-uns_ des quelque 100 [éléments](/fr/docs/Web/HTML/Reference/Elements) sémantiques disponibles&nbsp;:

- {{HTMLElement("article")}}
- {{HTMLElement("aside")}}
- {{HTMLElement("details")}}
- {{HTMLElement("figcaption")}}
- {{HTMLElement("figure")}}
- {{HTMLElement("footer")}}
- {{HTMLElement("form")}}
- {{HTMLElement("header")}}
- {{HTMLElement("main")}}
- {{HTMLElement("mark")}}
- {{HTMLElement("nav")}}
- {{HTMLElement("section")}}
- {{HTMLElement("summary")}}
- {{HTMLElement("time")}}

## Voir aussi

- [Référence des éléments HTML](/fr/docs/Web/HTML/Reference/Elements#sémantique_du_texte_en_ligne) sur MDN
- [Utiliser les sections HTML et les plans de document](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements#notes_dutilisation) sur MDN
- [Sémantique des langages de programmation](https://fr.wikipedia.org/wiki/Sémantique_des_langages_de_programmation) sur Wikipédia
- Termes associés du glossaire&nbsp;:
  - {{Glossary("SEO")}}
