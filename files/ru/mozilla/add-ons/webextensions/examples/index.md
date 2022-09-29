---
title: Примеры расширений
slug: Mozilla/Add-ons/WebExtensions/Examples
tags:
  - WebExtensions
  - Веб-расширения
  - Интерфейс
translation_of: Mozilla/Add-ons/WebExtensions/Examples
---
<div>{{AddonSidebar}}</div>

<p>В целях иллюстрации разработки расширений, мы поддерживаем репозиторий простых демонстрационных расширений по адресу <a href="https://github.com/mdn/webextensions-examples">https://github.com/mdn/webextensions-examples</a>. Данная статья описывает, как использовать эти примеры, и перечисляет их вместе с API Веб-расширений (WebExtensions API), которые они демонстрируют.</p>

<p>Эти примеры работают в Firefox Nightly: большинство из них работает и в более ранних версиях Firefox, но, чтобы удостовериться, проверьте поле <a href="/en-US/Add-ons/WebExtensions/manifest.json/applications">strict_min_version</a> в файле manifest.json.</p>

<div class="blockIndicator warning">
<p>Некоторые примеры работают только на специальных доменах или страницах. Подробности о всех ограничениях представлены в файле readme каждого примера. По умолчанию ни один из примеров не работает в приватных окнах браузера, подробности смотрите в <a href="https://support.mozilla.org/en-US/kb/extensions-private-browsing#w_enabling-or-disabling-extensions-in-private-windows">Extensions in Private Browsing</a>.</p>
</div>

<p>Если вы хотите попробовать эти примеры, клонируйте репозиторий, а после этого совершите одно из следующих действий:</p>

<ol>
 <li>Загрузите расширение из папки с его исходниками, используя функцию браузера <a href="/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox">Load Temporary Add-on</a>. Расширение останется загруженным до следующего перезапуска Firefox.</li>
 <li>Откройте папку с исходниками расширения в командной строке и используйте команду <code><a href="/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext">web-ext</a></code>, чтобы запустить расширение. Расширение останется загруженным до следующего перезапуска Firefox.</li>
 <li>В браузере Firefox используйте <strong>Файл</strong> &gt; <strong>Открыть файл</strong> и найдите расширение в папке <code><a href="https://github.com/mdn/webextensions-examples/tree/master/build">build</a></code>. Папка <code>build</code> содержит построенные и подписанные версии всех примеров. В результате пример установится надолго, как обычное расширение.</li>
</ol>

<div class="warning">
<p><strong>Важно</strong>: Пожалуйста, не публикуйте эти примеры Веб-расширений на addons.mozilla.org (AMO) - вам не нужно подписывать примеры Веб-расширений для того, чтобы их запустить. Просто следуйте шагам, описанным выше.</p>
</div>

<p>Если вы хотите сделать свой вклад в репозиторий, <a href="https://github.com/mdn/webextensions-examples/blob/master/CONTRIBUTING.md">отправьте нам pull request!</a></p>

<p>{{WebExtAllExamples}}</p>
