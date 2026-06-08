---
title: ARIA ライブリージョン
slug: Web/Accessibility/ARIA/Guides/Live_regions
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

JavaScript を使うと、検索結果のリストを瞬時に更新する、もしくはユーザーの操作を必要としないような控えめなアラートや通知を表示するなど、ページ全体をリロードせずにページの一部を動的に変えられます。 これらの変更は通常ページを見ることのできるユーザーにとっては視覚的に明らかですが、支援技術ユーザーにとっては明らかではないかもしれません。ARIA ライブリージョンはこのギャップを埋め、支援技術によって通知できるやり方で、動的なコンテンツの変更をプログラム的に公開するやり方を提供します。

> [!NOTE]
> 支援技術はライブリージョンへのコンテンツの _動的な_ 変更を通知します。
> 変更を通知したい要素に `aria-live` 属性または特殊なライブリージョン `role` ([`role="status"`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/status_role) など) を含めると、変わる前に属性が加われば機能します。属性の追加は、元のマークアップで行うか、JavaScript を使用して動的に加えます。まず空のライブリージョンを作り、次に別の手順でリージョン内のコンテンツを変えます。
> 仕様書には明示的に書かれていませんが、ブラウザや支援技術には [`role="alert"`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) の特別な処理が含まれています。ほとんどの場合、`role="alert"` 領域内のコンテンツは、その領域（通知/メッセージが既に含まれている）がページの初期マークアップに存在する場合や、ページに動的に挿入された場合でも読み上げられます。ただし、`role="alert"` 領域は、ブラウザと支援技術の組み合わせによっては、読み上げ時に自動的に "Alert" という接頭辞が付けられることに注意してください。

## ライブリージョン

ページのリロードなしに更新される動的なコンテンツは、ほとんどの場合領域もしくはウィジェットのどちらかです。 対話的でないシンプルなコンテンツの変更は、ライブリージョンとして記されるべきです。ライブリージョンは `aria-live` 属性を使って明示するべきです。

**`aria-live`**: `aria-live=POLITENESS_SETTING` はスクリーンリーダーがライブリージョンの更新処理の優先度を設定するために使われます。設定は `off`、`polite`、`assertive` で、既定は `off` です。この属性は間違いなく最も重要な属性です。

通常、`aria-live="polite"` のみが使われます。ユーザーにとって重要な更新を受け取るが、うるさくなるほど速くすべきでない領域にはこの属性を設定すべきです。スクリーンリーダーはユーザーがアイドル状態になったときに読み上げを行います。

`aria-live="assertive"` は、即時に伝えてユーザーの注意を引く必要のある、時間にシビアな通知にのみ使用します。 一般的に assertive なライブリージョンへの変更は、スクリーンリーダーがその時に読み上げているものに割り込みます。つまり、うるさかったり、混乱の元になり得るので、控えめに使うべきです。

意外なことに、`aria-live="off"` は変更を通知しないことを意味しません。要素に `aria-live="off"` が設定されている場合（または `role="marquee"` や `role="timer"` など、この暗黙的な値を持つ `role` が設定されている場合）、要素の内容の変更は、フォーカスが要素上にあるか、要素内にある場合にのみ通知されるはずです。

### 基本的な例: 有益な画面上の情報を更新するドロップダウンボックス

惑星についての情報を提供することに特化したウェブサイトにドロップダウンボックスがあります。ドロップダウンから惑星が選ばれたとき、選択された惑星の情報でページ上のある領域が更新されます。

```html
<fieldset>
  <legend>Planet information</legend>
  <label for="planetsSelect">Planet:</label>
  <select id="planetsSelect" aria-controls="planetInfo">
    <option value="">Select a planet…</option>
    <option value="mercury">Mercury</option>
    <option value="venus">Venus</option>
    <option value="earth">Earth</option>
    <option value="mars">Mars</option>
  </select>
  <button id="renderPlanetInfoButton">Go</button>
</fieldset>

<div role="region" id="planetInfo" aria-live="polite">
  <h2 id="planetTitle">No planet selected</h2>
  <p id="planetDescription">Select a planet to view its description</p>
</div>

<p>
  <small>
    Information from
    <a href="https://en.wikipedia.org/wiki/Solar_System">Wikipedia</a>
  </small>
</p>
```

