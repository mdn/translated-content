---
title: En-tête NEL
short-title: NEL
slug: Web/HTTP/Reference/Headers/NEL
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

{{SeeCompatTable}}

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`NEL`** est utilisé pour configurer la journalisation des requêtes réseau.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
NEL: { "report_to": "nom_du_groupe_de_rapport", "max_age": 12345, "include_subdomains": false, "success_fraction": 0.0, "failure_fraction": 1.0 }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Présentation de la journalisation des erreurs réseau (NEL) <sup>(angl.)</sup>](/fr/docs/Web/HTTP/Guides/Network_Error_Logging)
