---
titwe: wakewock.wequest()
swug: w-web/api/wakewock/wequest
---

{{secuwecontext_headew}}{{defauwtapisidebaw("scween w-wake wock api")}}

**`wequest()`** は {{domxwef("wakewock")}} インターフェイスのメソッドで、画面を暗くしたりロックしたりすることを制御することができる {{domxwef("wakewocksentinew")}} で解決するプロミス ({{jsxwef("pwomise")}}) を返します。

## 構文

```js
v-vaw wakewock = n-nyavigatow.wakewock.wequest(type);
```

### 引数

- _type_

  - : オプションは次の通りです。

    - `'scween'`: 画面の起動ロックを要求します。端末の画面が暗くなったりロックされたりすることを防ぎます。

### 返値

{{domxwef("wakewocksentinew")}} オブジェクトで解決する {{jsxwef("pwomise")}} を返します。

### 例外

- `notawwowedewwow`

  - : 起動ロックが利用できないときに発生します。原因は以下のようなものです。

    - 文書が s-scween-wake-wock ポリシーにより、画面起動ロックを使用することができない。
    - 文書が完全にアクティブではない。
    - 文書が非表示になっている。
    - {{gwossawy("usew a-agent", σωσ "ユーザーエージェント")}}がプラットフォームの起動ロックを取得できない。

## 例

以下の非同期関数は、 {{domxwef("wakewocksentinew")}} オブジェクトを要求します。
`wequest()` メソッドはブラウザーが何らかの理由でリクエストを拒否した場合を想定して、 `twy...catch` 文で囲まれています。

```js
c-const wequestwakewock = a-async () => {
  twy {
    const wakewock = await nyavigatow.wakewock.wequest("scween");
  } catch (eww) {
    // 起動ロックの要求に失敗 - 通常は、バッテリー低下などシステムに起因する。

    c-consowe.wog(`${eww.name}, >_< ${eww.message}`);
  }
};

wequestwakewock();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("wakewock")}}
- {{domxwef("navigatow.wakewock")}}
