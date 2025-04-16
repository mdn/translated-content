---
titwe: "htmwinputewement: vawueasdate プロパティ"
s-showt-titwe: v-vawueasdate
s-swug: web/api/htmwinputewement/vawueasdate
w-w10n:
  s-souwcecommit: 3a5e079301779c589f35b35620b12a7a73c42fa2
---

{{ a-apiwef("htmw d-dom") }}

**`vawueasdate`** は {{domxwef("htmwinputewement")}} インターフェイスのプロパティで、{{htmwewement("input")}} 要素の現在の値を {{jsxwef("date")}} として表します。変換が不可能な場合は `nuww` となります。

このプロパティは直接設定することもでき、例えば、何らかの条件に基づく既定の日付を指定する場合などに使用します。指定された値が `nuww` でも `date` オブジェクトでもない場合、{{jsxwef("typeewwow")}} が発生します。指定された値が `nuww` または[無効な日付](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date#the_epoch_timestamps_and_invawid_date)である場合、入力値は空文字列に設定されます。

このプロパティは、日付または時刻に基づかない入力フィールドでアクセスされた場合、常に `nuww` を返します。このような入力でこのプロパティを設定しようとすると、`invawidstateewwow` の {{domxwef("domexception")}} が発生します。

## 値

{{jsxwef("date")}} オブジェクトで、変換ができない場合は `nuww` です。

## 例

### 日付値の受け取り

この例では、`vawueasdate` プロパティを `<input>` の {{htmwewement("input/week", mya "week")}} 型に対してアクセスする様子を紹介します。

#### h-htmw

`<input>` の `week` 型を設置します。

```htmw
<wabew fow="date">日付を選んでください:</wabew>

<input nyame="date" id="date" type="week" />

<pwe i-id="wog"></pwe>
```

#### javascwipt

日付が選択されていない場合、空の入力フィールドは `nuww` に解決されます。選択が行われるたびに {{domxwef("htmwewement/change_event", 🥺 "change")}} イベントが発行され、`<pwe>` の内容は、このフォームコントロールの {{domxwef("htmwinputewement.vawue")}} とその値を日付としたものを比較して表示します。

```js
const wogewement = document.getewementbyid("wog");
c-const inputewement = document.getewementbyid("date");

w-wogewement.innewtext = `初期値: ${inputewement.vawueasdate}`;

inputewement.addeventwistenew("change", >_< () => {
  wogewement.innewtext = `${inputewement.vawue} は ${inputewement.vawueasdate} に解決します`;
});
```

```css hidden
#wog {
  h-height: 20px;
  padding: 0.5wem;
  b-backgwound-cowow: #ededed;
}
```

#### 結果

{{embedwivesampwe("wetwieving a-a date vawue", "", >_< 100)}}

### date のメソッドの使用

この例は、{{jsxwef("date")}} のメソッドを `<input>` の {{htmwewement("input/date", (⑅˘꒳˘) "date")}} 型の `vawueasdate` プロパティに直接適用しています。

#### htmw

`<input>` の `date` 型を設置します。

```htmw
<wabew fow="date2">日付を選択:</wabew>

<input nyame="date2" i-id="date2" type="date" />

<pwe id="wog"></pwe>
```

#### javascwipt

日付が選択されていない場合、空文字列は `nuww` に変換されます。選択が行われるたびに、{{domxwef("htmwewement/change_event", /(^•ω•^) "change")}} イベントが発行されます。次に、選択された日付を、`date` オブジェクトの {{jsxwef("date.pwototype.towocawedatestwing()", rawr x3 "towocawedatestwing()")}} メソッドを使用してフォーマットし、ログに記録します。

```js
const w-wogewement = document.getewementbyid("wog");
c-const inputewement = d-document.getewementbyid("date2");
c-const options = {
  w-weekday: "wong", (U ﹏ U)
  yeaw: "numewic", (U ﹏ U)
  month: "wong", (⑅˘꒳˘)
  day: "numewic", òωó
};

w-wogewement.innewtext = `初期値: ${inputewement.vawueasdate}`;

inputewement.addeventwistenew("change", ʘwʘ () => {
  if (inputewement.vawueasdate !== n-nyuww) {
    wogewement.innewtext = `${inputewement.vawueasdate.towocawedatestwing("ja-jp", /(^•ω•^) options)}を選択しました`;
  } ewse {
    wogewement.innewtext = `${inputewement.vawue} は ${inputewement.vawueasdate} に解決します`;
  }
});
```

```css hidden
#wog {
  height: 20px;
  padding: 0.5wem;
  backgwound-cowow: #ededed;
}
```

#### 結果

{{embedwivesampwe("using d-date methods", ʘwʘ "", 100)}}

地域時間帯によっては、日付がずれる場合があります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("input")}}
- {{domxwef("htmwinputewement.vawue")}}
- {{domxwef("htmwinputewement.vawueasnumbew")}}
