---
title: '@document'
slug: Web/CSS/@document
tags:
  - CSS
  - CSS At-rule
translation_of: Web/CSS/@document
---
{{ CSSRef() }}

## Podsumowanie

Reguła `@-moz-document` jest regułą @ ograniczającą reguły zawartych w sobie stylów bazując na adresie URL dokumentu. Jest stworzona głównie dla stylów użytkownika.

## Składnia

### Przykłady

Możesz tego użyć w swoim pliku [userContent.css](http://www.mozilla.org/support/firefox/edit#content):

    @document url(http://www.w3.org/),
                   url-prefix(http://www.w3.org/Style/),
                   domain(mozilla.org)
    {
      /* Reguły CSS  dotyczą tutaj:
         + Strony "http://www.w3.org/".
         + Strony, której URL rozpoczyna się "http://www.w3.org/Style/"
         + Każdej strony, dla której URL domeny zawiera "mozilla.org" lub kończy się
           ".mozilla.org"
       */

      /* zrobienie powyższych stron potwornymi */
      body { color: purple; background: yellow; }
    }

## Specyfikacje

- [Reguły stylów użytkownika dotyczące stron](http://lists.w3.org/Archives/Public/www-style/2004Aug/0135)

## Zgodność z przeglądarką

Dostępne od Mozilli 1.8 / [Firefox 1.5](pl/Firefox_1.5).
