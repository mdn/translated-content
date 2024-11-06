---
title: Access-Control-Allow-Origin
slug: Web/HTTP/Headers/Access-Control-Allow-Origin
---

{{HTTPSidebar}}

L'entête **`Access-Control-Allow-Origin`** renvoie une réponse indiquant si les ressources peuvent être partagées avec une [origine](/fr/docs/Glossaire/Origine) donnée.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Origin: <origin>
Access-Control-Allow-Origin: null
```

## Directives

- \*
  - : Pour les demandes sans informations d'identification, le serveur peut spécifier « \* » comme un caractère générique, permettant ainsi à n'importe quelle origine d'accéder à la ressource.
- \<origin>
  - : Spécifie un URI qui peut accéder à la ressource. Il n'est possible de spécifier qu'une seule origine.

## Exemples

Pour permettre à n'importe quelle ressource d'accéder à vos ressources, vous pouvez indiquer :

```
Access-Control-Allow-Origin: *
```

Pour permettre `https://developer.mozilla.org` d'accéder à vos ressources, vous pouvez indiquer :

```
Access-Control-Allow-Origin: https://developer.mozilla.org
```

### CORS et le cache

Si le serveur spécifie un hôte d'origine plutôt que "\*", il doit également inclure "_Origin_" dans l'en-tête de réponse "_[Vary](/fr/docs/Web/HTTP/Headers/Vary)_" pour indiquer aux clients que les réponses du serveur seront différentes en fonction de la valeur de la demande d'origine entête.

```
Access-Control-Allow-Origin: https://developer.mozilla.org
Vary: Origin
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTTPHeader("Origin")}}
- {{HTTPHeader("Vary")}}
