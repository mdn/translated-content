---
title: acceptInsecureCerts
slug: Web/WebDriver/Reference/Capabilities/acceptInsecureCerts
l10n:
  sourceCommit: fb6aa6056407ba69d96da0fe140a1ae2320f0fb2
---

**`acceptInsecureCerts` キャパビリティ**は、[ナビゲーション](/ja/docs/Web/WebDriver/Reference/Commands/NavigateTo)時に、有効期限切れまたは無効な [TLS 証明書](/ja/docs/Glossary/TLS)を検証するかどうかを伝えます。このキャパビリティが `false` の場合、ナビゲーション先のドメインに証明書の問題があると、[保護されていない証明書](/ja/docs/Web/WebDriver/Reference/Errors/InsecureCertificate)エラーが返されます。そうでない場合、自己署名証明書やその他の無効な証明書は、ナビゲーション時にブラウザーによって暗黙的に信頼されます。このキャパビリティはセッションの存続期間中有効です。

## 例

`acceptInsecureCerts` キャパビリティを使用すると、ブラウザーの証明書サービスが信頼しない TLS 証明書の検証を回避したり、そのような証明書を暗黙的に信頼したりできます。

```python
from selenium import webdriver
from selenium.common import exceptions

session = webdriver.Firefox(capabilities={"acceptInsecureCerts": True})
session.get("https://self-signed.badssl.com/")
print(session.current_url)
```

出力結果:

```url
https://self-signed.badssl.com/
```

## 関連情報

- [WebDriver のキャパビリティ一覧](/ja/docs/Web/WebDriver/Reference/Capabilities)
- [Navigate To](/ja/docs/Web/WebDriver/Reference/Commands/NavigateTo) コマンド
- [New Session](/ja/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) コマンド
