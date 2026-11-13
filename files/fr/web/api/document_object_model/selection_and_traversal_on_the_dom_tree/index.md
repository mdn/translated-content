---
title: Sélection et parcours de l'arbre DOM
slug: Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree
l10n:
  sourceCommit: ca1468a4faabb0d62b0f08a723281a79dd8ceaf5
---

{{DefaultAPISidebar("DOM")}}

Dans le guide [Anatomie du DOM](/fr/docs/Web/API/Document_Object_Model/Anatomy_of_the_DOM), nous avons présenté les propriétés permettant de naviguer entre les parents, les enfants et les voisins, mais parcourir manuellement l'arbre est verbeux et sujet aux erreurs. Le DOM fournit des méthodes pour obtenir directement la référence à un élément dans l'arbre par un identifiant unique, un nom de classe, un nom de balise, un sélecteur CSS, et plus encore. Il fournit également des fonctions utilitaires pour itérer sur les nœuds de l'arbre.

## Parcours de l'arbre : à un niveau élevé

Le guide [Anatomie du DOM](/fr/docs/Web/API/Document_Object_Model/Anatomy_of_the_DOM) présente la structure arborescente du DOM. L'arbre a une racine, et chaque nœud possède une liste (éventuellement vide) d'enfants. La racine du document est un nœud {{DOMxRef("Document")}}, tandis que les nœuds {{DOMxRef("Element")}} forment l'épine dorsale de cet arbre.

![Le DOM comme une représentation arborescente d'un document ayant une racine et des éléments nœuds contenant du contenu](/fr/docs/Web/API/Document_Object_Model/example-dom-tree.svg)

Il existe de nombreuses façons de [parcourir un arbre <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Tree_traversal), mais le DOM n'expose qu'un seul ordre&nbsp;: la recherche en profondeur d'abord en pré-ordre (DFS), appelée _ordre du document_ ou _ordre de l'arbre_. En pseudo-code, le pré-ordre fonctionne ainsi&nbsp;:

```js
function parcourirArbre(racine, visiteur) {
  // Visite la racine en premier
  visiteur(racine);
  for (const enfant of racine.childNodes) {
    // Parcourt récursivement chaque enfant dans l'ordre
    // Chaque sous-arbre enfant est complètement visité avant de passer au suivant
    parcourirArbre(enfant, visiteur);
  }
}
```

Un élément précède ses descendants, et les voisins plus anciens et leurs descendants précèdent les voisins plus récents. Par exemple, dans l'arbre ci-dessus, les nœuds `Element` listés dans l'ordre de l'arbre sont&nbsp;: `HTML`, `HEAD`, `TITLE`, `BODY`, `H1`, `P`.

La sélection n'est qu'une forme de parcours, le `visiteur` étant une fonction booléenne qui nous indique si nous nous intéressons à l'élément.

```js
function selectionneArbre(racine, visiteur) {
  // le visiteur correspond avec succès au nœud racine ; retourner sans aller plus loin
  if (visiteur(racine)) return racine;
  for (const enfant of racine.childNodes) {
    const resultat = selectionneArbre(enfant, visiteur);
    // Un résultat est trouvé avec succès dans le sous-arbre à enfant
    if (resultat !== null) return resultat;
  }
  // Aucun résultat trouvé dans le sous-arbre à racine
  return null;
}

function selectionneArbreMulti(racine, visiteur, collection) {
  if (visiteur(racine)) collection.push(racine);
  for (const enfant of racine.childNodes) {
    selectionneArbreMulti(enfant, visiteur, collection);
  }
  return collection;
}
```

Une fois que vous comprenez cela, vous comprenez déjà une grande partie de la sélection et de la traversée du DOM. Il ne reste plus qu'à voir comment chaque méthode DOM spécialisée définit sa fonction `visiteur` et son objet `collection` pour vous.

## Sélectionner des éléments par ID, classe ou nom de balise

Il existe trois principales façons d'identifier un élément&nbsp;: son {{DOMxRef("Element/id", "id")}}, son {{DOMxRef("Element/className", "className")}} et son {{DOMxRef("Element/tagName", "tagName")}}. L'interface {{DOMxRef("Document")}} fournit trois méthodes pour sélectionner par ces trois identifiants&nbsp;:

- {{DOMxRef("document.getElementById()")}}
- {{DOMxRef("document.getElementsByClassName()")}}
- {{DOMxRef("document.getElementsByTagName()")}}

Comme leur nom l'indique, `getElementById()` retourne la référence à un seul élément (ou `null` si aucun élément n'est trouvé), tandis que `getElementsByClassName()` et `getElementsByTagName()` retournent des collections d'éléments. La collection est une _{{DOMxRef("HTMLCollection")}}_ dynamique&nbsp;; nous en discutons plus en détail dans [Travailler avec des collections](#travailler_avec_des_collections).

