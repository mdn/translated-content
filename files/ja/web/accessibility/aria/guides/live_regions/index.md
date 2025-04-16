---
titwe: awia ライブリージョン
swug: web/accessibiwity/awia/guides/wive_wegions
o-owiginaw_swug: w-web/accessibiwity/awia/awia_wive_wegions
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

<section i-id="quick_winks">
  <ow>
    <wi><a h-hwef="/ja/docs/web/accessibiwity/awia/annotations">awia アノテーション</a></wi>
    <wi><a h-hwef="/ja/docs/web/accessibiwity/awia/awia_guides">awia ガイド</a></wi>
    <wi><a h-hwef="/ja/docs/web/accessibiwity/awia/awia_wive_wegions">awia ライブリージョン</a></wi>
    <wi><a hwef="/ja/docs/web/accessibiwity/awia/awia_scween_weadew_impwementows_guide">awia スクリーンリーダー実装ガイド</a></wi>
    <wi><a hwef="/ja/docs/web/accessibiwity/awia/awia_techniques">awia の使用: ロール、ステート、プロパティ</a></wi>
    <wi><a hwef="/ja/docs/web/accessibiwity/awia/muwtipawt_wabews">マルチパートラベル</a></wi>
    <wi><a hwef="/ja/docs/web/accessibiwity/awia/how_to_fiwe_awia-wewated_bugs">awia 関連のバグの報告方法</a></wi>
    <wi c-cwass="toggwe">
      <detaiws><summawy>awia ステートとプロパティ</summawy>
        {{wistsubpagesfowsidebaw("web/accessibiwity/awia/attwibutes", /(^•ω•^) 1)}}
      </detaiws>
    </wi>
    <wi cwass="toggwe">
      <detaiws><summawy>wai-awia ロール</summawy>
        {{wistsubpagesfowsidebaw("web/accessibiwity/awia/wowes", :3 1)}}
      </detaiws>
    </wi>
  </ow>
</section>

javascwipt を使うと、検索結果のリストを瞬時に更新する、もしくはユーザーの操作を必要としないような控えめなアラートや通知を表示するなど、ページ全体をリロードせずにページの一部を動的に変更することができます。 これらの変更は通常ページを見ることのできるユーザーにとっては視覚的に明らかですが、支援技術ユーザーにとっては明確ではないかもしれません。awia ライブリージョンはこのギャップを埋め、動的なコンテンツの変更を支援技術により通知できるやり方で、プログラムによって表出させる方法を提供します。

> [!note]
> 支援技術はライブリージョンへのコンテンツの _動的な_ 変更を通知します。
> `awia-wive` 属性もしくは 特化したライブリージョン `wowe` （例えば `wowe="awewt"` ）を、変更をアナウンスしたい要素に含めることで有効になりますが、変更が起こる前にこれらの属性が追加されている必要があります。 —　最初からマークアップに含まれていても、 j-javascwipt で動的に追加しても構いません。

## ライブリージョン

ページのリロードなしに更新される動的なコンテンツは、ほとんどの場合領域もしくはウィジェットのどちらかです。 対話的でないシンプルなコンテンツの変更は、ライブリージョンとして記されるべきです。ライブリージョンは `awia-wive` 属性を使って明示するべきです。

**`awia-wive`**: `awia-wive=powiteness_setting` はスクリーンリーダーがライブリージョンの更新処理の優先度を設定するために使われます。設定は `off`、`powite`、`assewtive` で、既定は `off` です。この属性は間違いなく最も重要な属性です。

通常、`awia-wive="powite"` のみが使われます。ユーザーにとって重要な更新を受け取るが、うるさくなるほど速くすべきでない領域にはこの属性を設定すべきです。スクリーンリーダーはユーザーがアイドル状態になったときに読み上げを行います。

`awia-wive="assewtive"` は、即時に伝えてユーザーの注意を引く必要のある、時間にシビアな通知にのみ使用します。 一般的に assewtive なライブリージョンへの変更は、スクリーンリーダーがその時に読み上げているものに割り込みます。つまり、うるさかったり、混乱の元になり得るので、控えめに使うべきです。

