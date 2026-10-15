---
title: En-tête Warning
short-title: Warning
slug: Web/HTTP/Reference/Headers/Warning
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

> [!NOTE]
> Cet en-tête est obsolète, car il n'est pas largement généré ou affiché aux utilisateur·ice·s (voir [RFC 9111 <sup>(angl.)</sup>](https://www.rfc-editor.org/info/rfc9111/#field.warning)).
> Une partie des informations peut être déduite d'autres en-têtes tels que {{HTTPHeader("Age")}}.

{{Glossary("request header", "L'en-tête de requête")}} et {{Glossary("response header", "de réponse")}} HTTP **`Warning`** contient des informations sur les problèmes éventuels liés au statut du message.
Plus d'un en-tête `Warning` peut apparaître dans une réponse.

Les champs d'en-tête `Warning` peuvent, en général, être appliqués à n'importe quel message.
Cependant, certains codes d'avertissement sont spécifiques aux caches et ne peuvent être appliqués qu'aux messages de réponse.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>
        {{Glossary("Request header", "En-tête de requête")}},
        {{Glossary("Response header", "En-tête de réponse")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Warning: <warn-code> <warn-agent> <warn-text> [<warn-date>]
```

## Directives

- `<warn-code>`
  - : Un numéro d'avertissement à trois chiffres. Le premier chiffre indique si l'en-tête `Warning` doit être supprimé d'une réponse stockée après validation.
    - Les codes d'avertissement `1xx` décrivent la fraîcheur ou le statut de validation de la réponse et sont supprimés par un cache après une validation réussie.
    - Les codes d'avertissement `2xx` décrivent un aspect de la représentation qui n'est pas rectifié par une validation et ne sont pas supprimés par un cache après validation, sauf si une réponse complète est envoyée.

- `<warn-agent>`
  - : Le nom ou le pseudonyme du serveur ou du logiciel ajoutant l'en-tête `Warning` (peut être «&nbsp;-&nbsp;» lorsque l'agent est inconnu).
- `<warn-text>`
  - : Un texte consultatif décrivant l'erreur.
- `<warn-date>` {{Optional_Inline}}
  - : Une date. Si plusieurs en-têtes `Warning` sont envoyés, incluez une date correspondant à l'en-tête {{HTTPHeader("Date")}}.

## Codes d'avertissement

Le [registre des codes d'avertissement HTTP sur iana.org <sup>(angl.)</sup>](https://www.iana.org/assignments/http-warn-codes) définit l'espace de noms pour les codes d'avertissement.

| Code | Texte                           | Description                                                                                                                                                                                                   |
| ---- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 110  | Réponse périmée                 | La réponse fournie par un cache est périmée (la date d'expiration définie pour la réponse est dépassée).                                                                                                      |
| 111  | Échec de revalidation           | Une tentative de validation de la réponse périmée échoue en raison de l'impossibilité de joindre le serveur.                                                                                                  |
| 112  | Fonctionnement déconnecté       | Le cache est volontairement déconnecté du reste du réseau.                                                                                                                                                    |
| 113  | Expiration heuristique          | Un cache choisit de manière heuristique une [durée de fraîcheur](/fr/docs/Web/HTTP/Guides/Caching#fraîcheur_et_obsolescence_basées_sur_lâge) supérieure à 24 heures et l'âge de la réponse dépasse 24 heures. |
| 199  | Avertissement divers            | Des informations arbitraires à présenter à l'utilisateur·ice ou à consigner.                                                                                                                                  |
| 214  | Transformation appliquée        | Ajouté par un mandataire s'il applique une transformation à la représentation, comme la modification du codage du contenu, du type de média ou autre.                                                         |
| 299  | Avertissement persistant divers | Des informations arbitraires à présenter à l'utilisateur·ice ou à consigner. Ce code d'avertissement ressemble au code d'avertissement 199 et indique en plus un avertissement persistant.                    |

## Exemples

```http
Warning: 110 anderson/1.3.37 "La réponse est périmée"

Date: Wed, 21 Oct 2015 07:28:00 GMT
Warning: 112 - "cache dépassé" "Wed, 21 Oct 2015 07:28:00 GMT"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Date")}}
- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
