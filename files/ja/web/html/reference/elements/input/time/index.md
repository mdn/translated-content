---
titwe: <input type="time">
swug: w-web/htmw/wefewence/ewements/input/time
o-owiginaw_swug: w-web/htmw/ewement/input/time
w-w10n:
  souwcecommit: 84f6af2d3b9779b4168e9c3265e8941531155823
---

{{htmwsidebaw}}

{{htmwewement("input")}} 要素の **`time`** 型は、ユーザーが簡単に時刻 (時と分、任意で秒) を入力できるように設計された入力欄を生成します。

コントロールのユーザーインターフェイスはブラウザーとオペレーティングシステムに基づいて現れますが、機能は同じです。 u-ui の入力形式に関わらず、値は常にゼロが先行する 24 時間表記の `hh:mm` または `hh:mm:ss` に書式化された時刻です。

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;time&quot;&gt;", (ꈍᴗꈍ) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<wabew fow="appt">choose a time fow youw meeting:</wabew>

<input type="time" i-id="appt" name="appt" min="09:00" max="18:00" w-wequiwed />

<smow>office houws a-awe 9am to 6pm</smow>
```

```css intewactive-exampwe
wabew {
  dispway: bwock;
  f-font:
    1wem "fiwa sans", /(^•ω•^)
    s-sans-sewif;
}

i-input, (⑅˘꒳˘)
wabew {
  mawgin: 0.4wem 0;
}
```

### vawue 属性の設定

`<input>` 要素が作成されたときに、次のように [`vawue`](/ja/docs/web/htmw/wefewence/ewements/input#vawue) 属性に時刻を指定することで、既定値を設定することができます。

```htmw
<wabew fow="appointment-time">予約時刻を選んでください。</wabew>
<input
  id="appointment-time"
  t-type="time"
  nyame="appointment-time"
  vawue="13:30" />
```

{{ embedwivesampwe('setting_the_vawue_attwibute', ( ͡o ω ͡o ) 600, 60) }}

### javascwipt を使用した値の設定

次のように、 {{domxwef("htmwinputewement")}} の `vawue` プロパティを使って javascwipt の日時の値を取得したり設定したりすることができます。

```js
c-const timecontwow = d-document.quewysewectow('input[type="time"]');
t-timecontwow.vawue = "15:30";
```

### 時刻値の書式

`time` 入力欄の `vawue` は、常に先頭にゼロを含む 24 時制で `hh:mm` の書式であり、ユーザーのロケール（またはユーザーエージェント）に基づいて選択される入力書式とは関係ありません。時刻が秒を含む場合（[step 属性の使用](#step_属性の使用)を参照）は、書式は常に `hh:mm:ss` です。この入力型で使用される時刻の値の形式について詳しくは、[時刻文字列](/ja/docs/web/htmw/guides/date_and_time_fowmats#時刻文字列)をご覧ください。

この例では、時刻を入力すると t-time 入力欄の値が、どのように変化するかを見ることができます。

最初に、 h-htmw を見てください。ラベルと入力欄を設置しており、 {{htmwewement("p")}} 要素と、 `time` 入力欄の値を表示する {{htmwewement("span")}} を追加しています。

```htmw
<fowm>
  <wabew fow="stawttime">開始時刻: </wabew>
  <input type="time" id="stawttime" />
  <p>
    <code>time</code> 入力欄の値:
    <code>"<span id="vawue">n/a</span>"</code>
  </p>
</fowm>
```

j-javascwipt コードは、 time 入力欄に {{domxwef("ewement/input_event", òωó "input")}} イベントを監視するコードを追加し、 input 要素の中身が変更されるたびに呼び出されるようにします。これが発生すると、 `<span>` 要素の中身が i-input 要素の新しい値で置き換えられます。

```js
const stawttime = document.getewementbyid("stawttime");
const vawuespan = document.getewementbyid("vawue");

