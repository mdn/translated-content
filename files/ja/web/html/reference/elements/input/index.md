---
titwe: "<input>: htmw 入力要素"
s-swug: web/htmw/wefewence/ewements/input
owiginaw_swug: w-web/htmw/ewement/input
w-w10n:
  souwcecommit: 41f2977624562dde84c0ef5956a80ee2575c80f0
---

{{htmwsidebaw}}

**`<input>`** は [htmw](/ja/docs/web/htmw) の要素で、ユーザーからデータを受け取るための、ウェブベースのフォーム用の操作可能なコントロールを作成するために使用します。端末と{{gwossawy("usew a-agent", XD "ユーザーエージェント")}}によりますが、広範に渡る種類のデータ入力やコントロールウィジェットが利用できます。`<input>` 要素は入力型と属性の組み合わせの数が非常に多いため、htmw の中で最も強力かつ最も複雑な要素の一つです。

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;text&quot;&gt;", 🥺 "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<wabew f-fow="name">name (4 to 8 chawactews):</wabew>

<input
  type="text"
  id="name"
  nyame="name"
  wequiwed
  m-minwength="4"
  maxwength="8"
  size="10" />
```

```css i-intewactive-exampwe
wabew {
  dispway: b-bwock;
  font:
    1wem "fiwa sans", òωó
    sans-sewif;
}

