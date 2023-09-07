---
title: DOMException
slug: Web/API/DOMException
l10n:
  sourceCommit: f45409ba2169ff05e433d21aa4ee0424079916b8
---

{{ APIRef("DOM") }}

**`DOMException`** インターフェイスは、Web API のメソッドの呼び出しやプロパティへのアクセスによって異常なイベント（**例外**と呼ばれます）が発生したことを表します。これは基本的に、Web API 内部のエラーの状態を示すものです。

それぞれの例外に**名称**があり、これはエラーまたは異常な状態を特定する "PascalCase" 形式の文字列です。

`DOMException` は{{Glossary("Serializable object", "シリアライズ可能オブジェクト")}}ですので、 {{domxref("structuredClone()")}} で複製したり[ワーカー](/ja/docs/Web/API/Worker)間で {{domxref("Worker.postMessage()", "postMessage()")}} を用いて複製することができたりします。

## コンストラクター

- {{domxref("DOMException.DOMException()", "DOMException()")}}
  - : 指定したメッセージおよび名前を持つ `DOMException` オブジェクトを返します。

## プロパティ

- {{domxref("DOMException.code")}} {{deprecated_inline}} {{ReadOnlyInline}}
  - : 古いエラーコード定数のいずれか、または一致するものがない場合は `0` を返します。
