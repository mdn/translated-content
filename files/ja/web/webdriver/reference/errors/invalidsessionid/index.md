---
title: "`invalid session id` エラーコード"
short-title: invalid session id
slug: Web/WebDriver/Reference/Errors/InvalidSessionID
l10n:
  sourceCommit: d4ed0cee8e7185c5180743e5141096e117b5fa76
---

**invalid session ID** エラーは、サーバーが一意なセッション識別子を認識できない場合に発生する [WebDriver のエラー](/ja/docs/Web/WebDriver/Reference/Errors)です。[セッションが削除された](/ja/docs/Web/WebDriver/Reference/Commands/DeleteSession)場合や、セッション ID が無効な場合に発生します。

## 例

### 明示的なセッション削除

WebDriver セッションは、終了すると明示的に削除されます。

```python
from selenium import webdriver
from selenium.common import exceptions

session = webdriver.Firefox()
print("Current session is {}".format(session.session_id))
session.quit()

try:
    session.get("https://mozilla.org")
except exceptions.InvalidSessionIdException as e:
    print(e.message)
```

出力:

```plain
Current session is 46197c16-8373-469b-bc56-4c4d9e4132b4
No active session with ID 46197c16-8373-469b-bc56-4c4d9e4132b4
```

### 暗黙的なセッション削除

最後のウィンドウまたはタブを閉じると、セッションが_暗黙的に削除される_場合もあります。

```python
from selenium import webdriver
from selenium.common import exceptions

session = webdriver.Firefox()
print("Current session is {}".format(session.session_id))

# 現在のウィンドウ/タブを閉じる
session.close()

try:
    session.get("https://mozilla.org")
except exceptions.InvalidSessionIdException as e:
    print(e.message)
```

出力:

```plain
Current session is 46197c16-8373-469b-bc56-4c4d9e4132b4
No active session with ID 46197c16-8373-469b-bc56-4c4d9e4132b4
```

## 関連情報

- [WebDriver エラー一覧](/ja/docs/Web/WebDriver/Reference/Errors)
- [Session not created](/ja/docs/Web/WebDriver/Reference/Errors/SessionNotCreated)
- 関連する WebDriver コマンド:
  - [New Session](/ja/docs/Web/WebDriver/Reference/Classic/Commands/NewSession)
  - [Delete Session](/ja/docs/Web/WebDriver/Reference/Classic/Commands/DeleteSession)
