---
title: "@font-face"
slug: Web/CSS/@font-face
l10n:
  sourceCommit: ccafad98826d97da19728626047a7020000fd639
---

{{CSSRef}}

La [règle @](/fr/docs/Web/CSS/At-rule) [CSS](/fr/docs/Web/CSS) **`@font-face`** permet de définir une police d'écriture particulière à utiliser pour afficher le texte de pages web. Cette police peut être chargée depuis un serveur distant ou depuis l'ordinateur de l'utilisatrice ou l'utilisateur.

## Syntaxe

```css
@font-face {
  font-family: "Trickster";
  src:
    local("Trickster"),
    url("trickster-COLRv1.otf") format("opentype") tech(color-COLRv1),
    url("trickster-outline.otf") format("opentype"),
    url("trickster-outline.woff") format("woff");
}
```

### Descripteurs

- [`ascent-override`](/fr/docs/Web/CSS/@font-face/ascent-override)
  - : Définit la hauteur d'ascendante pour la police.
- [`descent-override`](/fr/docs/Web/CSS/@font-face/descent-override)
  - : Définit la hauteur de descendante pour la police.
- [`font-display`](/fr/docs/Web/CSS/@font-face/font-display)
  - : Ce descripteur détermine la façon dont une police est affichée selon qu'elle a été téléchargée et/ou si elle est prête à être utilisée.
- [`font-family`](/fr/docs/Web/CSS/@font-face/font-family)
  - : Ce descripteur définit un nom qui sera utilisé pour désigner cette police dans les différentes règles associées.
- [`font-stretch`](/fr/docs/Web/CSS/@font-face/font-stretch)
  - : Une valeur [`font-stretch`](/fr/docs/Web/CSS/font-stretch). Il est possible d'utiliser deux valeurs afin d'indiquer l'intervalle pris en charge par une police, par exemple&nbsp;: `font-stretch: 50% 200%;`.
- [`font-style`](/fr/docs/Web/CSS/@font-face/font-style)
  - : Une valeur [`font-style`](/fr/docs/Web/CSS/font-style). Il est possible d'utiliser deux valeurs afin d'indiquer l'intervalle pris en charge par une police, par exemple&nbsp;: `font-style: oblique 20deg 50deg;`.
- [`font-weight`](/fr/docs/Web/CSS/@font-face/font-weight)
  - : Une valeur [`font-weight`](/fr/docs/Web/CSS/font-weight). Il est possible d'utiliser deux valeurs afin d'indiquer l'intervalle pris en charge par une police, par exemple&nbsp;: `font-weight: 100 400;`.
    > **Note :** Le descripteur `font-variant` a été retiré de la spécification en 2018. La propriété [`font-variant`](/fr/docs/Web/CSS/font-variant) est bien prise en charge, mais il n'existe pas de descripteur équivalent.
- [`font-feature-settings`](/fr/docs/Web/CSS/font-feature-settings)
  - : Ce descripteur permet d'avoir un contrôle avancé sur les fonctionnalités typographiques relatives aux polices OpenType.
- [`font-variation-settings`](/fr/docs/Web/CSS/@font-face/font-variation-settings)
  - : Ce descripteur permet d'avoir un contrôle de bas niveau sur les variations des polices OpenType et TrueType en indiquant les noms des axes et des fonctionnalités à faire varier.
- [`line-gap-override`](/fr/docs/Web/CSS/@font-face/line-gap-override)
  - : Définit la métrique pour l'interlignage de la police.
- [`size-adjust`](/fr/docs/Web/CSS/@font-face/size-adjust)
  - : Définit un multiplicateur pour les contours des glyphes et les métriques associées à cette police. Cela permet de simplifier l'harmonisation de différentes polices lorsqu'elles sont affichées avec le même corps.
