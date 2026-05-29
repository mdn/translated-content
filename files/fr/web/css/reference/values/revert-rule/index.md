---
title: Mot-clé CSS `revert-rule`
short-title: revert-rule
slug: Web/CSS/Reference/Values/revert-rule
l10n:
  sourceCommit: c8990ddd46c4605793660e16edf6dda79300ca90
---

Le [mot-clé global CSS](/fr/docs/Web/CSS/Reference/Values/Data_types#mots-clés_globaux_css) **`revert-rule`** annule la valeur d'une propriété dans une [règle CSS](/fr/docs/Web/CSS/Guides/Syntax/Introduction#ensembles_de_règles_css) pour revenir à la valeur que la propriété aurait eue si la règle CSS actuelle n'avait pas été présente. La cascade détermine ensuite la valeur à partir des déclarations restantes — cela peut être une autre règle dans la même [couche de cascade](/fr/docs/Web/CSS/Reference/At-rules/@layer), une règle dans une couche différente, une [origine de style](/fr/docs/Glossary/Style_origin) différente ou une [valeur par défaut](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#application_des_valeurs_par_défaut) (`inherited` ou `initial`).

Lorsqu'il est utilisé dans une [animation CSS](/fr/docs/Web/CSS/Guides/Animations) (l'origine de l'animation), le mot-clé `revert-rule` se comporte comme {{CSSxRef("revert-layer")}}.

Ce mot-clé peut être appliqué à n'importe quelle propriété CSS, y compris la propriété raccourcie CSS {{CSSxRef("all")}}.

## `revert-rule`, `revert-layer` et `revert`

Les mots-clés `revert-rule`, {{CSSxRef("revert-layer")}} et {{CSSxRef("revert")}} annulent chacun la cascade, mais à différents niveaux de granularité&nbsp;:

- {{CSSxRef("revert")}} annule toutes les déclarations de [l'origine de style](/fr/docs/Glossary/Style_origin) actuelle, revenant à l'origine précédente (par exemple, des styles de l'auteur·ice aux styles de l'agent utilisateur).
- {{CSSxRef("revert-layer")}} annule toutes les déclarations de la [couche de cascade](/fr/docs/Web/CSS/Reference/At-rules/@layer) actuelle, revenant à la couche précédente dans la même origine.
- `revert-rule` annule uniquement les déclarations de la règle de style actuelle. Les autres règles dans la même couche de cascade s'appliquent toujours.

Cela rend `revert-rule` utile pour ignorer conditionnellement des déclarations spécifiques au sein d'une règle tout en respectant les déclarations des autres règles dans la même couche.

## Exemples

### Revenir à la règle précédente

Dans cet exemple, deux règles ciblent le même élément. La deuxième règle utilise `revert-rule` sur la propriété `color`, ce qui fait que la cascade détermine la valeur comme si la règle `p.special` n'était pas présente, revenant à la valeur établie par la première règle.

#### HTML

```html
<p class="special">Ce paragraphe a un style spécial.</p>
```

#### CSS

```css hidden
body {
  font-family: system-ui;
}

@supports not (color: revert-rule) {
  body::before {
    content: "Votre navigateur ne prend pas encore en charge le mot-clé revert-rule.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1em;
  }
}
```

```css
p {
  color: blue;
  font-weight: bold;
}

p.special {
  color: revert-rule;
  border: 1px solid currentcolor;
}
```

#### Résultat

{{EmbedLiveSample("Revenir à la règle précédente", "100%", 120)}}

Le texte du paragraphe est bleu grâce à la règle `p`, car `color: revert-rule` fait que la déclaration `color` dans `p.special` est ignorée. Les déclarations `font-weight` et `border` ne sont pas affectées.

### Revenir à partir d'un attribut de style

Lorsque `revert-rule` est utilisé dans un [attribut de style](/fr/docs/Web/HTML/Reference/Global_attributes/style), il fait en sorte que la cascade se comporte comme si l'attribut de style n'était pas présent. Cela fonctionne parce que l'attribut de style est traité comme sa propre règle de style.

#### HTML

```html
<p style="color: revert-rule">
  Ce texte utilise la couleur définie dans la feuille de style.
</p>
```

#### CSS

```css hidden
body {
  font-family: system-ui;
}

@supports not (color: revert-rule) {
  body::before {
    content: "Votre navigateur ne prend pas encore en charge le mot-clé revert-rule.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1em;
  }
}
```

```css
p {
  color: green;
}
```

#### Résultat

{{EmbedLiveSample("Revenir à partir d'un attribut de style", "100%", 120)}}

Le texte du paragraphe est vert grâce à la règle `p`, car `revert-rule` fait que la déclaration `color` dans l'attribut de style est ignorée. La règle `p` prend effet.

### Chaînage de plusieurs valeurs `revert-rule`

Si plusieurs règles utilisent `revert-rule` pour la même propriété, la cascade ignore chacune d'elles à son tour, revenant aux règles précédentes jusqu'à ce qu'elle trouve une valeur concrète.

#### HTML

```html
<p class="a b">Ce texte est stylé par une chaîne de valeurs revert-rule.</p>
```

#### CSS

```css hidden
body {
  font-family: system-ui;
}

@supports not (color: revert-rule) {
  body::before {
    content: "Votre navigateur ne prend pas encore en charge le mot-clé revert-rule.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1em;
  }
}
```

```css
p {
  color: red;
}
p.a {
  color: revert-rule;
}
p.b {
  color: revert-rule;
}
```

#### Résultat

{{EmbedLiveSample("Chaînage de plusieurs valeurs `revert-rule`", "100%", 120)}}

Les règles `p.b` et `p.a` sont ignorées par `revert-rule`. La cascade retombe sur la règle `p`, donc le texte est rouge.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le mot-clé {{CSSxRef("initial")}}
- Le mot-clé {{CSSxRef("inherit")}}
- Le mot-clé {{CSSxRef("revert")}}
- Le mot-clé {{CSSxRef("revert-layer")}}
- Le mot-clé {{CSSxRef("unset")}}
- La propriété {{CSSxRef("all")}}
- Le module [de cascade et d'héritage CSS](/fr/docs/Web/CSS/Guides/Cascade)
