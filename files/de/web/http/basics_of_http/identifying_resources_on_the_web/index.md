---
title: Resourcen im Internet identifizieren
slug: Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web
tags:
  - Anfrage
  - Domain
  - HTTP
  - Internet
  - Pfad
  - Resourcen
  - Schema
  - Syntax
  - URI
  - URL
  - URL Syntax
  - fragment
  - port
translation_of: Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web
---
{{HTTPSidebar}}

Das Ziel einer HTTP Anfrage wird Resource genannt. Deren Eigenschaften ist nicht weiter definiert, sie könnte ein Dokument, ein Photo oder irgendwas anderes sein. Jede Resource ist identifiziert über einen Uniformen Resourcen Identifizierer ({{Glossary("URI")}}), welche überall in HTTP genutzt werden, um Resourcen zu identifizieren.

Die Identität und der Ort von Resourcen im Internet sind meistens gegeben über eine einzelne URL (Uniform Resource Locator, eine Art der URI). Es gibt manchmal Gründe, dass Identitä und Ort nicht von der selben URI gegeben: HTTP benutzt einen spezifischen HTTP header, {{HTTPHeader("Alt-Svc")}} wenn die Resource will, dass der Client sie an einem anderen Ort anfragt.

## URLs und URNs

### URLs

Die häufigste Form von URI ist der Uniform Resource Locator ({{Glossary("URL")}}), welche als Web Adresse bekannt ist.

    https://developer.mozilla.org
    https://developer.mozilla.org/en-US/docs/Learn/
    https://developer.mozilla.org/en-US/search?q=URL

Jede dieser URLs kann in einen Browser eingegeben werden um mit diesem die assoziierte Seite (auch eine Resource) zu laden.

Eine URL besteht aus verschiedenen Teilen, manche werden benötigt, andere sind optional. Ein komplexeres Beispiel könnte so aussehen:

    http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument

### URNs

Ein Uniform Resource Name (URN) ist eine URI die eine Resource über einen namen in einem Namespace.

    urn:isbn:9780141036144
    urn:ietf:rfc:7230

Die beiden URNs korrespondieren zu

- Dem Buch Nineteen Eighty-Four von George Orwell,
- Der IETF Spezifikation 7230, Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing.

## Syntax von Uniform Resource Identifiers (URIs)

### Schema oder Protokoll

- ![Protocol](https://mdn.mozillademos.org/files/8013/mdn-url-protocol@x2.png)
  - : `http://` ist das Protokoll. Es gibt an, welches Protokoll der Browser nutzen soll. Normalerweise ist das das HTTP Protokoll oder seine gesicherte version, HTTPS. Das Internet verlangt eines der beiden, aber Browser wissen auch wie andere Protokolle wie mailto: (um einen email Client zu öffnen) oder ftp: (für einen Datentransfer) zu behandeln sind, also sollte man nicht überrascht sein wenn man solche Protokolle sieht. Häufige Schemata sind:

| Schema      | Beschreibung                                                               |
| ----------- | -------------------------------------------------------------------------- |
| data        | [Daten URIs](/de/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)                   |
| file        | Serverspezifische Dateinamen                                               |
| ftp         | [File Transfer Protocol](/de/docs/Glossary/FTP)                            |
| http/https  | [Hyper text transfer protocol (Secure)](/de/docs/Glossary/HTTP)            |
| mailto      | email Adresse                                                              |
| ssh         | Secure shell                                                               |
| tel         | Telephon                                                                   |
| urn         | Uniform Resource Names                                                     |
| view-source | Source Code der Resource                                                   |
| ws/wss      | (Verschlüsselte) [WebSocket](/de/docs/Web/API/WebSockets_API) Verbindungen |

### Authorität

- ![Domaine Name](https://mdn.mozillademos.org/files/8015/mdn-url-domain@x2.png)
  - : `www.example.com` ist der Domain Name oder Authorität die den Namespace verwaltet. Sie gibt an, welcher Server angefragt wird. Alternativ ist es möglich, direkt eine {{Glossary("IP address")}} anzugeben, aber da es weniger angenehm ist, wird es nicht häufig genutzt.

### Port

- ![Port](https://mdn.mozillademos.org/files/8017/mdn-url-port@x2.png)
  - : `:80` ist der Port in diesem Fall. Er gibt das technologische "Tor" an, über welches die Resource auf dem Server angesprochen wird. Er wird in der Regel weggelassen wenn der Server die Standard Ports für das HTTP (80) oder HTTPS (443) Protokoll nutzt. Andernfalls wird die Portangabe benötigt.

### Pfad

- ![Path to the file](https://mdn.mozillademos.org/files/8019/mdn-url-path@x2.png)
  - : `/path/to/myfile.html` ist der Pfad zu der Resource auf dem Server. Anfangs hat der Pfad einen Dateipfad auf dem Server angegeben, heutzutage ist er aber meist eine Abstraktion, die von dem Server verarbeitet wird

### Anfrage

- ![Parameters](https://mdn.mozillademos.org/files/8021/mdn-url-parameters@x2.png)
  - : `?schluessel1=wert1&wśchluessel2=wert2` sind extra Parameter die dem Server übergeben werden. Diese Parameter sind eine Liste von Schlüssel/Wert paaren, die mit einem & getrennt werden. Der Server kann diese Parameter nutzen um zusätzliche Sachen zu machen bevor die Resource dem Nutzer übergeben wird. Jeder Server hat eigene Regeln bezüglich Parametern und der einzig sichere Weg diese zu wissen, ist denn Besitzer des Servers zu fragen.

### Fragment

- ![Anchor](https://mdn.mozillademos.org/files/8023/mdn-url-anchor@x2.png)
  - : `#SomewhereInTheDocument` ist ein Anker zu einem anderen Bereich der Resource selber. Ein Anker repräsentiert eine Art "Lesezeichen" innerhalb der Resource, damit der Browser den Inhalt an der Stelle des Ankers anzeigt. In einem HTML document wird der Browser zum Beispiel an die Stelle scrollen, an der der Anker definiert ist; in einem Video oder Audio Document wird der Browser zu der entsprechenden Zeit springen. Das Fragment selber wird allerdings nie zu dem Server gesendet, es wird allein von dem Browser verarbeitet.

## Nutzungshinweise

Wenn man URLs in einem {{Glossary("HTML")}} Inhalt nutzt sollte man generell nur ein paar dieser URL Schemata nutzen. Nutzt man Subresourcen — das heißt, Dateien die als Teil eines größeren Dokuments geladen werden —, sollte man nur die HTTP und HTTPS Schemata nutzen. Browser entfernen vermehrt den Support dafür, dass FTP Schema zu nutzen um Subresourcen zu laden, da dies eine Sicherheitslücker darstellt.

FTP ist immernoch akzeptiert auf dem obersten Level (zum Beispiel direkt in der URL Leiste des Browsers eingegeben, oder das Ziel eines Links), wobei manche Browser FTP Inhalte an eine andere Anwendung delegieren.

## Examples

    https://developer.mozilla.org/en-US/docs/Learn
    tel:+1-816-555-1212
    git@github.com:mdn/browser-compat-data.git
    ftp://example.org/resource.txt
    urn:isbn:9780141036144
    mailto:help@supercyberhelpdesk.info

## Spezifikationen

| Specification                                                            | Title                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| {{RFC("7230", "Uniform Resource Identifiers", "2.7")}} | Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing |

## See also

- [What is a URL?](/de/docs/Learn/Common_questions/What_is_a_URL)
- [IANA list of URI schemes](http://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
