---
title: Mobile Web Development
slug: conflicting/Learn/CSS/CSS_layout/Responsive_Design
original_slug: Web/Guide/Mobile
---

Esta página fornece uma visão geral de algumas das principais técnicas necessárias para desenvolver websites que trabalham bem em dispositivos moveis. Se você esta vendo esta informação no projeto Firefox OS da Mozilla, veja a página [Firefox OS](/pt-BR/Mozilla/Firefox_OS). Ou você pode estar interessado em detalhes sobre [Firefox para Android](/pt-BR/Mozilla/Firefox_for_Android).

We've organized it into two sections, [designing for mobile devices](#designing_for_mobile_devices) and [cross-browser compatibility](#cross-browser_development). Also see Jason Grlicky's guide to [mobile-friendliness](/pt-BR/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) for web developers.

## Projetando para dispositivos móveis

Dispositivos móveis possuem características de hardware bastante diferentes comparados com desktops ou notebooks. Suas telas geralmente são menores, obviamente, mas eles costumam alterar automáticamente a orientação da tela entre os modos retrato e paisagem à medida que o usuário rotaciona o dispositivo. Eles geralmente têm telas sensíveis ao toque para entrada do usuário. API's como geolocalização ou orientação da tela não são suportadas em desktops ou são muito menos úteis e essas API's dão aos usuários mobile novas formas de interagir com seu site.

### Working with small screens

[Responsive Web Design](/pt-BR/docs/Web/Progressive_web_apps) is a term for a set of techniques that enables your web site to adapt its layout as its viewing environment — most obviously, the size and orientation of the screen — changes. It includes techniques such as:

- fluid CSS layouts, to make the page adapt smoothly as the browser window size changes
- the use of [media queries](/pt-BR/docs/CSS/Media_queries) to conditionally include CSS rules appropriate for the device screen [width](/pt-BR/docs/CSS/Media_queries#width) and [height](/pt-BR/docs/CSS/Media_queries#height)

The [viewport meta tag](/pt-BR/Mobile/Viewport_meta_tag) instructs the browser to display your site at the appropriate scale for the user's device.

### Working with touch screens

To use a touch screen you'll need to work with [DOM Touch events](/pt-BR/docs/DOM/Touch_events). You won't be able to use the [CSS :hover](/en-US/CSS/:hover) pseudo-class, and will need to design clickable items like buttons to respect the fact that fingers are fatter than mouse pointers. See this article on [designing for touch screens](https://web.archive.org/web/20150520130912/http://www.whatcreative.co.uk/blog/tips/designing-for-touch-screen/).

You can use the [-moz-touch-enabled](/pt-BR/docs/CSS/Media_queries#-moz-touch-enabled) media query to load different CSS on a touch-enabled device.

### Optimizing images

To help users whose devices have low or expensive bandwidth, you can optimize images by loading images appropriate to the device screen size and resolution. You do this in CSS by querying for screen [height](/pt-BR/docs/CSS/Media_queries#height), [width](/pt-BR/docs/CSS/Media_queries#width), and [pixel ratio](/pt-BR/docs/CSS/Media_queries#-moz-device-pixel-ratio).

You can also make use of CSS properties to implement visual effects like [gradients](/pt-BR/docs/CSS/Using_CSS_gradients) and [shadows](/en-US/CSS/Box-shadow) without images.

### Mobile APIs

Finally, you can take advantage of the new possibilities offered by mobile devices, such as [orientation](/pt-BR/Detecting_device_orientation) and [geolocation](/en-US/Using_geolocation).

## Cross-browser development

### Write cross-browser code

To create web sites that will work acceptably across different mobile browsers:

- Try to avoid using browser-specific features, such as vendor-prefixed CSS properties.
- If you do need to use these features, check whether other browsers implement their own versions of these features, and target them too.
- For browsers that don't support these features, provide an acceptable fallback.

For example, if you set a gradient as a background for some text using a vendor-prefixed property like `-webkit-linear-gradient`, it's best to include the other vendor-prefixed versions of the [linear-gradient](/pt-BR/docs/CSS/linear-gradient) property. If you don't do that, at least make sure that the default background contrasts with the text: that way, the page will at least be usable in a browser which is not targeted by your `linear-gradient` rule.

See this [list of Gecko-specific properties](/pt-BR/docs/CSS/CSS_Reference/Mozilla_Extensions), and this list of [WebKit-specific properties](/pt-BR/docs/CSS/CSS_Reference/Webkit_Extensions), and Peter Beverloo's [table of vendor-specific properties](https://peter.sh/experiments/vendor-prefixed-css-property-overview/).

Using tools like [CSS Lint](http://csslint.net/) can help find problems like this in code, and preprocessors like [SASS](https://sass-lang.com/) and [LESS](https://lesscss.org/) can help you to produce cross-browser code.

### Take care with user agent sniffing

It's preferable for web sites to detect specific device features such as screen size and touch screens using the techniques listed above, and adapt themselves accordingly. But sometimes this is impractical, and web sites resort to parsing the browser's user agent string to try to distinguish between desktops, tablets, and phones, to serve different content to each type of device.

If you do this, make sure your algorithm is correct, and you aren't serving the wrong type of content to a device because you don't understand a particular browser's user agent string. See this [guide to using the user agent string to determine device type](/pt-BR/Browser_detection_using_the_user_agent#Mobile.2C_Tablet_or_Desktop).

### Teste em vários navegadores

Teste seu site em vários navegadores. Isso significa testar em várias plataformas — no mínimo para iOS e Android.

- teste no Safari para iPhone usando o [simulador para iOS](https://developer.apple.com/devcenter/ios/index.action)
- teste no Opera e Firefox usando a [Android SDK](https://developer.android.com/sdk/index.html). Veja instruções adicionais para [rodar Firefox para Android usando o emulador de Android](https://wiki.mozilla.org/Mobile/Fennec/Android/Emulator).
