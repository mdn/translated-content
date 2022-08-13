---
title: Osie
slug: Web/XPath/Axes
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XPath
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XPath/Axes
original_slug: Web/XPath/Osie
---
{{ XsltRef() }}

Znajduje się tu trzynaście różnych osi ze specyfikacji [XPath](pl/XPath). Oś reprezentuje relację z wierzchołkiem kontekstu i używana jest, aby odnaleźć wierzchołki względne do danego wierzchołka w drzewie. Poniżej umieszczono niezwykle krótki opis trzynastu dostępnych osi i stopień ich obsługi dostępny w [Gecko](pl/Gecko).

Aby uzyskać więcej informacji na temat zastosowania XPath, zobacz fragment [Przeczytaj więcej](pl/Transformacje_XML_z_XSLT/Przeczytaj_wi%c4%99cej) na końcu dokumentu [Transformacje XML z XSLT](pl/Transformacje_XML_z_XSLT).

- [ancestor](pl/XPath/Osie/ancestor) (_przodek_)
  - : Wskazuje wszystkich przodków wierzchołka kontekstu, zaczynając od wierzchołka-rodzica i podążając do wierzchołka głównego.
- [ancestor-or-self](pl/XPath/Osie/ancestor-or-self) (_przodek lub bieżący_)
  - : Wskazuje wierzchołek kontekstu i wszystkich jego przodków, włączając wierzchołek główny.
- [attribute](pl/XPath/Osie/attribute) (_atrybuty_)
  - : Wskazuje atrybutu wierzchołka kontekstu. Tylko elementy posiadają atrybuty. Oś ta może być skrócona do znaku at (`@`).
- [child](pl/XPath/Osie/child) (_dziecko_)
  - : Wskazuje dzieci wierzchołka kontekstu. Jeśli wyrażenie XPath nie określa osi, to oś child jest rozumiana domyślnie. Ponieważ tylko wierzchołek główny lub wierzchołki elementu posiadają dzieci, każde inne użycie nie zaznaczy niczego.
- [descendant](pl/XPath/Osie/descendant) (_potomek_)
  - : Wskazuje wszystkie dzieci wierzchołka kontekstu, wszystkie ich dzieci i tak dalej. Wierzchołki atrybutu i przestrzeni nazw **nie** są włączone - rodzic (`parent`) wierzchołka `attribute` jest wierzchołkiem elementu, ale wierzchołki `attribute` nie są dziećmi ich rodziców.
- [descendant-or-self](pl/XPath/Osie/descendant-or-self) (_potomek lub bieżący_)
  - : Wskazuje wierzchołek kontekstu i wszystkich jego potomków. Wierzchołki atrybutu i przestrzeni nazw **nie** są włączone - rodzic (`parent`) wierzchołka `attribute` jest wierzchołkiem elementu, ale wierzchołki `attribute` nie są dziećmi ich rodziców.
- [following](pl/XPath/Osie/following) (_następujący_)
  - : Wskazuje wszystkie wierzchołki, które pojawiają się za wierzchołkiem kontekstu, za wyjątkiem wierzchołków `descendant`, `attribute` i `namespace`.
- [following-sibling](pl/XPath/Osie/following-sibling) (_następujący siostrzany_)
  - : Wskazuje wszystkie wierzchołki posiadające tego samego rodzica co wierzchołek kontekstu i pojawiające się przed wierzchołkiem kontekstu w dokumencie źródłowym.
- [namespace](pl/XPath/Osie/namespace) _(przestrzeń nazw, nieobsługiwana)_
  - : Wskazuje wszystkie wierzchołki znajdujące się w zasięgu wierzchołka kontekstu. W tym przypadku, wierzchołek kontekstu musi być wierzchołkiem elementu.
- [parent](pl/XPath/Osie/parent) (_rodzic_)
  - : Wskazuje pojedynczy wierzchołek będący rodzicem wierzchołka kontekstu. Może być skrócona do dwóch kropek (`..`).
- [preceding](pl/XPath/Osie/preceding) (_poprzedzający_)
  - : Wskazuje wszystkie wierzchołki poprzedzające wierzchołek kontekstu w dokumencie, za wyjątkiem wierzchołków `ancestor`, `attribute` i `namespace`.
- [preceding-sibling](pl/XPath/Osie/preceding-sibling) (_poprzedzający siostrzany_)
  - : Wskazuje wszystkie wierzchołki posiadające tego samego rodzica co wierzchołek kontekstu i pojawiające się przed wierzchołkiem kontekstu w dokumencie źródłowym.
- [self](pl/XPath/Osie/self) (_bieżący_)
  - : Wskazuje sam wierzchołek kontekstu. Może być skrócona do pojedynczej kropki (`.`).

{{ languages( { "en": "en/XPath/Axes", "es": "es/XPath/Ejes", "fr": "fr/XPath/Axes", "ja": "ja/XPath/Axes", "zh-cn": "cn/XPath/Axes" } ) }}
