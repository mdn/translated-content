---
title: OpenSearch Plugin für Firefox erstellen
slug: Web/OpenSearch
tags:
  - Add-ons
  - OpenSearch
translation_of: Web/OpenSearch
original_slug: OpenSearch_Plugin_für_Firefox_erstellen
---
## OpenSearch

[Firefox 2](/de/Firefox_2_für_Entwickler "de/Firefox 2 für Entwickler") unterstützt das [OpenSearch](http://opensearch.org/)(engl.) Beschreibungsformat für Such-Plugins. Plugins, die [OpenSearch description syntax](http://www.opensearch.org/Specifications/OpenSearch/1.1#OpenSearch_description_document)(engl.) verwenden, sind kompatibel mit IE 7 und Firefox. Daher sind sie das empfohlene Format für das Web.

Firefox unterstützt zudem zusätzliche Suchoptionen, die nicht im [OpenSearch description syntax](http://www.opensearch.org/Specifications/OpenSearch/1.1#OpenSearch_description_document)(engl.) genannt werden, wie zum Beispiel Suchvorschläge und das `SearchForm` Element. Dieser Artikel bezieht sich auf die Erstellung von OpenSearch-kompatiblen Such-Plugins, die die zusätzlichen Firefox-spezifischen Funktionen unterstützen.

OpenSearch Beschreibungsdateien können auch [automatisch erkannt](/de/OpenSearch_Plugin_für_Firefox_erstellen#Automatische_Erkennung_von_Such-Plugins "de/OpenSearch Plugin für Firefox erstellen#Automatische Erkennung von Such-Plugins") und [von Webseiten](/de/Hinzufügen_von_Suchmaschinen_von_Webseiten "de/Hinzufügen von Suchmaschinen von Webseiten") installiert werden.

## OpenSearch Beschreibungsdatei

Die XML Datei, die eine Suchmaschine beschreibt, ist sehr einfach aufgebaut. Eine Vorlage findet sich unterhalb. Die fett markierten Abschnitte müssen angepasst werden, je nach dem was auf Ihre Suchmaschine zutrifft.

    <OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/"
                           xmlns:moz="http://www.mozilla.org/2006/browser/search/">
    <ShortName>engineName</ShortName>
    <Description>engineDescription</Description>
    <InputEncoding>inputEncoding</InputEncoding>
    <Image width="16" height="16" type="image/x-icon">data:image/x-icon;base64,imageData</Image>
    <Url type="text/html" method="method" template="searchURL">
      <Param name="paramName1" value="paramValue1"/>
      ...
      <Param name="paramNameN" value="paramValueN"/>
    </Url>
    <Url type="application/x-suggestions+json" template="suggestionURL"/>
    <moz:SearchForm>searchFormURL</moz:SearchForm>
    </OpenSearchDescription>

- **ShortName**

  - : Ein kurzer Name für Ihre Suchmaschine.

    **Einschränkungen:** Der Wert muss 16 oder weniger Zeichen enthalten und darf kein HTML oder sonstiges Markup enthalten.

- **Description**

  - : Eine kurze Beschreibung der Suchmaschine.

    **Einschränkungen:** Der Wert muss 1024 oder weniger Zeichen enthalten und darf kein HTML oder sonstiges Markup enthalten.

- **InputEncoding**
  - : Das Encoding, welches für die eingegeben Daten verwendet werden soll. Beispiel: `<InputEncoding>UTF-8</InputEncoding>`.

- **Image**
  - : URI zu einem Icon, welches die Suchmaschine repräsentiert. Nach Möglichkeit sollten Suchmaschinen ein 16x16 großes Bild des Typs "image/x-icon" und ein 64x64 großes Bild des Typs "image/jpeg" oder "image/png" bereitstellten. Der Link kann auch das [data: URI scheme](http://en.wikipedia.org/wiki/Data:_URI_scheme) verwenden. Ein hilfreiches Tool zum Erstellen der data URIs lässt sich hier finden: [The data: URI kitchen](http://software.hixie.ch/utilities/cgi/data/data). <Image height="16" width="16" type="image/x-icon">http://example.com/favicon.ico</Image>
    Oder
    <Image height="16" width="16">data:image/x-icon;base64,AAABAAEAEBAAA ... DAAA=</Image>Firefox speichert das Icon als eine base64 data: URI im Cache (Such-Plugins werden im "searchplugins" Ordner im Profil gespeichert). http: URIs werden auf data: URIs umgewandelt, wenn diese vorhanden sind.

- **Url**

  - : Gibt die URL oder die URLs an, die zur Suche verwendet werden sollen. Das `method` Attribut gibt an, ob eine `GET` oder `POST` Anfrage verwendet wird. Das `template` Attribut gibt die Basis-URL für die Suchanfrage an.

    > **Hinweis:** Der Internet Explorer 7 unterstützt keine `POST` Anfragen.

<dl><dd>Es gibt zwei URL-Typen, die Firefox unterstützt:</dd></dl>

- `type="text/html"` wird benutzt, um die URL für die Suchanfrage selbst festzulegen.
- `type="application/x-suggestions+json"` wird benutzt, um die URL anzugeben, die die Suchvorschläge enthält.

<dl><dd>Für jeden URL-Typ können Sie <code>{searchTerms}</code> einsetzen, um dort den Suchausdruck des Benutzers einzufügen. Andere unterstützte dynamische Suchparameter sind unter <a class="external" href="http://www.opensearch.org/Specifications/OpenSearch/1.1/Draft_3#OpenSearch_1.1_parameters">OpenSearch 1.1 parameters</a> beschrieben.</dd></dl>

<dl><dd>Für Suchvorschläge wird die festgelegte Vorlage verwendet, um eine Liste im JavaScript Object Notation (JSON) Format zu erhalten. Für weitere Details zur Implementierung von Suchvorschlägen, siehe <a href="/de/Suchvorschläge_in_Such-Plugins_unterstützen" title="de/Suchvorschläge in Such-Plugins unterstützen">Suchvorschläge in Such-Plugins unterstützen</a>.</dd></dl>

![Image:SearchSuggestionSample.png](/@api/deki/files/358/=SearchSuggestionSample.png)

- **Param**

  - : Die Parameter, die durch die Suchanfrage laufen müssen, als Schlüssel/Wert Paare. Wenn Werte festgelegt werden, können Sie `{searchTerms}` verwenden, um den Suchausdruck vom Benutzer in der Suchleiste einzufügen.

    > **Hinweis:** Der Internet Explorer 7 unterstützt dieses Element nicht.

- **SearchForm**

  - : Die URL zur der Suchseite auf der Seite, für die das Plugin erstellt wurde. Das bietet einen Weg für den Benutzer an, die Seite direkt zu besuchen, auf der er suchen möchte.

    > **Hinweis:** Da dieses Element Firefox-spezifisch ist und nicht Teil der OpenSearch Spezifikation ist, verwenden wir das "`moz:`" XML Namespace Präfix im Beispiel oben, um sicher zu stellen, dass andere Browser dieses Element ignorieren.

## Automatische Erkennung von Such-Plugins

Eine Webseite, die ein Such-Plugin anbietet, kann dieses bemerkbar machen, sodass Firefox Benutzer dieses einfach herunterladen und installieren können.

Um die automatisch Erkennung zu unterstützen, müssen Sie einfach einen Link im `<head>` Ihrer Webseite hinzufügen:

    <link rel="search" type="application/opensearchdescription+xml" title="searchTitle" href="pluginURL">

Ersetzen Sie die kursiven Einträge, wie unten erklärt:

- **searchTitle**
  - : Der Name der Suche, etwa "MDC Suche" oder "Yahoo! Suche". Dieser Wert sollte mit dem ShortName Ihres Plugins übereinstimmen.

- **pluginURL**
  - : Die URL zum XML Such-Plugin, von welchem der Browser das Plugin herunterladen kann.

Wenn Ihre Seite mehrere Such-Plugins anbietet, können Sie diese Zeile für Zeile angeben. Zum Beispiel:

    <link rel="search" type="application/opensearchdescription+xml" title="MySite: By Author" href="http://www.mysite.com/mysiteauthor.xml">
    <link rel="search" type="application/opensearchdescription+xml" title="MySite: By Title" href="http://www.mysite.com/mysitetitle.xml">

Dadurch bietet Ihre Seite sowohl die Such nach Autor und nach Titel als separate Möglichkeiten an.

## Automatische Aktualisierungen für OpenSearch Plugins bereitstellen

{{ fx_minversion_note(3.5, "Dieser Abschnitt beschreibt Funktionen, die in Firefox 3.5 eingeführt wurden.") }}

Ab Firefox 3.5 können OpenSearch Plugins automatsch aktualisiert werden. Um dies zu unterstützen, muss ein zusätzliches `Url` Element des Typs "`application/opensearchdescription+xml`" eingefügt werden. Das `rel` Attribut muss "`self`" lauten und das template Attribut muss die URL des OpenSearch Dokuments sein, welches automatisch aktualisiert werden muss.

Zum Beispiel:

    <Url type="application/opensearchdescription+xml"
         rel="self"
         template="http://www.foo.com/mysearchdescription.xml" />

## Tipps zur Problemlösung

Falls sich ein Fehler in Ihr Such-Plugin XML eingeschlichen hat, können Fehler beim Hinzufügen von Such-Plugin auftreten. Die Fehlermeldungen sind meist nicht sehr hilfreich, die folgenden Tipps können Ihnen aber vielleicht helfen das Problem zu finden.

- Ihr Server sollte OpenSearch Plugins mit dem MIME type `application/opensearchdescription+xml` ausliefern.
- Stellen Sie sicher, dass die XML Datei des Plugins wohlgeformt ist. Das können Sie überprüfen, indem Sie die Datei direkt in Firefox aufrufen. Ampersands in der template URL müssen mit \&amp; maskiert werden und Tags müssen mit einem Slash oder einem schließenden Tag geschlossen werden.
- Das `xmlns` Attribut ist wichtig, ohne diesem taucht die Fehlermeldung auf: "Firefox could not download the search plugin from: (URL)".
- Achten Sie darauf, dass Sie eine `text/html` URL einfügen **müssen** — Such-Plugins mit Atom oder [RSS](/de/RSS "de/RSS") URL Typen (was gültig wäre, Firefox aber nicht unterstützt) werden ebenfalls zum Fehler "could not download the search plugin" führen.
- Favicons aus einer entfernten Quelle dürfen nicht größer als 10KB sein (siehe {{ Bug(361923) }}).

Zusätzlich bietet das Such-Plugin einen Log-Mechanismus, der von Plugin Entwicklern verwendet werden kann. Verwenden Sie _about:config_ um die Einstellung '`browser.search.log`' auf `true` zu setzen. Logging Informationen werden in Firefox's [Fehlerkonsole](/de/Fehlerkonsole "de/Fehlerkonsole") (Extras->Fehlerkonsole) erscheinen, wenn Such-Plugins hinzugefügt werden.

## Referenzmaterial

- [OpenSearch Documentation](http://opensearch.org/), [OpenSearch Documentation about the Url and Param element](http://www.opensearch.org/Specifications/OpenSearch/Extensions/Parameter/1.0)
- Technorati.com hat eine [arbeitende osd.xml](http://technorati.com/osd.xml)
- Schwierigkeiten bei der automatischen Erkennung: {{ Bug(340208) }}
- [`data:` URI scheme](http://en.wikipedia.org/wiki/Data:_URI_scheme)
- [searchplugins.net](http://www.searchplugins.net) - OpenSearch Plugins für Firefox 2. [Liste von genierten Such-Plugins](http://www.searchplugins.net/pluginlist.aspx)
- [Ready2Search](http://keijisaito.info/ready2search/e/) - OpenSearch Plugins erstellen. [Benutzerdefinierte Suche durch Ready2Search](http://keijisaito.info/arc/search/en_make_plugin.htm)

{{ languages( { "en": "en/Creating_OpenSearch_plugins_for_Firefox", "ca": "ca/Creaci\u00f3\_de_connectors_OpenSearch_per_al_Firefox", "fr": "fr/Cr\u00e9ation_de_plugins_OpenSearch_pour_Firefox", "ja": "ja/Creating_OpenSearch_plugins_for_Firefox", "pl": "pl/Tworzenie_wtyczek_OpenSearch_dla_Firefoksa", "pt": "pt/Criando_plugins_OpenSearch_para_o_Firefox" } ) }}
