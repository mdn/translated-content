---
title: Transparence des certificats (Certificate Transparency)
short-title: Transparence des certificats
slug: Web/Security/Defenses/Certificate_Transparency
l10n:
  sourceCommit: 39070892d5d1a5cc55312a0ac10c97f4c339384f
---

La **transparence des certificats** (<i lang="en">Certificate Transparency</i> en anglais) est un cadre ouvert conçu pour protéger contre les mauvaises émissions de certificats et les surveiller. Avec la transparence des certificats, les certificats nouvellement émis sont «&nbsp;journalisés&nbsp;» dans des _journaux CT_ publics, souvent indépendants, qui maintiennent un enregistrement append-only (ajout-seulement) et garanti cryptographiquement des certificats TLS émis.

De cette façon, les autorités de certification (CA) peuvent être soumises à un contrôle et une surveillance publics bien plus importants. Les certificats potentiellement malveillants, comme ceux qui enfreignent les _exigences de base_ du CA/B Forum, peuvent être détectés et révoqués beaucoup plus rapidement. Les éditeurs de navigateurs et les responsables des magasins de racines sont également en mesure de prendre des décisions plus éclairées concernant les CA problématiques qu'ils pourraient décider de ne plus approuver.

## Contexte

Les journaux CT sont construits sur la structure de données _arbre de Merkle_. Les nœuds sont étiquetés avec les _hachages cryptographiques_ de leurs nœuds enfants. Les feuilles contiennent les hachages des véritables données. L'étiquette du nœud racine dépend donc de tous les autres nœuds de l'arbre.

Dans le contexte de la transparence des certificats, les données hachées par les feuilles sont les certificats émis par les différentes autorités de certification actuelles. L'inclusion d'un certificat peut être vérifiée via une _preuve d'audit_ qui peut être générée et vérifiée efficacement, en temps logarithmique O(log n).

La transparence des certificats est apparue initialement en 2013 dans un contexte de compromissions de CA (faille DigiNotar en 2011), de décisions discutables (incident Trustwave subordinate root en 2012) et de problèmes techniques d'émission (émission de certificats faibles à 512 bits par DigiCert Sdn Bhd en Malaisie).

## Mise en œuvre

Lorsque des certificats sont soumis à un journal CT, un _horodatage de certificat signé_ (SCT) est généré et renvoyé. Cela sert de preuve que le certificat a été soumis et sera ajouté au journal.

La spécification indique que les serveurs conformes _doivent_ fournir un certain nombre de ces SCT aux clients TLS lors de la connexion. Cela peut être réalisé par plusieurs mécanismes différents&nbsp;:

- Extension de certificat X.509v3 qui intègre les horodatages de certificat signés directement dans le certificat feuille
- Extension TLS de type `signed_certificate_timestamp` envoyée lors de la poignée de main
- OCSP stapling (c'est-à-dire l'extension TLS `status_request`) et fourniture d'une `SignedCertificateTimestampList` contenant un ou plusieurs SCT

Avec l'extension de certificat X.509, les SCT inclus sont décidés par la CA émettrice. Depuis juin 2021, la plupart des certificats utilisés activement et valides, reconnus publiquement, contiennent des données de transparence intégrées dans cette extension. Cette méthode ne devrait pas nécessiter de modification des serveurs web.

Avec les autres méthodes, les serveurs devront être mis à jour pour envoyer les données requises. L'avantage est que l'opérateur du serveur peut personnaliser les sources de journaux CT fournissant les SCT envoyés via l'extension TLS ou la réponse OCSP staplée.

## Exigences des navigateurs

Google Chrome 107 et versions ultérieures exigent l'inclusion dans un journal CT pour tous les certificats émis avec une date notBefore postérieure au 30 avril 2018. Les utilisateur·ice·s seront empêché·e·s de visiter des sites utilisant des certificats TLS non conformes.
Chrome exigeait auparavant l'inclusion CT pour les certificats à _validation étendue_ (EV) et ceux émis par Symantec.

Apple [exige <sup>(angl.)</sup>](https://support.apple.com/en-gb/103214) un nombre variable de SCT pour que Safari et d'autres serveurs fassent confiance aux certificats serveur.

Firefox desktop à partir de la version 135 exige l'inclusion dans un journal CT pour tous les certificats émis par les autorités de certification du programme racine de Mozilla.
Firefox pour Android n'exige pas actuellement l'inclusion dans un journal CT.

## Spécifications

Les implémentations des navigateurs sont basées sur la spécification obsolète {{RFC("6962","Certificate Transparency <sup>(angl.)</sup>")}} (janvier 2025).
La spécification actuelle est {{RFC("9162","Certificate Transparency Version 2.0 <sup>(angl.)</sup>")}}.

## Voir aussi

- [Programme de journaux Certificate Transparency d'Apple <sup>(angl.)</sup>](https://support.apple.com/en-us/103703)
- [Politique des journaux Certificate Transparency de Chrome <sup>(angl.)</sup>](https://googlechrome.github.io/CertificateTransparency/log_policy.html)
