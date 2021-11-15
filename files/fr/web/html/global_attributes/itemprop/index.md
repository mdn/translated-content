---
title: itemprop
slug: Web/HTML/Global_attributes/itemprop
tags:
  - Attribut
  - Attribut universel
  - HTML
  - Micro-données
  - Microdata
translation_of: Web/HTML/Global_attributes/itemprop
original_slug: Web/HTML/Attributs_universels/itemprop
---
{{HTMLSidebar("Global_attributes")}}

L'[attribut universel](/fr/docs/Web/HTML/Attributs_universels) **`itemprop`** est utilisé afin d'ajouter des propriétés à un objet. C'est un attribut universel et chaque élément HTML peut donc avoir un attribut `itemprop` qui permettra de former un couple de nom (la valeur de l'attribut) et de valeur (la valeur de l'élément). Chacune de ces paires constitue une **propriété** et un groupe de propriété forme un **objet (_item_)**. Les valeurs des propriétés sont généralement des chaînes de caractères ou des URL et peuvent être associées à de nombreux éléments comme {{HTMLElement("audio")}}, {{HTMLElement("embed")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("object")}}, {{HTMLElement("source")}} , {{HTMLElement("track")}} et {{HTMLElement("video")}}.

### Un exemple simple

#### HTML

```html
<div itemscope itemtype="http://schema.org/Movie">
  <h1 itemprop="name">Avatar</h1>
  <span>Director:
    <span itemprop="director">James Cameron</span>
    (born August 16, 1954)
  </span>
  <span itemprop="genre">Science fiction</span>
  <a href="../movies/avatar-theatrical-trailer.html"
    itemprop="trailer">Trailer</a>
</div>
```

#### Structure de données

<table class="standard-table">
  <tbody>
    <tr>
      <td colspan="1" rowspan="2"> </td>
      <th colspan="2" rowspan="1"><strong>Objet</strong></th>
    </tr>
    <tr>
      <th>
        <strong>Nom pour <code>itemprop</code></strong>
      </th>
      <th>
        <strong>Valeur pour <code>itemprop</code></strong>
      </th>
    </tr>
    <tr>
      <td><code>itemprop</code></td>
      <td>name</td>
      <td>Avatar</td>
    </tr>
    <tr>
      <td><code>itemprop</code></td>
      <td>director</td>
      <td>James Cameron</td>
    </tr>
    <tr>
      <td><code>itemprop</code></td>
      <td>genre</td>
      <td>Science fiction</td>
    </tr>
    <tr>
      <td><code>itemprop</code></td>
      <td>trailer</td>
      <td>../movies/avatar-theatrical-trailer.html</td>
    </tr>
  </tbody>
</table>

## Propriétés

Les valeurs des propriétés sont généralement des chaînes de caractères ou des URL. Lorsque c'est une URL, on l'exprime grâce à l'élément {{HTMLElement("a")}} et avec son attribut `href`. Pour un élément {{HTMLElement("img")}}, on lira son attribut `src`, de même pour les autres éléments HTML qui font appel à d'autres ressources.

### Trois propriétés dont les valeurs sont des chaînes simples

```html
<div itemscope>
 <p>My name is
   <span itemprop="name">Neil</span>.
 </p>
 <p>My band is called
   <span itemprop="band">Four Parts Water</span>.
 </p>
 <p>I am
   <span itemprop="nationality">British</span>.
 </p>
</div>
```

### Une propriété « image » dont la valeur est une URL

```html
<div itemscope>
 <img itemprop="image"
  src="google-logo.png" alt="Google">
</div>
```

### Une propriété dont la valeur est un identifiant « machine »

```html
<h1 itemscope>
 <data itemprop="product-id"
  value="9678AOU879">The Instigator 2000</data>
</h1>
```

Lorsqu'une chaîne est décrite avec un format machine plutôt qu'un format « humain », on la propriété est exprimée avec la valeur de l'attribut `value` de l'élément {{HTMLElement("data")}} et c'est le contenu de l'élément qui fournira la valeur humainement compréhensible.

### Un exemple de mesure

```html
<div itemscope itemtype="http://schema.org/Product">
 <span itemprop="name">
   Panasonic White 60L Refrigerator
 </span>
 <img src="panasonic-fridge-60l-white.jpg" alt="">
  <div itemprop="aggregateRating"
       itemscope
       itemtype="http://schema.org/AggregateRating">
   <meter itemprop="ratingValue" min=0 value=3.5 max=5>
     Rated 3.5/5
   </meter>
   (based on <span itemprop="reviewCount">11</span>
   customer reviews)
  </div>
</div>
```

Pour les données numériques, on peut utiliser l'élément {{HTMLElement("meter")}} et la valeur de son attribut `value`.

### Une propriété de date

```html
<div itemscope>
 I was born on
 <time itemprop="birthday" datetime="2009-05-10">
   May 10th 2009
 </time>.
</div>
```

Pour les valeurs temporelles, on utilisera les éléments {{HTMLElement("time")}} et son attribut `datetime`.

### Imbrication de propriétés

```html
<div itemscope>
 <p>Name:
   <span itemprop="name">Amanda</span>
 </p>
 <p>Band:
   <span itemprop="band" itemscope>
     <span itemprop="name">Jazz Band</span>
    (<span itemprop="size">12</span> players)
   </span>
 </p>
</div>
```

On peut avoir des imbrications de propriétés et utiliser l'attribut `itemscope` sur l'élément qui porte le groupe.

L'élément de plus haut niveau possède deux propriétés `name` et `band`. La valeur de `name` est Amanda et la valeur de ` ban``d ` est un objet à part entière, composé de deux propriétés `name` et `size`. Le valeur pour `name` est Jazz Band et la valeur de `size` est 12. L'objet de plus haut niveau est un objet qui ne fait pas partie d'un autre objet.

### Séparation des objets

```html
<div itemscope id="amanda" itemref="a b"></div>
<p id="a">Name: <span itemprop="name">Amanda</span></p>
<div id="b" itemprop="band" itemscope itemref="c"></div>
<div id="c">
 <p>Band: <span itemprop="name">Jazz Band</span></p>
 <p>Size: <span itemprop="size">12</span> players</p>
</div>
```

On obtient le même résultat qu'avec l'exemple précédent. Le premier objet possède deux propriétés `name` (qui vaut Amanda) et `band` qui est défini avec un autre objet. Le deuxième objet possède deux propriétés `name` (qui vaut Jazz Band) et `size` (qui vaut 12).

### Un objet avec plusieurs occurrences d'une propriété

```html
<div itemscope>
 <p>Flavors in my favorite ice cream:</p>
 <ul>
  <li itemprop="flavor">Lemon sorbet</li>
  <li itemprop="flavor">Apricot sorbet</li>
 </ul>
</div>
```

Cet objet possède deux fois la même propriété `flavor`, qui prend deux valeurs Lemon sorbet et Apricot sorbet.

### Deux propriétés avec la même valeur

```html
<div itemscope>
 <span itemprop="favorite-color favorite-fruit">
  orange
 </span>
</div>
```

On peut définir deux propriétés au même endroit si elles prennent la même valeur.

### Équivalence sémantique

```html
<figure>
 <img src="castle.jpeg">
 <figcaption>
  <span itemscope>
    <span itemprop="name">The Castle</span>
  </span>
  (1986)
 </figcaption>
</figure>
```

```html
<span itemscope>
  <meta itemprop="name" content="The Castle">
</span>
<figure>
 <img src="castle.jpeg">
 <figcaption>The Castle (1986)</figcaption>
</figure>
```

Ces deux exemples sont équivalents d'un point de vue sémantique. Tous les deux se composent d'un schéma et d'une légende et tous les deux possèdent un objet avec une propriété `name` qui vaut The Castle. Une différence subsiste : si l'utilisateur glisse-dépose l'élément, l'objet sera inclus dans les données. Dans les deux cas, l'image n'est pas associée à l'objet.

## Les noms et les valeurs

Une propriété est un ensemble non-ordonné de composants uniques sensibles à la casse qui représentent les paires de noms/valeurs. Les valeur doit avoir au moins composant pour se rattacher à l'objet. Dans le tableau ci-après, chaque cellule correspond à un composant.

### Exemples de noms

<table class="standard-table">
  <thead>
    <tr>
      <th colspan="1" rowspan="2" scope="col"> </th>
      <th colspan="2" rowspan="1" scope="col">Objet</th>
    </tr>
    <tr>
      <th scope="col">nom pour <code>itemprop</code></th>
      <th scope="col">valeur pour <code>itemprop</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><code>itemprop</code></th>
      <td>country</td>
      <td>Ireland</td>
    </tr>
    <tr>
      <th><code>itemprop</code></th>
      <td>Option</td>
      <td>2</td>
    </tr>
    <tr>
      <th><code>itemprop</code></th>
      <td>https://www.flickr.com/photos/nlireland/6992065114/</td>
      <td>Ring of Kerry</td>
    </tr>
    <tr>
      <th><code>itemprop</code></th>
      <td>img</td>
      <td>https://www.flickr.com/photos/nlireland/6992065114/</td>
    </tr>
    <tr>
      <th><code>itemprop</code></th>
      <td>website</td>
      <td>flickr</td>
    </tr>
    <tr>
      <th><code>itemprop</code></th>
      <td>(token)</td>
      <td>(token)</td>
    </tr>
  </tbody>
</table>

**Les composants** sont des chaînes de caractères ou des URL. Un objet est appelé un objet typé si c'est une URL. Les chaînes ne peuvent pas contenir de point ou de deux points.

1.  Si un objet est un objet typé, il doit être :

    1.  Un nom de propriété autorisé par la spécification qui définit les types pertinents pour un objet ou
    2.  Une URL valide qui est une URL absolue qui définit un nom faisant partie de la spécification du vocabulaire ou
    3.  Une URL valide qui est une URL absolue utilisée comme un nom propriétaire ou

2.  Si un objet n'est pas un objet typé, le nom doit être :

    1.  Une chaîne qui ne contient pas de caractères "**.**" (U+002E FULL STOP) ou "**:**" (U+003A COLON) et qui est utilisée comme un nom « propriétaire » pour la propriété (c'est-à-dire avec un nom qui n'est pas défini dans une spécification publique).

> **Note :** Les caractères « : » sont interdits pour les valeurs qui ne sont pas des URL afin de pouvoir distinguer les URL du reste. Les valeurs avec les caractères « . » sont réservés pour de futurs ajouts et les blancs ne sont pas autorisés car les valeurs seraient analysées comme plusieurs valeurs distinctes.

## Valeurs

La valeur d'une propriété est définie comme le premier cas qui correspond dans cette liste :

- Si l'élément possède un attribut **`itemscope` :**

  - La valeur est **l'objet** créé par l'élément.

- Si l'élément est un élément **`meta` :**

  - La valeur est celle de l'attribut **`content`** s'il existe, la chaîne vide sinon.

- Si l'élément est **`audio`**, **`embed`**, **`iframe`**, **`img`**, **`source`**, **`track`** ou **`video` :**

  - La valeur est l'URL correspondant à l'analyse de l'attribut `src` relatif au nœeud du document ou la chaîne vide s'il n'y pas de tel attribut ou que la recomposition de l'URL échoue.

- Si l'élément est un élément **`a`**, **`area`** ou **`link` :**

  - La valeur est l'URL qui correspond à l'analyse de la valeur de l'attribut `href` relatif au nœud du document ou la chaîne vide s'il n'y pas de tel attribut ou que la recomposition de l'URL échoue.

- Si l'élément est un élément **`object` :**

  - La valeur est l'URL qui correspond à l'analyse de la valeur de l'attribut `data` relatif au nœud du document ou la chaîne vide s'il n'y pas de tel attribut ou que la recomposition de l'URL échoue.

- Si l'élément est un élément **`data` :**

  - La valeur est la valeur l'attribut `value` s'il est présent ou la chaîne vide sinon.

- Si l'élément est un élément **`meter` :**

  - La valeur est la valeur l'attribut `value` s'il est présent ou la chaîne vide sinon.

- Si l'élément est un élément **`time` :**

  - La valeur de l'élément est la valeur de l'attribut **`datetime`**.

Sinon :

- La valeur de l'élément est le contenu textuel de l'élément HTML (`textContent`).

Les éléments qui permettent d'utiliser des attributs URL pour des URL absolues sont : **`a`**, **`area`**, **`audio`**, **`embed`**, **`iframe`**, **`img`**, **`link`**, **`object`**, **`source`**, **`track`** et **`video`**.

### Ordre des noms

L'ordre des noms n'a pas d'importance mais si une propriété possède plusieurs valeurs, l'ordre sera relatif pour cette propriété.

#### Exemples équivalents

```html
<div itemscope>
 <p itemprop="a">1</p>
 <p itemprop="a">2</p>
 <p itemprop="b">test</p>
</div>
```

```html
<div itemscope>
 <p itemprop="b">test</p>
 <p itemprop="a">1</p>
 <p itemprop="a">2</p>
</div>
```

```html
<div itemscope>
 <p itemprop="a">1</p>
 <p itemprop="b">test</p>
 <p itemprop="a">2</p>
</div>
```

```html
<div id="x">
 <p itemprop="a">1</p>
</div>
<div itemscope itemref="x">
 <p itemprop="b">test</p>
 <p itemprop="a">2</p>
</div>
```

## Syntaxe

### Syntaxe formelle

    itemprop = "name", value

## Exemples

### HTML

Un exemple sur un livre qu'on décrit avec les différents attributs.

```html
<dl itemscope
    itemtype="http://vocab.example.net/book"
    itemid="urn:isbn:0-330-34032-8">
 <dt>Title <dd itemprop="title">The Reality Dysfunction
 <dt>Author <dd itemprop="author">Peter F. Hamilton
 <dt>Publication date
 <dd>
  <time itemprop="pubdate" datetime="1996-01-26">
    26 January 1996
  </time>
</dl>
```

## Spécifications

| Spécification                                                                                                        | État                                 | Commentaires |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------ |
| {{SpecName('HTML Microdata', "#dfn-attr-itemprop", "itemprop")}}                                 | {{Spec2('HTML Microdata')}} |              |
| {{SpecName('HTML WHATWG', "microdata.html#names:-the-itemprop-attribute", "itemprop")}} | {{Spec2('HTML WHATWG')}}     |              |

## Compatibilité des navigateurs

{{Compat("html.global_attributes.itemprop")}}

## Voir aussi

- [Les différents attributs universels](/fr/docs/Web/HTML/Attributs_universels)
- Les autres attributs universels relatifs aux microdonnées :

  - {{htmlattrxref("itemid")}}
  - {{htmlattrxref("itemprop")}}
  - {{htmlattrxref("itemref")}}
  - {{htmlattrxref("itemscope")}}
  - {{htmlattrxref("itemtype")}}