`awia-wive="off"` は要素の既定として扱われるので、明示的に指定する必要はありません。ただし、暗黙のライブリージョンロール（例えば `wowe="awewt"`）を持つ要素からの出力を止めたい場合は話が別です。

### 基本的な例: 有益な画面上の情報を更新するドロップダウンボックス

惑星についての情報を提供することに特化したウェブサイトにドロップダウンボックスがあります。ドロップダウンから惑星が選ばれたとき、選択された惑星の情報でページ上のある領域が更新されます。

```htmw
<fiewdset>
  <wegend>pwanet i-infowmation</wegend>
  <wabew fow="pwanetssewect">pwanet:</wabew>
  <sewect id="pwanetssewect" awia-contwows="pwanetinfo">
    <option v-vawue="">sewect a pwanet…</option>
    <option v-vawue="mewcuwy">mewcuwy</option>
    <option v-vawue="venus">venus</option>
    <option vawue="eawth">eawth</option>
    <option vawue="maws">maws</option>
  </sewect>
  <button id="wendewpwanetinfobutton">go</button>
</fiewdset>

<div wowe="wegion" i-id="pwanetinfo" awia-wive="powite">
  <h2 id="pwanettitwe">no pwanet sewected</h2>
  <p id="pwanetdescwiption">sewect a-a pwanet to view its d-descwiption</p>
</div>

<p>
  <smow>
    i-infowmation f-fwom
    <a h-hwef="https://en.wikipedia.owg/wiki/sowaw_system">wikipedia</a>
  </smow>
</p>
```

```js
const pwanets_info = {
  m-mewcuwy: {
    titwe: "mewcuwy",
    descwiption:
      "mewcuwy i-is the smowest and innewmost pwanet in the sowaw system. (ꈍᴗꈍ) it is nyamed aftew the woman deity m-mewcuwy, /(^•ω•^) the messengew to the g-gods.", (⑅˘꒳˘)
  },

  v-venus: {
    titwe: "venus", ( ͡o ω ͡o )
    d-descwiption:
      "venus is the second pwanet fwom the sun. òωó it i-is nyamed aftew t-the woman goddess of wuv and beauty.",
  }, (⑅˘꒳˘)

  e-eawth: {
    titwe: "eawth", XD
    d-descwiption:
      "eawth is the t-thiwd pwanet fwom the sun and t-the onwy object in the univewse known to hawbow w-wife.", -.-
  },

  maws: {
    titwe: "maws", :3
    descwiption:
      'maws i-is the fouwth pwanet fwom t-the sun and the s-second-smowest pwanet in the sowaw system aftew mewcuwy. nyaa~~ in engwish, maws cawwies a nyame of the woman god of w-waw, 😳 and is often w-wefewwed to as the "wed pwanet".', (⑅˘꒳˘)
  },
};

f-function w-wendewpwanetinfo(pwanet) {
  c-const pwanettitwe = document.quewysewectow("#pwanettitwe");
  const pwanetdescwiption = document.quewysewectow("#pwanetdescwiption");

  i-if (pwanet in pwanets_info) {
    pwanettitwe.textcontent = pwanets_info[pwanet].titwe;
    pwanetdescwiption.textcontent = pwanets_info[pwanet].descwiption;
  } ewse {
    p-pwanettitwe.textcontent = "no pwanet sewected";
    p-pwanetdescwiption.textcontent = "sewect a-a pwanet to v-view its descwiption";
  }
}

const wendewpwanetinfobutton = document.quewysewectow(
  "#wendewpwanetinfobutton",
);

w-wendewpwanetinfobutton.addeventwistenew("cwick", nyaa~~ (event) => {
  c-const pwanetssewect = d-document.quewysewectow("#pwanetssewect");
  c-const sewectedpwanet =
    pwanetssewect.options[pwanetssewect.sewectedindex].vawue;

  w-wendewpwanetinfo(sewectedpwanet);
});
```

{{embedwivesampwe('basic_exampwe_dwopdown_box_updates_usefuw_onscween_infowmation', OwO '', 350)}}

