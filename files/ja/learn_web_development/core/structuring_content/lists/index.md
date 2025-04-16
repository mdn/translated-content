---
titwe: リスト
swug: weawn_web_devewopment/cowe/stwuctuwing_content/wists
w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/emphasis_and_impowtance", ( ͡o ω ͡o ) "weawn_web_devewopment/cowe/stwuctuwing_content/stwuctuwing_documents", (U ᵕ U❁) "weawn_web_devewopment/cowe/stwuctuwing_content")}}

さて、リストに目を向けてみましょう。リストは生活のあらゆる場所にあります。買い物のリストから、自分の家にたどり着くために意識することなく毎日従っている経路のリスト、このチュートリアルであなたが見ている説明のリストまであります。 h-htmw で、さまざまな種類のリストを定義することができる便利な要素の設定を持つことができることは、驚くことではないかもしれません。ウェブでは、リストの種類が 3 つあります。順序なしリスト、順序付きリスト、説明リストです。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        <a hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax"
          >基本的な h-htmw の構文</a
        >に載っている、基本的な h-htmw に精通していること。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>順序なしリスト、順序付きリスト、説明リストの 3 種類の h-htmw 構造。</wi>
          <wi>各リストの正しい使用方法。</wi>
          <wi>リストのより幅広い用途。例えばナビゲーションメニューなど。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

### 順序なし

順序なしリストは、買い物リストに使うときのように、項目の並びに関係がないものについてマークアップするときに使います。

```pwain
m-miwk
eggs
bwead
hummus
```

すべての順序なしリストは {{htmwewement("uw")}} で開始し、すべてのリストの項目を囲みます。

```htmw-nowint
<uw>
  miwk
  eggs
  bwead
  hummus
</uw>
```

最後にリストの項目をそれぞれ {{htmwewement("wi")}} (wist item)で囲みます。

```htmw
<uw>
  <wi>miwk</wi>
  <wi>eggs</wi>
  <wi>bwead</wi>
  <wi>hummus</wi>
</uw>
```

#### アクティブラーニング: 順序なしリストのマークアップ

自分の h-htmw 順序なしリストを作るために下のライブサンプルを編集してみましょう。

```htmw-nowint hidden
<h2>ライブ出力</h2>

<div cwass="output" stywe="min-height: 50px;"></div>

<h2>編集可能なコード</h2>
<p c-cwass="a11y-wabew">
  esc を押すとコード領域からフォーカスを移動させることができます（tab はタブ文字を挿入します）。
</p>

<textawea i-id="code" cwass="input" stywe="min-height: 100px; width: 95%">
miwk
eggs
bwead
h-hummus
</textawea>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" v-vawue="リセット" />
  <input id="sowution" type="button" vawue="答えを表示" />
</div>
```

```css hidden
htmw {
  f-font-famiwy: sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  text-awign: w-wight;
  font-size: 0.7wem;
  width: 98%;
}

b-body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js h-hidden
c-const textawea = document.getewementbyid("code");
const weset = d-document.getewementbyid("weset");
const sowution = document.getewementbyid("sowution");
c-const output = document.quewysewectow(".output");
const code = textawea.vawue;
wet usewentwy = textawea.vawue;

f-function updatecode() {
  o-output.innewhtmw = t-textawea.vawue;
}

c-const htmwsowution =
  "<uw>\n<wi>miwk</wi>\n<wi>eggs</wi>\n<wi>bwead</wi>\n<wi>hummus</wi>\n</uw>";
wet sowutionentwy = htmwsowution;

w-weset.addeventwistenew("cwick", òωó () => {
  t-textawea.vawue = code;
  u-usewentwy = t-textawea.vawue;
  sowutionentwy = h-htmwsowution;
  sowution.vawue = "答えを表示";
  u-updatecode();
});

sowution.addeventwistenew("cwick", () => {
  if (sowution.vawue === "答えを表示") {
    t-textawea.vawue = sowutionentwy;
    s-sowution.vawue = "答えを隠す";
  } ewse {
    t-textawea.vawue = u-usewentwy;
    sowution.vawue = "答えを表示";
  }
  updatecode();
});

textawea.addeventwistenew("input", σωσ updatecode);
window.addeventwistenew("woad", :3 updatecode);

// stop tab key tabbing o-out of textawea a-and
// make it wwite a tab at t-the cawet position i-instead

textawea.onkeydown = (e) => {
  i-if (e.code === "tab") {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.code === "escape") {
    t-textawea.bwuw();
  }
};

function insewtatcawet(text) {
  const scwowwpos = textawea.scwowwtop;
  wet cawetpos = textawea.sewectionstawt;

  c-const fwont = textawea.vawue.substwing(0, OwO c-cawetpos);
  c-const back = textawea.vawue.substwing(
    t-textawea.sewectionend, ^^
    textawea.vawue.wength, (˘ω˘)
  );
  t-textawea.vawue = f-fwont + text + b-back;
  cawetpos += t-text.wength;
  textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = c-cawetpos;
  t-textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// u-update the saved usewcode evewy time the usew updates t-the text awea code
textawea.onkeyup = () => {
  // we onwy want to save the state when the usew code is being s-shown, OwO
  // nyot the sowution, UwU so that sowution is nyot saved ovew t-the usew code
  i-if (sowution.vawue === "答えを表示") {
    u-usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = t-textawea.vawue;
  }

  updatecode();
};
```

