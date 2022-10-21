---
title: API リファレンスには何が必要ですか？
slug: orphaned/MDN/Structures/API_references/What_does_an_API_reference_need
original_slug: MDN/Structures/API_references/What_does_an_API_reference_need
---

{{MDNSidebar}}

この記事では、完全な API リファレンスに必要なページについて説明します。

> **メモ:** API リファレンスで作業しているときに書いたり更新したりする必要があるドキュメントのリストを作成し、完了したらチェックを外すことをお勧めします。

## API ページの概要

An API reference will generally contain the following pages. You can find more details of what each page contains, examples, and templates, in our [Page types](/ja/docs/MDN/Contribute/Structures/Page_types) article.

1. Overview page
2. Interface pages
3. Constructor pages
4. Method pages
5. Property pages (including event handlers properties)
6. Event pages
7. Concept/guide pages
8. Examples

> **メモ:** We'll be referring to the [Web Audio API](/ja/docs/Web/API/Web_Audio_API) for examples in this article.

> **メモ:** To create a page as specified below, the easiest way is to go to the parent page you want it to hang off, and choose _Cog icon > New sub-article_. If you haven't got this option available on your MDN interface, you'll need to request this privilege (ask at `mdn-admins@mozilla.org`), or ask another MDN contributor to create them for you.

### 概要ページ

A single API overview page is used to describe the role of the API, its top-level interfaces, related features contained in other interfaces, and other high level details. Its name and slug should be the name of the API plus "API" on the end. It is placed at the top level of the API reference, as a child of [https://developer.mozilla.org/ja/docs/Web/API](/ja/docs/Web/API).

例:

- Title: _Web Audio API_
- Slug: _Web_Audio_API_
- URL: [https://developer.mozilla.org/ja/docs/Web/API/Web_Audio_API](/ja/docs/Web/API/Web_Audio_API)

### インターフェイスページ

Each interface will have its own page too, describing the purpose of the interface, listing any members (constructors, methods, properties, etc. it contains), and showing what browsers it is compatible with. A page's name and slug should be the name of the interface, exactly as written in the spec. Each page is placed at the top level of the API reference, as a child of [https://developer.mozilla.org/ja/docs/Web/API](/ja/docs/Web/API).

例:

- Title: _AudioContext_
- Slug: _AudioContext_
- URL: [https://developer.mozilla.org/ja/docs/Web/API/AudioContext](/ja/docs/Web/API/AudioContext)

<!---->

- Title: _AudioNode_
- Slug: _AudioNode_
- URL: [https://developer.mozilla.org/ja/docs/Web/API/AudioNode](/ja/docs/Web/API/AudioNode)

> **メモ:** We document every member appearing in the interface. You should bear the following rules in mind:
>
> - We document methods defined on the **prototype** of an object implementing this interface (instance methods), and methods defined on the actual class itself (static methods). On the rare occasions that they both exist on the same interface, you should list them in separate sections on the page (Static methods/Instance methods). Usually only instance methods exist, in which case you can put these under the title "Methods".
> - We do not document inherited properties and methods of the interface: they are listed on the respective parent interface. We do hint at their existence though.
> - We do document properties and methods defined in mixins, though we use the mixin name as interface name. (This is not optimal as the mixin name will not appear in the console, but it prevents the duplication of documentation. We may revisit this in the future.)
> - Special methods like the stringfier (`toString()`) and the jsonizier (`toJSON()`) are also listed if they do exist.
> - Named constructors (like `Image()` for {{domxref("HTMLImageElement")}} ) are also listed, if relevant.

### コンストラクタページ

Each interface has 0 or 1 constructors, documented on a subpage of the interface's page. It describes the purpose of the constructor and shows what its syntax looks like, usage examples, browser compatibility information, etc. Its slug is the name of the constructor, which is exactly the same as the interface name, and the title is interface name, dot, constructor name, then parentheses on the end.

Example:

- Title: _AudioContext.AudioContext()_
- Slug: _AudioContext_
- URL: [https://developer.mozilla.org/ja/docs/Web/API/AudioContext/AudioContext](/ja/docs/Web/API/AudioContext/AudioContext)

### プロパティページ

Each interface has zero or more properties, documented on subpages of the interface's page. each page describes the purpose of the property and shows what its syntax looks like, usage examples, browser compatibility information, etc. Its slug is the name of the property, and the title is interface name, dot, then property name.

Examples:

- Title: _AudioContext.state_
- Slug: _state_
- URL: [https://developer.mozilla.org/ja/docs/Web/API/AudioContext/state](/ja/docs/Web/API/AudioContext/state)

<!---->

- Title: _AudioContext.onstatechange_
- Slug: _onstatechange_
- URL: [https://developer.mozilla.org/ja/docs/Web/API/AudioContext/onstatechange](/ja/docs/Web/API/AudioContext/onstatechange)

> **メモ:** Event handler properties are treated in the same way as regular properties; they are generally listed in a separate section on the interface page though.

### メソッドページ

Each interface has zero or more methods, documented on subpages of the interface's page. each page describes the purpose of the method and shows what its syntax looks like, usage examples, browser compatibility information, etc. Its slug is the name of the method, and the title is interface name, dot, method name, then parentheses.

Examples:

- Title: _AudioContext.close()_
- Slug: _close_
- URL: [https://developer.mozilla.org/ja/docs/Web/API/AudioContext/close](/ja/docs/Web/API/AudioContext/close)

<!---->

- Title: _AudioContext.createGain()_
- Slug: _createGain_
- URL: [https://developer.mozilla.org/ja/docs/Web/API/AudioContext/createGain](/ja/docs/Web/API/AudioContext/createGain)

### イベントページ

Each event handler property you create will have a corresponding event page, describing the event that causes the handler to fire, documented on a subpage of [https://developer.mozilla.org/ja/docs/Web/Events](/ja/docs/Web/Events). Each page describes the purpose of the event and shows what its syntax looks like, usage examples, browser compatibility information, etc. Its slug and title is the name of the event.

Example:

- Title: _statechange_
- Slug: _statechange_
- URL: [https://developer.mozilla.org/ja/docs/Web/Events/statechange](/ja/docs/Web/Events/statechange)

### Concept/guide pages

Most API references have at least one guide and sometimes also a concept page to accompany it. At minimum, an API reference should contain a guide called "Using the _name-of-api_", which will provide a basic guide to how to use the API. More complex APIs may require multiple usage guides to explain how to use different aspects of the API.

If required, you can also including a concepts article called "_name-of-api_ concepts", which will provide explanation of the theory behind any concepts related to the API that developers should understand to effectively use it.

These articles should all be created as subpages of the API overview page. For example, the Web Audio has four guides and a concept article:

- [https://developer.mozilla.org/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [https://developer.mozilla.org/ja/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API](/ja/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [https://developer.mozilla.org/ja/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics](/ja/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [https://developer.mozilla.org/ja/docs/Web/API/Web_Audio_API/Porting_webkitAudioContext_code_to_standards_based_AudioContext](/ja/docs/Web/API/Web_Audio_API/Porting_webkitAudioContext_code_to_standards_based_AudioContext)
- [https://developer.mozilla.org/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)

### 例

You should create some examples that demonstrate at least the most common use cases of the API. You can put these anywhere that is appropriate, although the recommended place is the [MDN GitHub repo](https://github.com/mdn/).
