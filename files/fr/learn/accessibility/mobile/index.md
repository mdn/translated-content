---
title: Accessibilité mobile
slug: Learn/Accessibility/Mobile
tags:
  - Accessibilité
  - Article
  - Débutant
  - Mobile
  - responsive
  - toucher
translation_of: Learn/Accessibility/Mobile
original_slug: Apprendre/a11y/Mobile
---
<div>
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/Accessibility/Multimedia","Learn/Accessibility/Accessibility_troubleshooting", "Learn/Accessibility")}}</div>

<p>L'accès Web sur les appareils mobiles étant si populaire et les plates-formes populaires telles qu'IOS et Android disposant d'outils d'aide à l'accessibilité complets, il est important de prendre en compte l'accessibilité de votre contenu Web sur ces plates-formes. Cet article examine les considérations relatives à l'accessibilité spécifiques aux mobiles.</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row">Prerequisites:</th>
   <td>Connaissances de base en informatique, compréhension de base de HTML, CSS et JavaScript et compréhension de la  <a href="/fr/docs/Learn/Accessibility">previous articles in the course</a>.</td>
  </tr>
  <tr>
   <th scope="row">Objective:</th>
   <td>Comprendre quels problèmes d'accessibilité existent sur les appareils mobiles et comment les résoudre.</td>
  </tr>
 </tbody>
</table>

<h2 id="Accessibilité_sur_les_appareils_mobiles">Accessibilité sur les appareils mobiles</h2>

<p>L’état de l’accessibilité - et la prise en charge des normes Web en général - est bon pour les appareils mobiles modernes. Le temps où les appareils mobiles utilisaient des technologies Web complètement différentes des navigateurs de bureau, forçait les développeurs à utiliser le sniffing de navigateur et à leur servir des sites complètement séparés (même si de nombreuses entreprises détectent encore l'utilisation d'appareils mobiles et leur servent un domaine distinct).</p>

<p>De nos jours, les appareils mobiles en général peuvent gérer des sites Web "complets", et les principales plates-formes ont même des lecteurs d'écran intégrés pour permettre aux utilisateurs malvoyants de les utiliser avec succès. Les navigateurs mobiles modernes ont tendance à avoir un bon support pour  <a href="/fr/docs/Learn/Accessibility/WAI-ARIA_basics">WAI-ARIA</a>, aussi</p>

<p>Pour rendre un site Web accessible et utilisable sur mobile, il vous suffit de suivre les bonnes pratiques générales en matière de conception de sites Web et d'accessibilité.</p>

<p>Certaines exceptions nécessitent une attention particulière pour le mobile; les principaux sont:</p>

<ul>
 <li>Mécanismes de contrôle - Assurez-vous que les commandes d'interface, telles que les boutons, sont accessibles sur les téléphones mobiles (c'est-à-dire principalement les écrans tactiles), ainsi que sur les ordinateurs de bureau / portables (principalement les souris et les claviers).</li>
 <li>Saisie utilisateur - Rendez les exigences de saisie utilisateur aussi simples que possible sur mobile (par exemple, dans les formulaires, réduisez au minimum la saisie).</li>
 <li>Conception réactive - Assurez-vous que les mises en page fonctionnent sur le mobile, conservez la taille des téléchargements d'images et réfléchissez à la fourniture d'images pour les écrans haute résolution.</li>
</ul>

<h2 id="Résumé_des_tests_de_lecteur_d'écran_sur_Android_et_iOS">Résumé des tests de lecteur d'écran sur Android et iOS</h2>

<p>Les plates-formes mobiles les plus courantes disposent de lecteurs d’écran entièrement fonctionnels. Celles-ci fonctionnent à peu près de la même manière que les lecteurs d’écran de bureau, sauf qu’elles sont largement utilisées avec des gestes tactiles plutôt que des combinaisons de touches.</p>

<p>Regardons les deux principaux: TalkBack sur Android et VoiceOver sur iOS.</p>

<h3 id="Android_TalkBack">Android TalkBack</h3>

<p>Le lecteur d’écran TalkBack est intégré au système d’exploitation Android.</p>

