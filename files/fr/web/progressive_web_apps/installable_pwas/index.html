---
title: Comment rendre les PWAs installables
slug: Web/Progressive_web_apps/Installable_PWAs
translation_of: Web/Progressive_web_apps/Installable_PWAs
---
<div>{{PreviousMenuNext("Web/Apps/Progressive/Offline_Service_workers", "Web/Apps/Progressive/Re-engageable_Notifications_Push", "Web/Apps/Progressive")}}</div>

<p>Dans l'article précédent, nous avons vu comment <a href="https://mdn.github.io/pwa-examples/js13kpwa/">js13kPWA</a> fonctionne en mode déconnecté grâce à son <a href="/fr/docs/Web/API/Service_Worker_API">service worker</a>, mais nous pouvons aller encore plus loin et permettre aux utilisateurs d'installer l'application web sur les navigateurs mobiles pris en charge, comme s'il s'agissait d'une application native. Cet article explique comment réaliser ceci en utilisant un manifeste web et une fonctionnalité appelée "ajouter à l'écran d'accueil".</p>

<p>Ces technologies permettent à l'application d'être directement lancée depuis l'écran d'accueil de l'appareil au lieu de lancer manuellement le navigateur puis de saisir l'URL. Votre application web peut se trouver à côté des applications natives en tant qu'application de première catégorie. De ce fait, il est plus facile d'y accéder et vous pouvez également spécifier qu'une application doit s'exécuter en plein écran sans l'encadrement du navigateur hôte, ce qui la fait ressembler encore plus à une application native.</p>

<h2 id="Prérequis">Prérequis</h2>

<p>Pour rendre un site web installable, il a besoin que les éléments suivants soient mis en place:</p>

<ul>
 <li>Un manifeste web, avec les <a href="/fr/Apps/Progressive/Add_to_home_screen#Manifest">bons champs renseignés</a></li>
 <li>Le site web à servir depuis un domaine sécurisé (HTTPS)</li>
 <li>Un icone représentant l'application sur l'appareil</li>
 <li>Un service worker enregistré pour permettre à l'application de fonctionner en mode déconnecté (ceci n'est actuellement imposé que par Chrome pour Android)</li>
</ul>

<h3 id="Le_fichier_manisfeste">Le fichier manisfeste</h3>

<p>L'élément clef est un fichier manifeste web qui liste toutes les informations concernant le site web au format JSON.</p>

