---
title: Guide pour rédiger des exemples de code
short-title: Style de code
slug: MDN/Writing_guidelines/Code_style_guide
original_slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide
l10n:
  sourceCommit: 7ff752fba26e0bb950998bb5476157ff96c7d314
---

Les règles qui sont décrites dans cet article concernent la mise en forme des exemples de code, quel que soit le langage de programmation concerné. Pour savoir quel contenu inclure lors de l'écriture d'exemples de code, veuillez vous référer [au guide stylistique](/fr/docs/MDN/Writing_guidelines/Writing_style_guide#exemples_de_code).

Pour les règles spécifiques à chaque langage, voir ces différents articles&nbsp;:

- [Règles pour HTML](/fr/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [Règles pour CSS](/fr/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [Règles pour JavaScript](/fr/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Règles pour les instructions en ligne de commande](/fr/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Bonnes pratiques générales

Il y a une considération essentielle à garder à l'esprit&nbsp;: **les lecteur·ice·s vont copier-coller les exemples dans leur propre code et peuvent les mettre en production.**
Vous devez donc vous assurer que les exemples de code sont utilisables, respectent les bonnes pratiques généralement admises et ne font rien qui puisse rendre une application non sécurisée, inefficace, lourde ou inaccessible.

Si l'exemple de code n'est pas exécutable ou prêt pour la production, ajoutez un avertissement dans un commentaire de code et dans le texte explicatif&nbsp;: par exemple, s'il ne s'agit que d'un extrait et non d'un exemple complet, précisez-le. Cela signifie aussi que vous devez fournir toutes les informations nécessaires pour exécuter l'exemple, y compris les dépendances et les instructions d'installation.

Les exemples de code doivent être suffisamment simples pour être compréhensibles, mais assez complexes pour faire quelque chose d'intéressant, et (de préférence) d'utile.
L'objectif n'est pas forcément de produire un code efficace ou astucieux qui impressionne les expert·e·s et offre de grandes fonctionnalités, mais plutôt de partager des exemples réduits et fonctionnels qui peuvent être compris et assimilés le plus rapidement possible.

Quelques recommandations générales supplémentaires&nbsp;:

- Les exemples de code doivent être courts et idéalement ne montrer que la fonctionnalité qui vous intéresse immédiatement.
- Rédigez votre code pour qu'il soit aussi compréhensible que possible, même si ce n'est pas la façon la plus efficace de l'écrire.
- N'incluez pas de code serveur, bibliothèques, frameworks, préprocesseurs ou autres dépendances inutiles. Ils rendent le code moins portable et plus difficile à exécuter et à comprendre. Utilisez du code natif quand c'est possible.
- N'assumez pas la connaissance de bibliothèques, frameworks, préprocesseurs ou autres fonctionnalités non natives par les lecteur·ice·s. Par exemple, utilisez des noms de classes qui ont du sens dans l'exemple plutôt que des noms adaptés à BEM ou Bootstrap.
- Soyez inclusif·ive dans vos exemples de code&nbsp;: les lecteur·ice·s de MDN viennent du monde entier, avec des origines, religions, âges, genres, etc. variés. Veillez à ce que le texte des exemples reflète cette diversité et soit inclusif.
- N'utilisez pas de fonctionnalités obsolètes pour aller plus vite (comme les éléments de présentation {{HTMLElement("big")}} ou {{DOMxRef("Document.write", "document.write()")}})&nbsp;: faites-le correctement.
- Dans le cas de démos d'API, si vous utilisez plusieurs API ensemble, indiquez quelles API sont incluses et quelles fonctionnalités proviennent de chacune.

### Compatibilité des navigateurs

Lorsque vous créez des exemples de code pour une technologie qui n'est pas encore disponible dans tous les principaux navigateurs, pensez à utiliser la [détection de fonctionnalités](/fr/docs/Learn_web_development/Extensions/Testing/Feature_detection) pour proposer un comportement de repli ou informer l'utilisateur·ice que son navigateur n'est pas encore pris en charge.
Ne spécifiez pas les navigateurs pris en charge ni leurs versions dans les commentaires de code ou dans le texte, car ces informations deviennent rapidement obsolètes.

## Style et formatage du code sur MDN

Les opinions sur l'indentation correcte, les espaces et la longueur des lignes ont toujours été controversées. Les discussions sur ces sujets détournent de la création et de la maintenance du contenu.
Sur MDN Web Docs, nous utilisons [Prettier <sup>(angl.)</sup>](https://prettier.io/) comme formateur de code pour garder un style cohérent et éviter les discussions hors sujet. Vous pouvez consulter notre [fichier de configuration <sup>(angl.)</sup>](https://github.com/mdn/content/blob/main/.prettierrc.json) pour connaître les règles actuelles, et lire la [documentation de Prettier <sup>(angl.)</sup>](https://prettier.io/docs/index.html).

En plus du formatage automatisé, il existe quelques autres règles pour que les exemples de code sur MDN soient bien rendus.

### Choisir le bon langage

Pour garantir un bon formatage et une coloration syntaxique correcte des blocs de code, indiquez correctement le langage du bloc de code.
Consultez la page [Blocs de code d'exemple dans le Markdown MDN](/fr/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#blocs_de_code_dexemple) pour la liste des langages pris en charge par MDN, ainsi que les détails pour demander un nouveau langage.

Si le bloc de code est du pseudo-code, la sortie d'une commande ou n'est pas un langage de programmation, indiquez le langage `plain`&nbsp;:

````md
```plain
StaleElementReferenceException: The element reference of ABD-123 is stale…
```
````

> [!WARNING]
> Si le langage souhaité n'est pas encore pris en charge par MDN, n'indiquez **pas** un langage similaire, car cela peut avoir des effets indésirables sur le formatage Prettier et la coloration syntaxique.

### Longueur des lignes de code

Les lignes de code ne doivent pas être si longues qu'elles nécessitent un défilement horizontal pour être lues.
Coupez les longues lignes à des endroits naturels pour faciliter la lisibilité, mais sans sacrifier les bonnes pratiques.
Par exemple, ce qui suit n'est pas idéal&nbsp;:

```js example-bad
let tommyCat =
  "Said Tommy the Cat as he reeled back to clear whatever foreign matter may have nestled its way into his mighty throat. Many a fat alley rat had met its demise while staring point blank down the cavernous barrel of this awesome prowling machine.";
```

Ceci est mieux, mais un peu étrange à lire&nbsp;:

```js
const tommyCat =
  "Said Tommy the Cat as he reeled back to clear whatever foreign " +
  "matter may have nestled its way into his mighty throat. Many a fat alley rat " +
  "had met its demise while staring point blank down the cavernous barrel of " +
  "this awesome prowling machine.";
```

Une meilleure solution consiste à utiliser un gabarit de chaîne de caractères&nbsp;:

```js example-good
const tommyCat = `Said Tommy the Cat as he reeled back to clear whatever foreign
  matter may have nestled its way into his mighty throat. Many a fat alley rat
  had met its demise while staring point blank down the cavernous barrel of
  this awesome prowling machine.`;
```

### Hauteur des blocs de code

Les blocs de code doivent être aussi longs que nécessaire, mais pas plus. Idéalement, visez une longueur courte, entre 15 et 25 lignes. Si un bloc de code doit être beaucoup plus long, montrez la partie la plus utile et faites un lien vers un exemple complet sur un dépôt GitHub, un Gist ou un CodePen, par exemple.

### Formatage du code en ligne

Utilisez la syntaxe de code en ligne pour marquer les noms de fonctions, de variables et de méthodes. Par exemple&nbsp;: «&nbsp;la fonction `texteFrancais()`&nbsp;» s'écrit en markdown&nbsp;:

```md
la fonction `texteFrancais()`
```

Les noms de méthodes doivent être suivis d'une paire de parenthèses&nbsp;: par exemple, `faireQuelqueChoseDutile()`. Les parenthèses permettent de distinguer les méthodes des autres termes de code.

## Règles pour un affichage correct

Ces règles doivent être suivies pour garantir que les exemples de code que vous écrivez s'affichent correctement sur MDN Web Docs. Pensez aussi à l'adaptabilité pour que les exemples soient utiles sur mobile.

### Taille pour l'affichage des exemples de code

- **La largeur doit être fixée à 100&nbsp;%**&nbsp;: la zone centrale principale sur MDN Web Docs fait environ 700px de large sur ordinateur, donc les exemples de code embarqués doivent avoir un rendu correct à cette largeur.
- **La hauteur doit être inférieure à 700px**&nbsp;: nous recommandons de respecter cette hauteur pour une lisibilité maximale à l'écran.

### Indiquer un bon ou un mauvais exemple

Vous remarquerez sur cette page que les blocs de code qui illustrent de bonnes pratiques sont affichés avec une coche verte dans le coin supérieur droit, et ceux qui illustrent de mauvaises pratiques sont affichés avec une croix blanche dans un disque rouge.

Vous pouvez utiliser ce style lors de la rédaction d'exemples de code. Il n'est pas nécessaire de l'utiliser partout, uniquement là où vous souhaitez distinguer clairement les bonnes et mauvaises pratiques dans les exemples.

Un bloc de code est écrit en markdown avec des «&nbsp;fences&nbsp;» pour délimiter le bloc, suivi du langage dans la chaîne d'information. Par exemple&nbsp;:

````md
```js
function maFonction() {
  console.log("Coucou !");
}
```
````

Pour représenter le bloc de code comme un bon ou un mauvais exemple, ajoutez `example-good` ou `example-bad` après le langage, comme ceci&nbsp;:

````md
```html example-good
<p>Bon exemple</p>
```

```html example-bad
<p>Mauvais exemple</p>
```
````

Cela sera affiché ainsi&nbsp;:

```html example-good
<p>Bon exemple</p>
```

```html example-bad
<p>Mauvais exemple</p>
```

## Règles pour l'utilisation de texte de substitution

Utilisez le texte de substitution lorem-ipsum généré depuis [lipsum.com <sup>(angl.)</sup>](https://www.lipsum.com/) ou l'extension VS Code [Lorem ipsum <sup>(angl.)</sup>](https://marketplace.visualstudio.com/items?itemName=Tyriar.lorem-ipsum). Le texte lorem-ipsum standard est inclus dans notre configuration du correcteur orthographique, il ne sera donc pas signalé comme faute de frappe dans les IDE ou lors des tests en relecture de code. Utiliser un texte de substitution cohérent facilite la relecture des exemples, surtout lorsqu'il apparaît plusieurs fois. Cela permet aussi de bien distinguer les exemples à but illustratif et d'éviter de distraire les lecteur·ice·s avec du contenu hors sujet.
