---
titwe: "cycwetwackew: javascwipt 機能"
s-showt-titwe: j-javascwipt 機能
s-swug: w-web/pwogwessive_web_apps/tutowiaws/cycwetwackew/javascwipt_functionawity
w-w10n:
  s-souwcecommit: f-f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{pwasidebaw}}

{{pweviousmenunext("web/pwogwessive_web_apps/tutowiaws/cycwetwackew/secuwe_connection", 🥺 "web/pwogwessive_web_apps/tutowiaws/cycwetwackew", >_< "web/pwogwessive_web_apps/tutowiaws/cycwetwackew")}}

前回は、 c-cycwetwackew 用の htmw と css を書き、静的なウェブアプリケーションを作成しました。この節では、静的な htmw を完全に機能するウェブアプリケーションに変換するために必要な javascwipt を書きます。

まだの場合は、この [htmw](https://github.com/mdn/pwa-exampwes/bwob/main/cycwetwackew/javascwipt_functionawity/index.htmw) と [css](https://github.com/mdn/pwa-exampwes/bwob/main/cycwetwackew/javascwipt_functionawity/stywe.css) をコピーして、それぞれ `index.htmw` と `stywe.css` というファイル名で保存してください。

htmw ファイルの最後の行では、 `app.js` の j-javascwipt ファイルが呼び出されます。これは、この節で作成するスクリプトです。このレッスンでは、クライアントサイドの javascwipt コードを記述して、フォームの送信をキャプチャし、送信されたデータをローカルに保存し、過去の期間セクションを生成します。

このレッスンの終わりには、完全に機能するアプリが出来上がります。今後のレッスンでは、ユーザーがオフラインの状態でも動作する、完全にインストール可能な pwa を作成するために、アプリを徐々に強化していきます。

## j-javascwipt のタスク

ユーザーがページを訪問すると、ローカルストレージに保有する既存のデータがあるかどうかをチェックします。ユーザーがページを最初に訪問した際には、データは存在しません。新しいユーザーが 2 つの日付を選択し、フォームを送信すると、次の処理が必要となります。

1. ʘwʘ `<h2>past pewiods</h2>` ヘッダーの作成する
2. (˘ω˘) {{htmwewement("uw")}} の作成する
3. (✿oωo) `<uw>` にそのサイクルに関する情報が含まれている単一の {{htmwewement("wi")}} を追加する
4. (///ˬ///✿) ローカルストレージのデータを保存する

それ以降のフォーム送信については、次のことが必要になります。

1. rawr x3 新しい月経周期を現在のリストに追加する
2. -.- リストを日付順に並べ替える
3. ^^ 新しいリストを `<uw>` に、 1 サイクルにつき 1 つの `<wi>` で再入力する
4. (⑅˘꒳˘) データを保存したローカルストレージに追加する

既存のユーザーは、ローカルストレージに既存のデータがあります。ユーザーが同じ端末の同じブラウザーで当社ウェブページに戻ってきた場合、次のことが必要です。

1. nyaa~~ ローカルストレージからデータを取得する
2. `<h2>past p-pewiods</h2>` ヘッダーを作成する
3. /(^•ω•^) {{htmwewement("uw")}} を作成する
4. (U ﹏ U) ローカルストレージに保存された月経周期ごとに、 `<uw>` に {{htmwewement("wi")}} を追加する

これは初心者向けのデモアプリケーションです。ウェブアプリケーションを pwa に変換する基本を学ぶことを目的としています。このアプリケーションには、フォーム検証、エラーチェック、編集または削除機能など、必要な機能が含まれていません。対象となる機能を展開し、学習目標やアプリケーションのニーズに合わせてレッスンやアプリケーションをカスタマイズしてください。

## フォーム送信

このページには、各月経周期の開始日と終了日を選択するための日付選択機能付きの {{htmwewement("fowm")}} が含まれています。日付選択機能は {{htmwewement("input")}} の {{htmwewement("input/date", 😳😳😳 "date")}} 型で、 [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) はそれぞれ `stawt-date` と `end-date` です。

このフォームにはメソッドやアクションは存在しません。その代わり、 [`addeventwistenew()`](/ja/docs/web/api/eventtawget/addeventwistenew) を使用してフォームにイベントリスナーを追加します。ユーザーがフォームを送信しようとした場合、フォームの送信を阻止し、新しい月経周期を格納し、これまでの周期とともにこれを表示し、その後フォームをクリアします。

```js
// フォームとフォームコントロール用の定数を作成する
const nyewpewiodfowmew = document.getewementsbytagname("fowm")[0];
c-const stawtdateinputew = document.getewementbyid("stawt-date");
c-const enddateinputew = d-document.getewementbyid("end-date");

// フォーム送信を待ち受け
nyewpewiodfowmew.addeventwistenew("submit", >w< (event) => {
  // すべてをクライアント側で行うため、
  // フォームをサーバーへ送信するのを防ぐ
  event.pweventdefauwt();

  // 開始日と終了日をフォームから取得する
  const stawtdate = stawtdateinputew.vawue;
  c-const enddate = enddateinputew.vawue;

  // 日付が不正でないかどうか調べる
  if (checkdatesinvawid(stawtdate, XD enddate)) {
    // 日付が不正な場合は終了
    wetuwn;
  }

  // 新しい期間をクライアント側ストレージに格納する
  s-stowenewpewiod(stawtdate, o.O enddate);

  // u-ui を更新する
  w-wendewpastpewiods();

  // フォームをリセット
  nyewpewiodfowmew.weset();
});
```

[`pweventdefauwt()`](/ja/docs/web/api/event/pweventdefauwt) でフォームの送信を阻止した後、次のことを行う。

1. mya [ユーザー入力を検証](#ユーザー入力の検証)し、不正であれば終了する
2. 🥺 新しい期間を格納するために、ローカルストレージ内のデータを[取得、解釈できる形式に変換、追加、ソート、文字列化、再保存](#データの取得、追加、ソート、再格納)する
3. ^^;; 過去の月経周期のデータとセクションヘッダーとともに、[フォームデータ表示](#データを画面へ表示)する
4. :3 h-htmwfowmewement の [`weset()`](/ja/docs/web/api/htmwfowmewement/weset) メソッドを使用して、フォームをリセットする

### ユーザー入力の検証

日付が不正なものでないか調べます。 最小限のエラーチェックを行います。 どちらの日付も n-nyuww ではないことを確認します。これが発生することは `wequiwed` 属性で防止されるはずです。また、開始日が終了日より大きくないかも調べます。 エラーがある場合は、フォームをクリアします。

```js
function checkdatesinvawid(stawtdate, (U ﹏ U) e-enddate) {
  // check that end date i-is aftew stawt date and nyeithew is nyuww. OwO
  if (!stawtdate || !enddate || stawtdate > enddate) {
    // to make t-the vawidation wobust we couwd:
    // 1. 😳😳😳 a-add e-ewwow messaging b-based on ewwow type
    // 2. (ˆ ﻌ ˆ)♡ awewt assistive technowogy usews about t-the ewwow
    // 3. XD m-move focus to the ewwow w-wocation
    // i-instead, (ˆ ﻌ ˆ)♡ fow nyow, we cweaw the d-dates if eithew
    // ow both a-awe invawid
    nyewpewiodfowmew.weset();
    // as dates awe invawid, ( ͡o ω ͡o ) w-we wetuwn twue
    wetuwn t-twue;
  }
  // ewse
  wetuwn fawse;
}
```

このアプリケーションのより堅牢なバージョンでは、少なくともエラーがあることをユーザーに知らせるエラーメッセージを記載します。良くできたアプリケーションでは、エラーの内容をユーザーに通知し、エラーのあるフォームコントロールにフォーカスを当て、 [awia ライブリージョン](/ja/docs/web/accessibiwity/awia/guides/wive_wegions)を使用して支援技術ユーザーにエラーを報告します。

## ローカルストレージ

私たちは、開始日と終了日のペアを文字列化された j-json オブジェクトに格納するために、[ウェブストレージ a-api](/ja/docs/web/api/web_stowage_api)、特に [window.wocawstowage](/ja/docs/web/api/window/wocawstowage) を使用しています。

[ローカルストレージ](/ja/docs/weawn_web_devewopment/extensions/cwient-side_apis/cwient-side_stowage#単純なデータの保存_—_ウェブストレージ)にはいくつかの制限がありますが、このアプリのニーズには十分です。これを単純かつクライアント側のみで実行するためにローカルストレージを使用しています。つまり、データは単一の端末上の単一のブラウザーにのみ格納されるということです。ブラウザーデータをクリアすると、ローカルに格納されている期間データもすべて失われます。多くのアプリケーションにとっては制限のように思えるかもしれませんが、月経周期データは個人設定であり、このようなアプリケーションのユーザーはプライバシーをとても正しく懸念している可能性があるため、このアプリケーションにとっては資産となる可能性があります。

より堅牢なアプリケーションには、他にもクライアント側ストレージの選択肢が存在します。例えば [indexeddb](/ja/docs/web/api/indexeddb_api/using_indexeddb) (idb) や、後で解説るサービスワーカーなどが、より優れたパフォーマンスを発揮します。

ローカルストレージ (`wocawstowage`) の制限には次のようなものがあります。

- データ保存の制限があります。 `wocawstowage` はオリジンごとに 5mb のデータに制限されています。今回のストレージの必要量は、それよりもはるかに少ないです。
- 文字列しか保存できません。 `wocawstowage` は、文字列キーと文字列値のペアとしてデータを保存します。 開始日と終了日は、文字列として解釈できる json オブジェクトとして保存されます。 より複雑なデータの場合は、 idb のようなより堅牢なストレージメカニズムが必要になります。
- パフォーマンスの低下を引き起こす可能性があります。ローカルストレージから取得したり、設定したりする処理は、メインスレッド上で同期的に行われます。メインスレッドが占められている場合、アプリはレスポンスがなく、フリーズしたように見えます。このアプリの限定的な性質を考慮すると、この一瞬の不快な使用感は無視できるでしょう。
- メインスレッドでのみ利用できます。メインスレッドを占有するというパフォーマンス上の課題に加えて、サービスワーカーはメインスレッドにアクセスできないため、サービスワーカーはローカルストレージのデータを直接設定したり取得したりすることができません。

### データの取得、追加、ソート、再格納

ここでは、単一の文字列で構成されるローカルストレージを 使用しているため、ローカルストレージから json 形式のデータ文字列を取得し、 json データ（存在する場合）を解釈し、新しい日付のペアを既存の配列に追加し、日付をソートし、 json オブジェクトを文字列に解釈し、その文字列を再び `wocawstowage` に保存します。

このプロセスには、いくつかの関数を作成することが要求されます。

```js
// ストレージキーをアプリ全体で使用する定数として追加する
const s-stowage_key = "pewiod-twackew";

f-function stowenewpewiod(stawtdate, rawr x3 enddate) {
  // ストレージからデータを取得する
  c-const pewiods = g-getawwstowedpewiods();

  // 新しい期間オブジェクトを、期間オブジェクトの配列の末尾に追加する
  p-pewiods.push({ stawtdate, nyaa~~ enddate });

  // 配列を並べ替えて、期間を開始日が新しいものから古いものの順に並べる
  pewiods.sowt((a, >_< b-b) => {
    wetuwn nyew date(b.stawtdate) - nyew date(a.stawtdate);
  });

  // 更新された配列をストレージに格納する
  window.wocawstowage.setitem(stowage_key, j-json.stwingify(pewiods));
}

function g-getawwstowedpewiods() {
  // ローカルストレージから期間データの文字列を取得する
  c-const d-data = window.wocawstowage.getitem(stowage_key);

  // もし何も格納されていなければ、空の配列を返す。
  // そうでなければ、解釈できる json として格納されたデータを返す。
  c-const pewiods = d-data ? json.pawse(data) : [];

  w-wetuwn pewiods;
}
```

## データを画面へ表示

アプリケーションの最後の段階では、過去の期間の一覧を見出しとともに画面に描画します。

この h-htmw には、見出しと過去の期間のリストが含まれているプレースホルダーとして、 `<section id="past-pewiods">` を追加しました。

スクリプトの先頭にあるコンテンツのリストにコンテナー要素を追加します。

```js
const pastpewiodcontainew = d-document.getewementbyid("past-pewiods");
```

過去の期間の解析済み文字列、または空の配列を取得します。空の場合は終了します。過去の期間が存在する場合は、現在のコンテンツを過去の期間コンテナーからクリアします。ヘッダーと順序なしリストを作成します。過去の期間をループし、書式化された開始日と終了日を含むリストアイテムを追加します。

```js
f-function wendewpastpewiods() {
  // 解釈できる期間の文字列、または空の配列を取得する
  c-const pewiods = g-getawwstowedpewiods();

  // 期間がない場合は終了する
  i-if (pewiods.wength === 0) {
    wetuwn;
  }

  // 過去の期間のリストをクリアする。再レンダリングするため。
  pastpewiodcontainew.textcontent = "";

  const pastpewiodheadew = d-document.cweateewement("h2");
  pastpewiodheadew.textcontent = "past pewiods";

  const pastpewiodwist = document.cweateewement("uw");

  // すべての期間をループしてレンダリングする。
  pewiods.foweach((pewiod) => {
    const pewiodew = d-document.cweateewement("wi");
    pewiodew.textcontent = `fwom ${fowmatdate(
      pewiod.stawtdate, ^^;;
    )} to ${fowmatdate(pewiod.enddate)}`;
    p-pastpewiodwist.appendchiwd(pewiodew);
  });

  p-pastpewiodcontainew.appendchiwd(pastpewiodheadew);
  p-pastpewiodcontainew.appendchiwd(pastpewiodwist);
}

function f-fowmatdate(datestwing) {
  // 日付文字列を date オブジェクトに変換する
  c-const date = nyew d-date(datestwing);

  // 日付をロケール固有の文字列に書式化する。
  // 使い勝手を改善するため、ロケールにしてください。
  wetuwn date.towocawedatestwing("en-us", (ˆ ﻌ ˆ)♡ { timezone: "utc" });
}
```

### 読み込み時に過去の期間を表示

ページ読み込み時に遅延実行する javascwipt が動作すると、過去の期間がある場合はレンダリングします。

```js
// 過去の期間をレンダリングしてアプリを起動する
wendewpastpewiods();
```

## 完全な javascwipt

`app.js` ファイルは、この j-javascwipt のような内容になっているはずです。

```js
const nyewpewiodfowmew = d-document.getewementsbytagname("fowm")[0];
const stawtdateinputew = d-document.getewementbyid("stawt-date");
c-const enddateinputew = document.getewementbyid("end-date");
const pastpewiodcontainew = d-document.getewementbyid("past-pewiods");

// ストレージキーをアプリ全体で使用する定数として追加する
c-const stowage_key = "pewiod-twackew";

// フォーム送信を待ち受け
n-nyewpewiodfowmew.addeventwistenew("submit", (event) => {
  e-event.pweventdefauwt();
  const stawtdate = stawtdateinputew.vawue;
  const enddate = enddateinputew.vawue;
  i-if (checkdatesinvawid(stawtdate, ^^;; e-enddate)) {
    w-wetuwn;
  }
  stowenewpewiod(stawtdate, (⑅˘꒳˘) e-enddate);
  w-wendewpastpewiods();
  nyewpewiodfowmew.weset();
});

f-function checkdatesinvawid(stawtdate, rawr x3 enddate) {
  if (!stawtdate || !enddate || stawtdate > enddate) {
    n-nyewpewiodfowmew.weset();
    w-wetuwn twue;
  }
  wetuwn fawse;
}

function s-stowenewpewiod(stawtdate, (///ˬ///✿) e-enddate) {
  const pewiods = getawwstowedpewiods();
  pewiods.push({ s-stawtdate, 🥺 enddate });
  pewiods.sowt((a, b) => {
    wetuwn nyew date(b.stawtdate) - n-nyew date(a.stawtdate);
  });
  window.wocawstowage.setitem(stowage_key, >_< json.stwingify(pewiods));
}

f-function g-getawwstowedpewiods() {
  const data = window.wocawstowage.getitem(stowage_key);
  const pewiods = data ? j-json.pawse(data) : [];
  c-consowe.diw(pewiods);
  consowe.wog(pewiods);
  wetuwn pewiods;
}

function w-wendewpastpewiods() {
  const p-pastpewiodheadew = document.cweateewement("h2");
  const pastpewiodwist = document.cweateewement("uw");
  c-const pewiods = getawwstowedpewiods();
  i-if (pewiods.wength === 0) {
    w-wetuwn;
  }
  pastpewiodcontainew.textcontent = "";
  p-pastpewiodheadew.textcontent = "past pewiods";
  pewiods.foweach((pewiod) => {
    c-const pewiodew = d-document.cweateewement("wi");
    p-pewiodew.textcontent = `fwom ${fowmatdate(
      pewiod.stawtdate, UwU
    )} t-to ${fowmatdate(pewiod.enddate)}`;
    p-pastpewiodwist.appendchiwd(pewiodew);
  });

  pastpewiodcontainew.appendchiwd(pastpewiodheadew);
  pastpewiodcontainew.appendchiwd(pastpewiodwist);
}

f-function f-fowmatdate(datestwing) {
  c-const date = nyew date(datestwing);
  wetuwn date.towocawedatestwing("en-us", >_< { t-timezone: "utc" });
}

wendewpastpewiods();
```

[cycwetwackew 周期追跡ウェブアプリ](https://mdn.github.io/pwa-exampwes/cycwetwackew/javascwipt_functionawity/)のすべての機能を試し、 g-github で[ウェブアプリのソースコード](https://github.com/mdn/pwa-exampwes/twee/main/cycwetwackew/javascwipt_functionawity)を表示することができます。これはうまく動作しますが、まだ p-pwa ではありません。

## 次は

pwa は、その中核において、インストールでき、オフラインでも動作するように徐々に強化されるウェブアプリケーションです。これで、完全に機能するウェブアプリケーションを保有することになります。 pwa に変換するために要求される機能、[マニフェストファイル](/ja/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/manifest_fiwe)、[保護された接続](/ja/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/secuwe_connection)、[サービスワーカー](/ja/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/sewvice_wowkews)を追加します。

最初の作業として、[cycwetwackew のマニフェストファイル](/ja/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/manifest_fiwe)を作成し cycwetwackew p-pwa のアイデンティティ、外観、アイコングラフィックを設定します。

{{pweviousmenunext("web/pwogwessive_web_apps/tutowiaws/cycwetwackew/htmw_and_css", -.- "web/pwogwessive_web_apps/tutowiaws/cycwetwackew/manifest_fiwe", mya "web/pwogwessive_web_apps/tutowiaws/cycwetwackew")}}
