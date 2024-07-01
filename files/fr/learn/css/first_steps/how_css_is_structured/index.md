---
title: Comment CSS est structuré
slug: Learn/CSS/First_steps/How_CSS_is_structured
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}

Vous avez maintenant une idée plus claire de CSS. Vous connaissez les bases de son fonctionnement. Il est temps d'explorer plus avant la structure du langage lui-même. Nous avons déjà rencontré nombre des concepts apparaissant dans ce tutoriel ; reportez vous aux leçons précédentes si un concept vous semble peu clair.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Maîtrise élémentaire de l'informatique,
        <a
          href="/fr/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >suite logicielle de base installée</a
        >, compétences élémentaires pour
        <a href="/fr/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >travailler avec des fichiers</a
        >, connaissance de base du HTML (cf.
        <a href="/fr/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction à HTML</a
        >), et une idée de
        <a href="/fr/docs/Learn/CSS/First_steps/How_CSS_works"
          >Comment fonctionne CSS</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif&nbsp;:</th>
      <td>Approfondir les structures syntaxiques fondamentales de CSS</td>
    </tr>
  </tbody>
</table>

## Appliquer CSS à votre document HTML

Regardons d'abord les trois méthodes pour appliquer CSS à un document.

### Feuille de style externe

Dans la leçon [Démarrer avec CSS](/fr/docs/Learn/CSS/First_steps/Getting_started) nous avons lié une feuille de style externe à notre document. C'est la méthode la plus commune pour appliquer CSS à un document. C'est aussi la plus utile : dans la plupart des cas, les différentes pages d'un site ont à peu près la même apparence, on peut donc utiliser le même jeu de règles pour l'apparence de base. Il est dans ce cas commode d'écrire ces règles une seule fois dans une feuille de style commune à toutes les pages.

Dans le cas d'une feuille de style externe, les règles CSS sont écrites dans un fichier séparé, avec l'extension `.css`. Un élément HTML `<link>` fait référence à ce fichier.

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Une expérience avec CSS</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>ceci est mon premier exemple CSS</p>
  </body>
</html>
```

Le fichier CSS devrait ressembler à cela :

```css
h1 {
  color: blue;
  background-color: yellow;
  border: 1px solid black;
}

p {
  color: red;
}
```

L'attribut `href` de l'élément [`<link>`](/fr/docs/Web/HTML/Element/link) doit pointer vers un fichier dans votre système de fichiers.

Dans l'exemple ci-dessus, le fichier CSS et le document HTML sont dans le même dossier, mais vous pouvez le placer ailleurs et ajuster le chemin, par exemple :

```html
<!-- Dans un sous-répertoire nommé styles dans le répertoire courant -->
<link rel="stylesheet" href="styles/style.css" />

<!-- Dans un sous-répertoire nommé general, lui-même dans un sous-répertoire nommé styles, dans le répertoire courant -->
<link rel="stylesheet" href="styles/general/style.css" />

<!-- Dans un sous-répertoire nommé styles, un niveau plus haut -->
<link rel="stylesheet" href="../styles/style.css" />
```

### Feuille de style interne

Les règles CSS peuvent être écrites directement dans l'en-tête HTML [`<head>`](/fr/docs/Web/HTML/Element/head) dans un élément [`<style>`](/fr/docs/Web/HTML/Element/style). On parle alors de feuille de style interne.

Le code HTML ci-dessous illustre cette technique :

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Mes expérimentations CSS</title>
    <style>
      h1 {
        color: blue;
        background-color: yellow;
        border: 1px solid black;
      }

      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>Ceci est mon premier exemple CSS</p>
  </body>
</html>
```

