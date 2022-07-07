---
title: Element.scrollTop
slug: Web/API/Element/scrollTop
translation_of: Web/API/Element/scrollTop
---
{{APIRef("DOM")}}

La propriété **`Element.scrollTop`** permet d'obtenir ou de définir le nombre de pixels sur lesquels le contenu a défilé verticalement.

La valeur `scrollTop` d'un élément correspond à la distance entre le haut de l'élément et la partie la plus haute de son contenu visible. Lorsque le contenu d'un élément n'entraîne pas la création d'une barre de défilement verticale, la valeur de `scrollTop` est `0`.

Lorsque `scrollTop` est utilisé sur l'élément racine (c'est-à-dire l'élément `<html>`), c'est la valeur de `scrollY` pour la fenêtre qui est renvoyée. [Il s'agit d'un cas aux limites pour `scrollTop`](https://www.w3.org/TR/2016/WD-cssom-view-1-20160317/#dom-element-scrolltop).

> **Attention :** Pour les systèmes qui utilisent un affichage mis à l'échelle (_display scaling_), `scrollTop` peut fournir une valeur décimale.

## Syntaxe

```js
// Obtenir le nombre de pixels qui ont défilé.
var intElemScrollTop = someElement.scrollTop;
```

Après avoir exécuté le code ci-dessus, `intElemScrollTop` sera un entier correspondant au nombre de pixels pour lesquels le contenu de l'élément a défilé vers le haut.

```js
// Définir le nombre de pixels à faire défiler.
element.scrollTop = intValue;
```

`scrollTop` peut être défini avec n'importe quelle valeur entière. Cependant :

- S'il n'est pas possible de faire défiler l'élément (s'il ne dépasse d'aucune façon ou si une de ses propriétés le fixe ainsi), `scrollTop` vaudra toujours `0`.
- `scrollTop` ne permet pas d'utiliser des valeurs négatives. Il revient à `0`.
- Si la valeur utilisée est supérieure à la valeur maximale possible pour l'élément, `scrollTop` prendra cette valeur maximale possible.

## Exemple

### HTML

```html
<div id="container">
  <div id="content">Utilisez le bouton :) Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore harum adipisci earum placeat itaque, minima neque ipsam, incidunt corporis quod magnam corrupti, ut fugiat beatae quis dolor. Nisi, distinctio repellat!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore harum adipisci earum placeat itaque, minima neque ipsam, incidunt corporis quod magnam corrupti, ut fugiat beatae quis dolor. Nisi, distinctio repellat!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore harum adipisci earum placeat itaque, minima neque ipsam, incidunt corporis quod magnam corrupti, ut fugiat beatae quis dolor. Nisi, distinctio repellat!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore harum adipisci earum placeat itaque, minima neque ipsam, incidunt corporis quod magnam corrupti, ut fugiat beatae quis dolor. Nisi, distinctio repellat!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore harum adipisci earum placeat itaque, minima neque ipsam, incidunt corporis quod magnam corrupti, ut fugiat beatae quis dolor. Nisi, distinctio repellat!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore harum adipisci earum placeat itaque, minima neque ipsam, incidunt corporis quod magnam corrupti, ut fugiat beatae quis dolor. Nisi, distinctio repellat!!</div>
</div>

<button id="slide" type="button">Défilez vers le bas</button>
```

### CSS

```css
#container {
  height: 100px;
  border: 1px solid #ccc;
  overflow-y: scroll;
}

#content {
  background-color: #ccc;
}
```

### JavaScript

```js
const button = document.getElementById('slide');

button.onclick = function () {
  document.getElementById('container').scrollTop += 20;
};
```

### Résultat

{{EmbedLiveSample("Exemple")}}

## Spécifications

| Spécification                                                                            | Statut                           | Commentaire |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('CSSOM View', '#dom-element-scrolltop', 'scrollTop')}} | {{Spec2("CSSOM View")}} |             |

## Compatibilité des navigateurs

{{Compat("api.Element.scrollTop")}}

## Voir aussi

- [`Element.scrollLeft`](/fr/docs/Web/API/Element/scrollLeft)
- [`Element.scrollTo()`](/fr/docs/Web/API/Element/scrollTo)
