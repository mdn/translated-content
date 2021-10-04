---
title: PasswordCredential.iconURL
slug: Web/API/PasswordCredential/iconURL
tags:
  - API
  - Credential Management API
  - PasswordCredential
  - Propriété
  - Reference
translation_of: Web/API/PasswordCredential/iconURL
---
{{SeeCompatTable}}{{APIRef("")}}

La propriété **`iconURL`**, rattachée à l'interface {{domxref("PasswordCredential")}}, est accessible en lecture seule et fournit une chaîne de caractères {{domxref("USVString")}} représentant une URL pointant vers l'image d'une icône. Cette image est destinée à être affichée dans un sélecteur d'authentification. L'URL fournie doit être accessible sans authentification.

## Syntaxe

    url = passwordCredential.iconURL

### Valeur

Une chaîne de caractères {{domxref("USVString")}} contenant une URL.

## Spécifications

| Spécification                                                                                                | État                                         | Commentaires         |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | -------------------- |
| {{SpecName('Credential Management','#dom-credentialuserdata-iconurl','iconURL')}} | {{Spec2('Credential Management')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.PasswordCredential.iconURL")}}
