---
title: data-*
slug: Web/HTML/Reference/Global_attributes/data-*
original_slug: Web/HTML/Global_attributes/data-*
---

{{HTMLSidebar("Global_attributes")}}

Les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes) **`data-*`** forment une classe d'attributs, appelés attributs de données (_data attributes_). Ils permettent d'échanger des données propriétaire entre le [HTML](/fr/docs/Web/HTML) et la représentation du [DOM](/fr/docs/Web/API/Document_Object_Model), qu'on peut manipuler avec des scripts.

{{InteractiveExample("HTML Demo: data-*", "tabbed-standard")}}

```html interactive-example
<h1>Secret agents</h1>

<ul>
  <li data-id="10784">Jason Walters, 003: Found dead in "A View to a Kill".</li>
  <li data-id="97865">
    Alex Trevelyan, 006: Agent turned terrorist leader; James' nemesis in
    "Goldeneye".
  </li>
  <li data-id="45732">
    James Bond, 007: The main man; shaken but not stirred.
  </li>
</ul>
```

```css interactive-example
h1 {
  margin: 0;
}

ul {
  margin: 10px 0 0;
}

li {
  position: relative;
  width: 200px;
  padding-bottom: 10px;
}

li:after {
  content: "Data ID: " attr(data-id);
  position: absolute;
  top: -22px;
  left: 10px;
  background: black;
  color: white;
  padding: 2px;
  border: 1px solid #eee;
  opacity: 0;
  transition: 0.5s opacity;
}

li:hover:after {
  opacity: 1;
}
```

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

Pour un tutoriel plus avancé à propos des attributs de données HTML, lire l'article [Manipuler les attributs de données](/fr/docs/Web/HTML/How_to/Use_data_attributes).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les différents attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)
- La propriété {{domxref("HTMLElement.dataset")}} qui permet d'accéder à ces valeurs et de les modifier.
