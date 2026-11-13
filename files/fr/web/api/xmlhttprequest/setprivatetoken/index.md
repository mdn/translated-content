---
title: "XMLHttpRequest : méthode setPrivateToken()"
short-title: setPrivateToken()
slug: Web/API/XMLHttpRequest/setPrivateToken
l10n:
  sourceCommit: ee03b8deb5423c80e1cb8f6930a6f52e3f49e678
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers("window_and_worker_except_service")}}{{SeeCompatTable}}

La méthode **`setPrivateToken()`** de l'interface {{DOMxRef("XMLHttpRequest")}} ajoute des informations de [jeton d'état privé](/fr/docs/Web/API/Private_State_Token_API/Using) à un appel `XMLHttpRequest`, pour initier des opérations de jeton d'état privé.

## Syntaxe

```js-nolint
setPrivateToken(privateToken)
```

### Paramètres

- `privateToken`
  - : Un objet contenant des options pour initier une opération de jeton d'état privé. Les propriétés possibles incluent&nbsp;:
    - `issuers` {{Optional_Inline}}
      - : Un tableau de chaînes de caractères contenant les URL des émetteurs pour lesquels vous souhaitez transmettre les enregistrements de remboursement. Ce paramètre est ignoré sauf si `operation` est défini sur `send-redemption-record`, auquel cas le tableau `issuers` doit être inclus.
    - `operation`
      - : Une chaîne de caractères représentant le type d'opération de jeton que vous souhaitez initier. Les valeurs possibles sont&nbsp;:
        - `token-request`
          - : Initialise une opération de [demande de jeton](/fr/docs/Web/API/Private_State_Token_API/Using#émettre_un_jeton_depuis_votre_serveur).
        - `token-redemption`
          - : Initialise une opération [d'échange de jeton](/fr/docs/Web/API/Private_State_Token_API/Using#échanger_un_jeton_depuis_votre_serveur).
        - `send-redemption-record`
          - : Initialise une opération [d'envoi du registre d'échange](/fr/docs/Web/API/Private_State_Token_API/Using#utiliser_le_registre_déchange_2).
    - `refreshPolicy` {{Optional_Inline}}
      - : Une valeur énumérée qui définit le comportement attendu lorsqu'un enregistrement d'échange non expiré pour l'utilisateur·ice et le site actuels a été précédemment défini. Ce paramètre est ignoré sauf si `operation` est défini sur `token-redemption`. Les valeurs possibles sont&nbsp;:
        - `none`
          - : L'enregistrement d'échange précédemment défini doit être utilisé, et un nouveau ne doit pas être émis. Il s'agit de la valeur par défaut.
        - `refresh`
          - : Un nouvel enregistrement d'échange est toujours émis.
    - `version`
      - : Un nombre indiquant la version du protocole cryptographique que vous souhaitez utiliser lors de la génération d'un jeton. Actuellement, cette valeur est toujours définie sur `1`, qui est la seule version prise en charge par la spécification. Lors de la spécification de l'option `privateToken`, cette propriété est obligatoire.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Levée si l'objet `XMLHttpRequest` associé n'est pas dans un état ouvert, ou si {{DOMxRef("XMLHttpRequest.send", "send()")}} a déjà été appelé sur celui-ci.
- `NotAllowedError` {{DOMxRef("DOMException")}}
  - : Levée si l'utilisation des opérations de [l'API Private State Token](/fr/docs/Web/API/Private_State_Token_API) est spécifiquement interdite par une [politique d'autorisations](/fr/docs/Web/HTTP/Guides/Permissions_Policy) {{HTTPHeader("Permissions-Policy/private-state-token-issuance","private-state-token-issuance")}} ou {{HTTPHeader("Permissions-Policy/private-state-token-redemption","private-state-token-redemption")}}.
- {{JSxRef("TypeError")}}
  - : Levée si `operation` est définie sur `send-redemption-record` et si le tableau `issues` est vide ou n'est pas défini, ou si une ou plusieurs des adresses HTTPS définies dans `issuers` ne sont pas dignes de confiance.

## Exemples

### Émettre un jeton d'état privé

```js
const aUnJeton = await Document.hasPrivateToken(`issuer.example`);
if (!aUnJeton) {
  const requete = new XMLHttpRequest();
  requete.open(
    "POST",
    "https://issuer.example/.well-known/private-state-token/issuance",
  );
  requete.setPrivateToken({
    version: 1,
    operation: "token-request",
  });
  requete.send();
}
```

### Échanger un jeton d'état privé

```js
const requete = new XMLHttpRequest();
requete.open(
  "POST",
  "https://issuer.example/.well-known/private-state-token/redemption",
);
requete.setPrivateToken({
  version: 1,
  operation: "token-redemption",
  refreshPolicy: "none",
});
requete.send();
```

### Transmettre un enregistrement d'échange

```js
const aUnRR = await Document.hasRedemptionRecord(`issuer.example`);
if (aUnRR) {
  const requete = new XMLHttpRequest();
  requete.open("POST", "some-resource.example");
  requete.setPrivateToken({
    version: 1,
    operation: "send-redemption-record",
    issuers: ["https://issuer.example"],
  });
  requete.send();
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Private State Token](/fr/docs/Web/API/Private_State_Token_API)
