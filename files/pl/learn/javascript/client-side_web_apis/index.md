---
title: Interfejsy API działające po stronie klienta
slug: Learn/JavaScript/Client-side_web_APIs
translation_of: Learn/JavaScript/Client-side_web_APIs
---
{{LearnSidebar}}

Pisząc skrypty JavaScript po stronie klienta dla stron internetowych lub aplikacji szybko napotkamy Interfejsy Programowania Aplikacji (ang. **Application Programming Interface** - **API**). API to są funkcje programistyczne do manipulowania różnymi aspektami przeglądarki i systemu operacyjnego, na którym działa strona, lub manipulowania danymi z innych stron lub serwisów. W tym module dowiemy się czym są interfejsy API i jak korzystać z najbardziej popularnych interfejsów API, które często można napotkać w swoich pracach rozwojowych.

## Wymagania wstępne

By w pełni skorzystać z tego modułu, powinno się przejść przez poprzednie moduły JavaScript z tej serii ([Pierwsze kroki w JavaScript](/pl/docs/Learn/JavaScript/Pierwsze_kroki), [Klocki JavaScript](pl/docs/Learn/JavaScript/Building_blocks), i [Wprowadzenie do obiektów JavaScript](pl/docs/Learn/JavaScript/Obiekty)). Moduły te, tak czy inaczej wymagają wielokrotnego użycia prostego API ponieważ trudno jest napisać przykłady JavaScriptu po stronie klienta, które wykonują bez nich coś uzytecznego! Wchodzimy tutaj na wyższy poziom, zkaładając znajomość podstawowego języka JavaScript i zgłębiając często używane interfejsy webowe API trochę bardziej szczegółowo.

Podstawowa wiedza o [HTML](/pl/docs/Learn/HTML) i [CSS](/pl/docs/Learn/CSS) będzie również użyteczna.

> **Uwaga:** Jeśli pracujesz na urządzeniu, którym nie masz możliwości tworzenia swoich plików, możesz wypróbować przykłady kodu (większość z nich) w internetowych programach kodujących takich jak [JSBin](http://jsbin.com/) lub [Thimble](https://thimble.mozilla.org/).

## Przewodnik

- [Wprowadzenie do webowych interfejsów API](/pl/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
  - : First up, we'll start by looking at APIs from a high level — what are they, how do they work, how do you use them in your code, and how are they structured? We'll also take a look at what the different main classes of APIs are, and what kind of uses they have.
- [Manipulowanie dokumentami](/pl/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
  - : When writing web pages and apps, one of the most common things you'll want to do is manipulate web documents in some way. This is usually done by using the Document Object Model (DOM), a set of APIs for controlling HTML and styling information that makes heavy use of the {{domxref("Document")}} object. In this article, we'll look at how to use the DOM in detail, along with some other interesting APIs that can alter your environment in interesting ways.
- [Pobieranie danych z serwera](/pl/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
  - : Another very common task in modern websites and applications is retrieving individual data items from the server to update sections of a webpage without having to load an entirely new page. This seemingly small detail has had a huge impact on the performance and behavior of sites, so in this article, we'll explain the concept, and look at technologies that make it possible, such as {{domxref("XMLHttpRequest")}} and the [Fetch API](/pl/docs/Web/API/Fetch_API).
- [Interfejsy API innych twórców](/pl/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs)
  - : The APIs we've covered so far are built into the browser, but not all APIs are. Many large websites and services such as Google Maps, Twitter, Facebook, PayPal, etc. provide APIs allowing developers to make use of their data (e.g. displaying your twitter stream on your blog) or services (e.g. displaying custom Google Maps on your site, or using Facebook login to log in your users). This article looks at the difference between browser APIs and 3rd party APIs and shows some typical uses of the latter.
- [Rysowanie grafiki](/pl/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
  - : The browser contains some very powerful graphics programming tools, from the Scalable Vector Graphics ([SVG](/pl/docs/Web/SVG)) language, to APIs for drawing on HTML {{htmlelement("canvas")}} elements, (see [The Canvas API](/pl/docs/Web/API/Canvas_API) and [WebGL](/pl/docs/Web/API/WebGL_API)). Ths article provides an introduction to the Canvas API, and further resources to allow you to learn more.
- [Interfejsy API wideo i audio](/pl/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)
  - : HTML5 comes with elements for embedding rich media in documents — {{htmlelement("video")}} and {{htmlelement("audio")}} — which in turn come with their own APIs for controlling playback, seeking, etc. This article shows you how to do common tasks such as creating custom playback controls.
- [Client-side storage](/pl/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)
  - : Modern web browsers feature a number of different technologies that allow you to store data related to web sites and retrieve it when necessary allowing you to persist data long term, save sites offline, and more. This article explains the very basics of how these work.