<p>Pour l'activer, sélectionnez Paramètres&gt; Accessibilité&gt; TalkBack, puis appuyez sur le curseur pour l'activer. Suivez toute invite supplémentaire à l'écran qui vous est présentée.</p>

<p><strong>Note:</strong>  Les anciennes versions de TalkBack sont activées dans <a href="https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback">slightly different ways</a>.</p>

<p>Lorsque TalkBack est activé, les commandes de base de votre appareil Android seront un peu différentes. Par exemple:</p>

<ol>
 <li>Une simple pression sur une application la sélectionne et l'appareil lit en quoi elle consiste.</li>
 <li>Glisser vers la gauche ou la droite permet de se déplacer entre les applications, ou les boutons / contrôles si vous êtes dans une barre de contrôle. L'appareil lira chaque option.</li>
 <li>Double-cliquer n'importe où ouvrira l'application / sélectionner l'option.</li>
 <li>Vous pouvez également "explorer par le toucher" - maintenez votre doigt appuyé sur l'écran et faites-le glisser, et votre appareil lira les différentes applications / éléments que vous déplacez.</li>
</ol>

<p>Si vous souhaitez désactiver TalkBack:</p>

<ol>
 <li>Accédez à votre application Paramètres en utilisant les gestes ci-dessus.</li>
 <li>Accédez à Accessibilité&gt; TalkBack .</li>
 <li>Accédez au commutateur et activez-le pour le désactiver. .</li>
</ol>

<p><strong>Note:</strong> Vous pouvez accéder à votre écran d'accueil à tout moment en glissant vers le haut et à gauche dans un mouvement fluide. Si vous avez plus d'un écran d'accueil, vous pouvez passer d'un écran à l'autre en faisant glisser deux doigts vers la gauche et vers la droite. .</p>

<p>Pour une liste plus complète des gestes TalkBack, voir  <a href="https://support.google.com/accessibility/android/answer/6151827">Use TalkBack gestures</a>.</p>

<h4 id="Déverrouiller_le_téléphone">Déverrouiller le téléphone</h4>

<p>Lorsque TalkBack est activé, le déverrouillage du téléphone est un peu différent.</p>

<p>Vous pouvez balayer deux doigts à partir du bas de l'écran de verrouillage. Si vous avez défini un code d'accès ou un modèle pour déverrouiller votre appareil, vous serez redirigé vers l'écran de saisie approprié pour le saisir.</p>

<p>Vous pouvez également explorer en touchant le bouton <em>Déverrouiller</em> en bas au centre de l'écran, puis en appuyant deux fois.</p>

<h4 id="Menus_globaux_et_locaux">Menus globaux et locaux</h4>

<p>TalkBack vous permet d'accéder aux menus contextuels globaux et locaux, où que vous ayez navigué sur l'appareil. Le premier fournit des options globales relatives à l'appareil dans son ensemble, et le second fournit des options relatives uniquement à l'application / à l'écran actuel.</p>

<h4 id="Pour_accéder_à_ces_menus"><strong>Pour accéder à ces menus</strong>:</h4>

<ol>
 <li>Accédez au menu global en glissant rapidement vers le bas, puis à droite .</li>
 <li>Accédez au menu local en balayant rapidement vers le haut, puis à droite.</li>
 <li>Balayez vers la gauche et la droite pour naviguer entre les différentes options. .</li>
 <li>Une fois que vous avez sélectionné l'option de votre choix, double-cliquez dessus pour la choisir.</li>
</ol>

<p>Pour plus de détails sur toutes les options disponibles dans les menus contextuels global et local, voir  <a href="https://support.google.com/accessibility/android/answer/6007066">Use global and local context menus</a>.</p>

<h4 id="Parcourir_des_pages_Web">Parcourir des pages Web</h4>

<p>Vous pouvez utiliser le menu contextuel local dans un navigateur Web pour rechercher des options permettant de naviguer dans des pages Web en utilisant uniquement les en-têtes, les contrôles de formulaire ou les liens, ou de naviguer ligne par ligne, etc.</p>

<p>Par exemple, avec TalkBack activé:</p>

