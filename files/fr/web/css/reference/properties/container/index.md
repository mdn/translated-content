---
title: container
slug: Web/CSS/Reference/Properties/container
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`container`** établit l'élément comme conteneur de requêtes et précise le nom et le type du [contexte de compartimentation](/fr/docs/Web/CSS/Guides/Containment/Container_queries#contexte_de_compartimentation_nommé) utilisé dans une [requête de conteneur](/fr/docs/Web/CSS/Guides/Containment/Container_queries).

## Propriétés constituantes

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("container-name")}}
- {{CSSxRef("container-type")}}

## Syntaxe

```css
/* Valeurs de type <container-name> */
container: my-layout;

/* Valeurs de type <container-name> / <container-type> */
container: my-layout / size;

/* Valeurs globales */
container: inherit;
container: initial;
container: revert;
container: revert-layer;
container: unset;
```

### Valeurs

- `<container-name>`
  - : Un nom sensible à la casse pour le contexte de compartimentation.
    Plus de détails sur la syntaxe sont disponibles dans la page de la propriété {{CSSxRef("container-name")}}.
- `<container-type>`
  - : Le type de contexte de compartimentation.
    Plus de détails sur la syntaxe sont disponibles dans la page de la propriété {{CSSxRef("container-type")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Établir la compartimentation de la taille en ligne

L'exemple HTML ci-dessous est un composant de type carte contenant une image, un titre et du texte&nbsp;:

```html
<div class="poste">
  <div class="carte">
    <h2>Titre de la carte</h2>
    <p>Contenu de la carte</p>
  </div>
</div>
```

La manière explicite de créer un contexte de conteneur consiste à déclarer une `container-type` avec un `container-name` optionnel&nbsp;:

```css
.poste {
  container-type: inline-size;
  container-name: sidebar;
}
```

La propriété raccourcie `container` permet de définir cela plus simplement en une seule déclaration&nbsp;:

```css
.poste {
  container: sidebar / inline-size;
}
```

Vous pouvez ensuite cibler ce conteneur par son nom en utilisant la règle {{CSSxRef("@container")}}&nbsp;:

```css
@container sidebar (width >= 400px) {
  /* <stylesheet> */
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les requêtes de conteneur CSS](/fr/docs/Web/CSS/Guides/Containment/Container_queries)
- [Utilisation des requêtes de taille et de style de conteneur](/fr/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- La règle {{CSSxRef("@container")}}
- La propriété {{CSSxRef("contain")}}
- La propriété {{CSSxRef("container-type")}}
- La propriété {{CSSxRef("container-name")}}
- La propriété {{CSSxRef("content-visibility")}}
