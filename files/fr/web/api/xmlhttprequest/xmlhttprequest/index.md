---
title: "XMLHttpRequest : constructeur XMLHttpRequest()"
short-title: XMLHttpRequest()
slug: Web/API/XMLHttpRequest/XMLHttpRequest
l10n:
  sourceCommit: 5e270e3cdab4f3c8ad3f5752976c72c6e8312eb9
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

Le constructeur **`XMLHttpRequest()`** crée un nouvel objet {{DOMxRef("XMLHttpRequest")}}.

## Syntaxe

```js-nolint
new XMLHttpRequest()
// Non standard
new XMLHttpRequest(options)
```

### Paramètres

Aucun paramètre standard n'est défini. Cependant, Firefox permet un paramètre non standard&nbsp;:

- `options` {{Non-standard_Inline}}
  - : Un objet qui peut contenir les indicateurs suivants&nbsp;:
    - `mozAnon`
      - : Un booléen. Si ce drapeau vaut `true`, il empêche le navigateur d'exposer {{Glossary("origin", "l'origine")}} et les informations d'authentification de l'utilisateur·ice lors de la récupération des ressources. Plus important encore, cela signifie que les {{Glossary("Cookie", "cookies")}} ne sont pas envoyés, sauf s'ils sont ajoutés de façon explicite en utilisant `setRequestHeader`.
    - `mozSystem`
      - : Un booléen. Si ce drapeau vaut `true`, la politique de même origine n'est pas appliquée à la requête.

### Valeur de retour

Un nouvel objet {{DOMxRef("XMLHttpRequest")}}. L'objet doit être au minimum initialisé par l'appel de la méthode {{DOMxRef("XMLHttpRequest.open", "open()")}} avant d'appeler {{DOMxRef("XMLHttpRequest.send", "send()")}} pour envoyer la requête au serveur.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [HTML dans XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
