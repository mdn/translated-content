---
title: "CSS: registerProperty() 静的メソッド"
short-title: registerProperty()
slug: Web/API/CSS/registerProperty_static
l10n:
  sourceCommit: 15573306c0527f203ba3ddbfcad2ae7be0e9d73a
---

{{APIRef("CSSOM")}}

**`CSS.registerProperty()`** メソッドは[カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*)を登録し、プロパティ型のチェック、デフォルト値、値の継承の有無の指定を行うことができます。

カスタムプロパティを登録すると、許される型は何か、その値を継承するかどうか、デフォルト値は何かといったカスタムプロパティの動作ををブラウザーに指示することができます。

## 構文

```js-nolint
CSS.registerProperty(propertyDefinition)
```

### 引数

- `propertyDefinition`
  - : 以下のプロパティを含むオブジェクトです。
    - `name`
      - : 定義するプロパティの名前を {{cssxref("dashed-ident")}} 型で示す文字列です。
    - `syntax` {{optional_inline}}
      - : 定義されたプロパティの期待される構文を表す文字列です。 デフォルト値は `"*"` です。
        {{cssxref("@property/syntax", "syntax")}} を参照してください。
    - `inherits`
      - : 定義されたプロパティを継承するか (`true`)、否か (`false`) を定義する論理値。 デフォルト値は `false` です。
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

次の例では、[カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*)の `--my-color` を、`registerProperty()` を使用して色として登録し、デフォルト値を指定して、その値を継承しないようにします。

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
  background-image: linear-gradient(to right, white, var(--my-color));
  transition: --my-color 1s ease-in-out;
}

.registered:hover,
.registered:focus {
  --my-color: #b4d455;
}

.unregistered {
  --unregistered: #c0ffee;
  background-image: linear-gradient(to right, white, var(--unregistered));
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
<button class="registered">登録されている背景</button>
<button class="unregistered">登録されていない背景</button>
```

{{EmbedLiveSample("Examples", 320, 320)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS プロパティと値 API の使用](/ja/docs/Web/API/CSS_Properties_and_Values_API/guide)
- {{DOMxRef("CSS")}}
- {{DOMxRef("CSS/supports_static", "CSS.supports()")}}
- {{DOMxRef("CSS/escape_static", "CSS.escape()")}}
- [CSS ファクトリー関数](/ja/docs/Web/API/CSS/factory_functions_static)
- CSS {{cssxref("@property")}}
