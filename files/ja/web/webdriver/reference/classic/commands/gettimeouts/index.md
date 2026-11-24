---
title: Get Timeouts
slug: Web/WebDriver/Reference/Classic/Commands/GetTimeouts
l10n:
  sourceCommit: fb6aa6056407ba69d96da0fe140a1ae2320f0fb2
---

_Get Timeouts_ [コマンド](/ja/docs/Web/WebDriver/Reference/Classic/Commands)は [WebDriver](/ja/docs/Web/WebDriver) API に所属し、現在のセッションに関連付けられているタイムアウトを返します。[セッションのタイムアウト](/ja/docs/Web/WebDriver/Reference/Classic/Timeouts)は、[スクリプトの注入](/ja/docs/Web/WebDriver/Reference/Classic/Timeouts#script)、[文書のナビゲーション](/ja/docs/Web/WebDriver/Reference/Classic/Timeouts#pageload)、[要素の検索](/ja/docs/Web/WebDriver/Reference/Classic/Timeouts#implicit)などの動作を制御します。

## 構文

| メソッド                                         | URI テンプレート                 |
| ------------------------------------------------ | -------------------------------- |
| [`GET`](/ja/docs/Web/HTTP/Reference/Methods/GET) | `/session/{session id}/timeouts` |

### URL パラメーター

- `session id`
  - : セッションの識別子です。

### レスポンス

レスポンスのペイロードは、[タイムアウトオブジェクト](/ja/docs/Web/WebDriver/Reference/Classic/Timeouts)です。

- `implicit`
  - : 要素の検索時に[要素の検索方法](/ja/docs/Web/WebDriver/Reference/WebElement)を再試行する時間（ミリ秒単位）です。デフォルトは `0` で、この場合、検索方法は 1 回だけ実行されます。
- `pageLoad`
  - : 文書の読み込みが完了するまで待機する時間（ミリ秒単位）です。デフォルトでは WebDriver は 5 分（300,000 ms）待機します。
- `script`
  - : [スクリプト実行](/ja/docs/Web/WebDriver/Reference/Commands/ExecuteScript)または[非同期スクリプト実行](/ja/docs/Web/WebDriver/Reference/Commands/ExecuteAsyncScript)で注入されたスクリプトは、ミリ秒単位で指定されたスクリプトのタイムアウト時間に達するまで実行されます。その後スクリプトは中断され、[スクリプトタイムアウトエラー](/ja/docs/Web/WebDriver/Reference/Errors/ScriptTimeout)が返されます。デフォルトは 30 秒（30,000 ms）です。

### エラー

- [`invalid session id`](/ja/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)
  - : セッションが存在しません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [タイムアウトオブジェクト](/ja/docs/Web/WebDriver/Reference/Classic/Timeouts)
- [Set Timeouts](/ja/docs/Web/WebDriver/Reference/Classic/Commands/SetTimeouts) コマンド
- [WebDriver コマンド一覧](/ja/docs/Web/WebDriver/Reference/Classic/Commands)
