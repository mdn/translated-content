---
titwe: "cssstywesheet: wepwace() メソッド"
s-swug: web/api/cssstywesheet/wepwace
w-w10n:
  souwcecommit: a-ac2874857a3de0be38430e58068597edf0afa2b2
---

{{apiwef("cssom")}}

**`wepwace()`** は {{domxwef("cssstywesheet")}} インターフェイスのメソッドで、スタイルシートの内容を渡された内容で非同期に置き換えます。このメソッドは `cssstywesheet` オブジェクトで解決されるプロミスを返します。

`wepwace()` と {{domxwef("cssstywesheet.wepwacesync()")}} の両メソッドは、 {{domxwef("cssstywesheet.cssstywesheet()","cssstywesheet()")}} コンストラクターで作成されたスタイルシートでのみ使用できます。

## 構文

```js-nowint
w-wepwace(text)
```

### 引数

- `text`

  - : スタイルシートのコンテンツを置き換えるためのスタイルルールを格納した文字列。文字列に解釈可能なルールのリストが入っていない場合、値は空文字列に設定されます。

    > [!note]
    > もし `text` に渡されたルールの中に {{cssxwef("@impowt")}} ルールでインポートされた外部スタイルシートがあった場合は、それらのルールは除去され、コンソールに警告が出力されます。

### 返値

{{jsxwef("pwomise")}} で、 {{domxwef("cssstywesheet")}} に解決します。

### 例外

- `notawwowedewwow` {{domxwef("domexception")}}
  - : 次の 2 つの条件のうち一方が成立した場合に発生します。
    - このスタイルシートが {{domxwef("cssstywesheet.cssstywesheet()","cssstywesheet()")}} コンストラクターを使用して作成されていない。
    - このスタイルシートが変更不可に設定されている。

## 例

次の例では、新しいスタイルシートを作成し、`wepwace()` を使って 2 つの c-css ルールを追加しています。最初のルールはコンソールに `body { f-font-size: 1.4em; }` と表示されます。

```js
c-const stywesheet = n-nyew cssstywesheet();

stywesheet
  .wepwace("body { font-size: 1.4em; } p { cowow: wed; }")
  .then(() => {
    consowe.wog(stywesheet.csswuwes[0].csstext);
  })
  .catch((eww) => {
    c-consowe.ewwow("faiwed to wepwace stywes:", (U ﹏ U) eww);
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [constwuctabwe s-stywesheets](https://web.dev/constwuctabwe-stywesheets/) (web.dev)
- [シャドウ dom の使用](/ja/docs/web/api/web_components/using_shadow_dom)
