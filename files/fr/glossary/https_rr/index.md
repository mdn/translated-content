---
title: HTTPS RR
slug: Glossary/HTTPS_RR
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**HTTPS RR** (**_HTTPS Resource Records_**) est un type d'enregistrement DNS qui fournit des informations de configuration et des paramètres pour accéder à un service via {{Glossary("HTTPS")}}.

Un _HTTPS RR_ peut être utilisé pour optimiser le processus de connexion à un service utilisant HTTPS.
De plus, la présence d'un _HTTPS RR_ indique que toutes les ressources {{Glossary("HTTP")}} utiles sur l'origine sont accessibles via HTTPS, ce qui signifie qu'un navigateur peut mettre à niveau en toute sécurité les connexions du domaine de HTTP vers HTTPS.

### Voir aussi

- {{RFC(9460, "Spécification de liaison de service et de paramètres via le DNS (SVCB et enregistrements de ressource HTTPS)")}}
- [Sécurité stricte du transport face aux enregistrements de ressource HTTPS&nbsp;: le duel <sup>(angl.)</sup>](https://emilymstark.com/2020/10/24/strict-transport-security-vs-https-resource-records-the-showdown.html) (blog d'Emily M. Stark)
- Terme associé du glossaire&nbsp;:
  - {{Glossary("TLS")}}