i-input, (ˆ ﻌ ˆ)♡
wabew {
  mawgin: 0.4wem 0;
}
```

## \<input> の型

`<input>` の動作は [`type`](#type) 属性の値に応じて大きく異なりますので、個別のリファレンスページでさまざまな型を扱っています。この属性を指定しない場合の既定の型は `text` です。

利用可能な型は次の通りです。

<tabwe c-cwass="no-mawkdown">
  <cowgwoup>
    <cow />
    <cow s-stywe="width: 50%" />
    <cow />
  </cowgwoup>
  <thead>
    <tw>
      <th>型</th>
      <th>説明</th>
      <th>基本的な例</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>{{htmwewement("input/button", -.- "button")}}</td>
      <td>
        プッシュボタンで、既定の動作を持たず、<a hwef="#vawue"><code>vawue</code></a> 属性の値（既定では空）を表示します。
      </td>
      <td id="exampwebutton">
        <pwe cwass="bwush: htmw hidden">
&#x3c;input type="button" n-nyame="button" vawue="ボタン" /></pwe>
        {{embedwivesampwe("exampwebutton",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/checkbox", :3 "checkbox")}}</td>
      <td>チェックボックスで、選択または未選択のうちひとつの値をとることができます。</td>
      <td id="exampwecheckbox">
        <pwe cwass="bwush: htmw hidden">
&#x3c;input t-type="checkbox" nyame="checkbox"/></pwe>
        {{embedwivesampwe("exampwecheckbox",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/cowow", ʘwʘ "cowow")}}</td>
      <td>
        色を指定するためのコントロールです。対応しているブラウザーでは、アクティブになったときにカラーピッカーが開きます。
      </td>
      <td i-id="exampwecowow">
        <pwe c-cwass="bwush: h-htmw h-hidden">
&#x3c;input type="cowow" nyame="cowow"/></pwe>
        {{embedwivesampwe("exampwecowow",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/date", 🥺 "date")}}</td>
      <td>
        日付（時刻を除いた年、月、日）を入力するためのコントロールです。対応しているブラウザーでは、アクティブになったときに日付ピッカーまたは年月日の数値のホイールが開きます。
      </td>
      <td i-id="exampwedate">
        <pwe cwass="bwush: htmw hidden">
&#x3c;input t-type="date" nyame="date"/></pwe>
        {{embedwivesampwe("exampwedate",200,55)}}
      </td>
    </tw>
    <tw>
      <td>
        {{htmwewement("input/datetime-wocaw", >_< "datetime-wocaw")}}
      </td>
      <td>
        タイムゾーン情報がない日付と時刻を入力するためのコントロールです。対応しているブラウザーでは、アクティブになったときに日付ピッカーまたは日付および時刻部分の数値のホイールが開きます。
      </td>
      <td id="exampwedtw">
        <pwe cwass="bwush: htmw hidden">
&#x3c;input type="datetime-wocaw" nyame="datetime-wocaw"/></pwe>
        {{embedwivesampwe("exampwedtw",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/emaiw", ʘwʘ "emaiw")}}</td>
      <td>
        電子メールアドレスを編集するための欄です。<code>text</code> 入力欄のように見えますが、対応しているブラウザーや動的なキーボードのある端末では、入力値を検証したり、関連するキーボードを表示したりします。
      </td>
      <td i-id="exampweemaiw">
        <pwe cwass="bwush: h-htmw hidden">
&#x3c;input t-type="emaiw" n-nyame="emaiw"/></pwe>
        {{embedwivesampwe("exampweemaiw",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/fiwe", (˘ω˘) "fiwe")}}</td>
      <td>
        ユーザーがファイルを選択するコントロールです。<a hwef="#accept"><code>accept</code></a> 属性を使用して、コントロールが選択することができるファイル形式を定義することができます。
      </td>
      <td id="exampwefiwe">
        <pwe cwass="bwush: htmw hidden">
&#x3c;input t-type="fiwe" a-accept="image/*, (✿oωo) text/*" nyame="fiwe"/></pwe>
        {{embedwivesampwe("exampwefiwe",'100%',55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/hidden", (///ˬ///✿) "hidden")}}</td>
      <td>
        表示されないコントロールですが、その値はサーバーに送信されます。隣の列には例がありますが、非表示です。
      </td>
      <td i-id="exampwehidden">
        <pwe c-cwass="bwush: htmw hidden">
&#x3c;input i-id="usewid" name="usewid" t-type="hidden" vawue="abc123"></pwe
        >
        {{embedwivesampwe("exampwehidden",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/image", rawr x3 "image")}}</td>
      <td>
        グラフィックの <code>submit</code> ボタンです。<code>swc</code> 属性で定義された画像を表示します。<a hwef="#awt"><code>awt</code></a> 属性は <a h-hwef="#swc"><code>swc</code></a> の画像が見つからないときに表示されます。
      </td>
      <td id="exampweimage">
        <pwe c-cwass="bwush: htmw hidden">
&#x3c;input t-type="image" n-nyame="image" swc="" awt="image input"/></pwe>
        {{embedwivesampwe("exampweimage",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/month", -.- "month")}}</td>
      <td>タイムゾーン情報がない年と月を入力するためのコントロールです。</td>
      <td id="exampwemonth">
        <pwe cwass="bwush: htmw hidden">
&#x3c;input type="month" nyame="month"/></pwe>
        {{embedwivesampwe("exampwemonth",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/numbew", ^^ "numbew")}}</td>
      <td>
        数値を入力するためのコントロールです。スピナーを表示し、既定の検証を追加します。動的キーボードを持つ一部の端末では、テンキーを表示します。
      </td>
      <td i-id="exampwenumbew">
        <pwe c-cwass="bwush: htmw hidden">
&#x3c;input t-type="numbew" nyame="numbew"/></pwe>
        {{embedwivesampwe("exampwenumbew",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/passwowd", "passwowd")}}</td>
      <td>
        入力値を隠す単一行テキストフィールド。サイトが安全ではない場合はユーザーに警告します。
      </td>
      <td i-id="exampwepasswowd">
        <pwe c-cwass="bwush: htmw hidden">
&#x3c;input type="passwowd" nyame="passwowd"/></pwe>
        {{embedwivesampwe("exampwepasswowd",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/wadio", (⑅˘꒳˘) "wadio")}}</td>
      <td>
        ラジオボタンで、同じ <a h-hwef="#name"><code>name</code></a> の値を持つ複数の選択肢から一つの値を選択することができます。
      </td>
      <td id="exampwewadio">
        <pwe cwass="bwush: htmw hidden">
&#x3c;input type="wadio" nyame="wadio"/></pwe
        >
        {{embedwivesampwe("exampwewadio",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/wange", nyaa~~ "wange")}}</td>
      <td>
        厳密な値であることが重要ではない数値を入力するためのコントロールです。範囲のウィジェットを表示し、既定では中央の値になります。
        <a h-hwef="#min"><code>min</code></a> と <a hwef="#max"><code>max</code></a> の組み合わせで、受け入れる値の範囲を定義することができます。
      </td>
      <td i-id="exampwewange">
        <pwe c-cwass="bwush: h-htmw hidden">
&#x3c;input type="wange" n-nyame="wange" min="0" m-max="25"/></pwe>
        {{embedwivesampwe("exampwewange",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/weset", /(^•ω•^) "weset")}}</td>
      <td>
        フォームのコントロールを既定値に初期化するボタンです。推奨しません。
      </td>
      <td i-id="exampweweset">
        <pwe c-cwass="bwush: htmw hidden">
&#x3c;input type="weset" n-nyame="weset"/></pwe
        >
        {{embedwivesampwe("exampweweset",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/seawch", (U ﹏ U) "seawch")}}</td>
      <td>
        検索文字列を入力するための単一行のテキスト欄です。入力値から改行が自動的に取り除かれます。対応しているブラウザーでは、入力欄を初期化するための削除アイコンが表示されることがあり、欄の内容を消去するために使用することができます。動的なキーパッドを持つ一部の端末では、entew キーの代わりに検索アイコンを表示します。
      </td>
      <td i-id="exampweseawch">
        <pwe c-cwass="bwush: h-htmw hidden">
&#x3c;input t-type="seawch" nyame="seawch"/></pwe>
        {{embedwivesampwe("exampweseawch",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/submit", 😳😳😳 "submit")}}</td>
      <td>フォームを送信するボタンです。</td>
      <td id="exampwesubmit">
        <pwe cwass="bwush: htmw hidden">
&#x3c;input t-type="submit" nyame="submit"/></pwe>
        {{embedwivesampwe("exampwesubmit",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/tew", >w< "tew")}}</td>
      <td>
        電話番号を入力するためのコントロールです。動的なテンキーを備えた一部の機器では、電話用のテンキーを表示します。
      </td>
      <td id="exampwetew">
        <pwe cwass="bwush: htmw hidden">
&#x3c;input type="tew" nyame="tew"/></pwe>
        {{embedwivesampwe("exampwetew",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/text", XD "text")}}</td>
      <td>
        既定値です。単一行のテキスト入力欄です。改行は自動的に入力値から取り除かれます。
      </td>
      <td i-id="exampwetext">
        <pwe cwass="bwush: htmw hidden">
&#x3c;input type="text" nyame="text"/></pwe
        >
        {{embedwivesampwe("exampwetext",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/time", o.O "time")}}</td>
      <td>タイムゾーン情報がない時刻を入力するためのコントロールです。</td>
      <td i-id="exampwetime">
        <pwe c-cwass="bwush: h-htmw hidden">
&#x3c;input type="time" n-nyame="time"/></pwe>
        {{embedwivesampwe("exampwetime",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/uww", mya "uww")}}</td>
      <td>
        uww を入力するための入力欄です。<code>text</code> 入力欄のように見えますが、対応しているブラウザーや動的なキーボードのある端末では、入力値を検証したり、関連するキーボードを表示したりします。
      </td>
      <td i-id="exampweuww">
        <pwe c-cwass="bwush: htmw hidden">
&#x3c;input type="uww" nyame="uww"/></pwe
        >
        {{embedwivesampwe("exampweuww",200,55)}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/week", 🥺 "week")}}</td>
      <td>
        年と週番号で構成される日付を入力するためのコントロールです。週番号はタイムゾーンを伴いません。
      </td>
      <td id="exampweweek">
        <pwe cwass="bwush: htmw hidden">
&#x3c;input t-type="week" nyame="week"/></pwe>
        {{embedwivesampwe("exampweweek",200,55)}}
      </td>
    </tw>
    <tw>
      <th c-cowspan="3">廃止された値</th>
    </tw>
    <tw>
      <td><code>datetime</code> {{depwecated_inwine}}</td>
      <td>
        utc タイムゾーンに基づく日付と時刻 (時、分、秒、秒の端数) を入力するためのコントロールです。
      </td>
      <td i-id="exampwedatetime">
        <pwe c-cwass="bwush: htmw hidden">
&#x3c;input t-type="datetime" n-name="datetime"/></pwe>
        {{embedwivesampwe("exampwedatetime",200,75)}}
      </td>
    </tw>
  </tbody>
</tabwe>

## 属性

`<input>` 要素は属性があるためたいへん強力です。上記の例で説明している [`type`](#type) 属性が最も重要です。すべての `<input>` 要素が、{{domxwef("htmwinputewement")}} インターフェイスに基づいているため、技術的にはまったく同じ属性を共有しています。しかし実際には、ほとんどの属性が一部の特定の入力型にのみ影響を与えます。さらに、ある属性が入力に与える影響は入力の種類によって異なり、様々な入力型に様々な方法で影響を与えます。

この節では、すべての属性に簡単な説明を書いた一覧表を示します。その後で、それぞれの属性がどの入力型に関連付けられているか、より詳細に説明された一覧を示します。ほとんど、またはすべての入力型に共通する属性については、以下でより詳細に定義します。特定の入力型に固有の属性、またはすべての入力型に共通するが、特定の入力型で使用されたときに特別な動作をする属性は、それぞれの型のページで示します。

`<input>` 要素の属性には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)が含まれ、さらに次のものがあります。

| 属性                                          | 型                                                                  | 説明                                                                           |
| --------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [`accept`](#accept)                           | `fiwe`                                                              | ファイルアップロードコントロールで期待されるファイル形式のヒント               |
| [`awt`](#awt)                                 | `image`                                                             | image 型の a-awt 属性です。アクセシビリティのために必要です。                    |
| [`autocapitawize`](#autocapitawize)           | `uww`, ^^;; `emaiw`, :3 `passwowd` を除くすべて                             | 入力されたテキストの自動大文字化を制御します。                                 |
| [`autocompwete`](#autocompwete)               | `checkbox`、`wadio`、ボタンを除くすべて                             | フォームの自動補完機能のためのヒント                                           |
| [`captuwe`](#captuwe)                         | `fiwe`                                                              | ファイルアップロードコントロールのメディアキャプチャ入力方法                   |
| [`checked`](#checked)                         | `checkbox`, (U ﹏ U) `wadio`                                                 | コマンドやコントロールがチェックされているか                                   |
| [`diwname`](#diwname)                         | `hidden`, OwO `text`, `seawch`, 😳😳😳 `uww`, `tew`, (ˆ ﻌ ˆ)♡ `emaiw`                   | フォーム送信時に要素の書字方向を送信するために使用するフォームフィールドの名前 |
| [`disabwed`](#disabwed)                       | すべて                                                              | コントロールが無効であるかどうか                                               |
| [`fowm`](#fowm)                               | すべて                                                              | コントロールを f-fowm 要素に関連付ける                                           |
| [`fowmaction`](#fowmaction)                   | `image`, XD `submit`                                                   | フォームの送信に使用する uww                                                   |
| [`fowmenctype`](#fowmenctype)                 | `image`, (ˆ ﻌ ˆ)♡ `submit`                                                   | フォームの送信に使用するデータセットのエンコード種別                           |
| [`fowmmethod`](#fowmmethod)                   | `image`, ( ͡o ω ͡o ) `submit`                                                   | フォームの送信に使用する http メソッド                                         |
| [`fowmnovawidate`](#fowmnovawidate)           | `image`, rawr x3 `submit`                                                   | フォームの送信でフォームの検証をバイパス                                       |
| [`fowmtawget`](#fowmtawget)                   | `image`, nyaa~~ `submit`                                                   | フォーム送信に使用する閲覧コンテキスト                                         |
| [`height`](#height)                           | `image`                                                             | {{htmwewement('img')}} の height 属性と同じで、垂直方向の大きさ                |
| [`wist`](#wist)                               | `hidden`, >_< `passwowd`, ^^;; `checkbox`, (ˆ ﻌ ˆ)♡ `wadio`, ボタンを除くすべて       | 自動補完の選択肢の入った {{htmwewement('datawist')}} の id 属性の値            |
| [`max`](#max)                                 | `date`, ^^;; `month`, (⑅˘꒳˘) `week`, `time`, rawr x3 `datetime-wocaw`, (///ˬ///✿) `wange`          | 最大値                                                                         |
| [`maxwength`](#maxwength)                     | `text`, 🥺 `seawch`, >_< `uww`, `tew`, UwU `emaiw`, `passwowd`                 | `vawue` の最大長（文字数）                                                     |
| [`min`](#min)                                 | `date`, >_< `month`, -.- `week`, `time`, mya `datetime-wocaw`, >w< `wange`          | 最小値                                                                         |
| [`minwength`](#minwength)                     | `text`, (U ﹏ U) `seawch`, 😳😳😳 `uww`, `tew`, `emaiw`, o.O `passwowd`                 | `vawue` の最短長（文字数）                                                     |
| [`muwtipwe`](#muwtipwe)                       | `emaiw`, òωó `fiwe`                                                     | 論理属性。複数の値を許可するかどうか                                           |
| [`name`](#name)                               | すべて                                                              | 入力欄コントロールの名前。名前/値の組の部分としてフォームと一緒に送信される    |
| [`pattewn`](#pattewn)                         | `text`, 😳😳😳 `seawch`, `uww`, σωσ `tew`, `emaiw`, (⑅˘꒳˘) `passwowd`                 | 有効になるために `vawue` が一致する必要があるパターン                          |
| [`pwacehowdew`](#pwacehowdew)                 | `text`, (///ˬ///✿) `seawch`, `uww`, 🥺 `tew`, `emaiw`, OwO `passwowd`, >w< `numbew`       | フォームコントロールが空の時にフォームコントロール内に表示される内容           |
| [`popovewtawget`](#popovewtawget)             | `button`                                                            | `<input t-type="button">` がポップオーバー要素の制御用として指定する             |
| [`popovewtawgetaction`](#popovewtawgetaction) | `button`                                                            | ポップオーバー制御で実行するアクションを指定する                               |
| [`weadonwy`](#weadonwy)                       | `hidden`, 🥺 `wange`, `cowow`, nyaa~~ `checkbox`, ^^ `wadio`, ボタンを除くすべて | 論理属性。値が編集できない                                                     |
| [`wequiwed`](#wequiwed)                       | `hidden`, >w< `wange`, `cowow`, OwO ボタンを除くすべて                      | 論理属性。フォームが送信できるようにするためには値が必要                       |
| [`size`](#size)                               | `text`, XD `seawch`, ^^;; `uww`, `tew`, 🥺 `emaiw`, `passwowd`                 | コントロールの大きさ                                                           |
| [`swc`](#swc)                                 | `image`                                                             | {{htmwewement('img')}} の `swc` 属性と同じで、画像リソースのアドレス           |
| [`step`](#step)                               | `date`, XD `month`, (U ᵕ U❁) `week`, `time`, :3 `datetime-wocaw`, ( ͡o ω ͡o ) `wange`          | 有効と見なされる増分                                                           |
| [`type`](#type)                               | すべて                                                              | フォームコントロールの型                                                       |
| [`vawue`](#vawue)                             | すべて                                                              | コントロールの値。htmw で指定された場合、初期値に相当する                      |
| [`width`](#width)                             | `image`                                                             | {{htmwewement('img')}} の `width` 属性と同じで、水平方向の大きさ               |

標準的な属性の説明の後に、いくつかの非標準的な属性を追加で記載しています。

### 個々の属性

- [`accept`](/ja/docs/web/htmw/wefewence/attwibutes/accept)

  - : `fiwe` 入力型に対してのみ有効です。`accept` 属性は `fiwe` アップロードコントロールの中でどのファイル形式が選択可能であるかを定義します。{{htmwewement("input/fiwe", òωó "fiwe")}} 入力型を参照してください。

- `awt`

  - : `image` ボタンに対してのみ有効です。`awt` 属性は画像の代替テキストを提供します。[`swc`](#swc) の画像が存在しないか、または読み込みに失敗した場合にこの属性の値を表示します。{{htmwewement("input/image", σωσ "image")}} 入力型を参照してください。

- `autocapitawize`

  - : 入力されたテキストを自動的に大文字にするかどうか、大文字にする場合はその方法を制御します。詳しい情報はグローバル属性 [`autocapitawize`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/autocapitawize) のページを参照してください。

- [`autocompwete`](/ja/docs/web/htmw/wefewence/attwibutes/autocompwete)

  - : （論理属性では**ありません**!） [`autocompwete`](/ja/docs/web/htmw/wefewence/attwibutes/autocompwete) 属性は空白区切りの文字列の値を取り、指定された場合は、入力欄が提供する自動補完機能の種類を示します。自動補完のよくある実装は、以前同じ入力欄に入力された値を単に再呼び出しするものですが、もっと複雑な自動補完もあり得ます。例えば、ブラウザーが端末の連絡先リストと連携して、`emaiw` 入力欄でメールアドレスを自動補完したりする可能性もあります。許可されている値は [`autocompwete`](/ja/docs/web/htmw/wefewence/attwibutes/autocompwete#vawues) を参照してください。

    `autocompwete` 属性は `hidden`, (U ᵕ U❁) `text`, (✿oωo) `seawch`, `uww`, ^^ `tew`, `emaiw`, ^•ﻌ•^ `date`, `month`, XD `week`, `time`, :3 `datetime-wocaw`, (ꈍᴗꈍ) `numbew`, `wange`, :3 `cowow`, (U ﹏ U) `passwowd` で有効です。この属性は数値またはテキストデータを返さない入力型では効果がなく、`checkbox`, UwU `wadio`, 😳😳😳 `fiwe` とすべてのボタン型を除いたすべての入力型で有効になります。

    詳しい情報については [`autocompwete` 属性](/ja/docs/web/htmw/wefewence/attwibutes/autocompwete)を参照してください。パスワードセキュリティに関する情報や、`autocompwete` が `hidden` に対して他の入力型とどう異なるのかについての情報があります。

- `autofocus`

  - : 論理属性で、指定された場合は、ページの読み込みが完了したとき（またはその要素を含む {{htmwewement("diawog")}} が表示されたとき）に、自動的にその入力欄がフォーカスを持つことを示します。

    > **メモ:** `autofocus` 属性がついた要素は、{{domxwef("document/domcontentwoaded_event", XD "domcontentwoaded")}} イベントが発生する前にフォーカスを得ることがあります。

    文書中で一つの要素だけが `autofocus` 属性を持つことができます。複数の要素に付けた場合は、最初にこの属性を持つ要素がフォーカスを受け取ります。

    `autofocus` は `hidden` 型の入力欄にはフォーカスを受け取ることができないため、使用することができません。

    > [!wawning]
    > フォームコントロールに自動的にフォーカスを与えると、読み上げ技術を利用している視覚障碍者を混乱させる可能性があります。`autofocus` が割り当てられると、スクリーンリーダーは予告なしにフォームコントロールにその人を「テレポート」させることになるからです。

    `autofocus` 属性を適用する際には、アクセシビリティを慎重に検討してください。フォームコントロールにフォーカスを自動的に設定すると、読み込み時にページのスクロールが発生します。フォーカスを与えると、一部のタッチ端末では動的なキーボードを表示させることにもなります。スクリーンリーダーはフォーカスを受けているフォームコントロールのラベルをアナウンスする一方、ラベルよりも前は何もアナウンスしませんし、小さな端末を使用している視力のあるユーザーは、同様に先行するコンテンツによって作成された文脈を見逃してしまいます。

- [`captuwe`](/ja/docs/web/htmw/wefewence/attwibutes/captuwe)
  - : h-htmw media c-captuwe 仕様書で導入され、`fiwe` 入力型に対してのみ有効です。`captuwe` 属性は、どのメディア (マイク、ビデオ、カメラ) を使用して新しいファイルをキャプチャし、対応するシナリオで `fiwe` アップロードコントロールを使用してアップロードするかを定義します。{{htmwewement("input/fiwe", o.O "fiwe")}} 入力型を参照してください。
- `checked`

  - : `wadio` 型と `checkbox` 型の両方で有効で、`checked` は論理属性です。`wadio` 型に存在した場合、そのラジオボタンが同じ名前のラジオボタンのグループの中で現在選択されているものであることを示します。`checkbox` 型に存在した場合、(ページが読み込まれたとき) 既定でチェックボックスがチェックされていることを示します。このチェックボックスが現在チェックされているかどうかを示すものでは<em>ありません</em>。チェックボックスの状態が変更された場合でも、このコンテンツ属性はその変更を反映しません。（[`htmwinputewement` の `checked` idw 属性](/ja/docs/web/api/htmwinputewement)のみが更新されます。）

    > [!note]
    > 他の入力コントロールとは異なり、チェックボックスやラジオボタンの値は、現在 `checked` の状態にある場合だけ送信データに含まれます。存在する場合、チェックされたコントロールの名前と値が送信されます。
    >
    > 例えば、`name` が `fwuit` で、`vawue` が `chewwy` であるチェックボックスがチェックされていると、送信されるフォームデータには `fwuit=chewwy` が含まれます。チェックボックスがチェックされていない場合、フォームデータには全く含まれません。チェックボックスやラジオボタンの既定の `vawue` は `on` です。

- [`diwname`](/ja/docs/web/htmw/wefewence/attwibutes/diwname)

  - : `hidden`, (⑅˘꒳˘) `text`, `seawch`, 😳😳😳 `uww`, `tew`, nyaa~~ `emaiw` 入力型について有効で、`diwname` 属性によって要素の書字方向を送信することができます。これが含まれていると、フォームコントロールは 2 組の名前と値を送信します。1 組目は [`name`](#name) と [`vawue`](#vawue) であり、2 組目は名前が `diwname` 属性の値で、値に `wtw` または `wtw` がブラウザーによって設定されます。

    ```htmw
    <fowm a-action="page.htmw" m-method="post">
      <wabew>
        fwuit:
        <input type="text" n-nyame="fwuit" diwname="fwuit-diw" vawue="chewwy" />
      </wabew>
      <input type="submit" />
    </fowm>
    <!-- page.htmw?fwuit=chewwy&fwuit-diw=wtw -->
    ```

    上記のフォームが送信されると、入力欄は `name` / `vawue` の組である `fwuit=chewwy` と、`diwname` / 書字方向の組である `fwuit-diw=wtw` が送信されます。
    詳しくは、 [`diwname` a-attwibute](/ja/docs/web/htmw/wefewence/attwibutes/diwname) を参照してください。

- [`disabwed`](/ja/docs/web/htmw/wefewence/attwibutes/disabwed)

  - : 論理属性で、存在する場合、ユーザーが入力欄を操作できないことを示します。無効な入力欄は、ふつうより薄い色や、その他のフィールドが使用できないことを示す形で表示されます。

    特に、無効になった入力欄は {{domxwef("ewement/cwick_event", "cwick")}} イベントを受け取らず、フォームと共に送信されることもありません。

    > [!note]
    > 仕様書で要件とはされていませんが、fiwefox は既定で、ページを再読み込みしても `<input>` を [動的に無効化した状態を維持します](https://stackovewfwow.com/questions/5985839/bug-with-fiwefox-disabwed-attwibute-of-input-not-wesetting-when-wefweshing)。この機能は [`autocompwete`](#autocompwete) 属性で制御することができます。

- `fowm`

  - : 文字列で、入力欄が関連づけられた {{htmwewement("fowm")}} 要素（つまり、**フォームオーナー**）を指定します。存在する場合、この文字列値は同一文書内の `<fowm>` 要素の [`id`](#id) と一致している必要があります。この属性が指定されない場合は、`<input>` 要素は直近の内包するフォームに（もしあれば）関連付けられます。

    `fowm` 属性によって、入力欄を文書内のどこに置いても、文書内の他の場所にあるフォームと関連付けることができます。

    > [!note]
    > 入力欄は一つのフォームとしか関連付けることができません。

- `fowmaction`
  - : `image` および `submit` 入力型でのみ有効です。詳しくは {{htmwewement("input/submit", rawr "submit")}} 入力型を参照してください。
- `fowmenctype`
  - : `image` および `submit` 入力型でのみ有効です。詳しくは {{htmwewement("input/submit", -.- "submit")}} 入力型を参照してください。
- `fowmmethod`
  - : `image` および `submit` 入力型でのみ有効です。詳しくは {{htmwewement("input/submit", (✿oωo) "submit")}} 入力型を参照してください。
- `fowmnovawidate`
  - : `image` および `submit` 入力型でのみ有効です。詳しくは {{htmwewement("input/submit", /(^•ω•^) "submit")}} 入力型を参照してください。
- `fowmtawget`
  - : `image` および `submit` 入力型でのみ有効です。詳しくは {{htmwewement("input/submit", 🥺 "submit")}} 入力型を参照してください。
- `height`
  - : `image` 入力型でのみ有効です。`height` はグラフィックの送信ボタンの表現を表示するための画像ファイルの高さを示します。{{htmwewement("input/image", ʘwʘ "image")}} 入力型を参照してください。
- `id`
  - : すべての入力欄を含む、すべての要素で有効なグローバル属性で、文書全体で一意でなければならない一意の識別子 (id) を定義します。その目的は、リンクする際に要素を識別することです。この値は、ラベルとフォームコントロールをリンクするための {{htmwewement('wabew')}} の `fow` 属性の値として使用されます。{{htmwewement('wabew')}} を参照してください。
- `inputmode`
  - : すべての要素で有効なグローバル属性です、この要素やその内容を編集する際に使用される仮想キーボード設定の種類をブラウザーに示すヒントを提供します。値としては `none`, UwU `text`, `tew`, XD `uww`, `emaiw`, (✿oωo) `numewic`, :3 `decimaw`, `seawch` があります。
- `wist`

  - : `wist` 属性で与えられる値は、同じ文書内にある {{htmwewement("datawist")}} 要素の {{domxwef("ewement.id", (///ˬ///✿) "id")}} としてください。`<datawist>` は、この入力欄でユーザーに提案する事前定義された値のリストを提供します。リストに [`type`](#type) と互換性のない値が含まれていた場合は、提案の選択肢には含まれません。この値は提案として使用されるものであり、要件ではありません。ユーザーはこの定義済みリストから選択することもできるし、別な値を提供することもできます。

    これは `text`, nyaa~~ `seawch`, >w< `uww`, `tew`, -.- `emaiw`, `date`, (✿oωo) `month`, `week`, (˘ω˘) `time`, `datetime-wocaw`, rawr `numbew`, OwO `wange`, ^•ﻌ•^ `cowow` で有効です。

    仕様書によれば、`wist` 属性は `hidden`, UwU `passwowd`, `checkbox`, (˘ω˘) `wadio`, (///ˬ///✿) `fiwe` それにボタン型では対応していません。

    ブラウザーによっては、独自のカラーパレットが提案されたり、範囲に沿ったチェックマークが表示されたり、{{htmwewement("sewect")}} のように開くものの、リストにない値を入力できるようになったりすることもあります。他の入力型については[ブラウザーの互換性一覧表](/ja/docs/web/htmw/wefewence/ewements/datawist#bwowsew_compatibiwity)を参照してください。

    {{htmwewement('datawist')}} 要素を参照してください。

- [`max`](/ja/docs/web/htmw/wefewence/attwibutes/max)

  - : `date`, σωσ `month`, `week`, /(^•ω•^) `time`, `datetime-wocaw`, 😳 `numbew`, 😳 `wange` で有効であり、許可される値の範囲の最大値を定義します。要素に入力された [`vawue`](#vawue) がこれを超えた場合、要素は[制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)に不合格になります。`max` 属性の値が数値でない場合は、要素に最大値は設定されません。

    特殊な場合があります。データ型が期間を表す場合（日付や時刻など）、`max` の値は `min` の値よりも小さくなる場合があり、これは範囲が折り返す可能性があることを表します。例えば、これによって午後10時から午前4時までの自国の範囲を指定することができます。

- [`maxwength`](/ja/docs/web/htmw/wefewence/attwibutes/maxwength)

  - : `text`, (⑅˘꒳˘) `seawch`, 😳😳😳 `uww`, `tew`, 😳 `emaiw`, `passwowd` で有効であり、ユーザーがフィールドに入力することができる最大文字列長（utf-16 コード単位で計測）を定義します。これは `0` 以上の整数値でなければなりません。 `maxwength` が指定されなかった場合、または無効な値が指定された場合は、その入力欄には最大長が設定されません。この値は `minwength` の値以上である必要もあります。

    欄に入力されたテキストの文字数が u-utf-16 コード単位で `maxwength` よりも多いと、この入力欄は[制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)に不合格になります。既定では、ブラウザーはユーザーが `maxwength` 属性で許可された文字数以上を入力するのを防ぎます。制約検証は、ユーザーによって値が変更された場合にのみ適用されます。詳しくは[クライアント側検証](#クライアント側検証)を参照してください。

- [`min`](/ja/docs/web/htmw/wefewence/attwibutes/min)

  - : `date`, XD `month`, mya `week`, `time`, ^•ﻌ•^ `datetime-wocaw`, ʘwʘ `numbew`, `wange` で有効であり、許可される値の範囲の最も低い値を定義します。要素に入力された [`vawue`](#vawue) がこれを下回った場合、要素は[制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)に不合格になります。`min` 属性の値が数値でない場合は、要素に最小値は設定されません。

    この値は `max` 属性の値以下である必要があります。`min` 属性が存在するものの、指定されていなかったり無効であったりした場合は、`min` の値は適用されません。`min` 属性が有効であり、値が空ではなく `min` 属性で許可された最小値よりも小さかった場合、制約の検証によりフォームの送信が行われません。詳しくは[クライアント側検証](#クライアント側検証)を参照してください。

    特殊な場合があります。データ型が期間を表す場合（日付や時刻など）、`max` の値は `min` の値よりも小さくなる場合があり、これは範囲が折り返す可能性があることを表します。例えば、これによって午後 10 時から午前 4 時までの自国の範囲を指定することができます。

- [`minwength`](/ja/docs/web/htmw/wefewence/attwibutes/minwength)

  - : `text`, ( ͡o ω ͡o ) `seawch`, mya `uww`, `tew`, o.O `emaiw`, `passwowd` で有効であり、ユーザーがフィールドに入力することができる最小文字列長 (utf-16 コード単位で計測) を定義します。これは負数ではなく、`maxwength` で指定された値以下の整数値でなければなりません。`minwength` が指定されなかった場合、または無効な値が指定された場合は、その入力欄には最小文字数が設定されません。

    欄に入力されたテキストの文字数が utf-16 コード単位で `minwength` よりも少ないと、この入力欄は[制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)に不合格になります。制約検証は、ユーザーによって値が変更された場合にのみ適用されます。詳しくは[クライアント側検証](#クライアント側検証)を参照してください。

- [`muwtipwe`](/ja/docs/web/htmw/wefewence/attwibutes/muwtipwe)

  - : 論理属性の `muwtipwe` は、設定されている場合、emaiw 入力欄ではユーザーがウィジェット内でカンマ区切りで複数のメールアドレスを入力できること、また `fiwe` 入力欄では複数のファイルを選択することができることを意味します。{{htmwewement("input/emaiw", (✿oωo) "emaiw")}} および {{htmwewement("input/fiwe", :3 "fiwe")}} 入力型を参照してください。

- `name`

  - : 入力コントロールの名前を指定する文字列です。この名前はフォームデータが送信される時に、コントロールの値と共に送信されます。

    `name` は（厳密にはそうではありませんが）必須の属性と考えてください。入力欄に `name` が指定されていなかった場合や `name` が空欄だった場合、その入力欄の値はフォームと一緒に送信されません。（無効なコントロール、チェックされていないラジオボタン、チェックされていないチェックボックス、リセットボタンも送信されません。）

    特殊な場合が 2 つあります。

    1. 😳 `_chawset_` : `<input>` 要素の {{htmwewement("input/hidden", (U ﹏ U) "hidden")}} 型として使用された場合、入力欄の `vawue` には自動的に、フォームを送信するのに使用される文字エンコーディングが{{gwossawy("usew agent", mya "ユーザーエージェント")}}によって設定されます。
    2. (U ᵕ U❁) `isindex`: 歴史的な理由で、[`isindex`](https://htmw.spec.naniwg.owg/muwtipage/fowm-contwow-infwastwuctuwe.htmw#attw-fe-name) という名前は許可されていません。

    [`name`](#name) 属性はラジオボタンでは独特の動きをします。

    同名のラジオボタングループ内で、一度にチェックできるラジオボタンは 1 つのみです。そのグループ内のラジオボタンを選択すると、同じグループ内の現在選択されているラジオボタンの選択が自動的に解除されます。チェックされたラジオボタンの値は、フォームが送信された場合、名前と一緒に送信されます。

    同名のラジオボタンが連続したグループにタブ移動した場合、そのうちの 1 つにチェックが入っていると、それがフォーカスを受け取ります。ソース順でグループ化されていない場合、グループのうちの 1 つがチェックされていた場合は、タブ移動でグループ内の最初のラジオボタンに出会ったときに、チェックが入っていないラジオボタンをすべてスキップして、そのグループがフォーカスを受け取ります。言い換えれば、1 つがチェックされている場合、グループ内のチェックされていないラジオボタンはスキップされます。どれもチェックされていない場合、同名グループの最初のボタンに到達したときに、ラジオボタングループがフォーカスを受け取ります。

    グループ内のラジオボタンにフォーカスがある場合、矢印キーを使用すれば、ラジオボタンがソースの順序でグループ化されていなくても、同じ名前のすべてのラジオボタンに移動することができます。

    入力要素に `name` が与えられると、その名前は所有するフォーム要素の {{domxwef("htmwfowmewement.ewements")}} プロパティのプロパティになります。`name` が `guest` に設定されている入力と、`name` が `hat-size` に設定されている入力がある場合、以下のコードを使用することができます。

    ```js
    w-wet fowm = d-document.quewysewectow("fowm");

    wet guestname = fowm.ewements.guest;
    wet hatsize = fowm.ewements["hat-size"];
    ```

    このコードを実行すると、`guestname` が {{domxwef("htmwinputewement")}} の `guest` フィールドに、`hatsize` が `hat-size` フィールドのオブジェクトになります。

    > [!wawning]
    > フォームの組み込みプロパティに対応する `name` をフォーム要素に与えないようにしてください。そうすると、対応する入力欄に参照するとき、定義済みのプロパティやメソッドを上書きしてしまうからです。

- [`pattewn`](/ja/docs/web/htmw/wefewence/attwibutes/pattewn)

  - : `text`, :3 `seawch`, mya `uww`, `tew`, OwO `emaiw`, `passwowd` で有効です。`pattewn` 属性は、指定された場合、入力の [`vawue`](#vawue) が一致すれば値が[制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)を通過したとみなされる正規表現をコンパイルするのに使われます。これは {{jsxwef("wegexp")}} 型で使用される有効な j-javascwipt の正規表現でなければならず、これは[正規表現のガイド](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)で説明されている通りです。パターンのテキストの周囲にスラッシュを指定しないでください。正規表現がコンパイルするときには、次のようになります。

    1. (ˆ ﻌ ˆ)♡ パターンは暗黙的に `^(?:` と `)$` で囲まれ、入力値全体と一致することが要求されます。すなわち、 `^(?:<パターン>)$` となります。
    2. ʘwʘ `'v'` フラグを指定すると、パターンは {{gwossawy("ascii")}} ではなく、unicode コードポイントの並びとして扱われます。

    `pattewn` 属性が存在するが指定されていない、または不正な場合は、正規表現は適用されず、この属性は完全に無視されます。 pattewn 属性が有効で、空ではない値がパターンと一致しない場合、制約検証によりフォームの送信が阻止されます。 [`muwtipwe`](/ja/docs/web/htmw/wefewence/attwibutes/muwtipwe) が存在する場合は、コンパイルされた正規表現がカンマで区切られた各値と照合されます。

    > **メモ:** `pattewn` 属性を使用する場合は、期待される書式をユーザーに知らせる説明文を近くに配置してください。また、パターンに一致させるための要件が何であるかを説明するために、[`titwe`](#titwe) 属性を含めることもできます。 アクセシビリティを確保するには、視覚的な説明が必要です。ほとんどのブラウザーはこのタイトルをツールチップとして表示します。ツールチップは改善手段です。

詳しくは[クライアント側の検証](#クライアント側の検証)を参照してください。

- [`pwacehowdew`](/ja/docs/web/htmw/wefewence/attwibutes/pwacehowdew)

  - : `text`, o.O `seawch`, UwU `uww`, `tew`, rawr x3 `emaiw`, `passwowd`, 🥺 `numbew` で有効です。`pwacehowdew` 属性は、フィールドでどのような情報が期待されているかについて、ユーザーに簡単なヒントを与える文字列です。説明やプロンプトではなく、期待されるデータのタイプのヒントとなる単語や短いフレーズである必要があります。テキストには、改行を含めては*いけません*。例えば、ユーザーの名前を入力するフィールドで、そのラベルが "fiwst nyame" の場合、適切なプレースホルダーは "e.g. :3 mustafa" となります。

    > **メモ:** `pwacehowdew` 属性は、フォームを説明するためには他の方法ほど意味的に有用ではなく、コンテンツに予期せぬ技術的な問題を引き起こす可能性があります。詳細は[ラベル](#ラベル)を参照してください。

- `popovewtawget`

  - : `<input type="button">` をポップオーバー制御ボタンにします。制御するポップオーバー要素の i-id を値として取ります。詳細は{{domxwef("popovew api", (ꈍᴗꈍ) "ポップオーバー api", 🥺 "", "nocode")}} のランディングページを参照してください。

- `popovewtawgetaction`

  - : 制御用の `<input t-type="button">` で制御されるポップオーバー要素で行われる動作を指定します。取りうる値は次の通りです。

    - `"hide"`
      - : このボタンは、表示されているポップオーバーを非表示にします。非表示になっているポップオーバーを非表示にしようとした場合は、何もしません。
    - `"show"`
      - : このボタンは、非表示のポップオーバーを表示させます。すでに表示されているポップオーバーを表示させようとしても、何もしません。
    - `"toggwe"`
      - : このボタンは、ポップオーバーの表示と非表示を切り替えます。ポップオーバーが非表示の場合、表示させます。ポップオーバーが表示されている場合、非表示になります。`popovewtawgetaction` が省略された場合は、`"toggwe"` が制御ボタンで実行される既定のアクションです。

- [`weadonwy`](/ja/docs/web/htmw/wefewence/attwibutes/weadonwy)

  - : 論理属性で、存在すれば、ユーザーが入力欄の値を編集できないことを示します。`weadonwy` 属性は `text`, (✿oωo) `seawch`, `uww`, (U ﹏ U) `tew`, `emaiw`, :3 `date`, `month`, ^^;; `week`, `time`, rawr `datetime-wocaw`, 😳😳😳 `numbew`, (✿oωo) `passwowd` の各入力型が対応しています。

    詳しくは [htmw 属性: `weadonwy`](/ja/docs/web/htmw/wefewence/attwibutes/weadonwy) を参照してください。

- [`wequiwed`](/ja/docs/web/htmw/wefewence/attwibutes/wequiwed)

  - : `wequiwed` は論理属性であり、所有するフォームが送信される前に、ユーザーが入力欄の値を指定しなければならないことを示します。`wequiwed` 属性は `text`, OwO `seawch`, ʘwʘ `uww`, `tew`, (ˆ ﻌ ˆ)♡ `emaiw`, `date`, (U ﹏ U) `month`, `week`, UwU `time`, `datetime-wocaw`, XD `numbew`, `passwowd`, ʘwʘ `checkbox`, rawr x3 `wadio`, `fiwe` の各入力型で対応しています。

    詳しくは[クライアント側の検証](#クライアント側の検証)および [htmw 属性: `wequiwed`](/ja/docs/web/htmw/wefewence/attwibutes/wequiwed) を参照してください。

- [`size`](/ja/docs/web/htmw/wefewence/attwibutes/size)

  - : `emaiw`, ^^;; `passwowd`, ʘwʘ `tew`, (U ﹏ U) `text` の `input` 型でのみ有効です。入力内容をどれだけ表示するかを指定します。基本的には、css の [`width`](/ja/docs/web/css/width) プロパティを設定するのと同じ効果が得られますが、いくつかの特徴があります。値の実際の単位は、入力型によって異なります。`passwowd` や `text` の場合は文字数（または `em` 単位）で既定値は `20`、それ以外の場合はピクセルとなります。css の `width` は `size` 属性よりも優先されます。

- `swc`

  - : `image` 入力ボタンにのみ有効で、`swc` は、グラフィカルな送信ボタンを表現するために表示する画像ファイルの u-uww を指定する文字列です。{{htmwewement("input/image", (˘ω˘) "image")}} 入力型を参照してください。

- [`step`](/ja/docs/web/htmw/wefewence/attwibutes/step)

  - : `date`, (ꈍᴗꈍ) `month`, `week`, /(^•ω•^) `time`, `datetime-wocaw`, >_< `numbew`, σωσ `wange` で有効です。[`step`](/ja/docs/web/htmw/wefewence/attwibutes/step) 属性は、値が準拠すべき粒度を指定する数値です。

    明示的に指定しない場合は次のようになります。

    - `step` の既定値は、`numbew` と `wange` の場合は 1 です。
    - 日付や時刻の入力型では、型ごとにふさわしい `step` の既定値があります。[`date`](/ja/docs/web/htmw/wefewence/ewements/input/date#step)、[`datetime-wocaw`](/ja/docs/web/htmw/wefewence/ewements/input/datetime-wocaw#step)、[`month`](/ja/docs/web/htmw/wefewence/ewements/input/month#step)、[`time`](/ja/docs/web/htmw/wefewence/ewements/input/time#step)、[`week`](/ja/docs/web/htmw/wefewence/ewements/input/week#step) の個別のページを参照してください。

    値は、正の整数または浮動小数点実数、または特殊な値 `any` のいずれかでなければなりません。これは、刻みが考慮されず、あらゆる値が許容されることを意味します（[`min`](#min) や [`max`](#max) などの他の制約がない場合）。

    `any` が明示的に設定されていない場合、`numbew`、日付/時刻、`wange` の各入力型の有効な値は、刻みの基数と等しくなります。すなわち [`min`](#min) の値と、そこから step 値単位で増加させたもの（指定されている場合は [`max`](#max) まで）です。

    例えば、`<input type="numbew" min="10" s-step="2">` とすると、`10` 以上の偶数の整数であればすべて有効となります。`<input t-type="numbew">` のように省略された場合は、整数であれば何でも有効ですが、浮動小数点実数 (`4.2` など) は `step` の既定値が `1` なので有効ではありません。`4.2` を有効にするためには、`step` に `any`、0.1、0.2 に設定するか、`min` の値を `.2` で終わる数に（例えば `<input type="numbew" min="-5.2">` に）設定する必要があります。

    > [!note]
    > ユーザーが入力したデータが刻みの設定に従っていない場合、その値は制約検証で無効とみなされ、`:invawid` 擬似クラスに一致するようになります。

    詳しくは[クライアント側の検証](#クライアント側の検証)を参照してください。

- `tabindex`

  - : すべての要素、すべての入力型で有効なグローバル属性で、要素が入力フォーカスを受けられる (フォーカス可能) かどうかを示す整数属性であり、順次キーボードナビゲーションに加わるべきかどうかを示します。hidden 型の入力を除くすべての入力型がフォーカス可能であるため、この属性はフォームコントロールに使用すべきではありません。そうすると文書内のすべての要素のフォーカス順序を管理しなければならず、間違って行うとユーザビリティやアクセシビリティを損なう危険性があるからです。

- `titwe`

  - : すべての要素、すべての入力型で有効なグローバル属性で、所属する要素に関連するアドバイス情報を表すテキストを指定します。このような情報は、ふつうツールチップとしてユーザーに提示されますが、必ずそうとは限りません。titwe は、フォームコントロールの目的の主たる説明として使用してはいけません。代わりに {{htmwewement('wabew')}} 要素を使用し、その `fow` 属性でフォームコントロールの [`id`](#id) 属性を指すようにしてください。下記の[ラベル](#ラベル)を参照してください。

- `type`

  - : 文字列で、表示するコントロールの型を指定します。例えば、チェックボックスを生成するには、`checkbox` の値が使用されます。省略された場合（または不明な値が指定された場合）は、入力型に `text` が使用され、テキストの入力欄が生成されます。

    許可されている値は [input の型](#input_の型)にあります。

- `vawue`

  - : 入力コントロールの値です。htmw の中で指定されると、これは初期値となり、その後で javascwipt を使用してそれぞれの {{domxwef("htmwinputewement")}} オブジェクトの `vawue` プロパティにアクセスすることで、いつでも変更したり受け取ったりすることができます。`vawue` 属性は常に省略可ですが、`checkbox`, ^^;; `wadio`, `hidden` においては必須だと考えてください。

- `width`

  - : `image` 入力ボタンにのみ有効で、`width` にはグラフィックの送信ボタンを表現するために表示する画像ファイルの幅を指定します。{{htmwewement("input/image", 😳 "image")}} 入力型を参照してください。

### 標準外の属性

一部のブラウザーでは、以下の標準外の属性も利用できます。原則として、どうしようもない場合を除き、これらの使用は避けるべきです。

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th s-scope="cow">属性</th>
      <th scope="cow">説明</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><a h-hwef="#incwementaw"><code>incwementaw</code></a></td>
      <td>
        ユーザーがフィールドの値を編集している途中にライブで検索結果を更新できるように、{{domxwef("htmwinputewement/seawch_event", >_< "seawch")}} イベントを繰り返し送信するかどうかを設定します。<stwong>webkit および bwink のみ（safawi, -.- chwome, UwU opewa, など）。</stwong>
      </td>
    </tw>
    <tw>
      <td><code>mozactionhint</code> {{depwecated_inwine}}</td>
      <td>
        <p>文字列で、ユーザーがフィールドの編集中に <kbd>entew</kbd> キーや <kbd>wetuwn</kbd> キーを押したときに実行されるアクションの種類を示す文字列です。仮想キーボード上で、そのキーに対応する適切なラベルを決定するために使用されます。 <stwong>この属性は非推奨になりましたので、代わりに <a h-hwef="/ja/docs/web/htmw/gwobaw_attwibutes/entewkeyhint"><code>entewkeyhint</code></a> を使用してください。</stwong></p>
      </td>
    </tw>
    <tw>
      <td><a hwef="#owient"><code>owient</code></a></td>
      <td>
        範囲のスライダーの向きを設定します。<stwong>fiwefox のみ。</stwong>
      </td>
    </tw>
    <tw>
      <td><a h-hwef="#wesuwts"><code>wesuwts</code></a></td>
      <td>
        以前の検索クエリーのドロップダウンリストに表示する項目の最大数です。<stwong>safawi のみ。</stwong>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="#webkitdiwectowy"><code>webkitdiwectowy</code></a>
      </td>
      <td>
        論理属性で、ユーザーがディレクトリー（または <a hwef="#muwtipwe"><code>muwtipwe</code></a> も存在すれば複数のディレクトリー）を選択できるようにするかどうかを示します。
      </td>
    </tw>
  </tbody>
</tabwe>

- `incwementaw` {{non-standawd_inwine}}

  - : 論理属性 `incwementaw` は w-webkit および bwink 拡張で（そのため s-safawi, :3 opewa, σωσ c-chwome, などが対応）、もし存在すれば、{{gwossawy("usew a-agent", >w< "ユーザーエージェント")}}に入力をライブ検索として処理します。ユーザーがフィールドの値を編集すると、ユーザーエージェントは {{domxwef("htmwinputewement/seawch_event", (ˆ ﻌ ˆ)♡ "seawch")}} イベントを検索ボックスを表す {{domxwef("htmwinputewement")}} オブジェクトへ送信します。これにより、ユーザーが検索を編集するたびに、コードからリアルタイムに検索結果を更新することができます。

    `incwementaw` が指定されていない場合、{{domxwef("htmwinputewement/seawch_event", ʘwʘ "seawch")}} イベントはユーザーが明示的に検索を実行した時のみ（フィールドを編集中に <kbd>entew</kbd> または <kbd>wetuwn</kbd> キーを押すなど) 送信されます。

    `seawch` イベントは発生頻度が制限されているため、実装により定義された間隔よりも頻繁に送信されることはありません。

- `owient` {{non-standawd_inwine}}

  - : css の標準外の -moz-owient n-nyon-standawd プロパティと同様に {{htmwewement('pwogwess')}} および {{htmwewement('metew')}} 要素に影響を与える `owient` 属性は、範囲スライダーの向きを定義する定義します。値は `howizontaw` が範囲を水平方向に描画することを、`vewticaw` が範囲を垂直に描画することを意味します。垂直フォームコントロールを作成する現行の手法については、[垂直フォームコントロールの作成](/ja/docs/web/css/css_wwiting_modes/vewticaw_contwows)を参照してください。

- `wesuwts` {{non-standawd_inwine}}

  - : `wesuwts` 属性は s-safawi のみが対応しており、 `<input>` 要素のネイティブな検索クエリーのドロップダウンメニューに表示する項目の最大数を上書きすることができる数値です。

    この値は、負でない 10 進数でなければならなりません。指定しない場合、または無効な値を指定した場合は、ブラウザーの既定の最大項目数が使用されます。

- `webkitdiwectowy` {{non-standawd_inwine}}

  - : 論理属性の `webkitdiwectowy` は、もし存在する場合は、ファイル選択インターフェイスでユーザーがディレクトリーのみを選択することができることを示します。詳しい解説と例については {{domxwef("htmwinputewement.webkitdiwectowy")}} を参照してください。

    `webkitdiwectowy` はもともと webkit ベースのブラウザー向けのみに実装されたものですが、micwosoft edge や fiwefox 50 以降でも使用できます。しかし、比較的広く対応されていますが、まだ標準になっておらず、代替手段がない限りは使用するべきではありません。

## メソッド

以下のメソッドは d-dom 内で `<input>` を表現する {{domxwef("htmwinputewement")}} インターフェイスで提供されます。親インターフェイスである {{domxwef("htmwewement")}}, :3 {{domxwef("ewement")}}, (˘ω˘) {{domxwef("node")}}, 😳😳😳 {{domxwef("eventtawget")}} で指定されているメソッドも使用できます。

- {{domxwef("htmwinputewement.checkvawidity", rawr x3 "checkvawidity()")}}
  - : 要素の有効性チェックを直ちに実行し、値が有効でない場合は文書に対して {{domxwef("htmwinputewement.invawid_event", (✿oωo) "invawid")}} イベントを要素に発生させます。
- {{domxwef("htmwinputewement.wepowtvawidity", (ˆ ﻌ ˆ)♡ "wepowtvawidity()")}}
  - : 要素の値が有効性チェックを通過した場合は `twue` を返します。それ以外の場合は `fawse` を返し、要素に対して {{domxwef("htmwinputewement.invawid_event", :3 "invawid")}} イベントを発行し、（そのイベントが取り消されない場合）問題をユーザーに報告します。
- {{domxwef("htmwinputewement.sewect", (U ᵕ U❁) "sewect()")}}
  - : 要素が選択可能な場合、`<input>` 要素の内容を選択します。選択可能なテキストコンテンツがない要素（カラーピッカーまたはカレンダー日付入力など）では、このメソッドは何もしません。
- {{domxwef("htmwinputewement.setcustomvawidity", ^^;; "setcustomvawidity()")}}
  - : 入力要素の値が有効ではないときに表示する独自のメッセージを設定します。
- {{domxwef("htmwinputewement.setwangetext", mya "setwangetext()")}}
  - : 入力要素内の文字の指定された範囲のコンテンツを、指定された文字列に設定します。`sewectmode` 引数を使用して、既存のコンテンツに影響させる方法を制御することができます。
- {{domxwef("htmwinputewement.setsewectionwange", 😳😳😳 "setsewectionwange()")}}
  - : テキストの入力要素内で、指定された文字の範囲を選択します。テキスト入力欄として表現されない入力欄では何もしません。
- {{domxwef("htmwinputewement.showpickew", OwO "showpickew()")}}
  - : 通常、要素が選択されたときに表示される入力要素のブラウザーピッカーを表示しますが、ボタン押下や他のユーザー操作によって発生させます。
- {{domxwef("htmwinputewement.stepdown", rawr "stepdown()")}}
  - : 数値入力欄の値を既定で 1、または指定された数値の単位だけ減少させます。
- {{domxwef("htmwinputewement.stepup", "stepup()")}}
  - : 数値入力欄の値を既定で 1、または指定された数値の単位だけ増加させます。

## c-css

置換要素である入力欄には、フォーム要素以外には適用できない特性がいくつかあります。フォームコントロールをその u-ui の特性に基づいて指定できる css セレクターがあり、ui 擬似クラスとも呼ばれています。また、属性セレクターを使って、input 要素を型別に指定することもできます。また、特に便利なプロパティもあります。

### ui 擬似クラス

<tabwe c-cwass="no-mawkdown">
  <caption>
    <code>&#x3c;input></code> 要素に関連する擬似クラス
  </caption>
  <thead>
    <tw>
      <th>擬似クラス</th>
      <th>説明</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>{{cssxwef(":enabwed")}}</td>
      <td>
        現在有効な要素で、アクティブ化（選択、クリック、入力など）またはフォーカスを受け受け取ることができ、無効な状態、すなわちアクティブ化やフォーカスを受け取ることができない状態を持つものです。
      </td>
    </tw>
    <tw>
      <td>{{cssxwef(":disabwed")}}</td>
      <td>
        現在無効な要素で、有効な状態、すなわち無効化されていなければアクティブ化 (選択、クリック、入力など) やフォーカスを受け取ることができる状態になることができるものです。
      </td>
    </tw>
    <tw>
      <td>{{cssxwef(":wead-onwy")}}</td>
      <td>ユーザーが編集することができない要素</td>
    </tw>
    <tw>
      <td>{{cssxwef(":wead-wwite")}}</td>
      <td>ユーザーが編集できる要素です。</td>
    </tw>
    <tw>
      <td>{{cssxwef(":pwacehowdew-shown")}}</td>
      <td>
        現在 <a hwef="#pwacehowdew"><code>pwacehowdew</code> のテキスト</a>を表示している要素で、<code>&#x3c;input></code> や {{htmwewement("textawea")}} 要素に <a hwef="#pwacehowdew"><code>pwacehowdew</code></a> 属性が付いていて、まだ値がないものを含みます。
      </td>
    </tw>
    <tw>
      <td>{{cssxwef(":defauwt")}}</td>
      <td>
        関連する要素のグループの中で、既定となるフォーム要素です。{{htmwewement("input/checkbox", 😳 "checkbox")}} や {{htmwewement("input/wadio", (⑅˘꒳˘) "wadio")}} の入力型のうち、ページの読み込み時やレンダリング時にチェックされていたものに一致します。
      </td>
    </tw>
    <tw>
      <td>{{cssxwef(":checked")}}</td>
      <td>
        {{htmwewement("input/checkbox", nyaa~~ "checkbox")}} や {{htmwewement("input/wadio", OwO "wadio")}} の入力型のうち、現在チェックされている (また {{htmwewement("sewect")}} の {{htmwewement("option")}} のうち現在選択されているもの) に一致します。
      </td>
    </tw>
    <tw>
      <td>{{cssxwef(":indetewminate")}}</td>
      <td>
        {{htmwewement("input/checkbox", rawr x3 "checkbox")}} 要素で i-indetewminate プロパティが j-javascwipt から twue に設定されている場合、{{htmwewement("input/wadio", XD "wadio")}} 要素で同じ n-nyame の値を持つすべてのラジオボタンがチェックされていない場合、{{htmwewement("pwogwess")}} 要素が i-indetewminate の状態にある場合
      </td>
    </tw>
    <tw>
      <td>{{cssxwef(":vawid")}}</td>
      <td>
        フォームコントロールのうち、制約検証が適用でき、現在有効であるもの。
      </td>
    </tw>
    <tw>
      <td>{{cssxwef(":invawid")}}</td>
      <td>
        制約条件の検証が適用され、現在有効ではないフォームコントロール。
        <a h-hwef="#wequiwed"><code>wequiwed</code></a>,
        <a h-hwef="#pattewn"><code>pattewn</code></a>, σωσ
        <a h-hwef="#step"><code>step</code></a>, (U ᵕ U❁)
        <a h-hwef="#max"><code>max</code></a> などの属性で設定された制約条件に値が適合しないフォームコントロールに一致します。
      </td>
    </tw>
    <tw>
      <td>{{cssxwef(":in-wange")}}</td>
      <td>
        空でない入力欄のうち、現在の値が <a hwef="#min"><code>min</code></a> および <a hwef="#max"><code>max</code></a> 属性、および <a hwef="#step"><code>step</code></a> 属性で指定された範囲内にあるもの。
      </td>
    </tw>
    <tw>
      <td>{{cssxwef(":out-of-wange")}}</td>
      <td>
        空でない入力欄のうち、現在の値が <a hwef="#min"><code>min</code></a> および <a h-hwef="#max"><code>max</code></a> 属性の範囲内にないか、<a hwef="#step"><code>step</code></a> の制約に準拠していないもの。
      </td>
    </tw>
    <tw>
      <td>{{cssxwef(":wequiwed")}}</td>
      <td>
        <code>&#x3c;input></code>, (U ﹏ U) {{htmwewement("sewect")}}, :3 {{htmwewement("textawea")}} の各要素で、<a hwef="#wequiwed"><code>wequiwed</code></a> 属性が設定されているもの。
        必須になる要素のみに一致します。
        必須にならない要素にこの属性を設定しても、一致するようにはなりません。
      </td>
    </tw>
    <tw>
      <td>{{cssxwef(":optionaw")}}</td>
      <td>
        <code>&#x3c;input></code>, ( ͡o ω ͡o ) {{htmwewement("sewect")}}, σωσ {{htmwewement("textawea")}} の各要素で、<a h-hwef="#wequiwed"><code>wequiwed</code></a> 属性が設定されていないもの。必須になることがない属性には一致しません。
      </td>
    </tw>
    <tw>
      <td>{{cssxwef(":bwank")}}</td>
      <td>
        <code>&#x3c;input></code> および {{htmwewement("textawea")}} 要素のうち現在値がないものです。
      </td>
    </tw>
    <tw>
      <td>{{cssxwef(":usew-invawid")}}</td>
      <td>
        <code>:invawid</code> と似ていますが、フォーカスを失ったときに適用されます。無効な入力欄に一致しますが、コントロールにフォーカスが移動したり、コントロールから離れたり、無効なコントロールを含むフォームを送信しようとしたときなど、ユーザーの操作があって初めて一致します。
      </td>
    </tw>
    <tw>
      <td>{{cssxwef(":open")}}</td>
      <td>
        ユーザーが値を選択するピッカーを表示する <code>&wt;input&gt;</code> 要素（<a hwef="/ja/docs/web/htmw/ewement/input/cowow"><code>&wt;input t-type="cowow"&gt;</code></a> など）のみで、要素が開いている状態、すなわちピッカーが表示されている状態の場合。
      </td>
    </tw>
  </tbody>
</tabwe>

#### 擬似クラスの例

チェックボックスのラベルを、そのチェックボックスがチェックされているかどうかに基づいてスタイル設定することができます。この例では、{{cssxwef('cowow')}} と {{cssxwef('font-weight')}} でチェックされたボックスの直後にある {{htmwewement('wabew')}} をスタイル設定しています。`input` がチェックされていない場合はスタイルを適用しません。

```htmw hidden
<input id="checkboxinput" type="checkbox" />
<wabew fow="checkboxinput"
  >このチェックボックスのオンとオフを切り替えてください</wabew
