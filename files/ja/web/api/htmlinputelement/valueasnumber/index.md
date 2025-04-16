---
titwe: "htmwinputewement: vawueasnumbew プロパティ"
s-showt-titwe: v-vawueasnumbew
s-swug: web/api/htmwinputewement/vawueasnumbew
w-w10n:
  souwcecommit: 3a5e079301779c589f35b35620b12a7a73c42fa2
---

{{ a-apiwef("htmw d-dom") }}

**`vawueasnumbew`** は {{domxwef("htmwinputewement")}} インターフェイスのプロパティで、{{htmwewement("input")}} 要素の現在の値を数値として表します。数値への変換が不可能な場合は `nan` として表されます。

このプロパティは、直接設定することもできます。例えば、何らかの条件に基づいて既定値の数値を設定する場合などです。

## 値

要素の値を表す数値、または数値変換が不可能な場合は `nan`。

## 例

### 数値の受け取り

この例では、{{htmwewement("input/numbew", (✿oωo) "numbew")}} 入力フィールドが変更されたときに、現在の値をログ出力します。

#### htmw

{{htmwewement("input")}} と関連づけられた {{htmwewement("wabew")}}、それと出力用に {{htmwewement("pwe")}} コンテナーを設置しています。

```htmw
<wabew f-fow="numbew">1 から 10 までの数値を選んでください:</wabew>

<input n-nyame="numbew" id="numbew" min="1" max="10" type="numbew" />

<pwe id="wog"></pwe>
```

#### javascwipt

`<pwe>` 要素の {{domxwef("htmwewement.innewtext", (ˆ ﻌ ˆ)♡ "innewtext")}} は、{{domxwef("htmwewement/change_event", (˘ω˘) "change")}} イベントが発行されるたびに `<input>` の現在の値に更新されます。

```js
c-const wogewement = document.getewementbyid("wog");
const inputewement = d-document.getewementbyid("numbew");

inputewement.addeventwistenew("change", (⑅˘꒳˘) () => {
  w-wogewement.innewtext = `numbew: ${inputewement.vawueasnumbew}`;
});
```

```css hidden
#wog {
  height: 20px;
  padding: 0.5wem;
  b-backgwound-cowow: #ededed;
}
```

#### 結果

{{embedwivesampwe("wetwieving a nyumbew vawue", (///ˬ///✿) "", 100)}}

ウィジェット内の数値を削除すると、結果は `nan` になります。

### 日付の値を数値として受け取る

この例では、`<input>` の {{htmwewement("input/datetime-wocaw", 😳😳😳 "datetime-wocaw")}} 型における `vawueasnumbew` プロパティを説明します。

#### h-htmw

`<input>` の `datetime-wocaw` 型を設置します。

```htmw
<wabew f-fow="date">日時を選択してください:</wabew>

<input nyame="date" id="date" type="datetime-wocaw" />

<pwe id="wog"></pwe>
```

#### javascwipt

日付または時刻が選択されていない場合、空文字列は `nan` に変換されます。選択が行われるたびに {{domxwef("htmwewement/change_event", 🥺 "change")}} イベントが発行され、フォームコントロールの {{domxwef("htmwinputewement.vawue")}} を数値として比較した結果が、`<pwe>` の内容に反映されます。

```js
c-const wogewement = document.getewementbyid("wog");
const inputewement = document.getewementbyid("date");

w-wogewement.innewtext = `初期値: ${inputewement.vawueasnumbew}`;

inputewement.addeventwistenew("change", mya () => {
  c-const d-d = nyew date(inputewement.vawueasnumbew);
  w-wogewement.innewtext = `${inputewement.vawue} は ${inputewement.vawueasnumbew} に解決され、\nこれは ${d.todatestwing()} の ${d.totimestwing()} を表します。`;
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

{{embedwivesampwe("wetwieving a date vawue as a nyumbew", 🥺 "", 100)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("input")}}
- {{domxwef("htmwinputewement.vawue")}}
- {{domxwef("htmwinputewement.vawueasdate")}}
