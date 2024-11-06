---
title: Tk
slug: Web/HTTP/Headers/Tk
---

{{HTTPSidebar}}

L'entête de réponse `Tk` indique le statut de suivi (tracking) qui s'applique à la demande correspondante.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'entête</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```
Tk: !  (en construction)
Tk: ?  (dynamique)
Tk: G  (passerelle ou multiples parties)
Tk: N  (pas de suivi)
Tk: T  (suivi)
Tk: C  (suivi avec consentement)
Tk: P  (consentement potentiel)
Tk: D  (ne tient pas compte de DNT)
Tk: U  (mis à jour)
```

### Directives

- !
  - : En construction. Le serveur d'origine teste actuellement sa communication de l'état du suivi.
- ?
  - : Dynamique. Le serveur d'origine a besoin de plus d'informations pour déterminer l'état du suivi.
- G
  - : Passerelle ou multiples parties. Le serveur fait office de passerelle vers un échange impliquant plusieurs parties.
- N
  - : Pas de suivi.
- T
  - : Suivi.
- C
  - : Suivi avec consentement. Le serveur d'origine pense avoir reçu un consentement préalable pour le suivi de cet utilisateur, user-agent ou appareil.
- P
  - : Consentement potentiel. Le serveur d'origine ne sait pas, en temps réel, s'il a reçu un consentement préalable pour le suivi de cet utilisateur, user-agent ou appareil, mais promet de ne pas utiliser ou partager de données DNT:1 jusqu'à ce que ce consentement ait été déterminé. Il promet en outre de supprimer ou d'anonymiser de manière permanente dans les 48 heures toute donnée DNT:1 reçue pour laquelle ce consentement n'a pas été reçu.
- D
  - : Ne tient pas compte de DNT. Le serveur d'origine ne peut ou ne veut pas respecter une préférence de suivi reçue de l'user-agent demandeur.
- U
  - : Mis à jour. La demande a entraîné un changement potentiel du statut de suivi applicable à cet utilisateur, user-agent ou appareil.

## Exemple

Un entête `Tk` pour une ressource qui prétend ne pas être suivie :

```
Tk: N
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTTPHeader("DNT")}} header
- {{domxref("Navigator.doNotTrack")}}
