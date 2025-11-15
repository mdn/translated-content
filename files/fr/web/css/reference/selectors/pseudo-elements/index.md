---
title: Pseudo-éléments
slug: Web/CSS/Reference/Selectors/Pseudo-elements
original_slug: Web/CSS/Pseudo-elements
l10n:
  sourceCommit: 37482c6bb0894d047a225c24f102352f89788523
---

Un **pseudo-élément** [CSS](/fr/docs/Web/CSS) est un mot-clé ajouté à un sélecteur qui vous permet de mettre en forme une partie spécifique du ou des éléments sélectionnés.

## Syntaxe

```css
sélecteur::pseudo-élément {
  propriété: valeur;
}
```

Par exemple, {{CSSxRef("::first-line")}} peut être utilisé pour changer la police de la première ligne d'un paragraphe.

```css
/* La première ligne de chaque élément <p>. */
p::first-line {
  color: blue;
  text-transform: uppercase;
}
```

Les doubles deux-points (`::`) sont utilisés pour les pseudo-éléments. Cela distingue les pseudo-éléments des [pseudo-classes](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) qui utilisent un seul deux-points (`:`) dans leur notation. Notez que les navigateurs prennent en charge la syntaxe à un seul deux-points pour les quatre pseudo-éléments d'origine&nbsp;: `::before`, `::after`, `::first-line` et `::first-letter`.

Les pseudo-éléments n'existent pas indépendamment. L'élément dont un pseudo-élément fait partie est appelé son _élément d'origine_. Un pseudo-élément doit apparaître après tous les autres composants dans le sélecteur [complexe](/fr/docs/Web/CSS/CSS_selectors/Selector_structure#sélecteur_complexe) ou [composé](/fr/docs/Web/CSS/CSS_selectors/Selector_structure#sélecteur_composé). Le dernier élément du sélecteur est l'élément d'origine du pseudo-élément. Par exemple, vous pouvez sélectionner la première ligne d'un paragraphe en utilisant `p::first-line`, mais pas les enfants de la première ligne. Ainsi, `p::first-line > *` est invalide.

Un pseudo-élément peut être sélectionné en fonction de l'état actuel de l'élément d'origine. Par exemple, `p:hover::first-line` sélectionne la première ligne (pseudo-élément) d'un paragraphe lorsque le paragraphe lui-même est survolé (pseudo-classe).

