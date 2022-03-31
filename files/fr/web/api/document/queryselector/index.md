---
title: document.querySelector
slug: Web/API/Document/querySelector
tags:
  - API
  - CSS
  - DOM
  - Document
  - JavaScript
  - Méthodes
  - Sélecteurs
  - Échappement
translation_of: Web/API/Document/querySelector
---
{{ ApiRef("DOM") }}

La méthode **`querySelector()`** de l'interface {{domxref("Document")}} retourne le premier {{domxref("Element")}} dans le document correspondant au sélecteur - ou groupe de sélecteurs - spécifié(s), ou `null` si aucune correspondance n'est trouvée.

> **Note :** La correspondance est effectuée en utilisant le parcours pré-ordonné profondeur-d'abord des nœuds du document, en partant du premier élément dans le balisage du document et en itérant à travers les nœuds en séquence, par ordre du compte de nœuds enfants.

## Syntaxe

```js
element = document.querySelector(sélecteurs);
```

### Paramètres

- `selectors` (sélecteurs)
  - : une  {{domxref("DOMString")}} (_chaîne de caractères_) qui contient un ou plusieurs sélecteurs à comparer. La chaîne doit être composée de sélecteurs CSS valides ; sinon une exception `SYNTAX_ERR` est lancée. Voir [Localisation des éléments DOM avec les sélecteurs](/fr/docs/Web/API/Document_Object_Model/Localisation_des_%C3%A9l%C3%A9ments_DOM_avec_les_s%C3%A9lecteurs) pour plus d'informations sur les sélecteurs et leur gestion.

> **Note :** les caractères qui n'appartiennent pas à la syntaxe standard CSS doivent être échappés par un antislash ("\\"). Puisque JavaScript utilise aussi cette barre pour l'échappement, une attention particulière est nécessaire quand des chaînes comprennent ces caractères. Voir [Échapper des caractères spéciaux](#échapper_des_caractères_spéciaux) pour plus d'informations.

### Valeur retournée

Un objet {{domxref("Element")}} représentant le premier élément dans le document qui corresponde au jeu de [sélecteurs CSS](/fr/docs/Web/CSS/S%C3%A9lecteurs_CSS) spécifié, ou `null` s'il n'y a pas de correspondances.

Si vous avez besoin d'une liste de tous les éléments correspondant aux sélecteurs spécifiés, vous devez utiliser {{domxref("Document.querySelectorAll", "querySelectorAll()")}} à la place.

### Exception

- `SYNTAX_ERR`
  - : La syntaxe des sélecteurs spécifiés est invalide.

## Notes d'utilisation

Si le sélecteur correspond à un ID et que cet ID est utilisé de façon erronée plusieurs fois dans le document, le premier élément en correspondance est retourné.

Les [pseudo-éléments](/fr/docs/Web/CSS/Pseudo-elements) CSS ne retourneront jamais aucun élément, comme spécifié dans l'[API des sélecteurs](http://www.w3.org/TR/selectors-api/#grammar) (en).

### Échapper des caractères spéciaux

Pour faire correspondre un ID (_identifiant_) ou un sélecteur qui ne respecte pas la syntaxe CSS (en utilisant un point virgule ou un espace par exemple), vous devez échapper le caractère avec un antislash (\\). Comme l'antislash est un caractère d'échappement en JavaScript, si vous entrez une chaîne de caractères littérale, vous devez donc l'échapper _deux fois_ (une pour la chaîne de caractères JavaScript et une autre fois pour `querySelector`)&nbsp;:

```html
<div id="machin\bidule"></div>
<div id="machin:bidule"></div>

<script>
  console.log('#machin\bidule')               // "#machinidule" (\b est le caractère de contrôle retour arrière)
  document.querySelector('#machin\bidule')    // ne correspond à rien

  console.log('#machin\\bidule')              // "#machin\bidule"
  console.log('#machin\\\\bidule')            // "#machin\\bidule"
  document.querySelector('#machin\\\\bidule') // correspond au premier div

  document.querySelector('#machin:bidule')    // ne correspond à rien
  document.querySelector('#machin\\:bidule')  // correspond au second div
</script>
```

## Exemples

### Trouver le premier élément correspondant à une classe

Dans cet exemple, le premier élément dans le document qui contient la classe "`maclasse`" est retourné&nbsp;:

```js
var el = document.querySelector(".maclasse");
```

### Un sélecteur plus complexe

Les _sélecteurs_ peuvent également être réellement puissants comme le montre l'exemple suivant. Ici, le premier élément `<input name="identifiant"/>` dans un `<div class="panneau-utilisateur principal">` dans le document est retourné :

```js
var el = document.querySelector("div.panneau-utilisateur.principal input[name='identifiant']");
```

## Spécifications

| Spécification                                                                                                            | Statut                                       | Commentaire         |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | ------------------- |
| {{SpecName("Selectors API Level 2", "#interface-definitions", "document.querySelector()")}} | {{Spec2("Selectors API Level 2")}} |                     |
| {{SpecName("Selectors API Level 1", "#interface-definitions", "document.querySelector()")}} | {{Spec2("Selectors API Level 1")}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.Document.querySelector")}}

## Voir aussi

- [Localisation des éléments DOM avec les sélecteurs](/fr/docs/Web/API/Document_Object_Model/Localisation_des_%C3%A9l%C3%A9ments_DOM_avec_les_s%C3%A9lecteurs)
- {{domxref("document.querySelectorAll()")}}&nbsp;;
- {{domxref("element.querySelector()")}}&nbsp;;
- {{domxref("element.querySelectorAll()")}}&nbsp;;
- [Extraits de code pour `querySelector`](/fr/docs/Archive/Add-ons/Code_snippets/QuerySelector)
