---
title: En-tête Sec-GPC
short-title: Sec-GPC
slug: Web/HTTP/Reference/Headers/Sec-GPC
l10n:
  sourceCommit: 513146a616213fee548fdcf72dc1359030eb3395
---

{{Glossary("request header", "L'en-tête de requête")}} HTTP **`Sec-GPC`** fait partie du mécanisme [contrôle de la confidentialité globale <sup>(angl.)</sup>](https://globalprivacycontrol.org/) (GPC) pour indiquer si l'utilisateur·ice consent à ce qu'un site web ou un service vende ou partage ses informations personnelles avec des tiers.

La spécification ne définit pas comment l'utilisateur·ice peut retirer ou accorder son consentement pour un site web.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Request header", "En-tête de requête")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Oui (préfixe <code>Sec-</code>)</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Sec-GPC: <preference>
```

## Directives

- `<preference>`
  - : Une valeur de `1` signifie que l'utilisateur·ice a indiqué qu'il/elle préfère que ses informations ne soient pas partagées avec des tiers ou vendues à ceux-ci.
    Sinon, l'en-tête n'est pas envoyé, ce qui indique soit que l'utilisateur·ice n'a pas pris de décision, soit qu'il/elle accepte que ses informations soient partagées avec des tiers ou vendues à ceux-ci.

## Exemples

### Lire l'état du Contrôle de la confidentialité globale depuis JavaScript

La préférence GPC de l'utilisateur·ice peut également être lue depuis JavaScript en utilisant la propriété {{DOMxRef("Navigator.globalPrivacyControl")}} ou {{DOMxRef("WorkerNavigator.globalPrivacyControl")}}&nbsp;:

```js
navigator.globalPrivacyControl; // "false" ou "true"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété API {{DOMxRef("Navigator.globalPrivacyControl")}}
- L'en-tête {{HTTPHeader("DNT")}}
- L'en-tête {{HTTPHeader("Tk")}}
- [globalprivacycontrol.org <sup>(angl.)</sup>](https://globalprivacycontrol.org/)
- [Ne pas suivre sur Wikipedia <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Do_Not_Track)
