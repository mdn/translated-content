---
title: "Element : évènement beforematch"
short-title: beforematch
slug: Web/API/Element/beforematch_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}}

Un élément reçoit un évènement **`beforematch`** lorsqu'il est dans l'état _caché jusqu'à ce qu'il soit trouvé_ et que le navigateur est sur le point de révéler son contenu parce que l'utilisateur·ice a trouvé·e le contenu avec la fonction «&nbsp;rechercher dans la page&nbsp;» ou avec la navigation par fragment.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("beforematch", (event) => { })

onbeforematch = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Notes d'utilisation

L'attribut HTML [`hidden`](/fr/docs/Web/HTML/Reference/Global_attributes/hidden) accepte une valeur `until-found`&nbsp;: lorsque cette valeur est définie, l'élément est caché mais son contenu est accessible à la fonction «&nbsp;rechercher dans la page&nbsp;» du navigateur ou à la navigation par fragment. Lorsque ces fonctionnalités provoquent un défilement vers un élément dans un sous-arbre «&nbsp;caché jusqu'à ce qu'il soit trouvé&nbsp;», le navigateur va&nbsp;:

1. Déclenche un évènement `beforematch` sur l'élément caché
2. Supprime l'attribut `hidden` de l'élément
3. Fait défiler jusqu'à l'élément

## Exemples

### Utiliser `beforematch`

Dans cet exemple, nous avons deux éléments HTML {{HTMLElement("div")}}.
Le premier est visible, tandis que le second a les attributs `hidden="jusqua-trouve"` et `id="boite-jusqua-trouve"`.
L'élément avec un identifiant `boite-jusqua-trouve` a une bordure rouge en pointillés et un arrière-plan gris.

Nous avons également un lien qui cible le fragment `"boite-jusqua-trouve"` et du JavaScript qui écoute le déclenchement de l'évènement `beforematch` sur cet élément caché.
Le gestionnaire d'évènement modifie le contenu textuel de la boîte pour illustrer une action qui peut se produire lorsque l'état _caché jusqu'à ce qu'il soit trouvé_ est sur le point d'être supprimé.

#### HTML

```html
<a href="#boite-jusqua-trouve">Aller au contenu caché</a>

<div>Je ne suis pas caché</div>
<div id="boite-jusqua-trouve" hidden="jusqua-trouve">
  Caché jusqu'à ce qu'il soit trouvé
</div>
```

```html hidden
<button id="reinitialiser">Réinitialiser</button>
```

#### CSS

```css
div {
  height: 40px;
  width: 300px;
  border: 5px dashed black;
  margin: 1rem 0;
  padding: 1rem;
  font-size: 2rem;
}

div#boite-jusqua-trouve {
  color: red;
  border: 5px dotted red;
  background-color: lightgray;
}
```

#### JavaScript

```js
const boiteJusquaTrouve = document.querySelector("#boite-jusqua-trouve");
boiteJusquaTrouve.addEventListener(
  "beforematch",
  () => (boiteJusquaTrouve.textContent = "Caché jusqu'à ce qu'il soit trouvé"),
);
```

```js hidden
document.querySelector("#reinitialiser").addEventListener("click", () => {
  document.location.hash = "";
  document.location.reload();
});
```

#### Résultat

Cliquer sur le bouton «&nbsp;Aller au contenu caché&nbsp;» navigue vers l'élément dans l'état _caché jusqu'à ce qu'il soit trouvé_.
L'évènement `beforematch` se déclenche, le contenu textuel est mis à jour, puis le contenu de l'élément est affiché (l'attribut `hidden` est supprimé).

Pour exécuter à nouveau l'exemple, cliquez sur «&nbsp;Réinitialiser&nbsp;».

{{EmbedLiveSample("Utiliser `beforematch`", "", 300)}}

Si votre navigateur ne prend pas en charge la valeur énumérée `"jusqu'à-trouvé"` de l'attribut `hidden`, le deuxième `<div>` est masqué (car `hidden` était booléen avant l'ajout de la valeur `"jusqu'à-trouvé"`).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut HTML [`hidden`](/fr/docs/Web/HTML/Reference/Global_attributes/hidden)
