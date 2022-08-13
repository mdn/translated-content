---
title: '@media'
slug: Web/CSS/@media
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/@media
---
{{ CSSRef() }}

### Podsumowanie

`@media` określa typ docelowych mediów (oddzielonych przecinkami) dla zestawu reguł (ograniczonych klamrami).

### Składnia

    @media <typy mediów> {
      /* reguły specyficzne dla medium */
    }

### Typy mediów

- all
  - : Pasujące dla wszystkich urządzeń.
- braille
  - : Przeznaczone dla dotykowych urządzeń brailla.
- embossed
  - : Przeznaczone dla drukarek brailla.
- handheld
  - : Przeznaczone dla urządzeń kieszonkowych (przeważnie z małym ekranem, ograniczoną przepustowością).
- print
  - : Przeznaczone dla materiałów stronnicowanych lub dokumentów pokazywanych na ekranie w trybie podglądu wydruku. Sprawdź rozdział o mediach stronnicowanych, aby dowiedzieć się o zagadnieniach formatowania, które są specyficzne dla mediów stronnicowanych.
- projection
  - : Przeznaczone dla rzutowanych prezentacji, np. projektorów. Sprawdź rozdział o mediach stronnicowanych, aby dowiedzieć się o zagadnieniach formatowania, które są specyficzne dla mediów stronnicowanych.
- screen
  - : Przeznaczone przede wszystkim dla kolorowych ekranów komputerowych.
- speech
  - : Przeznaczone dla syntezatorów mowy. Uwaga: CSS2 miał do tego celu podobny typ mediów nazywany 'aural' . Zobacz w dodatku szczegóły o arkuszach stylów 'aural'.
- tty
  - : Przeznaczone dla mediów używających dla znaków siatki o stałej podziałce (jak np. dalekopis, terminal lub urządzenia przenośne o ograniczonych możliwościach wyświetlania). Autorzy nie powinni używać dla medium "tty" jednostek w pikselach.
- tv
  - : Przeznaczone dla urządzeń telewizyjnych (niska rozdzielczość, kolor, ograniczone przewijanie ekranów, dźwięk dostępny).

### Grupy mediów

Typy mediów są również częścią różnych grup mediów. Poniższa tabel pokazuje, które typy są w których grupach.

<table class="standard-table">
  <tbody>
    <tr>
      <td></td>
      <td class="header" colspan="10" style="text-align: center">Grupy</td>
    </tr>
    <tr>
      <td class="header">Typ</td>
      <td class="header">continuous</td>
      <td class="header">paged</td>
      <td class="header">visual</td>
      <td class="header">audio</td>
      <td class="header">speech</td>
      <td class="header">tactile</td>
      <td class="header">grid</td>
      <td class="header">bitmap</td>
      <td class="header">interactive</td>
      <td class="header">static</td>
    </tr>
    <tr>
      <td class="header">braille</td>
      <td>X</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>X</td>
      <td>X</td>
      <td></td>
      <td>X</td>
      <td>X</td>
    </tr>
    <tr>
      <td class="header">embossed</td>
      <td></td>
      <td>X</td>
      <td></td>
      <td></td>
      <td></td>
      <td>X</td>
      <td>X</td>
      <td></td>
      <td></td>
      <td>X</td>
    </tr>
    <tr>
      <td class="header">handheld</td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
      <td></td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
    </tr>
    <tr>
      <td class="header">print</td>
      <td></td>
      <td>X</td>
      <td>X</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>X</td>
      <td></td>
      <td>X</td>
    </tr>
    <tr>
      <td class="header">projection</td>
      <td></td>
      <td>X</td>
      <td>X</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>X</td>
      <td>X</td>
      <td></td>
    </tr>
    <tr>
      <td class="header">screen</td>
      <td>X</td>
      <td></td>
      <td>X</td>
      <td>X</td>
      <td></td>
      <td></td>
      <td></td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
    </tr>
    <tr>
      <td class="header">speech</td>
      <td>X</td>
      <td></td>
      <td></td>
      <td></td>
      <td>X</td>
      <td></td>
      <td></td>
      <td></td>
      <td>X</td>
      <td>X</td>
    </tr>
    <tr>
      <td class="header">tty</td>
      <td>X</td>
      <td></td>
      <td>X</td>
      <td></td>
      <td></td>
      <td></td>
      <td>X</td>
      <td></td>
      <td>X</td>
      <td>X</td>
    </tr>
    <tr>
      <td class="header">tv</td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
      <td></td>
      <td></td>
      <td></td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
    </tr>
  </tbody>
</table>

### Przykłady

      @media print {
        body { font-size: 10pt }
      }
      @media screen {
        body { font-size: 13px }
      }
      @media screen, print {
        body { line-height: 1.2 }
      }

### Uwagi

Wielomodalny typ medium jest wciąż jednym typem medium. Np. typ medium 'tv' jest wielomodalnym typem, który prezentuje jednocześnie wizualnie i słuchowo dla jednego obrazu.

### Specyfikacje

- [CSS 2.1](http://www.w3.org/TR/CSS21/media.html#at-media-rule)

### Zgodność z przeglądarką

### Zobacz także

{{ Cssxref("@import") }}, {{ Cssxref("@font-face") }}

{{ languages( { "en": "en/CSS/@media", "fr": "fr/CSS/@media" } ) }}
