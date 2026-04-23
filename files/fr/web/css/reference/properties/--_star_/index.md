---
title: "Propriétés personnalisées (--*) : variables CSS"
slug: Web/CSS/Reference/Properties/--*
l10n:
  sourceCommit: 98bbdcd90e5487539cebe19b12fe3d731fb5a03e
---

Les noms des propriétés qui sont préfixés par deux tirets (`--`), comme par exemple `--nom-exemple`, représentent des propriétés personnalisées (_custom properties_) qui peuvent contenir une valeur qui pourra être réutilisée dans le document grâce à la fonction {{CSSxRef("var()")}}.

La portée des propriétés personnalisées est celle des éléments sur lesquels elles sont déclarées. Ces personnalisées contribuent à la cascade&nbsp;: la valeur utilisée d'une propriété personnalisée sera déterminée par l'algorithme de la cascade.

{{CSSInfo}}

## Syntaxe

```css
--some-keyword: left;
--some-color: #123456;
--some-complex-value: 3px 6px rgb(20 32 54);
```

- `<declaration-value>`
  - : Cette valeur correspond à une séquence de un ou plusieurs fragments tant que la séquence ne contient pas de fragments interdits. Elle représente l'intégralité de ce qu'une déclaration valide peut avoir comme valeur.

> [!NOTE]
> Les noms des propriétés personnalisées sont sensibles à la casse — `--ma-couleur` sera considéré comme une propriété personnalisée distincte de `--Ma-Couleur`.

## Exemples

### Exemple simple

#### HTML

```html
<p id="premierParagraphe">
  Ce paragraphe devrait être sur fond bleu avec un texte jaune.
</p>
<p id="secondParagraphe">
  Ce paragraphe devrait être sur fond jaune avec un texte bleu.
</p>
<div id="conteneur">
  <p id="troisiemeParagraphe">
    Ce paragraphe devrait avoir un fond vert et un texte jaune.
  </p>
</div>
```

#### CSS

```css
:root {
  --premiere-couleur: #1166ff;
  --seconde-couleur: #ffff77;
}

#premierParagraphe {
  background-color: var(--premiere-couleur);
  color: var(--seconde-couleur);
}

#secondParagraphe {
  background-color: var(--seconde-couleur);
  color: var(--premiere-couleur);
}

#conteneur {
  --premiere-couleur: #229900;
}

#troisiemeParagraphe {
  background-color: var(--premiere-couleur);
  color: var(--seconde-couleur);
}
```

#### Résultat

{{EmbedLiveSample("Exemple simple", 500, 130)}}

### Enregistrer les propriétés personnalisées avec `@property`

Dans cet exemple, nous utilisons la règle {{CSSxRef("@property")}} pour enregistrer une propriété personnalisée.

#### HTML

Notre HTML inclut une liste ordonnée ({{HTMLElement("ol")}}) contenant trois éléments de liste ({{HTMLElement("li")}}).

```html
<ol>
  <li class="one">Élément un</li>
  <li class="two">Élément deux</li>
  <li class="three">Élément trois</li>
</ol>
```

#### CSS

Nous utilisons la règle {{CSSxRef("@property")}} pour enregistrer deux propriétés personnalisées.

```css
@property --itemSize {
  syntax: "<length> | <percentage>";
  inherits: true;
  initial-value: 200px;
}

@property --borderWidth {
  syntax: "<length>";
  inherits: false;
  initial-value: 10px;
}
```

Nous essayons de remplacer les valeurs des propriétés personnalisées. Les valeurs définies sur `.two` sont valides tandis que les valeurs définies sur `.three` sont invalides.

```css
ol {
  --itemSize: 100px;
  --borderWidth: 1px;
}
.two {
  --itemSize: initial;
  --borderWidth: inherit;
}
.three {
  --itemSize: large;
  --borderWidth: 3%;
}
```

Nous utilisons les deux propriétés personnalisées pour mettre en forme les éléments, en définissant la bordure et la largeur pour tous les éléments en même temps&nbsp;:

```css
li {
  width: var(--itemSize);
  border: var(--borderWidth) solid red;
  background-color: yellow;
  margin-bottom: 10px;
}
```

#### Résultats

{{EmbedLiveSample("Enregistrer les propriétés personnalisées avec `@property`", 500, 130)}}

La propriété `--itemSize` est héritée&nbsp;; la propriété `--borderWidth` ne l'est pas. Les propriétés sont définies sur le parent `ol`, remplaçant les valeurs par défaut définies lors de leur enregistrement. L'élément un hérite de la taille mais pas de la largeur de la bordure de l'OL. Les mots-clés globaux, déclarés pour `.two`, sont valides pour `<length>`, donc ils sont utilisés. Les valeurs dans `.three` sont invalides (`"large"` n'est pas un `<length-percentage>` et `3%` n'est pas un `<length>`).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{CSSxRef("var()")}}
- La règle {{CSSxRef("@property")}}
- Le guide [pour utiliser les variables CSS](/fr/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)
- Le guide [pour enregistrer les propriétés CSS personnalisées](/fr/docs/Web/CSS/Guides/Properties_and_values_API/Registering_properties)
- Le module [des propriétés personnalisées pour les variables en cascade CSS](/fr/docs/Web/CSS/Guides/Cascading_variables)
