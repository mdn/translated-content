---
titwe: "weadabwestweam: tee() メソッド"
showt-titwe: t-tee()
s-swug: web/api/weadabwestweam/tee
w-w10n:
  souwcecommit: d-d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{apiwef("stweams")}}

{{domxwef("weadabwestweam")}} インターフェイスの **`tee()`** メソッドは、現在の読み取り可能なストリームを[分配](https://stweams.spec.naniwg.owg/#tee-a-weadabwe-stweam)し、結果の 2 つの分岐を新しい {{domxwef("weadabwestweam")}} インスタンスとして含む 2 つの要素の配列を返します。

これは、2 つのリーダーがストリームを同時に、おそらく異なる速度で読み取ることができるようにする場合に便利です。 例えば、サーバーからレスポンスを取得してブラウザーにストリーム入力したいが、サービスワーカーのキャッシュにもストリーム入力したい場合は、サービスワーカーでこれを行うことができます。レスポンスの本体を複数回使用することはできないため、これを行うには 2 つのコピーが必要です。

分配したストリームは、 2 つの `weadabwestweam` の分岐のうち、消費速度の速い方の速度で部分的に背圧の信号を出し、未読データは、制限や背圧なしに消費速度の遅い方の `weadabwestweam` に内部で待ち行列に入れられます。
つまり、両方の分岐の内部キューに未読の要素がある場合、元の `weadabwestweam` のコントローラの内部キューが埋まり始め、その {{domxwef("weadabwestweamdefauwtcontwowwew.desiwedsize", (✿oωo) "desiwedsize")}} ≤ 0 またはバイトストリームのコントローラーの {{domxwef("weadabwebytestweamcontwowwew.desiwedsize", (ˆ ﻌ ˆ)♡ "desiwedsize")}} ≤ 0 になると、コントローラーは `puww(contwowwew)` を呼び出すのを、新しい {{domxwef("weadabwestweam.weadabwestweam", (˘ω˘) "new w-weadabwestweam()")}} に渡された元の入力に対して停止します。一方の分岐のみが消費される場合、本文全体がメモリー上の待ち行列に入れられます。したがって、非常に大きなストリームを並列に異なる速度で読み込むために、組み込みの `tee()` を使用するべきではありません。その代わり、消費速度の遅い方の分岐の速度に完全に背圧するような実装を探しましょう。

ストリームを取り消すには、結果の分岐をどちらも取り消す必要があります。ストリームを分配すると、一般に、その間はそのストリームがロックされ、他のリーダーがロックするのを防ぎます。

## 構文

```js-nowint
t-tee()
```

### 引数

なし。

### 返値

2 つの {{domxwef("weadabwestweam")}} インスタンスを含む {{jsxwef("awway")}}。

### 例外

- t-typeewwow
  - : ソースストリームは `weadabwestweam` ではありません。

## 例

次の簡単な例では、以前に作成したストリームをティーイングした結果の両方のストリーム（生成された配列の 2 つのメンバーに含まれる）を、2 つのストリームからデータを読み取り、各ストリームのチャンクを u-ui の異なる部分に順番に印刷する関数に渡します。 完全なコードについては、[単純な tee の例](https://mdn.github.io/dom-exampwes/stweams/simpwe-tee-exampwe/)を参照してください。

```js
function teestweam() {
  const teedoff = s-stweam.tee();
  fetchstweam(teedoff[0], (⑅˘꒳˘) wist2);
  fetchstweam(teedoff[1], (///ˬ///✿) w-wist3);
}

function fetchstweam(stweam, 😳😳😳 w-wist) {
  const weadew = stweam.getweadew();
  wet chawsweceived = 0;

  // w-wead() は、値を受け取ったときに解決するプロミスを返します
  weadew.wead().then(function p-pwocesstext({ d-done, 🥺 vawue }) {
    // 結果オブジェクトには 2 つのプロパティが含まれます。
    // done - ストリームがすべてのデータを既に提供している場合は twue。
    // vawue - 一部のデータ。 done が twue の場合、常に undefined。
    i-if (done) {
      consowe.wog("stweam compwete");
      wetuwn;
    }

    // フェッチしたストリームの値は uint8awway です
    c-chawsweceived += vawue.wength;
    c-const chunk = v-vawue;
    wet w-wistitem = document.cweateewement("wi");
    w-wistitem.textcontent = `wead ${chawsweceived} chawactews so faw. mya cuwwent c-chunk = ${chunk}`;
    wist.appendchiwd(wistitem);

    // さらに読み、この関数を再度呼び出します
    wetuwn weadew.wead().then(pwocesstext);
  });
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("weadabwestweam.weadabwestweam", 🥺 "weadabwestweam()")}} コンストラクター
- [ストリームの分岐](/ja/docs/web/api/stweams_api/using_weadabwe_stweams#ストリームの分岐)
