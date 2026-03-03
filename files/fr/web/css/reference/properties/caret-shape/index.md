---
title: caret-shape
slug: Web/CSS/Reference/Properties/caret-shape
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`caret-shape`** définit la forme du **curseur d'insertion**, le marqueur visible qui apparaît dans les éléments éditables pour indiquer où le prochain caractère sera inséré ou supprimé.

{{InteractiveExample("Démonstration CSS&nbsp;: caret-shape")}}

```css interactive-example-choice
caret-shape: auto;
```

```css interactive-example-choice
caret-shape: bar;
```

```css interactive-example-choice
caret-shape: block;
```

```css interactive-example-choice
caret-shape: underscore;
```

```html interactive-example
<section class="default-example container" id="default-example">
  <div>
    <label for="example-element">Champ de texte modifiable&nbsp;:</label>
    <input id="example-element" type="text" value="Texte d'exemple" />
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

## Syntaxe

```css
/* Valeurs avec un mot-clé */
caret-shape: auto;
caret-shape: bar;
caret-shape: block;
caret-shape: underscore;

/* Valeurs globales */
caret-shape: inherit;
caret-shape: initial;
caret-shape: revert;
caret-shape: revert-layer;
caret-shape: unset;
```

### Valeurs

- `auto`
  - : Valeur par défaut. Le navigateur détermine la forme du curseur. Cela suit généralement les conventions de la plateforme et peut changer selon le contexte.

- `bar`
  - : Le curseur apparaît comme une fine ligne verticale au point d'insertion, positionnée entre les caractères plutôt que par-dessus eux.

- `block`
  - : Le curseur apparaît comme un rectangle qui chevauche le caractère suivant le point d'insertion. S'il n'y a pas de caractère suivant, il apparaît après le dernier caractère.

- `underscore`
  - : Le curseur apparaît comme une fine ligne horizontale sous le caractère suivant le point d'insertion. S'il n'y a pas de caractère suivant, il apparaît après le dernier caractère.

## Description

Le curseur d'insertion est le curseur clignotant qui indique où le texte sera inséré lors de la saisie. Différentes formes de curseur peuvent fournir un retour visuel sur le mode d'édition en cours ou offrir une personnalisation visuelle.

### Modes d'édition et formes de curseur

Les éditeurs de texte fonctionnent généralement dans l'un des deux modes suivants&nbsp;:

- **Mode insertion**&nbsp;: Les nouveaux caractères sont insérés à la position du curseur, repoussant le texte existant vers la fin de la ligne. Il s'agit du comportement par défaut dans la plupart des applications modernes.
- **Mode écrasement** (aussi appelé «&nbsp;mode de remplacement&nbsp;»)&nbsp;: Les nouveaux caractères remplacent les caractères existants à la position du curseur au lieu d'être insérés entre eux. Ce mode est souvent activé avec la touche <kbd>Insert</kbd>.

Différentes formes de curseur ont des usages traditionnels, par exemple&nbsp;:

- **Curseurs barre**&nbsp;: positionnés entre les caractères, ils sont les plus courants dans les interfaces modernes.
- **Curseurs bloc**&nbsp;: superposés au caractère suivant, ils sont souvent utilisés dans les applications de terminal ou pour indiquer le mode écrasement.
- **Curseurs soulignés**&nbsp;: apparaissent sous les caractères et peuvent être utiles pour certains styles visuels, comme imiter une machine à écrire ou un style de saisie souligné.

### Positionnement et comportement du curseur

La propriété `caret-shape` affecte la façon dont le curseur est rendu visuellement mais ne change pas sa position logique dans le texte. Le curseur représente toujours le point d'insertion entre les caractères, quelle que soit sa forme visuelle.

### Interaction avec les modes d'écriture

La forme du curseur s'adapte au mode d'écriture ({{CSSxRef("writing-mode")}}) du texte. En mode d'écriture vertical, les curseurs barre deviennent horizontaux et les curseurs soulignés se positionnent correctement selon la direction du texte.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Terminal rétro avec curseur animé

Cet exemple montre comment créer une interface de terminal vintage en utilisant `caret-shape: block` avec une couleur de curseur animée, remplaçant l'ancienne technique basée sur les bordures.

L'élément clé est d'utiliser les propriétés modernes du curseur à la place de l'ancienne technique basée sur les bordures. On définit le curseur en forme de bloc, on désactive le clignotement par défaut et on crée notre propre animation personnalisée.

#### HTML

```html
<label for="terminal">Entrer une commande</label>
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
  caret-shape: block;
  caret-animation: manual;
  animation: old-caret 2s infinite;
}

@keyframes old-caret {
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

### Interface console avec curseur souligné

Cet exemple montre comment utiliser `caret-shape: underscore` pour créer une interface de type console où le curseur souligné complète l'esthétique du terminal.

#### HTML

```html
<label for="console">Entrer une commande</label>
<div class="console-demo">
  <div class="console-output">
    <p>user@host:css-ui-4 $ ls -a</p>
    <p>. .. Aperçu.bs Aperçu.html</p>
  </div>
  <div class="console-input">
    <span class="prompt">user@host:css-ui-4 $ </span>
    <input type="text" id="console" class="console" value="cd" />
  </div>
</div>
```

#### CSS

```css hidden
label {
  background: #2a2a2c;
  color: white;
  display: block;
  padding: 10px 20px;
  font-weight: bold;
  font-family: monospace;
}

.console-demo {
  background: black;
  color: white;
  font-family: monospace;
  padding: 10px 20px;
  height: 60px;
}

.console-output {
  margin-bottom: 0.5rem;
}

.console-output p {
  margin: 0 0.25rem;
}

.console-input {
  display: flex;
  align-items: center;
}

.prompt {
  margin-right: 0;
}

.console {
  background: transparent;
  border: none;
  color: white;
  padding-left: 1ch;
  font-family: inherit;
  outline: none;
  flex: 1;
}
```

```css
.console {
  caret-shape: underscore;
}
```

#### Résultat

{{EmbedLiveSample("Interface console avec curseur souligné", 550, 115)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("caret-color")}}, {{CSSxRef("caret-animation")}}
- La propriété raccourcie {{CSSxRef("caret")}}
- Le module [d'interface utilisateur de base CSS](/fr/docs/Web/CSS/Guides/Basic_user_interface)
