---
title: Webbasierte Protokoll-Handler
slug: Web/API/Navigator/registerProtocolHandler/Web-based_protocol_handlers
translation_of: Web/API/Navigator/registerProtocolHandler/Web-based_protocol_handlers
original_slug: Web/API/Navigator/registerProtocolHandler/Webbasierte_protokoll-handler
---
## Hintergrund

Man findet im Web häufiger Seiten, die Verweise mit anderen Protokollen als HTTP einsetzen. Ein Beispiel ist das `mailto:` Protokoll:

```html
<a href="mailto:webmaster@example.com">Web Master</a>
```

Seitenersteller können `mailto:` Verweise nutzen, wenn sie einen bequemen Weg anbieten möchten, E-Mails direkt aus ihrer Webseite heraus zu versenden. Wird der Link aktiviert, sollte der Browser das im Betriebssystem eingestelle Standardprogramm für E-Mail starten. Das ist ein Beispiel für einen desktopbasierten Protokoll-Handler.

Webbasierte Protokoll-Handler erlauben webbasierten Anwendungen ebenfall an solchen Prozessen teilzunehmen. Das wird mit der Migration vieler Anwendungen ins Web zunehmend wichtiger. Tatsächlich gibt es bereits viele Webanwendungen, die einen `mailto:` Verweis verarbeiten könnten.

## Registrierung

Das Einrichten einer webbasierten Anwendung als Protokoll-Handler ist unkompliziert. Die Webapp nutzt [`registerProtocolHandler()`](/en-US/docs/Web/API/navigator.registerProtocolHandler "DOM/window.navigator.registerProtocolHandler"), um sich selbst beim Browser als potentiellen Handler für ein bestimmtes Protokoll zu registrieren. Ein Beispiel:

```js
navigator.registerProtocolHandler("burger",
                                  "http://www.google.co.uk/?uri=%s",
                                  "Burger handler");
```

Die Parameter sind:

- Das Protokoll.
- Das URL Template, das als Handler genutzt werden soll. Das "%s" wird durch das `href` Attribut des Verweises ersetzt und ein GET Request mit der resultierenden URL ausgeführt.
- Der nutzerlesbare Name des Protokoll Handlers.

Führt ein Browser diesen Code aus, wird er über einen Dialog die Erlaubnis des Nutzers einholen, die Webanwendung als Handler für dieses Protokoll zu registrieren. Firefox zeigt eine Nachricht in der Notification Bar:

![](https://mdn.mozillademos.org/files/9683/protocolregister.png)

> **Hinweis:** Das bei der Registrierung angegebene URL Template **muss** mit der die Anfrage stellenden Webseite **übereinstimmen**, oder die Registrierung schlägt fehl. Beispielsweise kann `http://example.com/homepage.html` einen Protokoll-Handler für `http://example.com/handle_mailto/%s registrieren, aber nicht für` `http://example.org/handle_mailto/%s`.

Wird derselbe Handler mehrfach registriert, meldet der Browser das durch ein weiteres Pop-Up, das auf die bereits erfolgte Registrierung hinweist. Daher ist es sinnvoll, die Registrierung mit einem vorangehenden Check abzusichern.

### Beispiel

```js
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html lang="en">
<head>
  <title>Web Protocol Handler Sample - Register</title>
  <script type="text/javascript">
    navigator.registerProtocolHandler("burger",
                                  "http://www.google.co.uk/?uri=%s",
                                  "Burger handler");
  </script>
</head>
<body>
  <h1>Web Protocol Handler Sample</h1>
  <p>This web page will install a web protocol handler for the <code>fake:</code> protocol.</p>
</body>
</html>
```

## Aktivierung

Ab jetzt wird der Browser bei jedem Klick auf einen Verweis, der das neu registrierte Protokoll verwendet, die Ausführung auf die registrierte URL umleiten. Firefox wird zuvor standardmäßig die Bestätigung durch den Nutzer einholen.

### Beispiel

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html lang="en">
<head>
  <title>Web Protocol Handler Sample - Test</title>
</head>
<body>
  <p>Hey have you seen <a href="burger:cheeseburger">this</a> before?</p>
</body>
</html>
```

## Handling

Der nächste Schritt ist das tatsächliche Handling. Der Browser kombiniert die `href`aus dem aktivierten Link mit dem registrierten URL Template und führt dann damit einen HTTP GET Request aus. Hervorgehend aus den vorangegangenen Beispielen würde der Request auf folgender URL stattfinden:

    http://www.google.co.uk/?uri=burger:cheeseburger

Serverseitiger Code kann dann die query String Parameter extrahieren und die gewünschte Aktion ausführen.

> **Hinweis:** Dem serverseitigen Code wird der **gesamte** Inhalt der href übergeben. D.h. der Server muss das Protokoll aus den Daten parsen.

### Beispiel

```php
<?php
$value = "";
if ( isset ( $_GET["value"] ) ) {
  $value = $_GET["value"];
}
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html lang="en">
<head>
    <title>Web Protocol Handler Sample</title>
</head>
<body>
  <h1>Web Protocol Handler Sample - Handler</h1>
  <p>This web page is called when handling a <code>burger:</code> protocol action. The data sent:</p>
  <textarea>
<?php echo(htmlspecialchars($value, ENT_QUOTES, 'UTF-8')); ?>
  </textarea>
</body>
</html>
```

## Verweise

- <http://www.w3.org/TR/2011/WD-html5-20110525/timers.html#custom-handlers>

## Siehe auch

- [window.navigator.registerContentHandler](/de/docs/DOM/window.navigator.registerContentHandler "DOM/window.navigator.registerContentHandler")
- [nsIProtocolHandler](/de/docs/XPCOM_Interface_Reference/nsIProtocolHandler "nsIProtocolHandler") (XUL only)
- [RegisterProtocolHandler Enhancing the Federated Web](http://blog.mozilla.com/webdev/2010/07/26/registerprotocolhandler-enhancing-the-federated-web/) at Mozilla Webdev