<ol>
 <li>Ouvrez votre navigateur web.</li>
 <li>Activer la barre d'URL.</li>
 <li>Entrez une page Web comportant de nombreux en-têtes, telle que la page de couverture de bbc.co.uk. Pour entrer le texte de l'URL:
  <ul>
   <li>Sélectionnez la barre d’URL en glissant gauche / droite jusqu’à ce que vous y arriviez, puis en double tapant .</li>
   <li>Maintenez votre doigt appuyé sur le clavier virtuel jusqu'à obtenir le caractère souhaité, puis relâchez-le pour le saisir. Répétez pour chaque caractère.</li>
   <li>Une fois que vous avez terminé, trouvez la touche Entrée et appuyez dessus.</li>
  </ul>
 </li>
 <li>Balayez vers la gauche et la droite pour vous déplacer entre différents éléments de la page. .</li>
 <li>Faites glisser votre doigt vers le haut et vers la droite avec un mouvement fluide pour accéder au menu de contenu local.</li>
 <li>Balayez vers la droite jusqu'à ce que vous trouviez l'option "En-têtes et points de repère".</li>
 <li>Appuyez deux fois pour le sélectionner. Vous pouvez maintenant glisser à gauche et à droite pour vous déplacer entre les rubriques et les points de repère ARIA.</li>
 <li>Pour revenir au mode par défaut, entrez de nouveau dans le menu contextuel local en balayant l'écran vers le haut, le curseur à droite, sélectionnez "Par défaut", puis tapez deux fois pour l'activer.</li>
</ol>

<p><strong>Note:</strong>  Voir   aussi <a href="https://support.google.com/accessibility/android/answer/6283677?hl=en&amp;ref_topic=3529932">Get started on Android with TalkBack</a> pour obtenir une documentation plus complète.</p>

<h3 id="iOS_VoiceOver">iOS VoiceOver</h3>

<p>Une version mobile de VoiceOver est intégrée au système d'exploitation iOS.</p>

<p>Pour l'activer, accédez à l'application <em>Paramètres</em>, puis sélectionnez <em>Général</em> &gt; <em>Accessibilité</em> &gt; <em>VoiceOver</em>. Appuyez sur le curseur <em>VoiceOver</em> pour l'activer (vous verrez également un certain nombre d'autres options liées à <em>VoiceOver</em> sur cette page).</p>

<p>Une fois que VoiceOver est activé, les gestes de contrôle de base de l'iOS seront un peu différents :</p>

<ol>
 <li>Un simple tapement entraînera la sélection de l'élément sur lequel vous appuyez; votre appareil parlera de l'élément sur lequel vous avez tapé.</li>
 <li>Vous pouvez également parcourir les éléments à l’écran en balayant vers la gauche ou vers la droite pour les déplacer, ou en faisant glisser votre doigt sur l’écran pour naviguer entre les différents éléments (lorsque vous trouvez l’élément souhaité, vous pouvez le retirer pour le sélectionner).</li>
 <li>Pour activer l'élément sélectionné (par exemple, ouvrir une application sélectionnée), appuyez deux fois n'importe où sur l'écran.</li>
 <li>Faites glisser votre doigt avec trois doigts pour faire défiler une page.</li>
 <li>Appuyez avec deux doigts pour effectuer une action liée au contexte - par exemple, prendre une photo alors que vous êtes dans l'application Appareil photo.</li>
</ol>

<p>Pour le désactiver à nouveau, revenez à <em>Paramètres</em>&gt; <em>Général</em>&gt; <em>Accessibilité</em>&gt; <em>VoiceOver</em> en utilisant les gestes ci-dessus, puis basculez le curseur <em>VoiceOver</em> sur Désactivé.</p>

<h4 id="Déverrouiller_le_téléphone_2">Déverrouiller le téléphone</h4>

<p>Pour déverrouiller le téléphone, vous devez appuyer sur le bouton d'accueil (ou balayer) comme d'habitude. Si vous avez défini un code d'authentification, vous pouvez sélectionner chaque numéro en balayant / glissant (comme expliqué ci-dessus), puis en appuyant deux fois pour entrer chaque numéro lorsque vous avez trouvé le bon.</p>

<h4 id="Utiliser_le_rotor">Utiliser le rotor</h4>

<p>Lorsque VoiceOver est activé, vous disposez d'une fonction de navigation appelée Rotor, qui vous permet de choisir rapidement parmi un certain nombre d'options utiles courantes. Pour l'utiliser:</p>

