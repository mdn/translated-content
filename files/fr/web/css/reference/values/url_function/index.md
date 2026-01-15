---
title: url()
slug: Web/CSS/Reference/Values/url_function
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`url()`** est utilisée afin d'inclure un fichier. Le paramètre est une URL absolue, une URL relative ou un URI de donnée. La fonction **`url()`** peut être utilisée comme paramètre d'une autre fonction comme {{CSSxRef("attr")}}. Selon la propriété pour laquelle elle est utilisée, la ressource utilisée peut être une image, une police ou une feuille de style. La notation fonctionnelle `url()` correspond au type de donnée CSS `<url>`.

> [!NOTE]
> Il y a une différence entre un {{Glossary("URI")}} et une {{Glossary("URL")}}. Un URI identifie une ressource. Une URL est un type d'URI qui décrit _l'emplacement_ d'une ressource. Un URI peut être une URL ou un nom ({{Glossary("URN")}}) d'une ressource.
>
> Pour la spécification CSS de niveau 1, la notation fonctionnelle `url()` ne décrivaient que des URL au sens strict. Pour la spécification CSS de niveau 2, la définition de `url()` a été étendue afin de décrire n'importe quel URI (que ce soit une URL ou un URN). Cela a été une source de confusion, car `url()` pouvait être utilisée pour créer un type de données `<uri>`. Cette évolution était non seulement étrange mais aussi superflue, car les URN ne sont quasiment jamais utilisées dans du CSS réel. Pour éviter cette confusion, la spécification CSS de niveau 3 est revenue à la définition initiale. Aujourd'hui, `url()` ne manipule que des vraies `<url>`.

Lorsque des URL relatives sont utilisées, elles sont relatives à l'URL de la feuille de style et pas à celle de la page web courante.

La fonction **`url()`** peut être incluse comme valeur pour les propriétés&nbsp;:
{{CSSxRef('background')}}, {{CSSxRef('background-image')}}, {{CSSxRef('border')}}, {{CSSxRef('border-image')}}, {{CSSxRef('border-image-source')}}, {{CSSxRef('content')}}, {{CSSxRef('cursor')}}, {{CSSxRef('filter')}}, {{CSSxRef('list-style')}}, {{CSSxRef('list-style-image')}}, {{CSSxRef('mask')}}, {{CSSxRef('mask-image')}}, {{CSSxRef('offset-path')}}, {{CSSxRef('clip-path')}}, [src](/fr/docs/Web/CSS/Reference/At-rules/@font-face/src) dans le cadre d'un bloc {{CSSxRef('@font-face')}} et {{CSSxRef('@counter-style/symbols', '@counter-style/symbols')}}.

## Syntaxe

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

## Valeurs

- `<string>`
  - : Une chaîne de caractères spécifiant une URL, qui est une adresse relative ou absolue, ou un pointeur, vers la ressource web à inclure, ou un URI de données. Vous pouvez également utiliser une URL de hachage pour référencer l'ID d'une [forme SVG](/fr/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes) ou d'un [filtre SVG](/fr/docs/Web/SVG/Reference/Element/filter).

    Les guillemets sont généralement facultatifs&nbsp;: ils sont requis si l'URL inclut des parenthèses, des espaces ou des guillemets (à moins que ces caractères ne soient échappés), ou si l'adresse inclut des caractères de contrôle supérieurs à `0x7e`. Les règles de syntaxe des chaînes normales s'appliquent&nbsp;: les guillemets doubles ne peuvent pas apparaître à l'intérieur de guillemets doubles et les guillemets simples ne peuvent pas apparaître à l'intérieur de guillemets simples à moins d'être échappés.

- `<url-modifier>`
  - : Dans le futur, la fonction `url()` pourrait prendre en charge la spécification d'un modificateur, d'un identifiant ou d'une notation fonctionnelle, qui modifie le sens de la chaîne d'URL. Cela n'est pas pris en charge et n'est pas entièrement défini dans la spécification.

### Syntaxe formelle

{{CSSSyntax("url")}}

## Exemples

### Utilisation comme valeur de `background`

```css
body {
  background: url("https://mdn.github.io/shared-assets/images/examples/leopard.jpg")
    #0000dd no-repeat fixed;
}
```

{{EmbedLiveSample("utilisation_comme_valeur_de_background", "100%", "200")}}

### Utilisation comme image de puce pour une liste

```html hidden
<ul>
  <li>Élément 1</li>
  <li>Élément 2</li>
  <li>Élément 3</li>
</ul>
```

```css hidden
ul {
  font-size: 3rem;
  margin: 0;
}
```

```css
ul {
  list-style: outside
    url("https://mdn.github.io/shared-assets/images/examples/firefox-logo.svg");
}
```

{{EmbedLiveSample("utilisation_comme_image_de_puce_pour_une_liste", "100%", "200")}}

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
  content: " - "
    url("https://mdn.github.io/shared-assets/images/examples/star-white_16x16.png");
}
```

#### Résultat

{{EmbedLiveSample("utilisation_avec_la_propriété_content", "100%", 150)}}

### Utilisation comme une URI de données

#### CSS

```css
body {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='45'%3E%3Cpath d='M10 10h60' stroke='%2300F' stroke-width='5'/%3E%3Cpath d='M10 20h60' stroke='%230F0' stroke-width='5'/%3E%3Cpath d='M10 30h60' stroke='red' stroke-width='5'/%3E%3C/svg%3E");
}
```

#### Résultat

{{EmbedLiveSample("utilisation_comme_une_uri_de_données", "100%", 100)}}

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

- Le type de donnée {{CSSxRef("&lt;gradient&gt;")}}
- La fonction {{CSSxRef("element", "element()")}}
- La fonction {{CSSxRef("image/image", "image()")}}
- La fonction {{CSSxRef("image/image-set", "image-set()")}}
- La fonction {{CSSxRef("cross-fade", "cross-fade()")}}
