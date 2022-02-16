---
title: Éléments de bloc
slug: Web/HTML/Block-level_elements
tags:
  - Beginner
  - Development
  - Débutant
  - HTML
  - HTML5
  - Web
translation_of: Web/HTML/Block-level_elements
original_slug: Web/HTML/Éléments_en_bloc
---
Les éléments HTML (**Hypertext Markup Language**) étaient historiquement catégorisés comme des éléments de type "block" ou de type "inline". Comme il s'agit d'une caractéristique de présentation, elle est aujourd'hui spécifiée par CSS dans la [disposition en flux](/fr/docs/Web/CSS/CSS_Flow_Layout). Un élément de type bloc occupe tout l'espace horizontal de son élément parent (conteneur), et un espace vertical égal à la hauteur de son contenu, créant ainsi un bloc. Dans cet article, nous examinerons les éléments HTML de type bloc et comment ils diffèrent des [éléments en ligne](/fr/docs/Web/HTML/Inline_elements).

Les navigateurs affichent généralement un élément de type bloc avec une nouvelle ligne avant et après l'élément. Vous pouvez les visualiser comme une pile de boîtes.

> **Note :** Un élément de bloc commence toujours sur une nouvelle ligne et prend toute la largeur disponible (autrement dit, il s'étend le plus possible vers la droite et vers la gauche).

## Éléments de type bloc

### HTML

```html
<p>Ce paragraphe est un élément de bloc.
Son fond a été coloré pour illustrer son conteneur.</p>
```

### CSS

```css
p {
  background-color: #8ABB55;
}
```

### Résultat

{{EmbedLiveSample('Éléments_de_type_bloc','100%',100)}}

## Utilisation

Les éléments de bloc ne peuvent apparaître qu'au sein d'un élément [`<body>`](/fr/docs/Web/HTML/Element/body).

## Éléments blocs vs éléments en ligne

Les éléments de bloc diffèrent des éléments en ligne par :

- La mise en forme par défaut
  - : Par défaut, les éléments de bloc commencent sur des nouvelles lignes.
- Le modèle de contenu
  - : De façon générale, les éléments de bloc peuvent contenir des éléments en ligne et d'autres éléments de bloc. L'idée structurelle sous-jacente est que les éléments de bloc créent de plus grandes structures que les éléments en ligne.

La distinction entre bloc et ligne est utilisée dans les spécifications HTML jusqu'à la version 4.01. En HTML5, cette distinction binaire est remplacée par un ensemble plus complexe de [catégories de contenu](/fr/docs/Web/Guide/HTML/Content_categories). La catégorie des éléments en bloc correspond approximativement à la catégorie de [contenu de flux](/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content) en HTML5, celle des éléments en ligne correspond à la catégorie de [contenu phrasé](/fr/docs/Web/Guide/HTML/Content_categories#flow_content). Il y a également d'autres catégories ([le contenu interactif](/fr/docs/Web/Guide/HTML/Content_categories#interactive_content) par exemple).

## Éléments

La liste qui suit contient tous les éléments HTML de type bloc (cette catégorie n'est pas strictement applicable pour les éléments apparus avec HTML5).

- [`<address>`](/fr/docs/Web/HTML/Element/address)
  - : Information de contact.
- [`<article>`](/fr/docs/Web/HTML/Element/article)
  - : Contenu d'un article.
- [`<aside>`](/fr/docs/Web/HTML/Element/aside)
  - : Contenu tangentiel.
- [`<blockquote>`](/fr/docs/Web/HTML/Element/blockquote)
  - : Long bloc de citation.
- [`<details>`](/fr/docs/Web/HTML/Element/details)
  - : Outil permettant de révéler des informations sur la page.
- [`<dialog>`](/fr/docs/Web/HTML/Element/dialog)
  - : Boîte de dialogue.
- [`<dd>`](/fr/docs/Web/HTML/Element/dd)
  - : Description d'une définition.
- [`<div>`](/fr/docs/Web/HTML/Element/div)
  - : Division d'un document.
- [`<dl>`](/fr/docs/Web/HTML/Element/dl)
  - : Liste de définitions.
- [`<dt>`](/fr/docs/Web/HTML/Element/dt)
  - : Définition/description d'un terme.
- [`<fieldset>`](/fr/docs/Web/HTML/Element/Fieldset)
  - : Ensemble de champs.
- [`<figcaption>`](/fr/docs/Web/HTML/Element/figcaption)
  - : Légende d'une image.
- [`<figure>`](/fr/docs/Web/HTML/Element/figure)
  - : Permet de grouper des médias avec une légende (voir [`<figcaption>`](/fr/docs/Web/HTML/Element/figcaption)).
- [`<footer>`](/fr/docs/Web/HTML/Element/footer)
  - : Bas de page ou de section.
- [`<form>`](/fr/docs/Web/HTML/Element/Form)
  - : Formulaire.
- [`<h1>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<h2>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<h3>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<h4>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<h5>`](/fr/docs/Web/HTML/Element/Heading_Elements), [`<h6>`](/fr/docs/Web/HTML/Element/Heading_Elements)
  - : Éléments de titre de niveau 1 à 6.
- [`<header>`](/fr/docs/Web/HTML/Element/header)
  - : En-tête de page ou de section.
- [`<hgroup>`](/fr/docs/Web/HTML/Element/hgroup)
  - : Information d'en-tête de groupe.
- [`<hr>`](/fr/docs/Web/HTML/Element/hr)
  - : Ligne de division horizontale.
- [`<li>`](/fr/docs/Web/HTML/Element/li)
  - : Élément d'une liste.
- [`<main>`](/fr/docs/Web/HTML/Element/main)
  - : Contient le contenu central unique au document.
- [`<nav>`](/fr/docs/Web/HTML/Element/nav)
  - : Contient des liens de navigation.
- [`<ol>`](/fr/docs/Web/HTML/Element/ol)
  - : Liste ordonnée.
- [`<p>`](/fr/docs/Web/HTML/Element/p)
  - : Paragraphe.
- [`<pre>`](/fr/docs/Web/HTML/Element/pre)
  - : Texte pré-formaté.
- [`<section>`](/fr/docs/Web/HTML/Element/section)
  - : Section d'une page web.
- [`<table>`](/fr/docs/Web/HTML/Element/table)
  - : Tableau.
- [`<ul>`](/fr/docs/Web/HTML/Element/ul)
  - : Liste non-ordonnée.

## Voir aussi

- [Les éléments en ligne](/fr/docs/Web/HTML/Inline_elements)
- [`display`](/fr/docs/Web/CSS/display)
- [Les éléments de bloc et les éléments en ligne dans le flux normal](/fr/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)

{{QuickLinksWithSubpages("/fr/docs/Web/HTML/")}}
