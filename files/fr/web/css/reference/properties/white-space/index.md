---
title: white-space
slug: Web/CSS/Reference/Properties/white-space
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La propriété [CSS](/fr/docs/Web/CSS) **`white-space`** détermine comment les {{Glossary("whitespace", "espaces blancs")}} à l'intérieur d'un élément sont gérés.

{{InteractiveExample("Démonstration CSS&nbsp;: white-space")}}

```css interactive-example-choice
white-space: normal;
```

```css interactive-example-choice
white-space: pre;
```

```css interactive-example-choice
white-space: pre-wrap;
```

```css interactive-example-choice
white-space: pre-line;
```

```css interactive-example-choice
white-space: wrap;
```

```css interactive-example-choice
white-space: collapse;
```

```css interactive-example-choice
white-space: preserve nowrap;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div id="example-element">
    <p>
      Mais avant qu'elle ne quitte la porte de l'église, elle sourit et nous
      expliqua pourquoi&nbsp;: «&nbsp;C'était la malédiction d'une femme
      méchante,&nbsp;» dit-elle, «&nbsp;et qu'importe&nbsp;?&nbsp;» Elle sourit,
      et sourit encore, et passa outre Avant de quitter la porte—
    </p>
  </div>
</section>
```

```css interactive-example
#example-element {
  width: 16rem;
}

#example-element p {
  border: 1px solid #c5c5c5;
  padding: 0.75rem;
  text-align: left;
}
```

La propriété définit deux choses&nbsp;:

- Si et comment les espaces blancs sont [regroupés](/fr/docs/Web/CSS/Guides/Text/Whitespace#regroupement_et_transformation).
- Si et comment les lignes se replient.

> [!NOTE]
> Afin d'obtenir une césure _au sein des mots_, il faut utiliser {{CSSxRef("overflow-wrap")}}, {{CSSxRef("word-break")}} ou bien {{CSSxRef("hyphens")}}.

## Propriétés constitutives

Cette propriété est un raccourci pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("white-space-collapse")}}
- {{CSSxRef("text-wrap-mode")}}

> [!NOTE]
> La spécification définit une troisième propriété constitutive&nbsp;: `white-space-trim`, qui n'est encore implémentée dans aucun navigateur.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
white-space: normal;
white-space: pre;
white-space: pre-wrap;
white-space: pre-line;

/* Valeurs raccourcies de white-space-collapse et text-wrap-mode */
white-space: nowrap;
white-space: wrap;
white-space: break-spaces;
white-space: collapse;
white-space: preserve nowrap;

/* Valeurs globales */
white-space: inherit;
white-space: initial;
white-space: revert;
white-space: revert-layer;
white-space: unset;
```

### Valeurs

Les valeurs de la propriété `white-space` peuvent être définies par un ou deux mots-clés représentant les valeurs des propriétés {{CSSxRef("white-space-collapse")}} et {{CSSxRef("text-wrap-mode")}}, ou par les mots-clés spéciaux suivants&nbsp;:

- `normal`
  - : Les séquences d'espaces blancs sont [regroupées](/fr/docs/Web/CSS/Guides/Text/Whitespace#regroupement_et_transformation). Les caractères de saut de ligne dans la source sont traités comme les autres espaces blancs. Les lignes sont coupées selon les besoins pour remplir les boîtes de ligne. Équivaut à `collapse wrap`.
- `pre`
  - : Les séquences d'espaces blancs sont préservées. Les lignes ne sont cassées qu'aux caractères de saut de ligne dans la source et aux éléments HTML {{HTMLElement("br")}}. Équivaut à `preserve nowrap`.
- `pre-wrap`
  - : Les séquences d'espaces blancs sont préservées. Les lignes sont cassées aux caractères de saut de ligne, aux {{HTMLElement("br")}}, et selon les besoins pour remplir les boîtes de ligne. Équivaut à `preserve wrap`.
- `pre-line`
  - : Les séquences d'espaces blancs sont [regroupées](/fr/docs/Web/CSS/Guides/Text/Whitespace#regroupement_et_transformation). Les lignes sont cassées aux caractères de saut de ligne, aux {{HTMLElement("br")}}, et selon les besoins pour remplir les boîtes de ligne. Équivaut à `preserve-breaks wrap`.

> [!NOTE]
> La propriété `white-space` en tant que raccourci est une fonctionnalité relativement récente (voir la [compatibilité des navigateurs](#compatibilité_des_navigateurs)). À l'origine, elle possédait six valeurs par mot-clé&nbsp;; désormais, la valeur `nowrap` est interprétée comme une valeur pour {{CSSxRef("text-wrap-mode")}}, tandis que la valeur `break-spaces` est interprétée comme une valeur pour {{CSSxRef("white-space-collapse")}}. Les quatre mots-clés ci‑dessus restent spécifiques à `white-space`, mais ils ont des équivalents en version longue. Le fait de faire de `white-space` un raccourci étend les valeurs acceptables à encore plus de mots-clés et de combinaisons, tels que `wrap` et `collapse`.

Le tableau qui suit résume le comportement des différentes valeurs :

<table class="standard-table">
  <thead>
    <tr>
      <th></th>
      <th>Nouvelles lignes</th>
      <th>Espaces et tabulations</th>
      <th>Retour à la ligne automatique</th>
      <th>Espaces en fin de ligne</th>
      <th>Séparateurs d'espaces en fin de ligne</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><code>normal</code></th>
      <td>Regroupées</td>
      <td>Regroupés</td>
      <td>Oui</td>
      <td>Retirés</td>
      <td>Conservés</td>
    </tr>
    <tr>
      <th><code>nowrap</code></th>
      <td>Regroupées</td>
      <td>Regroupés</td>
      <td>Non</td>
      <td>Retirés</td>
      <td>Pas de retour à la ligne</td>
    </tr>
    <tr>
      <th><code>pre</code></th>
      <td>Préservées</td>
      <td>Préservés</td>
      <td>Non</td>
      <td>Conservés</td>
      <td>Conservés</td>
    </tr>
    <tr>
      <th><code>pre-wrap</code></th>
      <td>Préservées</td>
      <td>Préservés</td>
      <td>Oui</td>
      <td>Conservés</td>
      <td>Conservés</td>
    </tr>
    <tr>
      <th><code>pre-line</code></th>
      <td>Préservées</td>
      <td>Regroupés</td>
      <td>Oui</td>
      <td>Retirés</td>
      <td>Conservés</td>
    </tr>
  </tbody>
</table>

Une tabulation par défaut correspond à 8 espaces et peut être configurée à l'aide de la propriété {{CSSxRef("tab-size")}}. Dans le cas des valeurs `normal`, `nowrap` et `pre-line`, chaque tabulation est convertie en un caractère espace (U+0020).

> [!NOTE]
> Il existe une distinction entre **espaces** et **autres séparateurs d'espaces**. Ceux-ci sont définis comme suit&nbsp;:
>
> - espaces
>   - : Les espaces (U+0020), les tabulations (U+0009) et les sauts de segment (comme les nouvelles lignes).
> - autres séparateurs d'espaces
>   - : Tous les autres séparateurs d'espaces définis dans Unicode, autres que ceux déjà définis comme espaces.
>
> Lorsque l'on dit que les espaces blancs _pendent_, cela peut affecter la taille de la boîte lorsqu'elle est mesurée pour le dimensionnement intrinsèque.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

```css
code {
  white-space: pre;
}
```

### Passer automatique à la ligne dans un élément `<pre>`

```css
pre {
  white-space: pre-wrap;
}
```

### En action

```html hidden
<div id="css-code" class="box">
  p { white-space:
  <select>
    <option>normal</option>
    <option>nowrap</option>
    <option>pre</option>
    <option>pre-wrap</option>
    <option>pre-line</option>
    <option>break-spaces</option>
  </select>
  }
