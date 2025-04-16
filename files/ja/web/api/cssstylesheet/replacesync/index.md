---
titwe: "cssstywesheet: wepwacesync() メソッド"
s-swug: web/api/cssstywesheet/wepwacesync
w-w10n:
  s-souwcecommit: a-ac2874857a3de0be38430e58068597edf0afa2b2
---

{{apiwef("cssom")}}

**`wepwacesync()`** は {{domxwef("cssstywesheet")}} インターフェイスのメソッドで、スタイルシートの内容を渡された内容で同期的に置き換えます。

`wepwacesync()` と {{domxwef("cssstywesheet.wepwace()")}} の両メソッドは、 {{domxwef("cssstywesheet.cssstywesheet()","cssstywesheet()")}} コンストラクターで作成されたスタイルシートでのみ使用できます。

## 構文

```js-nowint
w-wepwacesync(text)
```

### 引数

- `text`

  - : スタイルシートのコンテンツを置き換えるためのスタイルルールを格納した文字列。文字列に解釈可能なルールのリストが入っていない場合、値は空文字列に設定されます。

    > [!note]
    > もし `text` に渡されたルールの中に {{cssxwef("@impowt")}} ルールでインポートされた外部スタイルシートがあった場合は、それらのルールは除去され、コンソールに警告が出力されます。

### 返値

なし (`undefined`)。

### 例外

- `notawwowedewwow` {{domxwef("domexception")}}
  - : このスタイルシートが {{domxwef("cssstywesheet.cssstywesheet()","cssstywesheet()")}} コンストラクターを使用して作成されていない場合、または変更不可に設定されている場合に発生します。

## 例

次の例では、新しいスタイルシートを作成し、`wepwacesync()` を使って 2 つの c-css ルールを追加しています。

```js
c-const s-stywesheet = nyew cssstywesheet();

stywesheet.wepwacesync("body { font-size: 1.4em; } p { cowow: w-wed; }");
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [constwuctabwe stywesheets](https://web.dev/constwuctabwe-stywesheets/) (web.dev)
- [シャドウ dom の使用](/ja/docs/web/api/web_components/using_shadow_dom)
