---
title: Gérer du texte — les chaînes de caractères en JavaScript
slug: Learn/JavaScript/First_steps/Strings
translation_of: Learn/JavaScript/First_steps/Strings
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps")}}

Concentrons-nous maintenant sur les chaînes de caractères - c'est le nom donné à un segment de texte en programmation. Dans cet article, nous aborderons les aspects les plus communs des chaînes de caractères que vous devez vraiment connaître quand vous apprenez JavaScript, comme créer une chaîne de caractères, échapper des guillemets dans une chaîne ou encore concaténer des chaînes.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Connaissance de base en informatique, une compréhension basique de HTML
        et CSS et savoir ce qu'est JavaScript.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>
        Devenir familier avec les fondamentaux pour manipuler les chaînes de
        caractères en JavaScript.
      </td>
    </tr>
  </tbody>
</table>

## Le pouvoir des mots

Les mots ont beaucoup d'importance pour les humains — ils occupent une large part dans nos façons de communiquer. Comme le Web est un medium essentiellement fondé sur du texte conçu pour permettre aux hommes de communiquer et partager de l'information, il est utile de contrôler les mots qui y sont publiés. {{glossary("HTML")}} donne structure et sens au texte, {{glossary("CSS")}} en gère le style et JavaScript comporte une série de fonctionnalités pour manipuler les chaînes de caractères, créer des messages d'accueil personnalisés, afficher la bonne étiquette quand nécessaire, trier des termes dans l'ordre voulu, et bien d'autres choses encore.

À peu près tous les programmes que nous vous avons montrés jusqu'ici ont impliqué des manipulations de chaînes de caractères.

## Chaînes de caractères — les bases

À première vue, les chaînes se traitent de la même manière que les nombres&nbsp;; mais si vous approfondissez la chose, vous commencerez à percevoir des différences notables. Entrons sur la console quelques lignes simples pour nous familiariser avec la chose. À propos de la console, nous en avons placé une ci‑dessous (vous pouvez [l'ouvrir](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/variables/index.html) dans un onglet ou une fenêtre séparée, ou bien utiliser celle de [l'explorateur](/fr/docs/Learn/Common_questions/What_are_browser_developer_tools); comme vous préférez).

```html hidden
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript console</title>
    <style>
      * {
        box-sizing: border-box;
      }

      html {
        background-color: #0C323D;
        color: #809089;
        font-family: monospace;
      }

      body {
        max-width: 700px;
      }

      p {
        margin: 0;
        width: 1%;
        padding: 0 1%;
        font-size: 16px;
        line-height: 1.5;
        float: left;
      }

      .input p {
        margin-right: 1%;
      }

      .output p {
        width: 100%;
      }

      .input input {
        width: 96%;
        float: left;
        border: none;
        font-size: 16px;
        line-height: 1.5;
        font-family: monospace;
        padding: 0;
        background: #0C323D;
        color: #809089;
      }

      div {
        clear: both;
      }

    </style>
  </head>
  <body>


  </body>

  <script>
    let geval = eval;
    function createInput() {
      let inputDiv = document.createElement('div');
      let inputPara = document.createElement('p');
      let inputForm = document.createElement('input');

      inputDiv.setAttribute('class','input');
      inputPara.textContent = '>';
      inputDiv.appendChild(inputPara);
      inputDiv.appendChild(inputForm);
      document.body.appendChild(inputDiv);

      if(document.querySelectorAll('div').length > 1) {
        inputForm.focus();
      }

      inputForm.addEventListener('change', executeCode);
    }

    function executeCode(e) {
      try {
        let result = geval(e.target.value);
      } catch(e) {
        let result = 'error — ' + e.message;
      }

      let outputDiv = document.createElement('div');
      let outputPara = document.createElement('p');

      outputDiv.setAttribute('class','output');
      outputPara.textContent = 'Result: ' + result;
      outputDiv.appendChild(outputPara);
      document.body.appendChild(outputDiv);

      e.target.disabled = true;
      e.target.parentNode.style.opacity = '0.5';

      createInput()
    }

    createInput();

  </script>
</html>
```

{{ EmbedLiveSample('Chaînes_de_caractères_—_les_bases', '100%', 300) }}

### Créer une chaîne de texte

