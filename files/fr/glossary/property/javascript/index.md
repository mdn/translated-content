---
title: Propriété (JavaScript)
slug: Glossary/Property/JavaScript
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Une **propriété JavaScript** est un membre d'un [objet](/fr/docs/Web/JavaScript/Guide/Data_structures#les_objets) qui associe une clé à une valeur. Un objet JavaScript est une structure de données qui stocke un ensemble de propriétés.

Une propriété se compose des éléments suivants&nbsp;:

- Un _nom_ (aussi appelé _clé_), qui est soit une [chaîne de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) soit un [symbole](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol).
- Une _valeur_, qui peut être n'importe quelle valeur JavaScript. Une propriété dont la valeur est une fonction peut aussi être appelée {{Glossary("method", "méthode")}}.
- Certains _attributs_, qui définissent comment la propriété peut être lue et modifiée. Une propriété peut avoir les attributs `configurable`, `enumerable` et `writable`.

La [propriété d'accesseur](/fr/docs/Web/JavaScript/Guide/Data_structures#propriétés_daccesseur) n'a pas de «&nbsp;valeur&nbsp;» réelle. La valeur est représentée indirectement par une paire de fonctions, l'une (l'accesseur ou <i lang="en">getter</i> en anglais) appelée lors de la lecture de la valeur et l'autre (le mutateur ou <i lang="en">setter</i> en anglais) appelée lors de la modification de la valeur. Cependant, la propriété d'accesseur se comporte comme une propriété de données classique en surface, car les fonctions accesseur et mutateur sont appelées automatiquement et sont généralement transparentes pour le code JavaScript.

La valeur de la propriété (y compris l'accesseur et le mutateur) et ses attributs sont stockés dans une structure de données appelée _descripteur de propriété_. De nombreuses méthodes, telles que {{JSxRef("Object.getOwnPropertyDescriptor()")}} et {{JSxRef("Object.defineProperty()")}}, manipulent les descripteurs de propriété.

Le terme _propriété_ lui-même ne correspond à aucune valeur JavaScript — c'est un concept abstrait. Par exemple, dans le code suivant&nbsp;:

```js
const obj = {
  a: 1,
  b() {},
};
```

L'objet `obj` possède deux propriétés. La première a `"a"` comme clé et `1` comme valeur. La seconde a `"b"` comme clé et une fonction comme valeur (en utilisant la [syntaxe de méthode](/fr/docs/Web/JavaScript/Reference/Functions/Method_definitions)). Les associations `"a"` — `1`, `"b"` — `function` sont les propriétés de l'objet.

Dans le contexte des [classes](/fr/docs/Web/JavaScript/Reference/Classes), les propriétés peuvent être divisées en _propriétés d'instance_, qui appartiennent à chaque instance, et en _propriétés statiques_, qui appartiennent à la classe et contiennent des données communes à toutes les instances. Dans le contexte de l'[héritage](/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain), les propriétés peuvent aussi être divisées en _propriétés propres_, qui appartiennent à l'objet lui-même, et en _propriétés héritées_, qui appartiennent aux objets de la chaîne de prototypes de l'objet.

Pour plus d'informations sur la lecture et la modification des propriétés, consultez [Travailler avec les objets](/fr/docs/Web/JavaScript/Guide/Working_with_objects).

## Voir aussi

- [Propriété (programmation)](<https://fr.wikipedia.org/wiki/Propri%C3%A9t%C3%A9_(informatique)>) sur Wikipedia
- [Introduction à la programmation orientée objet en JavaScript](/fr/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects)
- [Propriétés d'objet](/fr/docs/Web/JavaScript/Guide/Data_structures#propriétés)
- [Énumérabilité et propriété des propriétés](/fr/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
