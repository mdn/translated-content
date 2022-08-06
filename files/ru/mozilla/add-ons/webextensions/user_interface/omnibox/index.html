---
title: Адресная строка
slug: Mozilla/Add-ons/WebExtensions/user_interface/Omnibox
tags:
  - Web-расширение
  - Расширение
translation_of: Mozilla/Add-ons/WebExtensions/user_interface/Omnibox
---
<div>{{AddonSidebar()}}</div>

<p>Используя {{WebExtAPIRef("omnibox")}} API, расширения могут взаимодействовать с адресной строкой и заполнять её выпадающий список предложений своими значениями, после введения пользователем определённого ключевого слова.</p>

<p><img alt="Example showing the result of the firefox_code_search WebExtension's customization of the address bar suggestions." src="https://mdn.mozillademos.org/files/15749/omnibox_example_small.png" style="display: block; height: 232px; margin-left: auto; margin-right: auto; width: 350px;"></p>

<p>Это могло бы позволить вам написать расширение, которое, например, искало бы бесплатные книги в электронной библиотеке, или как в примере выше, строки кода из репозитория.</p>

<h2 id="Настраивание_взаимодействия_с_адресной_строкой">Настраивание взаимодействия с адресной строкой</h2>

<p>Чтобы получить возможность взаимодействия с адресной строкой, вам необходимо добавить ключ <a href="https://developer.mozilla.org/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json/omnibox">omnibox</a> в <a href="https://developer.mozilla.org/ru/docs/Mozilla/Add-ons/WebExtensions/manifest.json">manifest.json</a> файл, и присвоить ему значение в виде объекта, определяющего ключевое слово, после введения которого расширение активирует взаимодействие:</p>

<pre class="brush: json line-numbers  language-json">  "omnibox": { "keyword" : "cs" }</pre>

<p>При желании, используя метод {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}}, вы можете изменить текст изначального предложения, которое всегда будет появляться первым в списке предложений адресной строки. Как вариант, оно может быть использовано для описания предоставляемой расширением функциональности:</p>

<pre class="brush: js line-numbers  language-js">browser.omnibox.setDefaultSuggestion({
  description: `Искать в кодовой базе firefox
    (пример: "hello world" | "path:omnibox.js onInputChanged")`
});</pre>

<p>Далее, вы можете зарегистрировать обработчики на событие {{WebExtAPIRef("omnibox.onInputStarted")}}, которое будет распространяться после введения пользователем ключевого слова и нажатия на пробел, и на событие {{WebExtAPIRef("omnibox.onInputChanged")}}, которое будет распространяться при изменении пользователем строки адреса. Так же, с помощью обработчика события {{WebExtAPIRef("omnibox.onInputChanged")}}, вы будете иметь возможность заполнять выпадающий список своими предложениями. К примеру, в случае поиска кода на сайте https://searchfox.org/mozilla-central, используя введённые пользователем слова:</p>

<pre class="brush: js">browser.omnibox.onInputChanged.addListener((text, addSuggestions) =&gt; {
  let headers = new Headers({"Accept": "application/json"});
  let init = {method: 'GET', headers};
  let url = buildSearchURL(text);
  let request = new Request(url, init);

  fetch(request)
    .then(createSuggestionsFromResponse)
    .then(addSuggestions);
});</pre>

<p>Заметьте, что изначальное предложение в любом случае будет оставаться первым в выпадающем списке.</p>

<p>Чтобы обрабатывать нажатия пользователя на предложения из выпадающего списка, подпишитесь на событие {{WebExtAPIRef("omnibox.onInputEntered")}}. При нажатии на изначальное предложение в функцию обработчика будет передана набранная в данный момент строка адреса, во всех остальных случаях будет передаваться значение из выбранного предложения. Вторым аргументом в функцию обработчика будет передана информация из настроек браузера о том, каким образом пользователь предпочитает открывать новые ссылки. Например, в нижерасположенном коде, нажатие на изначальное предложение запустит поиск, тогда как нажатие на все остальные предложения просто откроет определённые них URL:</p>

<pre class="brush: js">browser.omnibox.onInputEntered.addListener((text, disposition) =&gt; {
  let url = text;
  if (!text.startsWith(SOURCE_URL)) {
    // Обновить url, если пользователь нажал на изначальное предложение.
    url = `${SEARCH_URL}?q=${text}`;
  }
  switch (disposition) {
    case "currentTab":
      browser.tabs.update({url});
      break;
    case "newForegroundTab":
      browser.tabs.create({url});
      break;
    case "newBackgroundTab":
      browser.tabs.create({url, active: false});
      break;
  }
});</pre>

<h2 id="Примеры">Примеры</h2>

<p>Репозиторий образцов расширений <a href="https://github.com/mdn/webextensions-examples">webextensions-examples</a> на GitHub включает в себя расширение <a class="external external-icon" href="https://github.com/mdn/webextensions-examples/tree/master/firefox-code-search">firefox-code-search</a>, демонстрирующее взаимодействие с адресной строкой.</p>
