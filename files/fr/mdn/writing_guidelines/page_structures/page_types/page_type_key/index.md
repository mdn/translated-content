---
title: Modèle de page de garde
slug: MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

> [!NOTE]
> Cette page présente les diverses valeurs de la clé `page-type` utilisées dans les pages anglaises. Nous n'utilisons pas cette clé dans la partie traduite du MDN. Ce guide ne concerne donc que les personnes qui souhaitent contribuer à la partie anglaise du MDN.

Les clés `page-type` de la page de garde décrivent le type d'une page MDN.
Cela permet aux outils de contenu MDN d'automatiser davantage la vérification du contenu et l'organisation de la barre latérale.

Comme pour toute autre clé de page de garde, la clé `page-type` est définie dans le YAML au début de `"index.md"`&nbsp;:

```md
---
title: 100 Continue
slug: Web/HTTP/Reference/Status/100
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/info/rfc9110#status.100
sidebar: http
---
```

Chaque domaine principal du site — JavaScript, CSS, et ainsi de suite — possède un ensemble de valeurs `page-type` spécifiques au domaine, et il existe également un ensemble de valeurs génériques qui peuvent apparaître dans n'importe quel domaine du site.

## Types de pages génériques

Ces types de pages ne sont pas spécifiques à un domaine technologique particulier de MDN&nbsp;:

- `guide`&nbsp;: un guide générique sans structure spécifique.
- `landing-page`&nbsp;: un aperçu du sujet, une introduction à la section et une navigation vers les zones clés.
- `listing-page`&nbsp;: une brève description de la section et une liste des sous-pages de cette section.
- `how-to`&nbsp;: un article pratique orienté vers un objectif.
- `tutorial`&nbsp;: un aperçu d'un article orienté vers l'apprentissage.
- `tutorial-chapter`&nbsp;: une partie d'un tutoriel en plusieurs parties.

## Types de pages spécifiques à un domaine

Cette section répertorie les types de pages qui sont spécifiques à un seul domaine de MDN.

### Types de pages de la zone d'apprentissage

Cette section répertorie les valeurs `page-type` pour les pages sous [Apprendre](/fr/docs/Learn_web_development). Chaque page de cette partie de l'arborescence doit avoir un `page-type`, et sa valeur doit être l'une de celles énumérées ci-dessous ou l'une des valeurs de type de page générique.

- `learn-topic`&nbsp;: un aperçu d'un sujet, c'est-à-dire une collection de modules comme [_CSS_](/fr/docs/Learn_web_development/Core/Styling_basics).
- `learn-module`&nbsp;: un aperçu d'un module, c'est-à-dire une collection ordonnée de guides, comme [_Structurer le contenu avec HTML_](/fr/docs/Learn_web_development/Core/Structuring_content).
- `learn-module-chapter`&nbsp;: un guide qui fait partie d'un module, comme [_Accessibilité mobile_](/fr/docs/Learn_web_development/Core/Accessibility/Mobile).
- `learn-module-assessment`&nbsp;: un guide spécial avec une activité permettant d'évaluer la compréhension d'un module ou d'une partie de celui-ci, comme [_Tester vos compétences&nbsp;: Boutons et formulaires_](/fr/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons).
- `learn-faq`&nbsp;: la réponse à une question spécifique sur le développement web, comme [_Qu'est-ce qu'un nom de domaine&nbsp;?_](/fr/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name).

### Types de pages d'accessibilité

Cette section liste les valeurs `page-type` pour les pages sous [Accessibilité Web](/fr/docs/Web/Accessibility). Chaque page de cette partie de l'arborescence doit avoir un `page-type`, et sa valeur doit être l'une de celles énumérées ci-dessous ou l'une des valeurs de type de page générique.

- `aria-role`&nbsp;: un [rôle](/fr/docs/Web/Accessibility/ARIA/Reference/Roles) ARIA, comme [`section`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/section_role).
- `aria-attribute`&nbsp;: un [attribut](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes) ARIA, comme [`aria-sort`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort).

### Types de pages CSS

Cette section liste les valeurs `page-type` pour les pages sous [CSS Web](/fr/docs/Web/CSS). Chaque page de cette partie de l'arborescence doit avoir un `page-type`, et sa valeur doit être l'une de celles énumérées ci-dessous ou l'une des valeurs de type de page générique.

