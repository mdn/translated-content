---
title: "JavaScript : Ajouter de l'interactivité"
short-title: Ajouter de l'interactivité
slug: Learn_web_development/Getting_started/Your_first_website/Adding_interactivity
original_slug: Learn/Getting_started_with_the_web/JavaScript_basics
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}

JavaScript est un langage de programmation qui ajoute de l'interactivité aux sites web. Vous pouvez l'utiliser pour contrôler à peu près tout — validation de données de formulaire, fonctionnalités de boutons, logique de jeu, styles dynamiques, animations, et bien plus encore. Cet article vous initie à JavaScript et vous guide pour ajouter des fonctionnalités ludiques à votre premier site web.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Connaissance de base de votre système d'exploitation, des logiciels de base que vous utiliserez pour créer un site web, et des systèmes de fichiers.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Le but et la fonction de JavaScript.</li>
          <li>Une compréhension de base des fondamentaux du langage JavaScript, comme les variables, opérateurs, structures conditionnelles, fonctions et événements.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Qu'est-ce que le JavaScript ?

{{Glossary("JavaScript")}} («&nbsp;JS&nbsp;» en abrégé) est un langage de programmation complet — il contient toutes les fonctionnalités classiques que vous avez pu voir dans d'autres langages de programmation (ou au moins en avoir entendu parler), comme les **variables**, les **boucles** et les **fonctions**.

JavaScript, lorsqu'il est utilisé sur des pages web (il peut aussi être utilisé ailleurs), fonctionne généralement ainsi&nbsp;:

- Obtenir des références vers une ou plusieurs valeurs, comme des nombres ou des éléments de la page.
- Faire quelque chose avec ces valeurs, comme additionner les nombres.
- Retourner un résultat qui pourra être utilisé pour faire autre chose plus tard. Par exemple, vous pourriez vouloir afficher la somme de ces nombres sur la page.

Voyons un exemple. Nous allons utiliser la même liste de base que dans les précédents articles&nbsp;:

```html live-sample___basic-js
<p>Instructions de la vie&nbsp;:</p>

<ul>
  <li>Manger</li>
  <li>Dormir</li>
  <li>Recommencer</li>
</ul>
```

Nous allons aussi définir une classe CSS appelée `.fini` qui mettra en forme tout élément auquel elle est appliquée, pour le faire ressembler à une tâche terminée avec un texte vert et une rature pour barrer le texte. Nous l'appliquerons à nos éléments `<li>` en JavaScript à l'étape suivante.

```css live-sample___basic-js
.fini {
  color: darkseagreen;
  text-decoration: line-through solid black 2px;
}
```

Passons maintenant au JavaScript. Ici, nous stockons d'abord les références aux éléments `<li>` dans une variable appelée `lesElements`. Nous définissons ensuite une fonction appelée `changerValidation()` qui ajoute la classe `fini` à un élément de liste s'il ne l'a pas déjà, et la retire s'il l'a. Enfin, nous parcourons les éléments de la liste (avec `forEach()`) et ajoutons un écouteur d'événement (avec `addEventListener()`) à chaque élément de liste pour que, lorsqu'il est cliqué, la classe `fini` soit basculée, appliquant ainsi le CSS défini plus haut.

```js live-sample___basic-js
const lesElements = document.querySelectorAll("li");

function changerValidation(e) {
  if (!e.target.className) {
    e.target.className = "fini";
  } else {
    e.target.className = "";
  }
}

lesElements.forEach((element) => {
  element.addEventListener("click", changerValidation);
});
```

Ne vous inquiétez pas si vous ne comprenez pas encore ce JavaScript. Prendre en main JavaScript est plus difficile qu'avec HTML et CSS, mais tout deviendra plus clair plus loin dans le cours.

Cet exemple s'affichera ainsi dans un navigateur web&nbsp;:

{{EmbedLiveSample("basic-js", "100%", "140px")}}

