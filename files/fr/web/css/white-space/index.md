---
title: white-space
slug: Web/CSS/white-space
---

{{CSSRef}}

La propriété **`white-space`** est utilisée pour décrire la façon dont les blancs sont gérés au sein de l'élément.

{{EmbedInteractiveExample("pages/css/white-space.html")}}

> **Note :** Afin d'obtenir une césure au sein des mots, il faudra utiliser {{cssxref("overflow-wrap")}}, {{cssxref("word-break")}} ou bien {{cssxref("hyphens")}}.

## Syntaxe

```css
/* Avec un mot-clé */
white-space: normal;
white-space: nowrap;
white-space: pre;
white-space: pre-wrap;
white-space: pre-line;
white-space: break-spaces;

/* Valeurs globales */
white-space: inherit;
white-space: initial;
white-space: unset;
```

La propriété `white-space` se définit avec l'un des mots-clés suivants.

### Valeurs

- `break-spaces`
  - : Le comportement est identique à celui de `pre-wrap` mais chaque séquence de blancs continue d'occuper un espace, y compris en fin de ligne. Il y aura une opportunité de saut de ligne après chaque blanc. De tels espaces auront un impact sur les dimensions intrinsèques de la boîte (`min-content` et `max-content`).
- `normal`
  - : Les séries de blancs sont regroupées, les caractères de saut de ligne sont gérés comme les autres blancs. Les passages à la ligne sont faits naturellement pour remplir les boîtes.
- `nowrap`
  - : Les blancs sont regroupés comme avec `normal` mais les passages à la ligne automatiques sont supprimés.
- `pre`
  - : Les séries de blancs sont conservées telles quelles. Les sauts de ligne ont uniquement lieu avec les caractères de saut de ligne et avec les éléments {{HTMLElement("br")}}.
- `pre-wrap`
  - : Les séries de blancs sont conservées telles quelles. Les sauts de ligne ont lieu avec les caractères de saut de ligne, avec {{HTMLElement("br")}} et on a des passages à la ligne automatiques.
- `pre-line`
  - : Les séries de blancs sont regroupées, les sauts de lignes ont lieu avec les caractères de saut de ligne, les éléments {{HTMLElement("br")}} et on a des passages à la ligne automatiques.

Le tableau qui suit résume le comportement des différentes valeurs :

<table class="standard-table">
  <thead>
    <tr>
      <th></th>
      <th>Nouvelles lignes</th>
      <th>Espaces et tabulations</th>
      <th>Retour à la ligne automatique</th>
      <th>Espaces en fin de ligne</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><code>normal</code></th>
      <td>Regroupées</td>
      <td>Regroupés</td>
      <td>Oui</td>
      <td>Retirés</td>
    </tr>
    <tr>
      <th><code>nowrap</code></th>
      <td>Regroupées</td>
      <td>Regroupés</td>
      <td>Non</td>
      <td>Retirés</td>
    </tr>
    <tr>
      <th><code>pre</code></th>
      <td>Préservées</td>
      <td>Préservés</td>
      <td>Non</td>
      <td>Conservés</td>
    </tr>
    <tr>
      <th><code>pre-wrap</code></th>
      <td>Préservées</td>
      <td>Préservés</td>
      <td>Oui</td>
      <td>Suspendus</td>
    </tr>
    <tr>
      <th><code>pre-line</code></th>
      <td>Préservées</td>
      <td>Regroupés</td>
      <td>Oui</td>
      <td>Retirés</td>
    </tr>
    <tr>
      <th><code>break-spaces</code></th>
      <td>Préservées</td>
      <td>Regroupés</td>
      <td>Oui</td>
      <td>Passent à la ligne.</td>
    </tr>
  </tbody>
</table>

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

#### HTML

```html
<code>
  var coucou = function(){ // on notera l'indentation // avec deux espaces
  console.log("Hello World"); var toto = function(){ // ici 4 espaces
  console.log("Toto"); } toto(); }
</code>
```

#### CSS

```css
code {
  white-space: pre;
}
```

#### Résultat

{{EmbedLiveSample("Exemple_simple")}}

### Passage automatique à la ligne dans un élément `pre`

#### HTML

```html
<pre>
function jeNAuraisJamaisDuAppelerCetteFonctionAvecUnNomAussiLong(toto){
  console.log("Tout ça pour ça");
}
</pre>
```

#### CSS

```css
pre {
  word-wrap: break-word; /* IE 5.5-7 */
  white-space: pre-wrap; /* current browsers */
}
```

#### Résultat

{{EmbedLiveSample("Passage_automatique_à_la_ligne_dans_un_élément_pre")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("overflow-wrap")}}
- {{cssxref("word-break")}}
- {{cssxref("hyphens")}}
