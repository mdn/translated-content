---
title: "ARIA : rôle graphics-document"
short-title: graphics-document
slug: Web/Accessibility/ARIA/Reference/Roles/graphics-document_role
l10n:
  sourceCommit: 370f1912b54d24bd7da541f8f2dd98c26d377121
---

Le rôle `graphics-document` identifie un type de [`document`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/document_role) dans lequel l'apparence visuelle ou la disposition du contenu transmet un sens.

> [!NOTE]
> Le rôle `graphics-document` est défini dans la spécification du [Module graphique WAI-ARIA <sup>(angl.)</sup>](https://w3c.github.io/graphics-aria/).
> Il ne fait pas partie de la spécification principale de [WAI-ARIA <sup>(angl.)</sup>](https://w3c.github.io/aria/).

## Description

Le rôle `graphics-document` s'applique à l'élément racine d'un graphique dont la représentation visuelle, généralement en deux dimensions, a une signification sémantique. Les utilisateur·ice·s sont censés principalement parcourir ce contenu plutôt que de contrôler une application.

C'est généralement utilisé pour des graphiques structurés et sémantiquement significatifs tels que des organigrammes, des cartes, des diagrammes et des dessins techniques.

Le rôle `graphics-document` se distingue des rôles similaires de la manière suivante&nbsp;:

- Contrairement à un élément ayant le rôle [`img`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/img_role), un élément avec le rôle `graphics-document` peut inclure des éléments enfants ayant une signification sémantique, tels que des liens et d'autres composants interactifs.
- Comparé à d'autres types de [`document`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/document_role), un `graphics-document` se distingue par l'importance sémantique de sa représentation visuelle.
- Contrairement à un [`graphics-object`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-object_role), un `graphics-document` est autonome&nbsp;: sa signification ne dépend pas du contenu environnant, et il fournit le contexte pour interpréter ses enfants.

Un `graphics-document` peut contenir un autre `graphics-document`, comme un diagramme à barres intégré dans une carte. Chaque document imbriqué fournit son propre contexte pour la navigation.

Lorsqu'on traite un graphique unique et volumineux avec des régions distinctes pouvant être réorganisées sans en modifier le sens, chaque région doit être séparée en tant que `graphics-document` autonome. Vous pouvez regrouper ces régions en utilisant le rôle [`figure`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/figure_role).

### Rôles, états et propriétés WAI-ARIA associés

- [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ou [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Un `graphics-document` doit avoir un nom accessible. Utilisez `aria-labelledby` si une étiquette visible est présente, sinon utilisez `aria-label`. Pour SVG, un élément {{SVGElement("title")}} peut également fournir le nom.

## Exemples

Cet organigramme utilise des éléments HTML disposés avec CSS. Le rôle `graphics-document` identifie le diagramme comme un document graphique, car l'agencement de ses nœuds et flèches transmet le flux d'authentification. L'attribut `aria-label` fournit son nom accessible. Chaque flèche a un rôle `graphics-symbol` et une étiquette décrivant la connexion, de sorte que le flux peut également être compris sans voir la disposition.

Si ce graphique est implémenté à l'aide de {{SVGElement("svg")}} à la place, aucune déclaration de `role` n'est nécessaire, car [SVG-AAM définit `graphics-document` comme rôle par défaut](https://w3c.github.io/svg-aam/).

```html
<div
  class="flowchart"
  role="graphics-document"
  aria-label="Organigramme du flux d'authentification utilisateur">
  <div
    class="node start"
    role="graphics-object"
    aria-label="Connexion utilisateur : Saisir les identifiants">
    Connexion utilisateur
  </div>
  <div
    class="arrow next"
    role="graphics-symbol"
    aria-label="Après avoir saisi les identifiants, vérifier s'ils sont valides"></div>
  <div
    class="node decision"
    role="graphics-object"
    aria-label="Valide ? : Les identifiants sont-ils valides ?">
    <span>Valide ?</span>
  </div>
  <div
    class="arrow yes"
    role="graphics-symbol"
    aria-label="Oui : Si les identifiants sont valides, accorder l'accès">
    <span>Oui</span>
  </div>
  <div class="node grant" role="graphics-object">Accorder l'accès</div>
  <div
    class="arrow no"
    role="graphics-symbol"
    aria-label="Non : Si les identifiants sont invalides, refuser l'accès">
    <span>Non</span>
  </div>
  <div class="node deny" role="graphics-object">Refuser l'accès</div>
</div>
```

```css
.flowchart {
  position: relative;
  width: 500px;
  height: 300px;
  color: black;
  background: white;
  font-size: large;
}

.node {
  position: absolute;
  display: grid;
  place-items: center;
  box-sizing: border-box;
  width: 100px;
  height: 60px;
  border: 1px solid black;
}

.start {
  left: 200px;
  top: 30px;
  background: #3eca39;
}

.decision {
  left: 200px;
  top: 130px;
  border: none;
  background: black;
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
}

.decision::before {
  content: "";
  position: absolute;
  inset: 1px 2px;
  background: #cac539;
  clip-path: inherit;
}

.decision span {
  position: relative;
}

.grant {
  left: 290px;
  top: 220px;
  background: #86ca39;
}

.deny {
  left: 120px;
  top: 220px;
  color: white;
  background: #ca393e;
}

.arrow {
  position: absolute;
  height: 1.6px;
  background: black;
  transform-origin: left center;
}

.arrow::after {
  content: "";
  position: absolute;
  right: 0;
  top: -2.2px;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-left: 10px solid black;
}

.next {
  left: 250px;
  top: 90px;
  width: 40px;
  transform: rotate(90deg);
}

.yes {
  left: 280px;
  top: 172px;
  width: 77px;
  transform: rotate(39deg);
}

.no {
  left: 220px;
  top: 172px;
  width: 69px;
  transform: rotate(136deg);
}

.arrow span {
  position: absolute;
  left: 25px;
}

.yes span {
  top: -22px;
  transform: rotate(-39deg);
}

.no span {
  top: 8px;
  transform: rotate(-136deg);
}
```

{{EmbedLiveSample("Exemples", 600, 350)}}

## Bonnes pratiques

Ne pas ajouter de rôle `graphics-document` explicite lorsque l'élément fournit déjà ce rôle par sa sémantique native, comme le fait {{SVGElement("svg")}}.

Pour les graphiques SVG décoratifs, utilisez `aria-hidden="true"`. Pour les graphiques sans structure interne significative, utilisez le rôle [`img`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) avec un nom accessible. Pour les images HTML, utilisez l'élément natif {{HTMLElement("img")}} avec un attribut `alt`.

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément {{SVGElement("svg")}}
- [ARIA dans HTML <sup>(angl.)</sup>](https://w3c.github.io/html-aria/)
- [ARIA&nbsp;: rôle `graphics-symbol`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-symbol_role)
- [ARIA&nbsp;: rôle `graphics-object`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-object_role)
- [ARIA&nbsp;: rôle `figure`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/figure_role)
- [Notes sur l'Utilisation d'ARIA dans HTML <sup>(angl.)</sup>](https://w3c.github.io/using-aria/)
