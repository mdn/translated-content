---
title: XMLHttpRequest()
slug: Web/API/XMLHttpRequest/XMLHttpRequest
---

{{APIRef('XMLHttpRequest')}}

Le constructeur **`XMLHttpRequest()`** crée un nouvel objet [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest).

Pour plus de détails sur l'utilisation de `XMLHttpRequest`, voir la page [Utiliser `XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest).

## Syntaxe

```js
new XMLHttpRequest();
```

### Paramètres

Aucun.

### Valeur de retour

Un nouvel objet [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest). L'objet doit être au minimum initialisé par l'appel de la méthode [`open()`](/fr/docs/Web/API/XMLHttpRequest/open) avant d'appeler [`send()`](/fr/docs/Web/API/XMLHttpRequest/send) pour envoyer la requête au serveur.

## La syntaxe de Firefox non standard

Firefox 16 a ajouté à ce constructeur un paramètre non standard qui peut activer le mode anonyme (voir le [bug 692677](https://bugzilla.mozilla.org/show_bug.cgi?id=692677)). Définir une valeur de `true` pour le drapeau `mozAnon` est analogue au comportement du constructeur [`AnonXMLHttpRequest()`](https://www.w3.org/TR/2012/WD-XMLHttpRequest-20120117/#dom-anonxmlhttprequest) décrit dans les versions antérieures de la spécification de `XMLHttpRequest`.

```js
const request = new XMLHttpRequest(paramsDictionary);
```

### Paramètres (non standard)

- `objParameters`

  - : Un drapeau qui peut être activé&nbsp;:

    - `mozAnon`
      - : Un booléen. Si ce drapeau vaut `true`, il empêchera le navigateur d'exposer [l'origine](/fr/docs/Glossary/Origin) et [des informations d'authentification](https://www.w3.org/TR/2012/WD-XMLHttpRequest-20120117/#user-credentials) lors de la récupération des ressources. Plus important encore, cela signifie que les [cookies](/fr/docs/Glossary/Cookie) ne seront pas envoyés, sauf s'ils sont ajoutés de façon explicite en utilisant la méthode `setRequestHeader()`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser `XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [HTML dans `XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
