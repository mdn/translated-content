---
title: WAI ARIA Live Regions/API サポート
slug: Web/Guide/AJAX/WAI_ARIA_Live_Regions_API_Support
---

> **警告:** これらの注釈は、スクリーンリーダーの開発者向けです。 開発者は、[ARIA ライブリージョン開発者のドキュメント](/ja/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)を使用する必要があります。

Firefox 3 には、Mozilla エンジンがドキュメントのライブ変更を公開する方法に対する重要な改善が含まれています。

これらの機能は、ARIA ライブリージョンマークアップでマークアップされたページと、追加のマークアップを追加しなかったページの両方で、スクリーンリーダー開発者がライブリージョンサポートの品質とパフォーマンスを向上させるのに役立ちます。

ARIA のライブリージョンのマークアップについては、[ARIA の仕様](http://www.w3.org/WAI/PF/aria/#liveregions)またはライブリージョンのレポートをお読みください。

いつものように、私たちは[コミュニティフォーラム](http://www.mozilla.org/access/#community)の変更に関する質問や提案には門を開いています。

## Web ページの突然変異のために発生したイベント

| 文書では何が変わったのですか？                                                                            | ATK/AT-SPI event                                                                                                                   | IAccessible2 event                                                                                   |
| --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Object about to be hidden or removed                                                                      | children_changed::remove (fired on the parent, with event data pointing to the child index of the accessible object to be removed) | EVENT_OBJECT_HIDE\* (fired on the actual accessible object about to go away)                         |
| Object shown or inserted                                                                                  | children_changed::add (fired on the parent, with event data pointing to the child index of the inserted accessible object)         | EVENT_OBJECT_SHOW\* (fired on the actual new accessible object)                                      |
| Object replaced with different object (this happens especially if an object's interfaces or role changes) | children_changed::remove followed immediately by children_change::add                                                              | EVENT_OBJECT_HIDE followed immediately by EVENT_OBJECT_SHOW                                          |
| Text removed                                                                                              | text_changed::delete                                                                                                               | IA2_EVENT_TEXT_REMOVED (use IAccessibleText::get_oldText to retrieve the offsets and removed text)   |
| Text inserted                                                                                             | text_changed::insert                                                                                                               | IA2_EVENT_TEXT_INSERTED (use IAccessibleText::get_newText to retrieve the offsets and inserted text) |
| Text replaced                                                                                             | text_changed::delete followed immediately by text_changed::insert                                                                  | IA2_EVENT_TEXT_REMOVED followed immediately by IA2_EVENT_TEXT_INSERTED                               |

\* We do not use MSAA's CREATE/DESTROY at the request of screen reader vendors, who avoid those events because they cause crashes on some important system -- SHOW/HIDE are the equivalent of those events.

## イベントからオーサリング提供の ARIA ライブリージョンセマンティクスを取得する

ある祖先要素 (最も近い祖先の勝利) に定義されている場合、ページ内の任意の変更イベントに対して、作成者はイベントオブジェクトから以下のオブジェクト属性を取得できます。

| Object attribute name | Possible values                                                                                                                                           | Default value if not specified       | Meaning                                                                                                                                                                                                                                                                                                                        | ARIA markup if required                |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------- |
| container-live        | "off" \| "polite" \| "assertive"                                                                                                                          | "off"                                | Interruption policy                                                                                                                                                                                                                                                                                                            | aria-live on ancestor element          |
| container-relevant    | "{{ mediawiki.external('additions') }} {{ mediawiki.external('removals') }} {{ mediawiki.external('text') }}" \| "all" | "additions text"                     | What types of mutations are possibly relevant? See {{ mediawiki.external('#Events_fired_for_web_page_mutations the mutation events list') }} to match the type of event with this attribute's value, to determine whether the author believed the event should be presented to the user or not. | aria-relevant on ancestor element      |
| container-busy        | "true" \| "false" \| "error"                                                                                                                              | "false"                              | The current changes are not yet complete. A state change event for the A11y API's BUSY state will be fired on the container object currently marked as BUSY, once it is no longer BUSY. This is especially important in atomic regions. The entire atomic region should be presented once when it is finally no longer BUSY.   | aria-busy on ancestor element          |
| container-atomic      | "true" \| "false"                                                                                                                                         | "false"                              | Is this change inside a region that should always be presented at once. If yes, member-of relation will point to the root of the region (see next section)                                                                                                                                                                     | aria-atomic on ancestor element        |
| member-of             | If container-atomic=true, points to an ancestor accessible object (thus it is actually an accessible relation, not object attribute)                      | Not in atomic region if not provided | Points to the root of the atomic container that this object is in. This will always be an ancestor of the current object.                                                                                                                                                                                                      | aria-atomic on ancestor element        |
| event-from-input      | "true" \| "false" (described more below)                                                                                                                  | Browser could not calculate this     | Was the root cause of this event explicit user input?                                                                                                                                                                                                                                                                          | Does not require author's cooperation. |

The "container-" prefix is so named because the attribute describes what the final computed property of similar name is for that node. This means that the AT does not need to traverse up the parent chain to get this information. At this time, for properties where the container-{{ mediawiki.external('name') }} attribute has not been set, the AT must have code to fall back on the default value as defined in the W3C spec.

## イベントがユーザーの入力であったかどうかを判断する

All events will now provide information about whether the event was caused by user input, or was something that the web page caused. This information is retrieved differently on each platform, because some platforms use asynchronous events.

In IAccessible2, this is retrieved from the object attribute "event-from-input", which will be set to "true" or "false". If it is not present, then something went wrong and Mozilla was not able to provide this information. This information is available only for EVENT_SHOW, EVENT_HIDE, IA2_EVENT_TEXT_INSERTED and IA2_EVENT_TEXT_REMOVED.

For ATK/AT-SPI, this information is retrieved by checking the event name. If the event name has ":system" appended to it, then it is /not/ from user input. The ":system" string is calculated for children-changed and text-changed events.

Why is this useful? The majority of AJAX pages do not provide live region markup, but still need to be as usable as possible. It is difficult for a screen reader to decide when to interrupt a user with changes on a page. If the screen reader automatically reads too much, then the web page will be too annoying to use. If the screen reader doesn't read anything, then the user may miss important information.

It is believed this information will be useful for heuristics. Often, changes in a page that are directly caused by a user's keystrokes should be read. They are synchronous with what the user is doing and can thus likely be read without disorienting the user. Once the user presses the next key the speech will move on to echoing that key anyway. The screen reader may wish to take other factors into account, such as the type of change, the size of the change, where the change occured, etc. This is a potential area for innovation in screen readers.

| Most recent occurance | User input? |
| --------------------- | ----------- |
| Key presses           | Yes         |
| Mouse clicks          | Yes         |
| Mouse hovers          | No          |
| Page load events      | No          |

Everything else, including focus changes, timer callbacks, XMLHttpRequest callbacks, etc. are neutral. They are only counted as user input if the original reason they happened was because of user input.

## スクリーンリーダーが何を提示すべきか？

Please read the live region section of the [WAI-ARIA Screen Reader Implementor's Guide](/ja/ARIA/ARIA_Screen_Reader_Implementors_Guide#Live_Regions).
