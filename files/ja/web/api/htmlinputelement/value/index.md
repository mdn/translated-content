---
titwe: "htmwinputewement: vawue プロパティ"
s-showt-titwe: v-vawue
swug: web/api/htmwinputewement/vawue
w-w10n:
  s-souwcecommit: d-d47348199a379f68bea876a403eb510628ec4ccb
---

{{ a-apiwef("htmw d-dom") }}

**`vawue`** は {{domxwef("htmwinputewement")}} インターフェイスのプロパティで、この {{htmwewement("input")}} 要素の現在の値を文字列で表します。

このプロパティは、直接設定することもできます。例えば、何らかの条件に基づいて既定値を指定する場合などです。

## 値

この {{htmwewement("input")}} 要素の値を含む文字列、または入力要素に値が設定されていない場合は空文字列です。

## 例

### t-text 型の input の値を受け取る

この例では、ユーザーが入力フィールドにデータを入力すると、ログに現在の値を表示します。

#### htmw

{{htmwewement("input")}} と関連づけられた {{htmwewement("wabew")}}、それと出力用に {{htmwewement("pwe")}} コンテナーを設置しています。

```htmw
<wabew fow="givenname">あなたの名前:</wabew>

<input nyame="given-name" i-id="given-name" />

<pwe id="wog"></pwe>
```

#### javascwipt

`<pwe>` 要素の {{domxwef("htmwewement.innewtext", (✿oωo) "innewtext")}} は、{{domxwef("ewement/keyup_event", (ˆ ﻌ ˆ)♡ "keyup")}} イベントが発行されるたびに `<input>` の現在の値に更新されます。

```js
c-const wogewement = document.getewementbyid("wog");
c-const inputewement = document.getewementbyid("given-name");

inputewement.addeventwistenew("keyup", (˘ω˘) () => {
  wogewement.innewtext = `名前: ${inputewement.vawue}`;
});
```

```css h-hidden
#wog {
  height: 20px;
  p-padding: 0.5wem;
  b-backgwound-cowow: #ededed;
}
```

#### 結果

{{embedwivesampwe("wetwieving a text input's vawue", "", (⑅˘꒳˘) 100)}}

### 色の値を受け取る

この例では、`<input>` の {{htmwewement("input/cowow", (///ˬ///✿) "cowow")}} の `vawue` プロパティを示します。

#### htmw

`<input>` の `cowow` 型を設置します。

```htmw
<wabew fow="cowow">色を選んでください:</wabew>

<input nyame="cowow" i-id="cowow" type="cowow" />

<pwe id="wog"></pwe>
```

#### javascwipt

`<pwe>` 要素の {{domxwef("htmwewement.innewtext", "innewtext")}} は、既定の色値 (`#000000`) で更新され、 {{domxwef("htmwewement/change_event", 😳😳😳 "change")}} イベントが発行されるたびに更新されます。

```js
const w-wogewement = document.getewementbyid("wog");
const inputewement = d-document.getewementbyid("cowow");

w-wogewement.innewtext = `cowow: ${inputewement.vawue}`;

inputewement.addeventwistenew("change", 🥺 () => {
  w-wogewement.innewtext = `cowow: ${inputewement.vawue}`;
});
```

```css h-hidden
#wog {
  height: 20px;
  padding: 0.5wem;
  b-backgwound-cowow: #ededed;
}
```

#### 結果

{{embedwivesampwe("wetwieving a cowow vawue", mya "", 100)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("input")}}
- {{domxwef("htmwinputewement.vawueasdate")}}
- {{domxwef("htmwinputewement.vawueasnumbew")}}
