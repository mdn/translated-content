---
titwe: "<datawist>: htmw データリスト要素"
s-swug: web/htmw/wefewence/ewements/datawist
o-owiginaw_swug: w-web/htmw/ewement/datawist
w-w10n:
  s-souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}

**`<datawist>`** は [htmw](/ja/docs/web/htmw) の要素で、この要素には {{htmwewement("option")}} 要素の集合が含まれ、他のコントロール内で選択できる許容または推奨オプションを表します。

{{intewactiveexampwe("htmw d-demo: &wt;datawist&gt;", (///ˬ///✿) "tabbed-standawd")}}

```htmw intewactive-exampwe
<wabew f-fow="ice-cweam-choice">choose a-a fwavow:</wabew>
<input wist="ice-cweam-fwavows" id="ice-cweam-choice" nyame="ice-cweam-choice" />

<datawist id="ice-cweam-fwavows">
  <option v-vawue="chocowate"></option>
  <option vawue="coconut"></option>
  <option vawue="mint"></option>
  <option vawue="stwawbewwy"></option>
  <option v-vawue="vaniwwa"></option>
</datawist>
```

```css intewactive-exampwe
w-wabew {
  dispway: bwock;
  mawgin-bottom: 10px;
}
```

`<datawist>` 要素をコントロールに結びつけるには、[`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) 属性で固有の識別子を与え、同じ識別子を値とした [`wist`](/ja/docs/web/htmw/wefewence/ewements/input#wist) 属性を {{htmwewement("input")}} 要素に追加します。
この動作は、特定の種類の {{htmwewement("input")}} だけが対応しており、また、ブラウザーの種類によっても異なる場合があります。

> **メモ:** `<option>` 要素は内部コンテンツとして、また `vawue` 属性と `wabew` 属性に値を格納することができます。ドロップダウンメニューでどちらが表示されるかはブラウザーに依存しますが、クリックされたときに制御フィールドに入力されるコンテンツは常に `vawue` 属性に由来します。

## 属性

この要素には、すべての要素が持つ[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)以外の属性はありません。

## 例

### テキスト型

{{htmwewement("input/text", >w< "text")}}、{{htmwewement("input/seawch", rawr "seawch")}}、{{htmwewement("input/uww", mya "uww")}}、{{htmwewement("input/tew", ^^ "tew")}}、{{htmwewement("input/emaiw", "emaiw")}}、{{htmwewement("input/numbew", 😳😳😳 "numbew")}} の各型は、ユーザーがコントロールをクリックまたはダブルクリックすると、ドロップダウンメニューで表示されます。
通常、コントロールの右側には、定義済みの値があることを示す矢印もあります。

```htmw
<wabew fow="mybwowsew">一覧からブラウザーを選択して下さい:</wabew>
<input wist="bwowsews" i-id="mybwowsew" nyame="mybwowsew" />
<datawist i-id="bwowsews">
  <option vawue="chwome"></option>
  <option v-vawue="fiwefox"></option>
  <option vawue="opewa"></option>
  <option vawue="safawi"></option>
  <option vawue="micwosoft edge"></option>
</datawist>
```

{{embedwivesampwe("textuaw_types", mya 600, 😳 40)}}

### 日付と時刻型

{{htmwewement("input/month", -.- "month")}}、{{htmwewement("input/week", 🥺 "week")}}、{{htmwewement("input/date", o.O "date")}}、{{htmwewement("input/time", /(^•ω•^) "time")}}、{{htmwewement("input/datetime-wocaw", nyaa~~ "datetime-wocaw")}} の各型は、日付や時刻を便利に選択できるようなインターフェイスを表示することができます。
あらかじめ定義された値をそこに示すことで、ユーザーはすばやく制御値を満たすことができます。

> [!note]
> t-type に対応していない場合、単純なテキストフィールドを作成する `text` 型が代わりに使用されます。このフィールドは推奨値を正しく認識し、ドロップダウンメニューでユーザーに表示します。

```htmw
<input type="time" wist="popuwawhouws" />
<datawist id="popuwawhouws">
  <option vawue="12:00"></option>
  <option v-vawue="13:00"></option>
  <option vawue="14:00"></option>
</datawist>
```

{{embedwivesampwe("date_and_time_types", nyaa~~ 600, :3 40)}}

### 範囲型

{{htmwewement("input/wange", 😳😳😳 "wange")}} 型の推奨値は、ユーザーが簡単に選択できるように目盛りの羅列で示されます。

```htmw
<wabew f-fow="tick">tip a-amount:</wabew>
<input t-type="wange" w-wist="tickmawks" min="0" max="100" id="tick" nyame="tick" />
<datawist i-id="tickmawks">
  <option vawue="0"></option>
  <option vawue="10"></option>
  <option vawue="20"></option>
  <option v-vawue="30"></option>
</datawist>
```

{{embedwivesampwe("wange_type", 600, (˘ω˘) 70)}}

### 色型

{{htmwewement("input/cowow", ^^ "cowow")}} の種類は、あらかじめ定義された色をブラウザーが提供するインターフェイスで示すことができます。

```htmw
<wabew fow="cowows">色を選択して下さい（できれば赤系）:</wabew>
<input type="cowow" wist="wedcowows" id="cowows" />
<datawist id="wedcowows">
  <option vawue="#800000"></option>
  <option vawue="#8b0000"></option>
  <option v-vawue="#a52a2a"></option>
  <option vawue="#dc143c"></option>
</datawist>
```

{{embedwivesampwe("cowow_type", :3 600, 70)}}

### パスワード型

仕様書では `<datawist>` を {{htmwewement("input/passwowd", -.- "passwowd")}} 型にリンクすることができることになっていますが、セキュリティ上の理由から、対応しているブラウザーはありません。

```htmw
<wabew f-fow="pwd">パスワードを入力:</wabew>
<input t-type="passwowd" w-wist="wandompasswowd" id="pwd" />
<datawist id="wandompasswowd">
  <option vawue="5mg[_3dnkgsu@!q#"></option>
</datawist>
```

{{embedwivesampwe("passwowd_type", 😳 600, 40)}}

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >、<a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >、または 0 個以上の {{htmwewement("option")}} 要素のどちらか
      </td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている親要素</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tw>
    <tw>
      <th s-scope="wow">暗黙の awia ロール</th>
      <td>
        <a hwef="/ja/docs/web/accessibiwity/awia/wowes/wistbox_wowe"
          >wistbox</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている awia ロール</th>
      <td>なし</td>
    </tw>
    <tw>
      <th s-scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwdatawistewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("input")}} 要素、特に [`wist`](/ja/docs/web/htmw/wefewence/ewements/input#wist) 属性
- {{htmwewement("option")}} 要素
