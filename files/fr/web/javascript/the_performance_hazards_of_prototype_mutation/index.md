---
title: 'Performance : les dangers liés à la modification de [[Prototype]'
slug: Web/JavaScript/The_performance_hazards_of_prototype_mutation
tags:
  - JavaScript
  - Performance
translation_of: Web/JavaScript/The_performance_hazards_of__[[Prototype]]_mutation
original_slug: Web/JavaScript/Performance_les_dangers_liés_à_la_modification_de_Prototype
---
{{draft}}

Chaque objet JavaScript possède un prototype (que nous désignerons par la suite par `[[Prototype]]`, la notation utilisée par la spécification et les implémentations). Lorsqu'on recherche des propriétés sur un objet, on consulte d'abord cet objet puis on analyse son prototype (on « remonte la chaîne ») et ensuite le prototype de ce dernier et ainsi de suite jusqu'à trouver la propriété en question ou jusqu'à ce que la chaîne soit terminée. Cette chaîne est particulièrement utile pour émuler [l'héritage entre objets](/fr/docs/Web/JavaScript/Héritage_et_chaîne_de_prototypes).

ECMAScript 6 introduit certaines méthode pour _modifier_ `[[Prototype]]`. Cette flexibilité a un coût : la dégradation significative des performances. **Modifier** **`[[Prototype]]` impacte négativement les performances pour _tous_ les moteurs JavaScript modernes.** Dans cet article, nous expliquerons pourquoi et nous verrons les alternatives à privilégier.

## De l'optimisation des accès aux propriétés dans les moteurs JavaScript

Les objets sont [des tables de hachage](https://fr.wikipedia.org/wiki/Table_de_hachage), ainsi, en théorie (et en pratique) l'accès à une propriété se fait en temps constant. En revanche, ce « temps constant » peut se décomposer en milliers d'instructions machine. Heureusement, les objets et les propriétés sont souvent « prédictibles » et dans ces cas, la structure sous-jacente peut également être prédictible. Les compilateurs à la volée (ou _JIT_ pour _Just In Time_) reposent sur ce constat pour rendre les accès plus rapides.

L'optimisation des moteurs s'applique grâce à l'ordre selon lequel les propriétés sont ajoutées aux objets. La plupart des propriétés ajoutées aux objets sont ajoutés dans un ordre semblable (exception faite des accès effectués sous la forme `obj[val]` où `val` est une valeur dynamique non constante).

    function Landmark(lat, lon, desc) {
      this.location = { lat: lat, long: lon };
      this.description = desc;
    }
    var lm1 = new Landmark(-90, 0, "South Pole");
    var lm2 = new Landmark(-24.3756466, -128.311018, "Pitcairn Islands");

Dans cet exemple, chaque `Landmark` possède les propriétés `location` et `description`, **dans cet ordre.** Chaque objet `location` représentant l'emplacement enregistrera la latitude puis la longitude, **dans cet ordre**. Le code qui suit _pourrait_ supprimer une propriété mais comme c'est peu probable, les moteurs peuvent être amenés à produire du code non optimal pour ces cas de figure. Pour SpiderMonkey, le moteur JavaScript de Firefox, l'ordre spécifique des propriétés (et de certains de leurs aspects en dehors de leurs valeurs) est appelé une _forme_ (le moteur V8, utilisé par Chrome, intitule ce concept _structure ID_). Si deux objets partagent la même forme, leurs propriétés seront stockées de façon identique.

À l'intérieur des moteurs, on retrouve donc une version C++ semblable à celle-ci (simplifiée ici) :

```cpp
struct Property {
  Property* prev;     // null si c'est la première propriété
  String name;        // le nom de la propriété
  unsigned int index; // l'index de la valeur dans le stockage
};
using Shape = Property*;
struct Object {
  Shape shape;
  Value* properties;
  Object* prototype;
};
```

Avec ces exemples, voici à quoi correspondraient diverses expressions JavaScript basées sur le code ci-dessus, une fois traduites en C++ :

```cpp
lm1->properties[0]; // loc1.location
lm1->properties[1]; // loc1.description
lm2->properties[0].toObject()->properties[1]; // loc2.location.long
```

Si un moteur connaît la forme d'un objet, il pourra présupposer la position des index pour toutes les propriétés de l'objet. Ainsi, quand on souhaite accéder à une propriété donnée, il suffit de quelques accès indirects par pointeur. Le code machine peut facilement vérifier si un objet a une forme donnée. Si c'est le cas, on utilisera la version rapide et sinon on utilisera la méthode lente.

## L'optimisation naïve des propriétés héritées

La plupart des propriétés ne sont pas rattachées _directement_ aux objets. Il faut souvent passer par la chaîne de prototypes. On ajoute donc quelques « sauts » via le champ `prototype` pour atterrir sur l'objet qui contient la propriété. Pour obtenir une optimisation _correcte_, il faut vérifier qu'aucun objet de la chaîne de prototypes n'a cette propriété. Autrement dit, à chaque saut, il faut vérifier la forme de l'objet.

```js
var d = new Date();
d.toDateString(); // Date.prototype.toDateString

function Pair(x, y) { this.x = x; this.y = y; }
Pair.prototype.sum = function() { return this.x + this.y; };

var p = new Pair(3, 7);
p.sum(); // Pair.prototype.sum
```

Dans la plupart des cas, les moteurs utilisent cette approche rapide. Toutefois, lorsque les performances jouent un rôle déterminant, cette approche n'est pas suffisante.

## L'optimisation intelligente des propriétés héritées

Lors des accès prédictibles, on trouve _généralement_ la propriété en un nombre constant de sauts le long de la chaîne. Les objets de chaîne n'acquièrent _généralement_ pas de nouvelle propriétés et l'objet final n'est _généralement_ pas affecté par une [suppression](Opérateurs/L_opérateur_delete) de propriétés. Enfin, **la modification de `[[Prototype]]` est rare**. Ces hypothèses sont nécessaires pour éviter de « sauter » sur chacun des prototypes. Les différents moteurs optent pour différentes approches afin d'optimiser les propriétés héritées de façon intelligente.

- La forme de l'objet _final_ qui contient la propriété héritée peut être vérifiée.

  - : Dans ce cas, si on teste les formes, cela implique qu'aucun prototype n'a été modifié sur la chaîne. Ainsi, lorsqu'un prototype est modifié, les formes de tous les objets situés sur le long de la chaîne doivent être changées.

    ```js
        var obj1 = {};
        var obj2 = Object.create(obj1);
        var obj3 = Object.create(obj2);

        // Les objets dont la forme va changer
        // obj3, obj2, obj1, Object.prototype
        obj3.__proto__ = {};
        ```

- La forme de l'objet initial peut être vérifiée.

  - : Chaque objet qui peut hériter d'une propriété via un prototype modifié doit être modifié afin de refléter ces changements.

    ```js
        var obj1 = {};
        var obj2 = Object.create(obj1);
        var obj3 = Object.create(obj2);

        // Les objets dont la forme va changer
        // obj1, obj2, obj3
        obj1.__proto__ = {};
        ```

## Les effets néfastes de la modification de `[[Prototype]]`

Les changements de `[[Prototype]]` impactent les performances sur deux phases : lors du changement puis par la suite. Pour commencer, **modifier `[[Prototype]]` est lent**, ensuite **modifier `[[Prototype]]` ralentit le code qui doit interagir avec les objets dont `[[Prototype]]` a été modifié**.

### Modifier un `[[Prototype]]` prend du temps

Bien que la spécification représente le changement de `[[Prototype]]` comme la simple modification d'une propriété cachée, les implémentations réelles sont beaucoup plus complexes. Les tactiques précédentes utilisant les formes nécessitent d'examiner (et de modifier) plus d'un objet. Dans la pratique, l'approche qui modifiera le moins d'objets sera différente en fonction de la charge provoquée par le cas d'usage.

### Les `[[Prototype]]`s modifiés ralentissent le code

Les mauvaises nouvelles ne s'arrêtent une fois la modification terminée. De nombreuses opérations utilisées pour examiner les propriétés reposent sur l'hypothèse de conservation de la chaîne de `[[Prototype]]`. Lorsque le moteur observe une modification, l'objet avec le prototype modifié « empoisonne » tout le code qui manipule cet objet. Voici un cas d'école assez désastreux :

```js
var obj = {};
obj.__proto__ = { x: 3 }; // modification gratuite

var arr = [obj];
for (var i = 0; i < 5; i++)
  arr.push({ x: i });

function f(v, i) {
  var elt = v[i];
  var r =  elt.x > 2 // non optimal
           ? elt
           : { x: elt.x + 1 };
  return r;
}
var c = f(arr, 0);
c.x; // non optimal : la valeur a des propriétés inconnues
c = f(arr, 1);
c.x; // non optimal !

var arr2 = [c];
arr2[0].x; // non optimal
```

Seul le code exécuté à de nombreuses reprises est optimisé et cet exemple ne déclenche pas _tous_ ces comportements. En revanche pour du code « chaud », on pourrait rencontrer ces problèmes.

Pouvoir tracer l'utilisation d'un objet dont le prototype a été modifié, souvent parmi différents scripts, est extraordinairement complexe. Cela nécessite une analyse textuelle soignée et dépend des comportements à l'exécution. Des modifications indépendentes en apparence peuvent avoir des impacts bien plus loin et le code employé, auparavant optimal, sera alors sous-optimal et plus lent.

Il faudrait sinon pouvoir stocker des informations _cross-objet_.

Les informations _cross-objet_ sont différentes des formes et on ne peut pas les vérifier simplement. Une modification apportée à cette information pourrait avoir des impacts à de nombreux emplacements, pas nécessairement évidents : dans ce cas, où vérifier que les hypothèses sont respectées ? Ainsi, plutôt que de vérifier ces hypothèses avant l'utilisation, on invalide _toutes_ les hypothèses lorsqu'une modification se produit. Lorsque `[[Prototype]]` change, _tout_ le code qui en dépend doit être rejeté.  L'opération `obj.__proto__ = ...` est donc lente par nature. En rejetant du code optimisé, cela rend le code beaucoup plus lent par la suite.

Encore pire, lorsqu'on évalue `obj.prop`, le moteur voit que l'objet a eu son `[[Prototype]]` changé et les informations précédemment enregistrées à propos de l'objet deviennent inutiles et SpiderMonkey considère que l'objet possède des caractéristiques inconnues. Ainsi, tout code qui manipule cet objet par la suite prendra l'hypothèse correspondant au pire des cas. L'optimisation des moteurs de compilation à la volée fonctionnent sur l'hypothèse que _l'exécution à venir est similaire à l'exécution passée_. Si du code observe un objet avec un `[[Prototype]]` modifié, ce code observera vraisemblablement d'autres objets. C'est pourquoi, **toutes les opérations qui intéragissent avec un objet dont le `[[Prototype]]` a changé, ne peuvent pas être optimisées**.
