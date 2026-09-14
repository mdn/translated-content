---
title: "Request : propriété mode"
short-title: mode
slug: Web/API/Request/mode
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La propriété en lecture seule **`mode`** de l'interface {{DOMxRef("Request")}} contient le mode de la requête (par exemple, `cors`, `no-cors`, `same-origin` ou `navigate`). Cela sert à déterminer si les requêtes inter-origines produisent des réponses valides, et quelles propriétés de la réponse sont lisibles.

Pour construire une requête avec un mode spécifique, passez la valeur souhaitée comme option {{DOMxRef("RequestInit", "", "mode")}} au constructeur {{DOMxRef("Request.Request()")}}.

Notez que définir certains modes, en particulier `no-cors`, impose des restrictions sur les méthodes et en-têtes de requête utilisables, et empêche JavaScript d'accéder aux en-têtes ou au corps de la réponse. Consultez la documentation de {{DOMxRef("RequestInit", "", "mode")}} pour plus de détails.

## Valeur

L'une des valeurs suivantes&nbsp;:

- `same-origin`
  - : Interdit les requêtes inter-origines. Si une requête est faite vers une autre origine avec ce mode, le résultat est une erreur.

- `no-cors`
  - : Désactive le CORS pour les requêtes inter-origines. La réponse est _opaque_, ce qui signifie que ses en-têtes et son corps ne sont pas accessibles en JavaScript.

- `cors`
  - : Si la requête est inter-origine, elle utilisera le mécanisme [Cross-Origin Resource Sharing (CORS)](/fr/docs/Web/HTTP/Guides/CORS).

- `navigate`
  - : Un mode pour la navigation. La valeur `navigate` est destinée à être utilisée uniquement par la navigation HTML. Une requête de navigation est créée uniquement lors de la navigation entre documents.

### Mode par défaut

Les requêtes peuvent être initiées de différentes manières, et le mode d'une requête dépend du moyen par lequel elle a été initiée.

Par exemple, lorsqu'un objet `Request` est créé à l'aide du constructeur {{DOMxRef("Request.Request", "Request()")}}, la valeur de la propriété `mode` pour cette `Request` est définie à `cors`.

Cependant, pour les requêtes créées autrement que par le constructeur {{DOMxRef("Request.Request", "Request()")}}, `no-cors` est généralement utilisé comme mode&nbsp;: par exemple, pour les ressources embarquées où la requête est initiée depuis le balisage, sauf si l'attribut [`crossorigin`](/fr/docs/Web/HTML/Reference/Attributes/crossorigin) est présent, la requête est dans la plupart des cas faite en mode `no-cors` — c'est-à-dire, pour les éléments HTML {{HTMLElement("link")}}, {{HTMLElement("script")}} (sauf lorsqu'ils sont utilisés avec des modules), {{HTMLElement("img")}}, {{HTMLElement("audio")}}, {{HTMLElement("video")}}, {{HTMLElement("object")}}, {{HTMLElement("embed")}} ou {{HTMLElement("iframe")}}.

## Exemples

Dans l'extrait suivant, nous créons une nouvelle requête à l'aide du constructeur {{DOMxRef("Request.Request", "Request()")}} (pour un fichier image dans le même répertoire que le script), puis nous enregistrons le mode de la requête dans une variable&nbsp;:

```js
const maRequete = new Request("fleurs.jpg");
const monMode = maRequete.mode; // retourne "cors" par défaut
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- La référence [HTTP](/fr/docs/Web/HTTP)
