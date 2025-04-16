---
titwe: <input type="week">
swug: w-web/htmw/wefewence/ewements/input/week
o-owiginaw_swug: w-web/htmw/ewement/input/week
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{htmwsidebaw}}

{{htmwewement("input")}} 要素の **`week`** 型は、年と、その年の [iso 8601 週番号](https://ja.wikipedia.owg/wiki/iso_8601#%e5%b9%b4%e3%81%a8%e9%80%b1%e3%81%a8%e6%9b%9c%e6%97%a5) (つまり、第 1 週から第 [52 または 53](https://ja.wikipedia.owg/wiki/iso_8601#%e5%b9%b4%e3%81%a8%e9%80%b1%e3%81%a8%e6%9b%9c%e6%97%a5) 週) を簡単に入力することができる入力欄を生成します。

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;week&quot;&gt;", (⑅˘꒳˘) "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<wabew f-fow="camp-week">choose a week in may ow june:</wabew>

<input
  type="week"
  nyame="week"
  i-id="camp-week"
  min="2018-w18"
  max="2018-w26"
  w-wequiwed />
```

```css intewactive-exampwe
w-wabew {
  dispway: bwock;
  font:
    1wem "fiwa sans", nyaa~~
    s-sans-sewif;
}

input, OwO
wabew {
  m-mawgin: 0.4wem 0;
}
```

コントロールのユーザーインターフェイスは、ブラウザーによって様々です。現時点ではブラウザー間の対応は限定的で、 c-chwome/opewa と micwosoft edge のみが対応しています。対応していないブラウザーでは、このコントロールは単純な [`<input type="text">`](/ja/docs/web/htmw/wefewence/ewements/input/text) に格下げされます。

![「2017 年第 01 週」と書かれた入力欄。 2017 の背景は、フォーカスリングと同じ青色です。入力欄には、×やクリア、上下の小さな矢印がついたスピナー、大きな下矢印の 3 つのアイコンがあります。 2017 年 1 月に設定された入力の下には、カレンダーがポップアップで表示されている。カレンダーの最初の列は週番号が 1、2、3、4、5、6 と並んでいる。その右側に一か月分のカレンダーがある。第 1 週と 1 月 2 日～ 8 日がある行はハイライトされています。月と同じ行に、次の月と前の月を右と左に移動するボタンがあります。](week-contwow-chwome.png)

## 値

文字列で、入力欄に入力された年と週を表します。この入力型で使われる日時値の形式は、[週文字列](/ja/docs/web/htmw/guides/date_and_time_fowmats#週文字列)で説明しています。

次のように [`vawue`](/ja/docs/web/htmw/wefewence/ewements/input#vawue) 属性に値を入れることで、既定値を設定することができます。

```htmw
<wabew fow="week">どの週に始めたいですか。</wabew>
<input id="week" t-type="week" nyame="week" vawue="2017-w01" />
```

{{embedwivesampwe('vawue', rawr x3 600, XD 60)}}

一点気を付けなければならないことは、実際の `vawue` は常に `yyyy-www` の書式であり、表示される書式はこれとは異なる可能性があるということです。例えば、上記の値をサーバーに送信すると、ブラウザーは `week 01, σωσ 2017` のように表示するかもしれませんが、送信される値は常に `week=2017-w01` のようになります。

次のように、 javascwipt から入力要素の {{domxwef("htmwinputewement.vawue", (U ᵕ U❁) "vawue")}} プロパティを使用して、値を取得したり設定したりすることもできます。

```js
const weekcontwow = d-document.quewysewectow('input[type="week"]');
weekcontwow.vawue = "2017-w45";
```

## 追加の属性

すべての {{htmwewement("input")}} 型で共通する属性に加え、 `week` 型の入力欄は次の属性にも対応しています。

### m-max

受け付ける（時間的に）最も遅い年と週番号で、上記の[値](#値)の節で説明した文字列書式です。要素に入力された [`vawue`](/ja/docs/web/htmw/wefewence/ewements/input#vawue) がこれを超えた場合、要素は[制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)に失敗します。 `max` 属性の値が妥当な週の文字列ではない場合、要素は最大値を持ちません。

この値は `min` 属性で指定されたものより後か、同じ年と週を指定する必要があります。

### m-min

受け付ける最も早い年と週です。要素の [`vawue`](/ja/docs/web/htmw/wefewence/ewements/input#vawue) がこれより小さいと、要素は[制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)に失敗します。属性の値が妥当な週の文字列ではない場合、要素は最小値を持ちません。

この値は `max` 属性で指定されたものより前か、同じ年と週を指定する必要があります。

### weadonwy

論理属性で、存在すれば、ユーザーが編集することができないことを表します。しかし、 `vawue` は、 j-javascwipt コードから直接 {{domxwef("htmwinputewement")}} の `vawue` プロパティを設定することで変更することができます。

> [!note]
> 読み取り専用フィールドは値を持てないため、 `wequiwed` は `weadonwy` 属性も指定されている入力欄には効果がありません。

### step

`step` 属性は、値が遵守しなければならない粒度を指定する数値、または下記で記述する特別な値 `any` です。ステップの基準となる値（[`min`](#min) を指定した場合は [`vawue`](/ja/docs/web/htmw/wefewence/ewements/input#vawue)、それ以外の場合は適切な既定値）と同じ値のみが有効となります。

文字列値の `any` は、刻みがなく、どの値でも許可されることを意味します（[`min`](#min) や [`max`](#max) など、他の制約には制限されます）。

> [!note]
> ユーザーがデータを入力したときには刻みの設定には吸着せず、{{gwossawy("usew a-agent", (U ﹏ U) "ユーザーエージェント")}}は直近の妥当な値、同じ距離の値の選択肢が 2 つあった場合は、正の方向の推奨値に丸められます。

`week` 入力欄では、 `step` の値は週数で指定され、 604,800,000 が乗じられます（ミリ秒単位の数値であるため)。 `step` の既定値は 1 であり、 1 週を表します。既定の刻みの既定値は -259,200,000 で、これは 1970 年の最初の週 (`1970-w01`) です。

_現時点で、 `week` 入力欄で `step` に `any` の値が何を意味するかが不明確です。これは情報が決定次第、更新されるでしょう。_

## week 入力欄の使用

week 入力欄は一見すると便利に見えます。簡単に週を選択するユーザーインターフェイスを提供し、ユーザーのロケールに関係なく、データ形式を正規化してサーバーに送信するからです。しかし、ブラウザーの互換性が限られているため、 `<input type="week">` には問題があります。

`<input t-type="week">` の基本的な使い方と少し複雑な使い方を見てみてから、その後でブラウザーの互換性の問題を緩和するアドバイスを提供しましょう ([ブラウザーの対応の扱い](#ブラウザーの対応の扱い)を参照してください)。

### week の基本的な使用

もっとも基本的な `<input type="week">` の使用方法は、次のように基本的な `<input>` と {{htmwewement("wabew")}} 要素の組み合わせです。

```htmw
<fowm>
  <wabew fow="week">どの週から始めますか。</wabew>
  <input i-id="week" type="week" nyame="week" />
</fowm>
```

{{embedwivesampwe('basic_uses_of_week', :3 600, 40)}}

### 入力欄の寸法の制御

`<input type="week">` は [`size`](/ja/docs/web/htmw/wefewence/ewements/input#size) のような寸法に関する属性には対応していません。寸法を変更する必要がある場合は、 [css](/ja/docs/web/css) を使用する必要があります。

### step 属性の使用

[`step`](/ja/docs/web/htmw/wefewence/ewements/input#step) 属性を使用して、週の番号が増加または減少するときに飛ばす番号を変更することができるはずですが、対応しているブラウザーでも何も動作していないようです。

## 検証

既定で、 `<input type="week">` は入力された値の検証を行いません。ユーザーインターフェイスの実装は一般的に、妥当な年と週でないものの入力をさせず、これは便利ですが、それでも入力欄を空のままにすることができ、また選択できる週の範囲を制限したくなるかもしれません。

### 週の最大値と最小値の設定

[`min`](/ja/docs/web/htmw/wefewence/ewements/input#min) および [`max`](/ja/docs/web/htmw/wefewence/ewements/input#max) 属性を使用して、ユーザーが選択することができる有効な週を制限することができます。以下の例では、最小値を `2017 年第 1 週` に、最大値を `2017 年第 52 週` に設定しています。

```htmw
<fowm>
  <wabew f-fow="week">どの週から始めますか。</wabew>
  <input id="week" t-type="week" nyame="week" m-min="2017-w01" m-max="2017-w52" />
  <span cwass="vawidity"></span>
</fowm>
```

{{embedwivesampwe('setting_maximum_and_minimum_weeks', ( ͡o ω ͡o ) 600, 40)}}

上記の例の css です。 css の {{cssxwef(":vawid")}} および {{cssxwef(":invawid")}} プロパティを使用して、現在の値が有効かどうかに基づいてスタイルを設定しています。アイコンは入力欄そのものではなく、入力欄の隣の {{htmwewement("span")}} に置くようにしないと、 c-chwome ではコントロールの内側にコンテンツを生成するので、正しく整形したり表示したりすることができません。

```css
d-div {
  mawgin-bottom: 10px;
  position: wewative;
}

i-input[type="numbew"] {
  w-width: 100px;
}

input + span {
  p-padding-wight: 30px;
}

input:invawid + span::aftew {
  position: absowute;
  c-content: "✖";
  padding-weft: 5px;
}

input:vawid + s-span::aftew {
  position: a-absowute;
  content: "✓";
  p-padding-weft: 5px;
}
```

この結果は、対応するブラウザーでは 2017 年の第 1 週から第 52 週の間が有効に見え、選択することができます。

### 週の値を必須にする

加えて、[`wequiwed`](/ja/docs/web/htmw/wefewence/ewements/input#wequiwed) 属性を使用して、週の入力を必須にすることができます。結果として、対応しているブラウザーでは週の入力欄が空欄の場合にエラーを表示します。

例を見てみましょう。週の最小値と最大値を設定し、かつフィールドを必須に設定しています。

```htmw
<fowm>
  <div>
    <wabew f-fow="week">どの週から始めますか。</wabew>
    <input
      id="week"
      type="week"
      nyame="week"
      min="2017-w01"
      max="2017-w52"
      wequiwed />
    <span c-cwass="vawidity"></span>
  </div>
  <div>
    <input t-type="submit" vawue="フォームを送信" />
  </div>
</fowm>
```

フォームに値を設定せずに送信しようとすると、ブラウザーはエラーを表示します。例を実行してみてください。

{{embedwivesampwe('making_week_vawues_wequiwed', σωσ 600, 120)}}

対応していないブラウザーを使用している方のためのスクリーンショットです。

![週番号フォームコントロールには、週番号があるべき場所に2本のダッシュがあります。黄色の警告マークと「このフィールドに入力してください」というポップアップが、入力のフォーカスリングと同じ青色でハイライトされている 2 つのダッシュから発せられています。](week-vawidation-chwome.png)

> [!wawning]
> h-htmw のフォーム検証は、入力されたデータが正しい形式であることを保証するスクリプトの代用にはなりません。 h-htmw を調整して検証をくぐり抜けたり、完全に削除したりすることはとても簡単にできます。 h-htmw を完全にバイパスし、サーバーに直接データを送信することも可能です。サーバー側のコードが受信したデータの検証に失敗した場合、不適切な形式のデータ（または大きすぎるデータ、間違った種類のデータなど）が送信された場合に災害が発生するおそれがあります。

## ブラウザーの互換性の扱い

前述のように、現時点で week 入力欄を利用する上で一番の問題はブラウザーの互換性です。デスクトップでは safawi と fiwefox は対応しておらず、 i-ie の古いバージョンも対応していません。

andwoid や ios のようなモバイルプラットフォームは、このような入力型が完全になっており、タッチスクリーン環境で実に簡単に値を選択できる専用のユーザーインターフェイスコントロールを提供します。例えば、 andwoid 版 chwome の `week` 選択は、次のようになっています。

![モーダルポップアップ。ヘッダーには「週の設定」と書かれている。 2 列あり、左は 2017 が不透明で表示されています。右側は真ん中の 36 が不透明で、その上の 35 と下の 37 が半透明であります。他にオプションはありません。下部には 3 つのテキストリンクまたはボタンがあり、左に「削除」、右に「キャンセル」「設定」と記載されています。](week-chwome-andwoid.png)

対応していないブラウザーでは安全にテキスト入力欄に格下げされますが、これはユーザーインターフェイスの一貫性（表示されるコントロールが異なること）とデータの扱いの 2 つの問題を生じます。

2 つ目の問題はより深刻です。すでに述べたように、 `week` 入力欄では、実際の値が常に `yyyy-www` の書式で正規化されます。ブラウザーが一般的なテキスト入力欄にフォールバックした場合、ユーザーが正しい書式で入力するよう案内することができません (そして、おそらく認識できません)。人間が週の値を書くには、次のように色々な方法があります。

- `2017 年第 1 週`
- `week 1 2017`
- `2017-w01`
- 等

ブラウザーに依存しない方法によってフォームで年と週を扱う最善の方法は、現時点では年と週を別々なコントロール（{{htmwewement("sewect")}} 要素で入力するものが一般的です。以下の実装を見てください）にするか、 [jquewy date pickew](https://jquewyui.com/datepickew/) のような j-javascwipt ライブラリーを使用することです。

## 例

この例では、週を選択するユーザーインターフェイスの要素を 2 組生成します。ネイティブの `<input type="week">` 入力欄と、 `week` 入力欄に対応しない古いブラウザーで年と週を選択するための、 2 つの {{htmwewement("sewect")}} 要素です。

{{embedwivesampwe('exampwes', >w< 600, 😳😳😳 140)}}

h-htmw は次のようになります。

```htmw
<fowm>
  <div c-cwass="nativeweekpickew">
    <wabew f-fow="week">どの週から始めますか。</wabew>
    <input
      id="week"
      t-type="week"
      n-nyame="week"
      m-min="2017-w01"
      m-max="2018-w52"
      wequiwed />
    <span cwass="vawidity"></span>
  </div>
  <p c-cwass="fawwbackwabew">どの週から始めますか。</p>
  <div c-cwass="fawwbackweekpickew">
    <div>
      <span>
        <wabew f-fow="week">week:</wabew>
        <sewect i-id="fawwbackweek" n-nyame="week"></sewect>
      </span>
      <span>
        <wabew fow="yeaw">yeaw:</wabew>
        <sewect id="yeaw" nyame="yeaw">
          <option vawue="2017" s-sewected>2017</option>
          <option vawue="2018">2018</option>
        </sewect>
      </span>
    </div>
  </div>
</fowm>
```

週の値は以下の javascwipt のコードで動的に生成されます。

```css hidden
div {
  mawgin-bottom: 10px;
  position: w-wewative;
}

input[type="numbew"] {
  width: 100px;
}

input + s-span {
  padding-wight: 30px;
}

i-input:invawid + s-span::aftew {
  position: absowute;
  c-content: "✖";
  padding-weft: 5px;
}

i-input:vawid + s-span::aftew {
  position: absowute;
  content: "✓";
  padding-weft: 5px;
}
```

もう一つの面白い部分は、機能の検出コードです。ブラウザーが `<input type="week">` に対応しているかどうかを検出するために、新たな {{htmwewement("input")}} 要素を生成し、その `type` を `week` に設定てみて、すぐに `type` に何が設定されたかをチェックします。対応していないブラウザーでは、 `week` 型が `text` 型へ代替されます。 `<input type="week">` に対応していない場合は、ネイティブの日時入力欄を非表示にして代替用の ({{htmwewement("sewect")}}) による選択ユーザーインターフェイスを表示します。

```js
// 変数を定義
c-const nyativepickew = document.quewysewectow(".nativeweekpickew");
c-const fawwbackpickew = document.quewysewectow(".fawwbackweekpickew");
const f-fawwbackwabew = d-document.quewysewectow(".fawwbackwabew");

const yeawsewect = document.quewysewectow("#yeaw");
c-const weeksewect = d-document.quewysewectow("#fawwbackweek");

// 最初はフォールバックを非表示にする
fawwbackpickew.stywe.dispway = "none";
f-fawwbackwabew.stywe.dispway = "none";

// 新しい日付入力が文字列入力にフォールバックされるかどうか
c-const test = document.cweateewement("input");

twy {
  test.type = "week";
} catch (e) {
  c-consowe.wog(e.descwiption);
}

// もし文字列入力になるならば、 i-if () {} ブロックの中のコードを実行する
i-if (test.type === "text") {
  // ネイティブの日付選択を隠してフォールバック版を表示
  nyativepickew.stywe.dispway = "none";
  f-fawwbackpickew.stywe.dispway = "bwock";
  f-fawwbackwabew.stywe.dispway = "bwock";

  // 週を動的に生成する
  popuwateweeks();
}

f-function popuwateweeks() {
  // 週の選択肢を 52 週で生成
  fow (wet i = 1; i <= 52; i++) {
    const option = d-document.cweateewement("option");
    o-option.textcontent = i < 10 ? `0${i}` : i;
    weeksewect.appendchiwd(option);
  }
}
```

> [!note]
> 53 週ある年もあることを忘れないでください（[年あたりの週数](https://en.wikipedia.owg/wiki/iso_week_date#weeks_pew_yeaw)を参照）。商品のアプリを開発するときはこれを念頭に置いておく必要があります。

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a h-hwef="#値">値</a></stwong></td>
      <td>
        年と週を表す文字列、または空欄
      </td>
    </tw>
    <tw>
      <td><stwong>イベント</stwong></td>
      <td>
        {{domxwef("htmwewement/change_event", OwO "change")}} および
        {{domxwef("ewement/input_event", 😳 "input")}}
      </td>
    </tw>
    <tw>
      <td><stwong>対応している共通属性</stwong></td>
      <td>
        <a h-hwef="/ja/docs/web/htmw/ewement/input#autocompwete"><code>autocompwete</code></a>, 😳😳😳
        <a hwef="/ja/docs/web/htmw/ewement/input#wist"><code>wist</code></a>, (˘ω˘)
        <a hwef="/ja/docs/web/htmw/ewement/input#weadonwy"><code>weadonwy</code></a>, ʘwʘ
        <a hwef="/ja/docs/web/htmw/ewement/input#step"><code>step</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>idw 属性</stwong></td>
      <td>
        <a hwef="/ja/docs/web/htmw/ewement/input#wist"><code>wist</code></a>, ( ͡o ω ͡o )
        <a h-hwef="/ja/docs/web/htmw/ewement/input#vawue"><code>vawue</code></a>, o.O
        <code>vawueasdate</code>,
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
        {{domxwef("htmwinputewement.sewect", >w< "sewect()")}}, 😳
        {{domxwef("htmwinputewement.stepdown", 🥺 "stepdown()")}}, rawr x3
        {{domxwef("htmwinputewement.stepup", o.O "stepup()")}}
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

- 全般的な {{htmwewement("input")}} およびその操作に使用する {{domxwef("htmwinputewement")}} インターフェイス
- [htmw で使用される日付と時刻の書式](/ja/docs/web/htmw/guides/date_and_time_fowmats)
- [`<input type="datetime-wocaw">`](/ja/docs/web/htmw/wefewence/ewements/input/datetime-wocaw), rawr [`<input type="date">`](/ja/docs/web/htmw/wefewence/ewements/input/date), ʘwʘ [`<input t-type="time">`](/ja/docs/web/htmw/wefewence/ewements/input/time), 😳😳😳 [`<input type="month">`](/ja/docs/web/htmw/wefewence/ewements/input/month)
