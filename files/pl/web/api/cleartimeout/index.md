---
title: window.clearTimeout
slug: Web/API/clearTimeout
translation_of: Web/API/WindowOrWorkerGlobalScope/clearTimeout
original_slug: Web/API/WindowOrWorkerGlobalScope/clearTimeout
---
{{ ApiRef() }}

### Podsumowanie

Usuwa opóźnienie ustanione przez [window.setTimeout()](/en/DOM/window.setTimeout "en/DOM/window.setTimeout").

### Składnia

    window.clearTimeout(id)

gdzie `id` jest identyfikatorem opóźnienia do usunięcia, który został zwrócony podczas wywołania [window.setTimeout()](/en/DOM/window.setTimeout "en/DOM/window.setTimeout").

### Przykład

Uruchomienie poniższego skryptu w kontekscie strony i pojedyncze kliknięcie spowoduje wyświetlenie wiadomości po jednej sekundzie. Jeżeli użytkownik będzie klikał na stronie przynajmniej raz na sekundę wiadomość nigdy nie zostanie wyświetlona.

    var alarm = {
      remind: function(aMessage) {
        alert(aMessage);
        delete this.timeoutID;
      },

      setup: function() {
        this.cancel();
        var self = this;
        this.timeoutID = window.setTimeout(function(msg) {self.remind(msg);}, 1000, "Wake up!");
      },

      cancel: function() {
        if(typeof this.timeoutID == "number") {
          window.clearTimeout(this.timeoutID);
          delete this.timeoutID;
        }
      }
    };
    window.onclick = function() { alarm.setup() };

### Uwagi

Przekazanie niepoprawnego ID do `clearTimeout` nie powoduje żadnej akcji (żaden błąd nie jest wyrzucany).

### Specyfikacja

{{ DOM0() }}

{{ languages( { "en": "en/DOM/window\.clearTimeout", "fr": "fr/DOM/window\.clearTimeout", "ja": "ja/DOM/window\.clearTimeout", "pl": "pl/DOM/window\.clearTimeout" } ) }}
