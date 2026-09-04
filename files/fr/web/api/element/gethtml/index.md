---
title: "Element : méthode getHTML()"
short-title: getHTML()
slug: Web/API/Element/getHTML
l10n:
  sourceCommit: 5d6f5187d1c657edec7e735d3cc5ad36907e2030
---

{{APIRef("DOM")}}

La méthode **`getHTML()`** de l'interface {{DOMxRef("Element")}} est utilisée pour sérialiser le DOM d'un élément en une chaîne de caractères HTML.

La méthode fournit un argument `options` qui permet la sérialisation des nœuds enfants qui sont des racines d'ombre.
Les options peuvent être utilisées pour inclure des racines d'ombre imbriquées qui ont été définies comme {{DOMxRef("ShadowRoot/serializable","serializable")}}, et/ou un tableau défini d'objets {{DOMxRef("ShadowRoot")}}, qui peuvent être ouverts ou fermés.

Sans arguments, les nœuds enfants qui sont des racines d'ombre ne sont pas sérialisés, et cette méthode se comporte de la même manière que la lecture de la valeur de {{DOMxRef("Element.innerHTML")}}.

Notez que certains navigateurs sérialisent les caractères `<` et `>` en `&lt;` et `&gt;` lorsqu'ils apparaissent dans les valeurs d'attribut (voir [Compatibilité des navigateurs](#compatibilité_des_navigateurs)).
Ceci est pour prévenir une vulnérabilité de sécurité potentielle ([mutation XSS <sup>(angl.)</sup>](https://www.securitum.com/mutation-xss-via-mathml-mutation-dompurify-2-0-17-bypass.html)) dans laquelle un·e attaquant·e peut créer une entrée qui contourne une [fonction d'assainissement](/fr/docs/Web/Security/Attacks/XSS#assainissement), permettant une attaque de type script inter-site (XSS).

## Syntaxe

```js-nolint
getHTML(options)
```

### Paramètres

- `options` {{Optional_Inline}}
  - : Un objet d'options avec les paramètres optionnels suivants&nbsp;:
    - `serializableShadowRoots`
      - : Une valeur booléenne qui définit si les racines d'ombre {{DOMxRef("ShadowRoot/serializable","serializable")}} doivent être incluses.
        La valeur par défaut est `false`.
    - `shadowRoots`
      - : Un tableau d'objets {{DOMxRef("ShadowRoot")}} à sérialiser.
        Ils sont inclus indépendamment du fait qu'ils soient marqués comme `serializable`, ou s'ils sont ouverts ou fermés.
        La valeur par défaut est un tableau vide.

### Valeur de retour

Une chaîne de caractères représentant la sérialisation HTML de l'élément.

### Exceptions

Aucune.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("ShadowRoot.getHTML()")}}
- La propriété {{DOMxRef("Element.innerHTML")}}
- La méthode {{DOMxRef("Element.setHTMLUnsafe()")}}
- La méthode {{DOMxRef("ShadowRoot.setHTMLUnsafe()")}}