Essayez de cliquer plusieurs fois sur les éléments de la liste et notez comment le style «&nbsp;fini&nbsp;» s'active ou se désactive à chaque clic. Pas mal pour 11 lignes de JavaScript.

## Un exemple « hello world »

Pour commencer à écrire un peu de JavaScript, nous allons vous guider pour ajouter un exemple _Hello world&nbsp;!_ à votre site d'exemple. ([«&nbsp;Hello world&nbsp;!&nbsp;»](https://fr.wikipedia.org/wiki/Hello_world) est l'exemple d'introduction standard en programmation.)

> [!WARNING]
> Si vous n'avez pas suivi le reste du cours, [téléchargez cet exemple de code](https://codeload.github.com/mdn/beginner-html-site-styled/zip/refs/heads/gh-pages) et utilisez-le comme point de départ.

1. Dans votre dossier `mon-premier-site` ou dans le dossier d'exemple que vous venez de télécharger, créez un nouveau dossier nommé `scripts`.
2. Dans le dossier `scripts`, créez un nouveau fichier texte appelé `main.js` et enregistrez-le.
3. Ouvrez votre fichier `index.html` et ajoutez ce code sur une nouvelle ligne, juste avant la balise de fermeture `</head>`&nbsp;:

   ```html
   <script async src="scripts/main.js"></script>
   ```

   Cela a le même rôle que l'élément {{htmlelement("link")}} pour le CSS&nbsp;: cela applique le JavaScript à la page pour qu'il puisse agir sur le HTML (en plus du CSS et de tout le reste sur la page).

4. Ajoutez ce code à votre fichier `scripts/main.js`&nbsp;:

   ```js
   // Stocke une référence vers le <h1> dans une variable
   const monTitre = document.querySelector("h1");
   // Met à jour le contenu texte du <h1>
   monTitre.textContent = "Hello world !";
   ```

5. Assurez-vous que les fichiers HTML et JavaScript sont enregistrés, puis chargez `index.html` dans votre navigateur. Vous devriez obtenir quelque chose comme ceci&nbsp;:

![Titre "hello world" au-dessus d'un logo Firefox](hello-world.png)

Voyons comment fonctionne cet exemple.

Nous avons utilisé JavaScript pour changer le texte du titre en `Hello world !`. Nous avons récupéré une référence vers le titre et l'avons stockée dans une variable appelée `monTitre` (un conteneur qui stocke une valeur). C'est similaire à la façon dont vous appliquez du CSS à des éléments&nbsp;: vous sélectionnez d'abord les éléments à cibler avec un sélecteur CSS, puis vous définissez les styles souhaités pour ces éléments. Dans les deux cas, pour agir sur un élément, il faut d'abord le sélectionner.

Ensuite, nous avons défini la valeur de la propriété `textContent` de la variable `monTitre` (qui représente le contenu texte de l'élément `<h1>`) à _Hello world !_.

Les lignes qui commencent par `//` sont des commentaires JavaScript. Comme pour les commentaires HTML et CSS, le navigateur les ignore, ce qui permet d'ajouter des notes pour expliquer le fonctionnement du code.

Passons à l'ajout de nouvelles fonctionnalités à notre site d'exemple.

> [!WARNING]
> Avant d'aller plus loin, supprimez le code «&nbsp;Hello world !&nbsp;» de votre fichier `main.js`. Sinon, le code existant entrera en conflit avec le nouveau code que vous allez ajouter.

## Ajouter un changement d'image

Dans cette section, vous allez utiliser JavaScript et les fonctionnalités de l'[API DOM](/fr/docs/Web/API/HTML_DOM_API) pour alterner l'affichage entre deux images. Ce changement se produira lorsqu'un·e utilisateur·ice cliquera sur l'image affichée.

1. Choisissez une autre image à mettre en avant sur votre site d'exemple. Idéalement, l'image doit avoir la même taille que celle que vous avez ajoutée précédemment, ou s'en approcher le plus possible.
2. Enregistrez cette image dans votre dossier `images`.
3. Ajoutez le code JavaScript suivant à votre fichier `main.js`, en veillant à remplacer `firefox2.png` et les deux occurrences de `firefox-icon.png` par le nom de votre seconde et de votre première image, respectivement.

   ```js
   const monImage = document.querySelector("img");

   monImage.addEventListener("click", () => {
     const maSrc = monImage.getAttribute("src");
     if (maSrc === "images/firefox-icon.png") {
       monImage.setAttribute("src", "images/firefox2.png");
     } else {
       monImage.setAttribute("src", "images/firefox-icon.png");
     }
   });
   ```

4. Enregistrez tous les fichiers et chargez `index.html` dans le navigateur. Désormais, lorsque vous cliquez sur l'image, elle doit changer pour afficher l'autre.

Dans ce code, vous stockez une référence vers votre élément HTML {{htmlelement("img")}} dans la variable `monImage`. Vous lui assignez ensuite une fonction de gestionnaire d'événement `click`. À chaque fois que l'élément `<img>` est cliqué, la fonction effectue les opérations suivantes&nbsp;:

- Récupère la valeur de l'attribut `src` de l'image.
- Utilise une structure conditionnelle (`if...else`) pour vérifier si la valeur de `src` correspond au chemin de l'image d'origine&nbsp;:
  - Si c'est le cas, le code modifie la valeur de `src` pour afficher la seconde image, ce qui force l'autre image à s'afficher dans l'élément `<img>`.
  - Sinon (c'est-à-dire si l'image a déjà été changée), la valeur de `src` revient au chemin de l'image d'origine.

> [!NOTE]
> Cette section introduit plusieurs termes importants. Concepts clés&nbsp;:
>
> - {{Glossary("API")}}&nbsp;: Un ensemble de fonctionnalités qui permet à un·e développeur·euse d'interagir avec un environnement de programmation. Les API Web (comme les fonctionnalités de l'API DOM utilisées ci-dessus) sont construites au-dessus du langage JavaScript et permettent de manipuler différentes parties du navigateur et des pages web affichées.
> - [Événements](/fr/docs/Learn_web_development/Core/Scripting/Events)&nbsp;: Éléments qui se produisent dans le navigateur. Ils sont essentiels pour rendre les sites web interactifs. Vous pouvez exécuter du code en réponse à des événements à l'aide de **fonctions de gestionnaire d'événements** — ce sont des blocs de code qui s'exécutent lorsqu'un événement se produit. L'exemple le plus courant est l'[événement click](/fr/docs/Web/API/Element/click_event), déclenché par le navigateur lorsqu'un·e utilisateur·ice clique sur un élément.
> - [Fonctions](/fr/docs/Learn_web_development/Core/Scripting/Functions)&nbsp;: Une façon d'encapsuler du code que vous souhaitez réutiliser. Vous pouvez définir votre code dans une fonction une fois, puis l'exécuter autant de fois que vous le souhaitez, ce qui évite de réécrire le même code. Dans notre exemple, nous avons défini une fonction de gestionnaire d'événement `click`, qui s'exécute à chaque clic sur l'image.
> - [Structures conditionnelles](/fr/docs/Learn_web_development/Core/Scripting/Conditionals)&nbsp;: Structures de code utilisées pour tester si une expression renvoie `true` ou `false` et exécuter un code différent selon le résultat. La forme la plus courante est l'instruction `if...else`.

## Ajouter un message de bienvenue personnalisé

Nous allons maintenant modifier le titre de la page pour afficher un message de bienvenue personnalisé lors de la première visite de l'utilisateur·ice. Ce message de bienvenue sera enregistré dans le navigateur à l'aide de l'[API Web Storage](/fr/docs/Web/API/Web_Storage_API), ainsi, si l'utilisateur·ice quitte le site et y revient plus tard, ses données personnalisées seront toujours présentes. Nous inclurons également un moyen de modifier ce message.

1. Dans le fichier `index.html`, ajoutez la ligne suivante juste avant la balise de fermeture `</body>`&nbsp;:

   ```html
   <button>Changer d'utilisateur</button>
   ```

2. Dans le fichier `main.js`, placez le code suivant en bas du fichier, exactement tel quel. Cela crée des références vers le nouveau bouton et le titre, chacun étant stocké dans une variable&nbsp;:

   ```js
   let monBouton = document.querySelector("button");
   let monTitre = document.querySelector("h1");
   ```

3. Ajoutez la fonction suivante pour définir le message de bienvenue personnalisé. Elle ne fait encore rien&nbsp;: nous l'appellerons plus tard.

   ```js
   function definirNomUtilisateur() {
     const monNom = prompt("Veuillez saisir votre nom.");
     localStorage.setItem("nom", monNom);
     monTitre.textContent = `Mozilla est génial, ${monNom}`;
   }
   ```

   La fonction `definirNomUtilisateur()` utilise la fonction [`prompt()`](/fr/docs/Web/API/Window/prompt), qui demande à l'utilisateur·ice de saisir une donnée et la stocke dans une variable après avoir cliqué sur _OK_. Ici, nous demandons à l'utilisateur·ice de saisir un nom et nous le stockons dans `monNom`.<br /><br />

   Ensuite, le code utilise l'[API Web Storage](/fr/docs/Web/API/Web_Storage_API), qui permet d'enregistrer des données dans le navigateur et de les récupérer plus tard. Nous utilisons la fonction {{domxref("Storage.setItem", "localStorage.setItem()")}} pour créer et stocker un élément de données appelé `"nom"`, en lui attribuant la valeur de la variable `monNom`, qui contient la saisie de l'utilisateur·ice.<br /><br />

   Enfin, nous définissons la propriété `textContent` du titre sur une chaîne de caractères qui inclut le nom enregistré.

4. Ajoutez le bloc conditionnel suivant après la déclaration de la fonction. Il s'agit de notre _code d'initialisation_ — il s'exécute au chargement de la page pour démarrer le programme&nbsp;:

   ```js
   if (!localStorage.getItem("nom")) {
     definirNomUtilisateur();
   } else {
     const nomEnregistre = localStorage.getItem("nom");
     monTitre.textContent = `Mozilla est génial, ${nomEnregistre}`;
   }
   ```

   La première ligne de ce bloc utilise l'opérateur de négation logique (<i lang="en">NOT</i>, représenté par le caractère `!`) pour vérifier si l'élément de données `nom` n'est _pas_ déjà enregistré dans `localStorage`. Si ce n'est pas le cas, la fonction `definirNomUtilisateur()` s'exécute pour le créer. S'il existe (c'est-à-dire que l'utilisateur·ice a déjà défini un nom lors d'une visite précédente), nous récupérons le nom enregistré avec {{domxref("Storage.getItem", "localStorage.getItem()")}} et nous définissons la propriété `textContent` du titre sur une chaîne de caractères, plus le nom de l'utilisateur·ice — comme dans `definirNomUtilisateur()`.

5. Ajoutez une fonction de gestionnaire d'événement `click` au bouton. Lorsqu'il est cliqué, `definirNomUtilisateur()` s'exécute. Cela permet à l'utilisateur·ice d'enregistrer un autre nom si besoin.

   ```js
   monBouton.addEventListener("click", () => {
     definirNomUtilisateur();
   });
   ```

6. Enregistrez tous les fichiers et chargez `index.html` dans le navigateur. Vous devriez être invité·e à saisir votre nom. Après validation, il apparaîtra dans le `<h1>` comme message de bienvenue personnalisé. Remarquez que la personnalisation persiste même après rechargement de la page. Vous pouvez cliquer sur le bouton «&nbsp;Changer d'utilisateur&nbsp;» pour saisir un nouveau nom.

> [!NOTE]
> Le terme [opérateur](/fr/docs/Learn_web_development/Core/Scripting/Math) désigne un caractère du langage JavaScript qui effectue une opération sur une ou plusieurs valeurs. Par exemple&nbsp;: `+` (additionne des valeurs), `-` (soustrait une valeur à une autre), et `!` (négation d'une valeur — comme vu plus haut).

## Un nom d'utilisateur null ?

Lorsque vous exécutez l'exemple et que la boîte de dialogue vous invite à saisir votre nom, essayez d'appuyer sur le bouton _Annuler_. Vous devriez obtenir un titre affichant _Mozilla est génial, null_. Cela se produit parce que la valeur est définie sur [`null`](/fr/docs/Web/JavaScript/Reference/Operators/null) lorsque vous annulez la saisie. En JavaScript, _null_ est une valeur spéciale qui représente l'absence de valeur.

Essayez aussi de cliquer sur _OK_ sans saisir de nom. Vous devriez obtenir un titre affichant _Mozilla est génial,_ car vous avez défini `monNom` sur une chaîne de caractères vide.

Pour éviter ces problèmes, vous pouvez ajouter une condition supplémentaire pour vérifier que l'utilisateur·ice n'a pas laissé le nom vide. Modifiez votre fonction `definirNomUtilisateur()` comme suit&nbsp;:

```js
function definirNomUtilisateur() {
  const monNom = prompt("Veuillez saisir votre nom.");
  if (!monNom) {
    definirNomUtilisateur();
  } else {
    localStorage.setItem("nom", monNom);
    monTitre.textContent = `Mozilla est génial, ${monNom}`;
  }
}
```

En langage courant&nbsp;: si `monNom` n'a pas de valeur, on relance `definirNomUtilisateur()` depuis le début. Si la condition ci-dessus n'est pas vraie (donc si la variable a une valeur), on l'enregistre dans `localStorage` et on l'affiche dans le titre.

## Conclusion

Si vous avez suivi toutes les instructions de cet article, vous devriez obtenir une page ressemblant à l'image ci-dessous. Vous pouvez aussi [voir notre version <sup>(angl.)</sup>](https://mdn.github.io/beginner-html-site-scripted/).

![Apparence finale de la page HTML après création des éléments : un en-tête, un grand logo centré, du contenu et un bouton](website-screen-scripted.png)

Si vous êtes bloqué·e, vous pouvez comparer votre travail avec notre [exemple final sur GitHub <sup>(angl.)</sup>](https://github.com/mdn/beginner-html-site-scripted/blob/main/scripts/main.js).

Nous n'avons fait qu'effleurer la surface de JavaScript dans cet article. Vous en apprendrez beaucoup plus dans notre module principal [Scripts dynamiques avec JavaScript](/fr/docs/Learn_web_development/Core/Scripting) plus loin dans le cours.

## Voir aussi

- [Apprendre JavaScript <sup>(angl.)</sup>](https://scrimba.com/learn-javascript-c0v?via=mdn) sur Scrimba <sup>[_Partenaire d'apprentissage MDN_](/fr/docs/MDN/Writing_guidelines/Learning_content#liens_partenaires_et_intégrations)</sup>
  - : Le cours _Apprendre JavaScript_ de [Scrimba](https://scrimba.com?via=mdn) vous enseigne JavaScript à travers plus de 140 défis de code interactifs, en réalisant des projets comme un jeu, une extension de navigateur ou même une application mobile. Scrimba propose des leçons interactives et ludiques animées par des formateur·ice·s expérimenté·e·s.
- [Apprendre JavaScript <sup>(angl.)</sup>](https://learnjavascript.online/)
  - : Une excellente ressource pour les futur·e·s développeur·euse·s web&nbsp;! Apprenez JavaScript dans un environnement interactif, avec des leçons courtes et des tests interactifs, guidé·e par une évaluation automatisée. Les 40 premières leçons sont gratuites. Le cours complet est disponible pour un petit paiement unique.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}
