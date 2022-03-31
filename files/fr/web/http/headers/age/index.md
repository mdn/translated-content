---
title: Age
slug: Web/HTTP/Headers/Age
translation_of: Web/HTTP/Headers/Age
---
{{HTTPSidebar}}

L'entête HTTP {{HTTPHeader("Age")}} indique le temps en secondes pendant lequel la ressource a été stockée dans un cache proxy.

Sa valeur est généralement proche de zéro. Elle vaut 0 lorsque la ressource vient d'être rapatriée du serveur d'origine; autrement, sa valeur équivaut à la différence entre la date courante du proxy et la valeur de l'entête {{HTTPHeader("Date")}} inclus dans la réponse HTTP.



<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'entête</th>
      <td>Entête de réponse</td>
    </tr>
    <tr>
      <th scope="row">Nom d'entête interdit</th>
      <td>non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

    Age: <valeur-en-secondes>

## Directive

- \<valeur-en-secondes>
  - : Un entier positif indiquant le temps en secondes pendant lequel la ressource a été stockée dans un cache proxy.

## Exemple

    Age: 24

## Spécifications

| Spécification                            | Titre                                           |
| ---------------------------------------- | ----------------------------------------------- |
| {{RFC("7234", "Age", "5.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Caching |

## Compatibilité des navigateurs

{{Compat("http.headers.Age")}}

## Voir aussi

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Expires")}}
