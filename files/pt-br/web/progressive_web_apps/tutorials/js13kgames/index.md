---
title: Introdução a progressive web apps
slug: Web/Progressive_web_apps/Tutorials/js13kGames
---

{{NextMenu("Web/Apps/Progressive/App_structure", "Web/Apps/Progressive")}}

Este artigo fornece uma intrução as Progressive Web Apps (PWAs), explicando o que são e quais vantagens elas trazem em relação ao desenvolvimento de aplicações web comuns.

## O que é uma Progressive Web App?

As PWAs são aplicativos web desenvolvidos usando várias tecnologias e padrões específicos para permitir que eles aproveitem os recursos da web e dos aplicativos nativos.

Por exemplo, as aplicações web são mais detectáveis - é muito mais fácil e rápido visitar um site do que instalar um aplicativo, e você também pode compartilhar aplicações web por meio de um link.

Por outro lado, os aplicativos nativos são melhor integrados ao sistema operacional e, portanto, oferecem uma experiência melhor para os usuários. Você pode instalar um aplicativo nativo para funcionar off-line e os usuários adoram tocar nos ícones da tela inicial para acessar facilmente os aplicativos favoritos, em vez de acessá-lo usando um navegador.

As PWAs nos dão a capacidade de criar aplicações web com essas mesmas vantagens.

Isso não é um conceito novo - essas ideias foram pensadas muitas vezes na plataforma web com várias abordagens no passado. O aprimoramento progressivo e o design responsivo já nos permitem criar websites otimizados para dispositivos móveis. Trabalhar offline e instalar aplicativos foi possível no ecossistema Firefox OS há alguns anos.

PWAs, no entanto, fornecem tudo isso e muito mais, sem se livrar de qualquer um dos recursos existentes que tornam a web excelente.

## O que torna uma aplicação web em uma PWA?

Como sugerimos acima, as PWAs não são criadas com uma única tecnologia. Elas representam uma nova filosofia para a criação de aplicações Web, envolvendo alguns padrões específicos, APIs e outros recursos. Não é tão óbvio saber se uma aplicação web é uma PWA ou não, à primeira vista. Uma aplicação Web pode ser considerada uma PWA quando atende a determinados requisitos ou implementa um conjunto de recursos específicos: funciona offline, é instalável, é fácil de sincronizar, pode enviar notificações push etc.

