---
title: Introdução a progressive web apps
slug: Web/Progressive_web_apps/Introduction
translation_of: Web/Progressive_web_apps/Introduction
original_slug: Web/Progressive_web_apps/Introdução
---
<div>{{NextMenu("Web/Apps/Progressive/App_structure", "Web/Apps/Progressive")}}</div>

<p class="summary">Este artigo fornece uma intrução as Progressive Web Apps (PWAs), explicando o que são e quais vantagens elas trazem em relação ao desenvolvimento de aplicações web comuns.</p>

<h2 id="O_que_é_uma_Progressive_Web_App">O que é uma Progressive Web App?</h2>

<p><span class="tlid-translation translation"><span title="">As PWAs são aplicativos web desenvolvidos usando várias tecnologias e padrões específicos para permitir que eles aproveitem os recursos da web e dos aplicativos nativos.</span></span></p>

<p><span class="tlid-translation translation"><span title="">Por exemplo, as aplicações web são mais detectáveis - é muito mais fácil e rápido visitar um site do que instalar um aplicativo, e você também pode compartilhar aplicações web por meio de um link.</span></span></p>

<p><span class="tlid-translation translation"><span title="">Por outro lado, os aplicativos nativos são melhor integrados ao sistema operacional e, portanto, oferecem uma experiência melhor para os usuários.</span> <span title="">Você pode instalar um aplicativo nativo para funcionar off-line e os usuários adoram tocar nos ícones da tela inicial para acessar facilmente os aplicativos favoritos, em vez de acessá-lo usando um navegador.</span></span></p>

<p>As PWAs nos dão a capacidade de criar aplicações web com essas mesmas vantagens.</p>

<p>Isso n<span class="tlid-translation translation"><span title="">ão é um conceito novo - essas ideias foram pensadas muitas vezes na plataforma web com várias abordagens no passado.</span> <span title="">O aprimoramento progressivo e o design responsivo já nos permitem criar websites otimizados para dispositivos móveis.</span> <span title="">Trabalhar offline e instalar aplicativos foi possível no ecossistema Firefox OS há alguns anos.</span></span></p>

<p><span class="tlid-translation translation"><span title="">PWAs, no entanto, fornecem tudo isso e muito mais, sem se livrar de qualquer um dos recursos existentes que tornam a web excelente.</span></span></p>

<h2 id="O_que_torna_uma_aplicação_web_em_uma_PWA">O que torna uma aplicação web em uma PWA?</h2>

<p><span class="tlid-translation translation"><span title="">Como sugerimos acima, as PWAs não são criadas com uma única tecnologia.</span> <span title="">Elas representam uma nova filosofia para a criação de aplicações Web, envolvendo alguns padrões específicos, APIs e outros recursos.</span> <span title="">Não é tão óbvio saber se uma aplicação web é uma PWA ou não, à primeira vista.</span> <span title="">Uma aplicação Web pode ser considerada uma PWA quando atende a determinados requisitos ou implementa um conjunto de recursos específicos: funciona offline, é instalável, é fácil de sincronizar, pode enviar notificações push etc.</span></span></p>

<p><span class="tlid-translation translation"><span title="">Além disso, existem ferramentas para medir a integridade de uma aplicação Web em porcentagens.</span> <span title="">(</span></span><a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a><span class="tlid-translation translation"><span title=""> é atualmente o mais popular.) Ao implementar várias vantagens tecnológicas, podemos fazer uma aplicação mais progressiva, terminando assim com uma pontuação mais alta no Lighthouse.</span> <span title="">Mas este é apenas um indicador aproximado.</span></span></p>

<p><span class="tlid-translation translation"><span title="">Existem alguns princípios que uma aplicação Web deve tentar seguir para serem identificadas como uma PWA.</span> <span title="">Deveria ser:</span></span></p>

<ul>
 <li><a href="/en-US/Apps/Progressive/Advantages#Discoverable">Detectável</a>, o seu conteúdo deve poder ser encontrado por mecanismos de busca na Web.</li>
 <li><a href="/en-US/Apps/Progressive/Advantages#Installable">Instalável</a>, deve poder ser acessada a partir da tela inicial do dispositivo.</li>
 <li><a href="/Apps/Progressive/Advantages#Linkable">Linkavel</a>, você deve poder compartilhar simplesmente enviando a sua URL. </li>
 <li><a href="/en-US/Apps/Progressive/Advantages#Network_independent">Independente de rede</a>, deve funcionar offline e ou com uma conexão fraca.</li>
 <li><a href="/en-US/Apps/Progressive/Advantages#Progressive">Progressiva</a>, deve funcionar em um nível básico e navegadores antigos e em um nível completo nos mais modernos.</li>
 <li><a href="/en-US/Apps/Progressive/Advantages#Re-engageable">Re-engajável</a>, deve ser possível enviar notificações.</li>
 <li><a href="/en-US/Apps/Progressive/Advantages#Responsive">Responsiva</a>, deve ser utilizável em qualquer dispositivo com uma tela e em navegadores — telefones móveis, tablets, laptops, TVs, geladeiras, etc.</li>
 <li><a href="/en-US/Apps/Progressive/Advantages#Safe">Segura</a>, a conexão deve ser segura contra terceiros que tentarem acessar dados confidenciais.</li>
