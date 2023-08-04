---
title: Introduction
slug: Web/API/Document_Object_Model/Introduction
---

{{DefaultAPISidebar("DOM")}}

Le Modèle Objet de Document (**DOM: Document object Model**) est la representation objet des données qui composent la structure et le contenu d'un document sur le web. Dans ce guide, nous présenterons brièvement le DOM. Nous verrons comment le DOM représente un document {{Glossary("HTML")}} ou {{Glossary("XML")}} en mémoire et comment vous utilisez les API pour créer du contenu web et des applications.

## Qu'est-ce que le DOM?

Le Document Object Model (DOM) est une interface de programmation pour les documents HTML et XML. Il fournit une page dont des programmes peuvent modifier la structure, son style et son contenu. Cette représentation du document permet de le voir comme un groupe structuré de nœuds et d'objets possédant différentes propriétés et méthodes. Fondamentalement, il relie les pages Web aux scripts ou langages de programmation.

Une page Web est un document. Celui-ci peut être affiché soit dans la fenêtre du navigateur, soit sous la forme de son code source HTML. Mais il s'agit du même document dans les deux cas. Le modèle objet de document proposé par le DOM fournit une autre manière de représenter, stocker et manipuler ce même document. Le DOM est une représentation entièrement orientée objet de la page Web, et peut être manipulé à l'aide d'un langage de script comme JavaScript.

