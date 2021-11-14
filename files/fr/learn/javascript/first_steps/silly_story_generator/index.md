---
title: Générateur d'histoires absurdes
slug: Learn/JavaScript/First_steps/Silly_story_generator
translation_of: Learn/JavaScript/First_steps/Silly_story_generator
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenu("Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}</div>

<p>Dans cette évaluation, vous aurez pour tâche d'utiliser les connaissances que vous avez apprises dans les articles de ce module et de les appliquer dans le but de créer une appli ludique qui génère des histoires absurdes au hasard. Amusez-vous bien !</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row">Prérequis :</th>
   <td>
    <p>Avant de vous lancer dans cette évaluation, vous devez avoir déjà travaillé sur tous les articles de ce module.</p>
   </td>
  </tr>
  <tr>
   <th scope="row">Objectif :</th>
   <td>
    <p>Tester la compréhension des fondamentaux JavaScript tels que les variables, les nombres, les opérateurs, les chaînes de caractères et les tableaux.</p>
   </td>
  </tr>
 </tbody>
</table>

<h2 id="Point_de_départ">Point de départ</h2>

<p>Pour commencer cette évaluation :</p>

<ul>
 <li>Allez <a href="https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/assessment-start/index.html">chercher le fichier HTML</a> d'exemple et enregistrez-en une copie locale sous le nom <code>index.html</code> dans un nouveau dossier quelque part sur votre ordinateur. Ce fichier contient également la CSS pour mettre en forme l'exemple qui l'accompagne.</li>
 <li>Allez sur la <a href="https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/assessment-start/raw-text.txt">page qui contient le texte brut</a> et gardez la fenêtre ouverte dans un onglet différent de votre navigateur. Vous en aurez besoin plus tard.</li>
</ul>

<div class="note">
<p><strong>Note :</strong> Vous pouvez aussi utiliser un site tel que que <a href="http://jsbin.com/">JSBin</a> ou <a href="https://thimble.mozilla.org/">Thimble</a> pour votre évaluation. Vous pouvez copier-coller le HTML, CSS et JavaScript vers l'un de ces éditeurs en ligne. Si l'éditeur en ligne que vous utilisez ne propose pas d'onglet JavaScript séparé, n'hésitez pas à en intégrer un dans une balise <code>&lt;script&gt;</code> au sein de la page HTML.</p>
</div>

<h2 id="Résumé_du_projet">Résumé du projet</h2>

<p>On vous a fourni du code HTML/CSS brut ainsi que quelques chaînes de caractères et fonctions JavaScript : vous devez écrire le code JavaScript nécessaire pour transformer ces éléments en un programme fonctionnel, qui fera les choses suivantes :</p>

<ul>
 <li>Générer une histoire absurde quand on appuie sur le bouton "Generate random story" (Générer une histoire au hasard).</li>
 <li>Remplacer dans l'histoire le nom par défaut "Bob" par un nom personnalisé, dans le cas où le champ "Enter custom name" (Entrer un nom personnalisé) a été complété avant que le bouton "Générer" soit déclenché.</li>
 <li>Convertir les unités de poids et de température par défaut (américaines) vers leurs équivalents britanniques si le boutton "radio UK" a été coché avant que le bouton "Générer" soit déclenché.</li>
 <li>Générer une nouvelle histoire absurde au hasard quand on appuie à nouveau sur le bouton (et encore une, et encore une...)</li>
</ul>

<p>Les captures d'écran suivantes montrent un exemple de ce que le programme terminé doit afficher :</p>

<p><img alt="" src="assessment-1.png"></p>

<p>Pour vous faire une idée un peu plus précise, <a href="https://mdn.github.io/learning-area/javascript/introduction-to-js-1/assessment-finished/">jetez un œil à l'exemple terminé</a> (mais sans regarder le code source !)</p>

<h2 id="Les_étapes">Les étapes</h2>

<p>Les sections suivantes décrivent ce que vous devez faire :</p>

<p>Installation basique :</p>

<ol>
 <li>Créez un nouveau fichier nommé <code>main.js</code>, dans le même dossier que <code>index.html</code> file.</li>
 <li>Appliquez le fichier JavaScript externe à votre code HTML en insérant une balise {{htmlelement("script")}} dans votre code HTML en référençant <code>main.js</code>. Mettez-la juste avant de refermer la balise <code>&lt;/body&gt;</code>.</li>
</ol>

<p>Variables initiales et fonctions :</p>

<ol>
 <li>Dans le fichier de texte brut, copiez tout le code présent sous le titre "1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS" et collez-le en haut du fichier <code>main</code>. Cela vous donne trois variables qui stockent les références respectivement vers le champ "Enter custom name", vers le bouton "Generate random story" (<code>randomize</code>), et vers la balise {{htmlelement("p")}} en bas du corps HTML dans lequel l'histoire sera copiée (<code>story</code>). Par ailleurs, vous avez une fonction appelée <code>randomValueFromArray() </code>qui prend une table, et qui renvoie au hasard l'un des éléments qu'elle contient.</li>
 <li>Maintenant regardons la deuxième section du fichier de texte brut : "2. RAW TEXT STRINGS". Cette section contient des chaînes de caractères qui vont se comporter comme des entrées (<em>input</em>) dans notre program. L'idée est que vous intégriez ces variables internes dans <code>main.js</code>:
  <ol>
   <li>Stockez la première longue chaîne de caractères (string) dans la variable <code>storyText</code>.</li>
   <li>Stockez le premier groupe de trois strings dans le tableau <code>insertX</code>.</li>
   <li>Stockez le deuxième groupe de trois strings dans le tableau <code>insertY</code>.</li>
   <li>Stockez le troisième groupe de trois strings dans une tableau <code>insertZ</code>.</li>
  </ol>
 </li>
</ol>

<p>Mettre en place le gestionnaire d'événements (<em>event handler</em>) et le squelette de la fonction :</p>

<ol>
 <li>Retournez au fichier de texte brut.</li>
 <li>Copiez le code qui se trouve sous le titre "3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION" et collez-le en bas de votre fichier <code>main.js</code> principal. Cela :
  <ul>
   <li>Ajoute un gestionnaire d'événements pour les clics à la variable <code>randomize</code> de telle sorte que quand on clique sur le bouton associé, la fonction <code>result()</code> se lance.</li>
   <li>Ajoute une définition partiellement complète de la fonction <code>result()</code> à votre code. Pour le reste de l'évaluation, vous compléterez des lignes au sein de cette fonction pour la compléter et la faire fonctionner correctement.</li>
  </ul>
 </li>
</ol>

<p>Compléter la fonction <code>result()</code> :</p>

<ol>
 <li>Créer une nouvelle variable nommée <code>newStory</code>, et fixer sa valeur pour qu'elle soit égale à <code>storyText</code>. C'est nécessaire pour que soit créée une nouvelle histoire au hasard à chaque fois qu'on appuiera sur le bouton "Generate" et que la fonction sera lancée. Si on apportait des modifications directement à <code>storyText</code>, on ne pourrait générer une nouvelle histoire qu'une seule fois.</li>
 <li>Créer trois nouvelles variables nommées <code>xItem</code>, <code>yItem</code>, et <code>zItem</code>, et faites en sorte qu'elles soient égales au résultat de l'appel de <code>randomValueFromArray()</code> sur vos trois tables (le résultat dans chaque cas fera apparaître un élément au hasard en provenance de chacune des tables appelées). Par exemple, vous pouvez appeler la fonction et lui faire retourner une chaîne de caractères au hasard depuis <code>insertX</code> en écrivant <code>randomValueFromArray(insertX)</code>.</li>
 <li>Ensuite nous allons remplacer les trois fichiers temporaires dans la chaîne <code>newStory</code> — <code>:insertx:</code>, <code>:inserty:</code>, et <code>:insertz:</code> — par les chaînes stockées dans <code>xItem</code>, <code>yItem</code>, and <code>zItem</code>. Ici, une méthode particulière de chaînes pourra vous aider : dans chaque cas, faites que l'appel à la méthode soit égal à <code>newStory</code>, de sorte qu'à chaque appel, <code>newStory</code> est égal à lui-même, mais avec les substitutions effectuées. Ainsi, à chaque fois qu'on appuiera sur le bouton, ces fichiers temporaires seront chacun remplacés par une chaîne de caractères absurdes au hasard. Pour information, la méthode en question remplace seulement la première séquence de sous-chaîne qu'elle trouve, donc vous devrez peut-être l'un des appels deux fois.</li>
 <li>Dans le premier block <code>if</code>, ajoutez une autre méthode de remplacement de chaîne pour remplacer le nom 'Bob' que vous trouverez dans la chaîne <code>newStory</code> en tant que variable <code>name</code>. Dans ce block, on établit que "Si une valeur a été entrée dans le champ <code>customName</code> text input, on remplacera dans l'histoire le mot Bob par ce nom personnalisé".</li>
 <li>Dans le deuxième block <code>if</code>, on vérifie que le bouton radio <code>uk</code> a été coché. Si c'est le cas, nous voulons convertir les valeurs de poids et de température de l'histoire. Les pounds et les farenheit deviennent des stones et des centigrades. Procédez comme suit :
  <ol>
   <li>Cherchez la formule pour convertir les pounds en stones et les fareinheit en centigrades.</li>
   <li>Dans la ligne qui définit la variable <code>weight</code> (poids), remplacez 300 par un calcul qui convertit 300 pounds en stones. Le tout englobé dans un <code>Math.round()</code> à la fin duquel vous concatenez <code>'stone'</code>.</li>
   <li>Dans la ligne qui définit la variable <code>temperature</code>, remplacez 94 par un calcul qui convertit 94 fahrenheit en centigrades. Le tout englobé dans un <code>Math.round()</code> à la fin duquel vous concatenez<code> 'centigrade'</code>.</li>
   <li>Juste sous la définition des deux variables, ajoutez deux lignes de remplacement de chaînes supplémentaires qui remplacent '94 farhenheit' par les contenus de la variable <code>temperature</code>, et '300 pounds' par les contenus de la variable <code>weight</code>.</li>
  </ol>
 </li>
 <li>Enfin, dans l'antépénultième ligne de la fonction, faites en sorte que la propriété <code>textContent</code> de la variable <code>story</code> (qui référence le paragraphe) soit égale à <code>newStory</code>.</li>
</ol>

<h2 id="Trucs_et_astuces">Trucs et astuces</h2>

<ul>
 <li>Aucun besoin de modifier le code HTML, à part pour lui appliquer le JavaScript.</li>
 <li>Si vous n'êtes pas sûr que le JavaScript est correctement appliqué à votre HTML, essayez de supprimer temporairement tout le contenu du fichier JavaScript, et d'y ajouter un morceau très simple de code JavaScript dont vous savez qu'il aura un effet visible, puis sauvegardez et rafraîchissez. Par exemple, le morceau de code suivant fait que l'arrière plan de la balise {{htmlelement("html")}} devient rouge — donc toute la fenêtre du navigateur devrait devenir rouge si le JavaScript est correctement appliqué :</li>
 <li>
  <pre class="brush: js">document.querySelector('html').style.backgroundColor = 'red';</pre>
 </li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/round">Math.round()</a> est une méthode JavaScript intégrée qui arrondit simplement le résultat d'un calcul à l'entier le plus proche.</li>
</ul>

<h2 id="Évaluation">Évaluation</h2>

<p>Si vous suivez cette évaluation dans le cadre d'un cours organisé, vous devriez pouvoir soumettre votre travail à votre enseignant/encadrant pour être évalué. Si vous êtes autodidacte, vous pouvez facilement obtenir le guide de notation en vous adressant à la mailing list <a href="https://lists.mozilla.org/listinfo/dev-mdc">dev-mdc</a> ou au canal IRC <a href="irc://irc.mozilla.org/mdn">#mdn</a> sur <a href="https://wiki.mozilla.org/IRC">Mozilla IRC</a>. Essayez de faire l'exercice d'abord — vous ne gagnez rien à tricher !</p>

<p>{{PreviousMenu("Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}</p>

<h2 id="Dans_ce_module">Dans ce module</h2>

<ul>
 <li><a href="/fr/docs/Learn/JavaScript/First_steps/What_is_JavaScript">What is JavaScript?</a></li>
 <li><a href="/fr/docs/Learn/JavaScript/First_steps/A_first_splash">A first splash into JavaScript</a></li>
 <li><a href="/fr/docs/Learn/JavaScript/First_steps/What_went_wrong">What went wrong? Troubleshooting JavaScript</a></li>
 <li><a href="/fr/docs/Learn/JavaScript/First_steps/Variables">Storing the information you need — Variables</a></li>
 <li><a href="/fr/docs/Learn/JavaScript/First_steps/Math">Basic math in JavaScript — numbers and operators</a></li>
 <li><a href="/fr/docs/Learn/JavaScript/First_steps/Strings">Handling text — strings in JavaScript</a></li>
 <li><a href="/fr/docs/Learn/JavaScript/First_steps/Useful_string_methods">Useful string methods</a></li>
 <li><a href="/fr/docs/Learn/JavaScript/First_steps/Arrays">Arrays</a></li>
 <li><a href="/fr/docs/Learn/JavaScript/First_steps/Silly_story_generator">Assessment: Silly story generator</a></li>
</ul>