</ul>

<h3 id="Is_it_worth_doing_all_that">Is it worth doing all that?</h3>

<p>Absolutely! With a relatively small amount of effort required to implement the core PWA features, the benefits are huge. For example:</p>

<ul>
 <li>A decrease in loading times after the app has been installed, thanks to caching with <a href="/en-US/docs/Web/API/Service_Worker_API">Service Workers</a>, along with saving precious bandwidth and time.</li>
 <li>The ability to update only the content that has changed when an app update is available. In contrast, with a native app, even the slightest modification can force the user to download the entire application again.</li>
 <li>A look and feel that is more integrated with the native platform — app icons on the homescreen, apps that run fullscreen, etc.</li>
 <li>Re-engaging with users via system notifications and push messages, leading to more engaged users and better conversion rates.</li>
</ul>

<p>There are many success stories of companies trying the PWA route, opting for an enhanced website experience rather than a native app, and seeing significant measurable benefits as a result. The website <a href="https://www.pwastats.com/">PWA Stats</a> shares many case studies which indiciate these benefits.</p>

<p>The best known success story is probably <a href="https://stories.flipkart.com/flipkart-lite/">Flipkart Lite</a> — India's largest e-commerce site rebuilt as a progressive web app in 2015, which resulted in 70% increase in conversions. The <a href="https://m.aliexpress.com/">AliExpress</a> PWA has also seen much better results than the web or native app, with a 104% increase in conversion rates for new users. Given their profit increase, and the relatively low amount of work required for the conversion to PWAs, the advantage is clear.</p>

<p>Early stage emerging startups like <a href="https://www.couponmoto.com/">couponmoto</a> have also started using progressive web apps to drive more consumer engagement, showing that they can help small as well as big companies to (re-)engage users more effectively.</p>

<p>You can check the list at <a href="https://pwa.rocks/">pwa.rocks</a> for more examples. Particularly worth mentioning is the <a href="https://hnpwa.com/">hnpwa.com</a> page — this lists an example implementation of the Hacker News website (instead of the usual TodoMVC app), in which you can see the use of various front-end frameworks.</p>

<p>You can even generate PWAs online using the <a href="https://www.pwabuilder.com/">PWABuilder</a> website.</p>

<p>For service worker- and push- specific information, be sure to check The <a href="https://serviceworke.rs/">Service Worker Cookbook</a>, a collection of recipes using service workers in modern sites.</p>

<p>It's well worth trying out a PWA approach, so you can see for yourself if it works for your app.</p>

<h2 id="Browser_support">Browser support</h2>

<p>As mentioned before, PWAs don't depend on a single API, but rather using various technologies to achieve the goal of delivering the best web experience possible.</p>

<p>The key ingredient required for PWAs is <a href="/en-US/docs/Web/API/Service_Worker_API">service worker</a> support. Thankfully service workers are <a href="https://jakearchibald.github.io/isserviceworkerready/">now supported on all major browsers</a> on desktop and mobile.</p>

<p>Other features such as <a href="/en-US/docs/Web/Manifest">Web App Manifest</a>, <a href="/en-US/docs/Web/API/Push_API">Push</a>, <a href="/en-US/docs/Web/API/Notifications_API">Notifications</a>, and <a href="/en-US/docs/Web/Apps/Progressive/Add_to_home_screen">Add to Home Screen</a> functionality have wide support too. Currently Safari has limited support for Web App Manifest and Add to Home Screen and no support for web push notifications. However, other major browsers support all these features.</p>

<p>Some of these APIs are experimental, with the documentation still in draft, but seeing success stories like those of Flipkart and AliExpress should convince you to try and implement some of the PWA features in your web app already.</p>

<p>Above all you should follow the progressive enhancement rule — use the technologies that provide such enhancements only where they are supported, but still offer the basic functionality of your app if it isn't. This way everybody will be able to use it, but those with modern browsers will benefit from PWA features even more.</p>

<h2 id="An_example_application">An example application</h2>

<p>In this series of articles we will examine the source code of a super simple website that lists information about games submitted to the <a href="http://js13kgames.com/aframe">A-Frame category</a> in the <a href="http://2017.js13kgames.com/">js13kGames 2017</a> competition. You don't have to think about what the actual content on the website is — the main point is to learn how to use PWA features in your own projects.</p>

<p>You can find the online version at <a href="https://mdn.github.io/pwa-examples/js13kpwa/">mdn.github.io/pwa-examples/js13kpwa</a> (also <a href="https://github.com/mdn/pwa-examples/tree/master/js13kpwa">see the source code</a>), which we will be carefully explaining in the next few articles.</p>

<p>Now, let's move to the second part of this series, where we’ll be looking at the structure of our example app.</p>

<p>{{NextMenu("Web/Apps/Progressive/App_structure", "Web/Apps/Progressive")}}</p>

<div>{{QuickLinksWithSubpages("/en-US/docs/Web/Apps/Progressive/")}}</div>
