---
title: "CycleTracker: JavaScript 機能"
short-title: JavaScript 機能
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{PWASidebar}}

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

前回は、 CycleTracker 用の HTML と CSS を書き、静的なウェブアプリケーションを作成しました。この節では、静的な HTML を完全に機能するウェブアプリケーションに変換するために必要な JavaScript を書きます。

まだの場合は、この [HTML](https://github.com/mdn/pwa-examples/blob/main/cycletracker/javascript_functionality/index.html) と [CSS](https://github.com/mdn/pwa-examples/blob/main/cycletracker/javascript_functionality/style.css) をコピーして、それぞれ `index.html` と `style.css` というファイル名で保存してください。

HTML ファイルの最後の行では、 `app.js` の JavaScript ファイルが呼び出されます。これは、この節で作成するスクリプトです。このレッスンでは、クライアントサイドの JavaScript コードを記述して、フォームの送信をキャプチャし、送信されたデータをローカルに保存し、過去の期間セクションを生成します。

このレッスンの終わりには、完全に機能するアプリが出来上がります。今後のレッスンでは、ユーザーがオフラインの状態でも動作する、完全にインストール可能な PWA を作成するために、アプリを徐々に強化していきます。

## JavaScript のタスク

ユーザーがページを訪問すると、ローカルストレージに保有する既存のデータがあるかどうかをチェックします。ユーザーがページを最初に訪問した際には、データは存在しません。新しいユーザーが 2 つの日付を選択し、フォームを送信すると、次の処理が必要となります。

1. `<h2>Past periods</h2>` ヘッダーの作成する
2. {{HTMLelement("ul")}} の作成する
3. `<ul>` にそのサイクルに関する情報が含まれている単一の {{HTMLelement("li")}} を追加する
4. ローカルストレージのデータを保存する

それ以降のフォーム送信については、次のことが必要になります。

1. 新しい月経周期を現在のリストに追加する
2. リストを日付順に並べ替える
3. 新しいリストを `<ul>` に、 1 サイクルにつき 1 つの `<li>` で再入力する
4. データを保存したローカルストレージに追加する

既存のユーザーは、ローカルストレージに既存のデータがあります。ユーザーが同じ端末の同じブラウザーで当社ウェブページに戻ってきた場合、次のことが必要です。

1. ローカルストレージからデータを取得する
2. `<h2>Past periods</h2>` ヘッダーを作成する
3. {{HTMLelement("ul")}} を作成する
4. ローカルストレージに保存された月経周期ごとに、 `<ul>` に {{HTMLelement("li")}} を追加する

これは初心者向けのデモアプリケーションです。ウェブアプリケーションを PWA に変換する基本を学ぶことを目的としています。このアプリケーションには、フォーム検証、エラーチェック、編集または削除機能など、必要な機能が含まれていません。対象となる機能を展開し、学習目標やアプリケーションのニーズに合わせてレッスンやアプリケーションをカスタマイズしてください。

## フォーム送信

このページには、各月経周期の開始日と終了日を選択するための日付選択機能付きの {{HTMLelement("form")}} が含まれています。日付選択機能は {{HTMLElement("input")}} の {{HTMLElement("input/date", "date")}} 型で、 [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) はそれぞれ `start-date` と `end-date` です。

このフォームにはメソッドやアクションは存在しません。その代わり、 [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) を使用してフォームにイベントリスナーを追加します。ユーザーがフォームを送信しようとした場合、フォームの送信を阻止し、新しい月経周期を格納し、これまでの周期とともにこれを表示し、その後フォームをクリアします。

```js
// フォームとフォームコントロール用の定数を作成する
const newPeriodFormEl = document.getElementsByTagName("form")[0];
const startDateInputEl = document.getElementById("start-date");
const endDateInputEl = document.getElementById("end-date");

// フォーム送信を待ち受け
newPeriodFormEl.addEventListener("submit", (event) => {
  // すべてをクライアント側で行うため、
  // フォームをサーバーへ送信するのを防ぐ
  event.preventDefault();

  // 開始日と終了日をフォームから取得する
  const startDate = startDateInputEl.value;
  const endDate = endDateInputEl.value;

  // 日付が不正でないかどうか調べる
  if (checkDatesInvalid(startDate, endDate)) {
    // 日付が不正な場合は終了
    return;
  }

  // 新しい期間をクライアント側ストレージに格納する
  storeNewPeriod(startDate, endDate);

  // UI を更新する
  renderPastPeriods();

  // フォームをリセット
  newPeriodFormEl.reset();
});
```

[`preventDefault()`](/ja/docs/Web/API/Event/preventDefault) でフォームの送信を阻止した後、次のことを行う。

1. [ユーザー入力を検証](#ユーザー入力の検証)し、不正であれば終了する
2. 新しい期間を格納するために、ローカルストレージ内のデータを[取得、解釈できる形式に変換、追加、ソート、文字列化、再保存](#データの取得、追加、ソート、再格納)する
3. 過去の月経周期のデータとセクションヘッダーとともに、[フォームデータ表示](#データを画面へ表示)する
4. HTMLFormElement の [`reset()`](/ja/docs/Web/API/HTMLFormElement/reset) メソッドを使用して、フォームをリセットする

### ユーザー入力の検証

日付が不正なものでないか調べます。 最小限のエラーチェックを行います。 どちらの日付も null ではないことを確認します。これが発生することは `required` 属性で防止されるはずです。また、開始日が終了日より大きくないかも調べます。 エラーがある場合は、フォームをクリアします。

```js
function checkDatesInvalid(startDate, endDate) {
  // Check that end date is after start date and neither is null.
  if (!startDate || !endDate || startDate > endDate) {
    // To make the validation robust we could:
    // 1. add error messaging based on error type
    // 2. Alert assistive technology users about the error
    // 3. move focus to the error location
    // instead, for now, we clear the dates if either
    // or both are invalid
    newPeriodFormEl.reset();
    // as dates are invalid, we return true
    return true;
  }
  // else
  return false;
}
```

このアプリケーションのより堅牢なバージョンでは、少なくともエラーがあることをユーザーに知らせるエラーメッセージを記載します。良くできたアプリケーションでは、エラーの内容をユーザーに通知し、エラーのあるフォームコントロールにフォーカスを当て、 [ARIA ライブリージョン](/ja/docs/Web/Accessibility/ARIA/Guides/Live_regions)を使用して支援技術ユーザーにエラーを報告します。

## ローカルストレージ

私たちは、開始日と終了日のペアを文字列化された JSON オブジェクトに格納するために、[ウェブストレージ API](/ja/docs/Web/API/Web_Storage_API)、特に [window.localStorage](/ja/docs/Web/API/Window/localStorage) を使用しています。

[ローカルストレージ](/ja/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage#単純なデータの保存_—_ウェブストレージ)にはいくつかの制限がありますが、このアプリのニーズには十分です。これを単純かつクライアント側のみで実行するためにローカルストレージを使用しています。つまり、データは単一の端末上の単一のブラウザーにのみ格納されるということです。ブラウザーデータをクリアすると、ローカルに格納されている期間データもすべて失われます。多くのアプリケーションにとっては制限のように思えるかもしれませんが、月経周期データは個人設定であり、このようなアプリケーションのユーザーはプライバシーをとても正しく懸念している可能性があるため、このアプリケーションにとっては資産となる可能性があります。

より堅牢なアプリケーションには、他にもクライアント側ストレージの選択肢が存在します。例えば [IndexedDB](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB) (IDB) や、後で解説るサービスワーカーなどが、より優れたパフォーマンスを発揮します。

ローカルストレージ (`localStorage`) の制限には次のようなものがあります。

- データ保存の制限があります。 `localStorage` はオリジンごとに 5MB のデータに制限されています。今回のストレージの必要量は、それよりもはるかに少ないです。
- 文字列しか保存できません。 `localStorage` は、文字列キーと文字列値のペアとしてデータを保存します。 開始日と終了日は、文字列として解釈できる JSON オブジェクトとして保存されます。 より複雑なデータの場合は、 IDB のようなより堅牢なストレージメカニズムが必要になります。
- パフォーマンスの低下を引き起こす可能性があります。ローカルストレージから取得したり、設定したりする処理は、メインスレッド上で同期的に行われます。メインスレッドが占められている場合、アプリはレスポンスがなく、フリーズしたように見えます。このアプリの限定的な性質を考慮すると、この一瞬の不快な使用感は無視できるでしょう。
- メインスレッドでのみ利用できます。メインスレッドを占有するというパフォーマンス上の課題に加えて、サービスワーカーはメインスレッドにアクセスできないため、サービスワーカーはローカルストレージのデータを直接設定したり取得したりすることができません。

### データの取得、追加、ソート、再格納

ここでは、単一の文字列で構成されるローカルストレージを 使用しているため、ローカルストレージから JSON 形式のデータ文字列を取得し、 JSON データ（存在する場合）を解釈し、新しい日付のペアを既存の配列に追加し、日付をソートし、 JSON オブジェクトを文字列に解釈し、その文字列を再び `localStorage` に保存します。

このプロセスには、いくつかの関数を作成することが要求されます。

```js
// ストレージキーをアプリ全体で使用する定数として追加する
const STORAGE_KEY = "period-tracker";

function storeNewPeriod(startDate, endDate) {
  // ストレージからデータを取得する
  const periods = getAllStoredPeriods();

  // 新しい期間オブジェクトを、期間オブジェクトの配列の末尾に追加する
  periods.push({ startDate, endDate });

  // 配列を並べ替えて、期間を開始日が新しいものから古いものの順に並べる
  periods.sort((a, b) => {
    return new Date(b.startDate) - new Date(a.startDate);
  });

  // 更新された配列をストレージに格納する
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(periods));
}

function getAllStoredPeriods() {
  // ローカルストレージから期間データの文字列を取得する
  const data = window.localStorage.getItem(STORAGE_KEY);

  // もし何も格納されていなければ、空の配列を返す。
  // そうでなければ、解釈できる JSON として格納されたデータを返す。
  const periods = data ? JSON.parse(data) : [];

  return periods;
}
```

## データを画面へ表示

アプリケーションの最後の段階では、過去の期間の一覧を見出しとともに画面に描画します。

この HTML には、見出しと過去の期間のリストが含まれているプレースホルダーとして、 `<section id="past-periods">` を追加しました。

スクリプトの先頭にあるコンテンツのリストにコンテナー要素を追加します。

```js
const pastPeriodContainer = document.getElementById("past-periods");
```

過去の期間の解析済み文字列、または空の配列を取得します。空の場合は終了します。過去の期間が存在する場合は、現在のコンテンツを過去の期間コンテナーからクリアします。ヘッダーと順序なしリストを作成します。過去の期間をループし、書式化された開始日と終了日を含むリストアイテムを追加します。

```js
function renderPastPeriods() {
  // 解釈できる期間の文字列、または空の配列を取得する
  const periods = getAllStoredPeriods();

  // 期間がない場合は終了する
  if (periods.length === 0) {
    return;
  }

  // 過去の期間のリストをクリアする。再レンダリングするため。
  pastPeriodContainer.textContent = "";

  const pastPeriodHeader = document.createElement("h2");
  pastPeriodHeader.textContent = "Past periods";

  const pastPeriodList = document.createElement("ul");

  // すべての期間をループしてレンダリングする。
  periods.forEach((period) => {
    const periodEl = document.createElement("li");
    periodEl.textContent = `From ${formatDate(
      period.startDate,
    )} to ${formatDate(period.endDate)}`;
    pastPeriodList.appendChild(periodEl);
  });

  pastPeriodContainer.appendChild(pastPeriodHeader);
  pastPeriodContainer.appendChild(pastPeriodList);
}

function formatDate(dateString) {
  // 日付文字列を Date オブジェクトに変換する
  const date = new Date(dateString);

  // 日付をロケール固有の文字列に書式化する。
  // 使い勝手を改善するため、ロケールにしてください。
  return date.toLocaleDateString("en-US", { timeZone: "UTC" });
}
```

### 読み込み時に過去の期間を表示

ページ読み込み時に遅延実行する JavaScript が動作すると、過去の期間がある場合はレンダリングします。

```js
// 過去の期間をレンダリングしてアプリを起動する
renderPastPeriods();
```

## 完全な JavaScript

`app.js` ファイルは、この JavaScript のような内容になっているはずです。

```js
const newPeriodFormEl = document.getElementsByTagName("form")[0];
const startDateInputEl = document.getElementById("start-date");
const endDateInputEl = document.getElementById("end-date");
const pastPeriodContainer = document.getElementById("past-periods");

// ストレージキーをアプリ全体で使用する定数として追加する
const STORAGE_KEY = "period-tracker";

// フォーム送信を待ち受け
newPeriodFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const startDate = startDateInputEl.value;
  const endDate = endDateInputEl.value;
  if (checkDatesInvalid(startDate, endDate)) {
    return;
  }
  storeNewPeriod(startDate, endDate);
  renderPastPeriods();
  newPeriodFormEl.reset();
});

function checkDatesInvalid(startDate, endDate) {
  if (!startDate || !endDate || startDate > endDate) {
    newPeriodFormEl.reset();
    return true;
  }
  return false;
}

function storeNewPeriod(startDate, endDate) {
  const periods = getAllStoredPeriods();
  periods.push({ startDate, endDate });
  periods.sort((a, b) => {
    return new Date(b.startDate) - new Date(a.startDate);
  });
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(periods));
}

function getAllStoredPeriods() {
  const data = window.localStorage.getItem(STORAGE_KEY);
  const periods = data ? JSON.parse(data) : [];
  console.dir(periods);
  console.log(periods);
  return periods;
}

function renderPastPeriods() {
  const pastPeriodHeader = document.createElement("h2");
  const pastPeriodList = document.createElement("ul");
  const periods = getAllStoredPeriods();
  if (periods.length === 0) {
    return;
  }
  pastPeriodContainer.textContent = "";
  pastPeriodHeader.textContent = "Past periods";
  periods.forEach((period) => {
    const periodEl = document.createElement("li");
    periodEl.textContent = `From ${formatDate(
      period.startDate,
    )} to ${formatDate(period.endDate)}`;
    pastPeriodList.appendChild(periodEl);
  });

  pastPeriodContainer.appendChild(pastPeriodHeader);
  pastPeriodContainer.appendChild(pastPeriodList);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { timeZone: "UTC" });
}

renderPastPeriods();
```

[CycleTracker 周期追跡ウェブアプリ](https://mdn.github.io/pwa-examples/cycletracker/javascript_functionality/)のすべての機能を試し、 GitHub で[ウェブアプリのソースコード](https://github.com/mdn/pwa-examples/tree/main/cycletracker/javascript_functionality)を表示することができます。これはうまく動作しますが、まだ PWA ではありません。

## 次は

PWA は、その中核において、インストールでき、オフラインでも動作するように徐々に強化されるウェブアプリケーションです。これで、完全に機能するウェブアプリケーションを保有することになります。 PWA に変換するために要求される機能、[マニフェストファイル](/ja/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file)、[保護された接続](/ja/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection)、[サービスワーカー](/ja/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers)を追加します。

最初の作業として、[CycleTracker のマニフェストファイル](/ja/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file)を作成し CycleTracker PWA のアイデンティティ、外観、アイコングラフィックを設定します。

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