1.  Pour débuter, entrez les lignes suivantes&nbsp;:

    ```js
    let string = 'La révolution ne sera pas télévisée.';
    string;
    ```

    Comme nous l'avons fait avec les nombres, nous déclarons une variable, l'initialisons avec une valeur de chaîne, puis renvoyons la valeur. La seule différence ici est que lorsque nous écrivons une chaîne, nous la mettons entre guillemets.

2.  Si vous ne le faites pas, ou si vous oubliez un des guillemets, vous déclenchez une erreur. Essayez d'entrer une de ces lignes&nbsp;:

    ```js example-bad
    let badString = Voici un test;
    let badString = 'Voici un test;
    let badString = Voici un test';
    ```

    Ces lignes de code ne fonctionnent pas parce que toute chaîne de texte qui n'est pas écrite entre guillemets est considérée comme un nom de variable, un nom de propriété, un mot réservé ou quelque chose de semblable. Quand l'interpréteur ne parvient pas à trouver la déclaration de ladite variable, une erreur est déclenchée (par ex. «&nbsp;missing ; before statement »). Si l'interpréteur voit le début d'une chaîne mais ne trouve pas sa fin, comme dans la ligne 2, il se plaint en émettant une erreur (avec «&nbsp;*unterminated string literal* »). Si votre programme produit de telles erreurs, revoyez‑le et vérifiez qu'aucun guillemet ne manque.

3.  L'assertion suivante fonctionne si la variable `string` a été préalablement définie — essayez maintenant&nbsp;:

    ```js
    let badString = string;
    badString;
    ```

    `badString` est maintenant défini avec la même valeur que `string`.

### Guillemets simples vs guillemets doubles

1.  En JavaScript, vous pouvez envelopper vos chaînes entre des guillemets simples ou doubles. Les deux expressions suivantes sont correctes&nbsp;:

    ```js
    let sgl = 'Guillemet simple.';
    let dbl = "Guillemets doubles.";
    sgl;
    dbl;
    ```

2.  Il y a une toute petite différence entre les deux, et celle que vous retenez relève de la préférence personnelle. Prenez-en une, et tenez‑vous y toutefois&nbsp;: du code avec des mises entre guillemets diversifiées peut amener des confusions, en particulier si vous utilisez les deux sortes dans la même chaîne&nbsp;! Ce qui suit renvoie une erreur&nbsp;:

    ```js example-bad
    let badQuotes = 'Quoi sur Terre&nbsp;?";
    ```

3.  L'interpréteur pensera que la chaîne n'a pas été fermée, car le type de guillemet autre ne servant pas à délimiter les chaînes peut y être employé. Par exemple, ces deux assertions sont valables&nbsp;:

    ```js
    let sglDbl = 'Mangeriez‑vous un "souper de poisson"?';
    let dblSgl = "J'ai le blues.";
    sglDbl;
    dblSgl;
    ```

4.  Bien entendu, vous ne pouvez pas inclure dans la chaîne le même type de guillemet que celui qui est utilisé pour la délimiter. Ce qui suit conduit à une erreur, car l'explorateur ne peut pas déterminer là où se termine la chaîne&nbsp;:

    ```js example-bad
    let bigmouth = 'Je n'ai pas eu droit à prendre place...';
    ```

    Voilà qui nous amène naturellement au prochain sujet.

### Échappement de caractères dans une chaîne

Pour corriger l'erreur dans notre ligne de code précédente, il nous suffit d'échapper au problème que pose le guillemet. «&nbsp;Échapper des caractères&nbsp;» signifie que nous les marquons de manière à ce qu'ils soient reconnus comme partie intégrante du texte, et non pas comme symbole de code. Dans JavaScript, nous le faisons en mettant une barre oblique inverse juste avant le caractère. Essayons&nbsp;:

```js
let bigmouth = 'Je n\'ai pas eu droit à prendre place...';
bigmouth;
```

