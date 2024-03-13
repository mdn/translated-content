---
title: "CSP: frame-ancestors"
slug: Web/HTTP/Headers/Content-Security-Policy/frame-ancestors
---

{{HTTPSidebar}}

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-ancestors`** spécifie les parents pouvant intégrer une page en utilisant {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, {{HTMLElement("embed")}}, ou {{HTMLElement("applet")}}.

Définir cette directive à `'none'` est comparable à len-tête HTTP {{HTTPHeader("X-Frame-Options")}}`: deny` (aussi supporté sur les anciens navigateurs).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP version</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Directive type</th>
      <td>{{Glossary("Navigation directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} fallback</th>
      <td>No. Not setting this allows anything.</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        This directive is not supported in the {{HTMLElement("meta")}}
        element.
      </th>
    </tr>
  </tbody>
</table>

## Syntaxe

Une ou plusieurs sources peuvent être autorisées pour cette directive :

```
Content-Security-Policy: frame-ancestors <source>;
Content-Security-Policy: frame-ancestors <source> <source>;
```

### Sources

La \<source> peut être une des suivantes :

> **Note :** The `frame-ancestors` directive's syntax is similar to a source list of other directives (e.g. {{CSP("default-src")}}), but doesn't allow `'unsafe-eval'` or `'unsafe-inline'` for example. It will also not fall back to a `default-src` setting. Only the sources listed below are allowed:

- \<host-source>

  - : Des hôtes Internet par leur nom de domaine ou adresse IP, aussi bien qu'un [protocole](/fr/docs/URIs_and_URLs) et/ou un numéro de port. L'adresse du site peut inclure un caractère de remplacement optionnel (l'astérisque `'*'`), qui ne peut être utilisée que pour indiquer un sous-domaine ou que tous les ports existants sont des sources valides. Vous ne devez pas mettre de guillemets simples.
    Exemples :

    - `http://*.example.com`: correspondra à toutes les tentatives d'accès pour tous les sous-domaines de example.com via le protocole `http:`.
    - `mail.example.com:443`: correspondra à toutes les tentatives d'accès sur le port 443 de mail.example.com.
    - `https://store.example.com`: correspondra à toutes les tentatives d'accès à store.example.com via le protocole `https:`.

    > **Attention :** Si aucun schéma d'URL n'est spécifié comme `host-source` et que l'{{HTMLElement("iframe")}} est chargée via une URL `https:`, la page chargeant l'iframe doit aussi être chargée en `https:`, selon la spécification du W3C sur [les correspondances de valeurs de sources](https://w3c.github.io/webappsec-csp/2/#match-source-expression).

- \<scheme-source>

  - : Un protocole tel que `http:` or `https:`. Les deux-points sont nécessaires et vous ne devez pas mettre de guillemets. Vous pouvez aussi spécifier des schémas de données bien que ce ne soit pas recommandé.

    - `data:` Autorise [les URI `data:`](/fr/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) à être utilisées comme source de contenu. _Cette pratique manque de sécurité ; une personne malveillante peut aussi injecter des URI data: arbitraires. Utilisez cette valeur avec parcimonie et certainement pas pour des scripts._
    - `mediastream:` permet aux [URI `mediastream:`](/fr/docs/Web/API/MediaStream_API) d'être utilisées comme source de contenu.
    - `blob:` permet aux [URI `blob:`](/fr/docs/Web/API/Blob) d'être utilisées comme source de contenu.
    - `filesystem:` Allows [URI `filesystem:`](/fr/docs/Web/API/FileSystem) d'être utilisées comme source de contenu.

- `'self'`
  - : Cette valeur fait référence au domaine dont est originaire le document protégé, y compris le protocole et le numéro de port. Vous devez mettre cette valeur entre guillemets. Certains navigateurs excluent spécifiquement les valeurs `blob` et `filesystem` des directives de source. Les sites nécessitant une permission pour ces types de contenu peuvent les spécifier en utilisant l'attribut Data.
- `'none'`
  - : Aucune source n'est admise. Vous devez mettre cette valeur entre guillemets.

## Exemples

```bash
Content-Security-Policy: frame-ancestors 'none';

Content-Security-Policy: frame-ancestors 'self' https://www.example.org;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("X-Frame-Options")}}
