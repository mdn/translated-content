---
title: element.offsetWidth
slug: Web/API/HTMLElement/offsetWidth
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Strony_wymagające_dopracowania
  - Wszystkie_kategorie
translation_of: Web/API/HTMLElement/offsetWidth
original_slug: Web/API/Element/offsetWidth
---
{{ APIRef("HTML DOM") }}

### offsetWidth

właściwość DHTML, która podaje szerokość elementu, odnosząca się do układu strony.

### Składnia i wartości

    var intElemOffsetWidth = document.getElementById(id_attribute_value).offsetWidth;

`intElemOffsetWidth` jest zmienną przechowującą liczbę całkowitą odpowiadającą wartości **`offsetWidth`** elementu i wyrażoną w pikselach. **`offsetWidth`** jest właściwością tylko do odczytu.

### Opis

Zazwyczaj **`offsetWidth`** elementu obejmuje jego obramowanie, wewnętrzny margines (padding), pionowy pasek przewijania (jeśli jest obecny lub renderowany) i szerokość CSS elementu.

### Przykład

padding-top

Gentle, individualistic and very loyal, Birman cats fall between Siamese and Persian in character. If you admire cats that are non aggressive, that enjoy being with humans and tend to be on the quiet side, you may well find that Birman cats are just the felines for you.

![Image:BirmanCat.jpg](/@api/deki/files/2210/=BirmanCat.jpg)All Birmans have colorpointed features, dark coloration of the face, ears, legs and tail.

Cat image and text coming from [www.best-cat-art.com](http://www.best-cat-art.com/)

padding-bottom

**Left\*\***Top\***\*Right\*\***Bottom\*\*_margin-top**margin-bottom**border-top\_\_border-bottom_{{ mediawiki.external('if IE') }}>\<span id="MrgLeft" style="position: absolute; left: 8px; top: 65px; font: bold 13px Arial, sans-serif !important; writing-mode: tb-rl;">margin-left\</span>\<span id="BrdLeft" style="position: absolute; left: 33px; top: 65px; color: white; font: bold 13px Arial, sans-serif !important; writing-mode: tb-rl;">border-left\</span>\<span id="PdgLeft" style="position: absolute; left: 55px; top: 65px; font: bold 13px Arial, sans-serif !important; writing-mode: tb-rl;">padding-left\</span>\<span id="PdgRight" style="position: absolute; left: 275px; top: 60px; color: black; font: bold 13px Arial, sans-serif !important; writing-mode: tb-rl; white-space: nowrap;">padding-right\</span>\<span id="BrdRight" style="position: absolute; left: 310px; top: 65px; color: white; font: bold 13px Arial, sans-serif !important; writing-mode: tb-rl;">border-right\</span>\<span id="MrgRight" style="position: absolute; left: 340px; top: 65px; font: bold 13px Arial, sans-serif !important; writing-mode: tb-rl;">margin-right\</span>\<!{{ mediawiki.external('endif') }}

![Image:offsetWidth.png](/@api/deki/files/2468/=OffsetWidth.png)

### Specyfikacja

**`offsetWidth`** jest częścią modelu obiektowego MSIE DHTML. **`offsetWidth`** nie jest częścią żadnej specyfikacji W3C ani rekomendacji technicznej.

### Uwagi

**`offsetWidth`** jest własnością modelu obiektowego DHTML, który został wprowadzony przez MSIE. Czasem określany jest jako fizyczny/graficzny wymiar elementu lub jako szerokość pudełka elementu.

### Dokumentacja

- [MSDN's offsetWidth definition](http://msdn.microsoft.com/workshop/author/dhtml/reference/properties/offsetwidth.asp?frame=true)
- [MSDN's Measuring Element Dimension and Location](http://msdn.microsoft.com/workshop/author/om/measuring.asp)

### Zobacz również

- [element.offsetHeight](/fr/DOM/element.offsetHeight "element.offsetHeight")
- [element.clientWidth](/pl/DOM/element.clientWidth "element.clientWidth")
- [element.clientHeight](/cn/DOM/element.clientHeight "element.clientHeight")
