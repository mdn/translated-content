---
title: Protection contre le pistage
slug: Web/Privacy/Tracking_Protection
tags:
  - Privacy
  - Private browsing
  - blocking
  - tracking
translation_of: Web/Privacy/Tracking_Protection
---

<h2 id="what_is_tracking_protection">La protection contre le pistage, qu'est-ce que c'est ?</h2>

<p>Firefox Desktop et Firefox pour Android intègrent des protections natives contre le pistage. Dans les fenêtres de navigation privée (des onglets dans Firefox pour Android), Firefox bloquera le contenu provenant de domaines qui pistent les utilisateurs sur différents sites.</p>

<p>Si le contenu bloqué fait partie intégrante de la page, les utilisatrices et utilisateurs peuvent remarquer des incohérences et bugs dans la mise en page aux endroits où Firefox bloque les chargements. Parfois, en revanche, on ne remarquera rien du tout, par exemple lorsque la structure de la page est telle que d'autres éléments de la page glissent pour remplir les espaces laissés par les éléments bloqués.</p>

<p>Lorsque Firefox bloque du contenu, on aura un message de ce type enregistré dans la Console web :</p>

<pre>La ressource située à "http://telle/adresse/" a été bloqué parce que la protection contre le pistage est activée.</pre>

<p>Notez qu'avec Firefox pour Android, vous pouvez accéder aux résultats de la console en utilisant un débogueur distant.</p>

<p><img alt="Page d'information indiquant un potentiel contenu bloqué." src="blocked_content.png"></p>

<p>Cliquez sur le symbole ⓘ dans la barre d'adresse pour voir les informations concernant la page actuellement chargée. La fenêtre contextuelle qui apparaît vous notifiera lorsque du contenu aura été bloqué. Si vous le souhaitez, vous aurez également la possibilité de désactiver complètement la protection contre le pistage en accédant aux réglages relatifs au pistage.</p>

<p>Si des cookies de pistage étaient présents, vous auriez la possibilité d'en voir la liste en cliquant sur "Bloquer les cookies de pistage" dans l'image ci-dessus pour voir la fenêtre contextuelle suivante :</p>

<p><img alt="" src="tracking_cookies.png"></p>

<p>Vous pouvez cliquer sur "Gérer le contenu bloqué" pour modifier les réglages de blocage :</p>

<p><img alt="" src="content_blocking.png"></p>

<h2 id="how_does_firefox_choose_what_to_block">Comment Firefox détermine ce qui doit être bloqué ?</h2>

<p>Le contenu est bloqué en fonction du domaine depuis lequel il est chargé.</p>

<p>Firefox est fourni avec une liste de sites qui ont été identifiés comme participant au pistage multi-sites des utilisateurs. Lorsque la protection contre le pistage est activée, Firefox bloque le contenu provenant des sites de cette liste.</p>

<p>Les sites qui suivent les utilisateurs sont la plupart du temps des annonceurs tiers et des sites d'analyse statistique.</p>

<h2 id="what_does_this_mean_for_your_website">Qu'est-ce que cela implique pour votre site web ?</h2>

<p>De façon évidente, cela signifie que lorsque la protection contre le pistage est activée :</p>

<ul>
 <li>le contenu provenant de traqueurs tiers ne sera pas visible par vos utilisateurs</li>
 <li>votre site ne pourra pas utiliser de publicités tierces ou de services d'analyse d'audience qui font du pistage</li>
</ul>

<p>De façon plus subtile, si d'autres parties de votre site dépendent des traqueurs utilisés, ces parties peuvent se retrouver hors d'usage lorsque la protection contre le pistage est activée. En pratique : imaginons que votre site intègre du contenu provenant d'un site qui suit les utilisateurs, et qu'un callback est lancé dès que ce contenu est chargé. Si la protection est activée, l'appel retour ne sera pas exécuté.</p>

<p>Par exemple, vous ne devriez pas utiliser Google Analytics de la façon suivante :</p>

<pre class="brush:html example-bad">&lt;a href="http://www.exemple.com" onclick="trackLink('http://www.exemple.com', event);"&gt;
  Visiter exemple.com
&lt;/a&gt;

&lt;script&gt;
function trackLink(url,event) {
  event.preventDefault();
  ga('send', 'event', 'outbound', 'click', url, {
    'transport': 'beacon',
    'hitCallback': function() {
      document.location = url;
    }
  });
}
&lt;/script&gt;</pre>

<p>Au lieu de cela, prenez en compte le cas où Google Analytics est absent, en vérifiant si l'objet <code>ga</code> a été initialisé :</p>

<pre class="brush:html example-good">&lt;a href="http://www.exemple.com" onclick="trackLink('http://www.exemple.com', event);"&gt;
  Visiter exemple.com
&lt;/a&gt;

&lt;script&gt;
function trackLink(url,event) {
  event.preventDefault();
  if (window.ga &amp;&amp; <span class="pl-smi">ga</span>.loaded) {
    ga('send', 'event', 'outbound', 'click', url, {
      'transport': 'beacon',
      'hitCallback': function() { document.location = url; }
    });
  } else {
      document.location = url;
  }
}
&lt;/script&gt;
</pre>

<p>Pour plus d'information sur cette technique, regardez l'article sur <a href="https://hacks.mozilla.org/2016/01/google-analytics-privacy-and-event-tracking/">Google Analytics, Vie privée et Suivi d'événements</a> (en anglais).</p>

<div class="blockIndicator note">
<p><strong>Note :</strong> Dépendre d'un élément tiers de cette façon n'est dans tous les cas pas une bonne pratique, car votre site peut se retrouver hors d'usage si la partie tierce est lente ou indisponible, ou si le traqueur a été bloqué par une extension.</p>
</div>