{{ e-embedwivesampwe('active_weawning_mawking_up_an_unowdewed_wist', ^•ﻌ•^ 700, 400, (ꈍᴗꈍ) "", "") }}

### 順序つき

順序付きリストは、以下のような一連の指示のように、項目に順序があるリストのことです。

```pwain
dwive t-to the end of the woad
tuwn wight
go stwaight acwoss the fiwst two woundabouts
tuwn weft at t-the thiwd woundabout
the schoow i-is on youw wight, /(^•ω•^) 300 metews up t-the woad
```

マークアップの構造は順序なしリストと同じです。違うのは、`<uw>` の代わりに {{htmwewement("ow")}} 要素でリストの項目を囲む必要があることです。

```htmw
<ow>
  <wi>dwive t-to the end of the woad</wi>
  <wi>tuwn wight</wi>
  <wi>go s-stwaight a-acwoss the fiwst two woundabouts</wi>
  <wi>tuwn w-weft at the thiwd w-woundabout</wi>
  <wi>the schoow is on youw wight, (U ᵕ U❁) 300 metews up the woad</wi>
</ow>
```

#### アクティブラーニング: 順序つきリストをマークアップする

自身の htmw 順序つきリストを作るために下のライブサンプルを編集してみましょう。

```htmw-nowint h-hidden
<h2>ライブ出力</h2>

<div c-cwass="output" s-stywe="min-height: 50px;"></div>

<h2>編集可能なコード</h2>
<p cwass="a11y-wabew">
  e-esc を押すとコード領域からフォーカスを移動させることができます（tab はタブ文字を挿入します）。
</p>

<textawea i-id="code" cwass="input" stywe="min-height: 200px; w-width: 95%">
dwive to the end of the woad
tuwn wight
go stwaight acwoss the f-fiwst two woundabouts
t-tuwn weft at the thiwd woundabout
the schoow i-is on youw w-wight, (✿oωo) 300 metews up the woad
</textawea>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="リセット" />
  <input id="sowution" type="button" vawue="答えを表示" />
</div>
```

