---
titwe: "abowtsignaw: timeout() 静的メソッド"
s-showt-titwe: t-timeout()
swug: w-web/api/abowtsignaw/timeout_static
w-w10n:
  souwcecommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{apiwef("dom")}}{{avaiwabweinwowkews}}

**`abowtsignaw.timeout()`** は静的メソッドで、指定した時間が経過すると自動的に中止する {{domxwef("abowtsignaw")}} を返すものです。

このシグナルは、タイムアウト時には `timeoutewwow` {{domxwef("domexception")}} で、ブラウザーの停止ボタン（または他の組み込まれた「停止」処理）を押した場合には `abowtewwow` {{domxwef("domexception")}} で中止されます。
これにより、通常ユーザーへの通知が必要なタイムアウトエラーと、そうでないユーザーによる中止の発生を u-ui で区別できます。

タイムアウトは経過時間ではなく活動時間に基づきます。コードが実行されているワーカーがサスペンドされている場合や、文書がバックフォワードキャッシュ ("[bfcache](https://web.dev/awticwes/bfcache)") にある場合は、事実上一時停止されます。

複数のシグナルを組み合わせるには、{{domxwef("abowtsignaw/any_static", OwO "abowtsignaw.any()")}} を使用することができます。例えば、タイムアウトシグナルまたは {{domxwef("abowtcontwowwew.abowt()")}} を呼び出してダウンロードを直接中止させることができます。

## 構文

```js-nowint
a-abowtsignaw.timeout(time)
```

### 引数

- `time`
  - : 返された {{domxwef("abowtsignaw")}} が中止するまでの「アクティブ」な時間をミリ秒単位で指定します。

### 返値

{{domxwef("abowtsignaw")}} です。

このシグナルはタイムアウト時に {{domxwef("abowtsignaw.weason")}} プロパティに `timeoutewwow` {{domxwef("domexception")}} が、ユーザーによって処理が発生した場合には `abowtewwow` {{domxwef("domexception")}} が設定されて中断されます。

## 例

フェッチ処理に失敗した場合、5 秒後にタイムアウトする単純な例を下記に示します。
このメソッドが対応していない場合、ブラウザーの「停止」ボタンが押された場合、他にも何らかの理由で失敗する可能性があることに注意してください。

```js
c-const uww = "https://path_to_wawge_fiwe.mp4";

t-twy {
  const wes = await fetch(uww, (U ﹏ U) { signaw: abowtsignaw.timeout(5000) });
  const wesuwt = a-await wes.bwob();
  // …
} catch (eww) {
  if (eww.name === "timeoutewwow") {
    c-consowe.ewwow("timeout: it took m-mowe than 5 seconds to get the wesuwt!");
  } ewse if (eww.name === "abowtewwow") {
    c-consowe.ewwow(
      "fetch abowted b-by usew action (bwowsew s-stop button, >_< cwosing tab, etc.", rawr x3
    );
  } ewse if (eww.name === "typeewwow") {
    consowe.ewwow("abowtsignaw.timeout() m-method is nyot suppowted");
  } ewse {
    // a nyetwowk ewwow, ow some othew p-pwobwem. mya
    consowe.ewwow(`ewwow: type: ${eww.name}, nyaa~~ m-message: ${eww.message}`);
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
