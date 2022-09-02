---
title: Mobile Web Development
slug: Web/Guide/Mobile
translation_of: Web/Guide/Mobile
---
<p>Esta página fornece uma visão geral de algumas das principais técnicas necessárias para desenvolver websites que trabalham bem em dispositivos moveis. Se você esta vendo esta informação no projeto Firefox OS da Mozilla, veja a página <a href="/en/Mozilla/Firefox_OS" title="Boot to Gecko">Firefox OS</a>. Ou você pode estar interessado em detalhes sobre <a href="/en/Mozilla/Firefox_for_Android" title="Firefox for Android">Firefox para Android</a>.</p>

<p>We've organized it into two sections, <a href="#Designing_for_mobile_devices">designing for mobile devices</a> and <a href="#Cross-browser_development">cross-browser compatibility</a>. Also see Jason Grlicky's guide to <a href="/en-US/docs/Web_Development/Mobile/Mobile-friendliness" title="/en-US/docs/Web_Development/Mobile/Mobile-friendliness">mobile-friendliness</a> for web developers.</p>

<h2 id="Projetando_para_dispositivos_móveis">Projetando para dispositivos móveis</h2>

<p>Dispositivos móveis possuem características de hardware bastante diferentes comparados com desktops ou notebooks. Suas telas geralmente são menores, obviamente, mas eles costumam alterar automáticamente a orientação da tela entre os modos retrato e paisagem à medida que o usuário rotaciona o dispositivo.<span class="tlid-translation translation" lang="pt"><span title=""> Eles geralmente têm telas sensíveis ao toque para entrada do usuário</span></span>. API's como geolocalização ou orientação da tela não são suportadas em desktops ou são muito menos úteis e essas API's dão aos usuários mobile novas formas de interagir com seu site.</p>

<h3 id="Working_with_small_screens">Working with small screens</h3>

<p><a href="/en-US/docs/Web/Guide/Responsive_design" title="/en-US/docs/Web/Guide/Responsive_design">Responsive Web Design</a> is a term for a set of techniques that enables your web site to adapt its layout as its viewing environment — most obviously, the size and orientation of the screen — changes. It includes techniques such as:</p>

<ul>
 <li>fluid CSS layouts, to make the page adapt smoothly as the browser window size changes</li>
 <li>the use of <a href="/en/CSS/Media_queries" title="en/CSS/Media_queries">media queries</a> to conditionally include CSS rules appropriate for the device screen <a href="/en/CSS/Media_queries#width" title="en/CSS/Media_queries#width">width</a> and <a href="/en/CSS/Media_queries#height" title="en/CSS/Media_queries#height">height</a></li>
</ul>

<p>The <a href="/en/Mobile/Viewport_meta_tag" title="en/Mobile/Viewport_meta_tag">viewport meta tag</a> instructs the browser to display your site at the appropriate scale for the user's device.</p>

<h3 id="Working_with_touch_screens">Working with touch screens</h3>

<p>To use a touch screen you'll need to work with <a href="/en/DOM/Touch_events" title="en/DOM/Touch_events">DOM Touch events</a>. You won't be able to use the <a href="/En/CSS/:hover" title="En/CSS/:hover">CSS :hover</a> pseudo-class, and will need to design clickable items like buttons to respect the fact that fingers are fatter than mouse pointers. See this article on <a class="external" href="https://web.archive.org/web/20150520130912/http://www.whatcreative.co.uk/blog/tips/designing-for-touch-screen/">designing for touch screens</a>.</p>

<p>You can use the <a href="/en/CSS/Media_queries#-moz-touch-enabled" title="en/CSS/Media_queries#-moz-touch-enabled">-moz-touch-enabled</a> media query to load different CSS on a touch-enabled device.</p>

<h3 id="Optimizing_images">Optimizing images</h3>

<p>To help users whose devices have low or expensive bandwidth, you can optimize images by loading images appropriate to the device screen size and resolution. You do this in CSS by querying for screen <a href="/en/CSS/Media_queries#height" title="en/CSS/Media_queries#height">height</a>, <a href="/en/CSS/Media_queries#width" title="en/CSS/Media_queries#width">width</a>, and <a href="/en/CSS/Media_queries#-moz-device-pixel-ratio" title="en/CSS/Media_queries#-moz-device-pixel-ratio">pixel ratio</a>.</p>

