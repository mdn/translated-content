---
title: Réaliser des dispositions courantes avec les grilles
short-title: Dispositions courantes des grilles
slug: Web/CSS/Guides/Grid_layout/Common_grid_layouts
l10n:
  sourceCommit: 483ce811e1ea52cb2d9d2a5af0c4d1c4d591ea4a
---

Pour compléter cette [série de guides sur la mise en page en grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout#guides), nous allons passer en revue plusieurs mises en page différentes, qui illustrent certaines des techniques que vous pouvez utiliser lors de la conception avec la disposition en grille. Nous examinons un exemple utilisant {{CSSxRef("grid-template-areas")}}, un système de grille flexible à 12 colonnes, ainsi qu'une liste de produits utilisant le placement automatique. Comme vous pouvez le constater à travers ces exemples, il existe souvent plusieurs façons d'obtenir les résultats souhaités avec la mise en page en grille CSS. Choisissez la méthode qui vous semble la plus adaptée aux problèmes que vous rencontrez et aux conceptions que vous devez mettre en œuvre.

## Une disposition adaptative avec une à trois colonnes en utilisant `grid-template-areas`

De nombreux sites web sont des variantes de ce type de mise en page, comprenant du contenu, des barres latérales, un en-tête et un pied de page. Dans le cadre d'une conception adaptative, vous pouvez choisir d'afficher la disposition en une seule colonne, en ajoutant une barre latérale à partir d'un certain point de rupture, puis de passer à une mise en page à trois colonnes pour les écrans plus larges.

![Trois dispositions différentes créées en redéfinissant la grille à deux points de rupture.](11-responsive-areas.png)

Nous allons créer cette disposition à l'aide des _zones de modèle nommées_ que nous avons découvertes dans le guide [Zones de modèle de la grille](/fr/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas) guide.

Le balisage est un conteneur avec des éléments à l'intérieur pour un en-tête, un pied de page, le contenu principal, la navigation, une barre latérale et un bloc pour placer de la publicité.

```css hidden
* {
  box-sizing: border-box;
}
.enveloppe {
  max-width: 1024px;
  margin: 0 auto;
  font:
    1.2em "Helvetica",
    "Arial",
    sans-serif;
}

.enveloppe > * {
  border: 2px solid #f08c00;
  background-color: #ffec99;
  border-radius: 5px;
  padding: 10px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
```

```html
<div class="enveloppe">
  <header class="en-tete-principal">L'en-tête</header>
  <nav class="navigation-principale">
    <ul>
      <li><a href="">Nav 1</a></li>
      <li><a href="">Nav 2</a></li>
      <li><a href="">Nav 3</a></li>
    </ul>
  </nav>
  <article class="contenu">
    <h1>L'article principal</h1>
    <p>
      Dans cette disposition, on affiche les zones dans le même ordre que dans
      le document pour les écrans dont la largeur est inférieure à 500 pixels.
      On passe à une disposition sur deux colonnes ou trois colonnes en
      redéfinissant la grille et le placement des objets sur la grille.
    </p>
  </article>
  <aside class="lateral">Barre latérale</aside>
  <div class="publicite">Publicité</div>
  <footer class="pied-page-principal">Le pied de page</footer>
</div>
```

Comme nous utilisons {{CSSxRef("grid-template-areas")}} pour créer la disposition, nous devons nommer les zones en dehors de toute [requête de média](/fr/docs/Web/CSS/Guides/Media_queries/Using). Nous nommons les zones à l'aide de la propriété {{CSSxRef("grid-area")}}.

```css
.en-tete-principal {
  grid-area: en-tete;
}
.contenu {
  grid-area: contenu;
}
.navigation-principale {
  grid-area: navigation;
}
.lateral {
  grid-area: lateral;
}
.publicite {
  grid-area: publicite;
}
.pied-page-principal {
  grid-area: pied-page;
}
```

Comme nous n'avons pas encore créé de disposition, les éléments ont maintenant des noms que nous pouvons utiliser à cette fin. En restant en dehors de toute requête de média, nous allons maintenant configurer la disposition pour la largeur mobile. Ici, nous gardons tout dans l'ordre source pour éviter tout décalage entre la source et l'affichage comme décrit dans le guide [de grille CSS et accessibilité](/fr/docs/Web/CSS/Guides/Grid_layout/Accessibility). Nous n'avons pas défini explicitement de pistes de colonnes ou de lignes&nbsp;; cette disposition dicte une seule colonne et crée des lignes au fur et à mesure pour chaque élément dans la grille implicite.

```css
.enveloppe {
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
    "en-tete"
    "navigation"
    "contenu"
    "lateral"
    "publicite"
    "pied-page";
}
```

Une fois notre disposition mobile en place, nous pouvons maintenant ajouter une requête {{CSSxRef("@media")}} pour adapter cette disposition aux écrans plus grands disposant de suffisamment d'espace pour afficher deux colonnes.

```css
@media (min-width: 500px) {
  .enveloppe {
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      "en-tete    en-tete"
      "navigation navigation"
      "lateral    contenu"
      "publicite  pied-page";
  }
  nav ul {
    display: flex;
    justify-content: space-between;
  }
}
```

Vous pouvez voir la disposition se former dans la valeur de {{CSSxRef("grid-template-areas")}}. Un `en-tete` s'étend sur deux colonnes, tout comme la `navigation`. Sur la troisième ligne, nous plaçons la barre latérale (`lateral`) à côté du `contenu`. Nous plaçons le contenu de la `publicite` sur la quatrième ligne afin qu'il apparaisse sous la barre latérale. Le `pied-page` se trouve à côté sous le contenu. Nous utilisons [la disposition en boîte flexible CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout) sur la navigation pour espacer uniformément les éléments de navigation sur une ligne.

Nous pouvons maintenant ajouter un dernier point d'arrêt pour les écrans plus larges capables d'afficher une disposition à trois colonnes.

```css
@media (width >= 700px) {
  .enveloppe {
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas:
      "en-tete    en-tete   en-tete"
      "navigation contenu   lateral"
      "navigation contenu   publicite"
      "pied-page  pied-page pied-page";
  }
  nav ul {
    flex-direction: column;
  }
}
```

La disposition à trois colonnes possède deux colonnes latérales de `1fr` et une colonne centrale de `4fr`. Cela signifie que l'espace disponible dans le conteneur est divisé en six parties et attribué proportionnellement à nos trois pistes — une partie à chaque colonne latérale et quatre parties à la colonne centrale.

Dans cette disposition, la navigation est affichée dans la colonne de gauche, à côté du contenu. Dans la colonne de droite, nous avons la barre latérale et en dessous les publicités (`publicite`). Le pied de page s'étend maintenant sur toute la largeur en bas de la disposition. Là encore, nous utilisons la boîte flexible pour afficher la navigation, mais cette fois-ci en colonne plutôt qu'en rangée.

{{EmbedLiveSample("Une disposition adaptative avec une à trois colonnes en utilisant `grid-template-areas`", 800, 470)}}

Cet exemple simple montre comment réorganiser la disposition d'une grille en fonction de différents points de rupture. Plus précisément, nous modifions l'emplacement du bloc `publicite` en fonction des différentes configurations de colonnes. Cette méthode utilisant des zones nommées peut s'avérer très utile, notamment lors de la phase de prototypage. Vous pouvez peut-être trouver plus facile d'utiliser des noms plutôt que des numéros lorsque vous testez différents emplacements pour les éléments de la grille.

## Une disposition flexible avec 12 colonnes

Les cadriciels (<i lang="en">frameworks</i> en anglais) et systèmes de grille CSS utilisent généralement des grilles flexibles à 12 ou 16 colonnes. Nous pouvons créer ce type de système à l'aide de la disposition de grille CSS. À titre d'exemple, créons une grille flexible à 12 colonnes avec 12 pistes de colonne d'une unité `1fr`, chacune comportant une ligne de départ nommée `col-start`. Cela signifie que nous avons douze lignes de grille nommées `col-start`.

```css hidden
.enveloppe {
  max-width: 1024px;
  margin: 0 auto;
  font:
    1.2em "Helvetica",
    "Arial",
    sans-serif;
}
.enveloppe > * {
  border: 2px solid #f08c00;
  background-color: #ffec99;
  border-radius: 5px;
  padding: 10px;
}
```

```css
.enveloppe {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: 20px;
}
```

Pour voir comment ce système fonctionne, on place quatre éléments dans le conteneur englobant.

```html
<div class="enveloppe">
  <div class="element1">
    Début à la première ligne verticale, s'étend sur 3 colonnes.
  </div>
  <div class="element2">
    Début à la ligne verticale 6, s'étend sur 4 colonnes et deux lignes.
  </div>
  <div class="element3">
    Début à la ligne verticale 2 de la ligne 2, s'étend sur 2 colonnes.
  </div>
  <div class="element4">
    Début à la ligne verticale 3, s'étend jusqu'à la fin de la grille.
  </div>
</div>
```

Et on place ces éléments sur la grille en utilisant les noms utilisés précédemment, avec le mot-clé `span`.

```css
.element1 {
  grid-column: col-start / span 3;
}
.element2 {
  grid-column: col-start 6 / span 4;
  grid-row: 1 / 3;
}
.element3 {
  grid-column: col-start 2 / span 2;
  grid-row: 2;
}
.element4 {
  grid-column: col-start 3 / -1;
  grid-row: 3;
}
```

{{EmbedLiveSample("Une disposition flexible avec 12 colonnes", 800, 420)}}

Comme décrit dans le [guide d'utilisation de lignes nommées d'une grille](/fr/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines), nous utilisons les lignes nommées pour placer nos éléments. Comme nous avons 12 lignes portant toutes le même nom, nous utilisons le nom et l'indice de la ligne. Si vous le préférez, vous pouvez utiliser directement l'indice de la ligne et éviter les lignes nommées.

Plutôt que de définir le numéro de la ligne de fin, nous définissons le nombre de pistes que cet élément doit couvrir en utilisant le mot-clé `span`. Avec un système de disposition à plusieurs colonnes, cette méthode peut sembler plus intuitive pour les personnes qui pensent aux blocs en fonction du nombre de pistes de la grille qu'ils couvrent, puis qui l'adaptent aux différents points de rupture. Pour voir comment les blocs s'alignent sur les pistes, utilisez l'inspecteur de grille dans les outils de développement de votre navigateur&nbsp;; il montre probablement clairement comment les éléments sont placés.

![Affichage des éléments placés sur la grille avec les pistes de grille mises en évidence dans les outils de développement de Firefox.](11-grid-inspector-12col.png)

Nous n'avons pas besoin d'ajouter du balisage pour créer une ligne. Les systèmes de grille des cadriciels CSS le font souvent pour empêcher les éléments de remonter dans la ligne supérieure avec les navigateurs qui ne prennent pas en charge la disposition en grille CSS. Cependant, ce point est désormais sans objet — tous les navigateurs modernes prennent en charge la disposition en grille CSS depuis longtemps. Les grilles CSS nous permettent de placer les éléments sur des lignes sans risquer de les voir remonter dans la ligne supérieure lorsque celle-ci reste vide. Grâce à ce placement _strict_ des colonnes et des lignes, nous pouvons également laisser facilement des espaces vides dans notre disposition. Nous n'avons pas non plus besoin de classes spéciales pour décaler les éléments dans la grille. Il nous suffit de définir la ligne de début et la ligne de fin de l'élément.

## Construire une disposition avec ce système à 12 colonnes

Pour voir comment cette méthode de disposition fonctionne en pratique, nous pouvons créer le même plan que celui que nous avons créé avec {{CSSxRef("grid-template-areas")}}, cette fois en utilisant le système de grille à 12 colonnes. Commençons avec le même balisage que celui utilisé pour l'exemple des zones de modèle de grille.

```css hidden
* {
  box-sizing: border-box;
}
.enveloppe {
  max-width: 1024px;
  margin: 0 auto;
  font:
    1.2em "Helvetica",
    "Arial",
    sans-serif;
}

.enveloppe > * {
  border: 2px solid #f08c00;
  background-color: #ffec99;
  border-radius: 5px;
  padding: 10px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
```

```html
<div class="enveloppe">
  <header class="en-tete-principal">L'en-tête</header>
  <nav class="navigation-principale">
    <ul>
      <li><a href="">Nav 1</a></li>
      <li><a href="">Nav 2</a></li>
      <li><a href="">Nav 3</a></li>
    </ul>
  </nav>
  <article class="contenu">
    <h1>L'article principal</h1>
    <p>
      Dans cette disposition, on affiche les zones dans le même ordre que dans
      le document pour les écrans dont la largeur est inférieure à 500 pixels.
      On passe à une disposition sur deux colonnes ou trois colonnes en
      redéfinissant la grille et le placement des objets sur la grille.
    </p>
  </article>
  <aside class="lateral">Barre latérale</aside>
  <div class="publicite">Publicité</div>
  <footer class="pied-page-principal">Le pied de page</footer>
</div>
```

Nous initialisons la grille avec nos 12 colonnes&nbsp;:

```css
.enveloppe {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: 20px;
}
```

Nous allons à nouveau créer une disposition adaptive, en utilisant cette fois-ci des lignes nommées. Chaque point de rupture utilise une grille à 12 colonnes. Cependant, le nombre de pistes que les éléments occupent varie en fonction de la taille de l'écran.

Nous commençons par {{Glossary("mobile first", "le mobile en premier")}}. Pour les écrans les plus étroits, nous souhaitons que les éléments conservent leur ordre d'origine et s'étendent tous sur toute la largeur de la grille.

```css
.enveloppe > * {
  grid-column: col-start / span 12;
}
```

Au point de rupture suivant, nous souhaitons une disposition à deux colonnes. Notre en-tête et notre barre de navigation occupent toujours toute la grille, nous n'avons donc pas besoin de leur attribuer de positionnement particulier. La barre latérale commence à la première ligne de colonne nommée `col-start` et s'étend sur 3 lignes. Elle se place après la ligne 3, car l'en-tête et la barre de navigation occupent les deux premières pistes de ligne.

Le panneau `publicite` se trouve sous la barre latérale, à partir de la ligne 4 de la grille. Viennent ensuite le contenu et le pied de page, qui commencent à partir de la colonne 4 et s'étendent sur neuf pistes, occupant ainsi toute la largeur de la grille.

```css
@media (min-width: 500px) {
  .lateral {
    grid-column: col-start / span 3;
    grid-row: 3;
  }
  .publicite {
    grid-column: col-start / span 3;
    grid-row: 4;
  }
  .contenu,
  .pied-page-principal {
    grid-column: col-start 4 / span 9;
  }
  nav ul {
    display: flex;
    justify-content: space-between;
  }
}
```

Enfin, pour les écrans dont la taille dépasse notre plus grand point de rupture, nous définissons une version à trois colonnes de cette disposition. L'en-tête continue de s'étendre sur toute la largeur de la grille, mais la navigation descend désormais pour former la première barre latérale, suivie du contenu, puis de la barre latérale adjacente. Le pied de page s'étend désormais lui aussi sur toute la largeur de la disposition.

```css
@media (min-width: 700px) {
  .navigation-principale {
    grid-column: col-start / span 2;
    grid-row: 2 / 4;
  }
  .contenu {
    grid-column: col-start 3 / span 8;
    grid-row: 2 / 4;
  }
  .lateral {
    grid-column: col-start 11 / span 2;
    grid-row: 2;
  }
  .publicite {
    grid-column: col-start 11 / span 2;
    grid-row: 3;
  }
  .pied-page-principal {
    grid-column: col-start / span 12;
  }
  nav ul {
    flex-direction: column;
  }
}
```

{{EmbedLiveSample("Construire une disposition avec ce système à 12 colonnes", 800, 470)}}

Une fois encore, vérifiez l'inspecteur de grille dans les outils de développement de votre navigateur pour voir comment la disposition s'est formée.

![Capture d'écran de la disposition avec les pistes de la grille qui sont mises en avant par l'inspecteur.](11-grid-inspector-12col-layout.png)

Une chose à noter lors de la création de cette disposition est que nous n'avons pas eu besoin de positionner explicitement chaque élément sur la grille à chaque point de rupture. Nous avons hérité du placement défini pour les points de rupture précédents — un avantage de l'approche «&nbsp;mobile en premier&nbsp;». Nous avons également tiré parti du placement automatique de la grille. En conservant les éléments dans un ordre logique, le placement automatique nous facilite grandement la tâche pour positionner les éléments sur la grille.

## Une liste produit utilisant le placement automatique

Dans ce dernier exemple de ce guide, nous créons une disposition qui repose entièrement sur le placement automatique.

De nombreuses dispositions sont essentiellement constituées d'ensembles de «&nbsp;cartes&nbsp;» ou «&nbsp;tuiles&nbsp;» — fiches produits, galeries d'images, etc. Une grille permet de créer ces listes de manière adaptative sans avoir à ajouter de [requêtes de médias](/fr/docs/Web/CSS/Guides/Media_queries). Dans cet exemple, nous combinons les dispositions de grille CSS et de boîte flexible pour créer une disposition de base pour une liste de produits.

Le balisage de la liste consiste en une liste non ordonnée d'éléments. Chaque élément contient un titre, du texte de hauteur variable et un lien d'appel à l'action.

```html
<ul class="liste">
  <li>
    <h2>Produit n°1</h2>
    <div class="corps">
      <p>Le descriptif du produit est écrit ici.</p>
    </div>
    <div class="appel-action">
      <a href="">Faire quelque chose !</a>
    </div>
  </li>
  <li>
    <h2>Produit n°2</h2>
    <div class="corps">
      <p>Le descriptif du produit est écrit ici.</p>
    </div>
    <div class="appel-action">
      <a href="">Faire quelque chose !</a>
    </div>
  </li>
  <li class="large">
    <h2>Produit n°3</h2>
    <div class="corps">
      <p>Le descriptif du produit est écrit ici.</p>
      <p>Ce produit possède un descriptif beaucoup plus long.</p>
      <p>Vraiment plus long</p>
      <p>Peut-être faut-il le gérer différemment ?</p>
    </div>
    <div class="appel-action">
      <a href="">Faire quelque chose !</a>
    </div>
  </li>
  <li>
    <h2>Produit n°4</h2>
    <div class="corps">
      <p>Le descriptif du produit est écrit ici.</p>
    </div>
    <div class="appel-action">
      <a href="">Faire quelque chose !</a>
    </div>
  </li>
  <li>
    <h2>Produit n°5</h2>
    <div class="corps">
      <p>Le descriptif du produit est écrit ici.</p>
    </div>
    <div class="appel-action">
      <a href="">Faire quelque chose !</a>
    </div>
  </li>
</ul>
```

```css hidden
* {
  box-sizing: border-box;
}
img {
  max-width: 100%;
  display: block;
}
body {
  font:
    1.2em "Helvetica",
    "Arial",
    sans-serif;
}
a:link,
a:visited {
  text-decoration: none;
  color: #f08c00;
}

h2 {
  background-color: #f08c00;
  color: white;
  text-align: center;
  margin: 0;
  padding: 20px;
}
```

Nous allons créer une grille avec un nombre de colonnes flexible. Nous voulons qu'elles aient au moins 200 pixels de large et qu'elles partagent équitablement tout espace restant disponible — de sorte que nous obtenons toujours des pistes de colonnes de largeur égale. Nous y parvenons avec la fonction {{CSSxRef("minmax()")}} dans notre notation {{CSSxRef("repeat")}} pour le dimensionnement des pistes.

```css
.liste {
  list-style: none;
  margin: 2em;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

Lorsque nous ajoutons ce CSS, les éléments sont disposés en grille. Si nous réduisons ou agrandissons la fenêtre, le nombre de colonnes change — sans qu'il soit nécessaire d'ajouter des points d'arrêt avec des requêtes média et sans avoir besoin de redéfinir la grille.

Nous pouvons ensuite améliorer l'intérieur des boîtes en utilisant un peu de boîte flexible. Nous définissons l'élément de la liste sur `display: flex` et la {{CSSxRef("flex-direction")}} sur `column`. Nous pouvons ensuite utiliser une marge automatique sur la `.appel-action` pour pousser cette barre vers le bas de la boîte.

```css
.liste li {
  border: 1px solid #ffe066;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
.liste .appel-action {
  margin-block-start: auto;
  border-block-start: 1px solid #ffe066;
  padding: 10px;
  text-align: center;
}
.liste .corps {
  padding: 10px;
}
```

C'est l'une des principales raisons d'utiliser les boîtes flexibles plutôt que la disposition en grille CSS. Si vous alignez ou distribuez du contenu dans une seule dimension, c'est un cas d'utilisation de la boîte flexible.

{{EmbedLiveSample("Une liste produit utilisant le placement automatique", 800, 970)}}

## Empêcher les espaces avec le mot-clé `dense`

Tout cela semble désormais assez complet. Cependant, il arrive parfois que certaines cartes contiennent beaucoup plus de contenu que les autres. Il peut être intéressant de les faire s'étendre sur deux colonnes, afin qu'elles ne soient pas trop hautes. Nous ajoutons une classe `large` à l'élément le plus large, puis une règle lui attribuant une valeur de `span 2` pour {{CSSxRef("grid-column-end")}}. Lorsque cet élément est rencontré, il est attribué à deux pistes. Cela signifie qu'à certains points de rupture, nous obtenons un espace vide dans la grille — là où il n'y a pas assez d'espace pour disposer un élément sur deux pistes.

![La disposition présente des espaces vides, car il n'y a pas assez d'espace pour disposer un élément sur deux pistes.](11-grid-auto-flow-sparse.png)

Nous pouvons faire en sorte que la grille comble ces espaces vides en définissant {{CSSxRef("grid-auto-flow", "grid-auto-flow: dense")}} sur le conteneur de la grille. Soyez prudent lorsque vous effectuez cette opération, car cela peut entraîner un bouleversement de l'ordre logique d'origine des éléments. Vous ne devez le faire que si vos éléments n'ont pas d'ordre défini. De plus, soyez conscient des [problèmes d'accessibilité et de réorganisation](/fr/docs/Web/CSS/Guides/Grid_layout/Accessibility#une_réorganisation_visuelle_et_non_logique) résultant du fait que l'ordre de tabulation suit l'ordre source et non votre affichage réorganisé.

```html hidden
<ul class="liste">
  <li>
    <h2>Produit n°1</h2>
    <div class="corps">
      <p>Le descriptif du produit est écrit ici.</p>
    </div>
    <div class="appel-action">
      <a href="">Faire quelque chose !</a>
    </div>
  </li>
  <li>
    <h2>Produit n°2</h2>
    <div class="corps">
      <p>Le descriptif du produit est écrit ici.</p>
    </div>
    <div class="appel-action">
      <a href="">Faire quelque chose !</a>
    </div>
  </li>
  <li class="large">
    <h2>Produit n°3</h2>
    <div class="corps">
      <p>Le descriptif du produit est écrit ici.</p>
      <p>Ce produit possède un descriptif beaucoup plus long.</p>
      <p>Vraiment plus long</p>
      <p>Peut-être faut-il le gérer différemment ?</p>
    </div>
    <div class="appel-action">
      <a href="">Faire quelque chose !</a>
    </div>
  </li>
  <li>
    <h2>Produit n°4</h2>
    <div class="corps">
      <p>Le descriptif du produit est écrit ici.</p>
    </div>
    <div class="appel-action">
      <a href="">Faire quelque chose !</a>
    </div>
  </li>
  <li>
    <h2>Produit n°5</h2>
    <div class="corps">
      <p>Le descriptif du produit est écrit ici.</p>
    </div>
    <div class="appel-action">
      <a href="">Faire quelque chose !</a>
    </div>
  </li>
</ul>
```

```css hidden
* {
  box-sizing: border-box;
}

img {
  max-width: 100%;
  display: block;
}

body {
  font:
    1.2em "Helvetica",
    "Arial",
    sans-serif;
}

a:link,
a:visited {
  text-decoration: none;
  color: #f08c00;
}

h2 {
  background-color: #f08c00;
  color: white;
  text-align: center;
  margin: 0;
  padding: 20px;
}

.liste li {
  border: 1px solid #ffe066;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

.liste .appel-action {
  margin-block-start: auto;
  border-block-start: 1px solid #ffe066;
  padding: 10px;
  text-align: center;
}

.liste .corps {
  padding: 10px;
}
```

```css
.liste {
  list-style: none;
  margin: 2em;
  display: grid;
  gap: 20px;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
.liste .large {
  grid-column-end: span 2;
}
```

{{EmbedLiveSample("Empêcher les espaces avec le mot-clé `dense`", 800, 880)}}

Utiliser le placement automatique avec certaines règles appliquées à certains éléments est très utile et peut aider avec le contenu que vous ne pouvez pas contrôler, comme la sortie d'un CMS, où vous avez des éléments répétés et pouvez utiliser des [pseudo-classes structurelles](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes#pseudo-classes_structurelles_darbre) pour les cibler.

## Pour aller plus loin

La disposition en grille CSS offre une multitude de possibilités. La meilleure façon d'apprendre à utiliser la disposition en grille est de continuer à créer des exemples comme ceux que nous avons vus ici. Choisissez une disposition sur un site adaptatif qui vous plaît et essayez de la reproduire à l'aide de la grille. Vous pouvez même vous inspirer de magazines ou d'autres sources hors du web.

- [La disposition de grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout)
- [Disposition CSS&nbsp;: Grilles](/fr/docs/Learn_web_development/Core/CSS_layout/Grids)
- [Un guide complet sur les grilles CSS <sup>(angl.)</sup>](https://css-tricks.com/complete-guide-css-grid-layout/) sur CSS-Tricks (2021)
- [Les grilles CSS par l'exemple <sup>(angl.)</sup>](https://gridbyexample.com/)
- [Exemples de dispositions avec les grilles CSS <sup>(angl.)</sup>](https://www.quackit.com/css/grid/examples/css_grid_website_layout_examples.cfm) sur quackit.com
