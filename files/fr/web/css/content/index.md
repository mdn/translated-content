---
title: content
slug: Web/CSS/content
translation_of: Web/CSS/content
---
{{CSSRef}}

La propriété **`content`** est utilisée avec les pseudo-éléments {{cssxref("::before")}} et {{cssxref("::after")}} afin de générer le contenu d'un élément. Les objets insérés via la propriété `content` sont des _[éléments remplacés anonymes](/fr/docs/Web/CSS/Replaced_element)._

```css
/* Des mots-clés qui ne peuvent pas être mélangés
  avec d'autres valeurs */
content: normal;
content: none;

/* Valeurs pour une image */
content: url("http://www.example.com/test.png");
content: linear-gradient(#e66465, #9198e5);

/* Une valeur <string>, les caractères non-latin */
/* doivent être échappées par ex. \000A9 for &copy; */
content: 'prefix';

/* Valeurs utilisant un compteur */
content: counter(compteur_chapitre);
content: counter(compteur_section, ".");

/* attr() lie à la valeur de l'attribut HTML */
content: attr(value string);

/* Mots-clés dépendant de langue */
/* ou de la position             */
content: open-quote;
content: close-quote;
content: no-open-quote;
content: no-close-quote;

/* Sauf avec normal et none, on peut utiliser */
/* plusieurs valeurs de façon simultanée */
content: open-quote chapter_counter;

/* Valeurs globales */
content: inherit;
content: initial;
content: unset;
```

## Syntaxe

### Valeurs

- `none`
  - : Le pseudo-élément n'est pas généré.
- `normal`
  - : Résulte en `none` pour les pseudo-éléments `:before` et `:after`.
- {{cssxref("&lt;string&gt;")}}
  - : Contenu sous forme de texte. Les caractères non-latins doivent être encodés avec leur séquence d'échappement Unicode (`\000A9` représentera par exemple le symbole ©).
- {{cssxref("&lt;image&gt;")}}
  - : Une image (valeur de type {{cssxref("&lt;image&gt;")}}) de type {{cssxref("&lt;url&gt;")}} ou {{cssxref("&lt;gradient&gt;")}} ou une partie de la page web fournie par la fonction {{cssxref("element()", "element()")}} et qui indique le contenu à afficher.
- `counter()` ou `counters()` (cf. {{cssxref("CSS_Lists_and_Counters/Using_CSS_counters")}})
  - : Un compteur CSS, généralement un nombre, qui peut être affiché grâce à la fonction {{cssxref("CSS_Lists_and_Counters/Using_CSS_counters")}} or {{cssxref("counters()")}}. La première possède deux formes : 'counter(_name_)' ou 'counter(_name_, _style_)'. Le texte généré est la valeur du compteur le plus profond possédant un nom donné dans ce pseudo-élément ; il est formaté selon le style indiqué (`decimal` par défaut). La seconde a également deux formes : `counters(name, string)` ou `counters(name, string, style)`. Le texte généré est la valeur de tous les compteurs d'un nom donné dans ce pseudo-élément, depuis le moins profond jusqu'au plus profond séparés par la chaîne définie. Les compteurs sont formatés selon le style indiqué (`decimal` par défaut). Voir [la section sur les compteurs automatiques](/fr/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters) et sur la numérotation pour plus d'informations.
- `attr(X)`
  - : Renvoie la valeur de l'attribut X de l'élément comme une chaîne. S'il n'existe pas d'attribut X, une chaîne vide est renvoyée. La sensibilité à la casse du nom de l'attribut dépend du langage utilisé.
- `open-quote` | `close-quote`
  - : Ces valeurs sont remplacées par la chaîne appropriée de la propriété {{ cssxref("quotes") }}.
- `no-open-quote` | `no-close-quote`
  - : N'introduit aucun contenu, mais incrémente (respectivement décrémente) le niveau d'imbrication des citations.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Titres et citations

#### HTML

