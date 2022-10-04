---
title: DOMException
slug: Web/API/DOMException
---

{{APIRef("DOM")}}

**`DOMException`** インターフェイスは、Web API のメソッドの呼び出しやプロパティへのアクセスによって異常なイベント (**例外**と呼ばれます) が発生したことを表します。これは基本的に、Web API 内部のエラーの状態を示すものです。

それぞれの例外に**名称**があり、これはエラーまたは異常な状態を特定する "CamelCase" 形式の文字列です。

## コンストラクター

- {{domxref("DOMException.DOMException()", "DOMException()")}} {{experimental_inline}}
  - : 指定したメッセージおよび名称の `DOMException` オブジェクトを返します。

## プロパティ

- {{domxref("DOMException.code")}} {{deprecated_inline}} {{readOnlyInline}}
  - : [エラーコード定数](#error_codes) の内の 1 つ、または該当しない場合に `0` を `short` 型の値で返します。このフィールドは歴史的な経緯で使用されており、新たな DOM 例外では使用しません。新たな例外の情報は {{domxref("DOMException.name")}} 属性に収めています。
- {{domxref("DOMException.message")}} {{readOnlyInline}}
  - : 指定した [エラー名](/ja/docs/Web/API/DOMException#Error_names) に関連付けられたメッセージまたは説明を表す {{domxref("DOMString")}} を返します。
- {{domxref("DOMException.name")}} {{readOnlyInline}}
  - : [エラー名](#Error_constants) に関連付けられた文字列のひとつを {{domxref("DOMString")}} 型の値で返します。

## エラー名

これは、一般的なエラー名の一覧です。独自にエラー名のセットを定義している API がありますので、これは必ずしも完全なリストではありません。

> **メモ:** 歴史的にエラーは、エラーの値を持つように定義した名前付き変数と、それに対応する値で識別されてきたため、一部の項目では過去に使用されたレガシーコードや定数名も記載します。

- `IndexSizeError`
  - : インデックスが許可された範囲から外れています。例えば、{{domxref("Range")}} オブジェクトで発生することがあります。(レガシーコード: `1`、レガシー定数名: `INDEX_SIZE_ERR`)
- [`HierarchyRequestError`]()
  - : ノードツリーの階層が正しくありません。(レガシーコード: `3`、レガシー定数名: `HIERARCHY_REQUEST_ERR`)
- `WrongDocumentError`
  - : オブジェクトが誤った {{domxref("Document")}} 内に存在します。(レガシーコード: `4`、レガシー定数名: `WRONG_DOCUMENT_ERR`)
- `InvalidCharacterError`
  - : 文字列に無効な文字が含まれています。(レガシーコード: `5`、レガシー定数名: `INVALID_CHARACTER_ERR`)
- `NoModificationAllowedError`
  - : オブジェクトを変更できません。(レガシーコード: `7`、レガシー定数名: `NO_MODIFICATION_ALLOWED_ERR`)
- `NotFoundError`
  - : オブジェクトが見つかりません。(レガシーコード: `8`、レガシー定数名: `NOT_FOUND_ERR`)
- `NotSupportedError`
  - : 操作をサポートしていません。(レガシーコード: `9`、レガシー定数名: `NOT_SUPPORTED_ERR`)
- `InvalidStateError`
  - : オブジェクトが無効な状態です。(レガシーコード: `11`、レガシー定数名: `INVALID_STATE_ERR`)
- `SyntaxError`
  - : 文字列が期待されたパターンにマッチしません。(レガシーコード: `12`、レガシー定数名: `SYNTAX_ERR`)
- `InvalidModificationError`
  - : オブジェクトをこの方法で変更できません。(レガシーコード: `13`、レガシー定数名: `INVALID_MODIFICATION_ERR`)
- `NamespaceError`
  - : XML の名前空間によって、操作は許可されていません。(レガシーコード: `14`、レガシー定数名: `NAMESPACE_ERR`)
- `InvalidAccessError`
  - : オブジェクトが操作や引数をサポートしていません。(レガシーコード: `15`、レガシー定数名: `INVALID_ACCESS_ERR`)
- `TypeMismatchError` {{deprecated_inline}}
  - : オブジェクトの型が、期待された型に一致しません。(レガシーコード: `17`、レガシー定数名: `TYPE_MISMATCH_ERR`) この値は非推奨であり、この値を持つ `DOMException` に代わり JavaScript の {{jsxref("TypeError")}} 例外が発生します。
- `SecurityError`
  - : 操作が安全ではありません。(レガシーコード: `18`、レガシー定数名: `SECURITY_ERR`)
- `NetworkError` {{experimental_inline}}
  - : ネットワークのエラーが発生しました。(レガシーコード: `19`、レガシー定数名: `NETWORK_ERR`)
- `AbortError` {{experimental_inline}}
  - : 操作が異常終了しました。(レガシーコード: `20`、レガシー定数名: `ABORT_ERR`)
- `URLMismatchError` {{experimental_inline}}
  - : 与えられた URL が、別の URL と一致しません。(レガシーコード: `21`、レガシー定数名: `URL_MISMATCH_ERR`)
- `QuotaExceededError` {{experimental_inline}}
  - : クォータを超過しました。(レガシーコード: `22`、レガシー定数名: `QUOTA_EXCEEDED_ERR`)
- `TimeoutError`
  - : 操作がタイムアウトしました。(レガシーコード: `23`、レガシー定数名: `TIMEOUT_ERR`)
- `InvalidNodeTypeError` {{experimental_inline}}
  - : ノードが正しくない、または操作に対して誤った祖先が存在します。(レガシーコード: `24`、レガシー定数名: `INVALID_NODE_TYPE_ERR`)
- `DataCloneError` {{experimental_inline}}
  - : オブジェクトを複製できません。(レガシーコード: `25`、レガシー定数名: `DATA_CLONE_ERR`)
- `EncodingError` {{experimental_inline}}
  - : エンコードやデコードといった、エンコーディング操作が失敗しました (レガシーコードおよびレガシー定数名はありません)。
- `NotReadableError` {{experimental_inline}}
  - : 入出力の読み取り操作が失敗しました (レガシーコードおよびレガシー定数名はありません)。
- `UnknownError` {{experimental_inline}}
  - : 未知の一時的な理由 (例えばメモリー不足) によって、操作が失敗しました (レガシーコードおよびレガシー定数名はありません)。
- `ConstraintError` {{experimental_inline}}
  - : 制約が満たされないため、処理の中の変更操作が失敗しました (レガシーコードおよびレガシー定数名はありません)。
- `DataError` {{experimental_inline}}
  - : 提供されたデータが不適切です (レガシーコードおよびレガシー定数名はありません)。
- `TransactionInactiveError` {{experimental_inline}}
  - : 現在アクティブではない、または終了した処理に対して要求を行いました (レガシーコードおよびレガシー定数名はありません)。
- `ReadOnlyError` {{experimental_inline}}
  - : "読み取り専用" の処理で変更操作を試みました (レガシーコードおよびレガシー定数名はありません)。
- `VersionError` {{experimental_inline}}
  - : 現在のバージョンより古いバージョンを使用するデータベースを開こうとしました (レガシーコードおよびレガシー定数名はありません)。
- `OperationError` {{experimental_inline}}
  - : 操作に固有の理由で、操作が失敗しました (レガシーコードおよびレガシー定数名はありません)。
- `NotAllowedError`
  - : 現在の状況において、ユーザーエージェントまたはプラットフォームが要求を許可しませんでした。ユーザーが拒否されている可能性があります (レガシーコードおよびレガシー定数名はありません)。

## 仕様

| 仕様書                                                                                           | 策定状況                     | コメント                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('WebIDL', '#es-DOMException-call', 'constructor')}}             | {{Spec2('WebIDL')}}     | `DOMException` クラスのコンストラクターを追加。値 `NotReadableError`, `UnknownError`, `ConstraintError`, `DataError`, `TransactionInactiveError`, `ReadOnlyError`, `VersionError`, `OperationError`, `NotAllowedError` を追加。 |
| {{SpecName('DOM4', '#exception-domexception', 'DOMException')}}             | {{Spec2('DOM4')}}     | `SECURITY_ERR`, `NETWORK_ERR`, `ABORT_ERR`, `URL_MISMATCH_ERR`, `QUOTA_EXCEEDED_ERR`, `TIMEOUT_ERR`, `INVALID_NODE_TYPE_ERR`, `DATA_CLONE_ERR` を追加。例外値のプロパティ `code` を非推奨に変更。値 `EncodingError` を追加。    |
| {{SpecName('DOM3 Core', 'core.html#ID-17189187', 'DOMException')}}         | {{Spec2('DOM3 Core')}} | `VALIDATION_ERR` および `TYPE_MISMATCH_ERR` を追加。                                                                                                                                                                            |
| {{SpecName('DOM2 Core', 'core.html#ID-17189187', 'DOMException')}}         | {{Spec2('DOM2 Core')}} | `INVALID_STATE_ERR`, `SYNTAX_ERR`, `INVALID_MODIFICATION_ERR`, `NAMESPACE_ERR`, `INVALID_ACCESS_ERR` を追加。                                                                                                                   |
| {{SpecName('DOM1', 'level-one-core.html#ID-17189187', 'DOMException')}} | {{Spec2('DOM1')}}     | 最初期の定義                                                                                                                                                                                                                    |

## ブラウザー実装状況

{{Compat("api.DOMException")}}

## 関連情報

- {{domxref("DOMError")}}