<ol>
 <li>Tournez deux doigts sur l’écran comme si vous tourniez un cadran. Chaque option sera lue à voix haute au fur et à mesure que vous tournez. Vous pouvez aller et venir pour parcourir les options.</li>
 <li>Une fois que vous avez trouvé l'option que vous voulez:
  <ul>
   <li>Relâchez vos doigts pour le sélectionner.</li>
   <li>S'il s'agit d'une option dont vous pouvez parcourir la valeur (telle que le volume ou la vitesse de parole), vous pouvez effectuer un balayage vers le haut ou le bas pour augmenter ou diminuer la valeur de l'élément sélectionné.</li>
  </ul>
 </li>
</ol>

<p>Les options disponibles sous Rotor dépendent du contexte. Elles diffèrent en fonction de l'application ou de la vue dans laquelle vous vous trouvez (voir l'exemple ci-dessous).</p>

<h4 id="Parcourir_des_pages_Web_2">Parcourir des pages Web</h4>

<p>Essayons la navigation Web avec VoiceOver:</p>

<ol>
 <li>Ouvrez votre navigateur web.</li>
 <li>Activer la barre d'URL.</li>
 <li>Entrez une page Web comportant de nombreux en-têtes, telle que la page de couverture de bbc.co.uk. Pour entrer le texte de l'URL:
  <ul>
   <li>Sélectionnez la barre d’URL en glissant gauche / droite jusqu’à ce que vous y arriviez, puis en double-tapant.</li>
   <li>Pour chaque caractère, maintenez votre doigt appuyé sur le clavier virtuel jusqu'à ce que vous obteniez le caractère souhaité, puis relâchez votre doigt pour le sélectionner. Appuyez deux fois pour le taper.</li>
   <li>Une fois que vous avez terminé, trouvez la touche Entrée et appuyez dessus.</li>
  </ul>
 </li>
 <li>Balayez vers la gauche et la droite pour vous déplacer entre les éléments de la page. Vous pouvez appuyer deux fois sur un élément pour le sélectionner (par exemple, suivre un lien).</li>
 <li>Par défaut, l’option de rotor sélectionnée sera Speaking Rate; vous pouvez actuellement balayer de haut en bas pour augmenter ou diminuer le débit.</li>
 <li>Maintenant, tournez deux doigts autour de l'écran comme un cadran pour afficher le rotor et passez d'une option à l'autre. Voici quelques exemples d'options disponibles:
  <ul>
   <li><em>Taux de parole</em> : Modifiez le taux de parole.</li>
   <li><em>Conteneurs </em>: déplacez-vous entre différents conteneurs sémantiques de la page.</li>
   <li><em>En-têtes </em>: déplacez-vous entre les en-têtes de la page.</li>
   <li><em>Liens</em> : permet de se déplacer entre les liens de la page.</li>
   <li><em>Contrôles de formulaire </em>: déplacez-vous entre les contrôles de formulaire de la page.</li>
   <li><em>Langue</em> : déplacez-vous entre différentes traductions, si elles sont disponibles.</li>
  </ul>
 </li>
 <li>S<em>électionnez les en-têtes</em>. Vous pouvez maintenant glisser de haut en bas pour vous déplacer entre les titres de la page.</li>
</ol>

<p><strong>Note:</strong>  Pour une référence plus complète couvrant les gestes VoiceOver disponibles et d'autres astuces sur le test d'accessibilité sur iOS, voir  aussi <a href="https://developer.apple.com/library/content/technotes/TestingAccessibilityOfiOSApps/TestAccessibilityonYourDevicewithVoiceOver/TestAccessibilityonYourDevicewithVoiceOver.html#//apple_ref/doc/uid/TP40012619-CH3">Test Accessibility on Your Device with VoiceOver</a>.</p>

<h2 id="Mécanismes_de_contrôle">Mécanismes de contrôle</h2>

<p>Dans notre article relatif à l'accessibilité CSS et JavaScript, nous avons examiné l'idée d'événements spécifiques à un certain type de mécanisme de contrôle  (see <a href="/fr/docs/Learn/Accessibility/CSS_and_JavaScript#mouse-specific_events">Mouse-specific events</a>). En résumé, cela pose des problèmes d'accessibilité car d'autres mécanismes de contrôle ne peuvent pas activer la fonctionnalité associée.</p>

