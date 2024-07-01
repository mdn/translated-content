---
title: DOMError
slug: Web/API/DOMError
l10n:
  sourceCommit: 5f80944f03f785c729c12ac143cf88a1c12e72cd
---

{{APIRef("DOM")}}{{Deprecated_Header}}

**`DOMError`** インターフェイスは、エラー名を含んでいるエラーオブジェクトを表します。

## インスタンスプロパティ

- {{domxref("DOMError.name")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 文字列で、このエラーの型名のひとつを返します（下記参照）。
- {{domxref("DOMError.message")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : 文字列で、このエラーの型の名前に関連付けられたメッセージまたは説明を返します。

## エラーの型

| 型                           | 説明                                                                                      |
| ---------------------------- | ----------------------------------------------------------------------------------------- |
| `IndexSizeError`             | 許可された範囲内にありません（例えば、{{domxref("range")}} オブジェクト内で発生します）。 |
| `HierarchyRequestError`      | ノードのツリー階層指定が正しくありません。                                                |
| `WrongDocumentError`         | オブジェクトが誤った {{domxref("document")}} 内にあります。                               |
| `InvalidCharacterError`      | 文字列が不正な文字を含んでいます。                                                        |
| `NoModificationAllowedError` | オブジェクトは変更不可能です。                                                            |
| `NotFoundError`              | オブジェクトを見つけられませんでした。                                                    |
| `NotSupportedError`          | その操作に対応していません。                                                              |
| `InvalidStateError`          | オブジェクトが不正な状態です。                                                            |
| `SyntaxError`                | 文字列が期待されたパターンに一致しませんでした。                                          |
| `InvalidModificationError`   | オブジェクトはこの方法では変更不可能です。                                                |
| `NamespaceError`             | この操作は XML の名前空間により許可されていません。                                       |
| `InvalidAccessError`         | そのオブジェクトは指定した操作または引数に対応していません。                              |
| `TypeMismatchError`          | オブジェクトの型が期待された型と一致しません。                                            |
| `SecurityError`              | 操作が安全ではありません。                                                                |
| `NetworkError`               | ネットワークエラーが発生しました。                                                        |
| `AbortError`                 | この操作が中止されました。                                                                |
| `URLMismatchError`           | 指定した URL がもう 1 つの URL に一致しません。                                           |
| `QuotaExceededError`         | クォータの容量を超えました。                                                              |
| `TimeoutError`               | 操作がタイムアウトしました。                                                              |
| `InvalidNodeTypeError`       | そのノードが不正、あるいは、この命令では不正な祖先ノードを持っています。                  |
| `DataCloneError`             | そのオブジェクトはクローン不可能です。                                                    |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ domxref("DOMException") }}
