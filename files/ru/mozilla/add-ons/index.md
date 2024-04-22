---
title: Дополнения
slug: Mozilla/Add-ons
---

Дополнения добавляют новые функциональные возможности в [Gecko](/ru/docs/Mozilla/Gecko)-приложения, такие, как Firefox, SeaMonkey и Thunderbird. Есть два основных типа дополнений: [расширения](#Extensions), которые добавляют новые функции в приложение, и [темы](#Themes), изменяющие пользовательский интерфейс приложения.

> Для расширений и тем в Mozilla работает хранилище на [addons.mozilla.org](https://addons.mozilla.org/), также известное как AMO. Когда вы [помещаете дополнения на AMO](/en-US/Add-ons/Submitting_an_add-on_to_AMO), они рассматриваются, и после этого становятся доступны для пользователей. Вы не обязаны загружать свои дополнения в AMO, но если вы это сделаете, пользователи могут быть уверены в том, что они были предварительно проверены и будут знать, что ваше дополнение действительно полезно.

Дополнение может существенно повлиять на поведение приложения, на которое оно устанавливается. Мы разработали [список советов](/ru/docs/Mozilla/Add-ons/Add-on_guidelines), которые помогут вам удостовериться, что ваше дополнение будет приятным в использовании. Эти правила применяются для всех видов надстроек, независимо от того, размещены они на [addons.mozilla.org](https://addons.mozilla.org/) или нет.

---

## Расширения

Расширения добавляют новые функции к приложениям Mozilla, например таким как Firefox и Thunderbird. С их помощью можно изменить стандартное поведение браузера, например реализовать другой способ организации и управления вкладками. Можно даже изменять содержимое отображаемого веб приложения, чтобы улучшить удобство использования или например повысить безопасность определённых сайтов.

Существует 3 различных способа сборки расширений: restartless-расширения на основе Add-on SDK, restartless-расширения с реализацией этого механизма вручную (manually bootstrapped restartless extensions), и расширения с использованием технологии Overlay.

- [Restartless-расширения на основе Add-on SDK](/en-US/Add-ons/SDK)
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
> В данный момент она является экспериментальной, но несмотря на это вы можете [ознакомиться с документацией](/en-US/Add-ons/WebExtensions), если хотите её опробовать.

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

**[Плагины](/ru/docs/Plugins)** (не путать с расширением и дополнением) помогают приложению понять содержание, которое не имеет встроенной поддержки. NPAPI-плагины являются устаревшей технологией и новые сайты не будут её использовать. Как правило, такие плагины не доступны для использования на большинстве современных мобильных систем, и веб-сайты должны избегать их использования

## Смотрите также

1. [Restartless extensions](/en-US/Add-ons/Bootstrapped_extensions)
2. [Legacy extensions](/en-US/Add-ons/Overlay_Extensions)
3. [Дополнения на основе SDK](/en-US/Add-ons/SDK)
4. [Techniques](/ru/Add-ons/Techniques)

   1. [Promises](/en-US/Add-ons/Techniques/Promises)

5. [Рекомендуемая практика](/ru/Add-ons)

   1. [Производительность](/en-US/Add-ons/Performance_best_practices_in_extensions)
   2. [Безопасность](/en-US/Add-ons/Security_best_practices_in_extensions)
   3. [Этикет](/en-US/Add-ons/Extension_etiquette)

6. [Темы](/ru/Add-ons)

   1. [Легковесные темы](/Add-ons/Themes/Background)
   2. [Легковесные темы FAQ](/Add-ons/Themes/Background/FAQ)
   3. [Полные темы](/ru/docs/Themes)

7. [Legacy Plugins](/ru/Add-ons)

   1. [Plug-in Basics](/ru/docs/Plugins/Guide/Plug-in_Basics)
   2. [Plug-in Development Overview](/ru/docs/Plugins/Guide/Plug-in_Development_Overview)
   3. [Initialization and Destruction](/ru/docs/Plugins/Guide/Initialization_and_Destruction)
   4. [Drawing and Event Handling](/ru/docs/Plugins/Guide/Drawing_and_Event_Handling)
   5. [Streams](/ru/docs/Plugins/Guide/Streams)
   6. [URLs](/ru/docs/Plugins/Guide/URLs)
   7. [Memory](/ru/docs/Plugins/Guide/Memory)
   8. [Version, UI, and Status Information](/ru/docs/Plugins/Guide/Version,_UI,_and_Status_Information)
   9. [Plug-in side Plug-in API](/ru/docs/Plugins/Guide/Plug-in_Side_Plug-in_API)

      1. [NPP_Destroy](/en-US/Add-ons/Plugins/Reference/NPP_Destroy)
      2. [NPP_DestroyStream](/en-US/Add-ons/Plugins/Reference/NPP_DestroyStream)
      3. [NPP_GetValue](/en-US/Add-ons/Plugins/Reference/NPP_GetValue)
      4. [NP_GetValue](/en-US/Add-ons/Plugins/Reference/NP_GetValue)
      5. [NPP_HandleEvent](/en-US/Add-ons/Plugins/Reference/NPP_HandleEvent)
      6. [NP_Initialize](/en-US/Add-ons/Plugins/Reference/NP_Initialize)
      7. [NPP_New](/en-US/Add-ons/Plugins/Reference/NPP_New)
      8. [NPP_NewStream](/en-US/Add-ons/Plugins/Reference/NPP_NewStream)
      9. [NPP_Print](/en-US/Add-ons/Plugins/Reference/NPP_Print)
      10. [NPP_SetValue](/en-US/Add-ons/Plugins/Reference/NPP_SetValue)
      11. [NPP_SetWindow](/en-US/Add-ons/Plugins/Reference/NPP_SetWindow)
      12. [NP_Shutdown](/en-US/Add-ons/Plugins/Reference/NP_Shutdown)
      13. [NPP_StreamAsFile](/en-US/Add-ons/Plugins/Reference/NPP_StreamAsFile)
      14. [NPP_URLNotify](/en-US/Add-ons/Plugins/Reference/NPP_URLNotify)
      15. [NPP_Write](/en-US/Add-ons/Plugins/Reference/NPP_Write)
      16. [NPP_WriteReady](/en-US/Add-ons/Plugins/Reference/NPP_WriteReady)

   10. [Browser Side Plug-in API](/ru/docs/Plugins/Guide/Browser_Side_Plug-in_API)

       1. [NPN_DestroyStream](/en-US/Add-ons/Plugins/Reference/NPN_DestroyStream)
       2. [NPN_ForceRedraw](/en-US/Add-ons/Plugins/Reference/NPN_ForceRedraw)
       3. [NPN_GetAuthenticationInfo](/en-US/Add-ons/Plugins/Reference/NPN_GetAuthenticationInfo)
       4. [NPN_GetURL](/en-US/Add-ons/Plugins/Reference/NPN_GetURL)
       5. [NPN_GetURLNotify](/en-US/Add-ons/Plugins/Reference/NPN_GetURLNotify)
       6. [NPN_GetValue](/en-US/Add-ons/Plugins/Reference/NPN_GetValue)
       7. [NPN_GetValueForURL](/en-US/Add-ons/Plugins/Reference/NPN_GetValueForURL)
       8. [NPN_InvalidateRect](/en-US/Add-ons/Plugins/Reference/NPN_InvalidateRect)
       9. [NPN_InvalidateRegion](/en-US/Add-ons/Plugins/Reference/NPN_InvalidateRegion)
       10. [NPN_MemAlloc](/en-US/Add-ons/Plugins/Reference/NPN_MemAlloc)
       11. [NPN_MemFlush](/en-US/Add-ons/Plugins/Reference/NPN_MemFlush)
       12. [NPN_MemFree](/en-US/Add-ons/Plugins/Reference/NPN_MemFree)
       13. [NPN_NewStream](/en-US/Add-ons/Plugins/Reference/NPN_NewStream)
       14. [NPN_PluginThreadAsyncCall](/en-US/Add-ons/Plugins/Reference/NPN_PluginThreadAsyncCall)
       15. [NPN_PostURL](/en-US/Add-ons/Plugins/Reference/NPN_PostURL)
       16. [NPN_PostURLNotify](/en-US/Add-ons/Plugins/Reference//NPN_PostURLNotify)
       17. [NPN_ReloadPlugins](/en-US/Add-ons/Plugins/Reference/NPN_ReloadPlugins)
       18. [NPN_RequestRead](/en-US/Add-ons/Plugins/Reference/NPN_RequestRead)
       19. [NPN_SetValue](/en-US/Add-ons/Plugins/Reference/NPN_SetValue)
       20. [NPN_SetValueForURL](/en-US/Add-ons/Plugins/Reference/NPN_SetValueForURL)
       21. [NPN_Status](/en-US/Add-ons/Plugins/Reference/NPN_Status)
       22. [NPN_UserAgent](/en-US/Add-ons/Plugins/Reference/NPN_UserAgent)
       23. [NPN_Version](/en-US/Add-ons/Plugins/Reference/docs/NPN_Version)
       24. [NPN_Write](/en-US/Add-ons/Plugins/Reference/NPN_Write)

   11. [Scripting plugins](/ru/docs/Plugins/Guide/Scripting_plugins)

       1. [NPString](/en-US/Add-ons/Plugins/Reference/NPString)
       2. [NPVariant](/en-US/Add-ons/Plugins/Reference/NPVariant)
       3. [NPN_ReleaseVariantValue](/en-US/Add-ons/Plugins/Reference/NPN_ReleaseVariantValue)
       4. [NPN_GetStringIdentifier](/en-US/Add-ons/Plugins/Reference/NPN_GetStringIdentifier)
       5. [NPN_GetStringIdentifiers](/en-US/Add-ons/Plugins/Reference/NPN_GetStringIdentifiers)
       6. [NPN_GetIntIdentifier](/en-US/Add-ons/Plugins/Reference/NPN_GetIntIdentifier)
       7. [NPN_IdentifierIsString](/en-US/Add-ons/Plugins/Reference/NPN_IdentifierIsString)
       8. [NPN_UTF8FromIdentifier](/en-US/Add-ons/Plugins/Reference/NPN_UTF8FromIdentifier)
       9. [NPN_IntFromIdentifier](/en-US/Add-ons/Plugins/Reference/NPN_IntFromIdentifier)
       10. [NPObject](/en-US/Add-ons/Plugins/Reference/NPObject)
       11. [NPN_CreateObject](/en-US/Add-ons/Plugins/Reference/NPN_CreateObject)
       12. [NPN_RetainObject](/en-US/Add-ons/Plugins/Reference/NPN_RetainObject)
       13. [NPN_ReleaseObject](/en-US/Add-ons/Plugins/Reference/NPN_ReleaseObject)
       14. [NPN_Invoke](/en-US/Add-ons/Plugins/Reference/NPN_Invoke)
       15. [NPN_InvokeDefault](/en-US/Add-ons/Plugins/Reference/NPN_InvokeDefault)
       16. [NPN_Evaluate](/en-US/Add-ons/Plugins/Reference/NPN_Evaluate)
       17. [NPN_GetProperty](/en-US/Add-ons/Plugins/Reference/NPN_GetProperty)
       18. [NPN_SetProperty](/en-US/Add-ons/Plugins/Reference/NPN_SetProperty)
       19. [NPN_RemoveProperty](/en-US/Add-ons/Plugins/Reference/NPN_RemoveProperty)
       20. [NPN_HasProperty](/en-US/Add-ons/Plugins/Reference/NPN_HasProperty)
       21. [NPN_HasMethod](/en-US/Add-ons/Plugins/Reference/NPN_HasMethod)
       22. [NPN_SetException](/en-US/Add-ons/Plugins/Reference/NPN_SetException)
       23. [NPClass](/en-US/Add-ons/Plugins/Reference/NPClass)

   12. [Structures](/ru/docs/Plugins/Guide/Structures)
   13. [Constants](/ru/docs/Plugins/Guide/Constants)
   14. [External Resources](/en-US/Add-ons/Plugins/External_resources_for_plugin_creation)

8. [Publishing add-ons](/ru/Add-ons)

   1. [Signing and distributing your add-on](/en-US/Add-ons/Distribution)
   2. [Submit a new add-on](https://addons.mozilla.org/developers/addon/submit/)
   3. [Policies](/en-US/Add-ons/AMO/Policy)

      1. [Developer Agreement](/en-US/Add-ons/AMO/Policy/Agreement)
      2. [Review Process](/en-US/Add-ons/AMO/Policy/Reviews)
      3. [Add-on guidelines](/en-US/Add-ons/Add-on_guidelines)
      4. [Featured Add-ons](/en-US/Add-ons/AMO/Policy/Featured)
      5. [Contacting Us](/en-US/Add-ons/AMO/Policy/Contact)

9. [Community and Support](/ru/Add-ons)

   1. [Add-ons Blog](https://blog.mozilla.org/addons)
   2. [Add-on Forums](https://forums.mozilla.org/addons)
   3. [Stack Overflow](http://stackoverflow.com/questions/tagged/firefox-addon)
   4. [Development Newsgroup](https://groups.google.com/forum/#!forum/mozilla.dev.extensions)
   5. [IRC Channel](irc://irc.mozilla.org/extdev)
