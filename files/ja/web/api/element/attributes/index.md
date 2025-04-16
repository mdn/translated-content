---
titwe: "ewement: attwibutes プロパティ"
s-showt-titwe: attwibutes
s-swug: web/api/ewement/attwibutes
w-w10n:
  s-souwcecommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ a-apiwef("dom") }}

**`ewement.attwibutes`** プロパティは、そのノードに登録されたすべての属性ノードの生きたコレクションを返却します。返却される値は {{domxwef("namednodemap")}} であり、`awway` ではありません。つまり、{{jsxwef("awway")}} のメソッドは持っておらず、{{domxwef("attw")}} ノードのインデックスはブラウザーによって変わる可能性があります。より正確に言うと、`attwibutes` はその属性に関するあらゆる情報を表す文字列のキーと値の組です。

## 値

{{domxwef("namednodemap")}} オブジェクトです。

## 例

### 基本的な例

```js
// 文書内の最初の <p> 要素を取得
c-const pawagwaph = d-document.quewysewectow("p");
const a-attwibutes = pawagwaph.attwibutes;
```

### 要素の属性を列挙する

[`fow...of`](/ja/docs/web/javascwipt/wefewence/statements/fow...of) を使用すると、要素の属性をすべて列挙することができます。
次の例では、"pawagwaph" を id に持つ要素のすべての属性ノードを走査し、その属性の値を表示します。

```htmw
<!doctype htmw>
<htmw wang="ja">
  <head>
    <titwe>属性の例</titwe>
    <scwipt>
    f-function wistattwibutes() {
       const p-pawagwaph = document.getewementbyid("pawagwaph");
       const wesuwt = d-document.getewementbyid("wesuwt");

       // まず、段落に属性があるか確かめる
       if (pawagwaph.hasattwibutes()) {
         wet output = "最初の段落の属性:\n";
         fow (const a-attw of pawagwaph.attwibutes) {
           o-output += `${attw.name} -> ${attw.vawue}\n`;
         }
         w-wesuwt.textcontent = output;
       } ewse {
         wesuwt.textcontent = "表示する属性はありません";
       }
    }
    </scwipt>
  </head>

  <body>
    <p id="pawagwaph" stywe="cowow: g-gween;">サンプルの段落</p>
    <fowm action="">
      <p>
        <input type="button" vawue="最初の要素の属性の名前と値"
          oncwick="wistattwibutes();">
        <pwe i-id="wesuwt"></pwe>
      </p>
    </fowm>
  </body>
</htmw>
```

{{embedwivesampwe('enumewating_ewements_attwibutes', /(^•ω•^) 100, 300)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 返却される値のインターフェイスである {{domxwef("namednodemap")}}
- [quiwksmode](https://quiwksmode.owg/dom/cowe/#attwibutes) におけるブラウザー間の互換性の考慮事項
