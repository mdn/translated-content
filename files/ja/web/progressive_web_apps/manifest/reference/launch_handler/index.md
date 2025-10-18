---
title: launch_handler
slug: Web/Progressive_web_apps/Manifest/Reference/launch_handler
l10n:
  sourceCommit: c60eaa2dd90fefcaaafdaca69f3185b46d399d8b
---

{{SeeCompatTable}}

`launch_handler` メンバーは、ウェブアプリケーションの起動を制御する値を定義します。現時点では、このメンバーには単一の値 `client_mode` しか設定できません。この値は、アプリケーションが起動された際に読み込むべきコンテキストを指定します。例えば、アプリケーションのインスタンスを含む既存のウェブアプリケーションクライアントであったり、または新しいウェブアプリケーションクライアントであったりです。これにより、将来的に `launch_handler` の値をさらに定義できる余地が残されています。

### 値

`launch_handler` オブジェクトは次の値を持つことができます。

- `client_mode` {{experimental_inline}}
  - : 文字列、またはカンマで区切られた文字列の配列で、アプリケーションが起動された際に読み込まれるコンテキストを指定します。文字列の配列が指定された場合、最初の有効な値が使用されます。
    利用可能な値は次の通りです。
    - `auto`
      - : プラットフォームがアプリを読み込む際に、どのコンテキストが適切であるかを判断するのはユーザーエージェントです。例えば、単一のアプリインスタンスが一般的であるモバイルでは、 `navigate-existing` の方が適切である可能性が高いのに対し、デスクトップでは `navigate-new` の方が適切である可能性が高いでしょう。これは、提供された値がすべて不正な場合に用いられる既定値です。
    - `focus-existing`
      - : アプリがすでにウェブアプリクライアントに読み込まれている場合、フォーカスは当たるものの、起動対象の URL には移動しません。 対象とする URL は、 {{domxref("Window.launchQueue")}} を介して利用できるため、カスタム起動のナビゲーション処理を実装することができます。 アプリがウェブアプリクライアントに読み込まれていない場合、代わりに `navigate-new` の動作が使用されます。
    - `navigate-existing`
      - : アプリがすでにウェブアプリクライアントに読み込まれている場合、そのアプリがフォーカスされ、指定した起動ターゲット URL に移動します。 対象とする URL は、 {{domxref("Window.launchQueue")}} を介して利用できるため、追加のカスタム起動ナビゲーション処理を実装することができます。 アプリがウェブアプリクライアントに読み込まれていない場合、代わりに `navigate-new` の動作が使用されます。
    - `navigate-new`
      - : このアプリは新しいウェブアプリクライアントに読み込まれました。対象とする URL は、 {{domxref("Window.launchQueue")}} を介して利用でき、追加のカスタム起動ナビゲーション処理を実装できるようになっています。

## 例

```json
"launch_handler": {
    "client_mode": "focus-existing"
}

"launch_handler": {
    "client_mode": ["focus-existing", "auto"]
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Launch Handler API: Control how your app is launched](https://developer.chrome.com/docs/web-platform/launch-handler/)
- {{domxref("Window.launchQueue")}}
- [Musicr 2.0](https://mdn.github.io/dom-examples/launch-handler/) デモアプリ