Chaque `id` d'élément doit être unique dans le document (mais les [DOM d'ombre](/fr/docs/Web/API/Web_components/Using_shadow_DOM) sont des documents séparés et ont donc leurs propres portées). Tant que vous respectez cette exigence dans votre code, vous obtenez toujours l'élément que vous souhaitez avec `getElementById()`. Cependant, les attributs `id` sont très rarement utilisés, car il est difficile de les maintenir uniques à l'échelle mondiale. Par conséquent, dans les applications réelles, vous trouvez souvent `getElementsByClassName()` et `getElementsByTagName()` (ou les [méthodes de requête](#selecting_elements_with_css_selectors) que nous présentons bientôt) plus pratiques.

```html
<div id="conteneur"></div>
<div class="profil large"></div>
```

```js
const divConteneur = document.getElementById("conteneur");
// divConteneur est un HTMLDivElement

const profilDivs = document.getElementsByClassName("profil");
// profilDivs est une HTMLCollection contenant un HTMLDivElement

const profilDivs2 = document.getElementsByTagName("div");
// profilDivs2 est une HTMLCollection contenant les deux HTMLDivElement
```

Quelques notes importantes à souligner&nbsp;:

- La méthode `getElementById()` fait correspondre les ID en respectant la casse. La méthode `getElementsByClassName()` fait également correspondre en respectant la casse, sauf en [mode quirks](/fr/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode), où la correspondance est insensible à la casse ASCII.
- Dans les documents HTML, `getElementsByTagName()` met en minuscules l'argument lors de la correspondance avec les éléments HTML. Les éléments non HTML (par exemple, SVG) sont toujours comparés en respectant la casse. Dans les documents XML, toutes les correspondances de noms de balises sont sensibles à la casse. Notez que le `tagName` d'un élément HTML dans un document HTML est retourné en majuscules, mais qu'il est toujours stocké en minuscules en interne.
- La valeur de l'attribut `class` est une liste séparée par des espaces d'un ou plusieurs noms de classe. Vous pouvez également définir une liste séparée par des espaces pour `getElementsByClassName()`, et le `visitor` teste une relation de sous-ensemble. Autrement dit, un élément est sélectionné si tous ces noms de classe sont présents sur l'élément, et des noms de classe supplémentaires sur l'élément sont également autorisés.
- La méthode `getElementsByTagName()` prend la valeur spéciale `"*"` pour obtenir tous les éléments (c'est-à-dire appliquer aucun filtrage).

Si vous êtes familier avec les [sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors), ces méthodes sont les équivalents DOM des sélecteurs d'ID, de classe, de type et universels&nbsp;:

```css
/* document.getElementById("conteneur") */
#conteneur {
}

/* document.getElementsByClassName("profil") */
.profil {
}

/* document.getElementsByClassName("profil large") */
.profil.large {
}

/* document.getElementsByTagName("div") */
div {
}

/* document.getElementsByTagName("*") */
* {
}
```

La méthode `getElementById()` est également disponible sur {{DOMxRef("DocumentFragment")}}&nbsp;; les méthodes `getElementsByClassName()` et `getElementsByTagName()` sont également disponibles sur {{DOMxRef("Element")}}. L'appel de la méthode sur un nœud définit la racine de recherche sur ce nœud. La racine appelante ne correspond jamais.

## Sélectionner des éléments avec des sélecteurs CSS

Vous pouvez également utiliser directement des sélecteurs CSS pour sélectionner des éléments. Deux méthodes sont disponibles sur {{DOMxRef("Document")}}&nbsp;:

- {{DOMxRef("document.querySelector()")}}
- {{DOMxRef("document.querySelectorAll()")}}

Les deux méthodes recherchent les descendants, en excluant le nœud sur lequel elles sont appelées. La méthode `querySelector()` retourne le premier élément correspondant&nbsp;; la méthode `querySelectorAll()` retourne tous les éléments correspondants dans une _{{DOMxRef("NodeList")}} statique_. Nous présentons à nouveau cette collection de manière plus formelle dans [Travailler avec des collections](#travailler_avec_des_collections).

Pour sélectionner tous les éléments paragraphe (`p`) d'un document dont la classe inclut `avertissement` ou `note`, vous pouvez faire&nbsp;:

```js
const special = document.querySelectorAll("p.avertissement, p.note");
```

Vous pouvez aussi interroger par identifiant. Par exemple&nbsp;:

```js
const el = document.querySelector("#principal, #base, #exclamation");
```

Après l'exécution du code ci-dessus, `el` contient le premier élément du document dont l'ID est l'un de `principal`, `base` ou `exclamation`. L'ordre des sélecteurs dans la liste ne donne pas la priorité à un ID par rapport à un autre. Un élément qui correspond à plusieurs sélecteurs n'apparaît qu'une seule fois dans le résultat de `querySelectorAll()`.

Les [pseudo-classes](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes), telles que `:checked` et `:first-child`, peuvent être utilisées dans les requêtes. Pour protéger la vie privée de l'utilisateur·ice, certaines pseudo-classes ne sont pas prises en charge ou se comportent différemment. Par exemple, {{CSSxRef(":visited")}} ne retourne aucun résultat et {{CSSxRef(":link")}} est traité comme {{CSSxRef(":any-link")}}. Seuls les éléments peuvent être sélectionnés, donc les [pseudo-éléments](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements), tels que `::before`, ne produisent pas d'éléments DOM correspondants.

Les méthodes `querySelector` sont essentiellement des sur-ensembles des méthodes `getElementBy` introduites précédemment. Tout ce que vous pouvez implémenter avec ces dernières, vous pouvez obtenir des résultats similaires avec les premières&nbsp;:

```js
document.getElementById("conteneur");
// Est équivalent à :
document.querySelector("#conteneur");

document.getElementsByClassName("profile large");
// Est équivalent à :
document.querySelectorAll(".profile.large");

document.getElementsByTagName("div");
// Est équivalent à :
document.querySelectorAll("div");
```

Il n'y a que deux points à surveiller&nbsp;:

- Les méthodes `getElementsByClassName()` et `getElementsByTagName()` retournent des collections dynamiques, tandis que `querySelectorAll()` retourne une collection statique (voir [Collections dynamiques et statiques](#collections_dynamiques_et_statiques)). En général, c'est le comportement de la collection statique que vous souhaitez.

- La chaîne de caractères de la syntaxe de sélecteur&nbsp;; sinon, la méthode lance une `SyntaxError` {{DOMxRef("DOMException")}}. Un ID ou un nom de classe HTML n'est pas nécessairement un [identifiant CSS](/fr/docs/Web/CSS/Reference/Values/ident) valide. Utilisez {{DOMxRef("CSS/escape_static", "CSS.escape()")}} lorsque vous insérez une telle valeur dans un sélecteur d'ID ou de classe&nbsp;:

  ```js
  const id = "element:42";
  const element = document.querySelector(`#${CSS.escape(id)}`);
  // document.getElementById(id) a besoin d'aucun échappement.
  ```

Les deux méthodes de requête sont également disponibles sur {{DOMxRef("DocumentFragment")}} et {{DOMxRef("Element")}}. Appeler `querySelector()` ou `querySelectorAll()` sur un élément limite les éléments retournés à ses descendants, mais le sélecteur est appliqué dans le contexte de l'ensemble du document. Par exemple, étant donné ce HTML&nbsp;:

```html
<div>
  <section id="principal">
    <p class="note">Un enfant direct.</p>
    <div>
      <p class="note">Un paragraphe imbriqué.</p>
    </div>
  </section>
</div>
```

Un sélecteur comme `div p` correspond toujours à la première note, car ce `p` est effectivement imbriqué dans un `div`, bien que ce `div` soit en dehors de la racine de recherche. Utilisez {{CSSxRef(":scope")}} pour appliquer le sélecteur uniquement dans la racine de recherche&nbsp;:

```js
const principal = document.getElementById("principal");
const toutesLesNotes = principal.querySelectorAll("div p"); // Les deux paragraphes
const noteEnfant = principal.querySelectorAll(":scope div p"); // Seulement le second
const noteEnfant2 = principal.querySelectorAll(":scope > p"); // Seulement le premier
```

La méthode {{DOMxRef("Element.matches()")}} teste si un élément correspond à la chaîne de caractères de sélecteur, donc `querySelector()` fonctionne comme la fonction `selectTree` avec `element.matches` passé comme fonction `visitor` (malgré de nombreuses différences techniques).

Vous pouvez également rechercher _vers le haut_ en utilisant la méthode {{DOMxRef("Element.closest()")}}. Cette méthode teste l'élément lui-même, puis son élément parent, et ainsi de suite jusqu'à la racine, jusqu'à ce qu'elle trouve un élément ancêtre qui correspond au sélecteur donné.

En utilisant le même HTML&nbsp;:

```js
const noteInterieur = document.querySelector("#principal div p.note");
console.log(noteInterieur.closest("section").id); // "principal"
```

## Travailler avec des collections

Nous avons déjà présenté deux types de collections&nbsp;:

- _{{DOMxRef("HTMLCollection")}} dynamique_ est retourné par `getElementsByClassName()` et `getElementsByTagName()`
- _{{DOMxRef("NodeList")}} statique_ est retourné par `querySelectorAll()`

Une `NodeList` peut contenir n'importe quel type de nœud, tandis qu'une `HTMLCollection` ne contient que des éléments (mais les éléments n'ont pas réellement besoin d'être des éléments HTML). Vous connaissez peut-être déjà la propriété {{DOMxRef("Node.childNodes")}}, qui est également une `NodeList`. La `NodeList` retournée par `querySelectorAll()` ne contient que des éléments, car cette méthode sélectionne des éléments.

Les deux interfaces sont [semblables à des tableaux](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#objets_ressemblant_à_des_tableaux), ce qui signifie qu'elles ont une propriété `length` et prennent en charge l'accès indexé. Elles prennent également en charge [l'itération](/fr/docs/Web/JavaScript/Reference/Iteration_protocols).

```js
const paragraphes = document.querySelectorAll("p");
console.log(paragraphes.length);
console.log(paragraphes[0]);

for (const para of paragraphes) {
  // …
}
```

Cependant, ce ne sont pas de vrais objets {{JSxRef("Array")}}, donc ils n'ont pas de méthodes comme {{JSxRef("Array.prototype.map()")}}. Si vous avez besoin de ces méthodes, vous pouvez les convertir en tableaux, en utilisant la [syntaxe de décomposition](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax) ou {{JSxRef("Array.from()")}}:

```js
const paragraphes = [...document.querySelectorAll("p")];
const paragraphes2 = Array.from(document.querySelectorAll("p"));

const textes = paragraphes.map((p) => p.textContent);
```

Les interfaces `NodeList` et `HTMLCollection`, ainsi que de nombreuses autres interfaces semblables à des tableaux sur le web, sont une [tentative de créer une liste non modifiable <sup>(angl.)</sup>](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156). Elles ne fournissent aucun moyen de les modifier, et la modification des tableaux convertis n'affecte pas la liste originale.

{{DOMxRef("HTMLCollection")}} n'est pas seulement une liste&nbsp;; c'est aussi une carte clé-valeur qui permet de rechercher par l'ID des éléments ou par le `name` des éléments HTML. Vous pouvez soit utiliser {{DOMxRef("HTMLCollection/namedItem", "namedItem()")}} soit y accéder directement en tant que propriétés (tant qu'elles ne sont pas en conflit avec les noms de propriétés existants de la `HTMLCollection`).

```js
const sections = document.getElementsByTagName("section");
const principal = sections.namedItem("principal");
const principal2 = sections["principal"];
```

Les interfaces fournissent quelques méthodes pratiques supplémentaires&nbsp;:

- Les deux interfaces fournissent une méthode {{DOMxRef("NodeList/item", "item()")}}, qui fonctionne comme un accès indexé. La principale différence est qu'elle retourne `null` lorsque l'index est hors de portée, tandis que l'accès indexé retourne `undefined`&nbsp;; elle applique également des règles de conversion d'entrée différentes.
- {{DOMxRef("NodeList")}} fournit {{DOMxRef("NodeList/forEach", "forEach()")}}, {{DOMxRef("NodeList/entries", "entries()")}}, {{DOMxRef("NodeList/keys", "keys()")}} et {{DOMxRef("NodeList/values", "values()")}}. Ils fonctionnent exactement de la même manière que les méthodes `Array`, donc si vous avez seulement besoin de ces méthodes, vous n'avez pas besoin de les convertir en `Array`.

### Collections dynamiques et statiques

Les objets `HTMLCollection` retournés par `getElementsByTagName()` et `getElementsByClassName()` sont _dynamiques_. Essentiellement, la collection ne stocke rien à l'avance&nbsp;; elle se souvient simplement de l'élément racine et de la requête. Lorsque vous essayez réellement de récupérer sa longueur ou un élément qu'elle contient, la collection effectue alors la traversée réelle de l'arbre DOM actuel. (Cela peut fonctionner différemment dans un vrai navigateur en raison des optimisations.) Par conséquent, si vous enregistrez la collection puis mettez à jour l'arbre DOM, la collection reflète désormais le dernier arbre DOM.

```js
const conteneur = document.createElement("div");
const paragraphe = document.createElement("p");
paragraphe.className = "note";
conteneur.append(paragraphe);

const listeDynamique = conteneur.getElementsByClassName("note");
console.log(listeDynamique.length); // 1

paragraphe.classList.remove("note");
console.log(listeDynamique.length); // 0
```

En revanche, l'objet `NodeList` retourné par `querySelectorAll()` est _statique_, ce qui signifie qu'il s'agit d'un instantané de l'état de l'arbre au moment de l'appel de la méthode. Une liste statique préserve son appartenance, pas l'état des nœuds&nbsp;: elle fait toujours référence aux objets de nœuds d'origine.

```js
const conteneur = document.createElement("div");
const paragraphe = document.createElement("p");
paragraphe.className = "note";
conteneur.append(paragraphe);

const listeStatique = conteneur.querySelectorAll(".note");
console.log(listeStatique.length); // 1

paragraphe.classList.remove("note");
console.log(listeStatique.length); // 1
console.log(listeStatique[0].className); // ""
```

Généralement, une liste statique est ce que vous voulez. Vous voulez presque toujours convertir les collections en tableaux de toute façon pour utiliser les méthodes de tableau, auquel cas la collection n'est plus dynamique. De plus, si vous modifiez une collection dynamique tout en itérant dessus, ses indices et sa longueur peuvent changer, créant des [modifications concurrentes](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#modifier_le_tableau_initial_dans_les_méthodes_itératives) inattendues&nbsp;:

```js
const notes = document.getElementsByClassName("note");
for (const note of notes) {
  // Cela supprime simultanément cet élément de la collection, décalant
  // tous les éléments suivants, de sorte que l'itération suivante ne
  // visite pas l'élément suivant
  note.classList.remove("note");
}
```

Pour résoudre ce problème, itérez sur un instantané, comme un tableau créé avec `Array.from(notes)` ou une liste statique obtenue avec `querySelectorAll(".note")`. Alternativement, différer les mutations qui modifient l'appartenance ou l'ordre de la collection jusqu'après l'itération. Vous pouvez toujours conserver une référence à la collection dynamique pour observer les mises à jour ultérieures.

## Parcourir les nœuds

Les méthodes de sélection peuvent être utilisées pour itérer sur les éléments, comme ceci&nbsp;:

```js
for (const descendant of element.querySelectorAll("*")) {
  // Visite chaque élément descendant de ce sous-arbre
}
```

Cependant, cette méthode reste assez limitée&nbsp;: vous ne pouvez pas parcourir les nœuds qui ne sont pas des éléments, comme les nœuds texte ou les commentaires, et vous ne pouvez pas éviter de parcourir un sous-arbre particulier sans écrire des sélecteurs complexes. Le DOM fournit deux interfaces pour le parcours général&nbsp;: {{DOMxRef("NodeIterator")}} et {{DOMxRef("TreeWalker")}}. Par exemple, le code suivant parcourt tous les nœuds, y compris les nœuds texte et les commentaires&nbsp;:

```js
const iterateurNoeud = document.createNodeIterator(document);
let noeud = iterateurNoeud.nextNode();
while (noeud) {
  console.log(noeud.nodeName);
  noeud = iterateurNoeud.nextNode();
}
```

Pour créer un `NodeIterator` ou un `TreeWalker`, appelez respectivement {{DOMxRef("Document/createNodeIterator", "document.createNodeIterator()")}} ou {{DOMxRef("Document/createTreeWalker", "document.createTreeWalker()")}}. Les deux méthodes prennent les trois mêmes arguments&nbsp;:

- `root`&nbsp;: le nœud à partir duquel le parcours commence.
- `whatToShow` {{Optional_Inline}}&nbsp;: définit les types de nœuds à parcourir. Un nœud qui n'est pas parcouru peut tout de même avoir des descendants qui le sont. La valeur par défaut est `NodeFilter.SHOW_ALL`.
- `filter` {{Optional_Inline}}&nbsp;: une fonction, ou un objet doté d'une méthode `acceptNode(node)`, qui restreint davantage les nœuds parcourus. La fonction peut décider si un nœud doit être ignoré et, le cas échéant, si ses descendants doivent l'être également (uniquement pour `TreeWalker`). La valeur par défaut est `null`, ce qui signifie qu'aucun filtrage supplémentaire n'est appliqué.

Les deux objets exposent ces paramètres par leurs propriétés en lecture seule `root`, `whatToShow` et `filter`.

L'interface `NodeFilter` fournit des constantes pour `whatToShow`.

| Constante                                | Nœuds affichés                       |
| ---------------------------------------- | ------------------------------------ |
| `NodeFilter.SHOW_ALL`                    | Tous                                 |
| `NodeFilter.SHOW_ATTRIBUTE`              | {{DOMxRef("Attr")}}                  |
| `NodeFilter.SHOW_CDATA_SECTION`          | {{DOMxRef("CDATASection")}}          |
| `NodeFilter.SHOW_COMMENT`                | {{DOMxRef("Comment")}}               |
| `NodeFilter.SHOW_DOCUMENT`               | {{DOMxRef("Document")}}              |
| `NodeFilter.SHOW_DOCUMENT_FRAGMENT`      | {{DOMxRef("DocumentFragment")}}      |
| `NodeFilter.SHOW_DOCUMENT_TYPE`          | {{DOMxRef("DocumentType")}}          |
| `NodeFilter.SHOW_ELEMENT`                | {{DOMxRef("Element")}}               |
| `NodeFilter.SHOW_PROCESSING_INSTRUCTION` | {{DOMxRef("ProcessingInstruction")}} |
| `NodeFilter.SHOW_TEXT`                   | {{DOMxRef("Text")}}                  |

> [!NOTE]
> La constante `NodeFilter.SHOW_ATTRIBUTE` n'est efficace que lorsque la racine est un nœud attribut. Comme le parent de tout nœud `Attr` est toujours `null`, {{DOMxRef("TreeWalker.nextNode()")}} et {{DOMxRef("TreeWalker.previousNode()")}} ne retournent jamais de nœud `Attr`. Pour parcourir les nœuds `Attr`, utilisez plutôt {{DOMxRef("Element.attributes")}}.

Toutes ces constantes sont des masques de bits, vous pouvez donc combiner les constantes avec [l'opérateur OU binaire](/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) (`|`) pour inclure plusieurs types de nœuds, par exemple `NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT` pour inclure à la fois les nœuds élément et texte.

Un nœud qui ne satisfait pas `whatToShow` n'est jamais transmis à la fonction `filter`. Il peut toutefois avoir des descendants qui sont parcourus.

La fonction `filter` (ou sa méthode `acceptNode()`) est appelée lorsque le parcours évalue un nœud candidat dont le type correspond à `whatToShow`. Les descendants d'un sous-arbre rejeté par `TreeWalker` peuvent ne jamais être transmis au filtre. Le filtre doit retourner l'une de ces constantes&nbsp;:

- `NodeFilter.FILTER_ACCEPT`&nbsp;: entraîne le retour effectif du nœud.
- `NodeFilter.FILTER_SKIP`&nbsp;: entraîne l'omission du nœud, mais ses descendants restent pris en compte.
- `NodeFilter.FILTER_REJECT`&nbsp;: pour `TreeWalker`, entraîne l'omission du nœud et de tous ses descendants&nbsp;; pour `NodeIterator`, cette constante se comporte comme `FILTER_SKIP`.

Par exemple, le code suivant parcourt tous les nœuds texte qui ne contiennent pas uniquement des espaces blancs&nbsp;:

```js
const iterateur = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_TEXT,
  (noeud) =>
    noeud.data.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP,
);
```

### Itérer dans l'ordre de l'arbre avec `NodeIterator`

Un objet {{DOMxRef("NodeIterator")}} parcourt les nœuds dans l'ordre de l'arbre avec la méthode {{DOMxRef("NodeIterator/nextNode", "nextNode()")}} et dans l'ordre inverse avec la méthode {{DOMxRef("NodeIterator/previousNode", "previousNode()")}}. Chaque appel retourne un nœud accepté par le filtre, ou `null` s'il n'existe aucun nœud de ce type dans cette direction.

En poursuivant l'exemple précédent, vous pouvez avancer en continu dans l'ordre de l'arbre et afficher chaque nœud texte dans la console&nbsp;:

```js
let noeud;
while ((noeud = iterateur.nextNode())) {
  console.log(noeud.data);
}
```

De manière abstraite, `NodeIterator` fonctionne comme s'il conservait une liste de nœuds qui satisfont le filtre, triés dans l'ordre de l'arbre (mais il ne les stocke pas réellement). L'itérateur suit une position située entre deux nœuds de cette liste, exposée par {{DOMxRef("NodeIterator/referenceNode", "referenceNode")}} et {{DOMxRef("NodeIterator/pointerBeforeReferenceNode", "pointerBeforeReferenceNode")}}. La méthode `nextNode()` retourne le nœud immédiatement à droite de cette position, tandis que `previousNode()` retourne celui qui se trouve immédiatement à gauche. Au départ, {{DOMxRef("NodeIterator/referenceNode", "referenceNode")}} correspond à la racine et {{DOMxRef("NodeIterator/pointerBeforeReferenceNode", "pointerBeforeReferenceNode")}} vaut `true`. Le premier appel à `nextNode()` retourne donc la racine si elle satisfait les filtres, tandis que le premier appel à `previousNode()` retourne `null`, car aucun nœud ne se trouve à gauche. Après un appel réussi à `nextNode()`, `referenceNode` correspond au nœud retourné et `pointerBeforeReferenceNode` vaut `false`&nbsp;; l'inverse se produit avec `previousNode()`. Par conséquent, inverser le sens du parcours retourne de nouveau le même nœud s'il satisfait toujours les filtres.

### Parcourir l'arbre filtré avec `TreeWalker`

{{DOMxRef("NodeIterator")}} expose les nœuds filtrés comme une collection linéaire, ce qui est pratique pour l'itération mais ne préserve pas la structure de l'arbre. Un {{DOMxRef("TreeWalker")}} permet de naviguer dans les relations entre les nœuds dans une vue filtrée de l'arbre.

De manière abstraite, `TreeWalker` fonctionne comme s'il conserve un _arbre_ de nœuds qui ont passé le filtre, de sorte que pour chaque nœud dans la vue filtrée, ses enfants directs sont ses descendants dans l'arbre original s'il n'y a pas de nœud intermédiaire qui passe également le filtre. Rappelez-vous que `NodeFilter.FILTER_SKIP` ignore un nœud mais permet à ses descendants de passer, tandis que `NodeFilter.FILTER_REJECT` ignore un nœud et tous ses descendants.

![Un arbre binaire avec 7 nœuds, numérotés de 1 à 7 dans l'ordre de parcours en largeur. Les nœuds 1, 3, 4, 5 et 7 sont acceptés. Les lignes en pointillés dans la vue filtrée relient le nœud 1 à ses enfants 4, 5 et 3, et le nœud 3 à son enfant 7.](filtered-tree.svg)

Sa propriété {{DOMxRef("TreeWalker/currentNode", "currentNode")}} commence à la racine, même si la racine ne passe pas les filtres. Contrairement à un `NodeIterator`, appeler `nextNode()` commence la recherche après ce nœud courant, donc la racine elle-même n'est jamais retournée lors du premier appel.

Les méthodes suivantes déplacent `currentNode` dans la vue filtrée. Si aucun nœud correspondant n'est trouvé, elles retournent `null` et laissent `currentNode` inchangé&nbsp;: {{DOMxRef("TreeWalker/parentNode", "parentNode()")}}, {{DOMxRef("TreeWalker/firstChild", "firstChild()")}}, {{DOMxRef("TreeWalker/lastChild", "lastChild()")}}, {{DOMxRef("TreeWalker/previousSibling", "previousSibling()")}}, {{DOMxRef("TreeWalker/nextSibling", "nextSibling()")}}.

Notez que la vue filtrée peut ne pas être un arbre unique si la racine ne passe pas le filtre. Utilisez {{DOMxRef("TreeWalker/previousNode", "previousNode()")}} et {{DOMxRef("TreeWalker/nextNode", "nextNode()")}} pour trouver le nœud précédent/suivant qui passe le filtre dans l'ordre de l'arbre, qui peut appartenir à un arbre filtré différent. Ces méthodes retournent également `null` et laissent `currentNode` inchangé si aucun nœud correspondant n'est trouvé.

Contrairement à `referenceNode` d'un itérateur, `currentNode` est modifiable. Vous pouvez le sauvegarder et le réassigner plus tard, ou réinitialiser le marcheur à sa racine avec `walker.currentNode = walker.root`. L'assignation n'applique pas les filtres et ne vérifie pas que le nœud se trouve dans le sous-arbre de la racine, donc gardez-le dans ce sous-arbre lorsque vous voulez que le parcours y reste.

Par exemple, étant donné ce HTML&nbsp;:

```html
<article id="article">
  <p>Lisez <strong>ce</strong> paragraphe.</p>
  <aside data-skip><p>Ignorez cette note.</p></aside>
  <p>Lisez également ce paragraphe.</p>
</article>
```

Ce marcheur collecte les nœuds de texte non blancs tout en excluant les sous-arbres marqués avec `data-skip`&nbsp;:

```js
const article = document.getElementById("article");
const marcheur = document.createTreeWalker(
  article,
  NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
  (noeud) => {
    if (noeud.nodeType === Node.ELEMENT_NODE) {
      return noeud.hasAttribute("data-skip")
        ? NodeFilter.FILTER_REJECT
        : NodeFilter.FILTER_SKIP;
    }
    return noeud.data.trim()
      ? NodeFilter.FILTER_ACCEPT
      : NodeFilter.FILTER_SKIP;
  },
);

const morceaux = [];
let noeud;
while ((noeud = marcheur.nextNode())) {
  morceaux.push(noeud.data);
}
console.log(morceaux.join(""));
// "Lisez ce paragraphe.Lisez aussi ce paragraphe."
```

`SHOW_ELEMENT` est nécessaire même si nous ne collectons que du texte, car cette constante permet au filtre d'examiner et de rejeter les éléments dotés de `data-skip`. Avec `SHOW_TEXT` seul, ces éléments sont ignorés avant l'appel du filtre, et leur texte est tout de même parcouru. Comme `NodeIterator` ne tient pas compte de la structure de l'arbre, il ne permet pas d'exclure des sous-arbres entiers.

## Résumé

Voici les fonctionnalités utiles pour sélectionner des éléments dans l'arbre DOM ou parcourir les nœuds&nbsp;:

- Pour sélectionner des éléments par ID, classe ou nom de balise&nbsp;: {{DOMxRef("Document/getElementById", "getElementById()")}} (également disponible sur `DocumentFragment`), {{DOMxRef("Document/getElementsByClassName", "getElementsByClassName()")}} et {{DOMxRef("Document/getElementsByTagName", "getElementsByTagName()")}} (ces deux dernières méthodes sont également disponibles sur `Element`).
- Pour sélectionner des éléments avec des sélecteurs CSS&nbsp;: {{DOMxRef("Element/querySelector", "querySelector()")}} pour la première correspondance ou {{DOMxRef("Element/querySelectorAll", "querySelectorAll()")}} pour toutes les correspondances. Les deux méthodes sont également disponibles sur `DocumentFragment` et `Element`.
- Pour tester un élément ou rechercher ses ancêtres&nbsp;: {{DOMxRef("Element/matches", "matches()")}} et {{DOMxRef("Element/closest", "closest()")}}.
- Les interfaces {{DOMxRef("NodeList")}} et {{DOMxRef("HTMLCollection")}} sont des collections de nœuds ou d'éléments semblables à des tableaux qui fournissent `length`, l'accès par indice, l'itération et `item()`. `NodeList` fournit également `forEach()`, `entries()`, `keys()` et `values()`. `HTMLCollection` fournit {{DOMxRef("HTMLCollection/namedItem", "namedItem()")}} et l'accès aux propriétés nommées.
- {{DOMxRef("document.createNodeIterator()")}} crée un objet {{DOMxRef("NodeIterator")}} qui parcourt les nœuds de manière séquentielle au moyen de ses méthodes {{DOMxRef("NodeIterator/nextNode", "nextNode()")}}/{{DOMxRef("NodeIterator/previousNode", "previousNode()")}}. Sa position est exposée par {{DOMxRef("NodeIterator/referenceNode", "referenceNode")}} et {{DOMxRef("NodeIterator/pointerBeforeReferenceNode", "pointerBeforeReferenceNode")}}.
- {{DOMxRef("document.createTreeWalker()")}} crée un objet {{DOMxRef("TreeWalker")}} qui parcourt les nœuds dans la vue filtrée de l'arbre au moyen de ses méthodes `parentNode()`, `firstChild()`/`lastChild()`, `previousSibling()`/`nextSibling()` et `previousNode()`/`nextNode()`. Sa position est exposée par {{DOMxRef("TreeWalker/currentNode", "currentNode")}}.
- Les masques de bits `NodeFilter.SHOW_*` sélectionnent les types de nœuds, et une fonction de filtre ou une méthode `acceptNode()` retourne `FILTER_ACCEPT`, `FILTER_SKIP` ou `FILTER_REJECT`. Seul `TreeWalker` utilise `FILTER_REJECT` pour élaguer des sous-arbres.

## Voir aussi

- [Anatomie du DOM](/fr/docs/Web/API/Document_Object_Model/Anatomy_of_the_DOM)
- [Les sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
- La méthode {{DOMxRef("Element.querySelector()")}}
- La méthode {{DOMxRef("Element.querySelectorAll()")}}
- La méthode {{DOMxRef("Document.querySelector()")}}
- La méthode {{DOMxRef("Document.querySelectorAll()")}}
- L'interface {{DOMxRef("NodeIterator")}}
- L'interface {{DOMxRef("TreeWalker")}}
- [La norme DOM&nbsp;: parcours <sup>(angl.)</sup>](https://dom.spec.whatwg.org/#traversal)
- [La spécification des sélecteurs <sup>(angl.)</sup>](https://drafts.csswg.org/selectors/)
