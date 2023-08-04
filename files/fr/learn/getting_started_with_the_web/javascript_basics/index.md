---
title: Les bases de JavaScript
slug: Learn/Getting_started_with_the_web/JavaScript_basics
---

{{LearnSidebar}}
{{PreviousMenuNext("Apprendre/Commencer_avec_le_web/Les_bases_CSS", "Apprendre/Commencer_avec_le_web/Publier_votre_site_web","Apprendre/Commencer_avec_le_web")}}

JavaScript est un langage de programmation qui ajoute de l'interactivité à votre site web (par exemple&nbsp;: jeux, réponses quand on clique sur un bouton ou des données entrées dans des formulaires, composition dynamique, animations). Cet article vous aide à débuter dans ce langage passionnant et vous donne une idée de ses possibilités.

## Qu'est le JavaScript, réellement ?

{{Glossary("JavaScript")}} («&nbsp;JS&nbsp;» en abrégé) est un langage de {{Glossary("Dynamic programming language", "programmation dynamique")}} complet qui, appliqué à un document {{Glossary("HTML")}}, peut fournir une interactivité dynamique sur les sites Web. Il a été inventé par Brendan Eich, co-fondateur du projet Mozilla, de la Mozilla Foundation et de la Mozilla Corporation.

JavaScript est d'une incroyable flexibilité. Vous pouvez commencer petit, avec des carrousels, des galeries d'images, des variations de mises en page et des réponses aux clics de boutons. Avec plus d'expérience, vous serez en mesure de créer des jeux, des graphiques 2D et 3D animés, des applications complètes fondées sur des bases de données et bien plus encore !

JavaScript est plutôt compact tout en étant très souple. Les développeurs ont écrit de nombreux outils sur le cœur du langage JavaScript, créant des fonctionnalités supplémentaires très simplement. Parmi ces outils, il y a :

- des Interfaces de Programmation d'Applications pour navigateurs ({{Glossary("API","API")}}) — API intégrées aux navigateurs web permettant de créer dynamiquement du HTML, de définir des styles de CSS, de collecter et manipuler un flux vidéo depuis la webcam de l'utilisateur ou de créer des graphiques 3D et des échantillonnages audio.
- des API tierces‑parties permettant aux développeurs d'incorporer dans leurs sites des fonctionnalités issues d'autres fournisseurs de contenu, comme Twitter ou Facebook.
- des modèles et bibliothèques tierces‑parties applicables à votre HTML permettant de mettre en œuvre rapidement des sites et des applications.

Comme cet article est une introduction simplifiée à JavaScript, nous n'allons pas compliquer les choses à ce stade en entrant dans les détails sur les différences entre le coeur du langage JavaScript et les différents outils cités plus haut. Vous pourrez entrer dans ces détails plus tard grâce à notre [centre d'apprentissage JavaScript](/fr/docs/Apprendre/JavaScript), et le reste du MDN.

Ci-dessous nous allons vous présenter quelques aspects du coeur du langage, et vous pratiquerez aussi en manipulant les fonctionnalités des API navigateur. Amusez-vous !

## Un exemple « hello world »

Le paragraphe précédent laisse entrevoir quelque chose de passionnant, et cela l'est vraiment — JavaScript est une technologie web parmi les plus dynamiques. Une fois que vous commencerez à être autonome en JavaScript, vous entrerez dans une nouvelle dimension de puissance et créativité.