> [!NOTE]
> Quand une [liste de sélection](/fr/docs/Web/CSS/CSS_selectors/Selector_structure#liste_de_sélection) contient un sélecteur invalide, l'ensemble du bloc de style est ignoré.

## Les pseudo-éléments typographiques

- {{CSSxRef("::first-line")}}
  - : La première ligne de l'élément d'origine.
- {{CSSxRef("::first-letter")}}
  - : La première lettre, le premier chiffre ou le premier symbole de la première ligne de l'élément d'origine.
- {{CSSxRef("::cue")}}
  - : Les [répliques WebVTT](/fr/docs/Web/API/WebVTT_API) à l'intérieur d'un élément sélectionné.
    Cela peut être utilisé pour [mettre en forme les sous-titres et autres répliques](/fr/docs/Web/API/WebVTT_API#mettre_en_forme_les_sous-titres_webvtt) dans les médias avec des pistes VTT.
    Le module [CSS pseudo-éléments](/fr/docs/Web/CSS/CSS_pseudo-elements) définit également les sous-pseudo-éléments `::postfix` et `::prefix`. Ceux-ci ne sont pas encore pris en charge par aucun navigateur.

## Les pseudo-éléments de mise en évidence

Sélectionne des sections de document en fonction du contenu et de l'état du document, permettant à ces zones d'être mises en forme différemment pour indiquer cet état à l'utilisateur·ice.

- {{CSSxRef("::selection")}}
  - : La portion d'un document qui a été sélectionnée.
- {{CSSxRef("::target-text")}}
  - : L'élément cible du document. L'élément cible est identifié à l'aide de l'identifiant de fragment de l'URL.
- {{CSSxRef("::spelling-error")}}
  - : Une portion de texte que le navigateur pense être mal orthographiée.
- {{CSSxRef("::grammar-error")}}
  - : Une portion de texte que le navigateur pense être grammaticalement incorrecte.
- {{CSSxRef("::highlight()")}}
  - : Les éléments dans le [registre de mise en évidence](/fr/docs/Web/API/CSS/highlights_static). Il est utilisé pour créer des surlignages personnalisés.

## Les pseudo-éléments conformes à l'arborescence

Ces pseudo-éléments se comportent comme des éléments normaux, s'intégrant parfaitement dans le modèle de boîte. Ils agissent comme un élément enfant qui peut être mis en forme directement au sein de la hiérarchie de l'élément d'origine.

- {{CSSxRef("::before")}}
  - : Crée un pseudo-élément qui est le premier enfant de l'élément sélectionné.
- {{CSSxRef("::after")}}
  - : Crée un pseudo-élément qui est le dernier enfant de l'élément sélectionné.
- {{CSSxRef("::column")}}
  - : Chaque fragment de colonne d'une [mise en page multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout).
- {{CSSxRef("::marker")}}
  - : La boîte de marqueur générée automatiquement d'un élément de liste.
- {{CSSxRef("::backdrop")}}
  - : L'arrière-plan de l'élément d'origine rendu dans la [couche supérieure](/fr/docs/Glossary/Top_layer).
- {{CSSxRef("::scroll-button()")}}
  - : Crée un bouton qui peut contrôler le défilement du {{glossary("scroll container", "conteneur déroulant")}} auquel il est appliqué.
- {{CSSxRef("::scroll-marker")}}
  - : Crée un pseudo-élément qui est un marqueur de défilement — un bouton cible de défilement pour son élément d'origine imbriqué dans un groupe de marqueurs de défilement.
- {{CSSxRef("::scroll-marker-group")}}
  - : Génère un conteneur avant ou après un conteneur de défilement pour contenir les pseudo-éléments {{cssxref("::scroll-marker")}} générés sur l'élément ou ses descendants.

## Les pseudo-éléments basés sur des éléments

Ces pseudo-éléments sont de véritables éléments qui ne sont pas autrement sélectionnables.

- {{CSSxRef("::details-content")}}
  - : Le contenu extensible/réductible d'un élément {{HTMLElement("details")}}.
- {{CSSxRef("::part", "::part()")}}
  - : Tout élément à l'intérieur d'un [arbre fantôme](/fr/docs/Web/API/Web_components/Using_shadow_DOM) qui a un attribut [`part`](/fr/docs/Web/HTML/Reference/Global_attributes/part) correspondant.
- {{CSSxRef("::slotted", "::slotted()")}}
  - : Tout élément placé dans un slot à l'intérieur d'un modèle HTML.

## Les pseudo-éléments liés aux formulaires

Les pseudo-éléments sont liés aux contrôles de formulaire.

- {{CSSxRef("::checkmark")}}
  - : Cible le coche placé à l'intérieur de l'élément `<option>` actuellement sélectionné d'un [élément de sélection personnalisable](/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select) pour fournir une indication visuelle de celui qui est sélectionné.
- {{CSSxRef("::file-selector-button")}}
  - : Le bouton d'un {{HTMLElement("input") }} de [`type="file"`](/fr/docs/Web/HTML/Reference/Elements/input/file).
- {{CSSxRef("::picker()")}}
  - : La partie sélecteur d'un élément, par exemple le sélecteur déroulant d'un [élément de sélection personnalisable](/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select).
- {{CSSxRef("::picker-icon")}}
  - : L'icône de sélection à l'intérieur des contrôles de formulaire qui ont une icône associée. Dans le cas d'un [élément de sélection personnalisable](/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select), cela sélectionne la flèche qui pointe vers le bas lorsque la sélection est fermée.
- {{CSSxRef("::placeholder")}}
  - : Le texte d'espace réservé dans un champ de saisie.

## Index alphabétique

Les pseudo-éléments définis par un ensemble de spécifications CSS comprennent les éléments suivants&nbsp;:

A

- {{CSSxRef("::after")}}

B

- {{CSSxRef("::backdrop")}}
- {{CSSxRef("::before")}}

C

- {{CSSxRef("::column")}}
- {{CSSxRef("::checkmark")}}
- {{CSSxRef("::cue")}} (et {{CSSxRef("::cue", "::cue()")}})

D

- {{CSSxRef("::details-content")}}

F

- {{CSSxRef("::file-selector-button")}}
- {{CSSxRef("::first-letter")}}
- {{CSSxRef("::first-line")}}

G

- {{CSSxRef("::grammar-error")}}

H

- {{CSSxRef("::highlight()")}}

M

- {{CSSxRef("::marker")}}

P

- {{CSSxRef("::part", "::part()")}}
- {{CSSxRef("::picker()")}}
- {{CSSxRef("::picker-icon")}}
- {{CSSxRef("::placeholder")}}

S

- {{CSSxRef("::scroll-button()")}}
- {{CSSxRef("::scroll-marker")}}
- {{CSSxRef("::scroll-marker-group")}}
- {{CSSxRef("::selection")}}
- {{CSSxRef("::slotted", "::slotted()")}}
- {{CSSxRef("::spelling-error")}}

T

- {{CSSxRef("::target-text")}}

V

- {{cssxref("::view-transition")}}
- {{cssxref("::view-transition-image-pair()")}}
- {{cssxref("::view-transition-group()")}}
- {{cssxref("::view-transition-new()")}}
- {{cssxref("::view-transition-old()")}}

## Les pseudo-éléments imbriqués

Vous pouvez chaîner certains sélecteurs de pseudo-éléments pour mettre en forme des pseudo-éléments imbriqués à l'intérieur d'autres pseudo-éléments. Les combinaisons de pseudo-éléments imbriqués suivantes sont prises en charge&nbsp;:

- {{CSSxRef("::after")}}
  - `::after::marker`: Sélectionne le pseudo-élément {{CSSxRef("::marker")}} d'un pseudo-élément `::after`, lorsque `::after` est mis en forme comme un élément de liste, avec {{CSSxRef("display", "display: list-item")}}.
- {{CSSxRef("::before")}}
  - `::before::marker`: Sélectionne le pseudo-élément {{CSSxRef("::marker")}} d'un pseudo-élément `::before`, lorsque `::before` est mis en forme comme un élément de liste, avec {{CSSxRef("display", "display: list-item")}}.

Consultez les pages de référence des pseudo-éléments individuels pour des exemples et des informations sur la compatibilité des navigateurs.

## Héritage des pseudo-éléments de mise en évidence

[Les pseudo-éléments de mise en évidence](#les_pseudo-éléments_de_mise_en_évidence), tels que {{CSSxref("::selection")}}, {{CSSxref("::target-text")}}, {{CSSxref("::highlight()")}}, {{CSSxref("::spelling-error")}}, et {{CSSxref("::grammar-error")}}, suivent un modèle d'héritage cohérent qui diffère de [l'héritage des éléments réguliers](/fr/docs/Web/CSS/Guides/Cascade/Inheritance).

Lorsque vous appliquez des styles aux pseudo-éléments de mise en évidence, ils héritent à la fois de&nbsp;:

1. Leurs éléments parents (suivant l'héritage normal).
2. Les pseudo-éléments de mise en évidence de leurs éléments parents (suivant l'héritage des surlignages).

Cela signifie que si vous mettez en forme à la fois le pseudo-élément de mise en évidence d'un élément parent et le pseudo-élément de mise en évidence d'un élément enfant, le texte surligné de l'enfant combinera les propriétés des deux sources.

Voici un exemple concret.

Tout d'abord, nous avons un HTML qui inclut deux éléments {{htmlelement("div")}} imbriqués. Une partie du contenu textuel inclus est contenue directement à l'intérieur du `<div>` parent, et une partie est imbriquée à l'intérieur du `<div>` enfant.

```html live-sample___highlight_inheritance
<div class="parent">
  Texte parent
  <div class="child">Texte enfant</div>
</div>
```

Ensuite, nous incluons un peu de CSS, qui sélectionne les éléments `<div>` parent et enfant séparément et leur donne différentes valeurs de {{cssxref("color")}}, et sélectionne le texte sélectionné du parent et de l'enfant ({{cssxref("::selection")}}). Cela donne à chaque `<div>` une couleur de fond différente et définit une couleur de texte différente sur la sélection du parent.

```css live-sample___highlight_inheritance
/* Mise en forme pour l'élément parent */
.parent {
  color: blue;
}

/* Mise en forme pour le texte sélectionné du parent */
.parent::selection {
  background-color: yellow;
  color: red;
}

/* Mise en forme pour l'élément enfant */
.child {
  color: green;
}

/* Mise en forme pour le texte sélectionné de l'enfant */
.child::selection {
  background-color: orange;
}
```

L'exemple se rend comme suit&nbsp;:

{{EmbedLiveSample("héritage_des_pseudo-éléments_de_surlignage", , "150")}}

Essayez de sélectionner le texte dans les éléments parent et enfant. Remarquez que&nbsp;:

1. Lorsque vous sélectionnez le texte parent, il utilise le fond jaune et la couleur de texte rouge définis dans `.parent::selection`.
2. Lorsque vous sélectionnez le texte enfant, il utilise:
   - Le fond orange de `.child::selection`.
   - La couleur de texte rouge héritée du pseudo-élément `::selection` du parent.

Cela démontre comment le pseudo-élément mise en évidence de l'enfant hérite à la fois de son élément parent et du pseudo-élément mise en évidence du parent.

[Les propriétés CSS personnalisées (variables)](/fr/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) dans les pseudo-éléments mise en évidence héritent de leur élément d'origine (l'élément auquel elles sont appliquées), et non par le biais de la chaîne d'héritage des surlignages. Par exemple&nbsp;:

```css
:root {
  --selection-color: lightgreen;
}

::selection {
  color: var(--selection-color);
}

.blue {
  --selection-color: blue;
}
```

Lorsque vous utilisez le sélecteur universel avec des pseudo-éléments mise en évidence, cela empêche l'héritage des surlignages. Par exemple&nbsp;:

```css
/* Cela empêche l'héritage des surlignages */
*::selection {
  color: lightgreen;
}

/* Préférez ceci pour permettre l'héritage */
:root::selection {
  color: lightgreen;
}
```

## Spécifications

{{Specifications}}

## Voir aussi

- Le module des [pseudo-éléments CSS](/fr/docs/Web/CSS/CSS_pseudo-elements)
- Les [pseudo-classes](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- Le module des [sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
- [Apprendre&nbsp;: Pseudo-classes et pseudo-éléments](/fr/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
- [Changements d'héritage pour le style de sélection CSS <sup>(angl.)</sup>](https://developer.chrome.com/blog/selection-styling) — Explication détaillée des changements du modèle d'héritage des pseudo-éléments mise en évidence dans Chrome 134
