---
title: "HTMLElement : propriété dataset"
short-title: dataset
slug: Web/API/HTMLElement/dataset
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`dataset`** de l'interface {{DOMxRef("HTMLElement")}} fournit un accès en lecture/écriture aux [attributs de données (`data-*`)](/fr/docs/Web/HTML/Reference/Global_attributes/data-*) de l'élément. Elle expose une carte de chaînes de caractères ({{DOMxRef("DOMStringMap")}}) avec une entrée pour chaque attribut `data-*`.

> [!NOTE]
> La propriété `dataset` elle-même peut être lue mais pas modifiée directement.
> Pour appliquer des modifications, il faudra les appliquer sur chaque propriété contenue dans `dataset`, qui représente chacune un attribut de données.

## Valeur

Un attribut HTML `data-*` et la propriété du DOM
`dataset.propriete` ont des différences de nom selon le contexte où on les manipule&nbsp;:

- En HTML
  - : Le nom de l'attribut commence par `data-`. Il ne peut contenir que des lettres, des nombres, des tirets (`-`), des points (`.`), des doubles-points (`:`), et des tirets bas (`_`). Les lettres majuscules ASCII (`A` à `Z`) sont converties en minuscules.
- En JavaScript
  - : Le nom de la propriété est le même que celui de l'attribut auquel on a retiré le préfixe `data-`, et on retire les tirets (`-`) en mettant les lettres qui suivent en majuscules afin d'obtenir une <i lang="en">camelCase</i>.

En plus des informations présentées ci-après, vous pourrez trouver un guide sur l'utilisation des attributs de données HTML dans l'article [_Utiliser les attributs de données_](/fr/docs/Web/HTML/How_to/Use_data_attributes).

### Conversion des noms

- Conversion du `dash-style` au `camelCase`
  - : Le nom d'un attribut de données est transformé en clé d'un élément [`DOMStringMap`](/fr/docs/Web/API/DOMStringMap) en suivant l'algorithme suivant&nbsp;:
    1. Toutes les lettres ASCII majuscules (`A` à `Z`) sont converties en minuscules&nbsp;;
    2. Le préfixe `data-` est retiré (tiret complet)&nbsp;;
    3. Pour tout tiret (`U+002D`) suivi d'une lettre ASCII minuscule (`a` à `z`), on retire le tiret et on convertit la lettre en majuscule&nbsp;;
    4. Les autres caractères (y compris les autres tirets) sont laissés inchangés.

- Conversion du `camelCase` au `dash-style`
  - : La transformation symétrique, permettant de passer d'une clé de propriété à un nom d'attribut, se fait avec l'algorithme suivant&nbsp;:
    1. **Vérification :** Avant toute transformation, un tiret _ne doit pas_ être immédiatement suivi d'une lettre ASCII en minuscule (`a` à `z`)&nbsp;;
    2. Le préfixe `data-` est ajouté&nbsp;;
    3. On ajoute un tiret devant chaque lettre ASCII majuscule (`A` à `Z`), et on convertit la lettre en minuscule&nbsp;;
    4. Les autres caractères sont laissés inchangés.

Ainsi, l'attribut HTML `data-abc-def` correspondra à la propriété JavaScript `dataset.abcDef`.

### Accéder aux valeurs

- Il est possible d'accéder aux valeurs d'un attribut et de le modifier en utilisant le nom de la clé comme propriété de l'objet&nbsp;: `element.dataset.nomcle`
- Il est aussi possible de lire et d'écrire les attributs avec la notation entre crochets&nbsp;:
  `element.dataset['nomcle']`
- [L'opérateur `in`](/fr/docs/Web/JavaScript/Reference/Operators/in) permet de vérifier si un attribut donné existe&nbsp;: `'nomcle' in element.dataset`

### Définir des valeurs

- Lorsqu'on définit l'attribut, sa valeur est convertie en une chaîne de caractères.

  Par exemple&nbsp;: `element.dataset.exemple = null` sera
  converti en `data-exemple="null"`.

- Pour retirer un attribut, on utilisera l'opérateur [`delete`](/fr/docs/Web/JavaScript/Reference/Operators/delete)&nbsp;: `delete element.dataset.nomCle`

## Exemples

```html
<div id="user" data-id="1234567890" data-user="sandrasmith" data-date-of-birth>
  Sandra Smith
</div>
```

```js
const el = document.querySelector("#user");

// el.id === 'user'
// el.dataset.id === '1234567890'
// el.dataset.user === 'sandrasmith'
// el.dataset.dateOfBirth === ''

// on définit un attribut de données
el.dataset.dateOfBirth = "1960-10-03";
// Résultat en JavaScript : el.dataset.dateOfBirth === '1960-10-03'
// Résultat en HTML : <div id="user" data-id="1234567890" data-user="sandrasmith" data-date-of-birth="1960-10-03">Sandra Smith</div>

delete el.dataset.dateOfBirth;
// Résultat en JavaScript : el.dataset.dateOfBirth === undefined
// Résultat en HTML : <div id="user" data-id="1234567890" data-user="sandrasmith">Sandra Smith</div>

if ("unAttrDonnee" in el.dataset === false) {
  el.dataset.unAttrDonnee = "mesdonnees";
  // Résultat en JS : 'unAttrDonnee' in el.dataset === true
  // Résultat en HTML : <div id="user" data-id="1234567890" data-user="sandrasmith" data-un-attr-donnee = "mesdonnees">Sandra Smith</div>
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'ensemble d'attributs HTML universels [`data-*`](/fr/docs/Web/HTML/Reference/Global_attributes/data-*).
- [Utiliser les attributs de données](/fr/docs/Web/HTML/How_to/Use_data_attributes)
- Les méthodes {{DOMxRef("Element.getAttribute()")}} et {{DOMxRef("Element.setAttribute()")}}
