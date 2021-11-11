---
title: Développement web mobile
slug: Web/Guide/Mobile
translation_of: Web/Guide/Mobile
---
<p>Cette page fournit un aperçu de certaines des techniques principales nécessaires pour concevoir des sites web qui fonctionneront bien sur les appareils mobiles. Si vous cherchez des informations sur le projet Firefox OS de Mozilla, consultez la page <a href="/fr/Firefox_OS">Firefox OS</a>. Des détails sur <a href="/fr/docs/Mozilla/Firefox_pour_Android" title="Firefox pour Android">Firefox pour Android</a> pourraient également vous intéresser.</p>
<p>Cette page est divisée en deux sections, <a href="#Conception_pour_les_appareils_mobiles">conception pour les appareils mobiles</a> et <a href="#D.C3.A9veloppement_multinavigateur">développement multinavigateur</a>. Consultez également le guide de Jason Grlicky <a href="/fr/docs/Web_Development/Mobile/Mobile-friendliness">mobile-friendliness</a> pour les développeurs web.</p>
<h2 id="Conception_pour_les_appareils_mobiles">Conception pour les appareils mobiles</h2>
<p>Les appareils mobiles ont des caractéristiques physiques assez différentes des ordinateurs portables ou de bureau. Leurs écrans sont généralement plus petits, évidemment, mais ils changent aussi automatiquement l'orientation de l'écran entre portrait et paysage lorsque l'utilisateur les tourne. Ils disposent généralement d'écrans tactiles pour les manipuler. Des API comme la géolocalisation ou l'orientation de l'appareil ne sont pas toujours gérées sur un ordinateur ou y sont beaucoup moins utiles, alors qu'elles donnent aux utilisateurs mobiles de nouvelles manières d'interagir avec votre site.</p>
<h3 id="Gestion_des_petits_écrans">Gestion des petits écrans</h3>
<p>Le <a href="/fr/docs/Développement_Web/Design_web_Responsive">Responsive Web Design</a> est un terme pour un ensemble de techniques permettant à votre site web d'adapter sa disposition lorsque son environnement change ; en particulier la taille et l'orientation de l'écran. Parmi ces techniques :</p>
<ul>
 <li>les mises en page CSS fluides, pour permettre à la page de s'adapter progressivement lorsque la taille de la fenêtre de navigation change ;</li>
 <li>l'utilisation de <a href="/fr/docs/CSS/Media_queries">media queries</a> pour inclure des règles CSS conditionnelles appropriées pour la <a href="/fr/docs/CSS/Media_queries#width">largeur</a> et la <a href="/fr/docs/CSS/Media_queries#height">hauteur</a> de l'écran.</li>
</ul>
<p>La <a href="/fr/docs/Mozilla/Mobile/Balise_meta_viewport">balise meta <em>viewport</em></a> indique au navigateur d'afficher votre site à l'échelle appropriée pour l'appareil de l'utilisateur.</p>
<h3 id="Gestion_des_écrans_tactiles">Gestion des écrans tactiles</h3>
<p>Pour utiliser un écran tactile, vous devrez travailler avec les <a href="/fr/docs/Web/Guide/DOM/Events/Touch_events">évènements DOM Touch</a>. Vous n'aurez pas la possibilité d'utiliser la pseudo-classe <a href="/fr/docs/CSS/:hover">CSS :hover</a> et devrez concevoir les éléments cliquables comme les boutons de manière à prendre en compte le fait que les doigts sont plus gros qu'un pointeur de souris. Consultez cet article concernant la <a class="external" href="http://www.whatcreative.co.uk/blog/tips/designing-for-touch-screen/">conception pour écrans tactiles</a>.</p>
<p>Vous pouvez utiliser la media query <a href="/fr/docs/CSS/Media_queries#-moz-touch-enabled">-moz-touch-enabled</a> pour charger un style CSS différent sur un appareil tactile.</p>
<h3 id="Optimisation_des_images">Optimisation des images</h3>
<p>Pour aider les utilisateurs dont les appareils ont une bande passante faible ou coûteuse, vous pouvez optimiser les images en ne chargeant que celles qui sont appropriées pour la taille et la résolution de l'écran. Ceci peut se faire en CSS selon la <a href="/fr/docs/CSS/Media_queries#height">hauteur</a>, la <a href="/fr/docs/CSS/Media_queries#width">largeur</a> et la <a href="/fr/docs/CSS/Media_queries#-moz-device-pixel-ratio">densité en pixels</a>.</p>
<p>Il est également possible d'utiliser des propriétés CSS pour concevoir des effets visuels comme des <a href="/fr/docs/CSS/Utilisation_de_dégradés_CSS">dégradés</a> et des <a href="/fr/docs/CSS/box-shadow">ombres</a> sans utiliser d'images.</p>
<h3 id="API_mobiles">API mobiles</h3>
<p>Enfin, vous pourrez tirer partir des nouvelles possibilités offertes par les appareils mobiles, comme l'<a href="/fr/docs/WebAPI/Detecting_device_orientation">orientation</a> et la <a href="/fr/docs/Using_geolocation">géolocalisation</a>.</p>
<h2 id="Développement_multinavigateur">Développement multinavigateur</h2>
<h3 id="Écriture_de_code_multinavigateur">Écriture de code multinavigateur</h3>
<p>Pour créer des sites web qui fonctionneront de manière acceptable sur différents navigateurs mobiles :</p>
<ul>
 <li>Essayez d'éviter les fonctionnalités spécifiques à un navigateur, comme les propriétés CSS préfixées par le moteur de rendu.</li>
 <li>Si vous avez besoin de ces fonctionnalités, vérifiez si d'autres navigateurs disposent de leurs propres versions de ces fonctionnalités, et traitez-les de la même manière.</li>
 <li>Pour les navigateurs qui ne gèrent pas du tout ces fonctionnalités, fournissez une alternative acceptable.</li>
