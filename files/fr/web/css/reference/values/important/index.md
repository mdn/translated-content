---
title: "!important"
slug: Web/CSS/Reference/Values/important
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

Un délimiteur `!` suivi du mot-clé `important` marque la déclaration comme importante. Le drapeau `!important` modifie les règles de sélection des déclarations dans la [cascade](/fr/docs/Web/CSS/Guides/Cascade/Introduction). Une déclaration qui n'est pas _importante_ est dite _normale_.

Pour marquer une déclaration comme importante, ajoutez le _drapeau important_ (`!important`) après la valeur dans la déclaration. Bien qu'un espace soit autorisé entre le délimiteur et le mot-clé, le drapeau est généralement écrit comme `!important` sans espace.

```css-nolint
selector {
  property: value; /* déclaration normale */
  property: value !important; /* déclaration importante (préférée) */
  property: value ! important; /* déclaration importante (non préférée) */
}
```

Le `!important` vient après la valeur de la paire propriété-valeur, précédé de zéro ou plusieurs espaces. Le drapeau important doit être le dernier jeton de la déclaration. Autrement dit, il peut y avoir des espaces et des commentaires entre le drapeau et le point-virgule final de la déclaration, mais rien d'autre.

## Impact sur la cascade

En ce qui concerne les déclarations importantes, l'[ordre d'origine et de couche de la cascade](/fr/docs/Web/CSS/Guides/Cascade/Introduction) est inversé. Sans le drapeau important, les déclarations dans les feuilles de style de l'auteur·ice prévalent sur celles de la feuille de style de l'utilisateur·ice, qui prévalent sur celles de la feuille de style par défaut de l'agent utilisateur.

Lorsqu'une déclaration est importante, l'ordre de priorité est inversé. Les déclarations marquées comme importantes dans les feuilles de style de l'agent utilisateur prévalent sur toutes les déclarations importantes dans les feuilles de style de l'utilisateur·ice. De même, toutes les déclarations importantes dans les feuilles de style de l'utilisateur·ice prévalent sur toutes les déclarations importantes dans les feuilles de style de l'auteur·ice. Enfin, toutes les déclarations importantes prévalent sur toutes les animations.

> [!NOTE]
> Toutes les déclarations importantes prévalent sur toutes les animations. `!important` n'est pas valide dans les déclarations [d'animations `@keyframes`](/fr/docs/Web/CSS/Reference/At-rules/@keyframes).

Inverser l'ordre de priorité pour les déclarations importantes garantit que les utilisateur·ice·s ayant des besoins spécifiques, comme des schémas de couleurs personnalisés ou de grandes polices, peuvent outrepasser les styles de l'auteur·ice en marquant certaines déclarations comme importantes dans leur feuille de style utilisateur·ice. Cela garantit aussi que des extensions malveillantes ne peuvent pas outrepasser les styles importants de l'agent utilisateur, ce qui pourrait casser des fonctionnalités ou nuire à la sécurité.

Quelque chose a-t-il priorité sur les déclarations importantes&nbsp;? Oui, les [transitions](/fr/docs/Web/CSS/Guides/Transitions). Les transitions CSS permettent de contrôler la vitesse à laquelle une propriété passe d'une valeur à une autre. Pendant la transition d'une valeur à une autre, une propriété ne correspondra pas à une déclaration importante spécifique.

```css
a {
  color: red !important;
  background-color: yellow;
  transition: all 2s linear;
}
a:hover {
  color: blue !important;
  background-color: orange !important;
}
```

Dans cet exemple, les propriétés `color` et `background-color` passeront à l'état survolé en deux secondes. Même si les états par défaut sont des déclarations normales et les états survolés des déclarations `!important`, la transition a bien lieu.

### Les couches de cascade

Dans chacune des trois origines de feuilles de style — auteur·ice, utilisateur·ice et agent utilisateur — les déclarations normales dans les styles non superposés prévalent sur les déclarations de styles en couches, la dernière déclarée ayant priorité sur les couches déclarées avant elle. Les déclarations importantes inversent l'ordre de priorité&nbsp;: les déclarations importantes dans la première couche prévalent sur celles de la couche suivante, et ainsi de suite. De plus, toutes les déclarations importantes prévalent sur celles faites en dehors de toute couche.

### Styles en ligne

Les styles en ligne sont des styles définis à l'aide de l'attribut [`style`](/fr/docs/Web/HTML/Reference/Global_attributes/style). Ils peuvent aussi être normaux ou importants. Les styles en ligne _normaux_ prévalent sur toutes les déclarations _normales_, quelle que soit l'origine. Les styles en ligne _importants_ prévalent sur tous les autres styles _importants_ de l'auteur·ice, quelle que soit la couche, mais les styles importants des feuilles de style de l'utilisateur·ice ou de l'agent utilisateur et les transitions les outrepassent.