Cela fonctionne à la perfection. Vous pouvez échapper d'autres caractères de la même manière, par ex. `\"`,  et il y a certains codes spéciaux à côté. Voyez  [Notations d'échappement](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#escape_notation) pour plus de détails.

## Concaténation de chaînes

1.  Concaténer est un terme de programmation du genre chic qui signifie «&nbsp;attacher ensemble&nbsp;». Pour attacher des chaînes en JavaScript, on utilise l'opérateur plus (+) , le même que l'on utilise pour ajouter deux nombres, mais dans ce contexte il fait quelque chose de différent. Voyons un exemple dans la console.

    ```js
    let one = 'Hello, ';
    let two = 'comment allez‑vous&nbsp;?';
    let joined = one + two;
    joined;
    ```

    Il en résulte que la variable nommée `joined` contient la valeur "Hello, comment allez‑vous&nbsp;?".

2.  Dans le dernier exemple, nous avons juste attaché deux chaînes ensemble, mais vous pouvez en attacher autant que vous voulez, pour autant que vous mettiez un signe  `+`  entre chacune. Essayez ceci&nbsp;:

    ```js
    let multiple = one + one + one + one + two;
    multiple;
    ```

3.  Vous pouvez aussi mélanger des variables avec des vraies chaînes. Regardez&nbsp;:

    ```js
    let response = one + 'Je vais bien — et vous ' + two;
    response;
    ```

> **Note :** Quand vous entrez une chaîne dans votre code, entre guillemets simples ou doubles, on l'appelle **chaîne littérale**.

### Concaténation dans un contexte

Examinons une concaténation dans une action — voici un exemple tiré en amont de ce cours&nbsp;:

```html
<button>Pressez‑moi</button>
```

```js
let button = document.querySelector('button');

button.onclick = function() {
  let name = prompt('Quel est votre nom&nbsp;?');
  alert('Hello ' + name + ', sympa de vous voir&nbsp;!');
}
```

{{ EmbedLiveSample('Concaténation_dans_un_contexte', '100%', 50) }}

Ici nous utilisons en ligne 4 la fonction {{domxref("Window.prompt()", "Window.prompt()")}}, qui demande à l'utilisateur de répondre à une question par l'intermédiaire d'une boîte de dialogue, puis qui stocke le texte entré dans une variable donnée — dans ce cas `name`. En ligne 5, nous nous servons de la fonction {{domxref("Window.alert()", "Window.alert()")}} pour afficher un dialogue contenant une chaîne assemblée à partir de deux chaînes littérales et de la variable `name`, par concaténation.

### Nombres vs chaînes

1.  Que se passe-t-il quand nous essayons d'additionner (ou concaténer) une chaîne et un nombre&nbsp;? Essayons dans la console&nbsp;:

    ```js
    'Front ' + 242;
    ```

    Vous vous attendriez à déclencher une erreur, mais cela fonctionne parfaitement. Essayer de représenter une chaîne comme un nombre n'a vraiment aucun sens, mais représenter un nombre par une chaîne en a, donc le navigateur convertit adroitement le nombre en chaîne et concatène les deux chaînes.

2.  Vous pouvez même faire cela avec deux nombres — vous forcez un nombre à devenir une chaîne en le mettant entre guillemets. Essayez ce qui suit (nous nous servons de l'opérateur `typeof` pour vérifier si la variable est un nombre ou une chaîne):

    ```js
    let myDate = '19' + '67';
    typeof myDate;
    ```

3.  Si vous avez une variable numérique que vous souhaitez convertir en chaîne sans autre modification, ou une variable numérique que vous voulez convertir en chaîne sans autre modification, vous pouvez utiliser les constructions suivantes&nbsp;:

    - L'objet {{jsxref("Number")}} convertit tout ce qui lui est passé en nombre, si c'est possible. Essayez&nbsp;:

      ```js
      let myString = '123';
      let myNum = Number(myString);
      typeof myNum;
      ```

    - D'autre part, tout nombre possède une méthode nommée [`toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) qui le convertit en chaîne équivalente. Essayez&nbsp;:

      ```js
      let myNum = 123;
      let myString = myNum.toString();
      typeof myString;
      ```

    Ces constructions peuvent être vraiment utiles en certaines circonstances. Par exemple, si un utilisateur entre un nombre dans un champ texte d'un formulaire, c'est une chaîne. Mais si vous voulez ajouter ce nombre à autre chose, il est nécessaire qu'il soit du type `number`, donc vous pouvez le faire passer par la méthode `Number()` pour gérer cela. C'est exactement ce que nous avons fait dans le jeu [Devinez un nombre, à la ligne 63](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/first-splash/number-guessing-game.html#L63).

## Conclusion

Voilà donc les bases de la manipulation des chaînes de caractères en JavaScript. Dans le prochain article, nous allons bâtir sur ces éléments en examinant certaines méthodes intégrées disponibles pour les chaînes de caractères dans JavaScript et en les utilisant pour mettre les chaînes de caractères dans la forme voulue.

{{PreviousMenuNext("Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps")}}
