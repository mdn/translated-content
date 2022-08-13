---
title: 'HTML: HyperText Markup Language'
slug: Web/HTML
tags:
  - Einführung
  - Web Programmierung
translation_of: Web/HTML
---
{{HTMLSidebar}}

**HTML** (HyperText Markup Language) ist der grundlegendste Baustein des Webs. Es beschreibt und definiert den _Inhalt_ einer Webseite zusammen mit dem grundlegenden Layout der Webseite. Neben HTML werden im Allgemeinen andere Technologien verwendet, um das Erscheinungsbild ([CSS](/de/docs/Web/CSS)) oder die Funktionalität/Verhalten ([JavaScript](/de/docs/Web/JavaScript)) einer Webseite zu beschreiben.

"HyperText" bezieht sich auf Links, die Webseiten miteinander verbinden, entweder innerhalb einer einzelnen Webseite oder zwischen mehreren Webseiten. Links sind ein grundlegender Bestandteil des Webs. Indem Sie Inhalte in das Internet hochladen und mit Seiten verlinken, die von anderen Personen erstellt wurden, werden Sie ein aktiver Teilnehmer im World Wide Web.

HTML verwendet "Markup", um Texte, Bilder und andere Inhalte für die Anzeige in einem Webbrowser zu kommentieren. HTML-Markup beinhaltet spezielle "Elemente" wie {{HTMLElement("head")}}, {{HTMLElement("title")}}, {{HTMLElement("body")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("p")}}, {{HTMLElement("div")}}, {{HTMLElement("span")}}, {{HTMLElement("img")}}, {{HTMLElement("aside")}}, {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("datalist")}}, {{HTMLElement("details")}}, {{HTMLElement("embed")}}, {{HTMLElement("nav")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("video")}} und viele andere.

Die Tags in HTML sind case-insensitive. Das heißt, sie können in Groß- und Kleinbuchstaben oder in einer Mischung geschrieben werden. Beispiel **\<title>** tag kann als **\<Title>**,**\<TITLE>** oder auf andere Weise geschrieben werden.

Die folgenden Artikel helfen Ihnen, mehr über HTML zu erfahren.

- HTML Einführung
  - : Wenn Sie neu in der Webentwicklung sind, lesen Sie unbedingt unseren [HTML Grundlagen](/de/docs/Learn/Getting_started_with_the_web) Artikel, um zu erfahren, was HTML ist und wie man es verwendet.
- HTML Tutorials
  - : Artikel über die Verwendung von HTML sowie Tutorials und vollständige Beispiele finden Sie in unserem [HTML Lernbereich](/de/docs/Learn/HTML).
- HTML Referenz
  - : In unserem umfangreichen Abschnitt [HTML Referenz](/de/docs/Web/HTML/Reference) finden Sie die Details zu jedem Element und Attribut in HTML.

## Tutorials für Anfänger

Unser [HTML Lernbereich](/de/docs/Learn/HTML) verfügt über mehrere Module, die HTML von Grund auf vermitteln - es sind keine Vorkenntnisse erforderlich.

- [Einführung in HTML](/de/docs/Learn/HTML/Introduction_to_HTML)
  - : Dieses Modul schafft die Voraussetzungen, um Sie an wichtige Konzepte und Syntaxen zu gewöhnen, wie z.B. die Anwendung von HTML auf Text, die Erstellung von Hyperlinks und die Verwendung von HTML zur Strukturierung einer Webseite.
- [Einbettung von Multimedia Inhalten](/de/docs/Learn/HTML/Multimedia_and_embedding)
  - : Dieses Modul erklärt, wie Sie HTML verwenden können, um Multimedia Inhalte in Ihre Webseite aufnehmen können, einschließlich der verschiedenen Möglichkeiten, wie Bilder eingebunden werden können, und wie Sie Video, Audio oder sogar ganze andere Webseiten einbetten können.