Cependant, être à l'aise avec JavaScript est plus dur que de l'être avec HTML ou CSS. Vous pourrez démarrer petit et continuer à travailler par petites étapes de façon soutenue. Pour commencer, nous allons vous montrer comment ajouter un JavaScript basique à votre page, en créant un exemple « Hello world&nbsp;!&nbsp;» ([la norme en matière d'exemples de programmation de base](https://fr.wikipedia.org/wiki/Hello_world)).

> **Attention :** Si vous rejoignez cette série d'articles en cours de route, [téléchargez cet exemple de code](https://github.com/mdn/beginner-html-site-styled/archive/gh-pages.zip) et utilisez‑le comme point de départ.

1. Tout d'abord, allez sur votre site de test et créez un nouveau dossier nommé «&nbsp;scripts&nbsp;» (sans guillemets). Ensuite, dans le nouveau dossier `scripts` que vous venez de créer, créez un nouveau fichier appelé main.js. Sauvegardez-le dans votre dossier scripts.
2. Ensuite, dans votre fichier `index.html`, ajoutez l'élément suivant sur une nouvelle ligne avant la balise fermante `</body>` :

   ```html
   <script src="scripts/main.js"></script>
   ```

3. Cet élément a le même rôle que l'élément {{htmlelement("link")}} pour le CSS — il applique le code JavaScript à la page, de sorte qu'il puisse avoir de l'effet sur le HTML (en même temps que le CSS et autres sur la page).
4. Maintenant ajoutez le code suivant dans `main.js`&nbsp;:

   ```js
   let myHeading = document.querySelector("h1");
   myHeading.textContent = "Bonjour, monde !";
   ```

5. Assurez-vous que les fichiers HTML et JavaScript soient enregistrés puis chargez `index.html` dans votre navigateur. Vous devriez obtenir quelque chose comme :![](hello-world.png)

> **Note :** La raison pour laquelle nous avons placé l'élément {{htmlelement("script")}} en bas du fichier HTML est que le HTML est chargé par le navigateur dans l'ordre dans lequel il apparaît dans le fichier. Si le JavaScript est chargé en premier et qu'il est supposé affecter le HTML en dessous, il pourrait ne pas fonctionner, car le JavaScript serait chargé avant le HTML sur lequel il est supposé travailler. Par conséquent, placer JavaScript près du bas de la page HTML est souvent la meilleure stratégie.

### Que s'est-il passé ?

Le texte du titre a été changé en «Bonjour, monde ! » en utilisant JavaScript. Pour cela, on a utilisé une fonction appelée {{domxref("Document.querySelector", "querySelector()")}} pour obtenir une référence sur l'en‑tête et la stocker dans une variable appelée `myHeading`. C'est assez proche de ce qu'on a fait avec les sélecteurs CSS. Lorsqu'on souhaite manipuler un élément, il faut d'abord le sélectionner.

Ensuite, nous fixons à «&nbsp;Bonjour, monde !&nbsp;» la valeur de la propriété {{domxref("Node.textContent", "textContent")}} de la variable `myHeading` (elle représente le contenu du titre).

> **Note :** Les deux fonctions que vous avez utilisées ci-dessus font partie de l'API Document Object Model (DOM), qui vous permet de manipuler les documents.

## Les bases du JavaScript en accéléré

Nous allons explorer les fonctionnalités de base de JavaScript pour que vous puissiez mieux comprendre comment il fonctionne. Ces fonctionnalités sont communes à la plupart des langages de programmation, si vous comprenez ces éléments en JavaScript, vous êtes en bonne voie de pouvoir programmer à peu près n'importe quoi !

> **Attention :** Tout au long de cet article, vous pouvez saisir les lignes de code dans votre console JavaScript pour voir ce qui se passe. Pour plus de détails sur les consoles JavaScript, vous pouvez lire [Découvrir les outils de développement présents dans le navigateur](/fr/Apprendre/Découvrir_outils_développement_navigateurs).

### Variables

Les {{Glossary("Variable", "variables")}} sont des conteneurs dans lesquels on peut stocker des valeurs. Pour commencer, il faut déclarer une variable avec le mot-clé `let` en le faisant suivre de son nom&nbsp;:

```js
let myVariable;
```

> **Note :** Un point-virgule en fin de ligne indique là où se termine l'instruction&nbsp;; ce n'est impérativement requis que si vous devez séparer des instructions sur une même ligne. Toutefois, certains pensent qu'il est de bonne pratique de les mettre à la fin de chaque instruction. Il y a d'autres règles à propos de leur emploi ou non‑emploi — voyez [Guide des points‑virgule en JavaScript](http://news.codecademy.com/your-guide-to-semicolons-in-javascript/) pour plus de détails.

> **Note :** Vous pouvez utiliser (quasiment) n'importe quel nom pour nommer une variable, mais il y a quelques restrictions (voyez [cet article](/fr/docs/Web/JavaScript/Guide/Types_et_grammaire#Variables) sur les règles de nommage des variables). Si vous avez un doute, vous pouvez [vérifier le nom de votre variable](https://mothereff.in/js-variables) pour voir s'il est valide.

> **Note :** JavaScript est sensible à la casse — `myVariable` est une variable différente de `myvariable`. Si vous avez des problèmes dans votre code, vérifiez la casse &nbsp;!

Une fois une variable déclarée, vous pouvez lui donner une valeur :

```js
myVariable = "Bob";
```

Vous pouvez faire les deux opérations sur une même ligne si vous le souhaitez&nbsp;:

```js
let myVariable = "Bob";
```

Vous retrouvez la valeur en appelant simplement la variable par son nom&nbsp;:

```js
myVariable;
```

Une fois qu'on a donné une valeur à une variable, on peut la changer plus loin :

```js
let myVariable = "Bob";
myVariable = "Étienne";
```

Notez que les variables peuvent contenir des [types différents de données](/fr/docs/Web/JavaScript/Structures_de_données#Les_valeurs_primitives)&nbsp;:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Variable</th>
      <th scope="col">Explication</th>
      <th scope="col">Exemple</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        {{Glossary("String", "Chaîne de caractères")}}
      </th>
      <td>
        Une suite de caractères connue sous le nom de chaîne. Pour indiquer que
        la valeur est une chaîne, il faut la placer entre guillemets.
      </td>
      <td><code>let myVariable = 'Bob';</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary( "Number" ,"Nombre")}}</th>
      <td>Un nombre. Les nombres ne sont pas entre guillemets.</td>
      <td><code>let myVariable = 10;</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary( "Boolean" ,"Booléen")}}</th>
      <td>
        Une valeur qui signifie vrai ou faux. <code>true</code>/<code
          >false</code
        >
        sont des mots-clés spéciaux en JS, ils n'ont pas besoin de guillemets.
      </td>
      <td><code>let myVariable = true;</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary( "Array" ,"Tableau")}}</th>
      <td>
        Une structure qui permet de stocker plusieurs valeurs dans une seule
        variable.
      </td>
      <td>
        <p>
          <code>let myVariable = [1,'Bob','Étienne',10];</code
          ><br />Référez‑vous à chaque élément du tableau ainsi <code
            >: myVariable[0]</code
          >, <code>myVariable[1]</code>, etc.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary( "Object" ,"Objet")}}</th>
      <td>
        À la base de toute chose. Tout est un objet en JavaScript et peut être
        stocké dans une variable. Gardez cela en mémoire tout au long de ce
        cours.
      </td>
      <td>
        <code>let myVariable = document.querySelector('h1'); </code>tous les
        exemples au dessus sont aussi des objets.
      </td>
    </tr>
  </tbody>
