---
title: Générateur d'histoires absurdes
slug: Learn/JavaScript/First_steps/Silly_story_generator
translation_of: Learn/JavaScript/First_steps/Silly_story_generator
---
{{LearnSidebar}}{{PreviousMenu("Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}

Dans cette évaluation, vous aurez pour tâche d'utiliser les connaissances que vous avez apprises dans les articles de ce module et de les appliquer dans le but de créer une appli ludique qui génère des histoires absurdes au hasard. Amusez-vous bien !

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        <p>
          Avant de vous lancer dans cette évaluation, vous devez avoir déjà
          travaillé sur tous les articles de ce module.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>
        <p>
          Tester la compréhension des fondamentaux JavaScript tels que les
          variables, les nombres, les opérateurs, les chaînes de caractères et
          les tableaux.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Point de départ

Pour commencer cette évaluation :

- Allez [chercher le fichier HTML](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/assessment-start/index.html) d'exemple et enregistrez-en une copie locale sous le nom `index.html` dans un nouveau dossier quelque part sur votre ordinateur. Ce fichier contient également la CSS pour mettre en forme l'exemple qui l'accompagne.
- Allez sur la [page qui contient le texte brut](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/assessment-start/raw-text.txt) et gardez la fenêtre ouverte dans un onglet différent de votre navigateur. Vous en aurez besoin plus tard.

> **Note :** Vous pouvez aussi utiliser un site tel que que [JSBin](http://jsbin.com/) ou [Thimble](https://thimble.mozilla.org/) pour votre évaluation. Vous pouvez copier-coller le HTML, CSS et JavaScript vers l'un de ces éditeurs en ligne. Si l'éditeur en ligne que vous utilisez ne propose pas d'onglet JavaScript séparé, n'hésitez pas à en intégrer un dans une balise `<script>` au sein de la page HTML.

## Résumé du projet

On vous a fourni du code HTML/CSS brut ainsi que quelques chaînes de caractères et fonctions JavaScript : vous devez écrire le code JavaScript nécessaire pour transformer ces éléments en un programme fonctionnel, qui fera les choses suivantes :

- Générer une histoire absurde quand on appuie sur le bouton "Generate random story" (Générer une histoire au hasard).
- Remplacer dans l'histoire le nom par défaut "Bob" par un nom personnalisé, dans le cas où le champ "Enter custom name" (Entrer un nom personnalisé) a été complété avant que le bouton "Générer" soit déclenché.
- Convertir les unités de poids et de température par défaut (américaines) vers leurs équivalents britanniques si le boutton "radio UK" a été coché avant que le bouton "Générer" soit déclenché.
- Générer une nouvelle histoire absurde au hasard quand on appuie à nouveau sur le bouton (et encore une, et encore une...)

Les captures d'écran suivantes montrent un exemple de ce que le programme terminé doit afficher :

![](assessment-1.png)

Pour vous faire une idée un peu plus précise, [jetez un œil à l'exemple terminé](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/assessment-finished/) (mais sans regarder le code source !)

## Les étapes

Les sections suivantes décrivent ce que vous devez faire :

Installation basique :

1.  Créez un nouveau fichier nommé `main.js`, dans le même dossier que `index.html` file.
2.  Appliquez le fichier JavaScript externe à votre code HTML en insérant une balise {{htmlelement("script")}} dans votre code HTML en référençant `main.js`. Mettez-la juste avant de refermer la balise `</body>`.

Variables initiales et fonctions :

1.  Dans le fichier de texte brut, copiez tout le code présent sous le titre "1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS" et collez-le en haut du fichier `main`. Cela vous donne trois variables qui stockent les références respectivement vers le champ "Enter custom name", vers le bouton "Generate random story" (`randomize`), et vers la balise {{htmlelement("p")}} en bas du corps HTML dans lequel l'histoire sera copiée (`story`). Par ailleurs, vous avez une fonction appelée `randomValueFromArray()` qui prend une table, et qui renvoie au hasard l'un des éléments qu'elle contient.
2.  Maintenant regardons la deuxième section du fichier de texte brut : "2. RAW TEXT STRINGS". Cette section contient des chaînes de caractères qui vont se comporter comme des entrées (_input_) dans notre program. L'idée est que vous intégriez ces variables internes dans `main.js`:

    1.  Stockez la première longue chaîne de caractères (string) dans la variable `storyText`.
    2.  Stockez le premier groupe de trois strings dans le tableau `insertX`.
    3.  Stockez le deuxième groupe de trois strings dans le tableau `insertY`.
    4.  Stockez le troisième groupe de trois strings dans une tableau `insertZ`.

Mettre en place le gestionnaire d'événements (_event handler_) et le squelette de la fonction :

1.  Retournez au fichier de texte brut.
2.  Copiez le code qui se trouve sous le titre "3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION" et collez-le en bas de votre fichier `main.js` principal. Cela :

    - Ajoute un gestionnaire d'événements pour les clics à la variable `randomize` de telle sorte que quand on clique sur le bouton associé, la fonction `result()` se lance.
    - Ajoute une définition partiellement complète de la fonction `result()` à votre code. Pour le reste de l'évaluation, vous compléterez des lignes au sein de cette fonction pour la compléter et la faire fonctionner correctement.

Compléter la fonction `result()` :

1.  Créer une nouvelle variable nommée `newStory`, et fixer sa valeur pour qu'elle soit égale à `storyText`. C'est nécessaire pour que soit créée une nouvelle histoire au hasard à chaque fois qu'on appuiera sur le bouton "Generate" et que la fonction sera lancée. Si on apportait des modifications directement à `storyText`, on ne pourrait générer une nouvelle histoire qu'une seule fois.
2.  Créer trois nouvelles variables nommées `xItem`, `yItem`, et `zItem`, et faites en sorte qu'elles soient égales au résultat de l'appel de `randomValueFromArray()` sur vos trois tables (le résultat dans chaque cas fera apparaître un élément au hasard en provenance de chacune des tables appelées). Par exemple, vous pouvez appeler la fonction et lui faire retourner une chaîne de caractères au hasard depuis `insertX` en écrivant `randomValueFromArray(insertX)`.
3.  Ensuite nous allons remplacer les trois fichiers temporaires dans la chaîne `newStory` — `:insertx:`, `:inserty:`, et `:insertz:` — par les chaînes stockées dans `xItem`, `yItem`, and `zItem`. Ici, une méthode particulière de chaînes pourra vous aider : dans chaque cas, faites que l'appel à la méthode soit égal à `newStory`, de sorte qu'à chaque appel, `newStory` est égal à lui-même, mais avec les substitutions effectuées. Ainsi, à chaque fois qu'on appuiera sur le bouton, ces fichiers temporaires seront chacun remplacés par une chaîne de caractères absurdes au hasard. Pour information, la méthode en question remplace seulement la première séquence de sous-chaîne qu'elle trouve, donc vous devrez peut-être l'un des appels deux fois.
4.  Dans le premier block `if`, ajoutez une autre méthode de remplacement de chaîne pour remplacer le nom 'Bob' que vous trouverez dans la chaîne `newStory` en tant que variable `name`. Dans ce block, on établit que "Si une valeur a été entrée dans le champ `customName` text input, on remplacera dans l'histoire le mot Bob par ce nom personnalisé".
5.  Dans le deuxième block `if`, on vérifie que le bouton radio `uk` a été coché. Si c'est le cas, nous voulons convertir les valeurs de poids et de température de l'histoire. Les pounds et les farenheit deviennent des stones et des centigrades. Procédez comme suit :

    1.  Cherchez la formule pour convertir les pounds en stones et les fareinheit en centigrades.
    2.  Dans la ligne qui définit la variable `weight` (poids), remplacez 300 par un calcul qui convertit 300 pounds en stones. Le tout englobé dans un `Math.round()` à la fin duquel vous concatenez `'stone'`.
    3.  Dans la ligne qui définit la variable `temperature`, remplacez 94 par un calcul qui convertit 94 fahrenheit en centigrades. Le tout englobé dans un `Math.round()` à la fin duquel vous concatenez `'centigrade'`.
    4.  Juste sous la définition des deux variables, ajoutez deux lignes de remplacement de chaînes supplémentaires qui remplacent '94 farhenheit' par les contenus de la variable `temperature`, et '300 pounds' par les contenus de la variable `weight`.

6.  Enfin, dans l'antépénultième ligne de la fonction, faites en sorte que la propriété `textContent` de la variable `story` (qui référence le paragraphe) soit égale à `newStory`.

## Trucs et astuces

- Aucun besoin de modifier le code HTML, à part pour lui appliquer le JavaScript.
- Si vous n'êtes pas sûr que le JavaScript est correctement appliqué à votre HTML, essayez de supprimer temporairement tout le contenu du fichier JavaScript, et d'y ajouter un morceau très simple de code JavaScript dont vous savez qu'il aura un effet visible, puis sauvegardez et rafraîchissez. Par exemple, le morceau de code suivant fait que l'arrière plan de la balise {{htmlelement("html")}} devient rouge — donc toute la fenêtre du navigateur devrait devenir rouge si le JavaScript est correctement appliqué :
- ```js
  document.querySelector('html').style.backgroundColor = 'red';
  ```
- [Math.round()](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/round) est une méthode JavaScript intégrée qui arrondit simplement le résultat d'un calcul à l'entier le plus proche.

## Évaluation

Si vous suivez cette évaluation dans le cadre d'un cours organisé, vous devriez pouvoir soumettre votre travail à votre enseignant/encadrant pour être évalué. Si vous êtes autodidacte, vous pouvez facilement obtenir le guide de notation en vous adressant à la mailing list [dev-mdc](https://lists.mozilla.org/listinfo/dev-mdc) ou au canal IRC [#mdn](irc://irc.mozilla.org/mdn) sur [Mozilla IRC](https://wiki.mozilla.org/IRC). Essayez de faire l'exercice d'abord — vous ne gagnez rien à tricher !

{{PreviousMenu("Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}

## Dans ce module

- [What is JavaScript?](/fr/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
- [A first splash into JavaScript](/fr/docs/Learn/JavaScript/First_steps/A_first_splash)
- [What went wrong? Troubleshooting JavaScript](/fr/docs/Learn/JavaScript/First_steps/What_went_wrong)
- [Storing the information you need — Variables](/fr/docs/Learn/JavaScript/First_steps/Variables)
- [Basic math in JavaScript — numbers and operators](/fr/docs/Learn/JavaScript/First_steps/Math)
- [Handling text — strings in JavaScript](/fr/docs/Learn/JavaScript/First_steps/Strings)
- [Useful string methods](/fr/docs/Learn/JavaScript/First_steps/Useful_string_methods)
- [Arrays](/fr/docs/Learn/JavaScript/First_steps/Arrays)
- [Assessment: Silly story generator](/fr/docs/Learn/JavaScript/First_steps/Silly_story_generator)
