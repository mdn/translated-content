---
title: Propriété CSS `text-emphasis-position`
short-title: text-emphasis-position
slug: Web/CSS/Reference/Properties/text-emphasis-position
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`text-emphasis-position`** définit l'emplacement des marques d'emphase. Similaire au texte rendu par l'élément HTML {{HTMLElement("ruby")}}, si l'espace disponible pour les marques d'emphase est insuffisant, la hauteur de ligne est augmentée.

{{InteractiveExample("Démonstration CSS&nbsp;: text-emphasis-position")}}

```css interactive-example-choice
text-emphasis-position: auto;
```

```css interactive-example-choice
text-emphasis-position: over right;
```

```css interactive-example-choice
text-emphasis-position: under right;
```

```css interactive-example-choice
text-emphasis-position: auto;
writing-mode: vertical-rl;
```

```css interactive-example-choice
text-emphasis-position: over left;
writing-mode: vertical-rl;
```

```css interactive-example-choice
text-emphasis-position: over right;
writing-mode: vertical-rl;
```

```html interactive-example
<section id="default-example">
  <p>
    Je préfère être
    <span class="transition-all" id="example-element"
      >heureux que d'avoir raison</span
    >
    n'importe quel jour.
  </p>
</section>
```

```css interactive-example
p {
  font: 1.5em sans-serif;
}

#example-element {
  text-emphasis: filled double-circle #ffb703;
}
```

## Syntaxe

```css
/* Valeur initiale */
text-emphasis-position: auto;

/* Valeurs avec mot-clé */
text-emphasis-position: over;
text-emphasis-position: under;

text-emphasis-position: over right;
text-emphasis-position: over left;
text-emphasis-position: under right;
text-emphasis-position: under left;

text-emphasis-position: left over;
text-emphasis-position: right over;
text-emphasis-position: right under;
text-emphasis-position: left under;

/* Valeurs globales */
text-emphasis-position: inherit;
text-emphasis-position: initial;
text-emphasis-position: revert;
text-emphasis-position: revert-layer;
text-emphasis-position: unset;
```

### Valeurs

La propriété accepte une ou deux valeurs&nbsp;:

- Si une seule valeur est fournie, elle peut être `auto`, `over` ou `under`. Lorsque seul `over` ou `under` est utilisé, `right` est supposé comme position par défaut.
- Si deux valeurs sont fournies, elles doivent inclure l'une de `over` ou `under` et l'une de `right` ou `left`. Leur ordre n'a pas d'importance.

Les valeurs incluent&nbsp;:

- `auto`
  - : Dessine les marques au-dessus du texte en mode d'écriture horizontal et à droite du texte en mode d'écriture vertical.
- `over`
  - : Les marques sont dessinées au-dessus du texte lorsqu'il est écrit en mode horizontal.
- `under`
  - : Les marques sont dessinées en-dessous du texte lorsqu'il est écrit en mode horizontal.
- `right`
  - : Les marques sont dessinées à droite du texte lorsqu'il est écrit en mode vertical.
- `left`
  - : Les marques sont dessinées à gauche du texte lorsqu'il est écrit en mode vertical.

## Description

La position préférée des marques d'emphase dépend de la langue. Par exemple, en japonais, la position préférée est `over right`. En chinois, en revanche, la position préférée est `under right`. Le tableau informatif ci-dessous résume les positions préférées des marques d'emphase pour le chinois, le mongol et le japonais&nbsp;:

<table>
  <caption>
    Position privilégiée pour les marques d'emphase en ruby
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="col">Langue</th>
      <th colspan="2" scope="col">Position</th>
      <th colspan="2" rowspan="2" scope="col">Illustration</th>
    </tr>
    <tr>
      <th>Horizontale</th>
      <th>Verticale</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Japonais</td>
      <td rowspan="3">au dessus</td>
      <td rowspan="3">à droite</td>
      <td rowspan="3">
        <img
          alt="Les marques d'emphase apparaissent au-dessus de chaque caractère accentué dans un texte japonais horizontal."
          src="text-emphasis-ja.png"
          title="Emphase (montrée en bleu pour plus de clarté) appliquée au-dessus d'un fragment de texte japonais"
        />
      </td>
      <td rowspan="4">
        <img
          alt="Les marques d'emphase apparaissent à droite de chaque caractère accentué dans un texte japonais vertical."
          src="text-emphasis-v.gif"
          title="Emphase appliquée à droite d'un fragment de texte japonais"
        />
      </td>
    </tr>
    <tr>
      <td>Coréen</td>
    </tr>
    <tr>
      <td>Mongolique</td>
    </tr>
    <tr>
      <td>Chinois</td>
      <td>en dessous</td>
      <td>à droite</td>
      <td>
        <img
          alt="Les marques d'emphase apparaissent en dessous de chaque caractère accentué dans un texte chinois simplifié horizontal."
          src="text-emphasis-zh.gif"
          title="Emphase (montrée en bleu pour plus de clarté) appliquée en dessous d'un fragment de texte chinois"
        />
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> La propriété `text-emphasis-position` ne peut pas être définie (et donc ne peut pas être redéfinie) avec la propriété raccourcie {{CSSxRef("text-emphasis")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Ajouter des positions de marques d'emphase

Utilisez le menu déroulant pour changer la position des marques d'emphase. Cela changera la classe sur l'élément `<section>`, ce qui mettra à jour la position des marques d'emphase sur le texte.

#### HTML

```html hidden
<p class="unsupported">
  La valeur <code>auto</code> n'est pas prise en charge par votre navigateur.
</p>
<label for="position">Position de l'emphase&nbsp;:</label>
<select id="position">
  <option value="auto">auto</option>
  <option value="over-right">over right</option>
  <option value="over-left">over left</option>
  <option value="under-right">under right</option>
  <option value="under-left">under left</option>
  <option value="preferred">preferred</option>
</select>
```

```html
<section id="setting" class="auto">
  <p class="horizontal" lang="zh">你好世界</p>
  <!-- Bonjour le monde en chinois -->
  <p class="vertical" lang="ja">世界、こんにちは。</p>
  <!-- Bonjour le monde en japonais -->
</section>
```

#### CSS

```css hidden
.unsupported {
  color: red;
}
@supports (text-emphasis-position: auto) {
  .unsupported {
    display: none;
  }
}
.horizontal {
  writing-mode: horizontal-tb;
}
.vertical {
  writing-mode: vertical-rl;
}
section {
  display: flex;
  justify-content: space-around;
}
```

```css
section p {
  text-emphasis: filled circle tomato;
  text-emphasis-position: auto;
}
.over-right p,
.preferred p [lang="ja"] {
  text-emphasis-position: over right;
}
.over-left p {
  text-emphasis-position: over left;
}
.under-right p,
.preferred p [lang="zh"] {
  text-emphasis-position: under right;
}
.under-left p {
  text-emphasis-position: under left;
}
.preferred p [lang="ja"] {
}
```

```js hidden
const position = document.querySelector("#position");
const setting = document.querySelector("#setting");
const updateClass = () => {
  const currentClass = setting.classList;
  setting.classList.replace(currentClass, position.value);
};
position.addEventListener("change", updateClass);
```

#### Résultat

Utilisez le menu déroulant «&nbsp;Position de l'emphase&nbsp;» pour choisir l'emplacement des marques d'emphase. L'option «&nbsp;prefered&nbsp;» du menu utilise les positions privilégiées, comme expliqué dans la [Description](#description).

{{EmbedLiveSample("Ajouter des positions de marques d'emphase", 450, 250)}}

### Privilégier ruby aux marques d'emphase

Certain·e·s éditeur·ice·s préfèrent masquer les marques d'emphase lorsqu'elles entrent en conflit avec ruby. En HTML, cela peut être fait avec la règle de style suivante&nbsp;:

```css
ruby {
  text-emphasis: none;
}
```

### Privilégier les marques d'emphase à ruby

D'autres éditeur·ice·s préfèrent masquer ruby lorsqu'il entre en conflit avec les marques d'emphase. En HTML, cela peut être fait avec le modèle suivant&nbsp;:

```css
em {
  text-emphasis: dot; /* On applique text-emphasis aux éléments <em> */
}

em rt {
  display: none; /* On masque ruby à l'intérieur des éléments <em> */
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("text-underline-position")}}
- La propriété {{CSSxRef("text-emphasis-style")}}
- La propriété {{CSSxRef("text-emphasis-color")}}
- La propriété raccourcie {{CSSxRef("text-emphasis")}}
- La propriété {{CSSxRef("writing-mode")}}