</table>

Pourquoi a-t-on besoin de variables ? Et bien parce qu'elles sont essentielles à la programmation. Si les valeurs ne pouvaient pas changer, on ne pourrait rien faire de dynamique, comme personnaliser un message de bienvenue ou changer l'image affichée dans une galerie.

### Commentaires

Il est possible d'intégrer des commentaires dans du code JavaScript, de la même manière que dans les CSS :

```js
/*
Tout ce qui est écrit ici est entre commentaires.
*/
```

Si votre commentaire tient sur une ligne, vous pouvez utiliser deux barres obliques pour indiquer un commentaire :

```js
// Voici un commentaire
```

### Opérateurs

Un {{Glossary("operator","opérateur")}} est un symbole mathématique qui produit un résultat en fonction de deux valeurs (ou variables). Le tableau suivant liste certains des opérateurs les plus simples ainsi que des exemples que vous pouvez tester dans votre console JavaScript.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Opérateur</th>
      <th scope="col">Explication</th>
      <th scope="col">Symbole(s)</th>
      <th scope="col">Exemple</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Addition</th>
      <td>
        Utilisé pour ajouter deux nombres ou concaténer (accoler) deux chaînes.
      </td>
      <td><code>+</code></td>
      <td>
        <code>6 + 9;<br />"Bonjour " + "monde&nbsp;!";</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Soustraction, multiplication, division</th>
      <td>Les opérations mathématiques de base.</td>
      <td><code>-</code>, <code>*</code>, <code>/</code></td>
      <td>
        <code
          >9 - 3;<br />8 * 2; // pour multiplier, on utilise un astérisque<br />9
          / 3;</code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Assignation</th>
      <td>
        On a déjà vu cet opérateur : il affecte une valeur à une variable.
      </td>
      <td><code>=</code></td>
      <td><code>let myVariable = 'Bob';</code></td>
    </tr>
    <tr>
      <th scope="row">Égalité</th>
      <td>
        Teste si deux valeurs sont égales et renvoie un booléen
        <code>true</code>/<code>false</code> comme résultat.
      </td>
      <td><code>===</code></td>
      <td>
        <code>let myVariable = 3;<br />myVariable === 4;</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Négation , N'égale pas</th>
      <td>
        <p>
          Renvoie la valeur logique opposée à ce qu'il précède&nbsp;; il change <code
            >true</code
          >
          en <code>false</code>, etc. Utilisé avec l'opérateur d'égalité,
          l'opérateur de négation teste que deux valeurs
          <em>ne sont pas</em> égales.
        </p>
      </td>
      <td><code>!</code>, <code>!==</code></td>
      <td>
        <p>
          L'expression de base est vraie, mais la comparaison renvoie
          <code>false</code> parce que nous la nions :
        </p>
        <p>
          <code>let myVariable = 3;<br />!(myVariable === 3);</code>
        </p>
        <p>
          On teste ici que "<code>myVariable</code> n'est PAS égale à 3". Cela
          renvoie <code>false</code>, car elle est égale à 3.
        </p>
        <p>
          <code><code>let myVariable = 3;</code><br />myVariable !== 3;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>