<p>Par exemple, l'événement   <a href="/fr/docs/Web/API/GlobalEventHandlers/onclick">click</a>  est bon en termes d'accessibilité - un gestionnaire d'événements associé peut être appelé en cliquant sur l'élément sur lequel il est défini, en le sélectionnant et en appuyant sur Entrée / Retour ou en le tapant sur un périphérique à écran tactile. Essayez notre <a href="https://github.com/mdn/learning-area/blob/master/accessibility/mobile/simple-button-example.html">simple-button-example.html</a> exemple (<a href="http://mdn.github.io/learning-area/accessibility/mobile/simple-button-example.html">see it running live</a>) pour voir ce que nous entendons. .</p>

<p>Sinon, des événements spécifiques à la souris, tels que   <a href="/fr/docs/Web/API/GlobalEventHandlers/onmousedown">mousedown</a> et <a href="/fr/docs/Web/API/GlobalEventHandlers/onmouseup">mouseup</a> créent des problèmes - leurs gestionnaires d'événements ne peuvent pas être appelés à l'aide de contrôles autres que la souris.</p>

<p>Si vous essayez de contrôler notre exemple  <a href="https://github.com/mdn/learning-area/blob/master/accessibility/mobile/simple-box-drag.html">simple-box-drag.html</a> (<a href="http://mdn.github.io/learning-area/accessibility/mobile/simple-box-drag.html">see example live</a>) avec un clavier ou une touche, vous verrez le problème. Cela se produit car nous utilisons un code tel que:</p>

<pre class="brush: js">div.onmousedown = function() {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  movePanel();
}

document.onmouseup = stopMove;</pre>

<p>Pour activer d'autres formes de contrôle, vous devez utiliser des événements différents mais équivalents. Par exemple, les événements tactiles fonctionnent sur les périphériques à écran tactile:</p>

<pre class="brush: js">div.ontouchstart = function(e) {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  positionHandler(e);
  movePanel();
}

panel.ontouchend = stopMove;</pre>

<p>Nous avons fourni un exemple simple qui montre comment utiliser simultanément les événements de la souris et des événements tactiles — voir <a href="https://github.com/mdn/learning-area/blob/master/accessibility/mobile/multi-control-box-drag.html">multi-control-box-drag.html</a> (<a href="http://mdn.github.io/learning-area/accessibility/mobile/multi-control-box-drag.html">see the example live</a> aussi).</p>

<p><strong>Note:</strong> Vous pouvez également voir des exemples fonctionnels montrant comment implémenter différents mécanismes de contrôle à   <a href="/fr/docs/Games/Techniques/Control_mechanisms">Implementing game control mechanisms</a>.</p>

<h2 id="Responsive_design">Responsive design</h2>

<p><a href="/fr/docs/Web/Apps/Progressive/Responsive">Responsive design</a> a l’habitude de faire en sorte que vos mises en page et les autres fonctionnalités de vos applications changent de manière dynamique en fonction de facteurs tels que la taille de l’écran et la résolution, de sorte qu’elles soient utilisables et accessibles aux utilisateurs de différents types d’appareils. .</p>

<p>En particulier, les problèmes les plus courants auxquels le mobile doit faire face sont les suivants:</p>