```html
<h1>5</h1>
<p> Commençons par une citation de Sir Tim Berners-Lee,
    <q cite="http://www.w3.org/People/Berners-Lee/FAQ.html#Internet">
        I was lucky enough to invent the Web at the time when the Internet already existed - and had for a decade and a half.</q>  We must understand that there is nothing fundamentally wrong with building on the contributions of others.
</p>

<h1>6</h1>
<p> Citons le manifeste Mozilla
    <q cite="http://www.mozilla.org/about/manifesto/">
        Internet est une ressource publique mondiale qui doit demeurer ouverte et accessible.
</p>
```

#### CSS

```css
q {
    color: #00008B;
    font-style: italic;
}

q::before   { content: open-quote }
q::after    { content: close-quote }

h1::before  { content: "Chapitre "; }
```

#### Résultat

{{EmbedLiveSample('Titres_et_citations', 460, 100)}}

### Ajouter une icône avant un lien

#### HTML

```html
<a href="http://www.mozilla.org/fr/">Accueil</a>
```

#### CSS

```css
a::before{
    content: url(https://mozorg.cdn.mozilla.net/media/img/favicon.ico) " MOZILLA: ";
    font:    x-small Arial,freeSans,sans-serif;
    color:   gray;
}
```

#### Résultat

{{EmbedLiveSample('Ajouter_une_icône_avant_un_lien', 200, 60)}}

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

{{EmbedLiveSample('Utiliser_les_classes', 300, 200)}}

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
  content: url("https://mozorg.cdn.mozilla.net/media/img/favicon.ico");
}

#mdn::before {
  content: url("https://mozorg.cdn.mozilla.net/files/7691/mdn-favicon16.ico");
}

li {
  margin: 1em;
}
```

#### Résultat

{{EmbedLiveSample("Utiliser_les_attributs_dimage_et_délément", '100%', 160)}}

### Remplacer un élément

Dans cet exemple, on remplace le contenu d'un élément avec une image. Il est possible de remplacer le contenu d'un élément avec une valeur de type {{cssxref("&lt;url&gt;")}} ou {{cssxref("&lt;image&gt;")}} . Le contenu ajouté avec `::before` ou avec `::after` ne sera plus généré car l'élément sera devenu un élément remplacé.

#### HTML

```html
<div id="replaced">Mozilla</div>
```

#### CSS

```css
#replaced {
  content: url("https://mdn.mozillademos.org/files/12668/MDN.svg");
}

#replaced::after { /* Ceci ne sera pas affiché, */
                   /* l'élément sera un élément remplacé */
  content: " (" attr(id) ")";
}
```

#### Résultat

{{EmbedLiveSample('Remplacer_un_élément', '100%', 200)}}

## Accessibilité

Le contenu généré par CSS n'est pas inclus dans le [DOM](/fr/docs/Web/API/Document_Object_Model/Introduction). Pour cette raison, il ne fait pas partie de l'[arbre d'accessibilité](/fr/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) et certaines technologies d'assistances ou certains navigateurs ne permettront pas d'annoncer ce contenu. Si ce contenu porte des informations essentielles à la compréhension de la page, il faut inclure ces informations de façon sémantique dans le document principal.

- [La prise en charge relative à l'accessibilité pour les contenus générés par CSS generated content – Tink (en anglais)](https://tink.uk/accessibility-support-for-css-generated-content/)
- [Comprendre les règles WCAG 1.3](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_%E2%80%94_Create_content_that_can_be_presented_in_different_ways)
- [_Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Spécifications

| Spécification                                                                    | État                             | Commentaires         |
| -------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName("CSS3 Content", "#content-property", "content")}} | {{Spec2("CSS3 Content")}} |                      |
| {{SpecName('CSS2.1', 'generate.html#content', 'content')}}     | {{Spec2('CSS2.1')}}         | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.content")}}

## Voir aussi

- {{cssxref("::after")}}
- {{cssxref("::before")}}
- {{cssxref("quotes")}}
- {{Cssxref("::marker")}}
- {{cssxref("url()", "url()")}}