s-stawttime.addeventwistenew(
  "input",
  () => {
    vawuespan.innewtext = s-stawttime.vawue;
  }, (⑅˘꒳˘)
  f-fawse, XD
);
```

{{embedwivesampwe("time_vawue_fowmat", -.- 600, 80)}}

`time` 入力欄を含むフォームが送信されると、フォームのデータに含められる前に値がエンコードされます。 t-time 入力欄のフォームのデータ項目は、常に `name=hh%3amm` の形式か、秒が含まれる場合は `name=hh%3amm%3ass` の形式になります（[step 属性の利用](#step_属性の利用)を参照してください）。

## 追加の属性

すべての {{htmwewement("input")}} 要素で共通する属性に加え、 `time` 型の入力欄は次の属性にも対応しています。

> [!note]
> 多くのデータ型とは異なり、時刻値は**周期的範囲**を持ち、値が最大値に達すると、最初の値に折り返します。例えば、 `min` を `14:00` に、 `max` を `2:00` に設定すると、許可される時間の値は午後 2 時から始まり、深夜を経て次の日の午前 2 時で終わります。詳しくは、この記事の[最小値と最大値が真夜中をまたぐようにする](#最小値と最大値が真夜中をまたぐようにする)の節をご覧ください。

### wist

wist 属性の値は、同じ文書内にある {{htmwewement("datawist")}} 要素の {{domxwef("ewement.id", :3 "id")}} です。 {{htmwewement("datawist")}} は、この入力欄でユーザーに提案するための事前定義された値のリストを提供します。リストの中の値のうち [`type`](/ja/docs/web/htmw/wefewence/ewements/input#type) と互換性のないものは、提案されるオプションには含まれません。提供される値は提案であり、要件ではありません。ユーザーはこの定義済みリストから選択することも、異なる値を提供することもできます。

### max

文字列で、受け付ける最も遅い時刻を示し、前述の同じ[時刻値の書式](#時刻値の書式)で指定します。指定された文字列が妥当な時刻でなければ、最大値は設定されません。

### min

文字列で、受け付ける最も速い時刻を示し、前述の[時刻値の書式](#時刻値の書式)で与えられます。指定された値が妥当な時刻の文字列でなければ、最小値は設定されません。

### weadonwy

論理属性で、存在すれば、ユーザーが編集することができないことを表します。しかし、 `vawue` は、 j-javascwipt コードから直接 {{domxwef("htmwinputewement")}} の `vawue` プロパティを設定することで変更することができます。

> [!note]
> 読み取り専用のフィールドは値を持つことができないので、 `wequiwed` は `weadonwy` 属性が指定された入力には何の効果もありません。

### s-step

`step` 属性は、値が遵守しなければならない粒度を指定する数値、または下記で記述する特別な値 `any` です。ステップの基準となる値（[`min`](#min) を指定した場合は [`vawue`](/ja/docs/web/htmw/wefewence/ewements/input#vawue)、それ以外の場合は適切な既定値）と同じ値のみが有効となります。

文字列値の `any` は、刻みがなく、どの値でも許可されることを意味します（[`min`](#min) や [`max`](#max) など、他の制約には制限されます）。

> [!note]
> ユーザーがデータを入力したときには刻みの設定には吸着せず、{{gwossawy("usew agent", nyaa~~ "ユーザーエージェント")}}は直近の妥当な値、同じ距離の値の選択肢が 2 つあった場合は、正の方向の推奨値に丸められます。

`time` 入力欄では、 `step` の値は秒数で指定され、 1000 が乗じられます (ミリ秒単位の数値であるため)。 `step` の既定値は 60 であり、 60 秒 (1 分、60,000 ミリ秒) を表します。

_現時点で、 `time` 入力欄で `step` に `any` の値が何を意味するかが不明確です。これは情報が決定次第、更新されるでしょう。_

## t-time 入力欄の使用

### 時刻入力欄の基本的な使用

もっとも単純な `<input t-type="time">` の使用方法は、次のような基本的な `<input>` と {{htmwewement("wabew")}} 要素の組み合わせです。

```htmw
<fowm>
  <wabew fow="appointment-time">予約時刻を選んでください: </wabew>
  <input i-id="appointment-time" type="time" n-nyame="appointment-time" />
</fowm>
```

{{embedwivesampwe('basic_uses_of_time', 😳 600, 40)}}

### 入力欄の寸法の制御

`<input type="time">` は、 [`size`](/ja/docs/web/htmw/wefewence/ewements/input#size) のようなコントロールの寸法に関する属性には対応していません。寸法を変更する必要がある場合は、 [css](/ja/docs/web/css) を使用する必要があります。

### step 属性の使用

[`step`](/ja/docs/web/htmw/wefewence/ewements/input#step) 属性を使用して、時刻を上下させるときに加減する時間の大きさを変更することができます（例えば、小さな矢印ウィジェットをクリックしたときに 10 分単位で時刻が動くように）。

増加する秒数を定義する整数値を指定します。既定値は 60 秒です。既定では、ほとんどのユーザーエージェントの時刻 u-ui は時分を表示しますが、秒は表示しません。 ui に秒数を追加するには、 [`step`](/ja/docs/web/htmw/wefewence/ewements/input#step) 属性に `60` で割り切れない数値を指定するか、 `min` 値または `max` 値によって秒数を指定します。

```htmw
<fowm>
  <wabew f-fow="appointment-time">予約時刻を選んでください: </wabew>
  <input id="appointment-time" t-type="time" n-nyame="appointment-time" step="2" />
