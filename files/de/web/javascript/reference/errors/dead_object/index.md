---
title: 'TypeError: can''t access dead object'
slug: Web/JavaScript/Reference/Errors/Dead_object
tags:
  - Addon
  - Error
  - Errors
  - JavaScript
translation_of: Web/JavaScript/Reference/Errors/Dead_object
original_slug: Web/JavaScript/Reference/Fehler/Dead_object
---
{{JSSidebar("Errors")}}

## Fehlermeldung

    TypeError: can't access dead object

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist falsch gelaufen?

Um die Speichernutzung zu verbessern und Speicherlücken zu vermeiden, verbietet Firefox Add-Ons Referenzen in das DOM Objekt zu speichern, nachdem das Elterndokument zerstört wurde. Ein totes Objekt hält eine starke Referenz zu einem DOM-Element, welche nach nach dem Zerstören in DOM existiert. Um dieses Problem zu vermeiden, sollte statt der Referenz zu einem DOM-Knoten im fremden Dokument die Referenz in einem Objekt, welches im Dokument selbst spezifiziert ist gespeichert werden und gesäubert werden, wenn das Dokument nicht mehr geladen ist, oder als [weak Referenz](/de/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.getWeakReference) gespeichert werden.

## Prüfen, ob ein Objekt tot ist

[Components.utils](/de/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils) hat ein `isDeadWrapper()` Methode, welche in privilegiertem Quelltext verwendet werden sollte.

```js
if (Components.utils.isDeadWrapper(window)) {
  // dead
}
```

Nicht privilegierter Quelltext hat keinen Zugriff auf Component.utils und sollt deswegen einfach den Fehler abfangen.

```js
try {
  String(window);
}
catch (e) {
  console.log("window is likely dead");
}
```

## Siehe auch

- [What does “can’t access dead object” mean?](https://blog.mozilla.org/addons/2012/09/12/what-does-cant-access-dead-object-mean/)
- [Häufige Gründe für Speicherlöcher in Erweiterungen](/de/docs/Extensions/Common_causes_of_memory_leaks_in_extensions)
- [Components.utils](/de/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils)
- [Zombie Abteilungen](/de/docs/Mozilla/Zombie_compartments)
