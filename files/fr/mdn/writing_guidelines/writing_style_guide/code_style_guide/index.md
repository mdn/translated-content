---
title: Règles pour la mise en forme des exemples de code
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide
l10n:
  sourceCommit: b88cde84dd8596f6a56ee509d2a6b754a3e05ba0
---

{{MDNSidebar}}

Les règles qui sont décrites dans cet article concernent la mise en forme des exemples de code, quel que soit le langage de programmation concerné. Pour savoir quel contenu inclure lors de l'écriture d'exemples de code, veuillez vous référer [au guide stylistique](/fr/docs/MDN/Writing_guidelines/Writing_style_guide#exemples_de_code).

Pour les règles spécifiques à chaque langage, voir ces différents articles&nbsp;:

- [Règles pour HTML](/fr/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML)
- [Règles pour CSS](/fr/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS)
- [Règles pour JavaScript](/fr/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)
- [Règles pour les instructions en ligne de commande](/fr/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell)

## Bonnes pratiques générales

Dans cette section, nous verrons les bonnes pratiques pour la création d'un exemple de code minimal et compréhensible pour illustrer l'utilisation d'une fonctionnalité donnée.

Les exemples de code ajoutés sur MDN devraient être&nbsp;:

- Suffisamment simples pour être compris
- Et suffisamment complexes pour réaliser quelque chose d'intéressant, voire d'utile.

Il y a un point qu'il faut garder en tête&nbsp;: **les personnes qui lisent les exemples vont copier/coller l'exemple de code dans leurs fichiers et éventuellement l'utiliser en production**.

Aussi, vous devez vous assurer que l'exemple de code est utilisable, qu'il suit les bonnes pratiques généralement utilisées, et qu'il **ne fait rien** qui puisse rendre une application moins sécurisée, inefficace, alourdie par du code inutile ou inaccessible. Si l'exemple de code n'est pas fonctionnel ou ne doit pas être utilisé en production, assurez-vous d'inclure un avertissement dans un commentaire du code et dans le texte de description. Ainsi, s'il ne s'agit que d'un fragment de code partiel et pas d'un exemple complet, indiquez-le clairement. Cela signifie également qu'il faut fournir **l'ensemble** des informations nécessaires à l'exécution du code (y compris les dépendances et les instructions d'installation).

Les exemples de code devraient, autant que possible, se suffire à eux-mêmes et être faciles à comprendre. Le but n'est pas nécessairement de produire du code optimal et intelligent pour impressionner des experts et fournir des fonctionnalités incroyables, mais plutôt d'avoir des exemples circonscrits qui puissent être compris aussi rapidement que possible.

Parmi les bonnes pratiques&nbsp;:

