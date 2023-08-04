---
title: CredentialsContainer.get()
slug: Web/API/CredentialsContainer/get
---

{{APIRef("Credential Management")}}{{SeeCompatTable}}

La méthode **`get()`**, rattachée à l'interface {{domxref("CredentialsContainer")}}, renvoie une promesse ({{jsxref("Promise")}}) qui est résolue en une instance de {{domxref("Credential")}} correspondant aux paramètres fournis. Si aucune correspondance n'est trouvée, la promesse sera résolue avec la valeur {{jsxref("null")}}.

Cette méthode collecte l'ensemble des informations d'authentification stockées dans l'objet {{domxref("CredentialsContainer")}} et qui respectent les critères indiqués (définis grâce à l'argument **`options`**). À partir de cet ensemble, l'agent utilisateur sélectionne la meilleure information d'authentification. Selon les options fournies, l'agent utilisateur pourra afficher une boîte de dialogue et demander à l'utilisateur de sélectionner la bonne information.

Cette méthode récupère les informations d'authentification en appelant la méthode `CollectFromCredentialStore` pour chaque type d'authentification permis par l'argument **`options`**. Ainsi, si la propriété `options.password` existe dans l'argument passé, {{domxref("PasswordCredential")}}`.[[CollectFromCredentialStore]]` sera appelée.

> **Note :** Cette méthode ne peut être utilisé que pour les contextes de navigation les plus hauts. Les appels lancés depuis une {{HTMLElement("iframe")}} résoudront la promesse sans aucun effet.

## Syntaxe

```js
var promise = CredentialsContainer.get([options]);
```

### Paramètres

- `options` {{optional_inline}}

  - : Un objet de type {{domxref("CredentialRequestOptions")}} qui contient les critères de la requête. et les options d'interaction avec l'utilisateur. Cet objet peut contenir les propriétés suivantes :

    - `password` : un booléen ({{jsxref("Boolean")}}) qui indique que l'instance {{domxref("Credential")}} renvoyée devrait contenir les informations sur l'utilisateur (contrairement aux informations d'authentification fédérées).
    - `federated` : un objet {{domxref("FederatedCredentialRequestOptions")}} qui contient les critères que doivent respecter les informations d'authentification fédérées. Les options disponibles sont :

      - `providers` : un tableau de chaînes de caractères {{domxref("DOMString")}} listant les fournisseurs d'identité potentiels
      - `protocols` : un tableau de chaînes de caractères {{domxref("DOMString")}} listant les protocoles de fédération à rechercher.

    - `publicKey` : un objet {{domxref("PublicKeyCredentialRequestOptions")}} contenant les conditions que doivent respecter les informations d'authentification [WebAuthn](/fr/docs/Web/API/Web_Authentication_API) qui seront renvoyées.
    - `mediation` : une chaîne de caractères {{jsxref("String")}} qui indique si l'utilisateur devra se reconnecter à chaque visite sur le site. Les valeurs valides sont `"silent"`, `"optional"` ou `"required"`.
    - `unmediated` : {{deprecated_inline()}} un booléen ({{jsxref("Boolean")}}) qui indique que l'instance {{domxref("Credential")}} renvoyée ne devrait pas nécessiter de médiation avec l'utilisateur.

### Valeur de retour

Une promesse ({{jsxref("Promise")}}) qui est résolue avec une instance {{domxref("Credential")}} correspondant aux paramètres fournis. S'il n'est pas possible d'obtenir une seule instance sans ambiguïté, la promesse sera résolue avec la valeur {{jsxref("null")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
