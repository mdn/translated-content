---
title: Attaques
slug: Web/Security/Attacks
l10n:
  sourceCommit: df8445288d6a7c39ef7d7c711af2189790b23831
---

En sécurité web, une attaque est une méthode spécifique qu'un·e attaquant·e utilise pour atteindre son objectif. Par exemple, si son objectif est de voler les données d'un·e utilisateur·ice, une attaque par <i lang="en">cross-site scripting</i> (<i lang="en">XSS</i>) est une méthode possible. Une attaque donnée peut être contrée par une ou plusieurs mesures d'atténuation&nbsp;: par exemple, un <i lang="en">XSS</i> peut être contré par un assainissement correct des données et la mise en œuvre d'une [politique de sécurité du contenu](/fr/docs/Web/HTTP/Guides/CSP).

Cette page renvoie vers des pages qui expliquent le fonctionnement de certaines attaques courantes et la manière de les atténuer.

- [Détournement de clic (<i lang="en">clickjacking</i>)](/fr/docs/Web/Security/Attacks/Clickjacking)
  - : Dans une attaque de <i lang="en">clickjacking</i>, un·e attaquant·e crée un site leurre qui intègre le site cible à l'intérieur d'un élément {{htmlelement("iframe")}}. Iel cache l'<i lang="en">iframe</i> et superpose des éléments leurres au-dessus. Lorsque l'utilisateur·ice interagit avec ces éléments leurres, iel interagit en réalité avec le site cible et peut être trompé·e pour effectuer des actions non intentionnelles.
- [Contrefaçon de requête intersite (<i lang="en">CSRF</i>)](/fr/docs/Web/Security/Attacks/CSRF)
  - : Dans une attaque par contrefaçon de requête intersite (<i lang="en">CSRF</i>), un·e attaquant·e amène l'utilisateur·ice ou le navigateur à émettre une requête HTTP vers le site cible depuis un site malveillant. La requête inclut les informations d'identification de l'utilisateur·ice et entraîne l'exécution d'une action nuisible par le serveur, en pensant que l'utilisateur·ice l'avait voulue.
- [Fuites intersites (<i lang="en">XS-Leaks</i>)](/fr/docs/Web/Security/Attacks/XS-Leaks)
  - : Les fuites intersites (<i lang="en">XS-Leaks</i>) constituent une classe d'attaques dans laquelle le site d'un·e attaquant·e peut déduire des informations sur le site cible, ou sur la relation de l'utilisateur·ice avec le site cible, en utilisant des API de la plateforme web qui permettent aux sites d'interagir entre eux.
- [Script intersite (<i lang="en">XSS</i>)](/fr/docs/Web/Security/Attacks/XSS)
  - : Dans une attaque par script intersite (<i lang="en">XSS</i>), un site accepte une entrée conçue par l'attaquant·e et l'inclut par erreur dans ses propres pages d'une manière qui amène le navigateur à l'exécuter comme du code. Le code malveillant peut alors faire tout ce que le code frontal du site pourrait faire.
- [Attaque de l'intercepteur (<i lang="en">MITM</i>)](/fr/docs/Web/Security/Attacks/MITM)
  - : Dans une attaque de l'intercepteur (<i lang="en">MITM</i>, <i lang="en">Man-in-the-Middle</i> en anglais), l'attaquant·e s'insère entre le navigateur de l'utilisateur·ice et le serveur, et peut voir et potentiellement modifier tout le trafic échangé via HTTP.
- [Prise de contrôle de sous-domaine](/fr/docs/Web/Security/Attacks/Subdomain_takeover)
  - : Dans une attaque par prise de contrôle de sous-domaine, l'attaquant·e prend le contrôle d'un sous-domaine d'un domaine cible.
