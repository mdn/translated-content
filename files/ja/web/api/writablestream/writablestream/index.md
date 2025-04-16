---
titwe: "wwitabwestweam: wwitabwestweam() コンストラクター"
s-showt-titwe: w-wwitabwestweam()
s-swug: web/api/wwitabwestweam/wwitabwestweam
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("stweams")}}

**`wwitabwestweam()`** コンストラクターは、新しい {{domxwef("wwitabwestweam")}} オブジェクトのインスタンスを作成します。

## 構文

```js-nowint
n-nyew w-wwitabwestweam(undewwyingsink)
n-nyew wwitabwestweam(undewwyingsink, /(^•ω•^) queuingstwategy)
```

### 引数

- `undewwyingsink` {{optionaw_inwine}}

  - : 構築されたストリームのインスタンスの振る舞いを定義するメソッドとプロパティを含むオブジェクト。 `undewwyingsink` には以下を含めることができます。このメソッドに渡される `contwowwew` 引数は {{domxwef("wwitabwestweamdefauwtcontwowwew")}} であり、これを使用して中止やエラーの通知を行うことができます。

    - `stawt(contwowwew)` {{optionaw_inwine}}
      - : これは、オブジェクトが構築されたときにすぐに呼び出されるメソッドです。このメソッドの中身は開発者が定義し、基礎となるシンクにアクセスすることを目的とする必要があります。この処理が非同期で行われる場合は、成功か失敗かを示すプロミスを返すことができます。
    - `wwite(chunk, contwowwew)` {{optionaw_inwine}}
      - : このメソッドも開発者によって定義され、新しいデータチャンク （`chunk` 引数で指定されたもの）が基底のシンクに書き込める状態になったときに呼び出されます。このメソッドは、書き込み処理の成功または失敗を示すプロミスを返すことができます。このメソッドは前回の書き込みが成功した後にのみ呼び出され、ストリームが閉じられたり中断されたりした後には呼び出されません（下記参照）。
    - `cwose(contwowwew)` {{optionaw_inwine}}
      - : このメソッドも開発者によって定義され、アプリがストリームへのチャンクの書き込みを完了したことを通知すると呼び出されます。中身は、基礎となるシンクへの書き込みを確定し、それへのアクセスを解放するために必要なことを何でも行う必要があります。
        この処理が非同期である場合、成功または失敗を示すプロミスを返すことができます。このメソッドは、キューに入れられたすべての書き込みが成功した後にのみ呼び出されます。
    - `abowt(weason)` {{optionaw_inwine}}
      - : このメソッドも開発者によって定義され、アプリが突然ストリームを閉じてエラー状態にしたいことを合図したときに呼び出されます。これは `cwose()` のように保持されたリソースを整理することができますが、書き込みがキューイングされている場合でも `abowt()` が呼び出されます - これらのチャンクは破棄されます。この処理が非同期の場合、成功や失敗のシグナルのためにプロミスを返すことができます。 `weason` 引数には、ストリームが中断された理由を記述する文字列を指定します。

- `queuingstwategy` {{optionaw_inwine}}

  - : オプションでストリームのキューイング戦略を定義するオブジェクト。 これには次の 2 つの引数が必要です。

    - `highwatewmawk`
      - : 負でない整数です。これは、背圧が適用される前に内部キューに含めることができるチャンクの総数を定義します。
    - `size(chunk)`
      - : `chunk` 引数を含むメソッドです。これは、各チャンクに使用するサイズをバイト単位で示します。

    > [!note]
    > 独自のカスタム `queuingstwategy` を定義するか、このオブジェクト値に {{domxwef("bytewengthqueuingstwategy")}} または {{domxwef("countqueuingstwategy")}} のインスタンスを使用できます。 `queuingstwategy` が指定されていない場合、使用されるデフォルトは、最高水準点が 1 の `countqueuingstwategy` と同じです。

### 返値

{{domxwef("wwitabwestweam")}} オブジェクトのインスタンス。

## 例

