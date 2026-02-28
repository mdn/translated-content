---
title: "Attribut HTML universel : data-*"
short-title: data-*
slug: Web/HTML/Reference/Global_attributes/data-*
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

Les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes) **`data-*`** forment une classe d'attributs, appelés **attributs de données personnalisés** (<i lang="en">custom data attributes</i> en anglais), ils permettent d'échanger des données propriétaire entre le [HTML](/fr/docs/Web/HTML) et la représentation du [DOM](/fr/docs/Web/API/Document_Object_Model), qu'on peut manipuler avec des scripts.

{{InteractiveExample("Démonstration HTML&nbsp;: data-*", "tabbed-standard")}}

```html interactive-example
<h1>Agents secrets</h1>

<ul>
  <li data-id="10784">
    Jason Walters, 003&nbsp;: retrouvé mort dans «&nbsp;A View to a Kill&nbsp;».
  </li>
  <li data-id="97865">
    Alex Trevelyan, 006&nbsp;: agent devenu chef terroriste&nbsp;; ennemi juré
    de James dans «&nbsp;Goldeneye&nbsp;».
  </li>
  <li data-id="45732">
    James Bond, 007&nbsp;: l'homme principal&nbsp;; imperturbable mais pas
    remué.
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

li::after {
  content: "Data ID: " attr(data-id);
  position: absolute;
  top: -22px;
  left: 10px;
  background: black;
  color: white;
  padding: 2px;
  border: 1px solid #eeeeee;
  opacity: 0;
  transition: 0.5s opacity;
}

li:hover::after {
  opacity: 1;
}
```

Tous ces attributs de données personnalisés sont accessibles via l'interface {{DOMxRef("HTMLElement")}} de l'élément sur lequel l'attribut est défini. La propriété {{DOMxRef("HTMLElement.dataset")}} permet d'y accéder.
Le `*` peut être remplacé par n'importe quel nom respectant [la règle de production des noms XML <sup>(angl.)</sup>](https://www.w3.org/TR/xml/#NT-Name), qui inclut les recommandations suivantes&nbsp;:

- Le nom ne doit pas commencer par `xml` (insensible à la casse), car cela est réservé aux futures spécifications XML.
- Le nom ne doit pas contenir de caractère deux-points (`:`), car XML attribue une signification à de tels noms.
- Le nom ne doit pas contenir de lettres majuscules, car XML est en minuscules.

Ce ne sont que des recommandations. Si elles ne sont pas suivies, aucune erreur ne se produira&nbsp;: les attributs seront toujours repérés par les [sélecteurs d'attributs CSS](/fr/docs/Web/CSS/Reference/Selectors/Attribute_selectors), l'attribut étant insensible à la casse tandis que la valeur de l'attribut reste sensible à la casse. Les attributs ne respectant pas ces trois recommandations seront également reconnus par la propriété JavaScript {{DOMxRef("HTMLElement.dataset")}} et les agents utilisateurs incluront l'attribut dans le {{DOMxRef("DOMStringMap")}} contenant tous les attributs de données personnalisés d'un {{DOMxRef("HTMLElement")}}.

Si vous prévoyez d'utiliser {{DOMxRef("HTMLElement.dataset")}}, la partie du nom d'attribut suivant `data-` ne peut contenir que des caractères autorisés dans les noms de propriété JavaScript (et des tirets, qui seront supprimés). La version `dataset` du nom d'attribut supprime le préfixe "data-" et convertit le reste du nom de {{Glossary("kebab_case", "kebab-case")}} en camelCase. Par exemple, `element.getAttribute("data-test")` équivaut à `element.dataset.test` et `data-test-abc` sera accessible comme `HTMLElement.dataset.testAbc` (ou via `HTMLElement.dataset["testAbc"]`). Évitez les caractères non alphabétiques après un tiret, comme `data-test-1` ou `data--test`, car ils ne seront pas reconnus par {{DOMxRef("HTMLElement.dataset")}}.

## Notes d'utilisation

En ajoutant des attributs `data-*`, même les éléments HTML ordinaires peuvent devenir des objets de programme assez complexes et puissants. Par exemple, un vaisseau spatial «&nbsp;[sprite](<https://fr.wikipedia.org/wiki/Sprite_(jeu_vid%C3%A9o)>)&nbsp;» dans un jeu pourrait simplement être un élément {{HTMLElement("img")}} avec un attribut [`class`](/fr/docs/Web/HTML/Reference/Global_attributes/class) et plusieurs attributs `data-*`&nbsp;:

```html
<img
  class="spaceship cruiserX3"
  src="shipX3.png"
  data-ship-id="324"
  data-weapons="laserI laserII"
  data-shields="72%"
  data-x="414354"
  data-y="85160"
  data-z="31940" />
```

```js
function cliqueSurLeVaisseau() {
  spaceships[this.dataset.shipId].blasted();
}

document.querySelectorAll("img.spaceship").forEach((ship) => {
  ship.addEventListener("click", cliqueSurLeVaisseau);
});
```

Pour un tutoriel plus avancé à propos des attributs de données HTML, lire l'article [Utilisez les attributs de données](/fr/docs/Web/HTML/How_to/Use_data_attributes).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Tous les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)
- La propriété {{DOMxRef("HTMLElement.dataset")}} qui permet d'accéder à ces valeurs et de les modifier.
- [Utilisez les attributs de données](/fr/docs/Web/HTML/How_to/Use_data_attributes)
