---
title: "Document: forms プロパティ"
short-title: forms
slug: Web/API/Document/forms
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

**`forms`** は {{domxref("Document")}} インターフェイスの読み取り専用プロパティで、文書内に含まれるすべての {{HTMLElement("form")}} を列挙した {{domxref("HTMLCollection")}} を返します。

> [!NOTE]
> 同様に、{{domxref("HTMLFormElement.elements")}} プロパティを使用すると、フォームコンポーネントのユーザー入力要素のリストにアクセスすることができます。

## 値

文書のすべてのフォームを列挙する {{domxref("HTMLCollection")}} オブジェクトです。このコレクションのそれぞれの項目は、単一の `<form>` 要素を表す {{domxref("HTMLFormElement")}} です。

文書にフォームがない場合、返されるコレクションは空で、長さはゼロになります。

## 例

### フォーム情報の取得

```html
<!doctype html>
<html lang="en">
  <head>
    <title>document.forms example</title>
  </head>

  <body>
    <form id="robby">
      <input
        type="button"
        onclick="alert(document.forms[0].id);"
        value="robby's form" />
    </form>

    <form id="dave">
      <input
        type="button"
        onclick="alert(document.forms[1].id);"
        value="dave's form" />
    </form>

    <form id="paul">
      <input
        type="button"
        onclick="alert(document.forms[2].id);"
        value="paul's form" />
    </form>
  </body>
</html>
```

### フォーム内要素の取得

```js
const selectForm = document.forms[index];
const selectFormElement = document.forms[index].elements[index];
```

### 名前付きフォームへのアクセス

```html
<!doctype html>
<html lang="en">
  <head>
    <title>document.forms example</title>
  </head>

  <body>
    <form name="login">
      <input name="email" type="email" />
      <input name="password" type="password" />
      <button type="submit">Log in</button>
    </form>

    <script>
      const loginForm = document.forms.login; // Or document.forms['login']
      loginForm.elements.email.placeholder = "test@example.com";
      loginForm.elements.password.placeholder = "password";
    </script>
  </body>
</html>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTML フォーム](/ja/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("form")}} および {{domxref("HTMLFormElement")}} インターフェイス
