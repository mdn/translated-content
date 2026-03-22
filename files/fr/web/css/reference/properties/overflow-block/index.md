---
title: overflow-block
slug: Web/CSS/Reference/Properties/overflow-block
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`overflow-block`** définit ce qu'il faut afficher lorsque le contenu dépasse les bords de début et de fin de bloc d'une boîte. Cela peut être rien, une barre de défilement ou le contenu débordant.

> [!NOTE]
> La propriété `overflow-block` correspond à {{CSSxRef("overflow-y")}} ou {{CSSxRef("overflow-x")}} selon le mode d'écriture du document.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
overflow-block: visible;
overflow-block: hidden;
overflow-block: clip;
overflow-block: scroll;
overflow-block: auto;

/* Valeurs globales */
overflow-block: inherit;
overflow-block: initial;
overflow-block: revert;
overflow-block: revert-layer;
overflow-block: unset;
```

La propriété `overflow-block` est définie avec une valeur de type {{CSSxRef("overflow_value", "&lt;overflow&gt;")}}&nbsp;:

### Valeurs

- `visible`
  - : Le contenu n'est pas rogné et peut être affiché en dehors des limites de bloc de la boîte.
- `hidden`
  - : Le contenu qui dépasse est masqué afin de ne pas dépasser dans l'axe de bloc. Aucune barre de défilement n'est affichée.
- `clip`
  - : Le contenu qui dépasse est rogné sur le bord de dépassement de l'élément, défini avec la propriété {{CSSxRef("overflow-clip-margin")}}.
- `scroll`
  - : Le contenu est rogné si nécessaire selon l'axe de bloc pour tenir dans la boîte (de remplissage). Les navigateurs affichent des barres de défilement que le contenu soit rogné ou non (on évite ainsi d'avoir des barres qui apparaissent/disparaissent lorsque le contenu change). Les imprimantes peuvent imprimer le contenu qui dépasse.
- `auto`
  - : Le comportement de cette valeur dépend de l'agent utilisateur. Si le contenu tient dans la boîte de remplissage, elle se comportera comme `visible` mais établira un nouveau contexte de formatage.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<ul>
  <li>
    <code>overflow-block: hidden</code> — masque le texte en dehors
    <div id="hidden">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-block: scroll</code> — ajoute une barre de défilement
    <div id="scroll">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-block: clip</code> (masque le texte en dehors de la boîte
    au-delà du bord de dépassement)
    <div id="clip">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-block: visible</code> — affiche le texte en dehors si besoin
    <div id="visible">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-block: auto</code> — pour la plupart des navigateurs,
    équivalent à <code>scroll</code>
    <div id="auto">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>
</ul>
```

### CSS

```css
div {
  border: 1px solid black;
  width: 250px;
  height: 100px;
  margin-bottom: 120px;
}

#hidden {
  overflow-block: hidden;
}
#scroll {
  overflow-block: scroll;
}
#clip {
  overflow-block: clip;
}
#visible {
  overflow-block: visible;
}
#auto {
  overflow-block: auto;
}
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 780)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("text-overflow")}}, {{CSSxRef("white-space")}}, {{CSSxRef("overflow")}}, {{CSSxRef("overflow-inline")}}, {{CSSxRef("overflow-x")}}, {{CSSxRef("overflow-y")}}, {{CSSxRef("clip")}}, {{CSSxRef("display")}}
- [Les propriétés logiques CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values)
- Le module [de débordement CSS](/fr/docs/Web/CSS/Guides/Overflow)
- Le module [de style des barres de défilement CSS](/fr/docs/Web/CSS/Guides/Scrollbars_styling)
- [Modes d'écriture CSS](/fr/docs/Web/CSS/Guides/Writing_modes)
- [Apprendre&nbsp;: Contenu débordant](/fr/docs/Learn_web_development/Core/Styling_basics/Overflow)
