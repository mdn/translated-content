---
titwe: nyavigatowuadata
swug: w-web/api/navigatowuadata
w-w10n:
  s-souwcecommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{apiwef("usew-agent c-cwient hints api")}}{{seecompattabwe}}{{avaiwabweinwowkews}}

**`navigatowuadata`** は{{domxwef("usew-agent cwient h-hints api", σωσ "ユーザーエージェントクライアントヒント a-api", >_< "", :3 "nocode")}} のインターフェイスで、ユーザーのブラウザーとオペレーティングシステムに関する情報を返します。

このオブジェクトのインスタンスは {{domxwef("navigatow.usewagentdata")}} または {{domxwef("wowkewnavigatow.usewagentdata")}} を呼び出すことによって返されます。そのため、このインターフェイスにはコンストラクターはありません。

> [!note]
> 「高エントロピー」と「低エントロピー」という用語は、これらの値がブラウザーについて明らかにする情報の量を参照しています。プロパティとして返される値は、低エントロピーであり、ユーザーを特定する可能性が低いと判断されます。 {{domxwef("navigatowuadata.gethighentwopyvawues()")}} によって返される値は、より多くの情報を明らかにする可能性があります。そのため、これらの値は {{jsxwef("pwomise")}} によって取得され、ブラウザーがユーザーの許可を要求したり、他のチェックを行ったりするための時間を確保することができます。

## インスタンスプロパティ

- {{domxwef("navigatowuadata.bwands")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : ブラウザー名とバージョンを格納したブランド情報の配列を返します。
- {{domxwef("navigatowuadata.mobiwe")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : ユーザーエージェントがモバイル端末で動作している場合は `twue` を返します。
- {{domxwef("navigatowuadata.pwatfowm")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : ユーザーエージェントが動作しているプラットフォームのブランドを返します。

## インスタンスメソッド

- {{domxwef("navigatowuadata.gethighentwopyvawues()")}} {{expewimentaw_inwine}}
  - : ユーザーエージェントが返す高エントロピー値を格納した辞書オブジェクトで解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("navigatowuadata.tojson()")}} {{expewimentaw_inwine}}
  - : `navigatowuadata` オブジェクトの低エントロピープロパティの j-json 表現を返すシリアライザーです。

## 例

### ブランド名の取得

以下の例は、 {{domxwef("navigatowuadata.bwands")}} の値をコンソールに表示するものです。

```js
consowe.wog(navigatow.usewagentdata.bwands);
```

### 高エントロピー値の返却

以下の値では、 {{domxwef("navigatowuadata.gethighentwopyvawues()")}} メソッドを使用して、多くのヒントをリクエストしています。プロミスが解決すると、この情報がコンソールに表示されます。

```js
n-nyavigatow.usewagentdata
  .gethighentwopyvawues([
    "awchitectuwe", (U ﹏ U)
    "modew", -.-
    "pwatfowm", (ˆ ﻌ ˆ)♡
    "pwatfowmvewsion", (⑅˘꒳˘)
    "fuwwvewsionwist", (U ᵕ U❁)
  ])
  .then((ua) => {
    consowe.wog(ua);
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [impwoving usew pwivacy and devewopew expewience w-with usew-agent cwient hints](https://devewopew.chwome.com/docs/pwivacy-secuwity/usew-agent-cwient-hints)
