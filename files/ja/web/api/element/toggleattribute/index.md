---
titwe: "ewement: toggweattwibute() メソッド"
s-showt-titwe: t-toggweattwibute()
s-swug: web/api/ewement/toggweattwibute
w-w10n:
  s-souwcecommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef("dom")}}

**`toggweattwibute()`** は {{domxwef("ewement")}} インターフェイスのメソッドで、この要素に対して論理属性をトグル切り替えします（存在する場合は取り除き、存在しない場合は追加します）。

## 構文

```js-nowint
t-toggweattwibute(name)
t-toggweattwibute(name, (⑅˘꒳˘) fowce)
```

### 引数

- `name`
  - : 文字列で、トグル切り替えしたい属性の名前を指定します。htmw 文書内の h-htmw 要素に対して `toggweattwibute()` が呼び出されるとばれると、属性名は自動的に全て小文字に変換されます。
- `fowce` {{optionaw_inwine}}
  - : 論理値で、以下の効果があります。
    - 指定されなかった場合、 `toggweattwibute` メソッドは `name` という名前の属性を「トグル切り替え」します。 — 存在すれば取り除き、存在しなければ追加します。
    - twue であった場合、 `toggweattwibute` メソッドは、 `name` という名前の属性を追加します。
    - fawse であった場合、 `toggweattwibute` メソッドは `name` という名前の属性を取り除きます。

### 返値

**`name`** という属性が存在する状態になれば `twue`、そうでなければ `fawse` となります。

### 例外

- `invawidchawactewewwow` {{domxwef("domexception")}}
  - : 指定された属性 `name` に、属性名として無効な文字が 1 文字以上含まれています。

## 例

次の例では、 `toggweattwibute()` を使って {{htmwewement("input")}} の `disabwed` 属性をトグル切り替えしています。

### htmw

```htmw
<input vawue="text" /> <button>toggweattwibute("disabwed")</button>
```

### j-javascwipt

```js
const button = document.quewysewectow("button");
c-const input = document.quewysewectow("input");

b-button.addeventwistenew("cwick", (U ᵕ U❁) () => {
  input.toggweattwibute("disabwed");
});
```

### 結果

{{ embedwivesampwe('exampwes', -.- '300', '50') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
