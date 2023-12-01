---
title: Introduction à l'utilisation de XPath avec JavaScript
slug: Web/XPath/Introduction_to_using_XPath_in_JavaScript
---

Ce document décrit l'interface pour utiliser [XPath](/fr/docs/Web/XPath) dans JavaScript, que ce soit en interne, dans les extensions et depuis les sites Web. Mozilla implémente une partie importante de [DOM 3 XPath (en)](https://www.w3.org/TR/2004/NOTE-DOM-Level-3-XPath-20040226/). Cela signifie que les expressions XPath peuvent être utilisées sur des documents HTML et XML.

La principale interface pour l'utilisation de XPath est la fonction [`evaluate()`](/fr/docs/Web/API/Document/evaluate) de l'objet [`document`](/fr/docs/Web/API/Document).

## document.evaluate()

Cette méthode évalue les expressions [XPath](/fr/docs/Web/XPath) dans un document [XML](/fr/docs/Web/XML) (y compris les documents HTML), et retourne un objet [`XPathResult`](/fr/docs/Web/XPath/XPathResult), qui peut être un nœud unique ou un ensemble de nœuds. La documentation existante sur cette méthode se trouve à la page [`document.evaluate`](/fr/docs/Web/API/Document/evaluate) mais elle est plutôt succincte comparée à nos besoins actuels. Nous l'examinerons de façon plus complète dans la suite de ce document.

```js
var xpathResult = document.evaluate(
  xpathExpression,
  contextNode,
  namespaceResolver,
  resultType,
  result,
);
```

### Paramètres

La fonction [evaluate](/fr/docs/Web/API/Document/evaluate) prend cinq arguments au total :

- `xpathExpression`
  - : Une chaîne contenant l'expression XPath à évaluer.
- `contextNode`
  - : Un nœud du document pour lequel l'expression `xpathExpression` doit être évaluée, ainsi que l'ensemble de ses descendants. Le nœud [document](/fr/docs/Web/API/Document/) est le plus couramment utilisé.
- `namespaceResolver`
  - : Une fonction à laquelle sera passé tout préfixe d'espace de nommage contenu dans l'expression `xpathExpression` et qui renvoie une chaîne représentant l'URI de l'espace de nommage associé à ce préfixe. Cela permet la conversion entre le préfixe utilisé dans les expressions XPath et les différents préfixes éventuellement utilisés dans le document. Cette fonction peut être :

<!---->