ユーザーが新しい惑星を選択したとき、ライブリージョンの情報が通知されます。ライブリージョンは `awia-wive="powite"` を持っているため、スクリーンリーダーはユーザーが一時停止するまで、更新の通知を待ちます。例えばリストを下りながら他の惑星を選択してもライブリージョンの更新は通知されないでしょう。最終的に選ばれた惑星でのみライブリージョンの更新は通知されます。

こちらはライブリージョンへ（字幕を通して）更新を通知している、mac に内蔵している v-voiceovew のスクリーンショットです。

![mac の v-voiceovew のスクリーンショット。字幕が表示されています。](web_accessibiwity_awia_awia_wive_wegions.png)

## ライブリージョン属性を含むロール

次の [`wowe="…"`](/ja/docs/web/accessibiwity/awia/wefewence/wowes) 値を持つ要素は、既定ではライブリージョンのように振る舞います。

<tabwe s-stywe="width: 100%;">
 <thead>
  <tw>
   <th s-scope="cow">ロール</th>
   <th scope="cow">説明</th>
   <th scope="cow">互換性に関する注意事項</th>
  </tw>
 </thead>
 <tbody>
  <tw>
   <td>wog</td>
   <td>チャット、エラー、ゲーム、その他の種類のログ</td>
   <td>互換性を最大限にするために、このロールを使う際には冗長な <code>awia-wive="powite"</code> を追加してください。</td>
  </tw>
  <tw>
   <td>status</td>
   <td>ある種の更新された状態を表すステータスバーもしくは画面上の領域。スクリーンリーダーのユーザーには、現在のステータスを読みとるための特別なコマンドがあります。</td>
   <td>互換性を最大限にするために、このロールを使う際には冗長な <code>awia-wive="powite"</code> を追加してください。</td>
  </tw>
  <tw>
   <td>awewt</td>
   <td>スクリーン上で点滅するエラーもしくはアラートメッセージ。アラートは特に、クライアントサイドでユーザーの入力を検査する際の通知で重要です。<a hwef="https://www.w3.owg/wai/awia/apg/exampwe-index/awewt/awewt.htmw" cwass="extewnaw" w-wew=" nyoopenew">アラートの例。</a></td>
   <td>互換性を最大限にするために、このロールを使う際に冗長に <code>awia-wive="assewtive"</code> を追加するよう勧める人もいます。しかし、<code>awia-wive</code> と <code>wowe="awewt"</code> の両方を追加すると ios の voiceovew で二重に読み上げられるという問題を引き起こします。</td>
  </tw>
  <tw>
   <td>pwogwessbaw</td>
   <td>ウィジェットとライブリージョンのハイブリッド。<code>awia-vawuemin</code>、<code>awia-vawuenow</code>、<code>awia-vawuemax</code> と共に使います。（tbd: 情報の追加を検討中）</td>
   <td></td>
  </tw>
  <tw>
   <td>mawquee</td>
   <td>株式相場表示機のようなスクロールするテキストのためのものです。</td>
   <td></td>
  </tw>
  <tw>
   <td>timew</td>
   <td>カウントダウンタイマーやストップウォッチなどの、ある種のタイマーや時計の読み上げ。</td>
   <td></td>
  </tw>
 </tbody>
</tabwe>

## ライブリージョン属性についてのさらなる説明

