---
title: CSS.registerProperty()
slug: Web/API/CSS/registerProperty_static
---

{{APIRef("CSSOM")}}

**`CSS.registerProperty()`** メソッドは{{cssxref('--*', 'カスタムプロパティ')}}を登録し、プロパティ型のチェック、既定値、値の継承の有無の指定を行うことができます。

カスタムプロパティを登録すると、許される型は何か、その値を継承するかどうか、既定値は何かといったカスタムプロパティの動作ををブラウザーに指示することができます。

## 構文

```js-nolint
CSS.registerProperty(PropertyDefinition)
```

### 引数

次のメンバーを設定することができる `PropertyDefinition` 辞書オブジェクトです。

- `name`
  - : 定義するプロパティの名前を示す文字列です。
- `syntax` {{optional_inline}}
  - : 定義されたプロパティの期待される構文を表す文字列です。 既定値は `"*"` です。
- `inherits`
  - : 定義されたプロパティを継承するか (`true`)、否か (`false`) を定義する論理値。 既定値は `false` です。
- `initialValue` {{optional_inline}}
  - : 定義されたプロパティの初期値を表す文字列です。

### 返値

`undefined` です。

### 例外

- `InvalidModificationError` {{domxref("DOMException")}}
  - : 指定された `name` がすでに登録されている場合。
- `SyntaxError` {{domxref("DOMException")}}
  - : 指定された `name` が（`--foo` のように、 2 つのダッシュで始まる）有効なカスタムプロパティ名ではない場合。
- {{jsxref("TypeError")}}
  - : 必須の辞書メンバーの `name` または `inherits`、あるいはその両方が指定されていない場合。

## 例

次の例では、{{cssxref('--*', 'カスタムプロパティ')}}の `--my-color` を、 `registerProperty()` を使用して色として登録し、既定値を指定して、その値を継承しないようにします。

```js
window.CSS.registerProperty({
  name: "--my-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

この例では、カスタムプロパティ `--my-color` が構文 `<color>` を使用して登録されます。 これで、このプロパティを使用して、ポインターを当てたりフォーカスを与えたりするとグラデーションをトランジションで変化させることができます。 登録されたプロパティではトランジションが機能しますが、未登録のプロパティでは機能しないことに注意してください。

```css
.registered {
  --my-color: #c0ffee;
  background-image: linear-gradient(to right, #fff, var(--my-color));
  transition: --my-color 1s ease-in-out;
}

.registered:hover,
.registered:focus {
  --my-color: #b4d455;
}

.unregistered {
  --unregistered: #c0ffee;
  background-image: linear-gradient(to right, #fff, var(--unregistered));
  transition: --unregistered 1s ease-in-out;
}

.unregistered:hover,
.unregistered:focus {
  --unregistered: #b4d455;
}
button {
  font-size: 3vw;
}
```

これらのスタイルをいくつかのボタンに追加できます。

```html
<button class="registered">Background Registered</button>
<button class="unregistered">Background Not Registered</button>
```

{{EmbedLiveSample("Examples", 320, 320)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS プロパティと値 API の使用](/ja/docs/Web/API/CSS_Properties_and_Values_API/guide)
- {{DOMxRef("CSS")}}
- {{DOMxRef("CSS.supports_static")}}
- {{DOMxRef("CSS.escape_static")}}
- {{DOMxRef("CSS/factory_functions_static", 'CSS ファクトリー関数', '', 1)}}
