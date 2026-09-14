---
title: Détournement de clic
slug: Web/Security/Attacks/Clickjacking
l10n:
  sourceCommit: d67650e38cd150ce190e5116355fcb362eb759bd
---

Dans une attaque par **détournement de clic** (<i lang="en">clickjacking</i> en anglais), un·e attaquant·e trompe l'utilisateur·ice pour qu'il·elle interagisse avec un site cible d'une manière qui n'est pas prévue.

Pour ce faire, l'attaquant·e crée un site leurre qui intègre le site cible de l'utilisateur·ice à l'intérieur d'un élément HTML {{HTMLElement("iframe")}}. Le site de l'attaquant·e cache cet `<iframe>` et aligne certains éléments leurres de manière à ce qu'ils apparaissent au même endroit que les éléments du site cible qui déclenchent des actions sensibles. Lorsque l'utilisateur·ice tente d'interagir avec ces éléments leurres, il·elle interagit involontairement avec le site cible et peut être amené·e à effectuer des actions sur le site cible qu'il·elle n'avait pas l'intention de réaliser.

## Exemple de détournement de clic

Supposons que le site web de la banque de l'utilisateur·ice soit `https://ma-banque.example.com`. L'utilisateur·ice reste généralement connecté·e à ce site. Pour simplifier, disons que le site a une page avec un bouton qui transfère tous les fonds de l'utilisateur·ice à l'attaquant·e — bien que cela soit évidemment irréaliste, il est plausible que le site ait des éléments interactifs qui effectuent des opérations sensibles.

![Capture d'écran du site web d'une banque, montrant un bouton « Transférer tout mon argent ? »](my-bank.png)

L'attaquant·e crée une page web qui contient&nbsp;:

- un élément HTML {{HTMLElement("button")}} dont le contenu incite l'utilisateur·ice à cliquer dessus
- un élément HTML {{HTMLElement("iframe")}} intégrant la page de la banque.

```html
<button id="faux-bouton">Cliquez ici pour un chaton gratuit&nbsp;!</button>
<iframe width="800" height="200" src="https://ma-banque.example.com"></iframe>
```

Dans le CSS de la page, l'attaquant·e&nbsp;:

- cache le `<iframe>`, par exemple en réglant son opacité ({{CSSxRef("opacity")}}) à zéro
- positionne le bouton de manière à ce qu'il se trouve au même endroit que le bouton «&nbsp;Transférer tout mon argent&nbsp;?&nbsp;».

```css
iframe {
  opacity: 0;
}

#faux-bouton {
  position: absolute;
  top: 185px;
  left: 90px;
}
```

Le résultat ressemble à ceci (nous avons réglé l'opacité du `<iframe>` à `0.1`, afin que vous puissiez voir la superposition)&nbsp;:

![Capture d'écran d'un site web de détournement de clic, montrant le site web de la banque intégré.](attacker.png)

Si l'utilisateur·ice clique sur «&nbsp;Cliquez ici pour un chaton gratuit&nbsp;!&nbsp;», il·elle clique en réalité sur le bouton invisible «&nbsp;Transférer tout votre argent&nbsp;?&nbsp;» du site web de la banque. Si l'utilisateur·ice est déjà connecté·e, alors la requête que cela envoie au serveur de la banque inclut les véritables identifiants de l'utilisateur·ice, et la requête réussit.

## Défenses contre le détournement de clic

### Restreindre l'intégration

Le détournement de clic dépend du fait que le site web cible soit intégré dans le site leurre de l'attaquant·e à l'intérieur d'un `<iframe>`. La principale défense consiste à interdire ou au moins à restreindre cette capacité.

Il existe deux outils pertinents ici&nbsp;:

- La [directive `frame-ancestors`](/fr/docs/Web/HTTP/Guides/CSP#clickjacking_protection) dans une [politique de sécurité du contenu](/fr/docs/Web/HTTP/Guides/CSP). Avec cette directive, vous pouvez contrôler exactement quels autres documents sont autorisés à intégrer le vôtre.
- L'en-tête de réponse {{HTTPHeader("X-Frame-Options")}}. Cet en-tête est moins précis&nbsp;: il vous permet simplement de désactiver complètement l'intégration, ou de l'autoriser uniquement pour les documents [même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy).

La directive `frame-ancestors` remplace `X-Frame-Options`. En définissant à la fois `X-Frame-Options` et `frame-ancestors`, vous pouvez empêcher l'intégration dans les navigateurs qui ne prennent pas en charge `frame-ancestors`. Comme [la prise en charge de `frame-ancestors` par les navigateurs est très bonne](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors#compatibilité_des_navigateurs), ce n'est pas un problème majeur.

Si `frame-ancestors` et `X-Frame-Options` sont toutes les deux définies, alors les navigateurs qui prennent en charge `frame-ancestors` ignorent `X-Frame-Options`.

### Restreindre les cookies inter-sites

Comme mesure d'atténuation partielle supplémentaire, les sites doivent définir l'attribut de cookie [`SameSite`](/fr/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) pour les cookies de session sur `Lax` ou `Strict`. Les requêtes provenant de contextes intégrés tels que les éléments `<iframe>` qui ne sont pas {{Glossary("Site", "le même site")}} avec le document de niveau supérieur n'incluent pas ces cookies, et le serveur ne considère donc pas la requête comme provenant d'un·e utilisateur·ice connecté·e.

## Liste de contrôle récapitulative de la défense

- Définir la directive CSP [`frame-ancestors`](/fr/docs/Web/HTTP/Guides/CSP#clickjacking_protection) et l'en-tête de réponse HTTP {{HTTPHeader("X-Frame-Options")}}, afin d'empêcher d'autres sites d'intégrer votre site en tant que `<iframe>`, ou de contrôler strictement quels sites peuvent l'intégrer.

- Définir l'attribut de cookie [`SameSite`](/fr/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) pour les cookies de session sur `Lax` ou `Strict`.

## Voir aussi

- [Antisèche sur la défense contre le détournement de clic <sup>(angl.)</sup>](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html) sur [owasp.org <sup>(angl.)</sup>](https://owasp.org/)