### `!important` et spécificité

Bien que `!important` ne fasse pas partie du calcul de la spécificité, il y est lié. Les déclarations importantes outrepassent toutes les autres déclarations de la même [origine et couche de cascade](/fr/docs/Web/CSS/Guides/Cascade/Introduction).

```css
#myElement#myElement#myElement .myClass.myClass p:hover {
  color: blue;
}

p {
  color: red !important;
}
```

Cet exemple montre un cas de sélecteur sur-défini. Peu importe à quel point la [spécificité](/fr/docs/Web/CSS/Guides/Cascade/Specificity) du sélecteur correspond à une déclaration normale, une déclaration importante de la même source et couche de cascade aura toujours la priorité. Dans ce cas, le paragraphe sera toujours rouge.

Lorsque deux déclarations importantes de la même origine et de la même couche s'appliquent au même élément, les navigateurs sélectionnent et utilisent la déclaration ayant la spécificité la plus élevée.

```css
#myElement p {
  color: green !important;
}

p {
  color: purple !important;
}
```

Dans ce cas, la spécificité du sélecteur compte. Ce n'est que si les sélecteurs avaient la même spécificité que l'ordre des sources importerait.

## Impact sur les propriétés raccourcies

Déclarer une propriété raccourcie avec `!important` rend toutes ses sous-propriétés importantes. Les deux blocs de styles suivants sont équivalents&nbsp;:

```css
p {
  background: blue !important;
}

p {
  background-image: none !important;
  background-position: 0 0 !important;
  background-size: auto auto !important;
  background-repeat: repeat !important;
  background-origin: padding-box !important;
  background-clip: border-box !important;
  background-attachment: scroll !important;
  background-color: blue !important;
}
```

Cet exemple montre l'une des nombreuses raisons pour lesquelles il est généralement recommandé d'éviter le drapeau important.

## Impact sur les propriétés personnalisées

Lorsque le drapeau `!important` est ajouté à la déclaration de valeur d'une propriété personnalisée, il rend l'affectation de la valeur importante. Le drapeau `!important` est alors retiré de la valeur de la propriété personnalisée. Le drapeau `!important` n'est pas transmis comme partie de la valeur de la propriété personnalisée à la fonction {{CSSxRef("var()")}}.

```css
:root {
  --my-color: red !important;
  --my-color: blue;
}
p {
  color: var(--my-color);
}
blockquote {
  color: var(--my-color);
  color: purple;
}
```

```html hidden
<p>Ceci est un paragraphe</p>
<blockquote>Ceci est une citation</blockquote>
```

Dans cet exemple, le paragraphe sera rouge, pas bleu, car l'affectation de la valeur de la propriété personnalisée est importante. La citation sera violette, car la déclaration normale `purple` vient après la déclaration normale `red`.

{{EmbedLiveSample('Impact sur les propriétés personnalisées', 500, 250)}}

## Bonnes pratiques

Évitez d'utiliser `!important` pour outrepasser la spécificité. Lorsque vous créez intentionnellement des déclarations importantes pour des besoins d'interface, commentez dans votre code CSS pour expliquer aux mainteneur·euse·s pourquoi il ne faut pas outrepasser cette fonctionnalité.

Même lorsque vous souhaitez outrepasser des styles à forte spécificité qui ne sont pas sous votre contrôle, comme des styles dans une extension tiers déclaré avec un [sélecteur d'identifiant](/fr/docs/Web/CSS/Reference/Selectors/ID_selectors), il n'est pas nécessaire d'utiliser `!important`. Envisagez plutôt d'importer la feuille de style externe dans une [couche nommée ou anonyme](/fr/docs/Web/CSS/Reference/At-rules/@layer) comme première couche de cascade, au lieu d'utiliser `!important`. Tant que les styles externes n'incluent pas de déclarations importantes, vos styles prévaudront sur ceux du module, quelle que soit la spécificité.

Si vous devez outrepasser une feuille de style externe contenant des déclarations importantes, créez une couche de cascade contenant les surcharges nécessaires, et déclarez cette couche en premier.

### Problèmes d'accessibilité

Les styles importants d'une feuille de style utilisateur·ice prévalent sur les déclarations importantes de la feuille de style de l'auteur·ice, ce qui signifie qu'ajouter un drapeau `!important` aux styles d'un site n'empêchera pas les utilisateur·ice·s ayant des besoins spécifiques, comme de grandes polices, de pouvoir outrepasser vos styles en ajoutant des styles importants dans leur propre feuille de style utilisateur·ice.

## Compatibilité des navigateurs

Cette fonctionnalité est prise en charge dans tous les navigateurs.

## Voir aussi

- [Spécificité CSS](/fr/docs/Web/CSS/Guides/Cascade/Specificity)
- [Cascade CSS](/fr/docs/Web/CSS/Guides/Cascade/Introduction)