```js
const PLANETS_INFO = {
  mercury: {
    title: "Mercury",
    description:
      "Mercury is the smallest and innermost planet in the Solar System. It is named after the Roman deity Mercury, the messenger to the gods.",
  },

  venus: {
    title: "Venus",
    description:
      "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.",
  },

  earth: {
    title: "Earth",
    description:
      "Earth is the third planet from the Sun and the only object in the Universe known to harbor life.",
  },

  mars: {
    title: "Mars",
    description:
      'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war, and is often referred to as the "Red Planet".',
  },
};

function renderPlanetInfo(planet) {
  const planetTitle = document.querySelector("#planetTitle");
  const planetDescription = document.querySelector("#planetDescription");

  if (planet in PLANETS_INFO) {
    planetTitle.textContent = PLANETS_INFO[planet].title;
    planetDescription.textContent = PLANETS_INFO[planet].description;
  } else {
    planetTitle.textContent = "No planet selected";
    planetDescription.textContent = "Select a planet to view its description";
  }
}

const renderPlanetInfoButton = document.querySelector(
  "#renderPlanetInfoButton",
);

renderPlanetInfoButton.addEventListener("click", (event) => {
  const planetsSelect = document.querySelector("#planetsSelect");
  const selectedPlanet =
    planetsSelect.options[planetsSelect.selectedIndex].value;

  renderPlanetInfo(selectedPlanet);
});
```

{{EmbedLiveSample('Basic_example_Dropdown_box_updates_useful_onscreen_information', '', 350)}}

ユーザーが新しい惑星を選択したとき、ライブリージョンの情報が通知されます。ライブリージョンは `aria-live="polite"` を持っているため、スクリーンリーダーはユーザーが一時停止するまで、更新の通知を待ちます。例えばリストを下りながら他の惑星を選択してもライブリージョンの更新は通知されないでしょう。最終的に選ばれた惑星でのみライブリージョンの更新は通知されます。

こちらはライブリージョンへ（字幕を通して）更新を通知している、Mac に内蔵している VoiceOver のスクリーンショットです。

![Mac の VoiceOver のスクリーンショット。字幕が表示されています。](web_accessibility_aria_aria_live_regions.png)

## ライブリージョン属性を含むロール

次の [`role="…"`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles) 値を持つ要素は、既定ではライブリージョンのように振る舞います。

<table style="width: 100%;">
 <thead>
  <tr>
   <th scope="col">ロール</th>
   <th scope="col">説明</th>
   <th scope="col">互換性に関する注意事項</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>log</td>
   <td>チャット、エラー、ゲーム、その他の種類のログ</td>
   <td>互換性を最大限にするために、このロールを使う際には冗長な <code>aria-live="polite"</code> を追加してください。</td>
  </tr>
  <tr>
   <td>status</td>
   <td>ある種の更新された状態を表すステータスバーもしくは画面上の領域。スクリーンリーダーのユーザーには、現在のステータスを読みとるための特別なコマンドがあります。</td>
   <td>互換性を最大限にするために、このロールを使う際には冗長な <code>aria-live="polite"</code> を追加してください。</td>
  </tr>
  <tr>
   <td>alert</td>
   <td>スクリーン上で点滅するエラーもしくはアラートメッセージ。アラートは特に、クライアントサイドでユーザーの入力を検査する際の通知で重要です。<a href="https://www.w3.org/WAI/ARIA/apg/example-index/alert/alert.html" class="external" rel=" noopener">アラートの例。</a></td>
   <td>互換性を最大限にするために、このロールを使う際に冗長に <code>aria-live="assertive"</code> を追加するよう勧める人もいます。しかし、<code>aria-live</code> と <code>role="alert"</code> の両方を追加すると iOS の VoiceOver で二重に読み上げられるという問題を引き起こします。</td>
  </tr>
  <tr>
   <td>progressbar</td>
   <td>ウィジェットとライブリージョンのハイブリッド。<code>aria-valuemin</code>、<code>aria-valuenow</code>、<code>aria-valuemax</code> と共に使います。（TBD: 情報の追加を検討中）</td>
   <td></td>
  </tr>
  <tr>
   <td>marquee</td>
   <td>株式相場表示機のようなスクロールするテキストのためのものです。</td>
   <td></td>
  </tr>
  <tr>
   <td>timer</td>
   <td>カウントダウンタイマーやストップウォッチなどの、ある種のタイマーや時計の読み上げ。</td>
   <td></td>
  </tr>
 </tbody>
</table>

## ライブリージョン属性についてのさらなる説明

