---
title: Fonction CSS `sibling-count()`
short-title: sibling-count()
slug: Web/CSS/Reference/Values/sibling-count
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`sibling-count()`** retourne un entier représentant le nombre total d'éléments DOM voisins (enfants directs du parent) de l'élément sur lequel elle est utilisée, y compris lui-même.

> [!NOTE]
> La fonction {{CSSxRef("counter()")}} fournit un résultat similaire mais retourne une chaîne de caractères (`<string>`) (ce qui est plus adapté pour le [contenu généré](/fr/docs/Web/CSS/Guides/Generated_content)), tandis que `sibling-count()` retourne un entier (`<integer>`) (qui peut être utilisé pour des calculs).

## Syntaxe

```css-nolint
sibling-count()
```

### Paramètres

La fonction `sibling-count()` n'accepte aucun paramètre.

### Valeur de retour

Un entier&nbsp;; le nombre total d'éléments DOM voisins, y compris l'élément lui-même.

## Exemples

### Compter le nombre de colonnes dynamiquement

Cet exemple montre comment définir la largeur de chaque élément d'une liste en fonction du nombre d'éléments, permettant de placer chaque enfant dans sa propre colonne.

#### HTML

Nous incluons un conteneur {{HTMLElement("ul")}} et plusieurs éléments enfants {{HTMLElement("li")}}.

```html
<ul>
  <li>Un</li>
  <li>Deux</li>
  <li>Trois</li>
  <li>Quatre</li>
  <li>Cinq</li>
</ul>
```

#### CSS

Nous divisons la largeur ({{CSSxRef("width")}}) de chaque élément de la liste par le nombre d'enfants directs que contient la liste. Nous définissons également chaque élément impair pour avoir une couleur d'arrière-plan ({{CSSxRef("background-color")}}) afin de mieux démontrer l'effet résultant.

```css
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: center;
  display: flex;
}

li {
  width: calc(100% / sibling-count());
}

li:nth-of-type(odd) {
  background-color: rgb(0 0 0 / 0.05);
}
```

#### Résultat

{{EmbedLiveSample("Compter le nombre de colonnes dynamiquement", 300, 80)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{CSSxRef("sibling-index()")}}
- La fonction {{CSSxRef("calc()")}}