- [HTML Tabellen](/de/docs/Learn/HTML/Tables)
  - : Die verständliche und einfache Darstellung von Tabellendaten auf einer Webseite kann eine Herausforderung sein. Dieses Modul behandelt grundlegende Tabellen sowie komplexere Funktionen wie die Implementierung von Beschriftungen und Zusammenfassungen.
- [HTML Formulare](/de/docs/Learn/HTML/Forms)
  - : Formulare sind ein sehr wichtiger Teil des Webs - sie bieten viele Funktionen, die Sie für die Interaktion mit Websites benötigen, z.B. Registrierung und Anmeldung, Feedback, Kauf von Produkten und mehr. Dieses Modul ermöglicht Ihnen den Einstieg in die Erstellung der Client-seitigen/Frontend-Teile von Formularen.
- [Verwenden Sie HTML, um häufige Probleme zu lösen](/de/docs/Learn/HTML/Howto)
  - : Enthält Links zu Inhaltsabschnitten, die erklären, wie man HTML verwendet, um sehr häufige Probleme beim Erstellen einer Webseite zu lösen: Umgang mit Titeln, Hinzufügen von Bildern oder Videos, Hervorheben von Inhalten, Erstellen einer Grundform usw.

## Fortgeschrittene Themen

- [CORS fähiges Bild](/de/docs/Web/HTML/CORS_enabled_image)
  - : Das Attribut [`crossorigin`](/de/docs/Web/HTML/Element/img#attr-crossorigin), in Kombination mit einem entsprechenden [CORS](/de/docs/Glossar/CORS) header, ermöglicht es, Bilder, die durch das Element {{HTMLElement("img")}} definiert sind, aus fremden Quellen zu laden und in einem {{HTMLElement("canvas")}} Element zu verwenden, als würden sie aus dem aktuellen Ursprung geladen.
- [Attribute der CORS Einstellungen](/de/docs/Web/HTML/CORS_settings_attributes)
  - : Einige HTML-Elemente, die Unterstützung für [CORS](/de/docs/HTTP/Access_control_CORS) bieten, wie {{HTMLElement("img")}} oder {{HTMLElement("video")}}, haben ein `crossorigin` Attribut (`crossOrigin` Eigenschaft), mit dem Sie die CORS-Anfragen für die abgerufenen Daten des Elements konfigurieren können.
- [Fokusverwaltung in HTML](/de/docs/Web/HTML/Focus_management_in_HTML)
  - : Die [`activeElement`](/de/docs/Web/API/Document/activeElement) DOM-Attribut und das [`hasFocus()`](/de/docs/Web/API/Document/hasFocus) DOM-Methode helfen Ihnen, die Interaktionen eines Benutzers mit Elementen auf einer Webseite zu verfolgen und zu steuern.
- [Verwendung des Anwendungs Cache](/de/docs/Web/HTML/Using_the_application_cache)
  - : Durch den Anwendungs Cache können webbasierte Anwendungen offline ausgeführt werden. Sie können die Schnittstelle **Application Cache** (_AppCache_) verwenden, um Ressourcen anzugeben, die der Browser zwischenspeichern und für Offline-Benutzer verfügbar machen soll. Anwendungen, die im Cache gespeichert sind, laden und funktionieren korrekt, auch wenn Benutzer auf die Schaltfläche Aktualisieren klicken, wenn sie offline sind.
- [Vorladen von Inhalten mit rel="preload".](/de/docs/Web/HTML/Preloading_content)
  - : Das Attribut {{htmlattrxref("rel", "link")}} des {{htmlelement("link")}} Elements ermöglicht es Ihnen, deklarative Fetch-Anfragen in Ihr HTML {{htmlelement("head")}} zu schreiben, wobei Sie Ressourcen angeben, die Ihre Seiten sehr bald nach dem Laden benötigen, die Sie daher früh im Lebenszyklus einer Seitenladung vorab laden möchten, bevor die Haupt-Rendering-Maschine des Browsers einsetzt. Dadurch wird sichergestellt, dass sie früher verfügbar sind und weniger wahrscheinlich das erste Rendering der Seite blockieren, was zu Leistungssteigerungen führt. Dieser Artikel bietet eine grundlegende Anleitung, wie `preload` funktioniert.

## Referenzen

- [HTML Referenz](/de/docs/Web/HTML/Reference)
  - : HTML besteht aus **Elementen**, von denen jedes durch eine Anzahl von **Attributen** modifiziert werden kann. HTML Dokumente werden über [links](/de/docs/Web/HTML/Link_types) miteinander verbunden.
- [HTML Element Referenz](/de/docs/Web/HTML/Element)
  - : Durchsuchen Sie eine Liste aller [HTML](/de/docs/Glossar/HTML) [Elemente](/de/docs/Glossar/Element).
- [HTML Attribut Referenz](/de/docs/Web/HTML/Attributes)
  - : Elemente in HTML haben **Attribute**. Dies sind zusätzliche Werte, die die Elemente konfigurieren oder ihr Verhalten auf verschiedene Weise anpassen.
- [Globale Attribute](/de/docs/Web/HTML/Global_attributes)
  - : Globale Attribute können für alle [HTML-Elemente](/de/docs/Web/HTML/Element), _auch für diejenigen, die nicht im Standard_ angegeben sind, angegeben werden. Das bedeutet, dass alle nicht standardmäßigen Elemente diese Attribute weiterhin zulassen müssen, auch wenn diese Elemente das Dokument nicht HTML5 kompatibel machen.
- [Inline Elemente](/de/docs/Web/HTML/Inline_elements) und [Block Level Elemente](/de/docs/Web/HTML/Block-level_elements)
  - : HTML Elemente sind in der Regel "inline" oder "block-level" Elemente. Ein Inline-Element belegt nur den Raum, der durch die Tags begrenzt ist, die es definieren. Ein Element auf Blockebene nimmt den gesamten Platz seines übergeordneten Elements (Containers) ein und erzeugt so einen "Block".
- [Link Typen](/de/docs/Web/HTML/Link_types)
  - : In HTML können verschiedene Link-Typen verwendet werden, um die Verknüpfung zwischen zwei Dokumenten herzustellen und zu definieren. Zu den Link Elementen die verwendet werden können gehören [`<a>`](/de/docs/Web/HTML/Element/a), [`<area>`](/de/docs/Web/HTML/Element/area) und [`<link>`](/de/docs/Web/HTML/Element/link).
- [Medienformate die von HTML unterstützt werden sind Audio und Video Elemnte](/de/docs/Web/HTML/Supported_media_formats)
  - : The [`<audio>`](/de/docs/Web/HTML/Element/audio) und [`<video>`](/de/docs/Web/HTML/Element/video) Elemente ermöglichen die Wiedergabe von Audio- und Videomedien. Diese Elemente bieten eine Browser-native Alternative zu Adobe Flash und anderen Plug-Ins.
- [Arten von HTML Inhalten](/de/docs/Web/HTML/Kinds_of_HTML_content)
  - : HTML umfasst verschiedene Arten von Elementen, von denen jeder in bestimmten Kontexten verwendet werden darf und in anderen nicht zulässig ist. Ebenso hat jede eine Reihe von Inhalten, die sie enthalten kann und Elemente die darin nicht verwendet werden können. Dies ist ein Leitfaden für diese Kategorien.
- [Eigenarten und Normen](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
  - : Historische Informationen über Eigenarten und Normen.

## Verwandte Themen

- [Hinzufügen von Farben mit CSS auf HTML Elemente](/de/docs/Web/HTML/Applying_color)
  - : Dieser Artikel beschreibt die meisten der Möglichkeiten, wie Sie CSS verwenden, um HTML Elementen Farben hinzuzufügen, und listet auf, welche Teile von HTML-Dokumenten farbig dargestellt werden können und welche CSS-Eigenschaften dabei zu verwenden sind. Enthält Beispiele, Links zu Tools zur Farb Palettenerstellung und vieles mehr.