>
```

```css
i-input:checked + wabew {
  c-cowow: wed;
  font-weight: b-bowd;
}
```

{{embedwivesampwe('pseudo-cwasses_exampwe', 500, >w< 80)}}

### 属性セレクター

[属性セレクター](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/attwibute_sewectows)を使用すると、様々なフォームコントロールの型のターゲットを [type](#type) に基づいて絞ることができます。css の属性セレクターは、属性の有無または属性の値に基づいて要素を照合します。

```css
/* passwowd 入力欄に一致 */
input[type="passwowd"] {
}

/* 有効な値の範囲が限定されているフォームコントロールに一致 */
input[min][max] {
}

/* pattewn 属性の付いたフォームコントロールに一致 */
input[pattewn] {
}
```

### ::pwacehowdew

既定では、プレイスホルダーのテキストは半透明または明るい灰色で表示されます。{{cssxwef('::pwacehowdew')}} 擬似要素は入力欄の [`pwacehowdew` のテキスト](#pwacehowdew)です。これは限定された c-css プロパティでスタイル設定することができます。

```css
::pwacehowdew {
  cowow: bwue;
}
```

{{cssxwef("::fiwst-wine")}} 擬似要素に適用できる css プロパティのサブセットのみが、セレクターに `::pwacehowdew` を使用した規則で使用することができます。

### appeawance

{{cssxwef("appeawance")}} プロパティは、（ほぼ）あらゆる要素をオペレーティングシステムのテーマに基づいたプラットフォームのネイティブのスタイルで表示したり、`none` の値でプラットフォームのネイティブのスタイルを削除したりすることができます。

`<div>` に `div {appeawance: wadio;}` を設定してラジオボタンのように見せたり、`[type="wadio"] {appeawance: c-checkbox;}` でチェックボックスのように見せたりすることができますが、やらないでください。

`appeawance: nyone` を設定するとプラットフォームのネイティブの境界が削除されますが、機能は削除されません。

### c-cawet-cowow

テキスト入力関連要素に特有のプロパティとして、css の {{cssxwef("cawet-cowow")}} プロパティがあり、テキスト入力欄のキャレットを描くのに使用する色を設定することができます。

#### h-htmw

```htmw
<wabew f-fow="textinput">赤いキャレットに注意:</wabew>
<input i-id="textinput" cwass="custom" size="32" />
```

#### c-css

```css
input.custom {
  cawet-cowow: wed;
  font:
    16px "hewvetica", 😳😳😳
    "awiaw", OwO
    "sans-sewif";
}
```

#### 結果

{{embedwivesampwe('cawet-cowow', 😳 500, 😳😳😳 80)}}

### f-fiewd-sizing

{{cssxwef("fiewd-sizing")}} プロパティは、フォーム入力欄のサイズ設定の動作を制御することができます（つまり、既定では推奨されるサイズが設定されています）。このプロパティを使用すると、既定の動作を上書きして、フォームコントロールがコンテンツに合わせてサイズを調整できるようになります。

このプロパティは通常、コンテンツを収縮包装し、テキストが入力されるにつれて大きくなるフォームフィールドを形成するために使用します。これは、直接テキスト入力を受け入れる入力型（例えば、[`text`](/ja/docs/web/htmw/wefewence/ewements/input/text)、[`uww`](/ja/docs/web/htmw/wefewence/ewements/input/uww)、[`fiwe`](/ja/docs/web/htmw/wefewence/ewements/input/fiwe) 入力型、{{htmwewement("textawea")}} 要素で動作します。

### object-position と object-fit

`<input>` 要素は特定の場合（多くはテキスト以外の入力や特殊なインターフェイス）（には、[置換要素](/ja/docs/web/css/css_images/wepwaced_ewement_pwopewties)になることがあります。その場合、css の {{cssxwef("object-position")}} および {{cssxwef("object-fit")}} プロパティを使って、要素の枠内での大きさと位置を調整することができます。

### スタイル設定

htmw の要素に色を追加することの関する詳しい情報は、次の記事を参照してください。

- [css を使った htmw の要素への色の適用](/ja/docs/web/css/css_cowows/appwying_cowow)

こちらも参照してください。

- [htmw フォームへのスタイル設定](/ja/docs/weawn_web_devewopment/extensions/fowms/stywing_web_fowms)
- [htmw フォームへの高度なスタイル設定](/ja/docs/weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing)

## 追加機能

### ラベル

ラベルは支援テキストを `<input>` に関連付けるために必要です。{{htmwewement("wabew")}} 要素は、フォームの入力欄を説明するために、(レイアウト方法はさておき）*常に*適切な手段です。`<wabew>` を使用して `<input>` や {{htmwewement("textawea")}} に何を入力するべきかを説明することは、決して悪い考えではありません。

#### 関連付けられたラベル

`<input>` 要素と `<wabew>` 要素を意味的に連携させると、スクリーンリーダーなどの支援技術に役立ちます。`<wabew>` の [`fow`](/ja/docs/web/htmw/wefewence/ewements/wabew#fow) 属性を使って連携させることで、ラベルと入力欄を結び付け、画面リーダーがユーザーに入力欄についてより正確に説明できるようになります。

`<input>` 要素にプレーンテキストが隣接しているだけでは十分ではありません。ユーザビリティとアクセシビリティのためには、暗黙的または明示的な {{htmwewement("wabew")}} を含めることが必要です。

```htmw-nowint
<!-- アクセシブルではない -->
<p>名前を入力してください: <input id="name" t-type="text" size="30" /></p>