- `css-at-rule`&nbsp;: une [règle](/fr/docs/Web/CSS/Guides/Syntax/At-rules), comme {{CSSxRef("@media")}}.
- `css-at-rule-descriptor`&nbsp;: un descripteur de règle, comme [`@counter-style/prefix`](/fr/docs/Web/CSS/Reference/At-rules/@counter-style/prefix).
- `css-combinator`&nbsp;: un combinator, comme le [combinator descendant](/fr/docs/Web/CSS/Reference/Selectors/Descendant_combinator).
- `css-function`&nbsp;: une [fonction](/fr/docs/Web/CSS/Reference/Values/Functions), comme {{CSSxRef("max")}}.
- `css-keyword`&nbsp;: un mot-clé, comme {{CSSxRef("inherit")}}.
- `css-media-feature`&nbsp;: une [fonction média](/fr/docs/Web/CSS/Reference/At-rules/@media#media_features), comme {{CSSxRef("@media/hover")}}.
- `css-module`&nbsp;: un module, comme [CSS Animations](/fr/docs/Web/CSS/Guides/Animations).
- `css-property`&nbsp;: une propriété, comme {{CSSxRef("background-color")}}.
- `css-pseudo-class`&nbsp;: une [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes), comme {{CSSxRef(":enabled")}}.
- `css-pseudo-element`&nbsp;: un [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements), comme {{CSSxRef("::before")}}.
- `css-selector`&nbsp;: un [sélecteur de base](/fr/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#basic_selectors), comme le [sélecteur de classe](/fr/docs/Web/CSS/Reference/Selectors/Class_selectors).
- `css-shorthand-property`&nbsp;: une [propriété abrégée](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties), comme {{CSSxRef("background")}}.
- `css-type`&nbsp;: un [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types), comme {{CSSxRef("&lt;color&gt;")}}.

### Types de pages du glossaire

Cette section liste les valeurs `page-type` pour les pages sous [Glossaire](/fr/docs/Glossary). Chaque page de cette partie de l'arborescence doit avoir un `page-type`, et sa valeur doit être l'une de celles énumérées ci-dessous.

- `glossary-definition`&nbsp;: une page définissant un terme, comme [Bézier curve](/fr/docs/Glossary/Bezier_curve).
- `glossary-disambiguation`&nbsp;: une page fournissant des liens vers deux ou plusieurs pages de définition pour un terme ambigu, comme [Node](/fr/docs/Glossary/Node).

### Types de pages HTML

Cette section liste les valeurs `page-type` pour les pages sous [Web/HTML](/fr/docs/Web/HTML). Chaque page de cette partie de l'arborescence doit avoir un `page-type`, et sa valeur doit être l'une de celles énumérées ci-dessous ou l'une des valeurs de [type de page générique](#types_de_pages_génériques).

- `html-attribute`&nbsp;: un attribut HTML, comme [`autocomplete`](/fr/docs/Web/HTML/Reference/Attributes/autocomplete).
- `html-attribute-value`&nbsp;: une seule valeur pour un attribut HTML, comme [`dns-prefetch`](/fr/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch).
- `html-element`&nbsp;: un élément HTML, comme [`<button>`](/fr/docs/Web/HTML/Reference/Elements/button).

### Types de pages HTTP

Cette section liste les valeurs `page-type` pour les pages sous [Web/HTTP](/fr/docs/Web/HTTP). Chaque page de cette partie de l'arborescence doit avoir un `page-type`, et sa valeur doit être l'une de celles énumérées ci-dessous ou l'une des valeurs de [type de page générique](#types_de_pages_génériques).

- `http-csp-directive`&nbsp;: une directive [CSP](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy), comme [`script-src`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src).
- `http-cors-error`&nbsp;: une erreur [CORS](/fr/docs/Web/HTTP/Guides/CORS), comme [`CORSDidNotSucceed`](/fr/docs/Web/HTTP/Guides/CORS/Errors/CORSDidNotSucceed).
- `http-permissions-policy-directive`&nbsp;: une directive [`Permissions-Policy`](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy), comme [`accelerometer`](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy/accelerometer).
- `http-header`&nbsp;: un [en-tête HTTP](/fr/docs/Web/HTTP/Reference/Headers), comme [`Referer`](/fr/docs/Web/HTTP/Reference/Headers/Referer).
- `http-method`&nbsp;: une [méthode de requête HTTP](/fr/docs/Web/HTTP/Reference/Methods), comme [`GET`](/fr/docs/Web/HTTP/Reference/Methods/GET).
- `http-status-code`&nbsp;: un [code de statut HTTP](/fr/docs/Web/HTTP/Reference/Status), comme [`404`](/fr/docs/Web/HTTP/Reference/Status/404).

### Types de pages JavaScript

Cette section liste les valeurs `page-type` pour les pages sous [Web/JavaScript](/fr/docs/Web/JavaScript). Chaque page de cette partie de l'arborescence doit avoir un `page-type`, et sa valeur doit être l'une de celles énumérées ci-dessous ou l'une des valeurs de [type de page générique](#types_de_pages_génériques).

- `javascript-class`&nbsp;: une définition d'un objet intégré, comme [`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array).
- `javascript-constructor`&nbsp;: un constructeur d'objet, comme [`Array()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Array).
- `javascript-error`&nbsp;: une erreur, comme [RangeError: invalid array length](/fr/docs/Web/JavaScript/Reference/Errors/Invalid_array_length).
- `javascript-function`&nbsp;: une fonction intégrée qui n'est pas une méthode d'objet, comme [`encodeURI()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/encodeURI).
- `javascript-global-property`&nbsp;: une propriété globale comme [`NaN`](/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN).
- `javascript-instance-accessor-property`&nbsp;: une propriété d'accès sur une instance d'objet, comme [`Map.prototype.size`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map/size).
- `javascript-instance-data-property`&nbsp;: une propriété de données sur une instance d'objet, comme la propriété [`length`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/length) de `Array`.
- `javascript-instance-method`&nbsp;: une méthode sur une instance d'objet, comme [`Array.prototype.at()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/at).
- `javascript-language-feature`&nbsp;: une partie de la syntaxe JavaScript ne correspondant à aucune autre catégorie, comme [les paramètres rest](/fr/docs/Web/JavaScript/Reference/Functions/rest_parameters).
- `javascript-namespace`&nbsp;: un objet qui n'est pas instantiable et qui n'a que des membres statiques, comme [`Math`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math).
- `javascript-operator`&nbsp;: un opérateur, comme [Addition (+)](/fr/docs/Web/JavaScript/Reference/Operators/Addition).
- `javascript-statement`&nbsp;: une instruction, comme [`switch`](/fr/docs/Web/JavaScript/Reference/Statements/switch).
- `javascript-static-accessor-property`&nbsp;: une propriété d'accès statique, comme [`RegExp.lastMatch`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch).
- `javascript-static-data-property`&nbsp;: une propriété de données statique, comme [`Math.E`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/E).
- `javascript-static-method`&nbsp;: une méthode statique, comme [`Array.from()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/from).

### Types de pages MathML

Cette section liste les valeurs `page-type` pour les pages sous [Web/MathML](/fr/docs/Web/MathML). Chaque page de cette partie de l'arborescence doit avoir un `page-type`, et sa valeur doit être l'une de celles énumérées ci-dessous ou l'une des valeurs de [type de page générique](#types_de_pages_génériques).

- `mathml-attribute`&nbsp;: un attribut MathML, comme [`mathcolor`](/fr/docs/Web/MathML/Reference/Global_attributes/mathcolor).
- `mathml-element`&nbsp;: un élément HTML, comme [`<msqrt>`](/fr/docs/Web/MathML/Reference/Element/msqrt).

### Types de pages SVG

Cette section liste les valeurs `page-type` pour les pages sous [Web/SVG](/fr/docs/Web/SVG). Chaque page de cette partie de l'arborescence doit avoir un `page-type`, et sa valeur doit être l'une de celles énumérées ci-dessous ou l'une des valeurs de [type de page générique](#types_de_pages_génériques).

- `svg-attribute`&nbsp;: un attribut SVG, comme [`crossorigin`](/fr/docs/Web/SVG/Reference/Attribute/crossorigin).
- `svg-element`&nbsp;: un élément SVG, comme [`<circle>`](/fr/docs/Web/SVG/Reference/Element/circle).

### Types de pages Web API

Cette section liste les valeurs `page-type` pour les pages sous [Web/API](/fr/docs/Web/API). Chaque page de cette partie de l'arborescence doit avoir un `page-type`, et sa valeur doit être l'une de celles énumérées ci-dessous ou l'une des valeurs de [type de page générique](#types_de_pages_génériques).

- `web-api-overview`&nbsp;: donne un aperçu d'une API Web, comme [l'API Fetch](/fr/docs/Web/API/Fetch_API).
- `web-api-interface`&nbsp;: une interface d'API Web, comme [`Request`](/fr/docs/Web/API/Request).
- `web-api-constructor`&nbsp;: un constructeur, comme [`Request()`](/fr/docs/Web/API/Request/Request).
- `web-api-instance-method`&nbsp;: une méthode d'instance, comme [`cache.add()`](/fr/docs/Web/API/Cache/add).
- `web-api-instance-property`&nbsp;: une propriété d'instance, comme [`request.headers`](/fr/docs/Web/API/Request/headers).
- `web-api-static-method`&nbsp;: une méthode statique, comme [`Response.error()`](/fr/docs/Web/API/Response/error_static).
- `web-api-static-property`&nbsp;: une propriété statique, comme [`Notification.permission`](/fr/docs/Web/API/Notification/permission_static).
- `web-api-event`&nbsp;: un évènement, comme [`Notification.click`](/fr/docs/Web/API/Notification/click_event).
- `webgl-extension`&nbsp;: une extension WebGL, comme [`WEBGL_draw_buffers`](/fr/docs/Web/API/WEBGL_draw_buffers).
- `webgl-extension-method`&nbsp;: une méthode d'extension WebGL, comme [`OES_vertex_array_object.bindVertexArrayOES()`](/fr/docs/Web/API/OES_vertex_array_object/bindVertexArrayOES).

### Types de pages WebAssembly

Cette section liste les valeurs `page-type` pour les pages sous [WebAssembly/](/fr/docs/WebAssembly). Chaque page de cette partie de l'arborescence doit avoir un `page-type`, et sa valeur doit être l'une de celles énumérées ci-dessous ou l'une des valeurs de [type de page générique](#types_de_pages_génériques).

- `webassembly-function`&nbsp;: une fonction globale, qui est une méthode directement sous l'objet `WebAssembly` agissant comme un espace de noms, comme [`WebAssembly.instantiate()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static).
- `webassembly-constructor`&nbsp;: un constructeur, comme [`WebAssembly.Exception()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Exception/Exception).
- `webassembly-interface`&nbsp;: une interface WebAssembly, comme [`WebAssembly.LinkError`](/fr/docs/WebAssembly/Reference/JavaScript_interface/LinkError).
- `webassembly-instance-property`&nbsp;: une propriété d'instance, comme [`WebAssembly.Instance.exports`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports).
- `webassembly-instance-method`&nbsp;: une méthode d'instance, comme [`WebAssembly.Exception.getArg()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg).
- `webassembly-static-method`&nbsp;: une méthode statique, comme [`WebAssembly.Module.exports()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Module/exports_static).
- `webassembly-instruction`&nbsp;: une instruction, ou un ensemble d'instructions, comme [`wrap`](/fr/docs/WebAssembly/Reference/Numeric/wrap_i64).

### Types de pages WebDriver

Cette section liste les valeurs `page-type` pour les pages sous [Web/WebDriver](/fr/docs/Web/WebDriver). Chaque page de cette partie de l'arborescence doit avoir un `page-type`, et sa valeur doit être l'une de celles énumérées ci-dessous ou l'une des valeurs de [type de page générique](#types_de_pages_génériques).

- `webdriver-command`&nbsp;: une commande WebDriver, comme [`CloseWindow`](/fr/docs/Web/WebDriver/Reference/Classic/Commands/CloseWindow).
- `webdriver-capability`&nbsp;: une capacité WebDriver, comme [`acceptInsecureCerts`](/fr/docs/Web/WebDriver/Reference/Capabilities/acceptInsecureCerts).
- `webdriver-error`&nbsp;: une erreur WebDriver, comme [Insecure certificate](/fr/docs/Web/WebDriver/Reference/Errors/InsecureCertificate).

### Types de pages WebExtensions

Cette section liste les valeurs `page-type` pour les pages sous [Mozilla/Add-ons/WebExtensions](/fr/docs/Mozilla/Add-ons/WebExtensions). Chaque page de cette partie de l'arborescence doit avoir un `page-type`, et sa valeur doit être l'une de celles énumérées ci-dessous ou l'une des valeurs de [type de page générique](#types_de_pages_génériques).

- `webextension-api`&nbsp;: une API WebExtension, comme [`alarms`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/alarms).
- `webextension-api-event`&nbsp;: un évènement d'API WebExtension, comme [`action.onClicked`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/action/onClicked).
- `webextension-api-function`&nbsp;: une fonction WebExtension, comme [`action.setBadgeText()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/action/setBadgeText).
- `webextension-api-property`&nbsp;: une propriété WebExtension, comme [`browserSettings.openBookmarksInNewTabs`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openBookmarksInNewTabs).
- `webextension-api-type`&nbsp;: un type WebExtension, comme [`contextualIdentities.ContextualIdentity`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/ContextualIdentity).
- `webextension-manifest-key`&nbsp;: une clé de manifeste WebExtension, comme [`user_scripts`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts).

### Types de pages Web Manifest

Cette section liste les valeurs `page-type` pour les pages sous [Web/Manifest](/fr/docs/Web/Progressive_web_apps/Manifest). Chaque page de cette partie de l'arborescence doit avoir un `page-type`, et sa valeur doit être l'une de celles énumérées ci-dessous ou l'une des valeurs de [type de page générique](#types_de_pages_génériques).

- `web-manifest-member`&nbsp;: un membre d'un manifeste, comme [`description`](/fr/docs/Web/Progressive_web_apps/Manifest/Reference/description).

### Types de pages XPath

Cette section liste les valeurs `page-type` pour les pages sous [Web/XPath](/fr/docs/Web/XML/XPath). Chaque page de cette partie de l'arborescence doit avoir un `page-type`, et sa valeur doit être l'une de celles énumérées ci-dessous ou l'une des valeurs de [type de page générique](#types_de_pages_génériques).

- `xpath-function`&nbsp;: une fonction, comme [`ceiling()`](/fr/docs/Web/XML/XPath/Reference/Functions/ceiling)

### Types de pages XSLT

Cette section liste les valeurs `page-type` pour les pages sous [Web/XSLT](/fr/docs/Web/XML/XSLT). Chaque page de cette partie de l'arborescence doit avoir un `page-type`, et sa valeur doit être l'une de celles énumérées ci-dessous ou l'une des valeurs de [type de page générique](#types_de_pages_génériques).

- `xslt-element`&nbsp;: un élément de XSLT, comme [`<xsl:message>`](/fr/docs/Web/XML/XSLT/Reference/Element/message).

### Types de pages EXSLT

Cette section liste les valeurs `page-type` pour les pages sous [Web/EXSLT](/fr/docs/Web/XML/EXSLT). Chaque page de cette partie de l'arborescence doit avoir un `page-type`, et sa valeur doit être l'une de celles énumérées ci-dessous ou l'une des valeurs de [type de page générique](#types_de_pages_génériques).

- `exslt-function`&nbsp;: une fonction d'EXSLT, comme [`exsl:node-set()`](/fr/docs/Web/XML/EXSLT/Reference/exsl/node-set).

### Types de pages Firefox

Cette section liste les valeurs `page-type` pour les pages sous [Mozilla/Firefox](/fr/docs/Mozilla/Firefox). Chaque page de cette partie de l'arborescence doit avoir un `page-type`, et sa valeur doit être l'une de celles énumérées ci-dessous ou l'une des valeurs de [type de page générique](#types_de_pages_génériques).

- `firefox-release-notes`&nbsp;: les notes de version pour une version particulière de Firefox, comme [_Firefox 115 pour les développeuses et développeurs_](/fr/docs/Mozilla/Firefox/Releases/115).