Cette méthode peut être utile dans certaines circonstances (un système de gestion de contenu (CMS) qui n'autoriserait pas la modification du fichier `style.css`). Cette solution est un pis-aller, on préfèrera quand c'est possible une feuille de style externe — dans un site web, avec la méthode de styles internes, le CSS doit être recopié dans chaque page : la mise à jour des styles nécessite donc de modifier chaque fichier.

### Styles en ligne

Les styles en ligne sont des déclarations CSS qui n'affectent qu'un seul élément, elles sont déclarées grâce à l'attribut `style`:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Mes expérimentations CSS</title>
  </head>
  <body>
    <h1 style="color: blue;background-color: yellow;border: 1px solid black;">
      Hello World!
    </h1>
    <p style="color:red;">Ceci est mon premier exemple CSS</p>
  </body>
</html>
```

**Cette approche est vraiment à proscrire !** Le code produit n'est pas maintenable (les modifications ne doivent plus se faire pour chaque page, mais dans chaque page, élément par élément !). Par ailleurs, mélanger le CSS avec le HTML rend la lecture du code plus difficile. En plus d'une meilleure lisibilité du code, séparer le fond de la forme rend le travail d'équipe plus facile.

Il existe quelques endroits où les styles en ligne sont communs, voire recommandés. Vous devrez peut-être les utiliser si votre environnement de travail est vraiment restrictif (votre CMS ne vous permet peut-être que de modifier le corps du HTML). Vous les verrez également beaucoup utilisés dans les e-mails HTML afin d'être compatibles avec autant de clients de messagerie que possible.

## Jouer avec le CSS de cet article

Les exemples de cet article sont autant d'occasions pour faire vos premiers tests. Pour ce faire, nous vous recommandons de créer un nouveau répertoire sur votre ordinateur et d'y créer une copie des deux fichiers suivants :

**index.html** :

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Mes expériences CSS</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <p>Créez votre test ici !</p>
  </body>
</html>
```

**styles.css** :

```css
/* Créez votre test CSS ici */

p {
  color: red;
}
```

Ensuite, lorsque vous rencontrez du code à tester : collez le HTML à mettre en forme entre les balises `<body>`…`</body>` dans le fichier `index.html` ; ajoutez les règles CSS dans la feuille `styles.css`.

Si le système que vous utilisez rend difficile la création de fichiers, vous pouvez utiliser l'éditeur interactif ci-dessous pour vos expériences.

{{EmbedGHLiveSample("css-examples/learn/getting-started/experiment-sandbox.html", '100%', 600)}}

Bonne lecture !

## Sélecteurs

Vous ne pouvez pas parler de CSS sans rencontrer les sélecteurs et nous en avons déjà découvert différents types dans le tutoriel [Démarrer avec CSS](/fr/docs/Learn/CSS/First_steps/Getting_started). Un sélecteur cible quelque chose dans le document HTML afin de lui appliquer des styles. Quand une mise en forme ne s'applique pas comme prévu, il est probable que le sélecteur concerné ne fonctionne pas comme vous l'attendiez.

Chaque règle CSS commence par un sélecteur ou une liste de sélecteurs afin d'indiquer au navigateur les éléments auxquels les règles doivent s'appliquer. Tous les exemples suivants sont des exemples de sélecteurs valides ou de listes de sélecteurs.

```css
h1
a:link
.manythings
#onething
*
.box p
.box p:first-child
h1, h2, .intro
```

Essayez de créer des règles CSS qui utilisent les sélecteurs ci-dessus et du code HTML à styler. Si vous ne savez pas ce que signifie la syntaxe ci-dessus, essayez de la rechercher sur MDN !

> **Note :** Vous en apprendrez beaucoup plus sur les sélecteurs dans nos tutoriels sur [les sélecteurs CSS](/fr/docs/Learn/CSS/Building_blocks/Selectors), dans un prochain cours.

### Spécificité

Dans de nombreux cas, deux sélecteurs différents peuvent cibler le même élément HTML. Considérons la feuille de style ci-dessous où j'ai une règle avec un sélecteur `p` qui colore les paragraphes en bleu, puis une règle qui colore en rouge les éléments dans la classe `special`.

```css
.special {
  color: red;
}

p {
  color: blue;
}
```

Disons que dans notre document HTML, nous avons un paragraphe avec un attribut `class` valant `special`. Les deux règles pourraient s'appliquer. Selon vous, quelle sera la couleur du paragraphe ?

```html
<p class="special">De quelle couleur suis-je?</p>
```

Le langage CSS a des règles pour déterminer quelle mise en forme appliquer en cas de collision de sélecteurs — elles sont appelées **cascade** et **spécificité**. Dans le bloc de code ci-dessous, nous avons défini deux règles pour le sélecteur `p`, mais le paragraphe finit par être coloré en bleu. En effet, la déclaration qui l'a défini en bleu apparaît plus tard dans la feuille de style et les styles ultérieurs remplacent les précédents. C'est la _cascade_ en action.

```css
p {
  color: red;
}

p {
  color: blue;
}
```

Cependant, dans l'exemple plus haut avec le sélecteur de classe et le sélecteur d'élément, la classe l'emportera, rendant le paragraphe rouge — même s'il apparaît plus tôt dans la feuille de style. Une classe est décrite comme étant plus spécifique ou ayant plus de _spécificité_ que le sélecteur d'élément, elle gagne donc.

**Tentez vous-même l'expérience ci-dessus** — **ajoutez le code HTML à votre expérience, puis ajoutez les deux règles `p {…}` à votre feuille de style. Ensuite, changez le premier sélecteur `p` en `.special` pour voir comment il affecte le style.**

Au premier abord, les règles de cascade et de spécificité peuvent sembler compliquées ; avec une meilleure connaissance de CSS, elles vous paraîtront plus naturelles. Dans le prochain module, l'article [Cascade et héritage](/fr/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) vous détaillera ces principes et expliquera notamment comment calculer la spécificité. Pour le moment, rappelez vous que de tels cas existent et que le CSS peut parfois ne pas s'appliquer comme prévu. Dans une telle situation, souvenez-vous qu'un même élément peut être la cible de plusieurs sélecteurs concurrents.

## Propriétés et valeurs

Au niveau le plus fondamental, CSS se compose de deux blocs de construction :

- **Propriétés** : des identifiants lisibles par l'homme indiquant les caractéristiques stylistiques ([`font-size`](/fr/docs/Web/CSS/font-size), [`width`](/fr/docs/Web/CSS/width), [`background-color`](/fr/docs/Web/CSS/background-color), par exemple) que vous souhaitez modifier ;
- **Valeurs** : une valeur est attribuée à chaque propriété spécifiée. Elle indique comment vous souhaitez modifier ces caractéristiques stylistiques (par exemple, en modifiant la couleur de la police, la largeur ou l'arrière-plan).

L'image ci-dessous met en évidence une propriété et une valeur uniques. Le nom de la propriété est `color` et la valeur `blue`.

![Une déclaration surlignée au sein du code CSS](declaration.png)

Une propriété associée à une valeur s'appelle une _déclaration CSS_. Les déclarations CSS sont placées dans des _blocs de déclaration CSS_. L'image suivante montre notre CSS avec le bloc de déclaration en surbrillance.

![Un bloc de déclaration surligné](declaration-block.png)

Enfin, les blocs de déclaration CSS sont associés à des _sélecteurs_ pour produire des _ensembles de règles CSS_ (ou _règles CSS_). L'image contient deux règles, une pour le sélecteur `h1` et une pour le sélecteur `p`. La règle pour `h1` est mise en surbrillance.

![La règle ciblant h1 est surlignée](rules.png)

Définir les propriétés CSS sur des valeurs spécifiques est la fonction principale du langage CSS. Le moteur CSS calcule les déclarations qui s'appliquent à chaque élément d'une page afin de le présenter et de le styler de manière appropriée. Ce qui est important à retenir est que les propriétés et les valeurs sont sensibles à la casse en CSS. La propriété et la valeur de chaque paire sont séparées par deux points (`:`).

**Recherchez différentes valeurs possibles pour les propriétés suivantes puis écrivez des règles CSS qui les appliquent à différents éléments HTML :**

- **[`font-size`](/fr/docs/Web/CSS/font-size)**
- **[`width`](/fr/docs/Web/CSS/width)**
- **[`background-color`](/fr/docs/Web/CSS/background-color)**
- **[`color`](/fr/docs/Web/CSS/color)**
- **[`border`](/fr/docs/Web/CSS/border)**

> **Attention :** Si la propriété est inconnue ou si la valeur est invalide pour une propriété donnée, la déclaration est considérée comme _invalide_ et complètement ignorée par le moteur CSS du navigateur.

> **Attention :** En CSS (et dans les autres standards web), l'orthographe américaine a été adoptée comme norme à respecter en cas d'incertitude linguistique. Par exemple, la couleur doit _toujours_ être notée `color`. `couleur` ne fonctionnera pas.

### Fonctions

Bien que la plupart des valeurs soient des mots-clés relativement simples ou des valeurs numériques, on peut aussi appeler une fonction pour calculer une valeur dans une déclaration CSS. Un exemple serait la fonction `calc()`. Cette fonction vous permet de faire des calculs simples à partir de CSS, par exemple :

#### Exemple calc

```html
<div class="outer">
  <div class="box">la boite interne vaut 90% - 30px.</div>
</div>
```

```css
.outer {
  border: 5px solid black;
}

.box {
  padding: 10px;
  width: calc(90% - 30px);
  background-color: rebeccapurple;
  color: white;
}
```

La page devrait s'afficher comme ceci :

{{EmbedLiveSample('Exemple_calc', '100%', 200)}}

Une fonction est composée du nom de la fonction suivi d'une paire de parenthèses entre lesquelles sont placées les valeurs autorisées pour cette fonction. Dans le cas de l'exemple `calc()` ci-dessus, on demande que la largeur de cette zone soit égale à 90% de la largeur du bloc conteneur, moins 30 pixels. Ce n'est pas quelque chose que l'on peut calculer à l'avance et simplement entrer la valeur dans le CSS, car on ne sait pas ce que seront 90%. Comme pour toutes les valeurs, chaque fonction a sa page de documentation sur MDN avec des exemples d'utilisation pour en voir le fonctionnement.

Un autre exemple serait les différentes valeurs de la propriété [`<transform>`](/fr/docs/Web/CSS/transform), telles que `rotate()`.

#### Exemple transform

```html
<div class="box"></div>
```

```css
.box {
  margin: 30px;
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
  transform: rotate(0.8turn);
}
```

La page devrait s'afficher comme ceci :

{{EmbedLiveSample('Exemple_transform', '100%', 200)}}

**Essayez de rechercher différentes valeurs des propriétés suivantes et d'écrire des règles CSS qui les appliquent à différents éléments HTML :**

- **[`transform`](/fr/docs/Web/CSS/transform)**
- **[`background-image`](/fr/docs/Web/CSS/background-image), en particulier les valeurs de dégradé**
- **[`color`](/fr/docs/Web/CSS/color), en particulier les valeurs rgb/rgba/hsl/hsla**

## @rules

e

Nous n'avons pas rencontré jusqu'ici les [`@rules`](/fr/docs/Web/CSS/At-rule) (prononcer "at-rules"). Ce sont des règles spéciales dictant un comportement CSS. Certaines `@rules` simples sont composées d'un nom et d'une valeur. Par exemple, pour importer une feuille de style additionnelle dans le CSS principal on utilisera `@import` :

```css
@import "styles2.css";
```

L'une des `@rules` les plus fréquemment rencontrée est `@media`, qui permet d'utiliser les [<i lang="en">media queries</i>](/fr/docs/Web/CSS/Media_Queries) pour appliquer CSS seulement quand certaines conditions sont vérifiées (par ex. quand la résolution de l'écran dépasse une certaine valeur, ou quand l'écran dépasse une certaine largeur).

Dans le CSS ci-dessous, une règle donne à l'élément `<body>` un fond rose. La section `@media` ne s'appliquera que dans les navigateurs dont la fenêtre est plus large que 30em. Dans ce cas la couleur de fond sera redéfinie à bleue.

```css
body {
  background-color: pink;
}

@media (min-width: 30em) {
  body {
    background-color: blue;
  }
}
```

Tout au long de nos tutoriels CSS, vous rencontrerez d'autres `@rules`.

**Ajoutez une <i lang="en">media query</i> à votre CSS pour obtenir des changements de styles basés sur la largeur de la fenêtre. Changez la largeur de la fenêtre de votre navigateur pour contrôler le résultat.**

## Raccourcis

Certaines propriétés comme [`font`](/fr/docs/Web/CSS/font), [`background`](/fr/docs/Web/CSS/background), [`padding`](/fr/docs/Web/CSS/padding), [`border`](/fr/docs/Web/CSS/border), ou [`margin`](/fr/docs/Web/CSS/margin) sont appelées **propriétés raccourci** — elles permettent d'attribuer plusieurs couples propriété : valeur en une seule ligne. On gagne du temps et le code est plus joli.

Par exemple, la ligne suivante :

```css
/* Dans les raccourcis à 4 valeurs comme padding ou margin, les valeurs sont données
   dans l'ordre top, right, bottom, left (sens des aiguilles d'une montre depuis top).
   Il y a d'autres raccourcis, a 2 valeurs par exemple qui padding ou margin
   pour top/bottom, puis left/right */
padding: 10px 15px 15px 5px;
```

produit le même effet que les quatre lignes suivantes réunies :

```css
padding-top: 10px;
padding-right: 15px;
padding-bottom: 15px;
padding-left: 5px;
```

Alors que :

```css
background: red url(bg-graphic.png) 10px 10px repeat-x fixed;
```

produit la même chose que tout ce qui suit :

```css
background-color: red;
background-image: url(bg-graphic.png);
background-position: 10px 10px;
background-repeat: repeat-x;
background-scroll: fixed;
```

Ce n'est pas le moment d'apprendre tous ces raccourcis — vous les croiserez à travers de nombreux exemples tout au long de ce cours, vous vous réfèrerez alors à notre [référence CSS](/fr/docs/Web/CSS/Reference) pour en savoir plus.

**Ajoutez les déclarations précédentes à votre CSS pour voir comment elles affectent la mise en forme de votre document HTML. Testez différentes valeurs.**

> **Attention :** Les raccourcis vous autorisent à ne pas déclarer certaines valeurs, mais dans ce cas, les valeurs non déclarées sont restaurées à leur valeur par défaut. Cela garantit l'usage d'un ensemble de valeurs qui restent raisonnables. Cela peut par contre vous surprendre, si vous pensiez que le raccourci ne changeait que les valeurs passées en argument.

## Commentaires

En CSS comme en HTML il est recommandé d'ajouter des commentaires, pour vous permettre de retrouver comment votre code fonctionne quand vous vous y replongez après quelques mois et pour permettre aussi à d'autres personnes de comprendre votre code quand elles sont amenées à travailler dessus.

En CSS le début des commentaires est signalé par `/*` et la fin par `*/`. Dans le bloc de code ci-dessous, j'ai utilisé des commentaires pour marquer les différentes sections. Cela devient intéressant pour un code de taille importante — on peut alors utiliser les fonctionnalités de recherche de l'éditeur de code pour naviguer dans le fichier.

```css
/* mise en forme des éléments de base */
/* -------------------------------------------------------------------------------------------- */
body {
  font:
    1em/150% Helvetica,
    Arial,
    sans-serif;
  padding: 1em;
  margin: 0 auto;
  max-width: 33em;
}

@media (min-width: 70em) {
  /* On donne un traitement conditionnel de la taille de police globale.
     sur de grands écrans, on augmente la valeur de font-size pour une
     meilleure lisibilité */
  body {
    font-size: 130%;
  }
}

h1 {
  font-size: 1.5em;
}

/* mise en forme des éléments imbriqués dans le DOM */
/* -------------------------------------------------------------------------------------------- */
div p,
#id:first-line {
  background-color: red;
  background-style: none;
}

div p {
  margin: 0;
  padding: 1em;
}

div p + p {
  padding-top: 0;
}
```

Les commentaires sont aussi parfois utiles pour rendre temporairement inactive une zone de code (les sections commentées ne sont pas interprétées par le navigateur), par exemple pour identifier la partie de code responsable d'une erreur. Dans l'exemple suivant, la règle pour le sélecteur `.special` a été désactivée par des commentaires :

```css
/*.special {
  color: red;
}*/

p {
  color: blue;
}
```

**Ajoutez des commentaires à votre CSS, il est bon que cela devienne une habitude.**

## Espace

On parle ici d'espaces laissés blancs dans le texte, de tabulations, de retour à la ligne. Le navigateur tend à ignorer les espaces dans les codes CSS et HTML ; les espaces dans le code CSS sont la plupart du temps présents pour le rendre plus lisible.

L'exemple ci-dessous propose d'écrire une déclaration par ligne — le code produit est facile à comprendre et à maintenir : c'est un bon code.

```css
body {
  font:
    1em/150% Helvetica,
    Arial,
    sans-serif;
  padding: 1em;
  margin: 0 auto;
  max-width: 33em;
}

@media (min-width: 70em) {
  body {
    font-size: 130%;
  }
}

h1 {
  font-size: 1.5em;
}

div p,
#id:first-line {
  background-color: red;
  background-style: none;
}

div p {
  margin: 0;
  padding: 1em;
}

div p + p {
  padding-top: 0;
}
```

On peut écrire le même code CSS en retirant la plupart des espaces — le code ci-dessous est équivalent au précédent pour un navigateur, mais, vous l'admettrez, plus difficile à lire pour un humain !

```css
body {
  font:
    1em/150% Helvetica,
    Arial,
    sans-serif;
  padding: 1em;
  margin: 0 auto;
  max-width: 33em;
}
@media (min-width: 70em) {
  body {
    font-size: 130%;
  }
}

h1 {
  font-size: 1.5em;
}

div p,
#id:first-line {
  background-color: red;
  background-style: none;
}
div p {
  margin: 0;
  padding: 1em;
}
div p + p {
  padding-top: 0;
}
```

La mise en forme de votre code est une question de goût personnel. Si vous travaillez en équipe, vous devrez sans doute vous plier aux conventions admises au sein de cette équipe.

Il n'est pourtant pas possible de supprimer tous les espaces dans un fichier CSS. La suppression ou l'ajout d'espaces dans le code CSS peut produire des erreurs. Par exemple, les déclarations suivantes sont valides en CSS :

```css
margin: 0 auto;
padding-left: 10px;
```

Mais les suivantes sont invalides :

```css
margin: 0auto;
padding- left: 10px;
```

`0auto` n'est pas reconnu comme une valeur possible pour la propriété `margin` (`0` et `auto` sont chacune une valeur possible). Deux valeurs attribuées à une même propriété devront toujours être séparées par au moins un espace.

Le navigateur ne connaît pas la propriété `padding-` . Les noms de propriété ou de valeur doivent être écrits tels quels sans rajouter d'espace.

**À votre tour, ajoutez ou supprimez des espaces dans votre CSS pour voir dans quels cas rien ne change et dans quels cas tout est cassé.**

## À suivre…

Il est utile de comprendre, au moins dans les grandes lignes, comment votre navigateur calcule le rendu d'une page web à partir des fichiers HTML et CSS. Dans la prochaine leçon — [Comment CSS fonctionne](/fr/docs/Learn/CSS/First_steps/How_CSS_works) — nous examinerons donc ce point.

{{PreviousMenuNext("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}