- [Créée](#Impl.C3.A9mentation_d.27un_r.C3.A9solveur_d.27espaces_de_nommage_par_d.C3.A9faut) à l'aide de la méthode [`createNSResolver`](/fr/docs/Web/API/Document/createNSResolver) d'un objet [`XPathEvaluator`](http://www.xulplanet.com/references/objref/XPathEvaluator.html). C'est la solution à utiliser à peu près tout le temps.
- Une valeur `null`, qui peut être utilisé pour les documents HTML ou lorsqu'aucun préfixe n'est utilisé. Remarquez que si l'expression `xpathExpression` contient un préfixe d'espace de nommage cela déclenchera une exception `DOMException` portant le code `NAMESPACE_ERR`.
- Une fonction personnalisée définie par l'utilisateur. Voir la section [Implémentation d'un résolveur d'espace de nommage personnalisé](#Impl.C3.A9mentation_d.27un_r.C3.A9solveur_d.27espace_de_nommage_personnalis.C3.A9) dans l'annexe pour plus de détails.

<!---->

- `resultType`
  - : Une [constante](#Constantes_d.C3.A9finies_de_XPathResult) qui définit le type de résultat à renvoyer comme résultat de l'évaluation. La constante la plus courante est `XPathResult.ANY_TYPE` qui renverra un résultat du type le plus naturel par rapport à l'expression XPath. Une section de l'annexe contient une liste complète des [constantes disponibles](#Constantes_d.C3.A9finies_de_XPathResult). Elles sont expliquées dans la section [#Définition du type de retour](#D.C3.A9finition_du_type_de_retour) ci-dessous.
- `result`
  - : Soit un objet `XPathResult` existant qui sera réutilisé pour contenir les résultats, soit la valeur `null` qui peut être utilisée pour créer un nouvel objet `XPathResult`.

### Valeur de retour

Renvoie `xpathResult`, qui est un objet `XPathResult` du type [défini](#D.C3.A9finition_du_type_de_retour) dans le paramètre `resultType`. L'interface `XPathResult` est définie dans ce [document](/fr/docs/Web/API/XPathResult).

### Implémentation d'un résolveur d'espaces de nommage par défaut

On crée un résolveur d'espace de nommage à l'aide de la méthode `createNSResolver` de l'objet [document](/fr/docs/Web/API/Document/).

```js
var nsResolver = document.createNSResolver(
  contextNode.ownerDocument == null
    ? contextNode.documentElement
    : contextNode.ownerDocument.documentElement,
);
```

Ou alternativement en utilisant la méthode \<code>createNSResolver\</code> d'un objet \<code>XPathEvaluator\</code>. \<pre> var xpEvaluator = new XPathEvaluator(); var nsResolver = xpEvaluator.createNSResolver( contextNode.ownerDocument == null ? contextNode.documentElement : contextNode.ownerDocument.documentElement ); \</pre> On lui passe ensuite `document.evaluate`, la variable `nsResolver` comme paramètre `namespaceResolver`.

véracité du paragraphe suivant à vérifier avec la doc du w3c Notez que XPath définit que les `QNames` sans préfixe correspondent uniquement aux éléments de l'espace de nommage `null`. Il n'existe aucun moyen dans XPath pour récupérer l'espace de nommage par défaut. Pour coupler des éléments ou des attributs dans un espace de nommage non nul, vous devrez détecter les noms préfixés, et créer un résolveur d'espace de nommage qui fera correspondre le préfixe avec l'espace de nommage. Vous en saurez plus sur la façon de [créer un résolveur d'espace de nommage personnalisé](#Impl.C3.A9mentation_d.27un_r.C3.A9solveur_d.27espace_de_nommage_personnalis.C3.A9) ci-dessous.

### Définition du type de retour

La variable `xpathResult` renvoyée par `document.evaluate` peut être composée de nœuds individuels ([types simples](#Types_simples)), ou un groupe de nœuds ([types d'ensembles de nœuds](#Types_d.27ensembles_de_n.C5.93uds)).

#### Types simples

Lorsque le type de résultat spécifié dans `resultType` est soit :

- `NUMBER_TYPE` — un nombre
- `STRING_TYPE` — une chaîne
- `BOOLEAN_TYPE` — une valeur booléenne

On obtiendra la valeur de retour de l'expression en accédant respectivement aux propriétés suivantes de l'objet `XPathResult` :

- `numberValue`
- `stringValue`
- `booleanValue`

##### Exemple

Cet exemple utilise l'expression XPath [`count(//p)`](/fr/docs/Web/XPath/Fonctions/count) pour obtenir le nombre d'éléments `<p>` présents dans le document HTML :

```js
var paragraphCount = document.evaluate(
  "count(//p)",
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);

console.log(
  "Ce document contient " +
    paragraphCount.numberValue +
    " éléments de paragraphe",
);
```

Même si JavaScript convertira un nombre en chaîne pour l'affichage, l'interface XPath ne fera pas automatiquement la conversion du résultat numérique si la propriété `stringValue` est demandée. Ainsi, le code suivant ne fonctionnera **pas** :

```js
var paragraphCount = document.evaluate(
  "count(//p)",
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);

console.log(
  "Ce document contient " +
    paragraphCount.stringValue +
    " éléments de paragraphe",
);
```

Au lieu de cela, il déclenchera une exception portant le code `NS_DOM_TYPE_ERROR`.

#### Types d'ensembles de nœuds

L'objet `XPathResult` permet de renvoyer les ensembles de nœuds sous la forme de trois types principaux :

- [Itérateurs](#It.C3.A9rateurs)
- [Snapshots](#Snapshots)
- [Premiers nœuds](#Premiers_n.C5.93uds)

##### Itérateurs

Lorsque le type de résultat spécifié dans le paramètre `resultType` est soit :

- `UNORDERED_NODE_ITERATOR_TYPE`
- `ORDERED_NODE_ITERATOR_TYPE`

L'objet `XPathResult` renvoyé sera un ensemble de nœuds correspondant à l'expression se comportant comme un itérateur. On pourra accéder individuellement aux nœuds qu'il contient en utilisant la méthode [`iterateNext()`](/fr/docs/Web/XPathResult/IterateNext) de l'objet `XPathResult`.

Lorsque tous les nœuds ont été parcourus, [`iterateNext()`](/fr/docs/Web/XPathResult/IterateNext) renverra `null`.

Notez cependant que si le document est modifié (l'arbre du document est modifié) entre les itérations, l'itérateur sera invalidé et la propriété `invalidIteratorState` de `XPathResult` deviendra `true`. Une exception `NS_ERROR_DOM_INVALID_STATE_ERR` sera également déclenchée.

###### Exemple d'itérateur

```js
var iterator = document.evaluate(
  "//phoneNumber",
  documentNode,
  null,
  XPathResult.UNORDERED_NODE_ITERATOR_TYPE,
  null,
);

try {
  var thisNode = iterator.iterateNext();

  while (thisNode) {
    console.log(thisNode.textContent);
    thisNode = iterator.iterateNext();
  }
} catch (e) {
  console.log(
    "Erreur : L'arbre du document a été modifié pendant l'itération " + e,
  );
}
```

##### Snapshots

Lorsque le type de résultat spécifié dans le paramètre `resultType` est l'une des valeurs suivantes :

- `UNORDERED_NODE_SNAPSHOT_TYPE`
- `ORDERED_NODE_SNAPSHOT_TYPE`

L'objet `XPathResult` renvoyé sera un ensemble statique de nœuds correspondant à l'expression. L'accès à chaque nœud se fera au travers de la méthode [`snapshotItem(itemNumber)`](/fr/docs/Web/XPathResult/SnapshotItem) de l'objet `XPathResult`, où `itemNumber` est l'indice du nœud à récupérer. On peut accéder au nombre total de nœuds contenus dans l'ensemble par la propriété `snapshotLength`.

Les snapshots ne changent pas avec les mutations du document. Aussi, contrairement aux itérateurs, le snapshot ne deviendra pas invalide mais peut ne plus correspondre au document actuel. Par exemple, des nœuds peuvent avoir été déplacés, il peut contenir des nœuds qui n'existent plus ou de nouveaux nœuds peuvent avoir été ajoutés.

###### Exemple de snapshot

```js
var nodesSnapshot = document.evaluate(
  "//phoneNumber",
  documentNode,
  null,
  XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
  null,
);

for (var i = 0; i < nodesSnapshot.snapshotLength; i++) {
  console.log(nodesSnapshot.snapshotItem(i).textContent);
}
```

##### Premier nœud

Lorsque le type de résultat spécifié dans le paramètre `resultType` est l'une des valeurs suivantes :

- `ANY_UNORDERED_NODE_TYPE`
- `FIRST_ORDERED_NODE_TYPE`

L'objet `XPathResult` renvoyé n'est que le premier nœud trouvé correspondant à l'expression XPath. On peut y accéder à l'aide de la propriété `singleNodeValue` de l'objet `XPathResult`. Celle-ci vaudra `null` si l'ensemble de nœuds est vide.

Notez que pour le sous-type non ordonné (le premier), le nœud unique renvoyé ne sera peut-être pas le premier nœud dans l'ordre du document. Dans le cas du sous-type ordonné (le second), vous pouvez être sûr d'obtenir le premier nœud correspondant dans l'ordre du document.

###### Exemple de premier nœud

```js
var firstPhoneNumber = document.evaluate(
  "//phoneNumber",
  documentNode,
  null,
  XPathResult.FIRST_ORDERED_NODE_TYPE,
  null,
);

console.log(
  "Le premier numéro de téléphone trouvé est " +
    firstPhoneNumber.singleNodeValue.textContent,
);
```

#### La constante ANY_TYPE

Lorsque le type de résultat spécifié dans le paramètre `resultType` est la valeur `ANY_TYPE`, l'objet `XPathResult` renvoyé pourra être de n'importe quel type, c'est-à-dire du type résultant le plus naturellement de l'évaluation de l'expression.

Il peut s'agir de n'importe lequel des types simples (`NUMBER_TYPE, STRING_TYPE, BOOLEAN_TYPE`), **mais** si le type du résultat retourné est un ensemble de nœuds alors il ne pourra être **que** du type `UNORDERED_NODE_ITERATOR_TYPE`.

Pour déterminer le type utilisé après l'évaluation, on utilisera la propriété `resultType` de l'objet `XPathResult`. Les valeurs [constantes](#Constantes_d.C3.A9finies_de_XPathResult) de cette propriété sont définies dans l'annexe.

None Yet =====Exemple Any_Type===== \<pre> \</pre>

## Exemples

### Dans un document HTML

Le code suivant est destiné à être inséré dans un fragment JavaScript intégré ou lié au document HTML qui devra être évalué par l'expression XPath.

Pour extraire tous les éléments d'en-tête `<h2>` d'un document HTML à l'aide de XPath, l'expression `xpathExpression` est simplement '`//h2`', où `//` est l'opérateur descendant récursif (ou RDO) qui correspond aux éléments dont la propriété `nodeName` est `h2` n'importe où dans l'arbre du document. Le code complet pour cela est : link to introductory xpath doc

```js
var headings = document.evaluate(
  "//h2",
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);
```

Notez que, comme HTML ne possède pas d'espace de nommage, `null` a été passé comme paramètre `namespaceResolver`.

Comme le but est de chercher les en-têtes dans l'intégralité du document, on utilise l'objet [document](/fr/docs/Web/API/Document/) lui-même comme paramètre `contextNode`.

Le résultat de cette expression est un objet `XPathResult`. Pour connaître le type de résultat renvoyé, il convient d'évaluer la propriété `resultType` de l'objet renvoyé. Dans notre cas, il sera évalué à `4`, c'est donc un `UNORDERED_NODE_ITERATOR_TYPE`. Il s'agit du type de retour par défaut lorsque le résultat de l'expression XPath est un ensemble de nœuds. Il permet d'accéder à un seul nœud à la fois et ne renvoie pas les nœuds dans un ordre particulier. Pour accéder à ceux-ci, on utilise la méthode `iterateNext()` de l'objet renvoyé :

```js
var thisHeading = headings.iterateNext();

var alertText = "Les en-têtes de niveau 2 présents dans ce document sont :\n";

while (thisHeading) {
  alertText += thisHeading.textContent + "\n";
  thisHeading = headings.iterateNext();
}
```

Une fois l'itération effectuée sur un nœud, nous avons accès à toutes les [Interfaces DOM](/fr/docs/Web/API/Document_Object_Model#Interfaces_du_DOM) standards de ce nœud. Après avoir parcouru tous les éléments `h2` renvoyés à partir de notre expression, chaque nouvel appel à `iterateNext()` donnera `null`.

### Évaluation d'un document XML appartenant à une extension

L'exemple suivant utilise un document XML situé à l'adresse [`chrome://yourextension/content/peopleDB.xml`]().

```xml
<?xml version="1.0"?>
<people xmlns:xul = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul" >
  <person>
    <name first="george" last="bush" />
    <address street="1600 pennsylvania avenue" city="washington" country="usa"/>
    <phoneNumber>202-456-1111</phoneNumber>
  </person>
  <person>
    <name first="tony" last="blair" />
    <address street="10 downing street" city="london" country="uk"/>
    <phoneNumber>020 7925 0918</phoneNumber>
  </person>
</people>
```

Pour rendre les contenus du document XML accessibles depuis l'extension, on crée un objet [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) pour charger le document de façon synchrone. La variable `xmlDoc` contiendra le document comme un objet [`XMLDocument`](/fr/docs/Web/API/XMLDocument) sur lequel on pourra utiliser la méthode `evaluate`.

_JavaScript utilisé dans les documents XUL/js des extensions._

```js
var req = new XMLHttpRequest();

req.open("GET", "chrome://yourextension/content/peopleDB.xml", false);
req.send(null);

var xmlDoc = req.responseXML;

var nsResolver = xmlDoc.createNSResolver(
  xmlDoc.ownerDocument == null
    ? xmlDoc.documentElement
    : xmlDoc.ownerDocument.documentElement,
);

var personIterator = xmlDoc.evaluate(
  "//person",
  xmlDoc,
  nsResolver,
  XPathResult.ANY_TYPE,
  null,
);
```

#### Note

Quant l'objet XPathResult n'est pas défini, les constantes peuvent être récupérées dans du code privilégié avec `Components.inertfaces.nsIDOMXPathResult.ANY_TYPE(CI.nsIDOMXPathResult)`. De la même manière un objet XPathEvaluator peut être créé en utilisant :

```js
Components.classes["@mozille.org/dom/xpath-evaluator;1"].createInstance(
  Components.interfaces.nsIDOMXPathEvaluator,
);
```

## Annexe

#### Implémentation d'un résolveur d'espace de nommage personnalisé

Cet exemple ne sert que d'illustration. Cette fonction nécessitera de prendre les préfixes d'espaces de nommage depuis la `xpathExpression` et retourne l'URI correspondante à ces préfixes. Par exemple, l'expression :

```
'//xhtml:td/mathml:math'
```

sélectionnera toutes les expressions [MathML](/fr/MathML) qui sont les descendantes des éléments (X)HTML de cellules de tableau.

Afin d'associer le préfixe `mathml:` avec l'URI d'espace de nommage '[`http://www.w3.org/1998/Math/MathML`](http://www.w3.org/1998/Math/MathML)' et `xhtml:` avec l'URI [`http://www.w3.org/1999/xhtml`](http://www.w3.org/1999/xhtml), nous fournissons une fonction :

```js
function nsResolver(prefix) {
  var ns = {
    xhtml: "http://www.w3.org/1999/xhtml",
    mathml: "http://www.w3.org/1998/Math/MathML",
  };
  return ns[prefix] || null;
}
```

L'appel à `document.evaluate` ressemblera alors à :

```js
document.evaluate(
  "//xhtml:td/mathml:math",
  document,
  nsResolver,
  XPathResult.ANY_TYPE,
  null,
);
```

#### Implémentation d'un espace de nommage par défaut pour les documents XML

Comme nous l'avons vu précédemment dans la section [#Implémentation d'un résolveur d'espaces de nommage par défaut](#Impl.C3.A9mentation_d.27un_r.C3.A9solveur_d.27espaces_de_nommage_par_d.C3.A9faut), le résolveur par défaut ne gère pas l'espace de nommage par défaut pour les documents XML. Par exemple, avec ce document :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <entry />
  <entry />
  <entry />
</feed>
```

`doc.evaluate('//entry', doc, nsResolver, XPathResult.ANY_TYPE, null)` retournera un ensemble vide, où `nsResolver` est le résolveur retourné par `createNSResolver`. Passé un résolveur `null` ne fonctionne pas mieux.

Une alternative possible est de créer un résolveur personnalisé qui retournera le bon espace de nommage (l'espace de nommage _Atom_ dans ce cas). Par exemple :

```js
function resolver() {
  return "http://www.w3.org/2005/Atom";
}
doc.evaluate("//entry", doc, resolver, XPathResult.ANY_TYPE, null);
```

Un résolveur plus complexe sera nécessaire si le document utilise de multiple espaces de nommage.

Une approche qui peut potentiellement mieux fonctionner (et autoriser les espaces de nom à ne pas être connus au fil du temps) est décrite dans la section suivante.

#### Utiliser les fonctions XPath pour référencer les éléments avec un espace de nom par défaut

Une autre approche pour identifier les éléments par défaut dans un espace de noms non-null (et qui fonctionne bien pour les expressions XPath dynamiques où les espaces de noms peuvent ne pas être connus) implique la référence à un élément particulier en utilisant un formulaire tel que `[namespace-uri()='http://www.w3.org/1999/xhtml' and name()='p' and @id='_monid']`. Cela évite les problèmes résultant en une requête XPath qui n'est pas capable de détecter l'espace de noms par défaut sur un élément labelisé correctement.

#### Obtenir des éléments et des attributs d'un espace de noms spécifique en ignorant le préfixe

Si l'on souhaite avoir une certaine flexibilité dans les espaces de noms en ne nécessitant pas d'utiliser un préfixe spécifique lorsque l'on veut trouver un élément ou un attribut appartenant à un espace de noms, on doit utiliser des techniques spéciales.

Tandis que l'on peut adapter la technique dans la section supérieure pour tester les éléments appartenant à un espace de noms sans regarder le préfix choisi (en utilisant [local-name()](/fr/docs/Web/XPath/Functions/local-name) combiné avec [namespace-uri()](/fr/docs/Web/XPath/Functions/namespace-uri) à la place de [name()](/fr/docs/Web/XPath/Functions/name)), un situation plus compliquée apparaît cependant, si l'on souhaite obtenir un élément avec un attribut appartenant à un espace de noms spécifique dans un prédicat (étant donnée l'absence des variables indépendantes de l'implémentation en XPath 1.0).

Par exemple, on peut essayer (de manière incorrecte) d'obtenir un élément avec un attribut appartenant à un espace de noms de la manière suivante : `var xpathlink = someElements[local-name(@*)="href" and namespace-uri(@*)='http://www.w3.org/1999/xlink'];`

Cela pourrait récupérer des éléments par inadvertance si un de ces attributs existaient avec un nom local "`href`", mais que c'était un autre attribut qui avait le nom d'espace ciblé (XLink, à la place de [@href](/fr/docs/Web/XPath/Axes/attribute)).

Afin d'obtenir des éléments avec l'attribut XLink `@href` de manière précise (sans par ailleurs être obligé de définir des préfixes dans un résolveur de nom d'espaces), on procéder comme suit :

```js
var xpathEls =
  'someElements[@*[local-name() = "href" and manespace-uri() = "http://www.w3.org/1999/xlink"]]'; // Récupère les éléments avec un simple attribute qui a à la fois le nom local 'href' and l'espace de noms XLink
var thislevel = xml.evaluate(xpathEls, xml, null, XPathResult.ANY_TYPE, null);
var thisitemEl = thislevel.iterateNext();
```

#### Constantes définies de XPathResult

<table class="standard-table">
  <tbody>
    <tr>
      <td class="header">Constante du type de résultat</td>
      <td class="header">Valeur</td>
      <td class="header">Description</td>
    </tr>
    <tr>
      <td>ANY_TYPE</td>
      <td>0</td>
      <td>
        Un ensemble contenant n'importe quel type qui résulte naturellement de
        l'évaluation de l'expression. Notez que si c'est un ensemble de noeuds
        qui doit être retourné, alors le type résultant sera toujours
        UNORDERED_NODE_ITERATOR_TYPE.
      </td>
    </tr>
    <tr>
      <td>NUMBER_TYPE</td>
      <td>1</td>
      <td>
        Un résultat contenant un seul nombre. C'est utile, par exemple, dans une
        expression XPath utilisant la fonction <code>count()</code>.
      </td>
    </tr>
    <tr>
      <td>STRING_TYPE</td>
      <td>2</td>
      <td>Un résultat contenant une seule chaîne de caractère.</td>
    </tr>
    <tr>
      <td>BOOLEAN_TYPE</td>
      <td>3</td>
      <td>
        Un résultat contenant une seule valeur booléenne. C'est utile, par
        exemple, dans une expression XPath utilisant la fonction
        <code>not()</code>.
      </td>
    </tr>
    <tr>
      <td>UNORDERED_NODE_ITERATOR_TYPE</td>
      <td>4</td>
      <td>
        Un ensemble de nœuds contenant tous les nœuds vérifiant l'expression.
        Les nœuds ne sont pas nécessairement dans le même ordre que celui dans
        lequel ils apparaissent dans le document.
      </td>
    </tr>
    <tr>
      <td>ORDERED_NODE_ITERATOR_TYPE</td>
      <td>5</td>
      <td>
        Un ensemble de nœuds contenant tous les nœuds vérifiant l'expression.
        Les nœuds du résultat sont dans le même ordre que celui dans lequel ils
        apparaissent dans le document.
      </td>
    </tr>
    <tr>
      <td>UNORDERED_NODE_SNAPSHOT_TYPE</td>
      <td>6</td>
      <td>
        Un ensemble de nœuds contenant les snapshots de tous les nœuds vérifiant
        l'expression. Les nœuds ne sont pas nécessairement dans le même ordre
        que celui dans lequel ils apparaissent dans le document.
      </td>
    </tr>
    <tr>
      <td>ORDERED_NODE_SNAPSHOT_TYPE</td>
      <td>7</td>
      <td>
        Un ensemble de nœuds contenant les snapshots de tous les nœuds vérifiant
        l'expression. Les nœuds du résultat sont dans le même ordre que celui
        dans lequel ils apparaissent dans le document.
      </td>
    </tr>
    <tr>
      <td>ANY_UNORDERED_NODE_TYPE</td>
      <td>8</td>
      <td>
        Un ensemble de nœuds contenant un seul nœud vérifiant l'expression. Le
        nœud n'est pas nécessairement le premier dans l'ordre du document qui
        correspond à l'expression.
      </td>
    </tr>
    <tr>
      <td>FIRST_ORDERED_NODE_TYPE</td>
      <td>9</td>
      <td>
        Un ensemble de nœuds contenant le premier nœud du document vérifiant
        l'expression.
      </td>
    </tr>
  </tbody>
</table>

## Voir aussi

- [XPath](/fr/docs/Web/XPath)
- [XML Path Language](http://www.xml.com/pub/a/2000/08/holman/index.html?page=2#xpath-info) de _[What is XSLT?](http://www.xml.com/pub/a/2000/08/holman/)_ par G. Ken Holman
