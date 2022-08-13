---
title: Wprowadzenie do XML-a
slug: Web/XML/XML_introduction
tags:
  - CSS
  - HTML
  - Wszystkie_kategorie
  - XML
  - XSLT
translation_of: Web/XML/XML_introduction
original_slug: Web/XML/Wprowadzenie_do_XML-a
---
Summary: This article introduces the 'eXtensible Markup Language' (XML) and tells of it's uses.

### Czym jest XML?

XML, akronim od **Extensible Markup Language** (**Rozszerzalny Język Znaczników**), jest językiem znaczników tworzonym przez [W3C](http://www.w3.org/) do celów ogólnych. XML jest także podjęzykiem dla SGML-a.

Wiele popularnych języków znaczników bazuje na XMLu, jak np. [XHTML](pl/XHTML), [MathML](pl/MathML), [SVG](pl/SVG), [XUL](pl/XUL) i inne takie jak [RSS](pl/RSS) oraz [RDF](pl/RDF).

### Czemu HTML nie działa?

Składnia HTML-a jest ustalona, HTML służy wyłącznie do celów prezentacji danych, natomiast XML służy zarówno do prezentacji jak i obróbki treści.

HTML jest ograniczony w trzech aspektach: "inteligencji" opisu informacji, pielęgnacji oraz adaptowalności kodu, w których XML jest właśnie silny: inteligentnie opisuje informację, pozwala na wygodną pielęgnację oraz adaptację kodu.

XML różni się też od HTML-a tym, że HTML jest językiem prezentacji, a XML językiem ogólnego zastosowania. Te dwa języki mogą zostać użyte na raz dzięki [XSLT](pl/XSLT).

### "Poprawny" XML

Aby dokument XML był poprawny, musi zostać poprawnie sformatowany i spełniać wszystkie zasady składni XML-a. Większość przeglądarek, włączając w to Mozillę posiada debugger, który potrafi pokazać błędy składniowe dokumentu.

### Prezentacja XML-a

Są dwie metody na korzystanie z XML-a do prezentacji danych.

Pierwsza, to skorzystanie z technologii CSS do formatowania danych XML.

    <?xml-stylesheet type="text/css" href="stylesheet.css"?>

Druga, to skorzystanie z potęgi XSLT, który jest w stanie transformować składnię XML do ogromnej ilości innych formatów (PDF, HTML, obrazki, WAP itd.).

    <?xml-stylesheet type="text/xsl" href="transform.xsl"?>

### Zalecenia

Polecamy przeczytanie innych poradników do [XML](pl/XML)-a i odświeżenie wiedzy na temat jego składni. Należy pamiętać, że ten poradnik jest tylko krótkim wstępem dla osób, które nigdy nie zetknęły się z językiem XML lub innymi językami znacznikowymi.

Warto nauczyć się języka HTML, aby lepiej zrozumieć XML, lub zapoznać się z innymi przewodnikami z tej strony.

### Informacja o wersji

- Autor: Justin G. Shreve
- Ostatnia aktualizacja: 19 Maja
- Tłumaczenie: Zbigniew Braniecki

{{ languages( { "en": "en/XML_Introduction", "es": "es/Introducci\u00f3n_a_XML", "fr": "fr/Introduction\_\u00e0\_XML", "ja": "ja/XML_Introduction", "zh-cn": "cn/XML\_\u4ecb\u7ecd" } ) }}
