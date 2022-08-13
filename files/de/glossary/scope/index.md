---
title: Scope
slug: Glossary/Scope
translation_of: Glossary/Scope
---
Der aktuelle Ausführungskontext. D.h. der Kontext, in dem {{glossary("value","values")}} und Ausdrücke sichtbar sind oder referenziert werden können. Wenn **{{glossary("variable")}}** oder andere Ausdrücke nicht im aktuellen Ausführungskontext (Scope) sind, dann können sie nicht verwendet werden. Scopes können auch hierarchisch angeordnet sein, so dass darunter liegende Scopes (Child-Scopes) auf die darüberliegenden Elemente (Parent-Scopes) zugreifen können, aber nicht umgekehrt.

Beispiel: **{{glossary("function")}}** dient als abgeschlossene Funktion (**closure**) in {{glossary("JavaScript")}}, und erzeugt so einen Scope, so dass z.B. eine Variable, die nur innerhalb der Funktion definiert wurde, außerhalb dieser Funktion oder in anderen Funktionen nicht angesprochen werden kann. Das folgende Beispiel ist deshalb fehlerhaft:

    function exampleFunction() {
        var x = "declared inside function";  // x can only be used in exampleFunction
        console.log("Inside function");
        console.log(x);
    }

    console.log(x);  // Causes error

Der folgende Code funktioniert jedoch, da die Variable außerhalb der Funktion deklariert wurde und somit global verfügbar ist:

    var x = "declared outside function";

    exampleFunction();

    function exampleFunction() {
        console.log("Inside function");
        console.log(x);
    }

    console.log("Outside function");
    console.log(x);

## Learn more

### General knowledge

- {{Interwiki("wikipedia", "Scope (computer science)")}} on Wikipedia
