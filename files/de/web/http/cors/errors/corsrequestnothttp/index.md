---
title: 'Ursache: CORS Anfrage nicht HTTP'
slug: Web/HTTP/CORS/Errors/CORSRequestNotHttp
translation_of: Web/HTTP/CORS/Errors/CORSRequestNotHttp
---
{{HTTPSidebar}}

## Ursache

    Reason: CORS request not HTTP

## Was ist schief gelaufen?

{{Glossary("CORS")}} Anfragen (requests) sollten nur das HTTPS URL Schema benutzen, aber die von der Anfrage spezifizierte URL ist von einem anderen Typ. Dies passiert oft, wenn die URL bspw. eine lokale URL, wie eine Datei beschreibt: `file:///` URL.

Um das Problem zu beheben, stelle sicher, dass Du eine HTTPS URL verwendest, wenn CORS Anfragen involviert sind.

## Siehe auch:

- [CORS errors](/de/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS introduction](/de/docs/Web/HTTP/CORS)
- [What is a URL?](/de/docs/Learn/Common_questions/What_is_a_URL)
