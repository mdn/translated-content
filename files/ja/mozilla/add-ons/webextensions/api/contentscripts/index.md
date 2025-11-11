---
title: contentScripts
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts
---

{{AddonSidebar}}

この API はコンテントスクリプトを登録するためにお使いいただけます。コンテントスクリプトを登録することで、指定した URL にマッチするページにそのスクリプトを挿入するようブラウザーに指定することができます。

この API は`manifest.json`にある"content_scripts"キーと似ていますが、"content_scripts"ではコンテントスクリプトと URL のパターンは**インストールタイム**に固定されます。一方`content_scripts` API は、**ランタイム（実行時）**でスクリプトを登録・登録解除することが可能です。

この API は、{{WebExtAPIRef("contentScripts.register()")}} メソッドを呼び出して使用していただけます。その際は、登録するコンテントスクリプト、URL のマッチングパターン、またその他のオプションを実引数(arguments)として渡してください。このメソッドは{{WebExtAPIRef("contentScripts.RegisteredContentScript")}} オブジェクトが resolve された [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返します。

`RegisteredContentScript` オブジェクトは `register()` で登録されたスクリプトを保持し、`unregister()`でそのスクリプトを登録解除(unregister)できます。また、コンテントスクリプトはそれらを作ったページが消された際にも自動的に登録解除されます。例えば、background ページによって登録されたコンテントスクリプトは、background ページが消去された際に自動的に登録解除されます。

`contentScripts` API にパーミッションは存在しませんが、拡張機能は register()でマッチさせる URL においては適切な[host permissions](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions)を持っている必要があります。

## Types

- {{WebExtAPIRef("contentScripts.RegisteredContentScript")}}
  - : このタイプのオブジェクトは{{WebExtAPIRef("contentScripts.register()")}}関数の返り値です。{{WebExtAPIRef("contentScripts.register()")}}関数で登録されたコンテントスクリプトを持ち、このオブジェクトを使ってそれらを登録解除することができます。

## Functions

- {{WebExtAPIRef("contentScripts.register()")}}
  - : コンテントスクリプトを登録します。

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples("h2")}}
