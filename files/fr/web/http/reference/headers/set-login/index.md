---
title: En-tête Set-Login
short-title: Set-Login
slug: Web/HTTP/Reference/Headers/Set-Login
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

{{Glossary("response header", "L'en-tête de réponse")}} HTTP **`Set-Login`** est envoyé par un fournisseur d'identité fédéré (IdP) pour définir son statut de connexion, et indique si des utilisateur·ice·s sont connecté·e·s à l'IdP sur le navigateur actuel ou non.
Cette information est stockée par le navigateur et utilisée par [l'API <abbr>FedCM</abbr>](/fr/docs/Web/API/FedCM_API) (<i lang="en">Federated Credential Management</i>) pour réduire le nombre de requêtes qu'il effectue auprès de l'IdP, car le navigateur n'a pas besoin de demander des comptes lorsqu'aucun·e utilisateur·ice n'est connecté·e à l'IdP.
Elle permet également d'atténuer les [attaques par temporisation potentielles <sup>(angl.)</sup>](https://github.com/w3c-fedid/FedCM/issues/447).

L'en-tête peut être défini sur toute réponse résultant d'une navigation de niveau supérieur ou d'une requête de sous-ressource de même origine sur le site d'origine de l'IdP.
Toute interaction avec le site de l'IdP peut entraîner la définition de cet en-tête, et le statut de connexion étant stocké par le navigateur.

Voir [Mettre à jour le statut de connexion à l'aide de l'API Login Status](/fr/docs/Web/API/FedCM_API/IDP_integration#mettre_à_jour_le_statut_de_connexion_avec_lapi_login_status) pour plus d'informations sur le statut de connexion FedCM.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header","En-tête de réponse")}}</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Set-Login: <status>
```

## Directives

- `<status>`
  - : Une chaîne de caractères représentant le statut de connexion à définir pour l'IdP. Les valeurs possibles sont&nbsp;:
    - `logged-in`&nbsp;: L'IdP a au moins un compte utilisateur connecté.
    - `logged-out`&nbsp;: Tous les comptes utilisateur de l'IdP sont actuellement déconnectés.

    > [!NOTE]
    > Les navigateurs ignorent cet en-tête s'il contient une autre valeur.

## Exemples

```http
Set-Login: logged-in

Set-Login: logged-out
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Federated Credential Management (FedCM)](/fr/docs/Web/API/FedCM_API)