ライブリージョンはとてもよくサポートされています。Vispero は 2014 年に [ライブリージョンのサポート状況についての情報](https://vispero.com/resources/screen-reader-support-aria-live-regions/) を公開しました。特に Paul J. Adam は [`aria-atomic` と `aria-relevant` のサポート](https://pauljadam.com/demos/aria-atomic-relevant.html) について調べています。

1. **`aria-atomic`**: `aria-atomic=BOOLEAN` は領域の一部だけが変更された場合でも、スクリーンリーダーが常にライブリージョン全体を読み上げるかどうかを設定します。可能な設定は `false` または `true` で、既定は `false` です。
2. [**`aria-relevant`**](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)

   : `aria-relevant=[LIST_OF_CHANGES]` はどういった類の変更がライブリージョンに関連するかを設定します。可能な設定は `additions`、`removals`、`text`、`all` から一つ以上で、 `additions text` が既定です。

### 基本的な例: `aria-atomic`

`aria-atomic` の例として、時間と分を表示する基本的な時計を備えたサイトを考えてみましょう。時計は毎分更新され、新しい残り時間が現在の表示を上書きします。

```html
<div id="clock" role="timer" aria-live="polite">
  <span id="clock-hours"></span>
  <span id="clock-mins"></span>
</div>
```

```js
/* basic JavaScript to update the clock */
function updateClock() {
  const now = new Date();
  document.getElementById("clock-hours").textContent = now.getHours();
  document.getElementById("clock-mins").textContent =
    `0${now.getMinutes()}`.slice(-2);
}

/* first run */
updateClock();

/* update every minute */
setInterval(updateClock, 60000);
```

関数が初めて実行されるとき、追加された文字列のすべてが通知されます。 その後の呼び出しでは、過去のコンテンツと比較して変更されたコンテンツの一部が通知されます。例えば、時計が "17:33" から "17:34" へ変更されたとき、支援技術は "4" のみを通知します。これはユーザーにとってほとんど役に立たないでしょう。

一つの回避策は最初にライブリージョンのコンテンツをクリア（この場合、`<span id="clock-hours">` と `<span id="clock-mins">` の `innerHTML` を空にセット）してから、新しいコンテンツを挿入することです。しかしながら、この方法はこれら 2 つの更新の正確なタイミングに依存するため、しばしば信頼性にかけることがあります。

`aria-atomic="true"` を設定すると、ライブリージョンが更新されるたびに、コンテンツ全体が完全に通知されます（例： "17:34"）。

```html
<div id="clock" role="timer" aria-live="polite" aria-atomic="true">…</div>
```

`aria-atomic` のもう一つの例 - ユーザーのアクションによる結果の更新/通知

```html
<div id="date-input">
  <label for="year">Year:</label>
  <input type="text" id="year" value="1990" />
</div>

<div id="date-output" aria-atomic="true" aria-live="polite">
  設定された年:
  <span id="year-output">1990</span>
</div>
```

```js
function change(event) {
  const yearOut = document.getElementById("year-output");

  switch (event.target.id) {
    case "year":
      yearOut.textContent = event.target.value;
      break;
  }
}
```

`aria-atomic="true"` がないと、スクリーンリーダーは変更された年の値のみを読み上げます。`aria-atomic="true"` があると、スクリーンリーダーは 「設定された年: _変更された値_」 と発音します。

### 基本的な例: `aria-relevant`

`aria-relevant` があると、ライブリージョンに対するどのタイプの変更/更新を通知するのかを指定できます。

一例として、チャットサイトで、現在ログインしているユーザーの一覧を表示することを考えましょう。単に現在ログインしているユーザーを通知するだけではなく、ユーザーがリストから _削除_ されたときにも通知を発行したいです。 `aria-relevant="additions removals"` を指定することで、これを実現できます。

```html
<ul id="roster" aria-live="polite" aria-relevant="additions removals">
  <!-- use JavaScript to add and remove users here -->
</ul>
```

ARIA ライブプロパティの内訳:

- `aria-live="polite"` はスクリーンリーダーが更新をユーザーへ通知する前に、ユーザーがアイドル状態になるまで待つべきであることを示しています。"assertive" による中断では、ユーザーのフローを妨げるかもしれないため、これが最も一般的に使用される値です。
- `aria-atomic` は設定されていません（既定値の `false` が入ります）ので、追加または削除されたユーザーのみが読み上げられ、名簿全体が都度読み上げられることはないはずです。
- `aria-relevant="additions removals"` により名簿に追加もしくは削除されたユーザーが読み上げられることを確かにします。

## 関連情報

- [ARIA ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles)
- {{domxref("Document.ariaNotify()")}}, {{domxref("Element.ariaNotify()")}}
