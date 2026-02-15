---
title: En-tête Content-Security-Policy-Report-Only
short-title: Content-Security-Policy-Report-Only
slug: Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Content-Security-Policy-Report-Only`** permet de surveiller les violations de la politique de sécurité du contenu (CSP) et leurs effets sans imposer les règles de sécurité.
Cet en-tête vous permet de tester ou corriger les violations avant qu'un {{HTTPHeader("Content-Security-Policy")}} soit appliqué et imposé.

La directive CSP {{CSP("report-to")}} doit être définie pour que les rapports soient envoyés&nbsp;: sinon, l'opération n'aura aucun effet.

Les rapports de violation sont envoyés grâce à [l'API de rapport](/fr/docs/Web/API/Reporting_API) vers les points de terminaison définis dans un en-tête HTTP {{HTTPHeader("Reporting-Endpoints")}} et sélectionnés avec la directive CSP {{CSP("report-to")}}.

Pour en savoir plus, consultez notre guide [Politique de sécurité du contenu (CSP)](/fr/docs/Web/HTTP/Guides/CSP).

> [!NOTE]
> Cet en-tête peut aussi être utilisé avec la directive obsolète {{CSP("report-uri")}} (celle-ci est remplacée par {{CSP("report-to")}}).
> L'utilisation et la syntaxe du rapport généré diffèrent légèrement&nbsp;; consultez le sujet {{CSP("report-uri")}} pour plus de détails.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        Cet en-tête n'est pas supporté au sein d'un élément HTML {{HTMLElement("meta")}}.
      </th>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Content-Security-Policy-Report-Only: <policy-directive>; …; <policy-directive>; report-to <endpoint-name>
```

## Directives

L'en-tête `Content-Security-Policy-Report-Only` prend en charge toutes les directives {{HTTPHeader("Content-Security-Policy")}} sauf `sandbox`, qui est ignorée.

> [!NOTE]
> La directive CSP {{CSP("report-to")}} doit être utilisée avec cet en-tête, sinon il n'aura aucun effet.

## Exemples

### Utiliser `Content-Security-Policy-Report-Only` pour envoyer des rapports CSP

Pour utiliser la directive {{CSP("report-to")}}, vous devez d'abord définir un point de terminaison correspondant avec l'en-tête de réponse {{HTTPHeader("Reporting-Endpoints")}}.
Dans l'exemple ci-dessous, nous définissons un point de terminaison nommé `csp-endpoint`.

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

Vous pouvez ensuite définir la destination du rapport avec {{CSP("report-to")}} et {{CSP("report-uri")}}, comme illustré ci-dessous.
Ce rapport serait déclenché si la page chargeait des ressources de façon non sécurisée ou depuis du code en ligne.

```http
Content-Security-Policy-Report-Only: default-src https:;
  report-uri /csp-report-url/;
  report-to csp-endpoint;
```

> [!NOTE]
> La directive `report-to` est à privilégier par rapport à la directive obsolète `report-uri`, mais nous déclarons les deux car `report-to` n'est pas encore prise en charge par tous les navigateurs.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
- La directive CSP {{CSP("report-to")}}
- La directive CSP {{CSP("report-uri")}} {{Deprecated_Inline}}
