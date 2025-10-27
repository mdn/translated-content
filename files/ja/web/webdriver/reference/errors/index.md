---
title: WebDriver のエラー
short-title: Errors
slug: Web/WebDriver/Reference/Errors
l10n:
  sourceCommit: 81715a83bdb5d71cdceaf32d1e40a3edfc986a12
---

WebDriver の[コマンド](/ja/docs/Web/WebDriver/Reference/Commands)は、送信された際にエラー[レスポンス](/ja/docs/Web/WebDriver/Reference/Response)を受け取る可能性があります。このエラーは、4xx または 5xx の範囲の [HTTP ステータスコード](/ja/docs/Web/HTTP/Reference/Status) を含む [HTTP レスポンス](/ja/docs/Web/HTTP) と、エラーの詳細を保持する JSON の本体によって表されます。

## 本体

**エラーオブジェクト**は JSON のオブジェクトで、3 つまたは4 つのフィールドを持ちます。

- `error`
  - : エラー型です。
- `message`
  - : このエラーについての人間が読むための説明です。
- `stacktrace`
  - : エラーが発生した時点での、有効なスタックフレームのスタックトレースレポートです。
- `data` （オプション）
  - : 実装によって定義される任意のデータであり、ユーザーに提示すると有用な場合があります。

    多くのドライバーでは、[予期しないアラートが開いた](/ja/docs/Web/API/Window/alert)エラーが発生した場合、[ユーザープロンプト](/ja/docs/Web/API/Window/alert)のテキストが含まれます。

## 例

例えば、`/session/1234/url` への [`GET`](/ja/docs/Web/HTTP/Reference/Methods/GET) リクエスト（ここで `1234` は存在しないセッションです）に対しては、{{HTTPStatus(404, "404 Not Found")}} のステータスコードと、以下の本文を含むレスポンスが返されます。

```json
{
  "value": {
    "error": "invalid session id",
    "message": "No active session with ID 1234",
    "stacktrace": ""
  }
}
```

ドライバーがエラーに追加のエラーデータを付記することは任意です。特に、 `window.alert` などのユーザープロンプトが、前回の WebDriver コマンドリクエストの実行後にモーダルダイアログを開いた場合に、この現象がよく見られます。

このようなダイアログにより WebDriver と JavaScript の実行が停止されるため、その後のレスポンスで[予期しないアラートが開かれた](/ja/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)というエラーが発生します。

```json
{
  "value": {
    "error": "unexpected alert open",
    "message": "",
    "stacktrace": "",
    "data": {
      "text": "Message from window.alert"
    }
  }
}
```

