---
title: ARIA ライブリージョン
slug: Web/Accessibility/ARIA/ARIA_Live_Regions
---

JavaScript を使うと、検索結果のリストを瞬時に更新する、もしくはユーザーの操作を必要としないような控えめなアラートや通知を表示するなど、ページ全体をリロードせずにページの一部を動的に変更することができます。 これらの変更は通常ページを見ることのできるユーザーにとっては視覚的に明らかですが、支援技術ユーザーにとっては明確ではないかもしれません。ARIA ライブリージョンはこのギャップを埋め、動的なコンテンツの変更を支援技術により通知できるやり方で、プログラムによって表出させる方法を提供します。

> **メモ:** 支援技術はライブリージョンへのコンテンツの _動的な_ 変更を通知します。
>
> `aria-live` 属性もしくは 特化したライブリージョン `role` （例えば `role="alert"` ）を、変更をアナウンスしたい要素に含めることで有効になりますが、変更が起こる前にこれらの属性が追加されている必要があります。 —　最初からマークアップに含まれていても、 JavaScript で動的に追加しても構いません。

## ライブリージョン

ページのリロードなしに更新される動的なコンテンツは、ほとんどの場合領域もしくはウィジェットのどちらかです。 対話的でないシンプルなコンテンツの変更は、ライブリージョンとして記されるべきです。ライブリージョンは `aria-live` 属性を使って明示するべきです。

**`aria-live`**: `aria-live=POLITENESS_SETTING` はスクリーンリーダーがライブリージョンの更新処理の優先度を設定するために使われます。設定は `off`、`polite`、`assertive` で、デフォルトは `off` です。この属性は間違いなく最も重要な属性です。

通常、`aria-live="polite"` のみが使われます。ユーザーにとって重要な更新を受け取るが、うるさくなるほど速くすべきでない領域にはこの属性を設定すべきです。スクリーンリーダーはユーザーがアイドル状態になったときに読み上げを行います。

`aria-live="assertive"` は、即時に伝えてユーザーの注意を引く必要のある、時間にシビアな通知にのみ使用します。 一般的に assertive なライブリージョンへの変更は、スクリーンリーダーがその時に読み上げているものに割り込みます。つまり、うるさかったり、混乱の元になり得るので、控えめに使うべきです。

`aria-live="off"` は要素のデフォルトとして扱われるので、明示的に指定する必要はありません。ただし、暗黙のライブリージョンロール (例えば `role="alert"` ) を持つ要素からの出力を止めたい場合は話が別です。

### 基本的な例: 有益な画面上の情報を更新するドロップダウンボックス

惑星についての情報を提供することに特化したウェブサイトにドロップダウンボックスがあります。ドロップダウンから惑星が選ばれたとき、選択された惑星の情報でページ上のある領域が更新されます。

#### HTML

```html
<fieldset>
  <legend>Planet information</legend>
  <label for="planetsSelect">Planet:</label>
  <select id="planetsSelect" aria-controls="planetInfo">
    <option value="">Select a planet&hellip;</option>
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

#### JavaScript

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

#### 結果

{{EmbedLiveSample('Dropdown_box_updates_useful_onscreen_information', '', 350)}}

ユーザーが新しい惑星を選択したとき、ライブリージョンの情報が通知されます。ライブリージョンは `aria-live="polite"` を持っているため、スクリーンリーダーはユーザーが一時停止するまで、更新の通知を待ちます。例えばリストを下りながら他の惑星を選択してもライブリージョンの更新は通知されないでしょう。最終的に選ばれた惑星でのみライブリージョンの更新は通知されます。

ここにはライブリージョンへ (字幕を通して) 更新を通知している、Mac に内蔵している VoiceOver のスクリーンショットがあります:

![A screenshot of VoiceOver on Mac announcing the update to a live region. Subtitles are shown in the picture.](Web_Accessibility_ARIA_ARIA_Live_Regions.png)

## ライブリージョン属性を含むロール

次の [`role="…"`](/ja/docs/Web/Accessibility/ARIA/Roles) 値を持つ要素は、デフォルトではライブリージョンのように振る舞います:

| ロール      | 説明                                                                                                                                                                                                                   | 互換性に関する注意事項                                                                                                                                                                                                              |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| log         | チャット、エラー、ゲームもしくは別種のログ                                                                                                                                                                             | 互換性を最大限にするために、このロールを使う際には冗長な `aria-live="polite"` を追加します。                                                                                                                                        |
| status      | ある種の更新された状態を表すステータスバーもしくはスクリーン領域。スクリーンリーダーのユーザーは現在のステータスを読みとるための特別なコマンドを持っています。                                                         | 互換性を最大限にするために、このロールを使う際には冗長な `aria-live="polite"` を追加します。                                                                                                                                        |
| alert       | スクリーン上で点滅するエラーもしくはアラートメッセージ。アラートは特に、クライアントサイドでユーザーの入力を検査する際の通知で重要です。[アラートの例](https://www.w3.org/WAI/ARIA/apg/example-index/alert/alert.html) | 互換性を最大限にするために、このロールを使う際に `aria-live="assertive"` を追加するよう勧める人もいます。しかし、`aria-live` と `role=alert` の両方を追加すると iOS の VoiceOver で二重に読み上げられるという問題を引き起こします。 |
| progressbar | ウィジェットとライブリージョンのハイブリッド。aria-valuemin や aria-valuenow、aria-valuemax と共に使います。 (TBD: 情報の追加を検討中)                                                                                 |                                                                                                                                                                                                                                     |
| marquee     | 株式相場表示機のようなスクロールするテキストのためのものです。                                                                                                                                                         |                                                                                                                                                                                                                                     |
| timer       | カウントダウンタイマーやストップウォッチなどの、ある種のタイマーや時計の読み上げ。                                                                                                                                     |                                                                                                                                                                                                                                     |

## ライブリージョン属性についてのさらなる説明

ライブリージョンはとてもよくサポートされています。The Paciello Group は、2014年に、[ライブリージョンのサポート状況についての情報](https://www.tpgi.com/screen-reader-support-aria-live-regions/) (2014) を投稿しました。Paul Jadam は特に [`aira-atomic` と `aria-relevant` のサポート](https://pauljadam.com/demos/aria-atomic-relevant.html)についてのリサーチをしました。

1. **`aria-atomic`**: `aria-atomic=BOOLEAN` は領域の一部だけが変更された場合でも、スクリーンリーダーが常にライブリージョン全体を読み上げるかどうかを設定します。可能な設定は `false` または `true` で、デフォルトは `false` です。
2. [**`aria-relevant`**](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-relevant): `aria-relevant=[LIST_OF_CHANGES]` はどういったタイプの変更がライブリージョンに関連するかを設定します。可能な設定は `additions`、`removals`、`text`、`all` から一つ以上で、 `additions text` がデフォルトです。

### 基本的な例: `aria-atomic`

`aria-atomic` についての説明のために、時間と分を表するシンプルな時計を表示するサイトを考えます。時計は毎分更新され、新しい残り時間でそのときのコンテンツを上書きします。

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
    `0${now.getMinutes()}`.substr(-2);
}
/* first run */
updateClock();
/* update every minute */
setInterval(updateClock, 60000);
```