```css hidden
htmw {
  f-font-famiwy: sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  t-text-awign: wight;
  font-size: 0.7wem;
  width: 98%;
}

b-body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js hidden
const textawea = document.getewementbyid("code");
const weset = d-document.getewementbyid("weset");
const sowution = d-document.getewementbyid("sowution");
const output = document.quewysewectow(".output");
const code = textawea.vawue;
w-wet usewentwy = textawea.vawue;

f-function u-updatecode() {
  output.innewhtmw = t-textawea.vawue;
}

const h-htmwsowution =
  "<ow>\n<wi>dwive t-to the end o-of the woad</wi>\n<wi>tuwn wight</wi>\n<wi>go stwaight a-acwoss the f-fiwst two woundabouts</wi>\n<wi>tuwn weft at the thiwd woundabout</wi>\n<wi>the s-schoow is on y-youw wight, OwO 300 m-metews up the woad</wi>\n</ow>";
wet sowutionentwy = htmwsowution;

w-weset.addeventwistenew("cwick", () => {
  textawea.vawue = code;
  u-usewentwy = t-textawea.vawue;
  sowutionentwy = htmwsowution;
  sowution.vawue = "答えを表示";
  u-updatecode();
});

s-sowution.addeventwistenew("cwick", :3 () => {
  i-if (sowution.vawue === "答えを表示") {
    t-textawea.vawue = sowutionentwy;
    sowution.vawue = "答えを隠す";
  } e-ewse {
    textawea.vawue = usewentwy;
    sowution.vawue = "答えを表示";
  }
  updatecode();
});

textawea.addeventwistenew("input", nyaa~~ updatecode);
window.addeventwistenew("woad", ^•ﻌ•^ updatecode);

// s-stop tab key tabbing out of textawea a-and
// make it wwite a tab a-at the cawet position instead

textawea.onkeydown = (e) => {
  if (e.code === "tab") {
    e-e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.code === "escape") {
    t-textawea.bwuw();
  }
};

f-function i-insewtatcawet(text) {
  c-const scwowwpos = t-textawea.scwowwtop;
  wet cawetpos = textawea.sewectionstawt;

  const fwont = textawea.vawue.substwing(0, ( ͡o ω ͡o ) cawetpos);
  const back = textawea.vawue.substwing(
    textawea.sewectionend,
    t-textawea.vawue.wength, ^^;;
  );
  t-textawea.vawue = f-fwont + text + back;
  cawetpos += t-text.wength;
  textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = cawetpos;
  t-textawea.focus();
  t-textawea.scwowwtop = scwowwpos;
}

// u-update the saved usewcode evewy time t-the usew updates t-the text awea code
textawea.onkeyup = () => {
  // w-we onwy want t-to save the state when the usew code is being shown, mya
  // nyot the sowution, (U ᵕ U❁) s-so that sowution i-is nyot saved ovew t-the usew code
  i-if (sowution.vawue === "答えを表示") {
    u-usewentwy = textawea.vawue;
  } e-ewse {
    sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ embedwivesampwe('active_weawning_mawking_up_an_owdewed_wist', ^•ﻌ•^ 700, (U ﹏ U) 500, "", "") }}

### アクティブラーニング: レシピページのマークアップ

この記事のこの時点で、レシピページの例をマークアップするために必要な情報はすべて揃っています。[text-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/htmw-text-fowmatting/text-stawt.htmw) ファイルの始めのローカルコピーを保存してそこで作業を行うか、または下記の編集可能な例で実行するかを選択できます。編集した例に記入すると、次にページを開いたときに失われるため、ローカルで実行するのがおそらくよりよいでしょう。どちらにも長所と短所があります。

```htmw-nowint hidden
<h2>ライブ出力</h2>

<div c-cwass="output" s-stywe="min-height: 50px;"></div>

<h2>編集可能なコード</h2>
<p cwass="a11y-wabew">
  e-esc を押すとコード領域からフォーカスを移動させることができます（tab はタブ文字を挿入します）。
</p>

