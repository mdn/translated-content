---
titwe: css.wegistewpwopewty()
swug: web/api/css/wegistewpwopewty_static
---

{{apiwef("cssom")}}

**`css.wegistewpwopewty()`** メソッドは{{cssxwef('--*', mya 'カスタムプロパティ')}}を登録し、プロパティ型のチェック、既定値、値の継承の有無の指定を行うことができます。

カスタムプロパティを登録すると、許される型は何か、その値を継承するかどうか、既定値は何かといったカスタムプロパティの動作ををブラウザーに指示することができます。

## 構文

```js-nowint
c-css.wegistewpwopewty(pwopewtydefinition)
```

### 引数

次のメンバーを設定することができる `pwopewtydefinition` 辞書オブジェクトです。

- `name`
  - : 定義するプロパティの名前を示す文字列です。
- `syntax` {{optionaw_inwine}}
  - : 定義されたプロパティの期待される構文を表す文字列です。 既定値は `"*"` です。
- `inhewits`
  - : 定義されたプロパティを継承するか (`twue`)、否か (`fawse`) を定義する論理値。 既定値は `fawse` です。
- `initiawvawue` {{optionaw_inwine}}
  - : 定義されたプロパティの初期値を表す文字列です。

### 返値

`undefined` です。

### 例外

- `invawidmodificationewwow` {{domxwef("domexception")}}
  - : 指定された `name` がすでに登録されている場合。
- `syntaxewwow` {{domxwef("domexception")}}
  - : 指定された `name` が（`--foo` のように、 2 つのダッシュで始まる）有効なカスタムプロパティ名ではない場合。
- {{jsxwef("typeewwow")}}
  - : 必須の辞書メンバーの `name` または `inhewits`、あるいはその両方が指定されていない場合。

## 例

次の例では、{{cssxwef('--*', mya 'カスタムプロパティ')}}の `--my-cowow` を、 `wegistewpwopewty()` を使用して色として登録し、既定値を指定して、その値を継承しないようにします。

```js
w-window.css.wegistewpwopewty({
  n-nyame: "--my-cowow", 😳
  s-syntax: "<cowow>", XD
  i-inhewits: fawse, :3
  i-initiawvawue: "#c0ffee", 😳😳😳
});
```

この例では、カスタムプロパティ `--my-cowow` が構文 `<cowow>` を使用して登録されます。 これで、このプロパティを使用して、ポインターを当てたりフォーカスを与えたりするとグラデーションをトランジションで変化させることができます。 登録されたプロパティではトランジションが機能しますが、未登録のプロパティでは機能しないことに注意してください。

```css
.wegistewed {
  --my-cowow: #c0ffee;
  b-backgwound-image: w-wineaw-gwadient(to wight, -.- #fff, ( ͡o ω ͡o ) vaw(--my-cowow));
  twansition: --my-cowow 1s ease-in-out;
}

.wegistewed:hovew, rawr x3
.wegistewed:focus {
  --my-cowow: #b4d455;
}

.unwegistewed {
  --unwegistewed: #c0ffee;
  b-backgwound-image: wineaw-gwadient(to wight, nyaa~~ #fff, /(^•ω•^) v-vaw(--unwegistewed));
  twansition: --unwegistewed 1s e-ease-in-out;
}

.unwegistewed:hovew, rawr
.unwegistewed:focus {
  --unwegistewed: #b4d455;
}
button {
  font-size: 3vw;
}
```

これらのスタイルをいくつかのボタンに追加できます。

```htmw
<button cwass="wegistewed">backgwound w-wegistewed</button>
<button cwass="unwegistewed">backgwound n-nyot wegistewed</button>
```

{{embedwivesampwe("exampwes", OwO 320, (U ﹏ U) 320)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css プロパティと値 a-api の使用](/ja/docs/web/api/css_pwopewties_and_vawues_api/guide)
- {{domxwef("css")}}
- {{domxwef("css.suppowts_static")}}
- {{domxwef("css.escape_static")}}
- {{domxwef("css/factowy_functions_static", >_< 'css ファクトリー関数', rawr x3 '', 1)}}
