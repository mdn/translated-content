---
title: aria-invalid 属性の使用
slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-invalid_attribute
tags:
  - ARIA
  - Accessibility
  - Attribute
  - CodingScripting
  - HTML
  - JavaScript
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-invalid_attribute
---
### 説明

このテクニックは、[`aria-invalid`](http://www.w3.org/TR/wai-aria/#aria-invalid) 属性を使用する方法を示しています。

`aria-invalid` 属性は、入力フィールドに入力された値がアプリケーションが予期している形式に準拠していないことを示すために使用されます。 これには、電子メールアドレスや電話番号などの形式が含まれます。 `aria-invalid` は、必須フィールドが入力されていないことを示すためにも使用できます。 属性は、検証処理の結果としてプログラムで設定する必要があります。

この属性は、一般的な HTML フォーム要素で使用できます。 ARIA の `role` が割り当てられている要素に限定されるものではありません。

### 値

語彙:

- `false`
  - : （デフォルト）エラーは検出されませんでした。
- `grammar`
  - : 文法上の誤りが検出されました。
- `spelling`
  - : スペルミスが検出されました。
- `true`
  - : 値は検証に失敗しました。

この語彙に含まれていない値はすべて `true` として扱われるべきです。

### ユーザーエージェントと支援技術への影響

ユーザーエージェントは、フィールドが無効であるときにユーザーに通知するべきです。 アプリケーション作成者は、可能であれば、問題を修正するための提案を提供するするべきです。 作成者は、フォームが送信されるのを防ぐことができます。

> **Note:** 注: 支援技術がこの手法をどのように扱うべきかについての意見は異なる場合があります。 上記の情報は、これらの意見の 1 つで、したがって規範的ではありません。

### 例

#### 例 1: 簡単なフォーム検証

次のスニペットでは、2 つのフォームフィールドの簡略化されたバージョンを示し、検証関数は blur イベントに関連付けられています。 `aria-required` のデフォルト値は `false` なので、`input` に属性を追加することは厳密には必要ではないことに注意してください。

```html
 <input name="name" id="name" aria-required="true" aria-invalid="false"
        onblur="checkValidity('name', ' ', '無効な名前が入力されました（名と姓が必要です）');"/>
 <br />
 <input name="email" id="email" aria-required="true" aria-invalid="false"
         onblur="checkValidity('email', '@', '無効な電子メールアドレスです');"/>
```

blur ですぐにフィールドを検証する必要はありません。 アプリケーションはフォームが送信されるまで待つことができます（これは必ずしも推奨されません）。

以下のスニペットは、特定の文字の存在をチェックする非常に簡単な検証関数を示しています（現実世界では、検証はより複雑になるでしょう）。

```js
function checkValidity(aID, aSearchTerm, aMsg){
    var elem = document.getElementById(aID);
    var invalid = (elem.value.indexOf(aSearchTerm) < 0);
    if (invalid) {
        elem.setAttribute("aria-invalid", "true");
        updateAlert(aMsg);
    } else {
        elem.setAttribute("aria-invalid", "false");
        updateAlert();
    }
}
```

以下のスニペットは、エラーメッセージを追加（または削除）するアラート関数を示しています。

```js
function updateAlert(msg) {
    var oldAlert = document.getElementById("alert");
    if (oldAlert) {
        document.body.removeChild(oldAlert);
    }

    if (msg) {
       var newAlert = document.createElement("div");
        newAlert.setAttribute("role", "alert");
        newAlert.setAttribute("id", "alert");
        var content = document.createTextNode(msg);
        newAlert.appendChild(content);
        document.body.appendChild(newAlert);
    }
}
```

アラートには、ARIA の [`role` 属性が `"alert"` に設定](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alert_role "Using the alert role")されていることに注意してください。

#### 動作する例

[正しくない形式の値を強調するために aria-invalid を使ったフォームの例](https://www.w3.org/WAI/WCAG21/working-examples/aria-invalid-data-format/)

### 注

- `aria-invalid` 属性を `aria-required` 属性と組み合わせて使用する場合、フォームが送信される前に `aria-invalid` を `true` に設定する**べきではありません** — 検証に応答する場合だけです。
- 将来の拡張では、この属性に使用される語彙に用語を追加することができます。 現行の語彙にない値はすべて `true` として扱われるべきです。

### ARIA ロールで使用

ベースマークアップのすべての要素

### 関連する ARIA 技術

- [aria-required 属性の使用](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-required_attribute "Using the aria-required property")
- [alert ロールの使用](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alert_role "Using the alert role")

### 互換性

TBD: 一般的な UA と AT 製品の組み合わせに関するサポート情報を追加する

### その他のリソース

- [aria-invalid の WAI-ARIA 仕様](https://www.w3.org/TR/wai-aria-1.1/#aria-invalid)（英語）
- [フォームの WAI-ARIA オーサリングプラクティス](https://www.w3.org/TR/wai-aria-practices/#aria_lh_form)（英語）