Les normes [DOM du W3C](https://www.w3.org/DOM/) et [WHATWG DOM](https://dom.spec.whatwg.org) forment la base du DOM implémenté dans la plupart des navigateurs modernes. Beaucoup d'entre-eux fournissent des extensions allant plus loin que le standard, faites donc attention lorsque vous les utilisez sur le Web, où les documents peuvent être consultés par de nombreux navigateurs avec chacun un DOM différent.

Par exemple, DOM du W3C spécifie que la méthode `getElementsByTagName` dans le code ci-dessous doit renvoyer une liste de tous les éléments `<P>` présents dans le document :

```js
const paragraphs = document.querySelectorAll("p");
// paragraphes[0] est le premier élément <p>
// paragraphes[1] est le second élément <p>, etc.
alert(paragraphes[0].nodeName);
```

Chacune des propriétés et des méthodes et chacun des évènements disponibles permettant la manipulation et la création de pages Web sont organisés dans des objets (par exemple, l'objet `document` qui représente le document lui-même, l'objet `table` qui implémente l'interface DOM particulière `HTMLTableElement` permettant d'accéder aux tables HTML, etc.). Cette documentation fournit une référence, objet par objet, du DOM implémenté dans les navigateurs basés sur Gecko.

## DOM et JavaScript

Le court exemple ci-dessus, comme presque tous les exemples de cette référence, est en [JavaScript](/fr/docs/Web/JavaScript). C'est-à-dire qu'il est _écrit_ en JavaScript, mais qu'il _utilise_ le DOM pour accéder au document et à ses éléments. Le DOM n'est pas un langage de programmation, mais sans lui le langage JavaScript n'aurait aucun modèle ni aucune notion des pages Web, des documents XML, et des éléments pour lesquels il est généralement utilisé. Chaque élément d'un document, que ce soit le document lui-même, ses en-têtes, les tableaux internes au document, les en-têtes de colonnes et le texte contenu dans les cellules de ces tableaux, fait partie du modèle objet de document (DOM) de ce document. Tous ces éléments sont donc accessibles et peuvent être manipulés à l'aide du DOM et d'un langage de script comme JavaScript.

À l'origine, JavaScript et le DOM étaient fortement liés, mais ils ont fini par évoluer en deux entités distinctes. Le contenu de la page est stocké dans le DOM et on peut y accéder et le manipuler via JavaScript, de la sorte qu'on pourrait écrire cette équation approximative :

API(page Web ou XML) = DOM + JS(langage de script)

Le DOM a été conçu pour être indépendant de tout langage de programmation, ce qui rend la représentation structurelle du document disponible à l'aide d'une API simple et cohérente. Bien que cette documentation de référence se concentre uniquement sur JavaScript, des implémentations du DOM peuvent être construites pour n'importe quel langage, comme le démontre cet exemple en Python :

```python
# Exemple d'utilisation du DOM en Python
import xml.dom.minidom as m
doc = m.parse("C:\\Projects\\Py\\chap1.xml");
doc.nodeName # Propriété DOM de l'objet document;
p_list = doc.getElementsByTagName("para");
```

Pour plus d'informations sur ce que ces techniques impliquent dans l'écriture de JavaScript sur le web, voir [Survol des technologies JavaScript](/fr/docs/Web/JavaScript/JavaScript_technologies_overview).

## Méthodes d'accès au DOM

Il n'y a rien de particulier à faire pour commencer à utiliser le DOM. Les différents navigateurs ont différentes implémentations du DOM, et celles-ci présentent des degrés divers de conformité au standard DOM de référence (un sujet que l'on tente d'éviter dans cette documentation), mais chacun d'entre eux utilise un modèle objet de document pour rendre les pages Web accessibles aux scripts.

Lorsque vous créez un script, qu'il figure au sein de la page dans un élément `<SCRIPT>` ou soit inclus au moyen d'une instruction de chargement de script, vous pouvez immédiatement commencer à utiliser l'API. En accédant aux éléments [`document`](/fr/docs/Web/API/Document) ou [`window`](/fr/docs/Web/API/Window), vous pouvez manipuler le document lui-même ou parcourir les enfants de ces éléments, qui sont les divers éléments de la page Web. Votre programmation DOM peut être très simple, comme l'exemple suivant qui affiche un message d'avertissement à l'aide de la fonction [`alert()`](/fr/docs/Web/API/Window/alert) de l'objet [`window`](/fr/docs/Web/API/Window), ou peut utiliser des méthodes DOM plus sophistiquées pour créer du nouveau contenu comme dans l'exemple plus bas.

Le code JavaScript suivant affichera une alerte quand le document est chargé (et quand le DOM entier est disponible à l'utilisation).

```html
<body onload="window.alert('Bienvenue sur ma page Web !');"></body>
```

Un autre exemple. Cette fonction crée un nouvel élément H1, y ajoute du texte, et ajoute ensuite cet élément à l'arbre du document :

```html
<html>
  <head>
    <script>
      // run this function when the document is loaded
      window.onload = function () {
        // create a couple of elements in an otherwise empty HTML page
        const heading = document.createElement("h1");
        const heading_text = document.createTextNode("Gros titre !");
        heading.appendChild(heading_text);
        document.body.appendChild(heading);
      };
    </script>
  </head>
  <body></body>
</html>
```

## Types de données fondamentaux

Cette référence tente de décrire les différents objets et types de la manière la plus simple possible. Mais il y a un certain nombre de types de données utilisées par l'API que vous devez connaître.

> **Note :** Parce que la vaste majorité de codes qui utilisent le DOM gravitent autour de la manipulation de documents HTML, il est courant de toujours se référer aux nœuds du DOM comme éléments, étant donné que dans le document HTML, chaque nœud est un élément. Bien que n'étant pas strictement exact, la documentation que vous trouverez dans MDN fera souvent la même chose, à cause de la fréquence de cette hypothèse.

**NDTR:** (Pour simplifier, les exemples de syntaxe présentés dans cette référence se réfèreront aux nœuds en les appelant `elements`, aux tableaux de nœuds en tant que `nodeLists` (ou même simplement éléments), et aux nœuds d'attributs en tant qu'`attributes)`.

Le tableau suivant décrit brièvement ces types de données.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Type de donnée (Interface)</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{domxref("Document")}}</td>
      <td>
        Lorsqu'un membre renvoie un objet de type <code>document</code> (par
        exemple la propriété <strong>ownerDocument</strong> d'un élément, qui
        retourne le <code>document</code> auquel il appartient), cet objet est
        l'objet <code>document</code> racine lui-même. Le chapitre
        <a href="/fr/docs/Web/API/Document"
          >référence de DOM <code>document</code></a
        >
        décrit l'objet <code>document</code> en détail.
      </td>
    </tr>
    <tr>
      <td>{{domxref("Node")}}</td>
      <td>
        Chaque objet du document est sous une forme ou une autre un noeud. Dans
        un document HTML, un objet peût être un élément nœud, mais aussi un nœud
        text ou nœud attribut.
      </td>
    </tr>
    <tr>
      <td>{{domxref("Element")}}</td>
      <td>
        Le type élément est basé sur le nœud. Il se réfère à un élément ou nœud
        de type élément renvoyé par un membre de l'API DOM. Plutôt que de dire,
        par exemple que la méthode
        <a href="/fr/docs/Web/API/Document/createElement"
          >document.createElement()</a
        >
        renvoie une réference à un objet de type nœud, nous dirons simplement
        que cette méthode renvoie l'élément qui vient juste d'être créer dans le
        DOM. Les objets element implémentent l'interface DOM element, mais aussi
        l'interface plus basique node, qui sont toutes les deux incluses dans
        cette réference. dans un document HTML, les éléments sont mis en valeur
        par l'interface API HTML DOM {{domxref("HTMLElement")}} aussi
        bien que par d'autres interfaces décrivant les capacités d'éléments
        spécifiques ( par exemple , {{domxref("HTMLTableElement")}} for
        {{HTMLElement("table")}} elements).
      </td>
    </tr>
    <tr>
      <td>{{domxref("NodeList")}}</td>
      <td>
        Une <code>nodeList</code> est un tableau d'éléments, comme celui qui est
        renvoyé par la méthode
        <a href="/fr/docs/Web/API/Document/getElementsByTagName"
          >document.getElementsByTagName()</a
        >. Les éléments d'une <code>nodeList</code> sont accessibles par un
        index de deux manières différentes :
        <ul>
          <li>list.item(1)</li>
          <li>list[1]</li>
        </ul>
        <p>
          Ces deux lignes sont équivalentes. Dans la première,
          <strong>item()</strong> est la méthode de l'objet
          <code>nodeList</code>. La seconde utilise la syntaxe habituelle d'un
          tableau pour accéder au second élément de la liste.
        </p>
      </td>
    </tr>
    <tr>
      <td>{{domxref("Attribute")}}</td>
      <td>
        Lorsqu'un <code>attribute</code> est renvoyé par un membre (par exemple
        par la méthode <strong>createAttribute()</strong>), il s'agit d'une
        référence à un objet qui expose une interface particulière (et limitée)
        aux attributs. Les attributs sont des nœuds dans le DOM tout comme les
        éléments, mais ils seront rarement utilisés de cette manière.
      </td>
    </tr>
    <tr>
      <td>{{domxref("NamedNodeMap")}}</td>
      <td>
        Une <code>namedNodeMap</code> est comme un tableau, mais où l'on peut
        accéder aux éléments à la fois par nom ou par index. Cette dernière
        possibilité est cependant juste là pour faciliter l'énumération, car la
        liste n'est pas dans un ordre particulier. Une
        <code>namedNodeMap</code> a une méthode item() pour la même raison, et
        il est également possible d'ajouter et de retirer des élements d'une
        <code>namedNodeMap</code>.
      </td>
    </tr>
  </tbody>
