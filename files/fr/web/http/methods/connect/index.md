---
title: CONNECT
slug: Web/HTTP/Methods/CONNECT
---

{{HTTPSidebar}}

La **méthode HTTP `CONNECT`** crée une communication bidirectionnelle avec la ressource demandée. Elle peut être utilisée pour ouvrir un tunnel.

Par exemple, la méthode `CONNECT` peut être utilisée pour accéder à des sites web qui utilisent {{Glossary("SSL")}} ({{Glossary("HTTPS")}}). Le client demande à un serveur Proxy HTTP de créer un tunnel TCP vers la destination désirée. Le serveur poursuit alors afin d'établir la connexion pour le compte du client. Une fois que la connexion a été établie par le serveur, le serveur Proxy continue de gérer le flux TCP à destination et en provenance du client.

`CONNECT` est une méthode "saut-par-saut".

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">La requête a un corps</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Une réponse de succès a un corps</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Sûre")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotente")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Peut être mise en cache")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">
        Autorisée dans les
        <a
          href="https://developer.mozilla.org/fr/docs/Web/Guide/HTML/Formulaires"
          >formulaires HTML</a
        >
      </th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```
CONNECT www.example.com:443 HTTP/1.1
```

## Exemple

Certains serveurs proxy pourraient avoir besoin d'une autorisation pour créer un tunnel. Voir aussi l'en-tête {{HTTPHeader("Proxy-Authorization")}}.

```
CONNECT server.example.com:80 HTTP/1.1
Host: server.example.com:80
Proxy-Authorization: basic aGVsbG86d29ybGQ=
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{Glossary("Proxy server")}}
- {{HTTPHeader("Proxy-Authorization")}}
