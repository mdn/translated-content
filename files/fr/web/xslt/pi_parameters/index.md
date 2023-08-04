---
title: Paramètres des instructions de traitement
slug: Web/XSLT/PI_Parameters
---

### Présentation

XSLT permet de passer des paramètres à une feuille de style lors de son exécution. C'était déjà possible depuis quelques temps dans l'[XSLTProcessor](/fr/XSLTProcessor) sous JavaScript, mais pas lors de l'utilisation de l'instruction de traitement (_PI_, pour Processing Instruction) `<?xml-stylesheet?>`.

Pour résoudre cela, deux nouvelles PI (Instructions de traitement) ont été implémentées dans [Firefox 2](/fr/Firefox_2) (voir la section [Versions supportées](#versions_supportées) plus bas pour plus de détails), `<?xslt-param?>` et `<?xslt-param-namespace?>`. Ces deux PI peuvent contenir des «&nbsp;pseudo attributs&nbsp;» de la même manière que la PI (Instruction de traitement) `xml-stylesheet`.

L'exemple suivant passe les deux paramètres `color` et `size` à la feuille de style style.xsl&nbsp;:

```xml
<?xslt-param name="color" value="blue"?>
<?xslt-param name="size" select="2"?>
<?xml-stylesheet type="text/xsl" href="style.xsl"?>
```

Notez que ces PI n'ont aucun effet lorsque la transformation est faite à l'aide de l'objet `XSLTProcessor` en JavaScript.

### Instructions de traitement

Les attributs des PI `xslt-param` et `xslt-param-namespace` sont analysés en utilisant les règles définies dans [xml-stylesheet](http://www.w3.org/TR/xml-stylesheet/). Tous les attributs non reconnus sont ignorés. L'analyse d'un attribut n'échouera pas à cause de la présence d'un attribut non reconnu tant que cet attribut respecte la syntaxe définie dans `xml-stylesheet`.

Les deux instructions de traitement `xslt-param` et `xslt-param-namespace` doivent apparaître dans le prologue du document, c'est-à-dire avant la balise du premier élément. Toutes les PI du prologue sont exécutées, celles présentes avant une PI `xml-stylesheet` comme celles présentes après.

S'il existe plusieurs PI `xml-stylesheet` les paramètres s'appliquent à toutes les feuilles de style, conséquence du fait que selon la spécification XSLT, toutes les feuilles de style sont importées concaténées en une seule feuille.reference? Notez que les PI XSLT `xml-stylesheet` multiples ne sont pas supportées par Firefox à l'heure actuelle.

#### xslt-param

La PI `xslt-param` accepte quatre attributs&nbsp;:

- name
  - : La partie locale du nom du paramètre. Aucune vérification de syntaxe n'est faite pour cet attribut. Cependant, si ce n'est pas un [NCName](http://www.w3.org/TR/REC-xml-names/#NT-NCName) valide, il ne correspondra à aucun paramètre de la feuille de style.
- namespace
  - : L'espace de nommage du nom du paramètre. Aucune vérification de syntaxe n'est faite pour cet attribut.
- value
  - : Contient la valeur de chaîne du paramètre. La valeur de l'attribut est utilisée comme valeur du paramètre. Le type de donnée sera toujours*chaîne*.
- select
  - : Un expression [XPath](/fr/XPath) pour le paramètre. La valeur de cet attribut est analysée comme une expressions XPath. Le résultat de l'évaluation de l'expression est utilisé comme valeur pour le paramètre.

Si l'attribut **name** est absent ou vide, la PI est ignorée.

Si l'attribut **namespace** est absent ou vide, l'espace de nommage `null` est utilisé.

Spécifier un nom de paramètre qui n'existe pas dans la feuille de style (ou qui soit une variable dans la feuille de style) n'est pas une erreur. La PI est simplement ignorée dans ce cas.

Si les attributs **value** et **select** sont tous deux présents (ou absents) la PI est ignorée.

Notez que `value="..."` n'est pas strictement égal à `select="'...'"` car value peut contenir à la fois des caractères apostrophe et des caractères guillemet.

##### Exemples

Le paramètre `color` contient la chaîne `red`&nbsp;:

```xml
<?xslt-param name="color" value="red"?>
```

Le paramètre `columns` contient `2`&nbsp;:

```xml
<?xslt-param name="columns" select="2"?>
```

Le paramètre `books` contient l'ensemble de noeuds qui regroupe tous les éléments `<book>` de l'espace de nommage `null`&nbsp;:

```xml
<?xslt-param name="books" select="//book"?>
```

Le paramètre `show-toc<code> contient le booléen <code>true`&nbsp;:

```xml
<?xslt-param name="show-toc" select="true()"?>
```

##### Le contexte de l'attribut select

Le contexte suivant est utilisé pour analyser et évaluer l'expression de l'attribut **select**.

- Le nœud de contexte est le nœud utilisé comme nœud courant initial lors de l'exécution de la feuille de style.
- La position du contexte est la position du noeud de contexte dans la liste initiale de nœuds courants utilisée lors de l'exécution de la feuille de style.
- La taille du contexte est la taille de la liste initiale de nœuds courants utilisée lors de l'exécution de la feuille de style.
- Aucune variable n'est disponible.
- La bibliothèque de fonctions est la bibliothèque standard de fonctions XPath.
- Les déclarations d'espace de nommage sont déterminées par les PI `xslt-param-namespace`, voir ci-dessous.

Si l'attribut **select** ne peut pas être analysé ou exécuté, la PI est ignorée (en particulier, l'attribut **value** ne sera pas utilisé comme valeur de secours).

#### xslt-param-namespace

`xslt-param-namespace` accepte deux attributs&nbsp;:

- prefix
  - : Le préfixe mappé.
- namespace
  - : L'espace de nommage vers lequel le préfixe mappe.

Une PI `xslt-param-namespace` affecte l'expression de l'attribut **select** de tous les `xslt-param` qui la suivent. Cela s'applique même s'il y a d'autres nœuds tels que des commentaires ou d'autres PI entre les PI `xslt-param-namespace` et `xslt-param`.

Utiliser le même préfixe pour plusieurs instructions de traitement n'est pas une erreur, chaque nouvelle PI ne fait que changer l'espace de nommage vers lequel le préfixe renvoie.

Si **prefix** est absent, vide ou égal un à NCName invalide, la PI est ignorée.

Si **namespace** est absent, la PI est ignorée. Si **namespace** est vide, le mappage du préfixe est supprimé.

##### Exemples

Le paramètre `books` contient l'ensemble de noeuds qui regroupe tous les éléments `<book>` de l'espace de nommage `http://www.example.org/myNamespace`&nbsp;:

```xml
<?xslt-param-namespace prefix="my" namespace="http://www.example.org/myNamespace"?>
<?xslt-param name="books" select="//my:book"?>
```

### Versions supportées

Supportées depuis Firefox 2.0.0.1. Dans la version 2, l'attribut **value** est supporté mais l'attribut **select** provoque des plantages pour certaines expressions.

### Possibilités de développements futurs

Devons-nous autoriser n'importe quelle fonction XSLT dans les expressions&nbsp;? `document()` semble utile, mais il semble difficile de conserver le fait que `generate-id()` devrait produire la même chaîne pour un même document.