<ul>
 <li>Adéquation des mises en page pour les appareils mobiles. Une mise en page à plusieurs colonnes ne fonctionnera pas aussi bien sur un écran étroit, par exemple, et il faudra peut-être augmenter la taille du texte pour le rendre lisible. Ces problèmes peuvent être résolus en créant une mise en page réactive utilisant des technologies telles que  <a href="/fr/docs/Web/CSS/Media_Queries">media queries</a>, <a href="/fr/docs/Mozilla/Mobile/Viewport_meta_tag">viewport</a>, et <a href="/fr/docs/Learn/CSS/CSS_layout/Flexbox">flexbox</a>.</li>
 <li>Conserver les tailles d’image téléchargées. En général, les appareils de petite taille n’auront pas besoin d’images aussi volumineuses que leurs homologues de bureau, et ils risquent davantage d’être sur des connexions réseau lentes. Par conséquent, il est sage de servir des images plus petites sur des dispositifs à écran étroit, le cas échéant. Vous pouvez gérer cela en utilisant  <a href="/fr/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images">responsive image techniques</a>.</li>
 <li>Penser aux hautes résolutions. De nombreux appareils mobiles ont des écrans haute résolution et ont donc besoin d'images de résolution supérieure pour que l'affichage puisse continuer à être net et net. Encore une fois, vous pouvez servir des images selon vos besoins en utilisant des techniques d’image réactives. De plus, de nombreuses exigences en matière d'images peuvent être satisfaites grâce au format d'images vectorielles SVG, bien pris en charge par les navigateurs actuels. SVG a une petite taille de fichier et restera net quelle que soit la taille affichée   (voir <a href="/fr/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web">Adding vector graphics to the web</a> pour plus de détails ).</li>
</ul>

<p><strong>Note: </strong> Nous ne fournirons pas une analyse complète des techniques de conception réactive ici, car elles sont couvertes ailleurs au sein de MDN (voir les liens ci-dessus).</p>

<h3 id="Considérations_mobiles_spécifiques">Considérations mobiles spécifiques</h3>

<p>Il existe d'autres problèmes importants à prendre en compte lors de la création de sites plus accessibles sur mobile. Nous en avons énuméré quelques-uns ici, mais nous en ajouterons davantage lorsque nous y penserons.</p>

<h4 id="Ne_pas_désactiver_le_zoom">Ne pas désactiver le zoom</h4>

<p>En utilisant  <a href="/fr/docs/Mozilla/Mobile/Viewport_meta_tag">viewport</a>, il est possible de désactiver le zoom, en utilisant un code comme celui-ci dans votre {{htmlelement("head")}}:</p>

<pre class="brush: html">&lt;meta name="viewport" content="user-scalable=no"&gt;</pre>

<p>Vous ne devriez jamais faire cela autant que possible - beaucoup de gens comptent sur le zoom pour voir le contenu de votre site web, aussi, enlever cette fonctionnalité est une très mauvaise idée. Il y a certaines situations où le zoom peut casser l'interface utilisateur; Dans de tels cas, si vous estimez que vous devez absolument désactiver le zoom, vous devez fournir un autre type d’équivalent, tel qu’une commande permettant d’augmenter la taille du texte de manière à ne pas endommager votre interface utilisateur.</p>

<h4 id="Garder_les_menus_accessibles">Garder les menus accessibles</h4>

<p>Étant donné que l'écran est beaucoup plus étroit sur les appareils mobiles, il est très courant d'utiliser des requêtes multimédia et d'autres technologies pour réduire le menu de navigation à une minuscule icône en haut de l'écran, sur laquelle vous pouvez appuyer pour afficher le menu uniquement si c'est nécessaire - lorsque le site est visualisé sur mobile. Ceci est généralement représenté par une icône "trois lignes horizontales" et le motif de conception est par conséquent appelé "menu hamburger".</p>

<p>Lorsque vous implémentez un tel menu, vous devez vous assurer que le contrôle qui le révèle est accessible par les mécanismes de contrôle appropriés (normalement tactile pour mobile), comme indiqué dans {{anch("Control mechanisms")}} ci-dessus, et que le reste de la page est déplacé ou caché d'une manière ou d'une autre pendant l'accès au menu, afin d'éviter toute confusion lors de la navigation. .</p>

<p>Cliquez ici pour un  <a href="http://fritz-weisshart.de/meg_men/">good hamburger menu example</a>.</p>

<h2 id="Entrée_utilisateur">Entrée utilisateur</h2>

<p>Sur les appareils mobiles, la saisie de données a tendance à être plus agaçante pour les utilisateurs que l'expérience équivalente sur les ordinateurs de bureau. Il est plus pratique de taper du texte dans les entrées de formulaire à l'aide d'un clavier d'ordinateur de bureau ou d'ordinateur portable que d'un clavier virtuel à écran tactile ou d'un petit clavier physique mobile.</p>

