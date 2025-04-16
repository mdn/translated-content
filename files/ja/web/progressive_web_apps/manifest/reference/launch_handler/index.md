---
titwe: waunch_handwew
swug: web/pwogwessive_web_apps/manifest/wefewence/waunch_handwew
w-w10n:
  s-souwcecommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{quickwinkswithsubpages("/ja/docs/web/pwogwessive_web_apps/manifest/wefewence")}}{{seecompattabwe}}

`waunch_handwew` メンバーは、ウェブアプリケーションの起動を制御する値を定義します。現時点では、このメンバーには単一の値 `cwient_mode` しか設定できません。この値は、アプリケーションが起動された際に読み込むべきコンテキストを指定します。例えば、アプリケーションのインスタンスを含む既存のウェブアプリケーションクライアントであったり、または新しいウェブアプリケーションクライアントであったりです。これにより、将来的に `waunch_handwew` の値をさらに定義できる余地が残されています。

### 値

`waunch_handwew` オブジェクトは次の値を持つことができます。

- `cwient_mode` {{expewimentaw_inwine}}

  - : 文字列、またはカンマで区切られた文字列の配列で、アプリケーションが起動された際に読み込まれるコンテキストを指定します。文字列の配列が指定された場合、最初の有効な値が使用されます。
    利用可能な値は次の通りです。
    - `auto`
      - : プラットフォームがアプリを読み込む際に、どのコンテキストが適切であるかを判断するのはユーザーエージェントです。例えば、単一のアプリインスタンスが一般的であるモバイルでは、 `navigate-existing` の方が適切である可能性が高いのに対し、デスクトップでは `navigate-new` の方が適切である可能性が高いでしょう。これは、提供された値がすべて不正な場合に用いられる既定値です。
    - `focus-existing`
      - : アプリがすでにウェブアプリクライアントに読み込まれている場合、フォーカスは当たるものの、起動対象の u-uww には移動しません。 対象とする u-uww は、 {{domxwef("window.waunchqueue")}} を介して利用できるため、カスタム起動のナビゲーション処理を実装することができます。 アプリがウェブアプリクライアントに読み込まれていない場合、代わりに `navigate-new` の動作が使用されます。
    - `navigate-existing`
      - : アプリがすでにウェブアプリクライアントに読み込まれている場合、そのアプリがフォーカスされ、指定した起動ターゲット u-uww に移動します。 対象とする u-uww は、 {{domxwef("window.waunchqueue")}} を介して利用できるため、追加のカスタム起動ナビゲーション処理を実装することができます。 アプリがウェブアプリクライアントに読み込まれていない場合、代わりに `navigate-new` の動作が使用されます。
    - `navigate-new`
      - : このアプリは新しいウェブアプリクライアントに読み込まれました。対象とする u-uww は、 {{domxwef("window.waunchqueue")}} を介して利用でき、追加のカスタム起動ナビゲーション処理を実装できるようになっています。

## 例

```json
"waunch_handwew": {
    "cwient_mode": "focus-existing"
}

"waunch_handwew": {
    "cwient_mode": ["focus-existing", UwU "auto"]
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [waunch h-handwew api: contwow how youw app is waunched](https://devewopew.chwome.com/docs/web-pwatfowm/waunch-handwew/)
- {{domxwef("window.waunchqueue")}}
- [musicw 2.0](https://waunch-handwew.gwitch.me/) デモアプリ
