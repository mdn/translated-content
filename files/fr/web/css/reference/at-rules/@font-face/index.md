---
title: "@font-face"
slug: Web/CSS/Reference/At-rules/@font-face
original_slug: Web/CSS/@font-face
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) [CSS](/fr/docs/Web/CSS) **`@font-face`** permet de définir une police d'écriture particulière à utiliser pour afficher le texte de pages web. Cette police peut être chargée depuis un serveur distant ou depuis l'ordinateur de l'utilisatrice ou l'utilisateur.

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

- {{cssxref("@font-face/ascent-override", "ascent-override")}}
  - : Définit la hauteur d'ascendante pour la police.
- {{cssxref("@font-face/descent-override", "descent-override")}}
  - : Définit la hauteur de descendante pour la police.
- {{cssxref("@font-face/font-display", "font-display")}}
  - : Ce descripteur détermine la façon dont une police est affichée selon qu'elle a été téléchargée et/ou si elle est prête à être utilisée.
- {{cssxref("@font-face/font-family", "font-family")}}
  - : Ce descripteur définit un nom qui sera utilisé pour désigner cette police dans les différentes règles associées.
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
  - : Une valeur [`font-stretch`](/fr/docs/Web/CSS/Reference/Properties/font-stretch). Il est possible d'utiliser deux valeurs afin d'indiquer l'intervalle pris en charge par une police, par exemple&nbsp;: `font-stretch: 50% 200%;`.
- {{cssxref("@font-face/font-style", "font-style")}}
  - : Une valeur [`font-style`](/fr/docs/Web/CSS/Reference/Properties/font-style). Il est possible d'utiliser deux valeurs afin d'indiquer l'intervalle pris en charge par une police, par exemple&nbsp;: `font-style: oblique 20deg 50deg;`.
- {{cssxref("@font-face/font-weight", "font-weight")}}
  - : Une valeur [`font-weight`](/fr/docs/Web/CSS/Reference/Properties/font-weight). Il est possible d'utiliser deux valeurs afin d'indiquer l'intervalle pris en charge par une police, par exemple&nbsp;: `font-weight: 100 400;`.
- {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}
  - : Ce descripteur permet d'avoir un contrôle avancé sur les fonctionnalités typographiques relatives aux polices OpenType.
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
  - : Ce descripteur permet d'avoir un contrôle de bas niveau sur les variations des polices OpenType et TrueType en indiquant les noms des axes et des fonctionnalités à faire varier.
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
  - : Définit la métrique pour l'interlignage de la police.
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
  - : Définit un multiplicateur pour les contours des glyphes et les métriques associées à cette police. Cela permet de simplifier l'harmonisation de différentes polices lorsqu'elles sont affichées avec le même corps.
- {{cssxref("@font-face/src", "src")}}
  - : Indique les ressources à utiliser pour la police. La valeur est une liste de valeurs indiquant les ressources à tenter les unes après les autres. Chaque ressource est indiquée avec `url()` ou `local()`. C'est la première ressource de la liste qui est chargée correctement qui est utilisée. Les éléments situés après sont ignorés. Si plusieurs descripteurs `src` sont définis, seule la dernière règle déclarée capable de charger une ressource est appliquée.
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
  - : L'intervalle des points de code Unicode pour lesquels la règle `@font-face` s'applique.

## Description

On utilise fréquemment une combinaison de `url()` et de `local()` afin d'utiliser une version locale de la police si elle existe, puis de recourir au téléchargement d'un exemplaire distant si nécessaire.

Si la fonction `local()` est fournie, on lui passera un nom de police à rechercher sur l'appareil. Lorsque l'agent utilisateur trouve une correspondance, c'est cette police locale qui est utilisée. Sinon, le navigateur télécharge la police pointée par la fonction `url()` et l'utilise.

Les navigateurs tentent le téléchargement des ressources selon leur ordre de déclaration. Aussi, on écrira généralement `local()` avant `url()`. Les deux fonctions sont optionnelles et on peut donc avoir un bloc de règle contenant un ou plusieurs appels à `local()`, sans `url()`. On peut utiliser les fonctions `format()` ou `tech()` afin de cibler des polices plus spécifiques. Dans ce cas, on doit lister ces versions _avant_ celles qui n'utilisent pas ces valeurs. En effet, dans le cas contraire, ce seraient les versions moins spécifiques qui seraient tentées et utilisées.

En permettant de fournir ses propres polices, `@font-face` permet de concevoir du contenu qui ne soit pas limité aux polices universellement disponibles. En permettant d'indiquer le nom d'une police locale, on peut personnaliser le contenu sans pour autant avoir besoin d'une connexion Internet.

> [!NOTE]
> Les stratégies de repli pour le chargement des polices sur les anciens navigateurs sont décrites dans la page du descripteur [`src`](/fr/docs/Web/CSS/Reference/At-rules/@font-face/src#définir_les_stratégies_de_repli_pour_les_anciens_navigateurs).

La règle @ `@font-face` peut être utilisé au niveau le plus haut d'une feuille de styles et aussi [au sein d'une règle de groupe conditionnelle](/fr/docs/Web/CSS/Guides/Syntax/At-rules#les_règles_de_groupe_conditionnelles).

### Types MIME pour les polices

| Format                 | Type MIME    |
| ---------------------- | ------------ |
| TrueType               | `font/ttf`   |
| OpenType               | `font/otf`   |
| Web Open Font Format   | `font/woff`  |
| Web Open Font Format 2 | `font/woff2` |

### Notes

- Les polices utilisées sur le Web sont sujettes à la règle de même origine (les fichiers des polices doivent être sur le même domaine que la page qui les utilise), à moins que [les paramètres de CORS](/fr/docs/Web/HTTP/Guides/CORS) soient utilisés afin de lever ces restrictions.
- `@font-face` ne peut pas être déclarée au sein d'un sélecteur CSS. L'exemple qui suit ne fonctionnera pas&nbsp;:

  ```css example-bad
  .className {
    @font-face {
      font-family: "MyHelvetica";
      src:
        local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
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

```html live-sample___web-font-example
<body>
  Il s'agit de Bitstream Vera Serif Bold.
</body>
```

#### CSS

```css live-sample___web-font-example
@font-face {
  font-family: "Bitstream Vera Serif Bold";
  src: url("https://mdn.github.io/shared-assets/fonts/VeraSeBd.ttf");
}

body {
  font-family: "Bitstream Vera Serif Bold", serif;
}
```

#### Résultat

{{EmbedLiveSample("web-font-example", "", "100px")}}

### Indiquer des polices alternatives locales

Dans cet exemple, c'est l'exemplaire local de la police Helvetica Neue Bold qui est utilisé. Si elle n'est pas disponible sur l'appareil malgré les deux noms tentés, c'est une police distante avec le fichier `MgOpenModernaBold.ttf` qui est utilisée à la place&nbsp;:

```css
@font-face {
  font-family: "MyHelvetica";
  src:
    local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
    url("MgOpenModernaBold.ttf");
  font-weight: bold;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [À propos de WOFF](/fr/docs/Web/CSS/CSS_fonts/WOFF)
- [Générateur `@font-face` de FontSquirrel <sup>(angl.)</sup>](https://www.fontsquirrel.com/tools/webfont-generator)
- Le billet de blog [De belles polices avec @font-face <sup>(angl.)</sup>](https://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/) de Mozilla (2009)
- [<i lang="en">Font Library</i> <sup>(angl.)</sup>](https://fontlibrary.org/), un site cataloguant des polices
