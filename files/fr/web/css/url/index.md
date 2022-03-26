---
title: url()
slug: Web/CSS/url
translation_of: Web/CSS/url()
original_slug: Web/CSS/url()
browser-compat: css.types.url
---
{{CSSRef}}

La fonction [CSS](/fr/docs/Web/CSS) **`url()`** est utilisée afin d'inclure un fichier. Le paramètre est une URL absolue, une URL relative ou un URI de donnée. La fonction **`url()`** peut être utilisée comme paramètre d'une autre fonction comme [`attr()`](/fr/docs/Web/CSS/attr()). Selon la propriété pour laquelle elle est utilisée, la ressource utilisée peut être une image, une police ou une feuille de style.

La notation fonctionnelle `url()` correspond au type de donnée CSS `<url>`.

> **Note :** Il y a une différence entre un URI et une URL. Un URI identifie une ressource. Une URL est un type d'URI qui décrit _l'emplacement_ d'une ressource. Un URI peut être une URL ou un nom (URN) d'une ressource.
>
> Pour la spécification CSS de niveau 1, la notation fonctionnelle `url()` ne décrivaient que des URL au sens strict. Pour la spécification CSS de niveau 2, la définition de `url()` a été étendue afin de décrire n'importe quel URI (que ce soit une URL ou un URN). Cela a été une source de confusion, car `url()` pouvait être utilisée pour créer un type de données `<uri>`. Cette évolution était non seulement étrange mais aussi superflue, car les URN ne sont quasiment jamais utilisées dans du CSS réel. Pour éviter cette confusion, la spécification CSS de niveau 3 est revenue à la définition initiale. Aujourd'hui, `url()` ne manipule que des vraies `<url>`.

```css
/* Utilisation simple */
url(https://example.com/images/monImg.jpg);
url(data:image/png;base64,iRxVB0…);
url(maPolice.woff);
url(#IDdeCheminSVG);

/* Propriétés utilisables */
background-image: url("star.gif");
list-style-image: url('../images/bullet.jpg');
content: url("pdficon.jpg");
cursor: url(moncurseur.cur);
border-image-source: url(/media/diamonds.png);
src: url('superpolice.woff');
offset-path: url(#path);
mask-image: url("masques.svg#masque1");

/* Propriétés avec valeurs de recours */
cursor: url(pointer.cur), pointer

/* Propriétés raccourcies associées */
background: url('star.gif') bottom right repeat-x blue;
border-image: url("/media/diamonds.png") 30 fill / 30px / 30px space;

/* Utilisation comme paramètre d'une fonction CSS */
background-image: cross-fade(20% url(first.png), url(second.png));
mask-image: image(url(mask.png), skyblue, linear-gradient(rgba(0, 0, 0, 1.0), transparent));

/* Utilisation avec plusieurs valeurs */
content: url(star.svg) url(star.svg) url(star.svg) url(star.svg) url(star.svg);

/* Règles @ / at-rules */
@document url("https://www.example.com/") { ... } /* expérimental */
@import url("https://www.example.com/style.css");
@namespace url(http://www.w3.org/1999/xhtml);
```

Lorsque des URL relatives sont utilisées, elles sont relatives à l'URL de la feuille de style et pas à celle de la page web courante.

La fonction **`url()`** peut être incluse comme valeur pour les propriétés [`background`](/fr/docs/Web/CSS/background), [`background-image`](/fr/docs/Web/CSS/background-image), [`border`](/fr/docs/Web/CSS/border), [`border-image`](/fr/docs/Web/CSS/border-image), [`border-image-source`](/fr/docs/Web/CSS/border-image-source), [`content`](/fr/docs/Web/CSS/content), [`cursor`](/fr/docs/Web/CSS/cursor), [`filter`](/fr/docs/Web/CSS/filter), [`list-style`](/fr/docs/Web/CSS/list-style), [`list-style-image`](/fr/docs/Web/CSS/list-style-image), [`mask`](/fr/docs/Web/CSS/mask), [`mask-image`](/fr/docs/Web/CSS/mask-image), [`offset-path`](/fr/docs/Web/CSS/offset-path), comme descripteur [`src`](/fr/docs/Web/CSS/@font-face/src) pour une règle [`@font-face`](/fr/docs/Web/CSS/@font-face) ou [`@counter-style/symbol`](/fr/docs/Web/CSS/@counter-style/symbols)

