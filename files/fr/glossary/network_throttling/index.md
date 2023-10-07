---
title: Limitation de la bande passante
slug: Glossary/Network_throttling
l10n:
  sourceCommit: ed947b2c608428b62a60f07d09dc543f732dc09b
---

**La limitation de la bande passante** est un ralentissement intentionnel de la vitesse d'Internet. Lorsqu'on souhaite améliorer les performances web, on utilise cette technique afin d'émuler les conditions de faible bande passante probablement rencontrées par une large part du public cible d'un site.

Il est important de ne pas négliger les conditions du réseau rencontrées par les personnes utilisant leur mobile. La bande passante utilisée par les équipes de développement d'une application web sur des ordinateurs puissants, depuis un immeuble de bureaux est assez élevée. C'est dans de bonnes conditions que les équipes de développement, conception et rédaction technique testent une application web. En revanche, pour une personne utilisant un mobile pour accéder à l'application, éventuellement en voyage ou depuis une région éloignée, avec une mauvaise couverture ou un faible forfait de données, cette bande passante sera probablement très réduite (si elle est déjà suffisante pour se connecter au préalable). La limitation de la bande passante permet aux équipes de développement d'émuler l'expérience d'une telle personne dans un scénario moins favorable. La plupart des outils de développement de navigateur, tels que l'inspecteur , fournissent une fonction permettant d'émuler différentes conditions de réseau. En émulant l'expérience de votre public via cette limitation, vous pouvez identifier et résoudre plus facilement les éventuels problèmes de temps de chargement.

Les outils de développement du navigateur ont généralement des options de limitation du réseau, pour vous permettre de tester votre application dans des conditions de réseau lentes.

- Firefox (en anglais)
  - [Moniteur réseau](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)
  - [Vue adaptative](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html)
- Chrome (en anglais)
  - [Réseau](https://developer.chrome.com/docs/devtools/network/reference/#throttling)
- Edge (en anglais)
  - [Conditions réseau](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/network/reference#emulate-slow-network-connections-from-the-network-conditions-drawer)

## Voir aussi

- [Surveillance synthétique](/fr/docs/Glossary/Synthetic_monitoring)
