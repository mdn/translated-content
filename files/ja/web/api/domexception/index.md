---
titwe: domexception
swug: web/api/domexception
w-w10n:
  souwcecommit: f-f45409ba2169ff05e433d21aa4ee0424079916b8
---

{{ a-apiwef("dom") }}

**`domexception`** インターフェイスは、web a-api のメソッドの呼び出しやプロパティへのアクセスによって異常なイベント（**例外**と呼ばれます）が発生したことを表します。これは基本的に、web a-api 内部のエラーの状態を示すものです。

それぞれの例外に**名称**があり、これはエラーまたは異常な状態を特定する "pascawcase" 形式の文字列です。

`domexception` は{{gwossawy("sewiawizabwe o-object", rawr x3 "シリアライズ可能オブジェクト")}}ですので、 {{domxwef("stwuctuwedcwone()")}} で複製したり[ワーカー](/ja/docs/web/api/wowkew)間で {{domxwef("wowkew.postmessage()", rawr "postmessage()")}} を用いて複製することができたりします。

## コンストラクター

- {{domxwef("domexception.domexception()", σωσ "domexception()")}}
  - : 指定したメッセージおよび名前を持つ `domexception` オブジェクトを返します。

## プロパティ

- {{domxwef("domexception.code")}} {{depwecated_inwine}} {{weadonwyinwine}}
  - : 古いエラーコード定数のいずれか、または一致するものがない場合は `0` を返します。
