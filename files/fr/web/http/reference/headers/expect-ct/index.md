---
title: En-tête Expect-CT
short-title: Expect-CT
slug: Web/HTTP/Reference/Headers/Expect-CT
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{Deprecated_Header}}

L'{{Glossary("response header", "en-tête de réponse")}} `Expect-CT` permet aux sites d'activer la déclaration et/ou l'application des exigences de la [transparence des certificats](/fr/docs/Web/Security/Defenses/Certificate_Transparency).
La transparence des certificats (<abbr title="Certificate Transparency" lang="en">CT</abbr>) vise à empêcher l'utilisation de certificats mal émis pour ce site de passer inaperçue.

Seul Google Chrome et les autres navigateurs basés sur Chromium ont implémenté `Expect-CT`, et Chromium a déprécié cet en-tête à partir de la version 107, car Chromium applique désormais CT par défaut.
Voir la mise à jour sur le [statut de la plateforme Chrome <sup>(angl.)</sup>](https://chromestatus.com/feature/6244547273687040).

Les exigences CT peuvent être satisfaites par l'un des mécanismes suivants&nbsp;:

- Extension de certificat X.509v3 permettant d'intégrer des horodatages de certificats signés émis par des journaux individuels. La plupart des certificats TLS émis par des AC publiques de confiance et utilisés en ligne contiennent un CT intégré.
- Extension TLS de type `signed_certificate_timestamp` envoyée lors de l'établissement de la connexion
- Prise en charge de l'OCSP stapling (c'est-à-dire l'extension TLS `status_request`) et fourniture d'une `SignedCertificateTimestampList`

> [!NOTE]
> Lorsqu'un site active l'en-tête `Expect-CT`, il demande au navigateur de vérifier que tout certificat pour ce site apparaît dans les **[journaux CT publics <sup>(angl.)</sup>](https://github.com/google/certificate-transparency-community-site/blob/master/docs/google/known-logs.md)**.

> [!NOTE]
> Les navigateurs **ignorent** l'en-tête `Expect-CT` sur HTTP&nbsp;; l'en-tête n'a d'effet que sur les connexions HTTPS.

> [!NOTE]
> `Expect-CT` est principalement obsolète depuis juin 2021.
> Depuis mai 2018, tous les nouveaux certificats TLS doivent prendre en charge les SCT par défaut.
> Les certificats émis avant mars 2018 pouvaient avoir une durée de vie de 39 mois, ils ont donc expiré en juin 2021.
> Chromium prévoit de déprécier l'en-tête `Expect-CT` et de le supprimer à terme.

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
Expect-CT: report-uri="<uri>",
           enforce,
           max-age=<age>
```

## Directives

- `max-age`
  - : Le nombre de secondes après la réception du champ d'en-tête `Expect-CT` pendant lesquelles l'agent utilisateur doit considérer l'hôte du message reçu comme un hôte `Expect-CT` connu.

    Si un cache reçoit une valeur supérieure à ce qu'il peut représenter, ou si l'un de ses calculs ultérieurs déborde, le cache considérera cette valeur comme étant soit 2 147 483 648 (2^31), soit le plus grand entier positif qu'il peut représenter.

- `report-uri="<uri>"` {{Optional_Inline}}
  - : L'URI où l'agent utilisateur doit signaler les échecs `Expect-CT`.

    Lorsqu'elle est présente avec la directive `enforce`, la configuration est appelée «&nbsp;enforcement et rapport&nbsp;», indiquant à l'agent utilisateur que la conformité à la politique de transparence des certificats doit être appliquée _et_ que les violations doivent être signalées.

- `enforce` {{Optional_Inline}}
  - : Indique à l'agent utilisateur que la conformité à la politique de transparence des certificats doit être appliquée (plutôt que seulement signalée) et que l'agent utilisateur doit refuser les connexions futures qui violent cette politique.

    Lorsque les directives `enforce` et `report-uri` sont toutes deux présentes, la configuration est appelée «&nbsp;enforcement et rapport&nbsp;», indiquant à l'agent utilisateur que la conformité à la politique de transparence des certificats doit être appliquée et que les violations doivent être signalées.

## Exemples

L'exemple suivant définit l'application de la transparence des certificats pendant 24 heures et signale les violations à `toto.exemple.com`&nbsp;:

```http
Expect-CT: max-age=86400, enforce, report-uri="https://toto.exemple.com/report"
```

## Notes

Les autorités de certification racines ajoutées manuellement au magasin de confiance remplacent et suppriment les rapports/l'application de `Expect-CT`.

Les navigateurs ne retiendront pas une politique `Expect-CT`, sauf si le site a «&nbsp;prouvé&nbsp;» qu'il peut fournir un certificat satisfaisant aux exigences de transparence des certificats. Les navigateurs appliquent leur propre modèle de confiance concernant les journaux CT considérés comme fiables pour l'enregistrement du certificat.

Les versions de Chrome sont conçues pour arrêter d'appliquer la politique `Expect-CT` 10 semaines après la date de construction de l'installation.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Contextes sécurisés](/fr/docs/Web/Security/Defenses/Secure_Contexts)
- Termes du glossaire&nbsp;:
  - {{Glossary('TLS', 'Transport Layer Security (TLS)')}}
  - {{Glossary('SSL', 'Secure Sockets Layer (SSL)')}}
  - {{Glossary('HTTPS')}}