Além disso, existem ferramentas para medir a integridade de uma aplicação Web em porcentagens. ([Lighthouse](https://developers.google.com/web/tools/lighthouse/) é atualmente o mais popular.) Ao implementar várias vantagens tecnológicas, podemos fazer uma aplicação mais progressiva, terminando assim com uma pontuação mais alta no Lighthouse. Mas este é apenas um indicador aproximado.

Existem alguns princípios que uma aplicação Web deve tentar seguir para serem identificadas como uma PWA. Deveria ser:

- [Detectável](/pt-BR/Apps/Progressive/Advantages#Discoverable), o seu conteúdo deve poder ser encontrado por mecanismos de busca na Web.
- [Instalável](/pt-BR/Apps/Progressive/Advantages#Installable), deve poder ser acessada a partir da tela inicial do dispositivo.
- [Linkavel](/Apps/Progressive/Advantages#Linkable), você deve poder compartilhar simplesmente enviando a sua URL.
- [Independente de rede](/pt-BR/Apps/Progressive/Advantages#Network_independent), deve funcionar offline e ou com uma conexão fraca.
- [Progressiva](/pt-BR/Apps/Progressive/Advantages#Progressive), deve funcionar em um nível básico e navegadores antigos e em um nível completo nos mais modernos.
- [Re-engajável](/pt-BR/Apps/Progressive/Advantages#Re-engageable), deve ser possível enviar notificações.
- [Responsiva](/pt-BR/Apps/Progressive/Advantages#Responsive), deve ser utilizável em qualquer dispositivo com uma tela e em navegadores — telefones móveis, tablets, laptops, TVs, geladeiras, etc.
- [Segura](/pt-BR/Apps/Progressive/Advantages#Safe), a conexão deve ser segura contra terceiros que tentarem acessar dados confidenciais.

### Is it worth doing all that?

Absolutely! With a relatively small amount of effort required to implement the core PWA features, the benefits are huge. For example:

- A decrease in loading times after the app has been installed, thanks to caching with [Service Workers](/pt-BR/docs/Web/API/Service_Worker_API), along with saving precious bandwidth and time.
- The ability to update only the content that has changed when an app update is available. In contrast, with a native app, even the slightest modification can force the user to download the entire application again.
- A look and feel that is more integrated with the native platform — app icons on the homescreen, apps that run fullscreen, etc.
- Re-engaging with users via system notifications and push messages, leading to more engaged users and better conversion rates.

There are many success stories of companies trying the PWA route, opting for an enhanced website experience rather than a native app, and seeing significant measurable benefits as a result. The website [PWA Stats](https://www.pwastats.com/) shares many case studies which indiciate these benefits.

The best known success story is probably [Flipkart Lite](https://stories.flipkart.com/flipkart-lite/) — India's largest e-commerce site rebuilt as a progressive web app in 2015, which resulted in 70% increase in conversions. The [AliExpress](https://m.aliexpress.com/) PWA has also seen much better results than the web or native app, with a 104% increase in conversion rates for new users. Given their profit increase, and the relatively low amount of work required for the conversion to PWAs, the advantage is clear.

Early stage emerging startups like [couponmoto](https://www.couponmoto.com/) have also started using progressive web apps to drive more consumer engagement, showing that they can help small as well as big companies to (re-)engage users more effectively.

You can check the list at [pwa.rocks](https://pwa.rocks/) for more examples. Particularly worth mentioning is the [hnpwa.com](https://hnpwa.com/) page — this lists an example implementation of the Hacker News website (instead of the usual TodoMVC app), in which you can see the use of various front-end frameworks.

You can even generate PWAs online using the [PWABuilder](https://www.pwabuilder.com/) website.

For service worker- and push- specific information, be sure to check The [Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook/), a collection of recipes using service workers in modern sites.

It's well worth trying out a PWA approach, so you can see for yourself if it works for your app.

## Browser support

As mentioned before, PWAs don't depend on a single API, but rather using various technologies to achieve the goal of delivering the best web experience possible.

The key ingredient required for PWAs is [service worker](/pt-BR/docs/Web/API/Service_Worker_API) support. Thankfully service workers are [now supported on all major browsers](https://jakearchibald.github.io/isserviceworkerready/) on desktop and mobile.

Other features such as [Web App Manifest](/pt-BR/docs/Web/Manifest), [Push](/pt-BR/docs/Web/API/Push_API), [Notifications](/pt-BR/docs/Web/API/Notifications_API), and [Add to Home Screen](/pt-BR/docs/Web/Apps/Progressive/Add_to_home_screen) functionality have wide support too. Currently Safari has limited support for Web App Manifest and Add to Home Screen and no support for web push notifications. However, other major browsers support all these features.

Some of these APIs are experimental, with the documentation still in draft, but seeing success stories like those of Flipkart and AliExpress should convince you to try and implement some of the PWA features in your web app already.

Above all you should follow the progressive enhancement rule — use the technologies that provide such enhancements only where they are supported, but still offer the basic functionality of your app if it isn't. This way everybody will be able to use it, but those with modern browsers will benefit from PWA features even more.

## An example application

In this series of articles we will examine the source code of a super simple website that lists information about games submitted to the [A-Frame category](http://js13kgames.com/aframe) in the [js13kGames 2017](http://2017.js13kgames.com/) competition. You don't have to think about what the actual content on the website is — the main point is to learn how to use PWA features in your own projects.

You can find the online version at [mdn.github.io/pwa-examples/js13kpwa](https://mdn.github.io/pwa-examples/js13kpwa/) (also [see the source code](https://github.com/mdn/pwa-examples/tree/master/js13kpwa)), which we will be carefully explaining in the next few articles.

Now, let's move to the second part of this series, where we'll be looking at the structure of our example app.

{{NextMenu("Web/Apps/Progressive/App_structure", "Web/Apps/Progressive")}}

{{QuickLinksWithSubpages("/pt-BR/docs/Web/Apps/Progressive/")}}
