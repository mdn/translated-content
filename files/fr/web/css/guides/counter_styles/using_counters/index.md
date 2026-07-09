---
title: Utiliser les compteurs CSS
short-title: Utiliser les compteurs
slug: Web/CSS/Guides/Counter_styles/Using_counters
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Les **compteurs CSS** permettent d'ajuster l'apparence du contenu en fonction de son emplacement dans un document.
Par exemple, vous pouvez utiliser des compteurs pour numéroter automatiquement les titres d'une page web ou pour modifier la numérotation des listes ordonnées.

Les compteurs sont, en substance, des variables gérées par le CSS dont les valeurs peuvent être augmentées ou diminuées par des règles CSS qui comptabilisent le nombre de fois où elles sont utilisées. Les éléments suivants ont une incidence sur les valeurs des compteurs d'un élément&nbsp;:

1. Les compteurs sont [hérités](#héritage_et_propagation_des_compteurs) de l'élément parent ou reçus d'un voisin précédent.
2. Les nouveaux compteurs sont instanciés à l'aide de la propriété {{CSSxRef("counter-reset")}}.
3. Les compteurs sont incrémentés à l'aide de la propriété {{CSSxRef("counter-increment")}}.
4. Les compteurs sont directement définis à une valeur à l'aide de la propriété {{CSSxRef("counter-set")}}.

Vous pouvez définir vos propres compteurs nommés, et vous pouvez également manipuler le compteur `list-item` qui est créé par défaut pour toutes les listes ordonnées.

## Utiliser les compteurs

Pour utiliser un compteur, il doit d'abord être initialisé à une valeur avec la propriété {{CSSxRef("counter-reset")}}.
La valeur du compteur peut être augmentée ou diminuée à l'aide de la propriété {{CSSxRef("counter-increment")}} et peut être directement définie à une valeur spécifique à l'aide de la propriété {{CSSxRef("counter-set")}}.
La valeur actuelle d'un compteur est affichée à l'aide de la fonction {{CSSxRef("counter()")}} ou {{CSSxRef("counters()")}}, généralement dans une propriété {{CSSxRef("content")}} d'un [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements).

Les compteurs ne peuvent être définis, réinitialisés ou incrémentés que dans des éléments qui génèrent des boîtes.
Par exemple, si un élément est défini sur `display: none`, toute opération de compteur sur cet élément est ignorée.

Les propriétés des compteurs peuvent être limitées à des éléments spécifiques en utilisant la compartimentation de style, qui est décrite plus en détail dans la propriété {{CSSxRef("contain")}}.

### Manipuler la valeur d'un compteur

Pour utiliser un compteur CSS, il faut d'abord réinitialiser sa valeur (0 par défaut) à l'aide de {{CSSxRef("counter-reset")}}. La propriété peut également être utilisée pour changer la valeur du compteur à un nombre spécifique.

Ci-dessous, nous initialisons un compteur nommé `section` à la valeur par défaut (0).

```css
counter-reset: section;
```

Vous pouvez également initialiser plusieurs compteurs, en définissant éventuellement une valeur initiale pour chacun.
Ci-dessous, nous initialisons les compteurs `section` et `topic` à la valeur par défaut, et le compteur `page` à 3.

```css
counter-reset: section page 3 topic;
```

Une fois initialisé, la valeur d'un compteur peut être augmentée ou diminuée à l'aide de {{CSSxRef("counter-increment")}}.
Par exemple, la déclaration suivante incrémente le compteur `section` de un à chaque balise `h3`.

```css
h3::before {
  counter-increment: section; /* Incrémente la valeur du compteur section de 1 */
}
```

Vous pouvez définir le montant de l'augmentation ou de la diminution après le nom du compteur. Il peut s'agir d'un nombre positif ou négatif, mais par défaut, c'est `1` si aucun entier n'est fourni.

En plus d'être augmentés ou diminués, les compteurs peuvent également être définis explicitement à une valeur à l'aide de la propriété {{CSSxRef("counter-set")}}.

```css
.done::before {
  counter-set: section 20;
}
```

Le nom du compteur ne doit pas être `none`, `inherit` ou `initial`&nbsp;; sinon, la déclaration est ignorée.

### Afficher un compteur

Pour ajouter un compteur au contenu d'un élément, il faut utiliser la fonction {{CSSxRef("counter")}} ou {{CSSxRef("counters")}} dans une propriété {{CSSxRef("content")}}.

La fonction `counter()` prend deux formes&nbsp;: `counter(nom)` ou `counter(nom, style)`. Le texte ainsi généré est celui du compteur le plus proche avec ce nom. Le contenu est mis en forme avec le style indiqué (par défaut, c'est `decimal`).

La fonction `counters()` prend également deux formes&nbsp;: `counters(nom, chaine)` ou `counters(nom, chaine style)`. Le texte généré a la valeur de l'ensemble des compteurs présents dans la portée du pseudo-élément (du plus loin au plus proche), séparés par la chaîne de caractères passée en argument. Les compteurs sont mis en forme avec le style indiqué (par défaut, c'est `decimal`).

### Exemple simple

La valeur d'un compteur peut être affichée en utilisant soit la fonction {{CSSxRef("counter()")}} soit la fonction {{CSSxRef("counters()")}} dans une propriété {{CSSxRef("content")}}.

Par exemple, la déclaration suivante utilise `counter()` pour préfixer chaque titre `h3` avec le texte `Section <number>:`, où `<number>` est la valeur du compteur en décimal (le style d'affichage par défaut)&nbsp;:

```css
body {
  counter-reset: section; /* On initialise le compteur à 0 */
}

h3::before {
  counter-increment: section; /* On incrémente le compteur section */
  content: "Section " counter(section) " : "; /* On affiche le compteur */
}
```

La fonction {{CSSxRef("counter()")}} est utilisée lorsque la numérotation des niveaux imbriqués n'inclut pas le contexte des niveaux parents.
Par exemple, ici chaque niveau imbriqué recommence à un&nbsp;:

```plain
1 Un
  1 Un imbriqué
  2 Deux imbriqué
2 Deux
  1 Un imbriqué
  2 Deux imbriqué
  3 Trois imbriqué
3 Trois
```

La fonction {{CSSxRef("counters()")}} est utilisée lorsque la numérotation des niveaux imbriqués doit inclure le compte des niveaux parents.
Par exemple, vous pouvez l'utiliser pour disposer les sections comme indiqué&nbsp;:

```plain
1 Un
  1.1 Un imbriqué
  1.2 Deux imbriqué
2 Deux
  2.1 Un imbriqué
  2.2 Deux imbriqué
  2.3 Trois imbriqué
3 Trois
```

La fonction {{CSSxRef("counter()")}} a deux formes&nbsp;: `counter(<counter-name>)` et `counter(<counter-name>, <counter-style>)`.
Le texte généré est la valeur du compteur le plus interne du nom donné en cours à l'élément pseudo.

La fonction {{CSSxRef("counters()")}} a également deux formes&nbsp;: `counters(<counter-name>, <separator>)` et `counters(<counter-name>, <separator>, <counter-style>)`.
Le texte généré est la valeur de tous les compteurs portant le nom donné en cours à l'élément pseudo, du plus externe au plus interne, séparés par la chaîne de caractères définie (`<separator>`).

Le compteur est rendu dans le `<counter-style>` défini pour les deux méthodes (`decimal` par défaut).
Vous pouvez utiliser n'importe quelle valeur de {{CSSxRef("list-style-type")}} ou vos propres [styles personnalisés](/fr/docs/Web/CSS/Guides/Counter_styles).

Des exemples montrant l'utilisation de `counter()` et `counters()` sont donnés ci-dessous dans [un exemple simple](#exemple_simple) et [un exemple de compteur imbriqué](#exemple_de_compteur_imbriqué), respectivement.

### Compteurs inversés

Un compteur inversé est un compteur destiné à diminuer (compter à rebours) plutôt qu'à augmenter.
Les compteurs inversés sont créés en utilisant la notation de fonction `reversed()` lors de la nomination du compteur dans {{CSSxRef("counter-reset")}}.

Les compteurs inversés ont une valeur initiale par défaut égale au nombre d'éléments (contrairement aux compteurs normaux, qui ont une valeur par défaut de 0).
Cela permet de mettre en œuvre un compteur qui compte à partir du nombre d'éléments jusqu'à un.

Par exemple, pour créer un compteur inversé nommé `section` avec une valeur initiale par défaut, vous utilisez la syntaxe suivante&nbsp;:

```css
counter-reset: reversed(section);
```

Vous pouvez bien sûr définir n'importe quelle valeur initiale que vous souhaitez.

La valeur du compteur est diminuée en définissant une valeur négative pour {{CSSxRef("counter-increment")}}.

> [!NOTE]
> Vous pouvez également utiliser {{CSSxRef("counter-increment")}} pour diminuer un compteur non inversé.
> Le principal avantage d'utiliser un compteur inversé est la valeur initiale par défaut, et que le compteur `list-item` diminue automatiquement les compteurs inversés.

### Héritage et propagation des compteurs

Chaque élément ou pseudo-élément a un ensemble de compteurs dans le scope de cet élément. Les compteurs initiaux de l'ensemble sont reçus de l'élément parent et du voisin précédent. Les valeurs des compteurs sont reçues du dernier descendant du voisin précédent, du dernier voisin, ou du parent.

Lorsqu'un élément déclare un compteur, le compteur est imbriqué à l'intérieur du compteur portant le même nom reçu du parent. Si le parent n'a pas de compteur portant le même nom, le compteur est ajouté à l'ensemble des compteurs de l'élément tel quel. Un compteur portant le même nom reçu du voisin précédent est supprimé de l'ensemble des compteurs.

La fonction {{CSSxRef("counter()")}} récupère le compteur le plus interne avec le nom fourni. Et la fonction {{CSSxRef("counters()")}} récupère l'ensemble de l'arbre des compteurs avec le nom donné.

Dans l'exemple suivant, nous démontrons un compteur hérité nommé `primaire` et un compteur voisin nommé `secondaire`. Tous les éléments `<div>` affichent leurs compteurs en utilisant la fonction `counters()`. Notez que tous les compteurs ont été créés en utilisant la propriété `counter-reset`, et aucun des compteurs n'a été incrémenté.

```html
<section>
  counter-reset: primaire 3
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div class="meme-nom-primaire">D</div>
  <span> counter-reset: primaire 6</span>
  <div>E</div>
  <div class="nouveau-nom-secondaire">F</div>
  <span> counter-reset: secondaire 5</span>
  <div>G</div>
  <div>H</div>
  <div class="meme-nom-secondaire">I&nbsp;</div>
  <span> counter-reset: secondaire 10</span>
  <div>J&nbsp;</div>
  <div>K</div>
  <section></section>
</section>
```

```css hidden
.meme-nom-primaire,
.nouveau-nom-secondaire,
.meme-nom-secondaire {
  display: inline-block;
}

@counter-style style {
  system: numeric;
  symbols: "" "1" "2" "3" "4" "5" "6" "7" "8" "9" "10";
}
```

```css
/* créer le compteur 'primaire' sur le parent des divs */
section {
  counter-reset: primaire 3;
}

div::after {
  content: " ('primaire' counters: " counters(primaire, "-", style)
    ", 'secondaire' counters: " counters(secondaire, "-", style) ")";
  color: blue;
}

/* créer un nouveau compteur 'primaire' */
.meme-nom-primaire {
  counter-reset: primaire 6;
}

/* créer un compteur 'secondaire' sur le div 'F' */
.nouveau-nom-secondaire {
  counter-reset: secondaire 5;
}

/* remplacer le compteur 'secondaire' du voisin */
.meme-nom-secondaire {
  counter-reset: secondaire 10;
}
```

{{EmbedLiveSample("Héritage et propagation des compteurs", "100%", 250)}}

L'élément de section initialise un compteur nommé `primaire` avec la valeur `3`, et tous les `<div>` enfants reçoivent le compteur `primaire` hérité. L'élément «&nbsp;D&nbsp;» crée un nouveau compteur `primaire` (valeur `6`) qui s'imbrique dans le compteur reçu du parent, donc l'élément a deux compteurs nommés `primaire` avec les valeurs `3` et `6`.

L'élément «&nbsp;F&nbsp;» crée le compteur `secondaire` (valeur `5`) pour la première fois, et il transmet le compteur au voisin suivant «&nbsp;G&nbsp;». L'élément «&nbsp;G&nbsp;» transmet le compteur à l'élément suivant «&nbsp;H&nbsp;» et ainsi de suite. Ensuite, l'élément «&nbsp;I&nbsp;» crée un nouveau compteur avec le même nom `secondaire` (valeur `10`), mais il supprime le compteur `secondaire` (valeur `5`) reçu du voisin précédent «&nbsp;H&nbsp;» et transmet son propre compteur à «&nbsp;J&nbsp;».

### Différences entre `counter-set` et `counter-reset`

La propriété {{CSSxRef("counter-set")}} met à jour un compteur existant et, si aucun compteur portant ce nom n'existe, un nouveau compteur est créé. La propriété {{CSSxRef("counter-reset")}} _crée toujours_ un nouveau compteur.

Dans l'exemple suivant, nous avons deux sous-listes à l'intérieur d'une liste parente. Chaque élément de la liste a été numéroté à l'aide d'un compteur nommé «&nbsp;element&nbsp;». La première sous-liste utilise la propriété {{CSSxRef("counter-set")}} et la deuxième sous-liste utilise la propriété {{CSSxRef("counter-reset")}} pour modifier le compteur «&nbsp;element&nbsp;».

```html
<ul class="parent">
  <li>A</li>
  <li>B</li>
  <li>
    C (le compteur mis à jour à l'aide de `counter-set`)
    <ul class="sous-liste-une">
      <li>sous-A</li>
      <li>sous-B</li>
    </ul>
  </li>
  <li>D</li>
  <li>
    E (un nouveau compteur créé à l'aide de `counter-reset`)
    <ul class="sous-liste-deux">
      <li>sous-A</li>
      <li>sous-B</li>
      <li>sous-C</li>
    </ul>
  </li>
  <li>F</li>
  <li>G</li>
</ul>
```

```css hidden
ul {
  list-style: none;
}
```

```css
/* créer un nouveau compteur pour la première fois */
.parent {
  counter-reset: element 0;
}

/* incrémenter le compteur sur chaque élément de la liste */
li {
  counter-increment: element;
}

/* afficher les numéros sur les éléments de la liste */
li::before {
  content: counter(element) " ";
}

/* modifier la valeur du compteur existant */
.sous-liste-une {
  counter-set: element 10;
}

/* créer un nouveau compteur */
.sous-liste-deux {
  counter-reset: element 0;
}
```

{{EmbedLiveSample("Différences entre `counter-set` et `counter-reset`", "100%", 300)}}

Remarquez comment les premiers éléments de la sous-liste commencent à recevoir des numéros à partir de `11`, et la numérotation se poursuit dans la liste parente. C'est dû au fait que la propriété `counter-set` met à jour le même compteur «&nbsp;element&nbsp;» déclaré sur l'élément `.parent`. Ensuite, remarquez comment les éléments de la deuxième sous-liste reçoivent une nouvelle numérotation à partir de `1` et les éléments de la liste parente après cela ne poursuivent pas la numérotation. C'est dû au fait que la propriété `counter-reset` a créé un nouveau compteur avec le même nom, donc les éléments de la liste parente ont continué à utiliser l'ancien compteur.

### Compteurs des éléments de liste

Les listes ordonnées, créées à l'aide des éléments {{HTMLElement("ol")}}, ont implicitement un compteur nommé `list-item`.

Comme pour les autres compteurs, celui-ci a une valeur initiale par défaut de 0 pour les compteurs croissants et «&nbsp;nombre d'éléments&nbsp;» pour les compteurs décroissants.
Contrairement aux compteurs créés par l'auteur·ice, `list-item` s'augmente ou se diminue _automatiquement_ de un pour chaque élément de la liste, selon que le compteur est inversé ou non.

Le compteur `list-item` peut être utilisé pour manipuler le comportement par défaut des listes ordonnées en utilisant CSS.
Par exemple, vous pouvez changer la valeur initiale par défaut, ou utiliser {{CSSxRef("counter-increment")}} pour modifier la façon dont les éléments de la liste s'augmentent ou se diminuent.

## Exemples

### Exemple simple

Cet exemple ajoute «&nbsp;Section \[la valeur du compteur] :&nbsp;» au début de chaque titre.

#### CSS

```css live-sample___exemple-simple
body {
  counter-reset: section; /* Définir un compteur nommé 'section', et sa valeur initiale est 0. */
}

h3::before {
  counter-increment: section; /* Incrémenter la valeur du compteur 'section' de 1 */
  content: "Section " counter(section) " : "; /* Afficher le mot 'Section ',
                                                la valeur du compteur 'section',
                                                et un deux-points avant le contenu de chaque h3 */
}
```

#### HTML

```html live-sample___exemple-simple
<h3>Introduction</h3>
<h3>Corps</h3>
<h3>Conclusion</h3>
```

#### Résultat

{{EmbedLiveSample("exemple-simple", "100%", 150)}}

### Exemple de compteur inversé

Cet exemple est le même que celui ci-dessus mais utilise un compteur inversé.
Si votre navigateur prend en charge la notation de fonction `reversed()`, le résultat ressemble à ceci&nbsp;:

![Compteur inversé](reversed_headings_basic.png)

#### CSS

```css
body {
  counter-reset: reversed(
    section
  ); /* Définir un compteur nommé 'section', et sa valeur initiale est 0. */
}

h3::before {
  counter-increment: section -1; /* Décrémenter la valeur du compteur 'section' de 1 */
  content: "Section " counter(section) ": "; /* Afficher le mot 'Section ',
                                                la valeur du compteur 'section',
                                                et un deux-points avant le contenu de chaque h3 */
}
```

#### HTML

```html
<h3>Introduction</h3>
<h3>Corps</h3>
<h3>Conclusion</h3>
```

#### Résultat

{{EmbedLiveSample("Exemple de compteur inversé", "100%", 150)}}

### Exemple plus sophistiqué

Un compteur n'a pas besoin d'être affiché chaque fois qu'il est augmenté.
Cet exemple compte tous les liens avec le compteur affiché uniquement lorsqu'un lien n'a pas de texte, comme un remplacement pratique.

#### CSS

```css
:root {
  counter-reset: lien;
}

a[href] {
  counter-increment: lien;
}

a[href]:empty::after {
  content: "[" counter(lien) "]";
}
```

#### HTML

```html
<p>Voir <a href="https://www.mozilla.org/" aria-label="Mozilla"></a></p>
<p>N'oubliez pas de <a href="contact-me.html">laisser un message</a> !</p>
<p>
  Voir aussi
  <a href="https://developer.mozilla.org/" aria-label="MDN"></a>
</p>
```

#### Résultat

{{EmbedLiveSample("Exemple plus sophistiqué", "100%", 150)}}

### Exemple de compteur imbriqué

Un compteur CSS peut être particulièrement utile pour créer des listes hiérarchisées, car une nouvelle instance du compteur est automatiquement créée dans les éléments enfants.
En utilisant la fonction {{CSSxRef("counters()")}}, du texte de séparation peut être inséré entre les différents niveaux de compteurs imbriqués.

#### CSS

```css
ol {
  counter-reset: section; /* Crée une nouvelle instance du compteur
                             section avec chaque élément ol */
  list-style-type: none;
}

li::before {
  counter-increment: section; /* Incrémente uniquement cette instance
                                 du compteur section */
  content: counters(section, ".") " "; /* Combine les valeurs de toutes
  les instances du compteur section, séparées par un point */
}
```

#### HTML

```html-nolint
<ol>
  <li>element</li>          <!-- 1     -->
  <li>element               <!-- 2     -->
    <ol>
      <li>element</li>      <!-- 2.1   -->
      <li>element</li>      <!-- 2.2   -->
      <li>element           <!-- 2.3   -->
        <ol>
          <li>element</li>  <!-- 2.3.1 -->
          <li>element</li>  <!-- 2.3.2 -->
        </ol>
        <ol>
          <li>element</li>  <!-- 2.3.1 -->
          <li>element</li>  <!-- 2.3.2 -->
          <li>element</li>  <!-- 2.3.3 -->
        </ol>
      </li>
      <li>element</li>      <!-- 2.4   -->
    </ol>
  </li>
  <li>element</li>          <!-- 3     -->
  <li>element</li>          <!-- 4     -->
</ol>
<ol>
  <li>element</li>          <!-- 1     -->
  <li>element</li>          <!-- 2     -->
</ol>
```

#### Résultat

{{EmbedLiveSample("Exemple de compteur imbriqué", "100%", 350)}}

## Spécifications

{{Specifications}}

## Voir aussi

- La propriété {{CSSxRef("contain")}}
- La propriété {{CSSxRef("counter-reset")}}
- La propriété {{CSSxRef("counter-set")}}
- La propriété {{CSSxRef("counter-increment")}}
- La règle {{CSSxRef("@counter-style")}}
- Le module [de styles de compteur CSS](/fr/docs/Web/CSS/Guides/Counter_styles)
- Le module [de listes et compteurs CSS](/fr/docs/Web/CSS/Guides/Lists)
