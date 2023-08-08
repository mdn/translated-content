---
title: "CSP: report-uri"
slug: Web/HTTP/Headers/Content-Security-Policy/report-uri
---

{{HTTPSidebar}}{{deprecated_header}}

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`report-uri`** demande à l'agent utilisateur de rapporter les violations de règles CSP. Ces rapports de violation sont constituées d'un document JSON envoyé via une requête HTTP POST à l'URI fournie.

> **Attention :** Bien que la directive {{CSP("report-to")}} est prévue remplacer la directive **`report-uri`** maintenant dépréciée, {{CSP("report-to")}} n'est pas encore supportée par la plupart des navigateurs modernes. Par rétrocompatibilité avec les navigateurs courants et tout en prévoyant une compatibilité future quand les navigateurs supporteront {{CSP("report-to")}}, vous pouvez spécifier les deux directives **`report-uri`** et {{CSP("report-to")}}:
>
> ```
> Content-Security-Policy: ...; report-uri https://endpoint.com; report-to groupname
> ```
>
> Dans les navigateurs qui supportent {{CSP("report-to")}}, la directive **`report-uri`** sera ignorée.

Cette directive n'a aucun effet en elle-même, mais prend tout son sens en étant combinée à d'autres directives.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td>{{Glossary("Reporting directive")}}</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        Cette directive n'est pas supportée dans l'élément
        {{HTMLElement("meta")}}.
      </th>
    </tr>
  </tbody>
</table>

## Syntaxe

```
Content-Security-Policy: report-uri <uri>;
Content-Security-Policy: report-uri <uri> <uri>;
```

- \<uri>
  - : Une URI où envoyer la requête POST contenant le rapport de violation.

## Exemples

Voir {{HTTPHeader("Content-Security-Policy-Report-Only")}} pour plus d'informations et d'exemples.

```
Content-Security-Policy: default-src https:; report-uri /csp-violation-report-endpoint/
```

`/csp-violation-report-endpoint/` pourrait par exemple exécuter un script PHP similaire au suivant qui journaliserait le JSON détaillant la violation et, si elle est la première ajoutée au journal, enverrait un courril à l'administrateur :

```php
<?php

// Start configure
$log_file = dirname(__FILE__) . '/csp-violations.log';
$log_file_size_limit = 1000000; // bytes - once exceeded no further entries are added
$email_address = 'admin@example.com';
$email_subject = 'Content-Security-Policy violation';
// End configuration

$current_domain = preg_replace('/www\./i', '', $_SERVER['SERVER_NAME']);
$email_subject = $email_subject . ' on ' . $current_domain;

http_response_code(204); // HTTP 204 No Content

$json_data = file_get_contents('php://input');

// We pretty print the JSON before adding it to the log file
if ($json_data = json_decode($json_data)) {
  $json_data = json_encode($json_data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);

  if (!file_exists($log_file)) {
    // Send an email
    $message = "The following Content-Security-Policy violation occurred on " .
      $current_domain . ":\n\n" .
      $json_data .
      "\n\nFurther CPS violations will be logged to the following log file, but no further email notifications will be sent until this log file is deleted:\n\n" .
      $log_file;
    mail($email_address, $email_subject, $message,
         'Content-Type: text/plain;charset=utf-8');
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

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
