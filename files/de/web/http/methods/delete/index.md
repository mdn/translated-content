---
title: DELETE
slug: Web/HTTP/Methods/DELETE
translation_of: Web/HTTP/Methods/DELETE
---
{{HTTPSidebar}}

Die **Request-Methode HTTP DELETE** löscht die angegebene Ressource.

| Request hat einen Körper                                    | Kann |
| ----------------------------------------------------------- | ---- |
| Erfolgreiche Response hat Körper                            | Kann |
| {{Glossary("Safe")}}                                | Nein |
| {{Glossary("Idempotent")}}                        | Ja   |
| {{Glossary("Cacheable")}}                            | Nein |
| In [HTML Formularen](/de/docs/Web/Guide/HTML/Forms) erlaubt | Nein |

## Syntax

    DELETE /file.html HTTP/1.1

## Beispiel

### Request

    DELETE /file.html HTTP/1.1

### Responses

Bei erfolgreicher Anwendung einer `DELETE`-Methode sind mehrere Antwortzustandscodes möglich:

- Einen {{HTTPStatus("202")}} (`Akzeptiert`) Statuscode, wenn die Aktion wahrscheinlich erfolgreich sein wird, aber noch nicht durchgeführt wurde.
- Einen {{HTTPStatus("204")}} (`Kein Inhalt`) Statuscode, wenn die Aktion durchgeführt wurde und keine weiteren Informationen zu liefern sind.
- Einen {{HTTPStatus("200")}} (`OK`) Statuscode, wenn die Aktion ausgeführt wurde und die Antwortnachricht eine Darstellung enthält, die den Status beschreibt.

<!---->

    HTTP/1.1 200 OK
    Date: Wed, 21 Oct 2015 07:28:00 GMT

    <html>
      <body>
        <h1>File deleted.</h1>
      </body>
    </html>

## Spezifikationen

| Specification                                | Title                                                         |
| -------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "DELETE", "4.3.5")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Browser Kompatibilität

{{Compat("http.methods.DELETE")}}

## Siehe auch

- HTTP status: {{HTTPStatus("200")}}, {{HTTPStatus("202")}}, {{HTTPStatus("204")}}
