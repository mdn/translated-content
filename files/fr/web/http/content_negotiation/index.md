---
title: La négociation de contenu
slug: Web/HTTP/Content_negotiation
translation_of: Web/HTTP/Content_negotiation
---
{{HTTPSidebar}}

En [HTTP](/en-US/docs/Glossary/HTTP), la **_négociation de contenu_** est le mécanisme utilisé pour fournir différentes représentations d'une ressource à la même URI, afin que l'agent utilisateur puisse spécifier celle qui convient le mieux à l'utilisateur (par exemple, la langue d'un document, le format d'image, ou l'encodage du contenu).

## Principes de la négociation de contenu

Un document spécifique s'appelle une _ressource_. Lorsqu'un client veut y accéder, il le demande en utilisant son URL. Le serveur utilise cette URL pour choisir une des différentes versions qu'il peut fournir - chaque version étant appelée une représentation - et renvoie cette représentation spécifique au client. La ressource globale, ainsi que chacune de ses représentations, ont une URL spécifique. La façon dont une représentation spécifique est choisie est déterminée par la _négociation de contenu_ et il existe plusieurs façons de négocier entre le client et le serveur.

![](httpnego.png)

La sélection de la représentation la mieux adaptée se fait par l'un des deux mécanismes suivants:

- Des [en-têtes HTTP](/fr/docs/Web/HTTP/Headers) spécifiques envoyés par le client (_négociation pilotée par le serveur_ ou _négociation proactive_), qui est le moyen standard de négocier un type de ressource spécifique.
- Les [codes réponses](/fr/docs/Web/HTTP/Status) {{HTTPStatus("300")}} (Multiple Choices) ou {{HTTPStatus("406")}} (Not Acceptable) envoyés par le serveur (_négociation pilotée par le client_ ou _négociation réactive_), qui sont utilisés comme mécanismes de repli.

Au fil des ans, d'autres propositions de négociation de contenu, comme la négociation transparente du contenu et l'en-tête `Alternates`, ont été proposées. Elles n'ont pas réussi à emporter l'adhésion et ont été abandonnées.

## La négociation de contenu gérée par le serveur

