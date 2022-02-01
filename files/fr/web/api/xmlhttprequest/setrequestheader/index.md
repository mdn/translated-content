---
title: XMLHttpRequest.setRequestHeader()
slug: Web/API/XMLHttpRequest/setRequestHeader
translation_of: Web/API/XMLHttpRequest/setRequestHeader
---
{{APIRef('XMLHttpRequest')}}

La méthode **`setRequestHeader()`** de l'objet {{domxref("XMLHttpRequest")}} permet d'éditer le header d'une requête HTTP. Vous devez appeler la méthode `setRequestHeader()`, après la méthode {{domxref("XMLHttpRequest.open", "open()")}}, et avant {{domxref("XMLHttpRequest.send", "send()")}}. Si vous faite appel plusieurs fois à `setRequestHeader()` dans une même requête, tout sera combiné au sein d'un même header.

A chaque fois que vous appellez `setRequestHeader()`, son contenu est ajouté à la fin du header existant.

Si aucun {{HTTPHeader("Accept")}} n'a été configurer avec cette méthode, un `Accept` header avec le type `"*/*"` sera envoyé avec la requête lorsque {{domxref("XMLHttpRequest.send", "send()")}} sera appellée.

Pour des raisons de sécurité, certain header ne peuvent être manipulés que par le user agent. Ceux-ci contiennent les paramètres {{Glossary("Forbidden_header_name", "forbidden header names", 1)}}  et {{Glossary("Forbidden_response_header_name", "forbidden response header names", 1)}}.

> **Note :** Dans certain cas, vous pourrez rencontrer l'erreur / exception "**not allowed by Access-Control-Allow-Headers in preflight response**" quand vous enverez une requête cross domains. Dans ce cas, vous devrez configurer {{HTTPHeader("Access-Control-Allow-Headers")}} dans votre réponse HTTP coté serveur.

## Syntax

    XMLHttpRequest.setRequestHeader(header, value)

### Paramètre

- `header`
  - : Le paramètre du header.
- `value`
  - : La valeur de ce paramètre.

### Valeurs de retour

`undefined`.

## Specifications

| Specification                                                                                                        | Status                               | Comment                |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ---------------------- |
| {{SpecName('XMLHttpRequest', '#the-setRequestHeader()-method', 'setRequestHeader()')}} | {{Spec2('XMLHttpRequest')}} | WHATWG living standard |

## Compatibilitée avec les navigateurs

{{Compat("api.XMLHttpRequest.setRequestHeader")}}

## A voir aussi

- [Using XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [HTML in XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
