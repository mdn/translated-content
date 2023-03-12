---
title: How to properly tag pages
slug: MDN/Writing_guidelines/Howto
original_slug: MDN/Writing_guidelines/Howto/Tag
---

{{MDNSidebar}}

**Article tags** are an important way to put visitors in touch with helpful content. Each page should normally have several tags to help keep content organized. This page explains the best way to tag pages so that our readers can find information and we can keep ourselves organized.

For a help with the user interface for editing tags, see the [tagging section](/zh-TW/docs/MDN/Contribute/Editor/Basics#The_tags_box) in our editor guide.

Please use tags properly as explained below. If you don't, our automated tools will not correctly generate lists of content, landing pages, and cross-linking of articles.

## How MDN uses tags

Tags get used on MDN several ways:

- Document categorization
  - : What type of document is it? Is it a reference? A tutorial? A landing page? Our visitors can use these tags to filter searches, so they're really important!
- Topic identification
  - : What is the article about? Is it about an API? The DOM? Graphics? Again, these tags are important because they can filter searches.
- Technology status
  - : What's the status of the technology? Is it non-standard? Obsolete or deprecated? Experimental?
- Skill level
  - : For tutorials and guides, how advanced is the material covered by the article?
- Document metadata
  - : The writing community needs tags to keep track of which pages need what kind of work.

## Tag type guide

Here's a quick guide to the types of tags and possible values for them.

### Document category

When you tag an article with one of these categories, you help the automated tools more accurately generate landing pages, tables of contents, and so on. Our new search system will also use these terms so that our visitors can locate reference or guide information at will.

We use the following category names as standard tagging terms:

- `Intro`
  - : The article provides introductory material about a topic. Ideally each technology area should have only one "Intro".
- `Featured`
  - : The article is critical and will display prominently on landing pages. Use this tag sparingly (never more than three documents in each documentation area).
- `Reference`
  - : The article contains reference material about an API, element, attribute, property, or the like.
- `Landing`
  - : The page is a landing page.
- `Guide`
  - : The article is a how-to or guide page.
- `Example`
  - : The article is a code sample page, or has code samples (that is, actual snippets of useful code, not one-line "syntax examples").

### Topic

By identifying the article's topic area, you are helping generate better search results (and landing pages and navigation as well).

While there's some room for flexibility here as we identify new topic areas, we try to limit ourselves to the names of APIs or technologies. Some useful examples:

- `HTML`
- `CSS`
- `JavaScript` (notice the capital "S"!)
- `Document`
- `DOM`
- `API` for each interface, method and property.
- `Method` for each method of an API
- `Property` for each property of an API
- `Graphics`
- `Firefox OS`
- `Gecko`
- `XUL`
- `XPCOM`
- `SVG`
- `WebGL`
- `Element`
- `Node`
- `Tools`
- `Web`

In general, your topic identification tag should be the name of an interface with a number of related pages (like [Node](/zh-TW/docs/Web/API/Node), which has many pages for its various properties and methods), or the name of an overall technology type. You might tag a page about WebGL with `Graphics` and `WebGL`, for example, but a page about {{HTMLElement("canvas")}} with `HTML`, `Element`, `Canvas`, and `Graphics`.

### Technology status

To help the reader understand how viable a technology is, we use tags to label pages as to the status of the technology's specification. This isn't as detailed as actually explaining what the spec is and how far the technology has come in the specification process (that's what the Specifications table is for), but it helps the reader judge, at a glance, whether it's a good idea to use the technology described in the article.

Here are possible values for these tags:

- `Non-standard`
  - : Indicates that the technology or API described on the page is not part of a standard, but is considered stable in any implementing browser(s). If you don't use this tag, your readers will assume the technology is standard. The compatibility table on the page should clarify which browser(s) support this technology or API.
- `Deprecated`
  - : The technology or API covered on the page is marked as deprecated in the specification, and is likely to eventually be removed, but is generally still available in current versions of browsers.
- `Obsolete`
  - : The technology or API has been deemed obsolete and has been removed (or actively being removed) from all or most current browsers.
- `Experimental`
  - : The technology is not standardized, and is an experimental technology or API that may or may not ever become part of a standard. It is also subject to change in the browser engine (typically only one) that implements it.
- `Needs Privileges`
  - : The API requires privileged access to the device on which the code is running.
- `Certified Only`
  - : The API only works in certified code.

These tags are no excuse to leave out the [compatibility table](/zh-TW/docs/Project:Compatibility_tables) in your article!

### Skill level

Use the skill-level tag type only for guides and tutorials (that is, pages tagged `Guide`) to help users choose tutorials based on how familiar they are with a technology. There are three values for this:

- `Beginner`
  - : Articles designed to introduce the reader to a technology they've never used or have only a passing familiarity with.
- `Intermediate`
  - : Articles for users who have gotten started with the technology but aren't experts.
- `Advanced`
  - : Articles about stretching the capabilities of a technology and of the reader.

### Document metadata

The writing community uses tags to label articles as requiring specific types of work. Here's a list of the ones we use most:

- `junk`
  - : The article needs to be deleted.
- `NeedsContent`
  - : The article is a stub, or is otherwise lacking information. This tag means that someone should review the content and add more details and/or finish writing the article.
- `NeedsExample`
  - : The article needs one or more examples created to help illustrate the article's point. These examples should use the [live sample system](/zh-TW/docs/Project:MDN/Contributing/How_to_help/Code_samples).
- `NeedsLiveSamples`
  - : The article has one or more examples that need to be updated to use the [live sample system](/zh-TW/docs/Project:MDN/Contributing/How_to_help/Code_samples).
- `NeedsUpdate`
  - : The content is out of date and needs to updating.
- `l10n:exclude`
  - : The content is not really worth localizing and will not appear on localization status pages.
- `l10n:priority`
  - : The content is important and should be marked as a priority for MDN translators. Shows up in an extra priority table on localization status pages.

### Web Literacy Map

The [WebMaker](https://webmaker.org) project, through the [Web Literacy Map](https://webmaker.org/literacy), has defined skills needed to optimally read, write, and participate on the Web. We use Web literacy skills as tags on MDN to help our users find the resources that best suit their needs:

- `Navigation`
  - : how to browse the Web
- `WebMechanics`
  - : how the Web is organized and how it works
- `Search`
  - : how to find information, people, and resources on the Web
- `Credibility`
  - : how to critically evaluate information you find on the Web
- `Security`
  - : how to keep systems, identities, and content safe
- `Composing`
  - : how to create and curate content for the Web
- `Remixing`
  - : how to modify existing Web resources to create something new
- `DesignAccessibility`
  - : how to create universally effective communications through Web resources
- `CodingScripting`
  - : how to code and/or create interactive experiences on the Web
- `infrastructure`
  - : how the Internet's technical stack works
- `Sharing`
  - : how to create resources with others
- `Collaborating`
  - : how to work with other people
- `Community`
  - : how to get involved in Web communities and understand how they work
- `Privacy`
  - : how to examine the consequences of sharing data online
- `OpenPractices`
  - : how to help keep the Web accessible to everybody

## Putting it all together

So to each page you assign tags from several tag types, for example

- A tutorial about WebGL for beginners
  - : `WebGL`, `Graphics`, `Guide`, `Beginner`
- Reference page for {{HTMLElement("canvas")}}
  - : `Canvas`, `HTML`, `Element`, `Graphics,` `Reference`
- A landing page for Firefox OS developer tools
  - : `Tools`, `Firefox OS`, `Landing`

## Tagging problems you can fix

There are several kinds of tag problems you can help fix:

- No tags
  - : Generally articles should have at _least_ a "[category](/zh-TW/docs/Project:MDN/Contributing/Tagging_standards#Category)" tag and a "[topic](/zh-TW/docs/Project:MDN/Contributing/Tagging_standards#Topic)" tag. Usually other tags are appropriate as well, but if you can help us ensure that the minimum tags are present, you'll be a documentation hero!
- Tags that don't follow our tagging standards
  - : Please fix any documents whose tags don't follow the standards on this page.
    Note that due to a [bug in Kuma](https://bugzilla.mozilla.org/show_bug.cgi?id=776048), some localized tags (such as `Référence`) may show up on some English pages. These tags are likely to reappear even if you delete them; don't bother trying to fix them until the Kuma bug is fixed.
- Incorrect tags
  - : If you're looking at an article about HTML and it's tagged "JavaScript", that's probably wrong! Likewise, if an article discusses Mozilla internals but has a "Web" tag, that's probably wrong too. Remove these tags and add the right tags if they aren't already there. Please also correct misspelled tags (e.g., "Javascript" will still match, since tags are case-insensitive, but let's not be sloppy!).
- Missing tags
  - : If an article has some but not all of the tags it needs, feel free to add more. For example, if a page in JavaScript reference is (correctly) tagged "JavaScript" but nothing else, you're invited to tag the page "Reference" as well!
- Tag spam
  - : This insidious beast is the most revolting tag problem of all: some Web vermin has deposited its droppings in the page tags (like "Free warez!" or "Hey I was browsing your site and wanted to ask you if you could help me solve this problem I'm having with Flash crashing all the time"). We've got to delete these right away!

If you see one (or more) of these problems, please [log into MDN](/zh-TW/docs/Project:MDN/Contributing/Getting_started#Logging_into_MDN) and click EDIT at the top right of the MDN window. Once the editor loads up, scroll down to the bottom of the page, where you'll see the tag box. For more details on the tagging interface, see "[The tags box](/zh-TW/docs/Project:MDN/Contributing/Editor_guide#The_tags_box)" in the [MDN editor guide](/zh-TW/docs/Project:MDN/Contributing/Editor_guide).