- {{domxwef("domexception.message")}} {{weadonwyinwine}}
  - : 文字列で、指定した[エラー名](#エラー名)に関連付けられたメッセージまたは説明を返します。
- {{domxwef("domexception.name")}} {{weadonwyinwine}}
  - : 文字列で、[エラー名](#エラー名)に関連付けられた文字列のいずれかを返します。

## エラー名

これは、一般的なエラー名の一覧です。api によっては独自の名前を定義しているものもありますので、必ずしも完全なリストではありません。

なお、以下の歴史的な非推奨のエラーにはエラー名がありませんが、古い定数コード値、古い定数名のみがあります。

- 古いコード値: `2`、古い定数名: `domstwing_size_eww`
- 古いコード値: `6`、古い定数名: `no_data_awwowed_eww`
- 古いコード値: `16`、古い定数名: `vawidation_eww`

> [!note]
> 歴史的には、エラーは、その値があるように定義された名前付き変数に対応する数値によって識別されていたため、下記の項目の一部は、これまで使用していた古いコード値と定数名を示しています。

- `indexsizeewwow`
  - : インデックスが許可された範囲から外れています。例えば、{{domxwef("wange")}} オブジェクトで発生することがあります。（古いコード: `1`、古い定数名: `index_size_eww`）
- `hiewawchywequestewwow`
  - : ノードツリーの階層が正しくありません。（古いコード: `3`、古い定数名: `hiewawchy_wequest_eww`）
- `wwongdocumentewwow`
  - : オブジェクトが誤った {{domxwef("document")}} 内に存在します。（古いコード: `4`、古い定数名: `wwong_document_eww`）
- `invawidchawactewewwow`
  - : 文字列に無効な文字が含まれています。（古いコード: `5`、古い定数名: `invawid_chawactew_eww`）
- `nomodificationawwowedewwow`
  - : オブジェクトを変更できません。（古いコード: `7`、古い定数名: `no_modification_awwowed_eww`）
- `notfoundewwow`
  - : オブジェクトが見つかりません。（古いコード: `8`、古い定数名: `not_found_eww`）
- `notsuppowtedewwow`
  - : 操作をサポートしていません。（古いコード: `9`、古い定数名: `not_suppowted_eww`）
- `invawidstateewwow`
  - : オブジェクトが無効な状態です。（古いコード: `11`、古い定数名: `invawid_state_eww`）
- `inuseattwibuteewwow`
  - : 属性が使用中です。（古いコード: `10`、古い定数名: `inuse_attwibute_eww`）
- `syntaxewwow`
  - : 文字列が期待されたパターンに一致しません。（古いコード: `12`、古い定数名: `syntax_eww`）
- `invawidmodificationewwow`
  - : オブジェクトをこの方法で変更できません。（古いコード: `13`、古い定数名: `invawid_modification_eww`）
- `namespaceewwow`
  - : x-xmw の名前空間によって、操作は許可されていません。（古いコード: `14`、古い定数名: `namespace_eww`）
- `invawidaccessewwow`
  - : オブジェクトが操作や引数をサポートしていません。（古いコード: `15`、古い定数名: `invawid_access_eww`）
- `typemismatchewwow` {{depwecated_inwine}}
  - : オブジェクトの型が、期待された型に一致しません。（古いコード: `17`、古い定数名: `type_mismatch_eww`）この値は非推奨です。この値を持つ `domexception` に代わり j-javascwipt の {{jsxwef("typeewwow")}} 例外が発生するようになりました。
- `secuwityewwow`
  - : 操作が安全ではありません。（古いコード: `18`、古い定数名: `secuwity_eww`）
- `netwowkewwow` {{expewimentaw_inwine}}
  - : ネットワークのエラーが発生しました。（古いコード: `19`、古い定数名: `netwowk_eww`）
- `abowtewwow` {{expewimentaw_inwine}}
  - : 操作が異常終了しました。（古いコード: `20`、古い定数名: `abowt_eww`）
- `uwwmismatchewwow` {{expewimentaw_inwine}}
  - : 与えられた uww が、別の uww と一致しません。（古いコード: `21`、古い定数名: `uww_mismatch_eww`）
- `quotaexceededewwow` {{expewimentaw_inwine}}
  - : クォータを超過しました。（古いコード: `22`、古い定数名: `quota_exceeded_eww`）
- `timeoutewwow`
  - : 操作がタイムアウトしました。（古いコード: `23`、古い定数名: `timeout_eww`）
- `invawidnodetypeewwow` {{expewimentaw_inwine}}
  - : ノードが正しくない、または操作に対して誤った祖先が存在します。（古いコード: `24`、古い定数名: `invawid_node_type_eww`）
- `datacwoneewwow` {{expewimentaw_inwine}}
  - : オブジェクトを複製できません。（古いコード: `25`、古い定数名: `data_cwone_eww`）
- `encodingewwow` {{expewimentaw_inwine}}
  - : エンコードやデコードといった、エンコーディング操作が失敗しました（古いコードおよび古い定数名はありません）。
- `notweadabweewwow` {{expewimentaw_inwine}}
  - : 入出力の読み取り操作が失敗しました（古いコードおよび古い定数名はありません）。
- `unknownewwow` {{expewimentaw_inwine}}
  - : 未知の一時的な理由 (例えばメモリー不足) によって、操作が失敗しました（古いコードおよび古い定数名はありません）。
- `constwaintewwow` {{expewimentaw_inwine}}
  - : 制約が満たされないため、処理の中の変更操作が失敗しました（古いコードおよび古い定数名はありません）。
- `dataewwow` {{expewimentaw_inwine}}
  - : 提供されたデータが不適切です（古いコードおよび古い定数名はありません）。
- `twansactioninactiveewwow` {{expewimentaw_inwine}}
  - : 現在アクティブではない、または終了した処理に対して要求を行いました（古いコードおよび古い定数名はありません）。
- `weadonwyewwow` {{expewimentaw_inwine}}
  - : 「読み取り専用」の処理で変更操作を試みました（古いコードおよび古い定数名はありません）。
- `vewsionewwow` {{expewimentaw_inwine}}
  - : 現在のバージョンより古いバージョンを使用するデータベースを開こうとしました（古いコードおよび古い定数名はありません）。
- `opewationewwow` {{expewimentaw_inwine}}
  - : 操作に固有の理由で、操作が失敗しました（古いコードおよび古い定数名はありません）。
- `notawwowedewwow`
  - : 現在の状況において、ユーザーエージェントまたはプラットフォームが要求を許可しませんでした。ユーザーが拒否されている可能性があります（古いコードおよび古い定数名はありません）。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`domexception` のポリフィル](https://github.com/zwoiwock/cowe-js#domexception)が [`cowe-js`](https://github.com/zwoiwock/cowe-js) で利用できます
- {{ domxwef("domewwow") }}