ほとんどの[クライアント](/ja/docs/Web/WebDriver/Reference/Clients)では、エラーはエラー型またはオブジェクト表現によって表されます。Python では [`WebDriverException`](https://www.selenium.dev/selenium/docs/api/py/selenium_common/selenium.common.exceptions.html) として、Node.js では [`WebDriverError`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriverError.html)、Java では[`WebDriverException`](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/WebDriverException.html)として表現されます。

## エラー一覧表

| エラー型                                                                                     | HTTP ステータスコード                            | 説明                                                                                                                                                                                                                                                                 |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [element click intercepted](/ja/docs/Web/WebDriver/Reference/Errors/ElementClickIntercepted) | {{HTTPStatus(400, "400 Bad Request")}}           | [Element Click](/ja/docs/Web/WebDriver/Reference/ElementClick) [コマンド](/ja/docs/Web/WebDriver/Reference/Commands) が、イベントを受信する[要素](/ja/docs/Web/WebDriver/Reference/WebElement)がクリックを要求された要素を隠しているため、完了できませんでした。     |
| [element not interactable](/ja/docs/Web/WebDriver/Reference/Errors/ElementNotInteractable)   | {{HTTPStatus(400, "400 Bad Request")}}           | 要素がポインター操作またはキーボード操作に対応していないため、[コマンド](/ja/docs/Web/WebDriver/Reference/Commands)を完了できませんでした。                                                                                                                          |
| [insecure certificate](/ja/docs/Web/WebDriver/Reference/Errors/InsecureCertificate)          | {{HTTPStatus(400, "400 Bad Request")}}           | ナビゲーションにより、ユーザーエージェントの証明書の警告が表示されました。これは通常、有効期限が切れているか、無効な TLS 証明書が原因で発生します。                                                                                                                  |
| [invalid argument](/ja/docs/Web/WebDriver/Reference/Errors/InvalidArgument)                  | {{HTTPStatus(400, "400 Bad Request")}}           | [コマンド](/ja/docs/Web/WebDriver/Reference/Commands)に渡された引数が無効であるか、誤った形式です。                                                                                                                                                                  |
| [invalid cookie domain](/ja/docs/Web/WebDriver/Reference/Errors/InvalidCookieDomain)         | {{HTTPStatus(400, "400 Bad Request")}}           | 現在のページとは異なるドメインでクッキーを設定しようとする不正な試みがなされました。                                                                                                                                                                                 |
| [invalid element state](/ja/docs/Web/WebDriver/Reference/Errors/InvalidElementState)         | {{HTTPStatus(400, "400 Bad Request")}}           | 要素が無効な状態であるため、[コマンド](/ja/docs/Web/WebDriver/Reference/Commands)を完了できませんでした。例えば、編集可能かつリセット可能な要素ではない場合に、その要素を[クリアー](/ja/docs/Web/WebDriver/Reference/ElementClear)しようとした場合などが該当します。 |
| [invalid selector](/ja/docs/Web/WebDriver/Reference/Errors/InvalidSelector)                  | {{HTTPStatus(400, "400 Bad Request")}}           | 要素取得コマンドが未知のセレクター戦略を提供しました。                                                                                                                                                                                                               |
| [invalid session id](/ja/docs/Web/WebDriver/Reference/Errors/InvalidSessionID)               | {{HTTPStatus(404, "404 Not Found")}}             | 指定されたセッション ID が認識されません。これは、該当するセッションが存在しないか、またはアクティブでないことを意味します。なお、[削除された](/ja/docs/Web/WebDriver/Reference/DeleteSession)セッションは再利用できません。                                         |
| [JavaScript error](/ja/docs/Web/WebDriver/Reference/Errors/JavaScriptError)                  | {{HTTPStatus(500, "500 Internal Server Error")}} | ユーザーから提供された JavaScript の実行中にエラーが発生しました。                                                                                                                                                                                                   |
| [move target out of bounds](/ja/docs/Web/WebDriver/Reference/Errors/MoveTargetOutOfBounds)   | {{HTTPStatus(500, "500 Internal Server Error")}} | マウスの操作対象がブラウザーの表示領域内に存在せず、表示領域内に移動することもできません。                                                                                                                                                                           |
| [no such alert](/ja/docs/Web/WebDriver/Reference/Errors/NoSuchAlert)                         | {{HTTPStatus(404, "404 Not Found")}}             | ユーザープロンプトが開かれていない状態で操作を試みました。                                                                                                                                                                                                           |
| [no such cookie](/ja/docs/Web/WebDriver/Reference/Errors/NoSuchCookie)                       | {{HTTPStatus(404, "404 Not Found")}}             | 現在の[文書](/ja/docs/Web/API/Document)内の[クッキー](/ja/docs/Glossary/Cookie)において、指定されたパス名に一致するクッキーが見つかりませんでした。                                                                                                                  |
| [no such element](/ja/docs/Web/WebDriver/Reference/Errors/NoSuchElement)                     | {{HTTPStatus(404, "404 Not Found")}}             | 指定された検索条件では、ページ上に該当する要素が見つかりませんでした。                                                                                                                                                                                               |
| [no such frame](/ja/docs/Web/WebDriver/Reference/Errors/NoSuchFrame)                         | {{HTTPStatus(404, "404 Not Found")}}             | フレームを切り替えるための[コマンド](/ja/docs/Web/WebDriver/Reference/Commands)が、該当するフレームが見つからなかったため、実行できませんでした。                                                                                                                    |
| [no such window](/ja/docs/Web/WebDriver/Reference/Errors/NoSuchWindow)                       | {{HTTPStatus(404, "404 Not Found")}}             | ウィンドウを切り替えるための[コマンド](/ja/docs/Web/WebDriver/Reference/Commands)が、該当するウィンドウが見つからなかったため、実行できませんでした。                                                                                                                |
| [script timeout](/ja/docs/Web/WebDriver/Reference/Errors/ScriptTimeout)                      | {{HTTPStatus(408, "408 Request Timeout")}}       | スクリプトが、タイムアウトする前に完了しませんでした。                                                                                                                                                                                                               |
| [session not created](/ja/docs/Web/WebDriver/Reference/Errors/SessionNotCreated)             | {{HTTPStatus(500, "500 Internal Server Error")}} | 新しいセッションを作成できませんでした。これは、ブラウザーが起動できなかったか、セッションを開始するために提供された[能力](/ja/docs/Web/WebDriver/Reference/Capabilities)が一致しなかったためです。                                                                  |
| [stale element reference](/ja/docs/Web/WebDriver/Reference/Errors/StaleElementReference)     | {{HTTPStatus(404, "404 Not Found")}}             | 参照されている[要素](/ja/docs/Web/WebDriver/Reference/WebElement)が DOM に接続されなくなったため、[コマンド](/ja/docs/Web/WebDriver/Reference/Commands)の実行に失敗しました。                                                                                        |
| [timeout](/ja/docs/Web/WebDriver/Reference/Errors/Timeout)                                   | {{HTTPStatus(408, "408 Request Timeout")}}       | 操作がタイムアウト期限前に完了しませんでした。                                                                                                                                                                                                                       |
| [unable to set cookie](/ja/docs/Web/WebDriver/Reference/Errors/UnableToSetCookie)            | {{HTTPStatus(500, "500 Internal Server Error")}} | クッキーの値を設定する[コマンド](/ja/docs/Web/WebDriver/Reference/Commands)が実行できませんでした。                                                                                                                                                                  |
| [unable to capture screen](/ja/docs/Web/WebDriver/Reference/Errors/UnableToCaptureScreen)    | {{HTTPStatus(500, "500 Internal Server Error")}} | スクリーンキャプチャができなくなりました。                                                                                                                                                                                                                           |
| [unexpected alert open](/ja/docs/Web/WebDriver/Reference/Errors/UnexpectedAlertOpen)         | {{HTTPStatus(500, "500 Internal Server Error")}} | この操作をブロックするモーダルダイアログが開かれました。                                                                                                                                                                                                             |
| [unknown command](/ja/docs/Web/WebDriver/Reference/Errors/UnknownCommand)                    | {{HTTPStatus(404, "404 Not Found")}}             | [コマンド](/ja/docs/Web/WebDriver/Reference/Commands)が、ドライバーが認識していないため実行できませんでした。                                                                                                                                                        |
| [unknown error](/ja/docs/Web/WebDriver/Reference/Errors/UnknownError)                        | {{HTTPStatus(500, "500 Internal Server Error")}} | ドライバーが[コマンド](/ja/docs/Web/WebDriver/Reference/Commands)を処理中に、予期せぬエラーが発生しました。                                                                                                                                                          |
| [unknown method](/ja/docs/Web/WebDriver/Reference/Errors/UnknownMethod)                      | {{HTTPStatus(405, "405 Method Not Allowed")}}    | リクエストされた[コマンド](/ja/docs/Web/WebDriver/Reference/Commands)は既知の URL と一致しましたが、その URL に対するメソッドとは一致しませんでした。                                                                                                                |
| [unsupported operation](/ja/docs/Web/WebDriver/Reference/Errors/UnsupportedOperation)        | {{HTTPStatus(500, "500 Internal Server Error")}} | 何らかの理由により、正常に実行されるべきであった[コマンド](/ja/docs/Web/WebDriver/Reference/Commands)に対応できないことを示します。                                                                                                                                  |

## 関連情報

- [WebDriver レスポンス](/ja/docs/Web/WebDriver/Reference/Response)
- [WebDriver コマンド](/ja/docs/Web/WebDriver/Reference/Commands)