</table>

## Les interfaces DOM

Un des objectifs de ce guide est de ne pas trop parler de l'héritage abstrait d'interfaces, et d'autres détails d'implémentation, et de se concentrer plutôt sur les objets dans le DOM qui sont les*choses* réelles utilisables pour manipuler la hiérarchie du DOM. Du point de vue du programmeur Web, il est rarement utile de savoir que l'objet représentant l'élément `HTML FORM` reçoit sa propriété **name** de l'interface `HTMLElement`. Dans les deux cas, la propriété désirée est simplement l'objet de formulaire.

Cependant, la relation entre les objets et les interfaces qu'ils implémentent dans le DOM peut entrainer une certaine confusion, c'est pourquoi cette section tente de présenter un tant soit peu les interfaces figurant dans la spécification du DOM et la manière dont elles sont rendues disponibles.

### Les interfaces et les objets

De nombreux objets empruntent à plusieurs interfaces différentes. L'objet table par exemple implémente une [interface spécialisée de l'élément HTML Table](/fr/docs/Web/API/HTMLTableElement), qui comprend des méthodes telles que `createCaption` et `insertRow`. Mais comme il s'agit également d'un élément HTML, `table` implémente aussi l'interface `Element` décrite dans le chapitre [Référence de DOM `element`](/fr/docs/Web/API/Element). Enfin, comme un élément HTML est, du point de vue du DOM, un nœud au sein de l'arbre de nœuds qui forment le modèle objet pour une page HTML ou XML, l'objet table implémente aussi l'interface plus basique `Node`, dont dérive `Element`.

Lorsque vous obtiendrez une référence à un objet `table`, comme dans l'exemple suivant, vous utiliserez régulièrement ces trois interfaces de manière interchangeable sur l'objet, peut-être même sans le savoir.

```js
var table = document.getElementById("table");
var tableAttrs = table.attributes; // Interface Node/Element
for (var i = 0; i < tableAttrs.length; i++) {
  // Interface HTMLTableElement : attribut border
  if (tableAttrs[i].nodeName.toLowerCase() == "border") table.border = "1";
}
// Interface HTMLTableElement : attribut summary
table.summary = "note : bordure plus large";
```

### Interfaces essentielles du DOM

