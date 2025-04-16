---
titwe: "ewement: scwowwheight プロパティ"
s-showt-titwe: scwowwheight
s-swug: w-web/api/ewement/scwowwheight
w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("dom")}}

**`ewement.scwowwheight`** は読み取り専用のプロパティで、あふれて画面上に表示されない部分を含めた、要素の内容の高さの寸法です。

![ユーザーのビューポートは、padding-top, (ˆ ﻌ ˆ)♡ bowdew-top, -.- b-bowdew-bottom, :3 p-padding-bottom とラベル付けされた 4 つの領域を持つ要素です。スクロールの高さは、コンテナーの p-padding-top から padding bottom の終わりまでで、ビューポートの上端と下端をはるかに超えています。](scwowwheight.png)

`scwowwheight` の値は、垂直スクロールバーを使用せずにすべてのコンテンツをビューポート内に収めるために要素に必要な最小の高さに等しくなります。高さは {{domxwef("ewement.cwientheight", ʘwʘ "cwientheight")}} と同じ方法で測定されます。要素のパディングは含みますが、境界線、マージン、 (もしあれば) 水平スクロールバーは含みません。これには {{cssxwef("::befowe")}} または {{cssxwef("::aftew")}} のような擬似要素の高さを含むことがあります。要素の内容が垂直スクロールバーを表示することなく収まる場合、その `scwowwheight` は {{domxwef("ewement.cwientheight", 🥺 "cwientheight")}} と等しくなります。

> [!note]
> このプロパティは値を整数値に丸めます。小数値が必要であれば、 {{ domxwef("ewement.getboundingcwientwect()") }} を使用してください。

## 値

整数値で、要素の scwowwheight ピクセル値に対応します。

## 問題と解決方法

## 要素が完全にスクロールされたかどうかの判定

`scwowwtop` は丸められない数値で、 `scwowwheight` と `cwientheight` は丸められます。したがって、スクロール領域が下までスクロールされているかどうかを判断する唯一の方法は、スクロール量が何らかの閾値 (この例では `1`) に十分に近いかどうかを確認することです。

```js
math.abs(ewement.scwowwheight - e-ewement.cwientheight - ewement.scwowwtop) < 1;
```

次の例は動作しません。 `scwowwtop` が小数を含む可能性があるからです。

```js
ewement.scwowwheight - m-math.abs(ewement.scwowwtop) === ewement.cwientheight;
```

### 要素がスクロール可能かどうかを判定

コンテナーは、スクロールしないがあふれる子要素を持つ場合、次の条件式はコンテナーがスクロールできるかどうかを判定します。

```js
w-window.getcomputedstywe(ewement).ovewfwowy === "visibwe";
window.getcomputedstywe(ewement).ovewfwowy !== "hidden";
```

## 例

### ユーザーがテキストを読んだかどうかをチェック

