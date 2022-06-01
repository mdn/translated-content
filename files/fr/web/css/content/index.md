---
title: content
slug: Web/CSS/content
translation_of: Web/CSS/content
browser-compat: css.properties.content
---
{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) **`content`** remplace un élément avec une valeur générée. Les objets insérés via la propriété `content` sont des **[éléments remplacés anonymes](/fr/docs/Web/CSS/Replaced_element)**.

```css
/* Des mots-clés qui ne peuvent pas être mélangés avec d'autres valeurs */
content: normal;
content: none;

/* Valeurs pour une image (<image>) */
content: url("http://www.example.com/test.png");
content: linear-gradient(#e66465, #9198e5);
content: image-set("image1x.png" 1x, "image2x.png" 2x);

/* Texte alternatif pour le contenu, ajouté avec le niveau 3 de la spécification */
content: url("http://www.example.com/test.png") / "Le texte alternatif";

/* Une valeur <string>, les caractères non-latin */
/* doivent être échappées par ex. \000A9 for &copy; */
content: 'prefix';

/* Valeurs utilisant un compteur, éventuellement
   avec <list-style-type> */
content: counter(compteur_chapitre);
content: counter(compteur_chapitre, upper-roman);
content: counters(compteur_section, ".");
content: counters(compteur_section, ".", decimal-leading-zero);

/* attr() lie à la valeur de l'attribut HTML */
content: attr(value string);

/* Mots-clés dépendant de langue ou de la position */
content: open-quote;
content: close-quote;
content: no-open-quote;
content: no-close-quote;

/* Sauf avec normal et none, on peut utiliser */
/* plusieurs valeurs de façon simultanée */
content: open-quote counter(compteur_chapitre);

/* Valeurs globales */
content: inherit;
content: initial;
content: revert;
content: unset;
```

## Syntaxe

### Valeurs

- `none`
  - : Lorsque cette valeur est appliquée à un pseudo-élément, ce dernier n'est pas généré. Si elle est appliquée à un élément, la valeur n'a pas d'effet.
- `normal`
  - : Résulte en `none` pour les pseudo-éléments `::before` et `::after`.
- [`<string>`](/fr/docs/Web/CSS/string)
  - : Contenu qui indique le texte alternatif de l'élément. Les caractères non-latins doivent être encodés avec leur séquence d'échappement Unicode (`\000A9` représentera par exemple le symbole ©).
- [`<image>`](/fr/docs/Web/CSS/image)
  - : Une image (valeur de type [`<image>`](/fr/docs/Web/CSS/image)) avec une [`url()`](/fr/docs/Web/CSS/url()) ou [`<gradient>`](/fr/docs/Web/CSS/gradient) ou une partie de la page web fournie par la fonction [`element()`](/fr/docs/Web/CSS/element()) et qui indique le contenu à afficher.
