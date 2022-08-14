---
title: Certificate Transparency
slug: Web/Security/Certificate_Transparency
tags:
  - Security
  - Sicherheit
  - Web
  - Zertifikate
translation_of: Web/Security/Certificate_Transparency
---
**Certificate Transparency** (kurz; CT) ist ein offenes Framework, das entwickelt wurde, um vor Zertifikatsfehlausstellungen schützen und diese Überwachung zu können. Neu ausgestellte Zertifikate werden dabei in öffentlich geführten, oft unabhängigen CT-Protokollen "protokolliert". An diese Protokolle werden immer nur neue Datensätze angefügt, die jeweils kryptografisch gesichert sind und die einzelnen ausgestellten TLS-Zertifikate dokumentieren.

Auf diese Weise können die Zertifizierungsstellen (CAs) einer viel stärkeren öffentlichen Kontrolle und Aufsicht unterliegen. Potenziell böswillige Zertifikate, z.B. solche, die gegen die _Grundanforderungen_ des CA/B-Forums verstoßen, können viel schneller entdeckt und widerrufen werden. Browser-Hersteller und Root-Store-Betreuer sind auch in der Lage, fundiertere Entscheidungen über problematische CAs zu treffen, denen sie möglicherweise misstrauen.

## Hintergrund

CT-Protokolle bauen auf dem Fundament der _Merkle_-_Baum_-Datenstruktur auf. Die Knoten sind mit den _kryptographischen Hashes_ ihrer Kindknoten gekennzeichnet. Blattknoten enthalten Hashes von tatsächlichen Datenstücken. Die Beschriftung des Wurzelknotens hängt daher von allen anderen Knoten im Baum ab.

Im Zusammenhang mit der Transparenz von Zertifikaten sind die von den Blattknoten gehashten Daten die Zertifikate, die von den verschiedenen heute tätigen CAs ausgestellt wurden. Die Einbeziehung von Zertifikaten kann über einen Audit-Beweis verifiziert werden, der effizient in logarithmischer O(log n)-Zeit generiert und verifiziert werden kann.

Certificate Transparency kam ursprünglich im Jahr 2013 vor dem Hintergrund kompromittierter Zertifizeirungsstellen (DigiNotar breach, 2011), fragwürdiger Entscheidungen (Trustwave subordinate root incident, 2012) und technischer Probleme beim Ausstellen von Zertifikaten (schwache, 512 bit Zertifikate von Digicert Sdn Bhd aus Malaysia).

## Implementation

Wenn Zertifikate an ein CT-Protokoll übermittelt werden, wird ein signierter Zertifikat-Zeitstempel (_signed certificate timestamp_, SCT) erzeugt und zurückgeschickt. Dieser wird dem Protokoll hinzugefügt und dient als Nachweis, dass das Zertifikat eingereicht wurde.

Die Spezifikation besagt, dass konforme Server den TLS-Clients beim Verbindungsaufabeu eine Reihe dieser SCTs zur Verfügung stellen müssen. Dies kann über eine Reihe verschiedener Mechanismen erfolgen:

- X.509v3 certificate extension: signierte SCTs werden direkt in das Zertifikat einbettet
- Eine TLS-Erweiterung des Typs `signed_certificate_timestamp` wird während des handshakes gesendet
- OCSP stapling (über die `status_request` TLS-Erweiterung) und das Bereitstellen einer `SignedCertificateTimestampList` mit einem oder mehreren SCTs

Mit der oben genannten X.509 certificate extension entscheidet die Zertifizierungsstelle darüber, welche SCTs eingebunden werden. Dieser Mechanismus kann verwendet werden, ohne eine Anpassung am Webserver vornehmen zu müssen.

Bei den anderen beiden Methoden hingegen müssen die Server aktualisiert werden, um die erforderlichen Daten zu senden. Der Vorteil der Methoden besteht darin, dass der Serverbetreiber die CT-Protokollquellen für die bereitgestellten SCTs selbst auswählen und definieren kann.

## Browser Anforderungen

Google Chrome erfordert die Einbeziehung des CT-Protokolls für alle Zertifikatsausgaben mit einem nicht vor dem 30. April 2018 liegenden Datum. Nutzer werden daran gehindert, Websites zu besuchen, die nicht konforme TLS-Zertifikate verwenden. Chrome hatte zuvor die CT-Einbeziehung für _Extended Validation_ (EV) und von Symantec ausgestellte Zertifikate verlangt.

Apple [verlangt](https://support.apple.com/en-gb/HT205280) eine unterschiedliche Anzahl von SCTs, damit Safari und andere Server den einzelnen Serverzertifikaten vertrauen können.

Firefox [prüft aktuell nicht](https://bugzilla.mozilla.org/show_bug.cgi?id=1281469) bzw. erfordert nicht, dass CT-Protokolle verwendet werden, wenn Nutzer die Webseiten besuchen.

Der [Expect-CT header ](/de/docs/Web/HTTP/Headers/Expect-CT)kann verwendet werden, um vom Browser zu verlangen, dass dieser _immer_ die Certificate Transparency erfordert (z.B. in Chrome, selbst wenn das Zertifikat ausgestellt wurde mit einem _notBefore Datum_ vor April).

## Spezifikationen

{{Specifications}}
