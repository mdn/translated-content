---
title: Multimediainhalte einbinden - Übersicht
slug: Learn/HTML/Multimedia_and_embedding
tags:
  - Assessment
  - Audio
  - Beginner
  - CodingScripting
  - Embedding
  - Flash
  - Guide
  - HTML
  - Images
  - Landing
  - Learn
  - Multimedia
  - NeedsTranslation
  - SVG
  - TopicStub
  - Video
  - Web
  - iframes
  - imagemaps
  - img
  - responsive
translation_of: Learn/HTML/Multimedia_and_embedding
---
{{LearnSidebar}}

In diesem Kurs haben wir uns bisher viel zum Thema Text angesehen. Das Internet wäre allerdings ziemlich langweilig, wenn es nur aus reinem Text bestehen würde. Deshalb wollen wir uns nun ansehen, wie wir die Inhalte lebendiger und interessanter gestalten können.

Dieses Modul zeigt, wie wir HTML einsetzen können, um Multimediainhalte in unsere Webseiten zu integrieren, egal ob es sich dabei um Bilder, Videos, Tonaufnahmen oder etwa ganze Webseiten handelt.

## Vorwissen

Bevor Sie dieses Modul beginnen, sollten Sie über zuverlässiges HTML-Grundlagenwissen verfügen, wie es zuvor in [Einführung in HTML](/de/docs/Learn/HTML/Einf%C3%BChrung_in_HTML) behandelt wurde. Falls Sie dieses Modul noch nicht bearbeitet haben (und auch nichts ähnliches), beginnen Sie am besten damit und kommen Sie später wieder!

> **Hinweis:** Wenn Sie an einem Computer/Tablet/Gerät arbeiten, auf welchem Sie nicht die Möglichkeit haben, eigene Dateien zu erstellen, können Sie die meisten Code-Beispiele in einem Online-Editor wie [JSBin](http://jsbin.com/) oder [Thimble](https://thimble.mozilla.org/)ausprobieren.

## Einführung

Dieses Modul unterteilt sich in nachfolgende Abschnitte, um Ihnen die Grundlagen zur Einbettung von multimedialen Inhalten in Webseiten zu erläutern.

- [Bilder in HTML](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
  - : Man kann an die verschiedensten Arten von Multimediainhalten denken, die man einbinden könnte, aber wir fangen hier mit dem einfachsten Typ an, nämlich mit einem {{htmlelement("img")}}, mit welchem ein einfaches Bild in die Webseite eingefügt werden kann. In diesem Abschnitt sehen wir uns dies nun genauer an, beginnend bei den Mindestangaben, welche wir dann um eine Beschriftung ergänzen, welches durch den Einsatz eines {{htmlelement("figure")}} geschieht. Wie diese Angaben dann in Bezug zu Hintergrundgrafiken stehen, welche durch CSS Angaben definiert werden, werden wir uns anschliessend ansehen.
- [Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
  - : Next, we'll look at how to use the HTML5 {{htmlelement("video")}} and {{htmlelement("audio")}} elements to embed video and audio on our pages, including basics, providing access to different file formats to different browsers, adding captions and subtitles, and how to add fallbacks for older browsers.
- [Von \<object> bis \<iframe> — andere Einbindungstechniken](/de/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)
  - : At this point we'd like to take somewhat of a sideways step, looking at a couple of elements that allow you to embed a wide variety of content types into your webpages: the {{htmlelement("iframe")}}, {{htmlelement("embed")}} and {{htmlelement("object")}} elements. `<iframe>`s are for embedding other web pages, and the other two allow you to embed PDFs, SVG, and even Flash — a technology on its way out, but which you may still see semi-regularly.
- [Vektorgrafiken einbinden](/de/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
  - : Vector graphics can be very useful in certain situations. Unlike regular formats like PNG/JPG, they don't distort/pixelate when zoomed in — they can remain smooth when scaled. This article introduces you to what vector graphics are and how to include the popular {{glossary("SVG")}} format in web pages.
- [Responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
  - : With so many different device types now able to browse the web — from mobile phones to desktop computers — an essential concept to master in the modern web world is responsive design. This refers to the creation of webpages that can automatically change their features to suit different screen sizes, resolutions, etc. This will be looked at in much more detail in a CSS module later on, but for now, we'll look at the tools HTML has available to create responsive images, including the {{htmlelement("picture")}} element.

## Assessments

The following assessments will test your understanding of the HTML basics covered in the guides above:

- [Mozilla splash page](/de/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page)
  - : In this assessment, we'll test your knowledge of some of the techniques discussed in this module's articles, getting you to add some images and video to a funky splash page all about Mozilla!

## See also

- [Add a hitmap on top of an image](/de/docs/Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image)
  - : Image maps provide a mechanism to make different parts of an image link to different places. (Think of a map linking through to further information about each different country you click on.) This technique can sometimes be useful.
- [Web literacy basics 2](https://teach.mozilla.org/activities/web-lit-basics-two/)
  - : An excellent Mozilla foundation course that explores and tests some of the skills talked about in this _Multimedia and embedding_ module. Dive deeper into the basics of composing webpages, designing for accessibility, sharing resources, using online media, and working open (meaning that your content is freely available and shareable by others).E
