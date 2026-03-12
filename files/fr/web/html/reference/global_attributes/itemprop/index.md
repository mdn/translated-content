---
title: "Attribut HTML universel : itemprop"
short-title: itemprop
slug: Web/HTML/Reference/Global_attributes/itemprop
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

[L'attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`itemprop`** est utilisé pour ajouter des propriétés à un objet. Chaque élément HTML peut avoir un attribut `itemprop` défini, et un `itemprop` consiste en une paire nom-valeur. Chaque paire nom-valeur est appelée une **propriété**, et un groupe d'une ou plusieurs propriétés forme un **objet**. Les valeurs des propriétés sont soit une chaîne de caractères, soit une URL, et peuvent être associées à un très large éventail d'éléments, y compris {{HTMLElement("audio")}}, {{HTMLElement("embed")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("object")}}, {{HTMLElement("source")}}, {{HTMLElement("track")}}, et {{HTMLElement("video")}}.

## Exemples

L'exemple ci-dessous montre le code source pour un ensemble d'éléments marqués avec des attributs `itemprop`, suivi d'un tableau montrant les données structurées résultantes.

### HTML

```html
<div itemscope itemtype="http://schema.org/Movie">
  <h1 itemprop="name">Avatar</h1>
  <span>
    Réalisateur&nbsp;:
    <span itemprop="director">James Cameron</span>
    (né le 16 août 1954)
  </span>
  <span itemprop="genre">Science fiction</span>
  <a href="../movies/avatar-theatrical-trailer.html" itemprop="trailer">
    Bande-annonce
  </a>
</div>
```

### Structure de données

<table class="standard-table">
  <tbody>
    <tr>
      <td rowspan="2"> </td>
      <th colspan="2"><strong>Item</strong></th>
    </tr>
    <tr>
      <th><strong>itemprop name</strong></th>
      <th><strong>itemprop value</strong></th>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>Avatar</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>director</td>
      <td>James Cameron</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>genre</td>
      <td>Science fiction</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>trailer</td>
      <td>../movies/avatar-theatrical-trailer.html</td>
    </tr>
  </tbody>
</table>

## Propriétés

Les propriétés ont des valeurs qui sont soit une chaîne de caractères, soit une URL. Lorsqu'une valeur de chaîne est une URL, elle est exprimée à l'aide de l'élément HTML {{HTMLElement("a")}} et de son attribut [`href`](/fr/docs/Web/HTML/Reference/Elements/a#href), de l'élément HTML {{HTMLElement("img")}} et de son attribut [`src`](/fr/docs/Web/HTML/Reference/Elements/img#src), ou d'autres éléments qui lient ou intègrent des ressources externes.

### Trois propriétés dont les valeurs sont des chaînes de caractères

```html
<div itemscope>
  <p>Mon nom est <span itemprop="name">Neil</span>.</p>
  <p>Mon groupe s'appelle <span itemprop="band">Four Parts Water</span>.</p>
  <p>Je suis <span itemprop="nationality">Britannique</span>.</p>
</div>
```

### Une propriété « image » dont la valeur est une URL

```html
<div itemscope>
  <img itemprop="image" src="google-logo.png" alt="Google" />
</div>
```

Lorsqu'une chaîne de caractères ne peut pas être facilement lue et comprises par une personne (par exemple, une longue chaîne de caractères composée de chiffres et de lettres), elle peut être affichée en utilisant l'attribut de donnée de l'élément, avec la version plus facilement compréhensible par un humain donnée dans le contenu de l'élément (qui ne fait pas partie des données structurées — voir l'exemple ci-dessous).

### Une propriété dont la valeur est un identifiant produit

L'identifiant n'est pas destiné à être lisible par les humain·e·s, donc le nom du produit est utilisé à la place.

```html
<h1 itemscope>
  <data itemprop="product-id" value="9678AOU879">The Instigator 2000</data>
</h1>
```

Pour les données numériques, l'élément de mesure et son attribut de valeur peuvent être utilisés.

### Un exemple de mesure

```html
<div itemscope itemtype="http://schema.org/Product">
  <span itemprop="name">Réfrigérateur Panasonic White 60L</span>
  <img src="panasonic-fridge-60l-white.jpg" alt="" />
  <div
    itemprop="aggregateRating"
    itemscope
    itemtype="http://schema.org/AggregateRating">
    <meter itemprop="ratingValue" min="0" value="3.5" max="5">Noté 3.5/5</meter>
    (basé sur <span itemprop="reviewCount">11</span>
    avis clients)
  </div>
</div>
```

De même, pour les données relatives à la date et l'heure, l'élément de temps et son attribut de dates et heures peut être utilisé.

### Un élément avec une propriété, `"birthday"`, dont la valeur est une date

```html
<div itemscope>
  Je suis né·e le
  <time itemprop="birthday" datetime="1984-05-10">10 mai 1984</time>.
</div>
```

Les propriétés peuvent également être des groupes de paires nom-valeur, en plaçant l'attribut de portée d'élément sur l'élément qui déclare la propriété. Chaque valeur est soit une chaîne, soit un groupe de paires nom-valeur (c'est-à-dire un élément).

### Un élément externe représentant une personne, et un élément interne représentant un groupe

```html
<div itemscope>
  <p>Nom&nbsp;: <span itemprop="name">Amanda</span></p>
  <p>
    Groupe&nbsp;:
    <span itemprop="band" itemscope>
      <span itemprop="name">Jazz Band</span>
      (<span itemprop="size">12</span> membres)
    </span>
  </p>
</div>
```

L'élément externe ci-dessus a deux propriétés, `"name"` et `"band"`. Le nom (`"name"`) est «&nbsp;Amanda&nbsp;», et le groupe (`"band"`) est un élément à part entière, avec deux propriétés, `"name"` et `"size"`. Le nom du groupe est «&nbsp;Jazz Band&nbsp;», et le `"size"` est «&nbsp;12&nbsp;». L'élément externe dans cet exemple est un élément microdonnées de niveau supérieur. Les éléments qui ne font pas partie d'autres éléments sont appelés éléments microdonnées de niveau supérieur.

### Toutes les propriétés séparées de leurs éléments

Cet exemple est le même que le précédent, mais toutes les propriétés sont séparées de leurs éléments.

```html
<div itemscope id="amanda" itemref="a b"></div>
<p id="a">Nom&nbsp;: <span itemprop="name">Amanda</span></p>
<div id="b" itemprop="band" itemscope itemref="c"></div>
<div id="c">
  <p>Groupe&nbsp;: <span itemprop="name">Jazz Band</span></p>
  <p>Taille&nbsp;: <span itemprop="size">12</span> membres</p>
</div>
```

Ça donne le même résultat que l'exemple précédent. Le premier élément a deux propriétés, `"name"`, définie sur «&nbsp;Amanda&nbsp;», et `"band"`, définie sur un autre élément. Ce deuxième élément a deux autres propriétés, `"name"`, définie sur «&nbsp;Jazz Band&nbsp;», et `"size"`, définie sur «&nbsp;12&nbsp;».

Un élément peut avoir plusieurs propriétés avec le même nom et des valeurs différentes.

### Glace avec deux saveurs

```html
<div itemscope>
  <p>Saveurs dans ma glace préférée&nbsp;:</p>
  <ul>
    <li itemprop="flavor">Sorbet au citron</li>
    <li itemprop="flavor">Sorbet à l'abricot</li>
  </ul>
</div>
```

Cela donne un élément avec deux propriétés, toutes deux nommées `"flavor"` et ayant pour valeurs «&nbsp;Sorbet au citron&nbsp;» et «&nbsp;Sorbet à l'abricot&nbsp;».

Un élément introduisant une propriété peut également introduire plusieurs propriétés à la fois, pour éviter la duplication lorsque certaines des propriétés ont la même valeur.

### Un élément avec deux propriétés, `"favorite-color"` et `"favorite-fruit"`, toutes deux définies sur la valeur « orange »

```html
<div itemscope>
  <span
    itemprop="favorite-color
    favorite-fruit"
    >orange
  </span>
</div>
```

> [!NOTE]
> Il n'y a pas de relation entre les microdonnées et le contenu du document où les microdonnées sont balisées.

### Les mêmes données structurées balisées de deux manières différentes

Il n'y a pas de différence sémantique entre les deux exemples suivants

```html
<figure>
  <img src="castle.jpeg" />
  <figcaption>
    <span itemscope><span itemprop="name">Le Château</span></span> (1986)
  </figcaption>
</figure>
```

```html
<span itemscope><meta itemprop="name" content="Le Château" /></span>
<figure>
  <img src="castle.jpeg" />
  <figcaption>Le Château (1986)</figcaption>
</figure>
```

Les deux exemples ont une figure avec une légende, et les deux, complètement indépendants de la figure, ont un élément avec une paire nom-valeur avec le nom (`"name"`) et la valeur «&nbsp;Le Château&nbsp;». La seule différence est que si l'utilisateur fait glisser la légende hors du document, l'élément sera inclus dans les données de glisser-déposer. L'image associée à l'élément ne sera pas incluse.

## Noms et valeurs

Une propriété est un ensemble non ordonné de jetons uniques qui sont sensibles à la casse et représentent les paires nom-valeur. La valeur de la propriété doit contenir au moins un jeton. Dans l'exemple ci-dessous, chaque cellule de données est un jeton.

### Exemples de noms

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2" scope="col"> </th>
      <th colspan="2" scope="col">Item</th>
    </tr>
    <tr>
      <th scope="col">itemprop <strong>name</strong></th>
      <th scope="col">itemprop <strong>value</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>itemprop</th>
      <td>country</td>
      <td>Ireland</td>
    </tr>
    <tr>
      <th>itemprop</th>
      <td>Option</td>
      <td>2</td>
    </tr>
    <tr>
      <th>itemprop</th>
      <td>https://www.flickr.com/photos/nlireland/6992065114/</td>
      <td>Anneau de Kerry</td>
    </tr>
    <tr>
      <th>itemprop</th>
      <td>img</td>
      <td>https://www.flickr.com/photos/nlireland/6992065114/</td>
    </tr>
    <tr>
      <th>itemprop</th>
      <td>website</td>
      <td>flickr</td>
    </tr>
    <tr>
      <th>itemprop</th>
      <td>(token)</td>
      <td>(token)</td>
    </tr>
  </tbody>
</table>

**Les jetons** sont des chaînes de caractères ou des URL. Un objet est appelé un **objet typé** si c'est une URL. Sinon, c'est une chaîne de caractères. Les chaînes de caractères ne peuvent pas contenir de point ou de deux points (voir après).

1. Si un objet est un objet typé, il doit être&nbsp;:
   1. Un nom de propriété défini, ou
   2. Une URL valide, qui fait référence à la définition du vocabulaire, ou
   3. Une URL valide utilisée comme nom de propriété propriétaire (c'est-à-dire non défini dans une spécification publique), ou

2. Si un objet n'est pas un objet typé, le nom doit être&nbsp;:
   1. Une chaîne de caractères qui ne contient pas de caractères `.` (U+002E FULL STOP) et pas de caractères `:` (U+003A COLON) et qui est utilisée comme un nom de propriété propriétaire (c'est-à-dire non défini dans une spécification publique).

> [!NOTE]
> Les caractères « : » sont interdits pour les valeurs qui ne sont pas des URL afin de pouvoir distinguer les URL du reste. Les valeurs avec les caractères « . » sont réservés pour de futurs ajouts. Les espaces ne sont pas autorisés car les valeurs seraient analysées comme plusieurs jetons distincts.

## Valeur

La valeur d'une propriété est définie comme le premier cas qui correspond dans cette liste&nbsp;:

- Si l'élément a un attribut `itemscope`
  - La valeur est **l'élément** créé par l'élément

- Si l'élément est un élément `meta`
  - La valeur est la valeur de l'attribut `content` de l'élément

- Si l'élément est un élément `audio`, `embed`, `iframe`, `img`, `source`, `track` ou `video`
  - La valeur est la chaîne URL résultante, qui résulte de l'analyse de la valeur de l'attribut `src` de l'élément par rapport au document nœud (partie de l'[API DOM Microdata](/fr/docs/Web/HTML/Guides/Microdata)) de l'élément au moment où l'attribut est défini

- Si l'élément est un élément `a`, `area` ou `link`
  - La valeur est la chaîne URL résultante, qui résulte de l'analyse de la valeur de l'attribut `href` de l'élément par rapport au document nœud de l'élément au moment où l'attribut est défini

- Si l'élément est un élément `object`
  - La valeur est la chaîne URL résultante, qui résulte de l'analyse de la valeur de l'attribut `data` de l'élément par rapport au document nœud de l'élément au moment où l'attribut est défini

- Si l'élément est un élément `data`
  - La valeur est la valeur de l'attribut `value` de l'élément

- Si l'élément est un élément `meter`
  - La valeur est la valeur de l'attribut `value` de l'élément

- Si l'élément est un élément `time`
  - La valeur est la valeur de l'attribut `datetime` de l'élément

Sinon

- La valeur est le _contenu textuel_ (`textContent`) de l'élément.

Si la valeur d'une propriété est une `URL`, la propriété doit être définie en utilisant un élément de propriété URL. Les éléments de propriété URL sont les éléments `a`, `area`, `audio`, `embed`, `iframe`, `img`, `link`, `object`, `source`, `track` et `video`.

### Ordre des noms

Les noms ne sont pas ordonnés les uns par rapport aux autres, mais si un nom particulier a plusieurs valeurs, elles ont un ordre relatif.

Dans l'exemple suivant, la propriété `"a"` a les valeurs «&nbsp;1&nbsp;» et «&nbsp;2&nbsp;», _dans cet ordre_, mais il n'est pas important que la propriété `"a"` vienne avant la propriété `"b"` ou non.

```html
<div itemscope>
  <p itemprop="a">1</p>
  <p itemprop="a">2</p>
  <p itemprop="b">test</p>
</div>
```

Voici plusieurs exemples équivalents&nbsp;:

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

### Représenter des données structurées pour un livre

Cet exemple utilise des attributs microdata pour représenter les données structurées suivantes&nbsp;:

<table class="standard-table">
  <tbody>
    <tr>
      <td rowspan="4">itemscope</td>
      <td>itemtype: itemid</td>
      <td colspan="2">https://schema.org/Book: urn:isbn:0-374-22848-5</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>title</td>
      <td>Les hiboux des glaces orientales</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>author</td>
      <td>Jonathan C Slaght</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>datePublished</td>
      <td>2020-08-04</td>
    </tr>
  </tbody>
</table>

#### HTML

```html
<dl
  itemscope
  itemtype="https://schema.org/Book"
  itemid="urn:isbn:0-374-22848-5<">
  <dt>Titre</dt>
  <dd itemprop="title">Les hiboux des glaces orientales</dd>
  <dt>Auteur</dt>
  <dd itemprop="author">Jonathan C Slaght</dd>
  <dt>Date de publication</dt>
  <dd>
    <time itemprop="datePublished" datetime="2020-08-04">4 août 2020</time>
  </dd>
</dl>
```

#### Résultat

{{EmbedLiveSample("Représenter des données structurées pour un livre")}}

## Spécifications

{{Specifications}}

## Voir aussi

- [Tous les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)
- Les autres attributs universels relatifs aux microdonnées&nbsp;:
  - [`itemid`](/fr/docs/Web/HTML/Reference/Global_attributes/itemid)
  - [`itemref`](/fr/docs/Web/HTML/Reference/Global_attributes/itemref)
  - [`itemscope`](/fr/docs/Web/HTML/Reference/Global_attributes/itemscope)
  - [`itemtype`](/fr/docs/Web/HTML/Reference/Global_attributes/itemtype)
