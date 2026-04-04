---
title: unicode-bidi
slug: Web/CSS/Reference/Properties/unicode-bidi
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`unicode-bidi`** utilisée conjointement avec la propriété {{CSSxRef("direction")}} détermine comment le texte bidirectionnel dans un document est géré. Par exemple, si un bloc de contenu contient à la fois du texte de gauche à droite et de droite à gauche, l'agent utilisateur utilise un algorithme Unicode complexe pour décider comment afficher le texte. La propriété `unicode-bidi` remplace cet algorithme et permet à un·e développeur·euse de contrôler l'intégration du texte.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
unicode-bidi: normal;
unicode-bidi: embed;
unicode-bidi: isolate;
unicode-bidi: bidi-override;
unicode-bidi: isolate-override;
unicode-bidi: plaintext;

/* Valeurs globales */
unicode-bidi: inherit;
unicode-bidi: initial;
unicode-bidi: revert;
unicode-bidi: revert-layer;
unicode-bidi: unset;
```

### Valeurs

- `normal`
  - : L'élément n'offre pas de niveau d'intégration supplémentaire par rapport à l'algorithme bidirectionnel. Pour les éléments en ligne, le réordonnancement implicite fonctionne à travers les limites des éléments.
- `embed`
  - : Si l'élément est en ligne, cette valeur ouvre un niveau d'intégration supplémentaire par rapport à l'algorithme bidirectionnel. La direction de ce niveau d'intégration est donnée par la propriété {{CSSxRef("direction")}}.
- `bidi-override`
  - : Pour les éléments en ligne, cela crée une substitution. Pour les éléments conteneurs de bloc, cela crée une substitution pour les descendants de niveau en ligne qui ne sont pas dans un autre élément conteneur de bloc. Cela signifie qu'à l'intérieur de l'élément, le réordonnancement se fait strictement selon la séquence définie par la propriété {{CSSxRef("direction")}}&nbsp;; la partie implicite de l'algorithme bidirectionnel est ignorée.
- `isolate`
  - : Ce mot-clé indique que la directionnalité du conteneur de l'élément doit être calculée sans tenir compte du contenu de cet élément. L'élément est donc _isolé_ de ses voisins. Lors de l'application de son algorithme de résolution bidirectionnelle, son élément conteneur le traite comme un ou plusieurs `U+FFFC Object Replacement Character`, c'est-à-dire comme une image.
- `isolate-override`
  - : Ce mot-clé applique le comportement d'isolation du mot-clé `isolate` au contenu environnant et le comportement de substitution du mot-clé `bidi-override` au contenu interne.
- `plaintext`
  - : Ce mot-clé fait en sorte que la directionnalité des éléments soit calculée sans tenir compte de l'état bidirectionnel parent ou de la valeur de la propriété {{CSSxRef("direction")}}. La directionnalité est calculée en utilisant les règles P2 et P3 de l'algorithme bidirectionnel Unicode.
    Cette valeur permet l'affichage de données déjà formatées à l'aide d'un outil suivant l'algorithme bidirectionnel Unicode.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
.bible-quote {
  direction: rtl;
  unicode-bidi: embed;
}
```

### HTML

```html
<div class="bible-quote">Une ligne de texte</div>
<div>Une autre ligne de texte</div>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("direction")}}
- L'attribut SVG {{SVGAttr("unicode-bidi")}}
- [Gérer différentes directions de texte](/fr/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
