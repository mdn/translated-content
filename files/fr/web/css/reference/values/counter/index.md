---
title: Fonction CSS `counter()`
short-title: counter()
slug: Web/CSS/Reference/Values/counter
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`counter()`** retourne une chaîne de caractères représentant la valeur actuelle du compteur nommé, si celui-ci existe.

La fonction `counter()` est généralement utilisée au sein d'un [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) avec la propriété {{CSSxRef("content")}}, mais théoriquement, elle peut être utilisée partout où une valeur {{CSSxRef("&lt;string&gt;")}} est acceptée.

{{InteractiveExample("Démonstration CSS&nbsp;: counter()", "tabbed-shorter")}}

```css interactive-example
.double-list {
  counter-reset: count -1;
}

.double-list li {
  counter-increment: count 2;
}

.double-list li::marker {
  content: counter(count, decimal) ") ";
}
```

```html interactive-example
<p>Meilleurs duos dynamiques dans le sport&nbsp;:</p>
<ol class="double-list">
  <li>Simone Biles + Jonathan Owens</li>
  <li>Serena Williams + Venus Williams</li>
  <li>Aaron Judge + Giancarlo Stanton</li>
  <li>LeBron James + Dwyane Wade</li>
  <li>Xavi Hernandez + Andres Iniesta</li>
</ol>
```

## Syntaxe

```css
/* Usage simple */
counter(nomcompteur);

/* Modifier le type d'affichage du compteur */
counter(nomcompteur, upper-roman)
```

Un [compteur](/fr/docs/Web/CSS/Guides/Counter_styles/Using_counters) CSS n'a aucun effet visible en lui-même.
Les fonctions `counter()` et {{CSSxRef("counters()")}} sont ce qui rend les compteurs utiles en retournant des chaînes de caractères définies par le·la développeur·euse (ou des images).

### Valeurs

La fonction `counter()` accepte jusqu'à deux paramètres. Le premier paramètre est le `<counter-name>`. Le deuxième paramètre optionnel est le `<counter-style>`.

- `<counter-name>`
  - : Un identifiant personnalisé ({{CSSxRef("&lt;custom-ident&gt;")}}) qui identifie le compteur, et qui est le même nom sensible à la casse utilisé avec les valeurs de propriété {{CSSxRef("counter-reset")}} et {{CSSxRef("counter-increment")}}. Le nom du compteur ne peut pas commencer par deux tirets et ne peut pas être `none`, `unset`, `initial` ou `inherit`.
- `<counter-style>`
  - : Un nom de {{CSSxRef("&lt;list-style-type&gt;")}}, un nom de {{CSSxRef("&lt;@counter-style&gt;")}} ou une fonction {{CSSxRef("symbols()")}}, où un nom de style de compteur peut être un style de compteur prédéfini `numeric`, `alphabetic` ou `symbolic`, un style de compteur prédéfini complexe en écriture asiatique ou éthiopienne, ou un autre [style de compteur prédéfini](/fr/docs/Web/CSS/Guides/Counter_styles). Si omis, le style de compteur par défaut est `decimal`.

> [!NOTE]
> Pour joindre les valeurs de compteur lors de l'imbrication de compteurs, utilisez la fonction {{CSSxRef("counters()")}}, qui fournit un paramètre {{CSSxRef("&lt;string&gt;")}} supplémentaire.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### `lower-roman` comparé à `lower-alpha`

Dans cet exemple, nous affichons un compteur en utilisant les styles de liste `lower-roman` et `lower-alpha`.

#### HTML

```html
<ol>
  <li></li>
  <li></li>
  <li></li>
</ol>
```

#### CSS

```css-nolint
ol {
  counter-reset: count;
}
li {
  counter-increment: count;
}
li::after {
  content:
    "[" counter(count, lower-roman) "] == ["
    counter(count, lower-alpha) "]";
}
```

#### Résultat

{{EmbedLiveSample("`lower-roman` comparé à `lower-alpha`", "100%", 150)}}

### Afficher un compteur en utilisant trois styles

Dans cet exemple, nous utilisons la fonction `counter()` trois fois.

#### HTML

```html
<ol>
  <li></li>
  <li></li>
  <li></li>
</ol>
```

#### CSS

Nous incluons la fonction `counter()` avec trois styles de compteur différents, y compris la valeur décimale par défaut. Nous avons ajouté un padding à la liste pour fournir de l'espace pour la longue chaîne de caractères dans `::marker`.

```css-nolint
ol {
  counter-reset: listCounter;
  padding-left: 8em;
}
li {
  counter-increment: listCounter;
}
li::marker {
  content:
    "L'élément #" counter(listCounter) " est : ";
}
li::after {
  content:
    "[" counter(listCounter, decimal-leading-zero) "] == ["
    counter(listCounter, upper-roman) "]";
}
```

#### Résultat

{{EmbedLiveSample("Afficher un compteur en utilisant trois styles", "100%", 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les compteurs CSS](/fr/docs/Web/CSS/Guides/Counter_styles/Using_counters)
- La propriété {{CSSxRef("counter-reset")}}
- La propriété {{CSSxRef("counter-set")}}
- La propriété {{CSSxRef("counter-increment")}}
- La règle {{CSSxRef("@counter-style")}}
- La fonction {{CSSxRef("counters()")}}
- Le module [des listes et compteurs CSS](/fr/docs/Web/CSS/Guides/Lists)
- Le module [des styles de compteurs CSS](/fr/docs/Web/CSS/Guides/Counter_styles)
- Le module [du contenu généré CSS](/fr/docs/Web/CSS/Guides/Generated_content)
