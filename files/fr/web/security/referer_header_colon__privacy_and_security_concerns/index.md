---
title: 'Referer header: privacy and security concerns'
slug: 'Web/Security/Referer_header:_privacy_and_security_concerns'
tags:
  - Privacy
  - Referrer Policy
  - Sécurité
  - referer
  - referrer
translation_of: 'Web/Security/Referer_header:_privacy_and_security_concerns'
---
<p>L'<a href="/fr/docs/Web/HTTP/Headers/Referer">entête HTTP Referer</a> présente des risques de confidentialité et de sécurité<a href="/fr/docs/Web/HTTP/Headers/Referer">.</a> Cet article les décrit et donne des conseils pour les minimiser.</p>

<h2 id="Le_problème...">Le problème...</h2>

<p>L'en-tête <code>{{httpheader("Referer")}}</code> (sic)  contient l'adresse de la page web précédente lorsqu'un lien vers la page actuelle a été suivi, ce qui offre de nombreuses possibilités légitimes comme l'analyse, la journalisation ou la mise en cache optimisée. Cependant, il existe des utilisations plus problématiques telles que le suivi ou le vol d'informations, ou même des effets secondaires tels que la fuite accidentelle d'informations sensibles.</p>

<p>Par exemple, considérons une page de réinitialisation de mot de passe comportant un lien vers un réseau social dans le pied de page. Si le lien a été suivi, selon la façon dont l’information a été partagée, le réseau social peut recevoir l’URL de réinitialisation du mot de passe et peut toujours être en mesure d’utiliser l’information partagée, ce qui pourrait compromettre la sécurité de l’utilisateur.</p>

<p>Selon la même logique, une image hébergée chez un tiers, mais intégrée à votre page, pourrait entrainer la fuite d'informations sensibles pour le tiers. Même si la sécurité n’est pas compromise, l’information peut ne pas être quelque chose que l’utilisateur veut partager.</p>

<h2 id="Comment_régler_ce_problème">Comment régler ce problème ?</h2>

<p>Une grande partie de ce risque peut être atténuée en concevant de manière adéquate les applications. Une application correctement conçue éliminerait ces risques en ne donnant la possibilité d'utiliser qu'une seule fois les URLs de réinitialisation, ou en associant ces URLs à un jeton utilisateur unique, et en transmettant les données sensibles par différents moyens.</p>

<p>Vous devez utiliser <code>POST</code> plutôt que <code>GET</code> dans la mesure du possible, pour éviter de transmettre des données sensibles à d’autres emplacements via des URL.</p>

<p>Vous devriez toujours utiliser <code>{{glossary("HTTPS")}}</code> pour vos sites. Cela présente de nombreux avantages en matière de sécurité, y compris le fait que les sites HTTPS ne transmettent jamais le "referer" à des sites non-HTTPS. C'est aujourd'hui de moins en moins nécessaire maintenant que la plupart des sites Web utilisent HTTPS, mais cela reste malgré tout un élément à prendre en compte.</p>

<p>De plus, vous devriez envisager de supprimer tout contenu provenant d'un tiers (ex., les widgets de réseautage social inclus dans des <code>{{htmlelement("iframe")}})</code> des zones sécurisées de vos sites Web, comme les pages de réinitialisation de mots de passe, les formulaires de paiement, les interfaces de connexion, etc.</p>

<p>Vous pouvez également atténuer ces risques en utilisant :</p>

<ul>
 <li>L’en-tête <code>{{httpheader("Referrer-Policy")}}</code> sur votre serveur pour contrôler quelle information est envoyée par l’en-tête <code>Referer</code>. Encore une fois, une directive <code>no-referrer</code> omettrait intégralement l’en-tête <code>Referer</code>.</li>
 <li>L’attribut <code>referrerpolicy</code> sur les éléments HTML qui présentent des risques de fuite d'informations (comme <code>&lt;img&gt;</code> et <code>&lt;a&gt;</code>). Cet attribut peut prendre par exemple la valeur  <code>no-referrer</code> afin d'empêcher l'envoi de l’en-tête <code>Referer</code>.</li>
 <li>L’attribut <code>rel</code> défini à <code>noreferrer</code> sur les éléments HTML à risques (comme <code>&lt;img&gt;</code> et &lt;a&gt;). Voir Types de liens et rechercher <code>noreferrer</code> pour plus d’informations.</li>
 <li>La technique de la <a href="https://geekthis.net/post/hide-http-referer-headers/#exit-page-redirect">page de sortie</a>.</li>
</ul>

<p>Les frameworks soucieux de la sécurité employés côté serveur ont tendance à inclure d'emblée des mesures d’atténuation pour résoudre ces problèmes, par exemple :</p>

<ul>
 <li>La sécurité dans Django (voir notamment Cross Site Request Forgery (CSRF) protection).</li>
 <li>helmet referrer-policy — middleware pour configurer l'entête Referrer-Policy dans les applications Node.js/Express (voir aussi helmet pour plus d'aménagements liés à la sécurité).</li>
</ul>

<h2 id="Politique_et_exigences.">Politique et exigences.</h2>

<p>Il serait pertinent de rédiger pour votre (vos) équipe(s) de projet un ensemble d’exigences en matière de sécurité et de protection des renseignements personnels en en précisant l’utilisation dans le cadre de l'atténuation des risques. Vous devriez demander l’aide d’un expert en sécurité Web pour rédiger ces exigences en tenant compte à la fois des besoins et du bien-être des utilisateurs, ainsi que d’autres questions liées à la législation et la réglementation comme le <a href="https://ec.europa.eu/info/law/law-topic/data-protection/eu-data-protection-rules_fr">Réglement Général à la Protection des Données de l'Union Européenne</a>.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="https://infosec.mozilla.org/guidelines/web_security.html#referrer-policy">Lignes directrices de l'équipe de sécurité de Mozilla sur Referrer-Policy</a></li>
</ul>