## Syntaxe

### Valeurs

- `<string>`

  - : Une chaîne de caractères indiquant une URL ou l'identifiant d'une forme SVG.

    - `<url>`

      - : Une URL, relative ou absolue, qui pointe vers une ressource web à inclure ou un URI de données éventuellement encadrée entre quotes ou doubles quotes. Les quotes sont obligatoires si l'URL inclut des parenthèses, espaces, doubles quotes, etc. (sauf si ces caractères sont échappés) ou si l'adresse inclut des caractères de contrôle supérieurs à `0x7e`. Il n'est pas possible d'utiliser des doubles quotes dans une URL encadrée par des doubles quotes à moins de les échapper. De même, on ne peut pas utiliser une simple quote dans une URL délimitée par des simples quotes. Les déclarations suivantes seront équivalentes&nbsp;:

        ```css
        <propriete_css>: url("https://example.com/image.png")
        <propriete_css>: url('https://example.com/image.png')
        <propriete_css>: url(https://example.com/image.png)
        ```

      Si vous choisissez d'écrire l'URL sans guillemets, il faudra utiliser une barre oblique inverse (`\`) avant toute parenthèse, espace ou apostrophe (`'`) ou guillemets (`"`) faisant partie de l'URL.

    - `chemin`
      - : La référence à un identifiant d'une [forme SVG](/fr/docs/Web/SVG/Tutorial/Basic_Shapes), `circle`, `ellipse`, `line`, `path`, `polygon`, `polyline`, ou `rect`. Ce sera alors la géométrie de la forme qui sera utilisée pour le chemin.

- `url-modifier` {{Experimental_Inline}}
  - : À l'avenir, la fonction `url()` pourrait prendre en charge un modificateur tel qu'un identifiant ou une notation fonctionnelle qui modifierait le sens de l'URL. Cette valeur n'est pas complètement définie par la spécification et n'est pas prise en charge.

### Syntaxe formelle

```css
url( <string> <url-modifier>* )
```

## Exemples

### Une URL utilisée pour la propriété `background`

```css
.topbanner {
  background: url("banniere_haut.png") #00D no-repeat fixed;
}
```

### Une URL pour une image de puce pour une liste

```css
ul {
  list-style: square url(http://www.example.com/redball.png);
}
```

### Utilisation avec la propriété `content`

#### HTML

```html
<ul>
  <li>Élément 1</li>
  <li>Élément 2</li>
  <li>Élément 3</li>
</ul>
```

#### CSS

```css
li::after {
  content: ' - ' url(star.gif);
}
```

#### Résultat

{{EmbedLiveSample("", "100%", 150)}}

### Utilisation d'un URI de données

#### HTML

```html
<div class="background"></div>
```

#### CSS

```css hidden
.background {
  height: 100vh;
}
```

```css
.background {
  background: yellow;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='45'%3E%3Cpath d='M10 10h60' stroke='%2300F' stroke-width='5'/%3E%3Cpath d='M10 20h60' stroke='%230F0' stroke-width='5'/%3E%3Cpath d='M10 30h60' stroke='red' stroke-width='5'/%3E%3C/svg%3E");
}
```

#### Résultat

{{EmbedLiveSample("", "100%", 50)}}

### Utilisation pour les filtres

Lorsqu'une URL est utilisée comme chemin d'un filtre, l'URL doit être&nbsp;:

1. Le chemin d'un fichier SVG avec l'ancre qui pointe vers l'identifiant du filtre.
2. Ou l'identifiant du filtre si le SVG existe déjà sur la page.

```css
.blur {
  filter: url(mon-fichier.svg#svg-blur);
  /* L'URL d'un fichier SVG utilisé comme filtre */
}

.inline-blur {
  filter: url(#svg-blur);
  /* L'identifiant d'un SVG déjà chargé sur la page HTML */
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`<gradient>`](/fr/docs/Web/CSS/gradient)
- [`element()`](/fr/docs/Web/CSS/element())
- [`image()`](/fr/docs/Web/CSS/image/image())
- [`image-set()`](/fr/docs/Web/CSS/image/image-set())
- [`cross-fade()`](/fr/docs/Web/CSS/cross-fade())