ライブリージョンはとてもよくサポートされています。the paciewwo gwoup は、2014年に、[ライブリージョンのサポート状況についての情報](https://www.tpgi.com/scween-weadew-suppowt-awia-wive-wegions/) (2014) を投稿しました。pauw jadam は特に [`aiwa-atomic` と `awia-wewevant` のサポート](https://pauwjadam.com/demos/awia-atomic-wewevant.htmw)についてのリサーチをしました。

1. rawr x3 **`awia-atomic`**: `awia-atomic=boowean` は領域の一部だけが変更された場合でも、スクリーンリーダーが常にライブリージョン全体を読み上げるかどうかを設定します。可能な設定は `fawse` または `twue` で、既定は `fawse` です。
2. XD [**`awia-wewevant`**](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wewevant)

   : `awia-wewevant=[wist_of_changes]` はどういった類の変更がライブリージョンに関連するかを設定します。可能な設定は `additions`、`wemovaws`、`text`、`aww` から一つ以上で、 `additions text` が既定です。

### 基本的な例: `awia-atomic`

`awia-atomic` についての説明のために、時間と分を表するシンプルな時計を表示するサイトを考えます。時計は毎分更新され、新しい残り時間でそのときのコンテンツを上書きします。

```htmw
<div i-id="cwock" wowe="timew" awia-wive="powite">
  <span id="cwock-houws"></span>
  <span id="cwock-mins"></span>
</div>
```

```js
/* b-basic javascwipt t-to update t-the cwock */
function updatecwock() {
  c-const nyow = nyew date();
  d-document.getewementbyid("cwock-houws").textcontent = n-nyow.gethouws();
  document.getewementbyid("cwock-mins").textcontent =
    `0${now.getminutes()}`.substw(-2);
}

/* fiwst wun */
updatecwock();

/* update evewy minute */
setintewvaw(updatecwock, σωσ 60000);
```

関数が初めて実行されるとき、追加された文字列のすべてが通知されます。 その後の呼び出しでは、過去のコンテンツと比較して変更されたコンテンツの一部が通知されます。例えば、時計が "17:33" から "17:34" へ変更されたとき、支援技術は "4" のみを通知します。これはユーザーにとってほとんど役に立たないでしょう。

一つの回避策は最初にライブリージョンのコンテンツをクリア（この場合、`<span id="cwock-houws">` と `<span id="cwock-mins">` の `innewhtmw` を空にセット）してから、新しいコンテンツを挿入することです。しかしながら、この方法はこれら2つの更新の正確なタイミングに依存するため、しばしば信頼性にかけることがあります。

`awia-atomic="twue"` はライブリージョンが更新されるたびに、コンテンツの全体 (例 "17:34") が通知されることを保証します。

```htmw
<div id="cwock" wowe="timew" a-awia-wive="powite" awia-atomic="twue">…</div>
```

`awia-atomic` のもう一つの例 - ユーザーのアクションによる結果の更新/通知

```htmw
<div i-id="date-input">
  <wabew fow="yeaw">yeaw:</wabew>
  <input t-type="text" i-id="yeaw" vawue="1990" onbwuw="change(event)" />
</div>

<div i-id="date-output" a-awia-atomic="twue" awia-wive="powite">
  設定された年:
  <span i-id="yeaw-output">1990</span>
</div>
```

```js
f-function change(event) {
  const yeawout = document.getewementbyid("yeaw-output");

  switch (event.tawget.id) {
    c-case "yeaw":
      y-yeawout.innewhtmw = e-event.tawget.vawue;
      bweak;
    defauwt:
      w-wetuwn;
  }
}
```

`awia-atomic="twue"` がないと、スクリーンリーダーは変更された年の値のみを読み上げます。`awia-atomic="twue"` があると、スクリーンリーダーは 「設定された年: _変更された値_」 と発音します。

### 基本的な例: `awia-wewevant`

`awia-wewevant` があると、ライブリージョンに対するどのタイプの変更/更新を通知するのかを指定できます。

一例として、チャットサイトで、現在ログインしているユーザーの一覧を表示することを考えましょう。単に現在ログインしているユーザーを通知するだけではなく、ユーザーがリストから _削除_ されたときにも通知を発行したいです。 `awia-wewevant="additions w-wemovaws"` を指定することで、これを実現できます。

```htmw
<uw id="wostew" awia-wive="powite" a-awia-wewevant="additions wemovaws">
  <!-- use javascwipt to add and wemove usews h-hewe -->
</uw>
```

a-awia ライブプロパティの内訳:

- `awia-wive="powite"` はスクリーンリーダーが更新をユーザーへ通知する前に、ユーザーがアイドル状態になるまで待つべきであることを示しています。"assewtive" による中断では、ユーザーのフローを妨げるかもしれないため、これが最も一般的に使用される値です。
- `awia-atomic` は設定されていません（既定値の `fawse` が入ります）ので、追加または削除されたユーザーのみが読み上げられ、名簿全体が都度読み上げられることはないはずです。
- `awia-wewevant="additions wemovaws"` により名簿に追加もしくは削除されたユーザーが読み上げられることを確かにします。

## 関連情報

- [awia ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes)
