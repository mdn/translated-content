---
title: background-attachment
slug: Web/CSS/Reference/Properties/background-attachment
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`background-attachment`** définit si la position d'une image d'arrière-plan est fixe par rapport à la {{Glossary("viewport", "zone d'affichage")}}, ou si elle défile avec son bloc englobant.

{{InteractiveExample("Démonstration CSS&nbsp;: background-attachment")}}

```css interactive-example-choice
background-attachment: scroll;
```

```css interactive-example-choice
background-attachment: fixed;
```

```css interactive-example-choice
background-attachment: local;
```

```css interactive-example-choice
background-attachment: local, scroll;
```

```css interactive-example-choice
background-attachment: scroll, local;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    Londres. La session de Michaelmas venait de se terminer et le Lord
    Chancelier siégeait dans Lincoln's Inn Hall. Un temps de novembre
    implacable. Autant de boue dans les rues comme si les eaux venaient à peine
    de se retirer de la surface de la terre, et il ne serait pas étonnant de
    rencontrer un Megalosaurus, d'une quarantaine de pieds de long environ, se
    dandinant comme un lézard pachydermique sur Holborn Hill. Londres. La
    session de Michaelmas venait de se terminer et le Lord Chancelier siégeait
    dans Lincoln's Inn Hall. Un temps de novembre implacable. Autant de boue
    dans les rues comme si les eaux venaient à peine de se retirer de la surface
    de la terre, et il ne serait pas étonnant de rencontrer un Megalosaurus,
    d'environ quarante pieds de long, se dandinant comme un lézard pachydermique
    sur Holborn Hill.
  </div>
</section>
```

```css interactive-example
body {
  overflow: scroll;
}

#default-example {
  height: 600px;
}

#example-element {
  max-width: 20rem;
  height: 100%;
  background:
    url("/shared-assets/images/examples/lizard.png") right 3rem top 1rem / 15rem
      no-repeat,
    url("/shared-assets/images/examples/moon.jpg") center / 10rem;
  color: #ff5454;
  font-size: 1.5em;
  font-weight: bold;
  overflow: auto;
  padding: 20px;
  text-shadow:
    0 0 0.6rem black,
    0 0 0.6rem black;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;

/* Valeurs globales */
background-attachment: inherit;
background-attachment: initial;
background-attachment: revert;
background-attachment: unset;
```

La propriété `background-attachment` est définie avec un des mots-clés de la liste suivante.

### Valeurs

- `fixed`
  - : Ce mot-clé indique que l'arrière-plan est fixe par rapport à la zone d'affichage (<i lang="en">viewport</i> en anglais). Ainsi, même si l'élément dispose d'outils de défilement, l'arrière-plan ciblé ne se déplacera pas avec l'élément (cette valeur n'est pas compatible avec [`background-clip: text`](/fr/docs/Web/CSS/Reference/Properties/background-clip)).
- `local`
  - : Ce mot-clé indique que l'arrière-plan se déplace avec le contenu de l'élément associé. Ainsi, si l'élément défile, l'arrière-plan défilera avec. Les zones de positionnement et de dessin de l'arrière-plan sont relatives à la zone de l'élément plutôt qu'au cadre extérieur.
- `scroll`
  - : Ce mot-clé indique que l'arrière-plan est fixé par rapport au contenu de l'élément (il ne défile pas avec) mais est rattaché à la bordure de l'élément.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

#### HTML

```html
<p>
  Il y avait des portes tout autour du hall, mais elles étaient toutes fermées à
  clé&nbsp;; et quand Alice eut parcouru tout un côté puis l'autre, essayant
  chaque porte, elle marcha tristement au milieu, se demandant comment elle
  allait bien pouvoir sortir.
</p>
```

#### CSS

```css
p {
  background-image: url("star-solid.gif");
  background-attachment: fixed;
}
```

#### Résultat

{{EmbedLiveSample("Exemple simple")}}

### Gestion de plusieurs arrière-plans

Cette propriété prend en charge plusieurs images d'arrière-plan. Vous pouvez définir une valeur `<attachment>` différente pour chaque image, séparées par des virgules. Chaque image est associée au type `<attachment>` correspondant, de la première à la dernière.

#### HTML

```html
<p>
  Il y avait des portes tout autour du hall, mais elles étaient toutes fermées à
  clé&nbsp;; et quand Alice eut parcouru tout un côté puis l'autre, essayant
  chaque porte, elle marcha tristement au milieu, se demandant comment elle
  allait bien pouvoir sortir. Soudain, elle tomba sur une petite table à trois
  pieds, entièrement en verre massif&nbsp;; il n'y avait rien dessus sauf une
  minuscule clé dorée, et la première pensée d'Alice fut qu'elle pouvait
  appartenir à l'une des portes du hall&nbsp;; mais, hélas&nbsp;! soit les
  serrures étaient trop grandes, soit la clé était trop petite, mais en tout cas
  elle ne put en ouvrir aucune. Cependant, lors de son second passage, elle
  découvrit un petit rideau qu'elle n'avait pas remarqué auparavant, et derrière
  se trouvait une petite porte d'environ quinze pouces de haut&nbsp;: elle
  essaya la petite clé dorée dans la serrure, et à sa grande joie, elle
  s'adapta&nbsp;!
</p>
```

#### CSS

```css
p {
  background-image: url("star-solid.gif"), url("star-transparent.gif");
  background-attachment: fixed, scroll;
  background-repeat: no-repeat, repeat-y;
}
```

#### Résultat

{{EmbedLiveSample("Gestion de plusieurs arrière-plans")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser plusieurs arrière-plans](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