</div>
<div id="results" class="box">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</div>
```

```css hidden
.box {
  width: 350px;
  padding: 16px;
}

#css-code {
  background-color: gainsboro;
  font-size: 16px;
  font-family: monospace;
}

#css-code select {
  font-family: inherit;
  width: 100px;
}

#results {
  background-color: rgb(230 230 230);
  overflow-x: scroll;
  white-space: normal;
  font-size: 14px;
}
```

```js hidden
const select = document.querySelector("#css-code select");
const results = document.querySelector("#results p");
select.addEventListener("change", (e) => {
  results.style.setProperty("white-space", e.target.value);
});
```

{{EmbedLiveSample("En action", "100%", 450)}}

### Contrôler le passage à la ligne dans les tableaux

#### HTML

```html
<table>
  <tbody>
    <tr>
      <td></td>
      <td>Contenu très long qui se divise</td>
      <td class="nw">Contenu très long qui ne se divise pas</td>
    </tr>
    <tr>
      <td class="nw">white-space:</td>
      <td>normal</td>
      <td>nowrap</td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
table {
  border-collapse: collapse;
  border: solid black 1px;
  width: 250px;
  height: 150px;
}
td {
  border: solid 1px black;
  text-align: center;
}
.nw {
  white-space: nowrap;
}
```

#### Résultat

{{EmbedLiveSample("Contrôler le passage à la ligne dans les tableaux", "100%", "100%")}}

### Plusieurs lignes dans un élément de texte SVG

La propriété CSS `white-space` peut être utilisée pour créer plusieurs lignes dans un élément {{SVGElement("text")}}, qui ne se divise pas par défaut.

#### HTML

Le texte à l'intérieur de l'élément `<text>` doit être divisé en plusieurs lignes pour que les nouvelles lignes soient détectées. Après la première ligne, le reste doit avoir ses espaces blancs supprimés.

```html-nolint
<svg viewBox="0 0 320 150">
  <text y="20" x="10">Voici un paragraphe en français
qui est divisé en plusieurs lignes
dans le code source afin qu'il puisse
être plus facilement lu et édité
dans un éditeur de texte.
  </text>
</svg>
```

#### CSS

```css
text {
  white-space: break-spaces;
}
```

#### Résultat

{{EmbedLiveSample("Plusieurs lignes dans un élément de texte SVG", "100%", 350)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Propriétés qui définissent comment les mots se coupent _à l'intérieur d'eux-mêmes_&nbsp;: {{CSSxRef("overflow-wrap")}}, {{CSSxRef("word-break")}}, {{CSSxRef("hyphens")}}
- La propriété {{CSSxRef("tab-size")}}
- [Gérer les espaces blancs en CSS](/fr/docs/Web/CSS/Guides/Text/Whitespace)