- L'exemple de code doit être concis et idéalement n'illustrer que la fonctionnalité en question.
- On inclut **uniquement** le code essentiel à l'exemple. Une grande quantité de code qui n'est pas pertinent peut vite devenir source de confusion ou de distraction. Si vous souhaitez fournir un exemple complet, plus long, veuillez utiliser [un de nos dépôts GitHub](https://github.com/mdn/) (ou JSBin, Codepen, ou un service semblable) puis fournir le lien vers la version complète avant ou après l'exemple.
- Utilisez du code «&nbsp;nature&nbsp;» dès que possible. N'incluez pas de code côté serveur ou de bibliothèques, de <i lang="en">frameworks</i> ou de préprocesseurs. Ils rendent le code moins portable et plus compliqué à comprendre.
- Ne partez pas du principe que les personnes qui lisent ces exemples connaissent telle bibliothèque, tel <i lang="en">framework</i>, tel préprocesseur ou telle autre fonctionnalité non native. Ainsi, on utilisera par exemple des noms de classes qui ont du sens dans l'exemple plutôt que des noms de classes qui pourraient avoir du sens pour les utilisatrices et utilisateurs de BEM ou Bootstrap.
- Écrivez votre code afin qu'il soit aussi propre et compréhensible que possible, même si ce n'est pas la formulation la plus efficace. Mieux vaut un exemple compréhensible qu'un exemple théoriquement optimal mais difficile à déchiffrer.
- N'utilisez pas de mauvaises pratiques à des fins de concision (comme des éléments de présentation comme [`<big>`](/fr/docs/Web/HTML/Element/big) ou [`document.write()`](/fr/docs/Web/API/Document/write). Mieux vaut un exemple légèrement plus long et bien écrit qu'un exemple qui contient des tournures déconseillées.
- Pour les démonstrations d'API, si vous utilisez plusieurs API ensemble, indiquez les API qui sont incluses et quelles fonctionnalités proviennent de chacune.

## Règles pour le formatage

Ces règles décrivent le formatage à respecter pour les exemples de code sur MDN. Il s'agit également de règles qui peuvent être utiles pour l'écriture de code de façon générale.

### Indentation

- On utilise une indentation avec deux espaces par tabulation pour tous les exemples de code.
- On place l'accolade ouvrante (`{`) sur la même ligne que l'instruction qui ouvre le bloc.

```html example-good
<div>
  <p>Voici mon paragraphe.</p>
</div>
```

```js example-good
function maFonction() {
  if (bidule) {
    console.log("Et ça marche.");
  }
}
```

### Espaces

On ajoute un espace entre une instruction de contrôle ou de boucle et la parenthèse ouvrante correspondante.

```js example-good
if (condition) {
  /* on gère la condition */
} else {
  /* on gère le cas alternatif */
}
```

### Longueur des lignes de code

- La longueur des lignes de code ne doit pas nécessiter de défilement horizontal pour qu'elles soient lues.
- En règle générale, on recommande d'avoir des lignes qui ont au plus 80 caractères (64 pour [les exemples interactifs](https://github.com/mdn/interactive-examples)).
- Pour les longues lignes, on passe à la ligne à des emplacements naturels pour faciliter la lisibilité, mais sans sacrifier les bonnes pratiques.

Ainsi, ce qui suit n'est pas idéal&nbsp;:

```js example-bad
let alice =
  "Pendant un bout de chemin le trou allait tout droit comme un tunnel, puis tout à coup il plongeait perpendiculairement d'une façon si brusque qu'Alice se sentit tomber comme dans un puits d'une grande profondeur, avant même d'avoir pensé à se retenir.";
```

Et ceci est mieux, mais un peu étrange à lire&nbsp;:

```js
const alice =
  "Pendant un bout de chemin le trou allait tout droit comme un tunnel, " +
  "puis tout à coup il plongeait perpendiculairement d'une façon si brusque qu'Alice " +
  "se sentit tomber comme dans un puits d'une grande profondeur, avant même d'avoir " +
  "pensé à se retenir.";
```

Une meilleure solution consistera ici à utiliser un gabarit de chaîne de caractères&nbsp;:

```js example-good
const alice = `Pendant un bout de chemin le trou allait tout droit comme un tunnel,
puis tout à coup il plongeait perpendiculairement d'une façon si
brusque qu'Alice se sentit tomber comme dans un puits d'une grande
profondeur, avant même d'avoir pensé à se retenir.`;
```

```js example-good
if (
  obj.CONDITION ||
  obj.AUTRE_CONDITION ||
  obj.UNE_AUTRE_CONDITION ||
  obj.ENCORE_UNE_AUTRE_CONDITION
) {
  /* quelque chose */
}

const toolkitProfileService = Components.classes[
  "@mozilla.org/toolkit/profile-service;1"
].createInstance(Components.interfaces.nsIToolkitProfileService);
```

### Hauteur des blocs de code

Les blocs de code doivent être aussi longs que nécessaire, mais pas plus. On visera idéalement une longueur de 15 à 25 lignes. Si un bloc de code devient beaucoup plus grand, on pensera à illustrer le fragment le plus utile et à renvoyer vers l'exemple complet, situé sur un dépôt GitHub ou un outil de partage de code web.

#### Formatage du code dans le texte

On utilisera la balise [`<code>`](/fr/docs/Web/HTML/Element/code) pour indiquer les noms de fonctions, de variables, de méthodes et les mots-clés.
Par exemple&nbsp;: «&nbsp;nous allons illustrer la fonction `totoTiti()`&nbsp;».

**Les noms de méthodes devraient être suivies par une paire de parenthèses.** Ainsi, on écrira&nbsp;: `faireQuelqueChose()`. Les parenthèses permettent de distinguer les méthodes des autres termes relatifs au code.

## Règles pour un affichage correct

Les règles qui suivent doivent être suivies pour s'assurer que les exemples de code s'affichent correctement sur MDN. Il est aussi utile de garder à l'esprit l'adaptativité nécessaire pour que les exemples puissent être utiles sur les appareils mobiles.

### Taille pour l'affichage des résultats d'exemples de code

- **La largeur doit être fixée à 100%**
  - : La zone centrale principale pour afficher le contenu sur MDN a une largeur de 700px et les exemples de code embarqués doivent avoir un aspect correct avec cette largeur.
- **La hauteur doit être inférieure à 700px**
  - : Nous recommandons d'utiliser cette hauteur maximale pour une meilleure lisibilité à l'écran.

### Couleurs pour les résultats d'exemples de code

- On utilisera les mots-clés pour les couleurs de base, par exemple&nbsp;:

  ```css example-good
  color: black;
  color: white;
  color: red;
  ```

- On utilisera la fonction `rgb()` pour les couleurs complexes (y compris les couleurs semi-transparentes)&nbsp;:

  ```css example-good
  color: rgb(0, 0, 0, 0.5);
  color: rgb(248, 242, 230);
  ```

- Pour les couleurs hexadécimales, on les écrira en minuscules&nbsp;:

  ```css example-good
  color: #058ed9;
  color: #a39a92;
  ```

- On utilisera la forme courte lorsque c'est pertinent&nbsp;:

  ```css example-good
  color: #ff0;
  color: #fff;
  ```

### Indiquer un bon ou un mauvais exemple

Vous aurez pu voir sur cette page que les blocs de code indiquant des bonnes pratiques sont affichés avec une coche verte dans le coin supérieur droit et que ceux qui décrivent des mauvaises pratiques sont affichés avec une croix dans un disque rouge.

Vous pouvez utiliser cette mise en forme pour les exemples de code. Ce n'est pas nécessaire de l'utiliser partout, uniquement pour les fois où on souhaite distinguer clairement les bonnes et les mauvaises pratiques associées à une fonctionnalité.

Pour obtenir ce rendu, on commencera par écrire le bloc de code avec la chaîne de caractères indiquant le langage, par exemple&nbsp;:

```js
function maFonction() {
  console.log("Coucou !");
}
```

Pour représenter le bloc de code d'un bon ou d'un mauvais exemple, utilisez le mot-clé `example-good` ou `example-bad` après la chaîne de caractères indiquant le langage&nbsp;:

````plain
```html example-good
<p class="brush: js example-good">
```

```html example-bad
<p class="brush: js example-bad">
```
````

Cela sera affiché ainsi&nbsp;:

```html example-good
<p class="brush: js example-good"></p>
```

```html example-bad
<p class="brush: js example-bad"></p>
```

### Traduction des exemples de code

Pour la traduction en français, on veillera à suivre les principes généraux suivants&nbsp;:

- Pour les exemples simples, on traduit les noms des variables, des fonctions en respectant l'esprit de l'exemple anglais. Les paragraphes de texte inclus dans les exemples peuvent utiliser des textes en français.
- On veillera notamment à traduire `foo`, `bar`, `baz`, `doSomething()` par des équivalents en français (respectivement `toto`, `truc`, `machin`, `faireQuelqueChose()`). Une lectrice ou un lecteur francophone qui découvre un langage ne doit pas penser que le terme `foo`, par exemple, est un mot-clé de ce langage (il s'agit d'un terme anglais générique).
- On fera attention à ne pas traduire les mots-clés qui sont propres à la syntaxe du langage en question&nbsp;: l'exemple doit rester valide&nbsp;!
- Pour les exemples plus complexes ou développés, on pourra garder des éléments en anglais si on s'attend à ce qu'un tel code puisse être utilisé dans une base de code avec du contenu déjà en anglais. Dans le doute, on traduira.

L'anglais ne doit pas être une barrière pour une personne francophone qui lirait un exemple sur MDN afin d'apprendre à utiliser telle fonctionnalité, tel langage ou telle API.
