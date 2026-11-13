---
title: "Element : méthode replaceChildren()"
short-title: replaceChildren()
slug: Web/API/Element/replaceChildren
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("DOM")}}

La méthode **`replaceChildren()`** de l'interface {{DOMxRef("Element")}} remplace les enfants existants d'un nœud ({{DOMxRef("Node")}}) par un nouvel ensemble d'enfants définis. Ceux-ci peuvent être des chaînes de caractères ou des objets {{DOMxRef("Node")}}.

## Syntaxe

```js-nolint
replaceChildren(param1)
replaceChildren(param1, param2)
replaceChildren(param1, param2, /* …, */ paramN)
```

### Paramètres

- `param1`, …, `paramN`
  - : Un exemple d'objets {{DOMxRef("Node")}} ou de chaînes de caractères pour remplacer les objets `Element` enfants existant avec. Si aucun objet de remplacement n'est défini, alors l'objet `Element` est vidé de tous ses nœuds enfants.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Levée lorsque les [contraintes de l'arborescence des nœuds <sup>(angl.)</sup>](https://dom.spec.whatwg.org/#concept-node-tree) ne sont pas respectées.

## Exemples

### Vider un nœud

`replaceChildren()` fournit un mécanisme très pratique pour vider un nœud de tous ses enfants. Vous l'appelez sur le nœud parent sans aucun argument défini&nbsp;:

```js
myNode.replaceChildren();
```

### Transférer des nœuds entre des éléments

`replaceChildren()` permet de transférer facilement des nœuds entre des éléments, sans avoir à recourir à un code de boucle verbeux. Par exemple, supposons que nous ayons une application simple vous permettant de choisir les aliments que vous voulez pour votre fête. Ce HTML peut ressembler à ceci&nbsp;:

```html
<h2>Liste des options alimentaires pour la fête</h2>

<main>
  <div>
    <label for="non">Non merci&nbsp;!</label>

    <select id="non" multiple size="10">
      <option>Pommes</option>
      <option>Oranges</option>
      <option>Raisins</option>
      <option>Bananes</option>
      <option>Kiwis</option>
      <option>Cookies au chocolat</option>
      <option>Cookies aux cacahuètes</option>
      <option>Barres chocolatées</option>
      <option>Sandwichs au jambon</option>
      <option>Sandwichs au fromage</option>
      <option>Sandwichs au falafel</option>
      <option>Glace</option>
      <option>Gelée</option>
      <option>Bâtonnets de carottes et houmous</option>
      <option>Pizza Margherita</option>
      <option>Pizza au pepperoni</option>
      <option>Pizza végétalienne aux légumes</option>
    </select>
  </div>

  <div class="boutons">
    <button id="vers-oui">Transférer vers "Oui" --&gt;</button>
    <button id="vers-nob">&lt;-- Transférer vers "Non"</button>
  </div>

  <div>
    <label for="oui">Oui s'il vous plaît&nbsp;!</label>

    <select id="oui" multiple size="10"></select>
  </div>
</main>
```

Il est logique d'utiliser un peu de CSS simple pour disposer les deux listes de sélection sur une ligne côte à côte, avec les boutons de contrôle entre elles&nbsp;:

```css
main {
  display: flex;
}

div {
  margin-right: 20px;
}

label,
button {
  display: block;
}

.boutons {
  display: flex;
  flex-flow: column;
  justify-content: center;
}

select {
  width: 200px;
}
```

Ce que nous voulons faire, c'est transférer toutes les options sélectionnées dans la liste «&nbsp;non&nbsp;» vers la liste «&nbsp;oui&nbsp;» lorsque le bouton "oui" est pressé, et transférer toutes les options sélectionnées dans la liste «&nbsp;oui&nbsp;» vers la liste «&nbsp;non&nbsp;» lorsque le bouton «&nbsp;non&nbsp;» est pressé.

Pour ce faire, nous donnons à chacun des boutons un gestionnaire d'évènements clic, qui rassemble les options sélectionnées que vous souhaitez transférer dans une constante, et les options existantes dans la liste vers laquelle vous transférez dans une autre constante. Il appelle ensuite `replaceChildren()` sur la liste pour transférer les options, en utilisant l'opérateur de propagation pour passer toutes les options contenues dans les deux constantes.

```js
const selecteurNon = document.getElementById("non");
const selecteurOui = document.getElementById("oui");
const boutonVersNon = document.getElementById("vers-nob");
const boutonVersOui = document.getElementById("vers-oui");

boutonVersOui.addEventListener("click", () => {
  const optionTransfertSelectionnee = document.querySelectorAll(
    "#non option:checked",
  );
  const optionOuiExistantes = document.querySelectorAll("#oui option");
  selecteurOui.replaceChildren(
    ...optionTransfertSelectionnee,
    ...optionOuiExistantes,
  );
});

boutonVersNon.addEventListener("click", () => {
  const optionTransfertSelectionnee = document.querySelectorAll(
    "#oui option:checked",
  );
  const optionNonExistantes = document.querySelectorAll("#non option");
  selecteurNon.replaceChildren(
    ...optionTransfertSelectionnee,
    ...optionNonExistantes,
  );
});
```

Le résultat final ressemble à ceci&nbsp;:

{{EmbedLiveSample("Transférer des nœuds entre des éléments", "100%", 350)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Element.prepend()")}}
- La méthode {{DOMxRef("Element.append()")}}
- L'interface {{DOMxRef("NodeList")}}
