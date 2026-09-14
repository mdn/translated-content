---
title: Défenses
slug: Web/Security/Defenses
l10n:
  sourceCommit: f14623f12f092d92558ecb1d766069c1567fd347
---

Ces pages décrivent des fonctionnalités de la plateforme Web qui fournissent des défenses contre une ou plusieurs attaques de sécurité.

En règle générale, il existe une relation plusieurs-à-plusieurs (<i lang="en">many-to-many</i> en anglais) entre les attaques et les défenses. Dans chacun de nos [guides sur les attaques](/fr/docs/Web/Security/Attacks) nous décrivons les défenses spécifiques contre cette attaque. Dans les pages de défenses listées ci‑dessous, nous proposons un aperçu plus large de ces défenses et de leur fonctionnement.

- [Transparence des certificats](/fr/docs/Web/Security/Defenses/Certificate_Transparency)
  - : Fournit un journal public des certificats {{Glossary("TLS")}} émis, ce qui facilite la détection de ceux qui sont malveillants ou incorrectement émis.
- [Blocage du contenu mixte](/fr/docs/Web/Security/Defenses/Mixed_content)
  - : Empêche un document livré par HTTPS de charger des sous‑ressources (comme des scripts, des images ou des polices) par HTTP.
- [Validation de la saisie](/fr/docs/Web/Security/Defenses/Input_validation)
  - : Vérifie que les saisies fournies par l'utilisateur·ice correspondent à ce que le site attend.
- [Sécurité opérationnelle](/fr/docs/Web/Security/Defenses/Operational_security)
  - : Les pratiques de sécurité qui concernent les processus à suivre pour développer, construire, livrer et mettre à jour un projet.
- [Politique de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy)
  - : Restreint les manières dont le contenu chargé depuis une {{Glossary("origin")}} peut accéder au contenu chargé depuis une origine différente. Elle contrôle dans quelle mesure les sites peuvent accéder à l'état des autres.
- [Contextes sécurisés](/fr/docs/Web/Security/Defenses/Secure_Contexts)
  - : Un contexte sécurisé est une `Window` ou un `Worker` pour lequel certaines garanties d'authentification et de confidentialité sont remplies. Cela signifie généralement qu'il a été livré par {{Glossary("HTTPS")}}. Le code exécuté dans un contexte sécurisé peut utiliser des API Web puissantes qui ne sont pas disponibles dans des contextes non sécurisés.
- [Intégrité des sous-ressources](/fr/docs/Web/Security/Defenses/Subresource_Integrity)
  - : Permet à un site Web de vérifier que les scripts et feuilles de style chargés depuis une source externe (par exemple un {{Glossary("CDN")}}) contiennent le contenu attendu et n'ont pas été modifiés.
- [Sécurité de la couche transport (TLS)](/fr/docs/Web/Security/Defenses/Transport_Layer_Security)
  - : Permet à un client de communiquer de manière sécurisée avec un serveur sur un réseau non fiable. Plus notablement, sur le Web, il est utilisé pour sécuriser les connexions HTTP&nbsp;: le protocole résultant s'appelle {{Glossary("HTTPS")}}. HTTPS est la seule défense réelle contre les attaques de type [attaque du monstre du milieu (MITM)](/fr/docs/Web/Security/Attacks/MITM).
- [Activation par l'utilisateur·ice](/fr/docs/Web/Security/Defenses/User_activation)
  - : Pour protéger l'utilisateur·ice contre des sites potentiellement malveillants, certaines API puissantes ne peuvent être utilisées que lorsque l'utilisateur·ice interagit actuellement avec la page Web, ou a interagi avec la page au moins une fois depuis son chargement.
- [Accès au réseau local](/fr/docs/Web/Security/Defenses/Local_network_access)
  - : La technologie d'accès au réseau local impose des restrictions sur la capacité des sites Web à effectuer des requêtes vers le réseau local de l'utilisateur·ice, réduisant ainsi le risque d'attaques telles que les contrefaçons de requêtes inter-sites. Cet article explique comment fonctionne l'accès au réseau local et ce que les développeur·euse·s web doivent faire pour interagir avec lui.
