---
title: data-*
slug: Web/HTML/Global_attributes/data-*
---

{{HTMLSidebar("Global_attributes")}}

Les [attributs universels](/fr/docs/Web/HTML/Global_attributes) **`data-*`** forment une classe d'attributs, appelés attributs de données (_data attributes_). Ils permettent d'échanger des données propriétaire entre le [HTML](/fr/docs/Web/HTML) et la représentation du [DOM](/fr/docs/Web/API/Document_Object_Model), qu'on peut manipuler avec des scripts.

{{EmbedInteractiveExample("pages/tabbed/attribute-data.html","tabbed-standard")}}

De tels attributs sont disponibles via l'interface {{domxref("HTMLElement")}} de l'élément pour lequel l'attribut est utilisé. La propriété {{domxref("HTMLElement.dataset")}} permet d'accéder à l'attribut.
Ici, l'astérisque (`*`) peut être remplacée par n'importe quel nom valide selon [les règles appliquées aux noms XML](https://www.w3.org/TR/REC-xml/#NT-Name) et en respectant les contraintes suivantes :

- Le nom ne peut pas commencer par `xml`, quelle que soit la casse utilisée pour les différentes lettres
- Le nom ne doit pas contenir de point-virgule (`U+003A`)
- Le nom ne doit pas contenir de lettres majuscules de l'alphabet latin (`A` à `Z`).

La propriété {{domxref("HTMLElement.dataset")}} est un objet {{domxref("StringMap")}} et la valeur d'un attribut de donnée nommé `data-test-valeur` sera accessible via `HTMLElement.dataset.testValeur` car les tirets (`U+002D`) sont remplacés par la majuscule de la lettre suivante ([CamelCase](https://fr.wikipedia.org/wiki/CamelCase)).

### Utilisation

Lorsqu'on ajoute des attributs de données `data-*`, on peut utiliser les éléments HTML classiques afin d'en faire des objets complexes et puissants. Ainsi, un _sprite_ d'un vaisseau spatial dans un jeu peut être modélisé via un élément {{HTMLElement("img")}} auquel on associe un attribut `class` et plusieurs attributs de données sous la forme `data-*`.

```html
<img class="spaceship cruiserX3" src="shipX3.png"
     data-ship-id="324" data-weapons="laserI laserII"
     data-x="414354" data-y="85160" data-z="31940"
     onclick="spaceships[this.dataset.shipId].blasted()">
</img>
```

Pour un tutoriel plus avancé à propos des attributs de données HTML, lire l'article [Manipuler les attributs de données](/fr/docs/Learn/HTML/Howto/Use_data_attributes).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les différents attributs universels](/fr/docs/Web/HTML/Global_attributes)
- La propriété {{domxref("HTMLElement.dataset")}} qui permet d'accéder à ces valeurs et de les modifier.