- {{domxref("DOMException.message")}} {{ReadOnlyInline}}
  - : 文字列で、指定した[エラー名](#エラー名)に関連付けられたメッセージまたは説明を返します。
- {{domxref("DOMException.name")}} {{ReadOnlyInline}}
  - : 文字列で、[エラー名](#エラー名)に関連付けられた文字列のいずれかを返します。

## エラー名

これは、一般的なエラー名の一覧です。API によっては独自の名前を定義しているものもありますので、必ずしも完全なリストではありません。

なお、以下の歴史的な非推奨のエラーにはエラー名がありませんが、古い定数コード値、古い定数名のみがあります。

- 古いコード値: `2`、古い定数名: `DOMSTRING_SIZE_ERR`
- 古いコード値: `6`、古い定数名: `NO_DATA_ALLOWED_ERR`
- 古いコード値: `16`、古い定数名: `VALIDATION_ERR`

> **メモ:** 歴史的には、エラーは、その値があるように定義された名前付き変数に対応する数値によって識別されていたため、下記の項目の一部は、これまで使用していた古いコード値と定数名を示しています。

- `IndexSizeError`
  - : インデックスが許可された範囲から外れています。例えば、{{domxref("Range")}} オブジェクトで発生することがあります。（古いコード: `1`、古い定数名: `INDEX_SIZE_ERR`）
- `HierarchyRequestError`
  - : ノードツリーの階層が正しくありません。（古いコード: `3`、古い定数名: `HIERARCHY_REQUEST_ERR`）
- `WrongDocumentError`
  - : オブジェクトが誤った {{domxref("Document")}} 内に存在します。（古いコード: `4`、古い定数名: `WRONG_DOCUMENT_ERR`）
- `InvalidCharacterError`
  - : 文字列に無効な文字が含まれています。（古いコード: `5`、古い定数名: `INVALID_CHARACTER_ERR`）
- `NoModificationAllowedError`
  - : オブジェクトを変更できません。（古いコード: `7`、古い定数名: `NO_MODIFICATION_ALLOWED_ERR`）
- `NotFoundError`
  - : オブジェクトが見つかりません。（古いコード: `8`、古い定数名: `NOT_FOUND_ERR`）
- `NotSupportedError`
  - : 操作をサポートしていません。（古いコード: `9`、古い定数名: `NOT_SUPPORTED_ERR`）
- `InvalidStateError`
  - : オブジェクトが無効な状態です。（古いコード: `11`、古い定数名: `INVALID_STATE_ERR`）
- `InUseAttributeError`
  - : 属性が使用中です。（古いコード: `10`、古い定数名: `INUSE_ATTRIBUTE_ERR`）
- `SyntaxError`
  - : 文字列が期待されたパターンに一致しません。（古いコード: `12`、古い定数名: `SYNTAX_ERR`）
- `InvalidModificationError`
  - : オブジェクトをこの方法で変更できません。（古いコード: `13`、古い定数名: `INVALID_MODIFICATION_ERR`）
- `NamespaceError`
  - : XML の名前空間によって、操作は許可されていません。（古いコード: `14`、古い定数名: `NAMESPACE_ERR`）
- `InvalidAccessError`
  - : オブジェクトが操作や引数をサポートしていません。（古いコード: `15`、古い定数名: `INVALID_ACCESS_ERR`）
- `TypeMismatchError` {{deprecated_inline}}
  - : オブジェクトの型が、期待された型に一致しません。（古いコード: `17`、古い定数名: `TYPE_MISMATCH_ERR`）この値は非推奨です。この値を持つ `DOMException` に代わり JavaScript の {{jsxref("TypeError")}} 例外が発生するようになりました。
- `SecurityError`
  - : 操作が安全ではありません。（古いコード: `18`、古い定数名: `SECURITY_ERR`）
- `NetworkError` {{experimental_inline}}
  - : ネットワークのエラーが発生しました。（古いコード: `19`、古い定数名: `NETWORK_ERR`）
- `AbortError` {{experimental_inline}}
  - : 操作が異常終了しました。（古いコード: `20`、古い定数名: `ABORT_ERR`）
- `URLMismatchError` {{experimental_inline}}
  - : 与えられた URL が、別の URL と一致しません。（古いコード: `21`、古い定数名: `URL_MISMATCH_ERR`）
- `QuotaExceededError` {{experimental_inline}}
  - : クォータを超過しました。（古いコード: `22`、古い定数名: `QUOTA_EXCEEDED_ERR`）
- `TimeoutError`
  - : 操作がタイムアウトしました。（古いコード: `23`、古い定数名: `TIMEOUT_ERR`）
- `InvalidNodeTypeError` {{experimental_inline}}
  - : ノードが正しくない、または操作に対して誤った祖先が存在します。（古いコード: `24`、古い定数名: `INVALID_NODE_TYPE_ERR`）
- `DataCloneError` {{experimental_inline}}
  - : オブジェクトを複製できません。（古いコード: `25`、古い定数名: `DATA_CLONE_ERR`）
- `EncodingError` {{experimental_inline}}
  - : エンコードやデコードといった、エンコーディング操作が失敗しました（古いコードおよび古い定数名はありません）。
- `NotReadableError` {{experimental_inline}}
  - : 入出力の読み取り操作が失敗しました（古いコードおよび古い定数名はありません）。
- `UnknownError` {{experimental_inline}}
  - : 未知の一時的な理由 (例えばメモリー不足) によって、操作が失敗しました（古いコードおよび古い定数名はありません）。
- `ConstraintError` {{experimental_inline}}
  - : 制約が満たされないため、処理の中の変更操作が失敗しました（古いコードおよび古い定数名はありません）。
- `DataError` {{experimental_inline}}
  - : 提供されたデータが不適切です（古いコードおよび古い定数名はありません）。
- `TransactionInactiveError` {{experimental_inline}}
  - : 現在アクティブではない、または終了した処理に対して要求を行いました（古いコードおよび古い定数名はありません）。
- `ReadOnlyError` {{experimental_inline}}
  - : 「読み取り専用」の処理で変更操作を試みました（古いコードおよび古い定数名はありません）。
- `VersionError` {{experimental_inline}}
  - : 現在のバージョンより古いバージョンを使用するデータベースを開こうとしました（古いコードおよび古い定数名はありません）。
- `OperationError` {{experimental_inline}}
  - : 操作に固有の理由で、操作が失敗しました（古いコードおよび古い定数名はありません）。
- `NotAllowedError`
  - : 現在の状況において、ユーザーエージェントまたはプラットフォームが要求を許可しませんでした。ユーザーが拒否されている可能性があります（古いコードおよび古い定数名はありません）。

## 仕様

{{Specifications}}

## ブラウザー実装状況

{{Compat}}

## 関連情報

- [`DOMException` のポリフィル](https://github.com/zloirock/core-js#domexception)が [`core-js`](https://github.com/zloirock/core-js) で利用できます
- {{ domxref("DOMError") }}
