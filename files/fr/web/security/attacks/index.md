---
title: Attaques
slug: Web/Security/Attacks
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

En sécurité web, une attaque est une méthode spécifique qu'un·e attaquant·e utilise pour atteindre son objectif. Par exemple, si son objectif est de voler les données d'un·e utilisateur·ice, une attaque par <i lang="en">cross-site scripting</i> (<i lang="en">XSS</i>) est une méthode possible. Une attaque donnée peut être contrée par une ou plusieurs mesures d'atténuation&nbsp;: par exemple, un <i lang="en">XSS</i> peut être contré par un assainissement correct des données et la mise en œuvre d'une [politique de sécurité du contenu](/fr/docs/Web/HTTP/Guides/CSP).

Cette page retourne vers des pages qui expliquent le fonctionnement de certaines attaques courantes et la manière de les atténuer.

- [Détournement de clic (<i lang="en">clickjacking</i>)](/fr/docs/Web/Security/Attacks/Clickjacking)
  - : Dans une attaque de <i lang="en">clickjacking</i>, un·e attaquant·e crée un site leurre qui intègre le site cible à l'intérieur d'un élément {{HTMLElement("iframe")}}. Il cache un <i lang="en">iframe</i> et superpose des éléments leurres au-dessus. Lorsque l'utilisateur·ice interagit avec ces éléments leurres, il interagit en réalité avec le site cible et peut être trompé·e pour effectuer des actions non intentionnelles.
- [Contrefaçon de requête inter-site (<i lang="en">CSRF</i>)](/fr/docs/Web/Security/Attacks/CSRF)
  - : Dans une attaque par contrefaçon de requête inter-site (<i lang="en">CSRF</i>), un·e attaquant·e amène l'utilisateur·ice ou le navigateur à émettre une requête HTTP vers le site cible depuis un site malveillant. La requête inclut les informations d'identification de l'utilisateur·ice et entraîne l'exécution d'une action nuisible par le serveur, en pensant que l'utilisateur·ice l'avait voulue.
- [Fuites inter-sites (<i lang="en">XS-Leaks</i>)](/fr/docs/Web/Security/Attacks/XS-Leaks)
  - : Les fuites inter-sites (<i lang="en">XS-Leaks</i>) constituent une classe d'attaques dans laquelle le site d'un·e attaquant·e peut déduire des informations sur le site cible, ou sur la relation de l'utilisateur·ice avec le site cible, en utilisant des API de la plateforme web qui permettent aux sites d'interagir entre eux.
- [Script inter-site (<i lang="en">XSS</i>)](/fr/docs/Web/Security/Attacks/XSS)
  - : Dans une attaque par script inter-site (<i lang="en">XSS</i>), un site accepte une entrée conçue par l'attaquant·e et l'inclut par erreur dans ses propres pages d'une manière qui amène le navigateur à l'exécuter comme du code. Le code malveillant peut alors faire tout ce que le code frontal du site peut faire.
- [Référence directe non sécurisée d'objet (<i lang="en">IDOR</i>)](/fr/docs/Web/Security/Attacks/IDOR)
  - : Dans une attaque par référence directe non sécurisée d'objet (<i lang="en">IDOR</i>), l'attaquant·e profite d'un contrôle d'accès insuffisant et de l'exposition non sécurisée des identifiants d'objet, tels que les clés de base de données ou les chemins de fichiers.
- [Attaque de l'intercepteur (<i lang="en">MITM</i>)](/fr/docs/Web/Security/Attacks/MITM)
  - : Dans une attaque de l'intercepteur (<i lang="en">MITM</i>, <i lang="en">Man-in-the-Middle</i> en anglais), l'attaquant·e s'insère entre le navigateur de l'utilisateur·ice et le serveur, et peut voir et potentiellement modifier tout le trafic échangé avec HTTP.
- [Hameçonnage (<i lang="en">Phishing</i>)](/fr/docs/Web/Security/Attacks/Phishing)
  - : L'hameçonnage (<i lang="en">Phishing</i>) est une attaque de {{Glossary("social engineering", "l'ingénierie sociale")}} dans laquelle l'attaquant·e vole les {{Glossary("credential", "identifiants")}} d'un·e utilisateur·ice en le·la trompant pour lui faire croire qu'il·elle se connecte au site cible, alors qu'en réalité il·elle interagit avec un site factice contrôlé par l'attaquant·e.
- [Pollution de prototype (<i lang="en">Prototype pollution</i>)](/fr/docs/Web/Security/Attacks/Prototype_pollution)
  - : La pollution de prototype en JavaScript est une vulnérabilité où un·e attaquant·e peut ajouter ou modifier des propriétés sur le prototype d'un objet. Cela signifie que des valeurs malveillantes peuvent apparaître de manière inattendue sur les objets de votre application, conduisant souvent à des erreurs logiques ou à des attaques supplémentaires comme le [script inter-site (<i lang="en">XSS</i>)](/fr/docs/Web/Security/Attacks/XSS).
- [Falsification de requêtes côté serveur (<i lang="en">SSRF</i>)](/fr/docs/Web/Security/Attacks/SSRF)
  - : La falsification de requêtes côté serveur (<i lang="en">SSRF</i>) est une vulnérabilité qui permet à un·e attaquant·e d'émettre des requêtes HTTP (ou autres requêtes réseau) vers des destinations arbitraires. Les requêtes SSRF proviennent du serveur lui-même, qui dispose généralement d'un accès plus large que celui d'un client externe.
- [Prise de contrôle de sous-domaine](/fr/docs/Web/Security/Attacks/Subdomain_takeover)
  - : Dans une attaque par prise de contrôle de sous-domaine, l'attaquant·e prend le contrôle d'un sous-domaine d'un domaine cible.
- [Attaques de la chaîne d'approvisionnement](/fr/docs/Web/Security/Attacks/Supply_chain_attacks)
  - : Dans une attaque de la chaîne d'approvisionnement, l'attaquant·e compromet une partie de la chaîne d'approvisionnement du site, comme les dépendances tierces qu'il utilise.