- [`counter()`](/fr/docs/Web/CSS/counter())
  - : Un [compteur CSS](/fr/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters), généralement un nombre, généralement produit via les propriétés [`<counter-reset>`](/fr/docs/Web/CSS/counter-reset) et [`<counter-increment>`](/fr/docs/Web/CSS/counter-increment) et qui peut être affiché grâce à la fonction [`counter()`](/fr/docs/Web/CSS/counter()) or [`counters()`](/fr/docs/Web/CSS/counters()).

    [`counter()`](/fr/docs/Web/CSS/counter()) possède deux formes&nbsp;: `counter(_name_)` ou `counter(_name_, _style_)`. Le texte généré est la valeur du compteur le plus profond possédant un nom donné dans ce pseudo-élément&nbsp;; il est formaté selon le style ([`<list-style-type>`](/fr/docs/Web/CSS/list-style-type) indiqué (`decimal` par défaut).

    [`counters()`](/fr/docs/Web/CSS/counters()) a également deux formes&nbsp;: `counters(name, string)` ou `counters(name, string, style)`. Le texte généré est la valeur de tous les compteurs d'un nom donné dans ce pseudo-élément, depuis le moins profond jusqu'au plus profond, séparés par la chaîne définie. Les compteurs sont formatés selon le style ([`<list-style-type>`](/fr/docs/Web/CSS/list-style-type) indiqué (`decimal` par défaut).

- `attr(X)`
  - : Renvoie la valeur de l'attribut X de l'élément comme une chaîne. S'il n'existe pas d'attribut X, une chaîne vide est renvoyée. La sensibilité à la casse du nom de l'attribut dépend du langage utilisé.
- `open-quote` | `close-quote`
  - : Ces valeurs sont remplacées par la chaîne appropriée de la propriété [`quotes`](/fr/docs/Web/CSS/quotes).
- `no-open-quote` | `no-close-quote`
  - : N'introduit aucun contenu, mais incrémente (respectivement décrémente) le niveau d'imbrication des citations.

## Accessibilité

Le contenu généré par CSS n'est pas inclus dans le [DOM](/fr/docs/Web/API/Document_Object_Model/Introduction). Pour cette raison, il ne fait pas partie de l'[arbre d'accessibilité](/fr/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) et certaines technologies d'assistances ou certains navigateurs ne permettront pas d'annoncer ce contenu. Si ce contenu porte des informations essentielles à la compréhension de la page, il faut inclure ces informations de façon sémantique dans le document principal.

- [La prise en charge relative à l'accessibilité pour les contenus générés par CSS — Tink (en anglais)](https://tink.uk/accessibility-support-for-css-generated-content/)
- [Comprendre les règles WCAG 1.3](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_%E2%80%94_Create_content_that_can_be_presented_in_different_ways)
- [Comprendre les critères de succès 1.3.1 | Comprendre WCAG 2.0 (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Titres et citations

Dans cet exemple, on insère des marques de citation et le mot «&nbsp;Chapitre&nbsp;» pour chaque titre.

#### HTML

```html
<h1>5</h1>
<p>Commençons par une citation de Sir Tim Berners-Lee,
  <q cite="http://www.w3.org/People/Berners-Lee/FAQ.html#Internet">
    I was lucky enough to invent the Web at the time when the Internet already existed - and had for a decade and a half.</q>
    We must understand that there is nothing fundamentally wrong with building on the contributions of others.
</p>

<h1>6</h1>
<p>Citons le manifeste Mozilla,
  <q cite="https://www.mozilla.org/fr/about/manifesto/">
    Internet est une ressource publique mondiale qui doit demeurer ouverte et accessible.</q>
</p>
```

#### CSS

```css
q {
  color: blue;
}

q::before {
  content: open-quote;
}

q::after {
  content: close-quote;
}

h1::before  {
  content: "Chapter ";  
  /* L'espace après la dernière lettre est 
     voulu afin de détacher le mot du reste
     du contenu */
}
```

#### Résultat

{{EmbedLiveSample('', 460, 310)}}

### Ajouter une icône avant un lien

#### HTML

```html
<a href="http://www.mozilla.org/fr/">Accueil</a>
```

#### CSS

```css
a::before{
  content: url("mdn-favicon16.png") " MOZILLA: ";
  font: x-small Arial, freeSans, sans-serif;
  color: gray;
}
```

#### Résultat

{{EmbedLiveSample('', 200, 60)}}

### Utiliser les classes

#### HTML

```html
<h2>Top des ventes</h2>
<ol>
  <li>Thriller politique</li>
  <li class="nouveaute">Histoires effrayantes</li>
  <li>Ma biographie</li>
  <li class="nouveaute">Bit-lit</li>
</ol>
```

#### CSS

```css
.nouveaute::after {
  content: " Nouveau !";
  color: red;
}
```

#### Résultat

{{EmbedLiveSample('', 300, 200)}}

### Utiliser les attributs d'image et d'élément

Dans cet exemple, on insère une image avant chaque lien et on ajoute son identifiant après.

#### HTML

```html
<ul>
  <li><a id="moz" href="https://www.mozilla.org/">Page d'accueil Mozilla</a></li>
  <li><a id="mdn" href="https://developer.mozilla.org/">Mozilla Developer Network</a></li>
</ul>
```

#### CSS

```css
a {
  text-decoration: none;
  border-bottom: 3px dotted navy;
}

a::after {
  content: " (" attr(id) ")";
}

#moz::before {
  content: url("mdn-favicon16.png");
}

#mdn::before {
  content: url("mdn-favicon16.png");
}

li {
  margin: 1em;
}
```

#### Résultat

{{EmbedLiveSample("", '100%', 160)}}

### Remplacer un élément

Dans cet exemple, on remplace le contenu d'un élément avec une image. Il est possible de remplacer le contenu d'un élément avec une [`url()`](/fr/docs/Web/CSS/url()) ou une valeur de type [`<image>`](/fr/docs/Web/CSS/image). Le contenu ajouté avec `::before` ou avec `::after` ne sera plus généré car l'élément sera devenu un élément remplacé.

#### HTML

```html
<div id="replaced">Mozilla</div>
```

#### CSS

```css
#replaced {
  content: url("mdn.svg");
}

#replaced::after { /* Ceci ne sera pas affiché, */
                   /* l'élément sera un élément remplacé */
  content: " (" attr(id) ")";
}
```

#### Résultat

{{EmbedLiveSample('', '100%', 250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les éléments remplacés](/fr/docs/Web/CSS/Replaced_element)
- [`::after`](/fr/docs/Web/CSS/::after)
- [`::before`](/fr/docs/Web/CSS/::before)
- [`::marker`](/fr/docs/Web/CSS/::marker)
- [`quotes`](/fr/docs/Web/CSS/quotes)
- La fonction [`url()`](/fr/docs/Web/CSS/url())