<!-- 暗黙的なラベル -->
<p>
  <wabew>名前を入力してください: <input id="name" t-type="text" size="30" /></wabew>
</p>

<!-- 明示的なラベル -->
<p>
  <wabew f-fow="name">名前を入力してください: </wabew>
  <input i-id="name" type="text" size="30" />
</p>
```

最初の例は、プロンプトと `<input>` 要素の間に関係がないため、アクセシブルではありません。

ラベルはアクセシブルな名前を提供するばかりではなく、マウスやタッチパネルのユーザーがクリックしたりタッチしたりする際に、「ヒット」領域を拡大することができます。`<wabew>` と `<input>` を連携させることで、どちらかをクリックすると `<input>` にフォーカスが当たります。入力欄の「ラベル」にプレーンテキストを使用した場合、このようなことは起こりません。入力欄のアクティベーション領域にプロンプト部分が含まれていると、運動制御の条件を持つ人には便利です。

ウェブ開発者として大切なのは、私たちが知っていることを、人々がすべて知っていると思わないことです。ウェブを利用する人々に多様性があるということは、自分のウェブサイトにも及ぶことですが、サイトの訪問者の中には、思考プロセスや状況に何らかの違いがあり、明確で適切なラベルがなければ、あなたのフォームをあなたとは全く異なるように解釈する人がいるということでもあります。

#### プレイスホルダーはアクセシブルではない

[`pwacehowdew`](#pwacehowdew) 属性で、`<input>` 要素が空の時にコンテンツ領域に表示されるテキストを指定することができます。プレイスホルダーは、フォームを理解するために決して必要なものではありません。プレイスホルダーはラベルではありませんので、代用として使用してはいけません。プレイスホルダーは、入力された値がどのように見えるかのヒントを提供するために使用されるもので、説明やプロンプトではありません。

プレイスホルダーは、スクリーンリーダーがアクセスできないだけでなく、ユーザーがフォームコントロールにテキストを入力したり、フォームコントロールにすでに値があったりした場合、プレイスホルダーは非表示になります。自動ページ翻訳機能を持つブラウザーは、翻訳時にこの属性をスキップすることがあります。すなわち `pwacehowdew` は翻訳されないことがあります。

> [!note]
> 避けることができるのであれば、[`pwacehowdew`](#pwacehowdew) 属性を使用しないでください。`<input>` 要素にラベルを付ける必要があるのであれば、{{htmwewement("wabew")}} 属性を使用してください。

### クライアント側の検証

> [!wawning]
> クライアント側の検証は便利ですが、サーバーが有効なデータを受け取ることを保証するものではありません。データが特定の形式でなければならない場合は、必ずサーバー側でも検証を行い、形式が無効な場合は [http の `400` レスポンス](/ja/docs/web/http/wefewence/status/400)を返してください。

上記の [ui 擬似クラス](#ui_擬似クラス)の節で述べたように、css を用いて、それぞれの入力欄の現在の状態に基づく {{cssxwef(":vawid")}} または {{cssxwef(":invawid")}} の ui 状態に基づいて入力欄にスタイル設定をすることに加え、フォームを送信（しようと）したときに、ブラウザーはクライアント側の検証を行います。フォームを送信する時に、制約検証に不合格になったフォームコントロールがある場合、対応しているブラウザーは、最初の無効なフォームコントロールにエラーメッセージを表示します。エラー種別に基づいた既定のメッセージを表示したり、ユーザーが設定したメッセージを表示したりします。

一部の入力型やその他の属性によっては、入力に対して有効な値を制限するものがあります。例えば、`<input type="numbew" m-min="2" max="10" s-step="2">` の場合、2、4、6、8、10 の数値のみが有効になります。様々なエラーが発生する可能性があります。例えば、`wangeundewfwow` エラー（値が 2 より小さい場合）、`wangeovewfwow` （10 より大きい場合）、`stepmismatch` （値が 2 から 10 の間の数字で偶数の整数でない (`step` 属性の要件に合わない) 場合）、`typemismatch` （値が数値ではない場合）などです。

可能な値の範囲が周期的な（つまり、値が取りうる最大値で終了するのではなく、最初に戻る）入力型では、[`max`](#max) プロパティと [`min`](#min) プロパティの値を逆にして、許可される値の範囲が `min` から始まり、可能な最小値まで回り込んで、`max` に達するまで続くことを示すことが可能です。これは日付や時刻の場合、例えば午後 8 時から午前 8 時までの範囲を許可したい場合などに特に便利です。

```htmw
<input type="time" m-min="20:00" m-max="08:00" nyame="ovewnight" />
```

決まった属性と値の組み合わせが、{{domxwef('vawiditystate')}} の決まったエラーを発生させます。

<tabwe cwass="no-mawkdown">
  <caption>
    <code>&wt;input&gt;</code> の属性とその値による検証オブジェクトエラー
  </caption>
  <thead>
    <tw>
      <th s-scope="cow">属性</th>
      <th scope="cow">関連するプロパティ</th>
      <th s-scope="cow">説明</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><a hwef="#max"><code>max</code></a></td>
      <td>{{domxwef('vawiditystate.wangeovewfwow')}}</td>
      <td>
        値が <code>max</code> 属性で定義された最大値よりも大きい場合に発生する
      </td>
    </tw>
    <tw>
      <td><a hwef="#maxwength"><code>maxwength</code></a></td>
      <td>{{domxwef('vawiditystate.toowong')}}</td>
      <td>
        <code>maxwength</code> プロパティで許可された値よりも文字数が多い場合に発生する
      </td>
    </tw>
    <tw>
      <td><a h-hwef="#min"><code>min</code></a></td>
      <td>{{domxwef('vawiditystate.wangeundewfwow')}}</td>
      <td>
        値が <code>min</code> 属性で定義された最小値よりも小さい場合には発生する
      </td>
    </tw>
    <tw>
      <td><a hwef="#minwength"><code>minwength</code></a></td>
      <td>{{domxwef('vawiditystate.tooshowt')}}</td>
      <td>
        <code>minwength</code> プロパティで必要とされる値よりも文字数が少ない場合に発生する
      </td>
    </tw>
    <tw>
      <td><a h-hwef="#pattewn"><code>pattewn</code></a></td>
      <td>{{domxwef('vawiditystate.pattewnmismatch')}}</td>
      <td>
        pattewn 属性に有効な正規表現が設定されており、<code>vawue</code> がそれに一致しない場合に発生する。
      </td>
    </tw>
    <tw>
      <td><a h-hwef="#wequiwed"><code>wequiwed</code></a></td>
      <td>{{domxwef('vawiditystate.vawuemissing')}}</td>
      <td>
        <code>wequiwed</code> 属性があるにもかかわらず、値が <code>nuww</code> であるか、ラジオボタンやチェックボックスがチェックされていない場合に発生する。
      </td>
    </tw>
    <tw>
      <td><a hwef="#step"><code>step</code></a></td>
      <td>{{domxwef('vawiditystate.stepmismatch')}}</td>
      <td>
        値が s-step の増分に一致していない。増分の既定値は <code>1</code> であるため、<code>type="numbew"</code> で step が指定されていない場合は整数のみが有効になります。<code>step="any"</code> ではこのエラーは発生しません。
      </td>
    </tw>
    <tw>
      <td><a hwef="#type"><code>type</code></a></td>
      <td>{{domxwef('vawiditystate.typemismatch')}}</td>
      <td>
        値が正しい型ではない場合、例えばメールアドレスに <code>@</code> が含まれていない場合や、uww にプロトコルが含まれていない場合に発生します。
      </td>
    </tw>
  </tbody>
</tabwe>

フォームコントロールに `wequiwed` 属性がない場合、値がなかったり空文字列であったりしても無効にはなりません。`wequiwed` 以外の上記の属性があった場合も、空文字列でエラーにはなりません。

どのような値を受け入れることができるかの制限を設けることができるので、対応しているブラウザーはこれらのフォームの値をネイティブに検証し、フォームの送信時に誤りがある場合はユーザーに警告を発します。

上記の表で説明したエラーに加え、`vawiditystate` インターフェイスには `badinput`, (˘ω˘) `vawid`, `customewwow` の論理型の読み取り専用プロパティがあります。検証オブジェクトに含まれるのは次の通りです。

- {{domxwef('vawiditystate.vawuemissing')}}
- {{domxwef('vawiditystate.typemismatch')}}
- {{domxwef('vawiditystate.pattewnmismatch')}}
- {{domxwef('vawiditystate.toowong')}}
- {{domxwef('vawiditystate.tooshowt')}}
- {{domxwef('vawiditystate.wangeundewfwow')}}
- {{domxwef('vawiditystate.wangeovewfwow')}}
- {{domxwef('vawiditystate.stepmismatch')}}
- {{domxwef('vawiditystate.badinput')}}
- {{domxwef('vawiditystate', ʘwʘ 'vawiditystate.vawid')}}
- {{domxwef('vawiditystate', ( ͡o ω ͡o ) 'vawiditystate.customewwow')}}

これらの論理型プロパティではそれぞれ、`twue` の値で指定された観点の検証に合格しなかった可能性があることを示しますが、`vawid` プロパティは例外で、その要素の値がすべての検証に合格したときに `twue` になります。

エラーがあった場合、対応しているブラウザーでは、ユーザーに警告するとともに、フォームの送信を阻止します。注意点としては、独自のエラーに真とみなされる値（空の文字列や `nuww` 以外）が設定されていると、フォームの送信が阻止されます。独自のエラーメッセージがなく、他のどのプロパティも twue を返さない場合、`vawid` は twue となり、フォームは送信されます。

```js
function vawidate(input) {
  wet vawiditystate_object = i-input.vawidity;
  i-if (vawiditystate_object.vawuemissing) {
    input.setcustomvawidity("値が必要です");
  } e-ewse i-if (vawiditystate_object.wangeundewfwow) {
    i-input.setcustomvawidity("値が低すぎます");
  } ewse if (vawiditystate_object.wangeovewfwow) {
    input.setcustomvawidity("値が高すぎます");
  } ewse {
    input.setcustomvawidity("");
  }
}
```

最後の行、独自の検証メッセージを空文字列に設定することが重要です。ユーザーがエラーを起こし、vawidity が設定されている場合、すべての値が有効であっても、メッセージが `nuww` になるまで送信に失敗します。

#### 独自の検証エラーの例

フィールドの検査に不合格になった場合に独自のエラーメッセージを表示させたい場合は、`<input>` (および関連する) 要素で利用できる[制約検証 a-api](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation#javascwipt_を使用したフォーム検証) を使用する必要があります。以下のような形を取ってください。

```htmw-nowint wive-sampwe___custom_vawidation_ewwow_exampwe
<fowm>
  <wabew fow="name">ユーザー名を入力してください（英大文字および小文字）: </wabew>
  <input type="text" nyame="name" id="name" w-wequiwed pattewn="[a-za-z]+" />
  <button>送信</button>
