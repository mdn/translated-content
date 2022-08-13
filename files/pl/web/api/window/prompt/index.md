---
title: window.prompt
slug: Web/API/Window/prompt
translation_of: Web/API/Window/prompt
---
{{ ApiRef() }}

### Podsumowanie

Wyświetla okno dialogowe z prośbą do użytkownika o wpisanie jakiegoś tekstu.

### Składnia

    result = window.prompt(text,value);

- `result` jest łańcuchem znaków, który zawiera tekst wprowadzony przez użytkownika lub wartość null.
- `text` jest łańcuchem znaków określającym tekst, jaki ma zostać wyświetlony użytkownikowi.
- `value` jest łańcuchem znaków zawierającym domyślną wartość w polu wprowadzania tekstu (input). Jest to opcjonalny parametr.

### Przykład

    var sign = prompt("Jaki jest twój znak zodiaku?");
    if (sign.toLowerCase() == "skorpion")
       alert("Wow! Też jestem Skorpionem!");

Gdy użytkownik naciśnie przycisk OK, zwracany jest wpisany przez niego tekst. Jeśli użytkownik naciśnie przycisk OK bez wprowadzania tekstu, zwrócony zostanie pusty łańcuch znaków. Jeśli użytkownik naciśnie przycisk Anuluj, ta funkcja zwróci wartość null.

### Uwagi

Okno dialogowe typu prompt zawiera pole tekstowe o wielkości pojedynczej linii, przycisk Anuluj i przycisk OK oraz zwraca tekst (możliwy również pusty), które użytkownik wpisał w to pole tekstowe.

The following text is shared between this article, DOM:window\.confirm and DOM:window\.alert Okna dialogowe to okna modalne - uniemożliwiają użytkownikowi dostęp do reszty interfejsu programu dopóki okno nie zostanie zamknięte. Z tego powodu nie powinieneś nadużywać funkcji, które otwierają okna dialogowe.

Zamiast tego użytkownicy Chrome (na przykład rozszerzenia) powinni używać metod [nsIPromptService](/pl/docs/XPCOM_Interface_Reference/nsIPromptService).

### Specyfikacja

{{ DOM0() }}

### Zobacz także

[alert](pl/DOM/window.alert), [confirm](pl/DOM/window.confirm)



{{ languages( { "en": "en/DOM/window\.prompt", "fr": "fr/DOM/window\.prompt", "ja": "ja/DOM/window\.prompt" } ) }}