<p>Il se trouve habituellement dans le dossier racine de l'application web. Il contient des informations utiles telles que le nom de l'application, le chemin vers les icones de différentes tailles à utiliser pour représenter l'application sur un système d'exploitation mobile (par exemple, en tant qu'icone sur l'écran d'accueil) et une couleur de fond à utiliser pour les écrans de chargement ou surgissant. Cette information est nécessaire pour que le navigateur puisse présenter correctement l'application lors de l'installation et sur l'écran d'accueil.</p>

<p>Le fichier <code>js13kpwa.webmanifest</code> de l'application web <a href="https://mdn.github.io/pwa-examples/js13kpwa/">js13kPWA</a> est inclus dans la section {{htmlelement("head")}} du fichier <code>index.html</code> via la ligne de code suivante:</p>

<pre class="brush: html">&lt;link rel="manifest" href="js13kpwa.webmanifest"&gt;</pre>

<div class="note">
<p><strong>Note :</strong> Il existe quelques extensions courantes qui ont été utilisées pour les manifestes par le passé: <code>manifest.webapp</code> fut populaire pour les manifestes des applications Firefox OS et nombreux sont ceux qui utilisent <code>manifest.json</code> pour les manifestes web attendu que le contenu est organisé sous forme d'une structure JSON. Cependant, l'extension <code>.webmanifest</code> est explicitement mentionnée dans la <a href="https://w3c.github.io/manifest/">W3C relative au manifeste</a>, donc conformons nous à cela.</p>
</div>

<p>Le contenu d'un fichier ressemble à ceci:</p>

<pre class="brush: json">{
    "name": "Application Web progressive js13kGames",
    "short_name": "js13kPWA",
    "description": "Application web progressive qui liste les jeux soumis dans la catégorie A-Frame dans la compétition js13kGames 2017.",
    "icons": [
        {
            "src": "icons/icon-32.png",
            "sizes": "32x32",
            "type": "image/png"
        },
        // ...
        {
            "src": "icons/icon-512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ],
    "start_url": "/pwa-examples/js13kpwa/index.html",
    "display": "fullscreen",
    "theme_color": "#B12A34",
    "background_color": "#B12A34"
}</pre>

<p>La plupart des champs sont explicites, mais décortiquons le document et expliquons-le en détail:</p>

<ul>
 <li><code>name</code>: Le nom complet de l'application.</li>
 <li><code>short_name</code>: Nom résumé à afficher sur l'écran d'accueil.</li>
 <li><code>description</code>: Une phrase ou deux expliquant ce que fait l'application.</li>
 <li><code>icons</code>: Un paquet d'informations relatives aux icones — URL sources, tailles et types. Assurez-vous d'en indiquer au moins quelques unes de façon à ce que celle qui est la mieux adaptée soit choisie pour l'appareil de l'utilisateur.</li>
 <li><code>start_url</code>: Le document index document à lancer au démarrage de l'application.</li>
 <li><code>display</code>: Comment l'application est affichée; ce peut être fullscreen, standalone, minimal-ui ou browser.</li>
 <li><code>theme_color</code>: Une couleur primaire pour l'interface utilisateur et qui sera utilisée par le système d'exploitation.</li>
 <li><code>background_color</code>: Une couleur de fond utilisée lors de l'installation et pour l'écran de chargement.</li>
</ul>

<p>Le minimum requis pour un manifeste web est le nom (<code>name</code>) et au moins un icone (avec <code>src</code>, <code>size</code> et <code>type</code>). <code>description</code>, <code>short_name</code> et <code>start_url</code> sont recommandés. Il existe même plus de champs que ceux listés ci-dessus et que vous pouvez utiliser — voir <a href="/fr/docs/Web/Manifest">la réference du Manifeste des Web Apps</a> pour avoir davatange de détails.</p>

<h2 id="Ajout_à_lécran_daccueil">Ajout à l'écran d'accueil</h2>

<p>"Ajout à l'écran d'accueil" ("Add to home screen" ou a2hs pour faire court) est une fonctionnalité implémentée par les navigateurs mobiles qui récupèrent les informations trouvées dans le manifeste de l'application web et les utilisent pour représenter l'application sur l'écran d'accueil de l'appareil avec un icone et un nom. Ceci ne fonctionne que si l'application s'est conformées à tous les prérequis décrits plus haut.</p>

<p>Quand l'utilisateur navigue sur la PWA en utilisant un navigateur les prenant en charge, il doit voir s'afficher une banière indiquant qu'il est possible d'installer l'application en tant que PWA.</p>

<p><img alt="Add to Home screen popup of js13kPWA." src="js13kpwa-icon.png"></p>

<p>Après que l'utilisateur a cliqué sur cette banière, la banière d'installation est affichée. Cette banière est automatiquement créée par le navigateur en se basant sur les informations contenues dans le fichier manifeste — le nom et l'icone sont visibles dans la boîte de dialogue.</p>

<p><img alt="Install banner of js13kPWA." src="js13kpwa-banner.png"></p>

<p>Si l'utilisateur clique sur le bouton, il y a une dernière étape montrant à quoi l'application ressemble et permettant à l'utilisateur de confirmer qu'il veut vraiment ajouter l'application.</p>

<p><img alt="Add to Home screen popup of js13kPWA." src="js13kpwa-add.png"></p>

<p>Une fois la confirmation donnée, l'application sera installée sur l'écran d'accueil.</p>

<p><img alt="" src="js13kpwa-installed.png"></p>

<p>APrès cela, l'utlisateur peut la lancer et commencer à l'utiliser immédiatement. Notez que parfois (selon le navigateur ou le système d'exploitation mobile que vous utilisez) les PWA ont une petite image de navigateur dans le coin inférieur droit de leur icone pour informer l'utilisateur de leur nature web.</p>

<h3 id="Ecran_de_démarrage">Ecran de démarrage</h3>

<p>Avec certains navigateurs, un écran de démarrage est également généré à partir des informations issues du manifeste et qui est affiché quand la PWA est lancée.</p>

<p><img alt="" src="js13kpwa-splash.png"></p>

<p>L'icone et les couleurs du thème et du fond sont utilisés pour créer cet écran.</p>

<h2 id="Résumé">Résumé</h2>

<p>Dans cet article, nous avons appris comment nous pouvons rendre une PWA installable en utilisant un manisfeste web et l'écran "Ajouter à l'écran d'accueil".</p>

<p>Pour plus d'information sur l'écran "Ajout à l'écran d'accueil", reportez-vous au <a href="/fr/docs/Web/Apps/Progressive/Add_to_home_screen">guide d'ajout à l'écran d'accueil</a>. La prise en charge des navigateurs est actuellement limitée à Firefox pour Android 58+, Mobile Chrome et Android Webview 31+ et Opera pour Android 32+, mais ceci doit s'améliorer dans un proche avenir.</p>

<p>Maintenant voyons la dernière pièce du puzzle PWA puzzle — ré-engagement via les notifications poussées.</p>

<p>{{PreviousMenuNext("Web/Apps/Progressive/Offline_Service_workers", "Web/Apps/Progressive/Re-engageable_Notifications_Push", "Web/Apps/Progressive")}}</p>

<p>{{QuickLinksWithSubpages("/en-US/docs/Web/Progressive_web_apps/")}}</p>
