---
title: Дополнения
slug: Mozilla/Add-ons
tags:
  - NeedsTranslation
  - TopicStub
  - Дополнения
  - Расширения
translation_of: Mozilla/Add-ons
---
Дополнения добавляют новые функциональные возможности в [Gecko](/ru/docs/Mozilla/Gecko)-приложения, такие, как Firefox, SeaMonkey и Thunderbird. Есть два основных типа дополнений: [расширения](#Extensions), которые добавляют новые функции в приложение, и [темы](#Themes), изменяющие пользовательский интерфейс приложения.

> Для расширений и тем в Mozilla работает хранилище на [addons.mozilla.org](https://addons.mozilla.org/), также известное как AMO. Когда вы [помещаете дополнения на AMO](/en-US/Add-ons/Submitting_an_add-on_to_AMO), они рассматриваются, и после этого становятся доступны для пользователей. Вы не обязаны загружать свои дополнения в AMO, но если вы это сделаете, пользователи могут быть уверены в том, что они были предварительно проверены и будут знать, что ваше дополнение действительно полезно.

Дополнение может существенно повлиять на поведение приложения, на которое оно устанавливается. Мы разработали [список советов](/ru/docs/Mozilla/Add-ons/Add-on_guidelines), которые помогут вам удостовериться, что ваше дополнение будет приятным в использовании. Эти правила применяются для всех видов надстроек, независимо от того, размещены они на [addons.mozilla.org](https://addons.mozilla.org/) или нет.

---

## Расширения

Расширения добавляют новые функции к приложениям Mozilla, например таким как Firefox и Thunderbird. С их помощью можно изменить стандартное поведение браузера, например реализовать другой способ организации и управления вкладками. Можно даже изменять содержимое отображаемого веб приложения, чтобы улучшить удобство использования или например повысить безопасность определённых сайтов.

Существует 3 различных способа сборки расширений: restartless-расширения на основе Add-on SDK, restartless-расширения с реализацией этого механизма вручную (manually bootstrapped restartless extensions), и расширения с использованием технологии Overlay.

- [Restartless-расширения на основе Add-on SDK](https://developer.mozilla.org/en-US/Add-ons/SDK)
  Разработка restartless расширений с помощью высокоуровневого JavaScript API.
- [Restartless-расширения с реализацией этого механизма вручную](/en-US/Add-ons/Bootstrapped_extensions)
  Разработка расширений с самостоятельной реализацией механизма restartless.
- [Расширения с использованием технологии Overlay Extensions](/en-US/Add-ons/Overlay_Extensions)
  Устаревшей способ разработки расширений, при котором требуется перезапуск браузера. Основан на механизме наложения XUL.

> **Примечание:** **Технология WebExtensions**
>
> В данный момент мы разрабатываем систему под названием WebExtensions, которая будет новым способом разработки расширений для браузера Firefox, эта система будет гораздо более совместима с браузерами Chrome и Opera.
>
> В будущем она станет наиболее предпочтительной при разработке новых проектов для браузера Firefox.
>
> В данный момент она является экспериментальной, но несмотря на это вы можете [ознакомиться с документацией](https://developer.mozilla.org/en-US/Add-ons/WebExtensions), если хотите её опробовать.

Где это возможно, рекомендуется выбирать Add-On SDK, который использует механизм расширения без необходимости перезапуска браузера (restartless extensions), а также упрощает разработку и убирает за собой. Если вам недостаточно возможностей комплекта средств разработки Add-on SDK для реализации ваших идей, механизм restartless вы можете осуществить самостоятельно. Технология Overlay extensions в целом устарела и не рекомендуется при разработке новых расширений.

Для получения дополнительной информации о том, какой способ использовать, прочтите это [сравнение](/en-US/Add-ons/Comparing_Extension_Toolchains).

### Рекомендуемые практики

Вне зависимости от того, каким способом вы разрабатываете расширение, имеются общие рекомендации, следуя которым вы гарантируете пользователю максимально приятную работу с вашим расширением.

- [Производительность](/en-US/Add-ons/Performance_best_practices_in_extensions)
  - : Убедитесь в том, что ваше расширение обладает хорошей производительностью. Оно должно быть достаточно быстрым, иметь отзывчивый интерфейс и потреблять минимальный объем памяти.
- [Безопасность](/en-US/Add-ons/Security_best_practices_in_extensions)
  - : Убедитесь в том, что ваше приложение не подвергает пользователя опасности на вредоносных веб сайтах.
- [Этикет](/en-US/Add-ons/Extension_etiquette)
  - : Убедитесь в том, что ваше расширение не конфликтует с другими расширениями.

### Специфика разработки для различных приложений

Большая часть документации предполагает, что вы разрабатываете для десктопной версии Firefox. Если вы разрабатываете для других основанных на движке Gecko приложений, то существуют некоторые отличия, о которых вам следует знать.

- [Thunderbird](/en-US/Add-ons/Thunderbird)
  - : Разработка расширений для почтового клиента Thunderbird.
- [Firefox для Андроид](/en-US/Add-ons/Firefox_for_Android)
  - : Разработка расширений для Firefox под Андроид.
- [SeaMonkey](/en-US/Add-ons/SeaMonkey_2)
  - : Разработка расширений для [SeaMonkey](http://www.seamonkey-project.org/).

---

## Темы

Темы это дополнения, которые изменяют внешний вид пользовательского интерфейса. Существуют два вида тем: легковесные темы и полные темы.

[Легковесные темы](https://addons.mozilla.org/en-US/developers/docs/themes) значительно легче создать, чем полные, но их возможности ограничены.

С помощью [полных тем](/ru/docs/Themes) вы можете гораздо глубже менять UI приложения. Документация к полным темам устарела, но приведена здесь в качестве возможной основы для обновлённой документации.

---

## Другие типы дополнений

[Поисковые плагины](/ru/docs/Creating_OpenSearch_plugins_for_Firefox) являются простыми и очень специфическими типами дополнений: они добавляют новые поисковые системы для поиска в строке браузера.

**[Плагины](/ru/docs/Plugins) **(не путать с расширением и дополнением)\*\* \*\*помогают приложению понять содержание, которое не имеет встроенной поддержки. NPAPI-плагины являются устаревшей технологией и новые сайты не будут её использовать. Как правило, такие плагины не доступны для использования на большинстве современных мобильных систем, и веб-сайты должны избегать их использования

## Смотрите также

1.  [Restartless extensions](https://developer.mozilla.org/en-US/Add-ons/Bootstrapped_extensions "Restartless extensions")
2.  [Legacy extensions](https://developer.mozilla.org/en-US/Add-ons/Overlay_Extensions "Legacy extensions")
3.  [Дополнения на основе SDK](https://developer.mozilla.org/en-US/Add-ons/SDK)
4.  [Techniques](https://developer.mozilla.org/ru/Add-ons$edit#)

    1.  [Promises](https://developer.mozilla.org/en-US/Add-ons/Techniques/Promises)

5.  [Рекомендуемая практика](https://developer.mozilla.org/ru/Add-ons$edit#)

    1.  [Производительность](https://developer.mozilla.org/en-US/Add-ons/Performance_best_practices_in_extensions "Performance")
    2.  [Безопасность](https://developer.mozilla.org/en-US/Add-ons/Security_best_practices_in_extensions "Security")
    3.  [Этикет](https://developer.mozilla.org/en-US/Add-ons/Extension_etiquette "Etiquette")

6.  [Темы](https://developer.mozilla.org/ru/Add-ons$edit#)

    1.  [Легковесные темы](https://developer.mozilla.org/Add-ons/Themes/Background "Lightweight themes")
    2.  [Легковесные темы FAQ](https://developer.mozilla.org/Add-ons/Themes/Background/FAQ "Lightweight themes FAQ")
    3.  [Полные темы](/ru/docs/Themes "Complete themes")

7.  [Legacy Plugins](https://developer.mozilla.org/ru/Add-ons$edit#)

    1.  [Plug-in Basics](/ru/docs/Plugins/Guide/Plug-in_Basics)
    2.  [Plug-in Development Overview](/ru/docs/Plugins/Guide/Plug-in_Development_Overview)
    3.  [Initialization and Destruction](/ru/docs/Plugins/Guide/Initialization_and_Destruction)
    4.  [Drawing and Event Handling](/ru/docs/Plugins/Guide/Drawing_and_Event_Handling)
    5.  [Streams](/ru/docs/Plugins/Guide/Streams)
    6.  [URLs](/ru/docs/Plugins/Guide/URLs)
    7.  [Memory](/ru/docs/Plugins/Guide/Memory)
    8.  [Version, UI, and Status Information](/ru/docs/Plugins/Guide/Version%2C_UI%2C_and_Status_Information)
    9.  [Plug-in side Plug-in API](/ru/docs/Plugins/Guide/Plug-in_Side_Plug-in_API)

        1.  [NPP_Destroy](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPP_Destroy)
        2.  [NPP_DestroyStream](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPP_DestroyStream)
        3.  [NPP_GetValue](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPP_GetValue)
        4.  [NP_GetValue](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NP_GetValue)
        5.  [NPP_HandleEvent](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPP_HandleEvent)
        6.  [NP_Initialize](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NP_Initialize)
        7.  [NPP_New](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPP_New)
        8.  [NPP_NewStream](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPP_NewStream)
        9.  [NPP_Print](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPP_Print)
        10. [NPP_SetValue](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPP_SetValue)
        11. [NPP_SetWindow](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPP_SetWindow)
        12. [NP_Shutdown](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NP_Shutdown)
        13. [NPP_StreamAsFile](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPP_StreamAsFile)
        14. [NPP_URLNotify](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPP_URLNotify)
        15. [NPP_Write](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPP_Write)
        16. [NPP_WriteReady](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPP_WriteReady)

    10. [Browser Side Plug-in API](/ru/docs/Plugins/Guide/Browser_Side_Plug-in_API)

        1.  [NPN_DestroyStream](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_DestroyStream "Closes and deletes a stream.")
        2.  [NPN_ForceRedraw](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_ForceRedraw "Asks the plugin host to immediately (synchronously) repaint invalid areas.")
        3.  [NPN_GetAuthenticationInfo](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_GetAuthenticationInfo "The function is called by plugins to get HTTP authentication information from the browser.")
        4.  [NPN_GetURL](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_GetURL "Asks the browser to create a stream for the specified URL.")
        5.  [NPN_GetURLNotify](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_GetURLNotify "Requests creation of a new stream with the contents of the specified URL; gets notification of the result.")
        6.  [NPN_GetValue](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_GetValue "Allows the plug-in to query the browser for information.")
        7.  [NPN_GetValueForURL](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_GetValueForURL "Provides information to a plugin which is associated with a given URL, for example the cookies or preferred proxy.")
        8.  [NPN_InvalidateRect](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_InvalidateRect "Invalidates the specified portion of the plugin's drawing area, adding it to the region that needs to be redrawn when the plugin next repaints its contents.")
        9.  [NPN_InvalidateRegion](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_InvalidateRegion "Invalidates the specified drawing region prior to repainting or refreshing a windowless plug-in.")
        10. [NPN_MemAlloc](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_MemAlloc "Allocates memory from the browser's memory space.")
        11. [NPN_MemFlush](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_MemFlush "Requests that the browser free a specified amount of memory.")
        12. [NPN_MemFree](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_MemFree "Deallocates a block of allocated memory.")
        13. [NPN_NewStream](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_NewStream "Requests the creation of a new data stream produced by the plug-in and consumed by the browser.")
        14. [NPN_PluginThreadAsyncCall](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_PluginThreadAsyncCall "Thread safe way to request that the browser calls a plug-in function on the browser or plugin thread (the thread on which the plug-in was initiated).")
        15. [NPN_PostURL](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_PostURL "Posts data to a URL.")
        16. [NPN_PostURLNotify](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference//NPN_PostURLNotify "Posts data to a URL, and receives notification of the result.")
        17. [NPN_ReloadPlugins](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_ReloadPlugins "Reloads all of the installed plugins.")
        18. [NPN_RequestRead](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_RequestRead "Requests a range of bytes from a seekable stream. This initiates a read operation; the actual data is received through subsequent calls to NPP_WriteReady() and NPP_Write().")
        19. [NPN_SetValue](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_SetValue "Implemented by browsers. This call is used to inform the browser of variable information controlled by the plugin.")
        20. [NPN_SetValueForURL](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_SetValueForURL "Allows a plugin to change the stored information associated with a URL, in particular its cookies. (While the API theoretically allows the preferred proxy for a given URL to be changed, doing so does not have much meaning given how proxies are configured, and is not supported.)")
        21. [NPN_Status](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_Status "Lets a plug-in display a message on the browser's status line.")
        22. [NPN_UserAgent](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_UserAgent "Returns the browser's user agent field. This can be used to handle variations in different browsers (or versions thereof) when implementing your plug-in.")
        23. [NPN_Version](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/docs/NPN_Version "Lets plugins obtain version information, both of the plug-in API and of the browser itself.")
        24. [NPN_Write](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_Write "Pushes data into a stream produced by the plug-in and consumed by the browser.")

    11. [Scripting plugins](/ru/docs/Plugins/Guide/Scripting_plugins)

        1.  [NPString](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPString)
        2.  [NPVariant](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPVariant)
        3.  [NPN_ReleaseVariantValue](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_ReleaseVariantValue)
        4.  [NPN_GetStringIdentifier](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_GetStringIdentifier)
        5.  [NPN_GetStringIdentifiers](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_GetStringIdentifiers)
        6.  [NPN_GetIntIdentifier](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_GetIntIdentifier)
        7.  [NPN_IdentifierIsString](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_IdentifierIsString)
        8.  [NPN_UTF8FromIdentifier](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_UTF8FromIdentifier)
        9.  [NPN_IntFromIdentifier](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_IntFromIdentifier)
        10. [NPObject](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPObject)
        11. [NPN_CreateObject](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_CreateObject)
        12. [NPN_RetainObject](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_RetainObject)
        13. [NPN_ReleaseObject](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_ReleaseObject)
        14. [NPN_Invoke](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_Invoke)
        15. [NPN_InvokeDefault](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_InvokeDefault)
        16. [NPN_Evaluate](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_Evaluate)
        17. [NPN_GetProperty](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_GetProperty)
        18. [NPN_SetProperty](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_SetProperty)
        19. [NPN_RemoveProperty](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_RemoveProperty)
        20. [NPN_HasProperty](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_HasProperty)
        21. [NPN_HasMethod](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_HasMethod)
        22. [NPN_SetException](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPN_SetException)
        23. [NPClass](https://developer.mozilla.org/en-US/Add-ons/Plugins/Reference/NPClass)

    12. [Structures](/ru/docs/Plugins/Guide/Structures)
    13. [Constants](/ru/docs/Plugins/Guide/Constants)
    14. [External Resources](https://developer.mozilla.org/en-US/Add-ons/Plugins/External_resources_for_plugin_creation)

8.  [Publishing add-ons](https://developer.mozilla.org/ru/Add-ons$edit#)

    1.  [Signing and distributing your add-on](https://developer.mozilla.org/en-US/Add-ons/Distribution)
    2.  [Submit a new add-on](https://addons.mozilla.org/developers/addon/submit/)
    3.  [Policies](https://developer.mozilla.org/en-US/Add-ons/AMO/Policy)

        1.  [Developer Agreement](https://developer.mozilla.org/en-US/Add-ons/AMO/Policy/Agreement)
        2.  [Review Process](https://developer.mozilla.org/en-US/Add-ons/AMO/Policy/Reviews)
        3.  [Add-on guidelines](https://developer.mozilla.org/en-US/Add-ons/Add-on_guidelines)
        4.  [Featured Add-ons](https://developer.mozilla.org/en-US/Add-ons/AMO/Policy/Featured)
        5.  [Contacting Us](https://developer.mozilla.org/en-US/Add-ons/AMO/Policy/Contact)

9.  [Community and Support](https://developer.mozilla.org/ru/Add-ons$edit#)

    1.  [Add-ons Blog](https://blog.mozilla.org/addons)
    2.  [Add-on Forums](https://forums.mozilla.org/addons)
    3.  [Stack Overflow](http://stackoverflow.com/questions/tagged/firefox-addon)
    4.  [Development Newsgroup](https://groups.google.com/forum/#%21forum/mozilla.dev.extensions)
    5.  [IRC Channel](irc://irc.mozilla.org/extdev)
