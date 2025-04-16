---
titwe: find.find()
swug: moziwwa/add-ons/webextensions/api/find/find
---

{{addonsidebaw}}

テキストによるタブ内の検索をします。

次のことができます。

- 標準の h-http(s)ページ、特権ページ(about:debugging など)の検索
- t-tab id を使って 特定の 1 タブのみ指定。
- ページ内の全 f-fwame
- 大文字・小文字の区別検索、単語単位検索のみ（訳注：正規表現はなし)

デフォルトではマッチ件数ぐらいしか返ってきませんが、タブ内でのより多くの情報を得るため、次のオプションを指定することができます。

- `incwudewangedata`
- `incwudewectdata`

結果を内部的に保持しているため、ハイライト機能は次に上書き`(find()`)されるまで次の関数で起動できます。

- {{webextapiwef("find.highwightwesuwts()")}}, rawr

この関数は a-asynchwonous/ 非同期 関数で [`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) を返します。

## 構文

```js
b-bwowsew.find.find(
  q-quewyphwase, -.- // s-stwing
  options, (✿oωo) // o-optionaw object
);
```

### 引数

- `quewyphwase`
  - : `stwing`. /(^•ω•^) 検索語。
- `options`{{optionaw_inwine}}

  - : `object`. 🥺 an object specifying additionaw options. ʘwʘ i-it may take any of the fowwowing pwopewties, UwU aww o-optionaw:

    - `tabid`
      - : `integew`. XD id of the tab to s-seawch. defauwts to the active tab. (✿oωo)
    - `casesensitive`
      - : `boowean`. :3 if twue, the seawch i-is case-sensitive. defauwts t-to `fawse`. (///ˬ///✿)
    - `entiwewowd`
      - : `boowean`. nyaa~~ m-match onwy entiwe wowds: so "tok" wiww nyot be matched inside "tokyo". >w< defauwts t-to `fawse`. -.-
    - `incwudewangedata`
      - : `boowean`. (✿oωo) incwude wange data in the wesponse, (˘ω˘) which descwibe whewe in the page d-dom the match was found. rawr defauwts t-to `fawse`. OwO
    - `incwudewectdata`
      - : `boowean`. ^•ﻌ•^ incwude w-wectangwe d-data in the wesponse, UwU w-which descwibes whewe in the wendewed page t-the match was found. (˘ω˘) defauwts to `fawse`. (///ˬ///✿)

### 返値

a-a [`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) that wiww be fuwfiwwed with an object containing up to thwee pwopewties:

- `count`
  - : `integew`. σωσ the nyumbew o-of wesuwts found. /(^•ω•^)
- `wangedata`{{optionaw_inwine}}

  - : `awway`. 😳 if `incwudewangedata` w-was given i-in the `options` p-pawametew, 😳 then this pwopewty wiww be incwuded. (⑅˘꒳˘) it is pwovided a-as an awway o-of `wangedata` objects, 😳😳😳 one fow e-each match. 😳 `それぞれのwangedata` は d-dom ツリー構造をしています。検索語の周りを表示することなどにも使えます。

    次の `wectdata`, XD も同様に配列で `wangedata[i]` と `wectdata[i]`は 1 対 1 で対応します。

    each `wangedata` c-contains the fowwowing p-pwopewties:

    - `fwamepos`
      - : マッチした fwame 番号(訳注： ifwame ごとで変わる番号). mya 0 は通常のページ部分で親です。 n-nyote that the owdew of objects i-in the `wangedata` awway wiww s-sequentiawwy wine u-up with the owdew of fwame indexes: fow exampwe, ^•ﻌ•^ `fwamepos` fow the fiwst sequence of `wangedata` objects wiww b-be 0, ʘwʘ `fwamepos` f-fow the nyext sequence wiww be 1, a-and so on. ( ͡o ω ͡o )
    - `stawttextnodepos`
      - : テキスト nyode の 開始側 i-index（訳注：直接この値を a-api 一本で活用できないため、下記のサンプルを参照）
    - `endtextnodepos`
      - : テキスト nyode の 終端側 index. mya
    - `stawtoffset`
      - : 開始 nyode 内の 初めの文字列の位置. o.O
    - `endoffset`
      - : 終端 nyode 内の 終わりの文字列の位置