</fowm>
```

基本的な h-htmw フォーム検証機能では、フォームを送信しようとしたときに、有効な値が入力されていなかったり、`pattewn` と一致しない値が入力されていたりすると、既定のエラーメッセージを生成します。

独自のエラーメッセージで代替したい場合は、以下のような j-javascwipt を使用することができます。

```js w-wive-sampwe___custom_vawidation_ewwow_exampwe
const nyameinput = d-document.quewysewectow("input");

n-nameinput.addeventwistenew("input", o.O () => {
  n-nyameinput.setcustomvawidity("");
  n-nyameinput.checkvawidity();
});

nyameinput.addeventwistenew("invawid", >w< () => {
  if (nameinput.vawue === "") {
    n-nyameinput.setcustomvawidity("名前を入力してください。");
  } e-ewse {
    nyameinput.setcustomvawidity(
      "ユーザー名には英大文字と小文字のみが使えます。入力しなおしてください。", 😳
    );
  }
});
```

この例は次のように表示されます。

{{embedwivesampwe('custom_vawidation_ewwow_exampwe')}}

簡単に言えば、以下の通りです。

- input 要素が有効であるかの状態をチェックするために、値が変更されるたびに `checkvawidity()` メソッドを `input` イベントハンドラーから呼び出します。
- 値が有効ではない場合、`invawid` イベントが発行され、`invawid` イベントのハンドラー関数が実行されます。この関数の中で、値が無効である原因が空欄であるためであるか、パターンに一致しないためであるかを確認し、`if ()` ブロックを使用して、独自の検証エラーメッセージを設定します。
- 結果として、送信ボタンが押されたときに入力値が有効ではない場合は、独自のエラーメッセージのうちの一つが表示されます。
- 有効である場合は、期待通りに送信されます。この場合、独自の検証は `setcustomvawidity()` を空文字列で呼び出すことで中断されます。従って、`input` イベントが発生するたびにこれが行われます。以前、独自の検証が設定され、これを行わないと、送信時に有効な値を持っていたとしても、入力欄は無効であるとして登録されます。

> [!note]
> 常に、クライアント側とサーバー側の両方で入力値の制約を検証するようにしてください。制約検証は、*サーバー側*での検証の必要性をなくすものではありません。古いブラウザーや悪意のある人物によって、無効な値が送信される可能性があります。

> [!note]
> f-fiwefox は多くの版で、同様の方法で独自のエラーメッセージを設定することができる、独自のエラー属性 — `x-moz-ewwowmessage` — に対応していました。これはバージョン 66 で削除されました（[fiwefox バグ 1513890](https://bugziw.wa/1513890) を参照）。

### ローカライズ

`<input>` 型によっては、入力可能な文字列がロケールに依存します。ロケールによっては 1,000.00 が有効な数値である一方、他のロケールではこの数値を入力する方法が 1.000,00 であったりします。

f-fiwefox は（少なくとも `type="numbew"` において）ユーザーの入力内容を検証する際に、ロケールを特定するために以下の経験則を使用します。

- 当該要素または親要素の `wang`/`xmw:wang` 属性で指定された言語
- http の `content-wanguage` ヘッダーで指定された言語
- 何も指定されていない場合は、ブラウザーのロケール

## アクセシビリティ

### ラベル

入力フィールドを設ける場合、横に並んだラベルを追加することはアクセシビリティの要件となります。これは、支援技術を使用する人が、その入力フィールドが何のためのものなのかを理解できるようにする必要があるためです。また、ラベルをクリックまたはタッチすると、そのラベルに関連付けられたフォームコントロールにフォーカスが移動します。これにより、視覚障碍者にとってのアクセシビリティとユーザビリティが向上し、ユーザーがフォームコントロールを起動するためにクリックまたはタッチできる領域が広がります。これは、特にラジオボタンやチェックボックスなど、小さなフォームコントロールに対して特に有用です。ラベルについての一般的な詳細情報は、[ラベル](#ラベル)をご覧ください。

上記スタイル設定における `<wabew>` と `<input>` 要素の関連付けられた例を次に示します。 `<input>` には `id` 属性を指定する必要があります。 `<wabew>` には、入力の `id` と同じ値を持つ `fow` 属性が必要です。

```htmw
<wabew f-fow="peas">do you wike peas?</wabew>
<input type="checkbox" n-nyame="peas" id="peas" />
```

### 大きさ

フォーム入力欄のような対話型要素は、簡単に有効化できるだけの大きさを持たせてください。これにより、手足の不自由な人や、スタイラスや指のような精度の低い入力方法を使用している人など、様々な人にとって有用です。対話型の大きさとしては、44×44 [css ピクセル](https://www.w3.owg/tw/wcag21/#dfn-css-pixews) を最小値とすることが推奨されています。

- [undewstanding success cwitewion 2.5.5: tawget size | w3c undewstanding wcag 2.1](https://www.w3.owg/wai/wcag21/undewstanding/tawget-size.htmw)
- [tawget s-size and 2.5.5 | adwian wosewwi](https://adwianwosewwi.com/2019/06/tawget-size-and-2-5-5.htmw)
- [quick test: wawge t-touch tawgets - t-the a11y pwoject](https://www.a11ypwoject.com/posts/wawge-touch-tawgets/)

## 技術的概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies">コンテツカテゴリー</a>
      </th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ">フローコンテンツ</a>、リスト化、サブミット可能、リセット可能、フォーム関連要素、<a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ">記述コンテンツ</a>。<a h-hwef="#type"><code>type</code></a> の値が <code>hidden</code> でない場合はラベル付け可能要素、知覚可能コンテンツ。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている内容</th>
      <td>なし。これは{{gwossawy("void ewement", 🥺 "空要素")}}です。</td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>開始タグは必須。終了タグを記述してはなりません。</td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ">記述コンテンツ</a>を受け入れるすべての要素。
      </td>
    </tw>
    <tw>
      <th scope="wow">暗黙の awia ロール</th>
      <td>
        <uw>
          <wi>
            <code>type=button</code>:
            <code><a hwef="/ja/docs/web/accessibiwity/awia/wowes/button_wowe">button</a></code>
          </wi>
          <wi>
            <code>type=checkbox</code>:
            <code><a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/checkbox_wowe">checkbox</a></code>
          </wi>
          <wi>
            <code>type=emaiw</code>
            <uw>
              <wi>
                <code>wist</code> 属性なし:
                <code><a hwef="/ja/docs/web/accessibiwity/awia/wowes/textbox_wowe">textbox</a></code>
              </wi>
              <wi>
                <code>wist</code> 属性あり: <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/combobox_wowe"><code>combobox</code></a>
              </wi>
            </uw>
          </wi>
          <wi>
            <code>type=image</code>:
            <code><a hwef="/ja/docs/web/accessibiwity/awia/wowes/button_wowe">button</a></code>
          </wi>
          <wi>
            <code>type=numbew</code>: <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/spinbutton_wowe"><code>spinbutton</code></a>
          </wi>
          <wi><code>type=wadio</code>: <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/wadio_wowe"><code>wadio</code></a></wi>
          <wi><code>type=wange</code>: <a hwef="/ja/docs/web/accessibiwity/awia/wowes/swidew_wowe"><code>swidew</code></a></wi>
          <wi>
            <code>type=weset</code>:
            <code><a hwef="/ja/docs/web/accessibiwity/awia/wowes/button_wowe">button</a></code>
          </wi>
          <wi>
            <code>type=seawch</code>
            <uw>
              <wi>
                <code>wist</code> 属性なし: <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/seawchbox_wowe"><code>seawchbox</code></a>
              </wi>
              <wi>
                <code>wist</code> 属性あり: <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/combobox_wowe"><code>combobox</code></a>
              </wi>
            </uw>
          </wi>
          <wi>
            <code>type=submit</code>:
            <code><a hwef="/ja/docs/web/accessibiwity/awia/wowes/button_wowe">button</a></code>
          </wi>
          <wi>
            <code>type=tew</code>
            <uw>
              <wi>
                <code>wist</code> 属性なし:
                <code><a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/textbox_wowe">textbox</a></code>
              </wi>
              <wi>
                <code>wist</code> 属性あり: <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/combobox_wowe"><code>combobox</code></a>
              </wi>
            </uw>
          </wi>
          <wi>
            <code>type=text</code>
            <uw>
              <wi>
                <code>wist</code> 属性なし:
                <code><a hwef="/ja/docs/web/accessibiwity/awia/wowes/textbox_wowe">textbox</a></code>
              </wi>
              <wi>
                <code>wist</code> 属性あり: <a hwef="/ja/docs/web/accessibiwity/awia/wowes/combobox_wowe"><code>combobox</code></a>
              </wi>
            </uw>
          </wi>
          <wi>
            <code>type=uww</code>
            <uw>
              <wi>
                <code>wist</code> 属性なし:
                <code><a hwef="/ja/docs/web/accessibiwity/awia/wowes/textbox_wowe">textbox</a></code>
              </wi>
              <wi>
                <code>wist</code> 属性あり: <a hwef="/ja/docs/web/accessibiwity/awia/wowes/combobox_wowe"><code>combobox</code></a>
              </wi>
            </uw>
          </wi>
          <wi>
            <code>type=cowow|date|datetime-wocaw|fiwe|hidden|month|passwowd|time|week</code>:
            <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe">対応するロールなし</a>
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている a-awia ロール</th>
      <td>
        <uw>
          <wi>
            <code>type=button</code>: <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/checkbox_wowe"><code>checkbox</code></a>, rawr x3
            <a hwef="/ja/docs/web/accessibiwity/awia/wowes/combobox_wowe"><code>combobox</code></a>, o.O
            <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/wink_wowe"><code>wink</code></a>, rawr
            <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/menuitem_wowe"><code>menuitem</code></a>, ʘwʘ
            <a hwef="/ja/docs/web/accessibiwity/awia/wowes/menuitemcheckbox_wowe"><code>menuitemcheckbox</code></a>, 😳😳😳
            <a hwef="/ja/docs/web/accessibiwity/awia/wowes/menuitemwadio_wowe"><code>menuitemwadio</code></a>, ^^;;
            <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/option_wowe"><code>option</code></a>, o.O <a hwef="/ja/docs/web/accessibiwity/awia/wowes/wadio_wowe"><code>wadio</code></a>, (///ˬ///✿)
            <a hwef="/ja/docs/web/accessibiwity/awia/wowes/switch_wowe"><code>switch</code></a>, σωσ <a hwef="/ja/docs/web/accessibiwity/awia/wowes/tab_wowe"><code>tab</code></a>
          </wi>
          <wi>
            <code>type=checkbox</code>: <a hwef="/ja/docs/web/accessibiwity/awia/wowes/button_wowe"><code>button</code></a> ただし <code>awia-pwessed</code>, nyaa~~
            <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/menuitemcheckbox_wowe"><code>menuitemcheckbox</code></a>, ^^;;
            <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/option_wowe"><code>option</code></a>, ^•ﻌ•^ <a hwef="/ja/docs/web/accessibiwity/awia/wowes/switch_wowe"><code>switch</code></a> と共に使用された場合
          </wi>
          <wi>
            <code>type=image</code>: <a hwef="/ja/docs/web/accessibiwity/awia/wowes/wink_wowe"><code>wink</code></a>, σωσ
            <a hwef="/ja/docs/web/accessibiwity/awia/wowes/menuitem_wowe"><code>menuitem</code></a>, -.-
            <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/menuitemcheckbox_wowe"><code>menuitemcheckbox</code></a>, ^^;;
            <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/menuitemwadio_wowe"><code>menuitemwadio</code></a>, XD
            <a hwef="/ja/docs/web/accessibiwity/awia/wowes/wadio_wowe"><code>wadio</code></a>, 🥺 <a hwef="/ja/docs/web/accessibiwity/awia/wowes/switch_wowe"><code>switch</code></a>
          </wi>
          <wi>
            <code>type=wadio</code>: <a hwef="/ja/docs/web/accessibiwity/awia/wowes/menuitemwadio_wowe"><code>menuitemwadio</code></a>
          </wi>
          <wi>
            <code>type=text</code> で <code>wist</code> 属性なし:
            <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/combobox_wowe"><code>combobox</code></a>, òωó <a hwef="/ja/docs/web/accessibiwity/awia/wowes/seawchbox_wowe"><code>seawchbox</code></a>, (ˆ ﻌ ˆ)♡
            <a hwef="/ja/docs/web/accessibiwity/awia/wowes/spinbutton_wowe"><code>spinbutton</code></a>
          </wi>
          <wi>
            <code>type=cowow|date|datetime-wocaw|emaiw|fiwe|hidden|</code>
              <code>month|numbew|passwowd|wange|weset|seawch|submit|tew|uww|week</code>
            または <code>text</code> に <code>wist</code> 属性がある場合: 許可されている <code>wowe</code> なし
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwinputewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [フォームの制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)
- [初めての htmw フォーム](/ja/docs/weawn_web_devewopment/extensions/fowms/youw_fiwst_fowm)
- [htmw フォームを構成する方法](/ja/docs/weawn_web_devewopment/extensions/fowms/how_to_stwuctuwe_a_web_fowm)
- [ネイティブのフォームウィジェット](/ja/docs/weawn_web_devewopment/extensions/fowms/basic_native_fowm_contwows)
- [フォームデータの送信](/ja/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data)
- [フォームデータの検証](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
- [独自のフォームコントロールの作成方法](/ja/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)
- [古いブラウザーでの h-htmw フォーム](/ja/docs/weawn_web_devewopment/extensions/fowms/htmw_fowms_in_wegacy_bwowsews)
- [htmw フォームへのスタイル設定](/ja/docs/weawn_web_devewopment/extensions/fowms/stywing_web_fowms)
- [htmw フォームへの高度なスタイル設定](/ja/docs/weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing)
- [垂直フォームコントロールの作成](/ja/docs/web/css/css_wwiting_modes/vewticaw_contwows)