Il y a nombre d'autres opérateurs à explorer, mais nous nous en tiendrons à ceux-là pour le moment. Voir [Expressions et opérateurs](/fr/docs/Web/JavaScript/Reference/Opérateurs) pour la liste complète.

> **Note :** Mélanger les types de données peut conduire à d'étranges résultats lors des opérations, donc prenez soin de vous référer correctement à vos variables et d'obtenir les résultats attendus. Par exemple, entrez `"35" + "25"` dans votre console. Pourquoi n'obtenez-vous pas le résultat attendu ? Parce que les guillemets ont transformé les nombres en chaînes, et donc vous avez concaténé deux chaînes au lieu d'additionner deux nombres. Si vous entrez `35 + 25`, vous obtiendrez le bon résultat.

### Structures conditionnelles

Les structures conditionnelles sont des éléments du code qui permettent de tester si une expression est vraie ou non et d'exécuter des instructions différentes selon le résultat. La structure conditionnelle utilisée la plus fréquemment est `if ... else`. Par exemple :

```js
let iceCream = "chocolat";
if (iceCream === "chocolat") {
  alert("J'adore la glace au chocolat !");
} else {
  alert("Ooooh, mais j'aurais préféré au chocolat.");
}
```

L'expression contenue dans `if ( ... )` correspond au test — Ici, on utilise l'opérateur d'égalité (décrit plus haut) pour comparer la variable iceCream avec la chaîne de caractères `chocolat` pour voir si elles sont égales. Si cette comparaison renvoie `true`, le premier bloc de code sera exécuté. Sinon, le premier bloc est sauté et c'est le code du second bloc, celui présent après `else`, qui est exécuté.

### Fonctions

Les {{Glossary("Fonction", "fonctions")}} sont un moyen de compacter des fonctionnalités en vue de leur réutilisation. Quand vous avez besoin de la procédure, vous pouvez appeler une fonction, par son nom, au lieu de ré‑écrire la totalité du code chaque fois. Nous avons déjà utilisé des fonctions plus haut, par exemple :

```js
let myVariable = document.querySelector("h1");
```

```js
alert("Bonjour !");
```

Ces fonctions (`querySelector` et `alert`) sont disponibles dans le navigateur et vous pouvez les utiliser où bon vous semble.

Si vous voyez quelque chose qui ressemble à un nom de variable et qui est suivi de parenthèses — `()` —, c'est probablement une fonction. Les fonctions prennent souvent des {{Glossary("Argument", "arguments")}} — bouts de données dont elles ont besoin pour faire leur travail. Ils sont placés entre parenthèses, séparés par des virgules s'il y en a plusieurs.

Par exemple, la fonction `alert()` fait apparaître une fenêtre de pop-up dans la fenêtre du navigateur, mais vous devez donner une chaîne comme argument pour indiquer à la fonction ce que l'on souhaite écrire dans cette fenêtre.

La bonne nouvelle est que vous pouvez définir vos propres fonctions — par exemple, vous pouvez écrire une fonction toute simple qui prend deux arguments et les multiplie :

```js
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}
```

Vous pouvez déclarer cette fonction dans la console avant de l'utiliser plusieurs fois :

```js
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);
```

> **Note :** L'instruction [`return`](/fr/docs/Web/JavaScript/Reference/Instructions/return) indique au navigateur qu'il faut renvoyer la variable `result` en dehors de la fonction afin qu'elle puisse être réutilisée par ailleurs. Cette instruction est nécessaire car les variables définies à l'intérieur des fonctions sont uniquement disponibles à l'intérieur de ces fonctions. C'est ce qu'on appelle une {{Glossary("Portée", "portée")}} (pour en savoir plus, lisez [cet article](/fr/docs/Web/JavaScript/Guide/Types_et_grammaire#Les_portées_de_variables)).

