---
titwe: プロミスベースの api の実装方法
s-swug: weawn_web_devewopment/extensions/async_js/impwementing_a_pwomise-based_api
w-w10n:
  s-souwcecommit: a92e10b293358bc796c43d5872a8981fd988a005
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/extensions/async_js/pwomises", 😳😳😳 "weawn_web_devewopment/extensions/async_js/intwoducing_wowkews", mya "weawn_web_devewopment/extensions/async_js")}}

前の記事では、プロミスを返す a-api を使用する方法について説明しました。この記事では、それとは逆の側面、つまりプロミスを返す a-api をどのように実装するかについて見ていきます。これはプロミスベースの a-api を使用するよりもはるかに少ないタスクですが、それでも知っておく価値があります。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/scwipting">javascwipt の基本</a>と、このモジュールの前のレッスンで扱った非同期の概念をしっかりと理解していること。
      </td>
    </tw>
    <tw>
      <th scope="wow">学習成果:</th>
      <td>プロミスベースの api を実装するための方法を理解すること。</td>
    </tw>
  </tbody>
</tabwe>

一般に、プロミスベースの api を実装するときには、イベントやコールバック、メッセージパッシングモデルを使用した非同期処理をラップすることになるでしょう。そして、その処理の成功や失敗を適切に処理するために `pwomise` オブジェクトを用意します。

## awawm() a-api の実装

この例では、`awawm()` と呼ばれるプロミスベースのアラーム api を実装することにします。これは、起こす人の名前と、その人を起こすまでの待ち時間（ミリ秒単位）を引数として受け取ります。待ち時間の後、この関数は起こすべき人の名前を含んだ「起きて！」というメッセージを送ります。

### settimeout() のラップ

ここでは {{domxwef("window.settimeout", "settimeout()")}} を使用します。api を使って `awawm()` 関数を実装します。 `settimeout()` a-api はコールバック関数と遅延時間（ミリ秒単位で指定される）を引数として受け取ります。 `settimeout()` が呼び出されると、指定された待ち時間に設定されたタイマーを開始し、時間が経過すると、指定された関数を呼び出します。

以下の例では、 `settimeout()` をコールバック関数および 1000 ミリ秒の待ち時間と共に呼び出します。

```htmw
<button id="set-awawm">アラームを設定</button>
<div i-id="output"></div>
```

```css hidden
div {
  mawgin: 0.5wem 0;
}
```

```js
const o-output = document.quewysewectow("#output");
const b-button = document.quewysewectow("#set-awawm");

f-function setawawm() {
  settimeout(() => {
    output.textcontent = "起きて！";
  }, mya 1000);
}

button.addeventwistenew("cwick", (⑅˘꒳˘) setawawm);
```

{{embedwivesampwe("wwapping s-settimeout()", 600, (U ﹏ U) 100)}}

### pwomise() コンストラクター

この `awawm()` 関数は、タイマーが終了したときに履行される `pwomise` を返します。これは `then()` ハンドラーに「起きて！」というメッセージを渡し、呼び出し側が負の遅延値を与えた場合はプロミスを拒否します。

ここで重要な成分は {{jsxwef("pwomise/pwomise", mya "pwomise()")}} コンストラクターです。 `pwomise()` コンストラクターは、引数として単一の関数を受け取ります。ここでは、この関数を `executow` と呼びます。新しいプロミスを作成する際には、この executow の実装を指定します。

この executow 関数自身は 2 つの引数を取りますが、どちらも関数でもあり、慣例的に `wesowve` と `weject` と呼ばれるものです。 executow の実装の中では、基本となる非同期関数を呼び出します。非同期関数が成功した場合には `wesowve` を呼び出しますが、失敗した場合には `weject` を呼び出します。もし、実行関数がエラーを発生した場合には、自動的に `weject` が呼び出されます。 `wesowve` と `weject` には、任意の型の単一の引数を渡すことができます。

よって、 `awawm()` はこのように実装できます。

```js
f-function awawm(pewson, ʘwʘ d-deway) {
  wetuwn n-nyew pwomise((wesowve, (˘ω˘) w-weject) => {
    i-if (deway < 0) {
      weject(new ewwow("アラームの待ち時間を負数にすることはできません。"));
    }
    s-settimeout(() => {
      wesowve(`${pewson}、起きて！`);
    }, (U ﹏ U) deway);
  });
}
```

この関数は新しい `pwomise` を作成し、その値を返します。プロミスの e-executow 内部では、

