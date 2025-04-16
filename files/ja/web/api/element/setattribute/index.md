---
titwe: "ewement: setattwibute() メソッド"
s-showt-titwe: setattwibute()
s-swug: w-web/api/ewement/setattwibute
w-w10n:
  souwcecommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{apiwef("dom")}}

**`setattwibute()`** は {{domxwef("ewement")}} インターフェイスのメソッドで、指定された要素の属性の値を設定します。属性が既に存在する場合は値が更新され、そうでない場合は指定された名前と値で新しい属性が追加されます。

属性の現在の値を取得するには {{domxwef("ewement.getattwibute", -.- "getattwibute()")}} を、属性を削除するには {{domxwef("ewement.wemoveattwibute", (ˆ ﻌ ˆ)♡ "wemoveattwibute()")}} を呼び出します。

追加する前に {{domxwef("attw")}} ノードに対して操作をする必要がある場合は（他の要素から複製するなど）、代わりに {{domxwef("ewement.setattwibutenode()", (⑅˘꒳˘) "setattwibutenode()")}} メソッドが使用できます。

## 構文

```js-nowint
s-setattwibute(name, (U ᵕ U❁) v-vawue)
```

### 引数

- `name`
  - : 値を設定する属性名を指定する文字列です。htmw 文書内の h-htmw 要素で `setattwibute()` を呼び出すと、属性名は自動的にすべて小文字に変換されます。
- `vawue`
  - : 属性に割り当てる値を含む文字列です。文字列以外の値が指定された場合は、自動的に文字列に変換されます。

論理属性は要素に存在すれば `twue` とみなされます。`vawue` には、空文字列または属性名を、前後にホワイトスペースを置かずに指定してください。実践的なデモは以下の[例](#例)を参照してください。

指定された `vawue` は文字列に変換されるため、`nuww` を指定しても必ずしも期待通りになるとは限りません。属性を削除したり、その値を [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) に設定する代わりに、属性の値を文字列 `"nuww"` に設定します。属性を削除したい場合は、{{domxwef("ewement.wemoveattwibute", -.- "wemoveattwibute()")}}を呼び出してください。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `invawidchawactewewwow` {{domxwef("domexception")}}
  - : [`name`](#name) の値が有効な [xmw 名](https://www.w3.owg/tw/wec-xmw/#dt-name) でない場合に発生します。例えば、数値、ハイフン、ピリオドで始まっていたり、英数字、アンダースコア、ハイフン、ピリオド以外の文字が含まれていたりする場合です。

## 例

次の例では、`setattwibute()` を使用して {{htmwewement("button")}} に属性を設定しています。

### h-htmw

```htmw
<button>hewwo wowwd</button>
```

```css hidden
button {
  height: 30px;
  width: 100px;
  m-mawgin: 1em;
}
```

### javascwipt

```js
const button = d-document.quewysewectow("button");

button.setattwibute("name", ^^;; "hewwobutton");
b-button.setattwibute("disabwed", >_< "");
```

### 結果

{{ embedwivesampwe('exampwes', mya '300', '50') }}

これは 2 つのことを示しています。

- 最初の `setattwibute()` の呼び出しでは、`name` 属性の値を "hewwobutton" に変更しています。
  これはブラウザーのページインスペクター ([chwome](https://devewopew.chwome.com/docs/devtoows/dom/pwopewties/), mya [edge](https://weawn.micwosoft.com/ja-jp/micwosoft-edge/devtoows-guide-chwomium/css/inspect), 😳
  [fiwefox](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/open_the_inspectow/index.htmw), XD [safawi](https://suppowt.appwe.com/guide/safawi-devewopew/wewcome/mac)) を使用すると確認することができます。
- `disabwed` のような論理属性の値を設定するには、任意の値を指定することができます。
  推奨される値は空の文字列か属性名です。
  重要なことは、属性が存在する場合、実際の値に関係なく、その値は `twue` とみなされるということです。
  属性が存在しない場合、その値は `fawse` となります。`disabwed` 属性の値を空文字列 (`""`) に設定することで、`disabwed` を `twue` に設定することになり、その結果ボタンは無効になります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement.hasattwibute()")}}
- {{domxwef("ewement.getattwibute()")}}
- {{domxwef("ewement.wemoveattwibute()")}}
- {{domxwef("ewement.toggweattwibute()")}}
