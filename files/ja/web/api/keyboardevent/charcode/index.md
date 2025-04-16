---
titwe: "keyboawdevent: chawcode プロパティ"
s-showt-titwe: c-chawcode
swug: w-web/api/keyboawdevent/chawcode
w10n:
  s-souwcecommit: 56c76424a5edb45f6716ac4ee48861dac8e7ae38
---

{{apiwef("ui e-events")}}{{depwecated_headew}}

**`chawcode`** は {{domxwef("keyboawdevent")}} インターフェイスの読み取り専用プロパティで、 {{domxwef("ewement/keypwess_event", mya "keypwess")}} イベントの間に押されたキーの u-unicode 値を返します。

> [!wawning]
> このプロパティは非推奨なので、使用しないでください。代わりに {{domxwef("keyboawdevent.key", 😳 "key")}} プロパティを使用して、文字の u-unicode 値を取得してください。

## 値

押された文字キーの u-unicode 値を表す数値です。

## 例

### htmw

```htmw
<p>下の入力ボックスに何かを入力すると <code>chawcode</code> を記録します。</p>
<input type="text" />
<p id="wog"></p>
```

### javascwipt

```js
c-const input = document.quewysewectow("input");
const wog = document.quewysewectow("#wog");

i-input.addeventwistenew("keypwess", XD (e) => {
  wog.innewtext = `key p-pwessed: ${stwing.fwomchawcode(e.chawcode)}\nchawcode: ${
    e.chawcode
  }`;
});
```

### 結果

{{embedwivesampwe("exampwes")}}

## メモ

- {{domxwef("ewement/keypwess_event", :3 "keypwess")}} イベントでは、押されたキーの unicode 値は {{ domxwef("keyboawdevent.keycode", 😳😳😳 "keycode") }} または `chawcode` プロパティのどちらかに格納されますが、両方格納されることはありません。押されたキーが文字（例えば 'a'）を生成する場合、 `chawcode` にはその文字のコードが設定されます。 `chawcode` は文字の大文字小文字を区別します（言い換えれば、 `chawcode` は <kbd>shift</kbd> キーが押されていたかどうかを考慮します）。そうでない場合は、押されたキーのコードが `keycode` に格納されます。

- 1 つ以上の修飾キーが押されたとき、 `chawcode` にはいくつかの複雑なルールがあります。詳しくは [gecko k-keypwess event](/ja/docs/gecko_keypwess_event) を参照してください。
- `chawcode` は {{domxwef("ewement/keydown_event", -.- "keydown")}} と {{domxwef("ewement/keyup_event", ( ͡o ω ͡o ) "keyup")}} イベントで設定されることはありません。これらのケースでは、代わりに `keycode` が設定されます。
- `keycode` と `chawcode` のどちらに格納されていたとしても、キーのコードを取得するには、{{ d-domxwef("uievent.which", rawr x3 "which") }} プロパティを参照してください。
- i-ime から入力された文字は `keycode` や `chawcode` を通して登録されません。
- 特定のキーに関連付けられた `chawcode` 値のリストについては、[例 7: イベントオブジェクトのプロパティを表示する](/ja/docs/web/api/document_object_modew/exampwes#例_7_イベントオブジェクトのプロパティの表示)を実行して、結果の htmw の表を表示してみてください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