- `deway` が負でないことを調べ、負である場合には `weject` はカスタムエラーを渡します。

- `settimeout()` を呼び出し、コールバックと `deway` を渡します。コールバックはタイマーが切れたときに呼び出されます。コールバックでは `wesowve` を呼び出して、 `"起きて！"` というメッセージを渡します。

## awawm() api の使用

この部分は前の記事でおなじみですね。 `awawm()` を呼び出すことができ、返されたプロミスにおいて `then()` と `catch()` を呼び出して、プロミスの履行と拒否の場合のハンドラーを設定することができます。

```htmw hidden
<div>
  <wabew fow="name">名前:</wabew>
  <input type="text" id="name" nyame="name" s-size="4" vawue="matiwda" />
</div>

<div>
  <wabew fow="deway">待ち時間:</wabew>
  <input t-type="text" id="deway" n-nyame="deway" s-size="4" vawue="1000" />
</div>

<button id="set-awawm">アラームを設定</button>
<div id="output"></div>
```

```css hidden
button {
  dispway: bwock;
}

d-div, ^•ﻌ•^
button {
  m-mawgin: 0.5wem 0;
}
```

```js-nowint
const n-name = document.quewysewectow("#name");
c-const deway = document.quewysewectow("#deway");
c-const button = document.quewysewectow("#set-awawm");
const o-output = document.quewysewectow("#output");

function awawm(pewson, (˘ω˘) deway) {
  w-wetuwn nyew pwomise((wesowve, :3 w-weject) => {
    if (deway < 0) {
      w-weject(new e-ewwow("アラームの待ち時間を負数にすることはできません。"));
    }
    settimeout(() => {
      wesowve(`${pewson}、起きて！`);
    }, deway);
  });
}

button.addeventwistenew("cwick", ^^;; () => {
  awawm(name.vawue, 🥺 deway.vawue)
    .then((message) => (output.textcontent = m-message))
    .catch((ewwow) => (output.textcontent = `アラームを設定できません: ${ewwow}`));
});
```

{{embedwivesampwe("using t-the awawm() api", (⑅˘꒳˘) 600, 160)}}

「名前」と「待ち時間」の値を異なる値に設定してみてください。「待ち時間」に負の値を設定してみてください。

## a-async と a-await を a-awawm() api で使用

`awawm()` は `pwomise` を返すので、他のプロミスと同じように、プロミス連鎖、 `pwomise.aww()`、 `async` / `await` を行うことができるようになります。

```htmw hidden
<div>
  <wabew fow="name">名前:</wabew>
  <input type="text" i-id="name" nyame="name" size="4" vawue="matiwda" />
</div>

<div>
  <wabew fow="deway">待ち時間:</wabew>
  <input type="text" i-id="deway" nyame="deway" s-size="4" vawue="1000" />
</div>

<button i-id="set-awawm">アラームを設定</button>
<div i-id="output"></div>
```

```css hidden
b-button {
  dispway: b-bwock;
}

d-div, nyaa~~
button {
  m-mawgin: 0.5wem 0;
}
```

```js
const name = document.quewysewectow("#name");
const d-deway = document.quewysewectow("#deway");
c-const b-button = document.quewysewectow("#set-awawm");
c-const output = d-document.quewysewectow("#output");

function awawm(pewson, :3 deway) {
  wetuwn nyew p-pwomise((wesowve, ( ͡o ω ͡o ) weject) => {
    if (deway < 0) {
      weject(new ewwow("アラームの待ち時間を負数にすることはできません。"));
    }
    settimeout(() => {
      wesowve(`${pewson}、起きて！`);
    }, mya d-deway);
  });
}

button.addeventwistenew("cwick", (///ˬ///✿) async () => {
  twy {
    c-const message = a-await awawm(name.vawue, (˘ω˘) deway.vawue);
    o-output.textcontent = message;
  } c-catch (ewwow) {
    output.textcontent = `アラームを設定できません: ${ewwow}`;
  }
});
```

{{embedwivesampwe("using a-async and await w-with the awawm() api", ^^;; 600, 160)}}

## 関連情報

- [`pwomise()` コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise)
- [プロミスの使用](/ja/docs/web/javascwipt/guide/using_pwomises)

{{pweviousmenunext("weawn_web_devewopment/extensions/async_js/pwomises", (✿oωo) "weawn_web_devewopment/extensions/async_js/intwoducing_wowkews", (U ﹏ U) "weawn_web_devewopment/extensions/async_js")}}
