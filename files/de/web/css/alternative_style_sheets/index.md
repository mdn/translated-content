---
title: Alternative Style Sheets
slug: Web/CSS/Alternative_style_sheets
tags:
  - CSS
  - NeedsCompatTable
translation_of: Web/CSS/Alternative_style_sheets
---
Firefox unterstützt _alternative Stylesheets_. Seiten, die alternative Stylesheets anbieten, erlauben es dem Benutzer, über das Untermenü _Ansicht_ > _Webseiten-Stil_ den Stil auszuwählen, in dem die Seite angezeigt werden soll. Dies ermöglicht es Benutzern, basierend auf deren Bedürfnissen oder Vorlieben mehrere Versionen einer Seite zu sehen.

Eine Webseite kann das {{HTMLElement("link")}} verwenden, um alternative Stylesheets zu einem Dokument hinzuzufügen.

Zum Beispiel:

     <link href="default.css" rel="stylesheet" type="text/css" title="Standardstil">
     <link href="fancy.css" rel="alternate stylesheet" type="text/css" title="Modisch">
     <link href="basic.css" rel="alternate stylesheet" type="text/css" title="Schlicht">

Mittels dieser drei Stylesheets werden die Stile "Standardstil", "Modisch" und "Schlicht" im Webseiten-Stil Untermenü aufgelistet. Wenn der Benutzer einen Stil auswählt, wird die Darstellung der Seite sofort anhand des Stylesheets neu aufgebaut.

Wenn Stylesheets über ein `title` Attribut im {{HTMLElement("link")}} oder {{HTMLElement("style")}} Element referenziert werden, wird der Titel dem Benutzer als Auswahlmöglichkeit angeboten. Stylesheets, die mit demselben Titel eingebunden werden, sind Teil der gleichen Auswahl. Stylesheets, die ohne ein `title` Attribut eingebunden werden, werden immer angewandt.

`rel="stylesheet"` kann dazu verwendet werden, zum Standardstil zu verlinken, und `rel="alternate stylesheet"`, um alternative Stylesheets zu verlinken. Dies teilt Firefox mit, welcher Stylesheet Titel standardmäßig ausgewählt werden soll und weist diese Standardauswahl in Browsern zu, die alternative Stylesheets nicht unterstützen.

## Livebeispiel

[Hier klicken](/samples/cssref/altstyles/index.html), um ein funktionierendes Beispiel auszuprobieren.

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommentar                |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------------ |
| {{SpecName("HTML4.01", "present/styles.html#h-14.3", "Alternative style sheets")}} | {{Spec2("HTML4.01")}} | Ursprüngliche Definition |