関数が初めて実行されるとき、追加された文字列のすべてが通知されます。 その後の呼び出しでは、過去のコンテンツと比較して変更されたコンテンツの一部が通知されます。例えば、時計が "17:33" から "17:34" へ変更されたとき、支援技術は "4" のみを通知します。これはユーザーにとってほとんど役に立たないでしょう。

一つの回避策は最初にライブリージョンのコンテンツをクリア（この場合、`<span id="clock-hours">` と `<span id="clock-mins">` の `innerHTML` を空にセット）してから、新しいコンテンツを挿入することです。しかしながら、この方法はこれら2つの更新の正確なタイミングに依存するため、しばしば信頼性にかけることがあります。

`aria-atomic="true"` はライブリージョンが更新されるたびに、コンテンツの全体 (例 "17:34") が通知されることを保証します。

```html
<div id="clock" role="timer" aria-live="polite" aria-atomic="true"></div>
```

`aria-atomic` のもう一つの例 - ユーザーのアクションによる結果の更新/通知

```html
<div id="date-input">
  <label for="year">Year:</label>
  <input type="text" id="year" value="1990" onblur="change(event)" />
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
      yearOut.innerHTML = event.target.value;
      break;
    default:
      return;
  }
}
```

`aria-atomic="true"` がないと、スクリーンリーダーは変更された年の値のみを読み上げます。`aria-atomic="true"` があると、スクリーンリーダーは 「設定された年: _変更された値_」 と発音します。

### 基本的な例: `aria-relevant`

`aria-relevant` があると、ライブリージョンに対するどのタイプの変更/更新を通知するのかを指定できます。

一例として、チャットサイトで、現在ログインしているユーザーの一覧を表示することを考えましょう。単に現在ログインしているユーザーを通知するだけではなく、ユーザーがリストから _削除_ されたときにも通知を発行したいです。 `aria-relevant="additions removals"` を指定することで、これを実現できます。

```html
<ul id="roster" aria-live="polite" aria-relevant="additions removals">
  <!-- use JavaScript to add remove users here-->
</ul>
```

ARIA ライブプロパティの内訳:

- `aria-live="polite"` はスクリーンリーダーが更新をユーザーへ通知する前に、ユーザーがアイドル状態になるまで待つべきであることを示しています。"assertive" による中断では、ユーザーのフローを妨げるかもしれないため、これが最も一般的に使用される値です。
- `aria-atomic` は設定されていません (デフォルトの `false` が入ります) ので、追加または削除されたユーザーのみが読み上げられ、名簿全体が都度読み上げられることはないはずです。
- `aria-relevant="additions removals"` により名簿に追加もしくは削除されたユーザーが読み上げられることを確かにします。

## 関連情報

- [ARIA Roles](/ja/docs/Web/Accessibility/ARIA/Roles)
