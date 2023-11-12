---
title: Примеры расширений
slug: Mozilla/Add-ons/WebExtensions/Examples
---

{{AddonSidebar}}

В целях иллюстрации разработки расширений, мы поддерживаем репозиторий простых демонстрационных расширений по адресу <https://github.com/mdn/webextensions-examples>. Данная статья описывает, как использовать эти примеры, и перечисляет их вместе с API Веб-расширений (WebExtensions API), которые они демонстрируют.

Эти примеры работают в Firefox Nightly: большинство из них работает и в более ранних версиях Firefox, но, чтобы удостовериться, проверьте поле [strict_min_version](/en-US/Add-ons/WebExtensions/manifest.json/applications) в файле manifest.json.

> **Предупреждение:** Некоторые примеры работают только на специальных доменах или страницах. Подробности о всех ограничениях представлены в файле readme каждого примера. По умолчанию ни один из примеров не работает в приватных окнах браузера, подробности смотрите в [Extensions in Private Browsing](https://support.mozilla.org/en-US/kb/extensions-private-browsing#w_enabling-or-disabling-extensions-in-private-windows).

Если вы хотите попробовать эти примеры, клонируйте репозиторий, а после этого совершите одно из следующих действий:

1. Загрузите расширение из папки с его исходниками, используя функцию браузера [Load Temporary Add-on](/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox). Расширение останется загруженным до следующего перезапуска Firefox.
2. Откройте папку с исходниками расширения в командной строке и используйте команду [`web-ext`](/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext), чтобы запустить расширение. Расширение останется загруженным до следующего перезапуска Firefox.
3. В браузере Firefox используйте **Файл** > **Открыть файл** и найдите расширение в папке [`build`](https://github.com/mdn/webextensions-examples/tree/master/build). Папка `build` содержит построенные и подписанные версии всех примеров. В результате пример установится надолго, как обычное расширение.

> **Предупреждение:** **Важно**: Пожалуйста, не публикуйте эти примеры Веб-расширений на addons.mozilla.org (AMO) - вам не нужно подписывать примеры Веб-расширений для того, чтобы их запустить. Просто следуйте шагам, описанным выше.

Если вы хотите сделать свой вклад в репозиторий, [отправьте нам pull request!](https://github.com/mdn/webextensions-examples/blob/master/CONTRIBUTING.md)

{{WebExtAllExamples}}
