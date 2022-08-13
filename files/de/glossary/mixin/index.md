---
title: Mixin
slug: Glossary/Mixin
tags:
  - Glossary
  - Mixin
translation_of: Glossary/Mixin
---
Ein _Mixin_ ist eine {{Glossary("class","Klasse")}} oder eine {{Glossary("interface","Schnittstelle")}} in der einige oder alle ihrer {{Glossary("method", "Methoden")}} und/oder {{Glossary("property", "Eigenschaften")}} nicht implementiert werden, was erfordert, dass eine andere {{Glossary("class","Klasse")}} oder {{Glossary("interface","Schnittstelle")}} die fehlenden Implementierungen bereitstellt. Die neue Klasse bzw. die neue Schnittstelle enthält dann sowohl die Eigenschaften und Methoden aus dem Mixin als auch diejenigen, die sie selbst definiert. Alle Methoden und Eigenschaften werden exakt gleich verwendet, unabhängig davon, ob sie im Mixin implementiert sind oder im Interface oder in der Klasse, die das Mixin implementiert.

Der Vorteil von Mixins besteht darin, dass sie zur Vereinfachung des Designs von APIs verwendet werden können, bei denen mehrere Schnittstellen dieselben Methoden und Eigenschaften enthalten müssen.

Zum Beispiel wird das Mixin {{domxref("WindowOrWorkerGlobalScope")}}} verwendet, um Methoden und Eigenschaften zur Verfügung zu stellen, die sowohl auf den Schnittstellen {{domxref("Window")}} als auch {{domxref("WorkerGlobalScope")}}} verfügbar sein müssen. Das Mixin wird von beiden Schnittstellen implementiert.

## Erfahre mehr

### Allgemeines Wissen

- [Mixin](https://de.wikipedia.org/wiki/Mixin) in Wikipedia
