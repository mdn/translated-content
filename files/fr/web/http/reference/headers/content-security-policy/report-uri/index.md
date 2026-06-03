---
title: "Content-Security-Policy : directive report-uri"
short-title: report-uri
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{Deprecated_Header}}

> [!WARNING]
> La directive {{CSP("report-to")}} est prévue pour remplacer `report-uri`, et dans les navigateurs qui prennent en charge `report-to`, la directive `report-uri` est ignorée.
>
> Cependant, tant que `report-to` n'est pas largement pris en charge, vous pouvez définir les deux directives comme suit&nbsp;:
>
> ```http
> Content-Security-Policy: …; report-uri https://endpoint.exemple.com; report-to endpoint_name
> ```

La directive obsolète HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`report-uri`** demande à l'agent utilisateur de rapporter les violations de règles CSP.
Ces rapports de violation sont constituées d'un [document JSON](#syntaxe_du_rapport_de_violation) envoyé par une requête HTTP `POST` à l'URI fournie.

Cette directive n'a aucun effet en elle-même, mais prend tout son sens en étant combinée à d'autres directives.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td>{{Glossary("Reporting directive", "Directive de rapport")}}</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        Cette directive n'est pas supportée dans l'élément HTML {{HTMLElement("meta")}}.
      </th>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Content-Security-Policy: report-uri <uri>;
Content-Security-Policy: report-uri <uri> <uri>;
```

- `<uri>`
  - : Une URI où envoyer la requête POST contenant le rapport de violation.

### Syntaxe du rapport de violation

L'objet JSON du rapport est envoyé via une opération HTTP `POST` avec un {{HTTPHeader("Content-Type")}} de type `application/csp-report`.

> [!NOTE]
> Les rapports de violation doivent être considérés comme des données contrôlées par un attaquant.
> Le contenu doit être correctement assaini avant d'être stocké ou affiché.
> Cela est particulièrement vrai pour la propriété [`script-sample`](#script-sample), si elle est fournie.

L'objet JSON du rapport a une seule propriété de niveau supérieur, `"csp-report"`, qui contient un objet avec les propriétés suivantes&nbsp;:

- `blocked-uri`
  - : L'URI de la ressource qui a été bloquée par la politique de sécurité du contenu.
    Si l'URI bloquée provient d'une origine différente de celle du `document-uri`, alors l'URI bloquée est tronquée pour ne contenir que le schéma, l'hôte et le port.
- `disposition`
  - : Soit `"enforce"` soit `"report"` selon que l'en-tête {{HTTPHeader("Content-Security-Policy-Report-Only")}} ou l'en-tête `Content-Security-Policy` est utilisé.
- `document-uri`
  - : L'URI du document dans lequel la violation s'est produite.
- `effective-directive`
  - : La directive dont l'application a causé la violation.
    Certains navigateurs peuvent fournir des valeurs différentes, comme Chrome fournissant `style-src-elem`/`style-src-attr`, même lorsque la directive appliquée était `style-src`.
- `original-policy`
  - : La politique originale telle que définie par l'en-tête HTTP `Content-Security-Policy`.
- `referrer` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Le référent du document dans lequel la violation s'est produite.
- `script-sample`
  - : Les 40 premiers caractères du script en ligne, du gestionnaire d'évènements ou du style qui a causé la violation.
    Les violations provenant de fichiers externes ne sont pas incluses dans le rapport.

    Cela ne s'applique qu'aux violations [`script-src*`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) et [`style-src*`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src), lorsque la directive `Content-Security-Policy` correspondante contient le mot-clé [`'report-sample'`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#report-sample).

- `status-code`
  - : Le code de statut HTTP de la ressource sur laquelle l'objet global a été instancié.
- `violated-directive` {{Deprecated_Inline}}
  - : La directive dont l'application a causé la violation. Le `violated-directive` est un nom historique pour le champ `effective-directive` et contient la même valeur.

## Exemples

### Rapport de violation CSP avec `Content-Security-Policy`

Considérons une page située à `http://exemple.com/signup.html`.
Elle utilise la politique suivante, interdisant tout sauf les feuilles de style chargées depuis `cdn.exemple.com`.

```http
Content-Security-Policy: default-src 'none'; style-src cdn.exemple.com; report-uri /_/csp-reports
```

Le HTML de `signup.html` ressemble à ceci&nbsp;:

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Inscription</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    Contenu ici.
  </body>