Dans la _négociation de contenu gérée par le serveur_, ou négociation proactive de contenu, le navigateur (ou tout autre type de client) envoie plusieurs en-têtes HTTP avec l'URL décrivant les choix préférés de l'utilisateur. Le serveur les utilise comme indications et un algorithme interne choisit le meilleur contenu à servir au client. L'algorithme est spécifique au serveur et n'est pas défini dans la norme. Voir, par exemple, l'[algorithme de négociation d'Apache 2.2](http://httpd.apache.org/docs/2.2/en/content-negotiation.html#algorithm).

![](httpnegoserver.png)

La norme HTTP/1.1 définit la liste des en-têtes standard qui initient la négociation pilotée par le serveur ({{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Charset")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}). Bien qu'à proprement parler {{HTTPHeader("User-Agent")}} ne figure pas dans la liste, il est aussi parfois utilisé pour envoyer une représentation spécifique de la ressource demandée, bien que cela ne soit pas considéré comme une bonne pratique. Le serveur utilise l'en-tête {{HTTPHeader("Vary")}} pour indiquer quels en-têtes il a effectivement utilisés pour la négociation de contenu (ou plus précisément les en-têtes de réponse associés), pour que les [caches](/en-US/docs/Web/HTTP/Caching) puissent fonctionner de manière optimale.

En outre, il existe une proposition expérimentale visant à ajouter d'autres en-têtes à la liste des en-têtes disponibles, appelés indications (_hints_) du client. Ces hints indiquent sur quel type de périphérique l'agent utilisateur fonctionne (par exemple, s'il s'agit d'un ordinateur de bureau ou d'un périphérique mobile).

Même si la négociation de contenu gérée par le serveur est le moyen le plus courant de s'entendre sur une représentation spécifique d'une ressource, elle présente plusieurs inconvénients:

- Le serveur n'a pas une connaissance totale du navigateur. Même avec l'extension _Client Hints_, il n'a pas une connaissance complète des capacités du navigateur. Contrairement à la négociation de contenu réactif où le client fait le choix, celui du serveur est toujours quelque peu arbitraire.
- L'information fournie par le client est assez verbeuse (la compression de l'en-tête HTTP/2 atténue ce problème) et est un risque d'atteinte à la vie privée (empreintes digitales HTTP)
- Comme plusieurs représentations d'une ressource donnée sont envoyées, les caches partagés sont moins efficaces et les implémentations des serveurs sont plus complexes.

### The `Accept` header

The {{HTTPHeader("Accept")}} header lists the MIME types of media resources that the agent is willing to process. It is comma-separated lists of MIME types, each combined with a quality factor, a parameter indicating the relative degree of preference between the different MIME types.

The {{HTTPHeader("Accept")}} header is defined by the browser, or any other user-agent, and can vary according to the context, like fetching an HTML page or an image, a video, or a script: It is different when fetching a document entered in the address bar or an element linked via an {{ HTMLElement("img") }}, {{ HTMLElement("video") }} or {{ HTMLElement("audio") }} element. Browsers are free to use the value of the header that they think is the most adequate; an exhaustive list of [default values for common browsers](/en-US/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values) is available.

### The `Accept-CH` header {{experimental_inline}}

> **Note :** This is part of an **experimental** technology called _Client Hints_. Initial support is in Chrome 46 or later. The Device-Memory value is in Chrome 61 or later.

The experimental {{HTTPHeader("Accept-CH")}} lists configuration data that can be used by the server to select an appropriate response. Valid values are:

| Value            | Meaning                                                                                                                                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Device-Memory`  | Indicates the approximate amount of device RAM. This value is an approximation given by rounding to the nearest power of 2 and dividing that number by 1024. For example, 512 megabytes will be reported as `0.5`.  |
| `DPR`            | Indicates the client's device pixel ratio.                                                                                                                                                                          |
| `Viewport-Width` | Indicates the layout viewport width in CSS pixels.                                                                                                                                                                  |
| `Width`          | Indicates the resource width in physical pixels (in other words the intrinsic size of an image).                                                                                                                    |

### The `Accept-Charset` header

The {{HTTPHeader("Accept-Charset")}} header indicates to the server what kinds of character encodings are understood by the user-agent. Traditionally, it was set to a different value for each locale for the browser, like `ISO-8859-1,utf-8;q=0.7,*;q=0.7` for a Western European locale.

With UTF-8 now being well-supported, being the preferred way of encoding characters, [and to guarantee better privacy through less configuration-based entropy](https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy), browsers omit the `Accept-Charset` header: Internet Explorer 8, Safari 5, Opera 11, Firefox 10 and Chrome 27 have abandoned this header.

### The `Accept-CH-Lifetime` header

> **Note :** This is part of an **experimental** technology called *Client Hints*  and is only available in Chrome 61 or later.

The {{HTTPHeader("Accept-CH-Lifetime")}} header is used with the `Device-Memory` value of the `Accept-CH` header and indicates the amount of time the device should opt-in to sharing the amount of device memory with the server. The value is given in miliseconds and it's use is optional.

### The `Accept-Encoding` header

The {{HTTPHeader("Accept-Encoding")}} header defines the acceptable content-encoding (supported compressions). The value is a q-factor list (e.g.: `br, gzip;q=0.8`) that indicates the priority of the encoding values. The default value `identity` is at the lowest priority (unless otherwise declared).

Compressing HTTP messages is one of the most important ways to improve the performance of a Web site, it shrinks the size of the data transmitted and makes better use of the available bandwidth; browsers always send this header and the server should be configured to abide to it and to use compression.

### The `Accept-Language` header

The {{HTTPHeader("Accept-Language")}} header is used to indicate the language preference of the user. It is a list of values with quality factors (like: `"de, en;q=0.7`"). A default value is often set according the language of the graphical interface of the user agent, but most browsers allow to set different language preferences.

Due to the [configuration-based entropy](https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy) increase, a modified value can be used to fingerprint the user, it is not recommended to change it and a Web site cannot trust this value to reflect the actual wish of the user. Site designers must not be over-zealous by using language detection via this header as it can lead to a poor user experience:

- They should always provide a way to overcome the server-chosen language, e.g., by providing a language menu on the site. Most user-agents provide a default value for the `Accept-Language` header, adapted to the user interface language and end users often do not modify it, either by not knowing how, or by not being able to do it, as in an Internet café for instance.
- Once a user has overridden the server-chosen language, a site should no longer use language detection and should stick with the explicitly-chosen language. In other words, only entry pages of a site should select the proper language using this header.

### The `User-Agent` header

> **Note :** Though there are legitimate uses of this header for selecting content, [it is considered bad practice](/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent) to rely on it to define what features are supported by the user agent.

The {{HTTPHeader("User-Agent")}} header identifies the browser sending the request. This string may contain a space-separated list of _product tokens_ and _comments_.

A _product token_ is a name followed by a '`/`' and a version number, like `Firefox/4.0.1`. There may be as many of them as the user-agent wants. A _comment_ is a free string delimited by parentheses. Obviously parentheses cannot be used in that string. The inner format of a comment is not defined by the standard, though several browser put several tokens in it, separated by '`;`'.

### The `Vary` response header

In opposition to the previous `Accept-*` headers which are sent by the client, the {{HTTPHeader("Vary")}} HTTP header is sent by the web server in its response. It indicates the list of headers used by the server during the server-driven content negotiation phase. The header is needed in order to inform the cache of the decision criteria so that it can reproduce it, allowing the cache to be functional while preventing serving erroneous content to the user.

The special value of '`*`' means that the server-driven content negotiation also uses information not conveyed in a header to choose the appropriate content.

The `Vary` header was added in the version 1.1 of HTTP and is necessary in order to allow caches to work appropriately. A cache, in order to work with server-driven content negotiation, needs to know which criteria was used by the server to select the transmitted content. That way, the cache can replay the algorithm and will be able to serve acceptable content directly, without more request to the server. Obviously, the wildcard '`*`' prevents caching from occurring, as the cache cannot know what element is behind it.

## Agent-driven negotiation

Server-driven negotiation suffers from a few downsides: it doesn't scale well. There is one header per feature used in the negotiation. If you want to use screen size, resolution or other dimensions, a new HTTP header must be created. Sending of the headers must be done on every request. This is not too problematic with few headers, but with the eventual multiplications of them, the message size would lead to a decrease in performance. The more precise headers are sent, the more entropy is sent, allowing for more HTTP fingerprinting and corresponding privacy concern.

From the beginnings of HTTP, the protocol allowed another negotiation type: _agent-driven negotiation_ or _reactive negotiation_. In this negotiation, when facing an ambiguous request, the server sends back a page containing links to the available alternative resources. The user is presented the resources and choose the one to use.

![](httpnego3.png)

Unfortunately, the HTTP standard does not specify the format of the page allowing to choose between the available resource, which prevents to easily automatize the process. Besides falling back to the _server-driven negotiation_, this method is almost always used in conjunction with scripting, especially with JavaScript redirection: after having checked for the negotiation criteria, the script performs the redirection. A second problem is that one more request is needed in order to fetch the real resource, slowing the availability of the resource to the user.
