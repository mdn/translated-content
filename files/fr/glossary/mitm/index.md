---
title: MitM
slug: Glossary/MitM
tags:
  - Attaque
  - Glossaire
  - Sécurité
translation_of: Glossary/MitM
original_slug: Glossaire/MitM
---
Une **attaque de l'homme du milieu** (Man-in-the-middle attack ou MitM) intercepte une communication entre deux systèmes. Par exemple, un routeur Wi-Fi peut être compromis.

En comparant cela au courrier physique : si vous échangez des lettres, le facteur peut intercepter chaque lettre que vous postez. Il l'ouvre, la lit, la modifie finalement, puis la reconditionne et seulement ensuite l'envoie à son destinataire initial. Celui-ci vous répond par lettre postée, et à nouveau, le facteur l'ouvre, la lit, la modifie éventuellement, la reconditionne et vous la remet. Vous ne savez pas qu'il y a un homme au milieu de votre canal de communication - le facteur est invisible pour vous et votre destinataire.

Dans le courrier physique et la communication en ligne, il est difficile de se défendre contre les attaques MitM. Quelques conseils :

- Ne pas ignorer les avertissements de certificat. Vous pourriez être connecté à un serveur d'hameçonnage ou à un serveur imposteur.
- Les sites sensibles sans cryptage HTTPS sur les réseaux Wi-Fi publics ne sont pas fiables.
- Vérifiez "HTTPS" dans votre barre d'adresse et assurez-vous que le chiffrement est en place avant de vous connecter.

## En apprendre plus

- Article OWASP : [Man-in-the-middle attack](https://www.owasp.org/index.php/Man-in-the-middle_attack) (en)
- Wikipedia : [Attaque de l'homme du milieu](https://fr.wikipedia.org/wiki/Attaque_de_l%27homme_du_milieu)
- L'en-tête {{HTTPHeader("Public-Key-Pins")}} ({{Glossary("HPKP")}}) peut significativement réduire le risque d'attaque MitM en demandant aux navigateurs d'exiger des certificats valides (liste blanche) pour toute connexion ultérieure à ce site.
