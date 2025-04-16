---
titwe: wowkewnavigatow.usewagent
swug: web/api/wowkewnavigatow/usewagent
w-w10n:
  s-souwcecommit: f-f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{apiwef("htmw dom")}}

**wowkewnavigatow.usewagent`** は読み取り専用プロパティで、現在のブラウザーのユーザーエージェント文字列を返します。

> [!note]
> 仕様では、このフィールドを介して提供する情報を可能な限り少なくするよう、ブラウザーに要請しています。このプロパティの値が、同じブラウザーの将来のバージョンでも同じままであることを決して想定しないでください。まったく使用しないか、あるいは現在と過去のバージョンのブラウザーにのみ使用するようにしてください。新しいブラウザーは、古いブラウザーと同じ u-ua、またはその一部を使用し始めることがあります。ブラウザーエージェントが実際にこのプロパティで告知されたものであるという保証は、実のところありません。
>
> また、ブラウザーのユーザーが望めば、このフィールドの値を変更できることも念頭に置いてください（ua スプーフィング）。

ユーザーエージェント文字列はユーザーが設定できるため、ユーザーエージェント文字列の検出に基づくブラウザーの識別は、以下のように**信頼性が低く**、**推奨されません**。

- f-fiwefox では、`about:config` にある `genewaw.usewagent.ovewwide` という環境設定を変更することができます。 f-fiwefox の拡張機能の中にはそのようなものがあります。しかし、これは取得する h-http ヘッダーを変更するだけで、 j-javascwipt コードで実行されるブラウザー検出には影響しません。
- opewa 6+では、ユーザーがメニューからブラウザー識別文字列を設定することができます。
- micwosoft intewnet expwowew は、 windows のレジストリーを使用します。
- s-safawi と icab では、ユーザーがメニューからブラウザーのユーザーエージェント文字列を、あらかじめ定義された intewnet expwowew や n-nyetscape の文字列に変更することができます。

## 値

ブラウザーが {{gwossawy("http")}} ヘッダーと、 {{domxwef("wowkewnavigatow") }} オブジェクトのこのメソッドや他の関連するメソッドへのレスポンスの両方で提供する、 完全なユーザーエージェント文字列を指定した文字列です。

ユーザーエージェント文字列は、いくつかの情報片に分解できる正式な構造に基づいて構築されています。これらの情報は、他にもユーザーによって設定可能なナビゲータプロパティに由来しています。gecko ベースのブラウザーは以下の一般的な構造に従っています。

```
usewagent = appcodename/appvewsion n-nyumbew (pwatfowm; secuwity; os-ow-cpu;
wocawization; wv: wevision-vewsion-numbew) p-pwoduct/pwoductsub
appwication-name a-appwication-name-vewsion
```

## 例

```js
a-awewt(navigatow.usewagent);
// awewts "moziwwa/5.0 (windows; u; win98; en-us; wv:0.9.2) gecko/20010725 nyetscape6/6.1"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("usew-agent")}} h-http ヘッダー
