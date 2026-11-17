---
title: "ARIA : attribut aria-describedby"
short-title: aria-describedby
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-describedby
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

L'attribut global `aria-describedby` identifie l'élément (ou les éléments) qui décrivent l'élément sur lequel l'attribut est défini.

## Description

L'attribut `aria-describedby` liste les [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) des éléments qui décrivent l'objet. Il sert à établir une relation entre des composants ou groupes et le texte qui les décrit.

L'attribut `aria-describedby` n'est pas limité aux contrôles de formulaire. Il peut aussi servir à associer un texte statique à des composants, des groupes d'éléments, des régions ayant un titre, des définitions, etc. L'attribut `aria-describedby` peut être utilisé avec des éléments HTML sémantiques ou avec des éléments possédant un [`role`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles) ARIA.

L'attribut `aria-describedby` est très proche de l'attribut [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Alors que `aria-labelledby` liste les `id` des libellés ou éléments qui décrivent l'essence d'un objet, `aria-describedby` liste les `id` des descriptions ou éléments fournissant des informations supplémentaires utiles à l'utilisateur·ice. Les deux attributs référencent d'autres éléments pour calculer une alternative textuelle, mais un libellé doit rester concis, tandis qu'une description vise à fournir des informations plus détaillées&nbsp;: un libellé décrit l'essence d'un objet, une description apporte des précisions supplémentaires.

Les éléments liés par `aria-describedby` n'ont pas besoin d'être visibles. Il est possible de référencer un élément même s'il est masqué. Par exemple, un contrôle de formulaire peut avoir une description masquée par défaut et affichée à la demande avec un composant de type «&nbsp;plus d'informations&nbsp;». Les utilisateur·ice·s voyant·e·s cliquent sur l'icône pour afficher la description, tandis que les utilisateur·ice·s de technologies d'assistance y ont immédiatement accès, car la description est référencée depuis ce contrôle avec `aria-describedby`.

La propriété `aria-describedby` est adaptée lorsque le contenu associé contient du texte simple. Si le contenu est volumineux, possède une sémantique utile ou une structure complexe nécessitant une navigation, utilisez plutôt [`aria-details`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details). `aria-details` permet aux utilisateur·ice·s de technologies d'assistance de visiter le contenu structuré associé et offre des commandes de navigation supplémentaires, facilitant la compréhension de la structure ou l'accès à l'information par petits morceaux.

> [!NOTE]
> Le contenu de `aria-describedby` doit être une simple chaîne de caractères de texte. S'il y a des sémantiques importantes dans le contenu, envisagez d'utiliser [`aria-details`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details).

## Valeurs

- Liste de références d'ID
  - : Un `id` ou la liste des `id` (séparés par des espaces) des éléments qui décrivent l'élément courant.

## Interfaces associées

- {{DOMxRef("Element.ariaDescribedByElements")}}
  - : La propriété `ariaDescribedByElements` fait partie de l'interface de chaque élément. Sa valeur est un tableau de sous-classes de {{DOMxRef("Element")}} qui reflètent les références d'un `id` dans l'attribut `aria-describedby` ([avec quelques particularités](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#références_déléments_reflétés)).
- {{DOMxRef("ElementInternals.ariaDescribedByElements")}}
  - : La propriété `ariaDescribedByElements` fait partie de l'interface de chaque élément personnalisé. Sa valeur est un tableau de sous-classes de {{DOMxRef("Element")}} qui reflètent les références d'un `id` dans l'attribut `aria-describedby` ([avec quelques particularités](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#références_déléments_reflétés)).

## Rôles associés

Utilisé dans **tous** les rôles. Utilisable également dans tous les éléments HTML.

## Exemple

```html
<button aria-describedby="trash-desc">Déplacer vers la corbeille</button>
…
<p id="trash-desc">
  Les éléments de la corbeille sont définitivement supprimés après 30 jours.
</p>
```

> [!NOTE]
> L'attribut `aria-describedby` n'est pas conçu pour référencer des descriptions provenant de ressources externes. Sa valeur étant un ou plusieurs `id` (séparés par des espaces s'il y en a plusieurs), il doit référencer des éléments du même document DOM.

## Spécifications

{{Specifications}}

## Voir aussi

- L'attribut ARIA [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- L'attribut ARIA [`aria-description`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)
- L'attribut ARIA [`aria-details`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
- [Compatibilité navigateur et AT pour `aria-describedby` <sup>(angl.)</sup>](https://a11ysupport.io/tech/aria/aria-describedby_attribute)