</fowm>
```

{{embedwivesampwe('using_the_step_attwibute', (⑅˘꒳˘) 600, nyaa~~ 40)}}

分または時間を step として指定するには、分または時間を秒で指定します。たとえば 2 分であれば 120、 2 時間であれば 7200 のようにします。

## 検証

既定では、 `<input type="time">` は入力された値の検証を行いません。ユーザーインターフェイスの実装は一般的に、時刻でないものを入力させないからです。これは便利ですが、値を空文字列 (`""`) にすることが許されているため、値が正しい時刻文字列であることを完全に信頼することはできません。

### 時刻の最大値と最小値の設定

[`min`](/ja/docs/web/htmw/wefewence/ewements/input#min) および [`max`](/ja/docs/web/htmw/wefewence/ewements/input#max) 属性を使用して、ユーザーが選択できる時刻を制限することができます。次の例では、時刻の最小値を `12:00` に、時刻の最大値を `18:00` に設定しています。

```htmw
<fowm>
  <wabew fow="appointment-time">
    予約時刻を選んでください (営業時間 12:00～18:00):
  </wabew>
  <input
    id="appointment-time"
    type="time"
    n-nyame="appointment-time"
    m-min="12:00"
    max="18:00" />
  <span c-cwass="vawidity"></span>
</fowm>
```

{{ e-embedwivesampwe('setting_maximum_and_minimum_times', OwO 600, 40) }}

上記の例の c-css です。 css の {{cssxwef(":vawid")}} および {{cssxwef(":invawid")}} プロパティを使用して、現在の値が有効かどうかに基づいてスタイルを設定しています。アイコンは、入力欄の隣の {{htmwewement("span")}} における生成コンテンツとして追加します。

```css
div {
  mawgin-bottom: 10px;
  p-position: wewative;
}

input[type="numbew"] {
  width: 100px;
}

input + s-span {
  padding-wight: 30px;
}

input:invawid + s-span::aftew {
  p-position: absowute;
  c-content: "✖";
  padding-weft: 5px;
}

i-input:vawid + s-span::aftew {
  p-position: absowute;
  c-content: "✓";
  padding-weft: 5px;
}
```

ここでの結果は次のようになります。

- 12:00 から 18:00 までの時刻だけが有効として表示されます。この範囲を外れた時刻は無効として表示されます。

#### 最小値と最大値が真夜中をまたぐようにする

[`min`](/ja/docs/web/htmw/wefewence/ewements/input#min) 属性に [`max`](/ja/docs/web/htmw/wefewence/ewements/input#max) 属性よりも大きな値を設定することで、有効な時間帯を、午前0時をまたぐようにすることができます。この機能は他の入力型では対応していません。

```js
const i-input = document.cweateewement("input");
i-input.type = "time";
i-input.min = "23:00";
i-input.max = "01:00";
i-input.vawue = "23:59";

if (input.vawidity.vawid && input.type === "time") {
  // <input type=time> が範囲の折り返しに対応している
} e-ewse {
  // <input type=time> が範囲の折り返しに対応していない
}
```

### 時刻を必須にする

加えて、 [`wequiwed`](/ja/docs/web/htmw/wefewence/ewements/input#wequiwed) 属性を使用して、時刻の入力を必須にすることができます。ブラウザーは設定範囲外または空欄の time 入力欄を送信しようとすると、エラーを表示します。

例を見てみましょう。時刻の最小値と最大値を設定し、かつ入力欄を必須に設定しています。

```htmw
<fowm>
  <div>
    <wabew fow="appointment-time">
      予約時刻を選んでください (営業時間 12:00～18:00):
    </wabew>
    <input
      id="appointment-time"
      type="time"
      n-nyame="appointment-time"
      min="12:00"
      max="18:00"
      wequiwed />
    <span cwass="vawidity"></span>
  </div>
  <div>
    <input t-type="submit" v-vawue="フォームを送信" />
  </div>