- [`src`](/fr/docs/Web/CSS/@font-face/src)

  - : Indique les ressources à utiliser pour la police. La valeur est une liste de valeurs indiquant les ressources à tenter les unes après les autres. Chaque ressource est indiquée avec `url()` ou `local()`. C'est la première ressource de la liste qui est chargée correctement qui est utilisée. Les éléments situés après sont ignorés. Si plusieurs descripteurs `src` sont définis, seule la dernière règle déclarée capable de charger une ressource est appliquée.

    > **Note :** Les éléments que le navigateur considère comme invalides sont ignorés. Certains navigateurs pourront ignorer l'ensemble du descripteur si même un seul des éléments est invalide. Cela pourra avoir un impact sur la gestion des alternatives.

    Une notation `url()` peut être suivie des notations fonctionnelles `format()` et `tech()`, comme ceci&nbsp;:

    ```css
    src:
      local("Trickster"),
      url("trickster-COLRv1.otf") format("opentype") tech(color-COLRv1),
      url("trickster-outline.otf") format("opentype"),
      url("trickster-outline.woff") format("woff");
    ```

    `url()` indique l'URL d'un fichier de police et fonctionne comme la notation fonctionnelle `url()` qu'on utilise par ailleurs en CSS. Si le fichier de la police contient plusieurs polices, un fragment d'identifiant doit être utilisé pour indiquer la police à utiliser. Par exemple&nbsp;:

    ```css
    src: url(collection.otc#WhichFont); /* WhichFont est le nom PostScript d'une police dans le fichier de police */
    src: url(fonts.svg#WhichFont); /* WhichFont est l'identifiant d'un élément de police dans le fichier de police SVG */
    ```

    `local()` indique le nom de la police qui pourrait être disponible sur l'appareil utilisé. Délimiter la valeur par des quotes est optionnel.

    > **Note :** [L'API <i lang="en">Local Font Access</i>](/fr/docs/Web/API/Local_Font_Access_API) peut être utilisée afin d'accéder aux polices présentes localement sur l'appareil et fournir des détails sur les noms, styles, familles et les données brutes des fichiers sous-jacents.

    `format()` est une notation **optionnelle**. Elle indique le format de la police. Si la valeur n'est pas prise en charge ou si elle est invalide, le navigateur pourra ne pas charger la ressource afin d'économiser de la bande passante. Si cette notation est absente, le navigateur téléchargera la ressource puis détectera le format. Pour cette notation, il est préférable de fournir un _mot-clé_ (même si une chaîne de caractères délimitée entre quotes peut être acceptée pour des raisons de rétro-compatibilité).

    Le tableau qui suit indique les valeurs valides et les formats correspondants. D'autres valeurs sont également possibles, voir à ce sujet le paragraphe suivant.

    | Mot-clé             | Format                | Extensions usuelles |
    | ------------------- | --------------------- | ------------------- |
    | `woff2`             | WOFF 2.0              | .woff2              |
    | `woff`              | WOFF 1.0              | .woff               |
    | `opentype`          | OpenType              | .otf, .ttf          |
    | `truetype`          | TrueType              | .ttf                |
    | `collection`        | OpenType Collection   | .otc, .ttc          |
    | `embedded-opentype` | Embedded OpenType     | .eot                |
    | `svg`               | SVG Font (deprecated) | .svg, .svgz         |

    > **Note :** Les valeurs `opentype` et `truetype` sont tout à fait équivalentes, que le fichier de police utilise des courbes de Bézier cubiques (pour le tableau CFF/CFF2) ou quadratiques (pour le tableau des glyphes).

    `tech()` est une notation **optionnelle** {{Experimental_inline}}. Sa valeur est l'un des mots-clés suivants&nbsp;: `variations`, `palettes`, `incremental`, `features-opentype`, `features-aat`, `features-graphite`, `color-COLRv0`, `color-COLRv1`, `color-SVG`, `color-sbix`, `color-CBDT`.

    Le tableau qui suit indique les correspondances entre l'ancienne syntaxe non-normalisée utilisant uniquement `format()` et la syntaxe actuelle&nbsp;:

    | Ancienne syntaxe                | Syntaxe équivalente actuelle        |
    | ------------------------------- | ----------------------------------- |
    | `format("woff2-variations")`    | `format(woff2) tech(variations)`    |
    | `format("woff-variations")`     | `format(woff) tech(variations)`     |
    | `format("opentype-variations")` | `format(opentype) tech(variations)` |
    | `format("truetype-variations")` | `format(truetype) tech(variations)` |

    > **Note :** `format(svg)` correspond aux [polices SVG](/fr/docs/Web/SVG/Tutorial/SVG_fonts), tandis que `tech(color-SVG)` correspond aux [polices OpenType avec un tableau SVG](https://learn.microsoft.com/en-us/typography/opentype/spec/svg) (également appelées polices de couleur OpenType-SVG)&nbsp;: il s'agit de deux types de polices complètement différents.

- [`unicode-range`](/fr/docs/Web/CSS/@font-face/unicode-range)
  - : L'intervalle des points de code Unicode pour lesquels la règle `@font-face` s'applique.

## Description

On utilise fréquemment une combinaison de `url()` et de `local()` afin d'utiliser une version locale de la police si elle existe, puis de recourir au téléchargement d'un exemplaire distant si nécessaire.

Si la fonction `local()` est fournie, on lui passera un nom de police à rechercher sur l'appareil. Lorsque l'agent utilisateur trouve une correspondance, c'est cette police locale qui est utilisée. Sinon, le navigateur télécharge la police pointée par la fonction `url()` et l'utilise.

Les navigateurs tentent le téléchargement des ressources selon leur ordre de déclaration. Aussi, on écrira généralement `local()` avant `url()`. Les deux fonctions sont optionnelles et on peut donc avoir un bloc de règle contenant un ou plusieurs appels à `local()`, sans `url()`. On peut utiliser les fonctions `format()` ou `tech()` afin de cibler des polices plus spécifiques. Dans ce cas, on doit lister ces versions _avant_ celles qui n'utilisent pas ces valeurs. En effet, dans le cas contraire, ce seraient les versions moins spécifiques qui seraient tentées et utilisées.

En permettant de fournir ses propres polices, `@font-face` permet de concevoir du contenu qui ne soit pas limité aux polices universellement disponibles. En permettant d'indiquer le nom d'une police locale, on peut personnaliser le contenu sans pour autant avoir besoin d'une connexion Internet.

La règle @ `@font-face` peut être utilisé au niveau le plus haut d'une feuille de styles et aussi [au sein d'une règle de groupe conditionnelle](/fr/docs/Web/CSS/At-rule#les_règles_de_groupe_conditionnelles).

### Types MIME pour les polices

| Format                 | Type MIME    |
| ---------------------- | ------------ |
| TrueType               | `font/ttf`   |
| OpenType               | `font/otf`   |
| Web Open Font Format   | `font/woff`  |
| Web Open Font Format 2 | `font/woff2` |

### Notes

- Les polices utilisées sur le Web sont sujettes à la règle de même origine (les fichiers des polices doivent être sur le même domaine que la page qui les utilise), à moins que [les paramètres de CORS](/fr/docs/Web/HTTP/CORS) soient utilisés afin de lever ces restrictions.
- `@font-face` ne peut pas être déclarée au sein d'un sélecteur CSS. L'exemple qui suit ne fonctionnera pas&nbsp;:

  ```css example-bad
  .className {
    @font-face {
      font-family: "MyHelvetica";
      src: local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
        url("MgOpenModernaBold.ttf");
      font-weight: bold;
    }
  }
  ```

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Indiquer une police téléchargeable

Dans cet exemple, on indique une police téléchargeable à utiliser et on l'applique à tout le corps du document&nbsp;:

#### HTML

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Web Font Sample</title>
    <style media="screen, print">
      @font-face {
        font-family: "Bitstream Vera Serif Bold";
        src: url("https://mdn.github.io/css-examples/web-fonts/VeraSeBd.ttf");
      }

      body {
        font-family: "Bitstream Vera Serif Bold", serif;
      }
    </style>
  </head>
  <body>
    This is Bitstream Vera Serif Bold.
  </body>
</html>
```

#### Résultat

{{EmbedGHLiveSample("css-examples/web-fonts/basic-web-font.html", '100%', '100')}}

### Indiquer des polices alternatives locales

Dans cet exemple, c'est l'exemplaire local de la police Helvetica Neue Bold qui est utilisé. Si elle n'est pas disponible sur l'appareil malgré les deux noms tentés, c'est une police distante avec le fichier `MgOpenModernaBold.ttf` qui est utilisée à la place&nbsp;:

```css
@font-face {
  font-family: "MyHelvetica";
  src: local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
    url("MgOpenModernaBold.ttf");
  font-weight: bold;
}
```

### Alternatives pour les anciens navigateurs

Comme les navigateurs utilisent la première ressource qui est chargée correctement, il faut placer les éléments selon leur ordre de préférence décroissant.

Cela signifie généralement que les fichiers locaux doivent apparaître avant les fichiers distants et que les ressources avec des contraintes décrites par les fonctions `format()` ou `tech()` devraient apparaître avant les ressources qui n'ont pas ces contraintes (sinon ce seraient les versions non-contraintes qui seraient toujours utilisées. Voici un exemple&nbsp;:

```css
@font-face {
  font-family: "MgOpenModernaBold";
  src:
    url("MgOpenModernaBoldIncr.otf") format("opentype") tech(incremental),
    url("MgOpenModernaBold.otf") format(opentype);
}
```

Un navigateur qui ne prend pas en charge la notation `tech()` abandonnera le premier élément et passera alors au deuxième pour tenter de le charger.

Certains navigateurs [ne filtrent pas encore les éléments invalides](#compatibilité_des_navigateurs) et font échouer l'ensemble du descripteur `src` si une des valeurs est invalide. Si vous travaillez avec l'un de ces navigateurs, il vous faudra indiquer plusieurs descripteurs `src` pour que les alternatives fonctionnent.

On notera dans ce cas que les descripteurs `src` sont essayés dans l'ordre inverse. À la fin, on se retrouve donc avec le descripteur le plus riche.

```css
@font-face {
  font-family: "MgOpenModernaBold";
  src: url("MgOpenModernaBold.otf") format(opentype);
  src: url("MgOpenModernaBoldIncr.otf") format("opentype") tech(incremental);
  src:
    url("MgOpenModernaBoldIncr.otf") format("opentype") tech(incremental),
    url("MgOpenModernaBold.otf") format(opentype);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [À propos de WOFF](/fr/docs/Web/Guide/WOFF)
- [Générateur `@font-face` de FontSquirrel](https://www.fontsquirrel.com/tools/webfont-generator) (en anglais)
- [<i lang="en">Font Library</i>](https://fontlibrary.org/), un site cataloguant des polices (en anglais)