</html>
```

Pouvez-vous repérer l'erreur&nbsp;? Les feuilles de style ne peuvent être chargées que depuis `cdn.exemple.com`, mais le site essaie d'en charger une depuis sa propre origine (`http://exemple.com`).
Un navigateur capable d'appliquer la CSP enverrait le rapport de violation suivant en tant que requête `POST` à `http://exemple.com/_/csp-reports` lorsque le document est consulté&nbsp;:

```json
{
  "csp-report": {
    "blocked-uri": "http://exemple.com/css/style.css",
    "disposition": "report",
    "document-uri": "http://exemple.com/signup.html",
    "effective-directive": "style-src-elem",
    "original-policy": "default-src 'none'; style-src cdn.exemple.com; report-uri /_/csp-reports",
    "referrer": "",
    "status-code": 200,
    "violated-directive": "style-src-elem"
  }
}
```

Comme vous pouvez le voir, le rapport inclut le chemin complet vers la ressource violant la politique dans `blocked-uri`.
Ce n'est pas toujours le cas.
Par exemple, si `signup.html` tentait de charger du CSS depuis `http://unautrecdn.exemple.com/stylesheet.css`, le navigateur n'inclurait _pas_ le chemin complet, seulement l'origine,
(`http://unautrecdn.exemple.com`) afin d'éviter de divulguer des informations sensibles sur les ressources cross-origin.
La spécification CSP [donne une explication <sup>(angl.)</sup>](https://w3c.github.io/webappsec-csp/#security-violation-reports) de ce comportement.

### Rapport de violation CSP avec `Content-Security-Policy-Report-Only`

La directive `report-uri` peut également être utilisée avec l'en-tête de réponse {{HTTPHeader("Content-Security-Policy-Report-Only")}}.
Cet en-tête permet au navigateur de signaler les violations sans les bloquer lors des tests.

L'en-tête HTTP serait à peu près le même.

```http
Content-Security-Policy-Report-Only: default-src 'none'; style-src cdn.exemple.com; report-to /_/csp-reports
```

Le rapport serait le même, sauf pour la disposition `"report"` et bien sûr la `"original-policy"`&nbsp;:

```json
{
  "csp-report": {
    "blocked-uri": "http://exemple.com/css/style.css",
    "disposition": "report",
    "document-uri": "http://exemple.com/signup.html",
    "effective-directive": "style-src-elem",
    "original-policy": "default-src 'none'; style-src cdn.exemple.com; report-uri /_/csp-reports",
    "referrer": "",
    "status-code": 200,
    "violated-directive": "style-src-elem"
  }
}
```

### Journaliser les violations CSP

Étant donné un serveur qui envoie des réponses avec l'en-tête `Content-Security-Policy` suivant&nbsp;:

```http
Content-Security-Policy: default-src https:; report-uri /csp-violation-report-endpoint/
```

`/csp-violation-report-endpoint/` pourrait par exemple exécuter un script PHP comme celui-ci, qui enregistre le JSON détaillant la violation et, si la violation est la première ajoutée au fichier journal, envoie un e-mail à un·e administrateur·ice&nbsp;:

```php
<?php

// Début de la configuration
$log_file = dirname(__FILE__) . "/csp-violations.log";
$log_file_size_limit = 1000000; // bytes - une fois dépassé, aucune entrée supplémentaire n'est ajoutée
$email_address = "admin@exemple.com";
$email_subject = "Content-Security-Policy violation";
// Fin de la configuration

$current_domain = preg_replace("/www\./i", "", $_SERVER["SERVER_NAME"]);
$email_subject = $email_subject . " on " . $current_domain;

http_response_code(204); // HTTP 204 No Content

$json_data = file_get_contents("php://input");

// Nous formatons joliment le JSON avant de l'ajouter au fichier journal
if (($json_data = json_decode($json_data))) {
  $json_data = json_encode(
    $json_data,
    JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES,
  );

  if (!file_exists($log_file)) {
    // Envoyer un e-mail
    $message =
      "La violation suivante de la Content-Security-Policy s'est produite sur " .
      $current_domain . ":\n\n" .
      $json_data .
      "\n\nLes violations CSP suivantes seront enregistrées dans le fichier journal suivant, mais aucune notification par e-mail supplémentaire ne sera envoyée tant que ce fichier journal n'est pas supprimé :\n\n" .
      $log_file;
    mail(
      $email_address,
      $email_subject,
      $message,
      "Content-Type: text/plain;charset=utf-8",
    );
  } else if (filesize($log_file) > $log_file_size_limit) {
    exit(0);
  }

  file_put_contents($log_file, $json_data, FILE_APPEND | LOCK_EX);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
- L'en-tête {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- La directive CSP {{CSP("report-to")}}
