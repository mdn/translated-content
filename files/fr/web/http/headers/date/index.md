---
title: Date
slug: Web/HTTP/Headers/Date
translation_of: Web/HTTP/Headers/Date
---
{{HTTPSidebar}}

L'en-tête général HTTP **`Date`** contient la date et l'heure d'origine du message.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("General header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name ")}}</th>
      <td>oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

    Date: <day-name>, <jour> <mois> <année> <heure>:<minute>:<seconde> GMT

## Directives

- \<day-name>
  - : L'un des mots "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ou "Sun" (sensible à la casse).
- \<day>
  - : Numéro de jour à 2 chiffres, par ex. "04" ou "23".
- \<month>
  - : L'un des mots "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" (sensible à la casse).
- \<year>
  - : Numéro d'année à 4 chiffres, par exemple "1990" ou "2018".
- \<hour>
  - : Numéro d'heure à 2 chiffres, par exemple "09" or "23".
- \<minute>
  - : Numéro d'heure à 2 chiffres, par exemple "04" or "59".
- \<second>
  - : Numéro de seconde à 2 chiffres, par exemple "04" or "59".
- GMT
  - : Temps sur le Méridien de Greenwich. Les dates HTTP sont toujours exprimées en GMT, jamais en heure locale.

## Exemples

    Date: Wed, 21 Oct 2015 07:28:00 GMT

## Spécifications

| Spécifications                               | Titre                                                          |
| -------------------------------------------- | -------------------------------------------------------------- |
| {{RFC("7231", "Date", "7.1.1.2")}} | Hypertext Transfer Protocol (HTTP/1.1) : Sémantique et contenu |

## Compatibilité des navigateurs

{{Compat("http.headers.Date")}}

## See also

- {{HTTPHeader("Age")}}
