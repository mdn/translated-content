---
title: background-image
slug: Web/CSS/background-image
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/background-image
---
{{CSSRef}}

La propriété **`background-image`** permet de définir une ou plusieurs images comme arrière(s)-plan(s) pour un élément.

{{EmbedInteractiveExample("pages/css/background-image.html")}}

Les images sont dessinées les unes au-dessus des autres. La première image indiquée est dessinée comme étant la plus proche de l'utilisateur.

Les bordures de l'élément sont dessinés par-dessus l'arrière-plan et la couleur {{cssxref("background-color")}} est dessinée sous l'arrière-plan. La position et les limites de chaque image sont gérées grâce aux propriétés {{cssxref("background-clip")}} et {{cssxref("background-origin")}}.

Si une image donnée ne peut pas être chargée (par exemple lorsqu'il est impossible de charger un fichier via l'URI indiquée), les navigateurs considèreront la valeur comme `none`.

> **Note :** Même si les images sont opaques et que les couleurs ne seront pas affichées de façon normale, les développeurs doivent toujours définir une couleur d'arrière-plan via {{cssxref("background-color")}} au cas où les images ne peuvent être chargées.

## Syntaxe

```css
/* Valeur simple */
background-image: url('https://example.com/bck.png');

/* Plusieurs valeurs */
background-image: url('https://example.com/top.png'), url('https://example.com/bottom.png');

/* Valeur avec un mot-clé */
background-image: none;

/* Valeurs globales */
background-image: inherit;
background-image: initial;
background-image: unset;
```

Chaque image d'arrière-plan peut être définie avec le mot-clé `none` ou avec une valeur de type `<image>`. Pour indiquer plusieurs images d'arrière-plan, on listera les différentes valeurs les unes à la suite des autres et séparées par des virgules :

```css
background-image:
  linear-gradient(to bottom, rgba(255,255,0,0.5), rgba(0,0,255,0.5)),
  url("https://mdn.mozillademos.org/files/7693/catfront.png");
```

### Valeurs

- `none`
  - : Un mot-clé qui indique qu'aucune image ne doit être utilisée comme arrière-plan.
- `<image>`
  - : Une valeur {{cssxref("&lt;image&gt;")}} qui indique l'image à afficher. On peut avoir plusieurs images en arrière-plan en séparant les valeurs par des virgules. Lorsque c'est une URL qui est utilisée, on peut aussi bien utiliser des simples quotes (`'texte_avec_double_quotes_"_'`) ou des doubles quotes (`"texte_avec_simple_quote_'_"`) pour encadrer le texte qui forme l'URL.

### Syntaxe formelle

{{csssyntax}}

## Exemples

On voit ici l'effet obtenu avec plusieurs images : l'étoile est légèrement transparente et se superpose par-dessus l'image du chat.

### HTML

```html
<div>
  <p class="catsandstars">
    Un paragraphe avec des chats<br/>
    et des étoiles.
  </p>
  <p>Pas ici.</p>
  <p class="catsandstars">
    Et voilà encore des chats.<br/>
    Et des étoiles !
  </p>
  <p>Puis plus rien.</p>
</div>
```

### CSS

```css
p {
  font-size: 1.5em;
  color: #FE7F88;
  background-color: transparent;
  background-image: none;
}

div {
  background-image: url("https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png");
}

.catsandstars {
  background-image:  url("https://mdn.mozillademos.org/files/11991/startransparent.gif"),
                     url("https://mdn.mozillademos.org/files/7693/catfront.png");
  background-color: transparent;
}
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Accessibilité

Les navigateurs ne fournissent pas d'informations spécifiques aux outils d'assistance quant aux images d'arrière-plan. Les lecteurs d'écran ne pourront donc pas annoncer le sens de l'image aux utilisateurs. Si l'image contient des informations critiques pour la compréhension générale de la page, mieux vaudra décrire ces informations de façon sémantique dans le document.

- [Comprendre les règles du WCAG 1.1](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.1_%E2%80%94_Providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 - W3C Understanding WCAG 2.0 (en anglais)](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Spécifications

| Spécification                                                                                                | État                                     | Commentaires                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Backgrounds', '#background-image', 'background-image')}}             | {{Spec2('CSS3 Backgrounds')}} | La propriété a été étendue pour gérer plusieurs arrières-plans et le type de donnée CSS {{cssxref("&lt;image&gt;")}}. |
| {{SpecName('CSS2.2', 'colors.html#propdef-background-image', 'background-image')}} | {{Spec2('CSS2.2')}}                 |                                                                                                                               |
| {{SpecName('CSS2.1', 'colors.html#propdef-background-image', 'background-image')}} | {{Spec2('CSS2.1')}}                 | La gestion des dimensions intrinsèques (lorsqu'elles sont absentes ou présentes) est décrite.                                 |
| {{SpecName('CSS1', '#background-image', 'background-image')}}                             | {{Spec2('CSS1')}}                 | Définition initiale.                                                                                                          |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.background-image")}}

## Voir aussi

- [Implémenter des sprites en CSS](/fr/docs/Web/CSS/CSS_Images/Implementing_image_sprites_in_CSS)
- {{HTMLElement("img")}},
- {{cssxref("&lt;image&gt;")}},
- {{cssxref("&lt;gradient&gt;")}},
- {{cssxref("linear-gradient")}},
- {{cssxref("radial-gradient")}},
- {{cssxref("repeating-linear-gradient")}},
- {{cssxref("repeating-radial-gradient")}},
- {{cssxref("element()")}},
- {{cssxref("_image", "image()")}},
- {{cssxref("image-set")}},
- {{cssxref("url","url()")}}
