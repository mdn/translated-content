---
title: Referer
slug: Web/HTTP/Headers/Referer
tags:
  - HTTP
  - Reference
  - header
  - referer
  - referrer
translation_of: Web/HTTP/Headers/Referer
---
{{HTTPSidebar}}

L'en-tête de requête **`Referer`** contient l'adresse de la page web précédente à partir de laquelle un lien a été suivi pour demander la page courante. L'en-tête `Referer` permet aux serveurs d'identifier la provenance des visiteurs d'une page et cette information peut être utilisée à des fins d'analyse, de journalisation ou pour améliorer la politique de cache par exemple.

> **Attention :** Bien que cet en-tête puisse être utilisé à de nombreuses fins légitimes, il peut avoir des effets indésirables sur la sécurité et la vie privée. Voir la page [Questions de sécurité et de vie privée : quid de l'en-tête `referer`](fr/docs/Web/Security/Referer_header:_privacy_and_security_concerns) pour plus d'informations et des méthodes d'atténuation.

Note : le terme `referer` est orthographié ainsi bien qu'il s'agisse d'une erreur à partir du mot anglais "_referrer_". Voir {{interwiki("wikipedia", "HTTP_referer", "L'en-tête <code>referer</code> HTTP sur Wikipédia")}} pour plus de détails.

Un en-tête `Referer` n'est pas envoyé par les navigateurs si :

- La ressource d'origine est un fichier local ou une URI de données.
- Une requête non sécurisée HTTP est utilisée alors que la page référente avait été reçue via un protocole sécurisé (HTTPS).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("En-tête de requête")}}</td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Glossaire/Forbidden_header_name"
          >Nom d'en-tête interdit</a
        >
      </th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

    Referer: <url>

## Directives

- `<url>`
  - : Une adresse absolue ou partielle de la page web à partir de laquelle la requête vers la page courante a été émise. Les fragements d'URL (i.e. "#section") et les informations d'utilisateurs (i.e. "username:password" dans "https\://username:password\@example.com/toto/truc/") ne sont pas incluses.

## Exemples

    Referer: https://developer.mozilla.org/fr/docs/Web/JavaScript

## Spécifications

| Spécification                                    | Titre                                                                                                                                 |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| {{RFC("7231", "Referer", "5.5.2")}} | _Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content_ (Protocole de transfert hypertext (HTTP/1.1): Sémantique et contenu). |

## Compatibilité des navigateurs

{{Compat("http.headers.Referer")}}

## Voir aussi

- {{interwiki("wikipedia", "HTTP_referer", "L'en-tête HTTP <code>referer</code> sur Wikipédia")}}
- {{HTTPHeader("Referrer-Policy")}}
