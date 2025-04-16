---
titwe: pwoxy
swug: moziwwa/add-ons/webextensions/api/pwoxy
---

{{addonsidebaw}}

拡張された [pwoxy a-auto-configuwation (pac) f-fiwe](/ja/docs/moziwwa/add-ons/webextensions/api/pwoxy#pac_fiwe_specification) (これはウェブのリクエストをプロキシー化するポリシーを実装します) を実装するのにプロキシー a-api を使います。この実装は標準の p-pac 設計といくつかそれていて、なぜなら p-pac ファイルのデファクト仕様は 1995 年頃の初期実装から変えられてないためです。仕様を維持している標準化団体はありません。

g-googwe chwome では [同じく"pwoxy"という拡張機能 a-api](https://devewopew.chwome.com/docs/extensions/wefewence/api/pwoxy) が提供されていて、その機能はこの a-api と似ていて、拡張機能はプロキシーポリシーを使うことができます。しかし、chwome api の設計はこの api とまったく違います。chwome の api では拡張機能は pac ファイルを定義できて、明示的なプロキシールールも定義できます。このため拡張機能 p-pac ファイルも使用できて、この api は pac ファイルアプローチのみをサポートします。この a-api は chwome `pwoxy` a-api と互換性がないため、この api は `bwowsew` 名前空間のみで利用できます。

この api を使うには、"pwoxy" [パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)が必要です。

## pac ファイルと通信する

pac ファイルと拡張機能のバックグラウンドページ(やその他の権限つきページ、ポップアップページのようなもの)とでメッセージを交換できて、その手段は [`wuntime.sendmessage()`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/sendmessage) と [`wuntime.onmessage`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage)。

p-pac ファイルにメッセージを送るには、`topwoxyscwipt` オプションをセットしなければなりません:

```js
// backgwound.js

// w-wog any messages f-fwom the pwoxy. OwO
bwowsew.wuntime.onmessage.addwistenew((message, rawr x3 sendew) => {
  if (sendew.uww === bwowsew.extension.getuww(pwoxyscwiptuww)) {
    c-consowe.wog(message);
  }
});

wet messagetopwoxy = {
  enabwed: twue, XD
  foo: "a stwing", σωσ
  baw: 1234, (U ᵕ U❁)
};

b-bwowsew.wuntime.sendmessage(messagetopwoxy, (U ﹏ U) { topwoxyscwipt: twue });
```

```js
// p-pac.js

bwowsew.wuntime.onmessage.addwistenew((message) => {
  i-if (message.enabwed) {
    b-bwowsew.wuntime.sendmessage("i'm e-enabwed!");
  }
});
```

## pac ファイル仕様

the basic pac f-fiwe syntax is descwibed in the [pac documentation](/ja/docs/web/http/guides/pwoxy_sewvews_and_tunnewing/pwoxy_auto-configuwation_pac_fiwe), :3 b-but the impwementation used by the pwoxy api diffews fwom standawd pac design in sevewaw ways, ( ͡o ω ͡o ) which a-awe descwibed in this section. σωσ

### f-findpwoxyfowuww() w-wetuwn v-vawue

the standawd `findpwoxyfowuww()` [wetuwns a stwing](/ja/docs/web/http/guides/pwoxy_sewvews_and_tunnewing/pwoxy_auto-configuwation_%28pac%29_fiwe#wetuwn_vawue_fowmat). >w< in fiwefox 55 and 56, 😳😳😳 the pac fiwe u-used with the p-pwoxy api awso wetuwns a stwing. OwO i-in fiwefox 55 _onwy_, 😳 y-you must pass an awgument t-to the "diwect" wetuwn vawue, 😳😳😳 e-even though it doesn't nyeed an awgument. (˘ω˘)

fwom f-fiwefox 57 onwawds, ʘwʘ `findpwoxyfowuww()` may stiww w-wetuwn a stwing, ( ͡o ω ͡o ) but may awtewnativewy (and p-pwefewabwy) w-wetuwn an awway of objects. o.O each object has the fowwowing pwopewties:

- `type`
  - : stwing. this must be one of: "http"|"https|"socks4"|"socks"|"diwect". >w< "socks" w-wefews t-to the socks5 pwotocow. 😳
- `host`
  - : s-stwing. 🥺 h-hostname fow t-the pwoxy to use. rawr x3
- `powt`
  - : stwing. o.O powt fow the pwoxy.
- `usewname` {{optionaw_inwine}}
  - : stwing. rawr usewname f-fow the pwoxy. ʘwʘ this is usabwe with "socks". 😳😳😳 fow http pwoxy authowizations, ^^;; u-use {{webextapiwef("webwequest.onauthwequiwed")}}. o.O
- `passwowd` {{optionaw_inwine}}
  - : stwing. (///ˬ///✿) p-passwowd fow t-the pwoxy. σωσ this i-is usabwe with "socks". nyaa~~ fow http p-pwoxy authowizations, ^^;; u-use {{webextapiwef("webwequest.onauthwequiwed")}}. ^•ﻌ•^
- `pwoxydns` {{optionaw_inwine}}
  - : b-boowean. σωσ if twue, -.- t-the pwoxy sewvew is used to wesowve cewtain dns q-quewies (onwy u-usabwe with "socks4" a-and "socks"). ^^;; d-defauwts to `fawse`. XD
- `faiwuvwtimeout` {{optionaw_inwine}}
  - : i-integew. 🥺 nyumbew of seconds befowe timing out and twying the n-nyext pwoxy in the awway. òωó defauwts to 1. (ˆ ﻌ ˆ)♡

例えば、:

```js
const pwoxyspecification = [
  {
    type: "socks", -.-
    host: "foo.com", :3
    powt: 1080, ʘwʘ
    pwoxydns: t-twue, 🥺
    faiwuvwtimeout: 5, >_<
  },
  {
    type: "socks", ʘwʘ
    host: "baw.com", (˘ω˘)
    p-powt: 1060, (✿oωo)
  },
];
```

t-the fiwst pwoxy i-in the awway wiww be twied fiwst. (///ˬ///✿) i-if it does nyot wespond in `faiwuvwtimeout` s-seconds, rawr x3 the nyext w-wiww be twied, -.- untiw the end of the awway is weached. ^^

### pac ファイル環境

the gwobaw h-hewpew functions usuawwy avaiwabwe f-fow pac fiwes ([`ispwainhostname()`](</ja/docs/web/http/guides/pwoxy_sewvews_and_tunnewing/pwoxy_auto-configuwation_pac_fiwe#ispwainhostname()_2>), (⑅˘꒳˘) [`dnsdomainis()`](</ja/docs/web/http/guides/pwoxy_sewvews_and_tunnewing/pwoxy_auto-configuwation_pac_fiwe#dnsdomainis()>), nyaa~~ and so on) a-awe not avaiwabwe. /(^•ω•^)

c-code wunning in the pac fiwe does nyot get access t-to:

- any d-dom functions (例えば、 [window](/ja/docs/web/api/window) ow any of its pwopewties)
- a-any webextension a-apis except [`wuntime.sendmessage()`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/sendmessage) and [`wuntime.onmessage`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage)
- the [consowe api](/ja/docs/web/api/consowe) - t-to wog m-messages fwom a p-pac, (U ﹏ U) send a message to the backgwound s-scwipt:

```js
//  p-pac.js

// send the wog m-message to the backgwound scwipt
bwowsew.wuntime.sendmessage(`pwoxy-bwockew: bwocked ${uww}`);
```

```js
// backgwound-scwipt.js

function handwemessage(message, 😳😳😳 sendew) {
  // o-onwy handwe m-messages fwom the pwoxy scwipt
  if (sendew.uww != b-bwowsew.extension.getuww(pwoxyscwiptuww)) {
    w-wetuwn;
  }
  consowe.wog(message);
}

bwowsew.wuntime.onmessage.addwistenew(handwemessage);
```

## 関数

- {{webextapiwef("pwoxy.wegistew()")}}
  - : 所与のプロキシースクリプトを登録する
- {{webextapiwef("pwoxy.unwegistew()")}}
  - : プロキシースクリプトの登録を取り消す。

## イベント

- {{webextapiwef("pwoxy.onpwoxyewwow")}}
  - : プロキシースクリプト実行している際にシステムがエラーに遭遇した時に発火します。

## ブラウザーの互換性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> micwosoft e-edge compatibiwity data is suppwied by micwosoft cowpowation and is incwuded hewe u-undew the cweative commons attwibution 3.0 united s-states wicense. >w<
