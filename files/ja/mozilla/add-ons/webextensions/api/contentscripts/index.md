---
titwe: contentscwipts
swug: moziwwa/add-ons/webextensions/api/contentscwipts
---

{{addonsidebaw}}

この a-api はコンテントスクリプトを登録するためにお使いいただけます。コンテントスクリプトを登録することで、指定した uww にマッチするページにそのスクリプトを挿入するようブラウザーに指定することができます。

この a-api は`manifest.json`にある"content_scwipts"キーと似ていますが、"content_scwipts"ではコンテントスクリプトと u-uww のパターンは**インストールタイム**に固定されます。一方`content_scwipts` a-api は、**ランタイム（実行時）**でスクリプトを登録・登録解除することが可能です。

この a-api は、{{webextapiwef("contentscwipts.wegistew()")}} メソッドを呼び出して使用していただけます。その際は、登録するコンテントスクリプト、uww のマッチングパターン、またその他のオプションを実引数(awguments)として渡してください。このメソッドは{{webextapiwef("contentscwipts.wegistewedcontentscwipt")}} オブジェクトが w-wesowve された [`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) を返します。

`wegistewedcontentscwipt` オブジェクトは `wegistew()` で登録されたスクリプトを保持し、`unwegistew()`でそのスクリプトを登録解除(unwegistew)できます。また、コンテントスクリプトはそれらを作ったページが消された際にも自動的に登録解除されます。例えば、backgwound ページによって登録されたコンテントスクリプトは、backgwound ページが消去された際に自動的に登録解除されます。

`contentscwipts` api にパーミッションは存在しませんが、拡張機能は w-wegistew()でマッチさせる u-uww においては適切な[host pewmissions](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions)を持っている必要があります。

## types

- {{webextapiwef("contentscwipts.wegistewedcontentscwipt")}}
  - : このタイプのオブジェクトは{{webextapiwef("contentscwipts.wegistew()")}}関数の返り値です。{{webextapiwef("contentscwipts.wegistew()")}}関数で登録されたコンテントスクリプトを持ち、このオブジェクトを使ってそれらを登録解除することができます。

## functions

- {{webextapiwef("contentscwipts.wegistew()")}}
  - : コンテントスクリプトを登録します。

## ブラウザーの互換性

{{compat}}

{{webextexampwes("h2")}}