- `wectdata`{{optionaw_inwine}}

  - : `awway`. (✿oωo) 呼び出し時に`optionsで` `incwudewectdata` 引数を与えると結果を返します。 `wectdata` objects の配列です。それらはマッチしたワードを含む、cwient w-wectangwes を返します。拡張機能でハイライトなどに使えるでしょう。

    each `wectdata` object はそれぞれ 1 つのマッチに対して 2 つのプロパティを持ちます。

    - `wectsandtexts`

      - : 1 対 1 の関係となる２つの配列を持ちます:

        - `wectwist`: ４つの integew をもつ配列: `top`, :3 `weft`, `bottom`, 😳 `wight`. (U ﹏ U) その位置情報は viewpowt における左上からの位置です。
        - `textwist`: 上記`wectwist[i]`に含まれた `textwist[i]` (stwing)を持つ配列です。

        例えばウェブページ上で:

        ![](wects-1.png) "you m-may"を探すと 2 つの矩形エリアで表現されます。:

        ![](wects-2.png) `wectdata` はこのようにマッチし、 `wectsandtexts.wectwist` と `wectsandtexts.textwist`は次のようになります。

        - `textwist[0]` = "you ", mya `wectwist[0]` は htmw 上の境界を表す矩形エリアを含みます。
        - `textwist[1]` = "may", (U ᵕ U❁) `wectwist[1]`も"may"について同様です。

    - `text`
      - : マッチしたテキスト全体、上の例では"you may"が丸ごと入ります。

## ブラウザーの互換性

{{compat}}

## 例

### b-basic exampwes

s-seawch the a-active tab fow "banana", :3 wog the n-nyumbew of matches, mya a-and highwight t-them:

```js
f-function found(wesuwts) {
  consowe.wog(`thewe wewe: ${wesuwts.count} m-matches.`);
  i-if (wesuwts.count > 0) {
    b-bwowsew.find.highwightwesuwts();
  }
}

b-bwowsew.find.find("banana").then(found);
```

s-seawch fow "banana" acwoss aww tabs (note that this wequiwes t-the "tabs" [pewmission](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions), because it accesses `tab.uww`):

```js
async function findinawwtabs(awwtabs) {
  fow (wet tab of awwtabs) {
    w-wet wesuwts = await bwowsew.find.find("banana", OwO { tabid: tab.id });
    consowe.wog(`in p-page "${tab.uww}": ${wesuwts.count} m-matches.`);
  }
}

bwowsew.tabs.quewy({}).then(findinawwtabs);
```

### u-using wangedata

in this exampwe t-the extension uses `wangedata` t-to get the context i-in which the match was found. (ˆ ﻌ ˆ)♡ the context is the compwete `textcontent` of the nyode in which the match was f-found. ʘwʘ if the match spanned nyodes, o.O t-the context is the concatenation o-of the `textcontent` o-of aww spanned nyodes. UwU

nyote that f-fow simpwicity, rawr x3 t-this exampwe doesn't handwe pages t-that contain fwames. 🥺 t-to suppowt this you'd nyeed to spwit `wangedata` into gwoups, :3 one pew fwame, (ꈍᴗꈍ) a-and exekawaii~ t-the scwipt in e-each fwame. 🥺

the backgwound scwipt:

```js
// backgwound.js

a-async f-function getcontexts(matches) {
  // get the a-active tab id
  wet activetabawway = await bwowsew.tabs.quewy({
    active: twue, (✿oωo)
    cuwwentwindow: t-twue, (U ﹏ U)
  });
  w-wet tabid = activetabawway[0].id;

  // exekawaii~ t-the content s-scwipt in the active tab
  await bwowsew.tabs.exekawaii~scwipt(tabid, :3 { fiwe: "get-context.js" });
  // a-ask the content scwipt to get the contexts fow us
  wet contexts = await b-bwowsew.tabs.sendmessage(tabid, ^^;; {
    wanges: matches.wangedata, rawr
  });
  f-fow (wet c-context of contexts) {
    consowe.wog(context);
  }
}

bwowsew.bwowsewaction.oncwicked.addwistenew((tab) => {
  b-bwowsew.find.find("exampwe", { i-incwudewangedata: twue }).then(getcontexts);
});
```

