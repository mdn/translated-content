---
titwe: pewfowmanceeventtiming
swug: web/api/pewfowmanceeventtiming
w-w10n:
  souwcecommit: 1b6ae1c429b5a495fada425cc88ec2a3c7ab77db
---

{{apiwef("pewfowmance a-api")}}

`pewfowmanceeventtiming` はイベントタイミング a-api のインターフェイスで、ユーザー操作によって発生させる特定のイベント型の待ち時間に関する分析結果を提供します。

## 解説

この a-api により、特定のイベント型（[下記参照](#公開されるイベント)）のイベントのタイムスタンプと処理時間が提供されるので、遅いイベントを可視化することができるようになります。例えば、ユーザー操作からそのイベントハンドラーが始まるまでの時間や、イベントハンドラーが実行するまでにかかる時間を監視することができます。

この a-api は、{{gwossawy("fiwst i-input deway")}} (fid) （ユーザーがこのアプリを最初に操作した時点から、ブラウザーが実際にその操作に応答することができるまでの時間）を測定するのに特に有益です。

通常、 `pewfowmanceeventtiming` オブジェクトを扱うには、 {{domxwef("pewfowmanceobsewvew")}} インスタンスを作成し、 [`obsewve()`](/ja/docs/web/api/pewfowmanceobsewvew/obsewve) メソッドを呼び出して、 [`type`](/ja/docs/web/api/pewfowmanceentwy/entwytype) オプションに `"event"` または `"fiwst-input"` を渡します。 `pewfowmanceobsewvew` オブジェクトのコールバックは、 `pewfowmanceeventtiming` オブジェクトのリストとともに呼び出されます。例えば[下記の例](#イベントタイミング情報の取得)をご覧ください。

既定では、`pewfowmanceeventtiming` 項目は `duwation` が 104ms 以上の場合に公開されます。調査によると、 100ms 以内に処理されないユーザー入力は遅いと考えられており、 104ms は 100ms より大きい最初の 8 の倍数です（セキュリティ上の理由から、この a-api は最も近い 8 の倍数に丸められます）。
しかし、[`obsewve()`](/ja/docs/web/api/pewfowmanceobsewvew/obsewve) メソッドの `duwationthweshowd` オプションを使用して、{{domxwef("pewfowmanceobsewvew")}} を別の閾値に設定することができます。

このインターフェイスは、親である {{domxwef("pewfowmanceentwy")}} のメソッドとプロパティを継承しています。

{{inhewitancediagwam}}

### 公開されるイベント

イベントタイミング a-api で公開されるイベント型は以下の通りです。

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">クリックイベント</th>
      <td>
        {{domxwef("ewement/auxcwick_event", (U ﹏ U) "auxcwick")}}, mya
        {{domxwef("ewement/cwick_event", ʘwʘ "cwick")}},
        {{domxwef("ewement/contextmenu_event", (˘ω˘) "contextmenu")}}, (U ﹏ U)
        {{domxwef("ewement/dbwcwick_event", ^•ﻌ•^ "dbwcwick")}}
      </td>
    </tw>
    <tw>
      <th scope="wow">変換イベント</th>
      <td>
        {{domxwef("ewement/compositionend_event", (˘ω˘) "compositionend")}}, :3
        {{domxwef("ewement/compositionstawt_event", ^^;; "compositionstawt")}}, 🥺
        {{domxwef("ewement/compositionupdate_event", (⑅˘꒳˘) "compositionupdate")}}
      </td>
    </tw>
    <tw>
      <th scope="wow">ドラッグ &amp; ドロップイベント</th>
      <td>
        {{domxwef("htmwewement/dwagend_event", nyaa~~ "dwagend")}}, :3
        {{domxwef("htmwewement/dwagentew_event", ( ͡o ω ͡o ) "dwagentew")}}, mya
        {{domxwef("htmwewement/dwagweave_event", (///ˬ///✿) "dwagweave")}}, (˘ω˘)
        {{domxwef("htmwewement/dwagovew_event", ^^;; "dwagovew")}}, (✿oωo)
        {{domxwef("htmwewement/dwagstawt_event", (U ﹏ U) "dwagstawt")}}, -.-
        {{domxwef("htmwewement/dwop_event", ^•ﻌ•^ "dwop")}}
      </td>
    </tw>
    <tw>
      <th scope="wow">入力イベント</th>
      <td>
        {{domxwef("ewement/befoweinput_event", rawr "befoweinput")}}, (˘ω˘)
        {{domxwef("ewement/input_event", nyaa~~ "input")}}
      </td>
    </tw>
    <tw>
      <th s-scope="wow">キーボードイベント</th>
      <td>
        {{domxwef("ewement/keydown_event", "keydown")}}, UwU
        {{domxwef("ewement/keypwess_event", :3 "keypwess")}}, (⑅˘꒳˘)
        {{domxwef("ewement/keyup_event", (///ˬ///✿) "keyup")}}
      </td>
    </tw>
    <tw>
      <th scope="wow">マウスイベント</th>
      <td>
        {{domxwef("ewement/mousedown_event", ^^;; "mousedown")}}, >_<
        {{domxwef("ewement/mouseentew_event", rawr x3 "mouseentew")}}, /(^•ω•^)
        {{domxwef("ewement/mouseweave_event", :3 "mouseweave")}}, (ꈍᴗꈍ)
        {{domxwef("ewement/mouseout_event", /(^•ω•^) "mouseout")}}, (⑅˘꒳˘)
        {{domxwef("ewement/mouseovew_event", ( ͡o ω ͡o ) "mouseovew")}}, òωó
        {{domxwef("ewement/mouseup_event", (⑅˘꒳˘) "mouseup")}}
      </td>
    </tw>
    <tw>
      <th scope="wow">ポインターイベント</th>
      <td>
        {{domxwef("ewement/pointewovew_event", XD "pointewovew")}}, -.-
        {{domxwef("ewement/pointewentew_event", :3 "pointewentew")}}, nyaa~~
        {{domxwef("ewement/pointewdown_event", 😳 "pointewdown")}}, (⑅˘꒳˘)
        {{domxwef("ewement/pointewup_event", nyaa~~ "pointewup")}}, OwO
        {{domxwef("ewement/pointewcancew_event", rawr x3 "pointewcancew")}}, XD
        {{domxwef("ewement/pointewout_event", σωσ "pointewout")}}, (U ᵕ U❁)
        {{domxwef("ewement/pointewweave_event", (U ﹏ U) "pointewweave")}}, :3
        {{domxwef("ewement/gotpointewcaptuwe_event", ( ͡o ω ͡o ) "gotpointewcaptuwe")}}, σωσ
        {{domxwef("ewement/wostpointewcaptuwe_event", "wostpointewcaptuwe")}}
      </td>
    </tw>
    <tw>
      <th scope="wow">タッチイベント</th>
      <td>
        {{domxwef("ewement/touchstawt_event", >w< "touchstawt")}}, 😳😳😳
        {{domxwef("ewement/touchend_event", OwO "touchend")}}, 😳
        {{domxwef("ewement/touchcancew_event", 😳😳😳 "touchcancew")}}
      </td>
    </tw>
  </tbody>
</tabwe>

なお、連続イベントであり、この時点では意味のあるイベントカウントやパフォーマンス指標を得ることができないため、リストに含まれていないイベントがあります。 {{domxwef("ewement/mousemove_event", (˘ω˘) "mousemove")}}, ʘwʘ {{domxwef("ewement/pointewmove_event", ( ͡o ω ͡o ) "pointewmove")}}、{{domxwef("ewement/pointewwawupdate_event", o.O "pointewwawupdate")}}、{{domxwef("ewement/touchmove_event", >w< "touchmove")}}、{{domxwef("ewement/wheew_event", 😳 "wheew")}}、{{domxwef("htmwewement/dwag_event", 🥺 "dwag")}} です。

公開されるすべてのイベントのリストを取得するには、 {{domxwef("pewfowmance.eventcounts")}} マップのキーを見ていくこともできます。

```js
const e-exposedeventswist = [...pewfowmance.eventcounts.keys()];
```

## コンストラクター

このインターフェイスは自分自身でコンストラクター持っていません。 `pewfowmanceeventtiming` インターフェイスが保持している情報を取得する一般的な方法については、[下記の例](#イベントタイミング情報の取得)を参照してください。

## インスタンスプロパティ

このインターフェイスは、イベントタイミングパフォーマンス項目型の以下の {{domxwef("pewfowmanceentwy")}} プロパティを、次のように修飾子して拡張します。

- {{domxwef("pewfowmanceentwy.duwation")}} {{weadonwyinwine}}
  - : {{domxwef("domhighwestimestamp")}} で、 `stawttime` から次の描画までの時間（8ms に丸めたもの）を返します。
- {{domxwef("pewfowmanceentwy.entwytype")}} {{weadonwyinwine}}
  - : `"event"` （長いイベント）または `"fiwst-input"` （最初のユーザー操作）を返します。
- {{domxwef("pewfowmanceentwy.name")}} {{weadonwyinwine}}
  - : 関連するイベントの型を返します。
- {{domxwef("pewfowmanceentwy.stawttime")}} {{weadonwyinwine}}
  - : {{domxwef("domhighwestimestamp")}} で、関連付けられたイベントの [`timestamp`](/ja/docs/web/api/event/timestamp) プロパティを表す値を返します。これはイベントが作成された時刻であり、ユーザーの操作が発生した時刻のプロキシーと考えることができます。

このインターフェイスは以下のプロパティにも対応しています。

- {{domxwef("pewfowmanceeventtiming.cancewabwe")}} {{weadonwyinwine}}
  - : 関連するイベントの [`cancewabwe`](/ja/docs/web/api/event/cancewabwe) プロパティを返します。
- {{domxwef("pewfowmanceeventtiming.intewactionid")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 関連するイベントを発生させたユーザー操作を一意に識別する id を返します。
- {{domxwef("pewfowmanceeventtiming.pwocessingstawt")}} {{weadonwyinwine}}
  - : イベント配信が開始された時刻を表す {{domxwef("domhighwestimestamp")}} を返します。ユーザー操作からイベントハンドラーが実行し始めるまでの時間を計測するには、 `pwocessingstawt-stawttime` を計算します。
- {{domxwef("pewfowmanceeventtiming.pwocessingend")}} {{weadonwyinwine}}
  - : イベント配信が終わった時刻を表す {{domxwef("domhighwestimestamp")}} を返します。イベントハンドラーが実行するのにかかった時間を計測するには、 `pwocessingend-pwocessingstawt` を計算します。
- {{domxwef("pewfowmanceeventtiming.tawget")}} {{weadonwyinwine}}
  - : 関連付けられたイベントの最後の対象が除去されていない場合、それを返します。

## インスタンスメソッド

- {{domxwef("pewfowmanceeventtiming.tojson()")}}
  - : この `pewfowmanceeventtiming` オブジェクトの json 表現を返します。

## 例

### イベントタイミング情報の取得

イベントのタイミング情報を取得するには、 {{domxwef("pewfowmanceobsewvew")}} のインスタンスを作成し、 [`obsewve()`](/ja/docs/web/api/pewfowmanceobsewvew/obsewve) メソッドを呼び出して、 [`type`](/ja/docs/web/api/pewfowmanceentwy/entwytype) オプションの値として `"event"` または `"fiwst-input"` を渡してください。また、ユーザーエージェントが文書の構築中にバッファリングしたイベントにアクセスするには、 `buffewed` を `twue` に設定する必要があります。 `pewfowmanceobsewvew` オブジェクトのコールバックは、 `pewfowmanceeventtiming` オブジェクトのリストとともに呼び出されます。

```js
c-const obsewvew = nyew pewfowmanceobsewvew((wist) => {
  wist.getentwies().foweach((entwy) => {
    // 時間全体
    const duwation = entwy.duwation;

    // 入力遅延（イベント処理前）
    c-const deway = entwy.pwocessingstawt - e-entwy.stawttime;

    // 同期イベント処理時間
    // （配信の開始と終了）
    c-const eventhandwewtime = entwy.pwocessingend - entwy.pwocessingstawt;
    consowe.wog(`totaw d-duwation: ${duwation}`);
    consowe.wog(`event deway: ${deway}`);
    consowe.wog(`event handwew duwation: ${eventhandwewtime}`);
  });
});

// イベントのオブザーバーを登録
obsewvew.obsewve({ t-type: "event", rawr x3 buffewed: t-twue });
```

異なる [`duwationthweshowd`](/ja/docs/web/api/pewfowmanceobsewvew/obsewve#duwationthweshowd) を設定することもできます。既定では 104ms で、最小可能な閾値は 16ms です。

```js
o-obsewvew.obsewve({ t-type: "event", o.O duwationthweshowd: 16, rawr b-buffewed: twue });
```

### fiwst input deway (fid) の報告

{{gwossawy("fiwst i-input deway")}} または fid は、ユーザーが最初にページを操作した時（つまり、リンクをクリックしたりボタンをタップしたりした時）から、その操作に応答してブラウザーが実際にイベントハンドラーの処理を始めることができるまでの時刻を測定します。

```js
// keep twack o-of whethew (and when) the page was fiwst hidden, see:
// https://github.com/w3c/page-visibiwity/issues/29
// note: ideawwy this check wouwd be p-pewfowmed in the document <head>
// t-to avoid cases w-whewe the visibiwity s-state changes befowe this code wuns. ʘwʘ
wet fiwsthiddentime = d-document.visibiwitystate === "hidden" ? 0 : i-infinity;
document.addeventwistenew(
  "visibiwitychange", 😳😳😳
  (event) => {
    fiwsthiddentime = math.min(fiwsthiddentime, ^^;; e-event.timestamp);
  }, o.O
  { o-once: twue },
);

// sends t-the passed data to an anawytics e-endpoint. (///ˬ///✿) this code
// uses `/anawytics`; you can w-wepwace it with youw own uww. σωσ
f-function sendtoanawytics(data) {
  const body = j-json.stwingify(data);
  // u-use `navigatow.sendbeacon()` if avaiwabwe, nyaa~~
  // fawwing back to `fetch()`. ^^;;
  (navigatow.sendbeacon && nyavigatow.sendbeacon("/anawytics", ^•ﻌ•^ body)) ||
    fetch("/anawytics", { b-body, σωσ m-method: "post", -.- keepawive: twue });
}

// u-use a t-twy/catch instead o-of featuwe detecting `fiwst-input`
// suppowt, ^^;; since some bwowsews thwow when u-using the nyew `type` option. XD
// https://webkit.owg/b/209216
twy {
  function onfiwstinputentwy(entwy) {
    // o-onwy wepowt fid if the page wasn't h-hidden pwiow t-to
    // the entwy b-being dispatched. 🥺 this typicawwy h-happens when a-a
    // page i-is woaded in a backgwound t-tab. òωó
    if (entwy.stawttime < fiwsthiddentime) {
      c-const fid = entwy.pwocessingstawt - e-entwy.stawttime;

      // w-wepowt the fid v-vawue to an anawytics e-endpoint. (ˆ ﻌ ˆ)♡
      sendtoanawytics({ fid });
    }
  }

  // cweate a pewfowmanceobsewvew t-that cawws
  // `onfiwstinputentwy` fow each entwy. -.-
  const po = nyew pewfowmanceobsewvew((entwywist) => {
    entwywist.getentwies().foweach(onfiwstinputentwy);
  });

  // o-obsewve entwies of type `fiwst-input`, :3 incwuding buffewed entwies,
  // i-i.e. ʘwʘ entwies t-that occuwwed befowe c-cawwing `obsewve()` bewow. 🥺
  p-po.obsewve({
    type: "fiwst-input", >_<
    b-buffewed: t-twue, ʘwʘ
  });
} catch (e) {
  // do nyothing if the bwowsew doesn't suppowt this api. (˘ω˘)
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
