---
title: pkcs11
slug: Mozilla/Add-ons/WebExtensions/API/pkcs11
translation_of: Mozilla/Add-ons/WebExtensions/API/pkcs11
---
<div>{{AddonSidebar}}</div>

<p><code>pkcs11</code> API は拡張機能にセキュリティモジュール <a href="https://en.wikipedia.org/wiki/PKCS_11">PKCS #11</a> の列挙を可能とし、キーの元と証明書としてブラウザーからアクセスできるようにします。</p>

<p>このAPI を使うには "pkcs11" <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">パーミッション</a>が必要です。</p>

<h2 id="Provisioning_PKCS_11_modules" name="Provisioning_PKCS_11_modules">Provisioning PKCS #11 modules</h2>

<p>There are two environmental prerequisites for using this API:</p>

<ul>
 <li>one or more PKCS #11 modules must be installed on the user's computer</li>
 <li>for each installed PKCS #11 module, there must be a <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Native_manifests">native manifest</a> file that enables the browser to locate the module.</li>
</ul>

<p>Most probably, the user or device administrator would install the PKCS #11 module, and its installer would install the native manifest file at the same time. Note, though, that the module and manifest can't be installed as part of the extension's own installation process.</p>

<p>For details about the manifest file's contents and location, see <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Native_manifests">Native manifests</a>.</p>

<h2 id="Functions" name="Functions">関数</h2>

<dl>
 <dt>{{WebExtAPIRef("pkcs11.getModuleSlots()")}}</dt>
 <dd>For each slot in a module, get its name and whether it contains a token.</dd>
 <dt>{{WebExtAPIRef("pkcs11.installModule()")}}</dt>
 <dd>Installs the named PKCS #11 module.</dd>
 <dt>{{WebExtAPIRef("pkcs11.isModuleInstalled()")}}</dt>
 <dd>Checks whether the named PKCS #11 module is installed.</dd>
 <dt>{{WebExtAPIRef("pkcs11.uninstallModule()")}}</dt>
 <dd>Uninstalls the named PKCS #11 module.</dd>
</dl>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("webextensions.api.pkcs11", 1, 1)}} {{WebExtExamples("h2")}}</p>
