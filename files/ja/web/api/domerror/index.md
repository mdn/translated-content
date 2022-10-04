---
title: DOMError
slug: Web/API/DOMError
---

{{APIRef("DOM")}}{{deprecated_header}}

**`DOMError`** インターフェイスは、エラー名を含んでいるエラーオブジェクトを表します。

## プロパティ

- {{domxref("DOMError.name")}} {{readOnlyInline}}
  - : エラーの型の名前のひとつを表す {{domxref("DOMString")}} を返します (下記の表を見てください)。
- {{domxref("DOMError.message")}} {{readOnlyInline}}
  - : 指定したエラーの型の名前に関連付けられたメッセージまたは説明を表す {{domxref("DOMString")}} を返します。

## エラーの型

| 型                           | 説明                                                                                                  |
| ---------------------------- | ----------------------------------------------------------------------------------------------------- |
| `IndexSizeError`             | 許可された範囲内にありません（例えば、{{domxref("range")}} オブジェクト内でスローされます）。 |
| `HierarchyRequestError`      | ノードのツリー階層指定が正しくありません。                                                            |
| `WrongDocumentError`         | オブジェクトが誤った {{domxref("document")}} 内にあります。                                  |
| `InvalidCharacterError`      | 文字列は不正な文字を含んでいます。                                                                    |
| `NoModificationAllowedError` | オブジェクトは修正不可能です。                                                                        |
| `NotFoundError`              | オブジェクトを見つけられませんでした。                                                                |
| `NotSupportedError`          | その命令はサポートされていません。                                                                    |
| `InvalidStateError`          | オブジェクトが不正な状態です。                                                                        |
| `SyntaxError`                | 文字列が期待されたパターンにマッチしませんでした。                                                    |
| `InvalidModificationError`   | オブジェクトはこの方法では修正不可能です。                                                            |
| `NamespaceError`             | その命令は XML の名前空間により許可されていません。                                                   |
| `InvalidAccessError`         | そのオブジェクトは指定した命令または引数をサポートしていません。                                      |
| `TypeMismatchError`          | オブジェクトの型が期待された型とマッチしません。                                                      |
| `SecurityError`              | その命令は安全ではありません。                                                                        |
| `NetworkError`               | ネットワークエラーが発生しました。                                                                    |
| `AbortError`                 | その命令は失敗しました。                                                                              |
| `URLMismatchError`           | 指定した URL がもう 1 つの URL にマッチしません。                                                     |
| `QuotaExceededError`         | クォータの容量を超えました。                                                                          |
| `TimeoutError`               | その命令はタイムアウトしました。                                                                      |
| `InvalidNodeTypeError`       | そのノードが不正、あるいは、この命令では不正な祖先ノードを持っています。                              |
| `DataCloneError`             | そのオブジェクトはクローン不可能です。                                                                |

## 仕様

| 仕様書                                                                   | 策定状況                 | コメント |
| ------------------------------------------------------------------------ | ------------------------ | -------- |
| {{SpecName('DOM4', '#interface-domerror', 'DOMError')}} | {{Spec2('DOM4')}} | 初期定義 |

## ブラウザー実装状況

{{Compat("api.DOMError")}}

## 関連情報

- {{domxref("DOMException")}}
