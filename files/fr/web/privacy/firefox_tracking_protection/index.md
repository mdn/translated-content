---
title: Protection contre le pistage
slug: Web/Privacy/Firefox_tracking_protection
tags:
  - Privacy
  - Private browsing
  - blocking
  - tracking
translation_of: Web/Privacy/Tracking_Protection
original_slug: Web/Privacy/Tracking_Protection
---
## La protection contre le pistage, qu'est-ce que c'est ?

Firefox Desktop et Firefox pour Android intègrent des protections natives contre le pistage. Dans les fenêtres de navigation privée (des onglets dans Firefox pour Android), Firefox bloquera le contenu provenant de domaines qui pistent les utilisateurs sur différents sites.

Si le contenu bloqué fait partie intégrante de la page, les utilisatrices et utilisateurs peuvent remarquer des incohérences et bugs dans la mise en page aux endroits où Firefox bloque les chargements. Parfois, en revanche, on ne remarquera rien du tout, par exemple lorsque la structure de la page est telle que d'autres éléments de la page glissent pour remplir les espaces laissés par les éléments bloqués.

Lorsque Firefox bloque du contenu, on aura un message de ce type enregistré dans la Console web :

```
La ressource située à "http://telle/adresse/" a été bloqué parce que la protection contre le pistage est activée.
```

Notez qu'avec Firefox pour Android, vous pouvez accéder aux résultats de la console en utilisant un débogueur distant.

![Page d'information indiquant un potentiel contenu bloqué.](blocked_content.png)

Cliquez sur le symbole ⓘ dans la barre d'adresse pour voir les informations concernant la page actuellement chargée. La fenêtre contextuelle qui apparaît vous notifiera lorsque du contenu aura été bloqué. Si vous le souhaitez, vous aurez également la possibilité de désactiver complètement la protection contre le pistage en accédant aux réglages relatifs au pistage.

Si des cookies de pistage étaient présents, vous auriez la possibilité d'en voir la liste en cliquant sur "Bloquer les cookies de pistage" dans l'image ci-dessus pour voir la fenêtre contextuelle suivante :

![](tracking_cookies.png)

Vous pouvez cliquer sur "Gérer le contenu bloqué" pour modifier les réglages de blocage :

![](content_blocking.png)

## Comment Firefox détermine ce qui doit être bloqué ?

Le contenu est bloqué en fonction du domaine depuis lequel il est chargé.

Firefox est fourni avec une liste de sites qui ont été identifiés comme participant au pistage multi-sites des utilisateurs. Lorsque la protection contre le pistage est activée, Firefox bloque le contenu provenant des sites de cette liste.

Les sites qui suivent les utilisateurs sont la plupart du temps des annonceurs tiers et des sites d'analyse statistique.

## Qu'est-ce que cela implique pour votre site web ?

De façon évidente, cela signifie que lorsque la protection contre le pistage est activée :

- le contenu provenant de traqueurs tiers ne sera pas visible par vos utilisateurs
- votre site ne pourra pas utiliser de publicités tierces ou de services d'analyse d'audience qui font du pistage

De façon plus subtile, si d'autres parties de votre site dépendent des traqueurs utilisés, ces parties peuvent se retrouver hors d'usage lorsque la protection contre le pistage est activée. En pratique : imaginons que votre site intègre du contenu provenant d'un site qui suit les utilisateurs, et qu'un callback est lancé dès que ce contenu est chargé. Si la protection est activée, l'appel retour ne sera pas exécuté.

Par exemple, vous ne devriez pas utiliser Google Analytics de la façon suivante :

```html example-bad
<a href="http://www.exemple.com" onclick="trackLink('http://www.exemple.com', event);">
  Visiter exemple.com
</a>

<script>
function trackLink(url,event) {
  event.preventDefault();
  ga('send', 'event', 'outbound', 'click', url, {
    'transport': 'beacon',
    'hitCallback': function() {
      document.location = url;
    }
  });
}
</script>
```

Au lieu de cela, prenez en compte le cas où Google Analytics est absent, en vérifiant si l'objet `ga` a été initialisé :

```html example-good
<a href="http://www.exemple.com" onclick="trackLink('http://www.exemple.com', event);">
  Visiter exemple.com
</a>

<script>
function trackLink(url,event) {
  event.preventDefault();
  if (window.ga && ga.loaded) {
    ga('send', 'event', 'outbound', 'click', url, {
      'transport': 'beacon',
      'hitCallback': function() { document.location = url; }
    });
  } else {
      document.location = url;
  }
}
</script>
```

Pour plus d'information sur cette technique, regardez l'article sur [Google Analytics, Vie privée et Suivi d'événements](https://hacks.mozilla.org/2016/01/google-analytics-privacy-and-event-tracking/) (en anglais).

> **Note :** Dépendre d'un élément tiers de cette façon n'est dans tous les cas pas une bonne pratique, car votre site peut se retrouver hors d'usage si la partie tierce est lente ou indisponible, ou si le traqueur a été bloqué par une extension.