### Événements

Pour qu'un site web soit vraiment interactif, vous aurez besoin d'événements. Les événements sont des structures de code qui « écoutent » ce qui se passe dans le navigateur et déclenchent du code en réponse. Le meilleur exemple est [l'événement cliquer](/fr/docs/Web/Events/click), déclenché par le navigateur quand vous cliquez sur quelque chose avec la souris. À titre de démonstration, saisissez ces quelques lignes dans la console, puis cliquez sur la page en cours&nbsp;:

```js
document.querySelector("html").addEventListener("click", function () {
  alert("Aïe, arrêtez de cliquer !!");
});
```

Il existe plein de méthodes pour « attacher » un événement à un élément. Dans cet exemple, nous avons sélectionné l'élément HTML concerné et nous avons défini un gestionnaire [`onclick`](/fr/docs/Web/API/GlobalEventHandlers/onclick) qui est une propriété qui est égale à une fonction anonyme (sans nom) qui contient le code à exécuter quand l'utilisateur clique.

On pourra noter que :

```js
document.querySelector("html").addEventListener("click", function () {});
```

est équivalent à :

```js
let myHTML = document.querySelector("html");
myHTML.addEventListener("click", function () {});
```

La première syntaxe est simplement plus courte.

## Booster notre site web

Maintenant que nous avons vu quelques bases en JavaScript, nous allons ajouter quelques fonctionnalités intéressantes à notre site pour voir ce qu'il est possible de faire.

### Ajouter un changeur d'image

Dans cette section, nous allons incorporer une autre image au site en utilisant quelques fonctionnalités de l'API DOM et un peu de JavaScript pour alterner entre les deux images lorsqu'on clique sur l'image affichée.

1. Tout d'abord, trouvez une autre image à afficher sur le site. Assurez‑vous qu'elle soit de même taille que la première, ou le plus possible approchante.
2. Enregistrez cette image dans votre dossier `images`.
3. Renommez cette image «&nbsp;firefox2.png&nbsp;» (sans les guillemets).
4. Dans le fichier `main.js`, entrez ce code JavaScript (si votre code « Bonjour, monde&nbsp;» est toujours là, supprimez‑le) :

   ```js
   let myImage = document.querySelector("img");

   myImage.addEventListener("click", function () {
     let mySrc = myImage.getAttribute("src");
     if (mySrc === "images/firefox-icon.png") {
       myImage.setAttribute("src", "images/firefox2.png");
     } else {
       myImage.setAttribute("src", "images/firefox-icon.png");
     }
   });
   ```

5. Sauvegardez tous les fichiers puis chargez `index.html` dans le navigateur. Maintenant, si vous cliquez sur l'image, elle doit changer pour l'autre !

Dans cet exemple, nous utilisons une référence vers l'élement {{htmlelement("img")}} grâce à la variable `myImage`. Ensuite, nous égalons la propriété du gestionnaire d'événement `onclick` de cette variable à une fonction sans nom (une fonction anonyme). Maintenant chaque fois que cet élément est cliqué :

1. nous récupèrons la valeur de l'attribut `src` de l'image.
2. nous utilisons une structure conditionnelle pour voir si la valeur de `src` est égale au chemin de l'image originale :

   1. si c'est le cas, nous changeons la valeur de `src` et indiquons le chemin vers la seconde image, forçant le chargement de cette image dans l'élément {{htmlelement("img")}}.
   2. si ce n'est pas le cas (ce qui signifie que l'image a déjà été changée), la valeur de `src` revient à sa valeur initiale.

### Ajouter un message d'accueil personnalisé

Continuons en ajoutant encore un peu de code pour changer le titre de la page afin d'inclure un message d'accueil personnalisé pour le visiteur du site. Ce message d'accueil sera conservé quand l'utilisateur quittera le site et s'il y revient — nous le sauvegarderons avec l'[API Web Storage](/fr/docs/Web/API/Web_Storage_API). Nous ajouterons également une option pour pouvoir changer l'utilisateur et le message d'accueil si besoin.

1. Dans le fichier `index.html`, ajoutons la ligne suivante avant l'élément {{htmlelement("script")}} :

   ```html
   <button>Changer d'utilisateur</button>
   ```