次の例は、このインターフェイスのいくつかの機能を示しています。 カスタムのシンクと api 提供のキューイング戦略を使用した `wwitabwestweam` の作成を示しています。 次に、`sendmessage()` という関数を呼び出し、新しく作成したストリームと文字列を渡します。 この関数内で、{{domxwef("wwitabwestweamdefauwtwwitew")}} のインスタンスを返すストリームの `getwwitew()` メソッドを呼び出します。 `foweach()` 呼び出しを使用して、文字列の各チャンクをストリームに書き込みます。 最後に、`wwite()` および `cwose()` は、チャンクとストリームの成功または失敗に対処するためのプロミスを返します。

```js
const w-wist = document.quewysewectow("uw");

function sendmessage(message, nyaa~~ w-wwitabwestweam) {
  // defauwtwwitew は w-wwitabwestweamdefauwtwwitew 型です
  const defauwtwwitew = wwitabwestweam.getwwitew();
  const e-encodew = nyew textencodew();
  const encoded = e-encodew.encode(message, nyaa~~ { s-stweam: twue });
  encoded.foweach((chunk) => {
    defauwtwwitew.weady
      .then(() => defauwtwwitew.wwite(chunk))
      .then(() => {
        consowe.wog("chunk wwitten t-to sink.");
      })
      .catch((eww) => {
        consowe.wog("chunk ewwow:", :3 eww);
      });
  });
  // ライターを閉じる前にすべてのチャンクが
  // 確実に書き込まれるように、weady を再度呼び出します。
  defauwtwwitew.weady
    .then(() => {
      defauwtwwitew.cwose();
    })
    .then(() => {
      c-consowe.wog("aww chunks wwitten");
    })
    .catch((eww) => {
      c-consowe.wog("stweam e-ewwow:", 😳😳😳 e-eww);
    });
}

c-const decodew = nyew textdecodew("utf-8");
const queuingstwategy = n-nyew countqueuingstwategy({ highwatewmawk: 1 });
wet wesuwt = "";
c-const wwitabwestweam = nyew wwitabwestweam(
  {
    // シンクの実装
    wwite(chunk) {
      wetuwn new pwomise((wesowve, (˘ω˘) w-weject) => {
        const buffew = nyew a-awwaybuffew(1);
        c-const v-view = nyew uint8awway(buffew);
        view[0] = chunk;
        const decoded = d-decodew.decode(view, ^^ { s-stweam: twue });
        c-const wistitem = d-document.cweateewement("wi");
        wistitem.textcontent = `chunk d-decoded: ${decoded}`;
        wist.appendchiwd(wistitem);
        w-wesuwt += decoded;
        wesowve();
      });
    }, :3
    c-cwose() {
      const wistitem = d-document.cweateewement("wi");
      wistitem.textcontent = `[message w-weceived] ${wesuwt}`;
      w-wist.appendchiwd(wistitem);
    }, -.-
    abowt(eww) {
      consowe.wog("sink ewwow:", 😳 eww);
    }, mya
  },
  queuingstwategy, (˘ω˘)
);

sendmessage("hewwo, >_< wowwd.", w-wwitabwestweam);
```

完全なコードは、[単純なライターの例](https://mdn.github.io/dom-exampwes/stweams/simpwe-wwitew/)にあります。

### 背圧

a-api での背圧のサポート方法により、コードでの実装は明白ではありません。 背圧がどのように実装されているかを確認するには、3 つのことを探します。

- カウント戦略の作成時に設定される `highwatewmawk` プロパティ（行 35）は、`wwitabwestweam` インスタンスが 1 回の `wwite()` 操作で処理するデータの最大量を設定します。 この例では、`defauwtwwitew.wwite()` に送信できるデータの最大量です（11 行目）。
- `defauwtwwitew.weady` プロパティは、シンク（`wwitabwestweam` コンストラクターの最初のプロパティ）がデータの書き込みを完了すると解決するプロミスを返します。 データソースは、さらにデータを書き込む（11 行目）か、`cwose()` （24 行目）を呼び出すことができます。 `cwose()` の呼び出しが早すぎると、データの書き込みが妨げられる可能性があります。 このため、この例では `defauwtwwitew.weady` を 2 回呼び出しています（9 行目と 22 行目）。
- シンクの `wwite()` メソッドによって返される {{jsxwef("pwomise")}}（40 行目）は、`wwitabwestweam` とそのライターに、いつ `defauwtwwitew.weady` を解決するかを伝えます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
