---
title: hyphenate-character
slug: Web/CSS/Reference/Properties/hyphenate-character
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`hyphenate-character`** définit le caractère (ou la chaîne de caractères) utilisé à la fin d'une ligne avant une coupure par trait d'union.

Les traits d'union automatiques et conditionnels sont affichés selon la valeur définie pour `hyphenate-character`.

{{InteractiveExample("Démonstration CSS&nbsp;: hyphenate-character")}}

```css interactive-example-choice
hyphenate-character: auto;
```

```css interactive-example-choice
hyphenate-character: "=";
```

```css interactive-example-choice
hyphenate-character: "—";
```

```html interactive-example
<section id="default-example">
  <p id="example-element">Un mot extraordinairement long en français&nbsp;!</p>
</section>
```

```css interactive-example
#example-element {
  border: 2px dashed #999999;
  font-size: 1.5rem;
  text-align: left;
  width: 7rem;
  hyphens: auto;
}
```

## Syntaxe

```css
hyphenate-character: <string>;
hyphenate-character: auto;
```

La valeur définit soit la chaîne de caractères à utiliser à la place d'un trait d'union, soit indique que l'agent utilisateur doit choisir une chaîne adaptée selon les conventions typographiques du langage de contenu (valeur par défaut).

### Valeurs

- {{CSSxRef("&lt;string&gt;")}}
  - : La chaîne de caractères ({{CSSxRef("&lt;string&gt;")}}) à utiliser à la fin de la ligne avant une coupure par trait d'union.
    L'agent utilisateur peut tronquer cette valeur si trop de caractères sont utilisés.
- `auto`
  - : L'agent utilisateur choisit une chaîne adaptée selon les conventions typographiques du langage de contenu.
    Il s'agit de la valeur par défaut de la propriété, et il n'est nécessaire de la définir explicitement que pour surcharger une valeur héritée différente.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Cet exemple montre deux blocs de texte identiques qui ont {{CSSxRef("hyphens")}} définie pour garantir qu'ils se coupent où cela est nécessaire, y compris sur les coupures conditionnelles (créées avec `&shy;`).
Le premier bloc a la valeur du trait d'union modifiée en symbole égal (`=`).
Le second bloc n'a pas de valeur définie pour `hyphenate-character`, ce qui équivaut à `hyphenate-character: auto` pour les agents utilisateur qui prennent en charge cette propriété.

### HTML

```html
<dl>
  <dt><code>hyphenate-character: "="</code></dt>
  <dd id="string" lang="en">Superc&shy;alifragilisticexpialidocious</dd>
  <dt><code>hyphenate-character n'est pas défini</code></dt>
  <dd lang="en">Superc&shy;alifragilisticexpialidocious</dd>
</dl>
```

### CSS

```css
dd {
  width: 90px;
  border: 1px solid black;
  hyphens: auto;
}

dd#string {
  -webkit-hyphenate-character: "=";
  hyphenate-character: "=";
}
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Propriétés CSS associées&nbsp;: {{CSSxRef("hyphens")}}, {{CSSxRef("overflow-wrap")}}.