2. Dans le fichier `main.js`, ajoutons le code suivant à la fin du fichier. Cela fait référence au nouveau bouton ajouté et à l'élément de titre puis enregistrons ces références dans des variables :

   ```js
   let myButton = document.querySelector("button");
   let myHeading = document.querySelector("h1");
   ```

3. Ajoutons maintenant les fonctionnalités pour avoir ce message d'accueil personnalisé (cela ne servira pas immédiatement mais un peu plus tard) :

   ```js
   function setUserName() {
     let myName = prompt("Veuillez saisir votre nom.");
     localStorage.setItem("nom", myName);
     myHeading.textContent = "Mozilla est cool, " + myName;
   }
   ```

   Cette fonction utilise la fonction [`prompt()`](/fr/docs/Web/API/Window/prompt) qui affiche une boîte de dialogue, un peu comme `alert()` sauf qu'elle permet à l'utilisateur de saisir des données et de les enregistrer dans une variable quand l'utilisateur clique sur _OK_. Dans notre exemple, nous demandons à l'utilisateur de saisir son nom. Ensuite, nous appelons une API appelée `localStorage`. Cette API permet de stocker des données dans le navigateur pour pouvoir les réutiliser ultérieurement. Nous utilisons la fonction `setItem()` de cette API pour stocker la donnée qui nous intéresse dans un conteneur appelé `'nom'`. La valeur stockée ici est la valeur de la variable `myName` qui contient le nom saisi par l'utilisateur. Enfin, on utilise la propriété `textContent` du titre pour lui affecter un nouveau contenu.

4. Ajoutons ensuite ce bloc `if ... else`. Ce code correspond à l'étape d'initialisation car il sera utilisé la première fois que la page est chargée par l'utilisateur :

   ```js
   if (!localStorage.getItem("nom")) {
     setUserName();
   } else {
     let storedName = localStorage.getItem("nom");
     myHeading.textContent = "Mozilla est cool, " + storedName;
   }
   ```

   Ce bloc utilise l'opérateur de négation (NON logique, représenté avec le !) pour vérifier si le navigateur possède une donnée enregistrée appelée `nom`. Si non, la fonction `setUserName()` est appelée pour créer cette donnée. Si elle existe (ce qui correspond au cas où l'utilisateur est déjà venu sur la page), on la récupère avec la méthode `getItem()` et on définit le contenu de `textContent` pour le titre avec une chaîne suivie du nom de l'utilisateur, comme nous le faisons dans `setUserName().`

5. Enfin, on associe le gestionnaire `onclick` au bouton. De cette façon, quand on clique sur le bouton, cela déclenchera l'exécution de la fonction `setUserName()`. Ce bouton permet à l'utilisateur de modifier la valeur s'il le souhaite:

   ```js
   myButton.addEventListener("click", function () {
     setUserName();
   });
   ```

Récapitulons : la première fois que l'utilisateur viste le site, il sera invité à saisir un nom d'utilisateur. Ce nom sera utilisé pour afficher un message d'accueil personnalisé. Si l'utilisateur souhaite changer son nom, il peut cliquer sur le bouton. En supplément, le nom est enregistré pour plus tard grâce à l'API `localStorage`, cela permet à l'utilisateur de retrouver son nom, même s'il a fermé la page et/ou le navigateur et qu'il revient plus tard !

## Conclusion

Si vous avez suivi les étapes détaillées sur cette page, vous devriez obtenir un résultat semblable à celui-ci (vous pouvez aussi [voir la version que nous avons obtenue ici](https://mdn.github.io/beginner-html-site-scripted/)) :

![](website-screen-scripted.png)

Si vous êtes bloqué, n'hésitez pas à comparer votre travail et vos fichiers avec [ceux disponibles sur GitHub qui correspondent à notre modèle finalisé](https://github.com/mdn/beginner-html-site-scripted/blob/gh-pages/scripts/main.js).

Au fur et à mesure de cet article, nous n'avons fait qu'effleurer la surface de JavaScript. Si vous avez envie d'en savoir plus sur JavaScript, vous pouvez utiliser [notre Guide JavaScript](/fr/docs/Web/JavaScript/Guide).

{{PreviousMenuNext("Apprendre/Commencer_avec_le_web/Les_bases_CSS", "Apprendre/Commencer_avec_le_web/Publier_votre_site_web","Apprendre/Commencer_avec_le_web")}}