<p>Pour cette raison, il vaut la peine d'essayer de minimiser la quantité de frappe nécessaire. Par exemple, au lieu de forcer les utilisateurs à saisir chaque fois le titre de leur travail en utilisant une entrée de texte standard, vous pouvez proposer un menu  {{htmlelement("select")}}  contenant les options les plus courantes (ce qui aide également à cohérence dans la saisie des données), et offrent une option "Autre" qui affiche un champ de texte dans lequel taper les valeurs aberrantes. Vous pouvez voir un exemple simple de cette idée en action dans <a href="https://github.com/mdn/learning-area/blob/master/accessibility/mobile/common-job-types.html">common-job-types.html</a> ( voir le <a href="http://mdn.github.io/learning-area/accessibility/mobile/common-job-types.html">common jobs example live</a>).</p>

<p>Il est également utile d’envisager l’utilisation de types de saisie de formulaire au format HTML5, tels que la date sur les plates-formes mobiles car ils les gèrent bien (Android et iOS, par exemple, affichent des widgets utilisables qui correspondent bien à l’expérience de l’appareil. Voir  <a href="https://github.com/mdn/learning-area/blob/master/accessibility/mobile/html5-form-examples.html">html5-form-examples.html</a>   pour quelques exemples (voir <a href="http://mdn.github.io/learning-area/accessibility/mobile/html5-form-examples.html">HTML5 form examples live</a>) — essayez de les charger et de les manipuler sur des appareils mobiles. Par exemple:</p>

<ul>
 <li>Les types  <code>number</code>, <code>tel</code>, et <code>email</code> affichent des claviers virtuels appropriés pour la saisie de numéros / numéros de téléphone.</li>
 <li>Les types <code>time</code> et <code>date</code> affichent des sélecteurs appropriés pour la sélection des heures et des dates. .</li>
</ul>

<p>Si vous souhaitez fournir une solution différente pour les ordinateurs de bureau, vous pouvez toujours proposer un balisage différent à vos périphériques mobiles à l'aide de la détection de fonctionnalités. Reportez-vous à   <a href="http://diveinto.html5doctor.com/detect.html#input-types">input types</a>  pour obtenir des informations brutes sur la détection de différents types d'entrée et consultez notre article  <a href="/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection">feature detection article</a> pour en savoir plus. .</p>

<h2 id="Résumé">Résumé</h2>

<p>Dans cet article, nous vous avons fourni des détails sur les problèmes courants spécifiques à l'accessibilité mobile et sur la façon de les résoudre. Nous vous avons également montré comment utiliser les lecteurs d'écran les plus courants pour vous aider à effectuer des tests d'accessibilité.</p>

<h3 id="Voir_également">Voir également</h3>

<ul>
 <li><a href="https://www.smashingmagazine.com/guidelines-for-mobile-web-development/">Guidelines For Mobile Web Development</a> — Une liste d'articles dans Smashing Magazine couvrant différentes techniques de conception de sites Web mobiles.</li>
 <li><a href="http://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644">Make your site work on touch devices</a> — Article utile sur l'utilisation d'événements tactiles pour que les interactions fonctionnent sur les appareils mobiles.</li>
</ul>

<div>{{PreviousMenuNext("Learn/Accessibility/Multimedia","Learn/Accessibility/Accessibility_troubleshooting", "Learn/Accessibility")}}</div>

<div>
<h2 id="Dans_ce_module">Dans ce module</h2>

<ul>
 <li><a href="/fr/docs/Learn/Accessibility/What_is_accessibility">What is accessibility?</a></li>
 <li><a href="/fr/docs/Learn/Accessibility/HTML">HTML: A good basis for accessibility</a></li>
 <li><a href="/fr/docs/Learn/Accessibility/CSS_and_JavaScript">CSS and JavaScript accessibility best practices</a></li>
 <li><a href="/fr/docs/Learn/Accessibility/WAI-ARIA_basics">WAI-ARIA basics</a></li>
 <li><a href="/fr/docs/Learn/Accessibility/Multimedia">Accessible multimedia</a></li>
 <li><a href="/fr/docs/Learn/Accessibility/Mobile">Mobile accessibility</a></li>
 <li><a href="/fr/docs/Learn/Accessibility/Accessibility_troubleshooting">Accessibility troubleshooting</a></li>
</ul>
</div>
</div>