</ul>
<p>Par exemple, si vous prévoyez un fond avec dégradé de couleurs sur une zone de texte avec une propriété préfixée comme <code>-webkit-linear-gradient</code>, il est préférable d'ajouter les autres versions préfixées de la propriété <a href="/fr/docs/CSS/linear-gradient">linear-gradient</a>. Si vous ne le faites pas, assurez-vous au moins que le fond par défaut offre un bon contraste avec le texte : de cette manière la page sera au moins utilisable dans un navigateur qui n'est pas visé par votre règle <code>linear-gradient</code>.</p>
<p>Consultez cette <a href="/fr/docs/Web/CSS/Reference/Mozilla_Extensions">liste des propriétés spécifiques à Gecko</a>, cette liste de <a href="/fr/docs/Web/CSS/Reference/Webkit_Extensions">propriétés spécifiques à WebKit</a>, ainsi que le tableau de Peter Beverloo des <a class="external" href="http://peter.sh/experiments/vendor-prefixed-css-property-overview/">propriétés spécifiques des moteurs de rendu des navigateurs</a>.</p>
<p>Vous pouvez vous aider d'outils comme <a class="external" href="http://csslint.net/">CSS Lint</a> pour trouver des problèmes de ce genre dans votre code, et de préprocesseurs comme <a class="external" href="http://sass-lang.com/">SASS</a> et <a class="external" href="http://lesscss.org/">LESS</a> pour produire du code multinavigateur.</p>
<h3 id="Attention_avec_la_détection_d'agent_utilisateur">Attention avec la détection d'agent utilisateur</h3>
<p>Il est préférable que les sites web détectent des fonctionnalités spécifiques de l'appareil comme sa taille d'écran et ses capacités tactiles à l'aide des techniques listées ci-dessus, et s'y adaptent en conséquence. Mais parfois ce n'est pas possible et certains sites ont recours à la chaîne d'identification d'agent utilisateur (user agent) pour essayer de faire la distinction entre ordinateurs de bureau, tablettes et téléphones afin de servir un type de contenu différent à chaque type d'appareil.</p>
<p>Si vous faites cela, assurez-vous que votre algorithme est correct et que vous ne fournissez pas le mauvais type de contenu à un appareil parce que vous ne traitez pas la chaîne d'identification d'un navigateur particulier. Consultez ce <a href="/fr/docs/Browser_detection_using_the_user_agent#Mobile.2C_Tablet_or_Desktop">guide d'utilisation de la chaîne user agent pour déteminer le type d'appareil</a>.</p>
<h3 id="Test_sur_plusieurs_navigateurs">Test sur plusieurs navigateurs</h3>
<p>Testez votre site web sur plusieurs navigateurs. Cela veut dire aussi tester sur plusieurs plateformes — au moins iOS et Android.</p>
<ul>
 <li>testez Safari sur l'iPhone avec <a class="link-https" href="https://developer.apple.com/devcenter/ios/index.action">iOS simulator</a></li>
 <li>testez Opera et Firefox avec le <a class="link-https" href="https://developer.android.com/sdk/index.html">SDK Android</a>. Consultez ces instructions pour <a class="link-https" href="https://wiki.mozilla.org/Mobile/Fennec/Android/Emulator">lancer Firefox pour Android avec l'émulateur Android</a>.</li>
</ul>
