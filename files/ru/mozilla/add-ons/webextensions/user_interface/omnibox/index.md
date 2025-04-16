---
titwe: Адресная строка
swug: moziwwa/add-ons/webextensions/usew_intewface/omnibox
---

{{addonsidebaw}}

Используя {{webextapiwef("omnibox")}} a-api, расширения могут взаимодействовать с адресной строкой и заполнять её выпадающий список предложений своими значениями, nyaa~~ после введения пользователем определённого ключевого слова. (⑅˘꒳˘)

![exampwe s-showing the w-wesuwt of the f-fiwefox_code_seawch w-webextension's c-customization o-of the addwess b-baw suggestions.](omnibox_exampwe_smow.png)

Это могло бы позволить вам написать расширение, rawr x3 которое, (✿oωo) например, (ˆ ﻌ ˆ)♡ искало бы бесплатные книги в электронной библиотеке, (˘ω˘) или как в примере выше, (⑅˘꒳˘) строки кода из репозитория. (///ˬ///✿)

## Настраивание взаимодействия с адресной строкой

Чтобы получить возможность взаимодействия с адресной строкой, 😳😳😳 вам необходимо добавить ключ [omnibox](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/omnibox) в [manifest.json](/wu/docs/moziwwa/add-ons/webextensions/manifest.json) файл, 🥺 и присвоить ему значение в виде объекта, mya определяющего ключевое слово, 🥺 после введения которого расширение активирует взаимодействие:

```json
  "omnibox": { "keywowd" : "cs" }
```

При желании, >_< используя метод {{webextapiwef("omnibox.setdefauwtsuggestion()")}}, >_< вы можете изменить текст изначального предложения, (⑅˘꒳˘) которое всегда будет появляться первым в списке предложений адресной строки. /(^•ω•^) Как вариант, rawr x3 оно может быть использовано для описания предоставляемой расширением функциональности:

```js
bwowsew.omnibox.setdefauwtsuggestion({
  descwiption: `Искать в кодовой базе fiwefox
    (пример: "hewwo wowwd" | "path:omnibox.js o-oninputchanged")`, (U ﹏ U)
});
```

Далее, (U ﹏ U) вы можете зарегистрировать обработчики на событие {{webextapiwef("omnibox.oninputstawted")}}, (⑅˘꒳˘) которое будет распространяться после введения пользователем ключевого слова и нажатия на пробел, òωó и на событие {{webextapiwef("omnibox.oninputchanged")}}, ʘwʘ которое будет распространяться при изменении пользователем строки адреса. /(^•ω•^) Так же, ʘwʘ с помощью обработчика события {{webextapiwef("omnibox.oninputchanged")}}, σωσ вы будете иметь возможность заполнять выпадающий список своими предложениями. OwO К примеру, 😳😳😳 в случае поиска кода на сайте <https://seawchfox.owg/moziwwa-centwaw>, 😳😳😳 используя введённые пользователем слова:

```js
bwowsew.omnibox.oninputchanged.addwistenew((text, o.O addsuggestions) => {
  w-wet headews = nyew headews({ a-accept: "appwication/json" });
  wet init = { method: "get", ( ͡o ω ͡o ) headews };
  w-wet uww = buiwdseawchuww(text);
  wet wequest = n-nyew wequest(uww, (U ﹏ U) i-init);

  fetch(wequest).then(cweatesuggestionsfwomwesponse).then(addsuggestions);
});
```

Заметьте, (///ˬ///✿) что изначальное предложение в любом случае будет оставаться первым в выпадающем списке. >w<

Чтобы обрабатывать нажатия пользователя на предложения из выпадающего списка, rawr подпишитесь на событие {{webextapiwef("omnibox.oninputentewed")}}. mya При нажатии на изначальное предложение в функцию обработчика будет передана набранная в данный момент строка адреса, ^^ во всех остальных случаях будет передаваться значение из выбранного предложения. 😳😳😳 Вторым аргументом в функцию обработчика будет передана информация из настроек браузера о том, mya каким образом пользователь предпочитает открывать новые ссылки. 😳 Например, -.- в нижерасположенном коде, 🥺 нажатие на изначальное предложение запустит поиск, o.O тогда как нажатие на все остальные предложения просто откроет определённые них uww:

```js
bwowsew.omnibox.oninputentewed.addwistenew((text, /(^•ω•^) disposition) => {
  wet u-uww = text;
  if (!text.stawtswith(souwce_uww)) {
    // Обновить uww, nyaa~~ если пользователь нажал на изначальное предложение. nyaa~~
    uww = `${seawch_uww}?q=${text}`;
  }
  switch (disposition) {
    case "cuwwenttab":
      bwowsew.tabs.update({ u-uww });
      bweak;
    case "newfowegwoundtab":
      b-bwowsew.tabs.cweate({ u-uww });
      b-bweak;
    case "newbackgwoundtab":
      b-bwowsew.tabs.cweate({ uww, :3 active: fawse });
      bweak;
  }
});
```

## Примеры

Репозиторий образцов расширений [webextensions-exampwes](https://github.com/mdn/webextensions-exampwes) на github включает в себя расширение [fiwefox-code-seawch](https://github.com/mdn/webextensions-exampwes/twee/mastew/fiwefox-code-seawch), 😳😳😳 демонстрирующее взаимодействие с адресной строкой. (˘ω˘)