<p>You can also make use of CSS properties to implement visual effects like <a href="/en/CSS/Using_CSS_gradients" title="en/CSS/Using_CSS_gradients">gradients</a> and <a href="/En/CSS/Box-shadow" title="En/CSS/Box-shadow">shadows</a> without images.</p>

<h3 id="Mobile_APIs">Mobile APIs</h3>

<p>Finally, you can take advantage of the new possibilities offered by mobile devices, such as <a href="/en/Detecting_device_orientation" title="en/Detecting_device_orientation">orientation</a> and <a href="/En/Using_geolocation" title="En/Using_geolocation">geolocation</a>.</p>

<h2 id="Cross-browser_development">Cross-browser development</h2>

<h3 id="Write_cross-browser_code">Write cross-browser code</h3>

<p>To create web sites that will work acceptably across different mobile browsers:</p>

<ul>
 <li>Try to avoid using browser-specific features, such as vendor-prefixed CSS properties.</li>
 <li>If you do need to use these features, check whether other browsers implement their own versions of these features, and target them too.</li>
 <li>For browsers that don't support these features, provide an acceptable fallback.</li>
</ul>

<p>For example, if you set a gradient as a background for some text using a vendor-prefixed property like <code>-webkit-linear-gradient</code>, it's best to include the other vendor-prefixed versions of the <a href="/en/CSS/linear-gradient" title="en/CSS/linear-gradient">linear-gradient</a> property. If you don't do that, at least make sure that the default background contrasts with the text: that way, the page will at least be usable in a browser which is not targeted by your <code>linear-gradient</code> rule.</p>

<p>See this <a href="/en/CSS/CSS_Reference/Mozilla_Extensions" title="en/CSS/CSS_Reference/Mozilla_Extensions">list of Gecko-specific properties</a>, and this list of <a href="/en/CSS/CSS_Reference/Webkit_Extensions" title="en/CSS/CSS_Reference/Webkit_Extensions">WebKit-specific properties</a>, and Peter Beverloo's <a class="external" href="http://peter.sh/experiments/vendor-prefixed-css-property-overview/">table of vendor-specific properties</a>.</p>

<p>Using tools like <a class="external" href="http://csslint.net/">CSS Lint</a> can help find problems like this in code, and preprocessors like <a class="external" href="http://sass-lang.com/">SASS</a> and <a class="external" href="http://lesscss.org/">LESS</a> can help you to produce cross-browser code.</p>

<h3 id="Take_care_with_user_agent_sniffing">Take care with user agent sniffing</h3>

<p>It's preferable for web sites to detect specific device features such as screen size and touch screens using the techniques listed above, and adapt themselves accordingly. But sometimes this is impractical, and web sites resort to parsing the browser's user agent string to try to distinguish between desktops, tablets, and phones, to serve different content to each type of device.</p>

<p>If you do this, make sure your algorithm is correct, and you aren't serving the wrong type of content to a device because you don't understand a particular browser's user agent string. See this <a href="/en/Browser_detection_using_the_user_agent#Mobile.2C_Tablet_or_Desktop" title="browser detection using the user agent">guide to using the user agent string to determine device type</a>.</p>

<h3 id="Teste_em_vários_navegadores">Teste em vários navegadores</h3>

<p>Teste seu site em vários navegadores. Isso significa testar em várias plataformas — no mínimo para iOS e Android.</p>

<ul>
 <li>teste no Safari para iPhone usando o <a class="link-https" href="https://developer.apple.com/devcenter/ios/index.action">simulador para iOS</a></li>
 <li>teste no Opera e Firefox usando a <a class="link-https" href="https://developer.android.com/sdk/index.html">Android SDK</a>.  Veja instruções adicionais para <a class="link-https" href="https://wiki.mozilla.org/Mobile/Fennec/Android/Emulator">rodar Firefox para Android usando o emulador de Android</a>.</li>
</ul>