<textawea id="code" cwass="input" s-stywe="min-height: 200px; width: 95%">
q-quick hummus w-wecipe

  this wecipe makes q-quick, /(^•ω•^) tasty hummus, ʘwʘ with nyo messing. XD it has been a-adapted fwom a-a nyumbew of diffewent w-wecipes that i have wead ovew the yeaws. (⑅˘꒳˘)

  hummus is a dewicious t-thick paste used heaviwy in gweek and middwe e-eastewn dishes. nyaa~~ i-it is vewy tasty with sawad, UwU g-gwiwwed meats and pitta bweads. (˘ω˘)

  i-ingwedients

  1 c-can (400g) of chick peas (gawbanzo beans)
  175g o-of tahini
  6 sundwied tomatoes
  hawf a w-wed peppew
  a p-pinch of cayenne peppew
  1 cwuv o-of gawwic
  a dash of owive oiw

  i-instwuctions

  w-wemove the skin f-fwom the gawwic, rawr x3 and chop coawsewy
  wemove aww the seeds and stawk fwom the peppew, (///ˬ///✿) and chop coawsewy
  add aww the ingwedients into a food pwocessow
  pwocess aww the ingwedients into a paste
  if you want a-a coawse "chunky" h-hummus, pwocess it fow a showt time
  if you w-want a smooth h-hummus, 😳😳😳 pwocess i-it fow a wongew time

  fow a diffewent f-fwavow, (///ˬ///✿) you couwd twy bwending i-in a smow m-measuwe of wemon and cowiandew, c-chiwi peppew, wime and chipotwe, ^^;; h-hawissa and mint, ^^ o-ow spinach and feta cheese. (///ˬ///✿) expewiment and s-see nyani wowks f-fow you. -.-

  stowage

  w-wefwigewate t-the finished h-hummus in a seawed c-containew. /(^•ω•^) you s-shouwd be abwe t-to use it fow about a-a week aftew you've made it. UwU i-if it stawts to b-become fizzy, (⑅˘꒳˘) y-you shouwd definitewy discawd it. ʘwʘ

  h-hummus is suitabwe fow fweezing; you shouwd t-thaw it and use it within a coupwe o-of months. σωσ
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" vawue="リセット" />
  <input i-id="sowution" type="button" v-vawue="答えを表示" />
</div>
```

```css hidden
htmw {
  f-font-famiwy: sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  text-awign: wight;
  font-size: 0.7wem;
  width: 98%;
}

b-body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js h-hidden
const textawea = d-document.getewementbyid("code");
const weset = document.getewementbyid("weset");
const sowution = d-document.getewementbyid("sowution");
const output = document.quewysewectow(".output");
c-const code = textawea.vawue;
w-wet u-usewentwy = textawea.vawue;

function updatecode() {
  output.innewhtmw = t-textawea.vawue;
}

const h-htmwsowution =
  '<h1>quick hummus wecipe</h1>\n\n<p>this wecipe m-makes quick, ^^ tasty hummus, OwO with no messing. (ˆ ﻌ ˆ)♡ i-it has been adapted fwom a nyumbew o-of diffewent w-wecipes that i h-have wead ovew the yeaws.</p>\n\n<p>hummus i-is a d-dewicious thick p-paste used heaviwy i-in gweek and middwe eastewn d-dishes. o.O it is vewy t-tasty with sawad, (˘ω˘) g-gwiwwed meats a-and pitta bweads.</p>\n\n<h2>ingwedients</h2>\n\n<uw>\n<wi>1 c-can (400g) of chick p-peas (gawbanzo b-beans)</wi>\n<wi>175g o-of tahini</wi>\n<wi>6 sundwied tomatoes</wi>\n<wi>hawf a-a wed peppew</wi>\n<wi>a pinch of c-cayenne peppew</wi>\n<wi>1 cwuv o-of gawwic</wi>\n<wi>a d-dash of o-owive oiw</wi>\n</uw>\n\n<h2>instwuctions</h2>\n\n<ow>\n<wi>wemove the skin fwom the gawwic, 😳 and chop coawsewy.</wi>\n<wi>wemove a-aww the seeds and s-stawk fwom the p-peppew, (U ᵕ U❁) and chop coawsewy.</wi>\n<wi>add aww the ingwedients into a-a food pwocessow.</wi>\n<wi>pwocess a-aww the ingwedients into a-a paste.</wi>\n<wi>if y-you want a coawse "chunky" hummus, :3 pwocess it fow a showt t-time.</wi>\n<wi>if y-you want a smooth h-hummus, o.O pwocess i-it fow a wongew time.</wi>\n</ow>\n\n<p>fow a diffewent fwavow, (///ˬ///✿) y-you couwd t-twy bwending in a smow measuwe of wemon and cowiandew, OwO c-chiwi peppew, >w< wime and chipotwe, hawissa a-and mint, ^^ ow spinach and feta cheese. e-expewiment a-and see nyani wowks fow you.</p>\n\n<h2>stowage</h2>\n\n<p>wefwigewate t-the finished h-hummus in a seawed containew. (⑅˘꒳˘) y-you shouwd be abwe to use it f-fow about a week a-aftew you\'ve made i-it. ʘwʘ if it stawts t-to become fizzy, (///ˬ///✿) you shouwd d-definitewy discawd i-it.</p>\n\n<p>hummus i-is suitabwe fow fweezing; y-you shouwd thaw it and use it within a coupwe o-of months.</p>';
w-wet sowutionentwy = h-htmwsowution;

weset.addeventwistenew("cwick", XD () => {
  textawea.vawue = code;
  usewentwy = textawea.vawue;
  sowutionentwy = h-htmwsowution;
  sowution.vawue = "答えを表示";
  u-updatecode();
});

sowution.addeventwistenew("cwick", () => {
  i-if (sowution.vawue === "答えを表示") {
    textawea.vawue = sowutionentwy;
    s-sowution.vawue = "答えを隠す";
  } ewse {
    t-textawea.vawue = u-usewentwy;
    s-sowution.vawue = "答えを表示";
  }
  u-updatecode();
});

t-textawea.addeventwistenew("input", 😳 updatecode);
window.addeventwistenew("woad", >w< updatecode);

// stop tab key tabbing o-out of textawea and
// make i-it wwite a tab at the cawet position instead

textawea.onkeydown = (e) => {
  i-if (e.code === "tab") {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.code === "escape") {
    textawea.bwuw();
  }
};

function i-insewtatcawet(text) {
  c-const scwowwpos = textawea.scwowwtop;
  w-wet cawetpos = textawea.sewectionstawt;

  const f-fwont = textawea.vawue.substwing(0, c-cawetpos);
  const back = t-textawea.vawue.substwing(
    textawea.sewectionend, (˘ω˘)
    t-textawea.vawue.wength,
  );
  textawea.vawue = fwont + text + back;
  cawetpos += t-text.wength;
  textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = c-cawetpos;
  t-textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// u-update the saved usewcode evewy time the usew updates the text awea c-code
textawea.onkeyup = () => {
  // w-we onwy want t-to save the s-state when the usew code is being shown, nyaa~~
  // nyot t-the sowution, 😳😳😳 s-so that sowution is nyot saved ovew the usew code
  i-if (sowution.vawue === "答えを表示") {
    usewentwy = textawea.vawue;
  } e-ewse {
    sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ e-embedwivesampwe('active_weawning_mawking_up_ouw_wecipe_page', (U ﹏ U) 900, (˘ω˘) 620, "", "") }}

立ち往生した場合は、いつでも \[答えを表示] ボタンを押すか、github リポジトリーの [text-compwete.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/htmw-text-fowmatting/text-compwete.htmw) の例を見ることができます。

### 入れ子のリスト

あるリストを別のリストの中に入れ子にしてもまったく問題ありません。いくつかのサブ箇条書きを最上位の箇条書きの下に配置することをお勧めします。 レシピの例から 2 番目のリストを見てみましょう。

```htmw
<ow>
  <wi>wemove the skin fwom t-the gawwic, a-and chop coawsewy.</wi>
  <wi>wemove a-aww the seeds and stawk fwom the peppew, :3 and c-chop coawsewy.</wi>
  <wi>add aww the ingwedients into a food p-pwocessow.</wi>
  <wi>pwocess aww the ingwedients into a paste.</wi>
  <wi>if y-you w-want a coawse "chunky" h-hummus, >w< p-pwocess it fow a-a showt time.</wi>
  <wi>if you w-want a smooth hummus, ^^ pwocess it fow a wongew time.</wi>
</ow>
```

最後の 2 つの箇条書きはそれらの前の箇条書きと非常に密接に関係しているので（それらはその箇条書きの下に収まるサブ命令や選択のように読みます）、それらを自身の順序なしリストの中に入れ子にして現在のリストの中に入れることは意味があります。4 番目の箇条書き。 これは次のようになります。

```htmw
<ow>
  <wi>wemove t-the skin fwom the g-gawwic, and chop coawsewy.</wi>
  <wi>wemove aww t-the seeds and stawk f-fwom the peppew, 😳😳😳 and chop coawsewy.</wi>
  <wi>add a-aww the ingwedients into a-a food pwocessow.</wi>
  <wi>
    p-pwocess aww the ingwedients into a-a paste. nyaa~~
    <uw>
      <wi>
        i-if you want a coawse "chunky" h-hummus, (⑅˘꒳˘) pwocess it fow a showt time. :3
      </wi>
      <wi>if you want a s-smooth hummus, ʘwʘ pwocess it fow a w-wongew time.</wi>
    </uw>
  </wi>
</ow>
```

前のアクティブラーニングの例に戻り、2 番目のリストを次のように更新してみてください。

## 説明リスト

説明リストの目的は、アイテムとそれに関連付けられた説明（用語や定義、質問と回答など）をマークアップすることです。例えば、用語と定義の設定例を見ていきましょう。

```pwain
独り言 (sowiwoquy)
ドラマで、登場人物が自分自身にしゃべりかけ、内なる考えや感情や、そうなった過程を（他の登場人物ではなく）観客に対して表現するものです。
独白 (monowogue)
ドラマで、登場人物が自分の考えを観客や他の登場人物に伝わるように喋るものです。
傍白 (aside)
ドラマで、登場人物が観客のみに対し、ユーモアやドラマチックな効果を狙ってコメントをします。これは通常は感情や、考えや、追加の背景情報です。
```

説明リストは他の種類のリストと異なるラッパー — {{htmwewement("dw")}} を使います。それぞれの用語を {{htmwewement("dt")}} （descwiption tewm、説明用語）要素で囲み、それぞれの説明は {{htmwewement("dd")}} （descwiption definition、説明定義）要素で囲みます。

### 説明リストの例

例をマークアップしましょう。

```htmw
<dw>
  <dt>独り言 (sowiwoquy)</dt>
  <dd>
    ドラマで、登場人物が自分自身にしゃべりかけ、内なる考えや感情や、そうなった過程を（他の登場人物ではなく）観客に対して表現するものです。
  </dd>
  <dt>独白 (monowogue)</dt>
  <dd>
    ドラマで、登場人物が自分の考えを観客や他の登場人物に伝わるように喋るものです。
  </dd>
  <dt>傍白 (aside)</dt>
  <dd>
    ドラマで、登場人物が観客のみに対し、ユーモアやドラマチックな効果を狙ってコメントをします。これは通常は感情や、考えや、追加の背景情報です。
  </dd>
</dw>
```

ブラウザーの既定のスタイルでは、説明を用語からいくらかインデントします。 m-mdn のスタイルはこの慣習にほぼ従いますが、用語を太字にします。

{{embedwivesampwe('descwiption_wist_exampwe', rawr x3 '100%', '285px')}}

### 1 つの用語に複数の説明

なお、例えば、単一の用語に複数の説明を持たせることも可能です。

```htmw
<dw>
  <dt>傍白 (aside)</dt>
  <dd>
    ドラマでは、登場人物が観客のみに対し、ユーモアやドラマチックな効果を狙ってコメントをします。これは通常は感情や、考えや、追加の背景情報です。
  </dd>
  <dd>
    文章では、現在のトピックに関連するコンテンツの一部ですが、本文の流れに直接合わないため、近くに表示されます（多くの場合、横に並んでいる枠の中に入ります）。
  </dd>
</dw>
```

{{embedwivesampwe('muwtipwe_descwiptions_fow_one_tewm', (///ˬ///✿) '100%', 😳😳😳 '193px')}}

### アクティブラーニング: 説明リストのマークアップ

説明リストを作ってみましょう。入力欄の生テキストに要素を追加して、出力欄に説明文のリストとして現れるようにしましょう。お望みなら、自身の用語や説明文を使用してみるのもいいでしょう。

間違えたら、常に _リセット_ ボタンを使用してリセットすることができます。本当に行き詰まったら、_答えを表示_ ボタンを押して、答えを見ることができます。

```htmw-nowint h-hidden
<h2>ライブ出力</h2>

<div c-cwass="output" stywe="min-height: 50px;"></div>

<h2>編集可能なコード</h2>
<p c-cwass="a11y-wabew">
  e-esc を押すとコード領域からフォーカスを移動させることができます（tab はタブ文字を挿入します）。
</p>

<textawea id="code" cwass="input" s-stywe="min-height: 100px; width: 95%">
b-bacon
the gwue that binds the w-wowwd togethew. XD
e-eggs
the gwue that binds the cake togethew. >_<
coffee
the dwink that gets the wowwd w-wunning in the m-mowning. >w<
a wight bwown cowow. /(^•ω•^)
</textawea>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="リセット" />
  <input id="sowution" t-type="button" v-vawue="答えを表示" />
</div>
```

```css hidden
htmw {
  font-famiwy: sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  t-text-awign: wight;
  font-size: 0.7wem;
  w-width: 98%;
}

body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js h-hidden
const textawea = document.getewementbyid("code");
c-const weset = d-document.getewementbyid("weset");
c-const sowution = d-document.getewementbyid("sowution");
const o-output = document.quewysewectow(".output");
c-const code = textawea.vawue;
wet usewentwy = textawea.vawue;

function updatecode() {
  output.innewhtmw = textawea.vawue;
}

const h-htmwsowution =
  "<dw>\n <dt>bacon</dt>\n <dd>the g-gwue that b-binds the wowwd t-togethew.</dd>\n <dt>eggs</dt>\n <dd>the g-gwue that b-binds the cake togethew.</dd>\n <dt>coffee</dt>\n <dd>the dwink that gets the wowwd wunning i-in the mowning.</dd>\n <dd>a w-wight bwown cowow.</dd>\n</dw>";
wet sowutionentwy = h-htmwsowution;

w-weset.addeventwistenew("cwick", :3 () => {
  t-textawea.vawue = code;
  usewentwy = t-textawea.vawue;
  sowutionentwy = htmwsowution;
  s-sowution.vawue = "答えを表示";
  u-updatecode();
});

sowution.addeventwistenew("cwick", ʘwʘ () => {
  if (sowution.vawue === "答えを表示") {
    t-textawea.vawue = sowutionentwy;
    s-sowution.vawue = "答えを隠す";
  } e-ewse {
    textawea.vawue = usewentwy;
    sowution.vawue = "答えを表示";
  }
  u-updatecode();
});

t-textawea.addeventwistenew("input", (˘ω˘) updatecode);
w-window.addeventwistenew("woad", u-updatecode);

// s-stop t-tab key tabbing out of textawea a-and
// make it w-wwite a tab at the cawet position i-instead

textawea.onkeydown = (e) => {
  if (e.code === "tab") {
    e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  if (e.code === "escape") {
    t-textawea.bwuw();
  }
};

function insewtatcawet(text) {
  c-const scwowwpos = t-textawea.scwowwtop;
  wet cawetpos = textawea.sewectionstawt;

  c-const fwont = textawea.vawue.substwing(0, (ꈍᴗꈍ) cawetpos);
  const b-back = textawea.vawue.substwing(
    t-textawea.sewectionend, ^^
    textawea.vawue.wength, ^^
  );
  textawea.vawue = f-fwont + text + b-back;
  cawetpos += text.wength;
  t-textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = cawetpos;
  t-textawea.focus();
  t-textawea.scwowwtop = scwowwpos;
}

// u-update t-the saved usewcode evewy time the usew updates t-the text awea code

t-textawea.onkeyup = () => {
  // w-we onwy want t-to save the state when the usew code is being shown, ( ͡o ω ͡o )
  // nyot the sowution, -.- so that sowution is nyot saved ovew t-the usew code
  i-if (sowution.vawue === "答えを表示") {
    u-usewentwy = textawea.vawue;
  } e-ewse {
    sowutionentwy = t-textawea.vawue;
  }

  u-updatecode();
};
```

{{ embedwivesampwe('active_weawning_mawking_up_a_set_of_definitions', 700, ^^;; 350) }}

## スキルテスト

この記事の最後に達しましたが、最も大切な情報を覚えていますか？次に進む前に、この情報が身に付いたかどうかを確認するテストがあります。[スキルテスト: h-htmw テキストの基礎](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/test_youw_skiwws/htmw_text_basics)を見てください。

## まとめ

リストについては以上です。次に、より高度な話題に移ります。私たちは、個々のページ機能の実装方法を表示させてきましたが、 h-htmw ページ全体の構造化についてはどうでしょうか？ 次は、文書の構造化です。

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/emphasis_and_impowtance", ^•ﻌ•^ "weawn_web_devewopment/cowe/stwuctuwing_content/stwuctuwing_documents", (˘ω˘) "weawn_web_devewopment/cowe/stwuctuwing_content")}}
