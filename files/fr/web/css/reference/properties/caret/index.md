---
title: Propriété CSS `caret`
short-title: caret
slug: Web/CSS/Reference/Properties/caret
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`caret`** définit l'apparence et le comportement du **curseur d'insertion** en une seule déclaration.

{{InteractiveExample("Démonstration CSS&nbsp;: caret")}}

```css interactive-example-choice
caret: red;
```

```css interactive-example-choice
caret: block manual;
```

```css interactive-example-choice
caret: underscore auto green;
```

```css interactive-example-choice
caret: bar manual orange;
```

```html interactive-example
<section class="default-example container" id="default-example">
  <div>
    <label for="example-element">Modifier le champ de texte&nbsp;:</label>
    <input id="example-element" type="text" value="Exemple de texte" />
  </div>
</section>
```

```css interactive-example
div {
  text-align: left;
}

#example-element {
  font-size: 1.2rem;
  padding: 8px;
  width: 300px;
}
```

## Propriétés constitutives

Cette propriété est une abréviation pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("caret-color")}}
- {{CSSxRef("caret-animation")}}
- {{CSSxRef("caret-shape")}}

## Syntaxe

```css
/* Valeurs individuelles */
caret: red; /* seulement caret-color */
caret: block; /* seulement caret-shape */
caret: manual; /* seulement caret-animation */

/* Deux valeurs */
caret: red manual; /* caret-color + caret-animation */
caret: block auto; /* caret-shape + caret-animation */
caret: underscore orange; /* caret-shape + caret-color */

/* Trois valeurs */
caret: bar manual red; /* caret-shape + caret-animation + caret-color */
caret: block auto #00ff00; /* caret-shape + caret-animation + caret-color */

/* Valeurs globales */
caret: inherit;
caret: initial;
caret: revert;
caret: revert-layer;
caret: unset;
```

La propriété `caret` est définie avec une, deux ou trois valeurs issues des propriétés constitutives. Les valeurs peuvent être indiquées dans n'importe quel ordre, et les valeurs omises sont définies à leur valeur initiale.

### Valeurs

- {{CSSxRef("caret-color")}}
  - : Définit la couleur du curseur.

- {{CSSxRef("caret-animation")}}
  - : Contrôle si le curseur clignote.

- {{CSSxRef("caret-shape")}}
  - : Définit la forme visuelle du curseur.

## Description

La propriété abrégée `caret` permet de définir plusieurs propriétés du curseur en une seule déclaration, ce qui facilite la personnalisation complète de l'apparence et du comportement du curseur d'insertion.

### Résolution des valeurs

Lorsque des valeurs sont omises dans la propriété abrégée, elles sont réinitialisées à leur valeur initiale&nbsp;:

- `caret-color`&nbsp;: `auto` (équivaut à `currentColor`).
- `caret-animation`&nbsp;: `auto` (le curseur clignote).
- `caret-shape`&nbsp;: `auto` (forme déterminée par le navigateur).

### Indépendance de l'ordre

Contrairement à certaines propriétés abrégées CSS, la propriété `caret` accepte les valeurs dans n'importe quel ordre. Le navigateur détermine à quelle propriété chaque valeur s'applique en fonction de son type&nbsp;:

- Les valeurs {{CSSxRef("&lt;color&gt;")}} s'appliquent à `caret-color`.
- Les mots-clés `auto`/`manual` s'appliquent à `caret-animation`.
- Les mots-clés de forme (`bar`, `block`, `underscore`) s'appliquent à `caret-shape`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Terminal rétro avec curseur animé

Cet exemple crée une interface de terminal vintage en utilisant la propriété abrégée `caret` pour combiner plusieurs propriétés du curseur, montrant ainsi comment elle remplace les anciennes techniques basées sur les bordures.

Le principal avantage de la propriété abrégée `caret` est de combiner plusieurs propriétés en une seule déclaration. Ici, nous définissons la forme sur `block`, désactivons le clignotement par défaut et définissons la couleur sur `green`, le tout en une seule ligne.

#### HTML

```html
<label for="terminal">Entrez une commande</label>
<div class="old-screen">
  <span>></span>
  <textarea id="terminal" class="terminal-input"></textarea>
</div>
```

#### CSS

```css hidden
label {
  background: #092104;
  display: block;
  padding: 10px 20px;
  color: #00ad00;
  font-weight: bold;
  font-family: monospace;
}

.old-screen {
  background: repeating-linear-gradient(
    #092104,
    #092104 2px,
    #123208 2px,
    #123208 4px
  );
  height: 140px;
  display: flex;
  align-items: flex-start;
  padding: 20px;
  font-family: monospace;
}

span {
  display: inline-block;
  padding: 2px 5px;
  color: #00ad00;
  font-weight: bold;
  margin-right: 8px;
}

.terminal-input {
  background: transparent;
  height: 100%;
  border: none;
  color: #00ad00;
  font-family: inherit;
  font-size: 1rem;
  outline: none;
  flex: 1;
  resize: none;
}
```

```css
.terminal-input {
  caret: block manual green;
  animation: vintage-caret 2s infinite;
}

@keyframes vintage-caret {
  0%,
  50% {
    caret-color: #00ad00;
  }
  75%,
  100% {
    caret-color: transparent;
  }
}
```

#### Résultat

{{EmbedLiveSample("Terminal rétro avec curseur animé", 550, 215)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("caret-color")}}, {{CSSxRef("caret-animation")}}, {{CSSxRef("caret-shape")}}
- Le module [de l'interface utilisateur de base CSS](/fr/docs/Web/CSS/Guides/Basic_user_interface)
