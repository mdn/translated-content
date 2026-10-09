---
title: En-tête Tk
short-title: Tk
slug: Web/HTTP/Reference/Headers/Tk
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{Non-standard_Header}}

> [!NOTE]
> La spécification DNT (Do Not Track) a été abandonnée. Voir {{DOMxRef("Navigator.doNotTrack")}} pour plus d'informations.
> Une alternative est [le contrôle global de la vie privée <sup>(angl.)</sup>](https://globalprivacycontrol.org/), qui est communiquée aux serveurs à l'aide de l'en-tête {{HTTPHeader("Sec-GPC")}}, et accessible aux clients depuis la propriété API {{DOMxRef("navigator.globalPrivacyControl")}}.

{{Glossary("response Header", "L'en-tête de réponse")}} HTTP **`Tk`** indique le statut de suivi de la demande correspondante.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
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

- `!`
  - : En construction. Le serveur d'origine teste actuellement sa communication de l'état du suivi.
- `?`
  - : Dynamique. Le serveur d'origine a besoin de plus d'informations pour déterminer l'état du suivi.
- `G`
  - : Passerelle ou multiples parties. Le serveur fait office de passerelle vers un échange impliquant plusieurs parties.
- `N`
  - : Pas de suivi.
- `T`
  - : Suivi.
- `C`
  - : Suivi avec consentement. Le serveur d'origine pense avoir reçu un consentement préalable pour le suivi de cet·te utilisateur·ice, agent utilisateur ou appareil.
- `P`
  - : Consentement potentiel. Le serveur d'origine ne sait pas, en temps réel, s'il a reçu un consentement préalable pour le suivi de cet·te utilisateur·ice, agent utilisateur ou appareil, mais promet de ne pas utiliser ou partager de données `DNT:1` jusqu'à ce que ce consentement ait été déterminé.
    Il promet en outre de supprimer ou d'anonymiser de manière permanente dans les 48 heures toute donnée `DNT:1` reçue pour laquelle ce consentement n'a pas été reçu.
- `D`
  - : Ne tient pas compte de DNT. Le serveur d'origine ne peut ou ne veut pas respecter une préférence de suivi reçue de l'agent utilisateur demandeur.
- `U`
  - : Mis à jour. La demande a entraîné un changement potentiel du statut de suivi applicable à cet·te utilisateur·ice, agent utilisateur ou appareil.

## Exemples

Un entête `Tk` pour une ressource qui prétend ne pas être suivie&nbsp;:

```http
Tk: N
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

Cette en-tête de réponse ne déclenche aucun comportement du navigateur, donc la compatibilité avec les navigateurs est sans objet.

## Voir aussi

- L'en-tête {{HTTPHeader("DNT")}}
- La propriété API {{DOMxRef("Navigator.doNotTrack")}}
- [Ne pas suivre sur Wikipedia <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Do_Not_Track)
- [Qu'est-ce que le «&nbsp;Suivi&nbsp;» dans «&nbsp;Ne pas suivre&nbsp;» signifie&nbsp;? — EFF <sup>(angl.)</sup>](https://www.eff.org/deeplinks/2011/02/what-does-track-do-not-track-mean)
- [DNT sur Electronic Frontier Foundation <sup>(angl.)</sup>](https://www.eff.org/issues/do-not-track)
- [GPC - Le contrôle global de la vie privée <sup>(angl.)</sup>](https://globalprivacycontrol.org/)
  - [Activer GPC dans Firefox <sup>(angl.)</sup>](https://support.mozilla.org/en-US/kb/global-privacy-control?as=u&utm_source=inproduct)
