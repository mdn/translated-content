---
title: anchor-size()
slug: Web/CSS/Reference/Values/anchor-size
l10n:
  sourceCommit: 3e0ba995376cace7f08f0771635f86f0fb1753b3
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`anchor-size()`** permet de definir la [taille](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#dimensionner_les_éléments_selon_la_taille_de_lancre), la [position](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#définir_la_position_dun_élément_selon_la_taille_de_lancre) et les [marges](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#définir_la_marge_dun_élément_selon_la_taille_de_lancre) d'un element positionne par ancre relativement aux dimensions des elements d'ancre. Elle retourne la `<length>` d'un cote defini de l'element d'ancre cible. `anchor-size()` n'est valide que lorsqu'elle est utilisee dans la valeur des [proprietes de taille, d'encart et de marge](#propriétés_acceptant_des_valeurs_de_fonction_anchor-size) d'elements positionnes par ancre.

Pour plus d'informations sur les fonctionnalités et l'utilisation des ancres, consultez le module [Positionnement par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning) et le guide [Utiliser le positionnement par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using).

## Syntaxe

```css
/* dimensionner par rapport au côté de l'ancre */
width: anchor-size(width);
block-size: anchor-size(block);
height: calc(anchor-size(self-inline) + 2em);

/* dimensionner par rapport au côté d'une ancre nommée */
width: anchor-size(--my-anchor width);
block-size: anchor-size(--my-anchor block);

/* dimensionner par rapport au côté d'une ancre nommée avec valeur de repli */
width: anchor-size(--my-anchor width, 50%);
block-size: anchor-size(--my-anchor block, 200px);

/* positionner par rapport au côté de l'ancre */
left: anchor-size(width);
inset-inline-end: anchor-size(--my-anchor height, 100px);

/* définir la marge par rapport au côté de l'ancre */
margin-left: calc(anchor-size(width) / 4);
margin-block-start: anchor-size(--my-anchor self-block, 20px);
```

### Paramètres

La syntaxe de la fonction `anchor-size()` est la suivante&nbsp;:

```plain
anchor-size(<anchor-name> <anchor-size>, <length-percentage>)
```

Les paramètres sont&nbsp;:

- `<anchor-name>` {{Optional_Inline}}
  - : La valeur de la propriété {{CSSxRef("anchor-name")}} d'un élément d'ancre auquel vous souhaitez rattacher la taille, la position ou les marges de l'élément. Il s'agit d'une valeur `<dashed-ident>`. Si ce paramètre est omis, l'ancre par défaut de l'élément est utilisée.

    > [!NOTE]
    > Indiquer un `<anchor-name>` dans une fonction `anchor-size()` n'associe ni n'attache un élément à une ancre&nbsp;; cela définit uniquement l'ancre par rapport à laquelle les valeurs des propriétés de l'élément doivent être calculées.

- `<anchor-size>` {{Optional_Inline}}
  - : Définit la dimension de l'élément d'ancre à laquelle les valeurs des propriétés de l'élément positionné seront rattachées. Les valeurs valides incluent&nbsp;:
    - `width`
      - : La largeur de l'élément d'ancre.

    - `height`
      - : La hauteur de l'élément d'ancre.

    - `block`
      - : La longueur du [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block) de l'élément d'ancre dans la direction du bloc.

    - `inline`
      - : La longueur du bloc englobant de l'élément d'ancre dans la direction en ligne.

    - `self-block`
      - : La longueur de l'élément d'ancre dans la direction du bloc.

    - `self-inline`
      - : La longueur de l'élément d'ancre dans la direction en ligne.

    > [!NOTE]
    > Si ce paramètre est omis, la dimension par défaut correspond au terme clé `<anchor-size>` qui correspond à l'axe de la propriété dans laquelle la fonction est incluse. Par exemple, `width: anchor-size();` est équivalent à `width: anchor-size(width);`.

- {{CSSxRef("length-percentage")}} {{Optional_Inline}}
  - : Définit la taille à utiliser comme valeur de repli si l'élément n'est pas positionné en absolu ou en fixe, ou si l'élément d'ancre n'existe pas. Si ce paramètre est omis dans un cas où la valeur de repli serait utilisée, la déclaration est invalide.

> [!NOTE]
> La dimension d'ancre à laquelle vous rattachez les valeurs des propriétés de l'élément positionné n'a pas à être sur le même axe que la valeur de dimension définie. Par exemple, `width: anchor-size(height)` est valide.

### Valeur de retour

Retourne une valeur {{CSSxRef("length")}}.

## Description

La fonction `anchor-size()` permet d'exprimer les valeurs de dimension, de position et de marge d'un élément positionné en fonction des dimensions d'un élément d'ancre&nbsp;; elle retourne une valeur {{CSSxRef("length")}} représentant la dimension d'un élément d'ancre spécifique à laquelle les valeurs des propriétés de l'élément positionné sont rattachées. Il s'agit d'une valeur valide pour les [propriétés de taille, d'encart et de marge](#propriétés_acceptant_des_valeurs_de_fonction_anchor-size) appliquées aux éléments positionnés par ancre.

La longueur retournée correspond à la taille verticale ou horizontale d'un élément d'ancre ou de son bloc englobant. La dimension utilisée est définie par le paramètre `<anchor-size>`. Si ce paramètre est omis, la dimension utilisée correspond à l'axe de la propriété de dimension, de position ou de marge sur laquelle la fonction est appliquée. Par exemple&nbsp;:

- `width: anchor-size()` est équivalent à `width: anchor-size(width)`.
- `top: anchor-size()` est équivalent à `top: anchor-size(height)`.
- `margin-inline-end: anchor-size()` est équivalent à `margin-inline-end: anchor-size(self-inline)`. `margin-inline-end: anchor-size()` est aussi équivalent à `margin-inline-end: anchor-size(width)` en mode d'écriture horizontal, ou à `margin-inline-end: anchor-size(height)` en mode d'écriture vertical.

L'élément d'ancre utilisé comme base pour la longueur de dimension est celui dont le `anchor-name` est défini dans le paramètre `<anchor-name>`. Si plusieurs éléments partagent le même nom d'ancre, le dernier élément avec ce nom dans l'ordre du DOM est utilisé.

Si aucun paramètre `<anchor-name>` n'est inclus dans l'appel de fonction, **l'ancre par défaut** de l'élément, référencée dans sa propriété {{CSSxRef("position-anchor")}}, ou associée à l'élément via l'attribut HTML [`anchor`](/fr/docs/Web/HTML/Reference/Global_attributes/anchor), est utilisée.

Si un paramètre `<anchor-name>` est inclus et qu'aucun élément ne correspond à ce nom d'ancre, la valeur de repli est utilisée. Si aucune valeur de repli n'est fournie, la déclaration est ignorée. Par exemple, si `width: anchor-size(--foo width, 50px); height: anchor-size(--foo width);` est utilisé sur l'élément positionné mais qu'aucune ancre nommée `--foo` n'existe dans le DOM, la `width` sera `50px` et la déclaration `height` n'aura aucun effet.

Si un élément possède des propriétés de dimension, de position ou de marge utilisant des valeurs `anchor-size()`, mais qu'il n'est pas un élément positionné par ancre (il n'a pas sa propriété {{CSSxRef("position")}} définie à `absolute` ou `fixed` ou n'a pas d'ancre associée via sa propriété `position-anchor`), la valeur de repli sera utilisée si elle est disponible. Si aucune valeur de repli n'est disponible, la déclaration est ignorée.

Par exemple, si `width: anchor-size(width, 50px);` est utilisé sur l'élément positionné mais qu'aucune ancre n'est associée, la valeur de repli sera utilisée, donc `width` aura une valeur calculée de `50px`.

Pour plus d'informations détaillées sur les fonctionnalités et l'utilisation des ancres, consultez le module [Positionnement par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning) et le guide [Utiliser le positionnement par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using).

### Propriétés acceptant des valeurs de fonction `anchor-size()`

Les propriétés qui acceptent une fonction `anchor-size()` comme valeur incluent&nbsp;:

- Propriétés de dimension&nbsp;:
  - {{CSSxRef("width")}}
  - {{CSSxRef("height")}}
  - {{CSSxRef("min-width")}}
  - {{CSSxRef("min-height")}}
  - {{CSSxRef("max-width")}}
  - {{CSSxRef("max-height")}}
  - {{CSSxRef("block-size")}}
  - {{CSSxRef("inline-size")}}
  - {{CSSxRef("min-block-size")}}
  - {{CSSxRef("min-inline-size")}}
  - {{CSSxRef("max-block-size")}}
  - {{CSSxRef("max-inline-size")}}
- Propriétés d'encart&nbsp;:
  - {{CSSxRef("bottom")}}
  - {{CSSxRef("left")}}
  - {{CSSxRef("right")}}
  - {{CSSxRef("top")}}
  - {{CSSxRef("inset")}} (raccourci)
  - {{CSSxRef("inset-block")}} (raccourci)
  - {{CSSxRef("inset-block-end")}}
  - {{CSSxRef("inset-block-start")}}
  - {{CSSxRef("inset-inline")}} (raccourci)
  - {{CSSxRef("inset-inline-end")}}
  - {{CSSxRef("inset-inline-start")}}
- Propriétés de marge&nbsp;:
  - {{CSSxRef("margin")}} (raccourci)
  - {{CSSxRef("margin-bottom")}}
  - {{CSSxRef("margin-left")}}
  - {{CSSxRef("margin-right")}}
  - {{CSSxRef("margin-top")}}
  - {{CSSxRef("margin-block")}} (raccourci)
  - {{CSSxRef("margin-block-end")}}
  - {{CSSxRef("margin-block-start")}}
  - {{CSSxRef("margin-inline")}} (raccourci)
  - {{CSSxRef("margin-inline-end")}}
  - {{CSSxRef("margin-inline-start")}}

### Utiliser `anchor-size()` dans `calc()`

Les fonctions `anchor-size()` les plus courantes que vous utiliserez feront simplement référence à une dimension de l'ancre par défaut. Vous pouvez aussi inclure la fonction `anchor-size()` dans une fonction {{CSSxRef("calc")}} pour modifier la taille appliquée à l'élément positionné.

Par exemple, cette règle dimensionne la largeur de l'élément positionné à celle de l'ancre par défaut&nbsp;:

```css
.positionedElem {
  width: anchor-size(width);
}
```

Cette règle dimensionne la taille en ligne de l'élément positionné à 4 fois la taille en ligne de l'ancre, la multiplication étant effectuée dans une fonction {{CSSxRef("calc()")}}&nbsp;:

```css
.positionedElem {
  inline-size: calc(anchor-size(self-inline) * 4);
}
```

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple de `anchor-size()`

Cet exemple montre deux éléments positionnés par rapport à une ancre et dimensionnés à l'aide des fonctions `anchor-size()`.

#### HTML

Nous définissons trois éléments HTML {{HTMLElement("div")}}, un élément `anchor` et les deux éléments `infobox` que nous allons positionner par rapport à l'ancre. Nous ajoutons également du texte de remplissage pour que le {{HTMLElement("body")}} soit suffisamment haut pour nécessiter un défilement, mais ce texte a été masqué pour plus de clarté.

```html hidden
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>
```

```html
<div class="anchor">⚓︎</div>

<div class="infobox" id="infobox1">
  <p>Voici la première boîte d'information.</p>
</div>

<div class="infobox" id="infobox2">
  <p>Voici la seconde boîte d'information.</p>
</div>
```

```html hidden
<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
```

#### CSS

Nous déclarons le `<div>` `anchor` comme un élément d'ancre en lui attribuant un {{CSSxRef("anchor-name")}}. Les éléments positionnés, avec leur propriété {{CSSxRef("position")}} définie à `fixed`, sont associés à l'élément d'ancre via leur propriété {{CSSxRef("position-anchor")}}. Nous définissons également des dimensions absolues {{CSSxRef("height")}} et {{CSSxRef("width")}} sur l'ancre afin de fournir un point de référence lors de la vérification des dimensions de l'élément positionné, par exemple avec les outils de développement du navigateur&nbsp;:

```css hidden
.anchor {
  font-size: 2rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  text-align: center;
  align-content: center;
  outline: 1px solid black;
}

body {
  width: 80%;
  margin: 0 auto;
}

.infobox {
  align-content: center;
  color: darkblue;
  background-color: azure;
  outline: 1px solid #dddddd;
  font-size: 1rem;
  text-align: center;
}
```

```css
.anchor {
  anchor-name: --my-anchor;
  width: 100px;
  height: 100px;
}

.infobox {
  position-anchor: --my-anchor;
  position: fixed;
}
```

Nous définissons certaines valeurs de propriétés distinctes sur les éléments positionnés&nbsp;:

- Les éléments positionnés sont rattachés à l'ancre avec différentes valeurs {{CSSxRef("position-area")}} qui placent les éléments à différents endroits autour de l'élément d'ancre.
- La {{CSSxRef("height")}} de la première boîte d'information est définie à la même hauteur que l'élément d'ancre&nbsp;: `anchor-size(height)` retourne la hauteur de l'élément d'ancre. La {{CSSxRef("width")}} de l'élément est définie au double de la largeur de l'ancre à l'aide de la fonction `anchor-size()` dans une fonction {{CSSxRef("calc()")}}&nbsp;: `anchor-size(width)` récupère la largeur de l'ancre, qui est ensuite multipliée par deux.
- La {{CSSxRef("height")}} de la seconde boîte d'information est définie aux deux tiers de la hauteur de l'ancre, en utilisant une technique similaire.
- Des valeurs de marge sont incluses pour fournir une séparation avec l'élément d'ancre.

```css
#infobox1 {
  position-area: right;
  height: anchor-size(height);
  width: calc(anchor-size(width) * 2);
  margin-left: 5px;
}

#infobox2 {
  position-area: top span-right;
  height: calc(anchor-size(height) / 1.5);
  margin-bottom: 5px;
}
```

#### Résultat

{{EmbedLiveSample("Utilisation simple de `anchor-size()`", "100%", 240)}}

Utilisez les outils de développement de votre navigateur pour inspecter les éléments positionnés par ancre. La première boîte d'information aura une hauteur de `100px` et une largeur de `200px`, tandis que la seconde boîte d'information aura une hauteur d'environ `66.7px`, avec la `width` par défaut à {{CSSxRef("max-content")}}.

### Exemple de position et de marge

Voir [exemple de position et de marge avec `anchor-size()`](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#définir_la_position_dun_élément_selon_la_taille_de_lancre).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("anchor-name")}}
- La propriété {{CSSxRef("position-anchor")}}
- La fonction {{CSSxRef("anchor()")}}
- Le guide [d'utilisation de la position d'ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using)
- Le module [de positionnement d'ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning)