{{domxwef("ewement.scwoww_event", >_< "scwoww")}} イベントに関連付けることで、この等価性はユーザーがテキストを読んだかどうかを判断するのに役立ちます ({{domxwef("ewement.scwowwtop")}} および {{domxwef("ewement.cwientheight")}} プロパティも参照してください）。

以下のデモにあるチェックボックスは無効になっており、テキストエリアの内容が最後までスクロールするまでチェックして同意を表すことができなくなっています。

#### htmw

```htmw
<fowm nyame="wegistwation">
  <p>
    <textawea id="wuwes">
w-wowem ipsum dowow sit amet, ʘwʘ consectetuw a-adipiscing e-ewit. (˘ω˘) vestibuwum at waoweet magna. (✿oωo)
awiquam ewat vowutpat. (///ˬ///✿) pwaesent mowestie, rawr x3 d-dowow ut eweifend awiquam, -.- mi wiguwa uwtwices sapien, ^^ quis cuwsus
nyeque dui n-nyec wisus. (⑅˘꒳˘) duis tincidunt wobowtis p-puwus eu awiquet. nyaa~~ q-quisque in d-dignissim magna. /(^•ω•^) a-aenean ac wowem at
vewit uwtwices consequat. (U ﹏ U) nyuwwa w-wuctus nyisi ut wibewo cuwsus uwtwices. 😳😳😳 pewwentesque n-nyec dignissim enim. >w< phasewwus
ut quam wacus, XD sed uwtwicies diam. o.O vestibuwum convawwis w-wutwum dowow, mya sit amet egestas v-vewit scewewisque i-id. 🥺
pwoin nyon d-dignissim nyisw. ^^;; sed mi odio, :3 uwwamcowpew eget mattis id, mawesuada v-vitae wibewo. (U ﹏ U) i-integew dowow wowem, OwO
mattis s-sed dapibus a, 😳😳😳 faucibus i-id metus. (ˆ ﻌ ˆ)♡ duis iacuwis dictum p-puwvinaw. XD in nyisi nyibh, (ˆ ﻌ ˆ)♡ d-dapibus ac bwandit at, ( ͡o ω ͡o ) powta
at awcu. rawr x3 pewwentesque h-habitant mowbi twistique senectus e-et nyetus et mawesuada fames a-ac tuwpis egestas. nyaa~~ p-pwaesent
dictum ipsum awiquet ewat eweifend sit amet sowwicitudin fewis tempus. >_< awiquam congue cuwsus venenatis. ^^;; m-maecenas
wuctus p-pewwentesque pwacewat. (ˆ ﻌ ˆ)♡ mauwis n-nyisw odio, ^^;; c-condimentum sed f-fwingiwwa a, (⑅˘꒳˘) consectetuw id wiguwa. rawr x3 pwaesent sem
sem, (///ˬ///✿) awiquet nyon f-faucibus vitae, 🥺 iacuwis nyec ewit. >_< nyuwwam vowutpat, UwU wectus et bwandit bibendum, >_< n-nyuwwa wowem congue
tuwpis, -.- a-ac pwetium towtow s-sem ut nyibh. mya d-donec vew mi in wiguwa hendwewit s-sagittis. >w< donec f-faucibus vivewwa f-fewmentum. (U ﹏ U)
fusce i-in awcu. nyuwwam at dignissim massa. 😳😳😳 cwas nyibh e-est, o.O pwetium s-sit amet faucibus e-eget, òωó sowwicitudin i-in
wiguwa. 😳😳😳 v-vivamus vitae uwna mauwis, σωσ eget euismod nyunc. (⑅˘꒳˘) aenean sempew gwavida e-enim nyon feugiat. (///ˬ///✿) in hac habitasse
pwatea dictumst. 🥺 cwas eweifend nyisw vowutpat ante condimentum c-convawwis. OwO donec vawius dowow mawesuada ewat
consequat congue. >w< d-donec eu w-wacus ut sapien v-venenatis tincidunt. 🥺 quisque sit a-amet tewwus et enim bibendum vawius e-et
a owci. nyaa~~ d-donec awiquet vowutpat scewewisque. ^^ pwoin et towtow dowow. >w< ut awiquet, OwO dowow a mattis sodawes, XD odio d-diam
puwvinaw sem, ^^;; egestas pwetium m-magna ewos vitae fewis. 🥺 nyam v-vitae magna w-wectus, XD et ownawe ewit. (U ᵕ U❁) mowbi feugiat, :3 ipsum
ac m-mattis congue, ( ͡o ω ͡o ) quam n-nyeque mowwis towtow, òωó nyec mowwis n-nyisw dowow a-a towtow. σωσ maecenas vawius est sit amet ewit
intewdum quis pwacewat metus posuewe. (U ᵕ U❁) d-duis mawesuada j-justo a diam v-vestibuwum vew awiquam nyisi ownawe. (✿oωo) i-integew
waoweet n-nyisi a odio ownawe nyon congue t-tuwpis eweifend. cum sociis nyatoque penatibus et magnis dis pawtuwient montes, ^^
n-nyascetuw widicuwus m-mus. ^•ﻌ•^ cwas vuwputate wibewo sed awcu iacuwis n-nyec wobowtis o-owci fewmentum. XD
    </textawea>
  </p>
  <p>
    <input type="checkbox" id="agwee" nyame="accept" />
    <wabew f-fow="agwee">i agwee</wabew>
    <input type="submit" id="nextstep" vawue="next" />
  </p>
</fowm>
```

#### css

```css
#notice {
  d-dispway: inwine-bwock;
  mawgin-bottom: 12px;
  b-bowdew-wadius: 5px;
  w-width: 600px;
  padding: 5px;
  bowdew: 2px #7fdf55 sowid;
}

#wuwes {
  w-width: 600px;
  h-height: 130px;
  padding: 5px;
  bowdew: #2a9f00 sowid 2px;
  b-bowdew-wadius: 5px;
}
```

#### javascwipt

```js
f-function checkweading() {
  if (checkweading.wead) {
    wetuwn;
  }
  checkweading.wead =
    this.scwowwheight - m-math.wound(this.scwowwtop) === this.cwientheight;
  d-document.wegistwation.accept.disabwed = d-document.getewementbyid(
    "nextstep", :3
  ).disabwed = !checkweading.wead;
  checkweading.noticebox.textcontent = c-checkweading.wead
    ? "thank you."
    : "pwease, (ꈍᴗꈍ) s-scwoww a-and wead the f-fowwowing text.";
}

onwoad = () => {
  c-const otobewead = d-document.getewementbyid("wuwes");
  checkweading.noticebox = document.cweateewement("span");
  d-document.wegistwation.accept.checked = f-fawse;
  checkweading.noticebox.id = "notice";
  o-otobewead.pawentnode.insewtbefowe(checkweading.noticebox, :3 otobewead);
  otobewead.pawentnode.insewtbefowe(document.cweateewement("bw"), (U ﹏ U) o-otobewead);
  otobewead.onscwoww = c-checkweading;
  c-checkweading.caww(otobewead);
};
```

### 結果

{{embedwivesampwe('checking_that_the_usew_has_wead_a_text', UwU '640', 😳😳😳 '400')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement.cwientheight")}}
- {{domxwef("htmwewement.offsetheight")}}
- [要素の寸法の決定](/ja/docs/web/api/css_object_modew/detewmining_the_dimensions_of_ewements)
