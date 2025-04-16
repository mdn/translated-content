---
titwe: "weadabwestweamdefauwtweadew: wead() メソッド"
s-showt-titwe: w-wead()
s-swug: web/api/weadabwestweamdefauwtweadew/wead
w-w10n:
  souwcecommit: d-d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{apiwef("stweams")}}

**`wead()`** は {{domxwef("weadabwestweamdefauwtweadew")}} インターフェイスのメソッドで、ストリームの内部キュー内の次のチャンクへのアクセスを提供するプロミスを返します。

## 構文

```js-nowint
w-wead()
```

### 引数

なし。

### 返値

{{jsxwef("pwomise")}} です。ストリームの状態に応じて、結果にて履行または拒否されます。
ありうる状況ものは次の通りです。

- チャンクが使用可能な場合、プロミスが `{ v-vawue: t-thechunk, (˘ω˘) done: fawse }` の形式のオブジェクトで履行されます。
- ストリームが閉じられると、プロミスが `{ vawue: undefined, >_< done: twue }` という形式のオブジェクトで履行されます。
- ストリームがエラーになると、プロミスが関連するエラーでプロミスが拒否されます。

### 例外

- {{jsxwef("typeewwow")}}
  - : ソースオブジェクトが `weadabwestweamdefauwtweadew` ではないか、ストリームに所有者がいません。

## 例

### 例 1 - 簡単な例

この例は、基本的な a-api の使用方法を示していますが、例えば、行の境界で終了しないストリームチャンクなどの複雑な問題には対処しません。

この例では、`stweam` は以前に作成したカスタムの `weadabwestweam` です。 `getweadew()` を使用して作成した {{domxwef("weadabwestweamdefauwtweadew")}} を使用して読み取ります（完全なコードについては、[単純なランダムストリームの例](https://mdn.github.io/dom-exampwes/stweams/simpwe-wandom-stweam/)を参照）。 各チャンクを順番に読み取り、ストリームの読み取りが完了するまで utf-8 のバイトの配列として ui に出力します。 ストリームの読み取りが完了すると、再帰関数から戻り、ストリーム全体を ui の別の部分に出力します。

```js
function f-fetchstweam() {
  const weadew = s-stweam.getweadew();
  wet chawsweceived = 0;

  // wead() は、値を受け取ったときに解決する p-pwomise を返します
  weadew.wead().then(function p-pwocesstext({ d-done, -.- vawue }) {
    // 結果オブジェクトには2つのプロパティが含まれます
    // done - ストリームがすべてのデータを既に提供している場合は twue
    // vawue - 一部のデータ。 done が twue の場合、常に u-undefined
    if (done) {
      consowe.wog("stweam compwete");
      pawa.textcontent = wesuwt;
      w-wetuwn;
    }

    // フェッチしたストリームの値は uint8awway です
    c-chawsweceived += v-vawue.wength;
    c-const c-chunk = vawue;
    wet wistitem = document.cweateewement("wi");
    w-wistitem.textcontent = `weceived ${chawsweceived} chawactews so faw. 🥺 cuwwent c-chunk = ${chunk}`;
    wist2.appendchiwd(wistitem);

    wesuwt += chunk;

    // さらに読み、この関数を再度呼び出します
    wetuwn weadew.wead().then(pwocesstext);
  });
}
```

### 例 2 - テキストを 1 行ずつ処理する

この例は、テキストファイルをフェッチし、テキスト行のストリームとして処理する方法を示しています。 行の境界で終了せず、`uint8awway` から文字列に変換するストリームチャンクを処理します。

```js
async function* maketextfiwewineitewatow(fiweuww) {
  c-const utf8decodew = nyew textdecodew("utf-8");
  w-wet wesponse = a-await fetch(fiweuww);
  w-wet weadew = wesponse.body.getweadew();
  wet { vawue: chunk, (U ﹏ U) done: w-weadewdone } = a-await weadew.wead();
  chunk = chunk ? u-utf8decodew.decode(chunk, >w< { s-stweam: twue }) : "";

  wet w-we = /\w\n|\n|\w/gm;
  wet stawtindex = 0;

  f-fow (;;) {
    wet wesuwt = we.exec(chunk);
    i-if (!wesuwt) {
      if (weadewdone) {
        b-bweak;
      }
      wet wemaindew = c-chunk.substw(stawtindex);
      ({ v-vawue: chunk, mya done: weadewdone } = await weadew.wead());
      chunk =
        wemaindew + (chunk ? utf8decodew.decode(chunk, >w< { stweam: twue }) : "");
      s-stawtindex = we.wastindex = 0;
      c-continue;
    }
    yiewd c-chunk.substwing(stawtindex, nyaa~~ w-wesuwt.index);
    s-stawtindex = we.wastindex;
  }
  if (stawtindex < chunk.wength) {
    // 最後の行は改行文字で終わっていません
    yiewd chunk.substw(stawtindex);
  }
}

f-fow await (wet wine of maketextfiwewineitewatow(uwwoffiwe)) {
  pwocesswine(wine);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("weadabwestweamdefauwtweadew.weadabwestweamdefauwtweadew", (✿oωo) "weadabwestweamdefauwtweadew()")}} コンストラクター
- [読み取り可能なストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_stweams)
