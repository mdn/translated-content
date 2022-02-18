---
title: url()
slug: Web/CSS/url()
tags:
  - CSS
  - Fonction
  - Reference
  - Web
  - url()
translation_of: Web/CSS/url()
---
{{CSSRef}}

La fonction CSS **`url()`** est utilisée afin d'inclure un fichier. Le paramètre est une URL absolue, une URL relative ou un URI de donnée. La fonction **`url()`** peut être utilisée comme paramètre d'une autre fonction comme {{cssxref('attr()')}}. Selon la propriété pour laquelle elle est utilisée, la ressource utilisée peut être une image, une police ou une feuille de stye.

La notation fonctionelle `url()` correspond au type de donnée CSS [`<url>`](</fr/docs/conflicting/Web/CSS/url()_168028c4e5edd9e19c061adb4b604d4f>).

```css
/* Utilisation simple */
url(https://example.com/images/myImg.jpg);
url(data:image/png;base64,iRxVB0…);
url(myFont.woff);
url(#IDofSVGpath);

/* Propriétés utilisables */
background-image: url("https://mdn.mozillademos.org/files/16761/star.gif");
list-style-image: url('../images/bullet.jpg');
content: url("pdficon.jpg");
cursor: url(mycursor.cur);
border-image-source: url(/media/diamonds.png);
src: url('fantasticfont.woff');
offset-path: url(#path);
mask-image: url("masks.svg#mask1");

/* Propriétés avec valeurs de recours */
cursor: url(pointer.cur), pointer

/* Propriétés raccourcies associées */
background: url('https://mdn.mozillademos.org/files/16761/star.gif') bottom right repeat-x blue;
border-image: url("/media/diamonds.png") 30 fill / 30px / 30px space;

/* Utilisation comme paramètre d'une fonction CSS */
background-image: cross-fade(20% url(first.png), url(second.png));
mask-image: image(url(mask.png), skyblue, linear-gradient(rgba(0, 0, 0, 1.0), transparent);

/* Utilisation avec plusieurs valeurs */
content: url(star.svg) url(star.svg) url(star.svg) url(star.svg) url(star.svg);

/* Règles @ / at-rules */
@document url("https://www.example.com/") { ... } {{Experimental_Inline}}
@import url("https://www.example.com/style.css");
@namespace url(http://www.w3.org/1999/xhtml);
```

Lorsque des URL relatives sont utilisées, elles sont relatives à l'URL de la feuille de style et pas à celle de la page web courante).

La fonction **`url()`** peut être incluse comme valeur pour les propriétés {{cssxref('background-image')}}, {{cssxref('border-image')}}, {{cssxref('list-style-image')}}, {{cssxref('content' )}}, {{cssxref('cursor')}}, {{cssxref('border-image')}}, {{cssxref('border-image-source')}}, comme descripteur [`src`](/fr/docs/Web/CSS/@font-face/src) pour une règle [`@font-face`](/fr/docs/Web/CSS/@font-face) ou [`@counter-style/symbol`](/fr/docs/Web/CSS/@counter-style/symbols)

Dans la spécification CSS de niveau 1, la notation fonctionnelle `url()` ne permettait que de décrire des URL. Avec la spécification de niveau 2, la définition d'`url()` a été étendue afin de décrire n'importe quel URI, y compris des URI de données. Le module de spécification _CSS Values and Units_ de niveau 3 est revenu à la définition initiale plus stricte. Aussi, à l'heure actuelle et formellement `url()` ne permet que de décrire des valeurs `<url>`.

## Syntaxe

### Valeurs

- `string`

  - : Une chaîne de caractères indiquant une URL ou l'identifiant d'une forme SVG.

    - `<url>`

      - : Une URL, relative ou absolue, qui pointe vers une ressource web à inclure ou un URI de donnée éventuellement encadrée entre quotes ou doubles quotes. Les quotes sont obligatoires si l'URL inclut des parenthèses, espaces, doubles quotes, etc. (sauf si ces caractères sont échappés) ou si l'adresse inclut des caractères de contrôle supérieurs à `0x7e`. Il n'est pas possible d'utiliser des doubles quotes dans une URL encadrée par des doubles quotes à moins de les échapper. De même, on ne peut pas utiliser une simple quote dans une URL délimitée par des simples quotes. Les déclarations suivantes seront équivalentes :

            <propriété_css>: url("https://example.com/image.png")
            <propriété_css>: url('https://example.com/image.png')
            <propriété_css>: url(https://example.com/image.png)

        Si vous choisissez d'écrire l'URL sans guillemets, il faudra utiliser une barre oblique inverse (`\`) avant toute parenthèse, espace ou apostrophe (`'`) ou guillemets(`"`) faisant partie de l'URL.

- _chemin_
  - : La référence à un identifiant d'une [forme SVG](/en-US/docs/Web/SVG/Tutorial/Basic_Shapes) -- `circle`, `ellipse`, `line`, `path`, `polygon`, `polyline`, or `rect`. Ce sera alors la géométrie de la forme qui sera utilisée pour le chemin.
- `url-modifier` {{Experimental_Inline}}
  - : À l'avenir, la fonction `url()` pourrait prendre en charge un modificateur tel qu'un identifiant ou une notation fonctionnelle qui modifierait le sens de l'URL. Cette valeur n'est pas complètement définie par la spécification et n'est pas prise en charge.

### Syntaxe formelle

    url( <string> <url-modifier>* )

## Exemples

### Propriété `content`

#### HTML

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

#### CSS

```css
li::after {
  content: ' - ' url(https://mdn.mozillademos.org/files/16761/star.gif);
}
```

#### Résultat

{{EmbedLiveSample("Propriété_content", "100%", 50)}}

### URI de données

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

{{EmbedLiveSample("URI_de_données", "100%", 50)}}

## Spécifications

| Spécification                                                        | État                             | Commentaires                                                                               |
| -------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------ |
| {{SpecName('CSS4 Values', '#urls', 'url()')}}         | {{Spec2('CSS4 Values')}} |                                                                                            |
| {{SpecName('CSS3 Values', '#urls', 'url()')}}         | {{Spec2('CSS3 Values')}} | Aucune modification significative depuis la spécification de niveau 2 (première révision). |
| {{Specname('CSS2.1', 'syndata.html#uri', 'uri()')}} | {{Spec2('CSS2.1')}}         | Aucune modification significative depuis la spécification de niveau 1.                     |
| {{SpecName('CSS1', '#url', 'url()')}}                     | {{Spec2('CSS1')}}         | Définition initiale.                                                                       |

## Compatibilité des navigateurs

{{Compat("css.types.url")}}

## Voir aussi

- {{cssxref("&lt;gradient&gt;")}}
- {{cssxref("element()")}}
- {{cssxref("_image","image()")}}
- {{cssxref("image-set","image-set()")}}
- {{cssxref("cross-fade()")}}
