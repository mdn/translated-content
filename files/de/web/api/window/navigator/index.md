---
title: Window.navigator
slug: Web/API/Window/navigator
tags:
  - API
  - HTML DOM
  - Property
  - Read-only
  - Reference
  - Window
translation_of: Web/API/Window/navigator
---
{{APIRef}}

Die Schreibgeschützte` Window.navigator` Eigenschaft liefert eine Referenz des {{domxref("Navigator")}} Objekts, das Informationen über die Anwendung die das Skript ausführt liefern kann.

## Syntax

    navigatorObject = window.navigator

## Beispiele

### Beispiel #1: Browsererkennung und Ausgabe eines Texts.

    var sBrowser, sUsrAg = navigator.userAgent;

    // The order matters here, and this may report false positives for unlisted browsers.

    if (sUsrAg.indexOf("Firefox") > -1) {
      sBrowser = "Mozilla Firefox";
      // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
    } else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
      sBrowser = "Opera";
      //"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
    } else if (sUsrAg.indexOf("Trident") > -1) {
      sBrowser = "Microsoft Internet Explorer";
      // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
    } else if (sUsrAg.indexOf("Edge") > -1) {
      sBrowser = "Microsoft Edge";
      // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
    } else if (sUsrAg.indexOf("Chrome") > -1) {
      sBrowser = "Google Chrome or Chromium";
      // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
    } else if (sUsrAg.indexOf("Safari") > -1) {
      sBrowser = "Apple Safari";
      // "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
    } else {
      sBrowser = "unknown";
    }

    alert("Sie verwenden: " + sBrowser);

### Beispiel #2: Browsererkennung und Rückgabe eines Index.

    function getBrowserId () {
      var aKeys = ["MSIE", "Firefox", "Safari", "Chrome", "Opera"],
          sUsrAg = navigator.userAgent,
          nIdx = aKeys.length - 1;

      for (nIdx; nIdx > -1 && sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--);

      return nIdx;
    }

    console.log(getBrowserId());

## Spezifikation

| Specification                                                                            | Status                           | Comment |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', '#dom-navigator', 'Window: navigator')}} | {{Spec2('HTML WHATWG')}} |         |

## <br>Browserkompatibilität

{{Compat("api.Window.navigator")}}
