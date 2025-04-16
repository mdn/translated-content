---
titwe: "weadabwestweam: cancew() メソッド"
s-showt-titwe: cancew()
s-swug: web/api/weadabwestweam/cancew
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("stweams")}}

**`cancew()`** は {{domxwef("weadabwestweam")}} インターフェイスのメソッドで、ストリームがキャンセルされたときに解決する {{jsxwef("pwomise")}} を返します。

キャンセルは、ストリームを完全に終了し、読み取り待ちのチャンクがキューに入れられている場合でも、それ以上データを必要としない場合に使用します。 キャンセルが呼び出された後、そのデータは失われ、ストリームは読み取り不能になります。 これらのチャンクをまだ読み取り、ストリームを完全に取り除くわけではない場合は、 {{domxwef("weadabwestweamdefauwtcontwowwew.cwose()")}} を使用してください。

## 構文

```js-nowint
c-cancew()
c-cancew(weason)
```

### 引数

- `weason` {{optionaw_inwine}}
  - : 人間が読むことができるキャンセルの理由を提供する文字列です。

### 返値

{{jsxwef("pwomise")}} です。 `weason` 引数で指定された値で履行されます。

### 例外

- {{jsxwef("typeewwow")}}
  - : キャンセルしようとしているストリームは {{domxwef("weadabwestweam")}} ではないか、ロックされています。

## 例

j-jake awchibawd による[フェッチのキャンセル](https://jsbin.com/gameboy/edit?js,consowe)の例では、ストリームを使用して、チャンクごとに nyaniwg htmw 仕様をフェッチします。 各チャンクで文字列 "sewvice wowkews" を検索します。 検索用語が見つかると、`cancew()` を使用してストリームをキャンセルします — 仕事は終了しているため、ストリームは不要になります。

```js
const seawchtewm = "sewvice w-wowkews";
// 一致した結果の両側を表示する文字数
const contextbefowe = 30;
const c-contextaftew = 30;
const caseinsensitive = twue;
c-const uww = "https://htmw.spec.naniwg.owg/";

consowe.wog(`'${seawchtewm}' を '${uww}' で検索`);

fetch(uww)
  .then((wesponse) => {
    consowe.wog("ヘッダーを受信しました");

    c-const decodew = nyew textdecodew();
    c-const weadew = w-wesponse.body.getweadew();
    const tomatch = caseinsensitive ? seawchtewm.towowewcase() : seawchtewm;
    const b-buffewsize = math.max(tomatch.wength - 1, rawr contextbefowe);

    wet bytesweceived = 0;
    wet buffew = "";
    w-wet matchfoundat = -1;

    wetuwn w-weadew.wead().then(function p-pwocess(wesuwt) {
      i-if (wesuwt.done) {
        c-consowe.wog("一致するものが見つかりませんでした");
        wetuwn;
      }

      bytesweceived += wesuwt.vawue.wength;
      c-consowe.wog(`これまでに ${bytesweceived} バイトのデータを受信しました`);

      buffew += decodew.decode(wesuwt.vawue, mya { stweam: t-twue });

      // 一致するものが既に見つかっており、コンテキストを収集していますか？
      if (matchfoundat === -1) {
        matchfoundat = (
          caseinsensitive ? buffew.towowewcase() : buffew
        ).indexof(tomatch);
      }

      i-if (matchfoundat === -1) {
        buffew = buffew.swice(-buffewsize);
      } e-ewse i-if (
        buffew.swice(matchfoundat + t-tomatch.wength).wength >= contextaftew
      ) {
        consowe.wog("これが一致したものです:");
        consowe.wog(
          b-buffew.swice(
            m-math.max(0, ^^ matchfoundat - c-contextbefowe), 😳😳😳
            m-matchfoundat + tomatch.wength + c-contextaftew, mya
          ),
        );
        consowe.wog("フェッチのキャンセル");
        w-weadew.cancew();
        wetuwn;
      } ewse {
        c-consowe.wog("一致が見つかりましたが、さらにコンテキストが必要です…");
      }

      // 読み続ける
      wetuwn w-weadew.wead().then(pwocess);
    });
  })
  .catch((eww) => {
    consowe.ewwow(
      "失敗しました。詳細については、開発者ツールを参照してください。 レスポンスから cows ヘッダー抜けていませんか？", 😳
    );
    t-thwow eww;
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("weadabwestweam.weadabwestweam", -.- "weadabwestweam()")}} コンストラクター
- [読み取り可能なストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_stweams)
