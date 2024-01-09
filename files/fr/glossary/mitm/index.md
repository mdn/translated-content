---
title: MitM
slug: Glossary/MitM
l10n:
  sourceCommit: 37bd8d794902f05bbb638eb3505cb87ccf38a992
---

{{GlossarySidebar}}

Une **attaque du monstre du milieu** (en anglais <i lang="en">manipulator-in-the-middle attack</i>, abrégé en MitM) ou aussi attaque de l'homme du milieu consiste à intercepter une communication entre deux systèmes. Cela peut par exemple se produit lorsqu'un routeur Wi-Fi a été compromis.

Prenons une analogie avec le courrier postal&nbsp;: si vous échangez des lettres, la factrice ou le facteur peut intercepter chaque lettre que vous postez&nbsp;: l'ouvrir, la lire, la modifier, puis la reconditionner et ensuite l'envoyer au destinataire initial. Lorsque ce dernier vous répond par courrier, à nouveau, la factrice ou le facteur peut l'ouvrir, la lire, la modifier éventuellement, la renvelopper et vous la remettre. Vous ne savez pas que votre courrier a été intercepté, le circuit de distribution du courrier est invisible pour vous et votre destinataire.

Qu'il s'agisse du courrier postal ou des communications électroniques, il est difficile de se défendre contre les attaques MitM. Voici quelques conseils&nbsp;:

- N'ignorez pas les avertissements liés aux certificats. Vous pourriez être connecté à un serveur d'hameçonnage ou à un serveur imposteur.
- Les sites sensibles qui ne sont pas chiffrés à l'aide de HTTPS ne sont pas fiables sur les réseaux Wi-Fi publics.
- Avant de vous authentifier sur un site, vérifiez dans la barre d'URL que son adresse commence bien par `https://`, ce qui indique que le chiffrement est en place.

## Voir aussi

- [La page OWASP sur les attaques du monstre du milieu (en anglais)](https://owasp.org/www-community/attacks/Manipulator-in-the-middle_attack)
- Le site PortSwigger&nbsp;: [les dernières actualités concernant les attaques du monstre du milieu (en anglais)](https://portswigger.net/daily-swig/mitm)
- [La page Wikipédia correspondante](https://fr.wikipedia.org/wiki/Attaque_de_l%27homme_du_milieu)
