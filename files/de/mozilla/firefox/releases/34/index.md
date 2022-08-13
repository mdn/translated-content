---
title: Firefox 34 für Entwickler
slug: Mozilla/Firefox/Releases/34
tags:
  - Firefox
  - Releases
translation_of: Mozilla/Firefox/Releases/34
---
{{FirefoxSidebar}}

Möchtest du helfen Firefox 34 zu dokumentieren? Schaue dir die [Liste der Bugs an, über die noch geschrieben werden muss](http://beta.elchi3.de/doctracker/#list=fx&version=34.0).

## Änderungen für Webentwickler

### Entwickler Werkzeuge

Höhepunkte:

- [Storage Inspector: a new tool enabling you to view data stored by web pages](/de/docs/Tools/Storage_Inspector)
- [Performance tool: revamped Profiler UI and frame rate timeline](/de/docs/Tools/Performance)
- [Frame switching: point the developer tools at a specific iframe in the page](/de/docs/tools/Working_with_iframes)
- [console.table support](/de/docs/Web/API/Console.table)
- [jQuery events are visible in the Page Inspector](/de/docs/Tools/Page_Inspector#Examining_event_listeners)

[All devtools bugs fixed between Firefox 33 and Firefox 34](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-09-02&chfield=resolution&query_format=advanced&chfieldfrom=2014-07-21&chfieldvalue=FIXED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&component=Simulator&product=Firefox&product=Firefox%20OS&list_id=11184176).

### CSS

- Unsere experimentelle Implementierung der CSS Schriftarten Level 3 schreitet voran. Neu implementierte Funktionen sind:

  - Der Fallback Algorithmus von {{cssxref("font-variant-position")}}, erstellt synthetische Alternativen für fehlende Glyphen, basierend auf den subscript and superscript metrics supplied by the font ({{bug(1024804)}}).
  - Das `layout.css.font-features.enabled` wurde entfernt, was beudeutet, dass die folgenden Eigenschaften standartmäßig aktiviert sind :

    - The CSS Font Level 3 version of {{cssxref("font-variant")}} which is now a shorthand property.
    - The longhand properties {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-ligatures")}}, and {{cssxref("font-variant-alternates")}}.
    - The properties {{cssxref("font-kerning")}} and {{cssxref("font-synthesis")}}
    - The properties {{cssxref("font-feature-settings")}} and {{cssxref("font-language-override")}} are unprefixed. The prefixed version are still available for some time to ease transition.

- To reflect the latest specification changes, the value `auto` has been renamed in `main-size` on the {{cssxref("flex-basis")}} property. The shorthand {{cssxref("flex")}} keep an `auto` value, but it is a synonym of `1 1 main-size` ({{bug(1032922)}}). The value used for the longhand {{cssxref("flex-basis")}} when omitted in the shorthand is now `0%`, and the one for {{cssxref("flex-growth")}} is now `1`, both different than their initial value.
- The value `auto` has been added to {{cssxref("min-width")}} and {{cssxref("min-height")}} with a different behavior than the last time ({{bug(984711)}} and {{bug(1015474)}}).
- An experimental implementation, disabled by default, of the filter functional values of the {{cssxref("filter")}} property have been implemented. It is controlled by the `layout.css.filters.enabled` pref. ({{bug(948265)}})

### HTML

_Keine Veränderungen._

### JavaScript

- The ES6 syntax for [computed property names on object literals](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names) has been implemented ({{bug(924688)}}).

  - This includes [getter](/de/docs/Web/JavaScript/Reference/Functions/get) and [setter](/de/docs/Web/JavaScript/Reference/Functions/set) method names as well ({{bug(1048384)}}) and can also be used with [destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Computed_object_property_names_and_destructuring).

- The ES6[ shorthand syntax for defining methods](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) on objects has been implemented ({{bug(924672)}}).
- The ES6 `Object` method {{jsxref("Object.assign", "Object.assign()")}} has been implemented ({{bug(937855)}}).
- ES6 [template strings](/de/docs/Web/JavaScript/Reference/template_strings) and the {{jsxref("String.raw()")}} method are now supported ({{bug(1038259)}}, {{bug(1039774)}}).
- A new ES6 object {{jsxref("WeakSet")}} has been added ({{bug(792439)}}).
- ES6 [Symbols](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) (only available in the Nightly channel) have been updated to conform with recent specification changes ({{bug(1042602)}}):

  - When trying to convert a symbol to a number, a [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError "The TypeError object represents an error when a value is not of the expected type.") will be thrown now.
  - When using loose equality, `Object(sym) == sym` returns `true` now.

- The experimental {{jsxref("TypedArray.prototype.move()")}} method (only available in former Nightly and Aurora channels) has been replaced with the now implemented standard ES6 {{jsxref("TypedArray.prototype.copyWithin()")}} method ({{bug(1021379)}}).
- In [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode), setting a [duplicate property name in object literals](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#Duplicate_property_names) will no longer throw a `SyntaxError` as per ES6 specification ({{bug(1041128)}}).

### Interfaces/APIs/DOM

- The {{domxref("Element.matches()")}} method has been added; it does what the non-standard `mozMatchesSelector()` was doing ({{bug(886308)}}).
- The {{domxref("URLUtils.searchParams", "searchParams")}} property has been added to the {{domxref("Location")}} interface, available via the {{domxref("document.location")}} and {{domxref("window.location")}} properties ({{bug(1037715)}}).
- The {{domxref("Performance.now()")}} method is now available to Web workers ({{bug(908390)}}).
- The non-standard interface `MozNamedAttrMap` has been renamed to the standard {{domxref("NamedNodeMap")}} and {{domxref("Element.attributes")}} has been adapted to use it ({{bug(1055467)}}).
- The non-standard methods and properties of {{domxref("Window.crypto")}} have been removed ({{bug(1030963)}}). Only methods and properties defined in the standard WebCrypto API are left.

### MathML

_Keine Veränderungen._

### SVG

_Keine Veränderungen._

### Audio/Video

_Keine Veränderungen\_\_._

## Sicherheit

_Keine Veränderungen\_\_._

## Änderungen für Add-on und Mozilla Entwickler

_Keine Veränderungen\_\_._

## Ältere Versionen

{{Firefox_for_developers('33')}}
