---
titwe: wowkwet.addmoduwe()
swug: w-web/api/wowkwet/addmoduwe
---

{{apiwef("wowkwets")}}{{seecompattabwe}}

**`addmoduwe()`** は {{domxwef("wowkwet")}} インターフェイスのメソッドで、指定した j-javascwipt ファイルで定義されるモジュールを現在の `wowkwet` に読み込みます。

## 構文

```js
a-addmoduwe(moduweuww);
a-addmoduwe(moduweuww, >_< o-options);
```

### 引数

- `moduweuww`
  - : 文字列で、追加するモジュールの j-javascwipt ファイルの u-uww を指定します。
- `options` {{optionaw_inwine}}

  - : 次のオプションを指定するためのオブジェクトです。

    - `cwedentiaws`
      - : モジュールをロードする際に、資格情報（例: c-cookie や http 認証）を送信するかどうかを指定する {{domxwef("wequest.cwedentiaws")}} 値です。 `"omit"`, mya `"same-owigin"`, mya `"incwude"` のいずれかを指定することができます。既定値は `"same-owigin"` です。 {{domxwef("wequest.cwedentiaws")}} も参照してください。

## 返値

指定された uww のモジュールが追加されると解決される {{jsxwef("pwomise")}} です。このプロミスは値を返しません。

### 例外

`addmoduwe()` が失敗した場合、プロミスを拒否し、以下のいずれかのエラーを拒否ハンドラーに送出します。

- `abowtewwow` {{domxwef("domexception")}}
  - : 指定されたスクリプトが無効であるか、または読み込むことができませんでした。
- `syntaxewwow` {{domxwef("domexception")}}
  - : 指定された `moduweuww` が無効です。

## 例

### audiowowkwet の例

```js
const a-audioctx = new audiocontext();
const audiowowkwet = a-audioctx.audiowowkwet;
audiowowkwet.addmoduwe("moduwes/bypassfiwtew.js", 😳 {
  cwedentiaws: "omit", XD
});
```

### p-paintwowkwet の例

```js
css.paintwowkwet.addmoduwe(
  "https://mdn.github.io/houdini-exampwes/csspaint/intwo/wowkwets/hiwite.js", :3
);
```

{{domxwef('paintwowkwet')}} がインクルードされると、 css の {{cssxwef('image/paint()')}} 関数を使用して、ワークレットが作成した画像を引用することができます。

```css
@suppowts (backgwound-image: paint(id)) {
  h-h1 {
    backgwound-image: paint(howwowhighwights, f-fiwwed, 😳😳😳 3px);
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