Cette section liste certaines des interfaces les plus couramment utilisées dans le DOM. L'idée n'est pas ici de décrire ce que font ces API, mais de vous donner une idée des sortes de méthodes et propriétés que vous verrez très souvent en utilisant le DOM. Ces API communes sont utilisées dans les exemples plus longs du chapitre [Exemples d'utilisation du DOM](/fr/docs/Web/API/Document_Object_Model/Examples) à la fin de livre.

Les objets `document` et `window` sont ceux dont les interfaces sont les plus souvent utilisées dans la programmation DOM. En termes simples, l'objet `window` représente quelque chose comme le navigateur, et l'objet `document` est la racine du document lui-même. `Element` hérite de l'interface générique `Node`, et ensemble ces deux interfaces fournissent un grand nombre des méthodes et propriétés utilisables sur des éléments individuels. Ces éléments peuvent également avoir des interfaces spécifiques pour traiter le type de données que ces éléments contiennent, comme dans l'objet `table` donné en exemple dans la section précédente.

Ce qui suit est une brève liste des API communes au script de page dans le Web et XML utilisant le DOM.

- `{{domxref("document.getElementById", "", "", "1")}}(id)`
- `document.{{domxref("Element.getElementsByTagName", "getElementsByTagName", "", "1")}}(name)`
- `{{domxref("document.createElement", "", "", "1")}}(name)`
- `parentNode.{{domxref("Node.appendChild", "appendChild", "", "1")}}(node)`
- `element.{{domxref("element.innerHTML", "innerHTML", "", "1")}}`
- `element.{{domxref("HTMLElement.style", "style", "", "1")}}.left`
- `element.{{domxref("element.setAttribute", "setAttribute", "", "1")}}()`
- `element.{{domxref("element.getAttribute", "getAttribute", "", "1")}}()`
- `element.{{domxref("EventTarget.addEventListener", "addEventListener", "", "1")}}()`
- `{{domxref("window.content", "", "", "1")}}`
- `{{domxref("window.onload", "", "", "1")}}`
- `{{domxref("console.log", "", "", "1")}}()`
- `{{domxref("window.scrollTo", "", "", "1")}}()`

## Test de l'API DOM

Ce document fournit des exemples pour chaque interface utilisable dans le cadre de votre propre développement Web. Dans certains cas, les exemples sont des pages HTML complètes, avec l'accès au DOM dans un élément \<script>, l'interface (comme les boutons) nécessaire pour lancer le script dans un formulaire, et les éléments HTML sur lesquels le DOM opère sont listés également. Lorsque c'est le cas, vous pouvez copier et coller l'exemple dans un nouveau document HTML, l'enregistrer et l'exécuter depuis un navigateur.

Il y a cependant certains cas où les exemples sont plus concis. Pour exécuter les exemples qui démontrent seulement la relation basique entre l'interface et les éléments HTML, il peut être utile de mettre en place une page de test dans laquelle les interfaces peuvent être accédées facilement par des scriptes. La page suivante, très simple, fournit un élément \<script> dans l'entête dans lequel vous pouvez placer les fonctions qui testent l'interface voulue, quelques éléments HTML avec des attributs que vous pouvez lire, modifier ou manipuler de quelque manière que ce soit, et l'interface utilisateur Web nécessaire pour appeler toutes ces fonctions depuis le navigateur.

Vous pouvez utiliser cette page de test ou en créer une semblable pour tester les interfaces DOM qui vous intéressent et voir comment elles fonctionnent sur la plateforme du navigateur. Vous pouvez mettre à jour le contenu de la fonction `test()`, créer plus de boutons, ou ajouter d'autres éléments si nécessaire.

```html
<html>
<head>
  <title>Tests du DOM</title>
  <script type="application/x-javascript">
  function setBodyAttr(attr,value){
    if(document.body) eval('document.body.'+attr+'="'+value+'"');
    else notSupported();
  }
  </script>
</head>
<body>
  <div style="margin: .5in; height="400"">
    <p><b><tt>text</tt> color</p>
    <form>
      <select onChange="setBodyAttr('text',
          this.options[this.selectedIndex].value);">
        <option value="black">black
        <option value="darkblue">darkblue
      </select>
      <p><b><tt>bgColor</tt></p>
      <select onChange="setBodyAttr('bgColor',
          this.options[this.selectedIndex].value);">
        <option value="white">white
        <option value="lightgrey">gray
      </select>
      <p><b><tt>link</tt></p>
      <select onChange="setBodyAttr('link',
          this.options[this.selectedIndex].value);">
        <option value="blue">blue
        <option value="green">green
      </select>  <small>
          <a href="http://www.brownhen.com/dom_api_top.html" id="sample">
      (exemple de lien)</a></small><br>
    </form>
    <form>
      <input type="button" value="version" onclick="ver()" />
    </form>
  </div>
</body>
</html>
```

Pour tester un grand nombre d'interfaces dans une seule page, par exemple une « suite » de propriétés affectant les couleurs d'une page Web, vous pouvez créer une page de test semblable avec une console complète de boutons, de champs de texte et d'autres élements HTML. La capture d'écran suivante vous donnera une idée de comment les interfaces peuvent être regroupées à des fins de test.

Figure 0.1 Exemple de page de test du DOM

![](dom_ref_introduction_to_the_dom.gif)

Dans cet exemple, les menus déroulants mettent à jour dynamiquement les aspects de la page web accessibles au DOM comme sa couleur de fond (`bgColor`), la couleur des hyperliens (`aLink`) et la couleur du texte (`text`). Cependant, lorsque vous concevez vos pages de test, tester les interfaces au fur et à mesure que vous les lisez est une partie importante de l'apprentissage de l'utilisation efficace du DOM.