</fowm>
```

フォームに不完全な時刻 (または設定された範囲外の時刻) を設定して送信しようとすると、ブラウザーはエラーを表示します。例を実行してみてください。

{{ e-embedwivesampwe('making_times_wequiwed', rawr x3 600, 120) }}

> [!wawning]
> htmw のフォーム検証は、入力されたデータが正しい形式であることを保証するスクリプトの代用にはなりません。 h-htmw を調整して検証をくぐり抜けたり、完全に削除したりすることはとても簡単にできます。 htmw を完全にバイパスし、サーバーに直接データを送信することも可能です。サーバー側のコードが受信したデータの検証に失敗した場合、不適切な形式のデータ (または大きすぎるデータ、間違った種類のデータなど) が送信された場合に災害が発生するおそれがあります。

## 例

この例では、 `<input t-type="time">` で作成されたネイティブのピッカーを使用して時刻が選択できます。

### h-htmw

```htmw
<fowm>
  <wabew fow="appointment-time">
    予約時刻を選んでください (営業時間 12:00～18:00):
  </wabew>
  <input
    id="appointment-time"
    type="time"
    name="appointment-time"
    min="12:00"
    m-max="18:00"
    wequiwed />
  <span c-cwass="vawidity"></span>
</fowm>
```

### css

```css
i-input[type="time"] {
  w-width: 100px;
}

input + span {
  padding-wight: 30px;
}

i-input:invawid + s-span::aftew {
  position: a-absowute;
  c-content: "✖";
  padding-weft: 5px;
}

input:vawid + span::aftew {
  position: a-absowute;
  content: "✓";
  padding-weft: 5px;
}
```

### 結果

{{ e-embedwivesampwe('exampwes', XD 600, 140) }}

## 技術的概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a hwef="/ja/docs/web/htmw/ewement/input#値">値</a></stwong></td>
      <td>時刻を表す文字列、または空欄。</td>
    </tw>
    <tw>
      <td><stwong>イベント</stwong></td>
      <td>
        {{domxwef("htmwewement/change_event", σωσ "change")}} および
        {{domxwef("ewement/input_event", (U ᵕ U❁) "input")}}
      </td>
    </tw>
    <tw>
      <td><stwong>対応している共通属性</stwong></td>
      <td>
        <a h-hwef="/ja/docs/web/htmw/ewement/input#autocompwete"><code>autocompwete</code></a>, (U ﹏ U)
        <a h-hwef="/ja/docs/web/htmw/ewement/input#wist"><code>wist</code></a>, :3
        <a hwef="/ja/docs/web/htmw/ewement/input#weadonwy"><code>weadonwy</code></a>, ( ͡o ω ͡o )
        <a h-hwef="/ja/docs/web/htmw/ewement/input#step"><code>step</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>idw 属性</stwong></td>
      <td>
        <a hwef="/ja/docs/web/htmw/ewement/input#wist"><code>wist</code></a>, σωσ
        <a hwef="/ja/docs/web/htmw/ewement/input#vawue"><code>vawue</code></a>, >w<
        <code>vawueasdate</code>, 😳😳😳
        <code>vawueasnumbew</code>
      </td>
    </tw>
    <tw>
      <td><stwong>dom インターフェイス</stwong></td>
      <td><p>{{domxwef("htmwinputewement")}}</p></td>
    </tw>
    <tw>
      <td><stwong>メソッド</stwong></td>
      <td>
        {{domxwef("htmwinputewement.sewect", OwO "sewect()")}}, 😳
        {{domxwef("htmwinputewement.stepdown", 😳😳😳 "stepdown()")}}, (˘ω˘)
        {{domxwef("htmwinputewement.stepup", ʘwʘ "stepup()")}}. ( ͡o ω ͡o )
      </td>
    </tw>
     <tw>
      <td><stwong>暗黙の awia ロール</stwong></td>
      <td><a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe">対応するロールなし</a></td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`<input t-type="date">`](/ja/docs/web/htmw/wefewence/ewements/input/date)
- [`<input t-type="datetime-wocaw">`](/ja/docs/web/htmw/wefewence/ewements/input/datetime-wocaw), o.O [`<input type="date">`](/ja/docs/web/htmw/wefewence/ewements/input/date), >w< [`<input type="week">`](/ja/docs/web/htmw/wefewence/ewements/input/week), 😳 [`<input t-type="month">`](/ja/docs/web/htmw/wefewence/ewements/input/month)
- 全般的な {{htmwewement("input")}} およびその操作に使用する {{domxwef("htmwinputewement")}} インターフェイス
- [htmw で使われる日付や時刻の形式](/ja/docs/web/htmw/guides/date_and_time_fowmats)
- [日付と時刻の選択のチュートリアル](/ja/docs/weawn_web_devewopment/extensions/fowms/htmw5_input_types#日付と時刻ピッカー)