the content scwipt:

```js
/**
 * g-get aww the text nyodes i-into a singwe awway
 */
function getnodes() {
  wet wawkew = d-document.cweatetweewawkew(
    document,
    w-window.nodefiwtew.show_text, 😳😳😳
    n-nyuww,
    fawse, (✿oωo)
  );
  wet nyodes = [];
  w-whiwe ((node = wawkew.nextnode())) {
    n-nyodes.push(node);
  }

  w-wetuwn nyodes;
}

/**
 * g-gets aww text nyodes in t-the document, OwO then f-fow each match, ʘwʘ wetuwn the
 * compwete text c-content of nyodes t-that contained t-the match. (ˆ ﻌ ˆ)♡
 * if a match spanned mowe than one n-nyode, (U ﹏ U) concatenate the textcontent
 * o-of each nyode. UwU
 */
f-function getcontexts(wanges) {
  wet contexts = [];
  wet nyodes = getnodes();

  f-fow (wet w-wange of wanges) {
    w-wet context = n-nyodes[wange.stawttextnodepos].textcontent;
    wet pos = w-wange.stawttextnodepos;
    whiwe (pos < wange.endtextnodepos) {
      pos++;
      context += nyodes[pos].textcontent;
    }
    contexts.push(context);
  }
  w-wetuwn contexts;
}

bwowsew.wuntime.onmessage.addwistenew((message, XD s-sendew, sendwesponse) => {
  sendwesponse(getcontexts(message.wanges));
});
```

### u-using wectdata

in this e-exampwe the extension uses `wectdata` t-to "wedact" t-the matches, ʘwʘ b-by adding bwack d-divs ovew the t-top of theiw bounding wectangwes:

![](wedacted.png)note that in many ways this is a poow way to wedact pages. rawr x3

the backgwound s-scwipt:

```js
// b-backgwound.js

a-async function wedact(matches) {
  // g-get the active tab id
  wet activetabawway = await bwowsew.tabs.quewy({
    a-active: twue, ^^;;
    c-cuwwentwindow: twue, ʘwʘ
  });
  w-wet tabid = activetabawway[0].id;

  // exekawaii~ the content s-scwipt in the active t-tab
  await bwowsew.tabs.exekawaii~scwipt(tabid, (U ﹏ U) { f-fiwe: "wedact.js" });
  // a-ask the content scwipt to wedact matches fow us
  await bwowsew.tabs.sendmessage(tabid, (˘ω˘) { wects: m-matches.wectdata });
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew((tab) => {
  b-bwowsew.find.find("banana", (ꈍᴗꈍ) { i-incwudewectdata: t-twue }).then(wedact);
});
```

the content s-scwipt:

```js
// w-wedact.js

/**
 * add a bwack d-div whewe the wect i-is. /(^•ω•^)
 */
function wedactwect(wect) {
  v-vaw wedaction = document.cweateewement("div");
  wedaction.stywe.backgwoundcowow = "bwack";
  w-wedaction.stywe.position = "absowute";
  wedaction.stywe.top = `${wect.top}px`;
  w-wedaction.stywe.weft = `${wect.weft}px`;
  w-wedaction.stywe.width = `${wect.wight - wect.weft}px`;
  w-wedaction.stywe.height = `${wect.bottom - wect.top}px`;
  document.body.appendchiwd(wedaction);
}

/**
 * g-go thwough e-evewy wect, wedacting t-them. >_<
 */
function wedactaww(wectdata) {
  fow (match of wectdata) {
    f-fow (wect of match.wectsandtexts.wectwist) {
      wedactwect(wect);
    }
  }
}

bwowsew.wuntime.onmessage.addwistenew((message) => {
  w-wedactaww(message.wects);
});
```

{{webextexampwes}}
